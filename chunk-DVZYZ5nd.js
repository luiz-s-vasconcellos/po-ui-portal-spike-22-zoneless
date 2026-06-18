import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b0 as Qt,dr as bv,H as Il,q as Qx,R as og,J as zl,T as nw,av as Gl,aw as co,ax as lo,an as DO,aH as Ka,b8 as qme,b9 as Yme,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,i as Z,b6 as Yo,bd as Ax,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ie=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&Gl(Qt,7,Z),p&2){let l;co(l=lo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(Il(0,"po-popover",0),Qx(1," PO Popover "),og(),zl(2,"po-button",1)),p&2&&nw("p-target",n.poButton);},dependencies:[Qt,bv],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Popover Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-popover-basic"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ie],encapsulation:2})}return i})();var fe=["buttonClick"],he=["buttonHover"],re=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&Gl(fe,7,Z)(he,7,Z),p&2){let l;co(l=lo())&&(n.buttonClickRef=l.first),co(l=lo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=Dx();Il(0,"po-popover",3),Qx(1),og(),Il(2,"po-popover",4),Qx(3),og(),Il(4,"div",5)(5,"div",6),zl(6,"po-button",7,0),og(),Il(8,"div",6),zl(9,"po-button",8,1),og()(),zl(11,"po-divider"),Il(12,"form",null,2)(14,"div",5)(15,"po-input",9),ww("ngModelChange",function(m){return Xy(l),eN(n.title,m)||(n.title=m),Qy(m)}),og(),QA(),Il(16,"po-input",10),ww("ngModelChange",function(m){return Xy(l),eN(n.content,m)||(n.content=m),Qy(m)}),og(),QA(),og(),Il(17,"div",5)(18,"po-radio-group",11),ww("ngModelChange",function(m){return Xy(l),eN(n.position,m)||(n.position=m),Qy(m)}),og(),QA(),Il(19,"po-checkbox-group",12),ww("ngModelChange",function(m){return Xy(l),eN(n.properties,m)||(n.properties=m),Qy(m)}),og(),QA(),og(),Il(20,"div",5)(21,"po-button",13),ft("p-click",function(){return n.restore()}),og()()();}p&2&&(nw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(),nw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(12),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.content),e0(),Lp(2),Ew("ngModel",n.position),nw("p-options",n.positionOptions),e0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,bv],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Popover Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-popover
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-popover-labs"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return i})();var xe=["cardname"],we=["cardcode"],ye=["carddate"],me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&Gl(xe,7,Z)(we,7,Z)(ye,7,Z),p&2){let l;co(l=lo())&&(n.cardnameref=l.first),co(l=lo())&&(n.cardcoderef=l.first),co(l=lo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=Dx();Il(0,"po-popover",5),zl(1,"img",6),og(),Il(2,"po-popover",5),zl(3,"img",7),og(),Il(4,"po-popover",5),zl(5,"img",8),og(),Il(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),ww("ngModelChange",function(m){return Xy(l),eN(n.inputCardName,m)||(n.inputCardName=m),Qy(m)}),og(),QA(),Il(11,"po-input",11,2),ww("ngModelChange",function(m){return Xy(l),eN(n.inputCardCode,m)||(n.inputCardCode=m),Qy(m)}),og(),QA(),Il(13,"po-input",12,3),ww("ngModelChange",function(m){return Xy(l),eN(n.inputCardValid,m)||(n.inputCardValid=m),Qy(m)}),og(),QA(),og(),Il(15,"div",9)(16,"po-button",13),ft("click",function(){Xy(l);let m=Ax(18);return Qy(m.open())}),og()()(),Il(17,"po-modal",14,4)(19,"div",9)(20,"div"),Qx(21),og()(),Il(22,"div",9)(23,"div"),Qx(24),og()(),Il(25,"div",9)(26,"div"),Qx(27),og()()();}if(p&2){let l=Ax(7);nw("p-target",n.cardcoderef),Lp(2),nw("p-target",n.carddateref),Lp(2),nw("p-target",n.cardnameref),Lp(5),Ew("ngModel",n.inputCardName),e0(),Lp(2),Ew("ngModel",n.inputCardCode),e0(),Lp(2),Ew("ngModel",n.inputCardValid),e0(),Lp(3),nw("p-disabled",l.form.invalid),Lp(5),dg("Card Code: ",n.inputCardCode),Lp(3),dg("Card Expiration: ",n.inputCardValid),Lp(3),dg("Card Owner: ",n.inputCardName);}},dependencies:[G9,$9,z9,mk,hk,Qt,O3,Yo,bv],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Popover - Credit Card"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-popover-credit-card"),og(),zl(23,"hr")),p&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-popover."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoPopoverComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-popover"),og(),Qx(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),og(),Il(18,"p"),Qx(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Il(20,"a",6)(21,"strong"),Qx(22,"po-tooltip"),og()(),Qx(23,"."),og(),Il(24,"p"),Qx(25,"Para conte\xFAdos maiores recomenda-se o uso do "),Il(26,"a",7)(27,"strong"),Qx(28,"po-modal"),og()(),Qx(29,"."),og(),Il(30,"p"),Qx(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Il(32,"code"),Qx(33,"right"),og(),Qx(34,", "),Il(35,"code"),Qx(36,"right-top"),og(),Qx(37,", "),Il(38,"code"),Qx(39,"right-bottom"),og(),Qx(40,", "),Il(41,"code"),Qx(42,"top"),og(),Qx(43,", "),Il(44,"code"),Qx(45,"top-left"),og(),Qx(46,", "),Il(47,"code"),Qx(48,"top-right"),og(),Qx(49,`,
`),Il(50,"code"),Qx(51,"left"),og(),Qx(52,", "),Il(53,"code"),Qx(54,"left-top"),og(),Qx(55,", "),Il(56,"code"),Qx(57,"left-bottom"),og(),Qx(58,", "),Il(59,"code"),Qx(60,"bottom"),og(),Qx(61,", "),Il(62,"code"),Qx(63,"bottom-left"),og(),Qx(64," e "),Il(65,"code"),Qx(66,"bottom-right"),og(),Qx(67,"."),og(),Il(68,"p"),Qx(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),Il(70,"em"),Qx(71,"popover"),og(),Qx(72,`.
Os eventos permitidos s\xE3o: `),Il(73,"code"),Qx(74,"click"),og(),Qx(75," e "),Il(76,"code"),Qx(77,"hover"),og(),Qx(78,". "),og()(),Il(79,"div",8)(80,"h4",9),Qx(81,"Seletor"),og(),Il(82,"pre",10),Qx(83,`<po-popover
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
`),og()(),Il(84,"h4",11),Qx(85,"Propriedades"),og(),Il(86,"table",12)(87,"tr",13)(88,"th",14),Qx(89,"Nome"),og(),Il(90,"th",14),Qx(91,"Tipo"),og(),Il(92,"th",14),Qx(93,"Padr\xE3o"),og(),Il(94,"th",14),Qx(95,"Descri\xE7\xE3o"),og()(),Il(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),Qx(100," p-append-in-body"),zl(101,"br"),og()()(),Il(102,"td",19)(103,"code",20),Qx(104,"boolean"),og()(),Il(105,"td",21)(106,"p")(107,"code"),Qx(108,"false"),og()()(),Il(109,"td",22)(110,"em")(111,"strong"),Qx(112,"(opcional)"),og()(),Il(113,"p"),Qx(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Il(115,"code"),Qx(116,"p-target"),og(),Qx(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Il(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),Qx(122," (p-close)"),zl(123,"br"),og()()(),Il(124,"td",19)(125,"code",25),Qx(126,"EventEmitter"),og()(),Il(127,"td",21),Qx(128,"-"),og(),Il(129,"td",22)(130,"p"),Qx(131,"Evento disparado ao fechar o popover."),og()()(),Il(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),Qx(136," p-custom-classes"),zl(137,"br"),og()()(),Il(138,"td",19)(139,"code",26),Qx(140,"string"),og()(),Il(141,"td",21),Qx(142,"-"),og(),Il(143,"td",22)(144,"em")(145,"strong"),Qx(146,"(opcional)"),og()(),Il(147,"p"),Qx(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),og(),Il(149,"p"),Qx(150,"Exemplo: "),Il(151,"code"),Qx(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),og(),Qx(153,"."),og()()(),Il(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),Qx(158," p-hide-arrow"),zl(159,"br"),og()()(),Il(160,"td",19)(161,"code",20),Qx(162,"boolean"),og()(),Il(163,"td",21)(164,"p")(165,"code"),Qx(166,"false"),og()()(),Il(167,"td",22)(168,"em")(169,"strong"),Qx(170,"(opcional)"),og()(),Il(171,"p"),Qx(172,"Desabilita a seta do componente "),Il(173,"em"),Qx(174,"popover"),og(),Qx(175,"."),og()()(),Il(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),Qx(180," (p-open)"),zl(181,"br"),og()()(),Il(182,"td",19)(183,"code",25),Qx(184,"EventEmitter"),og()(),Il(185,"td",21),Qx(186,"-"),og(),Il(187,"td",22)(188,"p"),Qx(189,"Evento disparado ao abrir o popover."),og()()(),Il(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),Qx(194," p-position"),zl(195,"br"),og()()(),Il(196,"td",19)(197,"code",26),Qx(198,"string"),og()(),Il(199,"td",21)(200,"p"),Qx(201,"right"),og()(),Il(202,"td",22)(203,"em")(204,"strong"),Qx(205,"(opcional)"),og()(),Il(206,"p"),Qx(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Il(208,"p"),Qx(209,"Posi\xE7\xF5es v\xE1lidas:"),og(),Il(210,"ul")(211,"li")(212,"code"),Qx(213,"right"),og(),Qx(214,": Posiciona o po-popover no lado direito do componente alvo."),og(),Il(215,"li")(216,"code"),Qx(217,"right-bottom"),og(),Qx(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),og(),Il(219,"li")(220,"code"),Qx(221,"right-top"),og(),Qx(222,": Posiciona o po-popover no lado direito superior do componente alvo."),og(),Il(223,"li")(224,"code"),Qx(225,"bottom"),og(),Qx(226,": Posiciona o po-popover abaixo do componente alvo."),og(),Il(227,"li")(228,"code"),Qx(229,"bottom-left"),og(),Qx(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),og(),Il(231,"li")(232,"code"),Qx(233,"bottom-right"),og(),Qx(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),og(),Il(235,"li")(236,"code"),Qx(237,"left"),og(),Qx(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),og(),Il(239,"li")(240,"code"),Qx(241,"left-top"),og(),Qx(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),og(),Il(243,"li")(244,"code"),Qx(245,"left-bottom"),og(),Qx(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),og(),Il(247,"li")(248,"code"),Qx(249,"top"),og(),Qx(250,": Posiciona o po-popover acima do componente alvo."),og(),Il(251,"li")(252,"code"),Qx(253,"top-right"),og(),Qx(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),og(),Il(255,"li")(256,"code"),Qx(257,"top-left"),og(),Qx(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),og()()()(),Il(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),Qx(263," p-target"),zl(264,"br"),og()()(),Il(265,"td",19)(266,"code",27),Qx(267,"ElementRef "),og(),Il(268,"code",28),Qx(269," HTMLElement"),og()(),Il(270,"td",21),Qx(271,"-"),og(),Il(272,"td",22)(273,"p"),Qx(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Il(275,"pre")(276,"code"),Qx(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),og()(),Il(278,"p"),Qx(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),og(),Il(280,"pre")(281,"code"),Qx(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),og()(),Il(283,"p"),Qx(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Il(285,"pre")(286,"code"),Qx(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),og()()()(),Il(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),Qx(292," p-title"),zl(293,"br"),og()()(),Il(294,"td",19)(295,"code",26),Qx(296,"string"),og()(),Il(297,"td",21),Qx(298,"-"),og(),Il(299,"td",22)(300,"em")(301,"strong"),Qx(302,"(opcional)"),og()(),Il(303,"p"),Qx(304,"T\xEDtulo do popover."),og()()(),Il(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),Qx(309," p-trigger"),zl(310,"br"),og()()(),Il(311,"td",19)(312,"code",26),Qx(313,"string"),og()(),Il(314,"td",21)(315,"p"),Qx(316,"click"),og()(),Il(317,"td",22)(318,"em")(319,"strong"),Qx(320,"(opcional)"),og()(),Il(321,"p"),Qx(322,"Define o evento que abrir\xE1 o po-popover."),og(),Il(323,"p"),Qx(324,"Valores v\xE1lidos:"),og(),Il(325,"ul")(326,"li")(327,"code"),Qx(328,"click"),og(),Qx(329,": Abre ao clicar no componente alvo."),og(),Il(330,"li")(331,"code"),Qx(332,"hover"),og(),Qx(333,": Abre ao passar o mouse sobre o componente alvo."),og(),Il(334,"li")(335,"code"),Qx(336,"function"),og(),Qx(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-popover-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),og()()()),p&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,ae,le,de,se],encapsulation:2})}return i})();var De=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[uL.forChild(De),uL]})}return i})();var ut=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,ue]})}return i})();export{ut as DocPoPopoverModule};