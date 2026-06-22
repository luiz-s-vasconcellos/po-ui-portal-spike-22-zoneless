import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,dw as cNe,F as Sl,H as Wl,J as og,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,cp as Rhe,aJ as Hhe,c9 as Ghe,aM as ww,aN as e0,aq as dx,aO as Ew,aP as n0,at as fx,ba as fNe,a3 as rNe,aB as wx,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var oe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(Sl(0,"div",0),Wl(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),og());},dependencies:[cNe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton Basic"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-skeleton-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ee,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,oe],encapsulation:2})}return o})();function we(o,R){if(o&1){let p=wx();Sl(0,"po-select",12),ww("ngModelChange",function(a){Ky(p);let s=Mx();return nN(s.size,a)||(s.size=a),Xy(a)}),og(),e0();}if(o&2){let p=Mx();Ew("ngModel",p.size),nw("p-options",p.sizeOptions),n0();}}function ye(o,R){if(o&1){let p=wx();Wl(0,"po-divider",13),Sl(1,"po-number",14),ww("ngModelChange",function(a){Ky(p);let s=Mx();return nN(s.circleSize,a)||(s.circleSize=a),Xy(a)}),ft("p-change",function(){Ky(p);let a=Mx();return Xy(a.onCircleSizeChange())}),og(),e0(),Sl(2,"po-select",15),ww("ngModelChange",function(a){Ky(p);let s=Mx();return nN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Xy(a)}),ft("p-change",function(){Ky(p);let a=Mx();return Xy(a.onCircleSizeUnitChange())}),og(),e0(),Wl(3,"po-info",16);}if(o&2){let p=Mx();Lp(),Ew("ngModel",p.circleSize),n0(),Lp(),Ew("ngModel",p.circleSizeUnit),nw("p-options",p.unitOptions),n0(),Lp(),nw("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select");}}function Pe(o,R){if(o&1){let p=wx();Wl(0,"po-divider",17),Sl(1,"po-input",18),ww("ngModelChange",function(a){Ky(p);let s=Mx();return nN(s.width,a)||(s.width=a),Xy(a)}),og(),e0(),Sl(2,"po-input",19),ww("ngModelChange",function(a){Ky(p);let s=Mx();return nN(s.height,a)||(s.height=a),Xy(a)}),og(),e0(),Sl(3,"po-input",20),ww("ngModelChange",function(a){Ky(p);let s=Mx();return nN(s.borderRadius,a)||(s.borderRadius=a),Xy(a)}),og(),e0();}if(o&2){let p=Mx();Lp(),Ew("ngModel",p.width),n0(),Lp(),Ew("ngModel",p.height),n0(),Lp(),Ew("ngModel",p.borderRadius),n0();}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore();}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null;}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%";}else this.width=void 0,this.height=void 0,this.borderRadius=void 0;}onCircleSizeUnitChange(){this.onCircleSizeChange();}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:false,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(Sl(0,"div",0),Wl(1,"po-skeleton",1),og(),Wl(2,"hr")(3,"po-info",2)(4,"hr"),Sl(5,"form",0),Wl(6,"po-divider",3),Sl(7,"po-select",4),ww("ngModelChange",function(x){return nN(a.animation,x)||(a.animation=x),x}),og(),e0(),Sl(8,"po-select",5),ww("ngModelChange",function(x){return nN(a.type,x)||(a.type=x),x}),og(),e0(),Wl(9,"po-divider",6),Sl(10,"po-select",7),ww("ngModelChange",function(x){return nN(a.variant,x)||(a.variant=x),x}),ft("p-change",function(){return a.onVariantChange()}),og(),e0(),dx(11,we,1,2,"po-select",8),Wl(12,"po-divider",9),Sl(13,"po-input",10),ww("ngModelChange",function(x){return nN(a.ariaLabel,x)||(a.ariaLabel=x),x}),og(),e0(),dx(14,ye,4,4),dx(15,Pe,4,3),Sl(16,"po-button",11),ft("p-click",function(){return a.restore()}),og()()),l&2&&(Lp(),nw("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),Lp(2),nw("p-value",a.modelValue),Lp(4),Ew("ngModel",a.animation),nw("p-options",a.animationOptions),n0(),Lp(),Ew("ngModel",a.type),nw("p-options",a.typeOptions),n0(),Lp(2),Ew("ngModel",a.variant),nw("p-options",a.variantOptions),n0(),Lp(),fx(a.variant!=="text"?11:-1),Lp(2),Ew("ngModel",a.ariaLabel),n0(),Lp(),fx(a.variant==="circle"?14:-1),Lp(),fx(a.variant==="text"?15:-1));},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,Rhe,Hhe,Ghe,cNe],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton Labs"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-skeleton
    class="po-md-12"
    [p-variant]="variant"
    [p-type]="type"
    [p-animation]="animation"
    [p-size]="size"
    [p-width]="width || undefined"
    [p-height]="height || undefined"
    [p-border-radius]="borderRadius || undefined"
    [p-aria-label]="ariaLabel"
  >
  </po-skeleton>
</div>

<hr />

<po-info class="po-md-12" p-label="Model" [p-value]="modelValue"></po-info>

<hr />

<form class="po-row">
  <po-divider class="po-md-12" p-label="Animation"></po-divider>

  <po-select
    class="po-md-6"
    name="animation"
    [(ngModel)]="animation"
    p-label="Animation"
    [p-options]="animationOptions"
  >
  </po-select>

  <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

  <po-divider class="po-md-12" p-label="Shapes"></po-divider>

  <po-select
    class="po-md-6"
    name="variant"
    [(ngModel)]="variant"
    p-label="Variant"
    [p-options]="variantOptions"
    (p-change)="onVariantChange()"
  >
  </po-select>

  @if (variant !== 'text') {
    <po-select class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizeOptions"> </po-select>
  }

  <po-divider class="po-md-12" p-label="Accessibility"></po-divider>

  <po-input
    class="po-md-12"
    name="ariaLabel"
    [(ngModel)]="ariaLabel"
    p-label="Aria Label"
    p-help="Texto descritivo para leitores de tela (acessibilidade)"
  >
  </po-input>

  @if (variant === 'circle') {
    <po-divider class="po-md-12" p-label="Circle Dynamic Size (optional)"></po-divider>

    <po-number
      class="po-md-4"
      name="circleSize"
      [(ngModel)]="circleSize"
      p-clean
      p-label="Circle Size"
      p-help="Define o tamanho do c\xEDrculo"
      p-min="1"
      (p-change)="onCircleSizeChange()"
    >
    </po-number>

    <po-select
      class="po-md-2"
      name="circleSizeUnit"
      [(ngModel)]="circleSizeUnit"
      p-label="Unit"
      [p-options]="unitOptions"
      (p-change)="onCircleSizeUnitChange()"
    >
    </po-select>

    <po-info
      class="po-md-6"
      p-label="Applied Size"
      [p-value]="circleSize ? circleSize + circleSizeUnit : 'Using default size from Size select'"
    >
    </po-info>
  }

  @if (variant === 'text') {
    <po-divider class="po-md-12" p-label="Custom (optional)"></po-divider>

    <po-input
      class="po-md-6"
      name="width"
      [(ngModel)]="width"
      p-clean
      p-label="Width"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-label="Height"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="borderRadius"
      [(ngModel)]="borderRadius"
      p-clean
      p-label="Border Radius"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>
  }

  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-labs',
  templateUrl: './sample-po-skeleton-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonLabsComponent implements OnInit {
  animation: string;
  borderRadius: string;
  height: string;
  ariaLabel: string;
  size: string;
  type: string;
  variant: string;
  width: string;
  circleSize: number;
  circleSizeUnit: string = 'px';

  readonly animationOptions = [
    { label: 'Shimmer', value: 'shimmer' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'None', value: 'none' }
  ];

  readonly sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
    { label: 'Extra Extra Large', value: '2xl' }
  ];

  readonly typeOptions = [
    { label: 'Normal', value: 'normal' },
    { label: 'Primary', value: 'primary' },
    { label: 'Content', value: 'content' }
  ];

  readonly variantOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Text', value: 'text' },
    { label: 'Rectangle', value: 'rectangle' },
    { label: 'Square', value: 'square' }
  ];

  readonly unitOptions = [
    { label: 'Pixels (px)', value: 'px' },
    { label: 'REM', value: 'rem' },
    { label: 'EM', value: 'em' },
    { label: 'Percentage (%)', value: '%' }
  ];

  ngOnInit() {
    this.restore();
  }

  get modelValue() {
    return JSON.stringify(
      {
        variant: this.variant,
        type: this.type,
        animation: this.animation,
        size: this.size,
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius,
        ariaLabel: this.ariaLabel
      },
      null,
      2
    );
  }

  onVariantChange() {
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.circleSize = null;
  }

  onCircleSizeChange() {
    if (this.circleSize && this.variant === 'circle') {
      const sizeValue = \`\${this.circleSize}\${this.circleSizeUnit}\`;
      this.width = sizeValue;
      this.height = sizeValue;
      this.borderRadius = '50%';
    } else {
      this.width = undefined;
      this.height = undefined;
      this.borderRadius = undefined;
    }
  }

  onCircleSizeUnitChange() {
    this.onCircleSizeChange();
  }

  restore() {
    this.variant = 'circle';
    this.type = 'normal';
    this.animation = 'shimmer';
    this.size = 'md';
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.ariaLabel = 'Carregando';
    this.circleSize = null;
    this.circleSizeUnit = 'px';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-skeleton-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:false,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),Wl(5,"po-skeleton",4),og()(),Sl(6,"div",5)(7,"div",6),Wl(8,"po-skeleton",7),og(),Sl(9,"div",6),Wl(10,"po-skeleton",7),og(),Sl(11,"div",6),Wl(12,"po-skeleton",7),og(),Sl(13,"div",6),Wl(14,"po-skeleton",7),og()(),Sl(15,"div",8)(16,"div",9),Wl(17,"po-skeleton",10)(18,"po-skeleton",11),og(),Sl(19,"div",12),Wl(20,"po-skeleton",13)(21,"po-skeleton",14),og()(),Sl(22,"div",15),Wl(23,"po-skeleton",16),og()()(),Sl(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),Wl(28,"po-skeleton",19),og()(),Sl(29,"div",5)(30,"div",6),Wl(31,"po-skeleton",20),og(),Sl(32,"div",6),Wl(33,"po-skeleton",20),og(),Sl(34,"div",6),Wl(35,"po-skeleton",20),og(),Sl(36,"div",6),Wl(37,"po-skeleton",20),og()(),Sl(38,"div",8)(39,"div",9),Wl(40,"po-skeleton",21)(41,"po-skeleton",22),og(),Sl(42,"div",12),Wl(43,"po-skeleton",23)(44,"po-skeleton",24),og()(),Sl(45,"div",15),Wl(46,"po-skeleton",25),og()()()());},dependencies:[fNe,cNe],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton - Credit Card"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method">
    <div class="credit-card">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method - Content">
    <div class="credit-card-gray">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm" p-type="content"></po-skeleton>
      </div>
    </div>
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),og(),Sl(25,"pre",11),eN(26,`.credit-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.credit-card-gray {
  background: linear-gradient(135deg, #8b93a7 0%, #6b7280 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.card-chip,
.card-number {
  margin-bottom: 15px;
}

.card-holder,
.card-expiry {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-brand {
  position: absolute;
  bottom: 24px;
  right: 35px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-credit-card"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:false,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),Wl(5,"po-skeleton",5),og(),Sl(6,"div",6),Wl(7,"po-skeleton",7),og(),Sl(8,"div",8),Wl(9,"po-skeleton",9),og()(),Sl(10,"div",10)(11,"div",4),Wl(12,"po-skeleton",5),og()(),Wl(13,"div",11),Sl(14,"div",12)(15,"div",13),Wl(16,"po-skeleton",14),og()()()()());},dependencies:[fNe,cNe],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton - Widget Card"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3">
    <div class="widget-card">
      <div class="po-row widget-header">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-width="80px" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-2 po-md-2 widget-icon">
          <po-skeleton p-variant="square" p-size="sm"></po-skeleton>
        </div>
      </div>

      <div class="po-row widget-content">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
      </div>

      <div class="widget-spacer"></div>

      <div class="po-row widget-footer">
        <div class="po-sm-12 po-md-12 footer-button">
          <po-skeleton p-variant="rectangle" p-size="md"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),og(),Sl(25,"pre",11),eN(26,`.widget-card {
  padding: 8px 0;
}

.widget-header {
  margin-bottom: 8px;
  align-items: center;
}

.widget-icon {
  display: flex;
  justify-content: flex-end;
}

.widget-content {
  margin-bottom: 16px;
}

.widget-spacer {
  height: 40px;
}

.widget-footer {
  display: flex;
  justify-content: flex-end;
}

.footer-button {
  display: flex;
  justify-content: flex-end;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-widget-card"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Oe,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:false,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Wl(4,"po-skeleton",4),og(),Wl(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),Sl(10,"div",10)(11,"div",11),Wl(12,"po-skeleton",12)(13,"po-skeleton",13),og(),Sl(14,"div",11),Wl(15,"po-skeleton",12)(16,"po-skeleton",14),og(),Sl(17,"div",11),Wl(18,"po-skeleton",12)(19,"po-skeleton",15),og()()()()());},dependencies:[fNe,cNe],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton - User Profile"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-md-6" p-title="User Profile">
    <div class="profile-card">
      <!-- Profile picture -->
      <div class="profile-picture">
        <po-skeleton p-variant="circle" p-size="xl" p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>
      </div>

      <!-- Name -->
      <po-skeleton p-variant="text" p-width="150px"></po-skeleton>

      <!-- Email -->
      <po-skeleton p-variant="text" p-width="200px"></po-skeleton>

      <!-- Bio -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>

      <!-- Stats -->
      <div class="profile-stats">
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="70px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="65px" p-size="sm"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),og(),Sl(25,"pre",11),eN(26,`.profile-card {
  text-align: center;
  padding: 24px;
}

.profile-picture {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.profile-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-user-profile"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,qe,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:false,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),Wl(4,"po-skeleton",4),Sl(5,"div",5),Wl(6,"po-skeleton",6)(7,"po-skeleton",6),og()(),Wl(8,"po-skeleton",7),Sl(9,"div",8),Wl(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),og(),Wl(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),og()(),Sl(17,"po-widget",1)(18,"div",2)(19,"div",3),Wl(20,"po-skeleton",14),Sl(21,"div",5),Wl(22,"po-skeleton",6)(23,"po-skeleton",6),og()(),Wl(24,"po-skeleton",15),Sl(25,"div",8),Wl(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),og(),Wl(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),og()()());},dependencies:[fNe,cNe],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton - Social Post"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <!-- Post Card 1 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm" p-aria-label="Carregando post de rede social"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="300px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="120px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="85%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="60%"></po-skeleton>
    </div>
  </po-widget>

  <!-- Post Card 2 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="250px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="140px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="65%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="50%"></po-skeleton>
    </div>
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),og(),Sl(25,"pre",11),eN(26,`.post-card {
  padding: 16px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-header-text {
  flex: 1;
}

.post-actions {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}

.post-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-social-post"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article"]],standalone:false,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2),Wl(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),Sl(6,"div",6),Wl(7,"po-skeleton",7),Sl(8,"div",8),Wl(9,"po-skeleton",9)(10,"po-skeleton",10),og()(),Wl(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),og()()());},dependencies:[fNe,cNe],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Skeleton - Article"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-widget class="po-md-6" p-height="380" p-title="Latest Article">
    <div class="article-card">
      <!-- Article thumbnail -->
      <po-skeleton p-variant="rectangle" p-height="150px" p-aria-label="Carregando artigo"></po-skeleton>

      <!-- Article title -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Author info -->
      <div class="article-author">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="author-details">
          <po-skeleton p-variant="text" p-width="100px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="80px" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Article excerpt -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="75%"></po-skeleton>

      <!-- Read more -->
      <po-skeleton p-variant="text" p-width="80px"></po-skeleton>
    </div>
  </po-widget>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),og(),Sl(25,"pre",11),eN(26,`.article-card {
  padding: 16px;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.article-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-skeleton-article"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,He,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return o})();var ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:false,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-skeleton."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoSkeletonComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-skeleton"),og(),eN(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),og(),Sl(18,"p"),eN(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),og(),Sl(20,"h4"),eN(21,"Tokens customiz\xE1veis"),og(),Sl(22,"p"),eN(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(24,"blockquote")(25,"p"),eN(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(27,"a",6),eN(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(29,"."),og()(),Sl(30,"table")(31,"thead")(32,"tr")(33,"th"),eN(34,"Propriedade"),og(),Sl(35,"th"),eN(36,"Descri\xE7\xE3o"),og(),Sl(37,"th"),eN(38,"Valor Padr\xE3o"),og()()(),Sl(39,"tbody")(40,"tr")(41,"td")(42,"strong"),eN(43,"Cores"),og()(),Wl(44,"td")(45,"td"),og(),Sl(46,"tr")(47,"td")(48,"code"),eN(49,"--color"),og()(),Sl(50,"td"),eN(51,"Cor de fundo do skeleton (tipo normal)"),og(),Sl(52,"td")(53,"code"),eN(54,"var(--color-neutral-light-20)"),og()()(),Sl(55,"tr")(56,"td")(57,"code"),eN(58,"--color-primary"),og()(),Sl(59,"td"),eN(60,"Cor de fundo do skeleton (tipo primary)"),og(),Sl(61,"td")(62,"code"),eN(63,"var(--color-neutral-mid-40)"),og()()(),Sl(64,"tr")(65,"td")(66,"code"),eN(67,"--color-content"),og()(),Sl(68,"td"),eN(69,"Cor de fundo do skeleton (tipo content)"),og(),Sl(70,"td")(71,"code"),eN(72,"var(--color-neutral-light-00)"),og()()(),Sl(73,"tr")(74,"td")(75,"code"),eN(76,"--shimmer-highlight"),og()(),Sl(77,"td"),eN(78,"Cor de destaque do shimmer (tipo normal)"),og(),Sl(79,"td")(80,"code"),eN(81,"var(--color-neutral-light-30)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),eN(85,"--shimmer-highlight-primary"),og()(),Sl(86,"td"),eN(87,"Cor de destaque do shimmer (tipo primary)"),og(),Sl(88,"td")(89,"code"),eN(90,"var(--color-neutral-light-20)"),og()()(),Sl(91,"tr")(92,"td")(93,"code"),eN(94,"--shimmer-highlight-content"),og()(),Sl(95,"td"),eN(96,"Cor de destaque do shimmer (tipo content)"),og(),Sl(97,"td")(98,"code"),eN(99,"var(--color-neutral-light-05)"),og()()(),Sl(100,"tr")(101,"td")(102,"strong"),eN(103,"Espa\xE7amento"),og()(),Wl(104,"td")(105,"td"),og(),Sl(106,"tr")(107,"td")(108,"code"),eN(109,"--margin-bottom"),og()(),Sl(110,"td"),eN(111,"Margem inferior do skeleton"),og(),Sl(112,"td")(113,"code"),eN(114,"var(--spacing-xs)"),og()()(),Sl(115,"tr")(116,"td")(117,"strong"),eN(118,"Bordas"),og()(),Wl(119,"td")(120,"td"),og(),Sl(121,"tr")(122,"td")(123,"code"),eN(124,"--border-radius"),og()(),Sl(125,"td"),eN(126,"Raio da borda do skeleton"),og(),Sl(127,"td")(128,"code"),eN(129,"var(--border-radius-md)"),og()()(),Sl(130,"tr")(131,"td")(132,"code"),eN(133,"--border-radius-text"),og()(),Sl(134,"td"),eN(135,"Raio da borda para a variante text"),og(),Sl(136,"td")(137,"code"),eN(138,"var(--border-radius-md)"),og()()(),Sl(139,"tr")(140,"td")(141,"code"),eN(142,"--border-radius-primary"),og()(),Sl(143,"td"),eN(144,"Raio da borda do skeleton (tipo primary)"),og(),Sl(145,"td")(146,"code"),eN(147,"var(--border-radius-md)"),og()()(),Sl(148,"tr")(149,"td")(150,"code"),eN(151,"--border-radius-content"),og()(),Sl(152,"td"),eN(153,"Raio da borda do skeleton (tipo content)"),og(),Sl(154,"td")(155,"code"),eN(156,"var(--border-radius-lg)"),og()()(),Sl(157,"tr")(158,"td")(159,"strong"),eN(160,"Transi\xE7\xF5es"),og()(),Wl(161,"td")(162,"td"),og(),Sl(163,"tr")(164,"td")(165,"code"),eN(166,"--transition-property"),og()(),Sl(167,"td"),eN(168,"Propriedade CSS da transi\xE7\xE3o"),og(),Sl(169,"td")(170,"code"),eN(171,"all"),og()()(),Sl(172,"tr")(173,"td")(174,"code"),eN(175,"--transition-duration"),og()(),Sl(176,"td"),eN(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),og(),Sl(178,"td")(179,"code"),eN(180,"var(--duration-moderate)"),og()()(),Sl(181,"tr")(182,"td")(183,"code"),eN(184,"--transition-timing"),og()(),Sl(185,"td"),eN(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),og(),Sl(187,"td")(188,"code"),eN(189,"var(--timing-continuous)"),og()()(),Sl(190,"tr")(191,"td")(192,"strong"),eN(193,"Anima\xE7\xF5es"),og()(),Wl(194,"td")(195,"td"),og(),Sl(196,"tr")(197,"td")(198,"code"),eN(199,"--animation-duration-pulse"),og()(),Sl(200,"td"),eN(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),og(),Sl(202,"td")(203,"code"),eN(204,"var(--duration-very-slow)"),og()()(),Sl(205,"tr")(206,"td")(207,"code"),eN(208,"--animation-duration-shimmer"),og()(),Sl(209,"td"),eN(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),og(),Sl(211,"td")(212,"code"),eN(213,"var(--duration-ultra-slow)"),og()()()()()(),Sl(214,"div",7)(215,"h4",8),eN(216,"Seletor"),og(),Sl(217,"pre",9),eN(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),og()(),Sl(219,"h4",10),eN(220,"Propriedades"),og(),Sl(221,"table",11)(222,"tr",12)(223,"th",13),eN(224,"Nome"),og(),Sl(225,"th",13),eN(226,"Tipo"),og(),Sl(227,"th",13),eN(228,"Padr\xE3o"),og(),Sl(229,"th",13),eN(230,"Descri\xE7\xE3o"),og()(),Sl(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),eN(235," p-animation"),Wl(236,"br"),og()()(),Sl(237,"td",18)(238,"code",19),eN(239,"PoSkeletonAnimation"),og()(),Sl(240,"td",20)(241,"p")(242,"code"),eN(243,"shimmer"),og()()(),Sl(244,"td",21)(245,"em")(246,"strong"),eN(247,"(opcional)"),og()(),Sl(248,"p"),eN(249,"Define o tipo de anima\xE7\xE3o do skeleton."),og(),Sl(250,"p"),eN(251,"Valores v\xE1lidos:"),og(),Sl(252,"ul")(253,"li")(254,"code"),eN(255,"none"),og(),eN(256,": Sem anima\xE7\xE3o"),og(),Sl(257,"li")(258,"code"),eN(259,"pulse"),og(),eN(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),og(),Sl(261,"li")(262,"code"),eN(263,"shimmer"),og(),eN(264,": Anima\xE7\xE3o de brilho deslizante"),og()()()(),Sl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),eN(269," p-aria-label"),Wl(270,"br"),og()()(),Sl(271,"td",18)(272,"code",22),eN(273,"string"),og()(),Sl(274,"td",20),eN(275,"-"),og(),Sl(276,"td",21)(277,"em")(278,"strong"),eN(279,"(opcional)"),og()(),Sl(280,"p"),eN(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),og(),Sl(282,"p"),eN(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),og(),Sl(284,"p")(285,"strong"),eN(286,"Quando usar:"),og()(),Sl(287,"ul")(288,"li"),eN(289,"Use em "),Sl(290,"strong"),eN(291,"skeletons \xFAnicos"),og(),eN(292," ou no "),Sl(293,"strong"),eN(294,"primeiro skeleton de um grupo"),og(),eN(295," com descri\xE7\xE3o contextual"),og(),Sl(296,"li"),eN(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),og()(),Sl(298,"p")(299,"strong"),eN(300,"Exemplos de uso:"),og()(),Sl(301,"pre")(302,"code",23),eN(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),og()(),Sl(304,"blockquote")(305,"p")(306,"strong"),eN(307,"Boas pr\xE1ticas de acessibilidade:"),og()(),Sl(308,"ul")(309,"li"),eN(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),og()()(),Sl(311,"blockquote")(312,"ul")(313,"li"),eN(314,"Em casos complexos, considere usar um \xFAnico "),Sl(315,"code"),eN(316,'<div role="status">'),og(),eN(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),og()()()()(),Sl(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),eN(322," p-border-radius"),Wl(323,"br"),og()()(),Sl(324,"td",18)(325,"code",22),eN(326,"string"),og()(),Sl(327,"td",20),eN(328,"-"),og(),Sl(329,"td",21)(330,"em")(331,"strong"),eN(332,"(opcional)"),og()(),Sl(333,"p"),eN(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Sl(335,"p"),eN(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),og()()(),Sl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),eN(341," p-height"),Wl(342,"br"),og()()(),Sl(343,"td",18)(344,"code",22),eN(345,"string"),og()(),Sl(346,"td",20),eN(347,"-"),og(),Sl(348,"td",21)(349,"em")(350,"strong"),eN(351,"(opcional)"),og()(),Sl(352,"p"),eN(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Sl(354,"p"),eN(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),og()()(),Sl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),eN(360," p-size"),Wl(361,"br"),og()()(),Sl(362,"td",18)(363,"code",24),eN(364,"PoSkeletonSize"),og()(),Sl(365,"td",20)(366,"p")(367,"code"),eN(368,"md"),og()()(),Sl(369,"td",21)(370,"em")(371,"strong"),eN(372,"(opcional)"),og()(),Sl(373,"p"),eN(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),Sl(375,"code"),eN(376,"rectangle"),og(),eN(377,", "),Sl(378,"code"),eN(379,"square"),og(),eN(380,", "),Sl(381,"code"),eN(382,"circle"),og(),eN(383,")."),og(),Sl(384,"p"),eN(385,"Valores v\xE1lidos:"),og(),Sl(386,"ul")(387,"li")(388,"code"),eN(389,"xs"),og(),eN(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),og(),Sl(391,"li")(392,"code"),eN(393,"sm"),og(),eN(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),og(),Sl(395,"li")(396,"code"),eN(397,"md"),og(),eN(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),og(),Sl(399,"li")(400,"code"),eN(401,"lg"),og(),eN(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),og(),Sl(403,"li")(404,"code"),eN(405,"xl"),og(),eN(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),og(),Sl(407,"li")(408,"code"),eN(409,"2xl"),og(),eN(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),og()(),Sl(411,"p"),eN(412,"Esta propriedade \xE9 ignorada quando "),Sl(413,"code"),eN(414,"p-width"),og(),eN(415," ou "),Sl(416,"code"),eN(417,"p-height"),og(),eN(418," s\xE3o definidos explicitamente."),og()()(),Sl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),eN(423," p-type"),Wl(424,"br"),og()()(),Sl(425,"td",18)(426,"code",25),eN(427,"PoSkeletonType"),og()(),Sl(428,"td",20)(429,"p")(430,"code"),eN(431,"normal"),og()()(),Sl(432,"td",21)(433,"em")(434,"strong"),eN(435,"(opcional)"),og()(),Sl(436,"p"),eN(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),og(),Sl(438,"p"),eN(439,"Valores v\xE1lidos:"),og(),Sl(440,"ul")(441,"li")(442,"code"),eN(443,"normal"),og(),eN(444,": Cor neutra clara (padr\xE3o)"),og(),Sl(445,"li")(446,"code"),eN(447,"primary"),og(),eN(448,": Cor neutra m\xE9dia"),og(),Sl(449,"li")(450,"code"),eN(451,"content"),og(),eN(452,": Fundo branco"),og()()()(),Sl(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),eN(457," p-variant"),Wl(458,"br"),og()()(),Sl(459,"td",18)(460,"code",26),eN(461,"PoSkeletonVariant"),og()(),Sl(462,"td",20)(463,"p")(464,"code"),eN(465,"text"),og()()(),Sl(466,"td",21)(467,"em")(468,"strong"),eN(469,"(opcional)"),og()(),Sl(470,"p"),eN(471,"Define a variante visual do skeleton."),og(),Sl(472,"p"),eN(473,"Valores v\xE1lidos:"),og(),Sl(474,"ul")(475,"li")(476,"code"),eN(477,"text"),og(),eN(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),og(),Sl(479,"li")(480,"code"),eN(481,"rectangle"),og(),eN(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),og(),Sl(483,"li")(484,"code"),eN(485,"square"),og(),eN(486,": Forma quadrada (largura e altura iguais)"),og(),Sl(487,"li")(488,"code"),eN(489,"circle"),og(),eN(490,": Forma circular (largura e altura iguais)"),og()()()(),Sl(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),eN(495," p-width"),Wl(496,"br"),og()()(),Sl(497,"td",18)(498,"code",22),eN(499,"string"),og()(),Sl(500,"td",20)(501,"p")(502,"code"),eN(503,"100%"),og(),eN(504," para variante "),Sl(505,"code"),eN(506,"text"),og(),eN(507,", tamanho baseado em "),Sl(508,"code"),eN(509,"p-size"),og(),eN(510," para outras variantes"),og()(),Sl(511,"td",21)(512,"em")(513,"strong"),eN(514,"(opcional)"),og()(),Sl(515,"p"),eN(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Sl(517,"p"),eN(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),og()()()(),Sl(519,"h3"),eN(520,"Enums"),og(),Sl(521,"h4",4)(522,"code",5),eN(523,"PoSkeletonAnimation"),og()(),Sl(524,"div",2)(525,"p"),eN(526,"Define os tipos de anima\xE7\xE3o do componente "),Sl(527,"code"),eN(528,"po-skeleton"),og(),eN(529,"."),og()(),Sl(530,"h4",10),eN(531,"Propriedades"),og(),Sl(532,"table",11)(533,"tr",12)(534,"th",13),eN(535,"Nome"),og(),Sl(536,"th",13),eN(537,"Descri\xE7\xE3o"),og()(),Sl(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),eN(542," none"),Wl(543,"br"),og()()(),Sl(544,"td",21)(545,"p"),eN(546,"Sem anima\xE7\xE3o"),og()()(),Sl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),eN(551," pulse"),Wl(552,"br"),og()()(),Sl(553,"td",21)(554,"p"),eN(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),og()()(),Sl(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),eN(560," shimmer"),Wl(561,"br"),og()()(),Sl(562,"td",21)(563,"p"),eN(564,"Anima\xE7\xE3o de brilho deslizante"),og()()()(),Sl(565,"h4",4)(566,"code",5),eN(567,"PoSkeletonSize"),og()(),Sl(568,"div",2)(569,"p"),eN(570,"Define os tamanhos dispon\xEDveis para o componente "),Sl(571,"code"),eN(572,"po-skeleton"),og(),eN(573,"."),og()(),Sl(574,"h4",10),eN(575,"Propriedades"),og(),Sl(576,"table",11)(577,"tr",12)(578,"th",13),eN(579,"Nome"),og(),Sl(580,"th",13),eN(581,"Descri\xE7\xE3o"),og()(),Sl(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),eN(586," xs"),Wl(587,"br"),og()()(),Sl(588,"td",21)(589,"p"),eN(590,"Tamanho extra pequeno"),og()()(),Sl(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),eN(595," sm"),Wl(596,"br"),og()()(),Sl(597,"td",21)(598,"p"),eN(599,"Tamanho pequeno"),og()()(),Sl(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),eN(604," md"),Wl(605,"br"),og()()(),Sl(606,"td",21)(607,"p"),eN(608,"Tamanho m\xE9dio"),og()()(),Sl(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),eN(613," lg"),Wl(614,"br"),og()()(),Sl(615,"td",21)(616,"p"),eN(617,"Tamanho grande"),og()()(),Sl(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),eN(622," xl"),Wl(623,"br"),og()()(),Sl(624,"td",21)(625,"p"),eN(626,"Tamanho extra grande"),og()()(),Sl(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),eN(631," xxl"),Wl(632,"br"),og()()(),Sl(633,"td",21)(634,"p"),eN(635,"Tamanho extra extra grande"),og()()()(),Sl(636,"h4",4)(637,"code",5),eN(638,"PoSkeletonType"),og()(),Sl(639,"div",2)(640,"p"),eN(641,"Define os tipos visuais dispon\xEDveis para o componente "),Sl(642,"code"),eN(643,"po-skeleton"),og(),eN(644,"."),og()(),Sl(645,"h4",10),eN(646,"Propriedades"),og(),Sl(647,"table",11)(648,"tr",12)(649,"th",13),eN(650,"Nome"),og(),Sl(651,"th",13),eN(652,"Descri\xE7\xE3o"),og()(),Sl(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),eN(657," normal"),Wl(658,"br"),og()()(),Sl(659,"td",21)(660,"p"),eN(661,"Tipo padr\xE3o com cor neutra clara"),og()()(),Sl(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),eN(666," primary"),Wl(667,"br"),og()()(),Sl(668,"td",21)(669,"p"),eN(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),og()()(),Sl(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),eN(675," content"),Wl(676,"br"),og()()(),Sl(677,"td",21)(678,"p"),eN(679,"Tipo de conte\xFAdo com fundo branco"),og()()()(),Sl(680,"h4",4)(681,"code",5),eN(682,"PoSkeletonVariant"),og()(),Sl(683,"div",2)(684,"p"),eN(685,"Define as variantes visuais do componente "),Sl(686,"code"),eN(687,"po-skeleton"),og(),eN(688,"."),og()(),Sl(689,"h4",10),eN(690,"Propriedades"),og(),Sl(691,"table",11)(692,"tr",12)(693,"th",13),eN(694,"Nome"),og(),Sl(695,"th",13),eN(696,"Descri\xE7\xE3o"),og()(),Sl(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),eN(701," text"),Wl(702,"br"),og()()(),Sl(703,"td",21)(704,"p"),eN(705,"Variante para simular texto"),og()()(),Sl(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),eN(710," rectangle"),Wl(711,"br"),og()()(),Sl(712,"td",21)(713,"p"),eN(714,"Variante retangular (largura maior que altura)"),og()()(),Sl(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),eN(719," square"),Wl(720,"br"),og()()(),Sl(721,"td",21)(722,"p"),eN(723,"Variante quadrada (largura igual \xE0 altura)"),og()()(),Sl(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),eN(728," circle"),Wl(729,"br"),og()()(),Sl(730,"td",21)(731,"p"),eN(732,"Variante circular"),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var ke=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return a.changeTab("doc")}),Wl(3,"sample-po-skeleton-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return a.changeTab("web")}),Wl(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),og()()()),l&2&&(nw("p-actions",a.actions),Lp(2),nw("p-active",a.activeTab==="doc"),Lp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[rNe,Bme,qme,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2})}return o})();var Ge=[{path:"",component:ke}],Ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[hL.forChild(Ge),hL]})}return o})();var Vt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,Ce]})}return o})();export{Vt as DocPoSkeletonModule};