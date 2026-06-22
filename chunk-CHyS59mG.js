import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,b0 as Qt,dq as bv,F as Sl,z as eN,J as og,H as Wl,Q as nw,av as ql,aw as lo,ax as uo,an as CO,aH as Ka,b8 as Bme,b9 as qme,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,K,b6 as Yo,bd as Nx,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ie=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&ql(Qt,7,K),p&2){let l;lo(l=uo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(Sl(0,"po-popover",0),eN(1," PO Popover "),og(),Wl(2,"po-button",1)),p&2&&nw("p-target",n.poButton);},dependencies:[Qt,bv],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Popover Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-basic',
  templateUrl: './sample-po-popover-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverBasicComponent {
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true }) poButton: PoButtonComponent;
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-basic"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ge,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ie],encapsulation:2})}return i})();var fe=["buttonClick"],he=["buttonHover"],re=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&ql(fe,7,K)(he,7,K),p&2){let l;lo(l=uo())&&(n.buttonClickRef=l.first),lo(l=uo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=wx();Sl(0,"po-popover",3),eN(1),og(),Sl(2,"po-popover",4),eN(3),og(),Sl(4,"div",5)(5,"div",6),Wl(6,"po-button",7,0),og(),Sl(8,"div",6),Wl(9,"po-button",8,1),og()(),Wl(11,"po-divider"),Sl(12,"form",null,2)(14,"div",5)(15,"po-input",9),ww("ngModelChange",function(m){return Ky(l),nN(n.title,m)||(n.title=m),Xy(m)}),og(),e0(),Sl(16,"po-input",10),ww("ngModelChange",function(m){return Ky(l),nN(n.content,m)||(n.content=m),Xy(m)}),og(),e0(),og(),Sl(17,"div",5)(18,"po-radio-group",11),ww("ngModelChange",function(m){return Ky(l),nN(n.position,m)||(n.position=m),Xy(m)}),og(),e0(),Sl(19,"po-checkbox-group",12),ww("ngModelChange",function(m){return Ky(l),nN(n.properties,m)||(n.properties=m),Xy(m)}),og(),e0(),og(),Sl(20,"div",5)(21,"po-button",13),ft("p-click",function(){return n.restore()}),og()()();}p&2&&(nw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(),nw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(12),Ew("ngModel",n.title),n0(),Lp(),Ew("ngModel",n.content),n0(),Lp(2),Ew("ngModel",n.position),nw("p-options",n.positionOptions),n0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,bv],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Popover Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<div class="po-row">
  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonClick p-label="Popover with click"> </po-button>
  </div>

  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonHover p-label="Popover with hover"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-input class="po-md-6" name="content" [(ngModel)]="content" p-clean p-label="Content"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-8"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-labs',
  templateUrl: './sample-po-popover-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverLabsComponent {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';

  public readonly positionOptions: Array<PoRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-labs"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Se,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return i})();var xe=["cardname"],we=["cardcode"],ye=["carddate"],me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&ql(xe,7,K)(we,7,K)(ye,7,K),p&2){let l;lo(l=uo())&&(n.cardnameref=l.first),lo(l=uo())&&(n.cardcoderef=l.first),lo(l=uo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=wx();Sl(0,"po-popover",5),Wl(1,"img",6),og(),Sl(2,"po-popover",5),Wl(3,"img",7),og(),Sl(4,"po-popover",5),Wl(5,"img",8),og(),Sl(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),ww("ngModelChange",function(m){return Ky(l),nN(n.inputCardName,m)||(n.inputCardName=m),Xy(m)}),og(),e0(),Sl(11,"po-input",11,2),ww("ngModelChange",function(m){return Ky(l),nN(n.inputCardCode,m)||(n.inputCardCode=m),Xy(m)}),og(),e0(),Sl(13,"po-input",12,3),ww("ngModelChange",function(m){return Ky(l),nN(n.inputCardValid,m)||(n.inputCardValid=m),Xy(m)}),og(),e0(),og(),Sl(15,"div",9)(16,"po-button",13),ft("click",function(){Ky(l);let m=Nx(18);return Xy(m.open())}),og()()(),Sl(17,"po-modal",14,4)(19,"div",9)(20,"div"),eN(21),og()(),Sl(22,"div",9)(23,"div"),eN(24),og()(),Sl(25,"div",9)(26,"div"),eN(27),og()()();}if(p&2){let l=Nx(7);nw("p-target",n.cardcoderef),Lp(2),nw("p-target",n.carddateref),Lp(2),nw("p-target",n.cardnameref),Lp(5),Ew("ngModel",n.inputCardName),n0(),Lp(2),Ew("ngModel",n.inputCardCode),n0(),Lp(2),Ew("ngModel",n.inputCardValid),n0(),Lp(3),nw("p-disabled",l.form.invalid),Lp(5),dg("Card Code: ",n.inputCardCode),Lp(3),dg("Card Expiration: ",n.inputCardValid),Lp(3),dg("Card Owner: ",n.inputCardName);}},dependencies:[Z9,G9,q9,_k,mk,Qt,L3,Yo,bv],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Popover - Credit Card"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
  <img src="assets/graphics/card-code.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="carddateref">
  <img src="assets/graphics/card-date.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="cardnameref">
  <img src="assets/graphics/card-owner.jpg" />
</po-popover>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      #cardname
      class="po-lg-6"
      name="inputCardName"
      [(ngModel)]="inputCardName"
      p-clean
      p-label="Name"
      p-required
    >
    </po-input>

    <po-input
      #cardcode
      class="po-lg-4 po-md-9"
      name="inputCardCode"
      [(ngModel)]="inputCardCode"
      p-clean
      p-label="Code"
      p-mask="9999 9999 9999 9999"
      p-mask-format-model
      p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
      p-required
    >
    </po-input>

    <po-input
      #carddate
      class="po-lg-2 po-md-3"
      name="inputCardValid"
      [(ngModel)]="inputCardValid"
      p-clean
      p-label="Expiration Date"
      p-mask="12/99"
      p-mask-format-model
      p-pattern="\\d{2}\\/\\d{2}"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-2" p-label="Confirm" [p-disabled]="f.form.invalid" (click)="modalCreditCard.open()">
    </po-button>
  </div>
</form>

<po-modal #modalCreditCard p-title="Your Credit Card">
  <div class="po-row">
    <div>Card Code: { { inputCardCode }}</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: { { inputCardValid }}</div>
  </div>
  <div class="po-row">
    <div>Card Owner: { { inputCardName }}</div>
  </div>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-popover-credit-card',
  templateUrl: './sample-po-popover-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverCreditCardComponent {
  @ViewChild('cardname', { read: ElementRef, static: true }) cardnameref: ElementRef;
  @ViewChild('cardcode', { read: ElementRef, static: true }) cardcoderef: ElementRef;
  @ViewChild('carddate', { read: ElementRef, static: true }) carddateref: ElementRef;

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-credit-card"),og(),Wl(23,"hr")),p&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-popover."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoPopoverComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-popover"),og(),eN(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),og(),Sl(18,"p"),eN(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Sl(20,"a",6)(21,"strong"),eN(22,"po-tooltip"),og()(),eN(23,"."),og(),Sl(24,"p"),eN(25,"Para conte\xFAdos maiores recomenda-se o uso do "),Sl(26,"a",7)(27,"strong"),eN(28,"po-modal"),og()(),eN(29,"."),og(),Sl(30,"p"),eN(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Sl(32,"code"),eN(33,"right"),og(),eN(34,", "),Sl(35,"code"),eN(36,"right-top"),og(),eN(37,", "),Sl(38,"code"),eN(39,"right-bottom"),og(),eN(40,", "),Sl(41,"code"),eN(42,"top"),og(),eN(43,", "),Sl(44,"code"),eN(45,"top-left"),og(),eN(46,", "),Sl(47,"code"),eN(48,"top-right"),og(),eN(49,`,
`),Sl(50,"code"),eN(51,"left"),og(),eN(52,", "),Sl(53,"code"),eN(54,"left-top"),og(),eN(55,", "),Sl(56,"code"),eN(57,"left-bottom"),og(),eN(58,", "),Sl(59,"code"),eN(60,"bottom"),og(),eN(61,", "),Sl(62,"code"),eN(63,"bottom-left"),og(),eN(64," e "),Sl(65,"code"),eN(66,"bottom-right"),og(),eN(67,"."),og(),Sl(68,"p"),eN(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),Sl(70,"em"),eN(71,"popover"),og(),eN(72,`.
Os eventos permitidos s\xE3o: `),Sl(73,"code"),eN(74,"click"),og(),eN(75," e "),Sl(76,"code"),eN(77,"hover"),og(),eN(78,". "),og()(),Sl(79,"div",8)(80,"h4",9),eN(81,"Seletor"),og(),Sl(82,"pre",10),eN(83,`<po-popover
    p-append-in-body="boolean"
    (p-close)="EventEmitter"
    p-custom-classes="string"
    p-hide-arrow="boolean"
    (p-open)="EventEmitter"
    p-position="string"
    p-target="ElementRef | HTMLElement"
    p-title="string"
    p-trigger="string" >
</po-popover>
`),og()(),Sl(84,"h4",11),eN(85,"Propriedades"),og(),Sl(86,"table",12)(87,"tr",13)(88,"th",14),eN(89,"Nome"),og(),Sl(90,"th",14),eN(91,"Tipo"),og(),Sl(92,"th",14),eN(93,"Padr\xE3o"),og(),Sl(94,"th",14),eN(95,"Descri\xE7\xE3o"),og()(),Sl(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),eN(100," p-append-in-body"),Wl(101,"br"),og()()(),Sl(102,"td",19)(103,"code",20),eN(104,"boolean"),og()(),Sl(105,"td",21)(106,"p")(107,"code"),eN(108,"false"),og()()(),Sl(109,"td",22)(110,"em")(111,"strong"),eN(112,"(opcional)"),og()(),Sl(113,"p"),eN(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Sl(115,"code"),eN(116,"p-target"),og(),eN(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Sl(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),eN(122," (p-close)"),Wl(123,"br"),og()()(),Sl(124,"td",19)(125,"code",25),eN(126,"EventEmitter"),og()(),Sl(127,"td",21),eN(128,"-"),og(),Sl(129,"td",22)(130,"p"),eN(131,"Evento disparado ao fechar o popover."),og()()(),Sl(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),eN(136," p-custom-classes"),Wl(137,"br"),og()()(),Sl(138,"td",19)(139,"code",26),eN(140,"string"),og()(),Sl(141,"td",21),eN(142,"-"),og(),Sl(143,"td",22)(144,"em")(145,"strong"),eN(146,"(opcional)"),og()(),Sl(147,"p"),eN(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),og(),Sl(149,"p"),eN(150,"Exemplo: "),Sl(151,"code"),eN(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),og(),eN(153,"."),og()()(),Sl(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),eN(158," p-hide-arrow"),Wl(159,"br"),og()()(),Sl(160,"td",19)(161,"code",20),eN(162,"boolean"),og()(),Sl(163,"td",21)(164,"p")(165,"code"),eN(166,"false"),og()()(),Sl(167,"td",22)(168,"em")(169,"strong"),eN(170,"(opcional)"),og()(),Sl(171,"p"),eN(172,"Desabilita a seta do componente "),Sl(173,"em"),eN(174,"popover"),og(),eN(175,"."),og()()(),Sl(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),eN(180," (p-open)"),Wl(181,"br"),og()()(),Sl(182,"td",19)(183,"code",25),eN(184,"EventEmitter"),og()(),Sl(185,"td",21),eN(186,"-"),og(),Sl(187,"td",22)(188,"p"),eN(189,"Evento disparado ao abrir o popover."),og()()(),Sl(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),eN(194," p-position"),Wl(195,"br"),og()()(),Sl(196,"td",19)(197,"code",26),eN(198,"string"),og()(),Sl(199,"td",21)(200,"p"),eN(201,"right"),og()(),Sl(202,"td",22)(203,"em")(204,"strong"),eN(205,"(opcional)"),og()(),Sl(206,"p"),eN(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Sl(208,"p"),eN(209,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(210,"ul")(211,"li")(212,"code"),eN(213,"right"),og(),eN(214,": Posiciona o po-popover no lado direito do componente alvo."),og(),Sl(215,"li")(216,"code"),eN(217,"right-bottom"),og(),eN(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),og(),Sl(219,"li")(220,"code"),eN(221,"right-top"),og(),eN(222,": Posiciona o po-popover no lado direito superior do componente alvo."),og(),Sl(223,"li")(224,"code"),eN(225,"bottom"),og(),eN(226,": Posiciona o po-popover abaixo do componente alvo."),og(),Sl(227,"li")(228,"code"),eN(229,"bottom-left"),og(),eN(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),og(),Sl(231,"li")(232,"code"),eN(233,"bottom-right"),og(),eN(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),og(),Sl(235,"li")(236,"code"),eN(237,"left"),og(),eN(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),og(),Sl(239,"li")(240,"code"),eN(241,"left-top"),og(),eN(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),og(),Sl(243,"li")(244,"code"),eN(245,"left-bottom"),og(),eN(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),og(),Sl(247,"li")(248,"code"),eN(249,"top"),og(),eN(250,": Posiciona o po-popover acima do componente alvo."),og(),Sl(251,"li")(252,"code"),eN(253,"top-right"),og(),eN(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),og(),Sl(255,"li")(256,"code"),eN(257,"top-left"),og(),eN(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),og()()()(),Sl(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),eN(263," p-target"),Wl(264,"br"),og()()(),Sl(265,"td",19)(266,"code",27),eN(267,"ElementRef "),og(),Sl(268,"code",28),eN(269," HTMLElement"),og()(),Sl(270,"td",21),eN(271,"-"),og(),Sl(272,"td",22)(273,"p"),eN(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Sl(275,"pre")(276,"code"),eN(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),og()(),Sl(278,"p"),eN(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),og(),Sl(280,"pre")(281,"code"),eN(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),og()(),Sl(283,"p"),eN(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Sl(285,"pre")(286,"code"),eN(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),og()()()(),Sl(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),eN(292," p-title"),Wl(293,"br"),og()()(),Sl(294,"td",19)(295,"code",26),eN(296,"string"),og()(),Sl(297,"td",21),eN(298,"-"),og(),Sl(299,"td",22)(300,"em")(301,"strong"),eN(302,"(opcional)"),og()(),Sl(303,"p"),eN(304,"T\xEDtulo do popover."),og()()(),Sl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),eN(309," p-trigger"),Wl(310,"br"),og()()(),Sl(311,"td",19)(312,"code",26),eN(313,"string"),og()(),Sl(314,"td",21)(315,"p"),eN(316,"click"),og()(),Sl(317,"td",22)(318,"em")(319,"strong"),eN(320,"(opcional)"),og()(),Sl(321,"p"),eN(322,"Define o evento que abrir\xE1 o po-popover."),og(),Sl(323,"p"),eN(324,"Valores v\xE1lidos:"),og(),Sl(325,"ul")(326,"li")(327,"code"),eN(328,"click"),og(),eN(329,": Abre ao clicar no componente alvo."),og(),Sl(330,"li")(331,"code"),eN(332,"hover"),og(),eN(333,": Abre ao passar o mouse sobre o componente alvo."),og(),Sl(334,"li")(335,"code"),eN(336,"function"),og(),eN(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-popover-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,ae,le,de,se],encapsulation:2})}return i})();var De=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[hL.forChild(De),hL]})}return i})();var ut=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,ue]})}return i})();export{ut as DocPoPopoverModule};