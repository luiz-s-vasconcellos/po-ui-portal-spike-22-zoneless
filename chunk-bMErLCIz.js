import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,b0 as Qt,dq as bv,C as Sl,y as rN,J as og,F as Wl,O as rw,av as ql,aw as lo,ax as uo,an as SO,aH as Ka,b8 as Ume,b9 as $me,a1 as ft,L as Lp,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,K,b6 as Yo,bd as kx,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var ie=(()=>{class i{poButton;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(a,n){if(a&1&&ql(Qt,7,K),a&2){let l;lo(l=uo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(a,n){a&1&&(Sl(0,"po-popover",0),rN(1," PO Popover "),og(),Wl(2,"po-button",1)),a&2&&rw("p-target",n.poButton);},dependencies:[Qt,bv],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Popover Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ge,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ie],encapsulation:2,changeDetection:1})}return i})();var fe=["buttonClick"],he=["buttonHover"],re=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(a,n){if(a&1&&ql(fe,7,K)(he,7,K),a&2){let l;lo(l=uo())&&(n.buttonClickRef=l.first),lo(l=uo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let l=Ix();Sl(0,"po-popover",3),rN(1),og(),Sl(2,"po-popover",4),rN(3),og(),Sl(4,"div",5)(5,"div",6),Wl(6,"po-button",7,0),og(),Sl(8,"div",6),Wl(9,"po-button",8,1),og()(),Wl(11,"po-divider"),Sl(12,"form",null,2)(14,"div",5)(15,"po-input",9),Cw("ngModelChange",function(m){return Ky(l),oN(n.title,m)||(n.title=m),Xy(m)}),og(),n0(),Sl(16,"po-input",10),Cw("ngModelChange",function(m){return Ky(l),oN(n.content,m)||(n.content=m),Xy(m)}),og(),n0(),og(),Sl(17,"div",5)(18,"po-radio-group",11),Cw("ngModelChange",function(m){return Ky(l),oN(n.position,m)||(n.position=m),Xy(m)}),og(),n0(),Sl(19,"po-checkbox-group",12),Cw("ngModelChange",function(m){return Ky(l),oN(n.properties,m)||(n.properties=m),Xy(m)}),og(),n0(),og(),Sl(20,"div",5)(21,"po-button",13),ft("p-click",function(){return n.restore()}),og()()();}a&2&&(rw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(),rw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(12),ww("ngModel",n.title),i0(),Lp(),ww("ngModel",n.content),i0(),Lp(2),ww("ngModel",n.position),rw("p-options",n.positionOptions),i0(),Lp(),ww("ngModel",n.properties),rw("p-options",n.propertiesOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde,bv],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Popover Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-popover
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Se,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return i})();var xe=["cardname"],we=["cardcode"],ye=["carddate"],me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(a,n){if(a&1&&ql(xe,7,K)(we,7,K)(ye,7,K),a&2){let l;lo(l=uo())&&(n.cardnameref=l.first),lo(l=uo())&&(n.cardcoderef=l.first),lo(l=uo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(a,n){if(a&1){let l=Ix();Sl(0,"po-popover",5),Wl(1,"img",6),og(),Sl(2,"po-popover",5),Wl(3,"img",7),og(),Sl(4,"po-popover",5),Wl(5,"img",8),og(),Sl(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),Cw("ngModelChange",function(m){return Ky(l),oN(n.inputCardName,m)||(n.inputCardName=m),Xy(m)}),og(),n0(),Sl(11,"po-input",11,2),Cw("ngModelChange",function(m){return Ky(l),oN(n.inputCardCode,m)||(n.inputCardCode=m),Xy(m)}),og(),n0(),Sl(13,"po-input",12,3),Cw("ngModelChange",function(m){return Ky(l),oN(n.inputCardValid,m)||(n.inputCardValid=m),Xy(m)}),og(),n0(),og(),Sl(15,"div",9)(16,"po-button",13),ft("click",function(){Ky(l);let m=kx(18);return Xy(m.open())}),og()()(),Sl(17,"po-modal",14,4)(19,"div",9)(20,"div"),rN(21),og()(),Sl(22,"div",9)(23,"div"),rN(24),og()(),Sl(25,"div",9)(26,"div"),rN(27),og()()();}if(a&2){let l=kx(7);rw("p-target",n.cardcoderef),Lp(2),rw("p-target",n.carddateref),Lp(2),rw("p-target",n.cardnameref),Lp(5),ww("ngModel",n.inputCardName),i0(),Lp(2),ww("ngModel",n.inputCardCode),i0(),Lp(2),ww("ngModel",n.inputCardValid),i0(),Lp(3),rw("p-disabled",l.form.invalid),Lp(5),dg("Card Code: ",n.inputCardCode),Lp(3),dg("Card Expiration: ",n.inputCardValid),Lp(3),dg("Card Owner: ",n.inputCardName);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,L3,Yo,bv],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Popover - Credit Card"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-credit-card"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Te,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(a,n){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-popover."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoPopoverComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-popover"),og(),rN(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),og(),Sl(18,"p"),rN(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Sl(20,"a",6)(21,"strong"),rN(22,"po-tooltip"),og()(),rN(23,"."),og(),Sl(24,"p"),rN(25,"Para conte\xFAdos maiores recomenda-se o uso do "),Sl(26,"a",7)(27,"strong"),rN(28,"po-modal"),og()(),rN(29,"."),og(),Sl(30,"p"),rN(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Sl(32,"code"),rN(33,"right"),og(),rN(34,", "),Sl(35,"code"),rN(36,"right-top"),og(),rN(37,", "),Sl(38,"code"),rN(39,"right-bottom"),og(),rN(40,", "),Sl(41,"code"),rN(42,"top"),og(),rN(43,", "),Sl(44,"code"),rN(45,"top-left"),og(),rN(46,", "),Sl(47,"code"),rN(48,"top-right"),og(),rN(49,`,
`),Sl(50,"code"),rN(51,"left"),og(),rN(52,", "),Sl(53,"code"),rN(54,"left-top"),og(),rN(55,", "),Sl(56,"code"),rN(57,"left-bottom"),og(),rN(58,", "),Sl(59,"code"),rN(60,"bottom"),og(),rN(61,", "),Sl(62,"code"),rN(63,"bottom-left"),og(),rN(64," e "),Sl(65,"code"),rN(66,"bottom-right"),og(),rN(67,"."),og(),Sl(68,"p"),rN(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),Sl(70,"em"),rN(71,"popover"),og(),rN(72,`.
Os eventos permitidos s\xE3o: `),Sl(73,"code"),rN(74,"click"),og(),rN(75," e "),Sl(76,"code"),rN(77,"hover"),og(),rN(78,". "),og()(),Sl(79,"div",8)(80,"h4",9),rN(81,"Seletor"),og(),Sl(82,"pre",10),rN(83,`<po-popover
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
`),og()(),Sl(84,"h4",11),rN(85,"Propriedades"),og(),Sl(86,"table",12)(87,"tr",13)(88,"th",14),rN(89,"Nome"),og(),Sl(90,"th",14),rN(91,"Tipo"),og(),Sl(92,"th",14),rN(93,"Padr\xE3o"),og(),Sl(94,"th",14),rN(95,"Descri\xE7\xE3o"),og()(),Sl(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),rN(100," p-append-in-body"),Wl(101,"br"),og()()(),Sl(102,"td",19)(103,"code",20),rN(104,"boolean"),og()(),Sl(105,"td",21)(106,"p")(107,"code"),rN(108,"false"),og()()(),Sl(109,"td",22)(110,"em")(111,"strong"),rN(112,"(opcional)"),og()(),Sl(113,"p"),rN(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Sl(115,"code"),rN(116,"p-target"),og(),rN(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Sl(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),rN(122," (p-close)"),Wl(123,"br"),og()()(),Sl(124,"td",19)(125,"code",25),rN(126,"EventEmitter"),og()(),Sl(127,"td",21),rN(128,"-"),og(),Sl(129,"td",22)(130,"p"),rN(131,"Evento disparado ao fechar o popover."),og()()(),Sl(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),rN(136," p-custom-classes"),Wl(137,"br"),og()()(),Sl(138,"td",19)(139,"code",26),rN(140,"string"),og()(),Sl(141,"td",21),rN(142,"-"),og(),Sl(143,"td",22)(144,"em")(145,"strong"),rN(146,"(opcional)"),og()(),Sl(147,"p"),rN(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),og(),Sl(149,"p"),rN(150,"Exemplo: "),Sl(151,"code"),rN(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),og(),rN(153,"."),og()()(),Sl(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),rN(158," p-hide-arrow"),Wl(159,"br"),og()()(),Sl(160,"td",19)(161,"code",20),rN(162,"boolean"),og()(),Sl(163,"td",21)(164,"p")(165,"code"),rN(166,"false"),og()()(),Sl(167,"td",22)(168,"em")(169,"strong"),rN(170,"(opcional)"),og()(),Sl(171,"p"),rN(172,"Desabilita a seta do componente "),Sl(173,"em"),rN(174,"popover"),og(),rN(175,"."),og()()(),Sl(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),rN(180," (p-open)"),Wl(181,"br"),og()()(),Sl(182,"td",19)(183,"code",25),rN(184,"EventEmitter"),og()(),Sl(185,"td",21),rN(186,"-"),og(),Sl(187,"td",22)(188,"p"),rN(189,"Evento disparado ao abrir o popover."),og()()(),Sl(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),rN(194," p-position"),Wl(195,"br"),og()()(),Sl(196,"td",19)(197,"code",26),rN(198,"string"),og()(),Sl(199,"td",21)(200,"p"),rN(201,"right"),og()(),Sl(202,"td",22)(203,"em")(204,"strong"),rN(205,"(opcional)"),og()(),Sl(206,"p"),rN(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Sl(208,"p"),rN(209,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(210,"ul")(211,"li")(212,"code"),rN(213,"right"),og(),rN(214,": Posiciona o po-popover no lado direito do componente alvo."),og(),Sl(215,"li")(216,"code"),rN(217,"right-bottom"),og(),rN(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),og(),Sl(219,"li")(220,"code"),rN(221,"right-top"),og(),rN(222,": Posiciona o po-popover no lado direito superior do componente alvo."),og(),Sl(223,"li")(224,"code"),rN(225,"bottom"),og(),rN(226,": Posiciona o po-popover abaixo do componente alvo."),og(),Sl(227,"li")(228,"code"),rN(229,"bottom-left"),og(),rN(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),og(),Sl(231,"li")(232,"code"),rN(233,"bottom-right"),og(),rN(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),og(),Sl(235,"li")(236,"code"),rN(237,"left"),og(),rN(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),og(),Sl(239,"li")(240,"code"),rN(241,"left-top"),og(),rN(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),og(),Sl(243,"li")(244,"code"),rN(245,"left-bottom"),og(),rN(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),og(),Sl(247,"li")(248,"code"),rN(249,"top"),og(),rN(250,": Posiciona o po-popover acima do componente alvo."),og(),Sl(251,"li")(252,"code"),rN(253,"top-right"),og(),rN(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),og(),Sl(255,"li")(256,"code"),rN(257,"top-left"),og(),rN(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),og()()()(),Sl(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),rN(263," p-target"),Wl(264,"br"),og()()(),Sl(265,"td",19)(266,"code",27),rN(267,"ElementRef "),og(),Sl(268,"code",28),rN(269," HTMLElement"),og()(),Sl(270,"td",21),rN(271,"-"),og(),Sl(272,"td",22)(273,"p"),rN(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Sl(275,"pre")(276,"code"),rN(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),og()(),Sl(278,"p"),rN(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),og(),Sl(280,"pre")(281,"code"),rN(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),og()(),Sl(283,"p"),rN(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Sl(285,"pre")(286,"code"),rN(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),og()()()(),Sl(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),rN(292," p-title"),Wl(293,"br"),og()()(),Sl(294,"td",19)(295,"code",26),rN(296,"string"),og()(),Sl(297,"td",21),rN(298,"-"),og(),Sl(299,"td",22)(300,"em")(301,"strong"),rN(302,"(opcional)"),og()(),Sl(303,"p"),rN(304,"T\xEDtulo do popover."),og()()(),Sl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),rN(309," p-trigger"),Wl(310,"br"),og()()(),Sl(311,"td",19)(312,"code",26),rN(313,"string"),og()(),Sl(314,"td",21)(315,"p"),rN(316,"click"),og()(),Sl(317,"td",22)(318,"em")(319,"strong"),rN(320,"(opcional)"),og()(),Sl(321,"p"),rN(322,"Define o evento que abrir\xE1 o po-popover."),og(),Sl(323,"p"),rN(324,"Valores v\xE1lidos:"),og(),Sl(325,"ul")(326,"li")(327,"code"),rN(328,"click"),og(),rN(329,": Abre ao clicar no componente alvo."),og(),Sl(330,"li")(331,"code"),rN(332,"hover"),og(),rN(333,": Abre ao passar o mouse sobre o componente alvo."),og(),Sl(334,"li")(335,"code"),rN(336,"function"),og(),rN(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),og()()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-popover-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),og()()()),a&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,pe,le,de,se],encapsulation:2,changeDetection:1})}return i})();var ke=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[mL.forChild(ke),mL]})}return i})();var ut=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,ue]})}return i})();export{ut as DocPoPopoverModule};