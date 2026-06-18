import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,b0 as Qt,b6 as Yo,aB as Dx,H as Il,q as Qx,R as og,a1 as ft,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,bC as v3,b5 as $he,dp as cz,a3 as cNe,aD as Xy,aE as Qy,aT as eN}from'./main-QSTLMRDK.js';var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic"]],standalone:false,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,o){if(l&1){let d=Dx();Il(0,"po-modal",1,0),Qx(2," We are TOTVS!!! "),og(),Il(3,"po-button",2),ft("p-click",function(){Xy(d);let i=Ax(1);return Qy(i.open())}),og();}},dependencies:[Qt,Yo],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Modal Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-modal-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close();},label:"Confirm"};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close();},label:"Cancel"};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open();}ngOnInit(){this.restore();}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,o){if(l&1&&Gl(Yo,7),l&2){let d;co(d=lo())&&(o.poModal=d.first);}},standalone:false,decls:21,vars:28,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionIcon","p-clean","","p-label","Primary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionIcon","p-clean","","p-label","Secondary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=Dx();Il(0,"po-modal",1),Qx(1),og(),Il(2,"po-button",2),ft("p-click",function(){return o.openModal()}),og(),zl(3,"po-divider"),Il(4,"form",null,0)(6,"div",3)(7,"po-input",4),ww("ngModelChange",function(i){return Xy(d),eN(o.title,i)||(o.title=i),Qy(i)}),og(),QA(),Il(8,"po-select",5),ww("ngModelChange",function(i){return Xy(d),eN(o.icon,i)||(o.icon=i),Qy(i)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(i){return Xy(d),eN(o.content,i)||(o.content=i),Qy(i)}),og(),QA(),Il(10,"po-input",7),ww("ngModelChange",function(i){return Xy(d),eN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),Qy(i)}),og(),QA(),Il(11,"po-input",8),ww("ngModelChange",function(i){return Xy(d),eN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),Qy(i)}),og(),QA(),Il(12,"po-checkbox-group",9),ww("ngModelChange",function(i){return Xy(d),eN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),Qy(i)}),og(),QA(),Il(13,"po-input",10),ww("ngModelChange",function(i){return Xy(d),eN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),Qy(i)}),og(),QA(),Il(14,"po-input",11),ww("ngModelChange",function(i){return Xy(d),eN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),Qy(i)}),og(),QA(),Il(15,"po-checkbox-group",12),ww("ngModelChange",function(i){return Xy(d),eN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),Qy(i)}),og(),QA(),Il(16,"po-radio-group",13),ww("ngModelChange",function(i){return Xy(d),eN(o.size,i)||(o.size=i),Qy(i)}),og(),QA(),Il(17,"po-checkbox-group",14),ww("ngModelChange",function(i){return Xy(d),eN(o.properties,i)||(o.properties=i),Qy(i)}),og(),QA(),Il(18,"po-radio-group",15),ww("ngModelChange",function(i){return Xy(d),eN(o.componentsSize,i)||(o.componentsSize=i),Qy(i)}),og(),QA(),og(),Il(19,"div",3)(20,"po-button",16),ft("p-click",function(){return o.restore()}),og()()();}if(l&2){let d=Ax(5);nw("p-click-out",o.properties.includes("click-out"))("p-components-size",o.componentsSize)("p-hide-close",o.properties.includes("hide-close"))("p-primary-action",o.primaryAction)("p-secondary-action",o.secondaryActionLabel?o.secondaryAction:null)("p-size",o.size)("p-title",o.title)("p-icon",o.icon),Lp(),dg(" ",o.content,`
`),Lp(),nw("p-disabled",d.form.invalid),Lp(5),Ew("ngModel",o.title),e0(),Lp(),Ew("ngModel",o.icon),nw("p-options",o.iconOptions),e0(),Lp(),Ew("ngModel",o.content),e0(),Lp(),Ew("ngModel",o.primaryActionLabel),e0(),Lp(),Ew("ngModel",o.primaryActionIcon),e0(),Lp(),Ew("ngModel",o.primaryActionProperties),nw("p-options",o.primaryActionOptions),e0(),Lp(),Ew("ngModel",o.secondaryActionLabel),e0(),Lp(),Ew("ngModel",o.secondaryActionIcon),e0(),Lp(),Ew("ngModel",o.secondaryActionProperties),nw("p-options",o.secondaryActionOptions),e0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),e0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,qhe,Yo],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Modal Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  { { content }}
</po-modal>

<po-button p-label="Open Modal" [p-disabled]="f.form.invalid" (p-click)="openModal()"> </po-button>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-3" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconOptions"
    ></po-select>

    <po-input class="po-md-12 po-lg-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-maxlength="200">
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionLabel"
      [(ngModel)]="primaryActionLabel"
      p-clean
      p-label="Primary action label"
      p-maxlength="50"
    >
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionIcon"
      [(ngModel)]="primaryActionIcon"
      p-clean
      p-label="Primary action icon"
      p-maxlength="50"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="primaryActionProperties"
      [(ngModel)]="primaryActionProperties"
      p-columns="3"
      p-label="Primary Action Properties"
      [p-options]="primaryActionOptions"
    >
    </po-checkbox-group>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionLabel"
      [(ngModel)]="secondaryActionLabel"
      p-clean
      p-label="Secondary action label"
      p-maxlength="50"
    >
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionIcon"
      [(ngModel)]="secondaryActionIcon"
      p-clean
      p-label="Secondary action icon"
      p-maxlength="50"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="secondaryActionProperties"
      [(ngModel)]="secondaryActionProperties"
      p-columns="3"
      p-label="Secondary Action Properties"
      [p-options]="secondaryActionOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="Size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-labs',
  templateUrl: './sample-po-modal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  componentsSize: string;
  content;
  size;
  title;
  icon: string;

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string;
  primaryActionIcon: string;
  primaryActionProperties: Array<string>;
  primaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string;
  secondaryActionIcon: string;
  secondaryActionProperties: Array<string>;
  secondaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'click-out', label: 'Click Out' },
    { value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string>;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' }
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.icon = this.primaryActionIcon;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.icon = this.secondaryActionIcon;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.poModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = undefined;
    this.content = undefined;
    this.title = 'PO Modal';
    this.properties = [];
    this.primaryActionLabel = undefined;
    this.primaryActionIcon = undefined;
    this.primaryActionProperties = [];
    this.secondaryActionLabel = undefined;
    this.secondaryActionIcon = undefined;
    this.secondaryActionProperties = [];
    this.componentsSize = 'medium';
    this.icon = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-modal-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return a})();var Pe=["optionsForm"],ue=(()=>{class a{poNotification=f(Yp);form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal();},label:"Close",danger:true};confirm={action:()=>{this.proccessOrder();},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];closeModal(){this.form.reset(),this.poModal.close();}confirmFruits(){this.proccessOrder();}restore(){this.form.reset();}openQuestionnaire(){this.poModal.open();}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=true,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=false,this.closeModal();},700));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,o){if(l&1&&Gl(Pe,7)(Yo,7),l&2){let d;co(d=lo())&&(o.form=d.first),co(d=lo())&&(o.poModal=d.first);}},standalone:false,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,o){if(l&1){let d=Dx();Il(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),ww("ngModelChange",function(i){return Xy(d),eN(o.fruits,i)||(o.fruits=i),Qy(i)}),og(),QA(),og(),Il(5,"div",2)(6,"po-combo",4),ww("ngModelChange",function(i){return Xy(d),eN(o.accompaniment,i)||(o.accompaniment=i),Qy(i)}),og(),QA(),og(),Il(7,"div",2)(8,"po-textarea",5),ww("ngModelChange",function(i){return Xy(d),eN(o.orderDetail,i)||(o.orderDetail=i),Qy(i)}),og(),QA(),og()(),Il(9,"po-modal-footer",6)(10,"po-button",7),ft("p-click",function(){return o.closeModal()}),og(),Il(11,"po-button",8),ft("p-click",function(){return o.restore()}),og(),Il(12,"po-button",9),ft("p-click",function(){return o.confirmFruits()}),og()()(),Il(13,"po-button",10),ft("p-click",function(){return o.openQuestionnaire()}),og();}l&2&&(nw("p-primary-action",o.confirm)("p-secondary-action",o.close),Lp(4),Ew("ngModel",o.fruits),nw("p-options",o.fruitsOptions),e0(),Lp(2),Ew("ngModel",o.accompaniment),nw("p-options",o.accompanimentOptions),e0(),Lp(2),Ew("ngModel",o.orderDetail),e0(),Lp(),nw("p-disabled-align",false));},dependencies:[G9,$9,z9,mk,hk,Qt,C3,v3,$he,Yo,cz],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Modal - Fruits Salad"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
  <form #optionsForm="ngForm">
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="checkboxGroup"
        [(ngModel)]="fruits"
        p-label="Fruits:"
        p-required
        [p-options]="fruitsOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-combo
        class="po-md-12"
        name="accompaniment"
        [(ngModel)]="accompaniment"
        p-label="Accompaniment:"
        p-required
        [p-options]="accompanimentOptions"
      >
      </po-combo>
    </div>

    <div class="po-row">
      <po-textarea class="po-md-12" name="orderDetail" [(ngModel)]="orderDetail" p-label="Details:" p-rows="8">
      </po-textarea>
    </div>
  </form>

  <po-modal-footer [p-disabled-align]="false">
    <po-button p-danger="true" p-label="Close" (p-click)="closeModal()"> </po-button>
    <po-button p-label="Clear" (p-click)="restore()"> </po-button>
    <po-button p-kind="primary" p-label="Confirm" (p-click)="confirmFruits()"> </po-button>
  </po-modal-footer>
</po-modal>

<po-button p-label="Buy fruits salad" (p-click)="openQuestionnaire()"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoComboOption } from '@po-ui/ng-components';

import { PoModalAction } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-fruits-salad',
  templateUrl: './sample-po-modal-fruits-salad.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalFruitsSaladComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<PoComboOption> = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'hazeinut', label: 'Hazelnut' },
    { value: 'milk', label: 'Milk' }
  ];

  public readonly fruitsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'orange', label: 'Orange' },
    { value: 'apple', label: 'Apple' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'graple', label: 'Grape' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  confirmFruits() {
    this.proccessOrder();
  }

  restore() {
    this.form.reset();
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  private proccessOrder() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.poNotification.success(\`Your order confirmed: \${this.fruits}, with accompaniment: \${this.accompaniment}.\`);
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-modal-fruits-salad"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-doc"]],standalone:false,decls:606,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,o){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoModalModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-modal"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoModalComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-modal"),og(),Qx(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),og(),Il(18,"p"),Qx(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),og(),Il(20,"p"),Qx(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),Il(22,"code"),Qx(23,"po-chart"),og(),Qx(24,`,
`),Il(25,"code"),Qx(26,"po-table"),og(),Qx(27," e os demais componentes do PO."),og(),Il(28,"p"),Qx(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Il(30,"em"),Qx(31,"danger"),og(),Qx(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Il(33,"a",6)(34,"code"),Qx(35,"PoModalFooter"),og()(),Qx(36,"."),og(),Il(37,"blockquote")(38,"p"),Qx(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Il(40,"em"),Qx(41,"ESC"),og(),Qx(42,", quando a propriedade "),Il(43,"code"),Qx(44,"p-hide-close"),og(),Qx(45," n\xE3o estiver habilitada."),og()(),Il(46,"h4"),Qx(47,"Tokens customiz\xE1veis"),og(),Il(48,"p"),Qx(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(50,"blockquote")(51,"p"),Qx(52,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(53,"a",7),Qx(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(55,"."),og()(),Il(56,"table")(57,"thead")(58,"tr")(59,"th"),Qx(60,"Propriedade"),og(),Il(61,"th"),Qx(62,"Descri\xE7\xE3o"),og(),Il(63,"th"),Qx(64,"Valor Padr\xE3o"),og()()(),Il(65,"tbody")(66,"tr")(67,"td")(68,"strong"),Qx(69,"Default Values"),og()(),zl(70,"td")(71,"td"),og(),Il(72,"tr")(73,"td")(74,"code"),Qx(75,"--border-radius"),og(),Qx(76," \xA0"),og(),Il(77,"td"),Qx(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--border-radius-md)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--border-width"),og(),Qx(86," \xA0"),og(),Il(87,"td"),Qx(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(89,"td")(90,"code"),Qx(91,"var(--border-width-sm)"),og()()(),Il(92,"tr")(93,"td")(94,"code"),Qx(95,"--border-color"),og(),Qx(96," \xA0"),og(),Il(97,"td"),Qx(98,"Cor da borda"),og(),Il(99,"td")(100,"code"),Qx(101,"var(--color-neutral-light-20)"),og()()(),Il(102,"tr")(103,"td")(104,"code"),Qx(105,"--background"),og(),Qx(106," \xA0"),og(),Il(107,"td"),Qx(108,"Cor de background"),og(),Il(109,"td")(110,"code"),Qx(111,"var(--color-neutral-light-00)"),og()()(),Il(112,"tr")(113,"td")(114,"code"),Qx(115,"--shadow"),og(),Qx(116," \xA0"),og(),Il(117,"td"),Qx(118,"Cont\xE9m o valor da sombra do elemento"),og(),Il(119,"td")(120,"code"),Qx(121,"var(--shadow-md)"),og()()(),Il(122,"tr")(123,"td")(124,"code"),Qx(125,"--color-overlay"),og(),Qx(126," \xA0"),og(),Il(127,"td"),Qx(128,"Cor da camada visual tempor\xE1ria"),og(),Il(129,"td")(130,"code"),Qx(131,"var(--color-neutral-dark-80)"),og()()(),Il(132,"tr")(133,"td")(134,"code"),Qx(135,"--opacity-overlay"),og(),Qx(136," \xA0"),og(),Il(137,"td"),Qx(138,"Opacidade da camada visual tempor\xE1ria \xA0"),og(),Il(139,"td")(140,"code"),Qx(141,"0.7"),og()()(),Il(142,"tr")(143,"td")(144,"code"),Qx(145,"--color-divider"),og(),Qx(146," \xA0"),og(),Il(147,"td"),Qx(148,"Cor das divis\xF5es do modal"),og(),Il(149,"td")(150,"code"),Qx(151,"var(--color-neutral-light-20)"),og()()(),Il(152,"tr")(153,"td")(154,"code"),Qx(155,"--padding-header"),og(),Qx(156," \xA0"),og(),Il(157,"td"),Qx(158,"Padding do header do modal"),og(),Il(159,"td")(160,"code"),Qx(161,"var(--spacing-sm) var(--spacing-md)"),og()()(),Il(162,"tr")(163,"td")(164,"code"),Qx(165,"--padding-body"),og(),Qx(166," \xA0"),og(),Il(167,"td"),Qx(168,"Padding do corpo do modal"),og(),Il(169,"td")(170,"code"),Qx(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),og()()()()()(),Il(172,"div",8)(173,"h4",9),Qx(174,"Seletor"),og(),Il(175,"pre",10),Qx(176,`<po-modal
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-hide-close="boolean"
    p-icon="string | TemplateRef<void>"
    p-primary-action="PoModalAction"
    p-secondary-action="PoModalAction"
    p-size="string"
    p-title="string" >
</po-modal>
`),og()(),Il(177,"h4",11),Qx(178,"Propriedades"),og(),Il(179,"table",12)(180,"tr",13)(181,"th",14),Qx(182,"Nome"),og(),Il(183,"th",14),Qx(184,"Tipo"),og(),Il(185,"th",14),Qx(186,"Padr\xE3o"),og(),Il(187,"th",14),Qx(188,"Descri\xE7\xE3o"),og()(),Il(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),Qx(193,"p-click-out"),zl(194,"br"),og()()(),Il(195,"td",19)(196,"code",20),Qx(197,"boolean"),og()(),Il(198,"td",21),Qx(199,"-"),og(),Il(200,"td",22)(201,"em")(202,"strong"),Qx(203,"(opcional)"),og()(),Il(204,"p"),Qx(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Il(206,"code"),Qx(207,"true"),og(),Qx(208," para ativar o fechamento ao clicar fora da modal."),og()()(),Il(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),Qx(213," (p-close)"),zl(214,"br"),og()()(),Il(215,"td",19)(216,"code",25),Qx(217,"EventEmitter"),og()(),Il(218,"td",21),Qx(219,"-"),og(),Il(220,"td",22)(221,"p"),Qx(222,"Evento disparado ao fechar o modal."),og()()(),Il(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),Qx(227," p-components-size"),zl(228,"br"),og()()(),Il(229,"td",19)(230,"code",26),Qx(231,"string"),og()(),Il(232,"td",21)(233,"p")(234,"code"),Qx(235,"medium"),og()()(),Il(236,"td",22)(237,"em")(238,"strong"),Qx(239,"(opcional)"),og()(),Il(240,"p"),Qx(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),og(),Il(242,"ul")(243,"li")(244,"code"),Qx(245,"small"),og(),Qx(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(247,"li")(248,"code"),Qx(249,"medium"),og(),Qx(250,": aplica a medida medium de cada componente."),og()(),Il(251,"blockquote")(252,"p"),Qx(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(254,"code"),Qx(255,"medium"),og(),Qx(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(257,"a",27),Qx(258,"po-theme"),og(),Qx(259,"."),og()()()(),Il(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),Qx(264," p-hide-close"),zl(265,"br"),og()()(),Il(266,"td",19)(267,"code",20),Qx(268,"boolean"),og()(),Il(269,"td",21)(270,"p")(271,"code"),Qx(272,"false"),og()()(),Il(273,"td",22)(274,"em")(275,"strong"),Qx(276,"(opcional)"),og()(),Il(277,"p"),Qx(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),og(),Il(279,"blockquote")(280,"p"),Qx(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Il(282,"em"),Qx(283,"ESC"),og(),Qx(284,"."),og()()()(),Il(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),Qx(289," p-icon"),zl(290,"br"),og()()(),Il(291,"td",19)(292,"code",26),Qx(293,"string "),og(),Il(294,"code",28),Qx(295," TemplateRef<void>"),og()(),Il(296,"td",21),Qx(297,"-"),og(),Il(298,"td",22)(299,"em")(300,"strong"),Qx(301,"(opcional)"),og()(),Il(302,"p"),Qx(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),og(),Il(304,"p"),Qx(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(306,"a",29),Qx(307,"Biblioteca de \xEDcones"),og(),Qx(308,". conforme exemplo abaixo:"),og(),Il(309,"pre")(310,"code"),Qx(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),og()(),Il(312,"p"),Qx(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(314,"em"),Qx(315,"Font Awesome"),og(),Qx(316,", da seguinte forma:"),og(),Il(317,"pre")(318,"code"),Qx(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),og()(),Il(320,"p"),Qx(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(322,"code"),Qx(323,"TemplateRef"),og(),Qx(324,", conforme exemplo abaixo:"),og(),Il(325,"pre")(326,"code"),Qx(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Il(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),Qx(332," p-primary-action"),zl(333,"br"),og()()(),Il(334,"td",19)(335,"code",30),Qx(336,"PoModalAction"),og()(),Il(337,"td",21),Qx(338,"-"),og(),Il(339,"td",22)(340,"em")(341,"strong"),Qx(342,"(opcional)"),og()(),Il(343,"p"),Qx(344,"Deve ser definido um objeto que implementa a interface "),Il(345,"code"),Qx(346,"PoModalAction"),og(),Qx(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),og()()(),Il(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),Qx(352," p-secondary-action"),zl(353,"br"),og()()(),Il(354,"td",19)(355,"code",30),Qx(356,"PoModalAction"),og()(),Il(357,"td",21),Qx(358,"-"),og(),Il(359,"td",22)(360,"em")(361,"strong"),Qx(362,"(opcional)"),og()(),Il(363,"p"),Qx(364,"Deve ser definido um objeto que implementa a interface "),Il(365,"code"),Qx(366,"PoModalAction"),og(),Qx(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),og()()(),Il(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),Qx(372," p-size"),zl(373,"br"),og()()(),Il(374,"td",19)(375,"code",26),Qx(376,"string"),og()(),Il(377,"td",21),Qx(378,"-"),og(),Il(379,"td",22)(380,"p"),Qx(381,"Define o tamanho da modal."),og(),Il(382,"p"),Qx(383,"Valores v\xE1lidos:"),og(),Il(384,"ul")(385,"li")(386,"code"),Qx(387,"sm"),og(),Qx(388," (pequeno)"),og(),Il(389,"li")(390,"code"),Qx(391,"md"),og(),Qx(392," (m\xE9dio)"),og(),Il(393,"li")(394,"code"),Qx(395,"lg"),og(),Qx(396," (grande)"),og(),Il(397,"li")(398,"code"),Qx(399,"xl"),og(),Qx(400," (extra grande)"),og(),Il(401,"li")(402,"code"),Qx(403,"auto"),og(),Qx(404," (autom\xE1tico)"),og()(),Il(405,"blockquote")(406,"p"),Qx(407,"Quando informado "),Il(408,"code"),Qx(409,"auto"),og(),Qx(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Il(411,"code"),Qx(412,"md"),og(),Qx(413,"."),og()()()(),Il(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),Qx(418," p-title"),zl(419,"br"),og()()(),Il(420,"td",19)(421,"code",26),Qx(422,"string"),og()(),Il(423,"td",21),Qx(424,"-"),og(),Il(425,"td",22)(426,"p"),Qx(427,"T\xEDtulo da modal."),og()()()(),Il(428,"h3",11),Qx(429,"M\xE9todos"),og(),Il(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),Qx(436," close "),og()()()()(),Il(437,"tr",22)(438,"td",22)(439,"p"),Qx(440,"Fun\xE7\xE3o para fechar a modal."),og()()()(),zl(441,"br"),Il(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),Qx(448," open "),og()()()()(),Il(449,"tr",22)(450,"td",22)(451,"p"),Qx(452,"Fun\xE7\xE3o para abrir a modal."),og()()()(),zl(453,"br"),Il(454,"h3"),Qx(455,"Interfaces"),og(),Il(456,"h4",33)(457,"code",5),Qx(458,"PoModalAction"),og()(),Il(459,"div",2)(460,"p"),Qx(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),Il(462,"code"),Qx(463,"po-modal"),og(),Qx(464,"."),og()(),Il(465,"h4",11),Qx(466,"Propriedades"),og(),Il(467,"table",12)(468,"tr",13)(469,"th",14),Qx(470,"Nome"),og(),Il(471,"th",14),Qx(472,"Tipo"),og(),Il(473,"th",14),Qx(474,"Descri\xE7\xE3o"),og()(),Il(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),Qx(479," action"),zl(480,"br"),og()()(),Il(481,"td",19)(482,"code",34),Qx(483,"Function"),og()(),Il(484,"td",22)(485,"p"),Qx(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),og()()(),Il(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),Qx(491," danger"),zl(492,"br"),og()()(),Il(493,"td",19)(494,"code",20),Qx(495,"boolean"),og()(),Il(496,"td",22)(497,"em")(498,"strong"),Qx(499,"(opcional)"),og()(),Il(500,"p"),Qx(501,"Define a propriedade "),Il(502,"code"),Qx(503,"p-danger"),og(),Qx(504," do bot\xE3o."),og(),Il(505,"blockquote")(506,"p"),Qx(507,"Caso a propriedade esteja definida como "),Il(508,"code"),Qx(509,"true"),og(),Qx(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),Il(511,"code"),Qx(512,"p-danger"),og(),Qx(513," como "),Il(514,"code"),Qx(515,"true"),og(),Qx(516,"."),og()()()(),Il(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),Qx(521," disabled"),zl(522,"br"),og()()(),Il(523,"td",19)(524,"code",20),Qx(525,"boolean"),og()(),Il(526,"td",22)(527,"em")(528,"strong"),Qx(529,"(opcional)"),og()(),Il(530,"p"),Qx(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),og()()(),Il(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),Qx(536," icon"),zl(537,"br"),og()()(),Il(538,"td",19)(539,"code",26),Qx(540,"string "),og(),Il(541,"code",28),Qx(542," TemplateRef<void>"),og()(),Il(543,"td",22)(544,"em")(545,"strong"),Qx(546,"(opcional)"),og()(),Il(547,"p"),Qx(548,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Il(549,"p"),Qx(550,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(551,"a",29),Qx(552,"Biblioteca de \xEDcones"),og(),Qx(553,", conforme exemplo:"),og(),Il(554,"pre")(555,"code"),Qx(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),og()(),Il(557,"p"),Qx(558,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(559,"em"),Qx(560,"Font Awesome"),og(),Qx(561,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Il(562,"pre")(563,"code"),Qx(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),og()(),Il(565,"p"),Qx(566,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(567,"code"),Qx(568,"TemplateRef"),og(),Qx(569,", conforme exemplo abaixo:"),og(),Il(570,"pre")(571,"code"),Qx(572,`// Template HTML
<ng-template #customIcon>
  <span class="fa fa-user"></span>
</ng-template>

// Componente TypeScript
@ViewChild('customIcon', { static: true }) customIcon: TemplateRef<void>;

modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone customizado',
};

// Atribui\xE7\xE3o do TemplateRef \xE0 propriedade icon ap\xF3s a inicializa\xE7\xE3o da view
ngAfterViewInit() {
  this.modalAction.icon = this.customIcon;
}
`),og()(),Il(573,"blockquote")(574,"p"),Qx(575,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(576,"code"),Qx(577,"font-size: inherit"),og(),Qx(578," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(579,"tr",15)(580,"td",16)(581,"div",17)(582,"span",18),Qx(583," label"),zl(584,"br"),og()()(),Il(585,"td",19)(586,"code",26),Qx(587,"string"),og()(),Il(588,"td",22)(589,"p"),Qx(590,"R\xF3tulo do bot\xE3o."),og()()(),Il(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),Qx(595," loading"),zl(596,"br"),og()()(),Il(597,"td",19)(598,"code",20),Qx(599,"boolean"),og()(),Il(600,"td",22)(601,"em")(602,"strong"),Qx(603,"(opcional)"),og()(),Il(604,"p"),Qx(605,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-modal-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,me,ce,be,ge],encapsulation:2})}return a})();var Te=[{path:"",component:he}],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[uL.forChild(Te),uL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Ee]})}return a})();export{rt as DocPoModalModule};