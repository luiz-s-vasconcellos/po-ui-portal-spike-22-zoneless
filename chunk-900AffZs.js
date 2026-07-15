import {f as fe,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,b0 as Qt,bJ as Oue,aB as Ix,C as Sl,y as rN,J as og,a1 as ft,an as SO,aH as Ka,b8 as Ume,b9 as $me,F as Wl,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,av as ql,aw as lo,ax as uo,bH as k3,dp as Lue,a3 as sNe,aD as Ky,aE as Xy,aT as oN}from'./main-TVDUJ47Y.js';var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:false,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Ix();Sl(0,"po-page-slide",1,0),rN(2," Hello World! "),og(),Sl(3,"div",2)(4,"po-button",3),ft("p-click",function(){Ky(d);let a=kx(1);return Xy(a.open())}),og()();}},dependencies:[Qt,Oue],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Slide Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-slide-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,he,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ae],encapsulation:2,changeDetection:1})}return o})();var Ee=["poPageSlide"],re=(()=>{class o{poPageSlide;componentsSize;hideClose=false;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore();}openPage(){this.poPageSlide.open();}restore(){this.componentsSize="medium",this.hideClose=false,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[];}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&ql(Ee,5),l&2){let d;lo(d=uo())&&(n.poPageSlide=d.first);}},standalone:false,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=Ix();Sl(0,"po-page-slide",2,0),rN(2),og(),Sl(3,"po-button",3),ft("p-click",function(){return n.openPage()}),og(),Wl(4,"po-divider"),Sl(5,"form",null,1)(7,"po-input",4),Cw("ngModelChange",function(a){return Ky(d),oN(n.title,a)||(n.title=a),Xy(a)}),og(),n0(),Sl(8,"po-input",5),Cw("ngModelChange",function(a){return Ky(d),oN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(a){return Ky(d),oN(n.content,a)||(n.content=a),Xy(a)}),og(),n0(),Sl(10,"po-checkbox-group",7),Cw("ngModelChange",function(a){return Ky(d),oN(n.properties,a)||(n.properties=a),Xy(a)}),og(),n0(),Sl(11,"po-radio-group",8),Cw("ngModelChange",function(a){return Ky(d),oN(n.size,a)||(n.size=a),Xy(a)}),og(),n0(),Sl(12,"po-radio-group",9),Cw("ngModelChange",function(a){return Ky(d),oN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),og(),n0(),Sl(13,"div",10)(14,"po-button",11),ft("p-click",function(){return n.restore()}),og()()();}if(l&2){let d=kx(6);rw("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),Lp(2),dg(" ",n.content,`
`),Lp(),rw("p-disabled",d.form.invalid),Lp(4),ww("ngModel",n.title),i0(),Lp(),ww("ngModel",n.subtitle),i0(),Lp(),ww("ngModel",n.content),i0(),Lp(),ww("ngModel",n.properties),rw("p-options",n.propertiesOptions),i0(),Lp(),ww("ngModel",n.size),rw("p-options",n.sizeOptions),i0(),Lp(),ww("ngModel",n.componentsSize),rw("p-options",n.componentsSizeOptions),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde,Oue],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Slide Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-slide
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-slide-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=f(En);bluetooth=true;locked=false;microphone=true;notification=true;favorited=false;localization=true;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"]);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:false,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Ix();Sl(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),Cw("ngModelChange",function(a){return Ky(d),oN(n.bluetooth,a)||(n.bluetooth=a),Xy(a)}),og(),n0(),Sl(4,"po-switch",4),Cw("ngModelChange",function(a){return Ky(d),oN(n.locked,a)||(n.locked=a),Xy(a)}),og(),n0(),og(),Sl(5,"div",2)(6,"po-switch",5),Cw("ngModelChange",function(a){return Ky(d),oN(n.microphone,a)||(n.microphone=a),Xy(a)}),og(),n0(),Sl(7,"po-switch",6),Cw("ngModelChange",function(a){return Ky(d),oN(n.notification,a)||(n.notification=a),Xy(a)}),og(),n0(),og(),Sl(8,"div",2)(9,"po-switch",7),Cw("ngModelChange",function(a){return Ky(d),oN(n.localization,a)||(n.localization=a),Xy(a)}),og(),n0(),Sl(10,"po-switch",8),Cw("ngModelChange",function(a){return Ky(d),oN(n.favorited,a)||(n.favorited=a),Xy(a)}),og(),n0(),og(),Wl(11,"po-divider"),Sl(12,"h2",9),rN(13,"About Page Slide"),og(),Sl(14,"section",10)(15,"h3",11),rN(16,"Usage"),og(),Sl(17,"ul",12)(18,"li"),rN(19,"To reveal additional navigation controls"),og(),Sl(20,"li"),rN(21,"In TV or mobile space since controls and/or space is limited"),og(),Sl(22,"li"),rN(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),og(),Sl(24,"li"),rN(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),og()()(),Sl(26,"section",10)(27,"h3",11),rN(28,"Challenges"),og(),Sl(29,"ul",12)(30,"li"),rN(31,"Discoverability"),og(),Sl(32,"li"),rN(33,"Losing context with the rest of the page"),og(),Sl(34,"li"),rN(35,"Make the disruption work for you"),og()()(),Sl(36,"section",10)(37,"h3",11),rN(38,"Recommendations"),og(),Sl(39,"ul",12)(40,"li"),rN(41,"Use it sparingly only for major context switches"),og(),Sl(42,"li"),rN(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),og(),Sl(44,"li"),rN(45,"Make the activation/deactivation dead simple"),og()()(),Sl(46,"p"),rN(47," For more information visit "),Sl(48,"a",13),rN(49,"Designing Web Interfaces: Page Slide"),og()(),Sl(50,"po-page-slide-footer")(51,"po-button",14),ft("p-click",function(){return n.openPageSlideFooterDocumentation()}),og()()(),Sl(52,"div",15)(53,"po-button",16),ft("p-click",function(){Ky(d);let a=kx(1);return Xy(a.open())}),og()();}l&2&&(Lp(3),ww("ngModel",n.bluetooth),i0(),Lp(),ww("ngModel",n.locked),i0(),Lp(2),ww("ngModel",n.microphone),i0(),Lp(),ww("ngModel",n.notification),i0(),Lp(2),ww("ngModel",n.localization),i0(),Lp(),ww("ngModel",n.favorited),i0());},dependencies:[Z9,wk,Qt,mv,k3,Oue,Lue],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Slide - Configuration"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-slide-configuration"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,we,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:false,decls:534,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),rN(8,"po-page-default"),og(),rN(9,", "),Sl(10,"code"),rN(11,"po-page-detail"),og(),rN(12,`,
`),Sl(13,"code"),rN(14,"po-page-edit"),og(),rN(15,", "),Sl(16,"code"),rN(17,"po-page-list"),og(),rN(18," e "),Sl(19,"code"),rN(20,"po-page-slide"),og(),rN(21,"."),og()(),Sl(22,"h3",3),rN(23,"Componente"),og(),Sl(24,"h4",4)(25,"code",5),rN(26,"PoPageSlideComponent"),og()(),Sl(27,"div",2)(28,"p"),rN(29,"O componente "),Sl(30,"code"),rN(31,"po-page-slide"),og(),rN(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),og(),Sl(33,"p"),rN(34,"Este componente \xE9 ativado a partir do m\xE9todo "),Sl(35,"code"),rN(36,"#open()"),og(),rN(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Sl(38,"code"),rN(39,"#close()"),og(),rN(40,"."),og(),Sl(41,"p"),rN(42," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),Sl(43,"a",6),rN(44,"Grid System"),og(),rN(45,"."),og(),Sl(46,"p"),rN(47,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),Sl(48,"a",7)(49,"code"),rN(50,"PoPageSlideFooter"),og()(),rN(51," para customiza\xE7\xE3o do template."),og(),Sl(52,"ul")(53,"li")(54,"h4"),rN(55,"Tokens customiz\xE1veis"),og()()(),Sl(56,"p"),rN(57,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(58,"blockquote")(59,"p"),rN(60,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(61,"a",8),rN(62,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(63,"."),og()(),Sl(64,"table")(65,"thead")(66,"tr")(67,"th"),rN(68,"Propriedade"),og(),Sl(69,"th"),rN(70,"Descri\xE7\xE3o"),og(),Sl(71,"th"),rN(72,"Valor Padr\xE3o"),og()()(),Sl(73,"tbody")(74,"tr")(75,"td")(76,"code"),rN(77,"--font-family"),og()(),Sl(78,"td"),rN(79,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(80,"td")(81,"code"),rN(82,"var(--font-family-theme)"),og()()(),Sl(83,"tr")(84,"td")(85,"code"),rN(86,"--font-weight"),og()(),Sl(87,"td"),rN(88,"Peso da fonte"),og(),Sl(89,"td")(90,"code"),rN(91,"var(--font-weight-bold)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),rN(95,"--padding-header"),og()(),Sl(96,"td"),rN(97,"Espa\xE7amento do header"),og(),Sl(98,"td")(99,"code"),rN(100,"var(--spacing-md)"),og()()(),Sl(101,"tr")(102,"td")(103,"code"),rN(104,"--padding-body"),og()(),Sl(105,"td"),rN(106,"Espa\xE7amento do conte\xFAdo"),og(),Sl(107,"td")(108,"code"),rN(109,"var(--line-height-none)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),rN(113,"--padding-footer"),og()(),Sl(114,"td"),rN(115,"Espa\xE7amento do footer"),og(),Sl(116,"td")(117,"code"),rN(118,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),og()()(),Sl(119,"tr")(120,"td")(121,"strong"),rN(122,"Default Values"),og()(),Wl(123,"td")(124,"td"),og(),Sl(125,"tr")(126,"td")(127,"code"),rN(128,"--color-overlay"),og()(),Sl(129,"td"),rN(130,"Cor do overlay"),og(),Sl(131,"td")(132,"code"),rN(133,"var(--color-neutral-dark-80)"),og()()(),Sl(134,"tr")(135,"td")(136,"code"),rN(137,"--opacity-overlay"),og()(),Sl(138,"td"),rN(139,"Cor da opacidade do overlay"),og(),Sl(140,"td")(141,"code"),rN(142,"0.7"),og()()(),Sl(143,"tr")(144,"td")(145,"code"),rN(146,"--background-color"),og()(),Sl(147,"td"),rN(148,"Cor de background"),og(),Sl(149,"td")(150,"code"),rN(151,"var(--color-neutral-light-00)"),og()()(),Sl(152,"tr")(153,"td")(154,"code"),rN(155,"--border-color"),og()(),Sl(156,"td"),rN(157,"Cor da borda"),og(),Sl(158,"td")(159,"code"),rN(160,"var(--color-neutral-light-20)"),og()()(),Sl(161,"tr")(162,"td")(163,"code"),rN(164,"--color-title"),og()(),Sl(165,"td"),rN(166,"Cor do titulo do header"),og(),Sl(167,"td")(168,"code"),rN(169,"var(--color-neutral-dark-95)"),og()()(),Sl(170,"tr")(171,"td")(172,"code"),rN(173,"--border-radius"),og()(),Sl(174,"td"),rN(175,"Radius da borda"),og(),Sl(176,"td")(177,"code"),rN(178,"var(--border-radius-md) 0 0 var(--border-radius-md)"),og()()(),Sl(179,"tr")(180,"td")(181,"code"),rN(182,"--transition-duration"),og()(),Sl(183,"td"),rN(184,"Dura\xE7\xE3o da transi\xE7\xE3o"),og(),Sl(185,"td")(186,"code"),rN(187,"var(--duration-extra-fast)"),og()()(),Sl(188,"tr")(189,"td")(190,"code"),rN(191,"--transition-timing"),og()(),Sl(192,"td"),rN(193,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),og(),Sl(194,"td")(195,"code"),rN(196,"var(--duration-extra-slow) var(--timing-standart)"),og()()(),Sl(197,"tr")(198,"td")(199,"code"),rN(200,"--page-slide-width-sm"),og()(),Sl(201,"td"),rN(202,"Tamanho da largura do componente no tamanho "),Sl(203,"code"),rN(204,"small"),og()(),Sl(205,"td")(206,"code"),rN(207,"40%"),og()()(),Sl(208,"tr")(209,"td")(210,"code"),rN(211,"--page-slide-width-md"),og()(),Sl(212,"td"),rN(213,"Tamanho da largura do componente no tamanho "),Sl(214,"code"),rN(215,"medium"),og()(),Sl(216,"td")(217,"code"),rN(218,"50%"),og()()(),Sl(219,"tr")(220,"td")(221,"code"),rN(222,"--page-slide-width-lg"),og()(),Sl(223,"td"),rN(224,"Tamanho da largura do componente no tamanho "),Sl(225,"code"),rN(226,"large"),og()(),Sl(227,"td")(228,"code"),rN(229,"60%"),og()()(),Sl(230,"tr")(231,"td")(232,"code"),rN(233,"--page-slide-width-xl"),og()(),Sl(234,"td"),rN(235,"Tamanho da largura do componente no tamanho "),Sl(236,"code"),rN(237,"extra large"),og()(),Sl(238,"td")(239,"code"),rN(240,"70%"),og()()(),Sl(241,"tr")(242,"td")(243,"code"),rN(244,"--page-slide-min-width-auto"),og()(),Sl(245,"td"),rN(246,"Tamanho da largura m\xEDnima do componente no tamanho "),Sl(247,"code"),rN(248,"auto"),og()(),Sl(249,"td")(250,"code"),rN(251,"40%"),og()()(),Sl(252,"tr")(253,"td")(254,"code"),rN(255,"--page-slide-max-width-auto"),og()(),Sl(256,"td"),rN(257,"Tamanho da largura m\xE1xima do componente no tamanho "),Sl(258,"code"),rN(259,"auto"),og()(),Sl(260,"td")(261,"code"),rN(262,"90%"),og()()()()()(),Sl(263,"div",9)(264,"h4",10),rN(265,"Seletor"),og(),Sl(266,"pre",11),rN(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),og()(),Sl(268,"h4",12),rN(269,"Propriedades"),og(),Sl(270,"table",13)(271,"tr",14)(272,"th",15),rN(273,"Nome"),og(),Sl(274,"th",15),rN(275,"Tipo"),og(),Sl(276,"th",15),rN(277,"Padr\xE3o"),og(),Sl(278,"th",15),rN(279,"Descri\xE7\xE3o"),og()(),Sl(280,"tr",16)(281,"td",17)(282,"div",18)(283,"span",19),rN(284," p-click-out"),Wl(285,"br"),og()()(),Sl(286,"td",20)(287,"code",21),rN(288,"boolean"),og()(),Sl(289,"td",22)(290,"p")(291,"code"),rN(292,"false"),og()()(),Sl(293,"td",23)(294,"em")(295,"strong"),rN(296,"(opcional)"),og()(),Sl(297,"p"),rN(298,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),og()()(),Sl(299,"tr",16)(300,"td",17)(301,"div",24)(302,"span",25),rN(303," (p-close)"),Wl(304,"br"),og()()(),Sl(305,"td",20)(306,"code",26),rN(307,"EventEmitter"),og()(),Sl(308,"td",22),rN(309,"-"),og(),Sl(310,"td",23)(311,"em")(312,"strong"),rN(313,"(opcional)"),og()(),Sl(314,"p"),rN(315,"Evento executado ao fechar o page slide."),og()()(),Sl(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),rN(320," p-components-size"),Wl(321,"br"),og()()(),Sl(322,"td",20)(323,"code",27),rN(324,"string"),og()(),Sl(325,"td",22)(326,"p")(327,"code"),rN(328,"medium"),og()()(),Sl(329,"td",23)(330,"em")(331,"strong"),rN(332,"(opcional)"),og()(),Sl(333,"p"),rN(334,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(335,"ul")(336,"li")(337,"code"),rN(338,"small"),og(),rN(339,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(340,"li")(341,"code"),rN(342,"medium"),og(),rN(343,": aplica a medida medium de cada componente."),og()(),Sl(344,"blockquote")(345,"p"),rN(346,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(347,"code"),rN(348,"medium"),og(),rN(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(350,"a",28),rN(351,"po-theme"),og(),rN(352,"."),og()()()(),Sl(353,"tr",16)(354,"td",17)(355,"div",18)(356,"span",19),rN(357," p-flexible-width"),Wl(358,"br"),og()()(),Sl(359,"td",20)(360,"code",21),rN(361,"boolean"),og()(),Sl(362,"td",22)(363,"p")(364,"code"),rN(365,"false"),og()()(),Sl(366,"td",23)(367,"em")(368,"strong"),rN(369,"(opcional)"),og()(),Sl(370,"p"),rN(371,"Permite a expans\xE3o din\xE2mica da largura do "),Sl(372,"code"),rN(373,"po-page-slide"),og(),rN(374," quando "),Sl(375,"code"),rN(376,"p-size"),og(),rN(377," for "),Sl(378,"code"),rN(379,"auto"),og(),rN(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Sl(381,"code"),rN(382,"po-table"),og(),rN(383," dentro do "),Sl(384,"code"),rN(385,"po-page-slide"),og()()()(),Sl(386,"tr",16)(387,"td",17)(388,"div",18)(389,"span",19),rN(390," p-hide-close"),Wl(391,"br"),og()()(),Sl(392,"td",20)(393,"code",21),rN(394,"boolean"),og()(),Sl(395,"td",22)(396,"p")(397,"code"),rN(398,"false"),og()()(),Sl(399,"td",23)(400,"em")(401,"strong"),rN(402,"(opcional)"),og()(),Sl(403,"p"),rN(404,"Oculta o bot\xE3o de encerramento da p\xE1gina."),og(),Sl(405,"p"),rN(406,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),Sl(407,"code"),rN(408,"p-click-out"),og(),rN(409," estiver habilitada."),og()()(),Sl(410,"tr",16)(411,"td",17)(412,"div",18)(413,"span",19),rN(414," p-size"),Wl(415,"br"),og()()(),Sl(416,"td",20)(417,"code",27),rN(418,"string"),og()(),Sl(419,"td",22)(420,"p")(421,"code"),rN(422,"md"),og()()(),Sl(423,"td",23)(424,"em")(425,"strong"),rN(426,"(opcional)"),og()(),Sl(427,"p"),rN(428,"Define o tamanho da p\xE1gina."),og(),Sl(429,"p"),rN(430,"Valores v\xE1lidos:"),og(),Sl(431,"ul")(432,"li")(433,"code"),rN(434,"sm"),og(),rN(435," (pequeno)"),og(),Sl(436,"li")(437,"code"),rN(438,"md"),og(),rN(439," (m\xE9dio)"),og(),Sl(440,"li")(441,"code"),rN(442,"lg"),og(),rN(443," (grande)"),og(),Sl(444,"li")(445,"code"),rN(446,"xl"),og(),rN(447," (extra-grande)"),og(),Sl(448,"li")(449,"code"),rN(450,"auto"),og(),rN(451," (autom\xE1tico)"),og()(),Sl(452,"blockquote")(453,"p"),rN(454,"Todas as op\xE7\xF5es de tamanho, exceto "),Sl(455,"code"),rN(456,"auto"),og(),rN(457,", possuem uma largura m\xE1xima de "),Sl(458,"strong"),rN(459,"768px"),og(),rN(460,"."),og()()()(),Sl(461,"tr",16)(462,"td",17)(463,"div",18)(464,"span",19),rN(465," p-subtitle"),Wl(466,"br"),og()()(),Sl(467,"td",20)(468,"code",27),rN(469,"string"),og()(),Sl(470,"td",22),rN(471,"-"),og(),Sl(472,"td",23)(473,"em")(474,"strong"),rN(475,"(opcional)"),og()(),Sl(476,"p"),rN(477,"Subt\xEDtulo da p\xE1gina."),og()()(),Sl(478,"tr",16)(479,"td",17)(480,"div",18)(481,"span",19),rN(482," p-title"),Wl(483,"br"),og()()(),Sl(484,"td",20)(485,"code",27),rN(486,"string"),og()(),Sl(487,"td",22),rN(488,"-"),og(),Sl(489,"td",23)(490,"p"),rN(491,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(492,"h3",12),rN(493,"M\xE9todos"),og(),Sl(494,"table",29)(495,"tr",16)(496,"th",30)(497,"div",18)(498,"h4")(499,"span",19),rN(500," open "),og()()()()(),Sl(501,"tr",23)(502,"td",23)(503,"p"),rN(504,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),og(),Sl(505,"p"),rN(506,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Sl(507,"code"),rN(508,"ViewChild"),og(),rN(509," da seguinte forma:"),og(),Sl(510,"pre")(511,"code",31),rN(512,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),og()()()()(),Wl(513,"br"),Sl(514,"table",29)(515,"tr",16)(516,"th",30)(517,"div",18)(518,"h4")(519,"span",19),rN(520," close "),og()()()()(),Sl(521,"tr",23)(522,"td",23)(523,"p"),rN(524,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),og(),Sl(525,"p"),rN(526,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Sl(527,"code"),rN(528,"ViewChild"),og(),rN(529," da seguinte forma:"),og(),Sl(530,"pre")(531,"code",31),rN(532,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),og()()()()(),Wl(533,"br"),og());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-slide-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),og()()()),l&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,pe,de,se,ce],encapsulation:2,changeDetection:1})}return o})();var Me=[{path:"",component:ue}],ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[mL.forChild(Me),mL]})}return o})();var tt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,ge]})}return o})();export{tt as DocPoPageSlideModule};