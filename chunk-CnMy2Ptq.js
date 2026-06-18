import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,db as oNe,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,aI as dc,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-value"]],template:function(l,o){l&1&&zl(0,"po-gauge",0),l&2&&nw("p-value",50);},dependencies:[oNe],encapsulation:2,changeDetection:1})}return a})();var de=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Gauge Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-gauge-basic/sample-po-gauge-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-gauge [p-value]="50"></po-gauge>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-gauge-basic/sample-po-gauge-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-gauge-basic',
  templateUrl: './sample-po-gauge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-gauge-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,de,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ee],encapsulation:2})}return a})();var oe=(()=>{class a{description;subtitle;gaugeValue;height;options;optionsRanges={};properties;ranges=[];title;propertiesOptions=[{value:"showFromToLegend",label:"Show From To Legend"},{value:"showPointer",label:"Show Pointer"},{value:"showContainerGauge",label:"Show Container"},{value:"hideExpand",label:"Hide Expand"},{value:"hideTableDetails",label:"Hide Table Details"},{value:"hideExportCsv",label:"Hide Export Csv"},{value:"hideExportImage",label:"Hide Export Image"}];get isEmptyObject(){return Object.keys(this.optionsRanges).length===0}ngOnInit(){this.restore();}addRange(){this.ranges=[...this.ranges,this.optionsRanges],this.optionsRanges={};}restore(){this.description=void 0,this.gaugeValue=void 0,this.height=void 0,this.optionsRanges={},this.ranges=[],this.title=void 0,this.properties=["showPointer","showContainerGauge"],this.changeOptions();}changeOptions(){this.options={showFromToLegend:this.properties.includes("showFromToLegend"),pointer:this.properties.includes("showPointer"),showContainerGauge:this.properties.includes("showContainerGauge"),subtitleGauge:this.subtitle,header:{hideExpand:this.properties.includes("hideExpand"),hideTableDetails:this.properties.includes("hideTableDetails"),hideExportCsv:this.properties.includes("hideExportCsv"),hideExportImage:this.properties.includes("hideExportImage")}};}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs"]],standalone:false,decls:24,vars:20,consts:[["rangesForm","ngForm"],[3,"p-description","p-height","p-ranges","p-title","p-value","p-options","p-show-from-to-legend","p-show-pointer"],["p-label","Properties",1,"po-md-12"],[1,"row"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["name","gaugeValue","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","description","p-label","Description",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Ranges",1,"po-md-12"],["name","from","p-label","from",1,"po-md-3",3,"ngModelChange","ngModel"],["name","from","p-label","to",1,"po-md-3",3,"ngModelChange","ngModel"],["name","label","p-label","label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","color","p-label","color",1,"po-md-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Add Range",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let d=Dx();zl(0,"po-gauge",1)(1,"po-divider",2),Il(2,"form")(3,"div",3)(4,"po-input",4),ww("ngModelChange",function(r){return Xy(d),eN(o.title,r)||(o.title=r),Qy(r)}),og(),QA(),Il(5,"po-number",5),ww("ngModelChange",function(r){return Xy(d),eN(o.height,r)||(o.height=r),Qy(r)}),og(),QA(),Il(6,"po-number",6),ww("ngModelChange",function(r){return Xy(d),eN(o.gaugeValue,r)||(o.gaugeValue=r),Qy(r)}),og(),QA(),Il(7,"po-input",7),ww("ngModelChange",function(r){return Xy(d),eN(o.description,r)||(o.description=r),Qy(r)}),og(),QA(),Il(8,"po-input",8),ww("ngModelChange",function(r){return Xy(d),eN(o.subtitle,r)||(o.subtitle=r),Qy(r)}),ft("p-change",function(){return o.changeOptions()}),og(),QA(),og(),Il(9,"form",null,0)(11,"div",9),zl(12,"po-divider",10),Il(13,"po-number",11),ww("ngModelChange",function(r){return Xy(d),eN(o.optionsRanges.from,r)||(o.optionsRanges.from=r),Qy(r)}),og(),QA(),Il(14,"po-number",12),ww("ngModelChange",function(r){return Xy(d),eN(o.optionsRanges.to,r)||(o.optionsRanges.to=r),Qy(r)}),og(),QA(),Il(15,"po-input",13),ww("ngModelChange",function(r){return Xy(d),eN(o.optionsRanges.label,r)||(o.optionsRanges.label=r),Qy(r)}),og(),QA(),Il(16,"po-input",14),ww("ngModelChange",function(r){return Xy(d),eN(o.optionsRanges.color,r)||(o.optionsRanges.color=r),Qy(r)}),og(),QA(),og(),Il(17,"div",9)(18,"po-checkbox-group",15),ww("ngModelChange",function(r){return Xy(d),eN(o.properties,r)||(o.properties=r),Qy(r)}),ft("p-change",function(){return o.changeOptions()}),og(),QA(),og(),Il(19,"div",9)(20,"po-button",16),ft("p-click",function(){return o.addRange()}),og()()()(),Il(21,"div",9),zl(22,"po-divider",17),Il(23,"po-button",18),ft("p-click",function(){return o.restore()}),og()();}if(l&2){let d=Ax(10);nw("p-description",o.description)("p-height",o.height)("p-ranges",o.ranges)("p-title",o.title)("p-value",o.gaugeValue)("p-options",o.options)("p-show-from-to-legend",o.properties.includes("showFromToLegend"))("p-show-pointer",o.properties.includes("showPointer")),Lp(4),Ew("ngModel",o.title),e0(),Lp(),Ew("ngModel",o.height),e0(),Lp(),Ew("ngModel",o.gaugeValue),e0(),Lp(),Ew("ngModel",o.description),e0(),Lp(),Ew("ngModel",o.subtitle),e0(),Lp(5),Ew("ngModel",o.optionsRanges.from),e0(),Lp(),Ew("ngModel",o.optionsRanges.to),e0(),Lp(),Ew("ngModel",o.optionsRanges.label),e0(),Lp(),Ew("ngModel",o.optionsRanges.color),e0(),Lp(2),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(2),nw("p-disabled",d.invalid||o.isEmptyObject);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Hhe,oNe],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Gauge Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-gauge-labs/sample-po-gauge-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-gauge
  [p-description]="description"
  [p-height]="height"
  [p-ranges]="ranges"
  [p-title]="title"
  [p-value]="gaugeValue"
  [p-options]="options"
  [p-show-from-to-legend]="properties.includes('showFromToLegend')"
  [p-show-pointer]="properties.includes('showPointer')"
>
</po-gauge>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <div class="row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
    <po-number class="po-md-6" name="height" [(ngModel)]="height" p-label="Height"> </po-number>
    <po-number class="po-md-6" name="gaugeValue" [(ngModel)]="gaugeValue" p-label="Value"> </po-number>
    <po-input class="po-md-6" name="description" [(ngModel)]="description" p-label="Description"> </po-input>
    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" (p-change)="changeOptions()" p-label="Subtitle">
    </po-input>
  </div>

  <form #rangesForm="ngForm">
    <div class="po-row">
      <po-divider class="po-md-12" p-label="Ranges"></po-divider>
      <po-number class="po-md-3" name="from" [(ngModel)]="optionsRanges.from" p-label="from"></po-number>
      <po-number class="po-md-3" name="from" [(ngModel)]="optionsRanges.to" p-label="to"></po-number>
      <po-input class="po-md-3" name="label" [(ngModel)]="optionsRanges.label" p-label="label"></po-input>
      <po-input class="po-md-3" name="color" [(ngModel)]="optionsRanges.color" p-label="color"></po-input>
    </div>
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
        (p-change)="changeOptions()"
      >
      </po-checkbox-group>
    </div>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Range"
        [p-disabled]="rangesForm.invalid || isEmptyObject"
        (p-click)="addRange()"
      ></po-button>
    </div>
  </form>
</form>

<div class="po-row">
  <po-divider class="po-md-12"></po-divider>
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-gauge-labs/sample-po-gauge-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoGaugeOptions, PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-labs',
  templateUrl: './sample-po-gauge-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeLabsComponent implements OnInit {
  description: string;
  subtitle: string;
  gaugeValue: number;
  height: number;
  options: PoGaugeOptions;
  optionsRanges: PoGaugeRanges = {};
  properties: Array<string>;
  ranges: Array<PoGaugeRanges> = [];
  title: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showFromToLegend', label: 'Show From To Legend' },
    { value: 'showPointer', label: 'Show Pointer' },
    { value: 'showContainerGauge', label: 'Show Container' },
    { value: 'hideExpand', label: 'Hide Expand' },
    { value: 'hideTableDetails', label: 'Hide Table Details' },
    { value: 'hideExportCsv', label: 'Hide Export Csv' },
    { value: 'hideExportImage', label: 'Hide Export Image' }
  ];

  get isEmptyObject() {
    return Object.keys(this.optionsRanges).length === 0;
  }

  ngOnInit() {
    this.restore();
  }

  addRange() {
    this.ranges = [...this.ranges, this.optionsRanges];
    this.optionsRanges = {};
  }

  restore() {
    this.description = undefined;
    this.gaugeValue = undefined;
    this.height = undefined;
    this.optionsRanges = {};
    this.ranges = [];
    this.title = undefined;
    this.properties = ['showPointer', 'showContainerGauge'];
    this.changeOptions();
  }

  changeOptions() {
    this.options = {
      showFromToLegend: this.properties.includes('showFromToLegend'),
      pointer: this.properties.includes('showPointer'),
      showContainerGauge: this.properties.includes('showContainerGauge'),
      subtitleGauge: this.subtitle,
      header: {
        hideExpand: this.properties.includes('hideExpand'),
        hideTableDetails: this.properties.includes('hideTableDetails'),
        hideExportCsv: this.properties.includes('hideExportCsv'),
        hideExportImage: this.properties.includes('hideExportImage')
      }
    };
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-gauge-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return a})();var ae=(()=>{class a{salesRanges=[{from:0,to:50,label:"Sales reduction",color:"#c64840"},{from:50,to:75,label:"Average sales",color:"#ea9b3e"},{from:75,to:100,label:"Sales soared",color:"#00b28e"}];turnoverRanges=[{from:0,to:50,label:"Low rate",color:"#00b28e"},{from:50,to:75,label:"Average rate",color:"#ea9b3e"},{from:75,to:100,label:"High rate",color:"#c64840"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary"]],standalone:false,decls:8,vars:4,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-md-6"],["p-title","Employee turnover rate","p-value","25","p-description","25% of turnover",3,"p-show-from-to-legend","p-ranges"],["p-title","Sales performance","p-value","82","p-description","The sales increased in 82% in the first bimester of 2020",3,"p-show-from-to-legend","p-ranges"]],template:function(l,o){l&1&&(Il(0,"po-container")(1,"div",0),Qx(2,"Sales Performance"),og(),Il(3,"div",1)(4,"div",2),zl(5,"po-gauge",3),og(),Il(6,"div",2),zl(7,"po-gauge",4),og()()()),l&2&&(Lp(5),nw("p-show-from-to-legend",true)("p-ranges",o.turnoverRanges),Lp(2),nw("p-show-from-to-legend",true)("p-ranges",o.salesRanges));},dependencies:[dc,oNe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Gauge Summary"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-gauge-summary/sample-po-gauge-summary.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-md-6">
      <po-gauge
        p-title="Employee turnover rate"
        p-value="25"
        p-description="25% of turnover"
        [p-show-from-to-legend]="true"
        [p-ranges]="turnoverRanges"
      ></po-gauge>
    </div>
    <div class="po-md-6">
      <po-gauge
        p-title="Sales performance"
        p-value="82"
        p-description="The sales increased in 82% in the first bimester of 2020"
        [p-show-from-to-legend]="true"
        [p-ranges]="salesRanges"
      ></po-gauge>
    </div>
  </div>
</po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-gauge-summary/sample-po-gauge-summary.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-summary',
  templateUrl: './sample-po-gauge-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGaugeSummaryComponent {
  salesRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Sales reduction', color: '#c64840' },
    { from: 50, to: 75, label: 'Average sales', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'Sales soared', color: '#00b28e' }
  ];

  turnoverRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
    { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'High rate', color: '#c64840' }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-gauge-summary"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,be,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ae],encapsulation:2})}return a})();var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-gauge-doc"]],standalone:false,decls:583,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-class-deprecated-marker"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoGaugeOptions"],["pan","",1,"docs-api-property-type","Array<PoGaugeRanges>"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"]],template:function(l,o){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoGaugeModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-gauge."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoGaugeComponent"),og()(),Il(12,"div",2)(13,"blockquote")(14,"p"),Qx(15,"ESSE COMPONENTE EST\xC1 DEPRECIADO E SER\xC1 REMOVIDO NA v22.x.x. Indicamos a utiliza\xE7\xE3o do "),Il(16,"code"),Qx(17,"po-chart"),og(),Qx(18," com "),Il(19,"code"),Qx(20,"type"),og(),Qx(21," Gauge."),og()(),Il(22,"p"),Qx(23,"O componente "),Il(24,"code"),Qx(25,"po-gauge"),og(),Qx(26,` prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. \xC9 muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
O `),Il(27,"code"),Qx(28,"po-gauge"),og(),Qx(29," possui dois tipos de tratamentos:"),og(),Il(30,"ul")(31,"li"),Qx(32,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),og(),Il(33,"li"),Qx(34,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),og()(),Il(35,"h4"),Qx(36,"Guia de uso para Gr\xE1ficos"),og(),Il(37,"blockquote")(38,"p"),Qx(39,"Veja nosso "),Il(40,"a",6),Qx(41,"guia de uso para gr\xE1ficos"),og(),Qx(42,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),og()()(),Il(43,"div",7)(44,"h4",8),Qx(45,"Seletor"),og(),Il(46,"pre",9),Qx(47,`<po-gauge
    p-description="string"
    p-height="number"
    p-options="PoGaugeOptions"
    p-ranges="Array<PoGaugeRanges>"
    p-show-from-to-legend="boolean"
    p-show-pointer="boolean"
    p-title="string"
    p-value="number" >
</po-gauge>
`),og()(),Il(48,"div",10),Qx(49,"Deprecated"),og(),Il(50,"h4",11),Qx(51,"Propriedades"),og(),Il(52,"table",12)(53,"tr",13)(54,"th",14),Qx(55,"Nome"),og(),Il(56,"th",14),Qx(57,"Tipo"),og(),Il(58,"th",14),Qx(59,"Padr\xE3o"),og(),Il(60,"th",14),Qx(61,"Descri\xE7\xE3o"),og()(),Il(62,"tr",15)(63,"td",16)(64,"div",17)(65,"span",18),Qx(66," p-description"),zl(67,"br"),og()()(),Il(68,"td",19)(69,"code",20),Qx(70,"string"),og()(),Il(71,"td",21),Qx(72,"-"),og(),Il(73,"td",22)(74,"em")(75,"strong"),Qx(76,"(opcional)"),og()(),Il(77,"p"),Qx(78,`Define o texto que ser\xE1 exibido no gauge.
H\xE1 dois posicionamentos para ele:`),og(),Il(79,"ul")(80,"li"),Qx(81,"Se houver defini\xE7\xE3o para "),Il(82,"code"),Qx(83,"p-ranges"),og(),Qx(84,", o descritivo ser\xE1 exibido no topo do container, ficando acima do gauge;"),og(),Il(85,"li"),Qx(86,"Na aus\xEAncia de "),Il(87,"code"),Qx(88,"p-ranges"),og(),Qx(89,", ser\xE1 incorporado dentro do arco do gauge, e abaixo de "),Il(90,"code"),Qx(91,"p-value"),og(),Qx(92,"."),og()(),Il(93,"blockquote")(94,"p"),Qx(95,`Para uma melhor experi\xEAncia do usu\xE1rio, \xE9 recomendado um descritivo breve e com poucas palavras.
Indicamos a utiliza\xE7\xE3o da nova propriedade `),Il(96,"code"),Qx(97,"descriptionChart"),og(),Qx(98," em "),Il(99,"code"),Qx(100,"p-options"),og(),Qx(101,"."),og()()()(),Il(102,"tr",15)(103,"td",16)(104,"div",17)(105,"span",18),Qx(106," p-height"),zl(107,"br"),og()()(),Il(108,"td",19)(109,"code",23),Qx(110,"number"),og()(),Il(111,"td",21)(112,"p")(113,"code"),Qx(114,"300px"),og()()(),Il(115,"td",22)(116,"em")(117,"strong"),Qx(118,"(opcional)"),og()(),Il(119,"p"),Qx(120,"Define a altura do gauge."),og(),Il(121,"p"),Qx(122,"O valor m\xEDnimo aceito \xE9 300px."),og()()(),Il(123,"tr",15)(124,"td",16)(125,"div",17)(126,"span",18),Qx(127," p-options"),zl(128,"br"),og()()(),Il(129,"td",19)(130,"code",24),Qx(131,"PoGaugeOptions"),og()(),Il(132,"td",21),Qx(133,"-"),og(),Il(134,"td",22)(135,"em")(136,"strong"),Qx(137,"(opcional)"),og()(),Il(138,"p"),Qx(139,"Objeto com as configura\xE7\xF5es usadas no "),Il(140,"code"),Qx(141,"po-gauge"),og(),Qx(142,"."),og(),Il(143,"p"),Qx(144,`\xC9 poss\xEDvel, por exemplo, esconder as funcionalidades do header,
ou habilitar uma legenda com `),Il(145,"code"),Qx(146,"From"),og(),Il(147,"code"),Qx(148,"To"),og(),Qx(149," da seguinte forma:"),og(),Il(150,"pre")(151,"code"),Qx(152,`chartOptions: PoGaugeOptions = {
  showFromToLegend: true,
  header: {
    hideExpand: true,
  },
};
`),og()()()(),Il(153,"tr",15)(154,"td",16)(155,"div",17)(156,"span",18),Qx(157," p-ranges"),zl(158,"br"),og()()(),Il(159,"td",19)(160,"code",25),Qx(161,"Array<PoGaugeRanges>"),og()(),Il(162,"td",21),Qx(163,"-"),og(),Il(164,"td",22)(165,"em")(166,"strong"),Qx(167,"(opcional)"),og()(),Il(168,"p"),Qx(169,`Defini\xE7\xE3o para o alcance de cores. Ao adicionar pelo menos um item na lista,
incorpora-se o ponteiro que assinala o valor passado em `),Il(170,"code"),Qx(171,"p-value"),og(),Qx(172,`.
Se o valor de `),Il(173,"code"),Qx(174,"p-value"),og(),Qx(175," for inferior ao m\xEDnimo valor definido em "),Il(176,"code"),Qx(177,"PoGaugeRanges.from"),og(),Qx(178,", o dom\xEDnio m\xEDnimo do gauge ser\xE1 "),Il(179,"code"),Qx(180,"p-value"),og(),Qx(181,`.
A mesma regra prevalece para valores m\xE1ximos.`),og()()(),Il(182,"tr",15)(183,"td",16)(184,"div",17)(185,"span",18),Qx(186," p-show-from-to-legend"),zl(187,"br"),og()()(),Il(188,"td",19)(189,"code",26),Qx(190,"boolean"),og()(),Il(191,"td",21)(192,"p")(193,"code"),Qx(194,"false"),og()()(),Il(195,"td",22)(196,"em")(197,"strong"),Qx(198,"(opcional)"),og()(),Il(199,"p"),Qx(200,"Define a exibi\xE7\xE3o dos valores de "),Il(201,"code"),Qx(202,"from"),og(),Qx(203," - "),Il(204,"code"),Qx(205,"to"),og(),Qx(206," entre par\xEAnteses caso haja defini\xE7\xE3o de "),Il(207,"code"),Qx(208,"p-ranges"),og(),Qx(209,"."),og()()(),Il(210,"tr",15)(211,"td",16)(212,"div",17)(213,"span",18),Qx(214," p-show-pointer"),zl(215,"br"),og()()(),Il(216,"td",19)(217,"code",26),Qx(218,"boolean"),og()(),Il(219,"td",21)(220,"p")(221,"code"),Qx(222,"true"),og()()(),Il(223,"td",22)(224,"em")(225,"strong"),Qx(226,"(opcional)"),og()(),Il(227,"p"),Qx(228,"Define a exibi\xE7\xE3o do ponteiro caso haja defini\xE7\xE3o de "),Il(229,"code"),Qx(230,"p-ranges"),og(),Qx(231,"."),og()()(),Il(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),Qx(236," p-title"),zl(237,"br"),og()()(),Il(238,"td",19)(239,"code",20),Qx(240,"string"),og()(),Il(241,"td",21),Qx(242,"-"),og(),Il(243,"td",22)(244,"em")(245,"strong"),Qx(246,"(opcional)"),og()(),Il(247,"p"),Qx(248,"Define o t\xEDtulo do gauge."),og()()(),Il(249,"tr",15)(250,"td",16)(251,"div",17)(252,"span",18),Qx(253," p-value"),zl(254,"br"),og()()(),Il(255,"td",19)(256,"code",23),Qx(257,"number"),og()(),Il(258,"td",21),Qx(259,"-"),og(),Il(260,"td",22)(261,"em")(262,"strong"),Qx(263,"(opcional)"),og()(),Il(264,"p"),Qx(265,"Valor referente ao valor da s\xE9rie. Seu comportamento segue a seguintes regras:"),og(),Il(266,"ul")(267,"li"),Qx(268,"Sem "),Il(269,"code"),Qx(270,"p-ranges"),og(),Qx(271,": Os valores passados para "),Il(272,"code"),Qx(273,"p-value"),og(),Qx(274," e "),Il(275,"code"),Qx(276,"p-description"),og(),Qx(277,` ser\xE3o centralizados no interior do arco.
A base do valor ser\xE1 percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
A coloriza\xE7\xE3o do gauge ser\xE1 completa e o valor passado ser\xE1 exibido no interior do arco.`),og(),Il(278,"li"),Qx(279,"Com "),Il(280,"code"),Qx(281,"p-ranges"),og(),Qx(282,": A descri\xE7\xE3o ser\xE1 exibida acima do gauge e haver\xE1 um ponteiro marcando o valor passado em "),Il(283,"code"),Qx(284,"p-value"),og(),Qx(285,`.
Considerando que o alcance em `),Il(286,"code"),Qx(287,"ranges"),og(),Qx(288," \xE9 aberto, ent\xE3o a escala de "),Il(289,"code"),Qx(290,"p-value"),og(),Qx(291,` ser\xE1 em rela\xE7\xE3o ao menor/maior alcance
absoluto definido em `),Il(292,"code"),Qx(293,"p-ranges"),og(),Qx(294,`.
Se passado um `),Il(295,"code"),Qx(296,"p-value"),og(),Qx(297," inferior em rela\xE7\xE3o ao m\xEDnimo valor definido em "),Il(298,"code"),Qx(299,"p-ranges"),og(),Qx(300,", o dom\xEDnio m\xEDnimo do gauge partir\xE1 de "),Il(301,"code"),Qx(302,"p-value"),og(),Qx(303,`.
A mesma regra prevalece para valores m\xE1ximos.`),og()()()()(),Il(304,"h3"),Qx(305,"Interfaces"),og(),Il(306,"h4",27)(307,"code",5),Qx(308,"PoGaugeOptions"),og()(),Il(309,"div",2)(310,"p")(311,"em"),Qx(312,"Interface"),og(),Qx(313," para configura\xE7\xF5es dos elementos do gr\xE1fico."),og()(),Il(314,"h4",11),Qx(315,"Propriedades"),og(),Il(316,"table",12)(317,"tr",13)(318,"th",14),Qx(319,"Nome"),og(),Il(320,"th",14),Qx(321,"Tipo"),og(),Il(322,"th",14),Qx(323,"Descri\xE7\xE3o"),og()(),Il(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),Qx(328," descriptionChart"),zl(329,"br"),og()()(),Il(330,"td",19)(331,"code",20),Qx(332,"string"),og()(),Il(333,"td",22)(334,"em")(335,"strong"),Qx(336,"(opcional)"),og()(),Il(337,"p"),Qx(338,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),og()()(),Il(339,"tr",15)(340,"td",16)(341,"div",17)(342,"span",18),Qx(343," header"),zl(344,"br"),og()()(),Il(345,"td",19)(346,"code",28),Qx(347,"PoChartHeaderOptions"),og()(),Il(348,"td",22)(349,"em")(350,"strong"),Qx(351,"(opcional)"),og()(),Il(352,"p"),Qx(353,"Define um objeto do tipo "),Il(354,"code"),Qx(355,"PoChartHeaderOptions"),og(),Qx(356," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),og()()(),Il(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),Qx(361," pointer"),zl(362,"br"),og()()(),Il(363,"td",19)(364,"code",26),Qx(365,"boolean"),og()(),Il(366,"td",22)(367,"em")(368,"strong"),Qx(369,"(opcional)"),og()(),Il(370,"p"),Qx(371,"Define a exibi\xE7\xE3o do ponteiro."),og(),Il(372,"blockquote")(373,"p"),Qx(374,"V\xE1lido para gr\xE1fico do tipo "),Il(375,"code"),Qx(376,"Gauge"),og(),Qx(377,"."),og()()()(),Il(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),Qx(382," showContainerGauge"),zl(383,"br"),og()()(),Il(384,"td",19)(385,"code",26),Qx(386,"boolean"),og()(),Il(387,"td",22)(388,"em")(389,"strong"),Qx(390,"(opcional)"),og()(),Il(391,"p"),Qx(392,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),og()()(),Il(393,"tr",15)(394,"td",16)(395,"div",17)(396,"span",18),Qx(397," showFromToLegend"),zl(398,"br"),og()()(),Il(399,"td",19)(400,"code",26),Qx(401,"boolean"),og()(),Il(402,"td",22)(403,"em")(404,"strong"),Qx(405,"(opcional)"),og()(),Il(406,"p"),Qx(407,"Exibe os valores das propriedades "),Il(408,"code"),Qx(409,"from"),og(),Qx(410," e "),Il(411,"code"),Qx(412,"to"),og(),Qx(413," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),og(),Il(414,"blockquote")(415,"p"),Qx(416,"V\xE1lido para gr\xE1fico do tipo "),Il(417,"code"),Qx(418,"Gauge"),og(),Qx(419,"."),og()()()(),Il(420,"tr",15)(421,"td",16)(422,"div",17)(423,"span",18),Qx(424," subtitleGauge"),zl(425,"br"),og()()(),Il(426,"td",19)(427,"code",20),Qx(428,"string"),og()(),Il(429,"td",22)(430,"em")(431,"strong"),Qx(432,"(opcional)"),og()(),Il(433,"p"),Qx(434,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),og()()()(),Il(435,"h4",27)(436,"code",5),Qx(437,"PoGaugeRanges"),og()(),Il(438,"div",2)(439,"p"),Qx(440,"Interface que define os alcances das cores do gauge."),og()(),Il(441,"h4",11),Qx(442,"Propriedades"),og(),Il(443,"table",12)(444,"tr",13)(445,"th",14),Qx(446,"Nome"),og(),Il(447,"th",14),Qx(448,"Tipo"),og(),Il(449,"th",14),Qx(450,"Descri\xE7\xE3o"),og()(),Il(451,"tr",15)(452,"td",16)(453,"div",17)(454,"span",18),Qx(455," color"),zl(456,"br"),og()()(),Il(457,"td",19)(458,"code",20),Qx(459,"string"),og()(),Il(460,"td",22)(461,"em")(462,"strong"),Qx(463,"(opcional)"),og()(),Il(464,"p"),Qx(465,"Determina a cor do alcance. As maneiras de customizar o "),Il(466,"em"),Qx(467,"preset"),og(),Qx(468," padr\xE3o de cores s\xE3o:"),og(),Il(469,"ul")(470,"li"),Qx(471,"Hexadeximal, por exemplo "),Il(472,"code"),Qx(473,"#c64840"),og(),Qx(474,";"),og(),Il(475,"li"),Qx(476,"RGB, como "),Il(477,"code"),Qx(478,"rgb(0, 0, 165)"),og()(),Il(479,"li"),Qx(480,"O nome da cor, por exemplo "),Il(481,"em"),Qx(482,"blue"),og(),Qx(483,");"),og(),Il(484,"li"),Qx(485,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),Il(486,"ul")(487,"li"),zl(488,"span",29),Il(489,"code"),Qx(490,"color-01"),og()(),Il(491,"li"),zl(492,"span",30),Il(493,"code"),Qx(494,"color-02"),og()(),Il(495,"li"),zl(496,"span",31),Il(497,"code"),Qx(498,"color-03"),og()(),Il(499,"li"),zl(500,"span",32),Il(501,"code"),Qx(502,"color-04"),og()(),Il(503,"li"),zl(504,"span",33),Il(505,"code"),Qx(506,"color-05"),og()(),Il(507,"li"),zl(508,"span",34),Il(509,"code"),Qx(510,"color-06"),og()(),Il(511,"li"),zl(512,"span",35),Il(513,"code"),Qx(514,"color-07"),og()(),Il(515,"li"),zl(516,"span",36),Il(517,"code"),Qx(518,"color-08"),og()(),Il(519,"li"),zl(520,"span",37),Il(521,"code"),Qx(522,"color-09"),og()(),Il(523,"li"),zl(524,"span",38),Il(525,"code"),Qx(526,"color-10"),og()(),Il(527,"li"),zl(528,"span",39),Il(529,"code"),Qx(530,"color-11"),og()(),Il(531,"li"),zl(532,"span",40),Il(533,"code"),Qx(534,"color-12"),og()()()()()()(),Il(535,"tr",15)(536,"td",16)(537,"div",17)(538,"span",18),Qx(539," from"),zl(540,"br"),og()()(),Il(541,"td",19)(542,"code",23),Qx(543,"number"),og()(),Il(544,"td",22)(545,"em")(546,"strong"),Qx(547,"(opcional)"),og()(),Il(548,"p"),Qx(549,"Alcance inicial da cor. O valor padr\xE3o \xE9 0."),og()()(),Il(550,"tr",15)(551,"td",16)(552,"div",17)(553,"span",18),Qx(554," label"),zl(555,"br"),og()()(),Il(556,"td",19)(557,"code",20),Qx(558,"string"),og()(),Il(559,"td",22)(560,"em")(561,"strong"),Qx(562,"(opcional)"),og()(),Il(563,"p"),Qx(564,"O texto para a legenda do alcance."),og(),Il(565,"blockquote")(566,"p"),Qx(567,"Se desejar ocultar a legenda basta ignorar esta propriedade."),og()()()(),Il(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),Qx(572," to"),zl(573,"br"),og()()(),Il(574,"td",19)(575,"code",23),Qx(576,"number"),og()(),Il(577,"td",22)(578,"em")(579,"strong"),Qx(580,"(opcional)"),og()(),Il(581,"p"),Qx(582,"Alcance final da cor. O valor padr\xE3o \xE9 100."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Gauge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-gauge-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-gauge-basic-view")(6,"sample-po-gauge-labs-view")(7,"sample-po-gauge-summary-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,ne,ie,le,re],encapsulation:2})}return a})();var xe=[{path:"",component:pe}],me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(xe),uL]})}return a})();var ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,me]})}return a})();export{ze as DocPoGaugeModule};