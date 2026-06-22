import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En$1,U as Un,a as f,ae as Be$1,r as r$1,x as N,dA as Ue,bi as ay,dB as Li,n as nb,I,dC as Dt,d8 as Ame,d9 as dNe,F as Sl,H as Wl,J as og,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aY as q9,aZ as mk,b0 as Qt,aI as dc,b1 as mv,b2 as Khe,c9 as Ghe,aB as wx,aQ as gx,aR as px,bd as Nx,aS as mx,aF as G9,aG as _k,bD as Pde,b4 as L3,aK as rS,b6 as Yo,ba as fNe,aq as dx,aM as ww,aN as e0,aD as Ky,aE as Xy,at as fx,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,cz as Pz,aJ as Hhe,b5 as Whe,a3 as rNe,aA as Mx,B as yw,aT as nN}from'./main-WP3NAV7C.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic"]],standalone:false,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(Sl(0,"po-stepper",0),Wl(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),og()),r&2&&nw("p-align-center",false);},dependencies:[Ame,dNe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Stepper Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-stepper-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ye,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Fe],encapsulation:2})}return a})();function Ge(a,j){if(a&1&&(Sl(0,"po-step",3)(1,"h2"),eN(2),og()()),a&2){let m=j.$implicit;nw("p-label",m.label)("p-icon-default",m.iconDefault),Lp(2),dg("Step Content ",m.label);}}var ke=(()=>{class a{changeDetector=f(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:true},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore();}addItem(m){this.steps=[...this.steps,r$1({},m)],this.stepItem={},this.changeDetector.detectChanges();}changeStep(m){this.event=m,this.changeDetector.detectChanges();}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=false;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs"]],standalone:false,decls:17,vars:13,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"po-container")(1,"po-stepper",2),ft("p-change-step",function(){return i.changeStep("change")}),gx(2,Ge,3,3,"po-step",3,px),og(),Wl(4,"po-divider")(5,"po-info",4),Sl(6,"form",null,0),Wl(8,"po-dynamic-form",5),Sl(9,"div",6)(10,"po-button",7),ft("p-click",function(){Ky(s);let o=Nx(7);return i.addItem(i.stepItem),Xy(o.reset())}),og()()(),Sl(11,"form",null,1),Wl(13,"po-dynamic-form",5)(14,"po-divider"),Sl(15,"div",6)(16,"po-button",8),ft("p-click",function(){Ky(s);let o=Nx(7),Ue=Nx(12);return i.restore(),Ue.reset(),Xy(o.reset())}),og()()()();}if(r&2){let s=Nx(7);Lp(),nw("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),Lp(),mx(i.steps),Lp(3),nw("p-value",i.event),Lp(3),nw("p-fields",i.stepItemFields)("p-value",i.stepItem),Lp(2),nw("p-disabled",s.invalid),Lp(3),nw("p-fields",i.propertiesFields)("p-value",i.properties);}},dependencies:[Z9,q9,mk,Qt,dc,mv,Khe,Ghe,Ame,dNe],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Stepper Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-stepper-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ke],encapsulation:2})}return a})();var $e=["addressForm"],et=["paymentForm"],tt=["personalForm"],nt=["successData"];function it(a,j){a&1&&Wl(0,"po-loading-overlay",18);}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=false;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress();}canActiveFinishStep(m){return N(m.form.valid).pipe(Ue(()=>this.isLoadingPayment=true),ay(2e3),Li(()=>this.isLoadingPayment=false))}canActiveNextStep(m){return m.valid}onConfirmStep(m){this.successData.open(),this.resetForms(),this.address=this.getAddress(),m.first();}getAddress(){return {city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&ql($e,7)(et,7)(tt,7)(nt,7),r&2){let s;lo(s=uo())&&(i.addressForm=s.first),lo(s=uo())&&(i.paymentForm=s.first),lo(s=uo())&&(i.personalForm=s.first),lo(s=uo())&&(i.successData=s.first);}},standalone:false,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[1,"sample-stepper-position-relative"],["p-text","Loading"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),Wl(4,"img",11),og(),Sl(5,"div",12)(6,"p",13),eN(7,"Nike XYZ - Red/Gold Stripes"),og(),Sl(8,"p",14),eN(9,"Brand: Nike | Style: Modern | Men's"),og(),Sl(10,"p",15),eN(11,"Width: 12.5 - COD: 001254648412319"),og(),Wl(12,"po-divider"),Sl(13,"p",15),eN(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),og()()()(),Sl(15,"po-widget",16)(16,"p",15),eN(17,"$2.500,00"),og(),Sl(18,"p",15),eN(19,"$500,00(-)"),og(),Sl(20,"p",15),eN(21,"$160,00(+)"),og(),Wl(22,"po-divider"),Sl(23,"p",14),eN(24,"Total: $2.160,00"),og()()(),Wl(25,"po-divider"),Sl(26,"div",17),dx(27,it,1,0,"po-loading-overlay",18),Sl(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),ft("p-primary-action",function(){Ky(s);let o=Nx(29);return Xy(o.next())}),Sl(32,"form",null,1)(34,"div",8)(35,"po-input",22),ww("ngModelChange",function(o){return Ky(s),nN(i.name,o)||(i.name=o),Xy(o)}),og(),e0(),Sl(36,"po-datepicker",23),ww("ngModelChange",function(o){return Ky(s),nN(i.birthday,o)||(i.birthday=o),Xy(o)}),og(),e0(),Sl(37,"po-input",24),ww("ngModelChange",function(o){return Ky(s),nN(i.document,o)||(i.document=o),Xy(o)}),og(),e0(),og()()()(),Sl(38,"po-step",25)(39,"po-widget",26),ft("p-primary-action",function(){Ky(s);let o=Nx(29);return Xy(o.previous())})("p-secondary-action",function(){Ky(s);let o=Nx(29);return Xy(o.next())}),Sl(40,"form",null,2)(42,"div",8)(43,"po-input",27),ww("ngModelChange",function(o){return Ky(s),nN(i.address.street,o)||(i.address.street=o),Xy(o)}),og(),e0(),Sl(44,"po-input",28),ww("ngModelChange",function(o){return Ky(s),nN(i.address.number,o)||(i.address.number=o),Xy(o)}),og(),e0(),Sl(45,"po-input",29),ww("ngModelChange",function(o){return Ky(s),nN(i.address.city,o)||(i.address.city=o),Xy(o)}),og(),e0(),og(),Sl(46,"div",8)(47,"po-input",30),ww("ngModelChange",function(o){return Ky(s),nN(i.address.code,o)||(i.address.code=o),Xy(o)}),og(),e0(),Sl(48,"po-input",31),ww("ngModelChange",function(o){return Ky(s),nN(i.address.country,o)||(i.address.country=o),Xy(o)}),og(),e0(),Sl(49,"po-input",32),ww("ngModelChange",function(o){return Ky(s),nN(i.address.reference,o)||(i.address.reference=o),Xy(o)}),og(),e0(),og()()()(),Sl(50,"po-step",33)(51,"po-widget",26),ft("p-primary-action",function(){Ky(s);let o=Nx(29);return Xy(o.previous())})("p-secondary-action",function(){Ky(s);let o=Nx(29);return Xy(o.next())}),Sl(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),ww("ngModelChange",function(o){return Ky(s),nN(i.cardName,o)||(i.cardName=o),Xy(o)}),og(),e0(),Sl(57,"po-input",35,5),ww("ngModelChange",function(o){return Ky(s),nN(i.cardCode,o)||(i.cardCode=o),Xy(o)}),og(),e0(),Sl(59,"po-input",36,6),ww("ngModelChange",function(o){return Ky(s),nN(i.cardValid,o)||(i.cardValid=o),Xy(o)}),og(),e0(),og()()()(),Sl(61,"po-step",37)(62,"po-widget",26),ft("p-primary-action",function(){Ky(s);let o=Nx(29);return Xy(o.previous())})("p-secondary-action",function(){Ky(s);let o=Nx(29);return Xy(i.onConfirmStep(o))}),Sl(63,"div",8),Wl(64,"po-info",38)(65,"po-info",39),og(),Sl(66,"div",8),Wl(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),og(),Wl(71,"po-divider"),Sl(72,"div",8),Wl(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),og()()()()(),Sl(78,"po-modal",49,7)(80,"div",8),Wl(81,"img",50),Sl(82,"p",51),eN(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),og()()();}if(r&2){let s=Nx(33),c=Nx(41),o=Nx(53);Lp(27),fx(i.isLoadingPayment?27:-1),Lp(3),nw("p-can-active-next-step",i.canActiveNextStep.bind(i,s)),Lp(),nw("p-primary-label",i.nextLabelWidget),Lp(4),Ew("ngModel",i.name),n0(),Lp(),Ew("ngModel",i.birthday),n0(),Lp(),Ew("ngModel",i.document),n0(),Lp(),nw("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),Lp(),nw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Lp(4),Ew("ngModel",i.address.street),n0(),Lp(),Ew("ngModel",i.address.number),n0(),Lp(),Ew("ngModel",i.address.city),n0(),Lp(2),Ew("ngModel",i.address.code),n0(),Lp(),Ew("ngModel",i.address.country),n0(),Lp(),Ew("ngModel",i.address.reference),n0(),Lp(),nw("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),Lp(),nw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),Lp(4),Ew("ngModel",i.cardName),n0(),Lp(2),Ew("ngModel",i.cardCode),n0(),Lp(2),Ew("ngModel",i.cardValid),n0(),Lp(3),nw("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),Lp(2),nw("p-value",i.name),Lp(),nw("p-value",i.document),Lp(2),nw("p-value",i.address.street),Lp(),nw("p-value",i.address.number),Lp(),nw("p-value",i.address.city),Lp(),nw("p-value",i.address.country);}},dependencies:[Z9,G9,q9,_k,mk,mv,Pde,L3,Ghe,rS,Yo,Ame,dNe,fNe],styles:[".sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}"],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Stepper - Sales"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-stepper-sales/sample-po-stepper-sales.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-stepper-position-relative {
  position: relative;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-stepper-sales"),og(),Wl(29,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,at,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,We],encapsulation:2})}return a})();var Be=(()=>{class a{http=f(nb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(m){return this.http.get(`${this.url}/getCities/${m}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var rt=["basicInformation"],lt=["academicFormation"],st=["professionalExperiences"];function mt(a,j){if(a&1&&(Sl(0,"div",23)(1,"po-widget",24)(2,"p"),eN(3),og()()()),a&2){let m=j.$implicit;Lp(),nw("p-title",m.title),Lp(2),yw(m.description);}}function dt(a,j){if(a&1&&(Sl(0,"div",4),Wl(1,"po-divider",23),gx(2,mt,4,2,"div",23,px),og()),a&2){let m=Mx();Lp(2),mx(m.professionalExperiences);}}var Ne=(()=>{class a{sampleService=f(Be);changeDetector=f(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep());}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates();}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}activeStep(){this.stepper.active(2);}onChangeState(){this.getCitiesByState(this.basicInformation.state);}addProfessionalExperiences(m){let r={title:m.value.experienceTitle,description:m.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r];}getBasicInformations(){return {name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return {name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return {name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return [{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(m){this.citiesSubscription=this.sampleService.getCitiesByState(m).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(m=>{this.stateOptions=m.items,this.getCitiesByState(this.basicInformation.state);});}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&ql(rt,7)(lt,7)(st,7)(dNe,5),r&2){let s;lo(s=uo())&&(i.basicInformationForm=s.first),lo(s=uo())&&(i.academicFormationForm=s.first),lo(s=uo())&&(i.professionalExperiencesForm=s.first),lo(s=uo())&&(i.stepper=s.first);}},standalone:false,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],[1,"po-md-12"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let s=wx();Sl(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),ww("ngModelChange",function(o){return Ky(s),nN(i.basicInformation.name,o)||(i.basicInformation.name=o),Xy(o)}),og(),e0(),Sl(7,"po-email",6),ww("ngModelChange",function(o){return Ky(s),nN(i.basicInformation.email,o)||(i.basicInformation.email=o),Xy(o)}),og(),e0(),Sl(8,"po-input",7),ww("ngModelChange",function(o){return Ky(s),nN(i.basicInformation.phone,o)||(i.basicInformation.phone=o),Xy(o)}),og(),e0(),Sl(9,"po-select",8),ww("ngModelChange",function(o){return Ky(s),nN(i.basicInformation.state,o)||(i.basicInformation.state=o),Xy(o)}),ft("p-change",function(){return i.onChangeState()}),og(),e0(),Sl(10,"po-select",9),ww("ngModelChange",function(o){return Ky(s),nN(i.basicInformation.city,o)||(i.basicInformation.city=o),Xy(o)}),og(),e0(),og()()(),Sl(11,"po-step",10)(12,"form",null,1)(14,"div",4),Wl(15,"po-divider",11),Sl(16,"po-input",12),ww("ngModelChange",function(o){return Ky(s),nN(i.highSchool.name,o)||(i.highSchool.name=o),Xy(o)}),og(),e0(),Sl(17,"po-input",13),ww("ngModelChange",function(o){return Ky(s),nN(i.highSchool.city,o)||(i.highSchool.city=o),Xy(o)}),og(),e0(),Sl(18,"po-input",14),ww("ngModelChange",function(o){return Ky(s),nN(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),Xy(o)}),og(),e0(),og(),Sl(19,"div",4),Wl(20,"po-divider",15),Sl(21,"po-input",16),ww("ngModelChange",function(o){return Ky(s),nN(i.universityEducation.name,o)||(i.universityEducation.name=o),Xy(o)}),og(),e0(),Sl(22,"po-input",17),ww("ngModelChange",function(o){return Ky(s),nN(i.universityEducation.city,o)||(i.universityEducation.city=o),Xy(o)}),og(),e0(),Sl(23,"po-input",18),ww("ngModelChange",function(o){return Ky(s),nN(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),Xy(o)}),og(),e0(),og()()(),Sl(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),ww("ngModelChange",function(o){return Ky(s),nN(i.experienceTitle,o)||(i.experienceTitle=o),Xy(o)}),og(),e0(),Sl(29,"po-textarea",21),ww("ngModelChange",function(o){return Ky(s),nN(i.experienceDescripton,o)||(i.experienceDescripton=o),Xy(o)}),og(),e0(),Sl(30,"po-button",22),ft("p-click",function(){Ky(s);let o=Nx(26);return i.addProfessionalExperiences(o),Xy(o.reset())}),og()()(),dx(31,dt,4,0,"div",4),og()()();}r&2&&(Lp(6),Ew("ngModel",i.basicInformation.name),n0(),Lp(),Ew("ngModel",i.basicInformation.email),n0(),Lp(),Ew("ngModel",i.basicInformation.phone),n0(),Lp(),Ew("ngModel",i.basicInformation.state),nw("p-options",i.stateOptions),n0(),Lp(),Ew("ngModel",i.basicInformation.city),nw("p-options",i.cityOptions),n0(),Lp(6),Ew("ngModel",i.highSchool.name),n0(),Lp(),Ew("ngModel",i.highSchool.city),n0(),Lp(),Ew("ngModel",i.highSchool.conclusionYear),n0(),Lp(3),Ew("ngModel",i.universityEducation.name),n0(),Lp(),Ew("ngModel",i.universityEducation.city),n0(),Lp(),Ew("ngModel",i.universityEducation.conclusionYear),n0(),Lp(5),Ew("ngModel",i.experienceTitle),n0(),Lp(),Ew("ngModel",i.experienceDescripton),n0(),Lp(2),fx(i.professionalExperiences?31:-1));},dependencies:[Z9,G9,q9,_k,mk,Qt,dc,mv,Pz,L3,Hhe,Whe,Ame,dNe,fNe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Stepper - Active"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-stepper-active"),og(),Wl(27,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ut,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ne],encapsulation:2})}return a})();var ze=(()=>{class a{changeDetector=f(Be$1);currentStep;stepsWithStatus=[{label:"Step 1",status:Dt.Done},{label:"Step 2",status:Dt.Active},{label:"Step 3",status:Dt.Default},{label:"Step 4",status:Dt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges();}onChangeStatus(m){this.currentStep=m,this.stepsWithStatus.forEach(r=>{r.status===Dt.Active&&(r.status=Dt.Done);}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===Dt.Active&&(r.status=Dt.Default);}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===Dt.Disabled&&(this.stepsWithStatus[this.currentStep].status=Dt.Default);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps"]],standalone:false,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(Sl(0,"po-stepper",0),ft("p-change-step",function(c){return i.onChangeStatus(c)}),og()),r&2&&nw("p-align-center",false)("p-sequential",false)("p-step",i.currentStep)("p-steps",i.stepsWithStatus);},dependencies:[dNe],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Stepper - Steps"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-stepper-steps"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ht,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ze],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-stepper-doc"]],standalone:false,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-stepper"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoStepperComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O "),Sl(15,"code"),eN(16,"po-stepper"),og(),eN(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),og(),Sl(18,"p"),eN(19,"Existem duas formas de utiliza\xE7\xE3o:"),og(),Sl(20,"p"),eN(21,"1 - Usando o componente "),Sl(22,"a",6)(23,"strong"),eN(24,"po-step"),og()(),eN(25," para renderizar e descrever os passos."),og(),Sl(26,"p"),eN(27,"2 - Atrav\xE9s da propriedade "),Sl(28,"code"),eN(29,"p-steps"),og(),eN(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Sl(31,"em"),eN(32,"step"),og(),eN(33," ativo."),og(),Sl(34,"p"),eN(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Sl(36,"em"),eN(37,"steps"),og(),eN(38,"."),og(),Sl(39,"p"),eN(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Sl(41,"em"),eN(42,"steps"),og(),eN(43," atrav\xE9s do teclado utilizando a tecla "),Sl(44,"em"),eN(45,"tab"),og(),eN(46," e, para ativar o "),Sl(47,"em"),eN(48,"step"),og(),eN(49,` em foco basta
pressionar a tecla `),Sl(50,"em"),eN(51,"enter"),og(),eN(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),Sl(53,"em"),eN(54,"steps"),og(),eN(55,` atrav\xE9s da
propriedade `),Sl(56,"a",7)(57,"code"),eN(58,"p-step-icons"),og()(),eN(59,"."),og(),Sl(60,"h4"),eN(61,"Utilizando os m\xE9todos do componente:"),og(),Sl(62,"p"),eN(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),og(),Sl(64,"p"),eN(65,"Por exemplo, utilizando um "),Sl(66,"a",8)(67,"strong"),eN(68,"ViewChild"),og()(),eN(69,":"),og(),Sl(70,"pre")(71,"code"),eN(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),og()(),Sl(73,"p"),eN(74,"E para acessar o m\xE9todo:"),og(),Sl(75,"pre")(76,"code"),eN(77,`poStepperComponent.next();
`),og()(),Sl(78,"h4"),eN(79,"Boas pr\xE1ticas"),og(),Sl(80,"ul")(81,"li"),eN(82,"Evite "),Sl(83,"code"),eN(84,"labels"),og(),eN(85," extensos que quebram o layout do "),Sl(86,"code"),eN(87,"po-stepper"),og(),eN(88,", use "),Sl(89,"code"),eN(90,"labels"),og(),eN(91," diretos, curtos e intuitivos."),og(),Sl(92,"li"),eN(93,"Utilize apenas um "),Sl(94,"code"),eN(95,"po-stepper"),og(),eN(96," por p\xE1gina."),og()(),Sl(97,"h4"),eN(98,"Tokens customiz\xE1veis"),og(),Sl(99,"p"),eN(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(101,"blockquote")(102,"p"),eN(103,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(104,"a",9),eN(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(106,"."),og()(),Sl(107,"table")(108,"thead")(109,"tr")(110,"th"),eN(111,"Propriedade"),og(),Sl(112,"th"),eN(113,"Descri\xE7\xE3o"),og(),Sl(114,"th"),eN(115,"Valor Padr\xE3o"),og()()(),Sl(116,"tbody")(117,"tr")(118,"td")(119,"strong"),eN(120,"Label"),og()(),Wl(121,"td")(122,"td"),og(),Sl(123,"tr")(124,"td")(125,"code"),eN(126,"--font-family"),og()(),Sl(127,"td"),eN(128,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(129,"td")(130,"code"),eN(131,"var(--font-family-theme)"),og()()(),Sl(132,"tr")(133,"td")(134,"code"),eN(135,"--font-size"),og()(),Sl(136,"td"),eN(137,"Tamanho da fonte"),og(),Sl(138,"td")(139,"code"),eN(140,"var(--font-size-default)"),og()()(),Sl(141,"tr")(142,"td")(143,"code"),eN(144,"--font-weight"),og()(),Sl(145,"td"),eN(146,"Peso da fonte"),og(),Sl(147,"td")(148,"code"),eN(149,"var(--font-weight-normal)"),og()()(),Sl(150,"tr")(151,"td")(152,"strong"),eN(153,"Step - Done"),og()(),Wl(154,"td")(155,"td"),og(),Sl(156,"tr")(157,"td")(158,"code"),eN(159,"--text-color"),og()(),Sl(160,"td"),eN(161,"Cor do texto no step conclu\xEDdo"),og(),Sl(162,"td")(163,"code"),eN(164,"var(--color-neutral-dark-70)"),og()()(),Sl(165,"tr")(166,"td")(167,"code"),eN(168,"--color-icon-done"),og()(),Sl(169,"td"),eN(170,"Cor do \xEDcone no step conclu\xEDdo"),og(),Sl(171,"td")(172,"code"),eN(173,"var(--color-neutral-dark-70)"),og()()(),Sl(174,"tr")(175,"td")(176,"code"),eN(177,"--background-done"),og()(),Sl(178,"td"),eN(179,"Cor de fundo no step conclu\xEDdo"),og(),Sl(180,"td")(181,"code"),eN(182,"var(--color-neutral-light-00)"),og()()(),Sl(183,"tr")(184,"td")(185,"strong"),eN(186,"Line - Done"),og()(),Wl(187,"td")(188,"td"),og(),Sl(189,"tr")(190,"td")(191,"code"),eN(192,"--color-line-done"),og()(),Sl(193,"td"),eN(194,"Cor da linha no step conclu\xEDdo"),og(),Sl(195,"td")(196,"code"),eN(197,"var(--color-neutral-mid-40)"),og()()(),Sl(198,"tr")(199,"td")(200,"strong"),eN(201,"Step - Current"),og()(),Wl(202,"td")(203,"td"),og(),Sl(204,"tr")(205,"td")(206,"code"),eN(207,"--color-icon-current"),og()(),Sl(208,"td"),eN(209,"Cor do \xEDcone no step atual"),og(),Sl(210,"td")(211,"code"),eN(212,"var(--color-neutral-light-00)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),eN(216,"--background-current"),og()(),Sl(217,"td"),eN(218,"Cor de fundo no step atual"),og(),Sl(219,"td")(220,"code"),eN(221,"var(--color-action-default)"),og()()(),Sl(222,"tr")(223,"td")(224,"code"),eN(225,"--font-weight-current"),og()(),Sl(226,"td"),eN(227,"Peso da fonte no step atual"),og(),Sl(228,"td")(229,"code"),eN(230,"var(--font-weight-bold)"),og()()(),Sl(231,"tr")(232,"td")(233,"strong"),eN(234,"Step - Next"),og()(),Wl(235,"td")(236,"td"),og(),Sl(237,"tr")(238,"td")(239,"code"),eN(240,"--font-size-circle"),og()(),Sl(241,"td"),eN(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),og(),Sl(243,"td")(244,"code"),eN(245,"var(--font-size-sm)"),og()()(),Sl(246,"tr")(247,"td")(248,"code"),eN(249,"--color-next"),og()(),Sl(250,"td"),eN(251,"Cor do \xEDcone no pr\xF3ximo step"),og(),Sl(252,"td")(253,"code"),eN(254,"var(--color-action-disabled)"),og()()(),Sl(255,"tr")(256,"td")(257,"code"),eN(258,"--text-color-next"),og()(),Sl(259,"td"),eN(260,"Cor do texto no pr\xF3ximo step"),og(),Sl(261,"td")(262,"code"),eN(263,"var(--color-neutral-light-30)"),og()()(),Sl(264,"tr")(265,"td")(266,"strong"),eN(267,"Focused"),og()(),Wl(268,"td")(269,"td"),og(),Sl(270,"tr")(271,"td")(272,"code"),eN(273,"--outline-color-focused"),og()(),Sl(274,"td"),eN(275,"Cor do outline do estado de focus"),og(),Sl(276,"td")(277,"code"),eN(278,"var(--color-action-focus)"),og()()()()()(),Sl(279,"div",10)(280,"h4",11),eN(281,"Seletor"),og(),Sl(282,"pre",12),eN(283,`<po-stepper
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
`),og()(),Sl(284,"h4",13),eN(285,"Propriedades"),og(),Sl(286,"table",14)(287,"tr",15)(288,"th",16),eN(289,"Nome"),og(),Sl(290,"th",16),eN(291,"Tipo"),og(),Sl(292,"th",16),eN(293,"Padr\xE3o"),og(),Sl(294,"th",16),eN(295,"Descri\xE7\xE3o"),og()(),Sl(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),eN(300," p-align-center"),Wl(301,"br"),og()()(),Sl(302,"td",21)(303,"code",22),eN(304,"boolean"),og()(),Sl(305,"td",23)(306,"p")(307,"code"),eN(308,"true"),og()()(),Sl(309,"td",24)(310,"em")(311,"strong"),eN(312,"(opcional)"),og()(),Sl(313,"p"),eN(314,"Define o alinhamento dos "),Sl(315,"em"),eN(316,"steps"),og(),eN(317," e "),Sl(318,"em"),eN(319,"labels"),og(),eN(320," no "),Sl(321,"em"),eN(322,"stepper"),og(),eN(323,", dependendo da orienta\xE7\xE3o."),og(),Sl(324,"ul")(325,"li"),eN(326,"Quando "),Sl(327,"code"),eN(328,"true"),og(),eN(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),og(),Sl(330,"li"),eN(331,"Quando "),Sl(332,"code"),eN(333,"false"),og(),eN(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),og()()()(),Sl(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),eN(339," p-disable-click"),Wl(340,"br"),og()()(),Sl(341,"td",21)(342,"code",22),eN(343,"boolean"),og()(),Sl(344,"td",23)(345,"p")(346,"code"),eN(347,"false"),og()()(),Sl(348,"td",24)(349,"em")(350,"strong"),eN(351,"(opcional)"),og()(),Sl(352,"p"),eN(353,"Desabilita o clique nos steps."),og()()(),Sl(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),eN(358," p-step-icon-active"),Wl(359,"br"),og()()(),Sl(360,"td",21)(361,"code",25),eN(362,"string "),og(),Sl(363,"code",26),eN(364," TemplateRef<void>"),og()(),Sl(365,"td",23)(366,"p")(367,"code"),eN(368,"po-icon-edit"),og()()(),Sl(369,"td",24)(370,"em")(371,"strong"),eN(372,"(opcional)"),og()(),Sl(373,"p"),eN(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Sl(375,"a",27),eN(376,"Biblioteca de \xEDcones"),og(),eN(377,"."),og(),Sl(378,"pre")(379,"code"),eN(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),og()(),Sl(381,"p"),eN(382,"Para customizar o \xEDcone atrav\xE9s do "),Sl(383,"code"),eN(384,"TemplateRef"),og(),eN(385,", veja a documenta\xE7\xE3o da propriedade "),Sl(386,"code"),eN(387,"p-step-icon-done"),og(),eN(388,"."),og(),Sl(389,"blockquote")(390,"p"),eN(391,"Deve-se usar "),Sl(392,"code"),eN(393,"font-size: inherit"),og(),eN(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Sl(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),eN(399," p-step-icon-done"),Wl(400,"br"),og()()(),Sl(401,"td",21)(402,"code",25),eN(403,"string "),og(),Sl(404,"code",26),eN(405," TemplateRef<void>"),og()(),Sl(406,"td",23)(407,"p")(408,"code"),eN(409,"po-icon-ok"),og()()(),Sl(410,"td",24)(411,"em")(412,"strong"),eN(413,"(opcional)"),og()(),Sl(414,"p"),eN(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Sl(416,"a",27),eN(417,"Biblioteca de \xEDcones"),og()(),Sl(418,"pre")(419,"code"),eN(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),og()(),Sl(421,"p"),eN(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(423,"code"),eN(424,"TemplateRef"),og(),eN(425,", conforme exemplo abaixo:"),og(),Sl(426,"pre")(427,"code"),eN(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),og()(),Sl(429,"blockquote")(430,"p"),eN(431,"Deve-se usar "),Sl(432,"code"),eN(433,"font-size: inherit"),og(),eN(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Sl(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),eN(439," (p-change-step)"),Wl(440,"br"),og()()(),Sl(441,"td",21)(442,"code",30),eN(443,"EventEmitter"),og()(),Sl(444,"td",23),eN(445,"-"),og(),Sl(446,"td",24)(447,"p"),eN(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),Sl(449,"code"),eN(450,"po-stepper"),og(),eN(451,"."),og()()(),Sl(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),eN(456," p-orientation"),Wl(457,"br"),og()()(),Sl(458,"td",21)(459,"code",31),eN(460,"PoStepperOrientation"),og()(),Sl(461,"td",23)(462,"p")(463,"code"),eN(464,"PoStepperOrientation.Horizontal"),og()()(),Sl(465,"td",24)(466,"em")(467,"strong"),eN(468,"(opcional)"),og()(),Sl(469,"p"),eN(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Sl(471,"code"),eN(472,"po-stepper"),og(),eN(473,"."),og(),Sl(474,"blockquote")(475,"p"),eN(476,"Veja os valores v\xE1lidos no "),Sl(477,"em"),eN(478,"enum"),og(),Sl(479,"a",32),eN(480,"PoStepperOrientation"),og(),eN(481,"."),og()()()(),Sl(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),eN(486," p-sequential"),Wl(487,"br"),og()()(),Sl(488,"td",21)(489,"code",22),eN(490,"boolean"),og()(),Sl(491,"td",23)(492,"p")(493,"code"),eN(494,"true"),og()()(),Sl(495,"td",24)(496,"em")(497,"strong"),eN(498,"(opcional)"),og()(),Sl(499,"p"),eN(500,"Define se o "),Sl(501,"code"),eN(502,"po-stepper"),og(),eN(503," ser\xE1 sequencial ou aleat\xF3rio."),og(),Sl(504,"blockquote")(505,"p"),eN(506,"Ao utilizar o componente "),Sl(507,"a",6)(508,"strong"),eN(509,"po-step"),og()(),eN(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),og()()()(),Sl(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),eN(515," p-step"),Wl(516,"br"),og()()(),Sl(517,"td",21)(518,"code",33),eN(519,"number"),og()(),Sl(520,"td",23)(521,"p")(522,"code"),eN(523,"1"),og()()(),Sl(524,"td",24)(525,"em")(526,"strong"),eN(527,"(opcional)"),og()(),Sl(528,"p"),eN(529,"Controla o passo atual do "),Sl(530,"code"),eN(531,"po-stepper"),og(),eN(532,"."),og(),Sl(533,"blockquote")(534,"p"),eN(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Sl(536,"a",6)(537,"strong"),eN(538,"po-step"),og()(),eN(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Sl(540,"a",6)(541,"strong"),eN(542,"po-step"),og()(),eN(543,"."),og()()()(),Sl(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),eN(548," p-step-icons"),Wl(549,"br"),og()()(),Sl(550,"td",21)(551,"code",22),eN(552,"boolean"),og()(),Sl(553,"td",23)(554,"p")(555,"code"),eN(556,"false"),og()()(),Sl(557,"td",24)(558,"em")(559,"strong"),eN(560,"(opcional)"),og()(),Sl(561,"p"),Wl(562,"a",34),og(),Sl(563,"p"),eN(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),Sl(565,"em"),eN(566,"steps"),og(),eN(567,"."),og()()(),Sl(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),eN(572," p-step-size"),Wl(573,"br"),og()()(),Sl(574,"td",21)(575,"code",33),eN(576,"number"),og()(),Sl(577,"td",23)(578,"p")(579,"code"),eN(580,"24"),og()()(),Sl(581,"td",24)(582,"em")(583,"strong"),eN(584,"(opcional)"),og()(),Sl(585,"p"),eN(586,"Define o tamanho dos "),Sl(587,"em"),eN(588,"steps"),og(),eN(589," em "),Sl(590,"em"),eN(591,"pixels"),og(),eN(592,", possibilitando um maior destaque."),og(),Sl(593,"p"),eN(594,"O valor informado deve ser entre "),Sl(595,"code"),eN(596,"24"),og(),eN(597," e "),Sl(598,"code"),eN(599,"64"),og(),eN(600,"."),og(),Sl(601,"blockquote")(602,"p"),eN(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),Sl(604,"em"),eN(605,"default"),og(),eN(606,"."),og()()()(),Sl(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),eN(611," p-steps"),Wl(612,"br"),og()()(),Sl(613,"td",21)(614,"code",35),eN(615,"Array<PoStepperItem>"),og()(),Sl(616,"td",23),eN(617,"-"),og(),Sl(618,"td",24)(619,"em")(620,"strong"),eN(621,"(opcional)"),og()(),Sl(622,"p"),eN(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og(),Sl(624,"blockquote")(625,"p"),eN(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),Sl(627,"a",6)(628,"strong"),eN(629,"po-step"),og()(),eN(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Sl(631,"a",6)(632,"strong"),eN(633,"po-step"),og()(),eN(634,"."),og()()()()(),Sl(635,"h3",13),eN(636,"M\xE9todos"),og(),Sl(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),eN(643," active "),og()()()()(),Sl(644,"tr",24)(645,"td",24)(646,"p"),eN(647,"Altera o status do "),Sl(648,"em"),eN(649,"step"),og(),eN(650," para ativo."),og(),Sl(651,"blockquote")(652,"p"),eN(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(654,"a",6)(655,"strong"),eN(656,"po-step"),og()(),eN(657,"."),og()()()()(),Sl(658,"h5")(659,"b"),eN(660,"Par\xE2metros"),og()(),Sl(661,"table",14)(662,"tr",15)(663,"th",16),eN(664,"Nome"),og(),Sl(665,"th",16),eN(666,"Tipo"),og(),Sl(667,"th",16),eN(668,"Descri\xE7\xE3o"),og()(),Sl(669,"tr",17)(670,"td",18),eN(671," index"),og(),Sl(672,"td",21)(673,"code",38),eN(674," number "),og()(),Sl(675,"td",24)(676,"p"),eN(677,"\xCDndice do "),Sl(678,"code"),eN(679,"po-step"),og(),eN(680," que se deseja ativar."),og()()()(),Wl(681,"br"),Sl(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),eN(688," first "),og()()()()(),Sl(689,"tr",24)(690,"td",24)(691,"p"),eN(692,"Ativa o primeiro "),Sl(693,"em"),eN(694,"step"),og(),eN(695,"."),og(),Sl(696,"blockquote")(697,"p"),eN(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(699,"a",6)(700,"strong"),eN(701,"po-step"),og()(),eN(702,"."),og()()()()(),Wl(703,"br"),Sl(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),eN(710," next "),og()()()()(),Sl(711,"tr",24)(712,"td",24)(713,"p"),eN(714,"Ativa o pr\xF3ximo "),Sl(715,"em"),eN(716,"step"),og(),eN(717,"."),og(),Sl(718,"blockquote")(719,"p"),eN(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(721,"a",6)(722,"strong"),eN(723,"po-step"),og()(),eN(724,"."),og()()()()(),Wl(725,"br"),Sl(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),eN(732," previous "),og()()()()(),Sl(733,"tr",24)(734,"td",24)(735,"p"),eN(736,"Ativa o "),Sl(737,"em"),eN(738,"step"),og(),eN(739," anterior."),og(),Sl(740,"blockquote")(741,"p"),eN(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),Sl(743,"a",6)(744,"strong"),eN(745,"po-step"),og()(),eN(746,"."),og()()()()(),Wl(747,"br"),Sl(748,"h3"),eN(749,"Interfaces"),og(),Sl(750,"h4",39)(751,"code",5),eN(752,"PoStepperItem"),og()(),Sl(753,"div",2)(754,"p"),eN(755,"Interface para defini\xE7\xE3o dos "),Sl(756,"em"),eN(757,"steps"),og(),eN(758," do componente "),Sl(759,"code"),eN(760,"po-stepper"),og(),eN(761," quando utilizada a propriedade "),Sl(762,"code"),eN(763,"p-steps"),og(),eN(764,"."),og()(),Sl(765,"h4",13),eN(766,"Propriedades"),og(),Sl(767,"table",14)(768,"tr",15)(769,"th",16),eN(770,"Nome"),og(),Sl(771,"th",16),eN(772,"Tipo"),og(),Sl(773,"th",16),eN(774,"Descri\xE7\xE3o"),og()(),Sl(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),eN(779," iconActive"),Wl(780,"br"),og()()(),Sl(781,"td",21)(782,"code",25),eN(783,"string "),og(),Sl(784,"code",26),eN(785," TemplateRef<void>"),og()(),Sl(786,"td",24)(787,"em")(788,"strong"),eN(789,"(opcional)"),og()(),Sl(790,"p"),eN(791,"Define o \xEDcone do "),Sl(792,"em"),eN(793,"step"),og(),eN(794," ativo."),og()()(),Sl(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),eN(799," iconDefault"),Wl(800,"br"),og()()(),Sl(801,"td",21)(802,"code",25),eN(803,"string "),og(),Sl(804,"code",26),eN(805," TemplateRef<void>"),og()(),Sl(806,"td",24)(807,"em")(808,"strong"),eN(809,"(opcional)"),og()(),Sl(810,"p"),eN(811,"Define o \xEDcone do "),Sl(812,"em"),eN(813,"step"),og(),eN(814," default."),og()()(),Sl(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),eN(819," iconDone"),Wl(820,"br"),og()()(),Sl(821,"td",21)(822,"code",25),eN(823,"string "),og(),Sl(824,"code",26),eN(825," TemplateRef<void>"),og()(),Sl(826,"td",24)(827,"em")(828,"strong"),eN(829,"(opcional)"),og()(),Sl(830,"p"),eN(831,"Define o \xEDcone do "),Sl(832,"em"),eN(833,"step"),og(),eN(834," conclu\xEDdo."),og()()(),Sl(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),eN(839," id"),Wl(840,"br"),og()()(),Sl(841,"td",21)(842,"code",25),eN(843,"string"),og()(),Sl(844,"td",24)(845,"em")(846,"strong"),eN(847,"(opcional)"),og()(),Sl(848,"p"),eN(849,"Identificador \xFAnico do step."),og()()(),Sl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),eN(854," label"),Wl(855,"br"),og()()(),Sl(856,"td",21)(857,"code",25),eN(858,"string"),og()(),Sl(859,"td",24)(860,"em")(861,"strong"),eN(862,"(opcional)"),og()(),Sl(863,"p"),eN(864,"Texto do item do stepper."),og()()(),Sl(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),eN(869," status"),Wl(870,"br"),og()()(),Sl(871,"td",21)(872,"code",40),eN(873,"PoStepperStatus"),og()(),Sl(874,"td",24)(875,"em")(876,"strong"),eN(877,"(opcional)"),og()(),Sl(878,"p"),eN(879,"Define o estado de exibi\xE7\xE3o do "),Sl(880,"em"),eN(881,"step"),og(),eN(882,"."),og()()()(),Sl(883,"h3"),eN(884,"Enums"),og(),Sl(885,"h4",4)(886,"code",5),eN(887,"PoStepperOrientation"),og()(),Sl(888,"div",2)(889,"p"),Wl(890,"a",41),og(),Sl(891,"p")(892,"em"),eN(893,"Enums"),og(),eN(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),Sl(895,"code"),eN(896,"po-stepper"),og(),eN(897,"."),og()(),Sl(898,"h4",13),eN(899,"Propriedades"),og(),Sl(900,"table",14)(901,"tr",15)(902,"th",16),eN(903,"Nome"),og(),Sl(904,"th",16),eN(905,"Descri\xE7\xE3o"),og()(),Sl(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),eN(910," Horizontal"),Wl(911,"br"),og()()(),Sl(912,"td",24)(913,"p"),eN(914,"Define a exibi\xE7\xE3o do componente na horizontal."),og()()(),Sl(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),eN(919," Vertical"),Wl(920,"br"),og()()(),Sl(921,"td",24)(922,"p"),eN(923,"Define a exibi\xE7\xE3o do componente na vertical."),og()()()(),Sl(924,"h4",4)(925,"code",5),eN(926,"PoStepperStatus"),og()(),Sl(927,"div",2)(928,"p"),Wl(929,"a",42),og(),Sl(930,"p")(931,"em"),eN(932,"Enums"),og(),eN(933," para os status do "),Sl(934,"code"),eN(935,"po-stepper"),og(),eN(936," quando utilizada a propriedade "),Sl(937,"code"),eN(938,"p-steps"),og(),eN(939,"."),og()(),Sl(940,"h4",13),eN(941,"Propriedades"),og(),Sl(942,"table",14)(943,"tr",15)(944,"th",16),eN(945,"Nome"),og(),Sl(946,"th",16),eN(947,"Descri\xE7\xE3o"),og()(),Sl(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),eN(952," Active"),Wl(953,"br"),og()()(),Sl(954,"td",24)(955,"p"),eN(956,"Define o estado do "),Sl(957,"em"),eN(958,"step"),og(),eN(959," como ativo."),og()()(),Sl(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),eN(964," Default"),Wl(965,"br"),og()()(),Sl(966,"td",24)(967,"p"),eN(968,"Define o estado do "),Sl(969,"em"),eN(970,"step"),og(),eN(971," como padr\xE3o."),og()()(),Sl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),eN(976," Disabled"),Wl(977,"br"),og()()(),Sl(978,"td",24)(979,"p"),eN(980,"Define o estado do "),Sl(981,"em"),eN(982,"step"),og(),eN(983," como desabilitado."),og()()(),Sl(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),eN(988," Done"),Wl(989,"br"),og()()(),Sl(990,"td",24)(991,"p"),eN(992,"Define o estado do "),Sl(993,"em"),eN(994,"step"),og(),eN(995," como conclu\xEDdo."),og()()(),Sl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),eN(1e3," Error"),Wl(1001,"br"),og()()(),Sl(1002,"td",24)(1003,"p"),eN(1004,"Define o estado do "),Sl(1005,"em"),eN(1006,"step"),og(),eN(1007," com erro."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var He=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En$1))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-stepper-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,Ve,Ae,Le,qe,Oe,Re],encapsulation:2})}return a})();var bt=[{path:"",component:He}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[hL.forChild(bt),hL]})}return a})();var En=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,je]})}return a})();export{En as DocPoStepperModule};