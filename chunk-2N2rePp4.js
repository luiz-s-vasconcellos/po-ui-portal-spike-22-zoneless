import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,bt as Ak,ds as Ca,dt as X0,du as hh,dv as Iue,ba as yNe,H as Il,J as zl,R as og,q as Qx,A as Lp,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,a1 as ft,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,cQ as Ik,cR as Ck,b0 as Qt,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,aB as Dx,aq as lx,aM as ww,aN as QA,at as ux,aO as Ew,aP as e0,b1 as mv,d4 as Hz,a3 as cNe,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic"]],standalone:false,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(Il(0,"div")(1,"po-widget",0),zl(2,"po-progress",1),og()(),Il(3,"div",2)(4,"po-widget",3),zl(5,"po-progress",4),Il(6,"div",2),Qx(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),og()()()),l&2&&(Lp(2),nw("p-value",25),Lp(3),nw("p-value",25)("p-radius",24));},dependencies:[Iue,yNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Progress Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<div>
  <po-widget p-title="Bar">
    <po-progress [p-value]="25"></po-progress>
  </po-widget>
</div>

<div class="po-mt-1">
  <po-widget p-title="Circle" class="po-mt-2">
    <po-progress [p-value]="25" p-shape="circle" [p-radius]="24"></po-progress>
    <div class="po-mt-1">Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</div>
  </po-widget>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-progress-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return o})();function Oe(o,Q){if(o&1&&(Il(0,"po-widget",3),zl(1,"po-info",15),og()),o&2){let r=Sx();Lp(),nw("p-value",r.event);}}function Ae(o,Q){if(o&1&&(Il(0,"div")(1,"po-widget",21)(2,"form",22),zl(3,"po-input",23),QA(),zl(4,"po-select",24),QA(),zl(5,"po-select",25),QA(),zl(6,"po-switch",26),QA(),zl(7,"po-switch",27),QA(),og()()()),o&2){let r=Sx(2);Lp(2),nw("formGroup",r.actionForm),Lp(),e0(),Lp(),nw("p-options",r.iconOptions),e0(),Lp(),nw("p-options",r.typeOptions),e0(),Lp(),e0(),Lp(),e0();}}function ze(o,Q){if(o&1){let r=Dx();Il(0,"po-select",16),ww("ngModelChange",function(i){Xy(r);let m=Sx();return eN(m.infoIcon,i)||(m.infoIcon=i),Qy(i)}),og(),QA(),Il(1,"po-input",17),ww("ngModelChange",function(i){Xy(r);let m=Sx();return eN(m.text,i)||(m.text=i),Qy(i)}),og(),QA(),Il(2,"po-input",18),ww("ngModelChange",function(i){Xy(r);let m=Sx();return eN(m.info,i)||(m.info=i),Qy(i)}),og(),QA(),Il(3,"po-radio-group",19),ww("ngModelChange",function(i){Xy(r);let m=Sx();return eN(m.sizeActions,i)||(m.sizeActions=i),Qy(i)}),og(),QA(),Il(4,"po-switch",20),ww("ngModelChange",function(i){Xy(r);let m=Sx();return eN(m.showAction,i)||(m.showAction=i),Qy(i)}),og(),QA(),lx(5,Ae,8,3,"div");}if(o&2){let r=Sx();Ew("ngModel",r.infoIcon),nw("p-options",r.infoIconsOptions),e0(),Lp(),Ew("ngModel",r.text),e0(),Lp(),Ew("ngModel",r.info),e0(),Lp(),Ew("ngModel",r.sizeActions),nw("p-options",r.sizeActionsOptions),e0(),Lp(),Ew("ngModel",r.showAction),e0(),Lp(),ux(r.showAction?5:-1);}}function Be(o,Q){if(o&1){let r=Dx();Il(0,"po-number",28),ww("ngModelChange",function(i){Xy(r);let m=Sx();return eN(m.radius,i)||(m.radius=i),Qy(i)}),og(),QA();}if(o&2){let r=Sx();Ew("ngModel",r.radius),e0();}}var he=(()=>{class o{fb=f(Ak);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=Ca.Default;size=X0.large;shape=hh.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:Ca.Default},{label:"Success",value:Ca.Success},{label:"Error",value:Ca.Error}];sizeOptions=[{label:"Medium",value:X0.medium},{label:"Large",value:X0.large}];shapeOptions=[{label:"Bar",value:hh.bar},{label:"Circle",value:hh.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm();}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions];}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r);});}updateAction(r){this.action=r;}onEvent(r){this.event=r;}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=false,this.indeterminate=false,this.showPercentage=false,this.status=Ca.Default,this.text=void 0,this.value=void 0,this.size=X0.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.showAction=false,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=hh.bar);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs"]],standalone:false,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=Dx();Il(0,"div",1)(1,"po-progress",2),ft("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),og(),lx(2,Oe,2,1,"po-widget",3),Il(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),ww("ngModelChange",function(d){return Xy(m),eN(i.shape,d)||(i.shape=d),Qy(d)}),ft("p-change",function(d){return i.onShapeChange(d)}),og(),QA(),og(),Il(8,"div",7)(9,"po-number",8),ww("ngModelChange",function(d){return Xy(m),eN(i.value,d)||(i.value=d),Qy(d)}),og(),QA(),Il(10,"po-select",9),ww("ngModelChange",function(d){return Xy(m),eN(i.size,d)||(i.size=d),Qy(d)}),og(),QA(),Il(11,"po-select",10),ww("ngModelChange",function(d){return Xy(m),eN(i.status,d)||(i.status=d),Qy(d)}),og(),QA(),lx(12,ze,6,8),lx(13,Be,1,1,"po-number",11),Il(14,"po-checkbox-group",12),ww("ngModelChange",function(d){return Xy(m),eN(i.properties,d)||(i.properties=d),Qy(d)}),og(),QA(),og()()(),Il(15,"div",13)(16,"po-button",14),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),nw("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),Lp(),ux(i.shape==="bar"?2:-1),Lp(5),Ew("ngModel",i.shape),nw("p-options",i.shapeOptions),e0(),Lp(2),Ew("ngModel",i.value),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0(),Lp(),Ew("ngModel",i.status),nw("p-options",i.statusOptions),e0(),Lp(),ux(i.shape==="bar"?12:-1),Lp(),ux(i.shape==="circle"?13:-1),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Ik,Ck,Qt,C3,O3,Hhe,Dde,qhe,k3,Yhe,Iue,yNe],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Progress Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="sample-progress-grid">
  <po-progress
    [p-disabled-cancel]="properties.includes('disabledCancel')"
    [p-indeterminate]="properties.includes('indeterminate')"
    [p-show-percentage]="properties.includes('showPercentage')"
    [p-info]="info"
    [p-info-icon]="infoIcon"
    [p-status]="status"
    [p-text]="text"
    [p-value]="value"
    [p-size]="size"
    [p-shape]="shape"
    [p-radius]="radius"
    [p-size-actions]="sizeActions"
    [p-custom-action]="action"
    (p-custom-action-click)="onEvent('p-custom-action-click')"
    (p-cancel)="onEvent('p-cancel')"
    (p-retry)="onEvent('p-retry')"
  />

  @if (shape === 'bar') {
    <po-widget p-title="Events">
      <po-info [p-value]="event" />
    </po-widget>
  }

  <po-widget p-title="Properties">
    <form #progressBarPropertiesForm="ngForm">
      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12">
        <po-radio-group
          class="po-md-6 po-lg-3"
          name="shape"
          [(ngModel)]="shape"
          p-label="Shape"
          [p-options]="shapeOptions"
          (p-change)="onShapeChange($event)"
        >
        </po-radio-group>
      </div>

      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12 po-mt-2">
        <po-number
          class="po-md-6 po-lg-3"
          name="value"
          [(ngModel)]="value"
          p-clean
          p-label="Value"
          p-max="100"
          p-min="0"
        />

        <po-select class="po-md-6 po-lg-3" name="Size" p-label="Size" [(ngModel)]="size" [p-options]="sizeOptions" />

        <po-select
          class="po-md-6 po-lg-3"
          name="Status"
          p-label="Status"
          [(ngModel)]="status"
          [p-options]="statusOptions"
        />

        @if (shape === 'bar') {
          <po-select
            class="po-md-6 po-lg-3"
            name="infoIcon"
            [(ngModel)]="infoIcon"
            p-label="Info icon"
            [p-options]="infoIconsOptions"
          />

          <po-input class="po-md-6" name="text" [(ngModel)]="text" p-clean p-label="Label" />

          <po-input class="po-md-6" name="info" [(ngModel)]="info" p-clean p-label="Info" />

          <po-radio-group
            class="po-md-12 po-mb-2"
            name="sizeActions"
            [(ngModel)]="sizeActions"
            p-columns="4"
            p-label="Size actions"
            p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
            [p-options]="sizeActionsOptions"
          >
          </po-radio-group>

          <po-switch class="po-md-3" name="addAction" [(ngModel)]="showAction" p-label="Add Action Button" />

          @if (showAction) {
            <div>
              <po-widget p-title="Action Button">
                <form [formGroup]="actionForm" class="po-row">
                  <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
                  <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
                  <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
                  <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
                  <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
                </form>
              </po-widget>
            </div>
          }
        }

        @if (shape === 'circle') {
          <po-number
            class="po-md-6 po-lg-3"
            name="radius"
            [(ngModel)]="radius"
            p-clean
            p-label="Radius"
            p-help="Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."
            p-min="24"
          />
        }

        <po-checkbox-group
          class="po-md-12 po-mt-2"
          name="properties"
          [(ngModel)]="properties"
          p-columns="4"
          p-label="Properties"
          [p-options]="propertiesOptions"
        >
        </po-checkbox-group>
      </div>
    </form>
  </po-widget>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressStatus,
  PoRadioGroupOption,
  PoProgressSize,
  PoProgressShape,
  PoProgressAction,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  styleUrls: ['./sample-po-progress-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  event: any;
  info: string;
  infoIcon: string;
  disabledCancel: boolean;
  indeterminate: boolean;
  showPercentage: boolean;
  status: PoProgressStatus = PoProgressStatus.Default;
  size: PoProgressSize = PoProgressSize.large;
  shape: PoProgressShape = PoProgressShape.bar;
  radius: number;
  text: string;
  value: number;
  action: PoProgressAction;
  actionForm: FormGroup;
  showAction: false;
  properties: Array<string>;
  sizeActions: string;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-warning-circle', value: 'an an-warning-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-cloud-slash', value: 'an an-cloud-slash' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  shapeOptions: Array<PoRadioGroupOption> = [
    { label: 'Bar', value: PoProgressShape.bar },
    { label: 'Circle', value: PoProgressShape.circle }
  ];

  sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Visible', value: 'visible' }
  ];

  private readonly allPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabledCancel', label: 'Disabled cancel' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'showPercentage', label: 'Show percentage' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [...this.allPropertiesOptions];

  constructor() {
    this.initializeActionForm();
  }

  onShapeChange(value: string): void {
    this.restore(value);

    if (value === 'circle') {
      this.propertiesOptions = this.allPropertiesOptions.filter(property => property.value !== 'disabledCancel');
    } else {
      this.propertiesOptions = [...this.allPropertiesOptions];
    }
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  onEvent(event) {
    this.event = event;
  }

  restore(shape?: string) {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.disabledCancel = false;
    this.indeterminate = false;
    this.showPercentage = false;
    this.status = PoProgressStatus.Default;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
    this.radius = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.showAction = false;
    this.properties = [];
    this.sizeActions = 'medium';

    if (!shape) {
      this.propertiesOptions = [...this.allPropertiesOptions];
      this.shape = PoProgressShape.bar;
    }
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-progress-labs"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return `${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=true;}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++;},20);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication"]],standalone:false,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),ww("ngModelChange",function(v){return eN(i.publication,v)||(i.publication=v),v}),og(),QA(),zl(3,"po-divider",3)(4,"po-progress",4),og(),Il(5,"div",1)(6,"po-button",5),ft("p-click",function(){return i.updatePublication()}),og()()()),l&2&&(Lp(2),Ew("ngModel",i.publication),e0(),Lp(2),nw("p-value",i.progressBarValue)("p-show-percentage",true),Lp(2),nw("p-disabled",i.buttonDisabled));},dependencies:[$9,mk,Qt,mv,Hz,cNe,Iue],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Progress - Publication"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-progress-publication"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,xe],encapsulation:2})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle"]],standalone:false,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),Qx(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),og(),Il(5,"p",4),Qx(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),og()()(),Il(7,"po-widget",5)(8,"div",6)(9,"div",7),zl(10,"po-progress",8),og(),Il(11,"div",9)(12,"p")(13,"strong"),Qx(14,"Configura\xE7\xE3o:"),og()(),Il(15,"ul")(16,"li"),Qx(17,'p-shape="circle"'),og(),Il(18,"li"),Qx(19,'p-value="65"'),og(),Il(20,"li"),Qx(21,'p-show-percentage="true"'),og(),Il(22,"li"),Qx(23,'p-radius="24" (valor m\xEDnimo permitido)'),og()(),Il(24,"p",10),Qx(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),og()()()(),Il(26,"po-widget",11)(27,"div",6)(28,"div",7),zl(29,"po-progress",12),og(),Il(30,"div",9)(31,"p")(32,"strong"),Qx(33,"Configura\xE7\xE3o:"),og()(),Il(34,"ul")(35,"li"),Qx(36,'p-shape="circle"'),og(),Il(37,"li"),Qx(38,'p-value="65"'),og(),Il(39,"li"),Qx(40,'p-show-percentage="true"'),og(),Il(41,"li"),Qx(42,'p-radius="60" (valor maior)'),og()(),Il(43,"p",10),Qx(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),og()()()(),Il(45,"po-widget",13)(46,"div",6)(47,"div",7),zl(48,"po-progress",14),og(),Il(49,"div",9)(50,"p")(51,"strong"),Qx(52,"Configura\xE7\xE3o:"),og()(),Il(53,"ul")(54,"li"),Qx(55,'p-shape="circle"'),og(),Il(56,"li"),Qx(57,'p-value="50"'),og(),Il(58,"li"),Qx(59,'p-status="error"'),og(),Il(60,"li"),Qx(61,'p-radius="24" (valor m\xEDnimo)'),og()(),Il(62,"p",10),Qx(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),og()()()(),Il(64,"po-widget",15)(65,"div",6)(66,"div",7),zl(67,"po-progress",16),og(),Il(68,"div",9)(69,"p")(70,"strong"),Qx(71,"Configura\xE7\xE3o:"),og()(),Il(72,"ul")(73,"li"),Qx(74,'p-shape="circle"'),og(),Il(75,"li"),Qx(76,'p-indeterminate="true"'),og(),Il(77,"li"),Qx(78,'p-radius="30"'),og()(),Il(79,"p",10),Qx(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),og()()()(),Il(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),Qx(85,"Success"),og(),zl(86,"po-progress",21),og(),Il(87,"div",19)(88,"p",20),Qx(89,"Warning"),og(),zl(90,"po-progress",22),og(),Il(91,"div",19)(92,"p",20),Qx(93,"Error"),og(),zl(94,"po-progress",23),og(),Il(95,"div",19)(96,"p",20),Qx(97,"Default"),og(),zl(98,"po-progress",24),og()()()()),l&2&&(Lp(10),nw("p-value",i.value),Lp(19),nw("p-value",i.value));},dependencies:[Iue,yNe],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Progress Circle"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="container">
  <po-widget p-title="Regra de Adequa\xE7\xE3o de Layout">
    <div class="line-height">
      <p class="po-font-text-large-bold">\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</p>
      <p class="po-text-large">
        O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e
        a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos.
      </p>
    </div>
  </po-widget>

  <po-widget p-title="Exemplo B\xE1sico - Radius M\xEDnimo (24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="24" (valor m\xEDnimo permitido)</li>
        </ul>
        <p class="po-font-text">A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Radius Maior (60px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="60"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="60" (valor maior)</li>
        </ul>
        <p class="po-font-text">
          Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o.
        </p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Status Error (Radius 24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-value="50" p-status="error" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="50"</li>
          <li>p-status="error"</li>
          <li>p-radius="24" (valor m\xEDnimo)</li>
        </ul>
        <p class="po-font-text">\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Modo Indeterminado">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-indeterminate="true" p-radius="30"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-indeterminate="true"</li>
          <li>p-radius="30"</li>
        </ul>
        <p class="po-font-text">Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Compara\xE7\xE3o Visual - Diferentes Status">
    <div class="po-row row">
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Success</p>
        <po-progress
          p-shape="circle"
          p-value="100"
          p-status="success"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Warning</p>
        <po-progress
          p-shape="circle"
          p-value="50"
          p-status="warning"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Error</p>
        <po-progress p-shape="circle" p-value="0" p-status="error" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Default</p>
        <po-progress p-shape="circle" p-value="75" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
    </div>
  </po-widget>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-circle',
  templateUrl: './sample-po-progress-circle.component.html',
  styleUrls: ['./sample-po-progress-circle.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressCircleComponent {
  minRadius = 24;
  value = 65;
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),og(),Il(25,"pre",11),Qx(26,`.container {
  display: grid;
  gap: 24px;
  padding: 16px;
}

.line-height {
  line-height: 1.6;
}

.row {
  text-align: center;
  gap: 16px;
}

.items {
  display: flex;
  align-items: center;
  flex-direction: column;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-progress-circle"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Re,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return o})();var we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-doc"]],standalone:false,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoProgressModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-progress"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoProgressComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),og(),Il(18,"p"),Qx(19,"Este componente pode ser utilizado no "),Il(20,"em"),Qx(21,"upload"),og(),Qx(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),og(),Il(23,"h4"),Qx(24,"Tokens customiz\xE1veis"),og(),Il(25,"p"),Qx(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(27,"blockquote")(28,"p"),Qx(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(30,"a",6),Qx(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(32,"."),og()(),Il(33,"table")(34,"thead")(35,"tr")(36,"th"),Qx(37,"Propriedade"),og(),Il(38,"th"),Qx(39,"Descri\xE7\xE3o"),og(),Il(40,"th"),Qx(41,"Valor Padr\xE3o"),og()()(),Il(42,"tbody")(43,"tr")(44,"td")(45,"strong"),Qx(46,"Default Values"),og()(),zl(47,"td")(48,"td"),og(),Il(49,"tr")(50,"td")(51,"code"),Qx(52,"--font-family"),og()(),Il(53,"td"),Qx(54,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(55,"td")(56,"code"),Qx(57,"var(--font-family-theme)"),og()()(),Il(58,"tr")(59,"td")(60,"code"),Qx(61,"--text-color"),og()(),Il(62,"td"),Qx(63,"Cor do texto"),og(),Il(64,"td")(65,"code"),Qx(66,"var(--color-neutral-dark-90)"),og()()(),Il(67,"tr")(68,"td")(69,"strong"),Qx(70,"Error"),og()(),zl(71,"td")(72,"td"),og(),Il(73,"tr")(74,"td")(75,"code"),Qx(76,"--text-color-error"),og()(),Il(77,"td"),Qx(78,"Cor do texto no estado error"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--color-feedback-negative-dark)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--color-icon-error"),og()(),Il(86,"td"),Qx(87,"Cor do \xEDcone no estado error"),og(),Il(88,"td")(89,"code"),Qx(90,"var(--color-feedback-negative-dark)"),og()()(),Il(91,"tr")(92,"td")(93,"strong"),Qx(94,"po-progress-bar"),og()(),zl(95,"td")(96,"td"),og(),Il(97,"tr")(98,"td")(99,"code"),Qx(100,"--background-color-tray"),og()(),Il(101,"td"),Qx(102,"Cor do background"),og(),Il(103,"td")(104,"code"),Qx(105,"var(--color-brand-01-lightest)"),og()()(),Il(106,"tr")(107,"td")(108,"code"),Qx(109,"--background-color-indicator"),og()(),Il(110,"td"),Qx(111,"Cor do background do indicador"),og(),Il(112,"td")(113,"code"),Qx(114,"var(--color-action-default)"),og()()(),Il(115,"tr")(116,"td")(117,"strong"),Qx(118,"po-progress-circle"),og()(),zl(119,"td")(120,"td"),og(),Il(121,"tr")(122,"td")(123,"code"),Qx(124,"--background-color-tray"),og()(),Il(125,"td"),Qx(126,"Cor do background"),og(),Il(127,"td")(128,"code"),Qx(129,"var(--color-brand-01-lightest)"),og()()(),Il(130,"tr")(131,"td")(132,"code"),Qx(133,"--background-color-indicator"),og()(),Il(134,"td"),Qx(135,"Cor do background do indicador"),og(),Il(136,"td")(137,"code"),Qx(138,"var(--color-action-default)"),og()()()()()(),Il(139,"div",7)(140,"h4",8),Qx(141,"Seletor"),og(),Il(142,"pre",9),Qx(143,`<po-progress
    p-aria-label="string"
    (p-cancel)="EventEmitter"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    p-radius="number"
    (p-retry)="EventEmitter"
    p-shape="string"
    p-show-percentage="boolean"
    p-size="string"
    p-size-actions="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),og()(),Il(144,"h4",10),Qx(145,"Propriedades"),og(),Il(146,"table",11)(147,"tr",12)(148,"th",13),Qx(149,"Nome"),og(),Il(150,"th",13),Qx(151,"Tipo"),og(),Il(152,"th",13),Qx(153,"Padr\xE3o"),og(),Il(154,"th",13),Qx(155,"Descri\xE7\xE3o"),og()(),Il(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),Qx(160," p-aria-label"),zl(161,"br"),og()()(),Il(162,"td",18)(163,"code",19),Qx(164,"string"),og()(),Il(165,"td",20),Qx(166,"-"),og(),Il(167,"td",21)(168,"em")(169,"strong"),Qx(170,"(opcional)"),og()(),Il(171,"p"),Qx(172,"Define um nome acess\xEDvel para o elemento com "),Il(173,"code"),Qx(174,'role="progressbar"'),og(),Qx(175,"."),og(),Il(176,"p"),Qx(177,"Quando n\xE3o informado, o componente utiliza o valor de "),Il(178,"code"),Qx(179,"p-text"),og(),Qx(180," como alternativa, se dispon\xEDvel."),og()()(),Il(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),Qx(185," (p-cancel)"),zl(186,"br"),og()()(),Il(187,"td",18)(188,"code",24),Qx(189,"EventEmitter"),og()(),Il(190,"td",20),Qx(191,"-"),og(),Il(192,"td",21)(193,"em")(194,"strong"),Qx(195,"(opcional)"),og()(),Il(196,"p"),Qx(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),og(),Il(198,"p"),Qx(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),og(),Il(200,"blockquote")(201,"p"),Qx(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),Il(203,"code"),Qx(204,"PoProgressStatus.Success"),og(),Qx(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),og()(),Il(206,"blockquote")(207,"p"),Qx(208,"N\xE3o compat\xEDvel com "),Il(209,"code"),Qx(210,'p-shape="circle"'),og(),Qx(211,"."),og()()()(),Il(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),Qx(216," p-custom-action"),zl(217,"br"),og()()(),Il(218,"td",18)(219,"code",25),Qx(220,"PoProgressAction"),og()(),Il(221,"td",20),Qx(222,"-"),og(),Il(223,"td",21)(224,"em")(225,"strong"),Qx(226,"(opcional)"),og()(),Il(227,"p"),Qx(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),Il(229,"code"),Qx(230,"po-progress"),og(),Qx(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Il(232,"strong"),Qx(233,"PoProgressAction"),og(),Qx(234,", possibilitando configurar:"),og(),Il(235,"ul")(236,"li")(237,"strong")(238,"code"),Qx(239,"label"),og()(),Qx(240,": Texto exibido no bot\xE3o (opcional)."),og(),Il(241,"li")(242,"strong")(243,"code"),Qx(244,"icon"),og()(),Qx(245,": \xCDcone exibido no bot\xE3o (opcional)."),og(),Il(246,"li")(247,"strong")(248,"code"),Qx(249,"type"),og()(),Qx(250,": Tipo do bot\xE3o ("),Il(251,"code"),Qx(252,"default"),og(),Qx(253," ou "),Il(254,"code"),Qx(255,"danger"),og(),Qx(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),og(),Il(257,"li")(258,"strong")(259,"code"),Qx(260,"disabled"),og()(),Qx(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),og(),Il(262,"li")(263,"strong")(264,"code"),Qx(265,"visible"),og()(),Qx(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),og()(),Il(267,"blockquote")(268,"p"),Qx(269,"N\xE3o compat\xEDvel com "),Il(270,"code"),Qx(271,'p-shape="circle"'),og(),Qx(272,"."),og()()()(),Il(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),Qx(277," (p-custom-action-click)"),zl(278,"br"),og()()(),Il(279,"td",18)(280,"code",24),Qx(281,"EventEmitter"),og()(),Il(282,"td",20),Qx(283,"-"),og(),Il(284,"td",21)(285,"em")(286,"strong"),Qx(287,"(opcional)"),og()(),Il(288,"p"),Qx(289,"Evento emitido quando o bot\xE3o definido em "),Il(290,"code"),Qx(291,"p-custom-action"),og(),Qx(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),og(),Il(293,"blockquote")(294,"p"),Qx(295,"N\xE3o compat\xEDvel com "),Il(296,"code"),Qx(297,'p-shape="circle"'),og(),Qx(298,"."),og()()()(),Il(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),Qx(303," p-disabled-cancel"),zl(304,"br"),og()()(),Il(305,"td",18)(306,"code",26),Qx(307,"boolean"),og()(),Il(308,"td",20)(309,"p")(310,"code"),Qx(311,"false"),og()()(),Il(312,"td",21)(313,"em")(314,"strong"),Qx(315,"(opcional)"),og()(),Il(316,"p"),Qx(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),og(),Il(318,"blockquote")(319,"p"),Qx(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),Il(321,"code"),Qx(322,"(p-cancel)"),og(),Qx(323," ou a barra de progresso estiver com o status "),Il(324,"code"),Qx(325,"PoProgressStatus.Success"),og(),Qx(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),og()(),Il(327,"blockquote")(328,"p"),Qx(329,"N\xE3o compat\xEDvel com "),Il(330,"code"),Qx(331,'p-shape="circle"'),og(),Qx(332,"."),og()()()(),Il(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),Qx(337," p-indeterminate"),zl(338,"br"),og()()(),Il(339,"td",18)(340,"code",26),Qx(341,"boolean"),og()(),Il(342,"td",20)(343,"p")(344,"code"),Qx(345,"false"),og()()(),Il(346,"td",21)(347,"em")(348,"strong"),Qx(349,"(opcional)"),og()(),Il(350,"p"),Qx(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),og(),Il(352,"p"),Qx(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),og(),Il(354,"blockquote")(355,"p"),Qx(356,"Caso esta propriedade e a "),Il(357,"code"),Qx(358,"p-value"),og(),Qx(359," seja habilitada, a propriedade "),Il(360,"code"),Qx(361,"p-value"),og(),Qx(362," ser\xE1 ignorada."),og()()()(),Il(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),Qx(367," p-info"),zl(368,"br"),og()()(),Il(369,"td",18)(370,"code",19),Qx(371,"string"),og()(),Il(372,"td",20),Qx(373,"-"),og(),Il(374,"td",21)(375,"em")(376,"strong"),Qx(377,"(opcional)"),og()(),Il(378,"p"),Qx(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),og(),Il(380,"blockquote")(381,"p"),Qx(382,"N\xE3o compat\xEDvel com "),Il(383,"code"),Qx(384,'p-shape="circle"'),og(),Qx(385,"."),og()()()(),Il(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),Qx(390," p-info-icon"),zl(391,"br"),og()()(),Il(392,"td",18)(393,"code",19),Qx(394,"string "),og(),Il(395,"code",27),Qx(396," TemplateRef<void>"),og()(),Il(397,"td",20),Qx(398,"-"),og(),Il(399,"td",21)(400,"em")(401,"strong"),Qx(402,"(opcional)"),og()(),Il(403,"p"),Qx(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),Il(405,"code"),Qx(406,"p-info"),og(),Qx(407,"."),og(),Il(408,"p"),Qx(409,"Exemplo: "),Il(410,"code"),Qx(411,"an an-check"),og(),Qx(412,"."),og(),Il(413,"blockquote")(414,"p"),Qx(415,"N\xE3o compat\xEDvel com "),Il(416,"code"),Qx(417,'p-shape="circle"'),og(),Qx(418,"."),og()()()(),Il(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Qx(423," p-radius"),zl(424,"br"),og()()(),Il(425,"td",18)(426,"code",28),Qx(427,"number"),og()(),Il(428,"td",20)(429,"p")(430,"code"),Qx(431,"45"),og(),Qx(432," (autom\xE1tico)"),og()(),Il(433,"td",21)(434,"em")(435,"strong"),Qx(436,"(opcional)"),og()(),Il(437,"p"),Qx(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Il(439,"code"),Qx(440,'p-shape="circle"'),og(),Qx(441,"."),og(),Il(442,"blockquote")(443,"p"),Qx(444,"O valor m\xEDnimo aceito \xE9 "),Il(445,"strong"),Qx(446,"24"),og(),Qx(447,"."),og()(),Il(448,"blockquote")(449,"p"),Qx(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Il(451,"strong"),Qx(452,"45"),og(),Qx(453," ser\xE1 utilizado."),og()(),Il(454,"blockquote")(455,"p"),Qx(456,"N\xE3o compat\xEDvel com "),Il(457,"code"),Qx(458,'p-shape="bar"'),og(),Qx(459,"."),og()()()(),Il(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),Qx(464," (p-retry)"),zl(465,"br"),og()()(),Il(466,"td",18)(467,"code",24),Qx(468,"EventEmitter"),og()(),Il(469,"td",20),Qx(470,"-"),og(),Il(471,"td",21)(472,"em")(473,"strong"),Qx(474,"(opcional)"),og()(),Il(475,"p"),Qx(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),og(),Il(477,"blockquote")(478,"p"),Qx(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Il(480,"code"),Qx(481,"PoProgressStatus.Error"),og(),Qx(482,"."),og()(),Il(483,"blockquote")(484,"p"),Qx(485,"N\xE3o compat\xEDvel com "),Il(486,"code"),Qx(487,'p-shape="circle"'),og(),Qx(488,"."),og()()()(),Il(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),Qx(493," p-shape"),zl(494,"br"),og()()(),Il(495,"td",18)(496,"code",19),Qx(497,"string"),og()(),Il(498,"td",20)(499,"p")(500,"code"),Qx(501,"bar"),og()()(),Il(502,"td",21)(503,"em")(504,"strong"),Qx(505,"(opcional)"),og()(),Il(506,"p"),Qx(507,"Define o formato visual do componente de progresso."),og(),Il(508,"p"),Qx(509,"Valores v\xE1lidos:"),og(),Il(510,"ul")(511,"li")(512,"code"),Qx(513,"bar"),og(),Qx(514,": exibe o progresso em formato de barra."),og(),Il(515,"li")(516,"code"),Qx(517,"circle"),og(),Qx(518,": exibe o progresso em formato circular."),og()()()(),Il(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),Qx(523," p-show-percentage"),zl(524,"br"),og()()(),Il(525,"td",18)(526,"code",26),Qx(527,"boolean"),og()(),Il(528,"td",20)(529,"p")(530,"code"),Qx(531,"false"),og()()(),Il(532,"td",21)(533,"em")(534,"strong"),Qx(535,"(opcional)"),og()(),Il(536,"p"),Qx(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),og(),Il(538,"blockquote")(539,"p"),Qx(540,"Se utilizada no "),Il(541,"code"),Qx(542,'p-shape="circle"'),og(),Qx(543," e o status estiver como "),Il(544,"code"),Qx(545,"error"),og(),Qx(546,", a porcentagem n\xE3o ser\xE1 exibida."),og()()()(),Il(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Qx(551," p-size"),zl(552,"br"),og()()(),Il(553,"td",18)(554,"code",19),Qx(555,"string"),og()(),Il(556,"td",20)(557,"p")(558,"code"),Qx(559,"large"),og()()(),Il(560,"td",21)(561,"em")(562,"strong"),Qx(563,"(opcional)"),og()(),Il(564,"p"),Qx(565,"Define a expessura da barra de progresso."),og(),Il(566,"p"),Qx(567,"Valores v\xE1lidos:"),og(),Il(568,"ul")(569,"li"),Qx(570,"medium"),og(),Il(571,"li"),Qx(572,"large"),og()()()(),Il(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),Qx(577," p-size-actions"),zl(578,"br"),og()()(),Il(579,"td",18)(580,"code",19),Qx(581,"string"),og()(),Il(582,"td",20)(583,"p")(584,"code"),Qx(585,"medium"),og()()(),Il(586,"td",21)(587,"em")(588,"strong"),Qx(589,"(opcional)"),og()(),Il(590,"p"),Qx(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),Il(592,"code"),Qx(593,"p-size"),og(),Qx(594,":"),og(),Il(595,"ul")(596,"li")(597,"code"),Qx(598,"small"),og(),Qx(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(600,"li")(601,"code"),Qx(602,"medium"),og(),Qx(603,": aplica a medida medium de cada componente."),og()(),Il(604,"blockquote")(605,"p"),Qx(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(607,"code"),Qx(608,"medium"),og(),Qx(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(610,"a",29),Qx(611,"po-theme"),og(),Qx(612,"."),og()(),Il(613,"blockquote")(614,"p"),Qx(615,"N\xE3o compat\xEDvel com "),Il(616,"code"),Qx(617,'p-shape="circle"'),og(),Qx(618,"."),og()()()(),Il(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),Qx(623," p-status"),zl(624,"br"),og()()(),Il(625,"td",18)(626,"code",30),Qx(627,"PoProgressStatus"),og()(),Il(628,"td",20)(629,"p")(630,"code"),Qx(631,"PoProgressStatus.Default"),og()()(),Il(632,"td",21)(633,"em")(634,"strong"),Qx(635,"(opcional)"),og()(),Il(636,"p"),Qx(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),og()()(),Il(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),Qx(642," p-text"),zl(643,"br"),og()()(),Il(644,"td",18)(645,"code",19),Qx(646,"string"),og()(),Il(647,"td",20),Qx(648,"-"),og(),Il(649,"td",21)(650,"em")(651,"strong"),Qx(652,"(opcional)"),og()(),Il(653,"p"),Qx(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),og(),Il(655,"blockquote")(656,"p"),Qx(657,"N\xE3o compat\xEDvel com "),Il(658,"code"),Qx(659,'p-shape="circle"'),og(),Qx(660,"."),og()()()(),Il(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),Qx(665," p-value"),zl(666,"br"),og()()(),Il(667,"td",18)(668,"code",28),Qx(669,"number"),og()(),Il(670,"td",20)(671,"p")(672,"code"),Qx(673,"0"),og()()(),Il(674,"td",21)(675,"em")(676,"strong"),Qx(677,"(opcional)"),og()(),Il(678,"p"),Qx(679,"Valor que representar\xE1 o progresso."),og(),Il(680,"blockquote")(681,"p"),Qx(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),Il(683,"code"),Qx(684,"0"),og(),Qx(685," \xE0 "),Il(686,"code"),Qx(687,"100"),og(),Qx(688,"."),og()()()()(),Il(689,"h3"),Qx(690,"Interfaces"),og(),Il(691,"h4",31)(692,"code",5),Qx(693,"PoProgressAction"),og()(),Il(694,"div",2)(695,"p"),Qx(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),og()(),Il(697,"h4",10),Qx(698,"Propriedades"),og(),Il(699,"table",11)(700,"tr",12)(701,"th",13),Qx(702,"Nome"),og(),Il(703,"th",13),Qx(704,"Tipo"),og(),Il(705,"th",13),Qx(706,"Descri\xE7\xE3o"),og()(),Il(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),Qx(711," disabled"),zl(712,"br"),og()()(),Il(713,"td",18)(714,"code",26),Qx(715,"boolean "),og(),Il(716,"code",32),Qx(717," Function"),og()(),Il(718,"td",21)(719,"em")(720,"strong"),Qx(721,"(opcional)"),og()(),Il(722,"p"),Qx(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),og(),Il(724,"p"),Qx(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),og()()(),Il(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),Qx(730," icon"),zl(731,"br"),og()()(),Il(732,"td",18)(733,"code",19),Qx(734,"string "),og(),Il(735,"code",27),Qx(736," TemplateRef<void>"),og()(),Il(737,"td",21)(738,"em")(739,"strong"),Qx(740,"(opcional)"),og()(),Il(741,"p"),Qx(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),og(),Il(743,"p"),Qx(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(745,"a",33),Qx(746,"Biblioteca de \xEDcones"),og(),Qx(747,". conforme exemplo abaixo:"),og(),Il(748,"pre")(749,"code"),Qx(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),og()(),Il(751,"p"),Qx(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Il(753,"pre")(754,"code"),Qx(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),og()(),Il(756,"p"),Qx(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(758,"code"),Qx(759,"TemplateRef"),og(),Qx(760,`, conforme exemplo abaixo:
component.html:`),og(),Il(761,"pre")(762,"code"),Qx(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),og()(),Il(764,"p"),Qx(765,"component.ts:"),og(),Il(766,"pre")(767,"code"),Qx(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),og()()()(),Il(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),Qx(773," label"),zl(774,"br"),og()()(),Il(775,"td",18)(776,"code",19),Qx(777,"string"),og()(),Il(778,"td",21)(779,"em")(780,"strong"),Qx(781,"(opcional)"),og()(),Il(782,"p"),Qx(783,"R\xF3tulo da a\xE7\xE3o."),og()()(),Il(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),Qx(788," type"),zl(789,"br"),og()()(),Il(790,"td",18)(791,"code",19),Qx(792,"string"),og()(),Il(793,"td",21)(794,"em")(795,"strong"),Qx(796,"(opcional)"),og()(),Il(797,"p"),Qx(798,"Define a cor do item, sendo "),Il(799,"code"),Qx(800,"default"),og(),Qx(801," o padr\xE3o."),og(),Il(802,"p"),Qx(803,"Valores v\xE1lidos:"),og(),Il(804,"ul")(805,"li")(806,"code"),Qx(807,"default"),og()(),Il(808,"li")(809,"code"),Qx(810,"danger"),og(),Qx(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),og()()()(),Il(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),Qx(816," visible"),zl(817,"br"),og()()(),Il(818,"td",18)(819,"code",26),Qx(820,"boolean "),og(),Il(821,"code",32),Qx(822," Function"),og()(),Il(823,"td",21)(824,"em")(825,"strong"),Qx(826,"(opcional)"),og()(),Il(827,"p"),Qx(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),og(),Il(829,"blockquote")(830,"p"),Qx(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),og()(),Il(832,"p"),Qx(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),og(),Il(834,"ul")(835,"li")(836,"p"),Qx(837,"Fun\xE7\xE3o que deve retornar um booleano."),og()(),Il(838,"li")(839,"p"),Qx(840,"Informar diretamente um valor booleano."),og()()()()()(),Il(841,"h3"),Qx(842,"Enums"),og(),Il(843,"h4",4)(844,"code",5),Qx(845,"PoProgressShape"),og()(),Il(846,"div",2)(847,"p"),Qx(848,"Enum "),Il(849,"code"),Qx(850,"PoProgressShape"),og(),Qx(851," para definir o formato visual do componente de progresso."),og()(),Il(852,"h4",10),Qx(853,"Propriedades"),og(),Il(854,"table",11)(855,"tr",12)(856,"th",13),Qx(857,"Nome"),og(),Il(858,"th",13),Qx(859,"Descri\xE7\xE3o"),og()(),Il(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),Qx(864," bar"),zl(865,"br"),og()()(),Il(866,"td",21)(867,"p"),Qx(868,"Formato barra de progresso (padr\xE3o)."),og()()(),Il(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),Qx(873," circle"),zl(874,"br"),og()()(),Il(875,"td",21)(876,"p"),Qx(877,"Formato circular de progresso."),og()()()(),Il(878,"h4",4)(879,"code",5),Qx(880,"PoProgressSize"),og()(),Il(881,"div",2)(882,"p"),Qx(883,"Enum para configurar a expessura ("),Il(884,"code"),Qx(885,"p-size"),og(),Qx(886,") da barra de progresso do componente."),og()(),Il(887,"h4",10),Qx(888,"Propriedades"),og(),Il(889,"table",11)(890,"tr",12)(891,"th",13),Qx(892,"Nome"),og(),Il(893,"th",13),Qx(894,"Descri\xE7\xE3o"),og()(),Il(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),Qx(899," medium"),zl(900,"br"),og()()(),Il(901,"td",21)(902,"p"),Qx(903,"Tamanho m\xE9dio com 4px."),og()()(),Il(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),Qx(908," large"),zl(909,"br"),og()()(),Il(910,"td",21)(911,"p"),Qx(912,"Tamanho grande com 8px."),og()()()(),Il(913,"h4",4)(914,"code",5),Qx(915,"PoProgressStatus"),og()(),Il(916,"div",2)(917,"p"),Qx(918,"Enum "),Il(919,"code"),Qx(920,"PoProgressStatus"),og(),Qx(921," para os status de barra de progresso."),og()(),Il(922,"h4",10),Qx(923,"Propriedades"),og(),Il(924,"table",11)(925,"tr",12)(926,"th",13),Qx(927,"Nome"),og(),Il(928,"th",13),Qx(929,"Descri\xE7\xE3o"),og()(),Il(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),Qx(934," Default"),zl(935,"br"),og()()(),Il(936,"td",21)(937,"p"),Qx(938,"Define o status "),Il(939,"code"),Qx(940,"default"),og(),Qx(941," para a barra de progresso."),og()()(),Il(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),Qx(946," Error"),zl(947,"br"),og()()(),Il(948,"td",21)(949,"p"),Qx(950,"Define o status de "),Il(951,"code"),Qx(952,"error"),og(),Qx(953," para a barra de progresso."),og()()(),Il(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),Qx(958," Success"),zl(959,"br"),og()()(),Il(960,"td",21)(961,"p"),Qx(962,"Define o status de "),Il(963,"code"),Qx(964,"success"),og(),Qx(965," para a barra de progresso."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var ye=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-progress-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Se,ve,fe,Pe,we],encapsulation:2})}return o})();var Ge=[{path:"",component:ye}],_e=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[uL.forChild(Ge),uL]})}return o})();var wt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,_e]})}return o})();export{wt as DocPoProgressModule};