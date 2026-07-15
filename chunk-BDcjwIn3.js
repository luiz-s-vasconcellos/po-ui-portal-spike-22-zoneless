import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,bt as Fk,dr as Ca,ds as X0,dt as hh,du as Aue,ba as vNe,C as Sl,F as Wl,J as og,y as rN,L as Lp,O as rw,an as SO,aH as Ka,b8 as Ume,b9 as $me,a1 as ft,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,cQ as xk,cR as Rk,b0 as Qt,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,aJ as Whe,bH as k3,c9 as jhe,aB as Ix,aq as px,aM as Cw,aN as n0,at as gx,aO as ww,aP as i0,b1 as mv,d4 as Nz,a3 as sNe,aA as xx,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic"]],standalone:false,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(Sl(0,"div")(1,"po-widget",0),Wl(2,"po-progress",1),og()(),Sl(3,"div",2)(4,"po-widget",3),Wl(5,"po-progress",4),Sl(6,"div",2),rN(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),og()()()),l&2&&(Lp(2),rw("p-value",25),Lp(3),rw("p-value",25)("p-radius",24));},dependencies:[Aue,vNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Progress Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<div>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-progress-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Me,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,Q){if(o&1&&(Sl(0,"po-widget",3),Wl(1,"po-info",15),og()),o&2){let r=xx();Lp(),rw("p-value",r.event);}}function Ae(o,Q){if(o&1&&(Sl(0,"div")(1,"po-widget",21)(2,"form",22),Wl(3,"po-input",23),n0(),Wl(4,"po-select",24),n0(),Wl(5,"po-select",25),n0(),Wl(6,"po-switch",26),n0(),Wl(7,"po-switch",27),n0(),og()()()),o&2){let r=xx(2);Lp(2),rw("formGroup",r.actionForm),Lp(),i0(),Lp(),rw("p-options",r.iconOptions),i0(),Lp(),rw("p-options",r.typeOptions),i0(),Lp(),i0(),Lp(),i0();}}function ze(o,Q){if(o&1){let r=Ix();Sl(0,"po-select",16),Cw("ngModelChange",function(i){Ky(r);let m=xx();return oN(m.infoIcon,i)||(m.infoIcon=i),Xy(i)}),og(),n0(),Sl(1,"po-input",17),Cw("ngModelChange",function(i){Ky(r);let m=xx();return oN(m.text,i)||(m.text=i),Xy(i)}),og(),n0(),Sl(2,"po-input",18),Cw("ngModelChange",function(i){Ky(r);let m=xx();return oN(m.info,i)||(m.info=i),Xy(i)}),og(),n0(),Sl(3,"po-radio-group",19),Cw("ngModelChange",function(i){Ky(r);let m=xx();return oN(m.sizeActions,i)||(m.sizeActions=i),Xy(i)}),og(),n0(),Sl(4,"po-switch",20),Cw("ngModelChange",function(i){Ky(r);let m=xx();return oN(m.showAction,i)||(m.showAction=i),Xy(i)}),og(),n0(),px(5,Ae,8,3,"div");}if(o&2){let r=xx();ww("ngModel",r.infoIcon),rw("p-options",r.infoIconsOptions),i0(),Lp(),ww("ngModel",r.text),i0(),Lp(),ww("ngModel",r.info),i0(),Lp(),ww("ngModel",r.sizeActions),rw("p-options",r.sizeActionsOptions),i0(),Lp(),ww("ngModel",r.showAction),i0(),Lp(),gx(r.showAction?5:-1);}}function Be(o,Q){if(o&1){let r=Ix();Sl(0,"po-number",28),Cw("ngModelChange",function(i){Ky(r);let m=xx();return oN(m.radius,i)||(m.radius=i),Xy(i)}),og(),n0();}if(o&2){let r=xx();ww("ngModel",r.radius),i0();}}var he=(()=>{class o{fb=f(Fk);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=Ca.Default;size=X0.large;shape=hh.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:Ca.Default},{label:"Success",value:Ca.Success},{label:"Error",value:Ca.Error}];sizeOptions=[{label:"Medium",value:X0.medium},{label:"Large",value:X0.large}];shapeOptions=[{label:"Bar",value:hh.bar},{label:"Circle",value:hh.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm();}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions];}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r);});}updateAction(r){this.action=r;}onEvent(r){this.event=r;}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=false,this.indeterminate=false,this.showPercentage=false,this.status=Ca.Default,this.text=void 0,this.value=void 0,this.size=X0.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.showAction=false,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=hh.bar);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs"]],standalone:false,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=Ix();Sl(0,"div",1)(1,"po-progress",2),ft("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),og(),px(2,Oe,2,1,"po-widget",3),Sl(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),Cw("ngModelChange",function(d){return Ky(m),oN(i.shape,d)||(i.shape=d),Xy(d)}),ft("p-change",function(d){return i.onShapeChange(d)}),og(),n0(),og(),Sl(8,"div",7)(9,"po-number",8),Cw("ngModelChange",function(d){return Ky(m),oN(i.value,d)||(i.value=d),Xy(d)}),og(),n0(),Sl(10,"po-select",9),Cw("ngModelChange",function(d){return Ky(m),oN(i.size,d)||(i.size=d),Xy(d)}),og(),n0(),Sl(11,"po-select",10),Cw("ngModelChange",function(d){return Ky(m),oN(i.status,d)||(i.status=d),Xy(d)}),og(),n0(),px(12,ze,6,8),px(13,Be,1,1,"po-number",11),Sl(14,"po-checkbox-group",12),Cw("ngModelChange",function(d){return Ky(m),oN(i.properties,d)||(i.properties=d),Xy(d)}),og(),n0(),og()()(),Sl(15,"div",13)(16,"po-button",14),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),rw("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),Lp(),gx(i.shape==="bar"?2:-1),Lp(5),ww("ngModel",i.shape),rw("p-options",i.shapeOptions),i0(),Lp(2),ww("ngModel",i.value),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0(),Lp(),ww("ngModel",i.status),rw("p-options",i.statusOptions),i0(),Lp(),gx(i.shape==="bar"?12:-1),Lp(),gx(i.shape==="circle"?13:-1),Lp(),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,xk,Rk,Qt,b3,L3,Bhe,Tde,Whe,k3,jhe,Aue,vNe],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"],changeDetection:1})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Progress Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="sample-progress-grid">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),rN(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),og(),Sl(25,"pre",11),rN(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-progress-labs"),og(),Wl(29,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return o})();var xe=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return `${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=true;}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++;},20);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication"]],standalone:false,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),Cw("ngModelChange",function(v){return oN(i.publication,v)||(i.publication=v),v}),og(),n0(),Wl(3,"po-divider",3)(4,"po-progress",4),og(),Sl(5,"div",1)(6,"po-button",5),ft("p-click",function(){return i.updatePublication()}),og()()()),l&2&&(Lp(2),ww("ngModel",i.publication),i0(),Lp(2),rw("p-value",i.progressBarValue)("p-show-percentage",true),Lp(2),rw("p-disabled",i.buttonDisabled));},dependencies:[Z9,wk,Qt,mv,Nz,sNe,Aue],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Progress - Publication"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Edit publication">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-progress-publication"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,xe],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle"]],standalone:false,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),rN(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),og(),Sl(5,"p",4),rN(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),og()()(),Sl(7,"po-widget",5)(8,"div",6)(9,"div",7),Wl(10,"po-progress",8),og(),Sl(11,"div",9)(12,"p")(13,"strong"),rN(14,"Configura\xE7\xE3o:"),og()(),Sl(15,"ul")(16,"li"),rN(17,'p-shape="circle"'),og(),Sl(18,"li"),rN(19,'p-value="65"'),og(),Sl(20,"li"),rN(21,'p-show-percentage="true"'),og(),Sl(22,"li"),rN(23,'p-radius="24" (valor m\xEDnimo permitido)'),og()(),Sl(24,"p",10),rN(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),og()()()(),Sl(26,"po-widget",11)(27,"div",6)(28,"div",7),Wl(29,"po-progress",12),og(),Sl(30,"div",9)(31,"p")(32,"strong"),rN(33,"Configura\xE7\xE3o:"),og()(),Sl(34,"ul")(35,"li"),rN(36,'p-shape="circle"'),og(),Sl(37,"li"),rN(38,'p-value="65"'),og(),Sl(39,"li"),rN(40,'p-show-percentage="true"'),og(),Sl(41,"li"),rN(42,'p-radius="60" (valor maior)'),og()(),Sl(43,"p",10),rN(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),og()()()(),Sl(45,"po-widget",13)(46,"div",6)(47,"div",7),Wl(48,"po-progress",14),og(),Sl(49,"div",9)(50,"p")(51,"strong"),rN(52,"Configura\xE7\xE3o:"),og()(),Sl(53,"ul")(54,"li"),rN(55,'p-shape="circle"'),og(),Sl(56,"li"),rN(57,'p-value="50"'),og(),Sl(58,"li"),rN(59,'p-status="error"'),og(),Sl(60,"li"),rN(61,'p-radius="24" (valor m\xEDnimo)'),og()(),Sl(62,"p",10),rN(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),og()()()(),Sl(64,"po-widget",15)(65,"div",6)(66,"div",7),Wl(67,"po-progress",16),og(),Sl(68,"div",9)(69,"p")(70,"strong"),rN(71,"Configura\xE7\xE3o:"),og()(),Sl(72,"ul")(73,"li"),rN(74,'p-shape="circle"'),og(),Sl(75,"li"),rN(76,'p-indeterminate="true"'),og(),Sl(77,"li"),rN(78,'p-radius="30"'),og()(),Sl(79,"p",10),rN(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),og()()()(),Sl(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),rN(85,"Success"),og(),Wl(86,"po-progress",21),og(),Sl(87,"div",19)(88,"p",20),rN(89,"Warning"),og(),Wl(90,"po-progress",22),og(),Sl(91,"div",19)(92,"p",20),rN(93,"Error"),og(),Wl(94,"po-progress",23),og(),Sl(95,"div",19)(96,"p",20),rN(97,"Default"),og(),Wl(98,"po-progress",24),og()()()()),l&2&&(Lp(10),rw("p-value",i.value),Lp(19),rw("p-value",i.value));},dependencies:[Aue,vNe],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Progress Circle"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="container">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),rN(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),og(),Sl(25,"pre",11),rN(26,`.container {
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
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-progress-circle"),og(),Wl(29,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Re,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-progress-doc"]],standalone:false,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoProgressModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-progress"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoProgressComponent"),og()(),Sl(15,"div",2)(16,"p"),rN(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),og(),Sl(18,"p"),rN(19,"Este componente pode ser utilizado no "),Sl(20,"em"),rN(21,"upload"),og(),rN(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),og(),Sl(23,"h4"),rN(24,"Tokens customiz\xE1veis"),og(),Sl(25,"p"),rN(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(27,"blockquote")(28,"p"),rN(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(30,"a",6),rN(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(32,"."),og()(),Sl(33,"table")(34,"thead")(35,"tr")(36,"th"),rN(37,"Propriedade"),og(),Sl(38,"th"),rN(39,"Descri\xE7\xE3o"),og(),Sl(40,"th"),rN(41,"Valor Padr\xE3o"),og()()(),Sl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),rN(46,"Default Values"),og()(),Wl(47,"td")(48,"td"),og(),Sl(49,"tr")(50,"td")(51,"code"),rN(52,"--font-family"),og()(),Sl(53,"td"),rN(54,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(55,"td")(56,"code"),rN(57,"var(--font-family-theme)"),og()()(),Sl(58,"tr")(59,"td")(60,"code"),rN(61,"--text-color"),og()(),Sl(62,"td"),rN(63,"Cor do texto"),og(),Sl(64,"td")(65,"code"),rN(66,"var(--color-neutral-dark-90)"),og()()(),Sl(67,"tr")(68,"td")(69,"strong"),rN(70,"Error"),og()(),Wl(71,"td")(72,"td"),og(),Sl(73,"tr")(74,"td")(75,"code"),rN(76,"--text-color-error"),og()(),Sl(77,"td"),rN(78,"Cor do texto no estado error"),og(),Sl(79,"td")(80,"code"),rN(81,"var(--color-feedback-negative-dark)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),rN(85,"--color-icon-error"),og()(),Sl(86,"td"),rN(87,"Cor do \xEDcone no estado error"),og(),Sl(88,"td")(89,"code"),rN(90,"var(--color-feedback-negative-dark)"),og()()(),Sl(91,"tr")(92,"td")(93,"strong"),rN(94,"po-progress-bar"),og()(),Wl(95,"td")(96,"td"),og(),Sl(97,"tr")(98,"td")(99,"code"),rN(100,"--background-color-tray"),og()(),Sl(101,"td"),rN(102,"Cor do background"),og(),Sl(103,"td")(104,"code"),rN(105,"var(--color-brand-01-lightest)"),og()()(),Sl(106,"tr")(107,"td")(108,"code"),rN(109,"--background-color-indicator"),og()(),Sl(110,"td"),rN(111,"Cor do background do indicador"),og(),Sl(112,"td")(113,"code"),rN(114,"var(--color-action-default)"),og()()(),Sl(115,"tr")(116,"td")(117,"strong"),rN(118,"po-progress-circle"),og()(),Wl(119,"td")(120,"td"),og(),Sl(121,"tr")(122,"td")(123,"code"),rN(124,"--background-color-tray"),og()(),Sl(125,"td"),rN(126,"Cor do background"),og(),Sl(127,"td")(128,"code"),rN(129,"var(--color-brand-01-lightest)"),og()()(),Sl(130,"tr")(131,"td")(132,"code"),rN(133,"--background-color-indicator"),og()(),Sl(134,"td"),rN(135,"Cor do background do indicador"),og(),Sl(136,"td")(137,"code"),rN(138,"var(--color-action-default)"),og()()()()()(),Sl(139,"div",7)(140,"h4",8),rN(141,"Seletor"),og(),Sl(142,"pre",9),rN(143,`<po-progress
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
`),og()(),Sl(144,"h4",10),rN(145,"Propriedades"),og(),Sl(146,"table",11)(147,"tr",12)(148,"th",13),rN(149,"Nome"),og(),Sl(150,"th",13),rN(151,"Tipo"),og(),Sl(152,"th",13),rN(153,"Padr\xE3o"),og(),Sl(154,"th",13),rN(155,"Descri\xE7\xE3o"),og()(),Sl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),rN(160," p-aria-label"),Wl(161,"br"),og()()(),Sl(162,"td",18)(163,"code",19),rN(164,"string"),og()(),Sl(165,"td",20),rN(166,"-"),og(),Sl(167,"td",21)(168,"em")(169,"strong"),rN(170,"(opcional)"),og()(),Sl(171,"p"),rN(172,"Define um nome acess\xEDvel para o elemento com "),Sl(173,"code"),rN(174,'role="progressbar"'),og(),rN(175,"."),og(),Sl(176,"p"),rN(177,"Quando n\xE3o informado, o componente utiliza o valor de "),Sl(178,"code"),rN(179,"p-text"),og(),rN(180," como alternativa, se dispon\xEDvel."),og()()(),Sl(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),rN(185," (p-cancel)"),Wl(186,"br"),og()()(),Sl(187,"td",18)(188,"code",24),rN(189,"EventEmitter"),og()(),Sl(190,"td",20),rN(191,"-"),og(),Sl(192,"td",21)(193,"em")(194,"strong"),rN(195,"(opcional)"),og()(),Sl(196,"p"),rN(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),og(),Sl(198,"p"),rN(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),og(),Sl(200,"blockquote")(201,"p"),rN(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),Sl(203,"code"),rN(204,"PoProgressStatus.Success"),og(),rN(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),og()(),Sl(206,"blockquote")(207,"p"),rN(208,"N\xE3o compat\xEDvel com "),Sl(209,"code"),rN(210,'p-shape="circle"'),og(),rN(211,"."),og()()()(),Sl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),rN(216," p-custom-action"),Wl(217,"br"),og()()(),Sl(218,"td",18)(219,"code",25),rN(220,"PoProgressAction"),og()(),Sl(221,"td",20),rN(222,"-"),og(),Sl(223,"td",21)(224,"em")(225,"strong"),rN(226,"(opcional)"),og()(),Sl(227,"p"),rN(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),Sl(229,"code"),rN(230,"po-progress"),og(),rN(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),Sl(232,"strong"),rN(233,"PoProgressAction"),og(),rN(234,", possibilitando configurar:"),og(),Sl(235,"ul")(236,"li")(237,"strong")(238,"code"),rN(239,"label"),og()(),rN(240,": Texto exibido no bot\xE3o (opcional)."),og(),Sl(241,"li")(242,"strong")(243,"code"),rN(244,"icon"),og()(),rN(245,": \xCDcone exibido no bot\xE3o (opcional)."),og(),Sl(246,"li")(247,"strong")(248,"code"),rN(249,"type"),og()(),rN(250,": Tipo do bot\xE3o ("),Sl(251,"code"),rN(252,"default"),og(),rN(253," ou "),Sl(254,"code"),rN(255,"danger"),og(),rN(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),og(),Sl(257,"li")(258,"strong")(259,"code"),rN(260,"disabled"),og()(),rN(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),og(),Sl(262,"li")(263,"strong")(264,"code"),rN(265,"visible"),og()(),rN(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),og()(),Sl(267,"blockquote")(268,"p"),rN(269,"N\xE3o compat\xEDvel com "),Sl(270,"code"),rN(271,'p-shape="circle"'),og(),rN(272,"."),og()()()(),Sl(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),rN(277," (p-custom-action-click)"),Wl(278,"br"),og()()(),Sl(279,"td",18)(280,"code",24),rN(281,"EventEmitter"),og()(),Sl(282,"td",20),rN(283,"-"),og(),Sl(284,"td",21)(285,"em")(286,"strong"),rN(287,"(opcional)"),og()(),Sl(288,"p"),rN(289,"Evento emitido quando o bot\xE3o definido em "),Sl(290,"code"),rN(291,"p-custom-action"),og(),rN(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),og(),Sl(293,"blockquote")(294,"p"),rN(295,"N\xE3o compat\xEDvel com "),Sl(296,"code"),rN(297,'p-shape="circle"'),og(),rN(298,"."),og()()()(),Sl(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),rN(303," p-disabled-cancel"),Wl(304,"br"),og()()(),Sl(305,"td",18)(306,"code",26),rN(307,"boolean"),og()(),Sl(308,"td",20)(309,"p")(310,"code"),rN(311,"false"),og()()(),Sl(312,"td",21)(313,"em")(314,"strong"),rN(315,"(opcional)"),og()(),Sl(316,"p"),rN(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),og(),Sl(318,"blockquote")(319,"p"),rN(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),Sl(321,"code"),rN(322,"(p-cancel)"),og(),rN(323," ou a barra de progresso estiver com o status "),Sl(324,"code"),rN(325,"PoProgressStatus.Success"),og(),rN(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),og()(),Sl(327,"blockquote")(328,"p"),rN(329,"N\xE3o compat\xEDvel com "),Sl(330,"code"),rN(331,'p-shape="circle"'),og(),rN(332,"."),og()()()(),Sl(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),rN(337," p-indeterminate"),Wl(338,"br"),og()()(),Sl(339,"td",18)(340,"code",26),rN(341,"boolean"),og()(),Sl(342,"td",20)(343,"p")(344,"code"),rN(345,"false"),og()()(),Sl(346,"td",21)(347,"em")(348,"strong"),rN(349,"(opcional)"),og()(),Sl(350,"p"),rN(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),og(),Sl(352,"p"),rN(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),og(),Sl(354,"blockquote")(355,"p"),rN(356,"Caso esta propriedade e a "),Sl(357,"code"),rN(358,"p-value"),og(),rN(359," seja habilitada, a propriedade "),Sl(360,"code"),rN(361,"p-value"),og(),rN(362," ser\xE1 ignorada."),og()()()(),Sl(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),rN(367," p-info"),Wl(368,"br"),og()()(),Sl(369,"td",18)(370,"code",19),rN(371,"string"),og()(),Sl(372,"td",20),rN(373,"-"),og(),Sl(374,"td",21)(375,"em")(376,"strong"),rN(377,"(opcional)"),og()(),Sl(378,"p"),rN(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),og(),Sl(380,"blockquote")(381,"p"),rN(382,"N\xE3o compat\xEDvel com "),Sl(383,"code"),rN(384,'p-shape="circle"'),og(),rN(385,"."),og()()()(),Sl(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),rN(390," p-info-icon"),Wl(391,"br"),og()()(),Sl(392,"td",18)(393,"code",19),rN(394,"string "),og(),Sl(395,"code",27),rN(396," TemplateRef<void>"),og()(),Sl(397,"td",20),rN(398,"-"),og(),Sl(399,"td",21)(400,"em")(401,"strong"),rN(402,"(opcional)"),og()(),Sl(403,"p"),rN(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),Sl(405,"code"),rN(406,"p-info"),og(),rN(407,"."),og(),Sl(408,"p"),rN(409,"Exemplo: "),Sl(410,"code"),rN(411,"an an-check"),og(),rN(412,"."),og(),Sl(413,"blockquote")(414,"p"),rN(415,"N\xE3o compat\xEDvel com "),Sl(416,"code"),rN(417,'p-shape="circle"'),og(),rN(418,"."),og()()()(),Sl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),rN(423," p-radius"),Wl(424,"br"),og()()(),Sl(425,"td",18)(426,"code",28),rN(427,"number"),og()(),Sl(428,"td",20)(429,"p")(430,"code"),rN(431,"45"),og(),rN(432," (autom\xE1tico)"),og()(),Sl(433,"td",21)(434,"em")(435,"strong"),rN(436,"(opcional)"),og()(),Sl(437,"p"),rN(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),Sl(439,"code"),rN(440,'p-shape="circle"'),og(),rN(441,"."),og(),Sl(442,"blockquote")(443,"p"),rN(444,"O valor m\xEDnimo aceito \xE9 "),Sl(445,"strong"),rN(446,"24"),og(),rN(447,"."),og()(),Sl(448,"blockquote")(449,"p"),rN(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),Sl(451,"strong"),rN(452,"45"),og(),rN(453," ser\xE1 utilizado."),og()(),Sl(454,"blockquote")(455,"p"),rN(456,"N\xE3o compat\xEDvel com "),Sl(457,"code"),rN(458,'p-shape="bar"'),og(),rN(459,"."),og()()()(),Sl(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),rN(464," (p-retry)"),Wl(465,"br"),og()()(),Sl(466,"td",18)(467,"code",24),rN(468,"EventEmitter"),og()(),Sl(469,"td",20),rN(470,"-"),og(),Sl(471,"td",21)(472,"em")(473,"strong"),rN(474,"(opcional)"),og()(),Sl(475,"p"),rN(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),og(),Sl(477,"blockquote")(478,"p"),rN(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),Sl(480,"code"),rN(481,"PoProgressStatus.Error"),og(),rN(482,"."),og()(),Sl(483,"blockquote")(484,"p"),rN(485,"N\xE3o compat\xEDvel com "),Sl(486,"code"),rN(487,'p-shape="circle"'),og(),rN(488,"."),og()()()(),Sl(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),rN(493," p-shape"),Wl(494,"br"),og()()(),Sl(495,"td",18)(496,"code",19),rN(497,"string"),og()(),Sl(498,"td",20)(499,"p")(500,"code"),rN(501,"bar"),og()()(),Sl(502,"td",21)(503,"em")(504,"strong"),rN(505,"(opcional)"),og()(),Sl(506,"p"),rN(507,"Define o formato visual do componente de progresso."),og(),Sl(508,"p"),rN(509,"Valores v\xE1lidos:"),og(),Sl(510,"ul")(511,"li")(512,"code"),rN(513,"bar"),og(),rN(514,": exibe o progresso em formato de barra."),og(),Sl(515,"li")(516,"code"),rN(517,"circle"),og(),rN(518,": exibe o progresso em formato circular."),og()()()(),Sl(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),rN(523," p-show-percentage"),Wl(524,"br"),og()()(),Sl(525,"td",18)(526,"code",26),rN(527,"boolean"),og()(),Sl(528,"td",20)(529,"p")(530,"code"),rN(531,"false"),og()()(),Sl(532,"td",21)(533,"em")(534,"strong"),rN(535,"(opcional)"),og()(),Sl(536,"p"),rN(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),og(),Sl(538,"blockquote")(539,"p"),rN(540,"Se utilizada no "),Sl(541,"code"),rN(542,'p-shape="circle"'),og(),rN(543," e o status estiver como "),Sl(544,"code"),rN(545,"error"),og(),rN(546,", a porcentagem n\xE3o ser\xE1 exibida."),og()()()(),Sl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),rN(551," p-size"),Wl(552,"br"),og()()(),Sl(553,"td",18)(554,"code",19),rN(555,"string"),og()(),Sl(556,"td",20)(557,"p")(558,"code"),rN(559,"large"),og()()(),Sl(560,"td",21)(561,"em")(562,"strong"),rN(563,"(opcional)"),og()(),Sl(564,"p"),rN(565,"Define a expessura da barra de progresso."),og(),Sl(566,"p"),rN(567,"Valores v\xE1lidos:"),og(),Sl(568,"ul")(569,"li"),rN(570,"medium"),og(),Sl(571,"li"),rN(572,"large"),og()()()(),Sl(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),rN(577," p-size-actions"),Wl(578,"br"),og()()(),Sl(579,"td",18)(580,"code",19),rN(581,"string"),og()(),Sl(582,"td",20)(583,"p")(584,"code"),rN(585,"medium"),og()()(),Sl(586,"td",21)(587,"em")(588,"strong"),rN(589,"(opcional)"),og()(),Sl(590,"p"),rN(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),Sl(592,"code"),rN(593,"p-size"),og(),rN(594,":"),og(),Sl(595,"ul")(596,"li")(597,"code"),rN(598,"small"),og(),rN(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(600,"li")(601,"code"),rN(602,"medium"),og(),rN(603,": aplica a medida medium de cada componente."),og()(),Sl(604,"blockquote")(605,"p"),rN(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(607,"code"),rN(608,"medium"),og(),rN(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(610,"a",29),rN(611,"po-theme"),og(),rN(612,"."),og()(),Sl(613,"blockquote")(614,"p"),rN(615,"N\xE3o compat\xEDvel com "),Sl(616,"code"),rN(617,'p-shape="circle"'),og(),rN(618,"."),og()()()(),Sl(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),rN(623," p-status"),Wl(624,"br"),og()()(),Sl(625,"td",18)(626,"code",30),rN(627,"PoProgressStatus"),og()(),Sl(628,"td",20)(629,"p")(630,"code"),rN(631,"PoProgressStatus.Default"),og()()(),Sl(632,"td",21)(633,"em")(634,"strong"),rN(635,"(opcional)"),og()(),Sl(636,"p"),rN(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),og()()(),Sl(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),rN(642," p-text"),Wl(643,"br"),og()()(),Sl(644,"td",18)(645,"code",19),rN(646,"string"),og()(),Sl(647,"td",20),rN(648,"-"),og(),Sl(649,"td",21)(650,"em")(651,"strong"),rN(652,"(opcional)"),og()(),Sl(653,"p"),rN(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),og(),Sl(655,"blockquote")(656,"p"),rN(657,"N\xE3o compat\xEDvel com "),Sl(658,"code"),rN(659,'p-shape="circle"'),og(),rN(660,"."),og()()()(),Sl(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),rN(665," p-value"),Wl(666,"br"),og()()(),Sl(667,"td",18)(668,"code",28),rN(669,"number"),og()(),Sl(670,"td",20)(671,"p")(672,"code"),rN(673,"0"),og()()(),Sl(674,"td",21)(675,"em")(676,"strong"),rN(677,"(opcional)"),og()(),Sl(678,"p"),rN(679,"Valor que representar\xE1 o progresso."),og(),Sl(680,"blockquote")(681,"p"),rN(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),Sl(683,"code"),rN(684,"0"),og(),rN(685," \xE0 "),Sl(686,"code"),rN(687,"100"),og(),rN(688,"."),og()()()()(),Sl(689,"h3"),rN(690,"Interfaces"),og(),Sl(691,"h4",31)(692,"code",5),rN(693,"PoProgressAction"),og()(),Sl(694,"div",2)(695,"p"),rN(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),og()(),Sl(697,"h4",10),rN(698,"Propriedades"),og(),Sl(699,"table",11)(700,"tr",12)(701,"th",13),rN(702,"Nome"),og(),Sl(703,"th",13),rN(704,"Tipo"),og(),Sl(705,"th",13),rN(706,"Descri\xE7\xE3o"),og()(),Sl(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),rN(711," disabled"),Wl(712,"br"),og()()(),Sl(713,"td",18)(714,"code",26),rN(715,"boolean "),og(),Sl(716,"code",32),rN(717," Function"),og()(),Sl(718,"td",21)(719,"em")(720,"strong"),rN(721,"(opcional)"),og()(),Sl(722,"p"),rN(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),og(),Sl(724,"p"),rN(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),og()()(),Sl(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),rN(730," icon"),Wl(731,"br"),og()()(),Sl(732,"td",18)(733,"code",19),rN(734,"string "),og(),Sl(735,"code",27),rN(736," TemplateRef<void>"),og()(),Sl(737,"td",21)(738,"em")(739,"strong"),rN(740,"(opcional)"),og()(),Sl(741,"p"),rN(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(743,"p"),rN(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(745,"a",33),rN(746,"Biblioteca de \xEDcones"),og(),rN(747,". conforme exemplo abaixo:"),og(),Sl(748,"pre")(749,"code"),rN(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),og()(),Sl(751,"p"),rN(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Sl(753,"pre")(754,"code"),rN(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),og()(),Sl(756,"p"),rN(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(758,"code"),rN(759,"TemplateRef"),og(),rN(760,`, conforme exemplo abaixo:
component.html:`),og(),Sl(761,"pre")(762,"code"),rN(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),og()(),Sl(764,"p"),rN(765,"component.ts:"),og(),Sl(766,"pre")(767,"code"),rN(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),og()()()(),Sl(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),rN(773," label"),Wl(774,"br"),og()()(),Sl(775,"td",18)(776,"code",19),rN(777,"string"),og()(),Sl(778,"td",21)(779,"em")(780,"strong"),rN(781,"(opcional)"),og()(),Sl(782,"p"),rN(783,"R\xF3tulo da a\xE7\xE3o."),og()()(),Sl(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),rN(788," type"),Wl(789,"br"),og()()(),Sl(790,"td",18)(791,"code",19),rN(792,"string"),og()(),Sl(793,"td",21)(794,"em")(795,"strong"),rN(796,"(opcional)"),og()(),Sl(797,"p"),rN(798,"Define a cor do item, sendo "),Sl(799,"code"),rN(800,"default"),og(),rN(801," o padr\xE3o."),og(),Sl(802,"p"),rN(803,"Valores v\xE1lidos:"),og(),Sl(804,"ul")(805,"li")(806,"code"),rN(807,"default"),og()(),Sl(808,"li")(809,"code"),rN(810,"danger"),og(),rN(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),og()()()(),Sl(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),rN(816," visible"),Wl(817,"br"),og()()(),Sl(818,"td",18)(819,"code",26),rN(820,"boolean "),og(),Sl(821,"code",32),rN(822," Function"),og()(),Sl(823,"td",21)(824,"em")(825,"strong"),rN(826,"(opcional)"),og()(),Sl(827,"p"),rN(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),og(),Sl(829,"blockquote")(830,"p"),rN(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),og()(),Sl(832,"p"),rN(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),og(),Sl(834,"ul")(835,"li")(836,"p"),rN(837,"Fun\xE7\xE3o que deve retornar um booleano."),og()(),Sl(838,"li")(839,"p"),rN(840,"Informar diretamente um valor booleano."),og()()()()()(),Sl(841,"h3"),rN(842,"Enums"),og(),Sl(843,"h4",4)(844,"code",5),rN(845,"PoProgressShape"),og()(),Sl(846,"div",2)(847,"p"),rN(848,"Enum "),Sl(849,"code"),rN(850,"PoProgressShape"),og(),rN(851," para definir o formato visual do componente de progresso."),og()(),Sl(852,"h4",10),rN(853,"Propriedades"),og(),Sl(854,"table",11)(855,"tr",12)(856,"th",13),rN(857,"Nome"),og(),Sl(858,"th",13),rN(859,"Descri\xE7\xE3o"),og()(),Sl(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),rN(864," bar"),Wl(865,"br"),og()()(),Sl(866,"td",21)(867,"p"),rN(868,"Formato barra de progresso (padr\xE3o)."),og()()(),Sl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),rN(873," circle"),Wl(874,"br"),og()()(),Sl(875,"td",21)(876,"p"),rN(877,"Formato circular de progresso."),og()()()(),Sl(878,"h4",4)(879,"code",5),rN(880,"PoProgressSize"),og()(),Sl(881,"div",2)(882,"p"),rN(883,"Enum para configurar a expessura ("),Sl(884,"code"),rN(885,"p-size"),og(),rN(886,") da barra de progresso do componente."),og()(),Sl(887,"h4",10),rN(888,"Propriedades"),og(),Sl(889,"table",11)(890,"tr",12)(891,"th",13),rN(892,"Nome"),og(),Sl(893,"th",13),rN(894,"Descri\xE7\xE3o"),og()(),Sl(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),rN(899," medium"),Wl(900,"br"),og()()(),Sl(901,"td",21)(902,"p"),rN(903,"Tamanho m\xE9dio com 4px."),og()()(),Sl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),rN(908," large"),Wl(909,"br"),og()()(),Sl(910,"td",21)(911,"p"),rN(912,"Tamanho grande com 8px."),og()()()(),Sl(913,"h4",4)(914,"code",5),rN(915,"PoProgressStatus"),og()(),Sl(916,"div",2)(917,"p"),rN(918,"Enum "),Sl(919,"code"),rN(920,"PoProgressStatus"),og(),rN(921," para os status de barra de progresso."),og()(),Sl(922,"h4",10),rN(923,"Propriedades"),og(),Sl(924,"table",11)(925,"tr",12)(926,"th",13),rN(927,"Nome"),og(),Sl(928,"th",13),rN(929,"Descri\xE7\xE3o"),og()(),Sl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),rN(934," Default"),Wl(935,"br"),og()()(),Sl(936,"td",21)(937,"p"),rN(938,"Define o status "),Sl(939,"code"),rN(940,"default"),og(),rN(941," para a barra de progresso."),og()()(),Sl(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),rN(946," Error"),Wl(947,"br"),og()()(),Sl(948,"td",21)(949,"p"),rN(950,"Define o status de "),Sl(951,"code"),rN(952,"error"),og(),rN(953," para a barra de progresso."),og()()(),Sl(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),rN(958," Success"),Wl(959,"br"),og()()(),Sl(960,"td",21)(961,"p"),rN(962,"Define o status de "),Sl(963,"code"),rN(964,"success"),og(),rN(965," para a barra de progresso."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var ye=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-progress-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),og()()()),l&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,Se,ve,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})();var Ge=[{path:"",component:ye}],De=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[mL.forChild(Ge),mL]})}return o})();var wt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,De]})}return o})();export{wt as DocPoProgressModule};