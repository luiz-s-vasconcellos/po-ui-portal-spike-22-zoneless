import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,n as nb,c_ as t,r as r$1,w,c$ as Xi,aW as Yp,cM as Z9,cN as lm,W,b$ as DT,d0 as J0,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,aI as dc,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,aJ as qhe,b5 as $he,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,X as we$1,bd as Ax,a7 as lN,cQ as Ik,cR as Ck,b7 as E3,d1 as RO,a4 as mN,aq as lx,br as iN,a5 as yN,at as ux,a3 as cNe,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&zl(0,"po-lookup",0);},dependencies:[J0],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Lookup Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-lookup-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Qe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,we],encapsulation:2})}return a})();var A=(()=>{class a{httpClient=f(nb);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService=f(A);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Xi.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we$1([A])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=Dx();Il(0,"po-lookup",1),ww("ngModelChange",function(m){return Xy(c),eN(o.lookup,m)||(o.lookup=m),Qy(m)}),ft("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),og(),QA(),zl(1,"po-divider"),Il(2,"po-container",2)(3,"div",3),zl(4,"po-info",4)(5,"po-info",5),og()(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"po-input",6),ww("ngModelChange",function(m){return Xy(c),eN(o.label,m)||(o.label=m),Qy(m)}),og(),QA(),Il(10,"po-checkbox-group",7),ww("ngModelChange",function(m){return Xy(c),eN(o.columnsName,m)||(o.columnsName=m),Qy(m)}),ft("p-change",function(){return o.updateColumns()}),og(),QA(),Il(11,"po-select",8),ww("ngModelChange",function(m){return Xy(c),eN(o.fieldLabel,m)||(o.fieldLabel=m),Qy(m)}),og(),QA(),Il(12,"po-select",9),ww("ngModelChange",function(m){return Xy(c),eN(o.fieldValue,m)||(o.fieldValue=m),Qy(m)}),og(),QA(),Il(13,"po-input",10),ww("ngModelChange",function(m){return Xy(c),eN(o.filterService,m)||(o.filterService=m),Qy(m)}),og(),QA(),Il(14,"po-input",11),ww("ngModelChange",function(m){return Xy(c),eN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Qy(m)}),og(),QA(),Il(15,"po-input",12),ww("ngModelChange",function(m){return Xy(c),eN(o.help,m)||(o.help=m),Qy(m)}),og(),QA(),Il(16,"po-input",13),ww("ngModelChange",function(m){return Xy(c),eN(o.helperText,m)||(o.helperText=m),Qy(m)}),og(),QA(),Il(17,"po-input",14),ww("ngModelChange",function(m){return Xy(c),eN(o.placeholder,m)||(o.placeholder=m),Qy(m)}),og(),QA(),Il(18,"po-input",15),ww("ngModelChange",function(m){return Xy(c),eN(o.literals,m)||(o.literals=m),Qy(m)}),ft("p-change",function(){return o.changeLiterals()}),og(),QA(),Il(19,"po-input",16),ww("ngModelChange",function(m){return Xy(c),eN(o.formatField,m)||(o.formatField=m),Qy(m)}),ft("p-change",function(m){return o.onFieldFormatChange(m)}),og(),QA(),Il(20,"po-checkbox-group",17),ww("ngModelChange",function(m){return Xy(c),eN(o.properties,m)||(o.properties=m),Qy(m)}),og(),QA(),Il(21,"po-radio-group",18),ww("ngModelChange",function(m){return Xy(c),eN(o.spacing,m)||(o.spacing=m),Qy(m)}),og(),QA(),Il(22,"po-radio-group",19),ww("ngModelChange",function(m){return Xy(c),eN(o.size,m)||(o.size=m),Qy(m)}),og(),QA(),Il(23,"po-textarea",20),ww("ngModelChange",function(m){return Xy(c),eN(o.advancedFilters,m)||(o.advancedFilters=m),Qy(m)}),ft("p-change",function(){return o.changeAdvancedFilters()}),og(),QA(),Il(24,"div",3)(25,"po-button",21),ft("p-click",function(){return o.restore()}),og()()();}l&2&&(Ew("ngModel",o.lookup),nw("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),e0(),Lp(4),nw("p-value",o.lookup),Lp(),nw("p-value",o.event),Lp(4),Ew("ngModel",o.label),e0(),Lp(),Ew("ngModel",o.columnsName),nw("p-options",o.columnsOptions),e0(),Lp(),Ew("ngModel",o.fieldLabel),nw("p-options",o.fieldLabelOptions),e0(),Lp(),Ew("ngModel",o.fieldValue),nw("p-options",o.fieldValueOptions),e0(),Lp(),Ew("ngModel",o.filterService),e0(),Lp(),Ew("ngModel",o.fieldErrorMessage),e0(),Lp(),Ew("ngModel",o.help),e0(),Lp(),Ew("ngModel",o.helperText),e0(),Lp(),Ew("ngModel",o.placeholder),e0(),Lp(),Ew("ngModel",o.literals),e0(),Lp(),Ew("ngModel",o.formatField),e0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(),Ew("ngModel",o.spacing),nw("p-options",o.typeSpacing),e0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),e0(),Lp(),Ew("ngModel",o.advancedFilters),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,dc,mv,C3,F3,J0,Dde,qhe,$he,Yhe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Lookup Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-lookup.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-lookup-labs"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ye,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=f(A);notification=f(Yp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we$1([A])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=Dx();Il(0,"div",1),zl(1,"po-info",2),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),ww("ngModelChange",function(m){return Xy(c),eN(o.hero,m)||(o.hero=m),Qy(m)}),og(),QA(),Il(7,"po-select",4),ww("ngModelChange",function(m){return Xy(c),eN(o.vehicle,m)||(o.vehicle=m),Qy(m)}),og(),QA(),og(),Il(8,"div",1)(9,"po-button",5),ft("p-click",function(){return o.startMission()}),og()()();}if(l&2){let c=Ax(4);Lp(6),Ew("ngModel",o.hero),nw("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",lN(10,Xe)),e0(),Lp(),Ew("ngModel",o.vehicle),nw("p-options",o.vehicles),e0(),Lp(2),nw("p-disabled",c.form.invalid||c.form.pending);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,J0,qhe,Yhe],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Lookup - Hero"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-lookup.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-lookup-hero"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,et,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ae],encapsulation:2})}return a})();var it=()=>["nickname","label"],nt=()=>({modalTitle:"Heroes available for mission"}),je=(()=>{class a{service=f(A);notification=f(Yp);formBuilder=f(Z9);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,lm.required],vehicle:[null,lm.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we$1([A])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Il(0,"div",0),zl(1,"po-info",1),og(),zl(2,"po-divider"),Il(3,"form",2)(4,"div",0),zl(5,"po-lookup",3),QA(),zl(6,"po-select",4),QA(),og(),Il(7,"div",0)(8,"po-button",5),ft("p-click",function(){return o.startMission()}),og()()()),l&2&&(Lp(3),nw("formGroup",o.formMission),Lp(2),nw("p-columns",o.columns)("p-field-format",lN(7,it))("p-filter-service",o.service)("p-literals",lN(8,nt)),e0(),Lp(),nw("p-options",o.vehicles),e0(),Lp(2),nw("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[G9,$9,z9,Ik,Ck,Qt,mv,J0,qhe,Yhe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Lookup - Hero Reactive Form"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-lookup.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-lookup-hero-reactive-form"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,at,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,je],encapsulation:2})}return a})();var de=(()=>{class a{http=f(nb);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(W(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(W(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,St){if(a&1&&(Il(0,"div",0),zl(1,"po-table",3),og()),a&2){let r=Sx();Lp(),nw("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ve=(()=>{class a{filterService=f(de);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we$1([de])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Il(0,"div",0)(1,"po-radio-group",1),ww("ngModelChange",function(p){return eN(o.filterParams,p)||(o.filterParams=p),p}),og(),QA(),og(),zl(2,"po-divider"),Il(3,"div",0)(4,"po-lookup",2),mN(5,"titlecase"),ww("ngModelChange",function(p){return eN(o.entity,p)||(o.entity=p),p}),ft("p-selected",function(p){return o.onSelected(p)}),og(),QA(),og(),lx(6,rt,2,4,"div",0)),l&2&&(Lp(),Ew("ngModel",o.filterParams),nw("p-options",o.entities),e0(),Lp(3),nw("p-help",iN("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",iN("",yN(5,12,o.entityLabel)," of Star Wars")),Ew("ngModel",o.entity),nw("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),e0(),Lp(2),ux(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[$9,mk,mv,J0,Dde,E3,RO],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Lookup - Star Wars films"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-lookup-sw-films"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,dt,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ve],encapsulation:2})}return a})();var He=(()=>{class a{http=f(nb);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(DT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ne=(()=>{class a{service=f(He);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Il(0,"div",0)(1,"po-lookup",1),ww("ngModelChange",function(p){return eN(o.multiLookup,p)||(o.multiLookup=p),p}),ft("p-change",function(p){return o.changeOptions(p)}),og(),QA(),Il(2,"po-container",2),zl(3,"po-table",3),og()()),l&2&&(Lp(),Ew("ngModel",o.multiLookup),nw("p-multiple",true),e0(),Lp(2),nw("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[$9,mk,dc,J0,E3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Lookup - Multiple"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-lookup-multiple"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ct,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ne],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6252,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoLookupComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Il(24,"code"),Qx(25,"po-lookup"),og(),Qx(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Il(27,"em"),Qx(28,"TAB"),og(),Qx(29,` para
buscar um registro.`),og(),Il(30,"blockquote")(31,"p"),Qx(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),og()(),Il(33,"blockquote")(34,"p"),Qx(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Il(36,"a",6),Qx(37,"modelo"),og(),Qx(38," como "),Il(39,"code"),Qx(40,"pending"),og(),Qx(41,"."),og()(),Il(42,"p"),Qx(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Il(44,"code"),Qx(45,"po-select"),og(),Qx(46," ou o "),Il(47,"code"),Qx(48,"po-combo"),og(),Qx(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Il(50,"a",7),Qx(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),og(),Qx(52,"."),og(),Il(53,"p"),Qx(54,"Importante:"),og(),Il(55,"ul")(56,"li"),Qx(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Il(58,"pre")(59,"code"),Qx(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),og()()()(),Il(61,"h4"),Qx(62,"Tokens customiz\xE1veis"),og(),Il(63,"p"),Qx(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(65,"blockquote")(66,"p"),Qx(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(68,"a",8),Qx(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(70,"."),og()(),Il(71,"table")(72,"thead")(73,"tr")(74,"th"),Qx(75,"Propriedade"),og(),Il(76,"th"),Qx(77,"Descri\xE7\xE3o"),og(),Il(78,"th"),Qx(79,"Valor Padr\xE3o"),og()()(),Il(80,"tbody")(81,"tr")(82,"td")(83,"strong"),Qx(84,"Default Values"),og()(),zl(85,"td")(86,"td"),og(),Il(87,"tr")(88,"td")(89,"code"),Qx(90,"--font-family"),og()(),Il(91,"td"),Qx(92,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(93,"td")(94,"code"),Qx(95,"var(--font-family-theme)"),og()()(),Il(96,"tr")(97,"td")(98,"code"),Qx(99,"--font-size"),og()(),Il(100,"td"),Qx(101,"Tamanho da fonte"),og(),Il(102,"td")(103,"code"),Qx(104,"var(--font-size-default)"),og()()(),Il(105,"tr")(106,"td")(107,"code"),Qx(108,"--text-color-placeholder"),og()(),Il(109,"td"),Qx(110,"Cor do texto no placeholder"),og(),Il(111,"td")(112,"code"),Qx(113,"var(--color-neutral-light-30)"),og()()(),Il(114,"tr")(115,"td")(116,"code"),Qx(117,"--color"),og()(),Il(118,"td"),Qx(119,"Cor principal do lookup"),og(),Il(120,"td")(121,"code"),Qx(122,"var(--color-neutral-dark-70)"),og()()(),Il(123,"tr")(124,"td")(125,"code"),Qx(126,"--border-radius"),og()(),Il(127,"td"),Qx(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(129,"td")(130,"code"),Qx(131,"var(--border-radius-md)"),og()()(),Il(132,"tr")(133,"td")(134,"code"),Qx(135,"--background"),og()(),Il(136,"td"),Qx(137,"Cor de background"),og(),Il(138,"td")(139,"code"),Qx(140,"var(--color-neutral-light-05)"),og()()(),Il(141,"tr")(142,"td")(143,"code"),Qx(144,"--text-color"),og()(),Il(145,"td"),Qx(146,"Cor do texto"),og(),Il(147,"td")(148,"code"),Qx(149,"var(--color-neutral-dark-90)"),og()()(),Il(150,"tr")(151,"td")(152,"code"),Qx(153,"--color-clear"),og()(),Il(154,"td"),Qx(155,"Cor principal do icone clear"),og(),Il(156,"td")(157,"code"),Qx(158,"var(--color-action-default)"),og()()(),Il(159,"tr")(160,"td")(161,"strong"),Qx(162,"Icon"),og()(),zl(163,"td")(164,"td"),og(),Il(165,"tr")(166,"td")(167,"code"),Qx(168,"--color-icon"),og()(),Il(169,"td"),Qx(170,"Cor principal do icone pesquisar"),og(),Il(171,"td")(172,"code"),Qx(173,"var(--color-action-default)"),og()()(),Il(174,"tr")(175,"td")(176,"strong"),Qx(177,"Hover"),og()(),zl(178,"td")(179,"td"),og(),Il(180,"tr")(181,"td")(182,"code"),Qx(183,"--color-hover"),og()(),Il(184,"td"),Qx(185,"Cor principal no estado hover"),og(),Il(186,"td")(187,"code"),Qx(188,"var(--color-brand-01-dark)"),og()()(),Il(189,"tr")(190,"td")(191,"code"),Qx(192,"--background-hover"),og()(),Il(193,"td"),Qx(194,"Cor de background no estado hover"),og(),Il(195,"td")(196,"code"),Qx(197,"var(--color-brand-01-lightest)"),og()()(),Il(198,"tr")(199,"td")(200,"strong"),Qx(201,"Focused"),og()(),zl(202,"td")(203,"td"),og(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--color-focused"),og()(),Il(208,"td"),Qx(209,"Cor principal no estado de focus"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-action-default)"),og()()(),Il(213,"tr")(214,"td")(215,"code"),Qx(216,"--outline-color-focused"),og()(),Il(217,"td"),Qx(218,"Cor do outline do estado de focus"),og(),Il(219,"td")(220,"code"),Qx(221,"var(--color-action-focus)"),og()()(),Il(222,"tr")(223,"td")(224,"strong"),Qx(225,"Disabled"),og()(),zl(226,"td")(227,"td"),og(),Il(228,"tr")(229,"td")(230,"code"),Qx(231,"--color-disabled"),og()(),Il(232,"td"),Qx(233,"Cor principal no estado disabled"),og(),Il(234,"td")(235,"code"),Qx(236,"var(--color-action-disabled)"),og()()(),Il(237,"tr")(238,"td")(239,"code"),Qx(240,"--background-disabled"),og()(),Il(241,"td"),Qx(242,"Cor de background no estado disabled"),og(),Il(243,"td")(244,"code"),Qx(245,"var(--color-neutral-light-20)"),og()()(),Il(246,"tr")(247,"td")(248,"code"),Qx(249,"--text-color-disabled"),og()(),Il(250,"td"),Qx(251,"Cor do texto quando campo est\xE1 desabilitado"),og(),Il(252,"td")(253,"code"),Qx(254,"var(--color-action-disabled)"),og()()(),Il(255,"tr")(256,"td")(257,"strong"),Qx(258,"Error"),og()(),zl(259,"td")(260,"td"),og(),Il(261,"tr")(262,"td")(263,"code"),Qx(264,"--color-error"),og()(),Il(265,"td"),Qx(266,"Cor de background no estado de requerido"),og(),Il(267,"td")(268,"code"),Qx(269,"var(--color-feedback-negative-base)"),og()()()()()(),Il(270,"div",9)(271,"h4",10),Qx(272,"Seletor"),og(),Il(273,"pre",11),Qx(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-loading="boolean"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),og()(),Il(275,"h4",12),Qx(276,"Propriedades"),og(),Il(277,"table",13)(278,"tr",14)(279,"th",15),Qx(280,"Nome"),og(),Il(281,"th",15),Qx(282,"Tipo"),og(),Il(283,"th",15),Qx(284,"Padr\xE3o"),og(),Il(285,"th",15),Qx(286,"Descri\xE7\xE3o"),og()(),Il(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),Qx(291," (p-additional-help)"),zl(292,"br"),og()(),Il(293,"div",20),Qx(294,"Deprecated"),og()(),Il(295,"td",21)(296,"code",22),Qx(297,"EventEmitter"),og()(),Il(298,"td",23),Qx(299,"-"),og(),Il(300,"td",24)(301,"em")(302,"strong"),Qx(303,"(opcional)"),og()(),Il(304,"p"),Qx(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(306,"blockquote")(307,"p"),Qx(308,"Essa propriedade est\xE1 "),Il(309,"strong"),Qx(310,"depreciada"),og(),Qx(311," e ser\xE1 removida na vers\xE3o "),Il(312,"code"),Qx(313,"23.x.x"),og(),Qx(314,". Recomendamos utilizar a propriedade "),Il(315,"code"),Qx(316,"p-helper"),og(),Qx(317," que oferece mais recursos e flexibilidade."),og()()()(),Il(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),Qx(322," p-additional-help-tooltip"),zl(323,"br"),og()(),Il(324,"div",20),Qx(325,"Deprecated"),og()(),Il(326,"td",21)(327,"code",27),Qx(328,"string"),og()(),Il(329,"td",23),Qx(330,"-"),og(),Il(331,"td",24)(332,"em")(333,"strong"),Qx(334,"(opcional)"),og()(),Il(335,"p"),Qx(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(337,"code"),Qx(338,"po-helper"),og(),Qx(339,`.
`),Il(340,"strong"),Qx(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(342,"blockquote")(343,"p"),Qx(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(345,"blockquote")(346,"p"),Qx(347,"Essa propriedade est\xE1 "),Il(348,"strong"),Qx(349,"depreciada"),og(),Qx(350," e ser\xE1 removida na vers\xE3o "),Il(351,"code"),Qx(352,"23.x.x"),og(),Qx(353,". Recomendamos utilizar a propriedade "),Il(354,"code"),Qx(355,"p-helper"),og(),Qx(356," que oferece mais recursos e flexibilidade."),og()()()(),Il(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),Qx(361," p-advanced-filters"),zl(362,"br"),og()()(),Il(363,"td",21)(364,"code",28),Qx(365,"Array<PoLookupAdvancedFilter>"),og()(),Il(366,"td",23),Qx(367,"-"),og(),Il(368,"td",24)(369,"em")(370,"strong"),Qx(371,"(opcional)"),og()(),Il(372,"p"),Qx(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Il(374,"blockquote")(375,"p"),Qx(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Il(377,"p"),Qx(378,"Exemplo de URL com busca avan\xE7ada:"),og(),Il(379,"pre")(380,"code"),Qx(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),og()(),Il(382,"p"),Qx(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),og(),Il(384,"pre")(385,"code"),Qx(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),og()()()(),Il(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),Qx(391," p-append-in-body"),zl(392,"br"),og()()(),Il(393,"td",21)(394,"code",29),Qx(395,"boolean"),og()(),Il(396,"td",23)(397,"p")(398,"code"),Qx(399,"false"),og()()(),Il(400,"td",24)(401,"em")(402,"strong"),Qx(403,"(opcional)"),og()(),Il(404,"p"),Qx(405,"Define que o popover ("),Il(406,"code"),Qx(407,"p-helper"),og(),Qx(408," e/ou "),Il(409,"code"),Qx(410,"p-error-limit"),og(),Qx(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(412,"blockquote")(413,"p"),Qx(414,"Quando utilizado com "),Il(415,"code"),Qx(416,"p-helper"),og(),Qx(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),Qx(422," p-auto-focus"),zl(423,"br"),og()()(),Il(424,"td",21)(425,"code",29),Qx(426,"boolean"),og()(),Il(427,"td",23)(428,"p")(429,"code"),Qx(430,"false"),og()()(),Il(431,"td",24)(432,"em")(433,"strong"),Qx(434,"(opcional)"),og()(),Il(435,"p"),Qx(436,"Aplica foco no elemento ao ser iniciado."),og(),Il(437,"blockquote")(438,"p"),Qx(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),Qx(444," p-auto-height"),zl(445,"br"),og()()(),Il(446,"td",21)(447,"code",29),Qx(448,"boolean"),og()(),Il(449,"td",23)(450,"p")(451,"code"),Qx(452,"false"),og()()(),Il(453,"td",24)(454,"em")(455,"strong"),Qx(456,"(opcional)"),og()(),Il(457,"p"),Qx(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),og()()(),Il(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),Qx(463," (p-change)"),zl(464,"br"),og()()(),Il(465,"td",21)(466,"code",22),Qx(467,"EventEmitter"),og()(),Il(468,"td",23),Qx(469,"-"),og(),Il(470,"td",24)(471,"em")(472,"strong"),Qx(473,"(opcional)"),og()(),Il(474,"p"),Qx(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),og()()(),Il(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),Qx(480," (p-change-visible-columns)"),zl(481,"br"),og()()(),Il(482,"td",21)(483,"code",22),Qx(484,"EventEmitter"),og()(),Il(485,"td",23),Qx(486,"-"),og(),Il(487,"td",24)(488,"em")(489,"strong"),Qx(490,"(opcional)"),og()(),Il(491,"p"),Qx(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Il(493,"p"),Qx(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Il(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),Qx(499," p-clean"),zl(500,"br"),og()()(),Il(501,"td",21)(502,"code",29),Qx(503,"boolean"),og()(),Il(504,"td",23),Qx(505,"-"),og(),Il(506,"td",24)(507,"p"),Qx(508,"Exibe um \xEDcone que permite limpar o campo."),og()()(),Il(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),Qx(513," (p-restore-column-manager)"),zl(514,"br"),og()()(),Il(515,"td",21)(516,"code",22),Qx(517,"EventEmitter"),og()(),Il(518,"td",23),Qx(519,"-"),og(),Il(520,"td",24)(521,"em")(522,"strong"),Qx(523,"(opcional)"),og()(),Il(524,"p"),Qx(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Il(526,"p"),Qx(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Il(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),Qx(532," p-columns"),zl(533,"br"),og()()(),Il(534,"td",21)(535,"code",30),Qx(536,"Array<PoLookupColumn>"),og()(),Il(537,"td",23),Qx(538,"-"),og(),Il(539,"td",24)(540,"em")(541,"strong"),Qx(542,"(opcional)"),og()(),Il(543,"p"),Qx(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),og()()(),Il(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),Qx(549," p-compact-label"),zl(550,"br"),og()()(),Il(551,"td",21)(552,"code",29),Qx(553,"boolean"),og()(),Il(554,"td",23)(555,"p")(556,"code"),Qx(557,"false"),og()()(),Il(558,"td",24)(559,"em")(560,"strong"),Qx(561,"(opcional)"),og()(),Il(562,"p"),Qx(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(564,"p"),Qx(565,"Quando habilitado ("),Il(566,"code"),Qx(567,"true"),og(),Qx(568,"), o modo compacto afeta o conjunto composto por:"),og(),Il(569,"ul")(570,"li")(571,"code"),Qx(572,"po-label"),og()(),Il(573,"li")(574,"code"),Qx(575,"p-requirement (showRequired)"),og()(),Il(576,"li")(577,"code"),Qx(578,"po-helper"),og()()(),Il(579,"p"),Qx(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(581,"p"),Qx(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(583,"ul")(584,"li")(585,"code"),Qx(586,"--field-container-title-justify"),og()(),Il(587,"li")(588,"code"),Qx(589,"--field-container-title-flex"),og()()(),Il(590,"p"),Qx(591,"Exemplo:"),og(),Il(592,"pre")(593,"code"),Qx(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(595,"p"),Qx(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),Qx(601," p-disabled"),zl(602,"br"),og()()(),Il(603,"td",21)(604,"code",29),Qx(605,"boolean"),og()(),Il(606,"td",23)(607,"p"),Qx(608,"false"),og()(),Il(609,"td",24)(610,"em")(611,"strong"),Qx(612,"(opcional)"),og()(),Il(613,"p"),Qx(614,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),Qx(619," p-error-limit"),zl(620,"br"),og()()(),Il(621,"td",21)(622,"code",29),Qx(623,"boolean"),og()(),Il(624,"td",23)(625,"p")(626,"code"),Qx(627,"false"),og()()(),Il(628,"td",24)(629,"em")(630,"strong"),Qx(631,"(opcional)"),og()(),Il(632,"p"),Qx(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(634,"blockquote")(635,"p"),Qx(636,"Caso essa propriedade seja definida como "),Il(637,"code"),Qx(638,"true"),og(),Qx(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),Qx(644," p-field-error-message"),zl(645,"br"),og()()(),Il(646,"td",21)(647,"code",27),Qx(648,"string"),og()(),Il(649,"td",23),Qx(650,"-"),og(),Il(651,"td",24)(652,"em")(653,"strong"),Qx(654,"(opcional)"),og()(),Il(655,"p"),Qx(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Il(657,"blockquote")(658,"p"),Qx(659,"Necess\xE1rio que a propriedade "),Il(660,"code"),Qx(661,"p-required"),og(),Qx(662," esteja habilitada."),og()()()(),Il(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),Qx(667," p-field-format"),zl(668,"br"),og()()(),Il(669,"td",21)(670,"code",31),Qx(671,"((value) => string) "),og(),Il(672,"code",32),Qx(673," Array<string>"),og()(),Il(674,"td",23),Qx(675,"-"),og(),Il(676,"td",24)(677,"em")(678,"strong"),Qx(679,"(opcional)"),og()(),Il(680,"p"),Qx(681,"Formato de exibi\xE7\xE3o do campo."),og(),Il(682,"p"),Qx(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Il(684,"em"),Qx(685,"string"),og(),Qx(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),og(),Il(687,"pre")(688,"code"),Qx(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),og()(),Il(690,"blockquote")(691,"p"),Qx(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Il(693,"code"),Qx(694,"p-field-label"),og(),Qx(695," na descri\xE7\xE3o do campo."),og()(),Il(696,"p"),Qx(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),og(),Il(698,"pre")(699,"code"),Qx(700,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),og()(),Il(701,"blockquote")(702,"p"),Qx(703,"Ser\xE1 utilizado "),Il(704,"code"),Qx(705,"-"),og(),Qx(706," como separador."),og()()()(),Il(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),Qx(711," p-field-label"),zl(712,"br"),og()()(),Il(713,"td",21)(714,"code",27),Qx(715,"string"),og()(),Il(716,"td",23),Qx(717,"-"),og(),Il(718,"td",24)(719,"p"),Qx(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),og()()(),Il(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),Qx(725," p-field-value"),zl(726,"br"),og()()(),Il(727,"td",21)(728,"code",27),Qx(729,"string"),og()(),Il(730,"td",23),Qx(731,"-"),og(),Il(732,"td",24)(733,"p"),Qx(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),og(),Il(735,"blockquote")(736,"p"),Qx(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),og()()()(),Il(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),Qx(742," p-filter-params"),zl(743,"br"),og()()(),Il(744,"td",21)(745,"code",33),Qx(746,"any"),og()(),Il(747,"td",23),Qx(748,"-"),og(),Il(749,"td",24)(750,"em")(751,"strong"),Qx(752,"(opcional)"),og()(),Il(753,"p"),Qx(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Il(755,"code"),Qx(756,"PoLookupFilter"),og(),Qx(757,"."),og()()(),Il(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),Qx(762," p-filter-service"),zl(763,"br"),og()()(),Il(764,"td",21)(765,"code",27),Qx(766,"string "),og(),Il(767,"code",34),Qx(768," PoLookupFilter"),og()(),Il(769,"td",23),Qx(770,"-"),og(),Il(771,"td",24)(772,"p"),Qx(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Il(774,"code"),Qx(775,"PoLookupFilter"),og(),Qx(776," ou uma URL."),og(),Il(777,"p"),Qx(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),og(),Il(779,"pre")(780,"code"),Qx(781,`url + ?page=1&pageSize=20&filter=Peter
`),og()(),Il(782,"p"),Qx(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Il(784,"code"),Qx(785,"order"),og(),Qx(786,", por exemplo:"),og(),Il(787,"ul")(788,"li")(789,"p"),Qx(790,"Coluna decrescente:"),og(),Il(791,"pre")(792,"code"),Qx(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),og()()(),Il(794,"li")(795,"p"),Qx(796,"Coluna ascendente:"),og(),Il(797,"pre")(798,"code"),Qx(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),og()()()(),Il(800,"p"),Qx(801,"Se for definido a propriedade "),Il(802,"code"),Qx(803,"p-filter-params"),og(),Qx(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Il(805,"code"),Qx(806,"{ age: 23 }"),og(),Qx(807," a URL ficaria:"),og(),Il(808,"pre")(809,"code"),Qx(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()(),Il(811,"p"),Qx(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),og(),Il(813,"pre")(814,"code"),Qx(815,`model = 1234;

GET url/1234
`),og()(),Il(816,"p"),Qx(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),og(),Il(818,"pre")(819,"code"),Qx(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),og()(),Il(821,"blockquote")(822,"p"),Qx(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Il(824,"a",7),Qx(825,"API do PO UI"),og(),Qx(826,` e utiliza os valores
definidos nas propriedades `),Il(827,"code"),Qx(828,"p-field-label"),og(),Qx(829," e "),Il(830,"code"),Qx(831,"p-field-value"),og(),Qx(832," para a constru\xE7\xE3o do "),Il(833,"code"),Qx(834,"po-lookup"),og(),Qx(835,"."),og()(),Il(836,"p"),Qx(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Il(838,"em"),Qx(839,"TAB"),og(),Qx(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Il(841,"a",35),Qx(842,"encodeURIComponent"),og(),Qx(843,`
e concatenado na URL da seguinte forma:`),og(),Il(844,"pre")(845,"code"),Qx(846,`url/valor%20que%20se%20deseja%20filtrar
`),og()(),Il(847,"blockquote")(848,"p"),Qx(849,"Quando informado um servi\xE7o que implemente a interface "),Il(850,"code"),Qx(851,"PoLookupFilter"),og(),Qx(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),og()()()(),Il(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),Qx(857," p-help"),zl(858,"br"),og()()(),Il(859,"td",21)(860,"code",27),Qx(861,"string"),og()(),Il(862,"td",23),Qx(863,"-"),og(),Il(864,"td",24)(865,"em")(866,"strong"),Qx(867,"(opcional)"),og()(),Il(868,"p"),Qx(869,"Texto de apoio do campo."),og()()(),Il(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),Qx(874," p-hide-columns-manager"),zl(875,"br"),og()()(),Il(876,"td",21)(877,"code",29),Qx(878,"boolean"),og()(),Il(879,"td",23)(880,"p")(881,"code"),Qx(882,"false"),og()()(),Il(883,"td",24)(884,"em")(885,"strong"),Qx(886,"(opcional)"),og()(),Il(887,"p"),Qx(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Il(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),Qx(893," p-infinite-scroll"),zl(894,"br"),og()()(),Il(895,"td",21)(896,"code",29),Qx(897,"boolean"),og()(),Il(898,"td",23)(899,"p")(900,"code"),Qx(901,"false"),og()()(),Il(902,"td",24)(903,"em")(904,"strong"),Qx(905,"(opcional)"),og()(),Il(906,"p"),Qx(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),og()()(),Il(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),Qx(912," (p-keydown)"),zl(913,"br"),og()()(),Il(914,"td",21)(915,"code",22),Qx(916,"EventEmitter"),og()(),Il(917,"td",23),Qx(918,"-"),og(),Il(919,"td",24)(920,"em")(921,"strong"),Qx(922,"(opcional)"),og()(),Il(923,"p"),Qx(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(925,"code"),Qx(926,"KeyboardEvent"),og(),Qx(927," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),Qx(932," p-label"),zl(933,"br"),og()()(),Il(934,"td",21)(935,"code",27),Qx(936,"string"),og()(),Il(937,"td",23),Qx(938,"-"),og(),Il(939,"td",24)(940,"em")(941,"strong"),Qx(942,"(opcional)"),og()(),Il(943,"p"),Qx(944,"Label do campo."),og(),Il(945,"blockquote")(946,"p"),Qx(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Il(948,"code"),Qx(949,"modalTitle"),og(),Qx(950," na propriedade "),Il(951,"code"),Qx(952,"p-literals"),og(),Qx(953,"."),og()()()(),Il(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),Qx(958," p-label-text-wrap"),zl(959,"br"),og()()(),Il(960,"td",21)(961,"code",29),Qx(962,"boolean"),og()(),Il(963,"td",23)(964,"p")(965,"code"),Qx(966,"false"),og()()(),Il(967,"td",24)(968,"em")(969,"strong"),Qx(970,"(opcional)"),og()(),Il(971,"p"),Qx(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(973,"code"),Qx(974,"p-label"),og(),Qx(975,". Quando "),Il(976,"code"),Qx(977,"p-label-text-wrap"),og(),Qx(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),Qx(983," p-literals"),zl(984,"br"),og()()(),Il(985,"td",21)(986,"code",36),Qx(987,"PoLookupLiterals"),og()(),Il(988,"td",23),Qx(989,"-"),og(),Il(990,"td",24)(991,"p"),Qx(992,"Objeto com as literais usadas no "),Il(993,"code"),Qx(994,"po-lookup"),og(),Qx(995,"."),og(),Il(996,"p"),Qx(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(998,"pre")(999,"code"),Qx(1e3,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),og()(),Il(1001,"p"),Qx(1002,"Ou passando apenas as literais que deseja customizar:"),og(),Il(1003,"pre")(1004,"code"),Qx(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),og()(),Il(1006,"p"),Qx(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(1008,"pre")(1009,"code"),Qx(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),og()(),Il(1011,"blockquote")(1012,"p"),Qx(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(1014,"a",37)(1015,"code"),Qx(1016,"PoI18nService"),og()(),Qx(1017," ou do browser."),og()()()(),Il(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),Qx(1022," p-loading"),zl(1023,"br"),og()()(),Il(1024,"td",21)(1025,"code",29),Qx(1026,"boolean"),og()(),Il(1027,"td",23)(1028,"p")(1029,"code"),Qx(1030,"false"),og()()(),Il(1031,"td",24)(1032,"em")(1033,"strong"),Qx(1034,"(opcional)"),og()(),Il(1035,"p"),Qx(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),Qx(1041," p-multiple"),zl(1042,"br"),og()()(),Il(1043,"td",21)(1044,"code",29),Qx(1045,"boolean"),og()(),Il(1046,"td",23)(1047,"p")(1048,"code"),Qx(1049,"false"),og()()(),Il(1050,"td",24)(1051,"em")(1052,"strong"),Qx(1053,"(opcional)"),og()(),Il(1054,"p"),Qx(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Il(1056,"blockquote")(1057,"p"),Qx(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Il(1059,"code"),Qx(1060,"[ 12345, 67890 ]"),og()()()()(),Il(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),Qx(1065," name"),zl(1066,"br"),og()()(),Il(1067,"td",21)(1068,"code",27),Qx(1069,"string"),og()(),Il(1070,"td",23),Qx(1071,"-"),og(),Il(1072,"td",24)(1073,"p"),Qx(1074,"Nome e Id do componente."),og()()(),Il(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),Qx(1079," p-no-autocomplete"),zl(1080,"br"),og()()(),Il(1081,"td",21)(1082,"code",29),Qx(1083,"boolean"),og()(),Il(1084,"td",23)(1085,"p")(1086,"code"),Qx(1087,"false"),og()()(),Il(1088,"td",24)(1089,"em")(1090,"strong"),Qx(1091,"(opcional)"),og()(),Il(1092,"p"),Qx(1093,"Define a propriedade nativa "),Il(1094,"code"),Qx(1095,"autocomplete"),og(),Qx(1096," do campo como "),Il(1097,"code"),Qx(1098,"off"),og(),Qx(1099,"."),og()()(),Il(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),Qx(1104," (p-error)"),zl(1105,"br"),og()()(),Il(1106,"td",21)(1107,"code",22),Qx(1108,"EventEmitter"),og()(),Il(1109,"td",23),Qx(1110,"-"),og(),Il(1111,"td",24)(1112,"p"),Qx(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),og()()(),Il(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),Qx(1118," p-optional"),zl(1119,"br"),og()()(),Il(1120,"td",21)(1121,"code",29),Qx(1122,"boolean"),og()(),Il(1123,"td",23)(1124,"p")(1125,"code"),Qx(1126,"false"),og()()(),Il(1127,"td",24)(1128,"em")(1129,"strong"),Qx(1130,"(opcional)"),og()(),Il(1131,"p"),Qx(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(1133,"blockquote")(1134,"p"),Qx(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1136,"ul")(1137,"li"),Qx(1138,"O campo conter "),Il(1139,"code"),Qx(1140,"p-required"),og(),Qx(1141,";"),og(),Il(1142,"li"),Qx(1143,"N\xE3o possuir "),Il(1144,"code"),Qx(1145,"p-help"),og(),Qx(1146," e/ou "),Il(1147,"code"),Qx(1148,"p-label"),og(),Qx(1149,"."),og()()()(),Il(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),Qx(1154," p-placeholder"),zl(1155,"br"),og()()(),Il(1156,"td",21)(1157,"code",27),Qx(1158,"string"),og()(),Il(1159,"td",23),Qx(1160,"-"),og(),Il(1161,"td",24)(1162,"p"),Qx(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),Qx(1168," p-helper"),zl(1169,"br"),og()()(),Il(1170,"td",21)(1171,"code",38),Qx(1172,"PoHelperOptions "),og(),Il(1173,"code",27),Qx(1174," string"),og()(),Il(1175,"td",23),Qx(1176,"-"),og(),Il(1177,"td",24)(1178,"em")(1179,"strong"),Qx(1180,"(opcional)"),og()(),Il(1181,"p"),Qx(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1183,"code"),Qx(1184,"p-label"),og(),Qx(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1186,"code"),Qx(1187,"p-label"),og(),Qx(1188,"."),og(),Il(1189,"blockquote")(1190,"p"),Qx(1191,"Para mais informa\xE7\xF5es acesse: "),Il(1192,"a",39),Qx(1193,"https://po-ui.io/documentation/po-helper"),og(),Qx(1194,"."),og()(),Il(1195,"blockquote")(1196,"p"),Qx(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1198,"code"),Qx(1199,"p-additional-help-tooltip"),og(),Qx(1200," e "),Il(1201,"code"),Qx(1202,"p-additional-help"),og(),Qx(1203,") ser\xE1 ignorado."),og()()()(),Il(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),Qx(1208," p-required"),zl(1209,"br"),og()()(),Il(1210,"td",21)(1211,"code",29),Qx(1212,"boolean"),og()(),Il(1213,"td",23)(1214,"p")(1215,"code"),Qx(1216,"false"),og()()(),Il(1217,"td",24)(1218,"em")(1219,"strong"),Qx(1220,"(opcional)"),og()(),Il(1221,"p"),Qx(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Il(1223,"blockquote")(1224,"p"),Qx(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Il(1226,"code"),Qx(1227,"(p-disabled)"),og(),Qx(1228,"."),og()()()(),Il(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),Qx(1233," (p-selected)"),zl(1234,"br"),og()()(),Il(1235,"td",21)(1236,"code",22),Qx(1237,"EventEmitter"),og()(),Il(1238,"td",23),Qx(1239,"-"),og(),Il(1240,"td",24)(1241,"em")(1242,"strong"),Qx(1243,"(opcional)"),og()(),Il(1244,"p"),Qx(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),og()()(),Il(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),Qx(1250," p-show-required"),zl(1251,"br"),og()()(),Il(1252,"td",21)(1253,"code",29),Qx(1254,"boolean"),og()(),Il(1255,"td",23),Qx(1256,"-"),og(),Il(1257,"td",24)(1258,"p"),Qx(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),og(),Il(1260,"blockquote")(1261,"p"),Qx(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1263,"ul")(1264,"li"),Qx(1265,"N\xE3o possuir "),Il(1266,"code"),Qx(1267,"p-help"),og(),Qx(1268," e/ou "),Il(1269,"code"),Qx(1270,"p-label"),og(),Qx(1271,"."),og()()()(),Il(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),Qx(1276," p-size"),zl(1277,"br"),og()()(),Il(1278,"td",21)(1279,"code",27),Qx(1280,"string"),og()(),Il(1281,"td",23)(1282,"p")(1283,"code"),Qx(1284,"medium"),og()()(),Il(1285,"td",24)(1286,"em")(1287,"strong"),Qx(1288,"(opcional)"),og()(),Il(1289,"p"),Qx(1290,"Define o tamanho do componente:"),og(),Il(1291,"ul")(1292,"li")(1293,"code"),Qx(1294,"small"),og(),Qx(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1296,"li")(1297,"code"),Qx(1298,"medium"),og(),Qx(1299,": altura do input como 44px."),og()(),Il(1300,"blockquote")(1301,"p"),Qx(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1303,"code"),Qx(1304,"medium"),og(),Qx(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1306,"a",40),Qx(1307,"po-theme"),og(),Qx(1308,"."),og()()()(),Il(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),Qx(1313," p-spacing"),zl(1314,"br"),og()()(),Il(1315,"td",21)(1316,"code",27),Qx(1317,"string"),og()(),Il(1318,"td",23)(1319,"p")(1320,"code"),Qx(1321,"medium"),og()()(),Il(1322,"td",24)(1323,"em")(1324,"strong"),Qx(1325,"(opcional)"),og()(),Il(1326,"p"),Qx(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Il(1328,"strong"),Qx(1329,"PoTableColumnSpacing"),og(),Qx(1330,"."),og(),Il(1331,"blockquote")(1332,"p"),Qx(1333,"Em n\xEDvel de acessibilidade "),Il(1334,"strong"),Qx(1335,"AA"),og(),Qx(1336,", caso o valor de "),Il(1337,"code"),Qx(1338,"p-spacing"),og(),Qx(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Il(1340,"code"),Qx(1341,"extraSmall"),og(),Qx(1342,`
nos seguintes cen\xE1rios:`),og(),Il(1343,"ul")(1344,"li"),Qx(1345,"Quando o valor de "),Il(1346,"code"),Qx(1347,"p-size"),og(),Qx(1348," for "),Il(1349,"code"),Qx(1350,"small"),og(),Qx(1351,";"),og(),Il(1352,"li"),Qx(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Il(1354,"code"),Qx(1355,"small"),og(),Qx(1356,` no
`),Il(1357,"a",40),Qx(1358,"servi\xE7o de tema"),og(),Qx(1359,"."),og()()()()(),Il(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),Qx(1364," p-text-wrap"),zl(1365,"br"),og()()(),Il(1366,"td",21)(1367,"code",29),Qx(1368,"boolean"),og()(),Il(1369,"td",23)(1370,"p")(1371,"code"),Qx(1372,"false"),og()()(),Il(1373,"td",24)(1374,"em")(1375,"strong"),Qx(1376,"(opcional)"),og()(),Il(1377,"p"),Qx(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Il(1379,"p"),Qx(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),og(),Il(1381,"blockquote")(1382,"p"),Qx(1383,"Incompat\xEDvel com "),Il(1384,"code"),Qx(1385,"virtual-scroll"),og(),Qx(1386,", que requer altura fixa nas linhas."),og()()()(),Il(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),Qx(1391," p-virtual-scroll"),zl(1392,"br"),og()()(),Il(1393,"td",21)(1394,"code",29),Qx(1395,"boolean"),og()(),Il(1396,"td",23)(1397,"p")(1398,"code"),Qx(1399,"true"),og()()(),Il(1400,"td",24)(1401,"em")(1402,"strong"),Qx(1403,"(opcional)"),og()(),Il(1404,"p"),Qx(1405,"Habilita o "),Il(1406,"code"),Qx(1407,"virtual-scroll"),og(),Qx(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Il(1409,"code"),Qx(1410,"virtual-scroll"),og(),Qx(1411," ser\xE1 ativado automaticamente."),og(),Il(1412,"blockquote")(1413,"p"),Qx(1414,"Incompat\xEDvel com "),Il(1415,"code"),Qx(1416,"p-text-wrap"),og(),Qx(1417," e "),Il(1418,"code"),Qx(1419,"master-detail"),og(),Qx(1420,", pois o "),Il(1421,"code"),Qx(1422,"virtual-scroll"),og(),Qx(1423," exige altura fixa nas linhas."),og()()()()(),Il(1424,"h3",12),Qx(1425,"M\xE9todos"),og(),Il(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),Qx(1432," focus "),og()()()()(),Il(1433,"tr",24)(1434,"td",24)(1435,"p"),Qx(1436,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1437,"p"),Qx(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1439,"pre")(1440,"code"),Qx(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),og()()()()(),zl(1442,"br"),Il(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),Qx(1449," showAdditionalHelp "),og()()()()(),Il(1450,"tr",24)(1451,"td",24)(1452,"p"),Qx(1453,"M\xE9todo que exibe "),Il(1454,"code"),Qx(1455,"p-helper"),og(),Qx(1456," ou executa a a\xE7\xE3o definida em "),Il(1457,"code"),Qx(1458,"p-helper{eventOnClick}"),og(),Qx(1459," ou em "),Il(1460,"code"),Qx(1461,"p-additionalHelp"),og(),Qx(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1463,"code"),Qx(1464,"p-keydown"),og(),Qx(1465,"."),og(),Il(1466,"blockquote")(1467,"p"),Qx(1468,"Exibe ou oculta o conte\xFAdo do componente "),Il(1469,"code"),Qx(1470,"po-helper"),og(),Qx(1471," quando o componente estiver com foco."),og()(),Il(1472,"pre")(1473,"code"),Qx(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),og()(),Il(1475,"pre")(1476,"code"),Qx(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1478,"br"),Il(1479,"h3"),Qx(1480,"Interfaces"),og(),Il(1481,"h4",43)(1482,"code",5),Qx(1483,"PoLookupAdvancedFilter"),og()(),Il(1484,"div",2)(1485,"p"),Qx(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),og()(),Il(1487,"h4",12),Qx(1488,"Propriedades"),og(),Il(1489,"table",13)(1490,"tr",14)(1491,"th",15),Qx(1492,"Nome"),og(),Il(1493,"th",15),Qx(1494,"Tipo"),og(),Il(1495,"th",15),Qx(1496,"Descri\xE7\xE3o"),og()(),Il(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),Qx(1501," additionalHelp"),zl(1502,"br"),og()()(),Il(1503,"td",21)(1504,"code",44),Qx(1505,"Function"),og()(),Il(1506,"td",24)(1507,"em")(1508,"strong"),Qx(1509,"(opcional)"),og()(),Il(1510,"p"),Qx(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(1512,"blockquote")(1513,"p"),Qx(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Il(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),Qx(1519," additionalHelpTooltip"),zl(1520,"br"),og()()(),Il(1521,"td",21)(1522,"code",27),Qx(1523,"string"),og()(),Il(1524,"td",24)(1525,"em")(1526,"strong"),Qx(1527,"(opcional)"),og()(),Il(1528,"p"),Qx(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(1530,"code"),Qx(1531,"po-helper"),og(),Qx(1532,`.
`),Il(1533,"strong"),Qx(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(1535,"blockquote")(1536,"p"),Qx(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Il(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),Qx(1542," advancedFilters"),zl(1543,"br"),og()()(),Il(1544,"td",21)(1545,"code",28),Qx(1546,"Array<PoLookupAdvancedFilter>"),og()(),Il(1547,"td",24)(1548,"em")(1549,"strong"),Qx(1550,"(opcional)"),og()(),Il(1551,"p"),Qx(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Il(1553,"blockquote")(1554,"p"),Qx(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Il(1556,"p"),Qx(1557,"Exemplo de URL com busca avan\xE7ada:"),og(),Il(1558,"p")(1559,"code"),Qx(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Il(1561,"p"),Qx(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Il(1563,"p")(1564,"code"),Qx(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Il(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),Qx(1570," appendBox"),zl(1571,"br"),og()()(),Il(1572,"td",21)(1573,"code",29),Qx(1574,"boolean"),og()(),Il(1575,"td",24)(1576,"em")(1577,"strong"),Qx(1578,"(opcional)"),og()(),Il(1579,"p"),Qx(1580,"Define que o "),Il(1581,"code"),Qx(1582,"listbox"),og(),Qx(1583," e/ou popover ("),Il(1584,"code"),Qx(1585,"p-helper"),og(),Qx(1586," e/ou "),Il(1587,"code"),Qx(1588,"p-error-limit"),og(),Qx(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Il(1590,"blockquote")(1591,"p"),Qx(1592,"Quando utilizado com "),Il(1593,"code"),Qx(1594,"p-helper"),og(),Qx(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),Qx(1600," autoHeight"),zl(1601,"br"),og()()(),Il(1602,"td",21)(1603,"code",29),Qx(1604,"boolean"),og()(),Il(1605,"td",24)(1606,"em")(1607,"strong"),Qx(1608,"(opcional)"),og()(),Il(1609,"p"),Qx(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Il(1611,"p")(1612,"strong"),Qx(1613,"Componentes compat\xEDveis:"),og(),Il(1614,"code"),Qx(1615,"po-multiselect"),og(),Qx(1616,", "),Il(1617,"code"),Qx(1618,"po-lookup"),og(),Qx(1619,"."),og()()(),Il(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),Qx(1624," autoUpload"),zl(1625,"br"),og()()(),Il(1626,"td",21)(1627,"code",29),Qx(1628,"boolean"),og()(),Il(1629,"td",24)(1630,"em")(1631,"strong"),Qx(1632,"(opcional)"),og()(),Il(1633,"p"),Qx(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Il(1635,"p")(1636,"strong"),Qx(1637,"Componente compat\xEDvel"),og(),Qx(1638,": "),Il(1639,"code"),Qx(1640,"po-upload"),og()()()(),Il(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),Qx(1645," booleanFalse"),zl(1646,"br"),og()()(),Il(1647,"td",21)(1648,"code",27),Qx(1649,"string"),og()(),Il(1650,"td",24)(1651,"em")(1652,"strong"),Qx(1653,"(opcional)"),og()(),Il(1654,"p"),Qx(1655,"Texto exibido quando o valor do componente for "),Il(1656,"em"),Qx(1657,"false"),og(),Qx(1658,"."),og()()(),Il(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),Qx(1663," booleanTrue"),zl(1664,"br"),og()()(),Il(1665,"td",21)(1666,"code",27),Qx(1667,"string"),og()(),Il(1668,"td",24)(1669,"em")(1670,"strong"),Qx(1671,"(opcional)"),og()(),Il(1672,"p"),Qx(1673,"Texto exibido quando o valor do componente for "),Il(1674,"em"),Qx(1675,"true"),og(),Qx(1676,"."),og()()(),Il(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),Qx(1681," changeOnEnter"),zl(1682,"br"),og()()(),Il(1683,"td",21)(1684,"code",29),Qx(1685,"boolean"),og()(),Il(1686,"td",24)(1687,"em")(1688,"strong"),Qx(1689,"(opcional)"),og()(),Il(1690,"p"),Qx(1691,"Indica que o evento "),Il(1692,"code"),Qx(1693,"p-change"),og(),Qx(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Il(1695,"code"),Qx(1696,"po-combo"),og(),Qx(1697,"."),og()()(),Il(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),Qx(1702," changeVisibleColumns"),zl(1703,"br"),og()()(),Il(1704,"td",21)(1705,"code",44),Qx(1706,"Function"),og()(),Il(1707,"td",24)(1708,"em")(1709,"strong"),Qx(1710,"(opcional)"),og()(),Il(1711,"p"),Qx(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Il(1713,"p"),Qx(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Il(1715,"p")(1716,"strong"),Qx(1717,"Componente compat\xEDvel"),og(),Qx(1718,": "),Il(1719,"code"),Qx(1720,"po-lookup"),og()()()(),Il(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),Qx(1725," clean"),zl(1726,"br"),og()()(),Il(1727,"td",21)(1728,"code",29),Qx(1729,"boolean"),og()(),Il(1730,"td",24)(1731,"em")(1732,"strong"),Qx(1733,"(opcional)"),og()(),Il(1734,"p"),Qx(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Il(1736,"p")(1737,"strong"),Qx(1738,"Componentes compat\xEDveis:"),og(),Il(1739,"code"),Qx(1740,"po-datepicker"),og(),Qx(1741,", "),Il(1742,"code"),Qx(1743,"po-datepicker-range"),og(),Qx(1744,", "),Il(1745,"code"),Qx(1746,"po-input"),og(),Qx(1747,", "),Il(1748,"code"),Qx(1749,"po-number"),og(),Qx(1750,", "),Il(1751,"code"),Qx(1752,"po-decimal"),og(),Qx(1753,`,
`),Il(1754,"code"),Qx(1755,"po-combo"),og(),Qx(1756,", "),Il(1757,"code"),Qx(1758,"po-lookup"),og(),Qx(1759,", "),Il(1760,"code"),Qx(1761,"po-password"),og(),Qx(1762,", "),Il(1763,"code"),Qx(1764,"po-timepicker"),og(),Qx(1765,"."),og()()(),Il(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),Qx(1770," columnRestoreManager"),zl(1771,"br"),og()()(),Il(1772,"td",21)(1773,"code",44),Qx(1774,"Function"),og()(),Il(1775,"td",24)(1776,"em")(1777,"strong"),Qx(1778,"(opcional)"),og()(),Il(1779,"p"),Qx(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Il(1781,"p"),Qx(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Il(1783,"p")(1784,"strong"),Qx(1785,"Componente compat\xEDvel"),og(),Qx(1786,": "),Il(1787,"code"),Qx(1788,"po-lookup"),og()()()(),Il(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),Qx(1793," columns"),zl(1794,"br"),og()()(),Il(1795,"td",21)(1796,"code",30),Qx(1797,"Array<PoLookupColumn> "),og(),Il(1798,"code",45),Qx(1799," number"),og()(),Il(1800,"td",24)(1801,"em")(1802,"strong"),Qx(1803,"(opcional)"),og()(),Il(1804,"p"),Qx(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Il(1806,"code"),Qx(1807,"searchService"),og(),Qx(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Il(1809,"a",46)(1810,"code"),Qx(1811,"PoLookupColumn"),og()(),Qx(1812,"."),og(),Il(1813,"blockquote")(1814,"p"),Qx(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Il(1816,"em"),Qx(1817,"label"),og(),Qx(1818," e "),Il(1819,"em"),Qx(1820,"value"),og(),Qx(1821,` para valores
de tela e do model respectivamente.`),og()(),Il(1822,"p")(1823,"strong"),Qx(1824,"Componentes compat\xEDveis:"),og(),Il(1825,"code"),Qx(1826,"po-radio-group"),og(),Qx(1827,", "),Il(1828,"code"),Qx(1829,"po-lookup"),og(),Qx(1830,", "),Il(1831,"code"),Qx(1832,"po-checkbox-group"),og(),Qx(1833,"."),og()()(),Il(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),Qx(1838," compactLabel"),zl(1839,"br"),og()()(),Il(1840,"td",21)(1841,"code",29),Qx(1842,"boolean"),og()(),Il(1843,"td",24)(1844,"em")(1845,"strong"),Qx(1846,"(opcional)"),og()(),Il(1847,"p"),Qx(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(1849,"p"),Qx(1850,"Quando habilitado ("),Il(1851,"code"),Qx(1852,"true"),og(),Qx(1853,"), o modo compacto afeta o conjunto composto por:"),og(),Il(1854,"ul")(1855,"li")(1856,"code"),Qx(1857,"po-label"),og()(),Il(1858,"li")(1859,"code"),Qx(1860,"p-requirement (showRequired)"),og()(),Il(1861,"li")(1862,"code"),Qx(1863,"po-helper"),og()()(),Il(1864,"p"),Qx(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(1866,"p"),Qx(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(1868,"ul")(1869,"li")(1870,"code"),Qx(1871,"--field-container-title-justify"),og()(),Il(1872,"li")(1873,"code"),Qx(1874,"--field-container-title-flex"),og()()(),Il(1875,"p"),Qx(1876,"Exemplo:"),og(),Il(1877,"pre")(1878,"code"),Qx(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(1880,"p"),Qx(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),Qx(1886," container"),zl(1887,"br"),og()()(),Il(1888,"td",21)(1889,"code",27),Qx(1890,"string"),og()(),Il(1891,"td",24)(1892,"em")(1893,"strong"),Qx(1894,"(opcional)"),og()(),Il(1895,"p"),Qx(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Il(1897,"p"),Qx(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Il(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),Qx(1903," customAction"),zl(1904,"br"),og()()(),Il(1905,"td",21)(1906,"code",47),Qx(1907,"PoProgressAction"),og()(),Il(1908,"td",24)(1909,"em")(1910,"strong"),Qx(1911,"(opcional)"),og()(),Il(1912,"p"),Qx(1913,"Define uma a\xE7\xE3o personalizada no componente "),Il(1914,"code"),Qx(1915,"po-upload"),og(),Qx(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Il(1917,"p")(1918,"strong"),Qx(1919,"Componente compat\xEDvel"),og(),Qx(1920,": "),Il(1921,"code"),Qx(1922,"po-upload"),og(),Qx(1923,","),og(),Il(1924,"p")(1925,"strong"),Qx(1926,"Exemplo de configura\xE7\xE3o"),og(),Qx(1927,":"),og(),Il(1928,"pre")(1929,"code",48),Qx(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Il(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),Qx(1935," customActionClick"),zl(1936,"br"),og()()(),Il(1937,"td",21)(1938,"code",49),Qx(1939,"(file: PoUploadFile) => void"),og()(),Il(1940,"td",24)(1941,"em")(1942,"strong"),Qx(1943,"(opcional)"),og()(),Il(1944,"p"),Qx(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Il(1946,"code"),Qx(1947,"p-custom-action"),og(),Qx(1948,"."),og(),Il(1949,"p")(1950,"strong"),Qx(1951,"Componente compat\xEDvel"),og(),Qx(1952,": "),Il(1953,"code"),Qx(1954,"po-upload"),og(),Qx(1955,","),og(),Il(1956,"p"),Qx(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Il(1958,"p")(1959,"strong"),Qx(1960,"Par\xE2metro do evento"),og(),Qx(1961,":"),og(),Il(1962,"ul")(1963,"li")(1964,"code"),Qx(1965,"file"),og(),Qx(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Il(1967,"code"),Qx(1968,"PoUploadFile"),og(),Qx(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Il(1970,"p")(1971,"strong"),Qx(1972,"Exemplo de uso"),og(),Qx(1973,":"),og(),Il(1974,"pre")(1975,"code",48),Qx(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Il(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),Qx(1981," debounceTime"),zl(1982,"br"),og()()(),Il(1983,"td",21)(1984,"code",45),Qx(1985,"number"),og()(),Il(1986,"td",24)(1987,"em")(1988,"strong"),Qx(1989,"(opcional)"),og()(),Il(1990,"p"),Qx(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Il(1992,"code"),Qx(1993,"p-filter-service"),og(),Qx(1994,")."),og(),Il(1995,"p")(1996,"strong"),Qx(1997,"Componentes compat\xEDveis:"),og(),Il(1998,"code"),Qx(1999,"po-combo"),og(),Qx(2e3,", "),Il(2001,"code"),Qx(2002,"po-multiselect"),og(),Qx(2003,"."),og()()(),Il(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),Qx(2008," decimalsLength"),zl(2009,"br"),og()()(),Il(2010,"td",21)(2011,"code",45),Qx(2012,"number"),og()(),Il(2013,"td",24)(2014,"em")(2015,"strong"),Qx(2016,"(opcional)"),og()(),Il(2017,"p"),Qx(2018,"Quantidade m\xE1xima de casas decimais."),og(),Il(2019,"blockquote")(2020,"p"),Qx(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Il(2022,"code"),Qx(2023,"type"),og(),Qx(2024," for "),Il(2025,"em"),Qx(2026,"currency"),og(),Qx(2027," ou "),Il(2028,"em"),Qx(2029,"decimal"),og(),Qx(2030,"."),og()()()(),Il(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),Qx(2035," directory"),zl(2036,"br"),og()()(),Il(2037,"td",21)(2038,"code",29),Qx(2039,"boolean"),og()(),Il(2040,"td",24)(2041,"em")(2042,"strong"),Qx(2043,"(opcional)"),og()(),Il(2044,"p"),Qx(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Il(2046,"blockquote")(2047,"p"),Qx(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Il(2049,"blockquote")(2050,"p"),Qx(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Il(2052,"strong"),Qx(2053,"Internet Explorer"),og(),Qx(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Il(2055,"p")(2056,"strong"),Qx(2057,"Componente compat\xEDvel"),og(),Qx(2058,": "),Il(2059,"code"),Qx(2060,"po-upload"),og()()()(),Il(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),Qx(2065," disabled"),zl(2066,"br"),og()()(),Il(2067,"td",21)(2068,"code",29),Qx(2069,"boolean"),og()(),Il(2070,"td",24)(2071,"em")(2072,"strong"),Qx(2073,"(opcional)"),og()(),Il(2074,"p"),Qx(2075,"Desabilita o campo caso informar o valor "),Il(2076,"em"),Qx(2077,"true"),og(),Qx(2078,"."),og()()(),Il(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),Qx(2083," disabledInitFilter"),zl(2084,"br"),og()()(),Il(2085,"td",21)(2086,"code",29),Qx(2087,"boolean"),og()(),Il(2088,"td",24)(2089,"em")(2090,"strong"),Qx(2091,"(opcional)"),og()(),Il(2092,"p"),Qx(2093,"Desabilita o filtro inicial no servi\xE7o do "),Il(2094,"code"),Qx(2095,"po-combo"),og(),Qx(2096,", que \xE9 executado no primeiro clique no campo."),og()()(),Il(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),Qx(2101," disabledTabFilter"),zl(2102,"br"),og()()(),Il(2103,"td",21)(2104,"code",29),Qx(2105,"boolean"),og()(),Il(2106,"td",24)(2107,"em")(2108,"strong"),Qx(2109,"(opcional)"),og()(),Il(2110,"p"),Qx(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Il(2112,"code"),Qx(2113,"po-combo"),og(),Qx(2114,"."),og()()(),Il(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),Qx(2119," divider"),zl(2120,"br"),og()()(),Il(2121,"td",21)(2122,"code",27),Qx(2123,"string"),og()(),Il(2124,"td",24)(2125,"em")(2126,"strong"),Qx(2127,"(opcional)"),og()(),Il(2128,"p"),Qx(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Il(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),Qx(2134," dragDrop"),zl(2135,"br"),og()()(),Il(2136,"td",21)(2137,"code",29),Qx(2138,"boolean"),og()(),Il(2139,"td",24)(2140,"em")(2141,"strong"),Qx(2142,"(opcional)"),og()(),Il(2143,"p"),Qx(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Il(2145,"blockquote")(2146,"p"),Qx(2147,"Recomendamos utilizar apenas um "),Il(2148,"code"),Qx(2149,"po-upload"),og(),Qx(2150," com esta funcionalidade por tela."),og()(),Il(2151,"p")(2152,"strong"),Qx(2153,"Componente compat\xEDvel"),og(),Qx(2154,": "),Il(2155,"code"),Qx(2156,"po-upload"),og()()()(),Il(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),Qx(2161," dragDropHeight"),zl(2162,"br"),og()()(),Il(2163,"td",21)(2164,"code",45),Qx(2165,"number"),og()(),Il(2166,"td",24)(2167,"em")(2168,"strong"),Qx(2169,"(opcional)"),og()(),Il(2170,"p"),Qx(2171,"Define em "),Il(2172,"em"),Qx(2173,"pixels"),og(),Qx(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Il(2175,"code"),Qx(2176,"160px"),og(),Qx(2177,"."),og(),Il(2178,"blockquote")(2179,"p"),Qx(2180,"Esta propriedade funciona somente se a propriedade "),Il(2181,"code"),Qx(2182,"p-drag-drop"),og(),Qx(2183," estiver habilitada."),og()(),Il(2184,"p")(2185,"strong"),Qx(2186,"Componente compat\xEDvel"),og(),Qx(2187,": "),Il(2188,"code"),Qx(2189,"po-upload"),og()()()(),Il(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),Qx(2194," errorAsyncFunction"),zl(2195,"br"),og()()(),Il(2196,"td",21)(2197,"code",50),Qx(2198,"(value) => Observable<boolean>"),og()(),Il(2199,"td",24)(2200,"em")(2201,"strong"),Qx(2202,"(opcional)"),og()(),Il(2203,"p"),Qx(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(2205,"code"),Qx(2206,"change"),og(),Qx(2207," ou "),Il(2208,"code"),Qx(2209,"change-model"),og(),Qx(2210,", dependendo do valor da propriedade "),Il(2211,"code"),Qx(2212,"triggerMode"),og(),Qx(2213,"."),og(),Il(2214,"blockquote")(2215,"p"),Qx(2216,"Retorna "),Il(2217,"code"),Qx(2218,"Observable com o valor true"),og(),Qx(2219," para sinalizar o erro "),Il(2220,"code"),Qx(2221,"false"),og(),Qx(2222," para indicar que n\xE3o h\xE1 erro."),og()(),Il(2223,"p")(2224,"strong"),Qx(2225,"Componente compat\xEDvel"),og(),Qx(2226,": "),Il(2227,"code"),Qx(2228,"po-datepicker"),og()()()(),Il(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),Qx(2233," errorAsyncProperties"),zl(2234,"br"),og()()(),Il(2235,"td",21)(2236,"code",51),Qx(2237,"ErrorAsyncProperties"),og()(),Il(2238,"td",24)(2239,"em")(2240,"strong"),Qx(2241,"(opcional)"),og()(),Il(2242,"p"),Qx(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Il(2244,"p")(2245,"strong"),Qx(2246,"Componentes compat\xEDveis:"),og(),Il(2247,"code"),Qx(2248,"po-input"),og(),Qx(2249,", "),Il(2250,"code"),Qx(2251,"po-number"),og(),Qx(2252,", "),Il(2253,"code"),Qx(2254,"po-decimal"),og(),Qx(2255,", "),Il(2256,"code"),Qx(2257,"po-password"),og(),Qx(2258,"."),og()()(),Il(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),Qx(2263," errorLimit"),zl(2264,"br"),og()()(),Il(2265,"td",21)(2266,"code",29),Qx(2267,"boolean"),og()(),Il(2268,"td",24)(2269,"em")(2270,"strong"),Qx(2271,"(opcional)"),og()(),Il(2272,"p"),Qx(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(2274,"blockquote")(2275,"p"),Qx(2276,"Caso essa propriedade seja definida como "),Il(2277,"code"),Qx(2278,"true"),og(),Qx(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Il(2280,"p")(2281,"strong"),Qx(2282,"Componentes compat\xEDveis:"),og(),Il(2283,"code"),Qx(2284,"po-checkbox-group"),og(),Qx(2285,", "),Il(2286,"code"),Qx(2287,"po-combo"),og(),Qx(2288,", "),Il(2289,"code"),Qx(2290,"po-datepicker"),og(),Qx(2291,", "),Il(2292,"code"),Qx(2293,"po-datepicker-range"),og(),Qx(2294,", "),Il(2295,"code"),Qx(2296,"po-decimal"),og(),Qx(2297,", "),Il(2298,"code"),Qx(2299,"po-input"),og(),Qx(2300,", "),Il(2301,"code"),Qx(2302,"po-lookup"),og(),Qx(2303,", "),Il(2304,"code"),Qx(2305,"po-multiselect"),og(),Qx(2306,", "),Il(2307,"code"),Qx(2308,"po-number"),og(),Qx(2309,", "),Il(2310,"code"),Qx(2311,"po-password"),og(),Qx(2312,", "),Il(2313,"code"),Qx(2314,"po-radio-group"),og(),Qx(2315,", "),Il(2316,"code"),Qx(2317,"po-select"),og(),Qx(2318,`,
`),Il(2319,"code"),Qx(2320,"po-switch"),og(),Qx(2321,", "),Il(2322,"code"),Qx(2323,"po-textarea"),og(),Qx(2324,", "),Il(2325,"code"),Qx(2326,"po-timepicker"),og(),Qx(2327,"."),og()()(),Il(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),Qx(2332," errorMessage"),zl(2333,"br"),og()()(),Il(2334,"td",21)(2335,"code",27),Qx(2336,"string"),og()(),Il(2337,"td",24)(2338,"em")(2339,"strong"),Qx(2340,"(opcional)"),og()(),Il(2341,"p"),Qx(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Il(2343,"p"),Qx(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Il(2345,"ul")(2346,"li"),Qx(2347,"pattern;"),og(),Il(2348,"li"),Qx(2349,"minValue;"),og(),Il(2350,"li"),Qx(2351,"maxValue;"),og(),Il(2352,"li"),Qx(2353,"required;"),og()(),Il(2354,"blockquote")(2355,"p"),Qx(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Il(2357,"code"),Qx(2358,"po-datepicker"),og(),Qx(2359,", "),Il(2360,"code"),Qx(2361,"po-input"),og(),Qx(2362,", "),Il(2363,"code"),Qx(2364,"po-number"),og(),Qx(2365,", "),Il(2366,"code"),Qx(2367,"po-decimal"),og(),Qx(2368,", "),Il(2369,"code"),Qx(2370,"po-password"),og(),Qx(2371,", "),Il(2372,"code"),Qx(2373,"po-timepicker"),og(),Qx(2374,`, \xE9 necess\xE1rio que a propriedade
`),Il(2375,"code"),Qx(2376,"requiredFieldErrorMessage"),og(),Qx(2377," esteja como "),Il(2378,"code"),Qx(2379,"true"),og(),Qx(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Il(2381,"code"),Qx(2382,"po-datepicker-range"),og(),Qx(2383,", "),Il(2384,"code"),Qx(2385,"po-select"),og(),Qx(2386,", "),Il(2387,"code"),Qx(2388,"po-checkbox-group"),og(),Qx(2389,", "),Il(2390,"code"),Qx(2391,"po-radio-group"),og(),Qx(2392,", "),Il(2393,"code"),Qx(2394,"po-multiselect"),og(),Qx(2395,", "),Il(2396,"code"),Qx(2397,"po-combo"),og(),Qx(2398,`,
`),Il(2399,"code"),Qx(2400,"po-lookup"),og(),Qx(2401," e "),Il(2402,"code"),Qx(2403,"po-textarea"),og(),Qx(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Il(2405,"code"),Qx(2406,"requiredFieldErrorMessage"),og(),Qx(2407,"."),og()(),Il(2408,"p")(2409,"strong"),Qx(2410,"Componentes compat\xEDveis:"),og(),Il(2411,"code"),Qx(2412,"po-checkbox-group"),og(),Qx(2413,", "),Il(2414,"code"),Qx(2415,"po-combo"),og(),Qx(2416,", "),Il(2417,"code"),Qx(2418,"po-datepicker"),og(),Qx(2419,", "),Il(2420,"code"),Qx(2421,"po-datepicker-range"),og(),Qx(2422,", "),Il(2423,"code"),Qx(2424,"po-decimal"),og(),Qx(2425,", "),Il(2426,"code"),Qx(2427,"po-input"),og(),Qx(2428,", "),Il(2429,"code"),Qx(2430,"po-lookup"),og(),Qx(2431,", "),Il(2432,"code"),Qx(2433,"po-multiselect"),og(),Qx(2434,", "),Il(2435,"code"),Qx(2436,"po-number"),og(),Qx(2437,", "),Il(2438,"code"),Qx(2439,"po-password"),og(),Qx(2440,", "),Il(2441,"code"),Qx(2442,"po-radio-group"),og(),Qx(2443,", "),Il(2444,"code"),Qx(2445,"po-select"),og(),Qx(2446,`,
`),Il(2447,"code"),Qx(2448,"po-switch"),og(),Qx(2449,", "),Il(2450,"code"),Qx(2451,"po-textarea"),og(),Qx(2452,", "),Il(2453,"code"),Qx(2454,"po-timepicker"),og(),Qx(2455,"."),og()()(),Il(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),Qx(2460," fieldLabel"),zl(2461,"br"),og()()(),Il(2462,"td",21)(2463,"code",27),Qx(2464,"string"),og()(),Il(2465,"td",24)(2466,"em")(2467,"strong"),Qx(2468,"(opcional)"),og()(),Il(2469,"p"),Qx(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Il(2471,"p"),Qx(2472,"O valor padr\xE3o \xE9: "),Il(2473,"code"),Qx(2474,"label"),og(),Qx(2475,"."),og(),Il(2476,"blockquote")(2477,"p"),Qx(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Il(2479,"code"),Qx(2480,"options"),og(),Qx(2481,", "),Il(2482,"code"),Qx(2483,"optionsService"),og(),Qx(2484," e "),Il(2485,"code"),Qx(2486,"searchService"),og(),Qx(2487,"."),og()()()(),Il(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),Qx(2492," fieldValue"),zl(2493,"br"),og()()(),Il(2494,"td",21)(2495,"code",27),Qx(2496,"string"),og()(),Il(2497,"td",24)(2498,"em")(2499,"strong"),Qx(2500,"(opcional)"),og()(),Il(2501,"p"),Qx(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Il(2503,"p"),Qx(2504,"O valor padr\xE3o \xE9: "),Il(2505,"code"),Qx(2506,"value"),og(),Qx(2507,"."),og(),Il(2508,"blockquote")(2509,"p"),Qx(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Il(2511,"code"),Qx(2512,"options"),og(),Qx(2513,", "),Il(2514,"code"),Qx(2515,"optionsService"),og(),Qx(2516," e "),Il(2517,"code"),Qx(2518,"searchService"),og(),Qx(2519,"."),og()()()(),Il(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),Qx(2524," filterMinlength"),zl(2525,"br"),og()()(),Il(2526,"td",21)(2527,"code",45),Qx(2528,"number"),og()(),Il(2529,"td",24)(2530,"em")(2531,"strong"),Qx(2532,"(opcional)"),og()(),Il(2533,"p"),Qx(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Il(2535,"code"),Qx(2536,"po-combo"),og(),Qx(2537,"."),og()()(),Il(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),Qx(2542," filterMode"),zl(2543,"br"),og()()(),Il(2544,"td",21)(2545,"code",52),Qx(2546,"PoMultiselectFilterMode"),og()(),Il(2547,"td",24)(2548,"em")(2549,"strong"),Qx(2550,"(opcional)"),og()(),Il(2551,"p"),Qx(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Il(2553,"code"),Qx(2554,"startsWith"),og(),Qx(2555,", "),Il(2556,"code"),Qx(2557,"contains"),og(),Qx(2558," ou "),Il(2559,"code"),Qx(2560,"endsWith"),og(),Qx(2561,"."),og(),Il(2562,"blockquote")(2563,"p"),Qx(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Il(2565,"p")(2566,"strong"),Qx(2567,"Componente compat\xEDvel:"),og(),Il(2568,"code"),Qx(2569,"po-multiselect"),og(),Qx(2570,"."),og()()(),Il(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),Qx(2575," forceBooleanComponentType"),zl(2576,"br"),og()()(),Il(2577,"td",21)(2578,"code",53),Qx(2579,"ForceBooleanComponentEnum"),og()(),Il(2580,"td",24)(2581,"em")(2582,"strong"),Qx(2583,"(opcional)"),og()(),Il(2584,"p"),Qx(2585,"Valores aceitos:"),og(),Il(2586,"ul")(2587,"li"),Qx(2588,"ForceBooleanComponentEnum.switch"),og(),Il(2589,"li"),Qx(2590,"ForceBooleanComponentEnum.checkbox"),og()()()(),Il(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),Qx(2595," forceOptionsComponentType"),zl(2596,"br"),og()()(),Il(2597,"td",21)(2598,"code",54),Qx(2599,"ForceOptionComponentEnum"),og()(),Il(2600,"td",24)(2601,"em")(2602,"strong"),Qx(2603,"(opcional)"),og()(),Il(2604,"p"),Qx(2605,"pode ser utilizada em conjunto com a propriedade "),Il(2606,"code"),Qx(2607,"options"),og(),Qx(2608," for\xE7ando o componente a renderizar um "),Il(2609,"code"),Qx(2610,"po-select"),og(),Qx(2611," ou "),Il(2612,"code"),Qx(2613,"po-radio-group"),og(),Qx(2614,"."),og(),Il(2615,"p"),Qx(2616,"Valores aceitos:"),og(),Il(2617,"ul")(2618,"li"),Qx(2619,"ForceOptionComponentEnum.radioGroup"),og(),Il(2620,"li"),Qx(2621,"ForceOptionComponentEnum.select"),og()(),Il(2622,"blockquote")(2623,"p"),Qx(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Il(2625,"code"),Qx(2626,"optionsMulti"),og(),Qx(2627," e "),Il(2628,"code"),Qx(2629,"optionsService"),og(),Qx(2630,"."),og()()()(),Il(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),Qx(2635," formField"),zl(2636,"br"),og()()(),Il(2637,"td",21)(2638,"code",27),Qx(2639,"string"),og()(),Il(2640,"td",24)(2641,"em")(2642,"strong"),Qx(2643,"(opcional)"),og()(),Il(2644,"p"),Qx(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Il(2646,"code"),Qx(2647,"url"),og(),Qx(2648,"."),og(),Il(2649,"blockquote")(2650,"p"),Qx(2651,"O valor default \xE9 "),Il(2652,"code"),Qx(2653,"files"),og()()(),Il(2654,"p")(2655,"strong"),Qx(2656,"Componente compat\xEDvel"),og(),Qx(2657,": "),Il(2658,"code"),Qx(2659,"po-upload"),og()()()(),Il(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),Qx(2664," format"),zl(2665,"br"),og()()(),Il(2666,"td",21)(2667,"code",27),Qx(2668,"string "),og(),Il(2669,"code",32),Qx(2670," Array<string>"),og()(),Il(2671,"td",24)(2672,"em")(2673,"strong"),Qx(2674,"(opcional)"),og()(),Il(2675,"p"),Qx(2676,"Formato de exibi\xE7\xE3o no campo."),og(),Il(2677,"p"),Qx(2678,"Ao utilizar esta propriedade com o "),Il(2679,"code"),Qx(2680,"type"),og(),Il(2681,"em"),Qx(2682,"PoDynamicFieldType.Date"),og(),Qx(2683," ou "),Il(2684,"em"),Qx(2685,"PoDynamicFieldType.DateTime"),og(),Qx(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Il(2687,"p"),Qx(2688,"Valores v\xE1lidos:"),og(),Il(2689,"ul")(2690,"li"),Qx(2691,"dd/mm/yyyy"),og(),Il(2692,"li"),Qx(2693,"mm/dd/yyyy"),og(),Il(2694,"li"),Qx(2695,"yyyy/mm/dd"),og()(),Il(2696,"p"),Qx(2697,"Ao utilizar com o "),Il(2698,"code"),Qx(2699,"type"),og(),Il(2700,"em"),Qx(2701,"PoDynamicFieldType.Time"),og(),Qx(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Il(2703,"p"),Qx(2704,"Valores v\xE1lidos:"),og(),Il(2705,"ul")(2706,"li")(2707,"code"),Qx(2708,"24"),og(),Qx(2709,": formato de 24 horas (padr\xE3o)"),og(),Il(2710,"li")(2711,"code"),Qx(2712,"12"),og(),Qx(2713,": formato de 12 horas com indicador AM/PM"),og()(),Il(2714,"p"),Qx(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Il(2716,"code"),Qx(2717,"searchService"),og(),Qx(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Il(2719,"p")(2720,"strong"),Qx(2721,"Componentes compat\xEDveis:"),og(),Il(2722,"code"),Qx(2723,"po-datepicker"),og(),Qx(2724,", "),Il(2725,"code"),Qx(2726,"po-timepicker"),og(),Qx(2727,", "),Il(2728,"code"),Qx(2729,"po-lookup"),og(),Qx(2730,"."),og()()(),Il(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),Qx(2735," formatModel"),zl(2736,"br"),og()()(),Il(2737,"td",21)(2738,"code",29),Qx(2739,"boolean"),og()(),Il(2740,"td",24)(2741,"em")(2742,"strong"),Qx(2743,"(opcional)"),og()(),Il(2744,"p"),Qx(2745,"Indica se o "),Il(2746,"code"),Qx(2747,"model"),og(),Qx(2748," receber\xE1 o valor formatado pelas propriedades "),Il(2749,"code"),Qx(2750,"p-label-on"),og(),Qx(2751," e "),Il(2752,"code"),Qx(2753,"p-label-off"),og(),Qx(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Il(2755,"p"),Qx(2756,"O valor padr\xE3o \xE9: "),Il(2757,"code"),Qx(2758,"false"),og(),Qx(2759,"."),og(),Il(2760,"blockquote")(2761,"p"),Qx(2762,"Esta propriedade est\xE1 disponivel apenas para o "),Il(2763,"code"),Qx(2764,"swicth"),og(),Qx(2765,"."),og()()()(),Il(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),Qx(2770," formatTime"),zl(2771,"br"),og()()(),Il(2772,"td",21)(2773,"code",27),Qx(2774,"string"),og()(),Il(2775,"td",24)(2776,"em")(2777,"strong"),Qx(2778,"(opcional)"),og()(),Il(2779,"p"),Qx(2780,"Define o formato de exibi\xE7\xE3o do timer ("),Il(2781,"code"),Qx(2782,"'12'"),og(),Qx(2783," ou "),Il(2784,"code"),Qx(2785,"'24'"),og(),Qx(2786,")."),og(),Il(2787,"p")(2788,"strong"),Qx(2789,"Componente compat\xEDvel:"),og(),Il(2790,"code"),Qx(2791,"po-datetimepicker"),og(),Qx(2792,", "),Il(2793,"code"),Qx(2794,"po-timepicker"),og()()()(),Il(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),Qx(2799," gridColumns"),zl(2800,"br"),og()()(),Il(2801,"td",21)(2802,"code",45),Qx(2803,"number"),og()(),Il(2804,"td",24)(2805,"em")(2806,"strong"),Qx(2807,"(opcional)"),og()(),Il(2808,"p"),Qx(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Il(2810,"p"),Qx(2811,"Deve ser usado o sistema de "),Il(2812,"strong"),Qx(2813,"grid"),og(),Qx(2814," do PO (1 ... 12 colunas)."),og(),Il(2815,"blockquote")(2816,"p"),Qx(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Il(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),Qx(2822," gridLgColumns"),zl(2823,"br"),og()()(),Il(2824,"td",21)(2825,"code",45),Qx(2826,"number"),og()(),Il(2827,"td",24)(2828,"em")(2829,"strong"),Qx(2830,"(opcional)"),og()(),Il(2831,"p"),Qx(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Il(2833,"p"),Qx(2834,"Deve ser usado o sistema de "),Il(2835,"strong"),Qx(2836,"grid"),og(),Qx(2837," do PO (1 ... 12 colunas)."),og(),Il(2838,"blockquote")(2839,"p"),Qx(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2841,"code"),Qx(2842,"gridColumns"),og(),Qx(2843,"."),og()()()(),Il(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),Qx(2848," gridLgPull"),zl(2849,"br"),og()()(),Il(2850,"td",21)(2851,"code",45),Qx(2852,"number"),og()(),Il(2853,"td",24)(2854,"em")(2855,"strong"),Qx(2856,"(opcional)"),og()(),Il(2857,"p"),Qx(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Il(2859,"p"),Qx(2860,"Deve ser usado o sistema de "),Il(2861,"strong"),Qx(2862,"grid"),og(),Qx(2863," do PO (1 ... 11 colunas)."),og(),Il(2864,"blockquote")(2865,"p"),Qx(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2867,"code"),Qx(2868,"gridColumns"),og(),Qx(2869,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),Qx(2874," gridMdColumns"),zl(2875,"br"),og()()(),Il(2876,"td",21)(2877,"code",45),Qx(2878,"number"),og()(),Il(2879,"td",24)(2880,"em")(2881,"strong"),Qx(2882,"(opcional)"),og()(),Il(2883,"p"),Qx(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Il(2885,"p"),Qx(2886,"Deve ser usado o sistema de "),Il(2887,"strong"),Qx(2888,"grid"),og(),Qx(2889," do PO (1 ... 12 colunas)."),og(),Il(2890,"blockquote")(2891,"p"),Qx(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2893,"code"),Qx(2894,"gridColumns"),og(),Qx(2895,"."),og()()()(),Il(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),Qx(2900," gridMdPull"),zl(2901,"br"),og()()(),Il(2902,"td",21)(2903,"code",45),Qx(2904,"number"),og()(),Il(2905,"td",24)(2906,"em")(2907,"strong"),Qx(2908,"(opcional)"),og()(),Il(2909,"p"),Qx(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Il(2911,"p"),Qx(2912,"Deve ser usado o sistema de "),Il(2913,"strong"),Qx(2914,"grid"),og(),Qx(2915," do PO (1 ... 11 colunas)."),og(),Il(2916,"blockquote")(2917,"p"),Qx(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2919,"code"),Qx(2920,"gridColumns"),og(),Qx(2921,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),Qx(2926," gridSmColumns"),zl(2927,"br"),og()()(),Il(2928,"td",21)(2929,"code",45),Qx(2930,"number"),og()(),Il(2931,"td",24)(2932,"em")(2933,"strong"),Qx(2934,"(opcional)"),og()(),Il(2935,"p"),Qx(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Il(2937,"p"),Qx(2938,"Deve ser usado o sistema de "),Il(2939,"strong"),Qx(2940,"grid"),og(),Qx(2941," do PO (1 ... 12 colunas)."),og(),Il(2942,"blockquote")(2943,"p"),Qx(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2945,"code"),Qx(2946,"gridColumns"),og(),Qx(2947,"."),og()()()(),Il(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),Qx(2952," gridSmPull"),zl(2953,"br"),og()()(),Il(2954,"td",21)(2955,"code",45),Qx(2956,"number"),og()(),Il(2957,"td",24)(2958,"em")(2959,"strong"),Qx(2960,"(opcional)"),og()(),Il(2961,"p"),Qx(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Il(2963,"p"),Qx(2964,"Deve ser usado o sistema de "),Il(2965,"strong"),Qx(2966,"grid"),og(),Qx(2967," do PO (1 ... 11 colunas)."),og(),Il(2968,"blockquote")(2969,"p"),Qx(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2971,"code"),Qx(2972,"gridColumns"),og(),Qx(2973,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),Qx(2978," gridXlColumns"),zl(2979,"br"),og()()(),Il(2980,"td",21)(2981,"code",45),Qx(2982,"number"),og()(),Il(2983,"td",24)(2984,"em")(2985,"strong"),Qx(2986,"(opcional)"),og()(),Il(2987,"p"),Qx(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Il(2989,"p"),Qx(2990,"Deve ser usado o sistema de "),Il(2991,"strong"),Qx(2992,"grid"),og(),Qx(2993," do PO (1 ... 12 colunas)."),og(),Il(2994,"blockquote")(2995,"p"),Qx(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2997,"code"),Qx(2998,"gridColumns"),og(),Qx(2999,"."),og()()()(),Il(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),Qx(3004," gridXlPull"),zl(3005,"br"),og()()(),Il(3006,"td",21)(3007,"code",45),Qx(3008,"number"),og()(),Il(3009,"td",24)(3010,"em")(3011,"strong"),Qx(3012,"(opcional)"),og()(),Il(3013,"p"),Qx(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Il(3015,"p"),Qx(3016,"Deve ser usado o sistema de "),Il(3017,"strong"),Qx(3018,"grid"),og(),Qx(3019," do PO (1 ... 11 colunas)."),og(),Il(3020,"blockquote")(3021,"p"),Qx(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Il(3023,"code"),Qx(3024,"gridColumns"),og(),Qx(3025,". Deve-se especificar o tamanho da tela."),og()()()(),Il(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),Qx(3030," headers"),zl(3031,"br"),og()()(),Il(3032,"td",21)(3033,"code",55),Qx(3034,"{ [name: string]: string "),og(),Il(3035,"code",56),Qx(3036,` Array<string>;
}`),og()(),Il(3037,"td",24)(3038,"em")(3039,"strong"),Qx(3040,"(opcional)"),og()(),Il(3041,"p"),Qx(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Il(3043,"p")(3044,"strong"),Qx(3045,"Componente compat\xEDvel"),og(),Qx(3046,": "),Il(3047,"code"),Qx(3048,"po-upload"),og()()()(),Il(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),Qx(3053," help"),zl(3054,"br"),og()()(),Il(3055,"td",21)(3056,"code",27),Qx(3057,"string"),og()(),Il(3058,"td",24)(3059,"em")(3060,"strong"),Qx(3061,"(opcional)"),og()(),Il(3062,"p"),Qx(3063,"Texto de ajuda."),og()()(),Il(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),Qx(3068," helper"),zl(3069,"br"),og()()(),Il(3070,"td",21)(3071,"code",27),Qx(3072,"string "),og(),Il(3073,"code",38),Qx(3074," PoHelperOptions"),og()(),Il(3075,"td",24)(3076,"em")(3077,"strong"),Qx(3078,"(opcional)"),og()(),Il(3079,"p"),Qx(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Il(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),Qx(3085," hideLabelStatus"),zl(3086,"br"),og()()(),Il(3087,"td",21)(3088,"code",29),Qx(3089,"boolean"),og()(),Il(3090,"td",24)(3091,"em")(3092,"strong"),Qx(3093,"(opcional)"),og()(),Il(3094,"p"),Qx(3095,"Indica se o status do "),Il(3096,"code"),Qx(3097,"model"),og(),Qx(3098," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Il(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),Qx(3103," hidePasswordPeek"),zl(3104,"br"),og()()(),Il(3105,"td",21)(3106,"code",29),Qx(3107,"boolean"),og()(),Il(3108,"td",24)(3109,"em")(3110,"strong"),Qx(3111,"(opcional)"),og()(),Il(3112,"p"),Qx(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Il(3114,"code"),Qx(3115,"po-password"),og(),Qx(3116,"."),og()()(),Il(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),Qx(3121," hideRestrictionsInfo"),zl(3122,"br"),og()()(),Il(3123,"td",21)(3124,"code",29),Qx(3125,"boolean"),og()(),Il(3126,"td",24)(3127,"em")(3128,"strong"),Qx(3129,"(opcional)"),og()(),Il(3130,"p"),Qx(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Il(3132,"p")(3133,"strong"),Qx(3134,"Componente compat\xEDvel"),og(),Qx(3135,": "),Il(3136,"code"),Qx(3137,"po-upload"),og()()()(),Il(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),Qx(3142," hideSearch"),zl(3143,"br"),og()()(),Il(3144,"td",21)(3145,"code",29),Qx(3146,"boolean"),og()(),Il(3147,"td",24)(3148,"em")(3149,"strong"),Qx(3150,"(opcional)"),og()(),Il(3151,"p"),Qx(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Il(3153,"code"),Qx(3154,"po-multiselect"),og(),Qx(3155,"."),og()()(),Il(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),Qx(3160," hideSelectAll"),zl(3161,"br"),og()()(),Il(3162,"td",21)(3163,"code",29),Qx(3164,"boolean"),og()(),Il(3165,"td",24)(3166,"em")(3167,"strong"),Qx(3168,"(opcional)"),og()(),Il(3169,"p"),Qx(3170,'Indica se o campo "Selecionar todos" do '),Il(3171,"code"),Qx(3172,"po-multiselect"),og(),Qx(3173," ser\xE1 escondido."),og()()(),Il(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),Qx(3178," hideSelectButton"),zl(3179,"br"),og()()(),Il(3180,"td",21)(3181,"code",29),Qx(3182,"boolean"),og()(),Il(3183,"td",24)(3184,"em")(3185,"strong"),Qx(3186,"(opcional)"),og()(),Il(3187,"p"),Qx(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Il(3189,"blockquote")(3190,"p"),Qx(3191,"Caso o valor definido seja "),Il(3192,"code"),Qx(3193,"true"),og(),Qx(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Il(3195,"code"),Qx(3196,"selectFiles()"),og(),Qx(3197," para sele\xE7\xE3o de arquivos."),og()(),Il(3198,"p")(3199,"strong"),Qx(3200,"Componente compat\xEDvel"),og(),Qx(3201,": "),Il(3202,"code"),Qx(3203,"po-upload"),og()()()(),Il(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),Qx(3208," hideSendButton"),zl(3209,"br"),og()()(),Il(3210,"td",21)(3211,"code",29),Qx(3212,"boolean"),og()(),Il(3213,"td",24)(3214,"em")(3215,"strong"),Qx(3216,"(opcional)"),og()(),Il(3217,"p"),Qx(3218,"Omite o bot\xE3o de envio de arquivos."),og(),Il(3219,"blockquote")(3220,"p"),Qx(3221,"Caso o valor definido seja "),Il(3222,"code"),Qx(3223,"true"),og(),Qx(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Il(3225,"code"),Qx(3226,"sendFiles()"),og(),Qx(3227," para envio do(s) arquivo(s) selecionado(s)."),og()(),Il(3228,"p")(3229,"strong"),Qx(3230,"Componente compat\xEDvel"),og(),Qx(3231,": "),Il(3232,"code"),Qx(3233,"po-upload"),og()()()(),Il(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),Qx(3238," icon"),zl(3239,"br"),og()()(),Il(3240,"td",21)(3241,"code",27),Qx(3242,"string "),og(),Il(3243,"code",57),Qx(3244," TemplateRef<void>"),og()(),Il(3245,"td",24)(3246,"em")(3247,"strong"),Qx(3248,"(opcional)"),og()(),Il(3249,"p"),Qx(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(3251,"blockquote")(3252,"p"),Qx(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Il(3254,"ul")(3255,"li"),Qx(3256,"Input;"),og(),Il(3257,"li"),Qx(3258,"Number;"),og(),Il(3259,"li"),Qx(3260,"Decimal;"),og(),Il(3261,"li"),Qx(3262,"Combo;"),og(),Il(3263,"li"),Qx(3264,"Password;"),og()(),Il(3265,"blockquote")(3266,"p"),Qx(3267,"Veja a disponibilidade de \xEDcones em "),Il(3268,"a",58),Qx(3269,"biblioteca de \xEDcones"),og(),Qx(3270,"."),og()()()(),Il(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),Qx(3275," infiniteScroll"),zl(3276,"br"),og()()(),Il(3277,"td",21)(3278,"code",29),Qx(3279,"boolean"),og()(),Il(3280,"td",24)(3281,"em")(3282,"strong"),Qx(3283,"(opcional)"),og()(),Il(3284,"p"),Qx(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Il(3286,"p")(3287,"strong"),Qx(3288,"Componentes compat\xEDveis:"),og(),Il(3289,"code"),Qx(3290,"po-combo"),og(),Qx(3291,", "),Il(3292,"code"),Qx(3293,"po-lookup"),og(),Qx(3294,"."),og()()(),Il(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),Qx(3299," infiniteScrollDistance"),zl(3300,"br"),og()()(),Il(3301,"td",21)(3302,"code",45),Qx(3303,"number"),og()(),Il(3304,"td",24)(3305,"em")(3306,"strong"),Qx(3307,"(opcional)"),og()(),Il(3308,"p"),Qx(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Il(3310,"strong"),Qx(3311,"Exemplos"),og(),Il(3312,"code"),Qx(3313,"{ infiniteScrollDistance: 80 }"),og(),Qx(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Il(3315,"p")(3316,"strong"),Qx(3317,"Componente compat\xEDvel:"),og(),Il(3318,"code"),Qx(3319,"po-combo"),og(),Qx(3320,"."),og()()(),Il(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),Qx(3325," invalidValue"),zl(3326,"br"),og()()(),Il(3327,"td",21)(3328,"code",29),Qx(3329,"boolean"),og()(),Il(3330,"td",24)(3331,"em")(3332,"strong"),Qx(3333,"(opcional)"),og()(),Il(3334,"p"),Qx(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Il(3336,"code"),Qx(3337,"p-field-error-message"),og(),Qx(3338,"."),og(),Il(3339,"blockquote")(3340,"p"),Qx(3341,"Caso essa propriedade seja definida como "),Il(3342,"code"),Qx(3343,"true"),og(),Qx(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Il(3345,"p")(3346,"strong"),Qx(3347,"Componente compat\xEDvel"),og(),Qx(3348,": "),Il(3349,"code"),Qx(3350,"po-switch"),og()()()(),Il(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),Qx(3355," isoFormat"),zl(3356,"br"),og()()(),Il(3357,"td",21)(3358,"code",59),Qx(3359,"PoDatepickerIsoFormat"),og()(),Il(3360,"td",24)(3361,"em")(3362,"strong"),Qx(3363,"(opcional)"),og()(),Il(3364,"p"),Qx(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Il(3366,"blockquote")(3367,"p"),Qx(3368,"Veja os valores v\xE1lidos no "),Il(3369,"code"),Qx(3370,"PoDatepickerIsoFormat"),og(),Qx(3371,"."),og()(),Il(3372,"p")(3373,"strong"),Qx(3374,"Componente compat\xEDvel:"),og(),Il(3375,"code"),Qx(3376,"po-datepicker"),og()()()(),Il(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),Qx(3381," key"),zl(3382,"br"),og()()(),Il(3383,"td",21)(3384,"code",29),Qx(3385,"boolean"),og()(),Il(3386,"td",24)(3387,"em")(3388,"strong"),Qx(3389,"(opcional)"),og()(),Il(3390,"p"),Qx(3391,"Identificador"),og()()(),Il(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),Qx(3396," keydown"),zl(3397,"br"),og()()(),Il(3398,"td",21)(3399,"code",44),Qx(3400,"Function"),og()(),Il(3401,"td",24)(3402,"em")(3403,"strong"),Qx(3404,"(opcional)"),og()(),Il(3405,"p"),Qx(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(3407,"code"),Qx(3408,"KeyboardEvent"),og(),Qx(3409," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),Qx(3414," label"),zl(3415,"br"),og()()(),Il(3416,"td",21)(3417,"code",27),Qx(3418,"string"),og()(),Il(3419,"td",24)(3420,"em")(3421,"strong"),Qx(3422,"(opcional)"),og()(),Il(3423,"p"),Qx(3424,"R\xF3tulo do campo exibido."),og(),Il(3425,"p"),Qx(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Il(3427,"code"),Qx(3428,"label"),og(),Qx(3429," o valor da propriedade "),Il(3430,"code"),Qx(3431,"property"),og(),Qx(3432," com a primeira letra em mai\xFAsculo."),og()()(),Il(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),Qx(3437," labelPosition"),zl(3438,"br"),og()()(),Il(3439,"td",21)(3440,"code",60),Qx(3441,"PoSwitchLabelPosition"),og()(),Il(3442,"td",24)(3443,"em")(3444,"strong"),Qx(3445,"(opcional)"),og()(),Il(3446,"p"),Qx(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Il(3448,"blockquote")(3449,"p"),Qx(3450,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Il(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),Qx(3455," listboxControlPosition"),zl(3456,"br"),og()()(),Il(3457,"td",21)(3458,"code",61),Qx(3459,"'top' "),og(),Il(3460,"code",62),Qx(3461," 'bottom'"),og()(),Il(3462,"td",24)(3463,"em")(3464,"strong"),Qx(3465,"(opcional)"),og()(),Il(3466,"p"),Qx(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Il(3468,"code"),Qx(3469,"listbox"),og(),Qx(3470," em rela\xE7\xE3o ao campo ("),Il(3471,"code"),Qx(3472,"top"),og(),Qx(3473," ou "),Il(3474,"code"),Qx(3475,"bottom"),og(),Qx(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Il(3477,"p")(3478,"strong"),Qx(3479,"Componentes compat\xEDveis:"),og(),Il(3480,"code"),Qx(3481,"po-multiselect"),og(),Qx(3482,", "),Il(3483,"code"),Qx(3484,"po-combo"),og(),Qx(3485,"."),og()()(),Il(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),Qx(3490," literals"),zl(3491,"br"),og()()(),Il(3492,"td",21)(3493,"code",36),Qx(3494,"PoLookupLiterals "),og(),Il(3495,"code",63),Qx(3496," PoMultiselectLiterals "),og(),Il(3497,"code",64),Qx(3498," PoComboLiterals "),og(),Il(3499,"code",65),Qx(3500," PoDatepickerRangeLiterals "),og(),Il(3501,"code",66),Qx(3502," PoUploadLiterals"),og()(),Il(3503,"td",24)(3504,"em")(3505,"strong"),Qx(3506,"(opcional)"),og()(),Il(3507,"p"),Qx(3508,"Objeto com as literais usadas para os seguintes componentes: "),Il(3509,"code"),Qx(3510,"po-lookup"),og(),Qx(3511,", "),Il(3512,"code"),Qx(3513,"po-multiselect"),og(),Qx(3514,", "),Il(3515,"code"),Qx(3516,"po-combo"),og(),Qx(3517," e "),Il(3518,"code"),Qx(3519,"po-datepicker-range"),og(),Qx(3520,"."),og(),Il(3521,"blockquote")(3522,"p"),Qx(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Il(3524,"p")(3525,"strong"),Qx(3526,"Componentes compat\xEDveis:"),og(),Il(3527,"code"),Qx(3528,"po-lookup"),og(),Qx(3529,", "),Il(3530,"code"),Qx(3531,"po-multiselect"),og(),Qx(3532,", "),Il(3533,"code"),Qx(3534,"po-combo"),og(),Qx(3535,", "),Il(3536,"code"),Qx(3537,"po-datepicker-range"),og()()()(),Il(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),Qx(3542," loading"),zl(3543,"br"),og()()(),Il(3544,"td",21)(3545,"code",29),Qx(3546,"boolean"),og()(),Il(3547,"td",24)(3548,"em")(3549,"strong"),Qx(3550,"(opcional)"),og()(),Il(3551,"p"),Qx(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Il(3553,"blockquote")(3554,"p"),Qx(3555,"Por padr\xE3o \xE9 "),Il(3556,"code"),Qx(3557,"false"),og(),Qx(3558,"."),og()(),Il(3559,"p")(3560,"strong"),Qx(3561,"Componentes compat\xEDveis:"),og(),Il(3562,"code"),Qx(3563,"po-datepicker"),og(),Qx(3564,", "),Il(3565,"code"),Qx(3566,"po-datepicker-range"),og(),Qx(3567,", "),Il(3568,"code"),Qx(3569,"po-number"),og(),Qx(3570,", "),Il(3571,"code"),Qx(3572,"po-decimal"),og(),Qx(3573,`,
`),Il(3574,"code"),Qx(3575,"po-input"),og(),Qx(3576,", "),Il(3577,"code"),Qx(3578,"po-select"),og(),Qx(3579,", "),Il(3580,"code"),Qx(3581,"po-switch"),og(),Qx(3582,", "),Il(3583,"code"),Qx(3584,"po-combo"),og(),Qx(3585,", "),Il(3586,"code"),Qx(3587,"po-lookup"),og(),Qx(3588,", "),Il(3589,"code"),Qx(3590,"po-multiselect"),og(),Qx(3591,`,
`),Il(3592,"code"),Qx(3593,"po-textarea"),og(),Qx(3594,", "),Il(3595,"code"),Qx(3596,"po-password"),og(),Qx(3597,", "),Il(3598,"code"),Qx(3599,"po-upload"),og(),Qx(3600,"."),og()()(),Il(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),Qx(3605," locale"),zl(3606,"br"),og()()(),Il(3607,"td",21)(3608,"code",27),Qx(3609,"string"),og()(),Il(3610,"td",24)(3611,"em")(3612,"strong"),Qx(3613,"(opcional)"),og()(),Il(3614,"p"),Qx(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Il(3616,"a",67)(3617,"code"),Qx(3618,"I18n"),og()()(),Il(3619,"p"),Qx(3620,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(3621,"pre")(3622,"code"),Qx(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Il(3624,"blockquote")(3625,"p"),Qx(3626,"Para ver quais linguagens suportadas acesse "),Il(3627,"a",67)(3628,"code"),Qx(3629,"I18n"),og()()()(),Il(3630,"p")(3631,"strong"),Qx(3632,"Componentes compat\xEDveis:"),og(),Il(3633,"code"),Qx(3634,"po-datepicker"),og(),Qx(3635,", "),Il(3636,"code"),Qx(3637,"po-decimal"),og(),Qx(3638,", "),Il(3639,"code"),Qx(3640,"po-timepicker"),og(),Qx(3641,"."),og()()(),Il(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),Qx(3646," mask"),zl(3647,"br"),og()()(),Il(3648,"td",21)(3649,"code",27),Qx(3650,"string"),og()(),Il(3651,"td",24)(3652,"em")(3653,"strong"),Qx(3654,"(opcional)"),og()(),Il(3655,"p"),Qx(3656,"M\xE1scara para o campo."),og(),Il(3657,"p")(3658,"strong"),Qx(3659,"Componente compat\xEDvel:"),og(),Il(3660,"code"),Qx(3661,"po-input"),og(),Qx(3662,"."),og(),Il(3663,"blockquote")(3664,"p"),Qx(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Il(3666,"code"),Qx(3667,"type: time"),og(),Qx(3668,"."),og()()()(),Il(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),Qx(3673," maskFormatModel"),zl(3674,"br"),og()()(),Il(3675,"td",21)(3676,"code",29),Qx(3677,"boolean"),og()(),Il(3678,"td",24)(3679,"em")(3680,"strong"),Qx(3681,"(opcional)"),og()(),Il(3682,"p"),Qx(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Il(3684,"code"),Qx(3685,"false"),og(),Qx(3686,"."),og(),Il(3687,"p")(3688,"strong"),Qx(3689,"Componente compat\xEDvel:"),og(),Il(3690,"code"),Qx(3691,"po-input"),og(),Qx(3692,"."),og(),Il(3693,"blockquote")(3694,"p"),Qx(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Il(3696,"code"),Qx(3697,"type: time"),og(),Qx(3698,"."),og()()()(),Il(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),Qx(3703," maskNoLengthValidation"),zl(3704,"br"),og()()(),Il(3705,"td",21)(3706,"code",29),Qx(3707,"boolean"),og()(),Il(3708,"td",24)(3709,"em")(3710,"strong"),Qx(3711,"(opcional)"),og()(),Il(3712,"p"),Qx(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(3714,"code"),Qx(3715,"minLength"),og(),Qx(3716,") e m\xE1ximo ("),Il(3717,"code"),Qx(3718,"maxLength"),og(),Qx(3719,") quando h\xE1 uma m\xE1scara ("),Il(3720,"code"),Qx(3721,"p-mask"),og(),Qx(3722,") definida."),og(),Il(3723,"ul")(3724,"li"),Qx(3725,"Quando "),Il(3726,"code"),Qx(3727,"true"),og(),Qx(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(3729,"li"),Qx(3730,"Quando "),Il(3731,"code"),Qx(3732,"false"),og(),Qx(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(3734,"p")(3735,"strong"),Qx(3736,"Componentes compat\xEDveis:"),og(),Il(3737,"code"),Qx(3738,"po-input"),og(),Qx(3739,", "),Il(3740,"code"),Qx(3741,"po-decimal"),og(),Qx(3742,"."),og(),Il(3743,"blockquote")(3744,"p"),Qx(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(3746,"code"),Qx(3747,"p-mask-format-model"),og(),Qx(3748,"."),og()(),Il(3749,"p"),Qx(3750,"Exemplo:"),og(),Il(3751,"pre")(3752,"code"),Qx(3753,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),og()(),Il(3754,"ul")(3755,"li"),Qx(3756,"Entrada: "),Il(3757,"code"),Qx(3758,"11.111.111/1111-11"),og(),Qx(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Il(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),Qx(3764," maxLength"),zl(3765,"br"),og()()(),Il(3766,"td",21)(3767,"code",45),Qx(3768,"number"),og()(),Il(3769,"td",24)(3770,"em")(3771,"strong"),Qx(3772,"(opcional)"),og()(),Il(3773,"p"),Qx(3774,"Tamanho m\xE1ximo de caracteres."),og(),Il(3775,"p")(3776,"strong"),Qx(3777,"Componentes compat\xEDveis:"),og(),Il(3778,"code"),Qx(3779,"po-input"),og(),Qx(3780,", "),Il(3781,"code"),Qx(3782,"po-number"),og(),Qx(3783,", "),Il(3784,"code"),Qx(3785,"po-decimal"),og(),Qx(3786,", "),Il(3787,"code"),Qx(3788,"po-textarea"),og(),Qx(3789,", "),Il(3790,"code"),Qx(3791,"po-password"),og(),Qx(3792,"."),og()()(),Il(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),Qx(3797," maxTime"),zl(3798,"br"),og()()(),Il(3799,"td",21)(3800,"code",27),Qx(3801,"string"),og()(),Il(3802,"td",24)(3803,"em")(3804,"strong"),Qx(3805,"(opcional)"),og()(),Il(3806,"p"),Qx(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Il(3808,"code"),Qx(3809,"HH:mm"),og(),Qx(3810," ou "),Il(3811,"code"),Qx(3812,"HH:mm:ss"),og(),Qx(3813,"."),og(),Il(3814,"p")(3815,"strong"),Qx(3816,"Componente compat\xEDvel:"),og(),Il(3817,"code"),Qx(3818,"po-datetimepicker"),og(),Qx(3819,", "),Il(3820,"code"),Qx(3821,"po-timepicker"),og()()()(),Il(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),Qx(3826," maxValue"),zl(3827,"br"),og()()(),Il(3828,"td",21)(3829,"code",27),Qx(3830,"string "),og(),Il(3831,"code",45),Qx(3832," number"),og()(),Il(3833,"td",24)(3834,"em")(3835,"strong"),Qx(3836,"(opcional)"),og()(),Il(3837,"p"),Qx(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Il(3839,"em"),Qx(3840,"number"),og(),Qx(3841,", "),Il(3842,"em"),Qx(3843,"date"),og(),Qx(3844,", "),Il(3845,"em"),Qx(3846,"dateTime"),og(),Qx(3847," ou "),Il(3848,"em"),Qx(3849,"time"),og(),Qx(3850,"."),og(),Il(3851,"blockquote")(3852,"p"),Qx(3853,"Para "),Il(3854,"code"),Qx(3855,"po-timepicker"),og(),Qx(3856,", o valor deve estar no formato "),Il(3857,"code"),Qx(3858,"HH:mm"),og(),Qx(3859," ou "),Il(3860,"code"),Qx(3861,"HH:mm:ss"),og(),Qx(3862,"."),og()(),Il(3863,"p")(3864,"strong"),Qx(3865,"Componentes compat\xEDveis:"),og(),Il(3866,"code"),Qx(3867,"po-datepicker"),og(),Qx(3868,", "),Il(3869,"code"),Qx(3870,"po-datepicker-range"),og(),Qx(3871,", "),Il(3872,"code"),Qx(3873,"po-number"),og(),Qx(3874,", "),Il(3875,"code"),Qx(3876,"po-decimal"),og(),Qx(3877,", "),Il(3878,"code"),Qx(3879,"po-timepicker"),og()()()(),Il(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),Qx(3884," minLength"),zl(3885,"br"),og()()(),Il(3886,"td",21)(3887,"code",45),Qx(3888,"number"),og()(),Il(3889,"td",24)(3890,"em")(3891,"strong"),Qx(3892,"(opcional)"),og()(),Il(3893,"p"),Qx(3894,"Tamanho m\xEDnimo de caracteres."),og(),Il(3895,"p")(3896,"strong"),Qx(3897,"Componentes compat\xEDveis:"),og(),Il(3898,"code"),Qx(3899,"po-input"),og(),Qx(3900,", "),Il(3901,"code"),Qx(3902,"po-number"),og(),Qx(3903,", "),Il(3904,"code"),Qx(3905,"po-decimal"),og(),Qx(3906,", "),Il(3907,"code"),Qx(3908,"po-textarea"),og(),Qx(3909,", "),Il(3910,"code"),Qx(3911,"po-password"),og(),Qx(3912,"."),og()()(),Il(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),Qx(3917," minTime"),zl(3918,"br"),og()()(),Il(3919,"td",21)(3920,"code",27),Qx(3921,"string"),og()(),Il(3922,"td",24)(3923,"em")(3924,"strong"),Qx(3925,"(opcional)"),og()(),Il(3926,"p"),Qx(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Il(3928,"code"),Qx(3929,"HH:mm"),og(),Qx(3930," ou "),Il(3931,"code"),Qx(3932,"HH:mm:ss"),og(),Qx(3933,"."),og(),Il(3934,"p")(3935,"strong"),Qx(3936,"Componente compat\xEDvel:"),og(),Il(3937,"code"),Qx(3938,"po-datetimepicker"),og(),Qx(3939,", "),Il(3940,"code"),Qx(3941,"po-timepicker"),og()()()(),Il(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),Qx(3946," minValue"),zl(3947,"br"),og()()(),Il(3948,"td",21)(3949,"code",27),Qx(3950,"string "),og(),Il(3951,"code",45),Qx(3952," number"),og()(),Il(3953,"td",24)(3954,"em")(3955,"strong"),Qx(3956,"(opcional)"),og()(),Il(3957,"p"),Qx(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Il(3959,"em"),Qx(3960,"number"),og(),Qx(3961,", "),Il(3962,"em"),Qx(3963,"date"),og(),Qx(3964,", "),Il(3965,"em"),Qx(3966,"dateTime"),og(),Qx(3967," ou "),Il(3968,"em"),Qx(3969,"time"),og(),Qx(3970,"."),og(),Il(3971,"blockquote")(3972,"p"),Qx(3973,"Para "),Il(3974,"code"),Qx(3975,"po-timepicker"),og(),Qx(3976,", o valor deve estar no formato "),Il(3977,"code"),Qx(3978,"HH:mm"),og(),Qx(3979," ou "),Il(3980,"code"),Qx(3981,"HH:mm:ss"),og(),Qx(3982,"."),og()(),Il(3983,"p")(3984,"strong"),Qx(3985,"Componentes compat\xEDveis:"),og(),Il(3986,"code"),Qx(3987,"po-datepicker"),og(),Qx(3988,", "),Il(3989,"code"),Qx(3990,"po-datepicker-range"),og(),Qx(3991,", "),Il(3992,"code"),Qx(3993,"po-number"),og(),Qx(3994,", "),Il(3995,"code"),Qx(3996,"po-decimal"),og(),Qx(3997,", "),Il(3998,"code"),Qx(3999,"po-timepicker"),og()()()(),Il(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),Qx(4004," minuteInterval"),zl(4005,"br"),og()()(),Il(4006,"td",21)(4007,"code",45),Qx(4008,"number"),og()(),Il(4009,"td",24)(4010,"em")(4011,"strong"),Qx(4012,"(opcional)"),og()(),Il(4013,"p"),Qx(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Il(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),Qx(4019," mode"),zl(4020,"br"),og()()(),Il(4021,"td",21)(4022,"code",68),Qx(4023,"'month-year' "),og(),Il(4024,"code",69),Qx(4025," 'year'"),og()(),Il(4026,"td",24)(4027,"em")(4028,"strong"),Qx(4029,"(opcional)"),og()(),Il(4030,"p"),Qx(4031,"Define o modo de sele\xE7\xE3o do "),Il(4032,"code"),Qx(4033,"po-datepicker"),og(),Qx(4034,"."),og(),Il(4035,"p"),Qx(4036,"Valores aceitos:"),og(),Il(4037,"ul")(4038,"li")(4039,"code"),Qx(4040,"'month-year'"),og(),Qx(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Il(4042,"code"),Qx(4043,"MM/YYYY"),og(),Qx(4044,")"),og(),Il(4045,"li")(4046,"code"),Qx(4047,"'year'"),og(),Qx(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Il(4049,"code"),Qx(4050,"YYYY"),og(),Qx(4051,")"),og()(),Il(4052,"p")(4053,"strong"),Qx(4054,"Componente compat\xEDvel:"),og(),Il(4055,"code"),Qx(4056,"po-datepicker"),og()()()(),Il(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),Qx(4061," modelFormat"),zl(4062,"br"),og()()(),Il(4063,"td",21)(4064,"code",70),Qx(4065,"PoTimepickerModelFormat"),og()(),Il(4066,"td",24)(4067,"em")(4068,"strong"),Qx(4069,"(opcional)"),og()(),Il(4070,"p"),Qx(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Il(4072,"code"),Qx(4073,"po-timepicker"),og(),Qx(4074,"."),og(),Il(4075,"blockquote")(4076,"p"),Qx(4077,"Veja os valores v\xE1lidos no "),Il(4078,"code"),Qx(4079,"PoTimepickerModelFormat"),og(),Qx(4080,"."),og()(),Il(4081,"p")(4082,"strong"),Qx(4083,"Componente compat\xEDvel:"),og(),Il(4084,"code"),Qx(4085,"po-timepicker"),og()()()(),Il(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),Qx(4090," multiple"),zl(4091,"br"),og()()(),Il(4092,"td",21)(4093,"code",29),Qx(4094,"boolean"),og()(),Il(4095,"td",24)(4096,"em")(4097,"strong"),Qx(4098,"(opcional)"),og()(),Il(4099,"p"),Qx(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Il(4101,"p")(4102,"strong"),Qx(4103,"Componentes compat\xEDveis:"),og(),Il(4104,"code"),Qx(4105,"po-lookup"),og(),Qx(4106,", "),Il(4107,"code"),Qx(4108,"po-upload"),og()()()(),Il(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),Qx(4113," noAutocomplete"),zl(4114,"br"),og()()(),Il(4115,"td",21)(4116,"code",29),Qx(4117,"boolean"),og()(),Il(4118,"td",24)(4119,"em")(4120,"strong"),Qx(4121,"(opcional)"),og()(),Il(4122,"p"),Qx(4123,"Define a propriedade nativa "),Il(4124,"code"),Qx(4125,"autocomplete"),og(),Qx(4126," do campo como off."),og(),Il(4127,"p")(4128,"strong"),Qx(4129,"Componentes compat\xEDveis:"),og(),Il(4130,"code"),Qx(4131,"po-datepicker"),og(),Qx(4132,", "),Il(4133,"code"),Qx(4134,"po-datepicker-range"),og(),Qx(4135,", "),Il(4136,"code"),Qx(4137,"po-input"),og(),Qx(4138,", "),Il(4139,"code"),Qx(4140,"po-number"),og(),Qx(4141,", "),Il(4142,"code"),Qx(4143,"po-decimal"),og(),Qx(4144,`,
`),Il(4145,"code"),Qx(4146,"po-lookup"),og(),Qx(4147,", "),Il(4148,"code"),Qx(4149,"po-password"),og(),Qx(4150,", "),Il(4151,"code"),Qx(4152,"po-timepicker"),og(),Qx(4153,"."),og()()(),Il(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),Qx(4158," offsetColumns"),zl(4159,"br"),og()()(),Il(4160,"td",21)(4161,"code",45),Qx(4162,"number"),og()(),Il(4163,"td",24)(4164,"em")(4165,"strong"),Qx(4166,"(opcional)"),og()(),Il(4167,"p"),Qx(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Il(4169,"p"),Qx(4170,"Deve ser usado o sistema de "),Il(4171,"strong"),Qx(4172,"grid"),og(),Qx(4173," do PO (1 ... 12 colunas)."),og(),Il(4174,"blockquote")(4175,"p"),Qx(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Il(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),Qx(4181," offsetLgColumns"),zl(4182,"br"),og()()(),Il(4183,"td",21)(4184,"code",45),Qx(4185,"number"),og()(),Il(4186,"td",24)(4187,"em")(4188,"strong"),Qx(4189,"(opcional)"),og()(),Il(4190,"p"),Qx(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Il(4192,"p"),Qx(4193,"Deve ser usado o sistema de "),Il(4194,"strong"),Qx(4195,"grid"),og(),Qx(4196," do PO (1 ... 12 colunas)."),og(),Il(4197,"blockquote")(4198,"p"),Qx(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(4200,"code"),Qx(4201,"offsetColumns"),og(),Qx(4202,"."),og()()()(),Il(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),Qx(4207," offsetMdColumns"),zl(4208,"br"),og()()(),Il(4209,"td",21)(4210,"code",45),Qx(4211,"number"),og()(),Il(4212,"td",24)(4213,"em")(4214,"strong"),Qx(4215,"(opcional)"),og()(),Il(4216,"p"),Qx(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Il(4218,"p"),Qx(4219,"Deve ser usado o sistema de "),Il(4220,"strong"),Qx(4221,"grid"),og(),Qx(4222," do PO (1 ... 12 colunas)."),og(),Il(4223,"blockquote")(4224,"p"),Qx(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(4226,"code"),Qx(4227,"offsetColumns"),og(),Qx(4228,"."),og()()()(),Il(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),Qx(4233," offsetSmColumns"),zl(4234,"br"),og()()(),Il(4235,"td",21)(4236,"code",45),Qx(4237,"number"),og()(),Il(4238,"td",24)(4239,"em")(4240,"strong"),Qx(4241,"(opcional)"),og()(),Il(4242,"p"),Qx(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Il(4244,"p"),Qx(4245,"Deve ser usado o sistema de "),Il(4246,"strong"),Qx(4247,"grid"),og(),Qx(4248," do PO (1 ... 12 colunas)."),og(),Il(4249,"blockquote")(4250,"p"),Qx(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(4252,"code"),Qx(4253,"offsetColumns"),og(),Qx(4254,"."),og()()()(),Il(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),Qx(4259," offsetXlColumns"),zl(4260,"br"),og()()(),Il(4261,"td",21)(4262,"code",45),Qx(4263,"number"),og()(),Il(4264,"td",24)(4265,"em")(4266,"strong"),Qx(4267,"(opcional)"),og()(),Il(4268,"p"),Qx(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Il(4270,"p"),Qx(4271,"Deve ser usado o sistema de "),Il(4272,"strong"),Qx(4273,"grid"),og(),Qx(4274," do PO (1 ... 12 colunas)."),og(),Il(4275,"blockquote")(4276,"p"),Qx(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(4278,"code"),Qx(4279,"offsetColumns"),og(),Qx(4280,"."),og()()()(),Il(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),Qx(4285," onError"),zl(4286,"br"),og()()(),Il(4287,"td",21)(4288,"code",44),Qx(4289,"Function"),og()(),Il(4290,"td",24)(4291,"em")(4292,"strong"),Qx(4293,"(opcional)"),og()(),Il(4294,"p"),Qx(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Il(4296,"blockquote")(4297,"p"),Qx(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Il(4299,"code"),Qx(4300,"HttpErrorResponse"),og(),Qx(4301,"."),og()(),Il(4302,"p")(4303,"strong"),Qx(4304,"Componente compat\xEDvel"),og(),Qx(4305,": "),Il(4306,"code"),Qx(4307,"po-upload"),og()()()(),Il(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),Qx(4312," onSuccess"),zl(4313,"br"),og()()(),Il(4314,"td",21)(4315,"code",44),Qx(4316,"Function"),og()(),Il(4317,"td",24)(4318,"em")(4319,"strong"),Qx(4320,"(opcional)"),og()(),Il(4321,"p"),Qx(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Il(4323,"blockquote")(4324,"p"),Qx(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Il(4326,"code"),Qx(4327,"HttpResponse"),og(),Qx(4328,"."),og()(),Il(4329,"p")(4330,"strong"),Qx(4331,"Componente compat\xEDvel"),og(),Qx(4332,": "),Il(4333,"code"),Qx(4334,"po-upload"),og()()()(),Il(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),Qx(4339," onUpload"),zl(4340,"br"),og()()(),Il(4341,"td",21)(4342,"code",44),Qx(4343,"Function"),og()(),Il(4344,"td",24)(4345,"em")(4346,"strong"),Qx(4347,"(opcional)"),og()(),Il(4348,"p"),Qx(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Il(4350,"pre")(4351,"code"),Qx(4352,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Il(4353,"p")(4354,"strong"),Qx(4355,"Componente compat\xEDvel"),og(),Qx(4356,": "),Il(4357,"code"),Qx(4358,"po-upload"),og()()()(),Il(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),Qx(4363," optional"),zl(4364,"br"),og()()(),Il(4365,"td",21)(4366,"code",29),Qx(4367,"boolean"),og()(),Il(4368,"td",24)(4369,"em")(4370,"strong"),Qx(4371,"(opcional)"),og()(),Il(4372,"p"),Qx(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(4374,"blockquote")(4375,"p"),Qx(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Il(4377,"ul")(4378,"li"),Qx(4379,"O campo for "),Il(4380,"code"),Qx(4381,"required"),og(),Qx(4382,", ou;"),og(),Il(4383,"li"),Qx(4384,"N\xE3o possuir "),Il(4385,"code"),Qx(4386,"help"),og(),Qx(4387," e "),Il(4388,"code"),Qx(4389,"label"),og(),Qx(4390,"."),og()(),Il(4391,"p")(4392,"strong"),Qx(4393,"Componentes compat\xEDveis:"),og(),Il(4394,"code"),Qx(4395,"po-datepicker"),og(),Qx(4396,", "),Il(4397,"code"),Qx(4398,"po-datepicker-range"),og(),Qx(4399,", "),Il(4400,"code"),Qx(4401,"po-timepicker"),og(),Qx(4402,", "),Il(4403,"code"),Qx(4404,"po-input"),og(),Qx(4405,", "),Il(4406,"code"),Qx(4407,"po-number"),og(),Qx(4408,`,
`),Il(4409,"code"),Qx(4410,"po-decimal"),og(),Qx(4411,", "),Il(4412,"code"),Qx(4413,"po-select"),og(),Qx(4414,", "),Il(4415,"code"),Qx(4416,"po-radio-group"),og(),Qx(4417,", "),Il(4418,"code"),Qx(4419,"po-combo"),og(),Qx(4420,", "),Il(4421,"code"),Qx(4422,"po-lookup"),og(),Qx(4423,", "),Il(4424,"code"),Qx(4425,"po-checkbox-group"),og(),Qx(4426,", "),Il(4427,"code"),Qx(4428,"po-multiselect"),og(),Qx(4429,`,
`),Il(4430,"code"),Qx(4431,"po-textarea"),og(),Qx(4432,", "),Il(4433,"code"),Qx(4434,"po-password"),og(),Qx(4435,"."),og()()(),Il(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),Qx(4440," options"),zl(4441,"br"),og()()(),Il(4442,"td",21)(4443,"code",32),Qx(4444,"Array<string> "),og(),Il(4445,"code",71),Qx(4446," Array<PoSelectOption> "),og(),Il(4447,"code",72),Qx(4448," Array<PoMultiselectOption> "),og(),Il(4449,"code",73),Qx(4450," Array<PoCheckboxGroupOption> "),og(),Il(4451,"code",74),Qx(4452," Array<any>"),og()(),Il(4453,"td",24)(4454,"em")(4455,"strong"),Qx(4456,"(opcional)"),og()(),Il(4457,"p"),Qx(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Il(4459,"p")(4460,"strong"),Qx(4461,"Componentes compat\xEDveis:"),og(),Il(4462,"code"),Qx(4463,"po-select"),og(),Qx(4464,", "),Il(4465,"code"),Qx(4466,"po-radio-group"),og(),Qx(4467,", "),Il(4468,"code"),Qx(4469,"po-checkbox-group"),og(),Qx(4470,", "),Il(4471,"code"),Qx(4472,"po-multiselect"),og(),Qx(4473,"."),og()()(),Il(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),Qx(4478," optionsMulti"),zl(4479,"br"),og()()(),Il(4480,"td",21)(4481,"code",29),Qx(4482,"boolean"),og()(),Il(4483,"td",24)(4484,"em")(4485,"strong"),Qx(4486,"(opcional)"),og()(),Il(4487,"p"),Qx(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Il(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),Qx(4493," optionsService"),zl(4494,"br"),og()()(),Il(4495,"td",21)(4496,"code",27),Qx(4497,"string "),og(),Il(4498,"code",75),Qx(4499," PoComboFilter "),og(),Il(4500,"code",76),Qx(4501," PoMultiselectFilter"),og()(),Il(4502,"td",24)(4503,"em")(4504,"strong"),Qx(4505,"(opcional)"),og()(),Il(4506,"p"),Qx(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Il(4508,"strong"),Qx(4509,"Importante"),og()(),Il(4510,"blockquote")(4511,"p"),Qx(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Il(4513,"a",7),Qx(4514,"guia de API do PO UI"),og(),Qx(4515,"."),og()()()(),Il(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),Qx(4520," order"),zl(4521,"br"),og()()(),Il(4522,"td",21)(4523,"code",45),Qx(4524,"number"),og()(),Il(4525,"td",24)(4526,"em")(4527,"strong"),Qx(4528,"(opcional)"),og()(),Il(4529,"p"),Qx(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Il(4531,"p"),Qx(4532,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(4533,"p")(4534,"code"),Qx(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Il(4536,"p"),Qx(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Il(4538,"code"),Qx(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Il(4540,"p"),Qx(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Il(4542,"p"),Qx(4543,"Campos sem "),Il(4544,"code"),Qx(4545,"order"),og(),Qx(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Il(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),Qx(4551," params"),zl(4552,"br"),og()()(),Il(4553,"td",21)(4554,"code",33),Qx(4555,"any"),og()(),Il(4556,"td",24)(4557,"em")(4558,"strong"),Qx(4559,"(opcional)"),og()(),Il(4560,"p"),Qx(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Il(4562,"code"),Qx(4563,"po-lookup"),og(),Qx(4564,` e
`),Il(4565,"code"),Qx(4566,"po-combo"),og(),Qx(4567,"."),og(),Il(4568,"p"),Qx(4569,"Por exemplo, para o par\xE2metro "),Il(4570,"code"),Qx(4571,"{ age: 23 }"),og(),Qx(4572," a URL da requisi\xE7\xE3o ficaria:"),og(),Il(4573,"p")(4574,"code"),Qx(4575,"url + ?age=23&filter=Peter"),og()()()(),Il(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),Qx(4580," pattern"),zl(4581,"br"),og()()(),Il(4582,"td",21)(4583,"code",27),Qx(4584,"string"),og()(),Il(4585,"td",24)(4586,"em")(4587,"strong"),Qx(4588,"(opcional)"),og()(),Il(4589,"p"),Qx(4590,"Regex para valida\xE7\xE3o do campo."),og(),Il(4591,"p")(4592,"strong"),Qx(4593,"Componentes compat\xEDveis:"),og(),Il(4594,"code"),Qx(4595,"po-input"),og(),Qx(4596,", "),Il(4597,"code"),Qx(4598,"po-password"),og(),Qx(4599,"."),og()()(),Il(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),Qx(4604," placeholder"),zl(4605,"br"),og()()(),Il(4606,"td",21)(4607,"code",27),Qx(4608,"string"),og()(),Il(4609,"td",24)(4610,"em")(4611,"strong"),Qx(4612,"(opcional)"),og()(),Il(4613,"p"),Qx(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Il(4615,"p")(4616,"strong"),Qx(4617,"Componentes compat\xEDveis:"),og(),Il(4618,"code"),Qx(4619,"po-datepicker"),og(),Qx(4620,", "),Il(4621,"code"),Qx(4622,"po-datepicker-range"),og(),Qx(4623,", "),Il(4624,"code"),Qx(4625,"po-timepicker"),og(),Qx(4626,", "),Il(4627,"code"),Qx(4628,"po-input"),og(),Qx(4629,", "),Il(4630,"code"),Qx(4631,"po-number"),og(),Qx(4632,", "),Il(4633,"code"),Qx(4634,"po-decimal"),og(),Qx(4635,", "),Il(4636,"code"),Qx(4637,"po-select"),og(),Qx(4638,", "),Il(4639,"code"),Qx(4640,"po-combo"),og(),Qx(4641,", "),Il(4642,"code"),Qx(4643,"po-lookup"),og(),Qx(4644,", "),Il(4645,"code"),Qx(4646,"po-multiselect"),og(),Qx(4647,", "),Il(4648,"code"),Qx(4649,"po-textarea"),og(),Qx(4650,", "),Il(4651,"code"),Qx(4652,"po-password"),og(),Qx(4653,"."),og()()(),Il(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),Qx(4658," placeholderSearch"),zl(4659,"br"),og()()(),Il(4660,"td",21)(4661,"code",27),Qx(4662,"string"),og()(),Il(4663,"td",24)(4664,"em")(4665,"strong"),Qx(4666,"(opcional)"),og()(),Il(4667,"p"),Qx(4668,"Placeholder do campo de pesquisa do "),Il(4669,"code"),Qx(4670,"po-multiselect"),og(),Qx(4671,"."),og(),Il(4672,"blockquote")(4673,"p"),Qx(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Il(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),Qx(4679," property"),zl(4680,"br"),og()()(),Il(4681,"td",21)(4682,"code",27),Qx(4683,"string"),og()(),Il(4684,"td",24)(4685,"p"),Qx(4686,"Nome de refer\xEAncia do campo."),og()()(),Il(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),Qx(4691," range"),zl(4692,"br"),og()()(),Il(4693,"td",21)(4694,"code",29),Qx(4695,"boolean"),og()(),Il(4696,"td",24)(4697,"em")(4698,"strong"),Qx(4699,"(opcional)"),og()(),Il(4700,"p"),Qx(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Il(4702,"blockquote")(4703,"p"),Qx(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Il(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),Qx(4709," rangePresetOptions"),zl(4710,"br"),og()()(),Il(4711,"td",21)(4712,"code",77),Qx(4713,"Array<PoCalendarRangePreset>"),og()(),Il(4714,"td",24)(4715,"em")(4716,"strong"),Qx(4717,"(opcional)"),og()(),Il(4718,"p"),Qx(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Il(4720,"p"),Qx(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Il(4722,"code"),Qx(4723,"PoCalendarRangePreset"),og(),Qx(4724,"."),og(),Il(4725,"p")(4726,"strong"),Qx(4727,"Componente compat\xEDvel:"),og(),Il(4728,"code"),Qx(4729,"po-datepicker-range"),og()()()(),Il(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),Qx(4734," rangePresets"),zl(4735,"br"),og()()(),Il(4736,"td",21)(4737,"code",29),Qx(4738,"boolean "),og(),Il(4739,"code",32),Qx(4740," Array<string>"),og()(),Il(4741,"td",24)(4742,"em")(4743,"strong"),Qx(4744,"(opcional)"),og()(),Il(4745,"p"),Qx(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Il(4747,"p"),Qx(4748,"Aceita os seguintes valores:"),og(),Il(4749,"ul")(4750,"li")(4751,"code"),Qx(4752,"true"),og(),Qx(4753,": exibe todos os presets padr\xE3o."),og(),Il(4754,"li")(4755,"code"),Qx(4756,"false"),og(),Qx(4757,": n\xE3o exibe os presets padr\xE3o."),og(),Il(4758,"li")(4759,"code"),Qx(4760,"Array<string>"),og(),Qx(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Il(4762,"p")(4763,"strong"),Qx(4764,"Componente compat\xEDvel:"),og(),Il(4765,"code"),Qx(4766,"po-datepicker-range"),og()()()(),Il(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),Qx(4771," rangePresetsOrder"),zl(4772,"br"),og()()(),Il(4773,"td",21)(4774,"code",78),Qx(4775,"'asc' "),og(),Il(4776,"code",79),Qx(4777," 'desc'"),og()(),Il(4778,"td",24)(4779,"em")(4780,"strong"),Qx(4781,"(opcional)"),og()(),Il(4782,"p"),Qx(4783,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Il(4784,"p"),Qx(4785,"Valores aceitos:"),og(),Il(4786,"ul")(4787,"li")(4788,"code"),Qx(4789,"'asc'"),og(),Qx(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Il(4791,"li")(4792,"code"),Qx(4793,"'desc'"),og(),Qx(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Il(4795,"p")(4796,"strong"),Qx(4797,"Componente compat\xEDvel:"),og(),Il(4798,"code"),Qx(4799,"po-datepicker-range"),og()()()(),Il(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),Qx(4804," readonly"),zl(4805,"br"),og()()(),Il(4806,"td",21)(4807,"code",29),Qx(4808,"boolean"),og()(),Il(4809,"td",24)(4810,"em")(4811,"strong"),Qx(4812,"(opcional)"),og()(),Il(4813,"p"),Qx(4814,"Indica que o campo ser\xE1 somente leitura."),og(),Il(4815,"p")(4816,"strong"),Qx(4817,"Componentes compat\xEDveis:"),og(),Il(4818,"code"),Qx(4819,"po-datepicker"),og(),Qx(4820,", "),Il(4821,"code"),Qx(4822,"po-datepicker-range"),og(),Qx(4823,", "),Il(4824,"code"),Qx(4825,"po-timepicker"),og(),Qx(4826,", "),Il(4827,"code"),Qx(4828,"po-input"),og(),Qx(4829,", "),Il(4830,"code"),Qx(4831,"po-number"),og(),Qx(4832,`,
`),Il(4833,"code"),Qx(4834,"po-decimal"),og(),Qx(4835,", "),Il(4836,"code"),Qx(4837,"po-select"),og(),Qx(4838,", "),Il(4839,"code"),Qx(4840,"po-textarea"),og(),Qx(4841,", "),Il(4842,"code"),Qx(4843,"po-password"),og(),Qx(4844,"."),og()()(),Il(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),Qx(4849," removeInitialFilter"),zl(4850,"br"),og()()(),Il(4851,"td",21)(4852,"code",29),Qx(4853,"boolean"),og()(),Il(4854,"td",24)(4855,"em")(4856,"strong"),Qx(4857,"(opcional)"),og()(),Il(4858,"p"),Qx(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Il(4860,"blockquote")(4861,"p"),Qx(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Il(4863,"p")(4864,"strong"),Qx(4865,"Componente compat\xEDvel"),og(),Qx(4866,": "),Il(4867,"code"),Qx(4868,"po-combo"),og()()()(),Il(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),Qx(4873," required"),zl(4874,"br"),og()()(),Il(4875,"td",21)(4876,"code",29),Qx(4877,"boolean"),og()(),Il(4878,"td",24)(4879,"em")(4880,"strong"),Qx(4881,"(opcional)"),og()(),Il(4882,"p"),Qx(4883,"Define a obrigatoriedade do campo."),og(),Il(4884,"p")(4885,"strong"),Qx(4886,"Componentes compat\xEDveis:"),og(),Il(4887,"code"),Qx(4888,"po-datepicker"),og(),Qx(4889,", "),Il(4890,"code"),Qx(4891,"po-datepicker-range"),og(),Qx(4892,", "),Il(4893,"code"),Qx(4894,"po-timepicker"),og(),Qx(4895,", "),Il(4896,"code"),Qx(4897,"po-input"),og(),Qx(4898,", "),Il(4899,"code"),Qx(4900,"po-number"),og(),Qx(4901,`,
`),Il(4902,"code"),Qx(4903,"po-decimal"),og(),Qx(4904,", "),Il(4905,"code"),Qx(4906,"po-select"),og(),Qx(4907,", "),Il(4908,"code"),Qx(4909,"po-radio-group"),og(),Qx(4910,", "),Il(4911,"code"),Qx(4912,"po-combo"),og(),Qx(4913,", "),Il(4914,"code"),Qx(4915,"po-lookup"),og(),Qx(4916,", "),Il(4917,"code"),Qx(4918,"po-checkbox-group"),og(),Qx(4919,", "),Il(4920,"code"),Qx(4921,"po-multiselect"),og(),Qx(4922,`,
`),Il(4923,"code"),Qx(4924,"po-textarea"),og(),Qx(4925,", "),Il(4926,"code"),Qx(4927,"po-password``, "),og(),Qx(4928,"po-upload`."),og()()(),Il(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),Qx(4933," requiredFieldErrorMessage"),zl(4934,"br"),og()()(),Il(4935,"td",21)(4936,"code",29),Qx(4937,"boolean"),og()(),Il(4938,"td",24)(4939,"em")(4940,"strong"),Qx(4941,"(opcional)"),og()(),Il(4942,"p"),Qx(4943,"Exibe a mensagem setada na propriedade "),Il(4944,"code"),Qx(4945,"errorMessage"),og(),Qx(4946," se o campo estiver vazio e for requerido."),og(),Il(4947,"blockquote")(4948,"p"),Qx(4949,"Necess\xE1rio que a propriedade "),Il(4950,"code"),Qx(4951,"required"),og(),Qx(4952," esteja habilitada."),og()(),Il(4953,"p")(4954,"strong"),Qx(4955,"Componentes compat\xEDveis:"),og(),Il(4956,"code"),Qx(4957,"po-datepicker"),og(),Qx(4958,", "),Il(4959,"code"),Qx(4960,"po-timepicker"),og(),Qx(4961,", "),Il(4962,"code"),Qx(4963,"po-input"),og(),Qx(4964,", "),Il(4965,"code"),Qx(4966,"po-number"),og(),Qx(4967,", "),Il(4968,"code"),Qx(4969,"po-decimal"),og(),Qx(4970,", "),Il(4971,"code"),Qx(4972,"po-password"),og(),Qx(4973,"."),og()()(),Il(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),Qx(4978," restrictions"),zl(4979,"br"),og()()(),Il(4980,"td",21)(4981,"code",80),Qx(4982,"PoUploadFileRestrictions"),og()(),Il(4983,"td",24)(4984,"em")(4985,"strong"),Qx(4986,"(opcional)"),og()(),Il(4987,"p"),Qx(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Il(4989,"code"),Qx(4990,"PoUploadFileRestrictions"),og(),Qx(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Il(4992,"p")(4993,"strong"),Qx(4994,"Componente compat\xEDvel"),og(),Qx(4995,": "),Il(4996,"code"),Qx(4997,"po-upload"),og()()()(),Il(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),Qx(5002," rows"),zl(5003,"br"),og()()(),Il(5004,"td",21)(5005,"code",45),Qx(5006,"number"),og()(),Il(5007,"td",24)(5008,"em")(5009,"strong"),Qx(5010,"(opcional)"),og()(),Il(5011,"p"),Qx(5012,"Quantidade de linhas exibidas no "),Il(5013,"code"),Qx(5014,"po-textarea"),og(),Qx(5015,"."),og()()(),Il(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),Qx(5020," searchService"),zl(5021,"br"),og()()(),Il(5022,"td",21)(5023,"code",27),Qx(5024,"string "),og(),Il(5025,"code",34),Qx(5026," PoLookupFilter"),og()(),Il(5027,"td",24)(5028,"em")(5029,"strong"),Qx(5030,"(opcional)"),og()(),Il(5031,"p"),Qx(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Il(5033,"code"),Qx(5034,"columns"),og(),Qx(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Il(5036,"strong"),Qx(5037,"Importante:"),og()(),Il(5038,"blockquote")(5039,"p"),Qx(5040,"Caso utilizar a propriedade "),Il(5041,"code"),Qx(5042,"optionsService"),og(),Qx(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Il(5044,"a",7),Qx(5045,"guia de API do PO UI"),og(),Qx(5046,"."),og()()()(),Il(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),Qx(5051," secondInterval"),zl(5052,"br"),og()()(),Il(5053,"td",21)(5054,"code",45),Qx(5055,"number"),og()(),Il(5056,"td",24)(5057,"em")(5058,"strong"),Qx(5059,"(opcional)"),og()(),Il(5060,"p"),Qx(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Il(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),Qx(5066," secret"),zl(5067,"br"),og()()(),Il(5068,"td",21)(5069,"code",29),Qx(5070,"boolean"),og()(),Il(5071,"td",24)(5072,"em")(5073,"strong"),Qx(5074,"(opcional)"),og()(),Il(5075,"p"),Qx(5076,"Esconde a informa\xE7\xE3o estilo "),Il(5077,"em"),Qx(5078,"password"),og(),Qx(5079,", pode ser utilizado quando o tipo de dado for "),Il(5080,"em"),Qx(5081,"string"),og(),Qx(5082,"."),og()()(),Il(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),Qx(5087," showRequired"),zl(5088,"br"),og()()(),Il(5089,"td",21)(5090,"code",29),Qx(5091,"boolean"),og()(),Il(5092,"td",24)(5093,"em")(5094,"strong"),Qx(5095,"(opcional)"),og()(),Il(5096,"p"),Qx(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(5098,"blockquote")(5099,"p"),Qx(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(5101,"ul")(5102,"li"),Qx(5103,"N\xE3o possuir "),Il(5104,"code"),Qx(5105,"p-help"),og(),Qx(5106," e/ou "),Il(5107,"code"),Qx(5108,"p-label"),og(),Qx(5109,"."),og()(),Il(5110,"p")(5111,"strong"),Qx(5112,"Componentes compat\xEDveis:"),og(),Il(5113,"code"),Qx(5114,"po-datepicker"),og(),Qx(5115,", "),Il(5116,"code"),Qx(5117,"po-datepicker-range"),og(),Qx(5118,", "),Il(5119,"code"),Qx(5120,"po-timepicker"),og(),Qx(5121,", "),Il(5122,"code"),Qx(5123,"po-input"),og(),Qx(5124,", "),Il(5125,"code"),Qx(5126,"po-number"),og(),Qx(5127,`,
`),Il(5128,"code"),Qx(5129,"po-decimal"),og(),Qx(5130,", "),Il(5131,"code"),Qx(5132,"po-select"),og(),Qx(5133,", "),Il(5134,"code"),Qx(5135,"po-radio-group"),og(),Qx(5136,", "),Il(5137,"code"),Qx(5138,"po-combo"),og(),Qx(5139,", "),Il(5140,"code"),Qx(5141,"po-lookup"),og(),Qx(5142,", "),Il(5143,"code"),Qx(5144,"po-checkbox-group"),og(),Qx(5145,", "),Il(5146,"code"),Qx(5147,"po-multiselect"),og(),Qx(5148,`,
`),Il(5149,"code"),Qx(5150,"po-textarea"),og(),Qx(5151,", "),Il(5152,"code"),Qx(5153,"po-password"),og(),Qx(5154,", "),Il(5155,"code"),Qx(5156,"po-upload"),og(),Qx(5157,"."),og()()(),Il(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),Qx(5162," showSeconds"),zl(5163,"br"),og()()(),Il(5164,"td",21)(5165,"code",29),Qx(5166,"boolean"),og()(),Il(5167,"td",24)(5168,"em")(5169,"strong"),Qx(5170,"(opcional)"),og()(),Il(5171,"p"),Qx(5172,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Il(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),Qx(5177," showThumbnail"),zl(5178,"br"),og()()(),Il(5179,"td",21)(5180,"code",29),Qx(5181,"boolean"),og()(),Il(5182,"td",24)(5183,"em")(5184,"strong"),Qx(5185,"(opcional)"),og()(),Il(5186,"p"),Qx(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Il(5188,"blockquote")(5189,"p"),Qx(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Il(5191,"code"),Qx(5192,".png"),og(),Qx(5193,", "),Il(5194,"code"),Qx(5195,".jpg"),og(),Qx(5196,", "),Il(5197,"code"),Qx(5198,".jpeg"),og(),Qx(5199," e "),Il(5200,"code"),Qx(5201,".gif"),og(),Qx(5202,")."),og()(),Il(5203,"p")(5204,"strong"),Qx(5205,"Componente compat\xEDvel"),og(),Qx(5206,": "),Il(5207,"code"),Qx(5208,"po-upload"),og()()()(),Il(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),Qx(5213," size"),zl(5214,"br"),og()()(),Il(5215,"td",21)(5216,"code",27),Qx(5217,"string"),og()(),Il(5218,"td",24)(5219,"em")(5220,"strong"),Qx(5221,"(opcional)"),og()(),Il(5222,"p"),Qx(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Il(5224,"ul")(5225,"li")(5226,"code"),Qx(5227,"small"),og(),Qx(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(5229,"li")(5230,"code"),Qx(5231,"medium"),og(),Qx(5232,": aplica a medida medium de cada componente."),og(),Il(5233,"li")(5234,"code"),Qx(5235,"large"),og(),Qx(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Il(5237,"code"),Qx(5238,"po-checkbox"),og(),Qx(5239," e "),Il(5240,"code"),Qx(5241,"po-radio-group"),og(),Qx(5242,")."),Il(5243,"blockquote")(5244,"p"),Qx(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(5246,"code"),Qx(5247,"medium"),og(),Qx(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(5249,"a",40),Qx(5250,"po-theme"),og(),Qx(5251,"."),og()()()()()(),Il(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),Qx(5256," sort"),zl(5257,"br"),og()()(),Il(5258,"td",21)(5259,"code",29),Qx(5260,"boolean"),og()(),Il(5261,"td",24)(5262,"em")(5263,"strong"),Qx(5264,"(opcional)"),og()(),Il(5265,"p"),Qx(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Il(5267,"p")(5268,"strong"),Qx(5269,"Componentes compat\xEDveis:"),og(),Il(5270,"code"),Qx(5271,"po-combo"),og(),Qx(5272,", po-multiselect"),og()()(),Il(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),Qx(5277," step"),zl(5278,"br"),og()()(),Il(5279,"td",21)(5280,"code",45),Qx(5281,"number"),og()(),Il(5282,"td",24)(5283,"em")(5284,"strong"),Qx(5285,"(opcional)"),og()(),Il(5286,"p"),Qx(5287,"Intervalo utilizado no "),Il(5288,"code"),Qx(5289,"po-number"),og(),Qx(5290,"."),og()()(),Il(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),Qx(5295," thousandMaxlength"),zl(5296,"br"),og()()(),Il(5297,"td",21)(5298,"code",45),Qx(5299,"number"),og()(),Il(5300,"td",24)(5301,"em")(5302,"strong"),Qx(5303,"(opcional)"),og()(),Il(5304,"p"),Qx(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Il(5306,"blockquote")(5307,"p"),Qx(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Il(5309,"code"),Qx(5310,"type"),og(),Qx(5311," for "),Il(5312,"em"),Qx(5313,"currency"),og(),Qx(5314," ou "),Il(5315,"em"),Qx(5316,"decimal"),og(),Qx(5317,"."),og()()()(),Il(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),Qx(5322," type"),zl(5323,"br"),og()()(),Il(5324,"td",21)(5325,"code",27),Qx(5326,"string "),og(),Il(5327,"code",81),Qx(5328," PoDynamicFieldType"),og()(),Il(5329,"td",24)(5330,"em")(5331,"strong"),Qx(5332,"(opcional)"),og()(),Il(5333,"p"),Qx(5334,"Tipo do valor campo."),og(),Il(5335,"p"),Qx(5336,"Valores v\xE1lidos:"),og(),Il(5337,"ul")(5338,"li")(5339,"code"),Qx(5340,"boolean"),og(),Qx(5341,": Valores "),Il(5342,"em"),Qx(5343,"booleanos"),og(),Qx(5344,"."),og(),Il(5345,"li")(5346,"code"),Qx(5347,"currency"),og(),Qx(5348,": Valores monet\xE1rios."),og(),Il(5349,"li")(5350,"code"),Qx(5351,"decimal"),og(),Qx(5352,": Valores decimais."),og(),Il(5353,"li")(5354,"code"),Qx(5355,"date"),og(),Qx(5356,": Valores de datas."),Il(5357,"ul")(5358,"li"),Qx(5359,"Aceita os tipos "),Il(5360,"strong"),Qx(5361,"string"),og(),Qx(5362," e "),Il(5363,"strong"),Qx(5364,"Date"),og(),Qx(5365,` padr\xE3o do Javascript,
por exemplo: `),Il(5366,"code"),Qx(5367,"'2017-11-28'"),og(),Qx(5368," ou "),Il(5369,"code"),Qx(5370,"new Date(2017, 10, 28)"),og(),Qx(5371,"."),og()()(),Il(5372,"li")(5373,"code"),Qx(5374,"dateTime"),og(),Qx(5375,": Valor de data com hor\xE1rio."),Il(5376,"ul")(5377,"li"),Qx(5378,"Aceita o tipo "),Il(5379,"em"),Qx(5380,"string"),og(),Qx(5381," no formato "),Il(5382,"strong"),Qx(5383,"ISO-8601"),og(),Qx(5384," extendido "),Il(5385,"strong"),Qx(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),Qx(5387,`
e o tipo `),Il(5388,"strong"),Qx(5389,"Date"),og(),Qx(5390," padr\xE3o do Javascript, por exemplo: "),Il(5391,"code"),Qx(5392,"'2017-11-28T00:00:00-02:00'"),og(),Qx(5393," ou "),Il(5394,"code"),Qx(5395,"new Date(2017, 10, 28)"),og(),Qx(5396,"."),og()()(),Il(5397,"li")(5398,"code"),Qx(5399,"number"),og(),Qx(5400,": Valores num\xE9ricos."),og(),Il(5401,"li")(5402,"code"),Qx(5403,"string"),og(),Qx(5404,": Textos."),og(),Il(5405,"li")(5406,"code"),Qx(5407,"time"),og(),Qx(5408,": Valor do hor\xE1rio."),Il(5409,"ul")(5410,"li"),Qx(5411,"Aceita o tipo "),Il(5412,"strong"),Qx(5413,"string"),og(),Qx(5414," nos formatos "),Il(5415,"strong"),Qx(5416,"'HH:mm:ss'"),og(),Qx(5417," ou "),Il(5418,"strong"),Qx(5419,"'HH:mm:ss.ffffff'"),og(),Qx(5420,", por exemplo: "),Il(5421,"code"),Qx(5422,"'23:12:45'"),og(),Qx(5423,"."),og()()()()()(),Il(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),Qx(5428," url"),zl(5429,"br"),og()()(),Il(5430,"td",21)(5431,"code",27),Qx(5432,"string"),og()(),Il(5433,"td",24)(5434,"em")(5435,"strong"),Qx(5436,"(opcional)"),og()(),Il(5437,"p"),Qx(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Il(5439,"p")(5440,"strong"),Qx(5441,"Componente compat\xEDvel"),og(),Qx(5442,": "),Il(5443,"code"),Qx(5444,"po-upload"),og()()()(),Il(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),Qx(5449," validate"),zl(5450,"br"),og()()(),Il(5451,"td",21)(5452,"code",27),Qx(5453,"string "),og(),Il(5454,"code",44),Qx(5455," Function"),og()(),Il(5456,"td",24)(5457,"em")(5458,"strong"),Qx(5459,"(opcional)"),og()(),Il(5460,"p"),Qx(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Il(5462,"strong"),Qx(5463,"mudan\xE7as do campo"),og(),Qx(5464,"."),og(),Il(5465,"ul")(5466,"li"),Qx(5467,"A propriedade aceita os seguintes tipos:"),og()(),Il(5468,"ul")(5469,"li")(5470,"strong"),Qx(5471,"String"),og(),Qx(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Il(5473,"code"),Qx(5474,"POST"),og(),Qx(5475,"."),og(),Il(5476,"li")(5477,"strong"),Qx(5478,"Function"),og(),Qx(5479,": M\xE9todo que ser\xE1 executado."),og()(),Il(5480,"p"),Qx(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Il(5482,"code"),Qx(5483,"PoDynamicFormFieldChanged"),og(),Qx(5484,":"),og(),Il(5485,"p")(5486,"code"),Qx(5487,"{ property: 'property name', value: 'new value' }"),og()(),Il(5488,"p"),Qx(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Il(5490,"a",82),Qx(5491,"PoDynamicFormFieldValidation"),og(),Qx(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Il(5493,"pre")(5494,"code"),Qx(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Il(5496,"p"),Qx(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Il(5498,"code"),Qx(5499,"bind"),og(),Qx(5500,`, por exemplo:
`),Il(5501,"code"),Qx(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Il(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),Qx(5507," visible"),zl(5508,"br"),og()()(),Il(5509,"td",21)(5510,"code",29),Qx(5511,"boolean"),og()(),Il(5512,"td",24)(5513,"em")(5514,"strong"),Qx(5515,"(opcional)"),og()(),Il(5516,"p"),Qx(5517,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Il(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),Qx(5522," yearRangeLimit"),zl(5523,"br"),og()()(),Il(5524,"td",21)(5525,"code",45),Qx(5526,"number"),og()(),Il(5527,"td",24)(5528,"em")(5529,"strong"),Qx(5530,"(opcional)"),og()(),Il(5531,"p"),Qx(5532,"Define o limite de anos exibidos na lista de anos do "),Il(5533,"code"),Qx(5534,"po-datepicker"),og(),Qx(5535," nos modos "),Il(5536,"code"),Qx(5537,"month-year"),og(),Qx(5538," e "),Il(5539,"code"),Qx(5540,"year"),og(),Qx(5541,"."),og()()()(),Il(5542,"h4",43)(5543,"code",5),Qx(5544,"PoLookupColumn"),og()(),Il(5545,"div",2)(5546,"p"),Qx(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),og()(),Il(5548,"h4",12),Qx(5549,"Propriedades"),og(),Il(5550,"table",13)(5551,"tr",14)(5552,"th",15),Qx(5553,"Nome"),og(),Il(5554,"th",15),Qx(5555,"Tipo"),og(),Il(5556,"th",15),Qx(5557,"Descri\xE7\xE3o"),og()(),Il(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),Qx(5562," fieldLabel"),zl(5563,"br"),og()()(),Il(5564,"td",21)(5565,"code",29),Qx(5566,"boolean"),og()(),Il(5567,"td",24)(5568,"em")(5569,"strong"),Qx(5570,"(opcional)"),og()(),Il(5571,"p"),Qx(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),og(),Il(5573,"p"),Qx(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),og(),Il(5575,"p"),Qx(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Il(5577,"code"),Qx(5578,"p-field-format"),og(),Qx(5579," ou "),Il(5580,"code"),Qx(5581,"p-field-label"),og(),Qx(5582," forem configurados no componente."),og()()(),Il(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),Qx(5587," format"),zl(5588,"br"),og()()(),Il(5589,"td",21)(5590,"code",27),Qx(5591,"string"),og()(),Il(5592,"td",24)(5593,"em")(5594,"strong"),Qx(5595,"(opcional)"),og()(),Il(5596,"p"),Qx(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Il(5598,"ul")(5599,"li"),Qx(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og(),Il(5601,"li"),Qx(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()()()(),Il(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),Qx(5607," label"),zl(5608,"br"),og()()(),Il(5609,"td",21)(5610,"code",27),Qx(5611,"string"),og()(),Il(5612,"td",24)(5613,"em")(5614,"strong"),Qx(5615,"(opcional)"),og()(),Il(5616,"p"),Qx(5617,"Texto para t\xEDtulo da coluna."),og(),Il(5618,"p"),Qx(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Il(5620,"em"),Qx(5621,"label"),og(),Qx(5622," o valor da propriedade "),Il(5623,"em"),Qx(5624,"property"),og(),Qx(5625," com a primeira letra em mai\xFAsculo."),og()()(),Il(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),Qx(5630," property"),zl(5631,"br"),og()()(),Il(5632,"td",21)(5633,"code",27),Qx(5634,"string"),og()(),Il(5635,"td",24)(5636,"em")(5637,"strong"),Qx(5638,"(opcional)"),og()(),Il(5639,"p"),Qx(5640,"Nome identificador da coluna."),og()()(),Il(5641,"tr",16)(5642,"td",17)(5643,"div",25)(5644,"span",26),Qx(5645," type"),zl(5646,"br"),og()()(),Il(5647,"td",21)(5648,"code",27),Qx(5649,"string"),og()(),Il(5650,"td",24)(5651,"em")(5652,"strong"),Qx(5653,"(opcional)"),og()(),Il(5654,"p"),Qx(5655,"Tipo da coluna:"),og(),Il(5656,"ul")(5657,"li"),Qx(5658,"string (padr\xE3o): textos"),og(),Il(5659,"li"),Qx(5660,"number: valores num\xE9ricos"),og(),Il(5661,"li"),Qx(5662,"date: data"),og(),Il(5663,"li"),Qx(5664,"currency: valores monet\xE1rios"),og(),Il(5665,"li"),Qx(5666,"dateTime: data e hora"),og()()()(),Il(5667,"tr",16)(5668,"td",17)(5669,"div",25)(5670,"span",26),Qx(5671," width"),zl(5672,"br"),og()()(),Il(5673,"td",21)(5674,"code",27),Qx(5675,"string"),og()(),Il(5676,"td",24)(5677,"em")(5678,"strong"),Qx(5679,"(opcional)"),og()(),Il(5680,"p"),Qx(5681,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),og()()()(),Il(5682,"h4",43)(5683,"code",5),Qx(5684,"PoLookupFilter"),og()(),Il(5685,"div",2)(5686,"p"),Qx(5687,"Define o tipo de busca utilizado no po-lookup."),og()(),Il(5688,"h4",12),Qx(5689,"M\xE9todos"),og(),Il(5690,"table",41)(5691,"tr",16)(5692,"th",42)(5693,"div",25)(5694,"h4")(5695,"span",26),Qx(5696," getFilteredItems "),og()()()()(),Il(5697,"tr",24)(5698,"td",24)(5699,"p"),Qx(5700,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Il(5701,"em"),Qx(5702,"Observable"),og(),Qx(5703," com a resposta da API no formato da interface "),Il(5704,"code"),Qx(5705,"PoLookupResponseApi"),og(),Qx(5706,"."),og()()()(),Il(5707,"h5")(5708,"b"),Qx(5709,"Par\xE2metros"),og()(),Il(5710,"table",13)(5711,"tr",14)(5712,"th",15),Qx(5713,"Nome"),og(),Il(5714,"th",15),Qx(5715,"Tipo"),og(),Il(5716,"th",15),Qx(5717,"Descri\xE7\xE3o"),og()(),Il(5718,"tr",16)(5719,"td",17),Qx(5720," params"),og(),Il(5721,"td",21)(5722,"code",83),Qx(5723," PoLookupFilteredItemsParams "),og()(),Il(5724,"td",24)(5725,"p"),Qx(5726,"Objeto enviado por par\xE2metro que implementa a interface "),Il(5727,"code"),Qx(5728,"PoLookupFilteredItemsParams"),og(),Qx(5729,"."),og()()()(),zl(5730,"br"),Il(5731,"table",41)(5732,"tr",16)(5733,"th",42)(5734,"div",25)(5735,"h4")(5736,"span",26),Qx(5737," getObjectByValue "),og()()()()(),Il(5738,"tr",24)(5739,"td",24)(5740,"p"),Qx(5741,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og(),Il(5742,"p"),Qx(5743,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),og()()()(),Il(5744,"h5")(5745,"b"),Qx(5746,"Par\xE2metros"),og()(),Il(5747,"table",13)(5748,"tr",14)(5749,"th",15),Qx(5750,"Nome"),og(),Il(5751,"th",15),Qx(5752,"Tipo"),og(),Il(5753,"th",15),Qx(5754,"Descri\xE7\xE3o"),og()(),Il(5755,"tr",16)(5756,"td",17),Qx(5757," value"),og(),Il(5758,"td",21)(5759,"code",27),Qx(5760," string "),og(),Il(5761,"code",74),Qx(5762," Array<any> "),og()(),Il(5763,"td",24)(5764,"p"),Qx(5765,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Il(5766,"tr",16)(5767,"td",17),Qx(5768," filterParams"),og(),Il(5769,"td",21)(5770,"code",83),Qx(5771," any "),og()(),Il(5772,"td",24)(5773,"p"),Qx(5774,"Valor informado atrav\xE9s da propriedade "),Il(5775,"code"),Qx(5776,"p-filter-params"),og(),Qx(5777,"."),og()()()(),zl(5778,"br"),Il(5779,"h4",43)(5780,"code",5),Qx(5781,"PoLookupFilteredItemsParams"),og()(),Il(5782,"div",2)(5783,"p"),Qx(5784,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Il(5785,"code"),Qx(5786,"getFilteredItems"),og(),Qx(5787,"."),og()(),Il(5788,"h4",12),Qx(5789,"Propriedades"),og(),Il(5790,"table",13)(5791,"tr",14)(5792,"th",15),Qx(5793,"Nome"),og(),Il(5794,"th",15),Qx(5795,"Tipo"),og(),Il(5796,"th",15),Qx(5797,"Descri\xE7\xE3o"),og()(),Il(5798,"tr",16)(5799,"td",17)(5800,"div",25)(5801,"span",26),Qx(5802," advancedFilters"),zl(5803,"br"),og()()(),Il(5804,"td",21)(5805,"code",84),Qx(5806,`{ [key: string]: any;
}`),og()(),Il(5807,"td",24)(5808,"em")(5809,"strong"),Qx(5810,"(opcional)"),og()(),Il(5811,"p"),Qx(5812,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),og()()(),Il(5813,"tr",16)(5814,"td",17)(5815,"div",25)(5816,"span",26),Qx(5817," filter"),zl(5818,"br"),og()()(),Il(5819,"td",21)(5820,"code",27),Qx(5821,"string"),og()(),Il(5822,"td",24)(5823,"em")(5824,"strong"),Qx(5825,"(opcional)"),og()(),Il(5826,"p"),Qx(5827,"Conte\xFAdo utilizado para filtrar a lista de itens."),og()()(),Il(5828,"tr",16)(5829,"td",17)(5830,"div",25)(5831,"span",26),Qx(5832," filterParams"),zl(5833,"br"),og()()(),Il(5834,"td",21)(5835,"code",33),Qx(5836,"any"),og()(),Il(5837,"td",24)(5838,"em")(5839,"strong"),Qx(5840,"(opcional)"),og()(),Il(5841,"p"),Qx(5842,"Valor informado atrav\xE9s da propriedade "),Il(5843,"code"),Qx(5844,"p-filter-params"),og(),Qx(5845,"."),og()()(),Il(5846,"tr",16)(5847,"td",17)(5848,"div",25)(5849,"span",26),Qx(5850," order"),zl(5851,"br"),og()()(),Il(5852,"td",21)(5853,"code",27),Qx(5854,"string"),og()(),Il(5855,"td",24)(5856,"em")(5857,"strong"),Qx(5858,"(opcional)"),og()(),Il(5859,"p"),Qx(5860,"Coluna que est\xE1 sendo ordenada na tabela."),og(),Il(5861,"ul")(5862,"li"),Qx(5863,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Il(5864,"code"),Qx(5865,"-<colunaOrdenada>"),og(),Qx(5866,", por exemplo "),Il(5867,"code"),Qx(5868,"-name"),og(),Qx(5869,"."),og(),Il(5870,"li"),Qx(5871,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Il(5872,"code"),Qx(5873,"<colunaOrdenada>"),og(),Qx(5874,", por exemplo "),Il(5875,"code"),Qx(5876,"name"),og(),Qx(5877,"."),og()()()(),Il(5878,"tr",16)(5879,"td",17)(5880,"div",25)(5881,"span",26),Qx(5882," page"),zl(5883,"br"),og()()(),Il(5884,"td",21)(5885,"code",45),Qx(5886,"number"),og()(),Il(5887,"td",24)(5888,"em")(5889,"strong"),Qx(5890,"(opcional)"),og()(),Il(5891,"p"),Qx(5892,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),og()()(),Il(5893,"tr",16)(5894,"td",17)(5895,"div",25)(5896,"span",26),Qx(5897," pageSize"),zl(5898,"br"),og()()(),Il(5899,"td",21)(5900,"code",45),Qx(5901,"number"),og()(),Il(5902,"td",24)(5903,"em")(5904,"strong"),Qx(5905,"(opcional)"),og()(),Il(5906,"p"),Qx(5907,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),og()()()(),Il(5908,"h4",43)(5909,"code",5),Qx(5910,"PoLookupLiterals"),og()(),Il(5911,"div",2)(5912,"p"),Qx(5913,"Interface para defini\xE7\xE3o das literais usadas no "),Il(5914,"code"),Qx(5915,"po-lookup"),og(),Qx(5916,"."),og()(),Il(5917,"h4",12),Qx(5918,"Propriedades"),og(),Il(5919,"table",13)(5920,"tr",14)(5921,"th",15),Qx(5922,"Nome"),og(),Il(5923,"th",15),Qx(5924,"Tipo"),og(),Il(5925,"th",15),Qx(5926,"Descri\xE7\xE3o"),og()(),Il(5927,"tr",16)(5928,"td",17)(5929,"div",25)(5930,"span",26),Qx(5931," clean"),zl(5932,"br"),og()()(),Il(5933,"td",21)(5934,"code",27),Qx(5935,"string"),og()(),Il(5936,"td",24)(5937,"em")(5938,"strong"),Qx(5939,"(opcional)"),og()(),Il(5940,"p"),Qx(5941,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),og()()(),Il(5942,"tr",16)(5943,"td",17)(5944,"div",25)(5945,"span",26),Qx(5946," modalAdvancedSearch"),zl(5947,"br"),og()()(),Il(5948,"td",21)(5949,"code",27),Qx(5950,"string"),og()(),Il(5951,"td",24)(5952,"em")(5953,"strong"),Qx(5954,"(opcional)"),og()(),Il(5955,"p"),Qx(5956,"Texto do link de busca avan\xE7ada."),og(),Il(5957,"p"),Qx(5958,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),og()()(),Il(5959,"tr",16)(5960,"td",17)(5961,"div",25)(5962,"span",26),Qx(5963," modalAdvancedSearchPrimaryActionLabel"),zl(5964,"br"),og()()(),Il(5965,"td",21)(5966,"code",27),Qx(5967,"string"),og()(),Il(5968,"td",24)(5969,"em")(5970,"strong"),Qx(5971,"(opcional)"),og()(),Il(5972,"p"),Qx(5973,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),og()()(),Il(5974,"tr",16)(5975,"td",17)(5976,"div",25)(5977,"span",26),Qx(5978," modalAdvancedSearchSecondaryActionLabel"),zl(5979,"br"),og()()(),Il(5980,"td",21)(5981,"code",27),Qx(5982,"string"),og()(),Il(5983,"td",24)(5984,"em")(5985,"strong"),Qx(5986,"(opcional)"),og()(),Il(5987,"p"),Qx(5988,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),og()()(),Il(5989,"tr",16)(5990,"td",17)(5991,"div",25)(5992,"span",26),Qx(5993," modalAdvancedSearchTitle"),zl(5994,"br"),og()()(),Il(5995,"td",21)(5996,"code",27),Qx(5997,"string"),og()(),Il(5998,"td",24)(5999,"em")(6e3,"strong"),Qx(6001,"(opcional)"),og()(),Il(6002,"p"),Qx(6003,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),og()()(),Il(6004,"tr",16)(6005,"td",17)(6006,"div",25)(6007,"span",26),Qx(6008," modalDisclaimerGroupTitle"),zl(6009,"br"),og()()(),Il(6010,"td",21)(6011,"code",27),Qx(6012,"string"),og()(),Il(6013,"td",24)(6014,"em")(6015,"strong"),Qx(6016,"(opcional)"),og()(),Il(6017,"p"),Qx(6018,"Texto exibido no t\xEDtulo do disclaimer."),og()()(),Il(6019,"tr",16)(6020,"td",17)(6021,"div",25)(6022,"span",26),Qx(6023," modalPlaceholder"),zl(6024,"br"),og()()(),Il(6025,"td",21)(6026,"code",27),Qx(6027,"string"),og()(),Il(6028,"td",24)(6029,"em")(6030,"strong"),Qx(6031,"(opcional)"),og()(),Il(6032,"p"),Qx(6033,"Texto exibido no placeholder do input da modal."),og()()(),Il(6034,"tr",16)(6035,"td",17)(6036,"div",25)(6037,"span",26),Qx(6038," modalPrimaryActionLabel"),zl(6039,"br"),og()()(),Il(6040,"td",21)(6041,"code",27),Qx(6042,"string"),og()(),Il(6043,"td",24)(6044,"em")(6045,"strong"),Qx(6046,"(opcional)"),og()(),Il(6047,"p"),Qx(6048,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),og()()(),Il(6049,"tr",16)(6050,"td",17)(6051,"div",25)(6052,"span",26),Qx(6053," modalSecondaryActionLabel"),zl(6054,"br"),og()()(),Il(6055,"td",21)(6056,"code",27),Qx(6057,"string"),og()(),Il(6058,"td",24)(6059,"em")(6060,"strong"),Qx(6061,"(opcional)"),og()(),Il(6062,"p"),Qx(6063,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),og()()(),Il(6064,"tr",16)(6065,"td",17)(6066,"div",25)(6067,"span",26),Qx(6068," modalTableLoadMoreData"),zl(6069,"br"),og()()(),Il(6070,"td",21)(6071,"code",27),Qx(6072,"string"),og()(),Il(6073,"td",24)(6074,"em")(6075,"strong"),Qx(6076,"(opcional)"),og()(),Il(6077,"p"),Qx(6078,"Label do "),Il(6079,"code"),Qx(6080,"button"),og(),Qx(6081," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),og()()(),Il(6082,"tr",16)(6083,"td",17)(6084,"div",25)(6085,"span",26),Qx(6086," modalTableLoadingData"),zl(6087,"br"),og()()(),Il(6088,"td",21)(6089,"code",27),Qx(6090,"string"),og()(),Il(6091,"td",24)(6092,"em")(6093,"strong"),Qx(6094,"(opcional)"),og()(),Il(6095,"p"),Qx(6096,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Il(6097,"tr",16)(6098,"td",17)(6099,"div",25)(6100,"span",26),Qx(6101," modalTableNoColumns"),zl(6102,"br"),og()()(),Il(6103,"td",21)(6104,"code",27),Qx(6105,"string"),og()(),Il(6106,"td",24)(6107,"em")(6108,"strong"),Qx(6109,"(opcional)"),og()(),Il(6110,"p"),Qx(6111,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Il(6112,"tr",16)(6113,"td",17)(6114,"div",25)(6115,"span",26),Qx(6116," modalTableNoData"),zl(6117,"br"),og()()(),Il(6118,"td",21)(6119,"code",27),Qx(6120,"string"),og()(),Il(6121,"td",24)(6122,"em")(6123,"strong"),Qx(6124,"(opcional)"),og()(),Il(6125,"p"),Qx(6126,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Il(6127,"tr",16)(6128,"td",17)(6129,"div",25)(6130,"span",26),Qx(6131," modalTitle"),zl(6132,"br"),og()()(),Il(6133,"td",21)(6134,"code",27),Qx(6135,"string"),og()(),Il(6136,"td",24)(6137,"em")(6138,"strong"),Qx(6139,"(opcional)"),og()(),Il(6140,"p"),Qx(6141,"Texto exibido no t\xEDtulo da modal."),og()()(),Il(6142,"tr",16)(6143,"td",17)(6144,"div",25)(6145,"span",26),Qx(6146," search"),zl(6147,"br"),og()()(),Il(6148,"td",21)(6149,"code",27),Qx(6150,"string"),og()(),Il(6151,"td",24)(6152,"em")(6153,"strong"),Qx(6154,"(opcional)"),og()(),Il(6155,"p"),Qx(6156,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),og()()()(),Il(6157,"h4",43)(6158,"code",5),Qx(6159,"PoLookupResponseApi"),og()(),Il(6160,"div",2)(6161,"p"),Qx(6162,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),og()(),Il(6163,"h4",12),Qx(6164,"Propriedades"),og(),Il(6165,"table",13)(6166,"tr",14)(6167,"th",15),Qx(6168,"Nome"),og(),Il(6169,"th",15),Qx(6170,"Tipo"),og(),Il(6171,"th",15),Qx(6172,"Descri\xE7\xE3o"),og()(),Il(6173,"tr",16)(6174,"td",17)(6175,"div",25)(6176,"span",26),Qx(6177," hasNext"),zl(6178,"br"),og()()(),Il(6179,"td",21)(6180,"code",29),Qx(6181,"boolean"),og()(),Il(6182,"td",24)(6183,"p"),Qx(6184,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),og()()(),Il(6185,"tr",16)(6186,"td",17)(6187,"div",25)(6188,"span",26),Qx(6189," items"),zl(6190,"br"),og()()(),Il(6191,"td",21)(6192,"code",85),Qx(6193,"Array<object>"),og()(),Il(6194,"td",24)(6195,"p"),Qx(6196,"Lista de itens retornados."),og()()()(),Il(6197,"h3"),Qx(6198,"Enums"),og(),Il(6199,"h4",4)(6200,"code",5),Qx(6201,"PoTableColumnSpacing"),og()(),Il(6202,"div",2)(6203,"p"),Qx(6204,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Il(6205,"strong"),Qx(6206,"p-spacing"),og(),Qx(6207,") do po-table."),og()(),Il(6208,"h4",12),Qx(6209,"Propriedades"),og(),Il(6210,"table",13)(6211,"tr",14)(6212,"th",15),Qx(6213,"Nome"),og(),Il(6214,"th",15),Qx(6215,"Descri\xE7\xE3o"),og()(),Il(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),Qx(6220," ExtraSmall"),zl(6221,"br"),og()()(),Il(6222,"td",24)(6223,"p"),Qx(6224,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Il(6225,"tr",16)(6226,"td",17)(6227,"div",25)(6228,"span",26),Qx(6229," Small"),zl(6230,"br"),og()()(),Il(6231,"td",24)(6232,"p"),Qx(6233,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Il(6234,"tr",16)(6235,"td",17)(6236,"div",25)(6237,"span",26),Qx(6238," Medium"),zl(6239,"br"),og()()(),Il(6240,"td",24)(6241,"p"),Qx(6242,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Il(6243,"tr",16)(6244,"td",17)(6245,"div",25)(6246,"span",26),Qx(6247," Large"),zl(6248,"br"),og()()(),Il(6249,"td",24)(6250,"p"),Qx(6251,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var We=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-lookup-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,Me,_e,Oe,Ie,ze,Be,Re],encapsulation:2})}return a})();var xt=[{path:"",component:We}],Ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(xt),uL]})}return a})();var Ii=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ue]})}return a})();export{Ii as DocPoLookupModule};