import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,n as nb,c_ as t,r as r$1,I,c$ as Xi,aW as Yp,cM as Q9,cN as lm,G,b$ as CT,d0 as J0,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,aI as dc,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aJ as Hhe,b5 as Whe,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,R as we$1,bd as Nx,a7 as dN,cQ as Mk,cR as Sk,b7 as k3,d1 as NO,a4 as yN,aq as dx,br as sN,a5 as DN,at as fx,a3 as rNe,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Wl(0,"po-lookup",0);},dependencies:[J0],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Lookup Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-lookup-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Qe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,we],encapsulation:2})}return a})();var A=(()=>{class a{httpClient=f(nb);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService=f(A);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Xi.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we$1([A])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=wx();Sl(0,"po-lookup",1),ww("ngModelChange",function(m){return Ky(c),nN(o.lookup,m)||(o.lookup=m),Xy(m)}),ft("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"po-container",2)(3,"div",3),Wl(4,"po-info",4)(5,"po-info",5),og()(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",6),ww("ngModelChange",function(m){return Ky(c),nN(o.label,m)||(o.label=m),Xy(m)}),og(),e0(),Sl(10,"po-checkbox-group",7),ww("ngModelChange",function(m){return Ky(c),nN(o.columnsName,m)||(o.columnsName=m),Xy(m)}),ft("p-change",function(){return o.updateColumns()}),og(),e0(),Sl(11,"po-select",8),ww("ngModelChange",function(m){return Ky(c),nN(o.fieldLabel,m)||(o.fieldLabel=m),Xy(m)}),og(),e0(),Sl(12,"po-select",9),ww("ngModelChange",function(m){return Ky(c),nN(o.fieldValue,m)||(o.fieldValue=m),Xy(m)}),og(),e0(),Sl(13,"po-input",10),ww("ngModelChange",function(m){return Ky(c),nN(o.filterService,m)||(o.filterService=m),Xy(m)}),og(),e0(),Sl(14,"po-input",11),ww("ngModelChange",function(m){return Ky(c),nN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Xy(m)}),og(),e0(),Sl(15,"po-input",12),ww("ngModelChange",function(m){return Ky(c),nN(o.help,m)||(o.help=m),Xy(m)}),og(),e0(),Sl(16,"po-input",13),ww("ngModelChange",function(m){return Ky(c),nN(o.helperText,m)||(o.helperText=m),Xy(m)}),og(),e0(),Sl(17,"po-input",14),ww("ngModelChange",function(m){return Ky(c),nN(o.placeholder,m)||(o.placeholder=m),Xy(m)}),og(),e0(),Sl(18,"po-input",15),ww("ngModelChange",function(m){return Ky(c),nN(o.literals,m)||(o.literals=m),Xy(m)}),ft("p-change",function(){return o.changeLiterals()}),og(),e0(),Sl(19,"po-input",16),ww("ngModelChange",function(m){return Ky(c),nN(o.formatField,m)||(o.formatField=m),Xy(m)}),ft("p-change",function(m){return o.onFieldFormatChange(m)}),og(),e0(),Sl(20,"po-checkbox-group",17),ww("ngModelChange",function(m){return Ky(c),nN(o.properties,m)||(o.properties=m),Xy(m)}),og(),e0(),Sl(21,"po-radio-group",18),ww("ngModelChange",function(m){return Ky(c),nN(o.spacing,m)||(o.spacing=m),Xy(m)}),og(),e0(),Sl(22,"po-radio-group",19),ww("ngModelChange",function(m){return Ky(c),nN(o.size,m)||(o.size=m),Xy(m)}),og(),e0(),Sl(23,"po-textarea",20),ww("ngModelChange",function(m){return Ky(c),nN(o.advancedFilters,m)||(o.advancedFilters=m),Xy(m)}),ft("p-change",function(){return o.changeAdvancedFilters()}),og(),e0(),Sl(24,"div",3)(25,"po-button",21),ft("p-click",function(){return o.restore()}),og()()();}l&2&&(Ew("ngModel",o.lookup),nw("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),n0(),Lp(4),nw("p-value",o.lookup),Lp(),nw("p-value",o.event),Lp(4),Ew("ngModel",o.label),n0(),Lp(),Ew("ngModel",o.columnsName),nw("p-options",o.columnsOptions),n0(),Lp(),Ew("ngModel",o.fieldLabel),nw("p-options",o.fieldLabelOptions),n0(),Lp(),Ew("ngModel",o.fieldValue),nw("p-options",o.fieldValueOptions),n0(),Lp(),Ew("ngModel",o.filterService),n0(),Lp(),Ew("ngModel",o.fieldErrorMessage),n0(),Lp(),Ew("ngModel",o.help),n0(),Lp(),Ew("ngModel",o.helperText),n0(),Lp(),Ew("ngModel",o.placeholder),n0(),Lp(),Ew("ngModel",o.literals),n0(),Lp(),Ew("ngModel",o.formatField),n0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),n0(),Lp(),Ew("ngModel",o.spacing),nw("p-options",o.typeSpacing),n0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),n0(),Lp(),Ew("ngModel",o.advancedFilters),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,dc,mv,b3,L3,J0,wde,Hhe,Whe,Ghe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Lookup Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-lookup
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-lookup.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-labs"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ye,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=f(A);notification=f(Yp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we$1([A])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=wx();Sl(0,"div",1),Wl(1,"po-info",2),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),ww("ngModelChange",function(m){return Ky(c),nN(o.hero,m)||(o.hero=m),Xy(m)}),og(),e0(),Sl(7,"po-select",4),ww("ngModelChange",function(m){return Ky(c),nN(o.vehicle,m)||(o.vehicle=m),Xy(m)}),og(),e0(),og(),Sl(8,"div",1)(9,"po-button",5),ft("p-click",function(){return o.startMission()}),og()()();}if(l&2){let c=Nx(4);Lp(6),Ew("ngModel",o.hero),nw("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",dN(10,Xe)),n0(),Lp(),Ew("ngModel",o.vehicle),nw("p-options",o.vehicles),n0(),Lp(2),nw("p-disabled",c.form.invalid||c.form.pending);}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,J0,Hhe,Ghe],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Lookup - Hero"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-lookup.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-hero"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,et,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ae],encapsulation:2})}return a})();var it=()=>["nickname","label"],nt=()=>({modalTitle:"Heroes available for mission"}),je=(()=>{class a{service=f(A);notification=f(Yp);formBuilder=f(Q9);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,lm.required],vehicle:[null,lm.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we$1([A])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Sl(0,"div",0),Wl(1,"po-info",1),og(),Wl(2,"po-divider"),Sl(3,"form",2)(4,"div",0),Wl(5,"po-lookup",3),e0(),Wl(6,"po-select",4),e0(),og(),Sl(7,"div",0)(8,"po-button",5),ft("p-click",function(){return o.startMission()}),og()()()),l&2&&(Lp(3),nw("formGroup",o.formMission),Lp(2),nw("p-columns",o.columns)("p-field-format",dN(7,it))("p-filter-service",o.service)("p-literals",dN(8,nt)),n0(),Lp(),nw("p-options",o.vehicles),n0(),Lp(2),nw("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[Z9,G9,q9,Mk,Sk,Qt,mv,J0,Hhe,Ghe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Lookup - Hero Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-lookup.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-hero-reactive-form"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,at,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,je],encapsulation:2})}return a})();var de=(()=>{class a{http=f(nb);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(G(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(G(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,St){if(a&1&&(Sl(0,"div",0),Wl(1,"po-table",3),og()),a&2){let r=Mx();Lp(),nw("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ve=(()=>{class a{filterService=f(de);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we$1([de])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-radio-group",1),ww("ngModelChange",function(p){return nN(o.filterParams,p)||(o.filterParams=p),p}),og(),e0(),og(),Wl(2,"po-divider"),Sl(3,"div",0)(4,"po-lookup",2),yN(5,"titlecase"),ww("ngModelChange",function(p){return nN(o.entity,p)||(o.entity=p),p}),ft("p-selected",function(p){return o.onSelected(p)}),og(),e0(),og(),dx(6,rt,2,4,"div",0)),l&2&&(Lp(),Ew("ngModel",o.filterParams),nw("p-options",o.entities),n0(),Lp(3),nw("p-help",sN("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",sN("",DN(5,12,o.entityLabel)," of Star Wars")),Ew("ngModel",o.entity),nw("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),n0(),Lp(2),fx(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[G9,_k,mv,J0,wde,k3,NO],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Lookup - Star Wars films"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-sw-films"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,dt,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ve],encapsulation:2})}return a})();var He=(()=>{class a{http=f(nb);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(CT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ne=(()=>{class a{service=f(He);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-lookup",1),ww("ngModelChange",function(p){return nN(o.multiLookup,p)||(o.multiLookup=p),p}),ft("p-change",function(p){return o.changeOptions(p)}),og(),e0(),Sl(2,"po-container",2),Wl(3,"po-table",3),og()()),l&2&&(Lp(),Ew("ngModel",o.multiLookup),nw("p-multiple",true),n0(),Lp(2),nw("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[G9,_k,dc,J0,k3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Lookup - Multiple"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-multiple"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ct,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ne],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6252,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoLookupComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Sl(24,"code"),eN(25,"po-lookup"),og(),eN(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Sl(27,"em"),eN(28,"TAB"),og(),eN(29,` para
buscar um registro.`),og(),Sl(30,"blockquote")(31,"p"),eN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),og()(),Sl(33,"blockquote")(34,"p"),eN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Sl(36,"a",6),eN(37,"modelo"),og(),eN(38," como "),Sl(39,"code"),eN(40,"pending"),og(),eN(41,"."),og()(),Sl(42,"p"),eN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Sl(44,"code"),eN(45,"po-select"),og(),eN(46," ou o "),Sl(47,"code"),eN(48,"po-combo"),og(),eN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(50,"a",7),eN(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),og(),eN(52,"."),og(),Sl(53,"p"),eN(54,"Importante:"),og(),Sl(55,"ul")(56,"li"),eN(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Sl(58,"pre")(59,"code"),eN(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),og()()()(),Sl(61,"h4"),eN(62,"Tokens customiz\xE1veis"),og(),Sl(63,"p"),eN(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(65,"blockquote")(66,"p"),eN(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(68,"a",8),eN(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(70,"."),og()(),Sl(71,"table")(72,"thead")(73,"tr")(74,"th"),eN(75,"Propriedade"),og(),Sl(76,"th"),eN(77,"Descri\xE7\xE3o"),og(),Sl(78,"th"),eN(79,"Valor Padr\xE3o"),og()()(),Sl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),eN(84,"Default Values"),og()(),Wl(85,"td")(86,"td"),og(),Sl(87,"tr")(88,"td")(89,"code"),eN(90,"--font-family"),og()(),Sl(91,"td"),eN(92,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(93,"td")(94,"code"),eN(95,"var(--font-family-theme)"),og()()(),Sl(96,"tr")(97,"td")(98,"code"),eN(99,"--font-size"),og()(),Sl(100,"td"),eN(101,"Tamanho da fonte"),og(),Sl(102,"td")(103,"code"),eN(104,"var(--font-size-default)"),og()()(),Sl(105,"tr")(106,"td")(107,"code"),eN(108,"--text-color-placeholder"),og()(),Sl(109,"td"),eN(110,"Cor do texto no placeholder"),og(),Sl(111,"td")(112,"code"),eN(113,"var(--color-neutral-light-30)"),og()()(),Sl(114,"tr")(115,"td")(116,"code"),eN(117,"--color"),og()(),Sl(118,"td"),eN(119,"Cor principal do lookup"),og(),Sl(120,"td")(121,"code"),eN(122,"var(--color-neutral-dark-70)"),og()()(),Sl(123,"tr")(124,"td")(125,"code"),eN(126,"--border-radius"),og()(),Sl(127,"td"),eN(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(129,"td")(130,"code"),eN(131,"var(--border-radius-md)"),og()()(),Sl(132,"tr")(133,"td")(134,"code"),eN(135,"--background"),og()(),Sl(136,"td"),eN(137,"Cor de background"),og(),Sl(138,"td")(139,"code"),eN(140,"var(--color-neutral-light-05)"),og()()(),Sl(141,"tr")(142,"td")(143,"code"),eN(144,"--text-color"),og()(),Sl(145,"td"),eN(146,"Cor do texto"),og(),Sl(147,"td")(148,"code"),eN(149,"var(--color-neutral-dark-90)"),og()()(),Sl(150,"tr")(151,"td")(152,"code"),eN(153,"--color-clear"),og()(),Sl(154,"td"),eN(155,"Cor principal do icone clear"),og(),Sl(156,"td")(157,"code"),eN(158,"var(--color-action-default)"),og()()(),Sl(159,"tr")(160,"td")(161,"strong"),eN(162,"Icon"),og()(),Wl(163,"td")(164,"td"),og(),Sl(165,"tr")(166,"td")(167,"code"),eN(168,"--color-icon"),og()(),Sl(169,"td"),eN(170,"Cor principal do icone pesquisar"),og(),Sl(171,"td")(172,"code"),eN(173,"var(--color-action-default)"),og()()(),Sl(174,"tr")(175,"td")(176,"strong"),eN(177,"Hover"),og()(),Wl(178,"td")(179,"td"),og(),Sl(180,"tr")(181,"td")(182,"code"),eN(183,"--color-hover"),og()(),Sl(184,"td"),eN(185,"Cor principal no estado hover"),og(),Sl(186,"td")(187,"code"),eN(188,"var(--color-brand-01-dark)"),og()()(),Sl(189,"tr")(190,"td")(191,"code"),eN(192,"--background-hover"),og()(),Sl(193,"td"),eN(194,"Cor de background no estado hover"),og(),Sl(195,"td")(196,"code"),eN(197,"var(--color-brand-01-lightest)"),og()()(),Sl(198,"tr")(199,"td")(200,"strong"),eN(201,"Focused"),og()(),Wl(202,"td")(203,"td"),og(),Sl(204,"tr")(205,"td")(206,"code"),eN(207,"--color-focused"),og()(),Sl(208,"td"),eN(209,"Cor principal no estado de focus"),og(),Sl(210,"td")(211,"code"),eN(212,"var(--color-action-default)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),eN(216,"--outline-color-focused"),og()(),Sl(217,"td"),eN(218,"Cor do outline do estado de focus"),og(),Sl(219,"td")(220,"code"),eN(221,"var(--color-action-focus)"),og()()(),Sl(222,"tr")(223,"td")(224,"strong"),eN(225,"Disabled"),og()(),Wl(226,"td")(227,"td"),og(),Sl(228,"tr")(229,"td")(230,"code"),eN(231,"--color-disabled"),og()(),Sl(232,"td"),eN(233,"Cor principal no estado disabled"),og(),Sl(234,"td")(235,"code"),eN(236,"var(--color-action-disabled)"),og()()(),Sl(237,"tr")(238,"td")(239,"code"),eN(240,"--background-disabled"),og()(),Sl(241,"td"),eN(242,"Cor de background no estado disabled"),og(),Sl(243,"td")(244,"code"),eN(245,"var(--color-neutral-light-20)"),og()()(),Sl(246,"tr")(247,"td")(248,"code"),eN(249,"--text-color-disabled"),og()(),Sl(250,"td"),eN(251,"Cor do texto quando campo est\xE1 desabilitado"),og(),Sl(252,"td")(253,"code"),eN(254,"var(--color-action-disabled)"),og()()(),Sl(255,"tr")(256,"td")(257,"strong"),eN(258,"Error"),og()(),Wl(259,"td")(260,"td"),og(),Sl(261,"tr")(262,"td")(263,"code"),eN(264,"--color-error"),og()(),Sl(265,"td"),eN(266,"Cor de background no estado de requerido"),og(),Sl(267,"td")(268,"code"),eN(269,"var(--color-feedback-negative-base)"),og()()()()()(),Sl(270,"div",9)(271,"h4",10),eN(272,"Seletor"),og(),Sl(273,"pre",11),eN(274,`<po-lookup
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
`),og()(),Sl(275,"h4",12),eN(276,"Propriedades"),og(),Sl(277,"table",13)(278,"tr",14)(279,"th",15),eN(280,"Nome"),og(),Sl(281,"th",15),eN(282,"Tipo"),og(),Sl(283,"th",15),eN(284,"Padr\xE3o"),og(),Sl(285,"th",15),eN(286,"Descri\xE7\xE3o"),og()(),Sl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),eN(291," (p-additional-help)"),Wl(292,"br"),og()(),Sl(293,"div",20),eN(294,"Deprecated"),og()(),Sl(295,"td",21)(296,"code",22),eN(297,"EventEmitter"),og()(),Sl(298,"td",23),eN(299,"-"),og(),Sl(300,"td",24)(301,"em")(302,"strong"),eN(303,"(opcional)"),og()(),Sl(304,"p"),eN(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(306,"blockquote")(307,"p"),eN(308,"Essa propriedade est\xE1 "),Sl(309,"strong"),eN(310,"depreciada"),og(),eN(311," e ser\xE1 removida na vers\xE3o "),Sl(312,"code"),eN(313,"23.x.x"),og(),eN(314,". Recomendamos utilizar a propriedade "),Sl(315,"code"),eN(316,"p-helper"),og(),eN(317," que oferece mais recursos e flexibilidade."),og()()()(),Sl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),eN(322," p-additional-help-tooltip"),Wl(323,"br"),og()(),Sl(324,"div",20),eN(325,"Deprecated"),og()(),Sl(326,"td",21)(327,"code",27),eN(328,"string"),og()(),Sl(329,"td",23),eN(330,"-"),og(),Sl(331,"td",24)(332,"em")(333,"strong"),eN(334,"(opcional)"),og()(),Sl(335,"p"),eN(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(337,"code"),eN(338,"po-helper"),og(),eN(339,`.
`),Sl(340,"strong"),eN(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(342,"blockquote")(343,"p"),eN(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(345,"blockquote")(346,"p"),eN(347,"Essa propriedade est\xE1 "),Sl(348,"strong"),eN(349,"depreciada"),og(),eN(350," e ser\xE1 removida na vers\xE3o "),Sl(351,"code"),eN(352,"23.x.x"),og(),eN(353,". Recomendamos utilizar a propriedade "),Sl(354,"code"),eN(355,"p-helper"),og(),eN(356," que oferece mais recursos e flexibilidade."),og()()()(),Sl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),eN(361," p-advanced-filters"),Wl(362,"br"),og()()(),Sl(363,"td",21)(364,"code",28),eN(365,"Array<PoLookupAdvancedFilter>"),og()(),Sl(366,"td",23),eN(367,"-"),og(),Sl(368,"td",24)(369,"em")(370,"strong"),eN(371,"(opcional)"),og()(),Sl(372,"p"),eN(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Sl(374,"blockquote")(375,"p"),eN(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Sl(377,"p"),eN(378,"Exemplo de URL com busca avan\xE7ada:"),og(),Sl(379,"pre")(380,"code"),eN(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),og()(),Sl(382,"p"),eN(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),og(),Sl(384,"pre")(385,"code"),eN(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),og()()()(),Sl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),eN(391," p-append-in-body"),Wl(392,"br"),og()()(),Sl(393,"td",21)(394,"code",29),eN(395,"boolean"),og()(),Sl(396,"td",23)(397,"p")(398,"code"),eN(399,"false"),og()()(),Sl(400,"td",24)(401,"em")(402,"strong"),eN(403,"(opcional)"),og()(),Sl(404,"p"),eN(405,"Define que o popover ("),Sl(406,"code"),eN(407,"p-helper"),og(),eN(408," e/ou "),Sl(409,"code"),eN(410,"p-error-limit"),og(),eN(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(412,"blockquote")(413,"p"),eN(414,"Quando utilizado com "),Sl(415,"code"),eN(416,"p-helper"),og(),eN(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),eN(422," p-auto-focus"),Wl(423,"br"),og()()(),Sl(424,"td",21)(425,"code",29),eN(426,"boolean"),og()(),Sl(427,"td",23)(428,"p")(429,"code"),eN(430,"false"),og()()(),Sl(431,"td",24)(432,"em")(433,"strong"),eN(434,"(opcional)"),og()(),Sl(435,"p"),eN(436,"Aplica foco no elemento ao ser iniciado."),og(),Sl(437,"blockquote")(438,"p"),eN(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),eN(444," p-auto-height"),Wl(445,"br"),og()()(),Sl(446,"td",21)(447,"code",29),eN(448,"boolean"),og()(),Sl(449,"td",23)(450,"p")(451,"code"),eN(452,"false"),og()()(),Sl(453,"td",24)(454,"em")(455,"strong"),eN(456,"(opcional)"),og()(),Sl(457,"p"),eN(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),og()()(),Sl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),eN(463," (p-change)"),Wl(464,"br"),og()()(),Sl(465,"td",21)(466,"code",22),eN(467,"EventEmitter"),og()(),Sl(468,"td",23),eN(469,"-"),og(),Sl(470,"td",24)(471,"em")(472,"strong"),eN(473,"(opcional)"),og()(),Sl(474,"p"),eN(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),og()()(),Sl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),eN(480," (p-change-visible-columns)"),Wl(481,"br"),og()()(),Sl(482,"td",21)(483,"code",22),eN(484,"EventEmitter"),og()(),Sl(485,"td",23),eN(486,"-"),og(),Sl(487,"td",24)(488,"em")(489,"strong"),eN(490,"(opcional)"),og()(),Sl(491,"p"),eN(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(493,"p"),eN(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),eN(499," p-clean"),Wl(500,"br"),og()()(),Sl(501,"td",21)(502,"code",29),eN(503,"boolean"),og()(),Sl(504,"td",23),eN(505,"-"),og(),Sl(506,"td",24)(507,"p"),eN(508,"Exibe um \xEDcone que permite limpar o campo."),og()()(),Sl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),eN(513," (p-restore-column-manager)"),Wl(514,"br"),og()()(),Sl(515,"td",21)(516,"code",22),eN(517,"EventEmitter"),og()(),Sl(518,"td",23),eN(519,"-"),og(),Sl(520,"td",24)(521,"em")(522,"strong"),eN(523,"(opcional)"),og()(),Sl(524,"p"),eN(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(526,"p"),eN(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),eN(532," p-columns"),Wl(533,"br"),og()()(),Sl(534,"td",21)(535,"code",30),eN(536,"Array<PoLookupColumn>"),og()(),Sl(537,"td",23),eN(538,"-"),og(),Sl(539,"td",24)(540,"em")(541,"strong"),eN(542,"(opcional)"),og()(),Sl(543,"p"),eN(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),og()()(),Sl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),eN(549," p-compact-label"),Wl(550,"br"),og()()(),Sl(551,"td",21)(552,"code",29),eN(553,"boolean"),og()(),Sl(554,"td",23)(555,"p")(556,"code"),eN(557,"false"),og()()(),Sl(558,"td",24)(559,"em")(560,"strong"),eN(561,"(opcional)"),og()(),Sl(562,"p"),eN(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(564,"p"),eN(565,"Quando habilitado ("),Sl(566,"code"),eN(567,"true"),og(),eN(568,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(569,"ul")(570,"li")(571,"code"),eN(572,"po-label"),og()(),Sl(573,"li")(574,"code"),eN(575,"p-requirement (showRequired)"),og()(),Sl(576,"li")(577,"code"),eN(578,"po-helper"),og()()(),Sl(579,"p"),eN(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(581,"p"),eN(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(583,"ul")(584,"li")(585,"code"),eN(586,"--field-container-title-justify"),og()(),Sl(587,"li")(588,"code"),eN(589,"--field-container-title-flex"),og()()(),Sl(590,"p"),eN(591,"Exemplo:"),og(),Sl(592,"pre")(593,"code"),eN(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(595,"p"),eN(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),eN(601," p-disabled"),Wl(602,"br"),og()()(),Sl(603,"td",21)(604,"code",29),eN(605,"boolean"),og()(),Sl(606,"td",23)(607,"p"),eN(608,"false"),og()(),Sl(609,"td",24)(610,"em")(611,"strong"),eN(612,"(opcional)"),og()(),Sl(613,"p"),eN(614,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),eN(619," p-error-limit"),Wl(620,"br"),og()()(),Sl(621,"td",21)(622,"code",29),eN(623,"boolean"),og()(),Sl(624,"td",23)(625,"p")(626,"code"),eN(627,"false"),og()()(),Sl(628,"td",24)(629,"em")(630,"strong"),eN(631,"(opcional)"),og()(),Sl(632,"p"),eN(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(634,"blockquote")(635,"p"),eN(636,"Caso essa propriedade seja definida como "),Sl(637,"code"),eN(638,"true"),og(),eN(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),eN(644," p-field-error-message"),Wl(645,"br"),og()()(),Sl(646,"td",21)(647,"code",27),eN(648,"string"),og()(),Sl(649,"td",23),eN(650,"-"),og(),Sl(651,"td",24)(652,"em")(653,"strong"),eN(654,"(opcional)"),og()(),Sl(655,"p"),eN(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(657,"blockquote")(658,"p"),eN(659,"Necess\xE1rio que a propriedade "),Sl(660,"code"),eN(661,"p-required"),og(),eN(662," esteja habilitada."),og()()()(),Sl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),eN(667," p-field-format"),Wl(668,"br"),og()()(),Sl(669,"td",21)(670,"code",31),eN(671,"((value) => string) "),og(),Sl(672,"code",32),eN(673," Array<string>"),og()(),Sl(674,"td",23),eN(675,"-"),og(),Sl(676,"td",24)(677,"em")(678,"strong"),eN(679,"(opcional)"),og()(),Sl(680,"p"),eN(681,"Formato de exibi\xE7\xE3o do campo."),og(),Sl(682,"p"),eN(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Sl(684,"em"),eN(685,"string"),og(),eN(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),og(),Sl(687,"pre")(688,"code"),eN(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),og()(),Sl(690,"blockquote")(691,"p"),eN(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Sl(693,"code"),eN(694,"p-field-label"),og(),eN(695," na descri\xE7\xE3o do campo."),og()(),Sl(696,"p"),eN(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),og(),Sl(698,"pre")(699,"code"),eN(700,`<po-lookup
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
`),og()(),Sl(701,"blockquote")(702,"p"),eN(703,"Ser\xE1 utilizado "),Sl(704,"code"),eN(705,"-"),og(),eN(706," como separador."),og()()()(),Sl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),eN(711," p-field-label"),Wl(712,"br"),og()()(),Sl(713,"td",21)(714,"code",27),eN(715,"string"),og()(),Sl(716,"td",23),eN(717,"-"),og(),Sl(718,"td",24)(719,"p"),eN(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),og()()(),Sl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),eN(725," p-field-value"),Wl(726,"br"),og()()(),Sl(727,"td",21)(728,"code",27),eN(729,"string"),og()(),Sl(730,"td",23),eN(731,"-"),og(),Sl(732,"td",24)(733,"p"),eN(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),og(),Sl(735,"blockquote")(736,"p"),eN(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),og()()()(),Sl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),eN(742," p-filter-params"),Wl(743,"br"),og()()(),Sl(744,"td",21)(745,"code",33),eN(746,"any"),og()(),Sl(747,"td",23),eN(748,"-"),og(),Sl(749,"td",24)(750,"em")(751,"strong"),eN(752,"(opcional)"),og()(),Sl(753,"p"),eN(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Sl(755,"code"),eN(756,"PoLookupFilter"),og(),eN(757,"."),og()()(),Sl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),eN(762," p-filter-service"),Wl(763,"br"),og()()(),Sl(764,"td",21)(765,"code",27),eN(766,"string "),og(),Sl(767,"code",34),eN(768," PoLookupFilter"),og()(),Sl(769,"td",23),eN(770,"-"),og(),Sl(771,"td",24)(772,"p"),eN(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Sl(774,"code"),eN(775,"PoLookupFilter"),og(),eN(776," ou uma URL."),og(),Sl(777,"p"),eN(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),og(),Sl(779,"pre")(780,"code"),eN(781,`url + ?page=1&pageSize=20&filter=Peter
`),og()(),Sl(782,"p"),eN(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Sl(784,"code"),eN(785,"order"),og(),eN(786,", por exemplo:"),og(),Sl(787,"ul")(788,"li")(789,"p"),eN(790,"Coluna decrescente:"),og(),Sl(791,"pre")(792,"code"),eN(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),og()()(),Sl(794,"li")(795,"p"),eN(796,"Coluna ascendente:"),og(),Sl(797,"pre")(798,"code"),eN(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),og()()()(),Sl(800,"p"),eN(801,"Se for definido a propriedade "),Sl(802,"code"),eN(803,"p-filter-params"),og(),eN(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Sl(805,"code"),eN(806,"{ age: 23 }"),og(),eN(807," a URL ficaria:"),og(),Sl(808,"pre")(809,"code"),eN(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()(),Sl(811,"p"),eN(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),og(),Sl(813,"pre")(814,"code"),eN(815,`model = 1234;

GET url/1234
`),og()(),Sl(816,"p"),eN(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),og(),Sl(818,"pre")(819,"code"),eN(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),og()(),Sl(821,"blockquote")(822,"p"),eN(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(824,"a",7),eN(825,"API do PO UI"),og(),eN(826,` e utiliza os valores
definidos nas propriedades `),Sl(827,"code"),eN(828,"p-field-label"),og(),eN(829," e "),Sl(830,"code"),eN(831,"p-field-value"),og(),eN(832," para a constru\xE7\xE3o do "),Sl(833,"code"),eN(834,"po-lookup"),og(),eN(835,"."),og()(),Sl(836,"p"),eN(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Sl(838,"em"),eN(839,"TAB"),og(),eN(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Sl(841,"a",35),eN(842,"encodeURIComponent"),og(),eN(843,`
e concatenado na URL da seguinte forma:`),og(),Sl(844,"pre")(845,"code"),eN(846,`url/valor%20que%20se%20deseja%20filtrar
`),og()(),Sl(847,"blockquote")(848,"p"),eN(849,"Quando informado um servi\xE7o que implemente a interface "),Sl(850,"code"),eN(851,"PoLookupFilter"),og(),eN(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),og()()()(),Sl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),eN(857," p-help"),Wl(858,"br"),og()()(),Sl(859,"td",21)(860,"code",27),eN(861,"string"),og()(),Sl(862,"td",23),eN(863,"-"),og(),Sl(864,"td",24)(865,"em")(866,"strong"),eN(867,"(opcional)"),og()(),Sl(868,"p"),eN(869,"Texto de apoio do campo."),og()()(),Sl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),eN(874," p-hide-columns-manager"),Wl(875,"br"),og()()(),Sl(876,"td",21)(877,"code",29),eN(878,"boolean"),og()(),Sl(879,"td",23)(880,"p")(881,"code"),eN(882,"false"),og()()(),Sl(883,"td",24)(884,"em")(885,"strong"),eN(886,"(opcional)"),og()(),Sl(887,"p"),eN(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Sl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),eN(893," p-infinite-scroll"),Wl(894,"br"),og()()(),Sl(895,"td",21)(896,"code",29),eN(897,"boolean"),og()(),Sl(898,"td",23)(899,"p")(900,"code"),eN(901,"false"),og()()(),Sl(902,"td",24)(903,"em")(904,"strong"),eN(905,"(opcional)"),og()(),Sl(906,"p"),eN(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),og()()(),Sl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),eN(912," (p-keydown)"),Wl(913,"br"),og()()(),Sl(914,"td",21)(915,"code",22),eN(916,"EventEmitter"),og()(),Sl(917,"td",23),eN(918,"-"),og(),Sl(919,"td",24)(920,"em")(921,"strong"),eN(922,"(opcional)"),og()(),Sl(923,"p"),eN(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(925,"code"),eN(926,"KeyboardEvent"),og(),eN(927," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),eN(932," p-label"),Wl(933,"br"),og()()(),Sl(934,"td",21)(935,"code",27),eN(936,"string"),og()(),Sl(937,"td",23),eN(938,"-"),og(),Sl(939,"td",24)(940,"em")(941,"strong"),eN(942,"(opcional)"),og()(),Sl(943,"p"),eN(944,"Label do campo."),og(),Sl(945,"blockquote")(946,"p"),eN(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Sl(948,"code"),eN(949,"modalTitle"),og(),eN(950," na propriedade "),Sl(951,"code"),eN(952,"p-literals"),og(),eN(953,"."),og()()()(),Sl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),eN(958," p-label-text-wrap"),Wl(959,"br"),og()()(),Sl(960,"td",21)(961,"code",29),eN(962,"boolean"),og()(),Sl(963,"td",23)(964,"p")(965,"code"),eN(966,"false"),og()()(),Sl(967,"td",24)(968,"em")(969,"strong"),eN(970,"(opcional)"),og()(),Sl(971,"p"),eN(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(973,"code"),eN(974,"p-label"),og(),eN(975,". Quando "),Sl(976,"code"),eN(977,"p-label-text-wrap"),og(),eN(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),eN(983," p-literals"),Wl(984,"br"),og()()(),Sl(985,"td",21)(986,"code",36),eN(987,"PoLookupLiterals"),og()(),Sl(988,"td",23),eN(989,"-"),og(),Sl(990,"td",24)(991,"p"),eN(992,"Objeto com as literais usadas no "),Sl(993,"code"),eN(994,"po-lookup"),og(),eN(995,"."),og(),Sl(996,"p"),eN(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(998,"pre")(999,"code"),eN(1e3,`const customLiterals: PoLookupLiterals = {
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
`),og()(),Sl(1001,"p"),eN(1002,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(1003,"pre")(1004,"code"),eN(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),og()(),Sl(1006,"p"),eN(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(1008,"pre")(1009,"code"),eN(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),og()(),Sl(1011,"blockquote")(1012,"p"),eN(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(1014,"a",37)(1015,"code"),eN(1016,"PoI18nService"),og()(),eN(1017," ou do browser."),og()()()(),Sl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),eN(1022," p-loading"),Wl(1023,"br"),og()()(),Sl(1024,"td",21)(1025,"code",29),eN(1026,"boolean"),og()(),Sl(1027,"td",23)(1028,"p")(1029,"code"),eN(1030,"false"),og()()(),Sl(1031,"td",24)(1032,"em")(1033,"strong"),eN(1034,"(opcional)"),og()(),Sl(1035,"p"),eN(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),eN(1041," p-multiple"),Wl(1042,"br"),og()()(),Sl(1043,"td",21)(1044,"code",29),eN(1045,"boolean"),og()(),Sl(1046,"td",23)(1047,"p")(1048,"code"),eN(1049,"false"),og()()(),Sl(1050,"td",24)(1051,"em")(1052,"strong"),eN(1053,"(opcional)"),og()(),Sl(1054,"p"),eN(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Sl(1056,"blockquote")(1057,"p"),eN(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Sl(1059,"code"),eN(1060,"[ 12345, 67890 ]"),og()()()()(),Sl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),eN(1065," name"),Wl(1066,"br"),og()()(),Sl(1067,"td",21)(1068,"code",27),eN(1069,"string"),og()(),Sl(1070,"td",23),eN(1071,"-"),og(),Sl(1072,"td",24)(1073,"p"),eN(1074,"Nome e Id do componente."),og()()(),Sl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),eN(1079," p-no-autocomplete"),Wl(1080,"br"),og()()(),Sl(1081,"td",21)(1082,"code",29),eN(1083,"boolean"),og()(),Sl(1084,"td",23)(1085,"p")(1086,"code"),eN(1087,"false"),og()()(),Sl(1088,"td",24)(1089,"em")(1090,"strong"),eN(1091,"(opcional)"),og()(),Sl(1092,"p"),eN(1093,"Define a propriedade nativa "),Sl(1094,"code"),eN(1095,"autocomplete"),og(),eN(1096," do campo como "),Sl(1097,"code"),eN(1098,"off"),og(),eN(1099,"."),og()()(),Sl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),eN(1104," (p-error)"),Wl(1105,"br"),og()()(),Sl(1106,"td",21)(1107,"code",22),eN(1108,"EventEmitter"),og()(),Sl(1109,"td",23),eN(1110,"-"),og(),Sl(1111,"td",24)(1112,"p"),eN(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),og()()(),Sl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),eN(1118," p-optional"),Wl(1119,"br"),og()()(),Sl(1120,"td",21)(1121,"code",29),eN(1122,"boolean"),og()(),Sl(1123,"td",23)(1124,"p")(1125,"code"),eN(1126,"false"),og()()(),Sl(1127,"td",24)(1128,"em")(1129,"strong"),eN(1130,"(opcional)"),og()(),Sl(1131,"p"),eN(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1133,"blockquote")(1134,"p"),eN(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1136,"ul")(1137,"li"),eN(1138,"O campo conter "),Sl(1139,"code"),eN(1140,"p-required"),og(),eN(1141,";"),og(),Sl(1142,"li"),eN(1143,"N\xE3o possuir "),Sl(1144,"code"),eN(1145,"p-help"),og(),eN(1146," e/ou "),Sl(1147,"code"),eN(1148,"p-label"),og(),eN(1149,"."),og()()()(),Sl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),eN(1154," p-placeholder"),Wl(1155,"br"),og()()(),Sl(1156,"td",21)(1157,"code",27),eN(1158,"string"),og()(),Sl(1159,"td",23),eN(1160,"-"),og(),Sl(1161,"td",24)(1162,"p"),eN(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),eN(1168," p-helper"),Wl(1169,"br"),og()()(),Sl(1170,"td",21)(1171,"code",38),eN(1172,"PoHelperOptions "),og(),Sl(1173,"code",27),eN(1174," string"),og()(),Sl(1175,"td",23),eN(1176,"-"),og(),Sl(1177,"td",24)(1178,"em")(1179,"strong"),eN(1180,"(opcional)"),og()(),Sl(1181,"p"),eN(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1183,"code"),eN(1184,"p-label"),og(),eN(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1186,"code"),eN(1187,"p-label"),og(),eN(1188,"."),og(),Sl(1189,"blockquote")(1190,"p"),eN(1191,"Para mais informa\xE7\xF5es acesse: "),Sl(1192,"a",39),eN(1193,"https://po-ui.io/documentation/po-helper"),og(),eN(1194,"."),og()(),Sl(1195,"blockquote")(1196,"p"),eN(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1198,"code"),eN(1199,"p-additional-help-tooltip"),og(),eN(1200," e "),Sl(1201,"code"),eN(1202,"p-additional-help"),og(),eN(1203,") ser\xE1 ignorado."),og()()()(),Sl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),eN(1208," p-required"),Wl(1209,"br"),og()()(),Sl(1210,"td",21)(1211,"code",29),eN(1212,"boolean"),og()(),Sl(1213,"td",23)(1214,"p")(1215,"code"),eN(1216,"false"),og()()(),Sl(1217,"td",24)(1218,"em")(1219,"strong"),eN(1220,"(opcional)"),og()(),Sl(1221,"p"),eN(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1223,"blockquote")(1224,"p"),eN(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1226,"code"),eN(1227,"(p-disabled)"),og(),eN(1228,"."),og()()()(),Sl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),eN(1233," (p-selected)"),Wl(1234,"br"),og()()(),Sl(1235,"td",21)(1236,"code",22),eN(1237,"EventEmitter"),og()(),Sl(1238,"td",23),eN(1239,"-"),og(),Sl(1240,"td",24)(1241,"em")(1242,"strong"),eN(1243,"(opcional)"),og()(),Sl(1244,"p"),eN(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),og()()(),Sl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),eN(1250," p-show-required"),Wl(1251,"br"),og()()(),Sl(1252,"td",21)(1253,"code",29),eN(1254,"boolean"),og()(),Sl(1255,"td",23),eN(1256,"-"),og(),Sl(1257,"td",24)(1258,"p"),eN(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),og(),Sl(1260,"blockquote")(1261,"p"),eN(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1263,"ul")(1264,"li"),eN(1265,"N\xE3o possuir "),Sl(1266,"code"),eN(1267,"p-help"),og(),eN(1268," e/ou "),Sl(1269,"code"),eN(1270,"p-label"),og(),eN(1271,"."),og()()()(),Sl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),eN(1276," p-size"),Wl(1277,"br"),og()()(),Sl(1278,"td",21)(1279,"code",27),eN(1280,"string"),og()(),Sl(1281,"td",23)(1282,"p")(1283,"code"),eN(1284,"medium"),og()()(),Sl(1285,"td",24)(1286,"em")(1287,"strong"),eN(1288,"(opcional)"),og()(),Sl(1289,"p"),eN(1290,"Define o tamanho do componente:"),og(),Sl(1291,"ul")(1292,"li")(1293,"code"),eN(1294,"small"),og(),eN(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1296,"li")(1297,"code"),eN(1298,"medium"),og(),eN(1299,": altura do input como 44px."),og()(),Sl(1300,"blockquote")(1301,"p"),eN(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1303,"code"),eN(1304,"medium"),og(),eN(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1306,"a",40),eN(1307,"po-theme"),og(),eN(1308,"."),og()()()(),Sl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),eN(1313," p-spacing"),Wl(1314,"br"),og()()(),Sl(1315,"td",21)(1316,"code",27),eN(1317,"string"),og()(),Sl(1318,"td",23)(1319,"p")(1320,"code"),eN(1321,"medium"),og()()(),Sl(1322,"td",24)(1323,"em")(1324,"strong"),eN(1325,"(opcional)"),og()(),Sl(1326,"p"),eN(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Sl(1328,"strong"),eN(1329,"PoTableColumnSpacing"),og(),eN(1330,"."),og(),Sl(1331,"blockquote")(1332,"p"),eN(1333,"Em n\xEDvel de acessibilidade "),Sl(1334,"strong"),eN(1335,"AA"),og(),eN(1336,", caso o valor de "),Sl(1337,"code"),eN(1338,"p-spacing"),og(),eN(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Sl(1340,"code"),eN(1341,"extraSmall"),og(),eN(1342,`
nos seguintes cen\xE1rios:`),og(),Sl(1343,"ul")(1344,"li"),eN(1345,"Quando o valor de "),Sl(1346,"code"),eN(1347,"p-size"),og(),eN(1348," for "),Sl(1349,"code"),eN(1350,"small"),og(),eN(1351,";"),og(),Sl(1352,"li"),eN(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Sl(1354,"code"),eN(1355,"small"),og(),eN(1356,` no
`),Sl(1357,"a",40),eN(1358,"servi\xE7o de tema"),og(),eN(1359,"."),og()()()()(),Sl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),eN(1364," p-text-wrap"),Wl(1365,"br"),og()()(),Sl(1366,"td",21)(1367,"code",29),eN(1368,"boolean"),og()(),Sl(1369,"td",23)(1370,"p")(1371,"code"),eN(1372,"false"),og()()(),Sl(1373,"td",24)(1374,"em")(1375,"strong"),eN(1376,"(opcional)"),og()(),Sl(1377,"p"),eN(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Sl(1379,"p"),eN(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),og(),Sl(1381,"blockquote")(1382,"p"),eN(1383,"Incompat\xEDvel com "),Sl(1384,"code"),eN(1385,"virtual-scroll"),og(),eN(1386,", que requer altura fixa nas linhas."),og()()()(),Sl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),eN(1391," p-virtual-scroll"),Wl(1392,"br"),og()()(),Sl(1393,"td",21)(1394,"code",29),eN(1395,"boolean"),og()(),Sl(1396,"td",23)(1397,"p")(1398,"code"),eN(1399,"true"),og()()(),Sl(1400,"td",24)(1401,"em")(1402,"strong"),eN(1403,"(opcional)"),og()(),Sl(1404,"p"),eN(1405,"Habilita o "),Sl(1406,"code"),eN(1407,"virtual-scroll"),og(),eN(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Sl(1409,"code"),eN(1410,"virtual-scroll"),og(),eN(1411," ser\xE1 ativado automaticamente."),og(),Sl(1412,"blockquote")(1413,"p"),eN(1414,"Incompat\xEDvel com "),Sl(1415,"code"),eN(1416,"p-text-wrap"),og(),eN(1417," e "),Sl(1418,"code"),eN(1419,"master-detail"),og(),eN(1420,", pois o "),Sl(1421,"code"),eN(1422,"virtual-scroll"),og(),eN(1423," exige altura fixa nas linhas."),og()()()()(),Sl(1424,"h3",12),eN(1425,"M\xE9todos"),og(),Sl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),eN(1432," focus "),og()()()()(),Sl(1433,"tr",24)(1434,"td",24)(1435,"p"),eN(1436,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1437,"p"),eN(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1439,"pre")(1440,"code"),eN(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),og()()()()(),Wl(1442,"br"),Sl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),eN(1449," showAdditionalHelp "),og()()()()(),Sl(1450,"tr",24)(1451,"td",24)(1452,"p"),eN(1453,"M\xE9todo que exibe "),Sl(1454,"code"),eN(1455,"p-helper"),og(),eN(1456," ou executa a a\xE7\xE3o definida em "),Sl(1457,"code"),eN(1458,"p-helper{eventOnClick}"),og(),eN(1459," ou em "),Sl(1460,"code"),eN(1461,"p-additionalHelp"),og(),eN(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1463,"code"),eN(1464,"p-keydown"),og(),eN(1465,"."),og(),Sl(1466,"blockquote")(1467,"p"),eN(1468,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1469,"code"),eN(1470,"po-helper"),og(),eN(1471," quando o componente estiver com foco."),og()(),Sl(1472,"pre")(1473,"code"),eN(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),og()(),Sl(1475,"pre")(1476,"code"),eN(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1478,"br"),Sl(1479,"h3"),eN(1480,"Interfaces"),og(),Sl(1481,"h4",43)(1482,"code",5),eN(1483,"PoLookupAdvancedFilter"),og()(),Sl(1484,"div",2)(1485,"p"),eN(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),og()(),Sl(1487,"h4",12),eN(1488,"Propriedades"),og(),Sl(1489,"table",13)(1490,"tr",14)(1491,"th",15),eN(1492,"Nome"),og(),Sl(1493,"th",15),eN(1494,"Tipo"),og(),Sl(1495,"th",15),eN(1496,"Descri\xE7\xE3o"),og()(),Sl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),eN(1501," additionalHelp"),Wl(1502,"br"),og()()(),Sl(1503,"td",21)(1504,"code",44),eN(1505,"Function"),og()(),Sl(1506,"td",24)(1507,"em")(1508,"strong"),eN(1509,"(opcional)"),og()(),Sl(1510,"p"),eN(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(1512,"blockquote")(1513,"p"),eN(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Sl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),eN(1519," additionalHelpTooltip"),Wl(1520,"br"),og()()(),Sl(1521,"td",21)(1522,"code",27),eN(1523,"string"),og()(),Sl(1524,"td",24)(1525,"em")(1526,"strong"),eN(1527,"(opcional)"),og()(),Sl(1528,"p"),eN(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(1530,"code"),eN(1531,"po-helper"),og(),eN(1532,`.
`),Sl(1533,"strong"),eN(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(1535,"blockquote")(1536,"p"),eN(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Sl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),eN(1542," advancedFilters"),Wl(1543,"br"),og()()(),Sl(1544,"td",21)(1545,"code",28),eN(1546,"Array<PoLookupAdvancedFilter>"),og()(),Sl(1547,"td",24)(1548,"em")(1549,"strong"),eN(1550,"(opcional)"),og()(),Sl(1551,"p"),eN(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Sl(1553,"blockquote")(1554,"p"),eN(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Sl(1556,"p"),eN(1557,"Exemplo de URL com busca avan\xE7ada:"),og(),Sl(1558,"p")(1559,"code"),eN(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Sl(1561,"p"),eN(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Sl(1563,"p")(1564,"code"),eN(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Sl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),eN(1570," appendBox"),Wl(1571,"br"),og()()(),Sl(1572,"td",21)(1573,"code",29),eN(1574,"boolean"),og()(),Sl(1575,"td",24)(1576,"em")(1577,"strong"),eN(1578,"(opcional)"),og()(),Sl(1579,"p"),eN(1580,"Define que o "),Sl(1581,"code"),eN(1582,"listbox"),og(),eN(1583," e/ou popover ("),Sl(1584,"code"),eN(1585,"p-helper"),og(),eN(1586," e/ou "),Sl(1587,"code"),eN(1588,"p-error-limit"),og(),eN(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Sl(1590,"blockquote")(1591,"p"),eN(1592,"Quando utilizado com "),Sl(1593,"code"),eN(1594,"p-helper"),og(),eN(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),eN(1600," autoHeight"),Wl(1601,"br"),og()()(),Sl(1602,"td",21)(1603,"code",29),eN(1604,"boolean"),og()(),Sl(1605,"td",24)(1606,"em")(1607,"strong"),eN(1608,"(opcional)"),og()(),Sl(1609,"p"),eN(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Sl(1611,"p")(1612,"strong"),eN(1613,"Componentes compat\xEDveis:"),og(),Sl(1614,"code"),eN(1615,"po-multiselect"),og(),eN(1616,", "),Sl(1617,"code"),eN(1618,"po-lookup"),og(),eN(1619,"."),og()()(),Sl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),eN(1624," autoUpload"),Wl(1625,"br"),og()()(),Sl(1626,"td",21)(1627,"code",29),eN(1628,"boolean"),og()(),Sl(1629,"td",24)(1630,"em")(1631,"strong"),eN(1632,"(opcional)"),og()(),Sl(1633,"p"),eN(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Sl(1635,"p")(1636,"strong"),eN(1637,"Componente compat\xEDvel"),og(),eN(1638,": "),Sl(1639,"code"),eN(1640,"po-upload"),og()()()(),Sl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),eN(1645," booleanFalse"),Wl(1646,"br"),og()()(),Sl(1647,"td",21)(1648,"code",27),eN(1649,"string"),og()(),Sl(1650,"td",24)(1651,"em")(1652,"strong"),eN(1653,"(opcional)"),og()(),Sl(1654,"p"),eN(1655,"Texto exibido quando o valor do componente for "),Sl(1656,"em"),eN(1657,"false"),og(),eN(1658,"."),og()()(),Sl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),eN(1663," booleanTrue"),Wl(1664,"br"),og()()(),Sl(1665,"td",21)(1666,"code",27),eN(1667,"string"),og()(),Sl(1668,"td",24)(1669,"em")(1670,"strong"),eN(1671,"(opcional)"),og()(),Sl(1672,"p"),eN(1673,"Texto exibido quando o valor do componente for "),Sl(1674,"em"),eN(1675,"true"),og(),eN(1676,"."),og()()(),Sl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),eN(1681," changeOnEnter"),Wl(1682,"br"),og()()(),Sl(1683,"td",21)(1684,"code",29),eN(1685,"boolean"),og()(),Sl(1686,"td",24)(1687,"em")(1688,"strong"),eN(1689,"(opcional)"),og()(),Sl(1690,"p"),eN(1691,"Indica que o evento "),Sl(1692,"code"),eN(1693,"p-change"),og(),eN(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Sl(1695,"code"),eN(1696,"po-combo"),og(),eN(1697,"."),og()()(),Sl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),eN(1702," changeVisibleColumns"),Wl(1703,"br"),og()()(),Sl(1704,"td",21)(1705,"code",44),eN(1706,"Function"),og()(),Sl(1707,"td",24)(1708,"em")(1709,"strong"),eN(1710,"(opcional)"),og()(),Sl(1711,"p"),eN(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(1713,"p"),eN(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Sl(1715,"p")(1716,"strong"),eN(1717,"Componente compat\xEDvel"),og(),eN(1718,": "),Sl(1719,"code"),eN(1720,"po-lookup"),og()()()(),Sl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),eN(1725," clean"),Wl(1726,"br"),og()()(),Sl(1727,"td",21)(1728,"code",29),eN(1729,"boolean"),og()(),Sl(1730,"td",24)(1731,"em")(1732,"strong"),eN(1733,"(opcional)"),og()(),Sl(1734,"p"),eN(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Sl(1736,"p")(1737,"strong"),eN(1738,"Componentes compat\xEDveis:"),og(),Sl(1739,"code"),eN(1740,"po-datepicker"),og(),eN(1741,", "),Sl(1742,"code"),eN(1743,"po-datepicker-range"),og(),eN(1744,", "),Sl(1745,"code"),eN(1746,"po-input"),og(),eN(1747,", "),Sl(1748,"code"),eN(1749,"po-number"),og(),eN(1750,", "),Sl(1751,"code"),eN(1752,"po-decimal"),og(),eN(1753,`,
`),Sl(1754,"code"),eN(1755,"po-combo"),og(),eN(1756,", "),Sl(1757,"code"),eN(1758,"po-lookup"),og(),eN(1759,", "),Sl(1760,"code"),eN(1761,"po-password"),og(),eN(1762,", "),Sl(1763,"code"),eN(1764,"po-timepicker"),og(),eN(1765,"."),og()()(),Sl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),eN(1770," columnRestoreManager"),Wl(1771,"br"),og()()(),Sl(1772,"td",21)(1773,"code",44),eN(1774,"Function"),og()(),Sl(1775,"td",24)(1776,"em")(1777,"strong"),eN(1778,"(opcional)"),og()(),Sl(1779,"p"),eN(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(1781,"p"),eN(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Sl(1783,"p")(1784,"strong"),eN(1785,"Componente compat\xEDvel"),og(),eN(1786,": "),Sl(1787,"code"),eN(1788,"po-lookup"),og()()()(),Sl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),eN(1793," columns"),Wl(1794,"br"),og()()(),Sl(1795,"td",21)(1796,"code",30),eN(1797,"Array<PoLookupColumn> "),og(),Sl(1798,"code",45),eN(1799," number"),og()(),Sl(1800,"td",24)(1801,"em")(1802,"strong"),eN(1803,"(opcional)"),og()(),Sl(1804,"p"),eN(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Sl(1806,"code"),eN(1807,"searchService"),og(),eN(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Sl(1809,"a",46)(1810,"code"),eN(1811,"PoLookupColumn"),og()(),eN(1812,"."),og(),Sl(1813,"blockquote")(1814,"p"),eN(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Sl(1816,"em"),eN(1817,"label"),og(),eN(1818," e "),Sl(1819,"em"),eN(1820,"value"),og(),eN(1821,` para valores
de tela e do model respectivamente.`),og()(),Sl(1822,"p")(1823,"strong"),eN(1824,"Componentes compat\xEDveis:"),og(),Sl(1825,"code"),eN(1826,"po-radio-group"),og(),eN(1827,", "),Sl(1828,"code"),eN(1829,"po-lookup"),og(),eN(1830,", "),Sl(1831,"code"),eN(1832,"po-checkbox-group"),og(),eN(1833,"."),og()()(),Sl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),eN(1838," compactLabel"),Wl(1839,"br"),og()()(),Sl(1840,"td",21)(1841,"code",29),eN(1842,"boolean"),og()(),Sl(1843,"td",24)(1844,"em")(1845,"strong"),eN(1846,"(opcional)"),og()(),Sl(1847,"p"),eN(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(1849,"p"),eN(1850,"Quando habilitado ("),Sl(1851,"code"),eN(1852,"true"),og(),eN(1853,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(1854,"ul")(1855,"li")(1856,"code"),eN(1857,"po-label"),og()(),Sl(1858,"li")(1859,"code"),eN(1860,"p-requirement (showRequired)"),og()(),Sl(1861,"li")(1862,"code"),eN(1863,"po-helper"),og()()(),Sl(1864,"p"),eN(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(1866,"p"),eN(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(1868,"ul")(1869,"li")(1870,"code"),eN(1871,"--field-container-title-justify"),og()(),Sl(1872,"li")(1873,"code"),eN(1874,"--field-container-title-flex"),og()()(),Sl(1875,"p"),eN(1876,"Exemplo:"),og(),Sl(1877,"pre")(1878,"code"),eN(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(1880,"p"),eN(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),eN(1886," container"),Wl(1887,"br"),og()()(),Sl(1888,"td",21)(1889,"code",27),eN(1890,"string"),og()(),Sl(1891,"td",24)(1892,"em")(1893,"strong"),eN(1894,"(opcional)"),og()(),Sl(1895,"p"),eN(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Sl(1897,"p"),eN(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Sl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),eN(1903," customAction"),Wl(1904,"br"),og()()(),Sl(1905,"td",21)(1906,"code",47),eN(1907,"PoProgressAction"),og()(),Sl(1908,"td",24)(1909,"em")(1910,"strong"),eN(1911,"(opcional)"),og()(),Sl(1912,"p"),eN(1913,"Define uma a\xE7\xE3o personalizada no componente "),Sl(1914,"code"),eN(1915,"po-upload"),og(),eN(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Sl(1917,"p")(1918,"strong"),eN(1919,"Componente compat\xEDvel"),og(),eN(1920,": "),Sl(1921,"code"),eN(1922,"po-upload"),og(),eN(1923,","),og(),Sl(1924,"p")(1925,"strong"),eN(1926,"Exemplo de configura\xE7\xE3o"),og(),eN(1927,":"),og(),Sl(1928,"pre")(1929,"code",48),eN(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Sl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),eN(1935," customActionClick"),Wl(1936,"br"),og()()(),Sl(1937,"td",21)(1938,"code",49),eN(1939,"(file: PoUploadFile) => void"),og()(),Sl(1940,"td",24)(1941,"em")(1942,"strong"),eN(1943,"(opcional)"),og()(),Sl(1944,"p"),eN(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(1946,"code"),eN(1947,"p-custom-action"),og(),eN(1948,"."),og(),Sl(1949,"p")(1950,"strong"),eN(1951,"Componente compat\xEDvel"),og(),eN(1952,": "),Sl(1953,"code"),eN(1954,"po-upload"),og(),eN(1955,","),og(),Sl(1956,"p"),eN(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Sl(1958,"p")(1959,"strong"),eN(1960,"Par\xE2metro do evento"),og(),eN(1961,":"),og(),Sl(1962,"ul")(1963,"li")(1964,"code"),eN(1965,"file"),og(),eN(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Sl(1967,"code"),eN(1968,"PoUploadFile"),og(),eN(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Sl(1970,"p")(1971,"strong"),eN(1972,"Exemplo de uso"),og(),eN(1973,":"),og(),Sl(1974,"pre")(1975,"code",48),eN(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Sl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),eN(1981," debounceTime"),Wl(1982,"br"),og()()(),Sl(1983,"td",21)(1984,"code",45),eN(1985,"number"),og()(),Sl(1986,"td",24)(1987,"em")(1988,"strong"),eN(1989,"(opcional)"),og()(),Sl(1990,"p"),eN(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Sl(1992,"code"),eN(1993,"p-filter-service"),og(),eN(1994,")."),og(),Sl(1995,"p")(1996,"strong"),eN(1997,"Componentes compat\xEDveis:"),og(),Sl(1998,"code"),eN(1999,"po-combo"),og(),eN(2e3,", "),Sl(2001,"code"),eN(2002,"po-multiselect"),og(),eN(2003,"."),og()()(),Sl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),eN(2008," decimalsLength"),Wl(2009,"br"),og()()(),Sl(2010,"td",21)(2011,"code",45),eN(2012,"number"),og()(),Sl(2013,"td",24)(2014,"em")(2015,"strong"),eN(2016,"(opcional)"),og()(),Sl(2017,"p"),eN(2018,"Quantidade m\xE1xima de casas decimais."),og(),Sl(2019,"blockquote")(2020,"p"),eN(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(2022,"code"),eN(2023,"type"),og(),eN(2024," for "),Sl(2025,"em"),eN(2026,"currency"),og(),eN(2027," ou "),Sl(2028,"em"),eN(2029,"decimal"),og(),eN(2030,"."),og()()()(),Sl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),eN(2035," directory"),Wl(2036,"br"),og()()(),Sl(2037,"td",21)(2038,"code",29),eN(2039,"boolean"),og()(),Sl(2040,"td",24)(2041,"em")(2042,"strong"),eN(2043,"(opcional)"),og()(),Sl(2044,"p"),eN(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Sl(2046,"blockquote")(2047,"p"),eN(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Sl(2049,"blockquote")(2050,"p"),eN(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(2052,"strong"),eN(2053,"Internet Explorer"),og(),eN(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Sl(2055,"p")(2056,"strong"),eN(2057,"Componente compat\xEDvel"),og(),eN(2058,": "),Sl(2059,"code"),eN(2060,"po-upload"),og()()()(),Sl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),eN(2065," disabled"),Wl(2066,"br"),og()()(),Sl(2067,"td",21)(2068,"code",29),eN(2069,"boolean"),og()(),Sl(2070,"td",24)(2071,"em")(2072,"strong"),eN(2073,"(opcional)"),og()(),Sl(2074,"p"),eN(2075,"Desabilita o campo caso informar o valor "),Sl(2076,"em"),eN(2077,"true"),og(),eN(2078,"."),og()()(),Sl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),eN(2083," disabledInitFilter"),Wl(2084,"br"),og()()(),Sl(2085,"td",21)(2086,"code",29),eN(2087,"boolean"),og()(),Sl(2088,"td",24)(2089,"em")(2090,"strong"),eN(2091,"(opcional)"),og()(),Sl(2092,"p"),eN(2093,"Desabilita o filtro inicial no servi\xE7o do "),Sl(2094,"code"),eN(2095,"po-combo"),og(),eN(2096,", que \xE9 executado no primeiro clique no campo."),og()()(),Sl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),eN(2101," disabledTabFilter"),Wl(2102,"br"),og()()(),Sl(2103,"td",21)(2104,"code",29),eN(2105,"boolean"),og()(),Sl(2106,"td",24)(2107,"em")(2108,"strong"),eN(2109,"(opcional)"),og()(),Sl(2110,"p"),eN(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Sl(2112,"code"),eN(2113,"po-combo"),og(),eN(2114,"."),og()()(),Sl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),eN(2119," divider"),Wl(2120,"br"),og()()(),Sl(2121,"td",21)(2122,"code",27),eN(2123,"string"),og()(),Sl(2124,"td",24)(2125,"em")(2126,"strong"),eN(2127,"(opcional)"),og()(),Sl(2128,"p"),eN(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Sl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),eN(2134," dragDrop"),Wl(2135,"br"),og()()(),Sl(2136,"td",21)(2137,"code",29),eN(2138,"boolean"),og()(),Sl(2139,"td",24)(2140,"em")(2141,"strong"),eN(2142,"(opcional)"),og()(),Sl(2143,"p"),eN(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Sl(2145,"blockquote")(2146,"p"),eN(2147,"Recomendamos utilizar apenas um "),Sl(2148,"code"),eN(2149,"po-upload"),og(),eN(2150," com esta funcionalidade por tela."),og()(),Sl(2151,"p")(2152,"strong"),eN(2153,"Componente compat\xEDvel"),og(),eN(2154,": "),Sl(2155,"code"),eN(2156,"po-upload"),og()()()(),Sl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),eN(2161," dragDropHeight"),Wl(2162,"br"),og()()(),Sl(2163,"td",21)(2164,"code",45),eN(2165,"number"),og()(),Sl(2166,"td",24)(2167,"em")(2168,"strong"),eN(2169,"(opcional)"),og()(),Sl(2170,"p"),eN(2171,"Define em "),Sl(2172,"em"),eN(2173,"pixels"),og(),eN(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(2175,"code"),eN(2176,"160px"),og(),eN(2177,"."),og(),Sl(2178,"blockquote")(2179,"p"),eN(2180,"Esta propriedade funciona somente se a propriedade "),Sl(2181,"code"),eN(2182,"p-drag-drop"),og(),eN(2183," estiver habilitada."),og()(),Sl(2184,"p")(2185,"strong"),eN(2186,"Componente compat\xEDvel"),og(),eN(2187,": "),Sl(2188,"code"),eN(2189,"po-upload"),og()()()(),Sl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),eN(2194," errorAsyncFunction"),Wl(2195,"br"),og()()(),Sl(2196,"td",21)(2197,"code",50),eN(2198,"(value) => Observable<boolean>"),og()(),Sl(2199,"td",24)(2200,"em")(2201,"strong"),eN(2202,"(opcional)"),og()(),Sl(2203,"p"),eN(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(2205,"code"),eN(2206,"change"),og(),eN(2207," ou "),Sl(2208,"code"),eN(2209,"change-model"),og(),eN(2210,", dependendo do valor da propriedade "),Sl(2211,"code"),eN(2212,"triggerMode"),og(),eN(2213,"."),og(),Sl(2214,"blockquote")(2215,"p"),eN(2216,"Retorna "),Sl(2217,"code"),eN(2218,"Observable com o valor true"),og(),eN(2219," para sinalizar o erro "),Sl(2220,"code"),eN(2221,"false"),og(),eN(2222," para indicar que n\xE3o h\xE1 erro."),og()(),Sl(2223,"p")(2224,"strong"),eN(2225,"Componente compat\xEDvel"),og(),eN(2226,": "),Sl(2227,"code"),eN(2228,"po-datepicker"),og()()()(),Sl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),eN(2233," errorAsyncProperties"),Wl(2234,"br"),og()()(),Sl(2235,"td",21)(2236,"code",51),eN(2237,"ErrorAsyncProperties"),og()(),Sl(2238,"td",24)(2239,"em")(2240,"strong"),eN(2241,"(opcional)"),og()(),Sl(2242,"p"),eN(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Sl(2244,"p")(2245,"strong"),eN(2246,"Componentes compat\xEDveis:"),og(),Sl(2247,"code"),eN(2248,"po-input"),og(),eN(2249,", "),Sl(2250,"code"),eN(2251,"po-number"),og(),eN(2252,", "),Sl(2253,"code"),eN(2254,"po-decimal"),og(),eN(2255,", "),Sl(2256,"code"),eN(2257,"po-password"),og(),eN(2258,"."),og()()(),Sl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),eN(2263," errorLimit"),Wl(2264,"br"),og()()(),Sl(2265,"td",21)(2266,"code",29),eN(2267,"boolean"),og()(),Sl(2268,"td",24)(2269,"em")(2270,"strong"),eN(2271,"(opcional)"),og()(),Sl(2272,"p"),eN(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(2274,"blockquote")(2275,"p"),eN(2276,"Caso essa propriedade seja definida como "),Sl(2277,"code"),eN(2278,"true"),og(),eN(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Sl(2280,"p")(2281,"strong"),eN(2282,"Componentes compat\xEDveis:"),og(),Sl(2283,"code"),eN(2284,"po-checkbox-group"),og(),eN(2285,", "),Sl(2286,"code"),eN(2287,"po-combo"),og(),eN(2288,", "),Sl(2289,"code"),eN(2290,"po-datepicker"),og(),eN(2291,", "),Sl(2292,"code"),eN(2293,"po-datepicker-range"),og(),eN(2294,", "),Sl(2295,"code"),eN(2296,"po-decimal"),og(),eN(2297,", "),Sl(2298,"code"),eN(2299,"po-input"),og(),eN(2300,", "),Sl(2301,"code"),eN(2302,"po-lookup"),og(),eN(2303,", "),Sl(2304,"code"),eN(2305,"po-multiselect"),og(),eN(2306,", "),Sl(2307,"code"),eN(2308,"po-number"),og(),eN(2309,", "),Sl(2310,"code"),eN(2311,"po-password"),og(),eN(2312,", "),Sl(2313,"code"),eN(2314,"po-radio-group"),og(),eN(2315,", "),Sl(2316,"code"),eN(2317,"po-select"),og(),eN(2318,`,
`),Sl(2319,"code"),eN(2320,"po-switch"),og(),eN(2321,", "),Sl(2322,"code"),eN(2323,"po-textarea"),og(),eN(2324,", "),Sl(2325,"code"),eN(2326,"po-timepicker"),og(),eN(2327,"."),og()()(),Sl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),eN(2332," errorMessage"),Wl(2333,"br"),og()()(),Sl(2334,"td",21)(2335,"code",27),eN(2336,"string"),og()(),Sl(2337,"td",24)(2338,"em")(2339,"strong"),eN(2340,"(opcional)"),og()(),Sl(2341,"p"),eN(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Sl(2343,"p"),eN(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Sl(2345,"ul")(2346,"li"),eN(2347,"pattern;"),og(),Sl(2348,"li"),eN(2349,"minValue;"),og(),Sl(2350,"li"),eN(2351,"maxValue;"),og(),Sl(2352,"li"),eN(2353,"required;"),og()(),Sl(2354,"blockquote")(2355,"p"),eN(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Sl(2357,"code"),eN(2358,"po-datepicker"),og(),eN(2359,", "),Sl(2360,"code"),eN(2361,"po-input"),og(),eN(2362,", "),Sl(2363,"code"),eN(2364,"po-number"),og(),eN(2365,", "),Sl(2366,"code"),eN(2367,"po-decimal"),og(),eN(2368,", "),Sl(2369,"code"),eN(2370,"po-password"),og(),eN(2371,", "),Sl(2372,"code"),eN(2373,"po-timepicker"),og(),eN(2374,`, \xE9 necess\xE1rio que a propriedade
`),Sl(2375,"code"),eN(2376,"requiredFieldErrorMessage"),og(),eN(2377," esteja como "),Sl(2378,"code"),eN(2379,"true"),og(),eN(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Sl(2381,"code"),eN(2382,"po-datepicker-range"),og(),eN(2383,", "),Sl(2384,"code"),eN(2385,"po-select"),og(),eN(2386,", "),Sl(2387,"code"),eN(2388,"po-checkbox-group"),og(),eN(2389,", "),Sl(2390,"code"),eN(2391,"po-radio-group"),og(),eN(2392,", "),Sl(2393,"code"),eN(2394,"po-multiselect"),og(),eN(2395,", "),Sl(2396,"code"),eN(2397,"po-combo"),og(),eN(2398,`,
`),Sl(2399,"code"),eN(2400,"po-lookup"),og(),eN(2401," e "),Sl(2402,"code"),eN(2403,"po-textarea"),og(),eN(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Sl(2405,"code"),eN(2406,"requiredFieldErrorMessage"),og(),eN(2407,"."),og()(),Sl(2408,"p")(2409,"strong"),eN(2410,"Componentes compat\xEDveis:"),og(),Sl(2411,"code"),eN(2412,"po-checkbox-group"),og(),eN(2413,", "),Sl(2414,"code"),eN(2415,"po-combo"),og(),eN(2416,", "),Sl(2417,"code"),eN(2418,"po-datepicker"),og(),eN(2419,", "),Sl(2420,"code"),eN(2421,"po-datepicker-range"),og(),eN(2422,", "),Sl(2423,"code"),eN(2424,"po-decimal"),og(),eN(2425,", "),Sl(2426,"code"),eN(2427,"po-input"),og(),eN(2428,", "),Sl(2429,"code"),eN(2430,"po-lookup"),og(),eN(2431,", "),Sl(2432,"code"),eN(2433,"po-multiselect"),og(),eN(2434,", "),Sl(2435,"code"),eN(2436,"po-number"),og(),eN(2437,", "),Sl(2438,"code"),eN(2439,"po-password"),og(),eN(2440,", "),Sl(2441,"code"),eN(2442,"po-radio-group"),og(),eN(2443,", "),Sl(2444,"code"),eN(2445,"po-select"),og(),eN(2446,`,
`),Sl(2447,"code"),eN(2448,"po-switch"),og(),eN(2449,", "),Sl(2450,"code"),eN(2451,"po-textarea"),og(),eN(2452,", "),Sl(2453,"code"),eN(2454,"po-timepicker"),og(),eN(2455,"."),og()()(),Sl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),eN(2460," fieldLabel"),Wl(2461,"br"),og()()(),Sl(2462,"td",21)(2463,"code",27),eN(2464,"string"),og()(),Sl(2465,"td",24)(2466,"em")(2467,"strong"),eN(2468,"(opcional)"),og()(),Sl(2469,"p"),eN(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Sl(2471,"p"),eN(2472,"O valor padr\xE3o \xE9: "),Sl(2473,"code"),eN(2474,"label"),og(),eN(2475,"."),og(),Sl(2476,"blockquote")(2477,"p"),eN(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(2479,"code"),eN(2480,"options"),og(),eN(2481,", "),Sl(2482,"code"),eN(2483,"optionsService"),og(),eN(2484," e "),Sl(2485,"code"),eN(2486,"searchService"),og(),eN(2487,"."),og()()()(),Sl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),eN(2492," fieldValue"),Wl(2493,"br"),og()()(),Sl(2494,"td",21)(2495,"code",27),eN(2496,"string"),og()(),Sl(2497,"td",24)(2498,"em")(2499,"strong"),eN(2500,"(opcional)"),og()(),Sl(2501,"p"),eN(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Sl(2503,"p"),eN(2504,"O valor padr\xE3o \xE9: "),Sl(2505,"code"),eN(2506,"value"),og(),eN(2507,"."),og(),Sl(2508,"blockquote")(2509,"p"),eN(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(2511,"code"),eN(2512,"options"),og(),eN(2513,", "),Sl(2514,"code"),eN(2515,"optionsService"),og(),eN(2516," e "),Sl(2517,"code"),eN(2518,"searchService"),og(),eN(2519,"."),og()()()(),Sl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),eN(2524," filterMinlength"),Wl(2525,"br"),og()()(),Sl(2526,"td",21)(2527,"code",45),eN(2528,"number"),og()(),Sl(2529,"td",24)(2530,"em")(2531,"strong"),eN(2532,"(opcional)"),og()(),Sl(2533,"p"),eN(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Sl(2535,"code"),eN(2536,"po-combo"),og(),eN(2537,"."),og()()(),Sl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),eN(2542," filterMode"),Wl(2543,"br"),og()()(),Sl(2544,"td",21)(2545,"code",52),eN(2546,"PoMultiselectFilterMode"),og()(),Sl(2547,"td",24)(2548,"em")(2549,"strong"),eN(2550,"(opcional)"),og()(),Sl(2551,"p"),eN(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Sl(2553,"code"),eN(2554,"startsWith"),og(),eN(2555,", "),Sl(2556,"code"),eN(2557,"contains"),og(),eN(2558," ou "),Sl(2559,"code"),eN(2560,"endsWith"),og(),eN(2561,"."),og(),Sl(2562,"blockquote")(2563,"p"),eN(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Sl(2565,"p")(2566,"strong"),eN(2567,"Componente compat\xEDvel:"),og(),Sl(2568,"code"),eN(2569,"po-multiselect"),og(),eN(2570,"."),og()()(),Sl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),eN(2575," forceBooleanComponentType"),Wl(2576,"br"),og()()(),Sl(2577,"td",21)(2578,"code",53),eN(2579,"ForceBooleanComponentEnum"),og()(),Sl(2580,"td",24)(2581,"em")(2582,"strong"),eN(2583,"(opcional)"),og()(),Sl(2584,"p"),eN(2585,"Valores aceitos:"),og(),Sl(2586,"ul")(2587,"li"),eN(2588,"ForceBooleanComponentEnum.switch"),og(),Sl(2589,"li"),eN(2590,"ForceBooleanComponentEnum.checkbox"),og()()()(),Sl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),eN(2595," forceOptionsComponentType"),Wl(2596,"br"),og()()(),Sl(2597,"td",21)(2598,"code",54),eN(2599,"ForceOptionComponentEnum"),og()(),Sl(2600,"td",24)(2601,"em")(2602,"strong"),eN(2603,"(opcional)"),og()(),Sl(2604,"p"),eN(2605,"pode ser utilizada em conjunto com a propriedade "),Sl(2606,"code"),eN(2607,"options"),og(),eN(2608," for\xE7ando o componente a renderizar um "),Sl(2609,"code"),eN(2610,"po-select"),og(),eN(2611," ou "),Sl(2612,"code"),eN(2613,"po-radio-group"),og(),eN(2614,"."),og(),Sl(2615,"p"),eN(2616,"Valores aceitos:"),og(),Sl(2617,"ul")(2618,"li"),eN(2619,"ForceOptionComponentEnum.radioGroup"),og(),Sl(2620,"li"),eN(2621,"ForceOptionComponentEnum.select"),og()(),Sl(2622,"blockquote")(2623,"p"),eN(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Sl(2625,"code"),eN(2626,"optionsMulti"),og(),eN(2627," e "),Sl(2628,"code"),eN(2629,"optionsService"),og(),eN(2630,"."),og()()()(),Sl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),eN(2635," formField"),Wl(2636,"br"),og()()(),Sl(2637,"td",21)(2638,"code",27),eN(2639,"string"),og()(),Sl(2640,"td",24)(2641,"em")(2642,"strong"),eN(2643,"(opcional)"),og()(),Sl(2644,"p"),eN(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(2646,"code"),eN(2647,"url"),og(),eN(2648,"."),og(),Sl(2649,"blockquote")(2650,"p"),eN(2651,"O valor default \xE9 "),Sl(2652,"code"),eN(2653,"files"),og()()(),Sl(2654,"p")(2655,"strong"),eN(2656,"Componente compat\xEDvel"),og(),eN(2657,": "),Sl(2658,"code"),eN(2659,"po-upload"),og()()()(),Sl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),eN(2664," format"),Wl(2665,"br"),og()()(),Sl(2666,"td",21)(2667,"code",27),eN(2668,"string "),og(),Sl(2669,"code",32),eN(2670," Array<string>"),og()(),Sl(2671,"td",24)(2672,"em")(2673,"strong"),eN(2674,"(opcional)"),og()(),Sl(2675,"p"),eN(2676,"Formato de exibi\xE7\xE3o no campo."),og(),Sl(2677,"p"),eN(2678,"Ao utilizar esta propriedade com o "),Sl(2679,"code"),eN(2680,"type"),og(),Sl(2681,"em"),eN(2682,"PoDynamicFieldType.Date"),og(),eN(2683," ou "),Sl(2684,"em"),eN(2685,"PoDynamicFieldType.DateTime"),og(),eN(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Sl(2687,"p"),eN(2688,"Valores v\xE1lidos:"),og(),Sl(2689,"ul")(2690,"li"),eN(2691,"dd/mm/yyyy"),og(),Sl(2692,"li"),eN(2693,"mm/dd/yyyy"),og(),Sl(2694,"li"),eN(2695,"yyyy/mm/dd"),og()(),Sl(2696,"p"),eN(2697,"Ao utilizar com o "),Sl(2698,"code"),eN(2699,"type"),og(),Sl(2700,"em"),eN(2701,"PoDynamicFieldType.Time"),og(),eN(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Sl(2703,"p"),eN(2704,"Valores v\xE1lidos:"),og(),Sl(2705,"ul")(2706,"li")(2707,"code"),eN(2708,"24"),og(),eN(2709,": formato de 24 horas (padr\xE3o)"),og(),Sl(2710,"li")(2711,"code"),eN(2712,"12"),og(),eN(2713,": formato de 12 horas com indicador AM/PM"),og()(),Sl(2714,"p"),eN(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Sl(2716,"code"),eN(2717,"searchService"),og(),eN(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Sl(2719,"p")(2720,"strong"),eN(2721,"Componentes compat\xEDveis:"),og(),Sl(2722,"code"),eN(2723,"po-datepicker"),og(),eN(2724,", "),Sl(2725,"code"),eN(2726,"po-timepicker"),og(),eN(2727,", "),Sl(2728,"code"),eN(2729,"po-lookup"),og(),eN(2730,"."),og()()(),Sl(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),eN(2735," formatModel"),Wl(2736,"br"),og()()(),Sl(2737,"td",21)(2738,"code",29),eN(2739,"boolean"),og()(),Sl(2740,"td",24)(2741,"em")(2742,"strong"),eN(2743,"(opcional)"),og()(),Sl(2744,"p"),eN(2745,"Indica se o "),Sl(2746,"code"),eN(2747,"model"),og(),eN(2748," receber\xE1 o valor formatado pelas propriedades "),Sl(2749,"code"),eN(2750,"p-label-on"),og(),eN(2751," e "),Sl(2752,"code"),eN(2753,"p-label-off"),og(),eN(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Sl(2755,"p"),eN(2756,"O valor padr\xE3o \xE9: "),Sl(2757,"code"),eN(2758,"false"),og(),eN(2759,"."),og(),Sl(2760,"blockquote")(2761,"p"),eN(2762,"Esta propriedade est\xE1 disponivel apenas para o "),Sl(2763,"code"),eN(2764,"swicth"),og(),eN(2765,"."),og()()()(),Sl(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),eN(2770," formatTime"),Wl(2771,"br"),og()()(),Sl(2772,"td",21)(2773,"code",27),eN(2774,"string"),og()(),Sl(2775,"td",24)(2776,"em")(2777,"strong"),eN(2778,"(opcional)"),og()(),Sl(2779,"p"),eN(2780,"Define o formato de exibi\xE7\xE3o do timer ("),Sl(2781,"code"),eN(2782,"'12'"),og(),eN(2783," ou "),Sl(2784,"code"),eN(2785,"'24'"),og(),eN(2786,")."),og(),Sl(2787,"p")(2788,"strong"),eN(2789,"Componente compat\xEDvel:"),og(),Sl(2790,"code"),eN(2791,"po-datetimepicker"),og(),eN(2792,", "),Sl(2793,"code"),eN(2794,"po-timepicker"),og()()()(),Sl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),eN(2799," gridColumns"),Wl(2800,"br"),og()()(),Sl(2801,"td",21)(2802,"code",45),eN(2803,"number"),og()(),Sl(2804,"td",24)(2805,"em")(2806,"strong"),eN(2807,"(opcional)"),og()(),Sl(2808,"p"),eN(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Sl(2810,"p"),eN(2811,"Deve ser usado o sistema de "),Sl(2812,"strong"),eN(2813,"grid"),og(),eN(2814," do PO (1 ... 12 colunas)."),og(),Sl(2815,"blockquote")(2816,"p"),eN(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),eN(2822," gridLgColumns"),Wl(2823,"br"),og()()(),Sl(2824,"td",21)(2825,"code",45),eN(2826,"number"),og()(),Sl(2827,"td",24)(2828,"em")(2829,"strong"),eN(2830,"(opcional)"),og()(),Sl(2831,"p"),eN(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(2833,"p"),eN(2834,"Deve ser usado o sistema de "),Sl(2835,"strong"),eN(2836,"grid"),og(),eN(2837," do PO (1 ... 12 colunas)."),og(),Sl(2838,"blockquote")(2839,"p"),eN(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2841,"code"),eN(2842,"gridColumns"),og(),eN(2843,"."),og()()()(),Sl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),eN(2848," gridLgPull"),Wl(2849,"br"),og()()(),Sl(2850,"td",21)(2851,"code",45),eN(2852,"number"),og()(),Sl(2853,"td",24)(2854,"em")(2855,"strong"),eN(2856,"(opcional)"),og()(),Sl(2857,"p"),eN(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Sl(2859,"p"),eN(2860,"Deve ser usado o sistema de "),Sl(2861,"strong"),eN(2862,"grid"),og(),eN(2863," do PO (1 ... 11 colunas)."),og(),Sl(2864,"blockquote")(2865,"p"),eN(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2867,"code"),eN(2868,"gridColumns"),og(),eN(2869,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),eN(2874," gridMdColumns"),Wl(2875,"br"),og()()(),Sl(2876,"td",21)(2877,"code",45),eN(2878,"number"),og()(),Sl(2879,"td",24)(2880,"em")(2881,"strong"),eN(2882,"(opcional)"),og()(),Sl(2883,"p"),eN(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(2885,"p"),eN(2886,"Deve ser usado o sistema de "),Sl(2887,"strong"),eN(2888,"grid"),og(),eN(2889," do PO (1 ... 12 colunas)."),og(),Sl(2890,"blockquote")(2891,"p"),eN(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2893,"code"),eN(2894,"gridColumns"),og(),eN(2895,"."),og()()()(),Sl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),eN(2900," gridMdPull"),Wl(2901,"br"),og()()(),Sl(2902,"td",21)(2903,"code",45),eN(2904,"number"),og()(),Sl(2905,"td",24)(2906,"em")(2907,"strong"),eN(2908,"(opcional)"),og()(),Sl(2909,"p"),eN(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Sl(2911,"p"),eN(2912,"Deve ser usado o sistema de "),Sl(2913,"strong"),eN(2914,"grid"),og(),eN(2915," do PO (1 ... 11 colunas)."),og(),Sl(2916,"blockquote")(2917,"p"),eN(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2919,"code"),eN(2920,"gridColumns"),og(),eN(2921,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),eN(2926," gridSmColumns"),Wl(2927,"br"),og()()(),Sl(2928,"td",21)(2929,"code",45),eN(2930,"number"),og()(),Sl(2931,"td",24)(2932,"em")(2933,"strong"),eN(2934,"(opcional)"),og()(),Sl(2935,"p"),eN(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(2937,"p"),eN(2938,"Deve ser usado o sistema de "),Sl(2939,"strong"),eN(2940,"grid"),og(),eN(2941," do PO (1 ... 12 colunas)."),og(),Sl(2942,"blockquote")(2943,"p"),eN(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2945,"code"),eN(2946,"gridColumns"),og(),eN(2947,"."),og()()()(),Sl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),eN(2952," gridSmPull"),Wl(2953,"br"),og()()(),Sl(2954,"td",21)(2955,"code",45),eN(2956,"number"),og()(),Sl(2957,"td",24)(2958,"em")(2959,"strong"),eN(2960,"(opcional)"),og()(),Sl(2961,"p"),eN(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Sl(2963,"p"),eN(2964,"Deve ser usado o sistema de "),Sl(2965,"strong"),eN(2966,"grid"),og(),eN(2967," do PO (1 ... 11 colunas)."),og(),Sl(2968,"blockquote")(2969,"p"),eN(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2971,"code"),eN(2972,"gridColumns"),og(),eN(2973,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),eN(2978," gridXlColumns"),Wl(2979,"br"),og()()(),Sl(2980,"td",21)(2981,"code",45),eN(2982,"number"),og()(),Sl(2983,"td",24)(2984,"em")(2985,"strong"),eN(2986,"(opcional)"),og()(),Sl(2987,"p"),eN(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(2989,"p"),eN(2990,"Deve ser usado o sistema de "),Sl(2991,"strong"),eN(2992,"grid"),og(),eN(2993," do PO (1 ... 12 colunas)."),og(),Sl(2994,"blockquote")(2995,"p"),eN(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2997,"code"),eN(2998,"gridColumns"),og(),eN(2999,"."),og()()()(),Sl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),eN(3004," gridXlPull"),Wl(3005,"br"),og()()(),Sl(3006,"td",21)(3007,"code",45),eN(3008,"number"),og()(),Sl(3009,"td",24)(3010,"em")(3011,"strong"),eN(3012,"(opcional)"),og()(),Sl(3013,"p"),eN(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Sl(3015,"p"),eN(3016,"Deve ser usado o sistema de "),Sl(3017,"strong"),eN(3018,"grid"),og(),eN(3019," do PO (1 ... 11 colunas)."),og(),Sl(3020,"blockquote")(3021,"p"),eN(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(3023,"code"),eN(3024,"gridColumns"),og(),eN(3025,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),eN(3030," headers"),Wl(3031,"br"),og()()(),Sl(3032,"td",21)(3033,"code",55),eN(3034,"{ [name: string]: string "),og(),Sl(3035,"code",56),eN(3036,` Array<string>;
}`),og()(),Sl(3037,"td",24)(3038,"em")(3039,"strong"),eN(3040,"(opcional)"),og()(),Sl(3041,"p"),eN(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Sl(3043,"p")(3044,"strong"),eN(3045,"Componente compat\xEDvel"),og(),eN(3046,": "),Sl(3047,"code"),eN(3048,"po-upload"),og()()()(),Sl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),eN(3053," help"),Wl(3054,"br"),og()()(),Sl(3055,"td",21)(3056,"code",27),eN(3057,"string"),og()(),Sl(3058,"td",24)(3059,"em")(3060,"strong"),eN(3061,"(opcional)"),og()(),Sl(3062,"p"),eN(3063,"Texto de ajuda."),og()()(),Sl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),eN(3068," helper"),Wl(3069,"br"),og()()(),Sl(3070,"td",21)(3071,"code",27),eN(3072,"string "),og(),Sl(3073,"code",38),eN(3074," PoHelperOptions"),og()(),Sl(3075,"td",24)(3076,"em")(3077,"strong"),eN(3078,"(opcional)"),og()(),Sl(3079,"p"),eN(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Sl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),eN(3085," hideLabelStatus"),Wl(3086,"br"),og()()(),Sl(3087,"td",21)(3088,"code",29),eN(3089,"boolean"),og()(),Sl(3090,"td",24)(3091,"em")(3092,"strong"),eN(3093,"(opcional)"),og()(),Sl(3094,"p"),eN(3095,"Indica se o status do "),Sl(3096,"code"),eN(3097,"model"),og(),eN(3098," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Sl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),eN(3103," hidePasswordPeek"),Wl(3104,"br"),og()()(),Sl(3105,"td",21)(3106,"code",29),eN(3107,"boolean"),og()(),Sl(3108,"td",24)(3109,"em")(3110,"strong"),eN(3111,"(opcional)"),og()(),Sl(3112,"p"),eN(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Sl(3114,"code"),eN(3115,"po-password"),og(),eN(3116,"."),og()()(),Sl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),eN(3121," hideRestrictionsInfo"),Wl(3122,"br"),og()()(),Sl(3123,"td",21)(3124,"code",29),eN(3125,"boolean"),og()(),Sl(3126,"td",24)(3127,"em")(3128,"strong"),eN(3129,"(opcional)"),og()(),Sl(3130,"p"),eN(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Sl(3132,"p")(3133,"strong"),eN(3134,"Componente compat\xEDvel"),og(),eN(3135,": "),Sl(3136,"code"),eN(3137,"po-upload"),og()()()(),Sl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),eN(3142," hideSearch"),Wl(3143,"br"),og()()(),Sl(3144,"td",21)(3145,"code",29),eN(3146,"boolean"),og()(),Sl(3147,"td",24)(3148,"em")(3149,"strong"),eN(3150,"(opcional)"),og()(),Sl(3151,"p"),eN(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Sl(3153,"code"),eN(3154,"po-multiselect"),og(),eN(3155,"."),og()()(),Sl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),eN(3160," hideSelectAll"),Wl(3161,"br"),og()()(),Sl(3162,"td",21)(3163,"code",29),eN(3164,"boolean"),og()(),Sl(3165,"td",24)(3166,"em")(3167,"strong"),eN(3168,"(opcional)"),og()(),Sl(3169,"p"),eN(3170,'Indica se o campo "Selecionar todos" do '),Sl(3171,"code"),eN(3172,"po-multiselect"),og(),eN(3173," ser\xE1 escondido."),og()()(),Sl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),eN(3178," hideSelectButton"),Wl(3179,"br"),og()()(),Sl(3180,"td",21)(3181,"code",29),eN(3182,"boolean"),og()(),Sl(3183,"td",24)(3184,"em")(3185,"strong"),eN(3186,"(opcional)"),og()(),Sl(3187,"p"),eN(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Sl(3189,"blockquote")(3190,"p"),eN(3191,"Caso o valor definido seja "),Sl(3192,"code"),eN(3193,"true"),og(),eN(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(3195,"code"),eN(3196,"selectFiles()"),og(),eN(3197," para sele\xE7\xE3o de arquivos."),og()(),Sl(3198,"p")(3199,"strong"),eN(3200,"Componente compat\xEDvel"),og(),eN(3201,": "),Sl(3202,"code"),eN(3203,"po-upload"),og()()()(),Sl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),eN(3208," hideSendButton"),Wl(3209,"br"),og()()(),Sl(3210,"td",21)(3211,"code",29),eN(3212,"boolean"),og()(),Sl(3213,"td",24)(3214,"em")(3215,"strong"),eN(3216,"(opcional)"),og()(),Sl(3217,"p"),eN(3218,"Omite o bot\xE3o de envio de arquivos."),og(),Sl(3219,"blockquote")(3220,"p"),eN(3221,"Caso o valor definido seja "),Sl(3222,"code"),eN(3223,"true"),og(),eN(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(3225,"code"),eN(3226,"sendFiles()"),og(),eN(3227," para envio do(s) arquivo(s) selecionado(s)."),og()(),Sl(3228,"p")(3229,"strong"),eN(3230,"Componente compat\xEDvel"),og(),eN(3231,": "),Sl(3232,"code"),eN(3233,"po-upload"),og()()()(),Sl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),eN(3238," icon"),Wl(3239,"br"),og()()(),Sl(3240,"td",21)(3241,"code",27),eN(3242,"string "),og(),Sl(3243,"code",57),eN(3244," TemplateRef<void>"),og()(),Sl(3245,"td",24)(3246,"em")(3247,"strong"),eN(3248,"(opcional)"),og()(),Sl(3249,"p"),eN(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(3251,"blockquote")(3252,"p"),eN(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Sl(3254,"ul")(3255,"li"),eN(3256,"Input;"),og(),Sl(3257,"li"),eN(3258,"Number;"),og(),Sl(3259,"li"),eN(3260,"Decimal;"),og(),Sl(3261,"li"),eN(3262,"Combo;"),og(),Sl(3263,"li"),eN(3264,"Password;"),og()(),Sl(3265,"blockquote")(3266,"p"),eN(3267,"Veja a disponibilidade de \xEDcones em "),Sl(3268,"a",58),eN(3269,"biblioteca de \xEDcones"),og(),eN(3270,"."),og()()()(),Sl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),eN(3275," infiniteScroll"),Wl(3276,"br"),og()()(),Sl(3277,"td",21)(3278,"code",29),eN(3279,"boolean"),og()(),Sl(3280,"td",24)(3281,"em")(3282,"strong"),eN(3283,"(opcional)"),og()(),Sl(3284,"p"),eN(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Sl(3286,"p")(3287,"strong"),eN(3288,"Componentes compat\xEDveis:"),og(),Sl(3289,"code"),eN(3290,"po-combo"),og(),eN(3291,", "),Sl(3292,"code"),eN(3293,"po-lookup"),og(),eN(3294,"."),og()()(),Sl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),eN(3299," infiniteScrollDistance"),Wl(3300,"br"),og()()(),Sl(3301,"td",21)(3302,"code",45),eN(3303,"number"),og()(),Sl(3304,"td",24)(3305,"em")(3306,"strong"),eN(3307,"(opcional)"),og()(),Sl(3308,"p"),eN(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Sl(3310,"strong"),eN(3311,"Exemplos"),og(),Sl(3312,"code"),eN(3313,"{ infiniteScrollDistance: 80 }"),og(),eN(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Sl(3315,"p")(3316,"strong"),eN(3317,"Componente compat\xEDvel:"),og(),Sl(3318,"code"),eN(3319,"po-combo"),og(),eN(3320,"."),og()()(),Sl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),eN(3325," invalidValue"),Wl(3326,"br"),og()()(),Sl(3327,"td",21)(3328,"code",29),eN(3329,"boolean"),og()(),Sl(3330,"td",24)(3331,"em")(3332,"strong"),eN(3333,"(opcional)"),og()(),Sl(3334,"p"),eN(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(3336,"code"),eN(3337,"p-field-error-message"),og(),eN(3338,"."),og(),Sl(3339,"blockquote")(3340,"p"),eN(3341,"Caso essa propriedade seja definida como "),Sl(3342,"code"),eN(3343,"true"),og(),eN(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Sl(3345,"p")(3346,"strong"),eN(3347,"Componente compat\xEDvel"),og(),eN(3348,": "),Sl(3349,"code"),eN(3350,"po-switch"),og()()()(),Sl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),eN(3355," isoFormat"),Wl(3356,"br"),og()()(),Sl(3357,"td",21)(3358,"code",59),eN(3359,"PoDatepickerIsoFormat"),og()(),Sl(3360,"td",24)(3361,"em")(3362,"strong"),eN(3363,"(opcional)"),og()(),Sl(3364,"p"),eN(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Sl(3366,"blockquote")(3367,"p"),eN(3368,"Veja os valores v\xE1lidos no "),Sl(3369,"code"),eN(3370,"PoDatepickerIsoFormat"),og(),eN(3371,"."),og()(),Sl(3372,"p")(3373,"strong"),eN(3374,"Componente compat\xEDvel:"),og(),Sl(3375,"code"),eN(3376,"po-datepicker"),og()()()(),Sl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),eN(3381," key"),Wl(3382,"br"),og()()(),Sl(3383,"td",21)(3384,"code",29),eN(3385,"boolean"),og()(),Sl(3386,"td",24)(3387,"em")(3388,"strong"),eN(3389,"(opcional)"),og()(),Sl(3390,"p"),eN(3391,"Identificador"),og()()(),Sl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),eN(3396," keydown"),Wl(3397,"br"),og()()(),Sl(3398,"td",21)(3399,"code",44),eN(3400,"Function"),og()(),Sl(3401,"td",24)(3402,"em")(3403,"strong"),eN(3404,"(opcional)"),og()(),Sl(3405,"p"),eN(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(3407,"code"),eN(3408,"KeyboardEvent"),og(),eN(3409," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),eN(3414," label"),Wl(3415,"br"),og()()(),Sl(3416,"td",21)(3417,"code",27),eN(3418,"string"),og()(),Sl(3419,"td",24)(3420,"em")(3421,"strong"),eN(3422,"(opcional)"),og()(),Sl(3423,"p"),eN(3424,"R\xF3tulo do campo exibido."),og(),Sl(3425,"p"),eN(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(3427,"code"),eN(3428,"label"),og(),eN(3429," o valor da propriedade "),Sl(3430,"code"),eN(3431,"property"),og(),eN(3432," com a primeira letra em mai\xFAsculo."),og()()(),Sl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),eN(3437," labelPosition"),Wl(3438,"br"),og()()(),Sl(3439,"td",21)(3440,"code",60),eN(3441,"PoSwitchLabelPosition"),og()(),Sl(3442,"td",24)(3443,"em")(3444,"strong"),eN(3445,"(opcional)"),og()(),Sl(3446,"p"),eN(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Sl(3448,"blockquote")(3449,"p"),eN(3450,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Sl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),eN(3455," listboxControlPosition"),Wl(3456,"br"),og()()(),Sl(3457,"td",21)(3458,"code",61),eN(3459,"'top' "),og(),Sl(3460,"code",62),eN(3461," 'bottom'"),og()(),Sl(3462,"td",24)(3463,"em")(3464,"strong"),eN(3465,"(opcional)"),og()(),Sl(3466,"p"),eN(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Sl(3468,"code"),eN(3469,"listbox"),og(),eN(3470," em rela\xE7\xE3o ao campo ("),Sl(3471,"code"),eN(3472,"top"),og(),eN(3473," ou "),Sl(3474,"code"),eN(3475,"bottom"),og(),eN(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Sl(3477,"p")(3478,"strong"),eN(3479,"Componentes compat\xEDveis:"),og(),Sl(3480,"code"),eN(3481,"po-multiselect"),og(),eN(3482,", "),Sl(3483,"code"),eN(3484,"po-combo"),og(),eN(3485,"."),og()()(),Sl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),eN(3490," literals"),Wl(3491,"br"),og()()(),Sl(3492,"td",21)(3493,"code",36),eN(3494,"PoLookupLiterals "),og(),Sl(3495,"code",63),eN(3496," PoMultiselectLiterals "),og(),Sl(3497,"code",64),eN(3498," PoComboLiterals "),og(),Sl(3499,"code",65),eN(3500," PoDatepickerRangeLiterals "),og(),Sl(3501,"code",66),eN(3502," PoUploadLiterals"),og()(),Sl(3503,"td",24)(3504,"em")(3505,"strong"),eN(3506,"(opcional)"),og()(),Sl(3507,"p"),eN(3508,"Objeto com as literais usadas para os seguintes componentes: "),Sl(3509,"code"),eN(3510,"po-lookup"),og(),eN(3511,", "),Sl(3512,"code"),eN(3513,"po-multiselect"),og(),eN(3514,", "),Sl(3515,"code"),eN(3516,"po-combo"),og(),eN(3517," e "),Sl(3518,"code"),eN(3519,"po-datepicker-range"),og(),eN(3520,"."),og(),Sl(3521,"blockquote")(3522,"p"),eN(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Sl(3524,"p")(3525,"strong"),eN(3526,"Componentes compat\xEDveis:"),og(),Sl(3527,"code"),eN(3528,"po-lookup"),og(),eN(3529,", "),Sl(3530,"code"),eN(3531,"po-multiselect"),og(),eN(3532,", "),Sl(3533,"code"),eN(3534,"po-combo"),og(),eN(3535,", "),Sl(3536,"code"),eN(3537,"po-datepicker-range"),og()()()(),Sl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),eN(3542," loading"),Wl(3543,"br"),og()()(),Sl(3544,"td",21)(3545,"code",29),eN(3546,"boolean"),og()(),Sl(3547,"td",24)(3548,"em")(3549,"strong"),eN(3550,"(opcional)"),og()(),Sl(3551,"p"),eN(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Sl(3553,"blockquote")(3554,"p"),eN(3555,"Por padr\xE3o \xE9 "),Sl(3556,"code"),eN(3557,"false"),og(),eN(3558,"."),og()(),Sl(3559,"p")(3560,"strong"),eN(3561,"Componentes compat\xEDveis:"),og(),Sl(3562,"code"),eN(3563,"po-datepicker"),og(),eN(3564,", "),Sl(3565,"code"),eN(3566,"po-datepicker-range"),og(),eN(3567,", "),Sl(3568,"code"),eN(3569,"po-number"),og(),eN(3570,", "),Sl(3571,"code"),eN(3572,"po-decimal"),og(),eN(3573,`,
`),Sl(3574,"code"),eN(3575,"po-input"),og(),eN(3576,", "),Sl(3577,"code"),eN(3578,"po-select"),og(),eN(3579,", "),Sl(3580,"code"),eN(3581,"po-switch"),og(),eN(3582,", "),Sl(3583,"code"),eN(3584,"po-combo"),og(),eN(3585,", "),Sl(3586,"code"),eN(3587,"po-lookup"),og(),eN(3588,", "),Sl(3589,"code"),eN(3590,"po-multiselect"),og(),eN(3591,`,
`),Sl(3592,"code"),eN(3593,"po-textarea"),og(),eN(3594,", "),Sl(3595,"code"),eN(3596,"po-password"),og(),eN(3597,", "),Sl(3598,"code"),eN(3599,"po-upload"),og(),eN(3600,"."),og()()(),Sl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),eN(3605," locale"),Wl(3606,"br"),og()()(),Sl(3607,"td",21)(3608,"code",27),eN(3609,"string"),og()(),Sl(3610,"td",24)(3611,"em")(3612,"strong"),eN(3613,"(opcional)"),og()(),Sl(3614,"p"),eN(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Sl(3616,"a",67)(3617,"code"),eN(3618,"I18n"),og()()(),Sl(3619,"p"),eN(3620,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(3621,"pre")(3622,"code"),eN(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Sl(3624,"blockquote")(3625,"p"),eN(3626,"Para ver quais linguagens suportadas acesse "),Sl(3627,"a",67)(3628,"code"),eN(3629,"I18n"),og()()()(),Sl(3630,"p")(3631,"strong"),eN(3632,"Componentes compat\xEDveis:"),og(),Sl(3633,"code"),eN(3634,"po-datepicker"),og(),eN(3635,", "),Sl(3636,"code"),eN(3637,"po-decimal"),og(),eN(3638,", "),Sl(3639,"code"),eN(3640,"po-timepicker"),og(),eN(3641,"."),og()()(),Sl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),eN(3646," mask"),Wl(3647,"br"),og()()(),Sl(3648,"td",21)(3649,"code",27),eN(3650,"string"),og()(),Sl(3651,"td",24)(3652,"em")(3653,"strong"),eN(3654,"(opcional)"),og()(),Sl(3655,"p"),eN(3656,"M\xE1scara para o campo."),og(),Sl(3657,"p")(3658,"strong"),eN(3659,"Componente compat\xEDvel:"),og(),Sl(3660,"code"),eN(3661,"po-input"),og(),eN(3662,"."),og(),Sl(3663,"blockquote")(3664,"p"),eN(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(3666,"code"),eN(3667,"type: time"),og(),eN(3668,"."),og()()()(),Sl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),eN(3673," maskFormatModel"),Wl(3674,"br"),og()()(),Sl(3675,"td",21)(3676,"code",29),eN(3677,"boolean"),og()(),Sl(3678,"td",24)(3679,"em")(3680,"strong"),eN(3681,"(opcional)"),og()(),Sl(3682,"p"),eN(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Sl(3684,"code"),eN(3685,"false"),og(),eN(3686,"."),og(),Sl(3687,"p")(3688,"strong"),eN(3689,"Componente compat\xEDvel:"),og(),Sl(3690,"code"),eN(3691,"po-input"),og(),eN(3692,"."),og(),Sl(3693,"blockquote")(3694,"p"),eN(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(3696,"code"),eN(3697,"type: time"),og(),eN(3698,"."),og()()()(),Sl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),eN(3703," maskNoLengthValidation"),Wl(3704,"br"),og()()(),Sl(3705,"td",21)(3706,"code",29),eN(3707,"boolean"),og()(),Sl(3708,"td",24)(3709,"em")(3710,"strong"),eN(3711,"(opcional)"),og()(),Sl(3712,"p"),eN(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(3714,"code"),eN(3715,"minLength"),og(),eN(3716,") e m\xE1ximo ("),Sl(3717,"code"),eN(3718,"maxLength"),og(),eN(3719,") quando h\xE1 uma m\xE1scara ("),Sl(3720,"code"),eN(3721,"p-mask"),og(),eN(3722,") definida."),og(),Sl(3723,"ul")(3724,"li"),eN(3725,"Quando "),Sl(3726,"code"),eN(3727,"true"),og(),eN(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(3729,"li"),eN(3730,"Quando "),Sl(3731,"code"),eN(3732,"false"),og(),eN(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(3734,"p")(3735,"strong"),eN(3736,"Componentes compat\xEDveis:"),og(),Sl(3737,"code"),eN(3738,"po-input"),og(),eN(3739,", "),Sl(3740,"code"),eN(3741,"po-decimal"),og(),eN(3742,"."),og(),Sl(3743,"blockquote")(3744,"p"),eN(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(3746,"code"),eN(3747,"p-mask-format-model"),og(),eN(3748,"."),og()(),Sl(3749,"p"),eN(3750,"Exemplo:"),og(),Sl(3751,"pre")(3752,"code"),eN(3753,`fields:Array<PoDynamicFormField> = [
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
`),og()(),Sl(3754,"ul")(3755,"li"),eN(3756,"Entrada: "),Sl(3757,"code"),eN(3758,"11.111.111/1111-11"),og(),eN(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Sl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),eN(3764," maxLength"),Wl(3765,"br"),og()()(),Sl(3766,"td",21)(3767,"code",45),eN(3768,"number"),og()(),Sl(3769,"td",24)(3770,"em")(3771,"strong"),eN(3772,"(opcional)"),og()(),Sl(3773,"p"),eN(3774,"Tamanho m\xE1ximo de caracteres."),og(),Sl(3775,"p")(3776,"strong"),eN(3777,"Componentes compat\xEDveis:"),og(),Sl(3778,"code"),eN(3779,"po-input"),og(),eN(3780,", "),Sl(3781,"code"),eN(3782,"po-number"),og(),eN(3783,", "),Sl(3784,"code"),eN(3785,"po-decimal"),og(),eN(3786,", "),Sl(3787,"code"),eN(3788,"po-textarea"),og(),eN(3789,", "),Sl(3790,"code"),eN(3791,"po-password"),og(),eN(3792,"."),og()()(),Sl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),eN(3797," maxTime"),Wl(3798,"br"),og()()(),Sl(3799,"td",21)(3800,"code",27),eN(3801,"string"),og()(),Sl(3802,"td",24)(3803,"em")(3804,"strong"),eN(3805,"(opcional)"),og()(),Sl(3806,"p"),eN(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3808,"code"),eN(3809,"HH:mm"),og(),eN(3810," ou "),Sl(3811,"code"),eN(3812,"HH:mm:ss"),og(),eN(3813,"."),og(),Sl(3814,"p")(3815,"strong"),eN(3816,"Componente compat\xEDvel:"),og(),Sl(3817,"code"),eN(3818,"po-datetimepicker"),og(),eN(3819,", "),Sl(3820,"code"),eN(3821,"po-timepicker"),og()()()(),Sl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),eN(3826," maxValue"),Wl(3827,"br"),og()()(),Sl(3828,"td",21)(3829,"code",27),eN(3830,"string "),og(),Sl(3831,"code",45),eN(3832," number"),og()(),Sl(3833,"td",24)(3834,"em")(3835,"strong"),eN(3836,"(opcional)"),og()(),Sl(3837,"p"),eN(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3839,"em"),eN(3840,"number"),og(),eN(3841,", "),Sl(3842,"em"),eN(3843,"date"),og(),eN(3844,", "),Sl(3845,"em"),eN(3846,"dateTime"),og(),eN(3847," ou "),Sl(3848,"em"),eN(3849,"time"),og(),eN(3850,"."),og(),Sl(3851,"blockquote")(3852,"p"),eN(3853,"Para "),Sl(3854,"code"),eN(3855,"po-timepicker"),og(),eN(3856,", o valor deve estar no formato "),Sl(3857,"code"),eN(3858,"HH:mm"),og(),eN(3859," ou "),Sl(3860,"code"),eN(3861,"HH:mm:ss"),og(),eN(3862,"."),og()(),Sl(3863,"p")(3864,"strong"),eN(3865,"Componentes compat\xEDveis:"),og(),Sl(3866,"code"),eN(3867,"po-datepicker"),og(),eN(3868,", "),Sl(3869,"code"),eN(3870,"po-datepicker-range"),og(),eN(3871,", "),Sl(3872,"code"),eN(3873,"po-number"),og(),eN(3874,", "),Sl(3875,"code"),eN(3876,"po-decimal"),og(),eN(3877,", "),Sl(3878,"code"),eN(3879,"po-timepicker"),og()()()(),Sl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),eN(3884," minLength"),Wl(3885,"br"),og()()(),Sl(3886,"td",21)(3887,"code",45),eN(3888,"number"),og()(),Sl(3889,"td",24)(3890,"em")(3891,"strong"),eN(3892,"(opcional)"),og()(),Sl(3893,"p"),eN(3894,"Tamanho m\xEDnimo de caracteres."),og(),Sl(3895,"p")(3896,"strong"),eN(3897,"Componentes compat\xEDveis:"),og(),Sl(3898,"code"),eN(3899,"po-input"),og(),eN(3900,", "),Sl(3901,"code"),eN(3902,"po-number"),og(),eN(3903,", "),Sl(3904,"code"),eN(3905,"po-decimal"),og(),eN(3906,", "),Sl(3907,"code"),eN(3908,"po-textarea"),og(),eN(3909,", "),Sl(3910,"code"),eN(3911,"po-password"),og(),eN(3912,"."),og()()(),Sl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),eN(3917," minTime"),Wl(3918,"br"),og()()(),Sl(3919,"td",21)(3920,"code",27),eN(3921,"string"),og()(),Sl(3922,"td",24)(3923,"em")(3924,"strong"),eN(3925,"(opcional)"),og()(),Sl(3926,"p"),eN(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3928,"code"),eN(3929,"HH:mm"),og(),eN(3930," ou "),Sl(3931,"code"),eN(3932,"HH:mm:ss"),og(),eN(3933,"."),og(),Sl(3934,"p")(3935,"strong"),eN(3936,"Componente compat\xEDvel:"),og(),Sl(3937,"code"),eN(3938,"po-datetimepicker"),og(),eN(3939,", "),Sl(3940,"code"),eN(3941,"po-timepicker"),og()()()(),Sl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),eN(3946," minValue"),Wl(3947,"br"),og()()(),Sl(3948,"td",21)(3949,"code",27),eN(3950,"string "),og(),Sl(3951,"code",45),eN(3952," number"),og()(),Sl(3953,"td",24)(3954,"em")(3955,"strong"),eN(3956,"(opcional)"),og()(),Sl(3957,"p"),eN(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3959,"em"),eN(3960,"number"),og(),eN(3961,", "),Sl(3962,"em"),eN(3963,"date"),og(),eN(3964,", "),Sl(3965,"em"),eN(3966,"dateTime"),og(),eN(3967," ou "),Sl(3968,"em"),eN(3969,"time"),og(),eN(3970,"."),og(),Sl(3971,"blockquote")(3972,"p"),eN(3973,"Para "),Sl(3974,"code"),eN(3975,"po-timepicker"),og(),eN(3976,", o valor deve estar no formato "),Sl(3977,"code"),eN(3978,"HH:mm"),og(),eN(3979," ou "),Sl(3980,"code"),eN(3981,"HH:mm:ss"),og(),eN(3982,"."),og()(),Sl(3983,"p")(3984,"strong"),eN(3985,"Componentes compat\xEDveis:"),og(),Sl(3986,"code"),eN(3987,"po-datepicker"),og(),eN(3988,", "),Sl(3989,"code"),eN(3990,"po-datepicker-range"),og(),eN(3991,", "),Sl(3992,"code"),eN(3993,"po-number"),og(),eN(3994,", "),Sl(3995,"code"),eN(3996,"po-decimal"),og(),eN(3997,", "),Sl(3998,"code"),eN(3999,"po-timepicker"),og()()()(),Sl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),eN(4004," minuteInterval"),Wl(4005,"br"),og()()(),Sl(4006,"td",21)(4007,"code",45),eN(4008,"number"),og()(),Sl(4009,"td",24)(4010,"em")(4011,"strong"),eN(4012,"(opcional)"),og()(),Sl(4013,"p"),eN(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Sl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),eN(4019," mode"),Wl(4020,"br"),og()()(),Sl(4021,"td",21)(4022,"code",68),eN(4023,"'month-year' "),og(),Sl(4024,"code",69),eN(4025," 'year'"),og()(),Sl(4026,"td",24)(4027,"em")(4028,"strong"),eN(4029,"(opcional)"),og()(),Sl(4030,"p"),eN(4031,"Define o modo de sele\xE7\xE3o do "),Sl(4032,"code"),eN(4033,"po-datepicker"),og(),eN(4034,"."),og(),Sl(4035,"p"),eN(4036,"Valores aceitos:"),og(),Sl(4037,"ul")(4038,"li")(4039,"code"),eN(4040,"'month-year'"),og(),eN(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Sl(4042,"code"),eN(4043,"MM/YYYY"),og(),eN(4044,")"),og(),Sl(4045,"li")(4046,"code"),eN(4047,"'year'"),og(),eN(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Sl(4049,"code"),eN(4050,"YYYY"),og(),eN(4051,")"),og()(),Sl(4052,"p")(4053,"strong"),eN(4054,"Componente compat\xEDvel:"),og(),Sl(4055,"code"),eN(4056,"po-datepicker"),og()()()(),Sl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),eN(4061," modelFormat"),Wl(4062,"br"),og()()(),Sl(4063,"td",21)(4064,"code",70),eN(4065,"PoTimepickerModelFormat"),og()(),Sl(4066,"td",24)(4067,"em")(4068,"strong"),eN(4069,"(opcional)"),og()(),Sl(4070,"p"),eN(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Sl(4072,"code"),eN(4073,"po-timepicker"),og(),eN(4074,"."),og(),Sl(4075,"blockquote")(4076,"p"),eN(4077,"Veja os valores v\xE1lidos no "),Sl(4078,"code"),eN(4079,"PoTimepickerModelFormat"),og(),eN(4080,"."),og()(),Sl(4081,"p")(4082,"strong"),eN(4083,"Componente compat\xEDvel:"),og(),Sl(4084,"code"),eN(4085,"po-timepicker"),og()()()(),Sl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),eN(4090," multiple"),Wl(4091,"br"),og()()(),Sl(4092,"td",21)(4093,"code",29),eN(4094,"boolean"),og()(),Sl(4095,"td",24)(4096,"em")(4097,"strong"),eN(4098,"(opcional)"),og()(),Sl(4099,"p"),eN(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Sl(4101,"p")(4102,"strong"),eN(4103,"Componentes compat\xEDveis:"),og(),Sl(4104,"code"),eN(4105,"po-lookup"),og(),eN(4106,", "),Sl(4107,"code"),eN(4108,"po-upload"),og()()()(),Sl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),eN(4113," noAutocomplete"),Wl(4114,"br"),og()()(),Sl(4115,"td",21)(4116,"code",29),eN(4117,"boolean"),og()(),Sl(4118,"td",24)(4119,"em")(4120,"strong"),eN(4121,"(opcional)"),og()(),Sl(4122,"p"),eN(4123,"Define a propriedade nativa "),Sl(4124,"code"),eN(4125,"autocomplete"),og(),eN(4126," do campo como off."),og(),Sl(4127,"p")(4128,"strong"),eN(4129,"Componentes compat\xEDveis:"),og(),Sl(4130,"code"),eN(4131,"po-datepicker"),og(),eN(4132,", "),Sl(4133,"code"),eN(4134,"po-datepicker-range"),og(),eN(4135,", "),Sl(4136,"code"),eN(4137,"po-input"),og(),eN(4138,", "),Sl(4139,"code"),eN(4140,"po-number"),og(),eN(4141,", "),Sl(4142,"code"),eN(4143,"po-decimal"),og(),eN(4144,`,
`),Sl(4145,"code"),eN(4146,"po-lookup"),og(),eN(4147,", "),Sl(4148,"code"),eN(4149,"po-password"),og(),eN(4150,", "),Sl(4151,"code"),eN(4152,"po-timepicker"),og(),eN(4153,"."),og()()(),Sl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),eN(4158," offsetColumns"),Wl(4159,"br"),og()()(),Sl(4160,"td",21)(4161,"code",45),eN(4162,"number"),og()(),Sl(4163,"td",24)(4164,"em")(4165,"strong"),eN(4166,"(opcional)"),og()(),Sl(4167,"p"),eN(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Sl(4169,"p"),eN(4170,"Deve ser usado o sistema de "),Sl(4171,"strong"),eN(4172,"grid"),og(),eN(4173," do PO (1 ... 12 colunas)."),og(),Sl(4174,"blockquote")(4175,"p"),eN(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),eN(4181," offsetLgColumns"),Wl(4182,"br"),og()()(),Sl(4183,"td",21)(4184,"code",45),eN(4185,"number"),og()(),Sl(4186,"td",24)(4187,"em")(4188,"strong"),eN(4189,"(opcional)"),og()(),Sl(4190,"p"),eN(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(4192,"p"),eN(4193,"Deve ser usado o sistema de "),Sl(4194,"strong"),eN(4195,"grid"),og(),eN(4196," do PO (1 ... 12 colunas)."),og(),Sl(4197,"blockquote")(4198,"p"),eN(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4200,"code"),eN(4201,"offsetColumns"),og(),eN(4202,"."),og()()()(),Sl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),eN(4207," offsetMdColumns"),Wl(4208,"br"),og()()(),Sl(4209,"td",21)(4210,"code",45),eN(4211,"number"),og()(),Sl(4212,"td",24)(4213,"em")(4214,"strong"),eN(4215,"(opcional)"),og()(),Sl(4216,"p"),eN(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(4218,"p"),eN(4219,"Deve ser usado o sistema de "),Sl(4220,"strong"),eN(4221,"grid"),og(),eN(4222," do PO (1 ... 12 colunas)."),og(),Sl(4223,"blockquote")(4224,"p"),eN(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4226,"code"),eN(4227,"offsetColumns"),og(),eN(4228,"."),og()()()(),Sl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),eN(4233," offsetSmColumns"),Wl(4234,"br"),og()()(),Sl(4235,"td",21)(4236,"code",45),eN(4237,"number"),og()(),Sl(4238,"td",24)(4239,"em")(4240,"strong"),eN(4241,"(opcional)"),og()(),Sl(4242,"p"),eN(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(4244,"p"),eN(4245,"Deve ser usado o sistema de "),Sl(4246,"strong"),eN(4247,"grid"),og(),eN(4248," do PO (1 ... 12 colunas)."),og(),Sl(4249,"blockquote")(4250,"p"),eN(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4252,"code"),eN(4253,"offsetColumns"),og(),eN(4254,"."),og()()()(),Sl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),eN(4259," offsetXlColumns"),Wl(4260,"br"),og()()(),Sl(4261,"td",21)(4262,"code",45),eN(4263,"number"),og()(),Sl(4264,"td",24)(4265,"em")(4266,"strong"),eN(4267,"(opcional)"),og()(),Sl(4268,"p"),eN(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(4270,"p"),eN(4271,"Deve ser usado o sistema de "),Sl(4272,"strong"),eN(4273,"grid"),og(),eN(4274," do PO (1 ... 12 colunas)."),og(),Sl(4275,"blockquote")(4276,"p"),eN(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4278,"code"),eN(4279,"offsetColumns"),og(),eN(4280,"."),og()()()(),Sl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),eN(4285," onError"),Wl(4286,"br"),og()()(),Sl(4287,"td",21)(4288,"code",44),eN(4289,"Function"),og()(),Sl(4290,"td",24)(4291,"em")(4292,"strong"),eN(4293,"(opcional)"),og()(),Sl(4294,"p"),eN(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Sl(4296,"blockquote")(4297,"p"),eN(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(4299,"code"),eN(4300,"HttpErrorResponse"),og(),eN(4301,"."),og()(),Sl(4302,"p")(4303,"strong"),eN(4304,"Componente compat\xEDvel"),og(),eN(4305,": "),Sl(4306,"code"),eN(4307,"po-upload"),og()()()(),Sl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),eN(4312," onSuccess"),Wl(4313,"br"),og()()(),Sl(4314,"td",21)(4315,"code",44),eN(4316,"Function"),og()(),Sl(4317,"td",24)(4318,"em")(4319,"strong"),eN(4320,"(opcional)"),og()(),Sl(4321,"p"),eN(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Sl(4323,"blockquote")(4324,"p"),eN(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(4326,"code"),eN(4327,"HttpResponse"),og(),eN(4328,"."),og()(),Sl(4329,"p")(4330,"strong"),eN(4331,"Componente compat\xEDvel"),og(),eN(4332,": "),Sl(4333,"code"),eN(4334,"po-upload"),og()()()(),Sl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),eN(4339," onUpload"),Wl(4340,"br"),og()()(),Sl(4341,"td",21)(4342,"code",44),eN(4343,"Function"),og()(),Sl(4344,"td",24)(4345,"em")(4346,"strong"),eN(4347,"(opcional)"),og()(),Sl(4348,"p"),eN(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Sl(4350,"pre")(4351,"code"),eN(4352,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Sl(4353,"p")(4354,"strong"),eN(4355,"Componente compat\xEDvel"),og(),eN(4356,": "),Sl(4357,"code"),eN(4358,"po-upload"),og()()()(),Sl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),eN(4363," optional"),Wl(4364,"br"),og()()(),Sl(4365,"td",21)(4366,"code",29),eN(4367,"boolean"),og()(),Sl(4368,"td",24)(4369,"em")(4370,"strong"),eN(4371,"(opcional)"),og()(),Sl(4372,"p"),eN(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(4374,"blockquote")(4375,"p"),eN(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Sl(4377,"ul")(4378,"li"),eN(4379,"O campo for "),Sl(4380,"code"),eN(4381,"required"),og(),eN(4382,", ou;"),og(),Sl(4383,"li"),eN(4384,"N\xE3o possuir "),Sl(4385,"code"),eN(4386,"help"),og(),eN(4387," e "),Sl(4388,"code"),eN(4389,"label"),og(),eN(4390,"."),og()(),Sl(4391,"p")(4392,"strong"),eN(4393,"Componentes compat\xEDveis:"),og(),Sl(4394,"code"),eN(4395,"po-datepicker"),og(),eN(4396,", "),Sl(4397,"code"),eN(4398,"po-datepicker-range"),og(),eN(4399,", "),Sl(4400,"code"),eN(4401,"po-timepicker"),og(),eN(4402,", "),Sl(4403,"code"),eN(4404,"po-input"),og(),eN(4405,", "),Sl(4406,"code"),eN(4407,"po-number"),og(),eN(4408,`,
`),Sl(4409,"code"),eN(4410,"po-decimal"),og(),eN(4411,", "),Sl(4412,"code"),eN(4413,"po-select"),og(),eN(4414,", "),Sl(4415,"code"),eN(4416,"po-radio-group"),og(),eN(4417,", "),Sl(4418,"code"),eN(4419,"po-combo"),og(),eN(4420,", "),Sl(4421,"code"),eN(4422,"po-lookup"),og(),eN(4423,", "),Sl(4424,"code"),eN(4425,"po-checkbox-group"),og(),eN(4426,", "),Sl(4427,"code"),eN(4428,"po-multiselect"),og(),eN(4429,`,
`),Sl(4430,"code"),eN(4431,"po-textarea"),og(),eN(4432,", "),Sl(4433,"code"),eN(4434,"po-password"),og(),eN(4435,"."),og()()(),Sl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),eN(4440," options"),Wl(4441,"br"),og()()(),Sl(4442,"td",21)(4443,"code",32),eN(4444,"Array<string> "),og(),Sl(4445,"code",71),eN(4446," Array<PoSelectOption> "),og(),Sl(4447,"code",72),eN(4448," Array<PoMultiselectOption> "),og(),Sl(4449,"code",73),eN(4450," Array<PoCheckboxGroupOption> "),og(),Sl(4451,"code",74),eN(4452," Array<any>"),og()(),Sl(4453,"td",24)(4454,"em")(4455,"strong"),eN(4456,"(opcional)"),og()(),Sl(4457,"p"),eN(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Sl(4459,"p")(4460,"strong"),eN(4461,"Componentes compat\xEDveis:"),og(),Sl(4462,"code"),eN(4463,"po-select"),og(),eN(4464,", "),Sl(4465,"code"),eN(4466,"po-radio-group"),og(),eN(4467,", "),Sl(4468,"code"),eN(4469,"po-checkbox-group"),og(),eN(4470,", "),Sl(4471,"code"),eN(4472,"po-multiselect"),og(),eN(4473,"."),og()()(),Sl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),eN(4478," optionsMulti"),Wl(4479,"br"),og()()(),Sl(4480,"td",21)(4481,"code",29),eN(4482,"boolean"),og()(),Sl(4483,"td",24)(4484,"em")(4485,"strong"),eN(4486,"(opcional)"),og()(),Sl(4487,"p"),eN(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Sl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),eN(4493," optionsService"),Wl(4494,"br"),og()()(),Sl(4495,"td",21)(4496,"code",27),eN(4497,"string "),og(),Sl(4498,"code",75),eN(4499," PoComboFilter "),og(),Sl(4500,"code",76),eN(4501," PoMultiselectFilter"),og()(),Sl(4502,"td",24)(4503,"em")(4504,"strong"),eN(4505,"(opcional)"),og()(),Sl(4506,"p"),eN(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(4508,"strong"),eN(4509,"Importante"),og()(),Sl(4510,"blockquote")(4511,"p"),eN(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(4513,"a",7),eN(4514,"guia de API do PO UI"),og(),eN(4515,"."),og()()()(),Sl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),eN(4520," order"),Wl(4521,"br"),og()()(),Sl(4522,"td",21)(4523,"code",45),eN(4524,"number"),og()(),Sl(4525,"td",24)(4526,"em")(4527,"strong"),eN(4528,"(opcional)"),og()(),Sl(4529,"p"),eN(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Sl(4531,"p"),eN(4532,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(4533,"p")(4534,"code"),eN(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Sl(4536,"p"),eN(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Sl(4538,"code"),eN(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Sl(4540,"p"),eN(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Sl(4542,"p"),eN(4543,"Campos sem "),Sl(4544,"code"),eN(4545,"order"),og(),eN(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Sl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),eN(4551," params"),Wl(4552,"br"),og()()(),Sl(4553,"td",21)(4554,"code",33),eN(4555,"any"),og()(),Sl(4556,"td",24)(4557,"em")(4558,"strong"),eN(4559,"(opcional)"),og()(),Sl(4560,"p"),eN(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Sl(4562,"code"),eN(4563,"po-lookup"),og(),eN(4564,` e
`),Sl(4565,"code"),eN(4566,"po-combo"),og(),eN(4567,"."),og(),Sl(4568,"p"),eN(4569,"Por exemplo, para o par\xE2metro "),Sl(4570,"code"),eN(4571,"{ age: 23 }"),og(),eN(4572," a URL da requisi\xE7\xE3o ficaria:"),og(),Sl(4573,"p")(4574,"code"),eN(4575,"url + ?age=23&filter=Peter"),og()()()(),Sl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),eN(4580," pattern"),Wl(4581,"br"),og()()(),Sl(4582,"td",21)(4583,"code",27),eN(4584,"string"),og()(),Sl(4585,"td",24)(4586,"em")(4587,"strong"),eN(4588,"(opcional)"),og()(),Sl(4589,"p"),eN(4590,"Regex para valida\xE7\xE3o do campo."),og(),Sl(4591,"p")(4592,"strong"),eN(4593,"Componentes compat\xEDveis:"),og(),Sl(4594,"code"),eN(4595,"po-input"),og(),eN(4596,", "),Sl(4597,"code"),eN(4598,"po-password"),og(),eN(4599,"."),og()()(),Sl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),eN(4604," placeholder"),Wl(4605,"br"),og()()(),Sl(4606,"td",21)(4607,"code",27),eN(4608,"string"),og()(),Sl(4609,"td",24)(4610,"em")(4611,"strong"),eN(4612,"(opcional)"),og()(),Sl(4613,"p"),eN(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Sl(4615,"p")(4616,"strong"),eN(4617,"Componentes compat\xEDveis:"),og(),Sl(4618,"code"),eN(4619,"po-datepicker"),og(),eN(4620,", "),Sl(4621,"code"),eN(4622,"po-datepicker-range"),og(),eN(4623,", "),Sl(4624,"code"),eN(4625,"po-timepicker"),og(),eN(4626,", "),Sl(4627,"code"),eN(4628,"po-input"),og(),eN(4629,", "),Sl(4630,"code"),eN(4631,"po-number"),og(),eN(4632,", "),Sl(4633,"code"),eN(4634,"po-decimal"),og(),eN(4635,", "),Sl(4636,"code"),eN(4637,"po-select"),og(),eN(4638,", "),Sl(4639,"code"),eN(4640,"po-combo"),og(),eN(4641,", "),Sl(4642,"code"),eN(4643,"po-lookup"),og(),eN(4644,", "),Sl(4645,"code"),eN(4646,"po-multiselect"),og(),eN(4647,", "),Sl(4648,"code"),eN(4649,"po-textarea"),og(),eN(4650,", "),Sl(4651,"code"),eN(4652,"po-password"),og(),eN(4653,"."),og()()(),Sl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),eN(4658," placeholderSearch"),Wl(4659,"br"),og()()(),Sl(4660,"td",21)(4661,"code",27),eN(4662,"string"),og()(),Sl(4663,"td",24)(4664,"em")(4665,"strong"),eN(4666,"(opcional)"),og()(),Sl(4667,"p"),eN(4668,"Placeholder do campo de pesquisa do "),Sl(4669,"code"),eN(4670,"po-multiselect"),og(),eN(4671,"."),og(),Sl(4672,"blockquote")(4673,"p"),eN(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Sl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),eN(4679," property"),Wl(4680,"br"),og()()(),Sl(4681,"td",21)(4682,"code",27),eN(4683,"string"),og()(),Sl(4684,"td",24)(4685,"p"),eN(4686,"Nome de refer\xEAncia do campo."),og()()(),Sl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),eN(4691," range"),Wl(4692,"br"),og()()(),Sl(4693,"td",21)(4694,"code",29),eN(4695,"boolean"),og()(),Sl(4696,"td",24)(4697,"em")(4698,"strong"),eN(4699,"(opcional)"),og()(),Sl(4700,"p"),eN(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Sl(4702,"blockquote")(4703,"p"),eN(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Sl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),eN(4709," rangePresetOptions"),Wl(4710,"br"),og()()(),Sl(4711,"td",21)(4712,"code",77),eN(4713,"Array<PoCalendarRangePreset>"),og()(),Sl(4714,"td",24)(4715,"em")(4716,"strong"),eN(4717,"(opcional)"),og()(),Sl(4718,"p"),eN(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Sl(4720,"p"),eN(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Sl(4722,"code"),eN(4723,"PoCalendarRangePreset"),og(),eN(4724,"."),og(),Sl(4725,"p")(4726,"strong"),eN(4727,"Componente compat\xEDvel:"),og(),Sl(4728,"code"),eN(4729,"po-datepicker-range"),og()()()(),Sl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),eN(4734," rangePresets"),Wl(4735,"br"),og()()(),Sl(4736,"td",21)(4737,"code",29),eN(4738,"boolean "),og(),Sl(4739,"code",32),eN(4740," Array<string>"),og()(),Sl(4741,"td",24)(4742,"em")(4743,"strong"),eN(4744,"(opcional)"),og()(),Sl(4745,"p"),eN(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Sl(4747,"p"),eN(4748,"Aceita os seguintes valores:"),og(),Sl(4749,"ul")(4750,"li")(4751,"code"),eN(4752,"true"),og(),eN(4753,": exibe todos os presets padr\xE3o."),og(),Sl(4754,"li")(4755,"code"),eN(4756,"false"),og(),eN(4757,": n\xE3o exibe os presets padr\xE3o."),og(),Sl(4758,"li")(4759,"code"),eN(4760,"Array<string>"),og(),eN(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Sl(4762,"p")(4763,"strong"),eN(4764,"Componente compat\xEDvel:"),og(),Sl(4765,"code"),eN(4766,"po-datepicker-range"),og()()()(),Sl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),eN(4771," rangePresetsOrder"),Wl(4772,"br"),og()()(),Sl(4773,"td",21)(4774,"code",78),eN(4775,"'asc' "),og(),Sl(4776,"code",79),eN(4777," 'desc'"),og()(),Sl(4778,"td",24)(4779,"em")(4780,"strong"),eN(4781,"(opcional)"),og()(),Sl(4782,"p"),eN(4783,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Sl(4784,"p"),eN(4785,"Valores aceitos:"),og(),Sl(4786,"ul")(4787,"li")(4788,"code"),eN(4789,"'asc'"),og(),eN(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Sl(4791,"li")(4792,"code"),eN(4793,"'desc'"),og(),eN(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Sl(4795,"p")(4796,"strong"),eN(4797,"Componente compat\xEDvel:"),og(),Sl(4798,"code"),eN(4799,"po-datepicker-range"),og()()()(),Sl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),eN(4804," readonly"),Wl(4805,"br"),og()()(),Sl(4806,"td",21)(4807,"code",29),eN(4808,"boolean"),og()(),Sl(4809,"td",24)(4810,"em")(4811,"strong"),eN(4812,"(opcional)"),og()(),Sl(4813,"p"),eN(4814,"Indica que o campo ser\xE1 somente leitura."),og(),Sl(4815,"p")(4816,"strong"),eN(4817,"Componentes compat\xEDveis:"),og(),Sl(4818,"code"),eN(4819,"po-datepicker"),og(),eN(4820,", "),Sl(4821,"code"),eN(4822,"po-datepicker-range"),og(),eN(4823,", "),Sl(4824,"code"),eN(4825,"po-timepicker"),og(),eN(4826,", "),Sl(4827,"code"),eN(4828,"po-input"),og(),eN(4829,", "),Sl(4830,"code"),eN(4831,"po-number"),og(),eN(4832,`,
`),Sl(4833,"code"),eN(4834,"po-decimal"),og(),eN(4835,", "),Sl(4836,"code"),eN(4837,"po-select"),og(),eN(4838,", "),Sl(4839,"code"),eN(4840,"po-textarea"),og(),eN(4841,", "),Sl(4842,"code"),eN(4843,"po-password"),og(),eN(4844,"."),og()()(),Sl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),eN(4849," removeInitialFilter"),Wl(4850,"br"),og()()(),Sl(4851,"td",21)(4852,"code",29),eN(4853,"boolean"),og()(),Sl(4854,"td",24)(4855,"em")(4856,"strong"),eN(4857,"(opcional)"),og()(),Sl(4858,"p"),eN(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Sl(4860,"blockquote")(4861,"p"),eN(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Sl(4863,"p")(4864,"strong"),eN(4865,"Componente compat\xEDvel"),og(),eN(4866,": "),Sl(4867,"code"),eN(4868,"po-combo"),og()()()(),Sl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),eN(4873," required"),Wl(4874,"br"),og()()(),Sl(4875,"td",21)(4876,"code",29),eN(4877,"boolean"),og()(),Sl(4878,"td",24)(4879,"em")(4880,"strong"),eN(4881,"(opcional)"),og()(),Sl(4882,"p"),eN(4883,"Define a obrigatoriedade do campo."),og(),Sl(4884,"p")(4885,"strong"),eN(4886,"Componentes compat\xEDveis:"),og(),Sl(4887,"code"),eN(4888,"po-datepicker"),og(),eN(4889,", "),Sl(4890,"code"),eN(4891,"po-datepicker-range"),og(),eN(4892,", "),Sl(4893,"code"),eN(4894,"po-timepicker"),og(),eN(4895,", "),Sl(4896,"code"),eN(4897,"po-input"),og(),eN(4898,", "),Sl(4899,"code"),eN(4900,"po-number"),og(),eN(4901,`,
`),Sl(4902,"code"),eN(4903,"po-decimal"),og(),eN(4904,", "),Sl(4905,"code"),eN(4906,"po-select"),og(),eN(4907,", "),Sl(4908,"code"),eN(4909,"po-radio-group"),og(),eN(4910,", "),Sl(4911,"code"),eN(4912,"po-combo"),og(),eN(4913,", "),Sl(4914,"code"),eN(4915,"po-lookup"),og(),eN(4916,", "),Sl(4917,"code"),eN(4918,"po-checkbox-group"),og(),eN(4919,", "),Sl(4920,"code"),eN(4921,"po-multiselect"),og(),eN(4922,`,
`),Sl(4923,"code"),eN(4924,"po-textarea"),og(),eN(4925,", "),Sl(4926,"code"),eN(4927,"po-password``, "),og(),eN(4928,"po-upload`."),og()()(),Sl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),eN(4933," requiredFieldErrorMessage"),Wl(4934,"br"),og()()(),Sl(4935,"td",21)(4936,"code",29),eN(4937,"boolean"),og()(),Sl(4938,"td",24)(4939,"em")(4940,"strong"),eN(4941,"(opcional)"),og()(),Sl(4942,"p"),eN(4943,"Exibe a mensagem setada na propriedade "),Sl(4944,"code"),eN(4945,"errorMessage"),og(),eN(4946," se o campo estiver vazio e for requerido."),og(),Sl(4947,"blockquote")(4948,"p"),eN(4949,"Necess\xE1rio que a propriedade "),Sl(4950,"code"),eN(4951,"required"),og(),eN(4952," esteja habilitada."),og()(),Sl(4953,"p")(4954,"strong"),eN(4955,"Componentes compat\xEDveis:"),og(),Sl(4956,"code"),eN(4957,"po-datepicker"),og(),eN(4958,", "),Sl(4959,"code"),eN(4960,"po-timepicker"),og(),eN(4961,", "),Sl(4962,"code"),eN(4963,"po-input"),og(),eN(4964,", "),Sl(4965,"code"),eN(4966,"po-number"),og(),eN(4967,", "),Sl(4968,"code"),eN(4969,"po-decimal"),og(),eN(4970,", "),Sl(4971,"code"),eN(4972,"po-password"),og(),eN(4973,"."),og()()(),Sl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),eN(4978," restrictions"),Wl(4979,"br"),og()()(),Sl(4980,"td",21)(4981,"code",80),eN(4982,"PoUploadFileRestrictions"),og()(),Sl(4983,"td",24)(4984,"em")(4985,"strong"),eN(4986,"(opcional)"),og()(),Sl(4987,"p"),eN(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(4989,"code"),eN(4990,"PoUploadFileRestrictions"),og(),eN(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Sl(4992,"p")(4993,"strong"),eN(4994,"Componente compat\xEDvel"),og(),eN(4995,": "),Sl(4996,"code"),eN(4997,"po-upload"),og()()()(),Sl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),eN(5002," rows"),Wl(5003,"br"),og()()(),Sl(5004,"td",21)(5005,"code",45),eN(5006,"number"),og()(),Sl(5007,"td",24)(5008,"em")(5009,"strong"),eN(5010,"(opcional)"),og()(),Sl(5011,"p"),eN(5012,"Quantidade de linhas exibidas no "),Sl(5013,"code"),eN(5014,"po-textarea"),og(),eN(5015,"."),og()()(),Sl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),eN(5020," searchService"),Wl(5021,"br"),og()()(),Sl(5022,"td",21)(5023,"code",27),eN(5024,"string "),og(),Sl(5025,"code",34),eN(5026," PoLookupFilter"),og()(),Sl(5027,"td",24)(5028,"em")(5029,"strong"),eN(5030,"(opcional)"),og()(),Sl(5031,"p"),eN(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Sl(5033,"code"),eN(5034,"columns"),og(),eN(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Sl(5036,"strong"),eN(5037,"Importante:"),og()(),Sl(5038,"blockquote")(5039,"p"),eN(5040,"Caso utilizar a propriedade "),Sl(5041,"code"),eN(5042,"optionsService"),og(),eN(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(5044,"a",7),eN(5045,"guia de API do PO UI"),og(),eN(5046,"."),og()()()(),Sl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),eN(5051," secondInterval"),Wl(5052,"br"),og()()(),Sl(5053,"td",21)(5054,"code",45),eN(5055,"number"),og()(),Sl(5056,"td",24)(5057,"em")(5058,"strong"),eN(5059,"(opcional)"),og()(),Sl(5060,"p"),eN(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Sl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),eN(5066," secret"),Wl(5067,"br"),og()()(),Sl(5068,"td",21)(5069,"code",29),eN(5070,"boolean"),og()(),Sl(5071,"td",24)(5072,"em")(5073,"strong"),eN(5074,"(opcional)"),og()(),Sl(5075,"p"),eN(5076,"Esconde a informa\xE7\xE3o estilo "),Sl(5077,"em"),eN(5078,"password"),og(),eN(5079,", pode ser utilizado quando o tipo de dado for "),Sl(5080,"em"),eN(5081,"string"),og(),eN(5082,"."),og()()(),Sl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),eN(5087," showRequired"),Wl(5088,"br"),og()()(),Sl(5089,"td",21)(5090,"code",29),eN(5091,"boolean"),og()(),Sl(5092,"td",24)(5093,"em")(5094,"strong"),eN(5095,"(opcional)"),og()(),Sl(5096,"p"),eN(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(5098,"blockquote")(5099,"p"),eN(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(5101,"ul")(5102,"li"),eN(5103,"N\xE3o possuir "),Sl(5104,"code"),eN(5105,"p-help"),og(),eN(5106," e/ou "),Sl(5107,"code"),eN(5108,"p-label"),og(),eN(5109,"."),og()(),Sl(5110,"p")(5111,"strong"),eN(5112,"Componentes compat\xEDveis:"),og(),Sl(5113,"code"),eN(5114,"po-datepicker"),og(),eN(5115,", "),Sl(5116,"code"),eN(5117,"po-datepicker-range"),og(),eN(5118,", "),Sl(5119,"code"),eN(5120,"po-timepicker"),og(),eN(5121,", "),Sl(5122,"code"),eN(5123,"po-input"),og(),eN(5124,", "),Sl(5125,"code"),eN(5126,"po-number"),og(),eN(5127,`,
`),Sl(5128,"code"),eN(5129,"po-decimal"),og(),eN(5130,", "),Sl(5131,"code"),eN(5132,"po-select"),og(),eN(5133,", "),Sl(5134,"code"),eN(5135,"po-radio-group"),og(),eN(5136,", "),Sl(5137,"code"),eN(5138,"po-combo"),og(),eN(5139,", "),Sl(5140,"code"),eN(5141,"po-lookup"),og(),eN(5142,", "),Sl(5143,"code"),eN(5144,"po-checkbox-group"),og(),eN(5145,", "),Sl(5146,"code"),eN(5147,"po-multiselect"),og(),eN(5148,`,
`),Sl(5149,"code"),eN(5150,"po-textarea"),og(),eN(5151,", "),Sl(5152,"code"),eN(5153,"po-password"),og(),eN(5154,", "),Sl(5155,"code"),eN(5156,"po-upload"),og(),eN(5157,"."),og()()(),Sl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),eN(5162," showSeconds"),Wl(5163,"br"),og()()(),Sl(5164,"td",21)(5165,"code",29),eN(5166,"boolean"),og()(),Sl(5167,"td",24)(5168,"em")(5169,"strong"),eN(5170,"(opcional)"),og()(),Sl(5171,"p"),eN(5172,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Sl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),eN(5177," showThumbnail"),Wl(5178,"br"),og()()(),Sl(5179,"td",21)(5180,"code",29),eN(5181,"boolean"),og()(),Sl(5182,"td",24)(5183,"em")(5184,"strong"),eN(5185,"(opcional)"),og()(),Sl(5186,"p"),eN(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Sl(5188,"blockquote")(5189,"p"),eN(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(5191,"code"),eN(5192,".png"),og(),eN(5193,", "),Sl(5194,"code"),eN(5195,".jpg"),og(),eN(5196,", "),Sl(5197,"code"),eN(5198,".jpeg"),og(),eN(5199," e "),Sl(5200,"code"),eN(5201,".gif"),og(),eN(5202,")."),og()(),Sl(5203,"p")(5204,"strong"),eN(5205,"Componente compat\xEDvel"),og(),eN(5206,": "),Sl(5207,"code"),eN(5208,"po-upload"),og()()()(),Sl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),eN(5213," size"),Wl(5214,"br"),og()()(),Sl(5215,"td",21)(5216,"code",27),eN(5217,"string"),og()(),Sl(5218,"td",24)(5219,"em")(5220,"strong"),eN(5221,"(opcional)"),og()(),Sl(5222,"p"),eN(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Sl(5224,"ul")(5225,"li")(5226,"code"),eN(5227,"small"),og(),eN(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(5229,"li")(5230,"code"),eN(5231,"medium"),og(),eN(5232,": aplica a medida medium de cada componente."),og(),Sl(5233,"li")(5234,"code"),eN(5235,"large"),og(),eN(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Sl(5237,"code"),eN(5238,"po-checkbox"),og(),eN(5239," e "),Sl(5240,"code"),eN(5241,"po-radio-group"),og(),eN(5242,")."),Sl(5243,"blockquote")(5244,"p"),eN(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(5246,"code"),eN(5247,"medium"),og(),eN(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(5249,"a",40),eN(5250,"po-theme"),og(),eN(5251,"."),og()()()()()(),Sl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),eN(5256," sort"),Wl(5257,"br"),og()()(),Sl(5258,"td",21)(5259,"code",29),eN(5260,"boolean"),og()(),Sl(5261,"td",24)(5262,"em")(5263,"strong"),eN(5264,"(opcional)"),og()(),Sl(5265,"p"),eN(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Sl(5267,"p")(5268,"strong"),eN(5269,"Componentes compat\xEDveis:"),og(),Sl(5270,"code"),eN(5271,"po-combo"),og(),eN(5272,", po-multiselect"),og()()(),Sl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),eN(5277," step"),Wl(5278,"br"),og()()(),Sl(5279,"td",21)(5280,"code",45),eN(5281,"number"),og()(),Sl(5282,"td",24)(5283,"em")(5284,"strong"),eN(5285,"(opcional)"),og()(),Sl(5286,"p"),eN(5287,"Intervalo utilizado no "),Sl(5288,"code"),eN(5289,"po-number"),og(),eN(5290,"."),og()()(),Sl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),eN(5295," thousandMaxlength"),Wl(5296,"br"),og()()(),Sl(5297,"td",21)(5298,"code",45),eN(5299,"number"),og()(),Sl(5300,"td",24)(5301,"em")(5302,"strong"),eN(5303,"(opcional)"),og()(),Sl(5304,"p"),eN(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Sl(5306,"blockquote")(5307,"p"),eN(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(5309,"code"),eN(5310,"type"),og(),eN(5311," for "),Sl(5312,"em"),eN(5313,"currency"),og(),eN(5314," ou "),Sl(5315,"em"),eN(5316,"decimal"),og(),eN(5317,"."),og()()()(),Sl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),eN(5322," type"),Wl(5323,"br"),og()()(),Sl(5324,"td",21)(5325,"code",27),eN(5326,"string "),og(),Sl(5327,"code",81),eN(5328," PoDynamicFieldType"),og()(),Sl(5329,"td",24)(5330,"em")(5331,"strong"),eN(5332,"(opcional)"),og()(),Sl(5333,"p"),eN(5334,"Tipo do valor campo."),og(),Sl(5335,"p"),eN(5336,"Valores v\xE1lidos:"),og(),Sl(5337,"ul")(5338,"li")(5339,"code"),eN(5340,"boolean"),og(),eN(5341,": Valores "),Sl(5342,"em"),eN(5343,"booleanos"),og(),eN(5344,"."),og(),Sl(5345,"li")(5346,"code"),eN(5347,"currency"),og(),eN(5348,": Valores monet\xE1rios."),og(),Sl(5349,"li")(5350,"code"),eN(5351,"decimal"),og(),eN(5352,": Valores decimais."),og(),Sl(5353,"li")(5354,"code"),eN(5355,"date"),og(),eN(5356,": Valores de datas."),Sl(5357,"ul")(5358,"li"),eN(5359,"Aceita os tipos "),Sl(5360,"strong"),eN(5361,"string"),og(),eN(5362," e "),Sl(5363,"strong"),eN(5364,"Date"),og(),eN(5365,` padr\xE3o do Javascript,
por exemplo: `),Sl(5366,"code"),eN(5367,"'2017-11-28'"),og(),eN(5368," ou "),Sl(5369,"code"),eN(5370,"new Date(2017, 10, 28)"),og(),eN(5371,"."),og()()(),Sl(5372,"li")(5373,"code"),eN(5374,"dateTime"),og(),eN(5375,": Valor de data com hor\xE1rio."),Sl(5376,"ul")(5377,"li"),eN(5378,"Aceita o tipo "),Sl(5379,"em"),eN(5380,"string"),og(),eN(5381," no formato "),Sl(5382,"strong"),eN(5383,"ISO-8601"),og(),eN(5384," extendido "),Sl(5385,"strong"),eN(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),eN(5387,`
e o tipo `),Sl(5388,"strong"),eN(5389,"Date"),og(),eN(5390," padr\xE3o do Javascript, por exemplo: "),Sl(5391,"code"),eN(5392,"'2017-11-28T00:00:00-02:00'"),og(),eN(5393," ou "),Sl(5394,"code"),eN(5395,"new Date(2017, 10, 28)"),og(),eN(5396,"."),og()()(),Sl(5397,"li")(5398,"code"),eN(5399,"number"),og(),eN(5400,": Valores num\xE9ricos."),og(),Sl(5401,"li")(5402,"code"),eN(5403,"string"),og(),eN(5404,": Textos."),og(),Sl(5405,"li")(5406,"code"),eN(5407,"time"),og(),eN(5408,": Valor do hor\xE1rio."),Sl(5409,"ul")(5410,"li"),eN(5411,"Aceita o tipo "),Sl(5412,"strong"),eN(5413,"string"),og(),eN(5414," nos formatos "),Sl(5415,"strong"),eN(5416,"'HH:mm:ss'"),og(),eN(5417," ou "),Sl(5418,"strong"),eN(5419,"'HH:mm:ss.ffffff'"),og(),eN(5420,", por exemplo: "),Sl(5421,"code"),eN(5422,"'23:12:45'"),og(),eN(5423,"."),og()()()()()(),Sl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),eN(5428," url"),Wl(5429,"br"),og()()(),Sl(5430,"td",21)(5431,"code",27),eN(5432,"string"),og()(),Sl(5433,"td",24)(5434,"em")(5435,"strong"),eN(5436,"(opcional)"),og()(),Sl(5437,"p"),eN(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Sl(5439,"p")(5440,"strong"),eN(5441,"Componente compat\xEDvel"),og(),eN(5442,": "),Sl(5443,"code"),eN(5444,"po-upload"),og()()()(),Sl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),eN(5449," validate"),Wl(5450,"br"),og()()(),Sl(5451,"td",21)(5452,"code",27),eN(5453,"string "),og(),Sl(5454,"code",44),eN(5455," Function"),og()(),Sl(5456,"td",24)(5457,"em")(5458,"strong"),eN(5459,"(opcional)"),og()(),Sl(5460,"p"),eN(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(5462,"strong"),eN(5463,"mudan\xE7as do campo"),og(),eN(5464,"."),og(),Sl(5465,"ul")(5466,"li"),eN(5467,"A propriedade aceita os seguintes tipos:"),og()(),Sl(5468,"ul")(5469,"li")(5470,"strong"),eN(5471,"String"),og(),eN(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(5473,"code"),eN(5474,"POST"),og(),eN(5475,"."),og(),Sl(5476,"li")(5477,"strong"),eN(5478,"Function"),og(),eN(5479,": M\xE9todo que ser\xE1 executado."),og()(),Sl(5480,"p"),eN(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Sl(5482,"code"),eN(5483,"PoDynamicFormFieldChanged"),og(),eN(5484,":"),og(),Sl(5485,"p")(5486,"code"),eN(5487,"{ property: 'property name', value: 'new value' }"),og()(),Sl(5488,"p"),eN(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(5490,"a",82),eN(5491,"PoDynamicFormFieldValidation"),og(),eN(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Sl(5493,"pre")(5494,"code"),eN(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Sl(5496,"p"),eN(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(5498,"code"),eN(5499,"bind"),og(),eN(5500,`, por exemplo:
`),Sl(5501,"code"),eN(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Sl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),eN(5507," visible"),Wl(5508,"br"),og()()(),Sl(5509,"td",21)(5510,"code",29),eN(5511,"boolean"),og()(),Sl(5512,"td",24)(5513,"em")(5514,"strong"),eN(5515,"(opcional)"),og()(),Sl(5516,"p"),eN(5517,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Sl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),eN(5522," yearRangeLimit"),Wl(5523,"br"),og()()(),Sl(5524,"td",21)(5525,"code",45),eN(5526,"number"),og()(),Sl(5527,"td",24)(5528,"em")(5529,"strong"),eN(5530,"(opcional)"),og()(),Sl(5531,"p"),eN(5532,"Define o limite de anos exibidos na lista de anos do "),Sl(5533,"code"),eN(5534,"po-datepicker"),og(),eN(5535," nos modos "),Sl(5536,"code"),eN(5537,"month-year"),og(),eN(5538," e "),Sl(5539,"code"),eN(5540,"year"),og(),eN(5541,"."),og()()()(),Sl(5542,"h4",43)(5543,"code",5),eN(5544,"PoLookupColumn"),og()(),Sl(5545,"div",2)(5546,"p"),eN(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),og()(),Sl(5548,"h4",12),eN(5549,"Propriedades"),og(),Sl(5550,"table",13)(5551,"tr",14)(5552,"th",15),eN(5553,"Nome"),og(),Sl(5554,"th",15),eN(5555,"Tipo"),og(),Sl(5556,"th",15),eN(5557,"Descri\xE7\xE3o"),og()(),Sl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),eN(5562," fieldLabel"),Wl(5563,"br"),og()()(),Sl(5564,"td",21)(5565,"code",29),eN(5566,"boolean"),og()(),Sl(5567,"td",24)(5568,"em")(5569,"strong"),eN(5570,"(opcional)"),og()(),Sl(5571,"p"),eN(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),og(),Sl(5573,"p"),eN(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),og(),Sl(5575,"p"),eN(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Sl(5577,"code"),eN(5578,"p-field-format"),og(),eN(5579," ou "),Sl(5580,"code"),eN(5581,"p-field-label"),og(),eN(5582," forem configurados no componente."),og()()(),Sl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),eN(5587," format"),Wl(5588,"br"),og()()(),Sl(5589,"td",21)(5590,"code",27),eN(5591,"string"),og()(),Sl(5592,"td",24)(5593,"em")(5594,"strong"),eN(5595,"(opcional)"),og()(),Sl(5596,"p"),eN(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Sl(5598,"ul")(5599,"li"),eN(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og(),Sl(5601,"li"),eN(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()()()(),Sl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),eN(5607," label"),Wl(5608,"br"),og()()(),Sl(5609,"td",21)(5610,"code",27),eN(5611,"string"),og()(),Sl(5612,"td",24)(5613,"em")(5614,"strong"),eN(5615,"(opcional)"),og()(),Sl(5616,"p"),eN(5617,"Texto para t\xEDtulo da coluna."),og(),Sl(5618,"p"),eN(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(5620,"em"),eN(5621,"label"),og(),eN(5622," o valor da propriedade "),Sl(5623,"em"),eN(5624,"property"),og(),eN(5625," com a primeira letra em mai\xFAsculo."),og()()(),Sl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),eN(5630," property"),Wl(5631,"br"),og()()(),Sl(5632,"td",21)(5633,"code",27),eN(5634,"string"),og()(),Sl(5635,"td",24)(5636,"em")(5637,"strong"),eN(5638,"(opcional)"),og()(),Sl(5639,"p"),eN(5640,"Nome identificador da coluna."),og()()(),Sl(5641,"tr",16)(5642,"td",17)(5643,"div",25)(5644,"span",26),eN(5645," type"),Wl(5646,"br"),og()()(),Sl(5647,"td",21)(5648,"code",27),eN(5649,"string"),og()(),Sl(5650,"td",24)(5651,"em")(5652,"strong"),eN(5653,"(opcional)"),og()(),Sl(5654,"p"),eN(5655,"Tipo da coluna:"),og(),Sl(5656,"ul")(5657,"li"),eN(5658,"string (padr\xE3o): textos"),og(),Sl(5659,"li"),eN(5660,"number: valores num\xE9ricos"),og(),Sl(5661,"li"),eN(5662,"date: data"),og(),Sl(5663,"li"),eN(5664,"currency: valores monet\xE1rios"),og(),Sl(5665,"li"),eN(5666,"dateTime: data e hora"),og()()()(),Sl(5667,"tr",16)(5668,"td",17)(5669,"div",25)(5670,"span",26),eN(5671," width"),Wl(5672,"br"),og()()(),Sl(5673,"td",21)(5674,"code",27),eN(5675,"string"),og()(),Sl(5676,"td",24)(5677,"em")(5678,"strong"),eN(5679,"(opcional)"),og()(),Sl(5680,"p"),eN(5681,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),og()()()(),Sl(5682,"h4",43)(5683,"code",5),eN(5684,"PoLookupFilter"),og()(),Sl(5685,"div",2)(5686,"p"),eN(5687,"Define o tipo de busca utilizado no po-lookup."),og()(),Sl(5688,"h4",12),eN(5689,"M\xE9todos"),og(),Sl(5690,"table",41)(5691,"tr",16)(5692,"th",42)(5693,"div",25)(5694,"h4")(5695,"span",26),eN(5696," getFilteredItems "),og()()()()(),Sl(5697,"tr",24)(5698,"td",24)(5699,"p"),eN(5700,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Sl(5701,"em"),eN(5702,"Observable"),og(),eN(5703," com a resposta da API no formato da interface "),Sl(5704,"code"),eN(5705,"PoLookupResponseApi"),og(),eN(5706,"."),og()()()(),Sl(5707,"h5")(5708,"b"),eN(5709,"Par\xE2metros"),og()(),Sl(5710,"table",13)(5711,"tr",14)(5712,"th",15),eN(5713,"Nome"),og(),Sl(5714,"th",15),eN(5715,"Tipo"),og(),Sl(5716,"th",15),eN(5717,"Descri\xE7\xE3o"),og()(),Sl(5718,"tr",16)(5719,"td",17),eN(5720," params"),og(),Sl(5721,"td",21)(5722,"code",83),eN(5723," PoLookupFilteredItemsParams "),og()(),Sl(5724,"td",24)(5725,"p"),eN(5726,"Objeto enviado por par\xE2metro que implementa a interface "),Sl(5727,"code"),eN(5728,"PoLookupFilteredItemsParams"),og(),eN(5729,"."),og()()()(),Wl(5730,"br"),Sl(5731,"table",41)(5732,"tr",16)(5733,"th",42)(5734,"div",25)(5735,"h4")(5736,"span",26),eN(5737," getObjectByValue "),og()()()()(),Sl(5738,"tr",24)(5739,"td",24)(5740,"p"),eN(5741,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og(),Sl(5742,"p"),eN(5743,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),og()()()(),Sl(5744,"h5")(5745,"b"),eN(5746,"Par\xE2metros"),og()(),Sl(5747,"table",13)(5748,"tr",14)(5749,"th",15),eN(5750,"Nome"),og(),Sl(5751,"th",15),eN(5752,"Tipo"),og(),Sl(5753,"th",15),eN(5754,"Descri\xE7\xE3o"),og()(),Sl(5755,"tr",16)(5756,"td",17),eN(5757," value"),og(),Sl(5758,"td",21)(5759,"code",27),eN(5760," string "),og(),Sl(5761,"code",74),eN(5762," Array<any> "),og()(),Sl(5763,"td",24)(5764,"p"),eN(5765,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Sl(5766,"tr",16)(5767,"td",17),eN(5768," filterParams"),og(),Sl(5769,"td",21)(5770,"code",83),eN(5771," any "),og()(),Sl(5772,"td",24)(5773,"p"),eN(5774,"Valor informado atrav\xE9s da propriedade "),Sl(5775,"code"),eN(5776,"p-filter-params"),og(),eN(5777,"."),og()()()(),Wl(5778,"br"),Sl(5779,"h4",43)(5780,"code",5),eN(5781,"PoLookupFilteredItemsParams"),og()(),Sl(5782,"div",2)(5783,"p"),eN(5784,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Sl(5785,"code"),eN(5786,"getFilteredItems"),og(),eN(5787,"."),og()(),Sl(5788,"h4",12),eN(5789,"Propriedades"),og(),Sl(5790,"table",13)(5791,"tr",14)(5792,"th",15),eN(5793,"Nome"),og(),Sl(5794,"th",15),eN(5795,"Tipo"),og(),Sl(5796,"th",15),eN(5797,"Descri\xE7\xE3o"),og()(),Sl(5798,"tr",16)(5799,"td",17)(5800,"div",25)(5801,"span",26),eN(5802," advancedFilters"),Wl(5803,"br"),og()()(),Sl(5804,"td",21)(5805,"code",84),eN(5806,`{ [key: string]: any;
}`),og()(),Sl(5807,"td",24)(5808,"em")(5809,"strong"),eN(5810,"(opcional)"),og()(),Sl(5811,"p"),eN(5812,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),og()()(),Sl(5813,"tr",16)(5814,"td",17)(5815,"div",25)(5816,"span",26),eN(5817," filter"),Wl(5818,"br"),og()()(),Sl(5819,"td",21)(5820,"code",27),eN(5821,"string"),og()(),Sl(5822,"td",24)(5823,"em")(5824,"strong"),eN(5825,"(opcional)"),og()(),Sl(5826,"p"),eN(5827,"Conte\xFAdo utilizado para filtrar a lista de itens."),og()()(),Sl(5828,"tr",16)(5829,"td",17)(5830,"div",25)(5831,"span",26),eN(5832," filterParams"),Wl(5833,"br"),og()()(),Sl(5834,"td",21)(5835,"code",33),eN(5836,"any"),og()(),Sl(5837,"td",24)(5838,"em")(5839,"strong"),eN(5840,"(opcional)"),og()(),Sl(5841,"p"),eN(5842,"Valor informado atrav\xE9s da propriedade "),Sl(5843,"code"),eN(5844,"p-filter-params"),og(),eN(5845,"."),og()()(),Sl(5846,"tr",16)(5847,"td",17)(5848,"div",25)(5849,"span",26),eN(5850," order"),Wl(5851,"br"),og()()(),Sl(5852,"td",21)(5853,"code",27),eN(5854,"string"),og()(),Sl(5855,"td",24)(5856,"em")(5857,"strong"),eN(5858,"(opcional)"),og()(),Sl(5859,"p"),eN(5860,"Coluna que est\xE1 sendo ordenada na tabela."),og(),Sl(5861,"ul")(5862,"li"),eN(5863,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Sl(5864,"code"),eN(5865,"-<colunaOrdenada>"),og(),eN(5866,", por exemplo "),Sl(5867,"code"),eN(5868,"-name"),og(),eN(5869,"."),og(),Sl(5870,"li"),eN(5871,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Sl(5872,"code"),eN(5873,"<colunaOrdenada>"),og(),eN(5874,", por exemplo "),Sl(5875,"code"),eN(5876,"name"),og(),eN(5877,"."),og()()()(),Sl(5878,"tr",16)(5879,"td",17)(5880,"div",25)(5881,"span",26),eN(5882," page"),Wl(5883,"br"),og()()(),Sl(5884,"td",21)(5885,"code",45),eN(5886,"number"),og()(),Sl(5887,"td",24)(5888,"em")(5889,"strong"),eN(5890,"(opcional)"),og()(),Sl(5891,"p"),eN(5892,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),og()()(),Sl(5893,"tr",16)(5894,"td",17)(5895,"div",25)(5896,"span",26),eN(5897," pageSize"),Wl(5898,"br"),og()()(),Sl(5899,"td",21)(5900,"code",45),eN(5901,"number"),og()(),Sl(5902,"td",24)(5903,"em")(5904,"strong"),eN(5905,"(opcional)"),og()(),Sl(5906,"p"),eN(5907,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),og()()()(),Sl(5908,"h4",43)(5909,"code",5),eN(5910,"PoLookupLiterals"),og()(),Sl(5911,"div",2)(5912,"p"),eN(5913,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(5914,"code"),eN(5915,"po-lookup"),og(),eN(5916,"."),og()(),Sl(5917,"h4",12),eN(5918,"Propriedades"),og(),Sl(5919,"table",13)(5920,"tr",14)(5921,"th",15),eN(5922,"Nome"),og(),Sl(5923,"th",15),eN(5924,"Tipo"),og(),Sl(5925,"th",15),eN(5926,"Descri\xE7\xE3o"),og()(),Sl(5927,"tr",16)(5928,"td",17)(5929,"div",25)(5930,"span",26),eN(5931," clean"),Wl(5932,"br"),og()()(),Sl(5933,"td",21)(5934,"code",27),eN(5935,"string"),og()(),Sl(5936,"td",24)(5937,"em")(5938,"strong"),eN(5939,"(opcional)"),og()(),Sl(5940,"p"),eN(5941,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),og()()(),Sl(5942,"tr",16)(5943,"td",17)(5944,"div",25)(5945,"span",26),eN(5946," modalAdvancedSearch"),Wl(5947,"br"),og()()(),Sl(5948,"td",21)(5949,"code",27),eN(5950,"string"),og()(),Sl(5951,"td",24)(5952,"em")(5953,"strong"),eN(5954,"(opcional)"),og()(),Sl(5955,"p"),eN(5956,"Texto do link de busca avan\xE7ada."),og(),Sl(5957,"p"),eN(5958,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),og()()(),Sl(5959,"tr",16)(5960,"td",17)(5961,"div",25)(5962,"span",26),eN(5963," modalAdvancedSearchPrimaryActionLabel"),Wl(5964,"br"),og()()(),Sl(5965,"td",21)(5966,"code",27),eN(5967,"string"),og()(),Sl(5968,"td",24)(5969,"em")(5970,"strong"),eN(5971,"(opcional)"),og()(),Sl(5972,"p"),eN(5973,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),og()()(),Sl(5974,"tr",16)(5975,"td",17)(5976,"div",25)(5977,"span",26),eN(5978," modalAdvancedSearchSecondaryActionLabel"),Wl(5979,"br"),og()()(),Sl(5980,"td",21)(5981,"code",27),eN(5982,"string"),og()(),Sl(5983,"td",24)(5984,"em")(5985,"strong"),eN(5986,"(opcional)"),og()(),Sl(5987,"p"),eN(5988,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),og()()(),Sl(5989,"tr",16)(5990,"td",17)(5991,"div",25)(5992,"span",26),eN(5993," modalAdvancedSearchTitle"),Wl(5994,"br"),og()()(),Sl(5995,"td",21)(5996,"code",27),eN(5997,"string"),og()(),Sl(5998,"td",24)(5999,"em")(6e3,"strong"),eN(6001,"(opcional)"),og()(),Sl(6002,"p"),eN(6003,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),og()()(),Sl(6004,"tr",16)(6005,"td",17)(6006,"div",25)(6007,"span",26),eN(6008," modalDisclaimerGroupTitle"),Wl(6009,"br"),og()()(),Sl(6010,"td",21)(6011,"code",27),eN(6012,"string"),og()(),Sl(6013,"td",24)(6014,"em")(6015,"strong"),eN(6016,"(opcional)"),og()(),Sl(6017,"p"),eN(6018,"Texto exibido no t\xEDtulo do disclaimer."),og()()(),Sl(6019,"tr",16)(6020,"td",17)(6021,"div",25)(6022,"span",26),eN(6023," modalPlaceholder"),Wl(6024,"br"),og()()(),Sl(6025,"td",21)(6026,"code",27),eN(6027,"string"),og()(),Sl(6028,"td",24)(6029,"em")(6030,"strong"),eN(6031,"(opcional)"),og()(),Sl(6032,"p"),eN(6033,"Texto exibido no placeholder do input da modal."),og()()(),Sl(6034,"tr",16)(6035,"td",17)(6036,"div",25)(6037,"span",26),eN(6038," modalPrimaryActionLabel"),Wl(6039,"br"),og()()(),Sl(6040,"td",21)(6041,"code",27),eN(6042,"string"),og()(),Sl(6043,"td",24)(6044,"em")(6045,"strong"),eN(6046,"(opcional)"),og()(),Sl(6047,"p"),eN(6048,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),og()()(),Sl(6049,"tr",16)(6050,"td",17)(6051,"div",25)(6052,"span",26),eN(6053," modalSecondaryActionLabel"),Wl(6054,"br"),og()()(),Sl(6055,"td",21)(6056,"code",27),eN(6057,"string"),og()(),Sl(6058,"td",24)(6059,"em")(6060,"strong"),eN(6061,"(opcional)"),og()(),Sl(6062,"p"),eN(6063,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),og()()(),Sl(6064,"tr",16)(6065,"td",17)(6066,"div",25)(6067,"span",26),eN(6068," modalTableLoadMoreData"),Wl(6069,"br"),og()()(),Sl(6070,"td",21)(6071,"code",27),eN(6072,"string"),og()(),Sl(6073,"td",24)(6074,"em")(6075,"strong"),eN(6076,"(opcional)"),og()(),Sl(6077,"p"),eN(6078,"Label do "),Sl(6079,"code"),eN(6080,"button"),og(),eN(6081," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),og()()(),Sl(6082,"tr",16)(6083,"td",17)(6084,"div",25)(6085,"span",26),eN(6086," modalTableLoadingData"),Wl(6087,"br"),og()()(),Sl(6088,"td",21)(6089,"code",27),eN(6090,"string"),og()(),Sl(6091,"td",24)(6092,"em")(6093,"strong"),eN(6094,"(opcional)"),og()(),Sl(6095,"p"),eN(6096,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Sl(6097,"tr",16)(6098,"td",17)(6099,"div",25)(6100,"span",26),eN(6101," modalTableNoColumns"),Wl(6102,"br"),og()()(),Sl(6103,"td",21)(6104,"code",27),eN(6105,"string"),og()(),Sl(6106,"td",24)(6107,"em")(6108,"strong"),eN(6109,"(opcional)"),og()(),Sl(6110,"p"),eN(6111,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Sl(6112,"tr",16)(6113,"td",17)(6114,"div",25)(6115,"span",26),eN(6116," modalTableNoData"),Wl(6117,"br"),og()()(),Sl(6118,"td",21)(6119,"code",27),eN(6120,"string"),og()(),Sl(6121,"td",24)(6122,"em")(6123,"strong"),eN(6124,"(opcional)"),og()(),Sl(6125,"p"),eN(6126,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Sl(6127,"tr",16)(6128,"td",17)(6129,"div",25)(6130,"span",26),eN(6131," modalTitle"),Wl(6132,"br"),og()()(),Sl(6133,"td",21)(6134,"code",27),eN(6135,"string"),og()(),Sl(6136,"td",24)(6137,"em")(6138,"strong"),eN(6139,"(opcional)"),og()(),Sl(6140,"p"),eN(6141,"Texto exibido no t\xEDtulo da modal."),og()()(),Sl(6142,"tr",16)(6143,"td",17)(6144,"div",25)(6145,"span",26),eN(6146," search"),Wl(6147,"br"),og()()(),Sl(6148,"td",21)(6149,"code",27),eN(6150,"string"),og()(),Sl(6151,"td",24)(6152,"em")(6153,"strong"),eN(6154,"(opcional)"),og()(),Sl(6155,"p"),eN(6156,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),og()()()(),Sl(6157,"h4",43)(6158,"code",5),eN(6159,"PoLookupResponseApi"),og()(),Sl(6160,"div",2)(6161,"p"),eN(6162,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),og()(),Sl(6163,"h4",12),eN(6164,"Propriedades"),og(),Sl(6165,"table",13)(6166,"tr",14)(6167,"th",15),eN(6168,"Nome"),og(),Sl(6169,"th",15),eN(6170,"Tipo"),og(),Sl(6171,"th",15),eN(6172,"Descri\xE7\xE3o"),og()(),Sl(6173,"tr",16)(6174,"td",17)(6175,"div",25)(6176,"span",26),eN(6177," hasNext"),Wl(6178,"br"),og()()(),Sl(6179,"td",21)(6180,"code",29),eN(6181,"boolean"),og()(),Sl(6182,"td",24)(6183,"p"),eN(6184,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),og()()(),Sl(6185,"tr",16)(6186,"td",17)(6187,"div",25)(6188,"span",26),eN(6189," items"),Wl(6190,"br"),og()()(),Sl(6191,"td",21)(6192,"code",85),eN(6193,"Array<object>"),og()(),Sl(6194,"td",24)(6195,"p"),eN(6196,"Lista de itens retornados."),og()()()(),Sl(6197,"h3"),eN(6198,"Enums"),og(),Sl(6199,"h4",4)(6200,"code",5),eN(6201,"PoTableColumnSpacing"),og()(),Sl(6202,"div",2)(6203,"p"),eN(6204,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Sl(6205,"strong"),eN(6206,"p-spacing"),og(),eN(6207,") do po-table."),og()(),Sl(6208,"h4",12),eN(6209,"Propriedades"),og(),Sl(6210,"table",13)(6211,"tr",14)(6212,"th",15),eN(6213,"Nome"),og(),Sl(6214,"th",15),eN(6215,"Descri\xE7\xE3o"),og()(),Sl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),eN(6220," ExtraSmall"),Wl(6221,"br"),og()()(),Sl(6222,"td",24)(6223,"p"),eN(6224,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Sl(6225,"tr",16)(6226,"td",17)(6227,"div",25)(6228,"span",26),eN(6229," Small"),Wl(6230,"br"),og()()(),Sl(6231,"td",24)(6232,"p"),eN(6233,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Sl(6234,"tr",16)(6235,"td",17)(6236,"div",25)(6237,"span",26),eN(6238," Medium"),Wl(6239,"br"),og()()(),Sl(6240,"td",24)(6241,"p"),eN(6242,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Sl(6243,"tr",16)(6244,"td",17)(6245,"div",25)(6246,"span",26),eN(6247," Large"),Wl(6248,"br"),og()()(),Sl(6249,"td",24)(6250,"p"),eN(6251,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var We=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-lookup-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),og()()()),l&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,Me,_e,Oe,Ie,ze,Be,Re],encapsulation:2})}return a})();var xt=[{path:"",component:We}],Ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[hL.forChild(xt),hL]})}return a})();var Ii=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ue]})}return a})();export{Ii as DocPoLookupModule};