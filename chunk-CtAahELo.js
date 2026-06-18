import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,cw as $o,cx as _3,e as s,r as r$1,b as f,c5 as Vde,cy as dde,J as zl,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft$1,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aq as lx,aO as Ew,aP as e0,at as ux,aI as dc,b7 as E3,ba as yNe,X as we$1,a3 as cNe,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Be=()=>({label:"Angular",data:100}),We=()=>({label:"React",data:10}),Fe=(r,W)=>[r,W],Ce=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-series"]],template:function(d,i){d&1&&zl(0,"po-chart",0),d&2&&nw("p-series",dN(3,Fe,lN(1,Be),lN(2,We)));},dependencies:[dde],encapsulation:2,changeDetection:1})}return r})();var Ie=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart Basic"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-basic"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return r})();var ze=()=>({value:"fillPoints",label:"fillPoints"}),q=r=>[r],He=()=>({label:"legend",value:"legend"}),Ze=()=>({label:"roseType",value:"roseType"}),Ye=()=>({label:"showFromToLegend",value:"showFromToLegend"}),je=()=>({label:"pointer",value:"pointer"}),Ue=()=>({label:"stacked",value:"stacked"}),Je=()=>({value:"fixed",label:"Fixed"});function Xe(r,W){if(r&1){let l=Dx();Il(0,"po-checkbox-group",54),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),Qy(i)}),ft$1("p-change",function(){Xy(l);let i=Sx();return Qy(i.changeDataLabelOptions())}),og(),QA();}if(r&2){let l=Sx();nw("p-options",uN(3,q,lN(2,Je))),Ew("ngModel",l.selectedValuesDataLabel),e0();}}function Qe(r,W){if(r&1){let l=Dx();Il(0,"po-number",55),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.valueGauge,i)||(s.valueGauge=i),Qy(i)}),ft$1("p-change",function(i){Xy(l);let s=Sx();return Qy(s.changeValueGauge(i))}),og(),QA();}if(r&2){let l=Sx();Ew("ngModel",l.valueGauge),e0();}}function Ke(r,W){if(r&1){let l=Dx();Il(0,"po-radio-group",56),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.selectedShapeOption,i)||(s.selectedShapeOption=i),Qy(i)}),og(),QA(),Il(1,"po-switch",57),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.selectedSplitArea,i)||(s.selectedSplitArea=i),Qy(i)}),og(),QA(),Il(2,"po-switch",58),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),Qy(i)}),og(),QA();}if(r&2){let l=Sx();nw("p-options",l.optionsShapeOption),Ew("ngModel",l.selectedShapeOption),e0(),Lp(),Ew("ngModel",l.selectedSplitArea),e0(),Lp(),Ew("ngModel",l.selectedAreaStyle),e0();}}function $e(r,W){if(r&1){let l=Dx();Il(0,"po-input",59),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.data,i)||(s.data=i),Qy(i)}),og(),QA();}if(r&2){let l=Sx();Ew("ngModel",l.data),e0();}}function et(r,W){if(r&1){let l=Dx();Il(0,"po-input",60),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.stackGroupName,i)||(s.stackGroupName=i),Qy(i)}),og(),QA();}if(r&2){let l=Sx();Ew("ngModel",l.stackGroupName),e0();}}function tt(r,W){if(r&1){let l=Dx();Il(0,"po-number",61),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.fromGauge,i)||(s.fromGauge=i),Qy(i)}),og(),QA();}if(r&2){let l=Sx();Ew("ngModel",l.fromGauge),e0();}}function nt(r,W){if(r&1){let l=Dx();Il(0,"po-number",62),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.toGauge,i)||(s.toGauge=i),Qy(i)}),og(),QA();}if(r&2){let l=Sx();Ew("ngModel",l.toGauge),e0();}}function it(r,W){if(r&1){let l=Dx();Il(0,"div",3)(1,"po-button",63),ft$1("p-click",function(){Xy(l);let i=Sx();return Qy(i.addData())}),og()();}}function ot(r,W){if(r&1){let l=Dx();Il(0,"po-number",64),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.min,i)||(s.min=i),Qy(i)}),og(),QA(),Il(1,"po-number",65),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.max,i)||(s.max=i),Qy(i)}),og(),QA(),Il(2,"po-input",66),ww("ngModelChange",function(i){Xy(l);let s=Sx();return eN(s.colorIndicator,i)||(s.colorIndicator=i),Qy(i)}),og(),QA(),Il(3,"div",3)(4,"po-button",67),ft$1("p-click",function(){Xy(l);let i=Sx();return Qy(i.addData())}),og()();}if(r&2){let l=Sx();Ew("ngModel",l.min),e0(),Lp(),Ew("ngModel",l.max),e0(),Lp(),Ew("ngModel",l.colorIndicator),e0(),Lp(2),nw("p-disabled",l.isTypeRadar&&!l.categories);}}var ye=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=false;isTypeRadar=false;disabledTooltip=false;disabledType=false;selectedSplitArea=false;selectedAreaStyle=false;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedLegendType="plain";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsLegendType=[{value:"plain",label:"plain"},{value:"scroll",label:"scroll"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:$o.Line},{label:"Area",value:$o.Area},{label:"Bar",value:$o.Bar},{label:"Column",value:$o.Column},{label:"Donut",value:$o.Donut},{label:"Pie",value:$o.Pie},{label:"Gauge",value:$o.Gauge},{label:"Radar",value:$o.Radar}];labelTypeOptions=[{label:"Number",value:_3.Number},{label:"Currency",value:_3.Currency}];changeDataLabelOptions(){this.dataLabel=s(r$1({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")});}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=s(r$1({},this.options),{axis:l});}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=s(r$1({},this.options),{header:l});}changeDataZoomOptions(){this.options=s(r$1({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=r$1({},this.options);}changeFillPointsOptions(){this.options=s(r$1({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")});}changeLegendOptions(){this.options=s(r$1({},this.options),{legend:this.selectedValuesLegend.includes("legend")});}changeRoseTypeOptions(){this.options=s(r$1({},this.options),{roseType:this.selectedRoseType.includes("roseType")});}changeShowFromToLegend(){this.options=s(r$1({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")});}changePointer(){this.options=s(r$1({},this.options),{pointer:this.selectedPointer.includes("pointer")});}changeStacked(){this.options=s(r$1({},this.options),{stacked:this.selectedStacked.includes("stacked")});}changeLegendVerticalPosition(){this.options=s(r$1({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition});}changeLegendPosition(){this.options=s(r$1({},this.options),{legendPosition:this.selectedLegendPosition});}changeLegendType(){this.options=s(r$1({},this.options),{legendType:this.selectedLegendType});}changeRendererOption(){this.options=s(r$1({},this.options),{rendererOption:this.selectedRendererOption});}changeType(l){l===$o.Gauge&&(this.isTypeGauge=true,this.changeSwitchGauge(true)),l===$o.Radar&&(this.isTypeRadar=true,this.changeSwitchRadar(true));}changeSwitchGauge(l){this.restore(true),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=$o.Gauge,this.type=$o.Gauge,this.isTypeRadar=false):(this.serieType=void 0,this.type=void 0);}changeSwitchRadar(l){this.restore(true,true),this.disabledType=l,l?(this.serieType=$o.Radar,this.type=$o.Radar,this.isTypeGauge=false):(this.serieType=void 0,this.type=void 0);}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series]);}ngOnInit(){this.restore();}addOptions(l){this.options=r$1(r$1({},this.options),l?r$1({},l):{});}addCategories(){this.allCategories=this.convertToArray(this.categories);}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea};}addData(){let l=this.serieType??this.type,d;l==="radar"?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=s(r$1({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0);}isTypeGrid(){return this.type===$o.Line||this.type===$o.Area||this.type===$o.Column||this.type===$o.Bar||this.type===$o.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`;}restore(l=false,d=false){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=false,this.disabledType=false,this.dataLabel={fixed:false},this.options=s(r$1({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=false),d||(this.isTypeRadar=false,this.categories=void 0,this.radarConfig=[]);}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs"]],standalone:false,decls:66,vars:100,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendType","p-label","LegendType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(d,i){if(d&1){let s=Dx();Il(0,"po-chart",1),ft$1("p-series-click",function(a){return i.changeEvent("p-series-click",a)})("p-series-hover",function(a){return i.changeEvent("p-series-hover",a)}),og(),zl(1,"po-divider",2),Il(2,"div",3),zl(3,"po-info",4),og(),zl(4,"po-divider",5),Il(5,"form")(6,"po-select",6),ww("ngModelChange",function(a){return Xy(s),eN(i.type,a)||(i.type=a),Qy(a)}),ft$1("p-change",function(a){return i.changeType(a)}),og(),QA(),Il(7,"po-number",7),ww("ngModelChange",function(a){return Xy(s),eN(i.height,a)||(i.height=a),Qy(a)}),og(),QA(),Il(8,"po-input",8),ww("ngModelChange",function(a){return Xy(s),eN(i.title,a)||(i.title=a),Qy(a)}),og(),QA(),lx(9,Xe,1,5,"po-checkbox-group",9),og(),zl(10,"po-divider",10),Il(11,"form",null,0)(13,"div",3)(14,"po-switch",11),ww("ngModelChange",function(a){return Xy(s),eN(i.isTypeGauge,a)||(i.isTypeGauge=a),Qy(a)}),ft$1("p-change",function(a){return i.changeSwitchGauge(a)}),og(),QA(),Il(15,"po-switch",12),ww("ngModelChange",function(a){return Xy(s),eN(i.isTypeRadar,a)||(i.isTypeRadar=a),Qy(a)}),ft$1("p-change",function(a){return i.changeSwitchRadar(a)}),og(),QA(),lx(16,Qe,1,1,"po-number",13),lx(17,Ke,3,4),og(),Il(18,"div",3)(19,"po-input",14),ww("ngModelChange",function(a){return Xy(s),eN(i.label,a)||(i.label=a),Qy(a)}),og(),QA(),lx(20,$e,1,1,"po-input",15),Il(21,"po-select",16),ww("ngModelChange",function(a){return Xy(s),eN(i.serieType,a)||(i.serieType=a),Qy(a)}),ft$1("p-change",function(a){return i.changeType(a)}),og(),QA(),Il(22,"po-input",17),ww("ngModelChange",function(a){return Xy(s),eN(i.tooltip,a)||(i.tooltip=a),Qy(a)}),og(),QA(),Il(23,"po-input",18),ww("ngModelChange",function(a){return Xy(s),eN(i.color,a)||(i.color=a),Qy(a)}),og(),QA(),lx(24,et,1,1,"po-input",19),lx(25,tt,1,1,"po-number",20),lx(26,nt,1,1,"po-number",21),lx(27,it,2,0,"div",3),og()(),Il(28,"div",3),zl(29,"po-divider",22),Il(30,"po-input",23),ww("ngModelChange",function(a){return Xy(s),eN(i.categories,a)||(i.categories=a),Qy(a)}),ft$1("p-blur",function(){return i.addCategories()}),og(),QA(),lx(31,ot,5,4),og(),Il(32,"form")(33,"div",3),zl(34,"po-divider",24),Il(35,"po-number",25),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.minRange,a)||(i.options.axis.minRange=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(36,"po-number",26),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(37,"po-number",27),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(38,"po-select",28),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.labelType,a)||(i.options.axis.labelType=a),Qy(a)}),ft$1("p-change",function(){return i.addOptions()}),og(),QA(),Il(39,"po-number",29),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(40,"po-number",30),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(41,"po-number",31),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(42,"po-number",32),ww("ngModelChange",function(a){return Xy(s),eN(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(43,"po-number",33),ww("ngModelChange",function(a){return Xy(s),eN(i.options.innerRadius,a)||(i.options.innerRadius=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(44,"po-number",34),ww("ngModelChange",function(a){return Xy(s),eN(i.options.borderRadius,a)||(i.options.borderRadius=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(45,"po-input",35),ww("ngModelChange",function(a){return Xy(s),eN(i.options.firstColumnName,a)||(i.options.firstColumnName=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(46,"po-input",36),ww("ngModelChange",function(a){return Xy(s),eN(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(47,"po-input",37),ww("ngModelChange",function(a){return Xy(s),eN(i.options.descriptionChart,a)||(i.options.descriptionChart=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),Il(48,"po-input",38),ww("ngModelChange",function(a){return Xy(s),eN(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),Qy(a)}),ft$1("p-blur",function(){return i.addOptions()}),og(),QA(),og(),Il(49,"div",3)(50,"po-checkbox-group",39),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),Qy(a)}),ft$1("p-change",function(){return i.changeHeaderOptions()}),og(),QA(),Il(51,"po-checkbox-group",40),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),Qy(a)}),ft$1("p-change",function(){return i.changeAxisOptions()}),og(),QA(),Il(52,"po-checkbox-group",41),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),Qy(a)}),ft$1("p-change",function(){return i.changeDataZoomOptions()}),og(),QA(),Il(53,"po-checkbox-group",42),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),Qy(a)}),ft$1("p-change",function(){return i.changeFillPointsOptions()}),og(),QA(),Il(54,"po-checkbox-group",43),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),Qy(a)}),ft$1("p-change",function(){return i.changeLegendOptions()}),og(),QA(),Il(55,"po-checkbox-group",44),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedRoseType,a)||(i.selectedRoseType=a),Qy(a)}),ft$1("p-change",function(){return i.changeRoseTypeOptions()}),og(),QA(),Il(56,"po-checkbox-group",45),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),Qy(a)}),ft$1("p-change",function(){return i.changeShowFromToLegend()}),og(),QA(),Il(57,"po-checkbox-group",46),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedPointer,a)||(i.selectedPointer=a),Qy(a)}),ft$1("p-change",function(){return i.changePointer()}),og(),QA(),Il(58,"po-checkbox-group",47),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedStacked,a)||(i.selectedStacked=a),Qy(a)}),ft$1("p-change",function(){return i.changeStacked()}),og(),QA(),Il(59,"po-radio-group",48),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),Qy(a)}),ft$1("p-change",function(){return i.changeLegendVerticalPosition()}),og(),QA(),Il(60,"po-radio-group",49),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),Qy(a)}),ft$1("p-change",function(){return i.changeLegendPosition()}),og(),QA(),Il(61,"po-radio-group",50),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedLegendType,a)||(i.selectedLegendType=a),Qy(a)}),ft$1("p-change",function(){return i.changeLegendType()}),og(),QA(),Il(62,"po-radio-group",51),ww("ngModelChange",function(a){return Xy(s),eN(i.selectedRendererOption,a)||(i.selectedRendererOption=a),Qy(a)}),ft$1("p-change",function(){return i.changeRendererOption()}),og(),QA(),og(),zl(63,"po-divider",52),Il(64,"div",3)(65,"po-button",53),ft$1("p-click",function(){return i.restore()}),og()()();}d&2&&(nw("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),Lp(3),nw("p-value",i.event),Lp(3),Ew("ngModel",i.type),nw("p-disabled",i.disabledType)("p-options",i.typeOptions),e0(),Lp(),Ew("ngModel",i.height),e0(),Lp(),Ew("ngModel",i.title),e0(),Lp(),ux(i.isTypeGrid()?9:-1),Lp(5),Ew("ngModel",i.isTypeGauge),e0(),Lp(),Ew("ngModel",i.isTypeRadar),e0(),Lp(),ux(i.isTypeGauge?16:-1),Lp(),ux(i.isTypeRadar?17:-1),Lp(2),Ew("ngModel",i.label),e0(),Lp(),ux(i.isTypeGauge?-1:20),Lp(),Ew("ngModel",i.serieType),nw("p-disabled",i.disabledType)("p-options",i.typeOptions),e0(),Lp(),nw("p-disabled",i.disabledTooltip),Ew("ngModel",i.tooltip),e0(),Lp(),Ew("ngModel",i.color),e0(),Lp(),ux(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),Lp(),ux(i.isTypeGauge?25:-1),Lp(),ux(i.isTypeGauge?26:-1),Lp(),ux(i.isTypeRadar?-1:27),Lp(3),Ux(i.isTypeRadar?"po-md-3":"po-md-4"),nw("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),Ew("ngModel",i.categories),e0(),Lp(),ux(i.isTypeRadar?31:-1),Lp(4),Ew("ngModel",i.options.axis.minRange),e0(),Lp(),Ew("ngModel",i.options.axis.maxRange),e0(),Lp(),Ew("ngModel",i.options.axis.gridLines),e0(),Lp(),nw("p-options",i.labelTypeOptions),Ew("ngModel",i.options.axis.labelType),e0(),Lp(),Ew("ngModel",i.options.axis.paddingBottom),e0(),Lp(),Ew("ngModel",i.options.axis.paddingLeft),e0(),Lp(),Ew("ngModel",i.options.axis.paddingRight),e0(),Lp(),Ew("ngModel",i.options.axis.rotateLegend),e0(),Lp(),Ew("ngModel",i.options.innerRadius),e0(),Lp(),Ew("ngModel",i.options.borderRadius),e0(),Lp(),Ew("ngModel",i.options.firstColumnName),e0(),Lp(),Ew("ngModel",i.options.textCenterGraph),e0(),Lp(),Ew("ngModel",i.options.descriptionChart),e0(),Lp(),Ew("ngModel",i.options.subtitleGauge),e0(),Lp(2),nw("p-columns",2)("p-options",i.optionsHeader),Ew("ngModel",i.selectedValuesHeader),e0(),Lp(),nw("p-columns",2)("p-options",i.optionsAxis),Ew("ngModel",i.selectedValuesAxis),e0(),Lp(),nw("p-columns",2)("p-options",i.optionsDataZoom),Ew("ngModel",i.selectedValuesDataZoom),e0(),Lp(),nw("p-columns",1)("p-options",uN(83,q,lN(82,ze))),Ew("ngModel",i.selectedValuesFillPoints),e0(),Lp(),nw("p-options",uN(86,q,lN(85,He))),Ew("ngModel",i.selectedValuesLegend),e0(),Lp(),nw("p-options",uN(89,q,lN(88,Ze))),Ew("ngModel",i.selectedRoseType),e0(),Lp(),nw("p-options",uN(92,q,lN(91,Ye))),Ew("ngModel",i.selectedFromToLegend),e0(),Lp(),nw("p-options",uN(95,q,lN(94,je))),Ew("ngModel",i.selectedPointer),e0(),Lp(),nw("p-options",uN(98,q,lN(97,Ue))),Ew("ngModel",i.selectedStacked),e0(),Lp(),nw("p-options",i.optionsLegendVerticalPosition),Ew("ngModel",i.selectedLegendVerticalPosition),e0(),Lp(),nw("p-options",i.optionsLegendPosition),Ew("ngModel",i.selectedLegendPosition),e0(),Lp(),nw("p-options",i.optionsLegendType),Ew("ngModel",i.selectedLegendType),e0(),Lp(),nw("p-options",i.optionsRendererOption),Ew("ngModel",i.selectedRendererOption),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,dde,mv,C3,F3,Hhe,Dde,qhe,k3,Yhe],encapsulation:2,changeDetection:1})}return r})();var rt=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart Labs"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-chart
  [p-categories]="isTypeRadar ? radarConfig : allCategories"
  [p-height]="height"
  [p-data-label]="dataLabel"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  [p-value-gauge-multiple]="valueGauge"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select
    class="po-md-3"
    name="type"
    [(ngModel)]="type"
    p-columns="3"
    p-label="Type"
    [p-disabled]="disabledType"
    [p-options]="typeOptions"
    (p-change)="changeType($event)"
  >
  </po-select>

  <po-number class="po-md-3" name="height" p-label="Height" [(ngModel)]="height"> </po-number>

  <po-input class="po-md-3" name="title" p-label="Title" [(ngModel)]="title"> </po-input>

  @if (isTypeGrid()) {
    <po-checkbox-group
      class="po-md-3"
      name="dataLabel"
      p-label="DataLabel"
      [p-options]="[{ value: 'fixed', label: 'Fixed' }]"
      [(ngModel)]="selectedValuesDataLabel"
      (p-change)="changeDataLabelOptions()"
    >
    </po-checkbox-group>
  }
</form>

<po-divider class="po-md-12" p-label="Chart series"></po-divider>

<form #chartSeries="ngForm">
  <div class="po-row">
    <po-switch
      class="po-md-3"
      name="switch"
      p-label="Gauge Type"
      [(ngModel)]="isTypeGauge"
      (p-change)="changeSwitchGauge($event)"
    >
    </po-switch>

    <po-switch
      class="po-md-3"
      name="radar"
      p-label="Radar Type"
      [(ngModel)]="isTypeRadar"
      (p-change)="changeSwitchRadar($event)"
    >
    </po-switch>

    @if (isTypeGauge) {
      <po-number
        class="po-md-4"
        p-label="Value Gauge"
        name="valueGauge"
        [(ngModel)]="valueGauge"
        (p-change)="changeValueGauge($event)"
      ></po-number>
    }

    @if (isTypeRadar) {
      <po-radio-group
        class="po-md-3"
        name="radioShapeOption"
        p-label="ShapeOption"
        [p-options]="optionsShapeOption"
        [(ngModel)]="selectedShapeOption"
      >
      </po-radio-group>

      <po-switch name="splitArea" class="po-md-1" p-label="splitArea" [(ngModel)]="selectedSplitArea"> </po-switch>

      <po-switch name="areaStyle" class="po-md-1" p-label="areaStyle" [(ngModel)]="selectedAreaStyle"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-input class="po-md-4" name="label" p-label="Label" [(ngModel)]="label"></po-input>

    @if (!isTypeGauge) {
      <po-input class="po-md-4" name="data" p-label="Data" p-help="Example: [25, 58, 83, 66] or 25" [(ngModel)]="data">
      </po-input>
    }

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-disabled]="disabledType"
      [p-options]="typeOptions"
      (p-change)="changeType($event)"
    >
    </po-select>

    <po-input
      class="po-md-4"
      name="tooltip"
      p-label="Tooltip"
      p-help="Custom Tooltip"
      [p-disabled]="disabledTooltip"
      [(ngModel)]="tooltip"
    ></po-input>

    <po-input class="po-md-4" name="color" p-label="Color" p-help="Custom Color" [(ngModel)]="color"></po-input>

    @if (type === 'bar' || serieType === 'bar' || type === 'column' || serieType === 'column') {
      <po-input
        class="po-md-4"
        name="stackGroupName"
        p-label="Stack Group Name"
        p-help="Custom Group Name"
        [(ngModel)]="stackGroupName"
      ></po-input>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="From" name="from" [(ngModel)]="fromGauge"></po-number>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="To" name="from" [(ngModel)]="toGauge"></po-number>
    }

    @if (!isTypeRadar) {
      <div class="po-row">
        <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()"> </po-button>
      </div>
    }
  </div>
</form>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Chart categories"></po-divider>
  <po-input
    name="categories"
    [class]="isTypeRadar ? 'po-md-3' : 'po-md-4'"
    [p-label]="isTypeRadar ? 'Indicators' : 'Categories'"
    [p-help]="isTypeRadar ? helpRadar : helpGeneric"
    [(ngModel)]="categories"
    (p-blur)="addCategories()"
  >
  </po-input>

  @if (isTypeRadar) {
    <po-number name="min" class="po-md-3" p-label="Min" [(ngModel)]="min"> </po-number>

    <po-number name="max" class="po-md-3" p-label="Max" [(ngModel)]="max"> </po-number>

    <po-input name="colorIndicator" class="po-md-3" p-label="Color" [(ngModel)]="colorIndicator"> </po-input>

    <div class="po-row">
      <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()" [p-disabled]="isTypeRadar && !categories">
      </po-button>
    </div>
  }
</div>
<form>
  <div class="po-row">
    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      p-label="minRange"
      [(ngModel)]="options.axis.minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      p-label="maxRange"
      [(ngModel)]="options.axis.maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      p-label="gridLines"
      [(ngModel)]="options.axis.gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      [(ngModel)]="options.axis.labelType"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-number
      class="po-md-4"
      name="paddingBottom"
      p-label="paddingBottom"
      [(ngModel)]="options.axis.paddingBottom"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingLeft"
      p-label="paddingLeft"
      [(ngModel)]="options.axis.paddingLeft"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingRight"
      p-label="paddingRight"
      [(ngModel)]="options.axis.paddingRight"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="rotateLegend"
      p-label="rotateLegend"
      [(ngModel)]="options.axis.rotateLegend"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      p-label="innerRadius"
      [(ngModel)]="options.innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="borderRadius"
      p-label="borderRadius"
      [(ngModel)]="options.borderRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-input
      class="po-md-4"
      name="firstColumnName"
      p-label="firstColumnName"
      [(ngModel)]="options.firstColumnName"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="textCenterGraph"
      p-label="textCenterGraph"
      [(ngModel)]="options.textCenterGraph"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="descriptionChart"
      p-label="descriptionChart"
      [(ngModel)]="options.descriptionChart"
      (p-blur)="addOptions()"
    ></po-input>

    <po-input
      class="po-md-4"
      name="subtitleGauge"
      p-label="subtitleGauge"
      [(ngModel)]="options.subtitleGauge"
      (p-blur)="addOptions()"
    >
    </po-input>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-4"
      name="headerGroup"
      p-label="Header"
      [p-columns]="2"
      [p-options]="optionsHeader"
      [(ngModel)]="selectedValuesHeader"
      (p-change)="changeHeaderOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="axisGroup"
      p-label="Axis"
      [p-columns]="2"
      [p-options]="optionsAxis"
      [(ngModel)]="selectedValuesAxis"
      (p-change)="changeAxisOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="dataZoomGroup"
      p-label="DataZoom"
      [p-columns]="2"
      [p-options]="optionsDataZoom"
      [(ngModel)]="selectedValuesDataZoom"
      (p-change)="changeDataZoomOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="fillPoints"
      p-label="FillPoints"
      [p-columns]="1"
      [p-options]="[{ value: 'fillPoints', label: 'fillPoints' }]"
      [(ngModel)]="selectedValuesFillPoints"
      (p-change)="changeFillPointsOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="legend"
      p-label="Legend"
      [p-options]="[{ label: 'legend', value: 'legend' }]"
      [(ngModel)]="selectedValuesLegend"
      (p-change)="changeLegendOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="roseType"
      p-label="RoseType"
      [p-options]="[{ label: 'roseType', value: 'roseType' }]"
      [(ngModel)]="selectedRoseType"
      (p-change)="changeRoseTypeOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="showFromToLegend"
      p-label="ShowFromToLegend"
      [p-options]="[{ label: 'showFromToLegend', value: 'showFromToLegend' }]"
      [(ngModel)]="selectedFromToLegend"
      (p-change)="changeShowFromToLegend()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="pointer"
      p-label="Pointer"
      [p-options]="[{ label: 'pointer', value: 'pointer' }]"
      [(ngModel)]="selectedPointer"
      (p-change)="changePointer()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="stacked"
      p-label="Stacked"
      [p-options]="[{ label: 'stacked', value: 'stacked' }]"
      [(ngModel)]="selectedStacked"
      (p-change)="changeStacked()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendVerticalPosition"
      p-label="LegendVerticalPosition"
      [p-options]="optionsLegendVerticalPosition"
      [(ngModel)]="selectedLegendVerticalPosition"
      (p-change)="changeLegendVerticalPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendPosition"
      p-label="LegendPosition"
      [p-options]="optionsLegendPosition"
      [(ngModel)]="selectedLegendPosition"
      (p-change)="changeLegendPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendType"
      p-label="LegendType"
      [p-options]="optionsLegendType"
      [(ngModel)]="selectedLegendType"
      (p-change)="changeLegendType()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioRendererOption"
      p-label="RendererOption"
      [p-options]="optionsRendererOption"
      [(ngModel)]="selectedRendererOption"
      (p-change)="changeRendererOption()"
    >
    </po-radio-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  color: string;
  stackGroupName: string;
  data;
  label: string;
  tooltip: string;
  type: PoChartType;
  serieType: PoChartType;
  valueGauge: number;
  fromGauge: number;
  toGauge: number;
  allCategories: Array<string> = [];
  radarConfig: any = {
    indicator: []
  };

  categories: string;
  min: number;
  max: number;
  colorIndicator: string;
  event: string;
  height: number;
  series: Array<PoChartSerie>;
  title: string;
  dataLabel: PoChartDataLabel;
  isTypeGauge = false;
  isTypeRadar = false;
  disabledTooltip = false;
  disabledType = false;
  selectedSplitArea = false;
  selectedAreaStyle = false;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      rotateLegend: undefined,
      showXAxis: undefined,
      showYAxis: undefined,
      showAxisDetails: undefined
    },
    header: {
      hideExpand: undefined,
      hideExportCsv: undefined,
      hideExportImage: undefined,
      hideTableDetails: undefined
    },
    dataZoom: undefined,
    fillPoints: undefined,
    firstColumnName: undefined,
    innerRadius: undefined,
    borderRadius: undefined,
    textCenterGraph: undefined,
    descriptionChart: undefined,
    subtitleGauge: undefined,
    legend: undefined,
    legendPosition: undefined,
    legendVerticalPosition: undefined,
    bottomDataZoom: undefined,
    rendererOption: undefined,
    pointer: undefined,
    stacked: undefined,
    roseType: undefined,
    showFromToLegend: undefined
  };

  selectedValuesDataLabel: Array<string> = [];
  selectedValuesAxis: Array<string> = [];
  selectedValuesHeader: Array<string> = [];
  selectedValuesDataZoom: Array<string> = [];
  selectedValuesFillPoints: Array<string> = [];
  selectedRoseType: Array<string> = [];
  selectedFromToLegend: Array<string> = [];
  selectedPointer: Array<string> = [];
  selectedStacked: Array<string> = [];
  selectedValuesLegend: Array<string> = ['legend'];
  selectedLegendVerticalPosition: PoChartOptions['legendVerticalPosition'] = 'bottom';
  selectedLegendPosition: PoChartOptions['legendPosition'] = 'center';
  selectedLegendType: PoChartOptions['legendPositionlegendType'] = 'plain';
  selectedRendererOption: PoChartOptions['rendererOption'] = 'canvas';
  selectedShapeOption = 'polygon';
  helpRadar = 'Example: ["Bold", "Keen", "Calm", "Wise"]';
  helpGeneric = 'Example: ["Jan", "Feb", "Mar", "Apr"]';

  optionsAxis = [
    { value: 'showXAxis', label: 'showXAxis' },
    { value: 'showYAxis', label: 'showYAxis' },
    { value: 'showAxisDetails', label: 'showAxisDetails' }
  ];

  optionsHeader = [
    { value: 'hideTableDetails', label: 'hideTableDetails' },
    { value: 'hideExpand', label: 'hideExpand' },
    { value: 'hideExportCsv', label: 'hideExportCsv' },
    { value: 'hideExportImage', label: 'hideExportImage' }
  ];

  optionsDataZoom = [
    { value: 'dataZoom', label: 'dataZoom' },
    { value: 'bottomDataZoom', label: 'bottomDataZoom' }
  ];

  optionsLegendVerticalPosition = [
    { value: 'top', label: 'top' },
    { value: 'bottom', label: 'bottom' }
  ];

  optionsLegendPosition = [
    { value: 'left', label: 'left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'right' }
  ];

  optionsLegendType = [
    { value: 'plain', label: 'plain' },
    { value: 'scroll', label: 'scroll' }
  ];

  optionsRendererOption = [
    { value: 'canvas', label: 'canvas' },
    { value: 'svg', label: 'svg' }
  ];

  optionsShapeOption = [
    { value: 'polygon', label: 'polygon' },
    { value: 'circle', label: 'circle' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Line', value: PoChartType.Line },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Bar', value: PoChartType.Bar },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Gauge', value: PoChartType.Gauge },
    { label: 'Radar', value: PoChartType.Radar }
  ];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  changeDataLabelOptions() {
    this.dataLabel = {
      ...this.dataLabel,
      fixed: this.selectedValuesDataLabel.includes('fixed')
    };
  }

  changeAxisOptions() {
    const newAxis = {
      showXAxis: this.selectedValuesAxis.includes('showXAxis'),
      showYAxis: this.selectedValuesAxis.includes('showYAxis'),
      showAxisDetails: this.selectedValuesAxis.includes('showAxisDetails')
    };

    this.options = {
      ...this.options,
      axis: newAxis
    };
  }

  changeHeaderOptions() {
    const newHeader = {
      hideExpand: this.selectedValuesHeader.includes('hideExpand'),
      hideExportCsv: this.selectedValuesHeader.includes('hideExportCsv'),
      hideExportImage: this.selectedValuesHeader.includes('hideExportImage'),
      hideTableDetails: this.selectedValuesHeader.includes('hideTableDetails')
    };

    this.options = {
      ...this.options,
      header: newHeader
    };
  }

  changeDataZoomOptions() {
    this.options = {
      ...this.options,
      dataZoom: this.selectedValuesDataZoom.includes('dataZoom'),
      bottomDataZoom: this.selectedValuesDataZoom.includes('bottomDataZoom')
    };

    this.options = { ...this.options };
  }

  changeFillPointsOptions() {
    this.options = {
      ...this.options,
      fillPoints: this.selectedValuesFillPoints.includes('fillPoints')
    };
  }

  changeLegendOptions() {
    this.options = {
      ...this.options,
      legend: this.selectedValuesLegend.includes('legend')
    };
  }

  changeRoseTypeOptions() {
    this.options = {
      ...this.options,
      roseType: this.selectedRoseType.includes('roseType')
    };
  }

  changeShowFromToLegend() {
    this.options = {
      ...this.options,
      showFromToLegend: this.selectedFromToLegend.includes('showFromToLegend')
    };
  }

  changePointer() {
    this.options = {
      ...this.options,
      pointer: this.selectedPointer.includes('pointer')
    };
  }

  changeStacked() {
    this.options = {
      ...this.options,
      stacked: this.selectedStacked.includes('stacked')
    };
  }

  changeLegendVerticalPosition() {
    this.options = {
      ...this.options,
      legendVerticalPosition: this.selectedLegendVerticalPosition
    };
  }

  changeLegendPosition() {
    this.options = {
      ...this.options,
      legendPosition: this.selectedLegendPosition
    };
  }

  changeLegendType() {
    this.options = {
      ...this.options,
      legendType: this.selectedLegendType
    };
  }

  changeRendererOption() {
    this.options = {
      ...this.options,
      rendererOption: this.selectedRendererOption
    };
  }

  changeType(event) {
    if (event === PoChartType.Gauge) {
      this.isTypeGauge = true;
      this.changeSwitchGauge(true);
    }
    if (event === PoChartType.Radar) {
      this.isTypeRadar = true;
      this.changeSwitchRadar(true);
    }
  }

  changeSwitchGauge(event) {
    this.restore(true);
    this.disabledTooltip = event;
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Gauge;
      this.type = PoChartType.Gauge;
      this.isTypeRadar = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeSwitchRadar(event) {
    this.restore(true, true);
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Radar;
      this.type = PoChartType.Radar;
      this.isTypeGauge = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeValueGauge(event) {
    if (this.series?.length === 1 && !this.toGauge) {
      this.series[0].data = event;
      this.series = [...this.series];
    }
  }

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addIndicators() {
    if (!this.categories) {
      this.radarConfig = { indicator: [] };
      return;
    }

    const arr = this.convertToArray(this.categories);

    this.radarConfig = {
      indicator: arr.map(item => ({ name: item, min: this.min, max: this.max, color: this.colorIndicator })),
      shape: this.selectedShapeOption,
      splitArea: this.selectedSplitArea
    };
  }

  addData() {
    const type = this.serieType ?? this.type;

    let data;

    if (type === 'radar') {
      const arr = this.convertToArray(this.data);
      data = arr.map(v => Number(v));
      this.addIndicators();
    } else {
      data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    }

    const serie = {
      label: this.label,
      data,
      tooltip: this.tooltip,
      ...(this.color ? { color: this.color } : {}),
      type,
      stackGroupName: this.stackGroupName,
      from: this.fromGauge,
      to: this.toGauge,
      areaStyle: this.selectedAreaStyle ?? undefined
    };

    this.series = [...this.series, serie];

    this.label = undefined;
    this.color = undefined;
    this.data = undefined;
    this.tooltip = undefined;
    this.stackGroupName = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;

    if (!this.isTypeGauge) {
      this.type = undefined;
    }
  }

  isTypeGrid(): boolean {
    return (
      this.type === PoChartType.Line ||
      this.type === PoChartType.Area ||
      this.type === PoChartType.Column ||
      this.type === PoChartType.Bar ||
      this.type === PoChartType.Radar
    );
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore(fromGauge = false, keepRadar = false) {
    this.color = undefined;
    this.data = undefined;
    this.label = undefined;
    this.tooltip = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.valueGauge = undefined;
    this.allCategories = [];
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.disabledTooltip = false;
    this.disabledType = false;

    this.dataLabel = { fixed: false };

    this.options = {
      ...this.options,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        rotateLegend: undefined,
        showXAxis: undefined,
        showYAxis: undefined,
        showAxisDetails: undefined
      },
      header: {
        hideExpand: undefined,
        hideExportCsv: undefined,
        hideExportImage: undefined,
        hideTableDetails: undefined
      },
      dataZoom: undefined,
      fillPoints: undefined,
      firstColumnName: undefined,
      innerRadius: undefined,
      borderRadius: undefined,
      textCenterGraph: undefined,
      descriptionChart: undefined,
      subtitleGauge: undefined,
      legend: undefined,
      legendPosition: undefined,
      legendVerticalPosition: undefined,
      bottomDataZoom: undefined,
      rendererOption: undefined,
      pointer: undefined,
      stacked: undefined,
      roseType: undefined,
      showFromToLegend: undefined
    };

    this.selectedValuesDataLabel = [];
    this.selectedValuesAxis = [];
    this.selectedValuesHeader = [];
    this.selectedValuesDataZoom = [];
    this.selectedValuesFillPoints = [];
    this.selectedValuesLegend = [];
    this.selectedRoseType = [];

    if (!fromGauge) {
      this.selectedFromToLegend = [];
      this.selectedPointer = [];
      this.isTypeGauge = false;
    }

    if (!keepRadar) {
      this.isTypeRadar = false;
      this.categories = undefined;
      this.radarConfig = [];
    }
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-labs"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,rt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ye],encapsulation:2})}return r})();var _e=(()=>{class r{poAlert=f(Vde);participationByCountryInWorldExportsType=$o.Line;evolutionOfCoffeeAndSomeCompetitorsType=$o.Column;coffeConsumingChartType=$o.Donut;consumptionPerCapitaType=$o.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:$o.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:$o.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:$o.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:$o.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"},{label:"Germany",data:5.2,tooltip:"Germany (Europe)"},{label:"Denmark",data:5.1,tooltip:"Denmark (Europe)"},{label:"Sweden",data:4.9,tooltip:"Sweden (Europe)"},{label:"Switzerland",data:4.8,tooltip:"Switzerland (Europe)"},{label:"Belgium",data:4.6,tooltip:"Belgium (Europe)"},{label:"Canada",data:4.5,tooltip:"Canada (North America)"},{label:"Brazil",data:4.3,tooltip:"Brazil (South America)"},{label:"Italy",data:4.2,tooltip:"Italy (Europe)"},{label:"France",data:4.1,tooltip:"France (Europe)"},{label:"USA",data:4,tooltip:"USA (North America)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:$o.Column},{label:"2017",data:[93,52,18],type:$o.Column},{label:"2020",data:[95,21,-17],type:$o.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:$o.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:true,borderRadius:8};coffeeConsumptionOptions={legendType:"scroll"};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:_3.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:true};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:_3.Number},dataZoom:true};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:true}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank");}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}});}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:false,features:[we$1([Vde])],decls:28,vars:22,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 15 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-options","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(d,i){d&1&&(Il(0,"div",0)(1,"div",1)(2,"div",0),zl(3,"po-chart",2)(4,"po-chart",3),og()(),Il(5,"div",1),zl(6,"po-chart",4),og(),Il(7,"div",5)(8,"po-chart",6),ft$1("p-series-click",function(m){return i.searchMore(m)}),og(),Il(9,"po-chart",7),ft$1("p-series-click",function(m){return i.showMeTheDates(m)}),og()(),Il(10,"div",0),zl(11,"po-chart",8),Il(12,"div",9)(13,"po-widget",10)(14,"div",11),Qx(15,"66 billion"),og(),Il(16,"div",12),Qx(17,"cups of coffee are consumed per year in U.S."),og()(),Il(18,"po-widget",10)(19,"div",11),Qx(20,"2nd most"),og(),Il(21,"div",12),Qx(22,"traded commodity in the world second to Oil."),og()()()()(),Il(23,"div",0)(24,"po-container",13)(25,"div",14),Qx(26,"Top 10 Largest Coffee Chains in the World"),og(),zl(27,"po-table",15),og()()),d&2&&(Lp(3),nw("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),Lp(),nw("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),Lp(2),nw("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),Lp(2),nw("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),Lp(),nw("p-series",i.coffeeConsumption)("p-options",i.coffeeConsumptionOptions)("p-type",i.coffeConsumingChartType),Lp(2),nw("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),Lp(16),nw("p-items",i.items)("p-hide-table-search",false));},dependencies:[dde,dc,E3,yNe],encapsulation:2,changeDetection:1})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart - Coffee Ranking"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-options]="coffeeProductionOptions"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 15 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-options]="coffeeConsumptionOptions"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  private poAlert = inject(PoDialogService);

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' },
    { label: 'Germany', data: 5.2, tooltip: 'Germany (Europe)' },
    { label: 'Denmark', data: 5.1, tooltip: 'Denmark (Europe)' },
    { label: 'Sweden', data: 4.9, tooltip: 'Sweden (Europe)' },
    { label: 'Switzerland', data: 4.8, tooltip: 'Switzerland (Europe)' },
    { label: 'Belgium', data: 4.6, tooltip: 'Belgium (Europe)' },
    { label: 'Canada', data: 4.5, tooltip: 'Canada (North America)' },
    { label: 'Brazil', data: 4.3, tooltip: 'Brazil (South America)' },
    { label: 'Italy', data: 4.2, tooltip: 'Italy (Europe)' },
    { label: 'France', data: 4.1, tooltip: 'France (Europe)' },
    { label: 'USA', data: 4.0, tooltip: 'USA (North America)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: [35, 32, 25, 29, 33, 33],
      color: 'color-10',
      tooltip: params =>
        \`Pa\xEDs: \${params.seriesName}<br><b>Ano:</b> \${params.name}<br><b>Exporta\xE7\xF5es:</b> \${params.value}%\`
    },
    {
      label: 'Vietnam',
      data: [15, 17, 23, 19, 22, 18],
      tooltip: 'Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%'
    },
    {
      label: 'Colombia',
      data: [8, 7, 6, 9, 10, 11],
      tooltip: 'Pa\xEDs: {seriesName}\\nAno: {name}\\nParticipa\xE7\xE3o: {value}%'
    },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 1796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  coffeeProductionOptions: PoChartOptions = {
    roseType: true,
    borderRadius: 8
  };

  coffeeConsumptionOptions: PoChartOptions = {
    legendType: 'scroll'
  };

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number,
      rotateLegend: 45
    },
    legendVerticalPosition: 'top'
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    },
    fillPoints: true
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    },
    dataZoom: true
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
      showXAxis: true
    }
  };

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-coffee-ranking"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,pt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,_e],encapsulation:2})}return r})();var Te=(()=>{class r{typeBar=$o.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:true};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked"]],standalone:false,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(d,i){d&1&&(Il(0,"po-container")(1,"div",0),Qx(2,"Energy and Climate Analysis"),og(),Il(3,"div",1),zl(4,"po-chart",2)(5,"po-chart",3),og()()),d&2&&(Lp(4),nw("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),Lp(),nw("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar));},dependencies:[dde,dc],encapsulation:2,changeDetection:1})}return r})();var ct=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart - Stacked"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-chart
      class="po-lg-6"
      p-title="Average Temperature by Region"
      [p-height]="500"
      [p-options]="optionsColumn"
      [p-categories]="categoriesColumn"
      [p-series]="seriesColumn"
    >
    </po-chart>

    <po-chart
      class="po-lg-6"
      p-title="Energy Consumption by Region"
      [p-type]="typeBar"
      [p-height]="500"
      [p-options]="optionsBar"
      [p-categories]="categoriesBar"
      [p-series]="seriesBar"
    >
    </po-chart>
  </div>
</po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-stacked',
  templateUrl: './sample-po-chart-stacked.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartStackedComponent {
  typeBar = PoChartType.Bar;

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      gridLines: 7
    }
  };

  categoriesColumn: Array<string> = ['North Region', 'Central Region', 'South Region'];

  seriesColumn: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [51, 40, 42], stackGroupName: 'group1' },
    { label: 'Year 2017', data: [53, 52, 18] },
    { label: 'Year 2020', data: [55, 21, -17], stackGroupName: 'group1' },
    { label: 'Year 2023', data: [35, 27, 23], stackGroupName: 'group2' },
    { label: 'Year 2026', data: [45, 34, 17], stackGroupName: 'group2' },
    { label: 'Year 2029', data: [23, 63, 56], stackGroupName: 'group1' }
  ];

  optionsBar: PoChartOptions = {
    stacked: true
  };

  categoriesBar: Array<string> = [
    'North Region',
    'Central Region',
    'South Region',
    'Southeast Region',
    'Northeast Region'
  ];

  seriesBar: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [199, 340, 247, 236, 222] },
    { label: 'Year 2017', data: [221, 252, 225, 241, 225] },
    { label: 'Year 2020', data: [229, 213, 196, 212, 237] },
    { label: 'Year 2023', data: [240, 237, 230, 223, 231] },
    { label: 'Year 2026', data: [235, 270, 239, 255, 242] }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-stacked"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ct,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Te],encapsulation:2})}return r})();var Le=(()=>{class r{type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary"]],standalone:false,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(d,i){d&1&&(Il(0,"po-container")(1,"div",0),Qx(2,"Sales Performance"),og(),Il(3,"div",1)(4,"div",2),zl(5,"po-chart",3),og(),Il(6,"div",2),zl(7,"po-chart",4),og()()()),d&2&&(Lp(5),nw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),Lp(2),nw("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges));},dependencies:[dde,dc],encapsulation:2,changeDetection:1})}return r})();var ht=r=>({"docs-sample-code-tabs":r}),Me=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart - Summary"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
    <div class="po-lg-6">
      <po-chart
        p-title="Sales performance"
        [p-type]="type"
        [p-options]="optionsRange"
        [p-value-gauge-multiple]="50"
        [p-series]="salesRanges"
      ></po-chart>
    </div>
  </div>
</po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-summary',
  templateUrl: './sample-po-chart-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartSummaryComponent {
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-summary"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ht,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Le],encapsulation:2})}return r})();var ke=(()=>{class r{participationByCountryInWorldExportsType=$o.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:true};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:false,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(d,i){d&1&&(Il(0,"div",0),zl(1,"po-chart",1),og()),d&2&&(Lp(),nw("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel));},dependencies:[dde],encapsulation:2,changeDetection:1})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),De=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart - World Exports"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-world-exports"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,bt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ke],encapsulation:2})}return r})();var Ve=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:true,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:true};type=$o.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:true};static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:false,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(d,i){d&1&&(Il(0,"div",0),zl(1,"po-chart",1)(2,"po-chart",2),og()),d&2&&(Lp(),nw("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),Lp(),nw("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions));},dependencies:[dde],encapsulation:2,changeDetection:1})}return r})();var ft=r=>({"docs-sample-code-tabs":r}),Ae=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Chart - Radar"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-chart
    class="po-md-6"
    p-title="Technology Skill Assessment"
    [p-categories]="radarConfig"
    [p-type]="type"
    [p-series]="series"
  >
  </po-chart>

  <po-chart
    class="po-md-6"
    p-title="Genre Popularity"
    p-type="radar"
    [p-categories]="radarConfigMovies"
    [p-series]="seriesMovies"
    [p-options]="radarOptions"
  >
  </po-chart>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoChartOptions, PoChartType } from '@po-ui/ng-components';
import { PoChartRadarOptions } from '@po-ui/ng-components/lib/components/po-chart/interfaces/po-chart-radar-options.interface';

@Component({
  selector: 'sample-po-chart-technology-skill',
  templateUrl: './sample-po-chart-technology-skill.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoChartTechnologySkillComponent {
  radarConfig: PoChartRadarOptions = {
    indicator: [
      { name: 'Frontend Development', max: 100 },
      { name: 'Backend Development', max: 100 },
      { name: 'Database Design', max: 100 },
      { name: 'Cloud & DevOps', max: 100 },
      { name: 'Testing & Quality', max: 100 },
      { name: 'System Architecture', max: 100 }
    ],
    splitArea: true,
    shape: 'circle'
  };

  radarConfigMovies: PoChartRadarOptions = {
    indicator: [
      { name: 'Storytelling', max: 100 },
      { name: 'Characters', max: 100 },
      { name: 'Visual Effects', max: 100 },
      { name: 'Soundtrack', max: 100 },
      { name: 'Pacing', max: 100 },
      { name: 'Rewatchability', max: 100 }
    ],
    splitArea: true
  };

  type = PoChartType.Radar;

  series = [
    {
      label: 'Team Alpha',
      data: [82, 50, 78, 70, 88, 81]
    },
    {
      label: 'Team Beta',
      data: [65, 83, 72, 89, 60, 74]
    },
    {
      label: 'Team Delta',
      data: [45, 21, 33, 65, 24, 58]
    },
    {
      label: 'Team Omega',
      data: [60, 49, 19, 58, 94, 59]
    }
  ];

  seriesMovies = [
    {
      label: 'Sci-Fi',
      data: [60, 53, 45, 58, 42, 55]
    },
    {
      label: 'Fantasy',
      data: [53, 80, 66, 71, 75, 88]
    },
    {
      label: 'Drama',
      data: [92, 31, 98, 60, 88, 72]
    },
    {
      label: 'Thriller',
      data: [44, 56, 75, 84, 90, 80]
    }
  ];

  radarOptions: PoChartOptions = {
    areaStyle: true
  };
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-chart-technology-skill"),og(),zl(23,"hr")),d&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ft,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ve],encapsulation:2})}return r})();var Re=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-chart-doc"]],standalone:false,decls:2833,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'plain'"],["pan","",1,"docs-api-property-type","'scroll'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(d,i){d&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoChartModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-chart"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoChartComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"O "),Il(18,"code"),Qx(19,"po-chart"),og(),Qx(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),og(),Il(21,"p"),Qx(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),og(),Il(23,"p"),Qx(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),og(),Il(25,"p"),Qx(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),Il(27,"em"),Qx(28,"mouse"),og(),Qx(29," sobre o elemento."),og(),Il(30,"h4"),Qx(31,"Guia de uso para Gr\xE1ficos"),og(),Il(32,"blockquote")(33,"p"),Qx(34,"Veja nosso "),Il(35,"a",6),Qx(36,"guia de uso para gr\xE1ficos"),og(),Qx(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),og()(),Il(38,"h4"),Qx(39,"Tokens customiz\xE1veis"),og(),Il(40,"p"),Qx(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(42,"blockquote")(43,"p"),Qx(44,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(45,"a",7),Qx(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(47,"."),og()(),Il(48,"table")(49,"thead")(50,"tr")(51,"th"),Qx(52,"Propriedade"),og(),Il(53,"th"),Qx(54,"Descri\xE7\xE3o"),og(),Il(55,"th"),Qx(56,"Valor Padr\xE3o"),og()()(),Il(57,"tbody")(58,"tr")(59,"td")(60,"strong"),Qx(61,"Chart (po-chart)"),og()(),zl(62,"td")(63,"td"),og(),Il(64,"tr")(65,"td")(66,"code"),Qx(67,"--background-color-grid"),og()(),Il(68,"td"),Qx(69,"Cor de background dos gr\xE1ficos"),og(),Il(70,"td")(71,"code"),Qx(72,"var(--color-neutral-light-00)"),og()()(),Il(73,"tr")(74,"td")(75,"code"),Qx(76,"--color-description-chart"),og()(),Il(77,"td"),Qx(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--color-neutral-dark-70)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--font-family-description-chart"),og()(),Il(86,"td"),Qx(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),og(),Il(88,"td")(89,"code"),Qx(90,"var(--font-family-theme)"),og()()(),Il(91,"tr")(92,"td")(93,"code"),Qx(94,"--font-size-description-chart"),og()(),Il(95,"td"),Qx(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),og(),Il(97,"td")(98,"code"),Qx(99,"var(--font-size-sm)"),og()()(),Il(100,"tr")(101,"td")(102,"code"),Qx(103,"--font-weight-description-chart"),og()(),Il(104,"td"),Qx(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),og(),Il(106,"td")(107,"code"),Qx(108,"var(--font-weight-normal)"),og()()(),Il(109,"tr")(110,"td")(111,"strong"),Qx(112,"Header (po-chart .po-chart-header )"),og()(),zl(113,"td")(114,"td"),og(),Il(115,"tr")(116,"td")(117,"code"),Qx(118,"--background-color"),og()(),Il(119,"td"),Qx(120,"Cor de background do cabe\xE7alho"),og(),Il(121,"td")(122,"code"),Qx(123,"var(--color-neutral-light-00)"),og()()(),Il(124,"tr")(125,"td")(126,"code"),Qx(127,"--color"),og()(),Il(128,"td"),Qx(129,"Cor da fonte do cabe\xE7alho"),og(),Il(130,"td")(131,"code"),Qx(132,"var(--color-neutral-dark-70)"),og()()(),Il(133,"tr")(134,"td")(135,"code"),Qx(136,"--font-family"),og()(),Il(137,"td"),Qx(138,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(139,"td")(140,"code"),Qx(141,"var(--font-family-theme)"),og()()(),Il(142,"tr")(143,"td")(144,"code"),Qx(145,"--font-size-title"),og()(),Il(146,"td"),Qx(147,"Tamanho da fonte"),og(),Il(148,"td")(149,"code"),Qx(150,"var(--font-size-default)"),og()()(),Il(151,"tr")(152,"td")(153,"code"),Qx(154,"--font-size-icons"),og()(),Il(155,"td"),Qx(156,"Tamanho dos \xEDcones"),og(),Il(157,"td")(158,"code"),Qx(159,"var(--font-size-md)"),og()()(),Il(160,"tr")(161,"td")(162,"code"),Qx(163,"--font-weight"),og()(),Il(164,"td"),Qx(165,"Peso da fonte"),og(),Il(166,"td")(167,"code"),Qx(168,"var(--font-weight-bold)"),og()()(),Il(169,"tr")(170,"td")(171,"strong"),Qx(172,"Chart (po-chart .po-chart)"),og()(),zl(173,"td")(174,"td"),og(),Il(175,"tr")(176,"td")(177,"code"),Qx(178,"--color-grid"),og()(),Il(179,"td"),Qx(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),og(),Il(181,"td")(182,"code"),Qx(183,"var(--color-neutral-light-20)"),og()()(),Il(184,"tr")(185,"td")(186,"code"),Qx(187,"--font-family-grid"),og()(),Il(188,"td"),Qx(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),og(),Il(190,"td")(191,"code"),Qx(192,"var(--font-family-theme)"),og()()(),Il(193,"tr")(194,"td")(195,"code"),Qx(196,"--font-size-grid"),og()(),Il(197,"td"),Qx(198,"Tamanho da fonte usada nos valores dos eixos"),og(),Il(199,"td")(200,"code"),Qx(201,"var(--font-size-xs)"),og()()(),Il(202,"tr")(203,"td")(204,"code"),Qx(205,"--font-weight-grid"),og()(),Il(206,"td"),Qx(207,"Peso da fonte usada nos valores dos eixos"),og(),Il(208,"td")(209,"code"),Qx(210,"var(--font-weight-normal)"),og()()(),Il(211,"tr")(212,"td")(213,"code"),Qx(214,"--color-legend"),og()(),Il(215,"td"),Qx(216,"Cor da fonte da legenda"),og(),Il(217,"td")(218,"code"),Qx(219,"var(--color-neutral-dark-70)"),og()()(),Il(220,"tr")(221,"td")(222,"code"),Qx(223,"--color-legend-scroll-icon-active"),og()(),Il(224,"td"),Qx(225,"Cor do \xEDcone de scroll da legenda no estado ativo, pro tipo "),Il(226,"code"),Qx(227,"scroll"),og()(),Il(228,"td")(229,"code"),Qx(230,"var(--color-action-default)"),og()()(),Il(231,"tr")(232,"td")(233,"code"),Qx(234,"--color-legend-scroll-icon-inactive"),og()(),Il(235,"td"),Qx(236,"Cor do \xEDcone de scroll da legenda no estado inativo, pro tipo "),Il(237,"code"),Qx(238,"scroll"),og()(),Il(239,"td")(240,"code"),Qx(241,"var(--color-action-disabled)"),og()()(),Il(242,"tr")(243,"td")(244,"code"),Qx(245,"--border-radius-bar"),og()(),Il(246,"td"),Qx(247,"Tamanho da borda nos graficos "),Il(248,"code"),Qx(249,"Bar"),og(),Qx(250," e "),Il(251,"code"),Qx(252,"Column"),og()(),Il(253,"td")(254,"code"),Qx(255,"var(--border-radius-none)"),og()()(),Il(256,"tr")(257,"td")(258,"code"),Qx(259,"--border-color"),og()(),Il(260,"td"),Qx(261,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),Il(262,"code"),Qx(263,"Donut"),og(),Qx(264," e "),Il(265,"code"),Qx(266,"Pie"),og()(),Il(267,"td")(268,"code"),Qx(269,"var(--color-neutral-light-00)"),og()()(),Il(270,"tr")(271,"td")(272,"code"),Qx(273,"--color-hightlight-value"),og()(),Il(274,"td"),Qx(275,"Cor do valor de destaque nos Gr\xE1ficos "),Il(276,"code"),Qx(277,"Donut"),og(),Qx(278," e "),Il(279,"code"),Qx(280,"Gauge"),og()(),Il(281,"td")(282,"code"),Qx(283,"var(--color-neutral-dark-70)"),og()()(),Il(284,"tr")(285,"td")(286,"code"),Qx(287,"--font-family-hightlight-value"),og()(),Il(288,"td"),Qx(289,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),Il(290,"code"),Qx(291,"Donut"),og(),Qx(292," e "),Il(293,"code"),Qx(294,"Gauge"),og()(),Il(295,"td")(296,"code"),Qx(297,"var(--font-family-theme)"),og()()(),Il(298,"tr")(299,"td")(300,"code"),Qx(301,"--font-weight-hightlight-value"),og()(),Il(302,"td"),Qx(303,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),Il(304,"code"),Qx(305,"Donut"),og(),Qx(306," e "),Il(307,"code"),Qx(308,"Gauge"),og()(),Il(309,"td")(310,"code"),Qx(311,"var(--font-weight-bold)"),og()()(),Il(312,"tr")(313,"td")(314,"code"),Qx(315,"--color-base-gauge"),og()(),Il(316,"td"),Qx(317,"Cor da base do gr\xE1fico "),Il(318,"code"),Qx(319,"Gauge"),og()(),Il(320,"td")(321,"code"),Qx(322,"var(--color-neutral-light-20)"),og()()(),Il(323,"tr")(324,"td")(325,"code"),Qx(326,"--color-gauge-pointer-color"),og()(),Il(327,"td"),Qx(328,"Cor do ponteiro do gr\xE1fico "),Il(329,"code"),Qx(330,"Gauge"),og()(),Il(331,"td")(332,"code"),Qx(333,"var(--color-neutral-dark-70)"),og()()(),Il(334,"tr")(335,"td")(336,"code"),Qx(337,"--color-chart-line-point-fill"),og()(),Il(338,"td"),Qx(339,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),Il(340,"code"),Qx(341,"Line"),og(),Qx(342," e "),Il(343,"code"),Qx(344,"Area"),og()(),Il(345,"td")(346,"code"),Qx(347,"var(--color-neutral-light-00)"),og()()(),Il(348,"tr")(349,"td")(350,"code"),Qx(351,"--border-color-radar"),og()(),Il(352,"td"),Qx(353,"Cor do eixo da grid do gr\xE1fico "),Il(354,"code"),Qx(355,"Radar"),og()(),Il(356,"td")(357,"code"),Qx(358,"var(--color-neutral-light-30)"),og()()(),Il(359,"tr")(360,"td")(361,"code"),Qx(362,"--color-background-zebra"),og()(),Il(363,"td"),Qx(364,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),Il(365,"code"),Qx(366,"Radar"),og()(),Il(367,"td")(368,"code"),Qx(369,"var(--color-neutral-light-10)"),og()()(),Il(370,"tr")(371,"td")(372,"code"),Qx(373,"--color-background-line"),og()(),Il(374,"td"),Qx(375,"Cor das \xE1reas entre as faixas zebradas da grade do "),Il(376,"code"),Qx(377,"Radar"),og()(),Il(378,"td")(379,"code"),Qx(380,"none"),og()()(),Il(381,"tr")(382,"td")(383,"strong"),Qx(384,"Wrapper (.po-chart-container-gauge)"),og()(),zl(385,"td")(386,"td"),og(),Il(387,"tr")(388,"td")(389,"code"),Qx(390,"--background-color-container-gauge"),og()(),Il(391,"td"),Qx(392,"Cor de background do container do gauge"),og(),Il(393,"td")(394,"code"),Qx(395,"var(--color-neutral-light-00)"),og()()()()()(),Il(396,"div",8)(397,"h4",9),Qx(398,"Seletor"),og(),Il(399,"pre",10),Qx(400,`<po-chart
    p-categories="Array<string> | PoChartRadarOptions"
    p-custom-actions="Array<PoPopupAction>"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-literals="PoChartLiterals"
    p-options="PoChartOptions"
    p-series="Array<PoChartSerie>"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType"
    p-value-gauge-multiple="number" >
</po-chart>
`),og()(),Il(401,"h4",11),Qx(402,"Propriedades"),og(),Il(403,"table",12)(404,"tr",13)(405,"th",14),Qx(406,"Nome"),og(),Il(407,"th",14),Qx(408,"Tipo"),og(),Il(409,"th",14),Qx(410,"Padr\xE3o"),og(),Il(411,"th",14),Qx(412,"Descri\xE7\xE3o"),og()(),Il(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Qx(417," p-categories"),zl(418,"br"),og()()(),Il(419,"td",19)(420,"code",20),Qx(421,"Array<string> "),og(),Il(422,"code",21),Qx(423," PoChartRadarOptions"),og()(),Il(424,"td",22),Qx(425,"-"),og(),Il(426,"td",23)(427,"em")(428,"strong"),Qx(429,"(opcional)"),og()(),Il(430,"p"),Qx(431,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),og(),Il(432,"p"),Qx(433,"Para gr\xE1ficos dos tipos "),Il(434,"em"),Qx(435,"bar"),og(),Qx(436,", "),Il(437,"em"),Qx(438,"area"),og(),Qx(439,", "),Il(440,"em"),Qx(441,"column"),og(),Qx(442," e "),Il(443,"em"),Qx(444,"line"),og(),Qx(445,", representa os nomes das categorias exibidas no eixo."),og(),Il(446,"p"),Qx(447,"Para gr\xE1ficos do tipo "),Il(448,"em"),Qx(449,"radar"),og(),Qx(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),Il(451,"code"),Qx(452,"Radar"),og(),Qx(453,"."),og(),Il(454,"blockquote")(455,"p"),Qx(456,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),og()(),Il(457,"blockquote")(458,"p"),Qx(459,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),og()()()(),Il(460,"tr",15)(461,"td",16)(462,"div",17)(463,"span",18),Qx(464," p-custom-actions"),zl(465,"br"),og()()(),Il(466,"td",19)(467,"code",24),Qx(468,"Array<PoPopupAction>"),og()(),Il(469,"td",22),Qx(470,"-"),og(),Il(471,"td",23)(472,"em")(473,"strong"),Qx(474,"(opcional)"),og()(),Il(475,"p"),Qx(476,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),og()()(),Il(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),Qx(481," p-data-label"),zl(482,"br"),og()()(),Il(483,"td",19)(484,"code",25),Qx(485,"PoChartDataLabel"),og()(),Il(486,"td",22),Qx(487,"-"),og(),Il(488,"td",23)(489,"em")(490,"strong"),Qx(491,"(opcional)"),og()(),Il(492,"p"),Qx(493,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),og(),Il(494,"p"),Qx(495,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),og(),Il(496,"ul")(497,"li"),Qx(498,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),og(),Il(499,"li"),Qx(500,"O "),Il(501,"em"),Qx(502,"tooltip"),og(),Qx(503," n\xE3o ser\xE1 exibido."),og(),Il(504,"li"),Qx(505,"Os marcadores ("),Il(506,"em"),Qx(507,"bullets"),og(),Qx(508,") ter\xE3o seu estilo ajustado."),og(),Il(509,"li"),Qx(510,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),og()(),Il(511,"blockquote")(512,"p"),Qx(513,"Dispon\xEDvel para gr\xE1ficos do tipo "),Il(514,"code"),Qx(515,"line"),og(),Qx(516," e "),Il(517,"code"),Qx(518,"radar"),og(),Qx(519,"."),og()(),Il(520,"h4"),Qx(521,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(522,"pre")(523,"code",26),Qx(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),og()()()(),Il(525,"tr",15)(526,"td",16)(527,"div",17)(528,"span",18),Qx(529," p-height"),zl(530,"br"),og()()(),Il(531,"td",19)(532,"code",27),Qx(533,"number"),og()(),Il(534,"td",22)(535,"p")(536,"code"),Qx(537,"400"),og()()(),Il(538,"td",23)(539,"em")(540,"strong"),Qx(541,"(opcional)"),og()(),Il(542,"p"),Qx(543,"Define a altura do gr\xE1fico em px."),og(),Il(544,"blockquote")(545,"p"),Qx(546,"No caso do tipo "),Il(547,"code"),Qx(548,"Gauge"),og(),Qx(549,", o valor padr\xE3o \xE9 "),Il(550,"code"),Qx(551,"300"),og(),Qx(552," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),og()()()(),Il(553,"tr",15)(554,"td",16)(555,"div",17)(556,"span",18),Qx(557," p-literals"),zl(558,"br"),og()()(),Il(559,"td",19)(560,"code",28),Qx(561,"PoChartLiterals"),og()(),Il(562,"td",22),Qx(563,"-"),og(),Il(564,"td",23)(565,"em")(566,"strong"),Qx(567,"(opcional)"),og()(),Il(568,"p"),Qx(569,"Objeto com as literais usadas no "),Il(570,"code"),Qx(571,"po-chart"),og(),Qx(572,"."),og(),Il(573,"p"),Qx(574,"Para utilizar basta passar a literal que deseja customizar:"),og(),Il(575,"pre")(576,"code"),Qx(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),og()(),Il(578,"p"),Qx(579,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Il(580,"pre")(581,"code"),Qx(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),og()(),Il(583,"blockquote")(584,"p"),Qx(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(586,"a",29)(587,"code"),Qx(588,"PoI18nService"),og()(),Qx(589," ou do browser."),og()()()(),Il(590,"tr",15)(591,"td",16)(592,"div",17)(593,"span",18),Qx(594," p-options"),zl(595,"br"),og()()(),Il(596,"td",19)(597,"code",30),Qx(598,"PoChartOptions"),og()(),Il(599,"td",22),Qx(600,"-"),og(),Il(601,"td",23)(602,"em")(603,"strong"),Qx(604,"(opcional)"),og()(),Il(605,"p"),Qx(606,"Objeto com as configura\xE7\xF5es usadas no "),Il(607,"code"),Qx(608,"po-chart"),og(),Qx(609,"."),og(),Il(610,"p"),Qx(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),Il(612,"em"),Qx(613,"axis"),og(),Qx(614,") para os gr\xE1ficos dos tipos "),Il(615,"code"),Qx(616,"area"),og(),Qx(617,", "),Il(618,"code"),Qx(619,"line"),og(),Qx(620,", "),Il(621,"code"),Qx(622,"column"),og(),Qx(623,", "),Il(624,"code"),Qx(625,"bar"),og(),Qx(626," e "),Il(627,"code"),Qx(628,"radar"),og(),Qx(629," da seguinte forma:"),og(),Il(630,"pre")(631,"code"),Qx(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),og()()()(),Il(633,"tr",15)(634,"td",16)(635,"div",17)(636,"span",18),Qx(637," p-series"),zl(638,"br"),og()()(),Il(639,"td",19)(640,"code",31),Qx(641,"Array<PoChartSerie>"),og()(),Il(642,"td",22),Qx(643,"-"),og(),Il(644,"td",23)(645,"p"),Qx(646,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),og()()(),Il(647,"tr",15)(648,"td",16)(649,"div",32)(650,"span",33),Qx(651," (p-series-click)"),zl(652,"br"),og()()(),Il(653,"td",19)(654,"code",34),Qx(655,"EventEmitter"),og()(),Il(656,"td",22),Qx(657,"-"),og(),Il(658,"td",23)(659,"em")(660,"strong"),Qx(661,"(opcional)"),og()(),Il(662,"p"),Qx(663,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),og(),Il(664,"p"),Qx(665,"O evento emitir\xE1 o seguinte par\xE2metro:"),og(),Il(666,"ul")(667,"li")(668,"em"),Qx(669,"donut"),og(),Qx(670," e "),Il(671,"em"),Qx(672,"pie"),og(),Qx(673,": um objeto contendo a categoria e valor da s\xE9rie."),og(),Il(674,"li")(675,"em"),Qx(676,"radar"),og(),Qx(677,": um objeto contendo o nome da s\xE9rie e os valores."),og(),Il(678,"li")(679,"em"),Qx(680,"area"),og(),Qx(681,", "),Il(682,"em"),Qx(683,"line"),og(),Qx(684,", "),Il(685,"em"),Qx(686,"column"),og(),Qx(687," e "),Il(688,"em"),Qx(689,"bar"),og(),Qx(690,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),og()()()(),Il(691,"tr",15)(692,"td",16)(693,"div",32)(694,"span",33),Qx(695," (p-series-hover)"),zl(696,"br"),og()()(),Il(697,"td",19)(698,"code",34),Qx(699,"EventEmitter"),og()(),Il(700,"td",22),Qx(701,"-"),og(),Il(702,"td",23)(703,"em")(704,"strong"),Qx(705,"(opcional)"),og()(),Il(706,"p"),Qx(707,"Evento executado quando o usu\xE1rio passar o "),Il(708,"em"),Qx(709,"mouse"),og(),Qx(710," sobre um elemento do gr\xE1fico."),og(),Il(711,"p"),Qx(712,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),og(),Il(713,"ul")(714,"li")(715,"em"),Qx(716,"donut"),og(),Qx(717," e "),Il(718,"em"),Qx(719,"pie"),og(),Qx(720,": um objeto contendo a categoria e valor da s\xE9rie."),og(),Il(721,"li")(722,"em"),Qx(723,"radar"),og(),Qx(724,": um objeto contendo o nome da s\xE9rie e os valores."),og(),Il(725,"li")(726,"em"),Qx(727,"area"),og(),Qx(728,", "),Il(729,"em"),Qx(730,"line"),og(),Qx(731,", "),Il(732,"em"),Qx(733,"column"),og(),Qx(734," e "),Il(735,"em"),Qx(736,"bar"),og(),Qx(737,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),og()()()(),Il(738,"tr",15)(739,"td",16)(740,"div",17)(741,"span",18),Qx(742," p-title"),zl(743,"br"),og()()(),Il(744,"td",19)(745,"code",35),Qx(746,"string"),og()(),Il(747,"td",22),Qx(748,"-"),og(),Il(749,"td",23)(750,"em")(751,"strong"),Qx(752,"(opcional)"),og()(),Il(753,"p"),Qx(754,"Define o t\xEDtulo do gr\xE1fico."),og()()(),Il(755,"tr",15)(756,"td",16)(757,"div",17)(758,"span",18),Qx(759," p-type"),zl(760,"br"),og()()(),Il(761,"td",19)(762,"code",36),Qx(763,"PoChartType"),og()(),Il(764,"td",22),Qx(765,"-"),og(),Il(766,"td",23)(767,"em")(768,"strong"),Qx(769,"(opcional)"),og()(),Il(770,"p"),Qx(771,"Define o tipo de gr\xE1fico."),og(),Il(772,"p"),Qx(773,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),Il(774,"code"),Qx(775,"type"),og(),Qx(776," conforme a interface "),Il(777,"code"),Qx(778,"PoChartSerie"),og(),Qx(779,"."),og(),Il(780,"blockquote")(781,"p"),Qx(782,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),Il(783,"code"),Qx(784,"p-type"),og(),Qx(785," quanto em "),Il(786,"code"),Qx(787,"PochartSerie.type"),og(),Qx(788,", o valor "),Il(789,"code"),Qx(790,"{ type }"),og(),Qx(791," da primeira s\xE9rie anular\xE1 o valor definido em "),Il(792,"code"),Qx(793,"p-type"),og(),Qx(794,"."),og()(),Il(795,"p"),Qx(796,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),Il(797,"code"),Qx(798,"p-series"),og(),Qx(799,":"),og(),Il(800,"ul")(801,"li"),Qx(802,"Se "),Il(803,"code"),Qx(804,"p-series = [{ data: [1,2,3] }]"),og(),Qx(805,": ser\xE1 "),Il(806,"code"),Qx(807,"PoChartType.Column"),og(),Qx(808,"."),og(),Il(809,"li"),Qx(810,"Se "),Il(811,"code"),Qx(812,"p-series = [{ data: 1 }]"),og(),Qx(813,": ser\xE1 "),Il(814,"code"),Qx(815,"PoChartType.Pie"),og(),Qx(816,"."),og()(),Il(817,"blockquote")(818,"p"),Qx(819,"Veja os valores v\xE1lidos no "),Il(820,"em"),Qx(821,"enum"),og(),Il(822,"code"),Qx(823,"PoChartType"),og(),Qx(824,"."),og()()()(),Il(825,"tr",15)(826,"td",16)(827,"div",17)(828,"span",18),Qx(829," p-value-gauge-multiple"),zl(830,"br"),og()()(),Il(831,"td",19)(832,"code",27),Qx(833,"number"),og()(),Il(834,"td",22),Qx(835,"-"),og(),Il(836,"td",23)(837,"em")(838,"strong"),Qx(839,"(opcional)"),og()(),Il(840,"p"),Qx(841,"Define o valor do gr\xE1fico do tipo "),Il(842,"code"),Qx(843,"Gauge"),og(),Qx(844," quando utliza as propriedades "),Il(845,"code"),Qx(846,"From"),og(),Il(847,"code"),Qx(848,"To"),og(),Qx(849,"."),og()()()(),Il(850,"h3"),Qx(851,"Interfaces"),og(),Il(852,"h4",37)(853,"code",5),Qx(854,"PoChartAxisOptions"),og()(),Il(855,"div",2)(856,"p")(857,"em"),Qx(858,"Interface"),og(),Qx(859," que define os eixos do grid."),og()(),Il(860,"h4",11),Qx(861,"Propriedades"),og(),Il(862,"table",12)(863,"tr",13)(864,"th",14),Qx(865,"Nome"),og(),Il(866,"th",14),Qx(867,"Tipo"),og(),Il(868,"th",14),Qx(869,"Descri\xE7\xE3o"),og()(),Il(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),Qx(874," gridLines"),zl(875,"br"),og()()(),Il(876,"td",19)(877,"code",27),Qx(878,"number"),og()(),Il(879,"td",23)(880,"em")(881,"strong"),Qx(882,"(opcional)"),og()(),Il(883,"p"),Qx(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),Il(885,"code"),Qx(886,"Area"),og(),Qx(887,", "),Il(888,"code"),Qx(889,"Line"),og(),Qx(890," e "),Il(891,"code"),Qx(892,"Column"),og(),Qx(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),Il(894,"code"),Qx(895,"Bar"),og(),Qx(896,", tratar\xE1 as linhas verticais (eixo Y)."),og(),Il(897,"p"),Qx(898,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),og(),Il(899,"ul")(900,"li"),Qx(901,"Quantidade padr\xE3o de linhas: '5';"),og(),Il(902,"li"),Qx(903,"Quantidade m\xEDnima permitida: '2';"),og()()()(),Il(904,"tr",15)(905,"td",16)(906,"div",17)(907,"span",18),Qx(908," labelType"),zl(909,"br"),og()()(),Il(910,"td",19)(911,"code",38),Qx(912,"PoChartLabelFormat"),og()(),Il(913,"td",23)(914,"em")(915,"strong"),Qx(916,"(opcional)"),og()(),Il(917,"p"),Qx(918,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),og()()(),Il(919,"tr",15)(920,"td",16)(921,"div",17)(922,"span",18),Qx(923," maxRange"),zl(924,"br"),og()()(),Il(925,"td",19)(926,"code",27),Qx(927,"number"),og()(),Il(928,"td",23)(929,"em")(930,"strong"),Qx(931,"(opcional)"),og()(),Il(932,"p"),Qx(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),og(),Il(934,"blockquote")(935,"p"),Qx(936,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),og()()()(),Il(937,"tr",15)(938,"td",16)(939,"div",17)(940,"span",18),Qx(941," minRange"),zl(942,"br"),og()()(),Il(943,"td",19)(944,"code",27),Qx(945,"number"),og()(),Il(946,"td",23)(947,"em")(948,"strong"),Qx(949,"(opcional)"),og()(),Il(950,"p"),Qx(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),og(),Il(952,"blockquote")(953,"p"),Qx(954,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),og()()()(),Il(955,"tr",15)(956,"td",16)(957,"div",17)(958,"span",18),Qx(959," paddingBottom"),zl(960,"br"),og()()(),Il(961,"td",19)(962,"code",27),Qx(963,"number"),og()(),Il(964,"td",23)(965,"em")(966,"strong"),Qx(967,"(opcional)"),og()(),Il(968,"p"),Qx(969,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),og()()(),Il(970,"tr",15)(971,"td",16)(972,"div",17)(973,"span",18),Qx(974," paddingLeft"),zl(975,"br"),og()()(),Il(976,"td",19)(977,"code",27),Qx(978,"number"),og()(),Il(979,"td",23)(980,"em")(981,"strong"),Qx(982,"(opcional)"),og()(),Il(983,"p"),Qx(984,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),og()()(),Il(985,"tr",15)(986,"td",16)(987,"div",17)(988,"span",18),Qx(989," paddingRight"),zl(990,"br"),og()()(),Il(991,"td",19)(992,"code",27),Qx(993,"number"),og()(),Il(994,"td",23)(995,"em")(996,"strong"),Qx(997,"(opcional)"),og()(),Il(998,"p"),Qx(999,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),og()()(),Il(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),Qx(1004," rotateLegend"),zl(1005,"br"),og()()(),Il(1006,"td",19)(1007,"code",27),Qx(1008,"number"),og()(),Il(1009,"td",23)(1010,"em")(1011,"strong"),Qx(1012,"(opcional)"),og()(),Il(1013,"p"),Qx(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),og(),Il(1015,"ul")(1016,"li"),Qx(1017,"Valores negativos giram a legenda para a esquerda."),og(),Il(1018,"li"),Qx(1019,"Valores positivos giram a legenda para a direita."),og()(),Il(1020,"p"),Qx(1021,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),og()()(),Il(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),Qx(1026," showAxisDetails"),zl(1027,"br"),og()()(),Il(1028,"td",19)(1029,"code",39),Qx(1030,"boolean"),og()(),Il(1031,"td",23)(1032,"em")(1033,"strong"),Qx(1034,"(opcional)"),og()(),Il(1035,"p"),Qx(1036,"Exibe a linha de detalhes que acompanha o mouse"),og()()(),Il(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),Qx(1041," showXAxis"),zl(1042,"br"),og()()(),Il(1043,"td",19)(1044,"code",39),Qx(1045,"boolean"),og()(),Il(1046,"td",23)(1047,"em")(1048,"strong"),Qx(1049,"(opcional)"),og()(),Il(1050,"p"),Qx(1051,"Exibe a linha do eixo X"),og()()(),Il(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),Qx(1056," showYAxis"),zl(1057,"br"),og()()(),Il(1058,"td",19)(1059,"code",39),Qx(1060,"boolean"),og()(),Il(1061,"td",23)(1062,"em")(1063,"strong"),Qx(1064,"(opcional)"),og()(),Il(1065,"p"),Qx(1066,"Exibe a linha do eixo Y"),og()()()(),Il(1067,"h4",37)(1068,"code",5),Qx(1069,"PoChartHeaderOptions"),og()(),Il(1070,"div",2)(1071,"p")(1072,"em"),Qx(1073,"Interface"),og(),Qx(1074," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),og()(),Il(1075,"h4",11),Qx(1076,"Propriedades"),og(),Il(1077,"table",12)(1078,"tr",13)(1079,"th",14),Qx(1080,"Nome"),og(),Il(1081,"th",14),Qx(1082,"Tipo"),og(),Il(1083,"th",14),Qx(1084,"Descri\xE7\xE3o"),og()(),Il(1085,"tr",15)(1086,"td",16)(1087,"div",17)(1088,"span",18),Qx(1089," hideExpand"),zl(1090,"br"),og()()(),Il(1091,"td",19)(1092,"code",39),Qx(1093,"boolean"),og()(),Il(1094,"td",23)(1095,"em")(1096,"strong"),Qx(1097,"(opcional)"),og()(),Il(1098,"p"),Qx(1099,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),og()()(),Il(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),Qx(1104," hideExportCsv"),zl(1105,"br"),og()()(),Il(1106,"td",19)(1107,"code",39),Qx(1108,"boolean"),og()(),Il(1109,"td",23)(1110,"em")(1111,"strong"),Qx(1112,"(opcional)"),og()(),Il(1113,"p"),Qx(1114,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),og()()(),Il(1115,"tr",15)(1116,"td",16)(1117,"div",17)(1118,"span",18),Qx(1119," hideExportImage"),zl(1120,"br"),og()()(),Il(1121,"td",19)(1122,"code",39),Qx(1123,"boolean"),og()(),Il(1124,"td",23)(1125,"em")(1126,"strong"),Qx(1127,"(opcional)"),og()(),Il(1128,"p"),Qx(1129,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),og()()(),Il(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),Qx(1134," hideTableDetails"),zl(1135,"br"),og()()(),Il(1136,"td",19)(1137,"code",39),Qx(1138,"boolean"),og()(),Il(1139,"td",23)(1140,"em")(1141,"strong"),Qx(1142,"(opcional)"),og()(),Il(1143,"p"),Qx(1144,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),og()()()(),Il(1145,"h4",37)(1146,"code",5),Qx(1147,"PoChartIndicatorOptions"),og()(),Il(1148,"div",2)(1149,"p"),Qx(1150,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),Il(1151,"code"),Qx(1152,"radar"),og(),Qx(1153,"."),og()(),Il(1154,"h4",11),Qx(1155,"Propriedades"),og(),Il(1156,"table",12)(1157,"tr",13)(1158,"th",14),Qx(1159,"Nome"),og(),Il(1160,"th",14),Qx(1161,"Tipo"),og(),Il(1162,"th",14),Qx(1163,"Descri\xE7\xE3o"),og()(),Il(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),Qx(1168," color"),zl(1169,"br"),og()()(),Il(1170,"td",19)(1171,"code",35),Qx(1172,"string"),og()(),Il(1173,"td",23)(1174,"em")(1175,"strong"),Qx(1176,"(opcional)"),og()(),Il(1177,"p"),Qx(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),og(),Il(1179,"blockquote")(1180,"p"),Qx(1181,"Nome da cor, hexadecimal ou RGB."),og()()()(),Il(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),Qx(1186," max"),zl(1187,"br"),og()()(),Il(1188,"td",19)(1189,"code",27),Qx(1190,"number"),og()(),Il(1191,"td",23)(1192,"em")(1193,"strong"),Qx(1194,"(opcional)"),og()(),Il(1195,"p"),Qx(1196,"Valor m\xE1ximo do indicator."),og(),Il(1197,"p"),Qx(1198,"A propriedade "),Il(1199,"code"),Qx(1200,"max"),og(),Qx(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),og()()(),Il(1202,"tr",15)(1203,"td",16)(1204,"div",17)(1205,"span",18),Qx(1206," min"),zl(1207,"br"),og()()(),Il(1208,"td",19)(1209,"code",27),Qx(1210,"number"),og()(),Il(1211,"td",23)(1212,"em")(1213,"strong"),Qx(1214,"(opcional)"),og()(),Il(1215,"p"),Qx(1216,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),og(),Il(1217,"p"),Qx(1218,"A propriedade "),Il(1219,"code"),Qx(1220,"min"),og(),Qx(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),og()()(),Il(1222,"tr",15)(1223,"td",16)(1224,"div",17)(1225,"span",18),Qx(1226," name"),zl(1227,"br"),og()()(),Il(1228,"td",19)(1229,"code",35),Qx(1230,"string"),og()(),Il(1231,"td",23)(1232,"em")(1233,"strong"),Qx(1234,"(opcional)"),og()(),Il(1235,"p"),Qx(1236,"Nome do indicator."),og()()()(),Il(1237,"h4",37)(1238,"code",5),Qx(1239,"PoChartLiterals"),og()(),Il(1240,"div",2)(1241,"p"),Qx(1242,"Interface para defini\xE7\xE3o dos literais usadas no "),Il(1243,"code"),Qx(1244,"po-chart"),og(),Qx(1245,"."),og()(),Il(1246,"h4",11),Qx(1247,"Propriedades"),og(),Il(1248,"table",12)(1249,"tr",13)(1250,"th",14),Qx(1251,"Nome"),og(),Il(1252,"th",14),Qx(1253,"Tipo"),og(),Il(1254,"th",14),Qx(1255,"Descri\xE7\xE3o"),og()(),Il(1256,"tr",15)(1257,"td",16)(1258,"div",17)(1259,"span",18),Qx(1260," category"),zl(1261,"br"),og()()(),Il(1262,"td",19)(1263,"code",35),Qx(1264,"string"),og()(),Il(1265,"td",23)(1266,"em")(1267,"strong"),Qx(1268,"(opcional)"),og()(),Il(1269,"p"),Qx(1270,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),Il(1271,"code"),Qx(1272,"Bar"),og(),Qx(1273,"."),og()()(),Il(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),Qx(1278," downloadCSV"),zl(1279,"br"),og()()(),Il(1280,"td",19)(1281,"code",35),Qx(1282,"string"),og()(),Il(1283,"td",23)(1284,"em")(1285,"strong"),Qx(1286,"(opcional)"),og()(),Il(1287,"p"),Qx(1288,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),og()()(),Il(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),Qx(1293," exportCSV"),zl(1294,"br"),og()()(),Il(1295,"td",19)(1296,"code",35),Qx(1297,"string"),og()(),Il(1298,"td",23)(1299,"em")(1300,"strong"),Qx(1301,"(opcional)"),og()(),Il(1302,"p"),Qx(1303,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),og()()(),Il(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),Qx(1308," exportJPG"),zl(1309,"br"),og()()(),Il(1310,"td",19)(1311,"code",35),Qx(1312,"string"),og()(),Il(1313,"td",23)(1314,"em")(1315,"strong"),Qx(1316,"(opcional)"),og()(),Il(1317,"p"),Qx(1318,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),og()()(),Il(1319,"tr",15)(1320,"td",16)(1321,"div",17)(1322,"span",18),Qx(1323," exportPNG"),zl(1324,"br"),og()()(),Il(1325,"td",19)(1326,"code",35),Qx(1327,"string"),og()(),Il(1328,"td",23)(1329,"em")(1330,"strong"),Qx(1331,"(opcional)"),og()(),Il(1332,"p"),Qx(1333,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),og()()(),Il(1334,"tr",15)(1335,"td",16)(1336,"div",17)(1337,"span",18),Qx(1338," item"),zl(1339,"br"),og()()(),Il(1340,"td",19)(1341,"code",35),Qx(1342,"string"),og()(),Il(1343,"td",23)(1344,"em")(1345,"strong"),Qx(1346,"(opcional)"),og()(),Il(1347,"p"),Qx(1348,"Texto dos t\xEDtulos das colunas "),Il(1349,"code"),Qx(1350,"Gauge"),og(),Qx(1351," e n\xE3o possui label."),og()()(),Il(1352,"tr",15)(1353,"td",16)(1354,"div",17)(1355,"span",18),Qx(1356," serie"),zl(1357,"br"),og()()(),Il(1358,"td",19)(1359,"code",35),Qx(1360,"string"),og()(),Il(1361,"td",23)(1362,"em")(1363,"strong"),Qx(1364,"(opcional)"),og()(),Il(1365,"p"),Qx(1366,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),Il(1367,"code"),Qx(1368,"Bar"),og(),Qx(1369," e "),Il(1370,"code"),Qx(1371,"Gauge"),og(),Qx(1372,"."),og()()(),Il(1373,"tr",15)(1374,"td",16)(1375,"div",17)(1376,"span",18),Qx(1377," value"),zl(1378,"br"),og()()(),Il(1379,"td",19)(1380,"code",35),Qx(1381,"string"),og()(),Il(1382,"td",23)(1383,"em")(1384,"strong"),Qx(1385,"(opcional)"),og()(),Il(1386,"p"),Qx(1387,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),Il(1388,"code"),Qx(1389,"Gauge"),og(),Qx(1390,"."),og()()()(),Il(1391,"h4",37)(1392,"code",5),Qx(1393,"PoChartOptions"),og()(),Il(1394,"div",2)(1395,"p")(1396,"em"),Qx(1397,"Interface"),og(),Qx(1398," para configura\xE7\xF5es dos elementos do gr\xE1fico."),og()(),Il(1399,"h4",11),Qx(1400,"Propriedades"),og(),Il(1401,"table",12)(1402,"tr",13)(1403,"th",14),Qx(1404,"Nome"),og(),Il(1405,"th",14),Qx(1406,"Tipo"),og(),Il(1407,"th",14),Qx(1408,"Descri\xE7\xE3o"),og()(),Il(1409,"tr",15)(1410,"td",16)(1411,"div",17)(1412,"span",18),Qx(1413," areaStyle"),zl(1414,"br"),og()()(),Il(1415,"td",19)(1416,"code",39),Qx(1417,"boolean"),og()(),Il(1418,"td",23)(1419,"em")(1420,"strong"),Qx(1421,"(opcional)"),og()(),Il(1422,"p"),Qx(1423,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),og(),Il(1424,"blockquote")(1425,"p"),Qx(1426,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),Il(1427,"code"),Qx(1428,"areaStyle"),og(),Qx(1429," em cada s\xE9rie, "),Il(1430,"code"),Qx(1431,"fillpoints"),og(),Qx(1432," n\xE3o funciona quando "),Il(1433,"code"),Qx(1434,"areaStyle"),og(),Qx(1435," est\xE1 definido como "),Il(1436,"code"),Qx(1437,"true"),og(),Qx(1438,"."),og()()()(),Il(1439,"tr",15)(1440,"td",16)(1441,"div",17)(1442,"span",18),Qx(1443," axis"),zl(1444,"br"),og()()(),Il(1445,"td",19)(1446,"code",40),Qx(1447,"PoChartAxisOptions"),og()(),Il(1448,"td",23)(1449,"em")(1450,"strong"),Qx(1451,"(opcional)"),og()(),Il(1452,"p"),Qx(1453,"Define um objeto do tipo "),Il(1454,"code"),Qx(1455,"PoChartAxisOptions"),og(),Qx(1456," para configura\xE7\xE3o dos eixos."),og()()(),Il(1457,"tr",15)(1458,"td",16)(1459,"div",17)(1460,"span",18),Qx(1461," borderRadius"),zl(1462,"br"),og()()(),Il(1463,"td",19)(1464,"code",27),Qx(1465,"number"),og()(),Il(1466,"td",23)(1467,"em")(1468,"strong"),Qx(1469,"(opcional)"),og()(),Il(1470,"p"),Qx(1471,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),Il(1472,"code"),Qx(1473,"Donut"),og(),Qx(1474,", "),Il(1475,"code"),Qx(1476,"Pie"),og(),Qx(1477,"."),og(),Il(1478,"blockquote")(1479,"p"),Qx(1480,"Valores v\xE1lidos entre 0 e 100,"),og()()()(),Il(1481,"tr",15)(1482,"td",16)(1483,"div",17)(1484,"span",18),Qx(1485," bottomDataZoom"),zl(1486,"br"),og()()(),Il(1487,"td",19)(1488,"code",39),Qx(1489,"boolean "),og(),Il(1490,"code",27),Qx(1491," number"),og()(),Il(1492,"td",23)(1493,"em")(1494,"strong"),Qx(1495,"(opcional)"),og()(),Il(1496,"p"),Qx(1497,"Define a dist\xE2ncia inferior do componente DataZoom."),og(),Il(1498,"p"),Qx(1499,"Esta propriedade aceita os seguintes valores:"),og(),Il(1500,"ul")(1501,"li")(1502,"p")(1503,"code"),Qx(1504,"false"),og(),Qx(1505," (padr\xE3o): n\xE3o aplica ajustes."),og()(),Il(1506,"li")(1507,"p")(1508,"code"),Qx(1509,"true"),og(),Qx(1510,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),og(),Il(1511,"ul")(1512,"li")(1513,"code"),Qx(1514,"8"),og(),Qx(1515," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),og(),Il(1516,"li")(1517,"code"),Qx(1518,"32"),og(),Qx(1519," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),og()()(),Il(1520,"li")(1521,"p")(1522,"code"),Qx(1523,"number"),og(),Qx(1524,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),og()()(),Il(1525,"blockquote")(1526,"p"),Qx(1527,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),Il(1528,"code"),Qx(1529,"dataZoom: true"),og(),Qx(1530,")."),og()()()(),Il(1531,"tr",15)(1532,"td",16)(1533,"div",17)(1534,"span",18),Qx(1535," dataZoom"),zl(1536,"br"),og()()(),Il(1537,"td",19)(1538,"code",39),Qx(1539,"boolean"),og()(),Il(1540,"td",23)(1541,"em")(1542,"strong"),Qx(1543,"(opcional)"),og()(),Il(1544,"p"),Qx(1545,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),og()()(),Il(1546,"tr",15)(1547,"td",16)(1548,"div",17)(1549,"span",18),Qx(1550," descriptionChart"),zl(1551,"br"),og()()(),Il(1552,"td",19)(1553,"code",35),Qx(1554,"string"),og()(),Il(1555,"td",23)(1556,"em")(1557,"strong"),Qx(1558,"(opcional)"),og()(),Il(1559,"p"),Qx(1560,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),og()()(),Il(1561,"tr",15)(1562,"td",16)(1563,"div",17)(1564,"span",18),Qx(1565," fillPoints"),zl(1566,"br"),og()()(),Il(1567,"td",19)(1568,"code",39),Qx(1569,"boolean"),og()(),Il(1570,"td",23)(1571,"em")(1572,"strong"),Qx(1573,"(opcional)"),og()(),Il(1574,"p"),Qx(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),og(),Il(1576,"blockquote")(1577,"p"),Qx(1578,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),Il(1579,"code"),Qx(1580,"Area"),og(),Qx(1581,", "),Il(1582,"code"),Qx(1583,"Line"),og(),Qx(1584," e "),Il(1585,"code"),Qx(1586,"Radar"),og(),Qx(1587,`.
Para o tipo `),Il(1588,"code"),Qx(1589,"Radar"),og(),Qx(1590,", o valor padr\xE3o \xE9 "),Il(1591,"code"),Qx(1592,"true"),og(),Qx(1593,"."),og()()()(),Il(1594,"tr",15)(1595,"td",16)(1596,"div",17)(1597,"span",18),Qx(1598," firstColumnName"),zl(1599,"br"),og()()(),Il(1600,"td",19)(1601,"code",35),Qx(1602,"string"),og()(),Il(1603,"td",23)(1604,"em")(1605,"strong"),Qx(1606,"(opcional)"),og()(),Il(1607,"p"),Qx(1608,"Valor que permite customizar o nome da "),Il(1609,"code"),Qx(1610,"TH"),og(),Qx(1611," da primeira coluna da tabela descritiva."),og()()(),Il(1612,"tr",15)(1613,"td",16)(1614,"div",17)(1615,"span",18),Qx(1616," header"),zl(1617,"br"),og()()(),Il(1618,"td",19)(1619,"code",41),Qx(1620,"PoChartHeaderOptions"),og()(),Il(1621,"td",23)(1622,"em")(1623,"strong"),Qx(1624,"(opcional)"),og()(),Il(1625,"p"),Qx(1626,"Define um objeto do tipo "),Il(1627,"code"),Qx(1628,"PoChartHeaderOptions"),og(),Qx(1629," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),og()()(),Il(1630,"tr",15)(1631,"td",16)(1632,"div",17)(1633,"span",18),Qx(1634," innerRadius"),zl(1635,"br"),og()()(),Il(1636,"td",19)(1637,"code",27),Qx(1638,"number"),og()(),Il(1639,"td",23)(1640,"em")(1641,"strong"),Qx(1642,"(opcional)"),og()(),Il(1643,"p"),Qx(1644,"Define o di\xE2metro, em valor percentual entre "),Il(1645,"code"),Qx(1646,"0"),og(),Qx(1647," e "),Il(1648,"code"),Qx(1649,"100"),og(),Qx(1650,", da \xE1rea central para gr\xE1ficos do tipo "),Il(1651,"code"),Qx(1652,"donut"),og(),Qx(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),Il(1654,"code"),Qx(1655,"40px"),og(),Qx(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),og()()(),Il(1657,"tr",15)(1658,"td",16)(1659,"div",17)(1660,"span",18),Qx(1661," legend"),zl(1662,"br"),og()()(),Il(1663,"td",19)(1664,"code",39),Qx(1665,"boolean"),og()(),Il(1666,"td",23)(1667,"em")(1668,"strong"),Qx(1669,"(opcional)"),og()(),Il(1670,"p"),Qx(1671,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),Il(1672,"code"),Qx(1673,"true"),og()()()(),Il(1674,"tr",15)(1675,"td",16)(1676,"div",17)(1677,"span",18),Qx(1678," legendPosition"),zl(1679,"br"),og()()(),Il(1680,"td",19)(1681,"code",42),Qx(1682,"'left' "),og(),Il(1683,"code",43),Qx(1684," 'center' "),og(),Il(1685,"code",44),Qx(1686," 'right'"),og()(),Il(1687,"td",23)(1688,"em")(1689,"strong"),Qx(1690,"(opcional)"),og()(),Il(1691,"p"),Qx(1692,"Define o alinhamento horizontal da legenda."),og(),Il(1693,"blockquote")(1694,"p"),Qx(1695,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Il(1696,"code"),Qx(1697,"Gauge"),og(),Qx(1698,"."),og()()()(),Il(1699,"tr",15)(1700,"td",16)(1701,"div",17)(1702,"span",18),Qx(1703," legendType"),zl(1704,"br"),og()()(),Il(1705,"td",19)(1706,"code",45),Qx(1707,"'plain' "),og(),Il(1708,"code",46),Qx(1709," 'scroll'"),og()(),Il(1710,"td",23)(1711,"em")(1712,"strong"),Qx(1713,"(opcional)"),og()(),Il(1714,"p"),Qx(1715,"Define o tipo da legenda."),og(),Il(1716,"ul")(1717,"li")(1718,"code"),Qx(1719,"plain"),og(),Qx(1720,": exibe todas as legendas de forma est\xE1tica."),og(),Il(1721,"li")(1722,"code"),Qx(1723,"scroll"),og(),Qx(1724,": habilita rolagem quando a quantidade de legendas exceder o espa\xE7o dispon\xEDvel no gr\xE1fico."),og()(),Il(1725,"blockquote")(1726,"p"),Qx(1727,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),Il(1728,"code"),Qx(1729,"Gauge"),og(),Qx(1730,"."),og()()()(),Il(1731,"tr",15)(1732,"td",16)(1733,"div",17)(1734,"span",18),Qx(1735," legendVerticalPosition"),zl(1736,"br"),og()()(),Il(1737,"td",19)(1738,"code",47),Qx(1739,"'top' "),og(),Il(1740,"code",48),Qx(1741," 'bottom'"),og()(),Il(1742,"td",23)(1743,"em")(1744,"strong"),Qx(1745,"(opcional)"),og()(),Il(1746,"p"),Qx(1747,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),og(),Il(1748,"blockquote")(1749,"p"),Qx(1750,"Quando utilizada com o valor "),Il(1751,"code"),Qx(1752,"top"),og(),Qx(1753,", recomenda-se configurar tamb\xE9m a propriedade "),Il(1754,"code"),Qx(1755,"bottomDataZoom"),og(),Qx(1756," caso o "),Il(1757,"code"),Qx(1758,"dataZoom"),og(),Qx(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),Il(1760,"code"),Qx(1761,"Gauge"),og(),Qx(1762,"."),og()()()(),Il(1763,"tr",15)(1764,"td",16)(1765,"div",17)(1766,"span",18),Qx(1767," pointer"),zl(1768,"br"),og()()(),Il(1769,"td",19)(1770,"code",39),Qx(1771,"boolean"),og()(),Il(1772,"td",23)(1773,"em")(1774,"strong"),Qx(1775,"(opcional)"),og()(),Il(1776,"p"),Qx(1777,"Define a exibi\xE7\xE3o do ponteiro."),og(),Il(1778,"blockquote")(1779,"p"),Qx(1780,"V\xE1lido para gr\xE1fico do tipo "),Il(1781,"code"),Qx(1782,"Gauge"),og(),Qx(1783,"."),og()()()(),Il(1784,"tr",15)(1785,"td",16)(1786,"div",17)(1787,"span",18),Qx(1788," rendererOption"),zl(1789,"br"),og()()(),Il(1790,"td",19)(1791,"code",49),Qx(1792,"'canvas' "),og(),Il(1793,"code",50),Qx(1794," 'svg'"),og()(),Il(1795,"td",23)(1796,"em")(1797,"strong"),Qx(1798,"(opcional)"),og()(),Il(1799,"p"),Qx(1800,"Define como o gr\xE1fico ser\xE1 renderizado."),og(),Il(1801,"blockquote")(1802,"p"),Qx(1803,"Recomenda-se n\xE3o modificar o valor da propriedade "),Il(1804,"code"),Qx(1805,"rendererOption"),og(),Qx(1806," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),og()()()(),Il(1807,"tr",15)(1808,"td",16)(1809,"div",17)(1810,"span",18),Qx(1811," roseType"),zl(1812,"br"),og()()(),Il(1813,"td",19)(1814,"code",39),Qx(1815,"boolean"),og()(),Il(1816,"td",23)(1817,"em")(1818,"strong"),Qx(1819,"(opcional)"),og()(),Il(1820,"p"),Qx(1821,"Transforma os gr\xE1ficos do tipo "),Il(1822,"code"),Qx(1823,"Donut"),og(),Qx(1824," ou "),Il(1825,"code"),Qx(1826,"Pie"),og(),Qx(1827," num gr\xE1fico de \xE1rea polar."),og(),Il(1828,"blockquote")(1829,"p"),Qx(1830,"V\xE1lido para os gr\xE1ficos "),Il(1831,"code"),Qx(1832,"Donut"),og(),Qx(1833," e "),Il(1834,"code"),Qx(1835,"Pie"),og(),Qx(1836,"."),og()()()(),Il(1837,"tr",15)(1838,"td",16)(1839,"div",17)(1840,"span",18),Qx(1841," showContainerGauge"),zl(1842,"br"),og()()(),Il(1843,"td",19)(1844,"code",39),Qx(1845,"boolean"),og()(),Il(1846,"td",23)(1847,"em")(1848,"strong"),Qx(1849,"(opcional)"),og()(),Il(1850,"p"),Qx(1851,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),og(),Il(1852,"blockquote")(1853,"p"),Qx(1854,"V\xE1lido para gr\xE1fico do tipo "),Il(1855,"code"),Qx(1856,"Gauge"),og(),Qx(1857,"."),og()()()(),Il(1858,"tr",15)(1859,"td",16)(1860,"div",17)(1861,"span",18),Qx(1862," showFromToLegend"),zl(1863,"br"),og()()(),Il(1864,"td",19)(1865,"code",39),Qx(1866,"boolean"),og()(),Il(1867,"td",23)(1868,"em")(1869,"strong"),Qx(1870,"(opcional)"),og()(),Il(1871,"p"),Qx(1872,"Exibe os valores das propriedades "),Il(1873,"code"),Qx(1874,"from"),og(),Qx(1875," e "),Il(1876,"code"),Qx(1877,"to"),og(),Qx(1878," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),og(),Il(1879,"blockquote")(1880,"p"),Qx(1881,"V\xE1lido para gr\xE1fico do tipo "),Il(1882,"code"),Qx(1883,"Gauge"),og(),Qx(1884,"."),og()()()(),Il(1885,"tr",15)(1886,"td",16)(1887,"div",17)(1888,"span",18),Qx(1889," stacked"),zl(1890,"br"),og()()(),Il(1891,"td",19)(1892,"code",39),Qx(1893,"boolean"),og()(),Il(1894,"td",23)(1895,"em")(1896,"strong"),Qx(1897,"(opcional)"),og()(),Il(1898,"p"),Qx(1899,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),Il(1900,"code"),Qx(1901,"stackGroupName"),og(),Qx(1902," da interface "),Il(1903,"code"),Qx(1904,"PoChartSerie"),og()(),Il(1905,"blockquote")(1906,"p"),Qx(1907,"V\xE1lido para gr\xE1fico do tipo "),Il(1908,"code"),Qx(1909,"Column"),og(),Qx(1910," e "),Il(1911,"code"),Qx(1912,"Bar"),og(),Qx(1913,"."),og()(),Il(1914,"blockquote")(1915,"p"),Qx(1916,"Essa propriedade habilita a propriedade "),Il(1917,"code"),Qx(1918,"p-data-label"),og(),Qx(1919," por padr\xE3o, podendo ser desabilitada passando "),Il(1920,"code"),Qx(1921,"[p-data-label]={ fixed: false }"),og(),Qx(1922,"."),og()()()(),Il(1923,"tr",15)(1924,"td",16)(1925,"div",17)(1926,"span",18),Qx(1927," subtitleGauge"),zl(1928,"br"),og()()(),Il(1929,"td",19)(1930,"code",35),Qx(1931,"string"),og()(),Il(1932,"td",23)(1933,"em")(1934,"strong"),Qx(1935,"(opcional)"),og()(),Il(1936,"p"),Qx(1937,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),og(),Il(1938,"blockquote")(1939,"p"),Qx(1940,"V\xE1lido para gr\xE1fico do tipo "),Il(1941,"code"),Qx(1942,"Gauge"),og(),Qx(1943,"."),og()()()(),Il(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),Qx(1948," textCenterGraph"),zl(1949,"br"),og()()(),Il(1950,"td",19)(1951,"code",35),Qx(1952,"string"),og()(),Il(1953,"td",23)(1954,"em")(1955,"strong"),Qx(1956,"(opcional)"),og()(),Il(1957,"p"),Qx(1958,"Aplica texto centralizado customizado nos gr\xE1ficos de "),Il(1959,"code"),Qx(1960,"Donut"),og(),Qx(1961,"."),og()()()(),Il(1962,"h4",37)(1963,"code",5),Qx(1964,"PoChartRadarOptions"),og()(),Il(1965,"div",2)(1966,"p")(1967,"em"),Qx(1968,"Interface"),og(),Qx(1969," para configura\xE7\xF5es do gr\xE1fico "),Il(1970,"code"),Qx(1971,"radar"),og(),Qx(1972,"."),og()(),Il(1973,"h4",11),Qx(1974,"Propriedades"),og(),Il(1975,"table",12)(1976,"tr",13)(1977,"th",14),Qx(1978,"Nome"),og(),Il(1979,"th",14),Qx(1980,"Tipo"),og(),Il(1981,"th",14),Qx(1982,"Descri\xE7\xE3o"),og()(),Il(1983,"tr",15)(1984,"td",16)(1985,"div",17)(1986,"span",18),Qx(1987," indicator"),zl(1988,"br"),og()()(),Il(1989,"td",19)(1990,"code",51),Qx(1991,"Array<PoChartIndicatorOptions>"),og()(),Il(1992,"td",23)(1993,"em")(1994,"strong"),Qx(1995,"(opcional)"),og()(),Il(1996,"p"),Qx(1997,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),og()()(),Il(1998,"tr",15)(1999,"td",16)(2e3,"div",17)(2001,"span",18),Qx(2002," shape"),zl(2003,"br"),og()()(),Il(2004,"td",19)(2005,"code",52),Qx(2006,"'polygon' "),og(),Il(2007,"code",53),Qx(2008," 'circle'"),og()(),Il(2009,"td",23)(2010,"em")(2011,"strong"),Qx(2012,"(opcional)"),og()(),Il(2013,"p"),Qx(2014,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),og()()(),Il(2015,"tr",15)(2016,"td",16)(2017,"div",17)(2018,"span",18),Qx(2019," splitArea"),zl(2020,"br"),og()()(),Il(2021,"td",19)(2022,"code",39),Qx(2023,"boolean"),og()(),Il(2024,"td",23)(2025,"em")(2026,"strong"),Qx(2027,"(opcional)"),og()(),Il(2028,"p"),Qx(2029,"Define o efeito zebrado na grid."),og()()()(),Il(2030,"h4",37)(2031,"code",5),Qx(2032,"PoChartDataLabel"),og()(),Il(2033,"div",2)(2034,"p"),Qx(2035,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),Il(2036,"code"),Qx(2037,"po-chart"),og(),Qx(2038,"."),og()(),Il(2039,"h4",11),Qx(2040,"Propriedades"),og(),Il(2041,"table",12)(2042,"tr",13)(2043,"th",14),Qx(2044,"Nome"),og(),Il(2045,"th",14),Qx(2046,"Tipo"),og(),Il(2047,"th",14),Qx(2048,"Descri\xE7\xE3o"),og()(),Il(2049,"tr",15)(2050,"td",16)(2051,"div",17)(2052,"span",18),Qx(2053," fixed"),zl(2054,"br"),og()()(),Il(2055,"td",19)(2056,"code",39),Qx(2057,"boolean"),og()(),Il(2058,"td",23)(2059,"em")(2060,"strong"),Qx(2061,"(opcional)"),og()(),Il(2062,"p"),Qx(2063,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),og(),Il(2064,"ul")(2065,"li"),Qx(2066,"Quando definido como "),Il(2067,"code"),Qx(2068,"true"),og(),Qx(2069,":"),Il(2070,"ul")(2071,"li"),Qx(2072,"O "),Il(2073,"em"),Qx(2074,"tooltip"),og(),Qx(2075," n\xE3o ser\xE1 exibido."),og(),Il(2076,"li"),Qx(2077,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),og()()()(),Il(2078,"blockquote")(2079,"p"),Qx(2080,"Dispon\xEDvel para os tipo de gr\xE1fico "),Il(2081,"code"),Qx(2082,"PoChartType.Line"),og(),Qx(2083,", "),Il(2084,"code"),Qx(2085,"PoChartType.Area"),og(),Qx(2086,", "),Il(2087,"code"),Qx(2088,"PoChartType.Column"),og(),Qx(2089,", "),Il(2090,"code"),Qx(2091,"PoChartType.Bar e PoChartType.Radar"),og(),Qx(2092,"."),og()()()()(),Il(2093,"h4",37)(2094,"code",5),Qx(2095,"PoChartSerie"),og()(),Il(2096,"div",2)(2097,"p"),Qx(2098,"Interface das series din\xE2micas do "),Il(2099,"code"),Qx(2100,"po-chart"),og(),Qx(2101," que possibilita desenhar gr\xE1ficos dos tipos "),Il(2102,"code"),Qx(2103,"area"),og(),Qx(2104,", "),Il(2105,"code"),Qx(2106,"bar"),og(),Qx(2107,", "),Il(2108,"code"),Qx(2109,"column"),og(),Qx(2110,", "),Il(2111,"code"),Qx(2112,"line"),og(),Qx(2113,", "),Il(2114,"code"),Qx(2115,"donut"),og(),Qx(2116,", "),Il(2117,"code"),Qx(2118,"pie"),og(),Qx(2119," e "),Il(2120,"code"),Qx(2121,"radar"),og()()(),Il(2122,"h4",11),Qx(2123,"Propriedades"),og(),Il(2124,"table",12)(2125,"tr",13)(2126,"th",14),Qx(2127,"Nome"),og(),Il(2128,"th",14),Qx(2129,"Tipo"),og(),Il(2130,"th",14),Qx(2131,"Descri\xE7\xE3o"),og()(),Il(2132,"tr",15)(2133,"td",16)(2134,"div",17)(2135,"span",18),Qx(2136," areaStyle"),zl(2137,"br"),og()()(),Il(2138,"td",19)(2139,"code",39),Qx(2140,"boolean"),og()(),Il(2141,"td",23)(2142,"em")(2143,"strong"),Qx(2144,"(opcional)"),og()(),Il(2145,"p"),Qx(2146,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),og(),Il(2147,"blockquote")(2148,"p"),Qx(2149,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),Il(2150,"code"),Qx(2151,"Radar"),og(),Qx(2152,", "),Il(2153,"code"),Qx(2154,"fillpoints"),og(),Qx(2155," n\xE3o funciona quando "),Il(2156,"code"),Qx(2157,"areaStyle"),og(),Qx(2158," est\xE1 definido como "),Il(2159,"code"),Qx(2160,"true"),og(),Qx(2161,"."),og()()()(),Il(2162,"tr",15)(2163,"td",16)(2164,"div",17)(2165,"span",18),Qx(2166," color"),zl(2167,"br"),og()()(),Il(2168,"td",19)(2169,"code",35),Qx(2170,"string"),og()(),Il(2171,"td",23)(2172,"em")(2173,"strong"),Qx(2174,"(opcional)"),og()(),Il(2175,"p"),Qx(2176,"Determina a cor da s\xE9rie. As maneiras de customizar o "),Il(2177,"em"),Qx(2178,"preset"),og(),Qx(2179," padr\xE3o de cores s\xE3o:"),og(),Il(2180,"ul")(2181,"li"),Qx(2182,"Hexadecimal, por exemplo "),Il(2183,"code"),Qx(2184,"#c64840"),og(),Qx(2185,";"),og(),Il(2186,"li"),Qx(2187,"RGB, por exemplo "),Il(2188,"code"),Qx(2189,"rgb(0, 0, 165)"),og()(),Il(2190,"li"),Qx(2191,"O nome da cor, por exemplo "),Il(2192,"code"),Qx(2193,"blue"),og(),Qx(2194,";"),og(),Il(2195,"li"),Qx(2196,"Vari\xE1veis CSS, por exemplo "),Il(2197,"code"),Qx(2198,"var(--color-01)"),og(),Qx(2199,";"),og(),Il(2200,"li"),Qx(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Il(2202,"ul")(2203,"li"),zl(2204,"span",54),Il(2205,"code"),Qx(2206,"color-01"),og()(),Il(2207,"li"),zl(2208,"span",55),Il(2209,"code"),Qx(2210,"color-02"),og()(),Il(2211,"li"),zl(2212,"span",56),Il(2213,"code"),Qx(2214,"color-03"),og()(),Il(2215,"li"),zl(2216,"span",57),Il(2217,"code"),Qx(2218,"color-04"),og()(),Il(2219,"li"),zl(2220,"span",58),Il(2221,"code"),Qx(2222,"color-05"),og()(),Il(2223,"li"),zl(2224,"span",59),Il(2225,"code"),Qx(2226,"color-06"),og()(),Il(2227,"li"),zl(2228,"span",60),Il(2229,"code"),Qx(2230,"color-07"),og()(),Il(2231,"li"),zl(2232,"span",61),Il(2233,"code"),Qx(2234,"color-08"),og()(),Il(2235,"li"),zl(2236,"span",62),Il(2237,"code"),Qx(2238,"color-09"),og()(),Il(2239,"li"),zl(2240,"span",63),Il(2241,"code"),Qx(2242,"color-10"),og()(),Il(2243,"li"),zl(2244,"span",64),Il(2245,"code"),Qx(2246,"color-11"),og()(),Il(2247,"li"),zl(2248,"span",65),Il(2249,"code"),Qx(2250,"color-12"),og()()()()(),Il(2251,"ul")(2252,"li"),Qx(2253,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),og()()()(),Il(2254,"tr",15)(2255,"td",16)(2256,"div",17)(2257,"span",18),Qx(2258," data"),zl(2259,"br"),og()()(),Il(2260,"td",19)(2261,"code",27),Qx(2262,"number "),og(),Il(2263,"code",66),Qx(2264," Array<number>"),og()(),Il(2265,"td",23)(2266,"em")(2267,"strong"),Qx(2268,"(opcional)"),og()(),Il(2269,"p"),Qx(2270,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),og(),Il(2271,"ul")(2272,"li"),Qx(2273,"Para gr\xE1ficos dos tipos "),Il(2274,"code"),Qx(2275,"donut"),og(),Qx(2276," e "),Il(2277,"code"),Qx(2278,"pie"),og(),Qx(2279,", espera-se "),Il(2280,"em"),Qx(2281,"number"),og(),Qx(2282,";"),og(),Il(2283,"li"),Qx(2284,"Para gr\xE1ficos dos tipos "),Il(2285,"code"),Qx(2286,"area"),og(),Qx(2287,", "),Il(2288,"code"),Qx(2289,"bar"),og(),Qx(2290,", "),Il(2291,"code"),Qx(2292,"column"),og(),Qx(2293,", "),Il(2294,"code"),Qx(2295,"line"),og(),Qx(2296," e "),Il(2297,"code"),Qx(2298,"radar"),og(),Qx(2299,", espera-se um "),Il(2300,"em"),Qx(2301,"array"),og(),Qx(2302," de "),Il(2303,"code"),Qx(2304,"data"),og(),Qx(2305,"."),og()(),Il(2306,"blockquote")(2307,"p"),Qx(2308,"Se passado valor "),Il(2309,"code"),Qx(2310,"null"),og(),Qx(2311," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),og()()()(),Il(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),Qx(2316," from"),zl(2317,"br"),og()()(),Il(2318,"td",19)(2319,"code",27),Qx(2320,"number"),og()(),Il(2321,"td",23)(2322,"em")(2323,"strong"),Qx(2324,"(opcional)"),og()(),Il(2325,"p"),Qx(2326,"Alcance inicial da cor."),og(),Il(2327,"blockquote")(2328,"p"),Qx(2329,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Il(2330,"code"),Qx(2331,"Gauge"),og(),Qx(2332,"."),og()()()(),Il(2333,"tr",15)(2334,"td",16)(2335,"div",17)(2336,"span",18),Qx(2337," label"),zl(2338,"br"),og()()(),Il(2339,"td",19)(2340,"code",35),Qx(2341,"string"),og()(),Il(2342,"td",23)(2343,"em")(2344,"strong"),Qx(2345,"(opcional)"),og()(),Il(2346,"p"),Qx(2347,"R\xF3tulo refer\xEAncia da s\xE9rie."),og()()(),Il(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),Qx(2352," stackGroupName"),zl(2353,"br"),og()()(),Il(2354,"td",19)(2355,"code",35),Qx(2356,"string"),og()(),Il(2357,"td",23)(2358,"em")(2359,"strong"),Qx(2360,"(opcional)"),og()(),Il(2361,"p"),Qx(2362,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),Il(2363,"code"),Qx(2364,"stackGroupName"),og(),Qx(2365,". Exemplo:"),og(),Il(2366,"ul")(2367,"li"),Qx(2368,"Serie A: "),Il(2369,"code"),Qx(2370,"{ data: 500, stackGroupName: 'group1' ... }"),og(),Qx(2371,";"),og(),Il(2372,"li"),Qx(2373,"S\xE9rie B: "),Il(2374,"code"),Qx(2375,"{ data: 200, stackGroupName: 'group1' ... }"),og(),Qx(2376,"."),og(),Il(2377,"li"),Qx(2378,"S\xE9rie C: "),Il(2379,"code"),Qx(2380,"{ data: 100, stackGroupName: 'group2' ... }"),og(),Qx(2381,"."),og(),Il(2382,"li"),Qx(2383,"S\xE9rie D: "),Il(2384,"code"),Qx(2385,"{ data: 400, stackGroupName: 'group2' ... }"),og(),Qx(2386,"."),og()(),Il(2387,"p"),Qx(2388,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),og(),Il(2389,"blockquote")(2390,"p"),Qx(2391,"V\xE1lido para gr\xE1fico do tipo "),Il(2392,"code"),Qx(2393,"Column"),og(),Qx(2394," e "),Il(2395,"code"),Qx(2396,"Bar"),og(),Qx(2397,". Essa propriedade \xE9 ignorada caso a propriedade "),Il(2398,"code"),Qx(2399,"stacked"),og(),Qx(2400," da interface "),Il(2401,"code"),Qx(2402,"PoChartOptions"),og(),Qx(2403," esteja como "),Il(2404,"code"),Qx(2405,"true"),og(),Qx(2406,"."),og()(),Il(2407,"blockquote")(2408,"p"),Qx(2409,"Essa propriedade habilita a propriedade "),Il(2410,"code"),Qx(2411,"p-data-label"),og(),Qx(2412," por padr\xE3o, podendo ser desabilitada passando "),Il(2413,"code"),Qx(2414,"[p-data-label]={ fixed: false }"),og(),Qx(2415,"."),og()()()(),Il(2416,"tr",15)(2417,"td",16)(2418,"div",17)(2419,"span",18),Qx(2420," to"),zl(2421,"br"),og()()(),Il(2422,"td",19)(2423,"code",27),Qx(2424,"number"),og()(),Il(2425,"td",23)(2426,"em")(2427,"strong"),Qx(2428,"(opcional)"),og()(),Il(2429,"p"),Qx(2430,"Alcance final da cor."),og(),Il(2431,"blockquote")(2432,"p"),Qx(2433,"Propriedade v\xE1lida para gr\xE1fico do tipo "),Il(2434,"code"),Qx(2435,"Gauge"),og(),Qx(2436,"."),og()()()(),Il(2437,"tr",15)(2438,"td",16)(2439,"div",17)(2440,"span",18),Qx(2441," tooltip"),zl(2442,"br"),og()()(),Il(2443,"td",19)(2444,"code",35),Qx(2445,"string "),og(),Il(2446,"code",67),Qx(2447," ((params: any) => string)"),og()(),Il(2448,"td",23)(2449,"em")(2450,"strong"),Qx(2451,"(opcional)"),og()(),Il(2452,"p"),Qx(2453,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),Il(2454,"em"),Qx(2455,"chart"),og(),Qx(2456,"."),og(),Il(2457,"p"),Qx(2458,"Formatos aceitos:"),og(),Il(2459,"ul")(2460,"li")(2461,"p")(2462,"strong"),Qx(2463,"string"),og(),Qx(2464,": pode conter marcadores din\xE2micos e HTML simples."),og()(),Il(2465,"li")(2466,"p"),Qx(2467,"Marcadores dispon\xEDveis:"),og()(),Il(2468,"li")(2469,"p")(2470,"code"),Qx(2471,"{name}"),og(),Qx(2472," \u2192 Nome do item/categoria."),og()(),Il(2473,"li")(2474,"p")(2475,"code"),Qx(2476,"{seriesName}"),og(),Qx(2477," \u2192 Nome da s\xE9rie."),og()(),Il(2478,"li")(2479,"p")(2480,"code"),Qx(2481,"{value}"),og(),Qx(2482," \u2192 Valor correspondente."),og()(),Il(2483,"li")(2484,"p")(2485,"strong"),Qx(2486,"function"),og(),Qx(2487,": fun\xE7\xE3o que recebe o objeto "),Il(2488,"code"),Qx(2489,"params"),og(),Qx(2490," e deve retornar uma "),Il(2491,"em"),Qx(2492,"string"),og(),Qx(2493," com o conte\xFAdo da tooltip."),og()()(),Il(2494,"blockquote")(2495,"p"),Qx(2496,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),Il(2497,"code"),Qx(2498,"<b>"),og(),Qx(2499,", "),Il(2500,"code"),Qx(2501,"<i>"),og(),Qx(2502,", "),Il(2503,"code"),Qx(2504,"<br>"),og(),Qx(2505,", "),Il(2506,"code"),Qx(2507,"<hr>"),og(),Qx(2508,", etc.) que ser\xE1 interpretada via "),Il(2509,"code"),Qx(2510,"innerHTML"),og(),Qx(2511,"."),og()(),Il(2512,"blockquote")(2513,"p"),Qx(2514,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),og()(),Il(2515,"ul")(2516,"li")(2517,"code"),Qx(2518,"\\n"),og(),Qx(2519," \u2192 quebra de linha ("),Il(2520,"code"),Qx(2521,"<br>"),og(),Qx(2522,")."),og(),Il(2523,"li")(2524,"code"),Qx(2525,"**texto**"),og(),Qx(2526," \u2192 negrito ("),Il(2527,"code"),Qx(2528,"<b>"),og(),Qx(2529,")."),og(),Il(2530,"li")(2531,"code"),Qx(2532,"__texto__"),og(),Qx(2533," \u2192 it\xE1lico ("),Il(2534,"code"),Qx(2535,"<i>"),og(),Qx(2536,")."),og()(),Il(2537,"blockquote")(2538,"p"),Qx(2539,"Caso n\xE3o seja informado um valor para o "),Il(2540,"em"),Qx(2541,"tooltip"),og(),Qx(2542,", ser\xE1 exibido da seguinte forma:"),og()(),Il(2543,"ul")(2544,"li")(2545,"code"),Qx(2546,"donut"),og(),Qx(2547,", "),Il(2548,"code"),Qx(2549,"label"),og(),Qx(2550,": valor proporcional ao total em porcentagem."),og(),Il(2551,"li")(2552,"code"),Qx(2553,"radar"),og(),Qx(2554,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),og(),Il(2555,"li")(2556,"code"),Qx(2557,"area"),og(),Qx(2558,", "),Il(2559,"code"),Qx(2560,"bar"),og(),Qx(2561,", "),Il(2562,"code"),Qx(2563,"column"),og(),Qx(2564,", "),Il(2565,"code"),Qx(2566,"line"),og(),Qx(2567," e "),Il(2568,"code"),Qx(2569,"pie"),og(),Qx(2570,": "),Il(2571,"code"),Qx(2572,"label"),og(),Qx(2573,": "),Il(2574,"code"),Qx(2575,"data"),og(),Qx(2576,"."),og()(),Il(2577,"h3"),Qx(2578,"Exemplos:"),og(),Il(2579,"p")(2580,"strong"),Qx(2581,"Usando string com placeholders:"),og()(),Il(2582,"pre")(2583,"code",68),Qx(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),og()(),Il(2585,"p")(2586,"strong"),Qx(2587,"Usando fun\xE7\xE3o de callback:"),og()(),Il(2588,"pre")(2589,"code",68),Qx(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),og()()()(),Il(2591,"tr",15)(2592,"td",16)(2593,"div",17)(2594,"span",18),Qx(2595," type"),zl(2596,"br"),og()()(),Il(2597,"td",19)(2598,"code",36),Qx(2599,"PoChartType"),og()(),Il(2600,"td",23)(2601,"em")(2602,"strong"),Qx(2603,"(opcional)"),og()(),Il(2604,"p"),Qx(2605,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),Il(2606,"code"),Qx(2607,"column"),og(),Qx(2608," e "),Il(2609,"code"),Qx(2610,"line"),og(),Qx(2611," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),og(),Il(2612,"ul")(2613,"li"),Qx(2614,"Serie A: "),Il(2615,"code"),Qx(2616,"{ type: ChartType.Column, data: ... }"),og(),Qx(2617,";"),og(),Il(2618,"li"),Qx(2619,"S\xE9rie B: "),Il(2620,"code"),Qx(2621,"{ type: ChartType.Line, data: ... }"),og(),Qx(2622,"."),og()(),Il(2623,"p"),Qx(2624,"Se tanto "),Il(2625,"code"),Qx(2626,"p-type"),og(),Qx(2627," quanto "),Il(2628,"code"),Qx(2629,"{ type }"),og(),Qx(2630," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),og(),Il(2631,"ul")(2632,"li")(2633,"code"),Qx(2634,"column"),og(),Qx(2635,": se "),Il(2636,"code"),Qx(2637,"data"),og(),Qx(2638," receber "),Il(2639,"code"),Qx(2640,"Array<number>"),og(),Qx(2641,";"),og(),Il(2642,"li")(2643,"code"),Qx(2644,"pie"),og(),Qx(2645,": se "),Il(2646,"code"),Qx(2647,"data"),og(),Qx(2648," for "),Il(2649,"em"),Qx(2650,"number"),og(),Qx(2651,"."),og()(),Il(2652,"blockquote")(2653,"p"),Qx(2654,"Se utilizada a propriedade "),Il(2655,"code"),Qx(2656,"p-type"),og(),Qx(2657,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),Il(2658,"code"),Qx(2659,"{type}"),og(),Qx(2660," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),Il(2661,"code"),Qx(2662,"p-type"),og(),Qx(2663,"."),og()(),Il(2664,"blockquote")(2665,"p"),Qx(2666,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),Il(2667,"code"),Qx(2668,"type"),og(),Qx(2669," definido, exceto para mesclagem para tipos "),Il(2670,"code"),Qx(2671,"column"),og(),Qx(2672," e "),Il(2673,"code"),Qx(2674,"line"),og(),Qx(2675,"."),og()()()()(),Il(2676,"h3"),Qx(2677,"Enums"),og(),Il(2678,"h4",4)(2679,"code",5),Qx(2680,"PoChartLabelFormat"),og()(),Il(2681,"div",2)(2682,"p")(2683,"em"),Qx(2684,"Enum"),og(),Il(2685,"code"),Qx(2686,"PoChartLabelFormat"),og(),Qx(2687," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),og()(),Il(2688,"h4",11),Qx(2689,"Propriedades"),og(),Il(2690,"table",12)(2691,"tr",13)(2692,"th",14),Qx(2693,"Nome"),og(),Il(2694,"th",14),Qx(2695,"Descri\xE7\xE3o"),og()(),Il(2696,"tr",15)(2697,"td",16)(2698,"div",17)(2699,"span",18),Qx(2700," Number"),zl(2701,"br"),og()()(),Il(2702,"td",23)(2703,"p"),Qx(2704,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),Il(2705,"code"),Qx(2706,"'1.2-2'"),og(),Qx(2707," da "),Il(2708,"a",69),Qx(2709,"DecimalPipe"),og(),Qx(2710,"."),og()()(),Il(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),Qx(2715," Currency"),zl(2716,"br"),og()()(),Il(2717,"td",23)(2718,"p"),Qx(2719,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),Il(2720,"a",70),Qx(2721,"DEFAULT_CURRENCY_CODE"),og(),Qx(2722,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),Il(2723,"a",71),Qx(2724,"LOCALE_ID"),og(),Qx(2725," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),og(),Il(2726,"pre")(2727,"code"),Qx(2728,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),og()()()()(),Il(2729,"h4",4)(2730,"code",5),Qx(2731,"PoChartType"),og()(),Il(2732,"div",2)(2733,"p")(2734,"em"),Qx(2735,"Enum"),og(),Il(2736,"code"),Qx(2737,"PoChartType"),og(),Qx(2738," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),og()(),Il(2739,"h4",11),Qx(2740,"Propriedades"),og(),Il(2741,"table",12)(2742,"tr",13)(2743,"th",14),Qx(2744,"Nome"),og(),Il(2745,"th",14),Qx(2746,"Descri\xE7\xE3o"),og()(),Il(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),Qx(2751," Area"),zl(2752,"br"),og()()(),Il(2753,"td",23)(2754,"p"),Qx(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),og()()(),Il(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),Qx(2760," Donut"),zl(2761,"br"),og()()(),Il(2762,"td",23)(2763,"p"),Qx(2764,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),og()()(),Il(2765,"tr",15)(2766,"td",16)(2767,"div",17)(2768,"span",18),Qx(2769," Pie"),zl(2770,"br"),og()()(),Il(2771,"td",23)(2772,"p"),Qx(2773,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),og()()(),Il(2774,"tr",15)(2775,"td",16)(2776,"div",17)(2777,"span",18),Qx(2778," Line"),zl(2779,"br"),og()()(),Il(2780,"td",23)(2781,"p"),Qx(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),Il(2783,"code"),Qx(2784,"column"),og(),Qx(2785," e "),Il(2786,"code"),Qx(2787,"area"),og(),Qx(2788,", definindo-se o tipo atrav\xE9s da propriedade "),Il(2789,"code"),Qx(2790,"PoChartSerie.type"),og(),Qx(2791,"."),og()()(),Il(2792,"tr",15)(2793,"td",16)(2794,"div",17)(2795,"span",18),Qx(2796," Column"),zl(2797,"br"),og()()(),Il(2798,"td",23)(2799,"p"),Qx(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),og()()(),Il(2801,"tr",15)(2802,"td",16)(2803,"div",17)(2804,"span",18),Qx(2805," Bar"),zl(2806,"br"),og()()(),Il(2807,"td",23)(2808,"p"),Qx(2809,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),og()()(),Il(2810,"tr",15)(2811,"td",16)(2812,"div",17)(2813,"span",18),Qx(2814," Gauge"),zl(2815,"br"),og()()(),Il(2816,"td",23)(2817,"p"),Qx(2818,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),og(),Il(2819,"ul")(2820,"li"),Qx(2821,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),og(),Il(2822,"li"),Qx(2823,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),og()()()(),Il(2824,"tr",15)(2825,"td",16)(2826,"div",17)(2827,"span",18),Qx(2828," Radar"),zl(2829,"br"),og()()(),Il(2830,"td",23)(2831,"p"),Qx(2832,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),og()()()()());},dependencies:[Ka],encapsulation:2})}return r})();var Oe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(d){return new(d||r)(C(Xn),C(En))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,i){d&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft$1("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-chart-doc"),og(),Il(4,"po-tab",3),ft$1("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),og()()()),d&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,fe,ve,Pe,we,Me,De,Ae,Re],encapsulation:2})}return r})();var _t=[{path:"",component:Oe}],Ge=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[uL.forChild(_t),uL]})}return r})();var yn=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[sr,Ge]})}return r})();export{yn as DocPoChartModule};