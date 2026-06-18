import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En$1,U as Un,b as f,ae as Be$1,r as r$1,x,dB as ze$1,bi as cy,dC as Fi,n as nb,w,dD as Mt,d8 as Ome,d9 as fNe,H as Il,J as zl,R as og,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aY as z9,aZ as hk,b0 as Qt,aI as dc,b1 as mv,b2 as Jhe,c9 as Yhe,aB as Dx,aQ as hx,aR as fx,bd as Ax,aS as px,aF as $9,aG as mk,bD as Ede,b4 as F3,aK as aS,b6 as Yo,ba as yNe,aq as lx,aM as ww,aN as QA,aD as Xy,aE as Qy,at as ux,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,cz as kz,aJ as qhe,b5 as $he,a3 as cNe,aA as Sx,B as yw,aT as eN}from'./main-FCMDZGSJ.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic"]],standalone:false,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(Il(0,"po-stepper",0),zl(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),og()),r&2&&nw("p-align-center",false);},dependencies:[Ome,fNe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Stepper Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-stepper-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ye,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Fe],encapsulation:2})}return a})();function Ge(a,j){if(a&1&&(Il(0,"po-step",3)(1,"h2"),Qx(2),og()()),a&2){let m=j.$implicit;nw("p-label",m.label)("p-icon-default",m.iconDefault),Lp(2),dg("Step Content ",m.label);}}var ke=(()=>{class a{changeDetector=f(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:true},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore();}addItem(m){this.steps=[...this.steps,r$1({},m)],this.stepItem={},this.changeDetector.detectChanges();}changeStep(m){this.event=m,this.changeDetector.detectChanges();}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=false;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs"]],standalone:false,decls:17,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"po-container")(1,"po-stepper",2),ft("p-change-step",function(){return i.changeStep("change")}),hx(2,Ge,3,3,"po-step",3,fx),og(),zl(4,"po-divider")(5,"po-info",4),Il(6,"form",null,0),zl(8,"po-dynamic-form",5),Il(9,"div",6)(10,"po-button",7),ft("p-click",function(){Xy(s);let o=Ax(7);return i.addItem(i.stepItem),Qy(o.reset())}),og()()(),Il(11,"form",null,1),zl(13,"po-dynamic-form",5)(14,"po-divider"),Il(15,"div",6)(16,"po-button",8),ft("p-click",function(){Xy(s);let o=Ax(7),Ue=Ax(12);return i.restore(),Ue.reset(),Qy(o.reset())}),og()()()();}if(r&2){let s=Ax(7);Lp(),nw("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),Lp(),px(i.steps),Lp(3),nw("p-value",i.event),Lp(3),nw("p-fields",i.stepItemFields)("p-value",i.stepItem),Lp(2),nw("p-disabled",s.invalid),Lp(3),nw("p-fields",i.propertiesFields)("p-value",i.properties);}},dependencies:[G9,z9,hk,Qt,dc,mv,Jhe,Yhe,Ome,fNe],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Stepper Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <po-stepper
    [p-align-center]="properties.alignCenter"
    [p-orientation]="properties.orientation"
    [p-step-icons]="properties.stepIcons"
    [p-step-size]="properties.stepSize"
    [p-step-icon-active]="properties.iconActive"
    [p-step-icon-done]="properties.iconDone"
    [p-disable-click]="properties.disabledClick"
    (p-change-step)="changeStep('change')"
  >
    @for (step of steps; track step) {
      <po-step [p-label]="step.label" [p-icon-default]="step.iconDefault">
        <h2>Step Content { { step.label }}</h2>
      </po-step>
    }
  </po-stepper>

  <po-divider />

  <po-info p-label="Event" [p-value]="event"> </po-info>

  <form #stepForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="stepItemFields" [p-value]="stepItem"> </po-dynamic-form>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Step"
        [p-disabled]="stepForm.invalid"
        (p-click)="addItem(stepItem); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>

  <form #propertiesForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="propertiesFields" [p-value]="properties"> </po-dynamic-form>
    <po-divider />
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="restore(); propertiesForm.reset(); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>
</po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicFormField, PoStepperItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-labs',
  templateUrl: './sample-po-stepper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperLabsComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  event: any;
  properties: any = {};
  stepItem: PoStepperItem = <any>{};
  steps: Array<PoStepperItem> = [];

  readonly propertiesFields: Array<PoDynamicFormField> = [
    {
      divider: 'Properties',
      property: 'stepSize',
      label: 'Step Size',
      type: 'number',
      maxValue: 64,
      minValue: 24,
      gridLgColumns: 2
    },
    {
      property: 'orientation',
      options: [
        { value: 'vertical', label: 'Vertical', checked: true },
        { value: 'horizontal', label: 'Horizontal' }
      ],
      gridLgColumns: 4
    },
    {
      label: 'Align Steps Center',
      gridLgColumns: 3,
      property: 'alignCenter',
      type: 'boolean'
    },
    {
      label: 'Step icons',
      gridLgColumns: 3,
      property: 'stepIcons',
      type: 'boolean'
    },
    {
      label: 'Step Icon Active Custom',
      help: 'Ex.: an an-pencil-simple-line',
      gridLgColumns: 4,
      property: 'iconActive'
    },
    {
      label: 'Step Icon Done Custom',
      help: 'Ex.: an an-check-fat',
      gridLgColumns: 4,
      property: 'iconDone'
    },
    {
      property: 'disabledClick',
      label: 'Disabled click',
      type: 'boolean'
    }
  ];

  readonly stepItemFields: Array<PoDynamicFormField> = [
    {
      divider: 'Step form',
      property: 'label',
      label: 'Step Label',
      gridMdColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'iconDefault',
      label: 'Step Icon Default Custom',
      help: 'Ex.: an an-question',
      gridMdColumns: 6,
      gridXlColumns: 6
    }
  ];

  ngOnInit() {
    this.restore();
  }

  addItem(stepItem: PoStepperItem) {
    this.steps = [...this.steps, { ...stepItem }];
    this.stepItem = {};
    this.changeDetector.detectChanges();
  }

  changeStep(event) {
    this.event = event;

    this.changeDetector.detectChanges();
  }

  restore() {
    this.properties = {};
    this.steps = [];
    this.event = undefined;
    this.properties.orientation = 'horizontal';
    this.properties.alignCenter = false;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-stepper-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ke],encapsulation:2})}return a})();var $e=["addressForm"],et=["paymentForm"],tt=["personalForm"],nt=["successData"];function it(a,j){a&1&&zl(0,"po-loading-overlay",18);}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=false;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress();}canActiveFinishStep(m){return x(m.form.valid).pipe(ze$1(()=>this.isLoadingPayment=true),cy(2e3),Fi(()=>this.isLoadingPayment=false))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first();}getAddress(){return {city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&Gl($e,7)(et,7)(tt,7)(nt,7),r&2){let s;co(s=lo())&&(i.addressForm=s.first),co(s=lo())&&(i.paymentForm=s.first),co(s=lo())&&(i.personalForm=s.first),co(s=lo())&&(i.successData=s.first);}},standalone:false,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[1,"sample-stepper-position-relative"],["p-text","Loading"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),zl(4,"img",11),og(),Il(5,"div",12)(6,"p",13),Qx(7,"Nike XYZ - Red/Gold Stripes"),og(),Il(8,"p",14),Qx(9,"Brand: Nike | Style: Modern | Men's"),og(),Il(10,"p",15),Qx(11,"Width: 12.5 - COD: 001254648412319"),og(),zl(12,"po-divider"),Il(13,"p",15),Qx(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),og()()()(),Il(15,"po-widget",16)(16,"p",15),Qx(17,"$2.500,00"),og(),Il(18,"p",15),Qx(19,"$500,00(-)"),og(),Il(20,"p",15),Qx(21,"$160,00(+)"),og(),zl(22,"po-divider"),Il(23,"p",14),Qx(24,"Total: $2.160,00"),og()()(),zl(25,"po-divider"),Il(26,"div",17),lx(27,it,1,0,"po-loading-overlay",18),Il(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),ft("p-primary-action",function(){Xy(s);let o=Ax(29);return Qy(o.next())}),Il(32,"form",null,1)(34,"div",8)(35,"po-input",22),ww("ngModelChange",function(o){return Xy(s),eN(i.name,o)||(i.name=o),Qy(o)}),og(),QA(),Il(36,"po-datepicker",23),ww("ngModelChange",function(o){return Xy(s),eN(i.birthday,o)||(i.birthday=o),Qy(o)}),og(),QA(),Il(37,"po-input",24),ww("ngModelChange",function(o){return Xy(s),eN(i.document,o)||(i.document=o),Qy(o)}),og(),QA(),og()()()(),Il(38,"po-step",25)(39,"po-widget",26),ft("p-primary-action",function(){Xy(s);let o=Ax(29);return Qy(o.previous())})("p-secondary-action",function(){Xy(s);let o=Ax(29);return Qy(o.next())}),Il(40,"form",null,2)(42,"div",8)(43,"po-input",27),ww("ngModelChange",function(o){return Xy(s),eN(i.address.street,o)||(i.address.street=o),Qy(o)}),og(),QA(),Il(44,"po-input",28),ww("ngModelChange",function(o){return Xy(s),eN(i.address.number,o)||(i.address.number=o),Qy(o)}),og(),QA(),Il(45,"po-input",29),ww("ngModelChange",function(o){return Xy(s),eN(i.address.city,o)||(i.address.city=o),Qy(o)}),og(),QA(),og(),Il(46,"div",8)(47,"po-input",30),ww("ngModelChange",function(o){return Xy(s),eN(i.address.code,o)||(i.address.code=o),Qy(o)}),og(),QA(),Il(48,"po-input",31),ww("ngModelChange",function(o){return Xy(s),eN(i.address.country,o)||(i.address.country=o),Qy(o)}),og(),QA(),Il(49,"po-input",32),ww("ngModelChange",function(o){return Xy(s),eN(i.address.reference,o)||(i.address.reference=o),Qy(o)}),og(),QA(),og()()()(),Il(50,"po-step",33)(51,"po-widget",26),ft("p-primary-action",function(){Xy(s);let o=Ax(29);return Qy(o.previous())})("p-secondary-action",function(){Xy(s);let o=Ax(29);return Qy(o.next())}),Il(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),ww("ngModelChange",function(o){return Xy(s),eN(i.cardName,o)||(i.cardName=o),Qy(o)}),og(),QA(),Il(57,"po-input",35,5),ww("ngModelChange",function(o){return Xy(s),eN(i.cardCode,o)||(i.cardCode=o),Qy(o)}),og(),QA(),Il(59,"po-input",36,6),ww("ngModelChange",function(o){return Xy(s),eN(i.cardValid,o)||(i.cardValid=o),Qy(o)}),og(),QA(),og()()()(),Il(61,"po-step",37)(62,"po-widget",26),ft("p-primary-action",function(){Xy(s);let o=Ax(29);return Qy(o.previous())})("p-secondary-action",function(){Xy(s);let o=Ax(29);return Qy(i.onConfirmStep(o))}),Il(63,"div",8),zl(64,"po-info",38)(65,"po-info",39),og(),Il(66,"div",8),zl(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),og(),zl(71,"po-divider"),Il(72,"div",8),zl(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),og()()()()(),Il(78,"po-modal",49,7)(80,"div",8),zl(81,"img",50),Il(82,"p",51),Qx(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),og()()();}if(r&2){let s=Ax(33),c=Ax(41),o=Ax(53);Lp(27),ux(i.isLoadingPayment?27:-1),Lp(3),nw("p-can-active-next-step",i.canActiveNextStep.bind(i,s)),Lp(),nw("p-primary-label",i.nextLabelWidget),Lp(4),Ew("ngModel",i.name),e0(),Lp(),Ew("ngModel",i.birthday),e0(),Lp(),Ew("ngModel",i.document),e0(),Lp(),nw("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),Lp(),nw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Lp(4),Ew("ngModel",i.address.street),e0(),Lp(),Ew("ngModel",i.address.number),e0(),Lp(),Ew("ngModel",i.address.city),e0(),Lp(2),Ew("ngModel",i.address.code),e0(),Lp(),Ew("ngModel",i.address.country),e0(),Lp(),Ew("ngModel",i.address.reference),e0(),Lp(),nw("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),Lp(),nw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Lp(4),Ew("ngModel",i.cardName),e0(),Lp(2),Ew("ngModel",i.cardCode),e0(),Lp(2),Ew("ngModel",i.cardValid),e0(),Lp(3),nw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),Lp(2),nw("p-value",i.name),Lp(),nw("p-value",i.document),Lp(2),nw("p-value",i.address.street),Lp(),nw("p-value",i.address.number),Lp(),nw("p-value",i.address.city),Lp(),nw("p-value",i.address.country);}},dependencies:[G9,$9,z9,mk,hk,mv,Ede,F3,Yhe,aS,Yo,Ome,fNe,yNe],styles:[".sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}"],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Stepper - Sales"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget class="po-md-9" p-title="Product Detail">
    <div class="po-row">
      <div class="po-lg-4">
        <img src="../../../assets/graphics/shoe.gif" width="215" height="200" />
      </div>
      <div class="po-lg-8">
        <p class="po-font-title">Nike XYZ - Red/Gold Stripes</p>
        <p class="po-font-text-large-bold">Brand: Nike | Style: Modern | Men's</p>
        <p class="po-font-text">Width: 12.5 - COD: 001254648412319</p>
        <po-divider />
        <p class="po-font-text">Price: $2.500,00 | Discount: $500,00 | Tax: $160,00</p>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-md-3" p-height="317" p-title="Price">
    <p class="po-font-text">$2.500,00</p>
    <p class="po-font-text">$500,00(-)</p>
    <p class="po-font-text">$160,00(+)</p>
    <po-divider />
    <p class="po-font-text-large-bold">Total: $2.160,00</p>
  </po-widget>
</div>

<po-divider />

<div class="sample-stepper-position-relative">
  @if (isLoadingPayment) {
    <po-loading-overlay p-text="Loading"> </po-loading-overlay>
  }

  <po-stepper #stepper p-align-center="false" p-orientation="vertical" p-step-icons p-step-size="32">
    <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this, personalForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.next()"
      >
        <form #personalForm="ngForm">
          <div class="po-row">
            <po-input class="po-md-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
            <po-datepicker
              class="po-md-3"
              name="birthday"
              [(ngModel)]="birthday"
              p-format="dd/mm/yyyy"
              p-label="Birthday"
              p-optional
            >
            </po-datepicker>
            <po-input class="po-md-3" name="document" [(ngModel)]="document" p-label="Document" p-optional> </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Address" [p-can-active-next-step]="canActiveNextStep.bind(this, addressForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        p-title="Purchase"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #addressForm="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-6"
              name="address.street"
              [(ngModel)]="address.street"
              p-label="Street/House"
              p-required
            >
            </po-input>
            <po-input class="po-md-3" name="number" [(ngModel)]="address.number" p-label="Number" p-required>
            </po-input>
            <po-input class="po-md-3" name="city" [(ngModel)]="address.city" p-label="City" p-required> </po-input>
          </div>
          <div class="po-row">
            <po-input class="po-md-3" name="code" [(ngModel)]="address.code" p-label="Postal Code" p-required>
            </po-input>
            <po-input class="po-md-3" name="country" [(ngModel)]="address.country" p-label="Country" p-required>
            </po-input>
            <po-input class="po-md-6" name="reference" [(ngModel)]="address.reference" p-label="Reference" p-optional>
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Payment" [p-can-active-next-step]="canActiveFinishStep.bind(this, paymentForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #paymentForm="ngForm">
          <div class="po-row">
            <po-input
              #cardname
              class="po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name"
              p-required
            >
            </po-input>

            <po-input
              #cardcode
              class="po-lg-4 po-md-9"
              name="cardCode"
              [(ngModel)]="cardCode"
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
              name="cardValid"
              [(ngModel)]="cardValid"
              p-clean
              p-label="Expiration Date"
              p-mask="12/99"
              p-mask-format-model
              p-pattern="\\d{2}\\/\\d{2}"
              p-required
            >
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Finish">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="confirmLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="onConfirmStep(stepper)"
      >
        <div class="po-row">
          <po-info class="po-md-3" p-label="Name" [p-value]="name"> </po-info>
          <po-info class="po-md-3" p-label="Document" [p-value]="document"> </po-info>
        </div>
        <div class="po-row">
          <po-info class="po-md-3" p-label="Address" [p-value]="address.street"> </po-info>
          <po-info class="po-md-3" p-label="Number" [p-value]="address.number"> </po-info>
          <po-info class="po-md-3" p-label="City" [p-value]="address.city"> </po-info>
          <po-info class="po-md-3" p-label="Country" [p-value]="address.country"> </po-info>
        </div>
        <po-divider />
        <div class="po-row">
          <po-info class="po-md-4" p-label="Product" p-value="Nike XYZ - Red/Gold Stripes"> </po-info>
          <po-info class="po-md-2" p-label="Price" p-value="$2.500,00"> </po-info>
          <po-info class="po-md-2" p-label="Discount" p-value="$500,00"> </po-info>
          <po-info class="po-md-2" p-label="Tax" p-value="$160,00"> </po-info>
          <po-info class="po-md-2" p-label="Final Price" p-value="$2.160,00"> </po-info>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #successData p-title="Informations">
  <div class="po-row">
    <img class="po-offset-md-6 po-offset-xl-3" src="../../../assets/graphics/check.jpg" width="350" height="350" />
    <p class="po-offset-md-8 po-offset-xl-3 po-font-title">Success! ORDER NUMBER: 5767686678609-XPTOA</p>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalComponent, PoStepComponent, PoStepperComponent } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-sales',
  templateUrl: './sample-po-stepper-sales.component.html',
  styleUrls: ['./sample-po-stepper-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperSalesComponent {
  @ViewChild('addressForm', { static: true }) addressForm: NgForm;
  @ViewChild('paymentForm', { static: true }) paymentForm: NgForm;
  @ViewChild('personalForm', { static: true }) personalForm: NgForm;
  @ViewChild('successData', { static: true }) successData: PoModalComponent;

  address: any;
  birthday: string;
  cardCode: string;
  cardName: string;
  cardValid: string;
  confirmLabelWidget: string = 'Confirm Purchase';
  currentActiveStep: PoStepComponent;
  document: string;
  isLoadingPayment: boolean = false;
  name: string;
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';

  constructor() {
    this.address = this.getAddress();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoadingPayment = true)),
      delay(2000),
      finalize(() => (this.isLoadingPayment = false))
    );
  }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    this.address = this.getAddress();
    stepper.first();
  }

  private getAddress() {
    return {
      city: 'Sao Paulo',
      code: '02511-000',
      country: 'Brazil',
      number: '1000',
      reference: '',
      street: 'Avenida Braz Leme'
    };
  }

  private resetForms(): void {
    this.personalForm.reset();
    this.paymentForm.reset();
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-stepper-sales/sample-po-stepper-sales.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-stepper-position-relative {
  position: relative;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-stepper-sales"),og(),zl(29,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,at,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,We],encapsulation:2})}return a})();var Be=(()=>{class a{http=f(nb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var rt=["basicInformation"],lt=["academicFormation"],st=["professionalExperiences"];function mt(a,j){if(a&1&&(Il(0,"div",23)(1,"po-widget",24)(2,"p"),Qx(3),og()()()),a&2){let m=j.$implicit;Lp(),nw("p-title",m.title),Lp(2),yw(m.description);}}function dt(a,j){if(a&1&&(Il(0,"div",4),zl(1,"po-divider",23),hx(2,mt,4,2,"div",23,fx),og()),a&2){let m=Sx();Lp(2),px(m.professionalExperiences);}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep());}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates();}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}activeStep(){this.stepper.active(2);}onChangeState(){this.getCitiesByState(this.basicInformation.state);}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r];}getBasicInformations(){return {name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return {name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return {name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return [{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state);});}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&Gl(rt,7)(lt,7)(st,7)(fNe,5),r&2){let s;co(s=lo())&&(i.basicInformationForm=s.first),co(s=lo())&&(i.academicFormationForm=s.first),co(s=lo())&&(i.professionalExperiencesForm=s.first),co(s=lo())&&(i.stepper=s.first);}},standalone:false,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],[1,"po-md-12"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let s=Dx();Il(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),ww("ngModelChange",function(o){return Xy(s),eN(i.basicInformation.name,o)||(i.basicInformation.name=o),Qy(o)}),og(),QA(),Il(7,"po-email",6),ww("ngModelChange",function(o){return Xy(s),eN(i.basicInformation.email,o)||(i.basicInformation.email=o),Qy(o)}),og(),QA(),Il(8,"po-input",7),ww("ngModelChange",function(o){return Xy(s),eN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Qy(o)}),og(),QA(),Il(9,"po-select",8),ww("ngModelChange",function(o){return Xy(s),eN(i.basicInformation.state,o)||(i.basicInformation.state=o),Qy(o)}),ft("p-change",function(){return i.onChangeState()}),og(),QA(),Il(10,"po-select",9),ww("ngModelChange",function(o){return Xy(s),eN(i.basicInformation.city,o)||(i.basicInformation.city=o),Qy(o)}),og(),QA(),og()()(),Il(11,"po-step",10)(12,"form",null,1)(14,"div",4),zl(15,"po-divider",11),Il(16,"po-input",12),ww("ngModelChange",function(o){return Xy(s),eN(i.highSchool.name,o)||(i.highSchool.name=o),Qy(o)}),og(),QA(),Il(17,"po-input",13),ww("ngModelChange",function(o){return Xy(s),eN(i.highSchool.city,o)||(i.highSchool.city=o),Qy(o)}),og(),QA(),Il(18,"po-input",14),ww("ngModelChange",function(o){return Xy(s),eN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Qy(o)}),og(),QA(),og(),Il(19,"div",4),zl(20,"po-divider",15),Il(21,"po-input",16),ww("ngModelChange",function(o){return Xy(s),eN(i.universityEducation.name,o)||(i.universityEducation.name=o),Qy(o)}),og(),QA(),Il(22,"po-input",17),ww("ngModelChange",function(o){return Xy(s),eN(i.universityEducation.city,o)||(i.universityEducation.city=o),Qy(o)}),og(),QA(),Il(23,"po-input",18),ww("ngModelChange",function(o){return Xy(s),eN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Qy(o)}),og(),QA(),og()()(),Il(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),ww("ngModelChange",function(o){return Xy(s),eN(i.experienceTitle,o)||(i.experienceTitle=o),Qy(o)}),og(),QA(),Il(29,"po-textarea",21),ww("ngModelChange",function(o){return Xy(s),eN(i.experienceDescripton,o)||(i.experienceDescripton=o),Qy(o)}),og(),QA(),Il(30,"po-button",22),ft("p-click",function(){Xy(s);let o=Ax(26);return i.addProfessionalExperiences(o),Qy(o.reset())}),og()()(),lx(31,dt,4,0,"div",4),og()()();}r&2&&(Lp(6),Ew("ngModel",i.basicInformation.name),e0(),Lp(),Ew("ngModel",i.basicInformation.email),e0(),Lp(),Ew("ngModel",i.basicInformation.phone),e0(),Lp(),Ew("ngModel",i.basicInformation.state),nw("p-options",i.stateOptions),e0(),Lp(),Ew("ngModel",i.basicInformation.city),nw("p-options",i.cityOptions),e0(),Lp(6),Ew("ngModel",i.highSchool.name),e0(),Lp(),Ew("ngModel",i.highSchool.city),e0(),Lp(),Ew("ngModel",i.highSchool.conclusionYear),e0(),Lp(3),Ew("ngModel",i.universityEducation.name),e0(),Lp(),Ew("ngModel",i.universityEducation.city),e0(),Lp(),Ew("ngModel",i.universityEducation.conclusionYear),e0(),Lp(5),Ew("ngModel",i.experienceTitle),e0(),Lp(),Ew("ngModel",i.experienceDescripton),e0(),Lp(2),ux(i.professionalExperiences?31:-1));},dependencies:[G9,$9,z9,mk,hk,Qt,dc,mv,kz,F3,qhe,$he,Ome,fNe,yNe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Stepper - Active"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <po-stepper>
    <po-step p-label="Basic information">
      <form #basicInformationForm="ngForm">
        <div class="po-row">
          <po-input class="po-md-6" name="name" [(ngModel)]="basicInformation.name" p-clean p-label="Name" p-required>
          </po-input>
          <po-email
            class="po-md-6"
            name="email"
            [(ngModel)]="basicInformation.email"
            p-clean
            p-label="Email"
            p-required
          >
          </po-email>
          <po-input class="po-md-4" name="phone" [(ngModel)]="basicInformation.phone" p-label="Phone" p-optional>
          </po-input>
          <po-select
            class="po-md-4"
            name="state"
            [(ngModel)]="basicInformation.state"
            p-label="State"
            [p-options]="stateOptions"
            (p-change)="onChangeState()"
          >
          </po-select>
          <po-select
            class="po-md-4"
            name="city"
            [(ngModel)]="basicInformation.city"
            p-label="City"
            [p-options]="cityOptions"
          >
          </po-select>
        </div>
      </form>
    </po-step>
    <po-step p-label="Academic formation">
      <form #academicFormationForm="ngForm">
        <div class="po-row">
          <po-divider class="po-md-12" p-label="High school"></po-divider>
          <po-input class="po-md-6" name="highSchoolName" [(ngModel)]="highSchool.name" p-clean p-label="Name">
          </po-input>
          <po-input class="po-md-3" name="highSchoolCity" [(ngModel)]="highSchool.city" p-clean p-label="City">
          </po-input>
          <po-input class="po-md-3" name="highSchoolPeriod" [(ngModel)]="highSchool.conclusionYear" p-label="Period">
          </po-input>
        </div>
        <div class="po-row">
          <po-divider class="po-md-12" p-label="University education"> </po-divider>
          <po-input
            class="po-md-6"
            name="universityEducationName"
            [(ngModel)]="universityEducation.name"
            p-clean
            p-label="Name"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationCity"
            [(ngModel)]="universityEducation.city"
            p-clean
            p-label="City"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationPeriod"
            [(ngModel)]="universityEducation.conclusionYear"
            p-label="Period"
          >
          </po-input>
        </div>
      </form>
    </po-step>
    <po-step p-label="Professional experiences">
      <form #professionalExperiencesForm="ngForm">
        <div class="po-row">
          <po-input
            class="po-md-12"
            name="experienceTitle"
            [(ngModel)]="experienceTitle"
            p-label="Professional position"
          ></po-input>
          <po-textarea
            class="po-md-12"
            name="experienceDescripton"
            [(ngModel)]="experienceDescripton"
            p-label="Describe your responsibilities"
            p-rows="4"
          ></po-textarea>
          <po-button
            class="po-md-4"
            type="submit"
            p-label="Add professional experience"
            (p-click)="addProfessionalExperiences(professionalExperiencesForm); professionalExperiencesForm.reset()"
          ></po-button>
        </div>
      </form>
      @if (professionalExperiences) {
        <div class="po-row">
          <po-divider class="po-md-12"> </po-divider>
          @for (experience of professionalExperiences; track experience) {
            <div class="po-md-12">
              <po-widget class="po-md-12" [p-title]="experience.title">
                <p>{ { experience.description }}</p>
              </po-widget>
            </div>
          }
        </div>
      }
    </po-step>
  </po-stepper>
</po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PoSelectOption, PoStepperComponent } from '@po-ui/ng-components';
import { SamplePoStepperActiveService } from './sample-po-stepper-active.service';

@Component({
  selector: 'sample-po-stepper-active',
  templateUrl: './sample-po-stepper-active.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperActiveComponent implements OnInit, AfterViewInit, OnDestroy {
  sampleService = inject(SamplePoStepperActiveService);
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild('basicInformation', { static: true }) basicInformationForm: NgForm;
  @ViewChild('academicFormation', { static: true }) academicFormationForm: NgForm;
  @ViewChild('professionalExperiences', { static: true }) professionalExperiencesForm: NgForm;
  @ViewChild(PoStepperComponent) stepper: PoStepperComponent;

  cityOptions: Array<PoSelectOption> = [];
  stateOptions: Array<PoSelectOption> = [];
  basicInformation: any;
  highSchool: any;
  universityEducation: any;
  professionalExperiences: Array<any>;
  experienceTitle: string;
  experienceDescripton: string;
  overview: any;

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => this.activeStep());
  }

  ngOnInit(): void {
    this.basicInformation = this.getBasicInformations();
    this.highSchool = this.getHighSchool();
    this.universityEducation = this.getUniversityEducation();
    this.professionalExperiences = this.getProfessionalExperiencies();
    this.getStates();
  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  activeStep() {
    this.stepper.active(2);
  }

  onChangeState() {
    this.getCitiesByState(this.basicInformation.state);
  }

  addProfessionalExperiences(form: NgForm) {
    const experience = {
      title: form.value['experienceTitle'],
      description: form.value['experienceDescripton']
    };
    this.professionalExperiences = [...this.professionalExperiences, experience];
  }

  private getBasicInformations() {
    return {
      name: 'Maria Alice',
      email: 'mariaalice@gmail.com',
      phone: '47988888888',
      state: 'sp',
      city: 1
    };
  }

  private getHighSchool() {
    return {
      name: 'Escola de Ensino B\xE1sico Dr Jorge Lacerda',
      city: 'Joinville',
      conclusionYear: '2016'
    };
  }

  private getUniversityEducation() {
    return {
      name: 'Universidade Federal do Santa Catarina',
      city: 'Florian\xF3polis',
      conclusionYear: '2020'
    };
  }

  private getProfessionalExperiencies() {
    return [
      {
        title: 'Analista de desenvolvimento de software na TOTVS',
        description:
          'Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020'
      }
    ];
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.basicInformation.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.getCitiesByState(this.basicInformation.state);
    });
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoStepperActiveService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-stepper-active"),og(),zl(27,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ut,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ne],encapsulation:2})}return a})();var ze=(()=>{class a{changeDetector=f(Be$1);currentStep;stepsWithStatus=[{label:"Step 1",status:Mt.Done},{label:"Step 2",status:Mt.Active},{label:"Step 3",status:Mt.Default},{label:"Step 4",status:Mt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges();}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Mt.Active&&(r.status=Mt.Done);}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Mt.Active&&(r.status=Mt.Default);}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Mt.Disabled&&(this.stepsWithStatus[this.currentStep].status=Mt.Default);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps"]],standalone:false,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(Il(0,"po-stepper",0),ft("p-change-step",function(c){return i.onChangeStatus(c)}),og()),r&2&&nw("p-align-center",false)("p-sequential",false)("p-step",i.currentStep)("p-steps",i.stepsWithStatus);},dependencies:[fNe],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Stepper - Steps"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoStepperItem, PoStepperStatus } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-steps',
  templateUrl: './sample-po-stepper-steps.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperStepsComponent implements AfterViewInit {
  private changeDetector = inject(ChangeDetectorRef);

  currentStep: number;
  stepsWithStatus: Array<PoStepperItem> = [
    { label: 'Step 1', status: PoStepperStatus.Done },
    { label: 'Step 2', status: PoStepperStatus.Active },
    { label: 'Step 3', status: PoStepperStatus.Default },
    { label: 'Step 4', status: PoStepperStatus.Disabled }
  ];

  ngAfterViewInit(): void {
    this.currentStep = 2;
    this.changeDetector.detectChanges();
  }

  onChangeStatus(event: number): void {
    this.currentStep = event;

    this.stepsWithStatus.forEach(step => {
      if (step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Done;
      }
    });

    this.stepsWithStatus.forEach((step, index) => {
      if (index > this.currentStep && step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Default;
      }
    });
    if (
      this.currentStep < this.stepsWithStatus.length &&
      this.stepsWithStatus[this.currentStep].status === PoStepperStatus.Disabled
    ) {
      this.stepsWithStatus[this.currentStep].status = PoStepperStatus.Default;
    }
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-stepper-steps"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ht,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ze],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-doc"]],standalone:false,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-stepper"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoStepperComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O "),Il(15,"code"),Qx(16,"po-stepper"),og(),Qx(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),og(),Il(18,"p"),Qx(19,"Existem duas formas de utiliza\xE7\xE3o:"),og(),Il(20,"p"),Qx(21,"1 - Usando o componente "),Il(22,"a",6)(23,"strong"),Qx(24,"po-step"),og()(),Qx(25," para renderizar e descrever os passos."),og(),Il(26,"p"),Qx(27,"2 - Atrav\xE9s da propriedade "),Il(28,"code"),Qx(29,"p-steps"),og(),Qx(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Il(31,"em"),Qx(32,"step"),og(),Qx(33," ativo."),og(),Il(34,"p"),Qx(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Il(36,"em"),Qx(37,"steps"),og(),Qx(38,"."),og(),Il(39,"p"),Qx(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Il(41,"em"),Qx(42,"steps"),og(),Qx(43," atrav\xE9s do teclado utilizando a tecla "),Il(44,"em"),Qx(45,"tab"),og(),Qx(46," e, para ativar o "),Il(47,"em"),Qx(48,"step"),og(),Qx(49,` em foco basta
pressionar a tecla `),Il(50,"em"),Qx(51,"enter"),og(),Qx(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),Il(53,"em"),Qx(54,"steps"),og(),Qx(55,` atrav\xE9s da
propriedade `),Il(56,"a",7)(57,"code"),Qx(58,"p-step-icons"),og()(),Qx(59,"."),og(),Il(60,"h4"),Qx(61,"Utilizando os m\xE9todos do componente:"),og(),Il(62,"p"),Qx(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),og(),Il(64,"p"),Qx(65,"Por exemplo, utilizando um "),Il(66,"a",8)(67,"strong"),Qx(68,"ViewChild"),og()(),Qx(69,":"),og(),Il(70,"pre")(71,"code"),Qx(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),og()(),Il(73,"p"),Qx(74,"E para acessar o m\xE9todo:"),og(),Il(75,"pre")(76,"code"),Qx(77,`poStepperComponent.next();
`),og()(),Il(78,"h4"),Qx(79,"Boas pr\xE1ticas"),og(),Il(80,"ul")(81,"li"),Qx(82,"Evite "),Il(83,"code"),Qx(84,"labels"),og(),Qx(85," extensos que quebram o layout do "),Il(86,"code"),Qx(87,"po-stepper"),og(),Qx(88,", use "),Il(89,"code"),Qx(90,"labels"),og(),Qx(91," diretos, curtos e intuitivos."),og(),Il(92,"li"),Qx(93,"Utilize apenas um "),Il(94,"code"),Qx(95,"po-stepper"),og(),Qx(96," por p\xE1gina."),og()(),Il(97,"h4"),Qx(98,"Tokens customiz\xE1veis"),og(),Il(99,"p"),Qx(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(101,"blockquote")(102,"p"),Qx(103,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(104,"a",9),Qx(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(106,"."),og()(),Il(107,"table")(108,"thead")(109,"tr")(110,"th"),Qx(111,"Propriedade"),og(),Il(112,"th"),Qx(113,"Descri\xE7\xE3o"),og(),Il(114,"th"),Qx(115,"Valor Padr\xE3o"),og()()(),Il(116,"tbody")(117,"tr")(118,"td")(119,"strong"),Qx(120,"Label"),og()(),zl(121,"td")(122,"td"),og(),Il(123,"tr")(124,"td")(125,"code"),Qx(126,"--font-family"),og()(),Il(127,"td"),Qx(128,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(129,"td")(130,"code"),Qx(131,"var(--font-family-theme)"),og()()(),Il(132,"tr")(133,"td")(134,"code"),Qx(135,"--font-size"),og()(),Il(136,"td"),Qx(137,"Tamanho da fonte"),og(),Il(138,"td")(139,"code"),Qx(140,"var(--font-size-default)"),og()()(),Il(141,"tr")(142,"td")(143,"code"),Qx(144,"--font-weight"),og()(),Il(145,"td"),Qx(146,"Peso da fonte"),og(),Il(147,"td")(148,"code"),Qx(149,"var(--font-weight-normal)"),og()()(),Il(150,"tr")(151,"td")(152,"strong"),Qx(153,"Step - Done"),og()(),zl(154,"td")(155,"td"),og(),Il(156,"tr")(157,"td")(158,"code"),Qx(159,"--text-color"),og()(),Il(160,"td"),Qx(161,"Cor do texto no step conclu\xEDdo"),og(),Il(162,"td")(163,"code"),Qx(164,"var(--color-neutral-dark-70)"),og()()(),Il(165,"tr")(166,"td")(167,"code"),Qx(168,"--color-icon-done"),og()(),Il(169,"td"),Qx(170,"Cor do \xEDcone no step conclu\xEDdo"),og(),Il(171,"td")(172,"code"),Qx(173,"var(--color-neutral-dark-70)"),og()()(),Il(174,"tr")(175,"td")(176,"code"),Qx(177,"--background-done"),og()(),Il(178,"td"),Qx(179,"Cor de fundo no step conclu\xEDdo"),og(),Il(180,"td")(181,"code"),Qx(182,"var(--color-neutral-light-00)"),og()()(),Il(183,"tr")(184,"td")(185,"strong"),Qx(186,"Line - Done"),og()(),zl(187,"td")(188,"td"),og(),Il(189,"tr")(190,"td")(191,"code"),Qx(192,"--color-line-done"),og()(),Il(193,"td"),Qx(194,"Cor da linha no step conclu\xEDdo"),og(),Il(195,"td")(196,"code"),Qx(197,"var(--color-neutral-mid-40)"),og()()(),Il(198,"tr")(199,"td")(200,"strong"),Qx(201,"Step - Current"),og()(),zl(202,"td")(203,"td"),og(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--color-icon-current"),og()(),Il(208,"td"),Qx(209,"Cor do \xEDcone no step atual"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-neutral-light-00)"),og()()(),Il(213,"tr")(214,"td")(215,"code"),Qx(216,"--background-current"),og()(),Il(217,"td"),Qx(218,"Cor de fundo no step atual"),og(),Il(219,"td")(220,"code"),Qx(221,"var(--color-action-default)"),og()()(),Il(222,"tr")(223,"td")(224,"code"),Qx(225,"--font-weight-current"),og()(),Il(226,"td"),Qx(227,"Peso da fonte no step atual"),og(),Il(228,"td")(229,"code"),Qx(230,"var(--font-weight-bold)"),og()()(),Il(231,"tr")(232,"td")(233,"strong"),Qx(234,"Step - Next"),og()(),zl(235,"td")(236,"td"),og(),Il(237,"tr")(238,"td")(239,"code"),Qx(240,"--font-size-circle"),og()(),Il(241,"td"),Qx(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),og(),Il(243,"td")(244,"code"),Qx(245,"var(--font-size-sm)"),og()()(),Il(246,"tr")(247,"td")(248,"code"),Qx(249,"--color-next"),og()(),Il(250,"td"),Qx(251,"Cor do \xEDcone no pr\xF3ximo step"),og(),Il(252,"td")(253,"code"),Qx(254,"var(--color-action-disabled)"),og()()(),Il(255,"tr")(256,"td")(257,"code"),Qx(258,"--text-color-next"),og()(),Il(259,"td"),Qx(260,"Cor do texto no pr\xF3ximo step"),og(),Il(261,"td")(262,"code"),Qx(263,"var(--color-neutral-light-30)"),og()()(),Il(264,"tr")(265,"td")(266,"strong"),Qx(267,"Focused"),og()(),zl(268,"td")(269,"td"),og(),Il(270,"tr")(271,"td")(272,"code"),Qx(273,"--outline-color-focused"),og()(),Il(274,"td"),Qx(275,"Cor do outline do estado de focus"),og(),Il(276,"td")(277,"code"),Qx(278,"var(--color-action-focus)"),og()()()()()(),Il(279,"div",10)(280,"h4",11),Qx(281,"Seletor"),og(),Il(282,"pre",12),Qx(283,`<po-stepper
    p-align-center="boolean"
    p-disable-click="boolean"
    p-step-icon-active="string | TemplateRef<void>"
    p-step-icon-done="string | TemplateRef<void>"
    (p-change-step)="EventEmitter"
    p-orientation="PoStepperOrientation"
    p-sequential="boolean"
    p-step="number"
    p-step-icons="boolean"
    p-step-size="number"
    p-steps="Array<PoStepperItem>" >
</po-stepper>
`),og()(),Il(284,"h4",13),Qx(285,"Propriedades"),og(),Il(286,"table",14)(287,"tr",15)(288,"th",16),Qx(289,"Nome"),og(),Il(290,"th",16),Qx(291,"Tipo"),og(),Il(292,"th",16),Qx(293,"Padr\xE3o"),og(),Il(294,"th",16),Qx(295,"Descri\xE7\xE3o"),og()(),Il(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),Qx(300," p-align-center"),zl(301,"br"),og()()(),Il(302,"td",21)(303,"code",22),Qx(304,"boolean"),og()(),Il(305,"td",23)(306,"p")(307,"code"),Qx(308,"true"),og()()(),Il(309,"td",24)(310,"em")(311,"strong"),Qx(312,"(opcional)"),og()(),Il(313,"p"),Qx(314,"Define o alinhamento dos "),Il(315,"em"),Qx(316,"steps"),og(),Qx(317," e "),Il(318,"em"),Qx(319,"labels"),og(),Qx(320," no "),Il(321,"em"),Qx(322,"stepper"),og(),Qx(323,", dependendo da orienta\xE7\xE3o."),og(),Il(324,"ul")(325,"li"),Qx(326,"Quando "),Il(327,"code"),Qx(328,"true"),og(),Qx(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),og(),Il(330,"li"),Qx(331,"Quando "),Il(332,"code"),Qx(333,"false"),og(),Qx(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),og()()()(),Il(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),Qx(339," p-disable-click"),zl(340,"br"),og()()(),Il(341,"td",21)(342,"code",22),Qx(343,"boolean"),og()(),Il(344,"td",23)(345,"p")(346,"code"),Qx(347,"false"),og()()(),Il(348,"td",24)(349,"em")(350,"strong"),Qx(351,"(opcional)"),og()(),Il(352,"p"),Qx(353,"Desabilita o clique nos steps."),og()()(),Il(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),Qx(358," p-step-icon-active"),zl(359,"br"),og()()(),Il(360,"td",21)(361,"code",25),Qx(362,"string "),og(),Il(363,"code",26),Qx(364," TemplateRef<void>"),og()(),Il(365,"td",23)(366,"p")(367,"code"),Qx(368,"po-icon-edit"),og()()(),Il(369,"td",24)(370,"em")(371,"strong"),Qx(372,"(opcional)"),og()(),Il(373,"p"),Qx(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Il(375,"a",27),Qx(376,"Biblioteca de \xEDcones"),og(),Qx(377,"."),og(),Il(378,"pre")(379,"code"),Qx(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),og()(),Il(381,"p"),Qx(382,"Para customizar o \xEDcone atrav\xE9s do "),Il(383,"code"),Qx(384,"TemplateRef"),og(),Qx(385,", veja a documenta\xE7\xE3o da propriedade "),Il(386,"code"),Qx(387,"p-step-icon-done"),og(),Qx(388,"."),og(),Il(389,"blockquote")(390,"p"),Qx(391,"Deve-se usar "),Il(392,"code"),Qx(393,"font-size: inherit"),og(),Qx(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Il(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),Qx(399," p-step-icon-done"),zl(400,"br"),og()()(),Il(401,"td",21)(402,"code",25),Qx(403,"string "),og(),Il(404,"code",26),Qx(405," TemplateRef<void>"),og()(),Il(406,"td",23)(407,"p")(408,"code"),Qx(409,"po-icon-ok"),og()()(),Il(410,"td",24)(411,"em")(412,"strong"),Qx(413,"(opcional)"),og()(),Il(414,"p"),Qx(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Il(416,"a",27),Qx(417,"Biblioteca de \xEDcones"),og()(),Il(418,"pre")(419,"code"),Qx(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),og()(),Il(421,"p"),Qx(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(423,"code"),Qx(424,"TemplateRef"),og(),Qx(425,", conforme exemplo abaixo:"),og(),Il(426,"pre")(427,"code"),Qx(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),og()(),Il(429,"blockquote")(430,"p"),Qx(431,"Deve-se usar "),Il(432,"code"),Qx(433,"font-size: inherit"),og(),Qx(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Il(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),Qx(439," (p-change-step)"),zl(440,"br"),og()()(),Il(441,"td",21)(442,"code",30),Qx(443,"EventEmitter"),og()(),Il(444,"td",23),Qx(445,"-"),og(),Il(446,"td",24)(447,"p"),Qx(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),Il(449,"code"),Qx(450,"po-stepper"),og(),Qx(451,"."),og()()(),Il(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),Qx(456," p-orientation"),zl(457,"br"),og()()(),Il(458,"td",21)(459,"code",31),Qx(460,"PoStepperOrientation"),og()(),Il(461,"td",23)(462,"p")(463,"code"),Qx(464,"PoStepperOrientation.Horizontal"),og()()(),Il(465,"td",24)(466,"em")(467,"strong"),Qx(468,"(opcional)"),og()(),Il(469,"p"),Qx(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Il(471,"code"),Qx(472,"po-stepper"),og(),Qx(473,"."),og(),Il(474,"blockquote")(475,"p"),Qx(476,"Veja os valores v\xE1lidos no "),Il(477,"em"),Qx(478,"enum"),og(),Il(479,"a",32),Qx(480,"PoStepperOrientation"),og(),Qx(481,"."),og()()()(),Il(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),Qx(486," p-sequential"),zl(487,"br"),og()()(),Il(488,"td",21)(489,"code",22),Qx(490,"boolean"),og()(),Il(491,"td",23)(492,"p")(493,"code"),Qx(494,"true"),og()()(),Il(495,"td",24)(496,"em")(497,"strong"),Qx(498,"(opcional)"),og()(),Il(499,"p"),Qx(500,"Define se o "),Il(501,"code"),Qx(502,"po-stepper"),og(),Qx(503," ser\xE1 sequencial ou aleat\xF3rio."),og(),Il(504,"blockquote")(505,"p"),Qx(506,"Ao utilizar o componente "),Il(507,"a",6)(508,"strong"),Qx(509,"po-step"),og()(),Qx(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),og()()()(),Il(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),Qx(515," p-step"),zl(516,"br"),og()()(),Il(517,"td",21)(518,"code",33),Qx(519,"number"),og()(),Il(520,"td",23)(521,"p")(522,"code"),Qx(523,"1"),og()()(),Il(524,"td",24)(525,"em")(526,"strong"),Qx(527,"(opcional)"),og()(),Il(528,"p"),Qx(529,"Controla o passo atual do "),Il(530,"code"),Qx(531,"po-stepper"),og(),Qx(532,"."),og(),Il(533,"blockquote")(534,"p"),Qx(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Il(536,"a",6)(537,"strong"),Qx(538,"po-step"),og()(),Qx(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Il(540,"a",6)(541,"strong"),Qx(542,"po-step"),og()(),Qx(543,"."),og()()()(),Il(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),Qx(548," p-step-icons"),zl(549,"br"),og()()(),Il(550,"td",21)(551,"code",22),Qx(552,"boolean"),og()(),Il(553,"td",23)(554,"p")(555,"code"),Qx(556,"false"),og()()(),Il(557,"td",24)(558,"em")(559,"strong"),Qx(560,"(opcional)"),og()(),Il(561,"p"),zl(562,"a",34),og(),Il(563,"p"),Qx(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),Il(565,"em"),Qx(566,"steps"),og(),Qx(567,"."),og()()(),Il(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),Qx(572," p-step-size"),zl(573,"br"),og()()(),Il(574,"td",21)(575,"code",33),Qx(576,"number"),og()(),Il(577,"td",23)(578,"p")(579,"code"),Qx(580,"24"),og()()(),Il(581,"td",24)(582,"em")(583,"strong"),Qx(584,"(opcional)"),og()(),Il(585,"p"),Qx(586,"Define o tamanho dos "),Il(587,"em"),Qx(588,"steps"),og(),Qx(589," em "),Il(590,"em"),Qx(591,"pixels"),og(),Qx(592,", possibilitando um maior destaque."),og(),Il(593,"p"),Qx(594,"O valor informado deve ser entre "),Il(595,"code"),Qx(596,"24"),og(),Qx(597," e "),Il(598,"code"),Qx(599,"64"),og(),Qx(600,"."),og(),Il(601,"blockquote")(602,"p"),Qx(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),Il(604,"em"),Qx(605,"default"),og(),Qx(606,"."),og()()()(),Il(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),Qx(611," p-steps"),zl(612,"br"),og()()(),Il(613,"td",21)(614,"code",35),Qx(615,"Array<PoStepperItem>"),og()(),Il(616,"td",23),Qx(617,"-"),og(),Il(618,"td",24)(619,"em")(620,"strong"),Qx(621,"(opcional)"),og()(),Il(622,"p"),Qx(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og(),Il(624,"blockquote")(625,"p"),Qx(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Il(627,"a",6)(628,"strong"),Qx(629,"po-step"),og()(),Qx(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Il(631,"a",6)(632,"strong"),Qx(633,"po-step"),og()(),Qx(634,"."),og()()()()(),Il(635,"h3",13),Qx(636,"M\xE9todos"),og(),Il(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),Qx(643," active "),og()()()()(),Il(644,"tr",24)(645,"td",24)(646,"p"),Qx(647,"Altera o status do "),Il(648,"em"),Qx(649,"step"),og(),Qx(650," para ativo."),og(),Il(651,"blockquote")(652,"p"),Qx(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Il(654,"a",6)(655,"strong"),Qx(656,"po-step"),og()(),Qx(657,"."),og()()()()(),Il(658,"h5")(659,"b"),Qx(660,"Par\xE2metros"),og()(),Il(661,"table",14)(662,"tr",15)(663,"th",16),Qx(664,"Nome"),og(),Il(665,"th",16),Qx(666,"Tipo"),og(),Il(667,"th",16),Qx(668,"Descri\xE7\xE3o"),og()(),Il(669,"tr",17)(670,"td",18),Qx(671," index"),og(),Il(672,"td",21)(673,"code",38),Qx(674," number "),og()(),Il(675,"td",24)(676,"p"),Qx(677,"\xCDndice do "),Il(678,"code"),Qx(679,"po-step"),og(),Qx(680," que se deseja ativar."),og()()()(),zl(681,"br"),Il(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),Qx(688," first "),og()()()()(),Il(689,"tr",24)(690,"td",24)(691,"p"),Qx(692,"Ativa o primeiro "),Il(693,"em"),Qx(694,"step"),og(),Qx(695,"."),og(),Il(696,"blockquote")(697,"p"),Qx(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Il(699,"a",6)(700,"strong"),Qx(701,"po-step"),og()(),Qx(702,"."),og()()()()(),zl(703,"br"),Il(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),Qx(710," next "),og()()()()(),Il(711,"tr",24)(712,"td",24)(713,"p"),Qx(714,"Ativa o pr\xF3ximo "),Il(715,"em"),Qx(716,"step"),og(),Qx(717,"."),og(),Il(718,"blockquote")(719,"p"),Qx(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Il(721,"a",6)(722,"strong"),Qx(723,"po-step"),og()(),Qx(724,"."),og()()()()(),zl(725,"br"),Il(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),Qx(732," previous "),og()()()()(),Il(733,"tr",24)(734,"td",24)(735,"p"),Qx(736,"Ativa o "),Il(737,"em"),Qx(738,"step"),og(),Qx(739," anterior."),og(),Il(740,"blockquote")(741,"p"),Qx(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Il(743,"a",6)(744,"strong"),Qx(745,"po-step"),og()(),Qx(746,"."),og()()()()(),zl(747,"br"),Il(748,"h3"),Qx(749,"Interfaces"),og(),Il(750,"h4",39)(751,"code",5),Qx(752,"PoStepperItem"),og()(),Il(753,"div",2)(754,"p"),Qx(755,"Interface para defini\xE7\xE3o dos "),Il(756,"em"),Qx(757,"steps"),og(),Qx(758," do componente "),Il(759,"code"),Qx(760,"po-stepper"),og(),Qx(761," quando utilizada a propriedade "),Il(762,"code"),Qx(763,"p-steps"),og(),Qx(764,"."),og()(),Il(765,"h4",13),Qx(766,"Propriedades"),og(),Il(767,"table",14)(768,"tr",15)(769,"th",16),Qx(770,"Nome"),og(),Il(771,"th",16),Qx(772,"Tipo"),og(),Il(773,"th",16),Qx(774,"Descri\xE7\xE3o"),og()(),Il(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),Qx(779," iconActive"),zl(780,"br"),og()()(),Il(781,"td",21)(782,"code",25),Qx(783,"string "),og(),Il(784,"code",26),Qx(785," TemplateRef<void>"),og()(),Il(786,"td",24)(787,"em")(788,"strong"),Qx(789,"(opcional)"),og()(),Il(790,"p"),Qx(791,"Define o \xEDcone do "),Il(792,"em"),Qx(793,"step"),og(),Qx(794," ativo."),og()()(),Il(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),Qx(799," iconDefault"),zl(800,"br"),og()()(),Il(801,"td",21)(802,"code",25),Qx(803,"string "),og(),Il(804,"code",26),Qx(805," TemplateRef<void>"),og()(),Il(806,"td",24)(807,"em")(808,"strong"),Qx(809,"(opcional)"),og()(),Il(810,"p"),Qx(811,"Define o \xEDcone do "),Il(812,"em"),Qx(813,"step"),og(),Qx(814," default."),og()()(),Il(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),Qx(819," iconDone"),zl(820,"br"),og()()(),Il(821,"td",21)(822,"code",25),Qx(823,"string "),og(),Il(824,"code",26),Qx(825," TemplateRef<void>"),og()(),Il(826,"td",24)(827,"em")(828,"strong"),Qx(829,"(opcional)"),og()(),Il(830,"p"),Qx(831,"Define o \xEDcone do "),Il(832,"em"),Qx(833,"step"),og(),Qx(834," conclu\xEDdo."),og()()(),Il(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),Qx(839," id"),zl(840,"br"),og()()(),Il(841,"td",21)(842,"code",25),Qx(843,"string"),og()(),Il(844,"td",24)(845,"em")(846,"strong"),Qx(847,"(opcional)"),og()(),Il(848,"p"),Qx(849,"Identificador \xFAnico do step."),og()()(),Il(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),Qx(854," label"),zl(855,"br"),og()()(),Il(856,"td",21)(857,"code",25),Qx(858,"string"),og()(),Il(859,"td",24)(860,"em")(861,"strong"),Qx(862,"(opcional)"),og()(),Il(863,"p"),Qx(864,"Texto do item do stepper."),og()()(),Il(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),Qx(869," status"),zl(870,"br"),og()()(),Il(871,"td",21)(872,"code",40),Qx(873,"PoStepperStatus"),og()(),Il(874,"td",24)(875,"em")(876,"strong"),Qx(877,"(opcional)"),og()(),Il(878,"p"),Qx(879,"Define o estado de exibi\xE7\xE3o do "),Il(880,"em"),Qx(881,"step"),og(),Qx(882,"."),og()()()(),Il(883,"h3"),Qx(884,"Enums"),og(),Il(885,"h4",4)(886,"code",5),Qx(887,"PoStepperOrientation"),og()(),Il(888,"div",2)(889,"p"),zl(890,"a",41),og(),Il(891,"p")(892,"em"),Qx(893,"Enums"),og(),Qx(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),Il(895,"code"),Qx(896,"po-stepper"),og(),Qx(897,"."),og()(),Il(898,"h4",13),Qx(899,"Propriedades"),og(),Il(900,"table",14)(901,"tr",15)(902,"th",16),Qx(903,"Nome"),og(),Il(904,"th",16),Qx(905,"Descri\xE7\xE3o"),og()(),Il(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),Qx(910," Horizontal"),zl(911,"br"),og()()(),Il(912,"td",24)(913,"p"),Qx(914,"Define a exibi\xE7\xE3o do componente na horizontal."),og()()(),Il(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),Qx(919," Vertical"),zl(920,"br"),og()()(),Il(921,"td",24)(922,"p"),Qx(923,"Define a exibi\xE7\xE3o do componente na vertical."),og()()()(),Il(924,"h4",4)(925,"code",5),Qx(926,"PoStepperStatus"),og()(),Il(927,"div",2)(928,"p"),zl(929,"a",42),og(),Il(930,"p")(931,"em"),Qx(932,"Enums"),og(),Qx(933," para os status do "),Il(934,"code"),Qx(935,"po-stepper"),og(),Qx(936," quando utilizada a propriedade "),Il(937,"code"),Qx(938,"p-steps"),og(),Qx(939,"."),og()(),Il(940,"h4",13),Qx(941,"Propriedades"),og(),Il(942,"table",14)(943,"tr",15)(944,"th",16),Qx(945,"Nome"),og(),Il(946,"th",16),Qx(947,"Descri\xE7\xE3o"),og()(),Il(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),Qx(952," Active"),zl(953,"br"),og()()(),Il(954,"td",24)(955,"p"),Qx(956,"Define o estado do "),Il(957,"em"),Qx(958,"step"),og(),Qx(959," como ativo."),og()()(),Il(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),Qx(964," Default"),zl(965,"br"),og()()(),Il(966,"td",24)(967,"p"),Qx(968,"Define o estado do "),Il(969,"em"),Qx(970,"step"),og(),Qx(971," como padr\xE3o."),og()()(),Il(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),Qx(976," Disabled"),zl(977,"br"),og()()(),Il(978,"td",24)(979,"p"),Qx(980,"Define o estado do "),Il(981,"em"),Qx(982,"step"),og(),Qx(983," como desabilitado."),og()()(),Il(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),Qx(988," Done"),zl(989,"br"),og()()(),Il(990,"td",24)(991,"p"),Qx(992,"Define o estado do "),Il(993,"em"),Qx(994,"step"),og(),Qx(995," como conclu\xEDdo."),og()()(),Il(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),Qx(1e3," Error"),zl(1001,"br"),og()()(),Il(1002,"td",24)(1003,"p"),Qx(1004,"Define o estado do "),Il(1005,"em"),Qx(1006,"step"),og(),Qx(1007," com erro."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En$1))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-stepper-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Ve,Ae,Le,qe,Oe,Re],encapsulation:2})}return a})();var bt=[{path:"",component:He}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(bt),uL]})}return a})();var En=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,je]})}return a})();export{En as DocPoStepperModule};