import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,b0 as Qt,b6 as Yo,aB as wx,F as Sl,z as eN,J as og,a1 as ft,an as CO,aH as Ka,b8 as Bme,b9 as qme,H as Wl,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aJ as Hhe,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,bC as f3,b5 as Whe,dn as sz,a3 as rNe,aD as Ky,aE as Xy,aT as nN}from'./main-WP3NAV7C.js';var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic"]],standalone:false,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,o){if(l&1){let d=wx();Sl(0,"po-modal",1,0),eN(2," We are TOTVS!!! "),og(),Sl(3,"po-button",2),ft("p-click",function(){Ky(d);let i=Nx(1);return Xy(i.open())}),og();}},dependencies:[Qt,Yo],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Modal Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,fe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return a})();var se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close();},label:"Confirm"};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close();},label:"Cancel"};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open();}ngOnInit(){this.restore();}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let d;lo(d=uo())&&(o.poModal=d.first);}},standalone:false,decls:21,vars:28,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionIcon","p-clean","","p-label","Primary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionIcon","p-clean","","p-label","Secondary action icon","p-maxlength","50",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=wx();Sl(0,"po-modal",1),eN(1),og(),Sl(2,"po-button",2),ft("p-click",function(){return o.openModal()}),og(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",3)(7,"po-input",4),ww("ngModelChange",function(i){return Ky(d),nN(o.title,i)||(o.title=i),Xy(i)}),og(),e0(),Sl(8,"po-select",5),ww("ngModelChange",function(i){return Ky(d),nN(o.icon,i)||(o.icon=i),Xy(i)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(i){return Ky(d),nN(o.content,i)||(o.content=i),Xy(i)}),og(),e0(),Sl(10,"po-input",7),ww("ngModelChange",function(i){return Ky(d),nN(o.primaryActionLabel,i)||(o.primaryActionLabel=i),Xy(i)}),og(),e0(),Sl(11,"po-input",8),ww("ngModelChange",function(i){return Ky(d),nN(o.primaryActionIcon,i)||(o.primaryActionIcon=i),Xy(i)}),og(),e0(),Sl(12,"po-checkbox-group",9),ww("ngModelChange",function(i){return Ky(d),nN(o.primaryActionProperties,i)||(o.primaryActionProperties=i),Xy(i)}),og(),e0(),Sl(13,"po-input",10),ww("ngModelChange",function(i){return Ky(d),nN(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),Xy(i)}),og(),e0(),Sl(14,"po-input",11),ww("ngModelChange",function(i){return Ky(d),nN(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),Xy(i)}),og(),e0(),Sl(15,"po-checkbox-group",12),ww("ngModelChange",function(i){return Ky(d),nN(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),Xy(i)}),og(),e0(),Sl(16,"po-radio-group",13),ww("ngModelChange",function(i){return Ky(d),nN(o.size,i)||(o.size=i),Xy(i)}),og(),e0(),Sl(17,"po-checkbox-group",14),ww("ngModelChange",function(i){return Ky(d),nN(o.properties,i)||(o.properties=i),Xy(i)}),og(),e0(),Sl(18,"po-radio-group",15),ww("ngModelChange",function(i){return Ky(d),nN(o.componentsSize,i)||(o.componentsSize=i),Xy(i)}),og(),e0(),og(),Sl(19,"div",3)(20,"po-button",16),ft("p-click",function(){return o.restore()}),og()()();}if(l&2){let d=Nx(5);nw("p-click-out",o.properties.includes("click-out"))("p-components-size",o.componentsSize)("p-hide-close",o.properties.includes("hide-close"))("p-primary-action",o.primaryAction)("p-secondary-action",o.secondaryActionLabel?o.secondaryAction:null)("p-size",o.size)("p-title",o.title)("p-icon",o.icon),Lp(),dg(" ",o.content,`
`),Lp(),nw("p-disabled",d.form.invalid),Lp(5),Ew("ngModel",o.title),n0(),Lp(),Ew("ngModel",o.icon),nw("p-options",o.iconOptions),n0(),Lp(),Ew("ngModel",o.content),n0(),Lp(),Ew("ngModel",o.primaryActionLabel),n0(),Lp(),Ew("ngModel",o.primaryActionIcon),n0(),Lp(),Ew("ngModel",o.primaryActionProperties),nw("p-options",o.primaryActionOptions),n0(),Lp(),Ew("ngModel",o.secondaryActionLabel),n0(),Lp(),Ew("ngModel",o.secondaryActionIcon),n0(),Lp(),Ew("ngModel",o.secondaryActionProperties),nw("p-options",o.secondaryActionOptions),n0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),n0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),n0(),Lp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,Hhe,Yo],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Modal Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-modal
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ve,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return a})();var Pe=["optionsForm"],ue=(()=>{class a{poNotification=f(Yp);form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal();},label:"Close",danger:true};confirm={action:()=>{this.proccessOrder();},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];closeModal(){this.form.reset(),this.poModal.close();}confirmFruits(){this.proccessOrder();}restore(){this.form.reset();}openQuestionnaire(){this.poModal.open();}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=true,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=false,this.closeModal();},700));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,o){if(l&1&&ql(Pe,7)(Yo,7),l&2){let d;lo(d=uo())&&(o.form=d.first),lo(d=uo())&&(o.poModal=d.first);}},standalone:false,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,o){if(l&1){let d=wx();Sl(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),ww("ngModelChange",function(i){return Ky(d),nN(o.fruits,i)||(o.fruits=i),Xy(i)}),og(),e0(),og(),Sl(5,"div",2)(6,"po-combo",4),ww("ngModelChange",function(i){return Ky(d),nN(o.accompaniment,i)||(o.accompaniment=i),Xy(i)}),og(),e0(),og(),Sl(7,"div",2)(8,"po-textarea",5),ww("ngModelChange",function(i){return Ky(d),nN(o.orderDetail,i)||(o.orderDetail=i),Xy(i)}),og(),e0(),og()(),Sl(9,"po-modal-footer",6)(10,"po-button",7),ft("p-click",function(){return o.closeModal()}),og(),Sl(11,"po-button",8),ft("p-click",function(){return o.restore()}),og(),Sl(12,"po-button",9),ft("p-click",function(){return o.confirmFruits()}),og()()(),Sl(13,"po-button",10),ft("p-click",function(){return o.openQuestionnaire()}),og();}l&2&&(nw("p-primary-action",o.confirm)("p-secondary-action",o.close),Lp(4),Ew("ngModel",o.fruits),nw("p-options",o.fruitsOptions),n0(),Lp(2),Ew("ngModel",o.accompaniment),nw("p-options",o.accompanimentOptions),n0(),Lp(2),Ew("ngModel",o.orderDetail),n0(),Lp(),nw("p-disabled-align",false));},dependencies:[Z9,G9,q9,_k,mk,Qt,b3,f3,Whe,Yo,sz],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Modal - Fruits Salad"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-fruits-salad"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-modal-doc"]],standalone:false,decls:606,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoModalModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-modal"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoModalComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-modal"),og(),eN(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),og(),Sl(18,"p"),eN(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),og(),Sl(20,"p"),eN(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),Sl(22,"code"),eN(23,"po-chart"),og(),eN(24,`,
`),Sl(25,"code"),eN(26,"po-table"),og(),eN(27," e os demais componentes do PO."),og(),Sl(28,"p"),eN(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Sl(30,"em"),eN(31,"danger"),og(),eN(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Sl(33,"a",6)(34,"code"),eN(35,"PoModalFooter"),og()(),eN(36,"."),og(),Sl(37,"blockquote")(38,"p"),eN(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Sl(40,"em"),eN(41,"ESC"),og(),eN(42,", quando a propriedade "),Sl(43,"code"),eN(44,"p-hide-close"),og(),eN(45," n\xE3o estiver habilitada."),og()(),Sl(46,"h4"),eN(47,"Tokens customiz\xE1veis"),og(),Sl(48,"p"),eN(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(50,"blockquote")(51,"p"),eN(52,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(53,"a",7),eN(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(55,"."),og()(),Sl(56,"table")(57,"thead")(58,"tr")(59,"th"),eN(60,"Propriedade"),og(),Sl(61,"th"),eN(62,"Descri\xE7\xE3o"),og(),Sl(63,"th"),eN(64,"Valor Padr\xE3o"),og()()(),Sl(65,"tbody")(66,"tr")(67,"td")(68,"strong"),eN(69,"Default Values"),og()(),Wl(70,"td")(71,"td"),og(),Sl(72,"tr")(73,"td")(74,"code"),eN(75,"--border-radius"),og(),eN(76," \xA0"),og(),Sl(77,"td"),eN(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(79,"td")(80,"code"),eN(81,"var(--border-radius-md)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),eN(85,"--border-width"),og(),eN(86," \xA0"),og(),Sl(87,"td"),eN(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(89,"td")(90,"code"),eN(91,"var(--border-width-sm)"),og()()(),Sl(92,"tr")(93,"td")(94,"code"),eN(95,"--border-color"),og(),eN(96," \xA0"),og(),Sl(97,"td"),eN(98,"Cor da borda"),og(),Sl(99,"td")(100,"code"),eN(101,"var(--color-neutral-light-20)"),og()()(),Sl(102,"tr")(103,"td")(104,"code"),eN(105,"--background"),og(),eN(106," \xA0"),og(),Sl(107,"td"),eN(108,"Cor de background"),og(),Sl(109,"td")(110,"code"),eN(111,"var(--color-neutral-light-00)"),og()()(),Sl(112,"tr")(113,"td")(114,"code"),eN(115,"--shadow"),og(),eN(116," \xA0"),og(),Sl(117,"td"),eN(118,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(119,"td")(120,"code"),eN(121,"var(--shadow-md)"),og()()(),Sl(122,"tr")(123,"td")(124,"code"),eN(125,"--color-overlay"),og(),eN(126," \xA0"),og(),Sl(127,"td"),eN(128,"Cor da camada visual tempor\xE1ria"),og(),Sl(129,"td")(130,"code"),eN(131,"var(--color-neutral-dark-80)"),og()()(),Sl(132,"tr")(133,"td")(134,"code"),eN(135,"--opacity-overlay"),og(),eN(136," \xA0"),og(),Sl(137,"td"),eN(138,"Opacidade da camada visual tempor\xE1ria \xA0"),og(),Sl(139,"td")(140,"code"),eN(141,"0.7"),og()()(),Sl(142,"tr")(143,"td")(144,"code"),eN(145,"--color-divider"),og(),eN(146," \xA0"),og(),Sl(147,"td"),eN(148,"Cor das divis\xF5es do modal"),og(),Sl(149,"td")(150,"code"),eN(151,"var(--color-neutral-light-20)"),og()()(),Sl(152,"tr")(153,"td")(154,"code"),eN(155,"--padding-header"),og(),eN(156," \xA0"),og(),Sl(157,"td"),eN(158,"Padding do header do modal"),og(),Sl(159,"td")(160,"code"),eN(161,"var(--spacing-sm) var(--spacing-md)"),og()()(),Sl(162,"tr")(163,"td")(164,"code"),eN(165,"--padding-body"),og(),eN(166," \xA0"),og(),Sl(167,"td"),eN(168,"Padding do corpo do modal"),og(),Sl(169,"td")(170,"code"),eN(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),og()()()()()(),Sl(172,"div",8)(173,"h4",9),eN(174,"Seletor"),og(),Sl(175,"pre",10),eN(176,`<po-modal
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
`),og()(),Sl(177,"h4",11),eN(178,"Propriedades"),og(),Sl(179,"table",12)(180,"tr",13)(181,"th",14),eN(182,"Nome"),og(),Sl(183,"th",14),eN(184,"Tipo"),og(),Sl(185,"th",14),eN(186,"Padr\xE3o"),og(),Sl(187,"th",14),eN(188,"Descri\xE7\xE3o"),og()(),Sl(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),eN(193,"p-click-out"),Wl(194,"br"),og()()(),Sl(195,"td",19)(196,"code",20),eN(197,"boolean"),og()(),Sl(198,"td",21),eN(199,"-"),og(),Sl(200,"td",22)(201,"em")(202,"strong"),eN(203,"(opcional)"),og()(),Sl(204,"p"),eN(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Sl(206,"code"),eN(207,"true"),og(),eN(208," para ativar o fechamento ao clicar fora da modal."),og()()(),Sl(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),eN(213," (p-close)"),Wl(214,"br"),og()()(),Sl(215,"td",19)(216,"code",25),eN(217,"EventEmitter"),og()(),Sl(218,"td",21),eN(219,"-"),og(),Sl(220,"td",22)(221,"p"),eN(222,"Evento disparado ao fechar o modal."),og()()(),Sl(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),eN(227," p-components-size"),Wl(228,"br"),og()()(),Sl(229,"td",19)(230,"code",26),eN(231,"string"),og()(),Sl(232,"td",21)(233,"p")(234,"code"),eN(235,"medium"),og()()(),Sl(236,"td",22)(237,"em")(238,"strong"),eN(239,"(opcional)"),og()(),Sl(240,"p"),eN(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),og(),Sl(242,"ul")(243,"li")(244,"code"),eN(245,"small"),og(),eN(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(247,"li")(248,"code"),eN(249,"medium"),og(),eN(250,": aplica a medida medium de cada componente."),og()(),Sl(251,"blockquote")(252,"p"),eN(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(254,"code"),eN(255,"medium"),og(),eN(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(257,"a",27),eN(258,"po-theme"),og(),eN(259,"."),og()()()(),Sl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),eN(264," p-hide-close"),Wl(265,"br"),og()()(),Sl(266,"td",19)(267,"code",20),eN(268,"boolean"),og()(),Sl(269,"td",21)(270,"p")(271,"code"),eN(272,"false"),og()()(),Sl(273,"td",22)(274,"em")(275,"strong"),eN(276,"(opcional)"),og()(),Sl(277,"p"),eN(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),og(),Sl(279,"blockquote")(280,"p"),eN(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),Sl(282,"em"),eN(283,"ESC"),og(),eN(284,"."),og()()()(),Sl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),eN(289," p-icon"),Wl(290,"br"),og()()(),Sl(291,"td",19)(292,"code",26),eN(293,"string "),og(),Sl(294,"code",28),eN(295," TemplateRef<void>"),og()(),Sl(296,"td",21),eN(297,"-"),og(),Sl(298,"td",22)(299,"em")(300,"strong"),eN(301,"(opcional)"),og()(),Sl(302,"p"),eN(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),og(),Sl(304,"p"),eN(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(306,"a",29),eN(307,"Biblioteca de \xEDcones"),og(),eN(308,". conforme exemplo abaixo:"),og(),Sl(309,"pre")(310,"code"),eN(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),og()(),Sl(312,"p"),eN(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(314,"em"),eN(315,"Font Awesome"),og(),eN(316,", da seguinte forma:"),og(),Sl(317,"pre")(318,"code"),eN(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),og()(),Sl(320,"p"),eN(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(322,"code"),eN(323,"TemplateRef"),og(),eN(324,", conforme exemplo abaixo:"),og(),Sl(325,"pre")(326,"code"),eN(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Sl(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),eN(332," p-primary-action"),Wl(333,"br"),og()()(),Sl(334,"td",19)(335,"code",30),eN(336,"PoModalAction"),og()(),Sl(337,"td",21),eN(338,"-"),og(),Sl(339,"td",22)(340,"em")(341,"strong"),eN(342,"(opcional)"),og()(),Sl(343,"p"),eN(344,"Deve ser definido um objeto que implementa a interface "),Sl(345,"code"),eN(346,"PoModalAction"),og(),eN(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),og()()(),Sl(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),eN(352," p-secondary-action"),Wl(353,"br"),og()()(),Sl(354,"td",19)(355,"code",30),eN(356,"PoModalAction"),og()(),Sl(357,"td",21),eN(358,"-"),og(),Sl(359,"td",22)(360,"em")(361,"strong"),eN(362,"(opcional)"),og()(),Sl(363,"p"),eN(364,"Deve ser definido um objeto que implementa a interface "),Sl(365,"code"),eN(366,"PoModalAction"),og(),eN(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),og()()(),Sl(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),eN(372," p-size"),Wl(373,"br"),og()()(),Sl(374,"td",19)(375,"code",26),eN(376,"string"),og()(),Sl(377,"td",21),eN(378,"-"),og(),Sl(379,"td",22)(380,"p"),eN(381,"Define o tamanho da modal."),og(),Sl(382,"p"),eN(383,"Valores v\xE1lidos:"),og(),Sl(384,"ul")(385,"li")(386,"code"),eN(387,"sm"),og(),eN(388," (pequeno)"),og(),Sl(389,"li")(390,"code"),eN(391,"md"),og(),eN(392," (m\xE9dio)"),og(),Sl(393,"li")(394,"code"),eN(395,"lg"),og(),eN(396," (grande)"),og(),Sl(397,"li")(398,"code"),eN(399,"xl"),og(),eN(400," (extra grande)"),og(),Sl(401,"li")(402,"code"),eN(403,"auto"),og(),eN(404," (autom\xE1tico)"),og()(),Sl(405,"blockquote")(406,"p"),eN(407,"Quando informado "),Sl(408,"code"),eN(409,"auto"),og(),eN(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Sl(411,"code"),eN(412,"md"),og(),eN(413,"."),og()()()(),Sl(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),eN(418," p-title"),Wl(419,"br"),og()()(),Sl(420,"td",19)(421,"code",26),eN(422,"string"),og()(),Sl(423,"td",21),eN(424,"-"),og(),Sl(425,"td",22)(426,"p"),eN(427,"T\xEDtulo da modal."),og()()()(),Sl(428,"h3",11),eN(429,"M\xE9todos"),og(),Sl(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),eN(436," close "),og()()()()(),Sl(437,"tr",22)(438,"td",22)(439,"p"),eN(440,"Fun\xE7\xE3o para fechar a modal."),og()()()(),Wl(441,"br"),Sl(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),eN(448," open "),og()()()()(),Sl(449,"tr",22)(450,"td",22)(451,"p"),eN(452,"Fun\xE7\xE3o para abrir a modal."),og()()()(),Wl(453,"br"),Sl(454,"h3"),eN(455,"Interfaces"),og(),Sl(456,"h4",33)(457,"code",5),eN(458,"PoModalAction"),og()(),Sl(459,"div",2)(460,"p"),eN(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),Sl(462,"code"),eN(463,"po-modal"),og(),eN(464,"."),og()(),Sl(465,"h4",11),eN(466,"Propriedades"),og(),Sl(467,"table",12)(468,"tr",13)(469,"th",14),eN(470,"Nome"),og(),Sl(471,"th",14),eN(472,"Tipo"),og(),Sl(473,"th",14),eN(474,"Descri\xE7\xE3o"),og()(),Sl(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),eN(479," action"),Wl(480,"br"),og()()(),Sl(481,"td",19)(482,"code",34),eN(483,"Function"),og()(),Sl(484,"td",22)(485,"p"),eN(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),og()()(),Sl(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),eN(491," danger"),Wl(492,"br"),og()()(),Sl(493,"td",19)(494,"code",20),eN(495,"boolean"),og()(),Sl(496,"td",22)(497,"em")(498,"strong"),eN(499,"(opcional)"),og()(),Sl(500,"p"),eN(501,"Define a propriedade "),Sl(502,"code"),eN(503,"p-danger"),og(),eN(504," do bot\xE3o."),og(),Sl(505,"blockquote")(506,"p"),eN(507,"Caso a propriedade esteja definida como "),Sl(508,"code"),eN(509,"true"),og(),eN(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),Sl(511,"code"),eN(512,"p-danger"),og(),eN(513," como "),Sl(514,"code"),eN(515,"true"),og(),eN(516,"."),og()()()(),Sl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),eN(521," disabled"),Wl(522,"br"),og()()(),Sl(523,"td",19)(524,"code",20),eN(525,"boolean"),og()(),Sl(526,"td",22)(527,"em")(528,"strong"),eN(529,"(opcional)"),og()(),Sl(530,"p"),eN(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),og()()(),Sl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),eN(536," icon"),Wl(537,"br"),og()()(),Sl(538,"td",19)(539,"code",26),eN(540,"string "),og(),Sl(541,"code",28),eN(542," TemplateRef<void>"),og()(),Sl(543,"td",22)(544,"em")(545,"strong"),eN(546,"(opcional)"),og()(),Sl(547,"p"),eN(548,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Sl(549,"p"),eN(550,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(551,"a",29),eN(552,"Biblioteca de \xEDcones"),og(),eN(553,", conforme exemplo:"),og(),Sl(554,"pre")(555,"code"),eN(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),og()(),Sl(557,"p"),eN(558,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(559,"em"),eN(560,"Font Awesome"),og(),eN(561,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Sl(562,"pre")(563,"code"),eN(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),og()(),Sl(565,"p"),eN(566,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(567,"code"),eN(568,"TemplateRef"),og(),eN(569,", conforme exemplo abaixo:"),og(),Sl(570,"pre")(571,"code"),eN(572,`// Template HTML
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
`),og()(),Sl(573,"blockquote")(574,"p"),eN(575,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(576,"code"),eN(577,"font-size: inherit"),og(),eN(578," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(579,"tr",15)(580,"td",16)(581,"div",17)(582,"span",18),eN(583," label"),Wl(584,"br"),og()()(),Sl(585,"td",19)(586,"code",26),eN(587,"string"),og()(),Sl(588,"td",22)(589,"p"),eN(590,"R\xF3tulo do bot\xE3o."),og()()(),Sl(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),eN(595," loading"),Wl(596,"br"),og()()(),Sl(597,"td",19)(598,"code",20),eN(599,"boolean"),og()(),Sl(600,"td",22)(601,"em")(602,"strong"),eN(603,"(opcional)"),og()(),Sl(604,"p"),eN(605,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-modal-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,me,ce,be,ge],encapsulation:2})}return a})();var Te=[{path:"",component:he}],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[hL.forChild(Te),hL]})}return a})();var rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Ee]})}return a})();export{rt as DocPoModalModule};