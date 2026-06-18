import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,aU as s3,e as s,r as r$1,aW as Yp,b0 as Qt,H as Il,a1 as ft,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,q as Qx,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,cn as a3,ba as yNe,aq as lx,at as ux,a3 as cNe,aD as Xy,aT as eN,aE as Qy,aA as Sx}from'./main-FCMDZGSJ.js';var de=(()=>{class o{onClick(){alert("Po Button!");}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Button",3,"p-click"]],template:function(a,i){a&1&&(Il(0,"po-button",0),ft("p-click",function(){return i.onClick()}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-basic/sample-po-button-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-basic/sample-po-button-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return o})();var me=(()=>{class o{poDialog=f(Vde);label;kind;icon;size;properties;type;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"fa fa-podcast",value:"fa fa-podcast"}];kindsOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];typeOptions=[{label:"button",value:s3.Button},{label:"submit",value:s3.Submit},{label:"reset",value:s3.Reset}];ngOnInit(){this.restore();}buttonClick(){this.poDialog.alert({title:"PO Button",message:"Hello PO World!!!"});}propertiesChange(r){this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false}),r&&r.forEach(a=>{a==="danger"&&this.properties.includes("danger")&&(this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:true}));});}verifyDisabled(r){let a=[...this.propertiesOptions];r==="tertiary"?(a[2]={value:"danger",label:"Danger",disabled:true},this.propertiesOptions=a):(a[2]={value:"danger",label:"Danger",disabled:false},this.propertiesOptions=a);}restore(){this.label=void 0,this.kind="secondary",this.size="medium",this.icon=void 0,this.type=s3.Button,this.properties=[],this.kindsOptions[2]=s(r$1({},this.kindsOptions[2]),{disabled:false}),this.sizesOptions[0]=s(r$1({},this.sizesOptions[0]),{disabled:false}),this.sizesOptions[1]=s(r$1({},this.sizesOptions[1]),{disabled:false});}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs"]],standalone:false,decls:14,vars:19,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-click","p-disabled","p-icon","p-label","p-loading","p-size","p-danger","p-kind","p-type"],["name","label","p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","kind","p-columns","4","p-label","Kind",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","type","p-columns","4","p-label","Type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let u=Dx();Il(0,"div",1)(1,"po-button",2),ft("p-click",function(){return i.buttonClick()}),og()(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",1)(6,"po-input",3),ww("ngModelChange",function(d){return Xy(u),eN(i.label,d)||(i.label=d),Qy(d)}),og(),QA(),og(),Il(7,"po-checkbox-group",4),ww("ngModelChange",function(d){return Xy(u),eN(i.properties,d)||(i.properties=d),Qy(d)}),ft("p-change",function(d){return i.propertiesChange(d)}),og(),QA(),Il(8,"po-radio-group",5),ww("ngModelChange",function(d){return Xy(u),eN(i.icon,d)||(i.icon=d),Qy(d)}),og(),QA(),Il(9,"po-radio-group",6),ww("ngModelChange",function(d){return Xy(u),eN(i.kind,d)||(i.kind=d),Qy(d)}),ft("p-change",function(d){return i.verifyDisabled(d)}),og(),QA(),Il(10,"po-radio-group",7),ww("ngModelChange",function(d){return Xy(u),eN(i.type,d)||(i.type=d),Qy(d)}),og(),QA(),Il(11,"po-radio-group",8),ww("ngModelChange",function(d){return Xy(u),eN(i.size,d)||(i.size=d),Qy(d)}),ft("p-change",function(d){return i.verifyDisabled(d)}),og(),QA(),Il(12,"div",1)(13,"po-button",9),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(),nw("p-disabled",i.properties.includes("disabled"))("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-size",i.size)("p-danger",i.properties.includes("danger"))("p-kind",i.kind)("p-type",i.type),Lp(5),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),e0(),Lp(),Ew("ngModel",i.kind),nw("p-options",i.kindsOptions),e0(),Lp(),Ew("ngModel",i.type),nw("p-options",i.typeOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizesOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Dde],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-labs/sample-po-button-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-labs/sample-po-button-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return o})();function Pe(o,he){if(o&1){let r=Dx();Il(0,"div",0),zl(1,"po-avatar",2),Il(2,"div",3)(3,"span",4),Qx(4),og(),Il(5,"span",5),Qx(6),og(),Il(7,"span",5),Qx(8),og()()(),Il(9,"div",0)(10,"po-button",6),ft("p-click",function(){Xy(r);let i=Sx();return Qy(i.notification("added","success"))}),og(),Il(11,"po-button",7),ft("p-click",function(){Xy(r);let i=Sx();return Qy(i.notification("ignored","warning"))}),og(),Il(12,"po-button",8),ft("p-click",function(){Xy(r);let i=Sx();return Qy(i.notification("blocked","information"))}),og()();}if(o&2){let r=Sx();Lp(),nw("p-src",r.userAvatar),Lp(3),dg(" ",r.currentFriend.name," "),Lp(2),dg(" ",r.currentFriend.mutualFriends," mutual friends "),Lp(2),dg(" Resides in ",r.currentFriend.reside," ");}}function we(o,he){o&1&&(Il(0,"div",0)(1,"span",9),Qx(2,"Congratulations TOTVS, no more requests!"),og()());}var ue=(()=>{class o{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-icon","fa fa-check-circle","p-label","Confirm",1,"po-md-4",3,"p-click"],["p-icon","fa fa-eye-slash","p-label","Ignore",1,"po-md-4",3,"p-click"],["p-icon","fa fa-ban","p-label","Block",1,"po-md-4",3,"p-click"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"po-widget",1),lx(2,Pe,13,4)(3,we,3,0,"div",0),og()()),a&2&&(Lp(2),ux(i.currentFriend?2:3));},dependencies:[a3,Qt,yNe],encapsulation:2,changeDetection:1})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Social Network"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-social-network/sample-po-button-social-network.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-social-network/sample-po-button-social-network.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-social-network"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-button-doc"]],standalone:false,decls:819,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoButtonType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoButtonModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-button."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoButtonComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O "),Il(15,"code"),Qx(16,"po-button"),og(),Qx(17," permite que o usu\xE1rio execute a\xE7\xF5es predefinidas pelo desenvolvedor."),og(),Il(18,"p"),Qx(19,"Atrav\xE9s dos tipos, \xE9 poss\xEDvel identificar a import\xE2ncia de cada a\xE7\xE3o."),og(),Il(20,"h4"),Qx(21,"Boas pr\xE1ticas"),og(),Il(22,"ul")(23,"li"),Qx(24,"Evite "),Il(25,"code"),Qx(26,"labels"),og(),Qx(27," extensos que quebram o layout do "),Il(28,"code"),Qx(29,"po-button"),og(),Qx(30,", use "),Il(31,"code"),Qx(32,"labels"),og(),Qx(33," diretos, curtos e intuitivos."),og(),Il(34,"li"),Qx(35,"Utilize apenas um "),Il(36,"code"),Qx(37,"po-button"),og(),Qx(38," configurado como "),Il(39,"code"),Qx(40,"primary"),og(),Qx(41," por p\xE1gina."),og(),Il(42,"li"),Qx(43,"Para a\xE7\xF5es irrevers\xEDveis use sempre a propriedade "),Il(44,"code"),Qx(45,"p-danger"),og(),Qx(46,"."),og()(),Il(47,"h4"),Qx(48,"Acessibilidade tratada no componente"),og(),Il(49,"p"),Qx(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(51,"ul")(52,"li"),Qx(53,"Quando em foco, o bot\xE3o \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Il(54,"a",6),Qx(55,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Il(56,"li"),Qx(57,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Il(58,"a",7),Qx(59,"WCAG 2.4.12: Focus Appearance"),og()()(),Il(60,"h4"),Qx(61,"Tokens customiz\xE1veis"),og(),Il(62,"p"),Qx(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(64,"blockquote")(65,"p"),Qx(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(67,"a",8),Qx(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(69,"."),og()(),Il(70,"table")(71,"thead")(72,"tr")(73,"th"),Qx(74,"Propriedade"),og(),Il(75,"th"),Qx(76,"Descri\xE7\xE3o"),og(),Il(77,"th"),Qx(78,"Valor Padr\xE3o"),og()()(),Il(79,"tbody")(80,"tr")(81,"td")(82,"code"),Qx(83,"--font-family"),og()(),Il(84,"td"),Qx(85,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(86,"td")(87,"code"),Qx(88,"var(--font-family-theme)"),og()()(),Il(89,"tr")(90,"td")(91,"code"),Qx(92,"--font-size"),og()(),Il(93,"td"),Qx(94,"Tamanho da fonte"),og(),Il(95,"td")(96,"code"),Qx(97,"var(--font-size-default)"),og()()(),Il(98,"tr")(99,"td")(100,"code"),Qx(101,"--font-weight"),og()(),Il(102,"td"),Qx(103,"Peso da fonte"),og(),Il(104,"td")(105,"code"),Qx(106,"var(--font-weight-bold)"),og()()(),Il(107,"tr")(108,"td")(109,"code"),Qx(110,"--line-height"),og()(),Il(111,"td"),Qx(112,"Tamanho da label"),og(),Il(113,"td")(114,"code"),Qx(115,"var(--line-height-none)"),og()()(),Il(116,"tr")(117,"td")(118,"code"),Qx(119,"--border-radius"),og()(),Il(120,"td"),Qx(121,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(122,"td")(123,"code"),Qx(124,"var(--border-radius-md)"),og()()(),Il(125,"tr")(126,"td")(127,"code"),Qx(128,"--border-width"),og()(),Il(129,"td"),Qx(130,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(131,"td")(132,"code"),Qx(133,"var(--border-width-md)"),og()()(),Il(134,"tr")(135,"td")(136,"code"),Qx(137,"--padding"),og()(),Il(138,"td"),Qx(139,"Preenchimento"),og(),Il(140,"td")(141,"code"),Qx(142,"0 1em"),og()()(),Il(143,"tr")(144,"td")(145,"strong"),Qx(146,"Danger"),og()(),zl(147,"td")(148,"td"),og(),Il(149,"tr")(150,"td")(151,"code"),Qx(152,"--text-color-danger"),og()(),Il(153,"td"),Qx(154,"Cor do texto no estado danger"),og(),Il(155,"td")(156,"code"),Qx(157,"var(--color-neutral-light-00)"),og()()(),Il(158,"tr")(159,"td")(160,"code"),Qx(161,"--color-button-danger"),og()(),Il(162,"td"),Qx(163,"Cor do bot\xE3o no estado danger"),og(),Il(164,"td")(165,"code"),Qx(166,"var(--color-feedback-negative-dark)"),og()()(),Il(167,"tr")(168,"td")(169,"code"),Qx(170,"--color-danger-hover"),og()(),Il(171,"td"),Qx(172,"Cor de hover no estado danger"),og(),Il(173,"td")(174,"code"),Qx(175,"var(--color-feedback-negative-darker)"),og()()(),Il(176,"tr")(177,"td")(178,"code"),Qx(179,"--color-danger-pressed"),og()(),Il(180,"td"),Qx(181,"Cor pressionada no estado danger"),og(),Il(182,"td")(183,"code"),Qx(184,"var(--color-feedback-negative-darkest)"),og()()(),Il(185,"tr")(186,"td")(187,"code"),Qx(188,"--background-danger-hover"),og()(),Il(189,"td"),Qx(190,"Cor de background de hover no estado danger"),og(),Il(191,"td")(192,"code"),Qx(193,"var(--color-feedback-negative-lighter)"),og()()(),Il(194,"tr")(195,"td")(196,"code"),Qx(197,"--border-color-danger-hover"),og()(),Il(198,"td"),Qx(199,"Cor da borda de hover no estado danger"),og(),Il(200,"td")(201,"code"),Qx(202,"var(--color-feedback-negative-darkest)"),og()()(),Il(203,"tr")(204,"td")(205,"code"),Qx(206,"--background-danger-pressed"),og()(),Il(207,"td"),Qx(208,"Cor de background pressionado no estado danger"),og(),Il(209,"td")(210,"code"),Qx(211,"var(--color-feedback-negative-light)"),og()()(),Il(212,"tr")(213,"td")(214,"code"),Qx(215,"--background-color-button-danger"),og(),Qx(216,"\xA0"),og(),Il(217,"td"),Qx(218,"Cor de background do bot\xE3o no estado danger"),og(),Il(219,"td")(220,"code"),Qx(221,"var(--color-transparent)"),og()()(),Il(222,"tr")(223,"td")(224,"strong"),Qx(225,"Default Values"),og()(),zl(226,"td")(227,"td"),og(),Il(228,"tr")(229,"td")(230,"code"),Qx(231,"--text-color"),og()(),Il(232,"td"),Qx(233,"Cor do texto"),og(),Il(234,"td")(235,"code"),Qx(236,"var(--color-neutral-light-00)"),og()()(),Il(237,"tr")(238,"td")(239,"code"),Qx(240,"--color"),og()(),Il(241,"td"),Qx(242,"Cor principal do bot\xE3o"),og(),Il(243,"td")(244,"code"),Qx(245,"var(--color-action-default)"),og()()(),Il(246,"tr")(247,"td")(248,"code"),Qx(249,"--background-color"),og()(),Il(250,"td"),Qx(251,"Cor de background"),og(),Il(252,"td")(253,"code"),Qx(254,"var(--color-transparent)"),og()()(),Il(255,"tr")(256,"td")(257,"code"),Qx(258,"--border-color"),og()(),Il(259,"td"),Qx(260,"Cor da borda"),og(),Il(261,"td")(262,"code"),Qx(263,"var(--color-transparent)"),og()()(),Il(264,"tr")(265,"td")(266,"code"),Qx(267,"--shadow"),og()(),Il(268,"td"),Qx(269,"Cont\xE9m o valor da sombra do elemento"),og(),Il(270,"td")(271,"code"),Qx(272,"var(--shadow-none)"),og()()(),Il(273,"tr")(274,"td")(275,"strong"),Qx(276,"Hover"),og()(),zl(277,"td")(278,"td"),og(),Il(279,"tr")(280,"td")(281,"code"),Qx(282,"--color-hover"),og()(),Il(283,"td"),Qx(284,"Cor principal no estado hover"),og(),Il(285,"td")(286,"code"),Qx(287,"var(--color-action-hover)"),og()()(),Il(288,"tr")(289,"td")(290,"code"),Qx(291,"--background-hover"),og()(),Il(292,"td"),Qx(293,"Cor de background no estado hover"),og(),Il(294,"td")(295,"code"),Qx(296,"var(--color-brand-01-lighter)"),og()()(),Il(297,"tr")(298,"td")(299,"code"),Qx(300,"--border-color-hover"),og()(),Il(301,"td"),Qx(302,"Cor da borda no estado hover"),og(),Il(303,"td")(304,"code"),Qx(305,"var(--color-brand-01-darkest)"),og()()(),Il(306,"tr")(307,"td")(308,"strong"),Qx(309,"Focused"),og()(),zl(310,"td")(311,"td"),og(),Il(312,"tr")(313,"td")(314,"code"),Qx(315,"--outline-color-focused"),og()(),Il(316,"td"),Qx(317,"Cor do outline do estado de focus"),og(),Il(318,"td")(319,"code"),Qx(320,"var(--color-action-focus)"),og()()(),Il(321,"tr")(322,"td")(323,"strong"),Qx(324,"Pressed"),og()(),zl(325,"td")(326,"td"),og(),Il(327,"tr")(328,"td")(329,"code"),Qx(330,"--color-pressed"),og()(),Il(331,"td"),Qx(332,"Cor principal no estado de pressionado"),og(),Il(333,"td")(334,"code"),Qx(335,"var(--color-action-pressed)"),og()()(),Il(336,"tr")(337,"td")(338,"code"),Qx(339,"--background-pressed"),og()(),Il(340,"td"),Qx(341,"Cor de background no estado de pressionado\xA0"),og(),Il(342,"td")(343,"code"),Qx(344,"var(--color-brand-01-light)"),og()()(),Il(345,"tr")(346,"td")(347,"strong"),Qx(348,"Disabled"),og()(),zl(349,"td")(350,"td"),og(),Il(351,"tr")(352,"td")(353,"code"),Qx(354,"--text-color-disabled"),og()(),Il(355,"td"),Qx(356,"Cor do texto no estado disabled"),og(),Il(357,"td")(358,"code"),Qx(359,"var(--color-neutral-dark-70)"),og()()(),Il(360,"tr")(361,"td")(362,"code"),Qx(363,"--color-disabled"),og()(),Il(364,"td"),Qx(365,"Cor principal no estado disabled"),og(),Il(366,"td")(367,"code"),Qx(368,"var(--color-action-disabled)"),og()()(),Il(369,"tr")(370,"td")(371,"code"),Qx(372,"--background-color-disabled"),og()(),Il(373,"td"),Qx(374,"Cor de background no estado disabled"),og(),Il(375,"td")(376,"code"),Qx(377,"var(--color-transparent)"),og()()()()()(),Il(378,"div",9)(379,"h4",10),Qx(380,"Seletor"),og(),Il(381,"pre",11),Qx(382,`<po-button
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
`),og()(),Il(383,"h4",12),Qx(384,"Propriedades"),og(),Il(385,"table",13)(386,"tr",14)(387,"th",15),Qx(388,"Nome"),og(),Il(389,"th",15),Qx(390,"Tipo"),og(),Il(391,"th",15),Qx(392,"Padr\xE3o"),og(),Il(393,"th",15),Qx(394,"Descri\xE7\xE3o"),og()(),Il(395,"tr",16)(396,"td",17)(397,"div",18)(398,"span",19),Qx(399," p-aria-label"),zl(400,"br"),og()()(),Il(401,"td",20)(402,"code",21),Qx(403,"string"),og()(),Il(404,"td",22),Qx(405,"-"),og(),Il(406,"td",23)(407,"em")(408,"strong"),Qx(409,"(opcional)"),og()(),Il(410,"p"),Qx(411,"Define um "),Il(412,"code"),Qx(413,"aria-label"),og(),Qx(414," para o "),Il(415,"code"),Qx(416,"po-button"),og(),Qx(417,"."),og(),Il(418,"p"),Qx(419,"Caso esta propriedade n\xE3o seja informada ser\xE1 considerada a label do bot\xE3o."),og(),Il(420,"blockquote")(421,"p"),Qx(422,"Em caso de bot\xF5es com apenas \xEDcone a atribui\xE7\xE3o de valor \xE0 esta propriedade \xE9 muito importante para acessibilidade."),og()()()(),Il(423,"tr",16)(424,"td",17)(425,"div",24)(426,"span",25),Qx(427," (p-click)"),zl(428,"br"),og()()(),Il(429,"td",20)(430,"code",26),Qx(431,"EventEmitter"),og()(),Il(432,"td",22),Qx(433,"-"),og(),Il(434,"td",23)(435,"p"),Qx(436,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre o "),Il(437,"code"),Qx(438,"po-button"),og(),Qx(439,"."),og()()(),Il(440,"tr",16)(441,"td",17)(442,"div",18)(443,"span",19),Qx(444," p-danger"),zl(445,"br"),og()()(),Il(446,"td",20)(447,"code",27),Qx(448,"boolean"),og()(),Il(449,"td",22),Qx(450,"-"),og(),Il(451,"td",23)(452,"em")(453,"strong"),Qx(454,"(opcional)"),og()(),Il(455,"p"),Qx(456,"Deve ser usado em a\xE7\xF5es irrevers\xEDveis que o usu\xE1rio precisa ter cuidado ao execut\xE1-la, como a exclus\xE3o de um registro."),og(),Il(457,"blockquote")(458,"p"),Qx(459,"A propriedade "),Il(460,"code"),Qx(461,'p-kind="tertiary"'),og(),Qx(462," ser\xE1 inativada ao utilizar esta propriedade."),og()()()(),Il(463,"tr",16)(464,"td",17)(465,"div",18)(466,"span",19),Qx(467," p-disabled"),zl(468,"br"),og()()(),Il(469,"td",20)(470,"code",27),Qx(471,"boolean"),og()(),Il(472,"td",22)(473,"p")(474,"code"),Qx(475,"false"),og()()(),Il(476,"td",23)(477,"em")(478,"strong"),Qx(479,"(opcional)"),og()(),Il(480,"p"),Qx(481,"Desabilita o "),Il(482,"code"),Qx(483,"po-button"),og(),Qx(484," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og()()(),Il(485,"tr",16)(486,"td",17)(487,"div",18)(488,"span",19),Qx(489," p-icon"),zl(490,"br"),og()()(),Il(491,"td",20)(492,"code",21),Qx(493,"string "),og(),Il(494,"code",28),Qx(495," TemplateRef<void>"),og()(),Il(496,"td",22),Qx(497,"-"),og(),Il(498,"td",23)(499,"em")(500,"strong"),Qx(501,"(opcional)"),og()(),Il(502,"p"),Qx(503,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Il(504,"p"),Qx(505,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(506,"a",29),Qx(507,"Biblioteca de \xEDcones"),og(),Qx(508,", conforme exemplo:"),og(),Il(509,"pre")(510,"code"),Qx(511,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),og()(),Il(512,"p"),Qx(513,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(514,"em"),Qx(515,"Font Awesome"),og(),Qx(516,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Il(517,"pre")(518,"code"),Qx(519,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),og()(),Il(520,"p"),Qx(521,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(522,"code"),Qx(523,"TemplateRef"),og(),Qx(524,", conforme exemplo abaixo:"),og(),Il(525,"pre")(526,"code"),Qx(527,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(528,"blockquote")(529,"p"),Qx(530,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(531,"code"),Qx(532,"font-size: inherit"),og(),Qx(533," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(534,"tr",16)(535,"td",17)(536,"div",18)(537,"span",19),Qx(538," p-kind"),zl(539,"br"),og()()(),Il(540,"td",20)(541,"code",21),Qx(542,"string"),og()(),Il(543,"td",22)(544,"p")(545,"code"),Qx(546,"secondary"),og()()(),Il(547,"td",23)(548,"em")(549,"strong"),Qx(550,"(opcional)"),og()(),Il(551,"p"),Qx(552,"Define o estilo visual do componente conforme valores especificados no enum "),Il(553,"code"),Qx(554,"PoButtonKind"),og(),Qx(555,":"),og(),Il(556,"ul")(557,"li")(558,"code"),Qx(559,"primary"),og(),Qx(560,": destaca o bot\xE3o, sendo recomendado para a\xE7\xF5es principais."),og(),Il(561,"li")(562,"code"),Qx(563,"secondary"),og(),Qx(564,": estilo padr\xE3o, ideal para a\xE7\xF5es secund\xE1rias."),og(),Il(565,"li")(566,"code"),Qx(567,"tertiary"),og(),Qx(568,": exibe o bot\xE3o sem preenchimento no fundo, indicado para a\xE7\xF5es opcionais."),og()()()(),Il(569,"tr",16)(570,"td",17)(571,"div",18)(572,"span",19),Qx(573," p-label"),zl(574,"br"),og()()(),Il(575,"td",20)(576,"code",21),Qx(577,"string"),og()(),Il(578,"td",22),Qx(579,"-"),og(),Il(580,"td",23)(581,"em")(582,"strong"),Qx(583,"(opcional)"),og()(),Il(584,"p"),Qx(585,"Label do bot\xE3o."),og()()(),Il(586,"tr",16)(587,"td",17)(588,"div",18)(589,"span",19),Qx(590," p-loading"),zl(591,"br"),og()()(),Il(592,"td",20)(593,"code",27),Qx(594,"boolean"),og()(),Il(595,"td",22)(596,"p")(597,"code"),Qx(598,"false"),og()()(),Il(599,"td",23)(600,"em")(601,"strong"),Qx(602,"(opcional)"),og()(),Il(603,"p"),Qx(604,"Exibe um \xEDcone de carregamento \xE0 esquerda do "),Il(605,"em"),Qx(606,"label"),og(),Qx(607," do bot\xE3o."),og(),Il(608,"blockquote")(609,"p"),Qx(610,"Quando esta propriedade estiver habilitada, desabilitar\xE1 o bot\xE3o."),og()()()(),Il(611,"tr",16)(612,"td",17)(613,"div",18)(614,"span",19),Qx(615," p-size"),zl(616,"br"),og()()(),Il(617,"td",20)(618,"code",21),Qx(619,"string"),og()(),Il(620,"td",22)(621,"p")(622,"code"),Qx(623,"medium"),og()()(),Il(624,"td",23)(625,"em")(626,"strong"),Qx(627,"(opcional)"),og()(),Il(628,"p"),Qx(629,"Define o tamanho do componente:"),og(),Il(630,"ul")(631,"li")(632,"code"),Qx(633,"small"),og(),Qx(634,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(635,"li")(636,"code"),Qx(637,"medium"),og(),Qx(638,": altura de 44px."),og(),Il(639,"li")(640,"code"),Qx(641,"large"),og(),Qx(642,": altura de 56px."),og()(),Il(643,"blockquote")(644,"p"),Qx(645,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(646,"code"),Qx(647,"medium"),og(),Qx(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(649,"a",30),Qx(650,"po-theme"),og(),Qx(651,"."),og()()()(),Il(652,"tr",16)(653,"td",17)(654,"div",18)(655,"span",19),Qx(656," p-tabindex"),zl(657,"br"),og()()(),Il(658,"td",20)(659,"code",31),Qx(660,"number "),og(),Il(661,"code",21),Qx(662," string"),og()(),Il(663,"td",22),Qx(664,"-"),og(),Il(665,"td",23)(666,"em")(667,"strong"),Qx(668,"(opcional)"),og()(),Il(669,"p"),Qx(670,"Define o "),Il(671,"code"),Qx(672,"tabindex"),og(),Qx(673," do elemento "),Il(674,"code"),Qx(675,"<button>"),og(),Qx(676," nativo interno."),og(),Il(677,"p"),Qx(678,"Use "),Il(679,"code"),Qx(680,'[tabindex]="-1"'),og(),Qx(681," para remover o bot\xE3o da ordem de foco do teclado."),og()()(),Il(682,"tr",16)(683,"td",17)(684,"div",18)(685,"span",19),Qx(686," p-type"),zl(687,"br"),og()()(),Il(688,"td",20)(689,"code",32),Qx(690,"PoButtonType"),og()(),Il(691,"td",22)(692,"p")(693,"code"),Qx(694,"PoButtonType.Button"),og()()(),Il(695,"td",23)(696,"em")(697,"strong"),Qx(698,"(opcional)"),og()(),Il(699,"p"),Qx(700,"Define o tipo do bot\xE3o."),og()()()(),Il(701,"h3",12),Qx(702,"M\xE9todos"),og(),Il(703,"table",33)(704,"tr",16)(705,"th",34)(706,"div",18)(707,"h4")(708,"span",19),Qx(709," focus "),og()()()()(),Il(710,"tr",23)(711,"td",23)(712,"p"),Qx(713,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(714,"p"),Qx(715,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(716,"pre")(717,"code"),Qx(718,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),og()()()()(),zl(719,"br"),Il(720,"h3"),Qx(721,"Enums"),og(),Il(722,"h4",4)(723,"code",5),Qx(724,"PoButtonKind"),og()(),Il(725,"div",2)(726,"p"),Qx(727,"Estilos dispon\xEDveis do button."),og()(),Il(728,"h4",12),Qx(729,"Propriedades"),og(),Il(730,"table",13)(731,"tr",14)(732,"th",15),Qx(733,"Nome"),og(),Il(734,"th",15),Qx(735,"Descri\xE7\xE3o"),og()(),Il(736,"tr",16)(737,"td",17)(738,"div",18)(739,"span",19),Qx(740," primary"),zl(741,"br"),og()()(),Il(742,"td",23)(743,"p"),Qx(744,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),og()()(),Il(745,"tr",16)(746,"td",17)(747,"div",18)(748,"span",19),Qx(749," secondary"),zl(750,"br"),og()()(),Il(751,"td",23)(752,"p"),Qx(753,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),og()()(),Il(754,"tr",16)(755,"td",17)(756,"div",18)(757,"span",19),Qx(758," tertiary"),zl(759,"br"),og()()(),Il(760,"td",23)(761,"p"),Qx(762,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),og()()()(),Il(763,"h4",4)(764,"code",5),Qx(765,"PoButtonType"),og()(),Il(766,"div",2)(767,"p"),Qx(768,"Enumera\xE7\xE3o que define os tipos poss\xEDveis para o "),Il(769,"code"),Qx(770,"PoButtonComponent"),og(),Qx(771,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),og()(),Il(772,"h4",12),Qx(773,"Propriedades"),og(),Il(774,"table",13)(775,"tr",14)(776,"th",15),Qx(777,"Nome"),og(),Il(778,"th",15),Qx(779,"Descri\xE7\xE3o"),og()(),Il(780,"tr",16)(781,"td",17)(782,"div",18)(783,"span",19),Qx(784," Submit"),zl(785,"br"),og()()(),Il(786,"td",23)(787,"p"),Qx(788,"Define o bot\xE3o como do tipo "),Il(789,"code"),Qx(790,"submit"),og(),Qx(791,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Il(792,"code"),Qx(793,"submit"),og(),Qx(794,"."),og()()(),Il(795,"tr",16)(796,"td",17)(797,"div",18)(798,"span",19),Qx(799," Button"),zl(800,"br"),og()()(),Il(801,"td",23)(802,"p"),Qx(803,"Define o bot\xE3o como do tipo "),Il(804,"code"),Qx(805,"button"),og(),Qx(806,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),og()()(),Il(807,"tr",16)(808,"td",17)(809,"div",18)(810,"span",19),Qx(811," Reset"),zl(812,"br"),og()()(),Il(813,"td",23)(814,"p"),Qx(815,"Define o bot\xE3o como do tipo "),Il(816,"code"),Qx(817,"reset"),og(),Qx(818,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var Se=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Button",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-button-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-button-basic-view")(6,"sample-po-button-labs-view")(7,"sample-po-button-social-network-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,se,ce,be,Ee],encapsulation:2})}return o})();var Oe=[{path:"",component:Se}],ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[uL.forChild(Oe),uL]})}return o})();var mt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,ge]})}return o})();export{mt as DocPoButtonModule};