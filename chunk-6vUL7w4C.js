import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dx as hNe,H as Il,J as zl,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,cp as Hhe,aJ as qhe,c9 as Yhe,aM as ww,aN as QA,aq as lx,aO as Ew,aP as e0,at as ux,ba as yNe,a3 as cNe,aB as Dx,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var oe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(Il(0,"div",0),zl(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),og());},dependencies:[hNe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton Basic"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-skeleton-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return o})();function we(o,R){if(o&1){let p=Dx();Il(0,"po-select",12),ww("ngModelChange",function(a){Xy(p);let s=Sx();return eN(s.size,a)||(s.size=a),Qy(a)}),og(),QA();}if(o&2){let p=Sx();Ew("ngModel",p.size),nw("p-options",p.sizeOptions),e0();}}function ye(o,R){if(o&1){let p=Dx();zl(0,"po-divider",13),Il(1,"po-number",14),ww("ngModelChange",function(a){Xy(p);let s=Sx();return eN(s.circleSize,a)||(s.circleSize=a),Qy(a)}),ft("p-change",function(){Xy(p);let a=Sx();return Qy(a.onCircleSizeChange())}),og(),QA(),Il(2,"po-select",15),ww("ngModelChange",function(a){Xy(p);let s=Sx();return eN(s.circleSizeUnit,a)||(s.circleSizeUnit=a),Qy(a)}),ft("p-change",function(){Xy(p);let a=Sx();return Qy(a.onCircleSizeUnitChange())}),og(),QA(),zl(3,"po-info",16);}if(o&2){let p=Sx();Lp(),Ew("ngModel",p.circleSize),e0(),Lp(),Ew("ngModel",p.circleSizeUnit),nw("p-options",p.unitOptions),e0(),Lp(),nw("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select");}}function Pe(o,R){if(o&1){let p=Dx();zl(0,"po-divider",17),Il(1,"po-input",18),ww("ngModelChange",function(a){Xy(p);let s=Sx();return eN(s.width,a)||(s.width=a),Qy(a)}),og(),QA(),Il(2,"po-input",19),ww("ngModelChange",function(a){Xy(p);let s=Sx();return eN(s.height,a)||(s.height=a),Qy(a)}),og(),QA(),Il(3,"po-input",20),ww("ngModelChange",function(a){Xy(p);let s=Sx();return eN(s.borderRadius,a)||(s.borderRadius=a),Qy(a)}),og(),QA();}if(o&2){let p=Sx();Lp(),Ew("ngModel",p.width),e0(),Lp(),Ew("ngModel",p.height),e0(),Lp(),Ew("ngModel",p.borderRadius),e0();}}var le=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore();}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null;}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%";}else this.width=void 0,this.height=void 0,this.borderRadius=void 0;}onCircleSizeUnitChange(){this.onCircleSizeChange();}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:false,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(Il(0,"div",0),zl(1,"po-skeleton",1),og(),zl(2,"hr")(3,"po-info",2)(4,"hr"),Il(5,"form",0),zl(6,"po-divider",3),Il(7,"po-select",4),ww("ngModelChange",function(x){return eN(a.animation,x)||(a.animation=x),x}),og(),QA(),Il(8,"po-select",5),ww("ngModelChange",function(x){return eN(a.type,x)||(a.type=x),x}),og(),QA(),zl(9,"po-divider",6),Il(10,"po-select",7),ww("ngModelChange",function(x){return eN(a.variant,x)||(a.variant=x),x}),ft("p-change",function(){return a.onVariantChange()}),og(),QA(),lx(11,we,1,2,"po-select",8),zl(12,"po-divider",9),Il(13,"po-input",10),ww("ngModelChange",function(x){return eN(a.ariaLabel,x)||(a.ariaLabel=x),x}),og(),QA(),lx(14,ye,4,4),lx(15,Pe,4,3),Il(16,"po-button",11),ft("p-click",function(){return a.restore()}),og()()),l&2&&(Lp(),nw("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),Lp(2),nw("p-value",a.modelValue),Lp(4),Ew("ngModel",a.animation),nw("p-options",a.animationOptions),e0(),Lp(),Ew("ngModel",a.type),nw("p-options",a.typeOptions),e0(),Lp(2),Ew("ngModel",a.variant),nw("p-options",a.variantOptions),e0(),Lp(),ux(a.variant!=="text"?11:-1),Lp(2),Ew("ngModel",a.ariaLabel),e0(),Lp(),ux(a.variant==="circle"?14:-1),Lp(),ux(a.variant==="text"?15:-1));},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,Hhe,qhe,Yhe,hNe],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton Labs"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-skeleton-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:false,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),zl(5,"po-skeleton",4),og()(),Il(6,"div",5)(7,"div",6),zl(8,"po-skeleton",7),og(),Il(9,"div",6),zl(10,"po-skeleton",7),og(),Il(11,"div",6),zl(12,"po-skeleton",7),og(),Il(13,"div",6),zl(14,"po-skeleton",7),og()(),Il(15,"div",8)(16,"div",9),zl(17,"po-skeleton",10)(18,"po-skeleton",11),og(),Il(19,"div",12),zl(20,"po-skeleton",13)(21,"po-skeleton",14),og()(),Il(22,"div",15),zl(23,"po-skeleton",16),og()()(),Il(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),zl(28,"po-skeleton",19),og()(),Il(29,"div",5)(30,"div",6),zl(31,"po-skeleton",20),og(),Il(32,"div",6),zl(33,"po-skeleton",20),og(),Il(34,"div",6),zl(35,"po-skeleton",20),og(),Il(36,"div",6),zl(37,"po-skeleton",20),og()(),Il(38,"div",8)(39,"div",9),zl(40,"po-skeleton",21)(41,"po-skeleton",22),og(),Il(42,"div",12),zl(43,"po-skeleton",23)(44,"po-skeleton",24),og()(),Il(45,"div",15),zl(46,"po-skeleton",25),og()()()());},dependencies:[yNe,hNe],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"],changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton - Credit Card"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),og(),Il(25,"pre",11),Qx(26,`.credit-card {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-skeleton-credit-card"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:false,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),zl(5,"po-skeleton",5),og(),Il(6,"div",6),zl(7,"po-skeleton",7),og(),Il(8,"div",8),zl(9,"po-skeleton",9),og()(),Il(10,"div",10)(11,"div",4),zl(12,"po-skeleton",5),og()(),zl(13,"div",11),Il(14,"div",12)(15,"div",13),zl(16,"po-skeleton",14),og()()()()());},dependencies:[yNe,hNe],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton - Widget Card"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),og(),Il(25,"pre",11),Qx(26,`.widget-card {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-skeleton-widget-card"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Oe,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:false,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),zl(4,"po-skeleton",4),og(),zl(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),Il(10,"div",10)(11,"div",11),zl(12,"po-skeleton",12)(13,"po-skeleton",13),og(),Il(14,"div",11),zl(15,"po-skeleton",12)(16,"po-skeleton",14),og(),Il(17,"div",11),zl(18,"po-skeleton",12)(19,"po-skeleton",15),og()()()()());},dependencies:[yNe,hNe],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton - User Profile"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),og(),Il(25,"pre",11),Qx(26,`.profile-card {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-skeleton-user-profile"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,qe,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:false,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),zl(4,"po-skeleton",4),Il(5,"div",5),zl(6,"po-skeleton",6)(7,"po-skeleton",6),og()(),zl(8,"po-skeleton",7),Il(9,"div",8),zl(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),og(),zl(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),og()(),Il(17,"po-widget",1)(18,"div",2)(19,"div",3),zl(20,"po-skeleton",14),Il(21,"div",5),zl(22,"po-skeleton",6)(23,"po-skeleton",6),og()(),zl(24,"po-skeleton",15),Il(25,"div",8),zl(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),og(),zl(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),og()()());},dependencies:[yNe,hNe],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton - Social Post"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),og(),Il(25,"pre",11),Qx(26,`.post-card {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-skeleton-social-post"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article"]],standalone:false,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"div",2),zl(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),Il(6,"div",6),zl(7,"po-skeleton",7),Il(8,"div",8),zl(9,"po-skeleton",9)(10,"po-skeleton",10),og()(),zl(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),og()()());},dependencies:[yNe,hNe],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"],changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Skeleton - Article"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),og(),Il(25,"pre",11),Qx(26,`.article-card {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-skeleton-article"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,He,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return o})();var ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:false,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-skeleton."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoSkeletonComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-skeleton"),og(),Qx(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),og(),Il(18,"p"),Qx(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),og(),Il(20,"h4"),Qx(21,"Tokens customiz\xE1veis"),og(),Il(22,"p"),Qx(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(24,"blockquote")(25,"p"),Qx(26,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(27,"a",6),Qx(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(29,"."),og()(),Il(30,"table")(31,"thead")(32,"tr")(33,"th"),Qx(34,"Propriedade"),og(),Il(35,"th"),Qx(36,"Descri\xE7\xE3o"),og(),Il(37,"th"),Qx(38,"Valor Padr\xE3o"),og()()(),Il(39,"tbody")(40,"tr")(41,"td")(42,"strong"),Qx(43,"Cores"),og()(),zl(44,"td")(45,"td"),og(),Il(46,"tr")(47,"td")(48,"code"),Qx(49,"--color"),og()(),Il(50,"td"),Qx(51,"Cor de fundo do skeleton (tipo normal)"),og(),Il(52,"td")(53,"code"),Qx(54,"var(--color-neutral-light-20)"),og()()(),Il(55,"tr")(56,"td")(57,"code"),Qx(58,"--color-primary"),og()(),Il(59,"td"),Qx(60,"Cor de fundo do skeleton (tipo primary)"),og(),Il(61,"td")(62,"code"),Qx(63,"var(--color-neutral-mid-40)"),og()()(),Il(64,"tr")(65,"td")(66,"code"),Qx(67,"--color-content"),og()(),Il(68,"td"),Qx(69,"Cor de fundo do skeleton (tipo content)"),og(),Il(70,"td")(71,"code"),Qx(72,"var(--color-neutral-light-00)"),og()()(),Il(73,"tr")(74,"td")(75,"code"),Qx(76,"--shimmer-highlight"),og()(),Il(77,"td"),Qx(78,"Cor de destaque do shimmer (tipo normal)"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--color-neutral-light-30)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--shimmer-highlight-primary"),og()(),Il(86,"td"),Qx(87,"Cor de destaque do shimmer (tipo primary)"),og(),Il(88,"td")(89,"code"),Qx(90,"var(--color-neutral-light-20)"),og()()(),Il(91,"tr")(92,"td")(93,"code"),Qx(94,"--shimmer-highlight-content"),og()(),Il(95,"td"),Qx(96,"Cor de destaque do shimmer (tipo content)"),og(),Il(97,"td")(98,"code"),Qx(99,"var(--color-neutral-light-05)"),og()()(),Il(100,"tr")(101,"td")(102,"strong"),Qx(103,"Espa\xE7amento"),og()(),zl(104,"td")(105,"td"),og(),Il(106,"tr")(107,"td")(108,"code"),Qx(109,"--margin-bottom"),og()(),Il(110,"td"),Qx(111,"Margem inferior do skeleton"),og(),Il(112,"td")(113,"code"),Qx(114,"var(--spacing-xs)"),og()()(),Il(115,"tr")(116,"td")(117,"strong"),Qx(118,"Bordas"),og()(),zl(119,"td")(120,"td"),og(),Il(121,"tr")(122,"td")(123,"code"),Qx(124,"--border-radius"),og()(),Il(125,"td"),Qx(126,"Raio da borda do skeleton"),og(),Il(127,"td")(128,"code"),Qx(129,"var(--border-radius-md)"),og()()(),Il(130,"tr")(131,"td")(132,"code"),Qx(133,"--border-radius-text"),og()(),Il(134,"td"),Qx(135,"Raio da borda para a variante text"),og(),Il(136,"td")(137,"code"),Qx(138,"var(--border-radius-md)"),og()()(),Il(139,"tr")(140,"td")(141,"code"),Qx(142,"--border-radius-primary"),og()(),Il(143,"td"),Qx(144,"Raio da borda do skeleton (tipo primary)"),og(),Il(145,"td")(146,"code"),Qx(147,"var(--border-radius-md)"),og()()(),Il(148,"tr")(149,"td")(150,"code"),Qx(151,"--border-radius-content"),og()(),Il(152,"td"),Qx(153,"Raio da borda do skeleton (tipo content)"),og(),Il(154,"td")(155,"code"),Qx(156,"var(--border-radius-lg)"),og()()(),Il(157,"tr")(158,"td")(159,"strong"),Qx(160,"Transi\xE7\xF5es"),og()(),zl(161,"td")(162,"td"),og(),Il(163,"tr")(164,"td")(165,"code"),Qx(166,"--transition-property"),og()(),Il(167,"td"),Qx(168,"Propriedade CSS da transi\xE7\xE3o"),og(),Il(169,"td")(170,"code"),Qx(171,"all"),og()()(),Il(172,"tr")(173,"td")(174,"code"),Qx(175,"--transition-duration"),og()(),Il(176,"td"),Qx(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),og(),Il(178,"td")(179,"code"),Qx(180,"var(--duration-moderate)"),og()()(),Il(181,"tr")(182,"td")(183,"code"),Qx(184,"--transition-timing"),og()(),Il(185,"td"),Qx(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),og(),Il(187,"td")(188,"code"),Qx(189,"var(--timing-continuous)"),og()()(),Il(190,"tr")(191,"td")(192,"strong"),Qx(193,"Anima\xE7\xF5es"),og()(),zl(194,"td")(195,"td"),og(),Il(196,"tr")(197,"td")(198,"code"),Qx(199,"--animation-duration-pulse"),og()(),Il(200,"td"),Qx(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),og(),Il(202,"td")(203,"code"),Qx(204,"var(--duration-very-slow)"),og()()(),Il(205,"tr")(206,"td")(207,"code"),Qx(208,"--animation-duration-shimmer"),og()(),Il(209,"td"),Qx(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),og(),Il(211,"td")(212,"code"),Qx(213,"var(--duration-ultra-slow)"),og()()()()()(),Il(214,"div",7)(215,"h4",8),Qx(216,"Seletor"),og(),Il(217,"pre",9),Qx(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),og()(),Il(219,"h4",10),Qx(220,"Propriedades"),og(),Il(221,"table",11)(222,"tr",12)(223,"th",13),Qx(224,"Nome"),og(),Il(225,"th",13),Qx(226,"Tipo"),og(),Il(227,"th",13),Qx(228,"Padr\xE3o"),og(),Il(229,"th",13),Qx(230,"Descri\xE7\xE3o"),og()(),Il(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),Qx(235," p-animation"),zl(236,"br"),og()()(),Il(237,"td",18)(238,"code",19),Qx(239,"PoSkeletonAnimation"),og()(),Il(240,"td",20)(241,"p")(242,"code"),Qx(243,"shimmer"),og()()(),Il(244,"td",21)(245,"em")(246,"strong"),Qx(247,"(opcional)"),og()(),Il(248,"p"),Qx(249,"Define o tipo de anima\xE7\xE3o do skeleton."),og(),Il(250,"p"),Qx(251,"Valores v\xE1lidos:"),og(),Il(252,"ul")(253,"li")(254,"code"),Qx(255,"none"),og(),Qx(256,": Sem anima\xE7\xE3o"),og(),Il(257,"li")(258,"code"),Qx(259,"pulse"),og(),Qx(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),og(),Il(261,"li")(262,"code"),Qx(263,"shimmer"),og(),Qx(264,": Anima\xE7\xE3o de brilho deslizante"),og()()()(),Il(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),Qx(269," p-aria-label"),zl(270,"br"),og()()(),Il(271,"td",18)(272,"code",22),Qx(273,"string"),og()(),Il(274,"td",20),Qx(275,"-"),og(),Il(276,"td",21)(277,"em")(278,"strong"),Qx(279,"(opcional)"),og()(),Il(280,"p"),Qx(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),og(),Il(282,"p"),Qx(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),og(),Il(284,"p")(285,"strong"),Qx(286,"Quando usar:"),og()(),Il(287,"ul")(288,"li"),Qx(289,"Use em "),Il(290,"strong"),Qx(291,"skeletons \xFAnicos"),og(),Qx(292," ou no "),Il(293,"strong"),Qx(294,"primeiro skeleton de um grupo"),og(),Qx(295," com descri\xE7\xE3o contextual"),og(),Il(296,"li"),Qx(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),og()(),Il(298,"p")(299,"strong"),Qx(300,"Exemplos de uso:"),og()(),Il(301,"pre")(302,"code",23),Qx(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),og()(),Il(304,"blockquote")(305,"p")(306,"strong"),Qx(307,"Boas pr\xE1ticas de acessibilidade:"),og()(),Il(308,"ul")(309,"li"),Qx(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),og()()(),Il(311,"blockquote")(312,"ul")(313,"li"),Qx(314,"Em casos complexos, considere usar um \xFAnico "),Il(315,"code"),Qx(316,'<div role="status">'),og(),Qx(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),og()()()()(),Il(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),Qx(322," p-border-radius"),zl(323,"br"),og()()(),Il(324,"td",18)(325,"code",22),Qx(326,"string"),og()(),Il(327,"td",20),Qx(328,"-"),og(),Il(329,"td",21)(330,"em")(331,"strong"),Qx(332,"(opcional)"),og()(),Il(333,"p"),Qx(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Il(335,"p"),Qx(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),og()()(),Il(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),Qx(341," p-height"),zl(342,"br"),og()()(),Il(343,"td",18)(344,"code",22),Qx(345,"string"),og()(),Il(346,"td",20),Qx(347,"-"),og(),Il(348,"td",21)(349,"em")(350,"strong"),Qx(351,"(opcional)"),og()(),Il(352,"p"),Qx(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Il(354,"p"),Qx(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),og()()(),Il(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),Qx(360," p-size"),zl(361,"br"),og()()(),Il(362,"td",18)(363,"code",24),Qx(364,"PoSkeletonSize"),og()(),Il(365,"td",20)(366,"p")(367,"code"),Qx(368,"md"),og()()(),Il(369,"td",21)(370,"em")(371,"strong"),Qx(372,"(opcional)"),og()(),Il(373,"p"),Qx(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),Il(375,"code"),Qx(376,"rectangle"),og(),Qx(377,", "),Il(378,"code"),Qx(379,"square"),og(),Qx(380,", "),Il(381,"code"),Qx(382,"circle"),og(),Qx(383,")."),og(),Il(384,"p"),Qx(385,"Valores v\xE1lidos:"),og(),Il(386,"ul")(387,"li")(388,"code"),Qx(389,"xs"),og(),Qx(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),og(),Il(391,"li")(392,"code"),Qx(393,"sm"),og(),Qx(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),og(),Il(395,"li")(396,"code"),Qx(397,"md"),og(),Qx(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),og(),Il(399,"li")(400,"code"),Qx(401,"lg"),og(),Qx(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),og(),Il(403,"li")(404,"code"),Qx(405,"xl"),og(),Qx(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),og(),Il(407,"li")(408,"code"),Qx(409,"2xl"),og(),Qx(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),og()(),Il(411,"p"),Qx(412,"Esta propriedade \xE9 ignorada quando "),Il(413,"code"),Qx(414,"p-width"),og(),Qx(415," ou "),Il(416,"code"),Qx(417,"p-height"),og(),Qx(418," s\xE3o definidos explicitamente."),og()()(),Il(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Qx(423," p-type"),zl(424,"br"),og()()(),Il(425,"td",18)(426,"code",25),Qx(427,"PoSkeletonType"),og()(),Il(428,"td",20)(429,"p")(430,"code"),Qx(431,"normal"),og()()(),Il(432,"td",21)(433,"em")(434,"strong"),Qx(435,"(opcional)"),og()(),Il(436,"p"),Qx(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),og(),Il(438,"p"),Qx(439,"Valores v\xE1lidos:"),og(),Il(440,"ul")(441,"li")(442,"code"),Qx(443,"normal"),og(),Qx(444,": Cor neutra clara (padr\xE3o)"),og(),Il(445,"li")(446,"code"),Qx(447,"primary"),og(),Qx(448,": Cor neutra m\xE9dia"),og(),Il(449,"li")(450,"code"),Qx(451,"content"),og(),Qx(452,": Fundo branco"),og()()()(),Il(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),Qx(457," p-variant"),zl(458,"br"),og()()(),Il(459,"td",18)(460,"code",26),Qx(461,"PoSkeletonVariant"),og()(),Il(462,"td",20)(463,"p")(464,"code"),Qx(465,"text"),og()()(),Il(466,"td",21)(467,"em")(468,"strong"),Qx(469,"(opcional)"),og()(),Il(470,"p"),Qx(471,"Define a variante visual do skeleton."),og(),Il(472,"p"),Qx(473,"Valores v\xE1lidos:"),og(),Il(474,"ul")(475,"li")(476,"code"),Qx(477,"text"),og(),Qx(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),og(),Il(479,"li")(480,"code"),Qx(481,"rectangle"),og(),Qx(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),og(),Il(483,"li")(484,"code"),Qx(485,"square"),og(),Qx(486,": Forma quadrada (largura e altura iguais)"),og(),Il(487,"li")(488,"code"),Qx(489,"circle"),og(),Qx(490,": Forma circular (largura e altura iguais)"),og()()()(),Il(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),Qx(495," p-width"),zl(496,"br"),og()()(),Il(497,"td",18)(498,"code",22),Qx(499,"string"),og()(),Il(500,"td",20)(501,"p")(502,"code"),Qx(503,"100%"),og(),Qx(504," para variante "),Il(505,"code"),Qx(506,"text"),og(),Qx(507,", tamanho baseado em "),Il(508,"code"),Qx(509,"p-size"),og(),Qx(510," para outras variantes"),og()(),Il(511,"td",21)(512,"em")(513,"strong"),Qx(514,"(opcional)"),og()(),Il(515,"p"),Qx(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),og(),Il(517,"p"),Qx(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),og()()()(),Il(519,"h3"),Qx(520,"Enums"),og(),Il(521,"h4",4)(522,"code",5),Qx(523,"PoSkeletonAnimation"),og()(),Il(524,"div",2)(525,"p"),Qx(526,"Define os tipos de anima\xE7\xE3o do componente "),Il(527,"code"),Qx(528,"po-skeleton"),og(),Qx(529,"."),og()(),Il(530,"h4",10),Qx(531,"Propriedades"),og(),Il(532,"table",11)(533,"tr",12)(534,"th",13),Qx(535,"Nome"),og(),Il(536,"th",13),Qx(537,"Descri\xE7\xE3o"),og()(),Il(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),Qx(542," none"),zl(543,"br"),og()()(),Il(544,"td",21)(545,"p"),Qx(546,"Sem anima\xE7\xE3o"),og()()(),Il(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Qx(551," pulse"),zl(552,"br"),og()()(),Il(553,"td",21)(554,"p"),Qx(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),og()()(),Il(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),Qx(560," shimmer"),zl(561,"br"),og()()(),Il(562,"td",21)(563,"p"),Qx(564,"Anima\xE7\xE3o de brilho deslizante"),og()()()(),Il(565,"h4",4)(566,"code",5),Qx(567,"PoSkeletonSize"),og()(),Il(568,"div",2)(569,"p"),Qx(570,"Define os tamanhos dispon\xEDveis para o componente "),Il(571,"code"),Qx(572,"po-skeleton"),og(),Qx(573,"."),og()(),Il(574,"h4",10),Qx(575,"Propriedades"),og(),Il(576,"table",11)(577,"tr",12)(578,"th",13),Qx(579,"Nome"),og(),Il(580,"th",13),Qx(581,"Descri\xE7\xE3o"),og()(),Il(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),Qx(586," xs"),zl(587,"br"),og()()(),Il(588,"td",21)(589,"p"),Qx(590,"Tamanho extra pequeno"),og()()(),Il(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),Qx(595," sm"),zl(596,"br"),og()()(),Il(597,"td",21)(598,"p"),Qx(599,"Tamanho pequeno"),og()()(),Il(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),Qx(604," md"),zl(605,"br"),og()()(),Il(606,"td",21)(607,"p"),Qx(608,"Tamanho m\xE9dio"),og()()(),Il(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),Qx(613," lg"),zl(614,"br"),og()()(),Il(615,"td",21)(616,"p"),Qx(617,"Tamanho grande"),og()()(),Il(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),Qx(622," xl"),zl(623,"br"),og()()(),Il(624,"td",21)(625,"p"),Qx(626,"Tamanho extra grande"),og()()(),Il(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),Qx(631," xxl"),zl(632,"br"),og()()(),Il(633,"td",21)(634,"p"),Qx(635,"Tamanho extra extra grande"),og()()()(),Il(636,"h4",4)(637,"code",5),Qx(638,"PoSkeletonType"),og()(),Il(639,"div",2)(640,"p"),Qx(641,"Define os tipos visuais dispon\xEDveis para o componente "),Il(642,"code"),Qx(643,"po-skeleton"),og(),Qx(644,"."),og()(),Il(645,"h4",10),Qx(646,"Propriedades"),og(),Il(647,"table",11)(648,"tr",12)(649,"th",13),Qx(650,"Nome"),og(),Il(651,"th",13),Qx(652,"Descri\xE7\xE3o"),og()(),Il(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),Qx(657," normal"),zl(658,"br"),og()()(),Il(659,"td",21)(660,"p"),Qx(661,"Tipo padr\xE3o com cor neutra clara"),og()()(),Il(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),Qx(666," primary"),zl(667,"br"),og()()(),Il(668,"td",21)(669,"p"),Qx(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),og()()(),Il(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),Qx(675," content"),zl(676,"br"),og()()(),Il(677,"td",21)(678,"p"),Qx(679,"Tipo de conte\xFAdo com fundo branco"),og()()()(),Il(680,"h4",4)(681,"code",5),Qx(682,"PoSkeletonVariant"),og()(),Il(683,"div",2)(684,"p"),Qx(685,"Define as variantes visuais do componente "),Il(686,"code"),Qx(687,"po-skeleton"),og(),Qx(688,"."),og()(),Il(689,"h4",10),Qx(690,"Propriedades"),og(),Il(691,"table",11)(692,"tr",12)(693,"th",13),Qx(694,"Nome"),og(),Il(695,"th",13),Qx(696,"Descri\xE7\xE3o"),og()(),Il(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),Qx(701," text"),zl(702,"br"),og()()(),Il(703,"td",21)(704,"p"),Qx(705,"Variante para simular texto"),og()()(),Il(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),Qx(710," rectangle"),zl(711,"br"),og()()(),Il(712,"td",21)(713,"p"),Qx(714,"Variante retangular (largura maior que altura)"),og()()(),Il(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),Qx(719," square"),zl(720,"br"),og()()(),Il(721,"td",21)(722,"p"),Qx(723,"Variante quadrada (largura igual \xE0 altura)"),og()()(),Il(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),Qx(728," circle"),zl(729,"br"),og()()(),Il(730,"td",21)(731,"p"),Qx(732,"Variante circular"),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var ke=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return a.changeTab("doc")}),zl(3,"sample-po-skeleton-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return a.changeTab("web")}),zl(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),og()()()),l&2&&(nw("p-actions",a.actions),Lp(2),nw("p-active",a.activeTab==="doc"),Lp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[cNe,qme,Yme,ae,pe,se,me,ue,ge,xe,ve],encapsulation:2})}return o})();var Ge=[{path:"",component:ke}],Ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[uL.forChild(Ge),uL]})}return o})();var Vt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,Ce]})}return o})();export{Vt as DocPoSkeletonModule};