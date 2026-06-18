import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,b0 as Qt,bJ as Vue,aB as Dx,H as Il,q as Qx,R as og,a1 as ft,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,bH as k3,dq as Oue,a3 as cNe,aD as Xy,aE as Qy,aT as eN}from'./main-QSTLMRDK.js';var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:false,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-page-slide",1,0),Qx(2," Hello World! "),og(),Il(3,"div",2)(4,"po-button",3),ft("p-click",function(){Xy(d);let a=Ax(1);return Qy(a.open())}),og()();}},dependencies:[Qt,Vue],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Slide Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-slide-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ae],encapsulation:2})}return o})();var Ee=["poPageSlide"],re=(()=>{class o{poPageSlide;componentsSize;hideClose=false;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore();}openPage(){this.poPageSlide.open();}restore(){this.componentsSize="medium",this.hideClose=false,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[];}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&Gl(Ee,5),l&2){let d;co(d=lo())&&(n.poPageSlide=d.first);}},standalone:false,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-page-slide",2,0),Qx(2),og(),Il(3,"po-button",3),ft("p-click",function(){return n.openPage()}),og(),zl(4,"po-divider"),Il(5,"form",null,1)(7,"po-input",4),ww("ngModelChange",function(a){return Xy(d),eN(n.title,a)||(n.title=a),Qy(a)}),og(),QA(),Il(8,"po-input",5),ww("ngModelChange",function(a){return Xy(d),eN(n.subtitle,a)||(n.subtitle=a),Qy(a)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(a){return Xy(d),eN(n.content,a)||(n.content=a),Qy(a)}),og(),QA(),Il(10,"po-checkbox-group",7),ww("ngModelChange",function(a){return Xy(d),eN(n.properties,a)||(n.properties=a),Qy(a)}),og(),QA(),Il(11,"po-radio-group",8),ww("ngModelChange",function(a){return Xy(d),eN(n.size,a)||(n.size=a),Qy(a)}),og(),QA(),Il(12,"po-radio-group",9),ww("ngModelChange",function(a){return Xy(d),eN(n.componentsSize,a)||(n.componentsSize=a),Qy(a)}),og(),QA(),Il(13,"div",10)(14,"po-button",11),ft("p-click",function(){return n.restore()}),og()()();}if(l&2){let d=Ax(6);nw("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),Lp(2),dg(" ",n.content,`
`),Lp(),nw("p-disabled",d.form.invalid),Lp(4),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.subtitle),e0(),Lp(),Ew("ngModel",n.content),e0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),e0(),Lp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,Vue],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Slide Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}
</po-page-slide>

<po-button p-label="Open Page Slide" [p-disabled]="f.form.invalid" (p-click)="openPage()"></po-button>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required></po-input>
  <po-input class="po-md-6" name="Subtitle" [(ngModel)]="subtitle" p-clean p-label="Subtitle" p-optional></po-input>
  <po-input class="po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-required></po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  ></po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="Size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizeOptions"
    p-optional
  ></po-radio-group>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoPageSlideComponent, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-slide-labs',
  templateUrl: './sample-po-page-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideLabsComponent implements OnInit {
  @ViewChild('poPageSlide')
  private readonly poPageSlide: PoPageSlideComponent;

  public componentsSize: string;
  public hideClose = false;
  public title: string;
  public subtitle: string;
  public content: string;
  public size: string;
  public properties: Array<string>;

  public componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [
    {
      value: 'click-out',
      label: 'Click Out'
    },
    {
      value: 'hide-close',
      label: 'Hide Close'
    }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    {
      label: 'Small',
      value: 'sm'
    },
    {
      label: 'Medium',
      value: 'md'
    },
    {
      label: 'Large',
      value: 'lg'
    },
    {
      label: 'Extra large',
      value: 'xl'
    },
    {
      label: 'Automatic',
      value: 'auto'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public restore() {
    this.componentsSize = 'medium';
    this.hideClose = false;
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.size = 'md';
    this.properties = [];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-slide-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return o})();var me=(()=>{class o{router=f(En);bluetooth=true;locked=false;microphone=true;notification=true;favorited=false;localization=true;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"]);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:false,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),ww("ngModelChange",function(a){return Xy(d),eN(n.bluetooth,a)||(n.bluetooth=a),Qy(a)}),og(),QA(),Il(4,"po-switch",4),ww("ngModelChange",function(a){return Xy(d),eN(n.locked,a)||(n.locked=a),Qy(a)}),og(),QA(),og(),Il(5,"div",2)(6,"po-switch",5),ww("ngModelChange",function(a){return Xy(d),eN(n.microphone,a)||(n.microphone=a),Qy(a)}),og(),QA(),Il(7,"po-switch",6),ww("ngModelChange",function(a){return Xy(d),eN(n.notification,a)||(n.notification=a),Qy(a)}),og(),QA(),og(),Il(8,"div",2)(9,"po-switch",7),ww("ngModelChange",function(a){return Xy(d),eN(n.localization,a)||(n.localization=a),Qy(a)}),og(),QA(),Il(10,"po-switch",8),ww("ngModelChange",function(a){return Xy(d),eN(n.favorited,a)||(n.favorited=a),Qy(a)}),og(),QA(),og(),zl(11,"po-divider"),Il(12,"h2",9),Qx(13,"About Page Slide"),og(),Il(14,"section",10)(15,"h3",11),Qx(16,"Usage"),og(),Il(17,"ul",12)(18,"li"),Qx(19,"To reveal additional navigation controls"),og(),Il(20,"li"),Qx(21,"In TV or mobile space since controls and/or space is limited"),og(),Il(22,"li"),Qx(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),og(),Il(24,"li"),Qx(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),og()()(),Il(26,"section",10)(27,"h3",11),Qx(28,"Challenges"),og(),Il(29,"ul",12)(30,"li"),Qx(31,"Discoverability"),og(),Il(32,"li"),Qx(33,"Losing context with the rest of the page"),og(),Il(34,"li"),Qx(35,"Make the disruption work for you"),og()()(),Il(36,"section",10)(37,"h3",11),Qx(38,"Recommendations"),og(),Il(39,"ul",12)(40,"li"),Qx(41,"Use it sparingly only for major context switches"),og(),Il(42,"li"),Qx(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),og(),Il(44,"li"),Qx(45,"Make the activation/deactivation dead simple"),og()()(),Il(46,"p"),Qx(47," For more information visit "),Il(48,"a",13),Qx(49,"Designing Web Interfaces: Page Slide"),og()(),Il(50,"po-page-slide-footer")(51,"po-button",14),ft("p-click",function(){return n.openPageSlideFooterDocumentation()}),og()()(),Il(52,"div",15)(53,"po-button",16),ft("p-click",function(){Xy(d);let a=Ax(1);return Qy(a.open())}),og()();}l&2&&(Lp(3),Ew("ngModel",n.bluetooth),e0(),Lp(),Ew("ngModel",n.locked),e0(),Lp(2),Ew("ngModel",n.microphone),e0(),Lp(),Ew("ngModel",n.notification),e0(),Lp(2),Ew("ngModel",n.localization),e0(),Lp(),Ew("ngModel",n.favorited),e0());},dependencies:[$9,mk,Qt,mv,k3,Vue,Oue],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Slide - Configuration"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Bluetooth"
      p-label-on="Bluetooth"
      name="bluetooth"
      [(ngModel)]="bluetooth"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Unlocked"
      p-label-on="Locked"
      name="locked"
      [(ngModel)]="locked"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Microphone"
      p-label-on="Microphone"
      name="microphone"
      [(ngModel)]="microphone"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Notification"
      p-label-on="Notification"
      name="notification"
      [(ngModel)]="notification"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Localization"
      p-label-on="Localization"
      name="localization"
      [(ngModel)]="localization"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Not favorited"
      p-label-on="Favorited"
      name="favorited"
      [(ngModel)]="favorited"
    ></po-switch>
  </div>

  <po-divider />

  <h2 class="po-font-title">About Page Slide</h2>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Usage</h3>
    <ul class="po-ml-2">
      <li>To reveal additional navigation controls</li>
      <li>In TV or mobile space since controls and/or space is limited</li>
      <li>To expose a configuration panel (similar to the Module Configure Pattern)</li>
      <li>
        To a lesser extent to reveal help or contextual information (the partial hiding of the related content might
        make it a poor choice for this)
      </li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Challenges</h3>
    <ul class="po-ml-2">
      <li>Discoverability</li>
      <li>Losing context with the rest of the page</li>
      <li>Make the disruption work for you</li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Recommendations</h3>
    <ul class="po-ml-2">
      <li>Use it sparingly only for major context switches</li>
      <li>Make the animation fast. No reason to wow the user with your ability to scroll</li>
      <li>Make the activation/deactivation dead simple</li>
    </ul>
  </section>

  <p>
    For more information visit
    <a href="http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern" target="_blank" rel="noopener"
      >Designing Web Interfaces: Page Slide</a
    >
  </p>
  <po-page-slide-footer>
    <po-button p-label="Check footer" (p-click)="openPageSlideFooterDocumentation()"> </po-button>
  </po-page-slide-footer>
</po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="Open Configuration" (p-click)="pageSlide.open()"></po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sample-po-page-slide-configuration',
  templateUrl: './sample-po-page-slide-configuration.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideConfigurationComponent {
  private router = inject(Router);

  public bluetooth = true;
  public locked = false;
  public microphone = true;
  public notification = true;
  public favorited = false;
  public localization = true;

  openPageSlideFooterDocumentation() {
    this.router.navigate(['documentation', 'po-page-slide-footer']);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-slide-configuration"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:false,decls:534,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Il(7,"code"),Qx(8,"po-page-default"),og(),Qx(9,", "),Il(10,"code"),Qx(11,"po-page-detail"),og(),Qx(12,`,
`),Il(13,"code"),Qx(14,"po-page-edit"),og(),Qx(15,", "),Il(16,"code"),Qx(17,"po-page-list"),og(),Qx(18," e "),Il(19,"code"),Qx(20,"po-page-slide"),og(),Qx(21,"."),og()(),Il(22,"h3",3),Qx(23,"Componente"),og(),Il(24,"h4",4)(25,"code",5),Qx(26,"PoPageSlideComponent"),og()(),Il(27,"div",2)(28,"p"),Qx(29,"O componente "),Il(30,"code"),Qx(31,"po-page-slide"),og(),Qx(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),og(),Il(33,"p"),Qx(34,"Este componente \xE9 ativado a partir do m\xE9todo "),Il(35,"code"),Qx(36,"#open()"),og(),Qx(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Il(38,"code"),Qx(39,"#close()"),og(),Qx(40,"."),og(),Il(41,"p"),Qx(42," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),Il(43,"a",6),Qx(44,"Grid System"),og(),Qx(45,"."),og(),Il(46,"p"),Qx(47,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),Il(48,"a",7)(49,"code"),Qx(50,"PoPageSlideFooter"),og()(),Qx(51," para customiza\xE7\xE3o do template."),og(),Il(52,"ul")(53,"li")(54,"h4"),Qx(55,"Tokens customiz\xE1veis"),og()()(),Il(56,"p"),Qx(57,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(58,"blockquote")(59,"p"),Qx(60,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(61,"a",8),Qx(62,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(63,"."),og()(),Il(64,"table")(65,"thead")(66,"tr")(67,"th"),Qx(68,"Propriedade"),og(),Il(69,"th"),Qx(70,"Descri\xE7\xE3o"),og(),Il(71,"th"),Qx(72,"Valor Padr\xE3o"),og()()(),Il(73,"tbody")(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-family"),og()(),Il(78,"td"),Qx(79,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-family-theme)"),og()()(),Il(83,"tr")(84,"td")(85,"code"),Qx(86,"--font-weight"),og()(),Il(87,"td"),Qx(88,"Peso da fonte"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--font-weight-bold)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--padding-header"),og()(),Il(96,"td"),Qx(97,"Espa\xE7amento do header"),og(),Il(98,"td")(99,"code"),Qx(100,"var(--spacing-md)"),og()()(),Il(101,"tr")(102,"td")(103,"code"),Qx(104,"--padding-body"),og()(),Il(105,"td"),Qx(106,"Espa\xE7amento do conte\xFAdo"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--line-height-none)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--padding-footer"),og()(),Il(114,"td"),Qx(115,"Espa\xE7amento do footer"),og(),Il(116,"td")(117,"code"),Qx(118,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),og()()(),Il(119,"tr")(120,"td")(121,"strong"),Qx(122,"Default Values"),og()(),zl(123,"td")(124,"td"),og(),Il(125,"tr")(126,"td")(127,"code"),Qx(128,"--color-overlay"),og()(),Il(129,"td"),Qx(130,"Cor do overlay"),og(),Il(131,"td")(132,"code"),Qx(133,"var(--color-neutral-dark-80)"),og()()(),Il(134,"tr")(135,"td")(136,"code"),Qx(137,"--opacity-overlay"),og()(),Il(138,"td"),Qx(139,"Cor da opacidade do overlay"),og(),Il(140,"td")(141,"code"),Qx(142,"0.7"),og()()(),Il(143,"tr")(144,"td")(145,"code"),Qx(146,"--background-color"),og()(),Il(147,"td"),Qx(148,"Cor de background"),og(),Il(149,"td")(150,"code"),Qx(151,"var(--color-neutral-light-00)"),og()()(),Il(152,"tr")(153,"td")(154,"code"),Qx(155,"--border-color"),og()(),Il(156,"td"),Qx(157,"Cor da borda"),og(),Il(158,"td")(159,"code"),Qx(160,"var(--color-neutral-light-20)"),og()()(),Il(161,"tr")(162,"td")(163,"code"),Qx(164,"--color-title"),og()(),Il(165,"td"),Qx(166,"Cor do titulo do header"),og(),Il(167,"td")(168,"code"),Qx(169,"var(--color-neutral-dark-95)"),og()()(),Il(170,"tr")(171,"td")(172,"code"),Qx(173,"--border-radius"),og()(),Il(174,"td"),Qx(175,"Radius da borda"),og(),Il(176,"td")(177,"code"),Qx(178,"var(--border-radius-md) 0 0 var(--border-radius-md)"),og()()(),Il(179,"tr")(180,"td")(181,"code"),Qx(182,"--transition-duration"),og()(),Il(183,"td"),Qx(184,"Dura\xE7\xE3o da transi\xE7\xE3o"),og(),Il(185,"td")(186,"code"),Qx(187,"var(--duration-extra-fast)"),og()()(),Il(188,"tr")(189,"td")(190,"code"),Qx(191,"--transition-timing"),og()(),Il(192,"td"),Qx(193,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),og(),Il(194,"td")(195,"code"),Qx(196,"var(--duration-extra-slow) var(--timing-standart)"),og()()(),Il(197,"tr")(198,"td")(199,"code"),Qx(200,"--page-slide-width-sm"),og()(),Il(201,"td"),Qx(202,"Tamanho da largura do componente no tamanho "),Il(203,"code"),Qx(204,"small"),og()(),Il(205,"td")(206,"code"),Qx(207,"40%"),og()()(),Il(208,"tr")(209,"td")(210,"code"),Qx(211,"--page-slide-width-md"),og()(),Il(212,"td"),Qx(213,"Tamanho da largura do componente no tamanho "),Il(214,"code"),Qx(215,"medium"),og()(),Il(216,"td")(217,"code"),Qx(218,"50%"),og()()(),Il(219,"tr")(220,"td")(221,"code"),Qx(222,"--page-slide-width-lg"),og()(),Il(223,"td"),Qx(224,"Tamanho da largura do componente no tamanho "),Il(225,"code"),Qx(226,"large"),og()(),Il(227,"td")(228,"code"),Qx(229,"60%"),og()()(),Il(230,"tr")(231,"td")(232,"code"),Qx(233,"--page-slide-width-xl"),og()(),Il(234,"td"),Qx(235,"Tamanho da largura do componente no tamanho "),Il(236,"code"),Qx(237,"extra large"),og()(),Il(238,"td")(239,"code"),Qx(240,"70%"),og()()(),Il(241,"tr")(242,"td")(243,"code"),Qx(244,"--page-slide-min-width-auto"),og()(),Il(245,"td"),Qx(246,"Tamanho da largura m\xEDnima do componente no tamanho "),Il(247,"code"),Qx(248,"auto"),og()(),Il(249,"td")(250,"code"),Qx(251,"40%"),og()()(),Il(252,"tr")(253,"td")(254,"code"),Qx(255,"--page-slide-max-width-auto"),og()(),Il(256,"td"),Qx(257,"Tamanho da largura m\xE1xima do componente no tamanho "),Il(258,"code"),Qx(259,"auto"),og()(),Il(260,"td")(261,"code"),Qx(262,"90%"),og()()()()()(),Il(263,"div",9)(264,"h4",10),Qx(265,"Seletor"),og(),Il(266,"pre",11),Qx(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),og()(),Il(268,"h4",12),Qx(269,"Propriedades"),og(),Il(270,"table",13)(271,"tr",14)(272,"th",15),Qx(273,"Nome"),og(),Il(274,"th",15),Qx(275,"Tipo"),og(),Il(276,"th",15),Qx(277,"Padr\xE3o"),og(),Il(278,"th",15),Qx(279,"Descri\xE7\xE3o"),og()(),Il(280,"tr",16)(281,"td",17)(282,"div",18)(283,"span",19),Qx(284," p-click-out"),zl(285,"br"),og()()(),Il(286,"td",20)(287,"code",21),Qx(288,"boolean"),og()(),Il(289,"td",22)(290,"p")(291,"code"),Qx(292,"false"),og()()(),Il(293,"td",23)(294,"em")(295,"strong"),Qx(296,"(opcional)"),og()(),Il(297,"p"),Qx(298,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),og()()(),Il(299,"tr",16)(300,"td",17)(301,"div",24)(302,"span",25),Qx(303," (p-close)"),zl(304,"br"),og()()(),Il(305,"td",20)(306,"code",26),Qx(307,"EventEmitter"),og()(),Il(308,"td",22),Qx(309,"-"),og(),Il(310,"td",23)(311,"em")(312,"strong"),Qx(313,"(opcional)"),og()(),Il(314,"p"),Qx(315,"Evento executado ao fechar o page slide."),og()()(),Il(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),Qx(320," p-components-size"),zl(321,"br"),og()()(),Il(322,"td",20)(323,"code",27),Qx(324,"string"),og()(),Il(325,"td",22)(326,"p")(327,"code"),Qx(328,"medium"),og()()(),Il(329,"td",23)(330,"em")(331,"strong"),Qx(332,"(opcional)"),og()(),Il(333,"p"),Qx(334,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(335,"ul")(336,"li")(337,"code"),Qx(338,"small"),og(),Qx(339,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(340,"li")(341,"code"),Qx(342,"medium"),og(),Qx(343,": aplica a medida medium de cada componente."),og()(),Il(344,"blockquote")(345,"p"),Qx(346,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(347,"code"),Qx(348,"medium"),og(),Qx(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(350,"a",28),Qx(351,"po-theme"),og(),Qx(352,"."),og()()()(),Il(353,"tr",16)(354,"td",17)(355,"div",18)(356,"span",19),Qx(357," p-flexible-width"),zl(358,"br"),og()()(),Il(359,"td",20)(360,"code",21),Qx(361,"boolean"),og()(),Il(362,"td",22)(363,"p")(364,"code"),Qx(365,"false"),og()()(),Il(366,"td",23)(367,"em")(368,"strong"),Qx(369,"(opcional)"),og()(),Il(370,"p"),Qx(371,"Permite a expans\xE3o din\xE2mica da largura do "),Il(372,"code"),Qx(373,"po-page-slide"),og(),Qx(374," quando "),Il(375,"code"),Qx(376,"p-size"),og(),Qx(377," for "),Il(378,"code"),Qx(379,"auto"),og(),Qx(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Il(381,"code"),Qx(382,"po-table"),og(),Qx(383," dentro do "),Il(384,"code"),Qx(385,"po-page-slide"),og()()()(),Il(386,"tr",16)(387,"td",17)(388,"div",18)(389,"span",19),Qx(390," p-hide-close"),zl(391,"br"),og()()(),Il(392,"td",20)(393,"code",21),Qx(394,"boolean"),og()(),Il(395,"td",22)(396,"p")(397,"code"),Qx(398,"false"),og()()(),Il(399,"td",23)(400,"em")(401,"strong"),Qx(402,"(opcional)"),og()(),Il(403,"p"),Qx(404,"Oculta o bot\xE3o de encerramento da p\xE1gina."),og(),Il(405,"p"),Qx(406,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),Il(407,"code"),Qx(408,"p-click-out"),og(),Qx(409," estiver habilitada."),og()()(),Il(410,"tr",16)(411,"td",17)(412,"div",18)(413,"span",19),Qx(414," p-size"),zl(415,"br"),og()()(),Il(416,"td",20)(417,"code",27),Qx(418,"string"),og()(),Il(419,"td",22)(420,"p")(421,"code"),Qx(422,"md"),og()()(),Il(423,"td",23)(424,"em")(425,"strong"),Qx(426,"(opcional)"),og()(),Il(427,"p"),Qx(428,"Define o tamanho da p\xE1gina."),og(),Il(429,"p"),Qx(430,"Valores v\xE1lidos:"),og(),Il(431,"ul")(432,"li")(433,"code"),Qx(434,"sm"),og(),Qx(435," (pequeno)"),og(),Il(436,"li")(437,"code"),Qx(438,"md"),og(),Qx(439," (m\xE9dio)"),og(),Il(440,"li")(441,"code"),Qx(442,"lg"),og(),Qx(443," (grande)"),og(),Il(444,"li")(445,"code"),Qx(446,"xl"),og(),Qx(447," (extra-grande)"),og(),Il(448,"li")(449,"code"),Qx(450,"auto"),og(),Qx(451," (autom\xE1tico)"),og()(),Il(452,"blockquote")(453,"p"),Qx(454,"Todas as op\xE7\xF5es de tamanho, exceto "),Il(455,"code"),Qx(456,"auto"),og(),Qx(457,", possuem uma largura m\xE1xima de "),Il(458,"strong"),Qx(459,"768px"),og(),Qx(460,"."),og()()()(),Il(461,"tr",16)(462,"td",17)(463,"div",18)(464,"span",19),Qx(465," p-subtitle"),zl(466,"br"),og()()(),Il(467,"td",20)(468,"code",27),Qx(469,"string"),og()(),Il(470,"td",22),Qx(471,"-"),og(),Il(472,"td",23)(473,"em")(474,"strong"),Qx(475,"(opcional)"),og()(),Il(476,"p"),Qx(477,"Subt\xEDtulo da p\xE1gina."),og()()(),Il(478,"tr",16)(479,"td",17)(480,"div",18)(481,"span",19),Qx(482," p-title"),zl(483,"br"),og()()(),Il(484,"td",20)(485,"code",27),Qx(486,"string"),og()(),Il(487,"td",22),Qx(488,"-"),og(),Il(489,"td",23)(490,"p"),Qx(491,"T\xEDtulo da p\xE1gina."),og()()()(),Il(492,"h3",12),Qx(493,"M\xE9todos"),og(),Il(494,"table",29)(495,"tr",16)(496,"th",30)(497,"div",18)(498,"h4")(499,"span",19),Qx(500," open "),og()()()()(),Il(501,"tr",23)(502,"td",23)(503,"p"),Qx(504,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),og(),Il(505,"p"),Qx(506,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Il(507,"code"),Qx(508,"ViewChild"),og(),Qx(509," da seguinte forma:"),og(),Il(510,"pre")(511,"code",31),Qx(512,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),og()()()()(),zl(513,"br"),Il(514,"table",29)(515,"tr",16)(516,"th",30)(517,"div",18)(518,"h4")(519,"span",19),Qx(520," close "),og()()()()(),Il(521,"tr",23)(522,"td",23)(523,"p"),Qx(524,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),og(),Il(525,"p"),Qx(526,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Il(527,"code"),Qx(528,"ViewChild"),og(),Qx(529," da seguinte forma:"),og(),Il(530,"pre")(531,"code",31),Qx(532,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),og()()()()(),zl(533,"br"),og());},dependencies:[Ka],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-page-slide-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,pe,de,se,ce],encapsulation:2})}return o})();var Me=[{path:"",component:ue}],ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[uL.forChild(Me),uL]})}return o})();var tt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,ge]})}return o})();export{tt as DocPoPageSlideModule};