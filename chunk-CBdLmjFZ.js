import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,r as rb,c_ as t,a as r$1,I,c$ as Xi,aW as Yp,cM as tY,cN as lm,G,b$ as bT,t as N,bi as ay,d0 as J0,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,aI as dc,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aJ as Whe,b5 as Ghe,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,Q as we,bd as kx,a7 as pN,cQ as xk,cR as Rk,b7 as M3,d1 as kO,a4 as EN,aq as px,br as lN,a5 as CN,at as gx,a3 as sNe,aA as xx,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Wl(0,"po-lookup",0);},dependencies:[J0],encapsulation:2,changeDetection:1})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-lookup-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Xe,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,_e],encapsulation:2,changeDetection:1})}return a})();var j=(()=>{class a{httpClient=f(rb);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,s=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},s),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Oe=(()=>{class a{sampleFilterService=f(j);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Xi.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we([j])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let s=Ix();Sl(0,"po-lookup",1),Cw("ngModelChange",function(m){return Ky(s),oN(o.lookup,m)||(o.lookup=m),Xy(m)}),ft("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"po-container",2)(3,"div",3),Wl(4,"po-info",4)(5,"po-info",5),og()(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",6),Cw("ngModelChange",function(m){return Ky(s),oN(o.label,m)||(o.label=m),Xy(m)}),og(),n0(),Sl(10,"po-checkbox-group",7),Cw("ngModelChange",function(m){return Ky(s),oN(o.columnsName,m)||(o.columnsName=m),Xy(m)}),ft("p-change",function(){return o.updateColumns()}),og(),n0(),Sl(11,"po-select",8),Cw("ngModelChange",function(m){return Ky(s),oN(o.fieldLabel,m)||(o.fieldLabel=m),Xy(m)}),og(),n0(),Sl(12,"po-select",9),Cw("ngModelChange",function(m){return Ky(s),oN(o.fieldValue,m)||(o.fieldValue=m),Xy(m)}),og(),n0(),Sl(13,"po-input",10),Cw("ngModelChange",function(m){return Ky(s),oN(o.filterService,m)||(o.filterService=m),Xy(m)}),og(),n0(),Sl(14,"po-input",11),Cw("ngModelChange",function(m){return Ky(s),oN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Xy(m)}),og(),n0(),Sl(15,"po-input",12),Cw("ngModelChange",function(m){return Ky(s),oN(o.help,m)||(o.help=m),Xy(m)}),og(),n0(),Sl(16,"po-input",13),Cw("ngModelChange",function(m){return Ky(s),oN(o.helperText,m)||(o.helperText=m),Xy(m)}),og(),n0(),Sl(17,"po-input",14),Cw("ngModelChange",function(m){return Ky(s),oN(o.placeholder,m)||(o.placeholder=m),Xy(m)}),og(),n0(),Sl(18,"po-input",15),Cw("ngModelChange",function(m){return Ky(s),oN(o.literals,m)||(o.literals=m),Xy(m)}),ft("p-change",function(){return o.changeLiterals()}),og(),n0(),Sl(19,"po-input",16),Cw("ngModelChange",function(m){return Ky(s),oN(o.formatField,m)||(o.formatField=m),Xy(m)}),ft("p-change",function(m){return o.onFieldFormatChange(m)}),og(),n0(),Sl(20,"po-checkbox-group",17),Cw("ngModelChange",function(m){return Ky(s),oN(o.properties,m)||(o.properties=m),Xy(m)}),og(),n0(),Sl(21,"po-radio-group",18),Cw("ngModelChange",function(m){return Ky(s),oN(o.spacing,m)||(o.spacing=m),Xy(m)}),og(),n0(),Sl(22,"po-radio-group",19),Cw("ngModelChange",function(m){return Ky(s),oN(o.size,m)||(o.size=m),Xy(m)}),og(),n0(),Sl(23,"po-textarea",20),Cw("ngModelChange",function(m){return Ky(s),oN(o.advancedFilters,m)||(o.advancedFilters=m),Xy(m)}),ft("p-change",function(){return o.changeAdvancedFilters()}),og(),n0(),Sl(24,"div",3)(25,"po-button",21),ft("p-click",function(){return o.restore()}),og()()();}l&2&&(ww("ngModel",o.lookup),rw("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),i0(),Lp(4),rw("p-value",o.lookup),Lp(),rw("p-value",o.event),Lp(4),ww("ngModel",o.label),i0(),Lp(),ww("ngModel",o.columnsName),rw("p-options",o.columnsOptions),i0(),Lp(),ww("ngModel",o.fieldLabel),rw("p-options",o.fieldLabelOptions),i0(),Lp(),ww("ngModel",o.fieldValue),rw("p-options",o.fieldValueOptions),i0(),Lp(),ww("ngModel",o.filterService),i0(),Lp(),ww("ngModel",o.fieldErrorMessage),i0(),Lp(),ww("ngModel",o.help),i0(),Lp(),ww("ngModel",o.helperText),i0(),Lp(),ww("ngModel",o.placeholder),i0(),Lp(),ww("ngModel",o.literals),i0(),Lp(),ww("ngModel",o.formatField),i0(),Lp(),ww("ngModel",o.properties),rw("p-options",o.propertiesOptions),i0(),Lp(),ww("ngModel",o.spacing),rw("p-options",o.typeSpacing),i0(),Lp(),ww("ngModel",o.size),rw("p-options",o.sizeOptions),i0(),Lp(),ww("ngModel",o.advancedFilters),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,dc,mv,b3,L3,J0,Tde,Whe,Ghe,jhe],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-lookup
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),rN(22,"sample-po-lookup.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-labs"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,tt,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Oe],encapsulation:2,changeDetection:1})}return a})();var it=()=>({modalTitle:"Heroes available for mission"}),Ie=(()=>{class a{service=f(j);notification=f(Yp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we([j])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let s=Ix();Sl(0,"div",1),Wl(1,"po-info",2),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),Cw("ngModelChange",function(m){return Ky(s),oN(o.hero,m)||(o.hero=m),Xy(m)}),og(),n0(),Sl(7,"po-select",4),Cw("ngModelChange",function(m){return Ky(s),oN(o.vehicle,m)||(o.vehicle=m),Xy(m)}),og(),n0(),og(),Sl(8,"div",1)(9,"po-button",5),ft("p-click",function(){return o.startMission()}),og()()();}if(l&2){let s=kx(4);Lp(6),ww("ngModel",o.hero),rw("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",pN(10,it)),i0(),Lp(),ww("ngModel",o.vehicle),rw("p-options",o.vehicles),i0(),Lp(2),rw("p-disabled",s.form.invalid||s.form.pending);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,J0,Whe,jhe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup - Hero"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),rN(22,"sample-po-lookup.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-hero"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,at,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ie],encapsulation:2,changeDetection:1})}return a})();var rt=()=>["nickname","label"],mt=()=>({modalTitle:"Heroes available for mission"}),ze=(()=>{class a{service=f(j);notification=f(Yp);formBuilder=f(tY);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,lm.required],vehicle:[null,lm.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we([j])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Sl(0,"div",0),Wl(1,"po-info",1),og(),Wl(2,"po-divider"),Sl(3,"form",2)(4,"div",0),Wl(5,"po-lookup",3),n0(),Wl(6,"po-select",4),n0(),og(),Sl(7,"div",0)(8,"po-button",5),ft("p-click",function(){return o.startMission()}),og()()()),l&2&&(Lp(3),rw("formGroup",o.formMission),Lp(2),rw("p-columns",o.columns)("p-field-format",pN(7,rt))("p-filter-service",o.service)("p-literals",pN(8,mt)),i0(),Lp(),rw("p-options",o.vehicles),i0(),Lp(2),rw("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[Q9,Z9,K9,xk,Rk,Qt,mv,J0,Whe,jhe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup - Hero Reactive Form"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-lookup.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-hero-reactive-form"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,pt,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ze],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=f(rb);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(G(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(G(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ct(a,yt){if(a&1&&(Sl(0,"div",0),Wl(1,"po-table",3),og()),a&2){let r=xx();Lp(),rw("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ne=(()=>{class a{filterService=f(se);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we([se])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-radio-group",1),Cw("ngModelChange",function(p){return oN(o.filterParams,p)||(o.filterParams=p),p}),og(),n0(),og(),Wl(2,"po-divider"),Sl(3,"div",0)(4,"po-lookup",2),EN(5,"titlecase"),Cw("ngModelChange",function(p){return oN(o.entity,p)||(o.entity=p),p}),ft("p-selected",function(p){return o.onSelected(p)}),og(),n0(),og(),px(6,ct,2,4,"div",0)),l&2&&(Lp(),ww("ngModel",o.filterParams),rw("p-options",o.entities),i0(),Lp(3),rw("p-help",lN("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",lN("",CN(5,12,o.entityLabel)," of Star Wars")),ww("ngModel",o.entity),rw("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),i0(),Lp(2),gx(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[Z9,wk,mv,J0,Tde,M3,kO],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup - Star Wars films"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-sw-films"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Et,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ne],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{http=f(rb);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(bT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var We=(()=>{class a{service=f(Re);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-lookup",1),Cw("ngModelChange",function(p){return oN(o.multiLookup,p)||(o.multiLookup=p),p}),ft("p-change",function(p){return o.changeOptions(p)}),og(),n0(),Sl(2,"po-container",2),Wl(3,"po-table",3),og()()),l&2&&(Lp(),ww("ngModel",o.multiLookup),rw("p-multiple",true),i0(),Lp(2),rw("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[Z9,wk,dc,J0,M3],encapsulation:2,changeDetection:1})}return a})();var bt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup - Multiple"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),rN(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-multiple"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,bt,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,We],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:"Maria Silva",cpf:"12345678901",phone:"11999887766",cep:"89201000",plate:"ABC1D23"},{value:2,name:"Jo\xE3o Santos",cpf:"98765432100",phone:"21988776655",cep:"01310100",plate:"XYZ4E56"},{value:3,name:"Ana Oliveira",cpf:"11122233344",phone:"47912345678",cep:"80010000",plate:"MNO7F89"},{value:4,name:"Carlos Souza",cpf:"55566677788",phone:"41987654321",cep:"88010000",plate:"QRS2G01"},{value:5,name:"Fernanda Lima",cpf:"99988877766",phone:"48991234567",cep:"89010000",plate:"DEF3H45"}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():"",o=l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items];return N({items:o,hasNext:false}).pipe(ay(200))}getObjectByValue(r){return Array.isArray(r)?N(this.items.filter(l=>r.includes(l.value))).pipe(ay(200)):N(this.items.find(l=>String(l.value)===String(r))).pipe(ay(200))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac})}return a})();var Ge=(()=>{class a{service=f(ce);person;columns=[{property:"name",label:"Nome"},{property:"cpf",label:"CPF",mask:"999.999.999-99"},{property:"phone",label:"Telefone",mask:"(99) 99999-9999"},{property:"cep",label:"CEP",mask:"99999-999"},{property:"plate",label:"Placa",mask:"@@@ 9w99"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-mask"]],standalone:false,features:[we([ce])],decls:2,vars:4,consts:[[1,"po-row"],["name","person","p-field-label","name","p-field-value","value","p-label","Pessoa","p-help","Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-filter-service","p-hide-columns-manager"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-lookup",1),Cw("ngModelChange",function(p){return oN(o.person,p)||(o.person=p),p}),og(),n0(),og()),l&2&&(Lp(),ww("ngModel",o.person),rw("p-columns",o.columns)("p-filter-service",o.service)("p-hide-columns-manager",true),i0());},dependencies:[Z9,wk,J0],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-mask-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Lookup - Mask"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-lookup-mask/sample-po-lookup-mask.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
  <po-lookup
    name="person"
    class="po-md-12"
    [(ngModel)]="person"
    p-field-label="name"
    p-field-value="value"
    p-label="Pessoa"
    p-help="Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas"
    [p-columns]="columns"
    [p-filter-service]="service"
    [p-hide-columns-manager]="true"
  >
  </po-lookup>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-lookup-mask/sample-po-lookup-mask.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn } from '@po-ui/ng-components';

import { SamplePoLookupMaskService } from './sample-po-lookup-mask.service';

@Component({
  selector: 'sample-po-lookup-mask',
  templateUrl: './sample-po-lookup-mask.component.html',
  providers: [SamplePoLookupMaskService],
  standalone: false
})
export class SamplePoLookupMaskComponent {
  service = inject(SamplePoLookupMaskService);

  person: string;

  readonly columns: Array<PoLookupColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99' },
    { property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' },
    { property: 'cep', label: 'CEP', mask: '99999-999' },
    { property: 'plate', label: 'Placa', mask: '@@@ 9w99' }
  ];
}
`),og(),Sl(21,"label",6),rN(22,"sample-po-lookup-mask/sample-po-lookup-mask.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PoLookupFilter, PoLookupFilteredItemsParams, PoLookupResponseApi } from '@po-ui/ng-components';

@Injectable()
export class SamplePoLookupMaskService implements PoLookupFilter {
  private readonly items = [
    { value: 1, name: 'Maria Silva', cpf: '12345678901', phone: '11999887766', cep: '89201000', plate: 'ABC1D23' },
    { value: 2, name: 'Jo\xE3o Santos', cpf: '98765432100', phone: '21988776655', cep: '01310100', plate: 'XYZ4E56' },
    { value: 3, name: 'Ana Oliveira', cpf: '11122233344', phone: '47912345678', cep: '80010000', plate: 'MNO7F89' },
    { value: 4, name: 'Carlos Souza', cpf: '55566677788', phone: '41987654321', cep: '88010000', plate: 'QRS2G01' },
    { value: 5, name: 'Fernanda Lima', cpf: '99988877766', phone: '48991234567', cep: '89010000', plate: 'DEF3H45' }
  ];

  getFilteredItems(params: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const filter = params.filter ? params.filter.toLowerCase() : '';

    const filtered = filter
      ? this.items.filter(
          item =>
            item.name.toLowerCase().includes(filter) ||
            item.cpf.includes(filter) ||
            item.phone.includes(filter) ||
            item.cep.includes(filter) ||
            item.plate.toLowerCase().includes(filter)
        )
      : [...this.items];

    return of({ items: filtered, hasNext: false }).pipe(delay(200));
  }

  getObjectByValue(value: string | Array<any>): Observable<any> {
    if (Array.isArray(value)) {
      return of(this.items.filter(item => value.includes(item.value))).pipe(delay(200));
    }
    return of(this.items.find(item => String(item.value) === String(value))).pipe(delay(200));
  }
}
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-mask"),og(),Wl(27,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ht,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Ge],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6326,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoLookupComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Sl(24,"code"),rN(25,"po-lookup"),og(),rN(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Sl(27,"em"),rN(28,"TAB"),og(),rN(29,` para
buscar um registro.`),og(),Sl(30,"blockquote")(31,"p"),rN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),og()(),Sl(33,"blockquote")(34,"p"),rN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Sl(36,"a",6),rN(37,"modelo"),og(),rN(38," como "),Sl(39,"code"),rN(40,"pending"),og(),rN(41,"."),og()(),Sl(42,"p"),rN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Sl(44,"code"),rN(45,"po-select"),og(),rN(46," ou o "),Sl(47,"code"),rN(48,"po-combo"),og(),rN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(50,"a",7),rN(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),og(),rN(52,"."),og(),Sl(53,"p"),rN(54,"Importante:"),og(),Sl(55,"ul")(56,"li"),rN(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Sl(58,"pre")(59,"code"),rN(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),og()()()(),Sl(61,"h4"),rN(62,"Tokens customiz\xE1veis"),og(),Sl(63,"p"),rN(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(65,"blockquote")(66,"p"),rN(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(68,"a",8),rN(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(70,"."),og()(),Sl(71,"table")(72,"thead")(73,"tr")(74,"th"),rN(75,"Propriedade"),og(),Sl(76,"th"),rN(77,"Descri\xE7\xE3o"),og(),Sl(78,"th"),rN(79,"Valor Padr\xE3o"),og()()(),Sl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),rN(84,"Default Values"),og()(),Wl(85,"td")(86,"td"),og(),Sl(87,"tr")(88,"td")(89,"code"),rN(90,"--font-family"),og()(),Sl(91,"td"),rN(92,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(93,"td")(94,"code"),rN(95,"var(--font-family-theme)"),og()()(),Sl(96,"tr")(97,"td")(98,"code"),rN(99,"--font-size"),og()(),Sl(100,"td"),rN(101,"Tamanho da fonte"),og(),Sl(102,"td")(103,"code"),rN(104,"var(--font-size-default)"),og()()(),Sl(105,"tr")(106,"td")(107,"code"),rN(108,"--text-color-placeholder"),og()(),Sl(109,"td"),rN(110,"Cor do texto no placeholder"),og(),Sl(111,"td")(112,"code"),rN(113,"var(--color-neutral-light-30)"),og()()(),Sl(114,"tr")(115,"td")(116,"code"),rN(117,"--color"),og()(),Sl(118,"td"),rN(119,"Cor principal do lookup"),og(),Sl(120,"td")(121,"code"),rN(122,"var(--color-neutral-dark-70)"),og()()(),Sl(123,"tr")(124,"td")(125,"code"),rN(126,"--border-radius"),og()(),Sl(127,"td"),rN(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(129,"td")(130,"code"),rN(131,"var(--border-radius-md)"),og()()(),Sl(132,"tr")(133,"td")(134,"code"),rN(135,"--background"),og()(),Sl(136,"td"),rN(137,"Cor de background"),og(),Sl(138,"td")(139,"code"),rN(140,"var(--color-neutral-light-05)"),og()()(),Sl(141,"tr")(142,"td")(143,"code"),rN(144,"--text-color"),og()(),Sl(145,"td"),rN(146,"Cor do texto"),og(),Sl(147,"td")(148,"code"),rN(149,"var(--color-neutral-dark-90)"),og()()(),Sl(150,"tr")(151,"td")(152,"code"),rN(153,"--color-clear"),og()(),Sl(154,"td"),rN(155,"Cor principal do icone clear"),og(),Sl(156,"td")(157,"code"),rN(158,"var(--color-action-default)"),og()()(),Sl(159,"tr")(160,"td")(161,"strong"),rN(162,"Icon"),og()(),Wl(163,"td")(164,"td"),og(),Sl(165,"tr")(166,"td")(167,"code"),rN(168,"--color-icon"),og()(),Sl(169,"td"),rN(170,"Cor principal do icone pesquisar"),og(),Sl(171,"td")(172,"code"),rN(173,"var(--color-action-default)"),og()()(),Sl(174,"tr")(175,"td")(176,"strong"),rN(177,"Hover"),og()(),Wl(178,"td")(179,"td"),og(),Sl(180,"tr")(181,"td")(182,"code"),rN(183,"--color-hover"),og()(),Sl(184,"td"),rN(185,"Cor principal no estado hover"),og(),Sl(186,"td")(187,"code"),rN(188,"var(--color-brand-01-dark)"),og()()(),Sl(189,"tr")(190,"td")(191,"code"),rN(192,"--background-hover"),og()(),Sl(193,"td"),rN(194,"Cor de background no estado hover"),og(),Sl(195,"td")(196,"code"),rN(197,"var(--color-brand-01-lightest)"),og()()(),Sl(198,"tr")(199,"td")(200,"strong"),rN(201,"Focused"),og()(),Wl(202,"td")(203,"td"),og(),Sl(204,"tr")(205,"td")(206,"code"),rN(207,"--color-focused"),og()(),Sl(208,"td"),rN(209,"Cor principal no estado de focus"),og(),Sl(210,"td")(211,"code"),rN(212,"var(--color-action-default)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),rN(216,"--outline-color-focused"),og()(),Sl(217,"td"),rN(218,"Cor do outline do estado de focus"),og(),Sl(219,"td")(220,"code"),rN(221,"var(--color-action-focus)"),og()()(),Sl(222,"tr")(223,"td")(224,"strong"),rN(225,"Disabled"),og()(),Wl(226,"td")(227,"td"),og(),Sl(228,"tr")(229,"td")(230,"code"),rN(231,"--color-disabled"),og()(),Sl(232,"td"),rN(233,"Cor principal no estado disabled"),og(),Sl(234,"td")(235,"code"),rN(236,"var(--color-action-disabled)"),og()()(),Sl(237,"tr")(238,"td")(239,"code"),rN(240,"--background-disabled"),og()(),Sl(241,"td"),rN(242,"Cor de background no estado disabled"),og(),Sl(243,"td")(244,"code"),rN(245,"var(--color-neutral-light-20)"),og()()(),Sl(246,"tr")(247,"td")(248,"code"),rN(249,"--text-color-disabled"),og()(),Sl(250,"td"),rN(251,"Cor do texto quando campo est\xE1 desabilitado"),og(),Sl(252,"td")(253,"code"),rN(254,"var(--color-action-disabled)"),og()()(),Sl(255,"tr")(256,"td")(257,"strong"),rN(258,"Error"),og()(),Wl(259,"td")(260,"td"),og(),Sl(261,"tr")(262,"td")(263,"code"),rN(264,"--color-error"),og()(),Sl(265,"td"),rN(266,"Cor de background no estado de requerido"),og(),Sl(267,"td")(268,"code"),rN(269,"var(--color-feedback-negative-base)"),og()()()()()(),Sl(270,"div",9)(271,"h4",10),rN(272,"Seletor"),og(),Sl(273,"pre",11),rN(274,`<po-lookup
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
`),og()(),Sl(275,"h4",12),rN(276,"Propriedades"),og(),Sl(277,"table",13)(278,"tr",14)(279,"th",15),rN(280,"Nome"),og(),Sl(281,"th",15),rN(282,"Tipo"),og(),Sl(283,"th",15),rN(284,"Padr\xE3o"),og(),Sl(285,"th",15),rN(286,"Descri\xE7\xE3o"),og()(),Sl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),rN(291," (p-additional-help)"),Wl(292,"br"),og()(),Sl(293,"div",20),rN(294,"Deprecated"),og()(),Sl(295,"td",21)(296,"code",22),rN(297,"EventEmitter"),og()(),Sl(298,"td",23),rN(299,"-"),og(),Sl(300,"td",24)(301,"em")(302,"strong"),rN(303,"(opcional)"),og()(),Sl(304,"p"),rN(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(306,"blockquote")(307,"p"),rN(308,"Essa propriedade est\xE1 "),Sl(309,"strong"),rN(310,"depreciada"),og(),rN(311," e ser\xE1 removida na vers\xE3o "),Sl(312,"code"),rN(313,"23.x.x"),og(),rN(314,". Recomendamos utilizar a propriedade "),Sl(315,"code"),rN(316,"p-helper"),og(),rN(317," que oferece mais recursos e flexibilidade."),og()()()(),Sl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),rN(322," p-additional-help-tooltip"),Wl(323,"br"),og()(),Sl(324,"div",20),rN(325,"Deprecated"),og()(),Sl(326,"td",21)(327,"code",27),rN(328,"string"),og()(),Sl(329,"td",23),rN(330,"-"),og(),Sl(331,"td",24)(332,"em")(333,"strong"),rN(334,"(opcional)"),og()(),Sl(335,"p"),rN(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(337,"code"),rN(338,"po-helper"),og(),rN(339,`.
`),Sl(340,"strong"),rN(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(342,"blockquote")(343,"p"),rN(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(345,"blockquote")(346,"p"),rN(347,"Essa propriedade est\xE1 "),Sl(348,"strong"),rN(349,"depreciada"),og(),rN(350," e ser\xE1 removida na vers\xE3o "),Sl(351,"code"),rN(352,"23.x.x"),og(),rN(353,". Recomendamos utilizar a propriedade "),Sl(354,"code"),rN(355,"p-helper"),og(),rN(356," que oferece mais recursos e flexibilidade."),og()()()(),Sl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),rN(361," p-advanced-filters"),Wl(362,"br"),og()()(),Sl(363,"td",21)(364,"code",28),rN(365,"Array<PoLookupAdvancedFilter>"),og()(),Sl(366,"td",23),rN(367,"-"),og(),Sl(368,"td",24)(369,"em")(370,"strong"),rN(371,"(opcional)"),og()(),Sl(372,"p"),rN(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Sl(374,"blockquote")(375,"p"),rN(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Sl(377,"p"),rN(378,"Exemplo de URL com busca avan\xE7ada:"),og(),Sl(379,"pre")(380,"code"),rN(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),og()(),Sl(382,"p"),rN(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),og(),Sl(384,"pre")(385,"code"),rN(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),og()()()(),Sl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),rN(391," p-append-in-body"),Wl(392,"br"),og()()(),Sl(393,"td",21)(394,"code",29),rN(395,"boolean"),og()(),Sl(396,"td",23)(397,"p")(398,"code"),rN(399,"false"),og()()(),Sl(400,"td",24)(401,"em")(402,"strong"),rN(403,"(opcional)"),og()(),Sl(404,"p"),rN(405,"Define que o popover ("),Sl(406,"code"),rN(407,"p-helper"),og(),rN(408," e/ou "),Sl(409,"code"),rN(410,"p-error-limit"),og(),rN(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(412,"blockquote")(413,"p"),rN(414,"Quando utilizado com "),Sl(415,"code"),rN(416,"p-helper"),og(),rN(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),rN(422," p-auto-focus"),Wl(423,"br"),og()()(),Sl(424,"td",21)(425,"code",29),rN(426,"boolean"),og()(),Sl(427,"td",23)(428,"p")(429,"code"),rN(430,"false"),og()()(),Sl(431,"td",24)(432,"em")(433,"strong"),rN(434,"(opcional)"),og()(),Sl(435,"p"),rN(436,"Aplica foco no elemento ao ser iniciado."),og(),Sl(437,"blockquote")(438,"p"),rN(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),rN(444," p-auto-height"),Wl(445,"br"),og()()(),Sl(446,"td",21)(447,"code",29),rN(448,"boolean"),og()(),Sl(449,"td",23)(450,"p")(451,"code"),rN(452,"false"),og()()(),Sl(453,"td",24)(454,"em")(455,"strong"),rN(456,"(opcional)"),og()(),Sl(457,"p"),rN(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),og()()(),Sl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),rN(463," (p-change)"),Wl(464,"br"),og()()(),Sl(465,"td",21)(466,"code",22),rN(467,"EventEmitter"),og()(),Sl(468,"td",23),rN(469,"-"),og(),Sl(470,"td",24)(471,"em")(472,"strong"),rN(473,"(opcional)"),og()(),Sl(474,"p"),rN(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),og()()(),Sl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),rN(480," (p-change-visible-columns)"),Wl(481,"br"),og()()(),Sl(482,"td",21)(483,"code",22),rN(484,"EventEmitter"),og()(),Sl(485,"td",23),rN(486,"-"),og(),Sl(487,"td",24)(488,"em")(489,"strong"),rN(490,"(opcional)"),og()(),Sl(491,"p"),rN(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(493,"p"),rN(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),rN(499," p-clean"),Wl(500,"br"),og()()(),Sl(501,"td",21)(502,"code",29),rN(503,"boolean"),og()(),Sl(504,"td",23),rN(505,"-"),og(),Sl(506,"td",24)(507,"p"),rN(508,"Exibe um \xEDcone que permite limpar o campo."),og()()(),Sl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),rN(513," (p-restore-column-manager)"),Wl(514,"br"),og()()(),Sl(515,"td",21)(516,"code",22),rN(517,"EventEmitter"),og()(),Sl(518,"td",23),rN(519,"-"),og(),Sl(520,"td",24)(521,"em")(522,"strong"),rN(523,"(opcional)"),og()(),Sl(524,"p"),rN(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(526,"p"),rN(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Sl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),rN(532," p-columns"),Wl(533,"br"),og()()(),Sl(534,"td",21)(535,"code",30),rN(536,"Array<PoLookupColumn>"),og()(),Sl(537,"td",23),rN(538,"-"),og(),Sl(539,"td",24)(540,"em")(541,"strong"),rN(542,"(opcional)"),og()(),Sl(543,"p"),rN(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),og()()(),Sl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),rN(549," p-compact-label"),Wl(550,"br"),og()()(),Sl(551,"td",21)(552,"code",29),rN(553,"boolean"),og()(),Sl(554,"td",23)(555,"p")(556,"code"),rN(557,"false"),og()()(),Sl(558,"td",24)(559,"em")(560,"strong"),rN(561,"(opcional)"),og()(),Sl(562,"p"),rN(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(564,"p"),rN(565,"Quando habilitado ("),Sl(566,"code"),rN(567,"true"),og(),rN(568,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(569,"ul")(570,"li")(571,"code"),rN(572,"po-label"),og()(),Sl(573,"li")(574,"code"),rN(575,"p-requirement (showRequired)"),og()(),Sl(576,"li")(577,"code"),rN(578,"po-helper"),og()()(),Sl(579,"p"),rN(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(581,"p"),rN(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(583,"ul")(584,"li")(585,"code"),rN(586,"--field-container-title-justify"),og()(),Sl(587,"li")(588,"code"),rN(589,"--field-container-title-flex"),og()()(),Sl(590,"p"),rN(591,"Exemplo:"),og(),Sl(592,"pre")(593,"code"),rN(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(595,"p"),rN(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),rN(601," p-disabled"),Wl(602,"br"),og()()(),Sl(603,"td",21)(604,"code",29),rN(605,"boolean"),og()(),Sl(606,"td",23)(607,"p"),rN(608,"false"),og()(),Sl(609,"td",24)(610,"em")(611,"strong"),rN(612,"(opcional)"),og()(),Sl(613,"p"),rN(614,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),rN(619," p-error-limit"),Wl(620,"br"),og()()(),Sl(621,"td",21)(622,"code",29),rN(623,"boolean"),og()(),Sl(624,"td",23)(625,"p")(626,"code"),rN(627,"false"),og()()(),Sl(628,"td",24)(629,"em")(630,"strong"),rN(631,"(opcional)"),og()(),Sl(632,"p"),rN(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(634,"blockquote")(635,"p"),rN(636,"Caso essa propriedade seja definida como "),Sl(637,"code"),rN(638,"true"),og(),rN(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Sl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),rN(644," p-field-error-message"),Wl(645,"br"),og()()(),Sl(646,"td",21)(647,"code",27),rN(648,"string"),og()(),Sl(649,"td",23),rN(650,"-"),og(),Sl(651,"td",24)(652,"em")(653,"strong"),rN(654,"(opcional)"),og()(),Sl(655,"p"),rN(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Sl(657,"blockquote")(658,"p"),rN(659,"Necess\xE1rio que a propriedade "),Sl(660,"code"),rN(661,"p-required"),og(),rN(662," esteja habilitada."),og()()()(),Sl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),rN(667," p-field-format"),Wl(668,"br"),og()()(),Sl(669,"td",21)(670,"code",31),rN(671,"((value) => string) "),og(),Sl(672,"code",32),rN(673," Array<string>"),og()(),Sl(674,"td",23),rN(675,"-"),og(),Sl(676,"td",24)(677,"em")(678,"strong"),rN(679,"(opcional)"),og()(),Sl(680,"p"),rN(681,"Formato de exibi\xE7\xE3o do campo."),og(),Sl(682,"p"),rN(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Sl(684,"em"),rN(685,"string"),og(),rN(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),og(),Sl(687,"pre")(688,"code"),rN(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),og()(),Sl(690,"blockquote")(691,"p"),rN(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Sl(693,"code"),rN(694,"p-field-label"),og(),rN(695," na descri\xE7\xE3o do campo."),og()(),Sl(696,"p"),rN(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),og(),Sl(698,"pre")(699,"code"),rN(700,`<po-lookup
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
`),og()(),Sl(701,"blockquote")(702,"p"),rN(703,"Ser\xE1 utilizado "),Sl(704,"code"),rN(705,"-"),og(),rN(706," como separador."),og()()()(),Sl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),rN(711," p-field-label"),Wl(712,"br"),og()()(),Sl(713,"td",21)(714,"code",27),rN(715,"string"),og()(),Sl(716,"td",23),rN(717,"-"),og(),Sl(718,"td",24)(719,"p"),rN(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),og()()(),Sl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),rN(725," p-field-value"),Wl(726,"br"),og()()(),Sl(727,"td",21)(728,"code",27),rN(729,"string"),og()(),Sl(730,"td",23),rN(731,"-"),og(),Sl(732,"td",24)(733,"p"),rN(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),og(),Sl(735,"blockquote")(736,"p"),rN(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),og()()()(),Sl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),rN(742," p-filter-params"),Wl(743,"br"),og()()(),Sl(744,"td",21)(745,"code",33),rN(746,"any"),og()(),Sl(747,"td",23),rN(748,"-"),og(),Sl(749,"td",24)(750,"em")(751,"strong"),rN(752,"(opcional)"),og()(),Sl(753,"p"),rN(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Sl(755,"code"),rN(756,"PoLookupFilter"),og(),rN(757,"."),og()()(),Sl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),rN(762," p-filter-service"),Wl(763,"br"),og()()(),Sl(764,"td",21)(765,"code",27),rN(766,"string "),og(),Sl(767,"code",34),rN(768," PoLookupFilter"),og()(),Sl(769,"td",23),rN(770,"-"),og(),Sl(771,"td",24)(772,"p"),rN(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Sl(774,"code"),rN(775,"PoLookupFilter"),og(),rN(776," ou uma URL."),og(),Sl(777,"p"),rN(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),og(),Sl(779,"pre")(780,"code"),rN(781,`url + ?page=1&pageSize=20&filter=Peter
`),og()(),Sl(782,"p"),rN(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Sl(784,"code"),rN(785,"order"),og(),rN(786,", por exemplo:"),og(),Sl(787,"ul")(788,"li")(789,"p"),rN(790,"Coluna decrescente:"),og(),Sl(791,"pre")(792,"code"),rN(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),og()()(),Sl(794,"li")(795,"p"),rN(796,"Coluna ascendente:"),og(),Sl(797,"pre")(798,"code"),rN(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),og()()()(),Sl(800,"p"),rN(801,"Se for definido a propriedade "),Sl(802,"code"),rN(803,"p-filter-params"),og(),rN(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Sl(805,"code"),rN(806,"{ age: 23 }"),og(),rN(807," a URL ficaria:"),og(),Sl(808,"pre")(809,"code"),rN(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()(),Sl(811,"p"),rN(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),og(),Sl(813,"pre")(814,"code"),rN(815,`model = 1234;

GET url/1234
`),og()(),Sl(816,"p"),rN(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),og(),Sl(818,"pre")(819,"code"),rN(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),og()(),Sl(821,"blockquote")(822,"p"),rN(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(824,"a",7),rN(825,"API do PO UI"),og(),rN(826,` e utiliza os valores
definidos nas propriedades `),Sl(827,"code"),rN(828,"p-field-label"),og(),rN(829," e "),Sl(830,"code"),rN(831,"p-field-value"),og(),rN(832," para a constru\xE7\xE3o do "),Sl(833,"code"),rN(834,"po-lookup"),og(),rN(835,"."),og()(),Sl(836,"p"),rN(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Sl(838,"em"),rN(839,"TAB"),og(),rN(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Sl(841,"a",35),rN(842,"encodeURIComponent"),og(),rN(843,`
e concatenado na URL da seguinte forma:`),og(),Sl(844,"pre")(845,"code"),rN(846,`url/valor%20que%20se%20deseja%20filtrar
`),og()(),Sl(847,"blockquote")(848,"p"),rN(849,"Quando informado um servi\xE7o que implemente a interface "),Sl(850,"code"),rN(851,"PoLookupFilter"),og(),rN(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),og()()()(),Sl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),rN(857," p-help"),Wl(858,"br"),og()()(),Sl(859,"td",21)(860,"code",27),rN(861,"string"),og()(),Sl(862,"td",23),rN(863,"-"),og(),Sl(864,"td",24)(865,"em")(866,"strong"),rN(867,"(opcional)"),og()(),Sl(868,"p"),rN(869,"Texto de apoio do campo."),og()()(),Sl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),rN(874," p-hide-columns-manager"),Wl(875,"br"),og()()(),Sl(876,"td",21)(877,"code",29),rN(878,"boolean"),og()(),Sl(879,"td",23)(880,"p")(881,"code"),rN(882,"false"),og()()(),Sl(883,"td",24)(884,"em")(885,"strong"),rN(886,"(opcional)"),og()(),Sl(887,"p"),rN(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Sl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),rN(893," p-infinite-scroll"),Wl(894,"br"),og()()(),Sl(895,"td",21)(896,"code",29),rN(897,"boolean"),og()(),Sl(898,"td",23)(899,"p")(900,"code"),rN(901,"false"),og()()(),Sl(902,"td",24)(903,"em")(904,"strong"),rN(905,"(opcional)"),og()(),Sl(906,"p"),rN(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),og()()(),Sl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),rN(912," (p-keydown)"),Wl(913,"br"),og()()(),Sl(914,"td",21)(915,"code",22),rN(916,"EventEmitter"),og()(),Sl(917,"td",23),rN(918,"-"),og(),Sl(919,"td",24)(920,"em")(921,"strong"),rN(922,"(opcional)"),og()(),Sl(923,"p"),rN(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(925,"code"),rN(926,"KeyboardEvent"),og(),rN(927," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),rN(932," p-label"),Wl(933,"br"),og()()(),Sl(934,"td",21)(935,"code",27),rN(936,"string"),og()(),Sl(937,"td",23),rN(938,"-"),og(),Sl(939,"td",24)(940,"em")(941,"strong"),rN(942,"(opcional)"),og()(),Sl(943,"p"),rN(944,"Label do campo."),og(),Sl(945,"blockquote")(946,"p"),rN(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Sl(948,"code"),rN(949,"modalTitle"),og(),rN(950," na propriedade "),Sl(951,"code"),rN(952,"p-literals"),og(),rN(953,"."),og()()()(),Sl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),rN(958," p-label-text-wrap"),Wl(959,"br"),og()()(),Sl(960,"td",21)(961,"code",29),rN(962,"boolean"),og()(),Sl(963,"td",23)(964,"p")(965,"code"),rN(966,"false"),og()()(),Sl(967,"td",24)(968,"em")(969,"strong"),rN(970,"(opcional)"),og()(),Sl(971,"p"),rN(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(973,"code"),rN(974,"p-label"),og(),rN(975,". Quando "),Sl(976,"code"),rN(977,"p-label-text-wrap"),og(),rN(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),rN(983," p-literals"),Wl(984,"br"),og()()(),Sl(985,"td",21)(986,"code",36),rN(987,"PoLookupLiterals"),og()(),Sl(988,"td",23),rN(989,"-"),og(),Sl(990,"td",24)(991,"p"),rN(992,"Objeto com as literais usadas no "),Sl(993,"code"),rN(994,"po-lookup"),og(),rN(995,"."),og(),Sl(996,"p"),rN(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(998,"pre")(999,"code"),rN(1e3,`const customLiterals: PoLookupLiterals = {
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
`),og()(),Sl(1001,"p"),rN(1002,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(1003,"pre")(1004,"code"),rN(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),og()(),Sl(1006,"p"),rN(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(1008,"pre")(1009,"code"),rN(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),og()(),Sl(1011,"blockquote")(1012,"p"),rN(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(1014,"a",37)(1015,"code"),rN(1016,"PoI18nService"),og()(),rN(1017," ou do browser."),og()()()(),Sl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),rN(1022," p-loading"),Wl(1023,"br"),og()()(),Sl(1024,"td",21)(1025,"code",29),rN(1026,"boolean"),og()(),Sl(1027,"td",23)(1028,"p")(1029,"code"),rN(1030,"false"),og()()(),Sl(1031,"td",24)(1032,"em")(1033,"strong"),rN(1034,"(opcional)"),og()(),Sl(1035,"p"),rN(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Sl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),rN(1041," p-multiple"),Wl(1042,"br"),og()()(),Sl(1043,"td",21)(1044,"code",29),rN(1045,"boolean"),og()(),Sl(1046,"td",23)(1047,"p")(1048,"code"),rN(1049,"false"),og()()(),Sl(1050,"td",24)(1051,"em")(1052,"strong"),rN(1053,"(opcional)"),og()(),Sl(1054,"p"),rN(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Sl(1056,"blockquote")(1057,"p"),rN(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Sl(1059,"code"),rN(1060,"[ 12345, 67890 ]"),og()()()()(),Sl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),rN(1065," name"),Wl(1066,"br"),og()()(),Sl(1067,"td",21)(1068,"code",27),rN(1069,"string"),og()(),Sl(1070,"td",23),rN(1071,"-"),og(),Sl(1072,"td",24)(1073,"p"),rN(1074,"Nome e Id do componente."),og()()(),Sl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),rN(1079," p-no-autocomplete"),Wl(1080,"br"),og()()(),Sl(1081,"td",21)(1082,"code",29),rN(1083,"boolean"),og()(),Sl(1084,"td",23)(1085,"p")(1086,"code"),rN(1087,"false"),og()()(),Sl(1088,"td",24)(1089,"em")(1090,"strong"),rN(1091,"(opcional)"),og()(),Sl(1092,"p"),rN(1093,"Define a propriedade nativa "),Sl(1094,"code"),rN(1095,"autocomplete"),og(),rN(1096," do campo como "),Sl(1097,"code"),rN(1098,"off"),og(),rN(1099,"."),og()()(),Sl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),rN(1104," (p-error)"),Wl(1105,"br"),og()()(),Sl(1106,"td",21)(1107,"code",22),rN(1108,"EventEmitter"),og()(),Sl(1109,"td",23),rN(1110,"-"),og(),Sl(1111,"td",24)(1112,"p"),rN(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),og()()(),Sl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),rN(1118," p-optional"),Wl(1119,"br"),og()()(),Sl(1120,"td",21)(1121,"code",29),rN(1122,"boolean"),og()(),Sl(1123,"td",23)(1124,"p")(1125,"code"),rN(1126,"false"),og()()(),Sl(1127,"td",24)(1128,"em")(1129,"strong"),rN(1130,"(opcional)"),og()(),Sl(1131,"p"),rN(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1133,"blockquote")(1134,"p"),rN(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1136,"ul")(1137,"li"),rN(1138,"O campo conter "),Sl(1139,"code"),rN(1140,"p-required"),og(),rN(1141,";"),og(),Sl(1142,"li"),rN(1143,"N\xE3o possuir "),Sl(1144,"code"),rN(1145,"p-help"),og(),rN(1146," e/ou "),Sl(1147,"code"),rN(1148,"p-label"),og(),rN(1149,"."),og()()()(),Sl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),rN(1154," p-placeholder"),Wl(1155,"br"),og()()(),Sl(1156,"td",21)(1157,"code",27),rN(1158,"string"),og()(),Sl(1159,"td",23),rN(1160,"-"),og(),Sl(1161,"td",24)(1162,"p"),rN(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Sl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),rN(1168," p-helper"),Wl(1169,"br"),og()()(),Sl(1170,"td",21)(1171,"code",38),rN(1172,"PoHelperOptions "),og(),Sl(1173,"code",27),rN(1174," string"),og()(),Sl(1175,"td",23),rN(1176,"-"),og(),Sl(1177,"td",24)(1178,"em")(1179,"strong"),rN(1180,"(opcional)"),og()(),Sl(1181,"p"),rN(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1183,"code"),rN(1184,"p-label"),og(),rN(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1186,"code"),rN(1187,"p-label"),og(),rN(1188,"."),og(),Sl(1189,"blockquote")(1190,"p"),rN(1191,"Para mais informa\xE7\xF5es acesse: "),Sl(1192,"a",39),rN(1193,"https://po-ui.io/documentation/po-helper"),og(),rN(1194,"."),og()(),Sl(1195,"blockquote")(1196,"p"),rN(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1198,"code"),rN(1199,"p-additional-help-tooltip"),og(),rN(1200," e "),Sl(1201,"code"),rN(1202,"p-additional-help"),og(),rN(1203,") ser\xE1 ignorado."),og()()()(),Sl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),rN(1208," p-required"),Wl(1209,"br"),og()()(),Sl(1210,"td",21)(1211,"code",29),rN(1212,"boolean"),og()(),Sl(1213,"td",23)(1214,"p")(1215,"code"),rN(1216,"false"),og()()(),Sl(1217,"td",24)(1218,"em")(1219,"strong"),rN(1220,"(opcional)"),og()(),Sl(1221,"p"),rN(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Sl(1223,"blockquote")(1224,"p"),rN(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1226,"code"),rN(1227,"(p-disabled)"),og(),rN(1228,"."),og()()()(),Sl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),rN(1233," (p-selected)"),Wl(1234,"br"),og()()(),Sl(1235,"td",21)(1236,"code",22),rN(1237,"EventEmitter"),og()(),Sl(1238,"td",23),rN(1239,"-"),og(),Sl(1240,"td",24)(1241,"em")(1242,"strong"),rN(1243,"(opcional)"),og()(),Sl(1244,"p"),rN(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),og()()(),Sl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),rN(1250," p-show-required"),Wl(1251,"br"),og()()(),Sl(1252,"td",21)(1253,"code",29),rN(1254,"boolean"),og()(),Sl(1255,"td",23),rN(1256,"-"),og(),Sl(1257,"td",24)(1258,"p"),rN(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),og(),Sl(1260,"blockquote")(1261,"p"),rN(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1263,"ul")(1264,"li"),rN(1265,"N\xE3o possuir "),Sl(1266,"code"),rN(1267,"p-help"),og(),rN(1268," e/ou "),Sl(1269,"code"),rN(1270,"p-label"),og(),rN(1271,"."),og()()()(),Sl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),rN(1276," p-size"),Wl(1277,"br"),og()()(),Sl(1278,"td",21)(1279,"code",27),rN(1280,"string"),og()(),Sl(1281,"td",23)(1282,"p")(1283,"code"),rN(1284,"medium"),og()()(),Sl(1285,"td",24)(1286,"em")(1287,"strong"),rN(1288,"(opcional)"),og()(),Sl(1289,"p"),rN(1290,"Define o tamanho do componente:"),og(),Sl(1291,"ul")(1292,"li")(1293,"code"),rN(1294,"small"),og(),rN(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1296,"li")(1297,"code"),rN(1298,"medium"),og(),rN(1299,": altura do input como 44px."),og()(),Sl(1300,"blockquote")(1301,"p"),rN(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1303,"code"),rN(1304,"medium"),og(),rN(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1306,"a",40),rN(1307,"po-theme"),og(),rN(1308,"."),og()()()(),Sl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),rN(1313," p-spacing"),Wl(1314,"br"),og()()(),Sl(1315,"td",21)(1316,"code",27),rN(1317,"string"),og()(),Sl(1318,"td",23)(1319,"p")(1320,"code"),rN(1321,"medium"),og()()(),Sl(1322,"td",24)(1323,"em")(1324,"strong"),rN(1325,"(opcional)"),og()(),Sl(1326,"p"),rN(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Sl(1328,"strong"),rN(1329,"PoTableColumnSpacing"),og(),rN(1330,"."),og(),Sl(1331,"blockquote")(1332,"p"),rN(1333,"Em n\xEDvel de acessibilidade "),Sl(1334,"strong"),rN(1335,"AA"),og(),rN(1336,", caso o valor de "),Sl(1337,"code"),rN(1338,"p-spacing"),og(),rN(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Sl(1340,"code"),rN(1341,"extraSmall"),og(),rN(1342,`
nos seguintes cen\xE1rios:`),og(),Sl(1343,"ul")(1344,"li"),rN(1345,"Quando o valor de "),Sl(1346,"code"),rN(1347,"p-size"),og(),rN(1348," for "),Sl(1349,"code"),rN(1350,"small"),og(),rN(1351,";"),og(),Sl(1352,"li"),rN(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Sl(1354,"code"),rN(1355,"small"),og(),rN(1356,` no
`),Sl(1357,"a",40),rN(1358,"servi\xE7o de tema"),og(),rN(1359,"."),og()()()()(),Sl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),rN(1364," p-text-wrap"),Wl(1365,"br"),og()()(),Sl(1366,"td",21)(1367,"code",29),rN(1368,"boolean"),og()(),Sl(1369,"td",23)(1370,"p")(1371,"code"),rN(1372,"false"),og()()(),Sl(1373,"td",24)(1374,"em")(1375,"strong"),rN(1376,"(opcional)"),og()(),Sl(1377,"p"),rN(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Sl(1379,"p"),rN(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),og(),Sl(1381,"blockquote")(1382,"p"),rN(1383,"Incompat\xEDvel com "),Sl(1384,"code"),rN(1385,"virtual-scroll"),og(),rN(1386,", que requer altura fixa nas linhas."),og()()()(),Sl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),rN(1391," p-virtual-scroll"),Wl(1392,"br"),og()()(),Sl(1393,"td",21)(1394,"code",29),rN(1395,"boolean"),og()(),Sl(1396,"td",23)(1397,"p")(1398,"code"),rN(1399,"true"),og()()(),Sl(1400,"td",24)(1401,"em")(1402,"strong"),rN(1403,"(opcional)"),og()(),Sl(1404,"p"),rN(1405,"Habilita o "),Sl(1406,"code"),rN(1407,"virtual-scroll"),og(),rN(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Sl(1409,"code"),rN(1410,"virtual-scroll"),og(),rN(1411," ser\xE1 ativado automaticamente."),og(),Sl(1412,"blockquote")(1413,"p"),rN(1414,"Incompat\xEDvel com "),Sl(1415,"code"),rN(1416,"p-text-wrap"),og(),rN(1417," e "),Sl(1418,"code"),rN(1419,"master-detail"),og(),rN(1420,", pois o "),Sl(1421,"code"),rN(1422,"virtual-scroll"),og(),rN(1423," exige altura fixa nas linhas."),og()()()()(),Sl(1424,"h3",12),rN(1425,"M\xE9todos"),og(),Sl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),rN(1432," focus "),og()()()()(),Sl(1433,"tr",24)(1434,"td",24)(1435,"p"),rN(1436,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1437,"p"),rN(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1439,"pre")(1440,"code"),rN(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),og()()()()(),Wl(1442,"br"),Sl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),rN(1449," showAdditionalHelp "),og()()()()(),Sl(1450,"tr",24)(1451,"td",24)(1452,"p"),rN(1453,"M\xE9todo que exibe "),Sl(1454,"code"),rN(1455,"p-helper"),og(),rN(1456," ou executa a a\xE7\xE3o definida em "),Sl(1457,"code"),rN(1458,"p-helper{eventOnClick}"),og(),rN(1459," ou em "),Sl(1460,"code"),rN(1461,"p-additionalHelp"),og(),rN(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1463,"code"),rN(1464,"p-keydown"),og(),rN(1465,"."),og(),Sl(1466,"blockquote")(1467,"p"),rN(1468,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1469,"code"),rN(1470,"po-helper"),og(),rN(1471," quando o componente estiver com foco."),og()(),Sl(1472,"pre")(1473,"code"),rN(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),og()(),Sl(1475,"pre")(1476,"code"),rN(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1478,"br"),Sl(1479,"h3"),rN(1480,"Interfaces"),og(),Sl(1481,"h4",43)(1482,"code",5),rN(1483,"PoLookupAdvancedFilter"),og()(),Sl(1484,"div",2)(1485,"p"),rN(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),og()(),Sl(1487,"h4",12),rN(1488,"Propriedades"),og(),Sl(1489,"table",13)(1490,"tr",14)(1491,"th",15),rN(1492,"Nome"),og(),Sl(1493,"th",15),rN(1494,"Tipo"),og(),Sl(1495,"th",15),rN(1496,"Descri\xE7\xE3o"),og()(),Sl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),rN(1501," additionalHelp"),Wl(1502,"br"),og()()(),Sl(1503,"td",21)(1504,"code",44),rN(1505,"Function"),og()(),Sl(1506,"td",24)(1507,"em")(1508,"strong"),rN(1509,"(opcional)"),og()(),Sl(1510,"p"),rN(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(1512,"blockquote")(1513,"p"),rN(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Sl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),rN(1519," additionalHelpTooltip"),Wl(1520,"br"),og()()(),Sl(1521,"td",21)(1522,"code",27),rN(1523,"string"),og()(),Sl(1524,"td",24)(1525,"em")(1526,"strong"),rN(1527,"(opcional)"),og()(),Sl(1528,"p"),rN(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(1530,"code"),rN(1531,"po-helper"),og(),rN(1532,`.
`),Sl(1533,"strong"),rN(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(1535,"blockquote")(1536,"p"),rN(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Sl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),rN(1542," advancedFilters"),Wl(1543,"br"),og()()(),Sl(1544,"td",21)(1545,"code",28),rN(1546,"Array<PoLookupAdvancedFilter>"),og()(),Sl(1547,"td",24)(1548,"em")(1549,"strong"),rN(1550,"(opcional)"),og()(),Sl(1551,"p"),rN(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Sl(1553,"blockquote")(1554,"p"),rN(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Sl(1556,"p"),rN(1557,"Exemplo de URL com busca avan\xE7ada:"),og(),Sl(1558,"p")(1559,"code"),rN(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Sl(1561,"p"),rN(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Sl(1563,"p")(1564,"code"),rN(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Sl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),rN(1570," appendBox"),Wl(1571,"br"),og()()(),Sl(1572,"td",21)(1573,"code",29),rN(1574,"boolean"),og()(),Sl(1575,"td",24)(1576,"em")(1577,"strong"),rN(1578,"(opcional)"),og()(),Sl(1579,"p"),rN(1580,"Define que o "),Sl(1581,"code"),rN(1582,"listbox"),og(),rN(1583," e/ou popover ("),Sl(1584,"code"),rN(1585,"p-helper"),og(),rN(1586," e/ou "),Sl(1587,"code"),rN(1588,"p-error-limit"),og(),rN(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Sl(1590,"blockquote")(1591,"p"),rN(1592,"Quando utilizado com "),Sl(1593,"code"),rN(1594,"p-helper"),og(),rN(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),rN(1600," autoHeight"),Wl(1601,"br"),og()()(),Sl(1602,"td",21)(1603,"code",29),rN(1604,"boolean"),og()(),Sl(1605,"td",24)(1606,"em")(1607,"strong"),rN(1608,"(opcional)"),og()(),Sl(1609,"p"),rN(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Sl(1611,"p")(1612,"strong"),rN(1613,"Componentes compat\xEDveis:"),og(),Sl(1614,"code"),rN(1615,"po-multiselect"),og(),rN(1616,", "),Sl(1617,"code"),rN(1618,"po-lookup"),og(),rN(1619,"."),og()()(),Sl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),rN(1624," autoUpload"),Wl(1625,"br"),og()()(),Sl(1626,"td",21)(1627,"code",29),rN(1628,"boolean"),og()(),Sl(1629,"td",24)(1630,"em")(1631,"strong"),rN(1632,"(opcional)"),og()(),Sl(1633,"p"),rN(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Sl(1635,"p")(1636,"strong"),rN(1637,"Componente compat\xEDvel"),og(),rN(1638,": "),Sl(1639,"code"),rN(1640,"po-upload"),og()()()(),Sl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),rN(1645," booleanFalse"),Wl(1646,"br"),og()()(),Sl(1647,"td",21)(1648,"code",27),rN(1649,"string"),og()(),Sl(1650,"td",24)(1651,"em")(1652,"strong"),rN(1653,"(opcional)"),og()(),Sl(1654,"p"),rN(1655,"Texto exibido quando o valor do componente for "),Sl(1656,"em"),rN(1657,"false"),og(),rN(1658,"."),og()()(),Sl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),rN(1663," booleanTrue"),Wl(1664,"br"),og()()(),Sl(1665,"td",21)(1666,"code",27),rN(1667,"string"),og()(),Sl(1668,"td",24)(1669,"em")(1670,"strong"),rN(1671,"(opcional)"),og()(),Sl(1672,"p"),rN(1673,"Texto exibido quando o valor do componente for "),Sl(1674,"em"),rN(1675,"true"),og(),rN(1676,"."),og()()(),Sl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),rN(1681," changeOnEnter"),Wl(1682,"br"),og()()(),Sl(1683,"td",21)(1684,"code",29),rN(1685,"boolean"),og()(),Sl(1686,"td",24)(1687,"em")(1688,"strong"),rN(1689,"(opcional)"),og()(),Sl(1690,"p"),rN(1691,"Indica que o evento "),Sl(1692,"code"),rN(1693,"p-change"),og(),rN(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Sl(1695,"code"),rN(1696,"po-combo"),og(),rN(1697,"."),og()()(),Sl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),rN(1702," changeVisibleColumns"),Wl(1703,"br"),og()()(),Sl(1704,"td",21)(1705,"code",44),rN(1706,"Function"),og()(),Sl(1707,"td",24)(1708,"em")(1709,"strong"),rN(1710,"(opcional)"),og()(),Sl(1711,"p"),rN(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(1713,"p"),rN(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Sl(1715,"p")(1716,"strong"),rN(1717,"Componente compat\xEDvel"),og(),rN(1718,": "),Sl(1719,"code"),rN(1720,"po-lookup"),og()()()(),Sl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),rN(1725," clean"),Wl(1726,"br"),og()()(),Sl(1727,"td",21)(1728,"code",29),rN(1729,"boolean"),og()(),Sl(1730,"td",24)(1731,"em")(1732,"strong"),rN(1733,"(opcional)"),og()(),Sl(1734,"p"),rN(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Sl(1736,"p")(1737,"strong"),rN(1738,"Componentes compat\xEDveis:"),og(),Sl(1739,"code"),rN(1740,"po-datepicker"),og(),rN(1741,", "),Sl(1742,"code"),rN(1743,"po-datepicker-range"),og(),rN(1744,", "),Sl(1745,"code"),rN(1746,"po-input"),og(),rN(1747,", "),Sl(1748,"code"),rN(1749,"po-number"),og(),rN(1750,", "),Sl(1751,"code"),rN(1752,"po-decimal"),og(),rN(1753,`,
`),Sl(1754,"code"),rN(1755,"po-combo"),og(),rN(1756,", "),Sl(1757,"code"),rN(1758,"po-lookup"),og(),rN(1759,", "),Sl(1760,"code"),rN(1761,"po-password"),og(),rN(1762,", "),Sl(1763,"code"),rN(1764,"po-timepicker"),og(),rN(1765,"."),og()()(),Sl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),rN(1770," columnRestoreManager"),Wl(1771,"br"),og()()(),Sl(1772,"td",21)(1773,"code",44),rN(1774,"Function"),og()(),Sl(1775,"td",24)(1776,"em")(1777,"strong"),rN(1778,"(opcional)"),og()(),Sl(1779,"p"),rN(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(1781,"p"),rN(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Sl(1783,"p")(1784,"strong"),rN(1785,"Componente compat\xEDvel"),og(),rN(1786,": "),Sl(1787,"code"),rN(1788,"po-lookup"),og()()()(),Sl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),rN(1793," columns"),Wl(1794,"br"),og()()(),Sl(1795,"td",21)(1796,"code",30),rN(1797,"Array<PoLookupColumn> "),og(),Sl(1798,"code",45),rN(1799," number"),og()(),Sl(1800,"td",24)(1801,"em")(1802,"strong"),rN(1803,"(opcional)"),og()(),Sl(1804,"p"),rN(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Sl(1806,"code"),rN(1807,"searchService"),og(),rN(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Sl(1809,"a",46)(1810,"code"),rN(1811,"PoLookupColumn"),og()(),rN(1812,"."),og(),Sl(1813,"blockquote")(1814,"p"),rN(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Sl(1816,"em"),rN(1817,"label"),og(),rN(1818," e "),Sl(1819,"em"),rN(1820,"value"),og(),rN(1821,` para valores
de tela e do model respectivamente.`),og()(),Sl(1822,"p")(1823,"strong"),rN(1824,"Componentes compat\xEDveis:"),og(),Sl(1825,"code"),rN(1826,"po-radio-group"),og(),rN(1827,", "),Sl(1828,"code"),rN(1829,"po-lookup"),og(),rN(1830,", "),Sl(1831,"code"),rN(1832,"po-checkbox-group"),og(),rN(1833,"."),og()()(),Sl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),rN(1838," compactLabel"),Wl(1839,"br"),og()()(),Sl(1840,"td",21)(1841,"code",29),rN(1842,"boolean"),og()(),Sl(1843,"td",24)(1844,"em")(1845,"strong"),rN(1846,"(opcional)"),og()(),Sl(1847,"p"),rN(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(1849,"p"),rN(1850,"Quando habilitado ("),Sl(1851,"code"),rN(1852,"true"),og(),rN(1853,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(1854,"ul")(1855,"li")(1856,"code"),rN(1857,"po-label"),og()(),Sl(1858,"li")(1859,"code"),rN(1860,"p-requirement (showRequired)"),og()(),Sl(1861,"li")(1862,"code"),rN(1863,"po-helper"),og()()(),Sl(1864,"p"),rN(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(1866,"p"),rN(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(1868,"ul")(1869,"li")(1870,"code"),rN(1871,"--field-container-title-justify"),og()(),Sl(1872,"li")(1873,"code"),rN(1874,"--field-container-title-flex"),og()()(),Sl(1875,"p"),rN(1876,"Exemplo:"),og(),Sl(1877,"pre")(1878,"code"),rN(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(1880,"p"),rN(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),rN(1886," container"),Wl(1887,"br"),og()()(),Sl(1888,"td",21)(1889,"code",27),rN(1890,"string"),og()(),Sl(1891,"td",24)(1892,"em")(1893,"strong"),rN(1894,"(opcional)"),og()(),Sl(1895,"p"),rN(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Sl(1897,"p"),rN(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Sl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),rN(1903," customAction"),Wl(1904,"br"),og()()(),Sl(1905,"td",21)(1906,"code",47),rN(1907,"PoProgressAction"),og()(),Sl(1908,"td",24)(1909,"em")(1910,"strong"),rN(1911,"(opcional)"),og()(),Sl(1912,"p"),rN(1913,"Define uma a\xE7\xE3o personalizada no componente "),Sl(1914,"code"),rN(1915,"po-upload"),og(),rN(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Sl(1917,"p")(1918,"strong"),rN(1919,"Componente compat\xEDvel"),og(),rN(1920,": "),Sl(1921,"code"),rN(1922,"po-upload"),og(),rN(1923,","),og(),Sl(1924,"p")(1925,"strong"),rN(1926,"Exemplo de configura\xE7\xE3o"),og(),rN(1927,":"),og(),Sl(1928,"pre")(1929,"code",48),rN(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Sl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),rN(1935," customActionClick"),Wl(1936,"br"),og()()(),Sl(1937,"td",21)(1938,"code",49),rN(1939,"(file: PoUploadFile) => void"),og()(),Sl(1940,"td",24)(1941,"em")(1942,"strong"),rN(1943,"(opcional)"),og()(),Sl(1944,"p"),rN(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(1946,"code"),rN(1947,"p-custom-action"),og(),rN(1948,"."),og(),Sl(1949,"p")(1950,"strong"),rN(1951,"Componente compat\xEDvel"),og(),rN(1952,": "),Sl(1953,"code"),rN(1954,"po-upload"),og(),rN(1955,","),og(),Sl(1956,"p"),rN(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Sl(1958,"p")(1959,"strong"),rN(1960,"Par\xE2metro do evento"),og(),rN(1961,":"),og(),Sl(1962,"ul")(1963,"li")(1964,"code"),rN(1965,"file"),og(),rN(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Sl(1967,"code"),rN(1968,"PoUploadFile"),og(),rN(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Sl(1970,"p")(1971,"strong"),rN(1972,"Exemplo de uso"),og(),rN(1973,":"),og(),Sl(1974,"pre")(1975,"code",48),rN(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Sl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),rN(1981," debounceTime"),Wl(1982,"br"),og()()(),Sl(1983,"td",21)(1984,"code",45),rN(1985,"number"),og()(),Sl(1986,"td",24)(1987,"em")(1988,"strong"),rN(1989,"(opcional)"),og()(),Sl(1990,"p"),rN(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Sl(1992,"code"),rN(1993,"p-filter-service"),og(),rN(1994,")."),og(),Sl(1995,"p")(1996,"strong"),rN(1997,"Componentes compat\xEDveis:"),og(),Sl(1998,"code"),rN(1999,"po-combo"),og(),rN(2e3,", "),Sl(2001,"code"),rN(2002,"po-multiselect"),og(),rN(2003,"."),og()()(),Sl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),rN(2008," decimalsLength"),Wl(2009,"br"),og()()(),Sl(2010,"td",21)(2011,"code",45),rN(2012,"number"),og()(),Sl(2013,"td",24)(2014,"em")(2015,"strong"),rN(2016,"(opcional)"),og()(),Sl(2017,"p"),rN(2018,"Quantidade m\xE1xima de casas decimais."),og(),Sl(2019,"blockquote")(2020,"p"),rN(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(2022,"code"),rN(2023,"type"),og(),rN(2024," for "),Sl(2025,"em"),rN(2026,"currency"),og(),rN(2027," ou "),Sl(2028,"em"),rN(2029,"decimal"),og(),rN(2030,"."),og()()()(),Sl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),rN(2035," directory"),Wl(2036,"br"),og()()(),Sl(2037,"td",21)(2038,"code",29),rN(2039,"boolean"),og()(),Sl(2040,"td",24)(2041,"em")(2042,"strong"),rN(2043,"(opcional)"),og()(),Sl(2044,"p"),rN(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Sl(2046,"blockquote")(2047,"p"),rN(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Sl(2049,"blockquote")(2050,"p"),rN(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(2052,"strong"),rN(2053,"Internet Explorer"),og(),rN(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Sl(2055,"p")(2056,"strong"),rN(2057,"Componente compat\xEDvel"),og(),rN(2058,": "),Sl(2059,"code"),rN(2060,"po-upload"),og()()()(),Sl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),rN(2065," disabled"),Wl(2066,"br"),og()()(),Sl(2067,"td",21)(2068,"code",29),rN(2069,"boolean"),og()(),Sl(2070,"td",24)(2071,"em")(2072,"strong"),rN(2073,"(opcional)"),og()(),Sl(2074,"p"),rN(2075,"Desabilita o campo caso informar o valor "),Sl(2076,"em"),rN(2077,"true"),og(),rN(2078,"."),og()()(),Sl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),rN(2083," disabledInitFilter"),Wl(2084,"br"),og()()(),Sl(2085,"td",21)(2086,"code",29),rN(2087,"boolean"),og()(),Sl(2088,"td",24)(2089,"em")(2090,"strong"),rN(2091,"(opcional)"),og()(),Sl(2092,"p"),rN(2093,"Desabilita o filtro inicial no servi\xE7o do "),Sl(2094,"code"),rN(2095,"po-combo"),og(),rN(2096,", que \xE9 executado no primeiro clique no campo."),og()()(),Sl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),rN(2101," disabledTabFilter"),Wl(2102,"br"),og()()(),Sl(2103,"td",21)(2104,"code",29),rN(2105,"boolean"),og()(),Sl(2106,"td",24)(2107,"em")(2108,"strong"),rN(2109,"(opcional)"),og()(),Sl(2110,"p"),rN(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Sl(2112,"code"),rN(2113,"po-combo"),og(),rN(2114,"."),og()()(),Sl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),rN(2119," divider"),Wl(2120,"br"),og()()(),Sl(2121,"td",21)(2122,"code",27),rN(2123,"string"),og()(),Sl(2124,"td",24)(2125,"em")(2126,"strong"),rN(2127,"(opcional)"),og()(),Sl(2128,"p"),rN(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Sl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),rN(2134," dragDrop"),Wl(2135,"br"),og()()(),Sl(2136,"td",21)(2137,"code",29),rN(2138,"boolean"),og()(),Sl(2139,"td",24)(2140,"em")(2141,"strong"),rN(2142,"(opcional)"),og()(),Sl(2143,"p"),rN(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Sl(2145,"blockquote")(2146,"p"),rN(2147,"Recomendamos utilizar apenas um "),Sl(2148,"code"),rN(2149,"po-upload"),og(),rN(2150," com esta funcionalidade por tela."),og()(),Sl(2151,"p")(2152,"strong"),rN(2153,"Componente compat\xEDvel"),og(),rN(2154,": "),Sl(2155,"code"),rN(2156,"po-upload"),og()()()(),Sl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),rN(2161," dragDropHeight"),Wl(2162,"br"),og()()(),Sl(2163,"td",21)(2164,"code",45),rN(2165,"number"),og()(),Sl(2166,"td",24)(2167,"em")(2168,"strong"),rN(2169,"(opcional)"),og()(),Sl(2170,"p"),rN(2171,"Define em "),Sl(2172,"em"),rN(2173,"pixels"),og(),rN(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(2175,"code"),rN(2176,"160px"),og(),rN(2177,"."),og(),Sl(2178,"blockquote")(2179,"p"),rN(2180,"Esta propriedade funciona somente se a propriedade "),Sl(2181,"code"),rN(2182,"p-drag-drop"),og(),rN(2183," estiver habilitada."),og()(),Sl(2184,"p")(2185,"strong"),rN(2186,"Componente compat\xEDvel"),og(),rN(2187,": "),Sl(2188,"code"),rN(2189,"po-upload"),og()()()(),Sl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),rN(2194," errorAsyncFunction"),Wl(2195,"br"),og()()(),Sl(2196,"td",21)(2197,"code",50),rN(2198,"(value) => Observable<boolean>"),og()(),Sl(2199,"td",24)(2200,"em")(2201,"strong"),rN(2202,"(opcional)"),og()(),Sl(2203,"p"),rN(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(2205,"code"),rN(2206,"change"),og(),rN(2207," ou "),Sl(2208,"code"),rN(2209,"change-model"),og(),rN(2210,", dependendo do valor da propriedade "),Sl(2211,"code"),rN(2212,"triggerMode"),og(),rN(2213,"."),og(),Sl(2214,"blockquote")(2215,"p"),rN(2216,"Retorna "),Sl(2217,"code"),rN(2218,"Observable com o valor true"),og(),rN(2219," para sinalizar o erro "),Sl(2220,"code"),rN(2221,"false"),og(),rN(2222," para indicar que n\xE3o h\xE1 erro."),og()(),Sl(2223,"p")(2224,"strong"),rN(2225,"Componente compat\xEDvel"),og(),rN(2226,": "),Sl(2227,"code"),rN(2228,"po-datepicker"),og()()()(),Sl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),rN(2233," errorAsyncProperties"),Wl(2234,"br"),og()()(),Sl(2235,"td",21)(2236,"code",51),rN(2237,"ErrorAsyncProperties"),og()(),Sl(2238,"td",24)(2239,"em")(2240,"strong"),rN(2241,"(opcional)"),og()(),Sl(2242,"p"),rN(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Sl(2244,"p")(2245,"strong"),rN(2246,"Componentes compat\xEDveis:"),og(),Sl(2247,"code"),rN(2248,"po-input"),og(),rN(2249,", "),Sl(2250,"code"),rN(2251,"po-number"),og(),rN(2252,", "),Sl(2253,"code"),rN(2254,"po-decimal"),og(),rN(2255,", "),Sl(2256,"code"),rN(2257,"po-password"),og(),rN(2258,"."),og()()(),Sl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),rN(2263," errorLimit"),Wl(2264,"br"),og()()(),Sl(2265,"td",21)(2266,"code",29),rN(2267,"boolean"),og()(),Sl(2268,"td",24)(2269,"em")(2270,"strong"),rN(2271,"(opcional)"),og()(),Sl(2272,"p"),rN(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(2274,"blockquote")(2275,"p"),rN(2276,"Caso essa propriedade seja definida como "),Sl(2277,"code"),rN(2278,"true"),og(),rN(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Sl(2280,"p")(2281,"strong"),rN(2282,"Componentes compat\xEDveis:"),og(),Sl(2283,"code"),rN(2284,"po-checkbox-group"),og(),rN(2285,", "),Sl(2286,"code"),rN(2287,"po-combo"),og(),rN(2288,", "),Sl(2289,"code"),rN(2290,"po-datepicker"),og(),rN(2291,", "),Sl(2292,"code"),rN(2293,"po-datepicker-range"),og(),rN(2294,", "),Sl(2295,"code"),rN(2296,"po-decimal"),og(),rN(2297,", "),Sl(2298,"code"),rN(2299,"po-input"),og(),rN(2300,", "),Sl(2301,"code"),rN(2302,"po-lookup"),og(),rN(2303,", "),Sl(2304,"code"),rN(2305,"po-multiselect"),og(),rN(2306,", "),Sl(2307,"code"),rN(2308,"po-number"),og(),rN(2309,", "),Sl(2310,"code"),rN(2311,"po-password"),og(),rN(2312,", "),Sl(2313,"code"),rN(2314,"po-radio-group"),og(),rN(2315,", "),Sl(2316,"code"),rN(2317,"po-select"),og(),rN(2318,`,
`),Sl(2319,"code"),rN(2320,"po-switch"),og(),rN(2321,", "),Sl(2322,"code"),rN(2323,"po-textarea"),og(),rN(2324,", "),Sl(2325,"code"),rN(2326,"po-timepicker"),og(),rN(2327,"."),og()()(),Sl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),rN(2332," errorMessage"),Wl(2333,"br"),og()()(),Sl(2334,"td",21)(2335,"code",27),rN(2336,"string"),og()(),Sl(2337,"td",24)(2338,"em")(2339,"strong"),rN(2340,"(opcional)"),og()(),Sl(2341,"p"),rN(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Sl(2343,"p"),rN(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Sl(2345,"ul")(2346,"li"),rN(2347,"pattern;"),og(),Sl(2348,"li"),rN(2349,"minValue;"),og(),Sl(2350,"li"),rN(2351,"maxValue;"),og(),Sl(2352,"li"),rN(2353,"required;"),og()(),Sl(2354,"blockquote")(2355,"p"),rN(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Sl(2357,"code"),rN(2358,"po-datepicker"),og(),rN(2359,", "),Sl(2360,"code"),rN(2361,"po-input"),og(),rN(2362,", "),Sl(2363,"code"),rN(2364,"po-number"),og(),rN(2365,", "),Sl(2366,"code"),rN(2367,"po-decimal"),og(),rN(2368,", "),Sl(2369,"code"),rN(2370,"po-password"),og(),rN(2371,", "),Sl(2372,"code"),rN(2373,"po-timepicker"),og(),rN(2374,`, \xE9 necess\xE1rio que a propriedade
`),Sl(2375,"code"),rN(2376,"requiredFieldErrorMessage"),og(),rN(2377," esteja como "),Sl(2378,"code"),rN(2379,"true"),og(),rN(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Sl(2381,"code"),rN(2382,"po-datepicker-range"),og(),rN(2383,", "),Sl(2384,"code"),rN(2385,"po-select"),og(),rN(2386,", "),Sl(2387,"code"),rN(2388,"po-checkbox-group"),og(),rN(2389,", "),Sl(2390,"code"),rN(2391,"po-radio-group"),og(),rN(2392,", "),Sl(2393,"code"),rN(2394,"po-multiselect"),og(),rN(2395,", "),Sl(2396,"code"),rN(2397,"po-combo"),og(),rN(2398,`,
`),Sl(2399,"code"),rN(2400,"po-lookup"),og(),rN(2401," e "),Sl(2402,"code"),rN(2403,"po-textarea"),og(),rN(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Sl(2405,"code"),rN(2406,"requiredFieldErrorMessage"),og(),rN(2407,"."),og()(),Sl(2408,"p")(2409,"strong"),rN(2410,"Componentes compat\xEDveis:"),og(),Sl(2411,"code"),rN(2412,"po-checkbox-group"),og(),rN(2413,", "),Sl(2414,"code"),rN(2415,"po-combo"),og(),rN(2416,", "),Sl(2417,"code"),rN(2418,"po-datepicker"),og(),rN(2419,", "),Sl(2420,"code"),rN(2421,"po-datepicker-range"),og(),rN(2422,", "),Sl(2423,"code"),rN(2424,"po-decimal"),og(),rN(2425,", "),Sl(2426,"code"),rN(2427,"po-input"),og(),rN(2428,", "),Sl(2429,"code"),rN(2430,"po-lookup"),og(),rN(2431,", "),Sl(2432,"code"),rN(2433,"po-multiselect"),og(),rN(2434,", "),Sl(2435,"code"),rN(2436,"po-number"),og(),rN(2437,", "),Sl(2438,"code"),rN(2439,"po-password"),og(),rN(2440,", "),Sl(2441,"code"),rN(2442,"po-radio-group"),og(),rN(2443,", "),Sl(2444,"code"),rN(2445,"po-select"),og(),rN(2446,`,
`),Sl(2447,"code"),rN(2448,"po-switch"),og(),rN(2449,", "),Sl(2450,"code"),rN(2451,"po-textarea"),og(),rN(2452,", "),Sl(2453,"code"),rN(2454,"po-timepicker"),og(),rN(2455,"."),og()()(),Sl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),rN(2460," fieldLabel"),Wl(2461,"br"),og()()(),Sl(2462,"td",21)(2463,"code",27),rN(2464,"string"),og()(),Sl(2465,"td",24)(2466,"em")(2467,"strong"),rN(2468,"(opcional)"),og()(),Sl(2469,"p"),rN(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Sl(2471,"p"),rN(2472,"O valor padr\xE3o \xE9: "),Sl(2473,"code"),rN(2474,"label"),og(),rN(2475,"."),og(),Sl(2476,"blockquote")(2477,"p"),rN(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(2479,"code"),rN(2480,"options"),og(),rN(2481,", "),Sl(2482,"code"),rN(2483,"optionsService"),og(),rN(2484," e "),Sl(2485,"code"),rN(2486,"searchService"),og(),rN(2487,"."),og()()()(),Sl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),rN(2492," fieldValue"),Wl(2493,"br"),og()()(),Sl(2494,"td",21)(2495,"code",27),rN(2496,"string"),og()(),Sl(2497,"td",24)(2498,"em")(2499,"strong"),rN(2500,"(opcional)"),og()(),Sl(2501,"p"),rN(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Sl(2503,"p"),rN(2504,"O valor padr\xE3o \xE9: "),Sl(2505,"code"),rN(2506,"value"),og(),rN(2507,"."),og(),Sl(2508,"blockquote")(2509,"p"),rN(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(2511,"code"),rN(2512,"options"),og(),rN(2513,", "),Sl(2514,"code"),rN(2515,"optionsService"),og(),rN(2516," e "),Sl(2517,"code"),rN(2518,"searchService"),og(),rN(2519,"."),og()()()(),Sl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),rN(2524," filterMinlength"),Wl(2525,"br"),og()()(),Sl(2526,"td",21)(2527,"code",45),rN(2528,"number"),og()(),Sl(2529,"td",24)(2530,"em")(2531,"strong"),rN(2532,"(opcional)"),og()(),Sl(2533,"p"),rN(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Sl(2535,"code"),rN(2536,"po-combo"),og(),rN(2537,"."),og()()(),Sl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),rN(2542," filterMode"),Wl(2543,"br"),og()()(),Sl(2544,"td",21)(2545,"code",52),rN(2546,"PoMultiselectFilterMode"),og()(),Sl(2547,"td",24)(2548,"em")(2549,"strong"),rN(2550,"(opcional)"),og()(),Sl(2551,"p"),rN(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Sl(2553,"code"),rN(2554,"startsWith"),og(),rN(2555,", "),Sl(2556,"code"),rN(2557,"contains"),og(),rN(2558," ou "),Sl(2559,"code"),rN(2560,"endsWith"),og(),rN(2561,"."),og(),Sl(2562,"blockquote")(2563,"p"),rN(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Sl(2565,"p")(2566,"strong"),rN(2567,"Componente compat\xEDvel:"),og(),Sl(2568,"code"),rN(2569,"po-multiselect"),og(),rN(2570,"."),og()()(),Sl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),rN(2575," forceBooleanComponentType"),Wl(2576,"br"),og()()(),Sl(2577,"td",21)(2578,"code",53),rN(2579,"ForceBooleanComponentEnum"),og()(),Sl(2580,"td",24)(2581,"em")(2582,"strong"),rN(2583,"(opcional)"),og()(),Sl(2584,"p"),rN(2585,"Valores aceitos:"),og(),Sl(2586,"ul")(2587,"li"),rN(2588,"ForceBooleanComponentEnum.switch"),og(),Sl(2589,"li"),rN(2590,"ForceBooleanComponentEnum.checkbox"),og()()()(),Sl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),rN(2595," forceOptionsComponentType"),Wl(2596,"br"),og()()(),Sl(2597,"td",21)(2598,"code",54),rN(2599,"ForceOptionComponentEnum"),og()(),Sl(2600,"td",24)(2601,"em")(2602,"strong"),rN(2603,"(opcional)"),og()(),Sl(2604,"p"),rN(2605,"pode ser utilizada em conjunto com a propriedade "),Sl(2606,"code"),rN(2607,"options"),og(),rN(2608," for\xE7ando o componente a renderizar um "),Sl(2609,"code"),rN(2610,"po-select"),og(),rN(2611," ou "),Sl(2612,"code"),rN(2613,"po-radio-group"),og(),rN(2614,"."),og(),Sl(2615,"p"),rN(2616,"Valores aceitos:"),og(),Sl(2617,"ul")(2618,"li"),rN(2619,"ForceOptionComponentEnum.radioGroup"),og(),Sl(2620,"li"),rN(2621,"ForceOptionComponentEnum.select"),og()(),Sl(2622,"blockquote")(2623,"p"),rN(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Sl(2625,"code"),rN(2626,"optionsMulti"),og(),rN(2627," e "),Sl(2628,"code"),rN(2629,"optionsService"),og(),rN(2630,"."),og()()()(),Sl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),rN(2635," formField"),Wl(2636,"br"),og()()(),Sl(2637,"td",21)(2638,"code",27),rN(2639,"string"),og()(),Sl(2640,"td",24)(2641,"em")(2642,"strong"),rN(2643,"(opcional)"),og()(),Sl(2644,"p"),rN(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(2646,"code"),rN(2647,"url"),og(),rN(2648,"."),og(),Sl(2649,"blockquote")(2650,"p"),rN(2651,"O valor default \xE9 "),Sl(2652,"code"),rN(2653,"files"),og()()(),Sl(2654,"p")(2655,"strong"),rN(2656,"Componente compat\xEDvel"),og(),rN(2657,": "),Sl(2658,"code"),rN(2659,"po-upload"),og()()()(),Sl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),rN(2664," format"),Wl(2665,"br"),og()()(),Sl(2666,"td",21)(2667,"code",27),rN(2668,"string "),og(),Sl(2669,"code",32),rN(2670," Array<string>"),og()(),Sl(2671,"td",24)(2672,"em")(2673,"strong"),rN(2674,"(opcional)"),og()(),Sl(2675,"p"),rN(2676,"Formato de exibi\xE7\xE3o no campo."),og(),Sl(2677,"p"),rN(2678,"Ao utilizar esta propriedade com o "),Sl(2679,"code"),rN(2680,"type"),og(),Sl(2681,"em"),rN(2682,"PoDynamicFieldType.Date"),og(),rN(2683," ou "),Sl(2684,"em"),rN(2685,"PoDynamicFieldType.DateTime"),og(),rN(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Sl(2687,"p"),rN(2688,"Valores v\xE1lidos:"),og(),Sl(2689,"ul")(2690,"li"),rN(2691,"dd/mm/yyyy"),og(),Sl(2692,"li"),rN(2693,"mm/dd/yyyy"),og(),Sl(2694,"li"),rN(2695,"yyyy/mm/dd"),og()(),Sl(2696,"p"),rN(2697,"Ao utilizar com o "),Sl(2698,"code"),rN(2699,"type"),og(),Sl(2700,"em"),rN(2701,"PoDynamicFieldType.Time"),og(),rN(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Sl(2703,"p"),rN(2704,"Valores v\xE1lidos:"),og(),Sl(2705,"ul")(2706,"li")(2707,"code"),rN(2708,"24"),og(),rN(2709,": formato de 24 horas (padr\xE3o)"),og(),Sl(2710,"li")(2711,"code"),rN(2712,"12"),og(),rN(2713,": formato de 12 horas com indicador AM/PM"),og()(),Sl(2714,"p"),rN(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Sl(2716,"code"),rN(2717,"searchService"),og(),rN(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Sl(2719,"p")(2720,"strong"),rN(2721,"Componentes compat\xEDveis:"),og(),Sl(2722,"code"),rN(2723,"po-datepicker"),og(),rN(2724,", "),Sl(2725,"code"),rN(2726,"po-datetimepicker"),og(),rN(2727,", "),Sl(2728,"code"),rN(2729,"po-timepicker"),og(),rN(2730,", "),Sl(2731,"code"),rN(2732,"po-lookup"),og(),rN(2733,"."),og()()(),Sl(2734,"tr",16)(2735,"td",17)(2736,"div",25)(2737,"span",26),rN(2738," formatModel"),Wl(2739,"br"),og()()(),Sl(2740,"td",21)(2741,"code",29),rN(2742,"boolean"),og()(),Sl(2743,"td",24)(2744,"em")(2745,"strong"),rN(2746,"(opcional)"),og()(),Sl(2747,"p"),rN(2748,"Indica se o "),Sl(2749,"code"),rN(2750,"model"),og(),rN(2751," receber\xE1 o valor formatado pelas propriedades "),Sl(2752,"code"),rN(2753,"p-label-on"),og(),rN(2754," e "),Sl(2755,"code"),rN(2756,"p-label-off"),og(),rN(2757,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Sl(2758,"p"),rN(2759,"O valor padr\xE3o \xE9: "),Sl(2760,"code"),rN(2761,"false"),og(),rN(2762,"."),og(),Sl(2763,"blockquote")(2764,"p"),rN(2765,"Esta propriedade est\xE1 disponivel apenas para o "),Sl(2766,"code"),rN(2767,"swicth"),og(),rN(2768,"."),og()()()(),Sl(2769,"tr",16)(2770,"td",17)(2771,"div",25)(2772,"span",26),rN(2773," formatTime"),Wl(2774,"br"),og()()(),Sl(2775,"td",21)(2776,"code",27),rN(2777,"string"),og()(),Sl(2778,"td",24)(2779,"em")(2780,"strong"),rN(2781,"(opcional)"),og()(),Sl(2782,"p"),rN(2783,"Define o formato de exibi\xE7\xE3o do timer ("),Sl(2784,"code"),rN(2785,"'12'"),og(),rN(2786," ou "),Sl(2787,"code"),rN(2788,"'24'"),og(),rN(2789,")."),og(),Sl(2790,"p")(2791,"strong"),rN(2792,"Componente compat\xEDvel:"),og(),Sl(2793,"code"),rN(2794,"po-datetimepicker"),og()()()(),Sl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),rN(2799," gridColumns"),Wl(2800,"br"),og()()(),Sl(2801,"td",21)(2802,"code",45),rN(2803,"number"),og()(),Sl(2804,"td",24)(2805,"em")(2806,"strong"),rN(2807,"(opcional)"),og()(),Sl(2808,"p"),rN(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Sl(2810,"p"),rN(2811,"Deve ser usado o sistema de "),Sl(2812,"strong"),rN(2813,"grid"),og(),rN(2814," do PO (1 ... 12 colunas)."),og(),Sl(2815,"blockquote")(2816,"p"),rN(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),rN(2822," gridLgColumns"),Wl(2823,"br"),og()()(),Sl(2824,"td",21)(2825,"code",45),rN(2826,"number"),og()(),Sl(2827,"td",24)(2828,"em")(2829,"strong"),rN(2830,"(opcional)"),og()(),Sl(2831,"p"),rN(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(2833,"p"),rN(2834,"Deve ser usado o sistema de "),Sl(2835,"strong"),rN(2836,"grid"),og(),rN(2837," do PO (1 ... 12 colunas)."),og(),Sl(2838,"blockquote")(2839,"p"),rN(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2841,"code"),rN(2842,"gridColumns"),og(),rN(2843,"."),og()()()(),Sl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),rN(2848," gridLgPull"),Wl(2849,"br"),og()()(),Sl(2850,"td",21)(2851,"code",45),rN(2852,"number"),og()(),Sl(2853,"td",24)(2854,"em")(2855,"strong"),rN(2856,"(opcional)"),og()(),Sl(2857,"p"),rN(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Sl(2859,"p"),rN(2860,"Deve ser usado o sistema de "),Sl(2861,"strong"),rN(2862,"grid"),og(),rN(2863," do PO (1 ... 11 colunas)."),og(),Sl(2864,"blockquote")(2865,"p"),rN(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2867,"code"),rN(2868,"gridColumns"),og(),rN(2869,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),rN(2874," gridMdColumns"),Wl(2875,"br"),og()()(),Sl(2876,"td",21)(2877,"code",45),rN(2878,"number"),og()(),Sl(2879,"td",24)(2880,"em")(2881,"strong"),rN(2882,"(opcional)"),og()(),Sl(2883,"p"),rN(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(2885,"p"),rN(2886,"Deve ser usado o sistema de "),Sl(2887,"strong"),rN(2888,"grid"),og(),rN(2889," do PO (1 ... 12 colunas)."),og(),Sl(2890,"blockquote")(2891,"p"),rN(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2893,"code"),rN(2894,"gridColumns"),og(),rN(2895,"."),og()()()(),Sl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),rN(2900," gridMdPull"),Wl(2901,"br"),og()()(),Sl(2902,"td",21)(2903,"code",45),rN(2904,"number"),og()(),Sl(2905,"td",24)(2906,"em")(2907,"strong"),rN(2908,"(opcional)"),og()(),Sl(2909,"p"),rN(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Sl(2911,"p"),rN(2912,"Deve ser usado o sistema de "),Sl(2913,"strong"),rN(2914,"grid"),og(),rN(2915," do PO (1 ... 11 colunas)."),og(),Sl(2916,"blockquote")(2917,"p"),rN(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2919,"code"),rN(2920,"gridColumns"),og(),rN(2921,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),rN(2926," gridSmColumns"),Wl(2927,"br"),og()()(),Sl(2928,"td",21)(2929,"code",45),rN(2930,"number"),og()(),Sl(2931,"td",24)(2932,"em")(2933,"strong"),rN(2934,"(opcional)"),og()(),Sl(2935,"p"),rN(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(2937,"p"),rN(2938,"Deve ser usado o sistema de "),Sl(2939,"strong"),rN(2940,"grid"),og(),rN(2941," do PO (1 ... 12 colunas)."),og(),Sl(2942,"blockquote")(2943,"p"),rN(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2945,"code"),rN(2946,"gridColumns"),og(),rN(2947,"."),og()()()(),Sl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),rN(2952," gridSmPull"),Wl(2953,"br"),og()()(),Sl(2954,"td",21)(2955,"code",45),rN(2956,"number"),og()(),Sl(2957,"td",24)(2958,"em")(2959,"strong"),rN(2960,"(opcional)"),og()(),Sl(2961,"p"),rN(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Sl(2963,"p"),rN(2964,"Deve ser usado o sistema de "),Sl(2965,"strong"),rN(2966,"grid"),og(),rN(2967," do PO (1 ... 11 colunas)."),og(),Sl(2968,"blockquote")(2969,"p"),rN(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2971,"code"),rN(2972,"gridColumns"),og(),rN(2973,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),rN(2978," gridXlColumns"),Wl(2979,"br"),og()()(),Sl(2980,"td",21)(2981,"code",45),rN(2982,"number"),og()(),Sl(2983,"td",24)(2984,"em")(2985,"strong"),rN(2986,"(opcional)"),og()(),Sl(2987,"p"),rN(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(2989,"p"),rN(2990,"Deve ser usado o sistema de "),Sl(2991,"strong"),rN(2992,"grid"),og(),rN(2993," do PO (1 ... 12 colunas)."),og(),Sl(2994,"blockquote")(2995,"p"),rN(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2997,"code"),rN(2998,"gridColumns"),og(),rN(2999,"."),og()()()(),Sl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),rN(3004," gridXlPull"),Wl(3005,"br"),og()()(),Sl(3006,"td",21)(3007,"code",45),rN(3008,"number"),og()(),Sl(3009,"td",24)(3010,"em")(3011,"strong"),rN(3012,"(opcional)"),og()(),Sl(3013,"p"),rN(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Sl(3015,"p"),rN(3016,"Deve ser usado o sistema de "),Sl(3017,"strong"),rN(3018,"grid"),og(),rN(3019," do PO (1 ... 11 colunas)."),og(),Sl(3020,"blockquote")(3021,"p"),rN(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(3023,"code"),rN(3024,"gridColumns"),og(),rN(3025,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),rN(3030," headers"),Wl(3031,"br"),og()()(),Sl(3032,"td",21)(3033,"code",55),rN(3034,"{ [name: string]: string "),og(),Sl(3035,"code",56),rN(3036,` Array<string>;
}`),og()(),Sl(3037,"td",24)(3038,"em")(3039,"strong"),rN(3040,"(opcional)"),og()(),Sl(3041,"p"),rN(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Sl(3043,"p")(3044,"strong"),rN(3045,"Componente compat\xEDvel"),og(),rN(3046,": "),Sl(3047,"code"),rN(3048,"po-upload"),og()()()(),Sl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),rN(3053," help"),Wl(3054,"br"),og()()(),Sl(3055,"td",21)(3056,"code",27),rN(3057,"string"),og()(),Sl(3058,"td",24)(3059,"em")(3060,"strong"),rN(3061,"(opcional)"),og()(),Sl(3062,"p"),rN(3063,"Texto de ajuda."),og()()(),Sl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),rN(3068," helper"),Wl(3069,"br"),og()()(),Sl(3070,"td",21)(3071,"code",27),rN(3072,"string "),og(),Sl(3073,"code",38),rN(3074," PoHelperOptions"),og()(),Sl(3075,"td",24)(3076,"em")(3077,"strong"),rN(3078,"(opcional)"),og()(),Sl(3079,"p"),rN(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Sl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),rN(3085," hideLabelStatus"),Wl(3086,"br"),og()()(),Sl(3087,"td",21)(3088,"code",29),rN(3089,"boolean"),og()(),Sl(3090,"td",24)(3091,"em")(3092,"strong"),rN(3093,"(opcional)"),og()(),Sl(3094,"p"),rN(3095,"Indica se o status do "),Sl(3096,"code"),rN(3097,"model"),og(),rN(3098," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Sl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),rN(3103," hidePasswordPeek"),Wl(3104,"br"),og()()(),Sl(3105,"td",21)(3106,"code",29),rN(3107,"boolean"),og()(),Sl(3108,"td",24)(3109,"em")(3110,"strong"),rN(3111,"(opcional)"),og()(),Sl(3112,"p"),rN(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Sl(3114,"code"),rN(3115,"po-password"),og(),rN(3116,"."),og()()(),Sl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),rN(3121," hideRestrictionsInfo"),Wl(3122,"br"),og()()(),Sl(3123,"td",21)(3124,"code",29),rN(3125,"boolean"),og()(),Sl(3126,"td",24)(3127,"em")(3128,"strong"),rN(3129,"(opcional)"),og()(),Sl(3130,"p"),rN(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Sl(3132,"p")(3133,"strong"),rN(3134,"Componente compat\xEDvel"),og(),rN(3135,": "),Sl(3136,"code"),rN(3137,"po-upload"),og()()()(),Sl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),rN(3142," hideSearch"),Wl(3143,"br"),og()()(),Sl(3144,"td",21)(3145,"code",29),rN(3146,"boolean"),og()(),Sl(3147,"td",24)(3148,"em")(3149,"strong"),rN(3150,"(opcional)"),og()(),Sl(3151,"p"),rN(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Sl(3153,"code"),rN(3154,"po-multiselect"),og(),rN(3155,"."),og()()(),Sl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),rN(3160," hideSelectAll"),Wl(3161,"br"),og()()(),Sl(3162,"td",21)(3163,"code",29),rN(3164,"boolean"),og()(),Sl(3165,"td",24)(3166,"em")(3167,"strong"),rN(3168,"(opcional)"),og()(),Sl(3169,"p"),rN(3170,'Indica se o campo "Selecionar todos" do '),Sl(3171,"code"),rN(3172,"po-multiselect"),og(),rN(3173," ser\xE1 escondido."),og()()(),Sl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),rN(3178," hideSelectButton"),Wl(3179,"br"),og()()(),Sl(3180,"td",21)(3181,"code",29),rN(3182,"boolean"),og()(),Sl(3183,"td",24)(3184,"em")(3185,"strong"),rN(3186,"(opcional)"),og()(),Sl(3187,"p"),rN(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Sl(3189,"blockquote")(3190,"p"),rN(3191,"Caso o valor definido seja "),Sl(3192,"code"),rN(3193,"true"),og(),rN(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(3195,"code"),rN(3196,"selectFiles()"),og(),rN(3197," para sele\xE7\xE3o de arquivos."),og()(),Sl(3198,"p")(3199,"strong"),rN(3200,"Componente compat\xEDvel"),og(),rN(3201,": "),Sl(3202,"code"),rN(3203,"po-upload"),og()()()(),Sl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),rN(3208," hideSendButton"),Wl(3209,"br"),og()()(),Sl(3210,"td",21)(3211,"code",29),rN(3212,"boolean"),og()(),Sl(3213,"td",24)(3214,"em")(3215,"strong"),rN(3216,"(opcional)"),og()(),Sl(3217,"p"),rN(3218,"Omite o bot\xE3o de envio de arquivos."),og(),Sl(3219,"blockquote")(3220,"p"),rN(3221,"Caso o valor definido seja "),Sl(3222,"code"),rN(3223,"true"),og(),rN(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(3225,"code"),rN(3226,"sendFiles()"),og(),rN(3227," para envio do(s) arquivo(s) selecionado(s)."),og()(),Sl(3228,"p")(3229,"strong"),rN(3230,"Componente compat\xEDvel"),og(),rN(3231,": "),Sl(3232,"code"),rN(3233,"po-upload"),og()()()(),Sl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),rN(3238," icon"),Wl(3239,"br"),og()()(),Sl(3240,"td",21)(3241,"code",27),rN(3242,"string "),og(),Sl(3243,"code",57),rN(3244," TemplateRef<void>"),og()(),Sl(3245,"td",24)(3246,"em")(3247,"strong"),rN(3248,"(opcional)"),og()(),Sl(3249,"p"),rN(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(3251,"blockquote")(3252,"p"),rN(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Sl(3254,"ul")(3255,"li"),rN(3256,"Input;"),og(),Sl(3257,"li"),rN(3258,"Number;"),og(),Sl(3259,"li"),rN(3260,"Decimal;"),og(),Sl(3261,"li"),rN(3262,"Combo;"),og(),Sl(3263,"li"),rN(3264,"Password;"),og()(),Sl(3265,"blockquote")(3266,"p"),rN(3267,"Veja a disponibilidade de \xEDcones em "),Sl(3268,"a",58),rN(3269,"biblioteca de \xEDcones"),og(),rN(3270,"."),og()()()(),Sl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),rN(3275," infiniteScroll"),Wl(3276,"br"),og()()(),Sl(3277,"td",21)(3278,"code",29),rN(3279,"boolean"),og()(),Sl(3280,"td",24)(3281,"em")(3282,"strong"),rN(3283,"(opcional)"),og()(),Sl(3284,"p"),rN(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Sl(3286,"p")(3287,"strong"),rN(3288,"Componentes compat\xEDveis:"),og(),Sl(3289,"code"),rN(3290,"po-combo"),og(),rN(3291,", "),Sl(3292,"code"),rN(3293,"po-lookup"),og(),rN(3294,"."),og()()(),Sl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),rN(3299," infiniteScrollDistance"),Wl(3300,"br"),og()()(),Sl(3301,"td",21)(3302,"code",45),rN(3303,"number"),og()(),Sl(3304,"td",24)(3305,"em")(3306,"strong"),rN(3307,"(opcional)"),og()(),Sl(3308,"p"),rN(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Sl(3310,"strong"),rN(3311,"Exemplos"),og(),Sl(3312,"code"),rN(3313,"{ infiniteScrollDistance: 80 }"),og(),rN(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Sl(3315,"p")(3316,"strong"),rN(3317,"Componente compat\xEDvel:"),og(),Sl(3318,"code"),rN(3319,"po-combo"),og(),rN(3320,"."),og()()(),Sl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),rN(3325," invalidValue"),Wl(3326,"br"),og()()(),Sl(3327,"td",21)(3328,"code",29),rN(3329,"boolean"),og()(),Sl(3330,"td",24)(3331,"em")(3332,"strong"),rN(3333,"(opcional)"),og()(),Sl(3334,"p"),rN(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(3336,"code"),rN(3337,"p-field-error-message"),og(),rN(3338,"."),og(),Sl(3339,"blockquote")(3340,"p"),rN(3341,"Caso essa propriedade seja definida como "),Sl(3342,"code"),rN(3343,"true"),og(),rN(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Sl(3345,"p")(3346,"strong"),rN(3347,"Componente compat\xEDvel"),og(),rN(3348,": "),Sl(3349,"code"),rN(3350,"po-switch"),og()()()(),Sl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),rN(3355," isoFormat"),Wl(3356,"br"),og()()(),Sl(3357,"td",21)(3358,"code",59),rN(3359,"PoDatepickerIsoFormat"),og()(),Sl(3360,"td",24)(3361,"em")(3362,"strong"),rN(3363,"(opcional)"),og()(),Sl(3364,"p"),rN(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Sl(3366,"blockquote")(3367,"p"),rN(3368,"Veja os valores v\xE1lidos no "),Sl(3369,"code"),rN(3370,"PoDatepickerIsoFormat"),og(),rN(3371,"."),og()(),Sl(3372,"p")(3373,"strong"),rN(3374,"Componente compat\xEDvel:"),og(),Sl(3375,"code"),rN(3376,"po-datepicker"),og()()()(),Sl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),rN(3381," key"),Wl(3382,"br"),og()()(),Sl(3383,"td",21)(3384,"code",29),rN(3385,"boolean"),og()(),Sl(3386,"td",24)(3387,"em")(3388,"strong"),rN(3389,"(opcional)"),og()(),Sl(3390,"p"),rN(3391,"Identificador"),og()()(),Sl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),rN(3396," keydown"),Wl(3397,"br"),og()()(),Sl(3398,"td",21)(3399,"code",44),rN(3400,"Function"),og()(),Sl(3401,"td",24)(3402,"em")(3403,"strong"),rN(3404,"(opcional)"),og()(),Sl(3405,"p"),rN(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(3407,"code"),rN(3408,"KeyboardEvent"),og(),rN(3409," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),rN(3414," label"),Wl(3415,"br"),og()()(),Sl(3416,"td",21)(3417,"code",27),rN(3418,"string"),og()(),Sl(3419,"td",24)(3420,"em")(3421,"strong"),rN(3422,"(opcional)"),og()(),Sl(3423,"p"),rN(3424,"R\xF3tulo do campo exibido."),og(),Sl(3425,"p"),rN(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(3427,"code"),rN(3428,"label"),og(),rN(3429," o valor da propriedade "),Sl(3430,"code"),rN(3431,"property"),og(),rN(3432," com a primeira letra em mai\xFAsculo."),og()()(),Sl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),rN(3437," labelPosition"),Wl(3438,"br"),og()()(),Sl(3439,"td",21)(3440,"code",60),rN(3441,"PoSwitchLabelPosition"),og()(),Sl(3442,"td",24)(3443,"em")(3444,"strong"),rN(3445,"(opcional)"),og()(),Sl(3446,"p"),rN(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Sl(3448,"blockquote")(3449,"p"),rN(3450,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Sl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),rN(3455," listboxControlPosition"),Wl(3456,"br"),og()()(),Sl(3457,"td",21)(3458,"code",61),rN(3459,"'top' "),og(),Sl(3460,"code",62),rN(3461," 'bottom'"),og()(),Sl(3462,"td",24)(3463,"em")(3464,"strong"),rN(3465,"(opcional)"),og()(),Sl(3466,"p"),rN(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Sl(3468,"code"),rN(3469,"listbox"),og(),rN(3470," em rela\xE7\xE3o ao campo ("),Sl(3471,"code"),rN(3472,"top"),og(),rN(3473," ou "),Sl(3474,"code"),rN(3475,"bottom"),og(),rN(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Sl(3477,"p")(3478,"strong"),rN(3479,"Componentes compat\xEDveis:"),og(),Sl(3480,"code"),rN(3481,"po-multiselect"),og(),rN(3482,", "),Sl(3483,"code"),rN(3484,"po-combo"),og(),rN(3485,"."),og()()(),Sl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),rN(3490," literals"),Wl(3491,"br"),og()()(),Sl(3492,"td",21)(3493,"code",36),rN(3494,"PoLookupLiterals "),og(),Sl(3495,"code",63),rN(3496," PoMultiselectLiterals "),og(),Sl(3497,"code",64),rN(3498," PoComboLiterals "),og(),Sl(3499,"code",65),rN(3500," PoDatepickerRangeLiterals "),og(),Sl(3501,"code",66),rN(3502," PoUploadLiterals"),og()(),Sl(3503,"td",24)(3504,"em")(3505,"strong"),rN(3506,"(opcional)"),og()(),Sl(3507,"p"),rN(3508,"Objeto com as literais usadas para os seguintes componentes: "),Sl(3509,"code"),rN(3510,"po-lookup"),og(),rN(3511,", "),Sl(3512,"code"),rN(3513,"po-multiselect"),og(),rN(3514,", "),Sl(3515,"code"),rN(3516,"po-combo"),og(),rN(3517," e "),Sl(3518,"code"),rN(3519,"po-datepicker-range"),og(),rN(3520,"."),og(),Sl(3521,"blockquote")(3522,"p"),rN(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Sl(3524,"p")(3525,"strong"),rN(3526,"Componentes compat\xEDveis:"),og(),Sl(3527,"code"),rN(3528,"po-lookup"),og(),rN(3529,", "),Sl(3530,"code"),rN(3531,"po-multiselect"),og(),rN(3532,", "),Sl(3533,"code"),rN(3534,"po-combo"),og(),rN(3535,", "),Sl(3536,"code"),rN(3537,"po-datepicker-range"),og()()()(),Sl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),rN(3542," loading"),Wl(3543,"br"),og()()(),Sl(3544,"td",21)(3545,"code",29),rN(3546,"boolean"),og()(),Sl(3547,"td",24)(3548,"em")(3549,"strong"),rN(3550,"(opcional)"),og()(),Sl(3551,"p"),rN(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Sl(3553,"blockquote")(3554,"p"),rN(3555,"Por padr\xE3o \xE9 "),Sl(3556,"code"),rN(3557,"false"),og(),rN(3558,"."),og()(),Sl(3559,"p")(3560,"strong"),rN(3561,"Componentes compat\xEDveis:"),og(),Sl(3562,"code"),rN(3563,"po-datepicker"),og(),rN(3564,", "),Sl(3565,"code"),rN(3566,"po-datepicker-range"),og(),rN(3567,", "),Sl(3568,"code"),rN(3569,"po-number"),og(),rN(3570,", "),Sl(3571,"code"),rN(3572,"po-decimal"),og(),rN(3573,`,
`),Sl(3574,"code"),rN(3575,"po-input"),og(),rN(3576,", "),Sl(3577,"code"),rN(3578,"po-select"),og(),rN(3579,", "),Sl(3580,"code"),rN(3581,"po-switch"),og(),rN(3582,", "),Sl(3583,"code"),rN(3584,"po-combo"),og(),rN(3585,", "),Sl(3586,"code"),rN(3587,"po-lookup"),og(),rN(3588,", "),Sl(3589,"code"),rN(3590,"po-multiselect"),og(),rN(3591,`,
`),Sl(3592,"code"),rN(3593,"po-textarea"),og(),rN(3594,", "),Sl(3595,"code"),rN(3596,"po-password"),og(),rN(3597,", "),Sl(3598,"code"),rN(3599,"po-upload"),og(),rN(3600,"."),og()()(),Sl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),rN(3605," locale"),Wl(3606,"br"),og()()(),Sl(3607,"td",21)(3608,"code",27),rN(3609,"string"),og()(),Sl(3610,"td",24)(3611,"em")(3612,"strong"),rN(3613,"(opcional)"),og()(),Sl(3614,"p"),rN(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Sl(3616,"a",67)(3617,"code"),rN(3618,"I18n"),og()()(),Sl(3619,"p"),rN(3620,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(3621,"pre")(3622,"code"),rN(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Sl(3624,"blockquote")(3625,"p"),rN(3626,"Para ver quais linguagens suportadas acesse "),Sl(3627,"a",67)(3628,"code"),rN(3629,"I18n"),og()()()(),Sl(3630,"p")(3631,"strong"),rN(3632,"Componentes compat\xEDveis:"),og(),Sl(3633,"code"),rN(3634,"po-datepicker"),og(),rN(3635,", "),Sl(3636,"code"),rN(3637,"po-decimal"),og(),rN(3638,", "),Sl(3639,"code"),rN(3640,"po-timepicker"),og(),rN(3641,"."),og()()(),Sl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),rN(3646," mask"),Wl(3647,"br"),og()()(),Sl(3648,"td",21)(3649,"code",27),rN(3650,"string"),og()(),Sl(3651,"td",24)(3652,"em")(3653,"strong"),rN(3654,"(opcional)"),og()(),Sl(3655,"p"),rN(3656,"M\xE1scara para o campo."),og(),Sl(3657,"p")(3658,"strong"),rN(3659,"Componente compat\xEDvel:"),og(),Sl(3660,"code"),rN(3661,"po-input"),og(),rN(3662,"."),og(),Sl(3663,"blockquote")(3664,"p"),rN(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(3666,"code"),rN(3667,"type: time"),og(),rN(3668,"."),og()()()(),Sl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),rN(3673," maskFormatModel"),Wl(3674,"br"),og()()(),Sl(3675,"td",21)(3676,"code",29),rN(3677,"boolean"),og()(),Sl(3678,"td",24)(3679,"em")(3680,"strong"),rN(3681,"(opcional)"),og()(),Sl(3682,"p"),rN(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Sl(3684,"code"),rN(3685,"false"),og(),rN(3686,"."),og(),Sl(3687,"p")(3688,"strong"),rN(3689,"Componente compat\xEDvel:"),og(),Sl(3690,"code"),rN(3691,"po-input"),og(),rN(3692,"."),og(),Sl(3693,"blockquote")(3694,"p"),rN(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(3696,"code"),rN(3697,"type: time"),og(),rN(3698,"."),og()()()(),Sl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),rN(3703," maskNoLengthValidation"),Wl(3704,"br"),og()()(),Sl(3705,"td",21)(3706,"code",29),rN(3707,"boolean"),og()(),Sl(3708,"td",24)(3709,"em")(3710,"strong"),rN(3711,"(opcional)"),og()(),Sl(3712,"p"),rN(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(3714,"code"),rN(3715,"minLength"),og(),rN(3716,") e m\xE1ximo ("),Sl(3717,"code"),rN(3718,"maxLength"),og(),rN(3719,") quando h\xE1 uma m\xE1scara ("),Sl(3720,"code"),rN(3721,"p-mask"),og(),rN(3722,") definida."),og(),Sl(3723,"ul")(3724,"li"),rN(3725,"Quando "),Sl(3726,"code"),rN(3727,"true"),og(),rN(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(3729,"li"),rN(3730,"Quando "),Sl(3731,"code"),rN(3732,"false"),og(),rN(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(3734,"p")(3735,"strong"),rN(3736,"Componentes compat\xEDveis:"),og(),Sl(3737,"code"),rN(3738,"po-input"),og(),rN(3739,", "),Sl(3740,"code"),rN(3741,"po-decimal"),og(),rN(3742,"."),og(),Sl(3743,"blockquote")(3744,"p"),rN(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(3746,"code"),rN(3747,"p-mask-format-model"),og(),rN(3748,"."),og()(),Sl(3749,"p"),rN(3750,"Exemplo:"),og(),Sl(3751,"pre")(3752,"code"),rN(3753,`fields:Array<PoDynamicFormField> = [
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
`),og()(),Sl(3754,"ul")(3755,"li"),rN(3756,"Entrada: "),Sl(3757,"code"),rN(3758,"11.111.111/1111-11"),og(),rN(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Sl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),rN(3764," maxLength"),Wl(3765,"br"),og()()(),Sl(3766,"td",21)(3767,"code",45),rN(3768,"number"),og()(),Sl(3769,"td",24)(3770,"em")(3771,"strong"),rN(3772,"(opcional)"),og()(),Sl(3773,"p"),rN(3774,"Tamanho m\xE1ximo de caracteres."),og(),Sl(3775,"p")(3776,"strong"),rN(3777,"Componentes compat\xEDveis:"),og(),Sl(3778,"code"),rN(3779,"po-input"),og(),rN(3780,", "),Sl(3781,"code"),rN(3782,"po-number"),og(),rN(3783,", "),Sl(3784,"code"),rN(3785,"po-decimal"),og(),rN(3786,", "),Sl(3787,"code"),rN(3788,"po-textarea"),og(),rN(3789,", "),Sl(3790,"code"),rN(3791,"po-password"),og(),rN(3792,"."),og()()(),Sl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),rN(3797," maxTime"),Wl(3798,"br"),og()()(),Sl(3799,"td",21)(3800,"code",27),rN(3801,"string"),og()(),Sl(3802,"td",24)(3803,"em")(3804,"strong"),rN(3805,"(opcional)"),og()(),Sl(3806,"p"),rN(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3808,"code"),rN(3809,"HH:mm"),og(),rN(3810," ou "),Sl(3811,"code"),rN(3812,"HH:mm:ss"),og(),rN(3813,"."),og(),Sl(3814,"p")(3815,"strong"),rN(3816,"Componente compat\xEDvel:"),og(),Sl(3817,"code"),rN(3818,"po-datetimepicker"),og(),rN(3819,", "),Sl(3820,"code"),rN(3821,"po-timepicker"),og()()()(),Sl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),rN(3826," maxValue"),Wl(3827,"br"),og()()(),Sl(3828,"td",21)(3829,"code",27),rN(3830,"string "),og(),Sl(3831,"code",45),rN(3832," number"),og()(),Sl(3833,"td",24)(3834,"em")(3835,"strong"),rN(3836,"(opcional)"),og()(),Sl(3837,"p"),rN(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3839,"em"),rN(3840,"number"),og(),rN(3841,", "),Sl(3842,"em"),rN(3843,"date"),og(),rN(3844,", "),Sl(3845,"em"),rN(3846,"dateTime"),og(),rN(3847," ou "),Sl(3848,"em"),rN(3849,"time"),og(),rN(3850,"."),og(),Sl(3851,"blockquote")(3852,"p"),rN(3853,"Para "),Sl(3854,"code"),rN(3855,"po-timepicker"),og(),rN(3856,", o valor deve estar no formato "),Sl(3857,"code"),rN(3858,"HH:mm"),og(),rN(3859," ou "),Sl(3860,"code"),rN(3861,"HH:mm:ss"),og(),rN(3862,"."),og()(),Sl(3863,"p")(3864,"strong"),rN(3865,"Componentes compat\xEDveis:"),og(),Sl(3866,"code"),rN(3867,"po-datepicker"),og(),rN(3868,", "),Sl(3869,"code"),rN(3870,"po-datepicker-range"),og(),rN(3871,", "),Sl(3872,"code"),rN(3873,"po-number"),og(),rN(3874,", "),Sl(3875,"code"),rN(3876,"po-decimal"),og(),rN(3877,", "),Sl(3878,"code"),rN(3879,"po-timepicker"),og()()()(),Sl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),rN(3884," minLength"),Wl(3885,"br"),og()()(),Sl(3886,"td",21)(3887,"code",45),rN(3888,"number"),og()(),Sl(3889,"td",24)(3890,"em")(3891,"strong"),rN(3892,"(opcional)"),og()(),Sl(3893,"p"),rN(3894,"Tamanho m\xEDnimo de caracteres."),og(),Sl(3895,"p")(3896,"strong"),rN(3897,"Componentes compat\xEDveis:"),og(),Sl(3898,"code"),rN(3899,"po-input"),og(),rN(3900,", "),Sl(3901,"code"),rN(3902,"po-number"),og(),rN(3903,", "),Sl(3904,"code"),rN(3905,"po-decimal"),og(),rN(3906,", "),Sl(3907,"code"),rN(3908,"po-textarea"),og(),rN(3909,", "),Sl(3910,"code"),rN(3911,"po-password"),og(),rN(3912,"."),og()()(),Sl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),rN(3917," minTime"),Wl(3918,"br"),og()()(),Sl(3919,"td",21)(3920,"code",27),rN(3921,"string"),og()(),Sl(3922,"td",24)(3923,"em")(3924,"strong"),rN(3925,"(opcional)"),og()(),Sl(3926,"p"),rN(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3928,"code"),rN(3929,"HH:mm"),og(),rN(3930," ou "),Sl(3931,"code"),rN(3932,"HH:mm:ss"),og(),rN(3933,"."),og(),Sl(3934,"p")(3935,"strong"),rN(3936,"Componente compat\xEDvel:"),og(),Sl(3937,"code"),rN(3938,"po-datetimepicker"),og(),rN(3939,", "),Sl(3940,"code"),rN(3941,"po-timepicker"),og()()()(),Sl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),rN(3946," minValue"),Wl(3947,"br"),og()()(),Sl(3948,"td",21)(3949,"code",27),rN(3950,"string "),og(),Sl(3951,"code",45),rN(3952," number"),og()(),Sl(3953,"td",24)(3954,"em")(3955,"strong"),rN(3956,"(opcional)"),og()(),Sl(3957,"p"),rN(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3959,"em"),rN(3960,"number"),og(),rN(3961,", "),Sl(3962,"em"),rN(3963,"date"),og(),rN(3964,", "),Sl(3965,"em"),rN(3966,"dateTime"),og(),rN(3967," ou "),Sl(3968,"em"),rN(3969,"time"),og(),rN(3970,"."),og(),Sl(3971,"blockquote")(3972,"p"),rN(3973,"Para "),Sl(3974,"code"),rN(3975,"po-timepicker"),og(),rN(3976,", o valor deve estar no formato "),Sl(3977,"code"),rN(3978,"HH:mm"),og(),rN(3979," ou "),Sl(3980,"code"),rN(3981,"HH:mm:ss"),og(),rN(3982,"."),og()(),Sl(3983,"p")(3984,"strong"),rN(3985,"Componentes compat\xEDveis:"),og(),Sl(3986,"code"),rN(3987,"po-datepicker"),og(),rN(3988,", "),Sl(3989,"code"),rN(3990,"po-datepicker-range"),og(),rN(3991,", "),Sl(3992,"code"),rN(3993,"po-number"),og(),rN(3994,", "),Sl(3995,"code"),rN(3996,"po-decimal"),og(),rN(3997,", "),Sl(3998,"code"),rN(3999,"po-timepicker"),og()()()(),Sl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),rN(4004," minuteInterval"),Wl(4005,"br"),og()()(),Sl(4006,"td",21)(4007,"code",45),rN(4008,"number"),og()(),Sl(4009,"td",24)(4010,"em")(4011,"strong"),rN(4012,"(opcional)"),og()(),Sl(4013,"p"),rN(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Sl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),rN(4019," mode"),Wl(4020,"br"),og()()(),Sl(4021,"td",21)(4022,"code",68),rN(4023,"'month-year' "),og(),Sl(4024,"code",69),rN(4025," 'year'"),og()(),Sl(4026,"td",24)(4027,"em")(4028,"strong"),rN(4029,"(opcional)"),og()(),Sl(4030,"p"),rN(4031,"Define o modo de sele\xE7\xE3o do "),Sl(4032,"code"),rN(4033,"po-datepicker"),og(),rN(4034,"."),og(),Sl(4035,"p"),rN(4036,"Valores aceitos:"),og(),Sl(4037,"ul")(4038,"li")(4039,"code"),rN(4040,"'month-year'"),og(),rN(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Sl(4042,"code"),rN(4043,"MM/YYYY"),og(),rN(4044,")"),og(),Sl(4045,"li")(4046,"code"),rN(4047,"'year'"),og(),rN(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Sl(4049,"code"),rN(4050,"YYYY"),og(),rN(4051,")"),og()(),Sl(4052,"p")(4053,"strong"),rN(4054,"Componente compat\xEDvel:"),og(),Sl(4055,"code"),rN(4056,"po-datepicker"),og()()()(),Sl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),rN(4061," modelFormat"),Wl(4062,"br"),og()()(),Sl(4063,"td",21)(4064,"code",70),rN(4065,"PoTimepickerModelFormat"),og()(),Sl(4066,"td",24)(4067,"em")(4068,"strong"),rN(4069,"(opcional)"),og()(),Sl(4070,"p"),rN(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Sl(4072,"code"),rN(4073,"po-timepicker"),og(),rN(4074,"."),og(),Sl(4075,"blockquote")(4076,"p"),rN(4077,"Veja os valores v\xE1lidos no "),Sl(4078,"code"),rN(4079,"PoTimepickerModelFormat"),og(),rN(4080,"."),og()(),Sl(4081,"p")(4082,"strong"),rN(4083,"Componente compat\xEDvel:"),og(),Sl(4084,"code"),rN(4085,"po-timepicker"),og()()()(),Sl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),rN(4090," multiple"),Wl(4091,"br"),og()()(),Sl(4092,"td",21)(4093,"code",29),rN(4094,"boolean"),og()(),Sl(4095,"td",24)(4096,"em")(4097,"strong"),rN(4098,"(opcional)"),og()(),Sl(4099,"p"),rN(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Sl(4101,"p")(4102,"strong"),rN(4103,"Componentes compat\xEDveis:"),og(),Sl(4104,"code"),rN(4105,"po-lookup"),og(),rN(4106,", "),Sl(4107,"code"),rN(4108,"po-upload"),og()()()(),Sl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),rN(4113," noAutocomplete"),Wl(4114,"br"),og()()(),Sl(4115,"td",21)(4116,"code",29),rN(4117,"boolean"),og()(),Sl(4118,"td",24)(4119,"em")(4120,"strong"),rN(4121,"(opcional)"),og()(),Sl(4122,"p"),rN(4123,"Define a propriedade nativa "),Sl(4124,"code"),rN(4125,"autocomplete"),og(),rN(4126," do campo como off."),og(),Sl(4127,"p")(4128,"strong"),rN(4129,"Componentes compat\xEDveis:"),og(),Sl(4130,"code"),rN(4131,"po-datepicker"),og(),rN(4132,", "),Sl(4133,"code"),rN(4134,"po-datepicker-range"),og(),rN(4135,", "),Sl(4136,"code"),rN(4137,"po-input"),og(),rN(4138,", "),Sl(4139,"code"),rN(4140,"po-number"),og(),rN(4141,", "),Sl(4142,"code"),rN(4143,"po-decimal"),og(),rN(4144,`,
`),Sl(4145,"code"),rN(4146,"po-lookup"),og(),rN(4147,", "),Sl(4148,"code"),rN(4149,"po-password"),og(),rN(4150,", "),Sl(4151,"code"),rN(4152,"po-timepicker"),og(),rN(4153,"."),og()()(),Sl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),rN(4158," offsetColumns"),Wl(4159,"br"),og()()(),Sl(4160,"td",21)(4161,"code",45),rN(4162,"number"),og()(),Sl(4163,"td",24)(4164,"em")(4165,"strong"),rN(4166,"(opcional)"),og()(),Sl(4167,"p"),rN(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Sl(4169,"p"),rN(4170,"Deve ser usado o sistema de "),Sl(4171,"strong"),rN(4172,"grid"),og(),rN(4173," do PO (1 ... 12 colunas)."),og(),Sl(4174,"blockquote")(4175,"p"),rN(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),rN(4181," offsetLgColumns"),Wl(4182,"br"),og()()(),Sl(4183,"td",21)(4184,"code",45),rN(4185,"number"),og()(),Sl(4186,"td",24)(4187,"em")(4188,"strong"),rN(4189,"(opcional)"),og()(),Sl(4190,"p"),rN(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(4192,"p"),rN(4193,"Deve ser usado o sistema de "),Sl(4194,"strong"),rN(4195,"grid"),og(),rN(4196," do PO (1 ... 12 colunas)."),og(),Sl(4197,"blockquote")(4198,"p"),rN(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4200,"code"),rN(4201,"offsetColumns"),og(),rN(4202,"."),og()()()(),Sl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),rN(4207," offsetMdColumns"),Wl(4208,"br"),og()()(),Sl(4209,"td",21)(4210,"code",45),rN(4211,"number"),og()(),Sl(4212,"td",24)(4213,"em")(4214,"strong"),rN(4215,"(opcional)"),og()(),Sl(4216,"p"),rN(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(4218,"p"),rN(4219,"Deve ser usado o sistema de "),Sl(4220,"strong"),rN(4221,"grid"),og(),rN(4222," do PO (1 ... 12 colunas)."),og(),Sl(4223,"blockquote")(4224,"p"),rN(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4226,"code"),rN(4227,"offsetColumns"),og(),rN(4228,"."),og()()()(),Sl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),rN(4233," offsetSmColumns"),Wl(4234,"br"),og()()(),Sl(4235,"td",21)(4236,"code",45),rN(4237,"number"),og()(),Sl(4238,"td",24)(4239,"em")(4240,"strong"),rN(4241,"(opcional)"),og()(),Sl(4242,"p"),rN(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(4244,"p"),rN(4245,"Deve ser usado o sistema de "),Sl(4246,"strong"),rN(4247,"grid"),og(),rN(4248," do PO (1 ... 12 colunas)."),og(),Sl(4249,"blockquote")(4250,"p"),rN(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4252,"code"),rN(4253,"offsetColumns"),og(),rN(4254,"."),og()()()(),Sl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),rN(4259," offsetXlColumns"),Wl(4260,"br"),og()()(),Sl(4261,"td",21)(4262,"code",45),rN(4263,"number"),og()(),Sl(4264,"td",24)(4265,"em")(4266,"strong"),rN(4267,"(opcional)"),og()(),Sl(4268,"p"),rN(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(4270,"p"),rN(4271,"Deve ser usado o sistema de "),Sl(4272,"strong"),rN(4273,"grid"),og(),rN(4274," do PO (1 ... 12 colunas)."),og(),Sl(4275,"blockquote")(4276,"p"),rN(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4278,"code"),rN(4279,"offsetColumns"),og(),rN(4280,"."),og()()()(),Sl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),rN(4285," onError"),Wl(4286,"br"),og()()(),Sl(4287,"td",21)(4288,"code",44),rN(4289,"Function"),og()(),Sl(4290,"td",24)(4291,"em")(4292,"strong"),rN(4293,"(opcional)"),og()(),Sl(4294,"p"),rN(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Sl(4296,"blockquote")(4297,"p"),rN(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(4299,"code"),rN(4300,"HttpErrorResponse"),og(),rN(4301,"."),og()(),Sl(4302,"p")(4303,"strong"),rN(4304,"Componente compat\xEDvel"),og(),rN(4305,": "),Sl(4306,"code"),rN(4307,"po-upload"),og()()()(),Sl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),rN(4312," onSuccess"),Wl(4313,"br"),og()()(),Sl(4314,"td",21)(4315,"code",44),rN(4316,"Function"),og()(),Sl(4317,"td",24)(4318,"em")(4319,"strong"),rN(4320,"(opcional)"),og()(),Sl(4321,"p"),rN(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Sl(4323,"blockquote")(4324,"p"),rN(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(4326,"code"),rN(4327,"HttpResponse"),og(),rN(4328,"."),og()(),Sl(4329,"p")(4330,"strong"),rN(4331,"Componente compat\xEDvel"),og(),rN(4332,": "),Sl(4333,"code"),rN(4334,"po-upload"),og()()()(),Sl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),rN(4339," onUpload"),Wl(4340,"br"),og()()(),Sl(4341,"td",21)(4342,"code",44),rN(4343,"Function"),og()(),Sl(4344,"td",24)(4345,"em")(4346,"strong"),rN(4347,"(opcional)"),og()(),Sl(4348,"p"),rN(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Sl(4350,"pre")(4351,"code"),rN(4352,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Sl(4353,"p")(4354,"strong"),rN(4355,"Componente compat\xEDvel"),og(),rN(4356,": "),Sl(4357,"code"),rN(4358,"po-upload"),og()()()(),Sl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),rN(4363," optional"),Wl(4364,"br"),og()()(),Sl(4365,"td",21)(4366,"code",29),rN(4367,"boolean"),og()(),Sl(4368,"td",24)(4369,"em")(4370,"strong"),rN(4371,"(opcional)"),og()(),Sl(4372,"p"),rN(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(4374,"blockquote")(4375,"p"),rN(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Sl(4377,"ul")(4378,"li"),rN(4379,"O campo for "),Sl(4380,"code"),rN(4381,"required"),og(),rN(4382,", ou;"),og(),Sl(4383,"li"),rN(4384,"N\xE3o possuir "),Sl(4385,"code"),rN(4386,"help"),og(),rN(4387," e "),Sl(4388,"code"),rN(4389,"label"),og(),rN(4390,"."),og()(),Sl(4391,"p")(4392,"strong"),rN(4393,"Componentes compat\xEDveis:"),og(),Sl(4394,"code"),rN(4395,"po-datepicker"),og(),rN(4396,", "),Sl(4397,"code"),rN(4398,"po-datepicker-range"),og(),rN(4399,", "),Sl(4400,"code"),rN(4401,"po-timepicker"),og(),rN(4402,", "),Sl(4403,"code"),rN(4404,"po-input"),og(),rN(4405,", "),Sl(4406,"code"),rN(4407,"po-number"),og(),rN(4408,`,
`),Sl(4409,"code"),rN(4410,"po-decimal"),og(),rN(4411,", "),Sl(4412,"code"),rN(4413,"po-select"),og(),rN(4414,", "),Sl(4415,"code"),rN(4416,"po-radio-group"),og(),rN(4417,", "),Sl(4418,"code"),rN(4419,"po-combo"),og(),rN(4420,", "),Sl(4421,"code"),rN(4422,"po-lookup"),og(),rN(4423,", "),Sl(4424,"code"),rN(4425,"po-checkbox-group"),og(),rN(4426,", "),Sl(4427,"code"),rN(4428,"po-multiselect"),og(),rN(4429,`,
`),Sl(4430,"code"),rN(4431,"po-textarea"),og(),rN(4432,", "),Sl(4433,"code"),rN(4434,"po-password"),og(),rN(4435,"."),og()()(),Sl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),rN(4440," options"),Wl(4441,"br"),og()()(),Sl(4442,"td",21)(4443,"code",32),rN(4444,"Array<string> "),og(),Sl(4445,"code",71),rN(4446," Array<PoSelectOption> "),og(),Sl(4447,"code",72),rN(4448," Array<PoMultiselectOption> "),og(),Sl(4449,"code",73),rN(4450," Array<PoCheckboxGroupOption> "),og(),Sl(4451,"code",74),rN(4452," Array<any>"),og()(),Sl(4453,"td",24)(4454,"em")(4455,"strong"),rN(4456,"(opcional)"),og()(),Sl(4457,"p"),rN(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Sl(4459,"p")(4460,"strong"),rN(4461,"Componentes compat\xEDveis:"),og(),Sl(4462,"code"),rN(4463,"po-select"),og(),rN(4464,", "),Sl(4465,"code"),rN(4466,"po-radio-group"),og(),rN(4467,", "),Sl(4468,"code"),rN(4469,"po-checkbox-group"),og(),rN(4470,", "),Sl(4471,"code"),rN(4472,"po-multiselect"),og(),rN(4473,"."),og()()(),Sl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),rN(4478," optionsMulti"),Wl(4479,"br"),og()()(),Sl(4480,"td",21)(4481,"code",29),rN(4482,"boolean"),og()(),Sl(4483,"td",24)(4484,"em")(4485,"strong"),rN(4486,"(opcional)"),og()(),Sl(4487,"p"),rN(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Sl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),rN(4493," optionsService"),Wl(4494,"br"),og()()(),Sl(4495,"td",21)(4496,"code",27),rN(4497,"string "),og(),Sl(4498,"code",75),rN(4499," PoComboFilter "),og(),Sl(4500,"code",76),rN(4501," PoMultiselectFilter"),og()(),Sl(4502,"td",24)(4503,"em")(4504,"strong"),rN(4505,"(opcional)"),og()(),Sl(4506,"p"),rN(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(4508,"strong"),rN(4509,"Importante"),og()(),Sl(4510,"blockquote")(4511,"p"),rN(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(4513,"a",7),rN(4514,"guia de API do PO UI"),og(),rN(4515,"."),og()()()(),Sl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),rN(4520," order"),Wl(4521,"br"),og()()(),Sl(4522,"td",21)(4523,"code",45),rN(4524,"number"),og()(),Sl(4525,"td",24)(4526,"em")(4527,"strong"),rN(4528,"(opcional)"),og()(),Sl(4529,"p"),rN(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Sl(4531,"p"),rN(4532,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(4533,"p")(4534,"code"),rN(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Sl(4536,"p"),rN(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Sl(4538,"code"),rN(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Sl(4540,"p"),rN(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Sl(4542,"p"),rN(4543,"Campos sem "),Sl(4544,"code"),rN(4545,"order"),og(),rN(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Sl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),rN(4551," params"),Wl(4552,"br"),og()()(),Sl(4553,"td",21)(4554,"code",33),rN(4555,"any"),og()(),Sl(4556,"td",24)(4557,"em")(4558,"strong"),rN(4559,"(opcional)"),og()(),Sl(4560,"p"),rN(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Sl(4562,"code"),rN(4563,"po-lookup"),og(),rN(4564,` e
`),Sl(4565,"code"),rN(4566,"po-combo"),og(),rN(4567,"."),og(),Sl(4568,"p"),rN(4569,"Por exemplo, para o par\xE2metro "),Sl(4570,"code"),rN(4571,"{ age: 23 }"),og(),rN(4572," a URL da requisi\xE7\xE3o ficaria:"),og(),Sl(4573,"p")(4574,"code"),rN(4575,"url + ?age=23&filter=Peter"),og()()()(),Sl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),rN(4580," pattern"),Wl(4581,"br"),og()()(),Sl(4582,"td",21)(4583,"code",27),rN(4584,"string"),og()(),Sl(4585,"td",24)(4586,"em")(4587,"strong"),rN(4588,"(opcional)"),og()(),Sl(4589,"p"),rN(4590,"Regex para valida\xE7\xE3o do campo."),og(),Sl(4591,"p")(4592,"strong"),rN(4593,"Componentes compat\xEDveis:"),og(),Sl(4594,"code"),rN(4595,"po-input"),og(),rN(4596,", "),Sl(4597,"code"),rN(4598,"po-password"),og(),rN(4599,"."),og()()(),Sl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),rN(4604," placeholder"),Wl(4605,"br"),og()()(),Sl(4606,"td",21)(4607,"code",27),rN(4608,"string"),og()(),Sl(4609,"td",24)(4610,"em")(4611,"strong"),rN(4612,"(opcional)"),og()(),Sl(4613,"p"),rN(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Sl(4615,"p")(4616,"strong"),rN(4617,"Componentes compat\xEDveis:"),og(),Sl(4618,"code"),rN(4619,"po-datepicker"),og(),rN(4620,", "),Sl(4621,"code"),rN(4622,"po-datepicker-range"),og(),rN(4623,", "),Sl(4624,"code"),rN(4625,"po-timepicker"),og(),rN(4626,", "),Sl(4627,"code"),rN(4628,"po-input"),og(),rN(4629,", "),Sl(4630,"code"),rN(4631,"po-number"),og(),rN(4632,", "),Sl(4633,"code"),rN(4634,"po-decimal"),og(),rN(4635,", "),Sl(4636,"code"),rN(4637,"po-select"),og(),rN(4638,", "),Sl(4639,"code"),rN(4640,"po-combo"),og(),rN(4641,", "),Sl(4642,"code"),rN(4643,"po-lookup"),og(),rN(4644,", "),Sl(4645,"code"),rN(4646,"po-multiselect"),og(),rN(4647,", "),Sl(4648,"code"),rN(4649,"po-textarea"),og(),rN(4650,", "),Sl(4651,"code"),rN(4652,"po-password"),og(),rN(4653,"."),og()()(),Sl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),rN(4658," placeholderSearch"),Wl(4659,"br"),og()()(),Sl(4660,"td",21)(4661,"code",27),rN(4662,"string"),og()(),Sl(4663,"td",24)(4664,"em")(4665,"strong"),rN(4666,"(opcional)"),og()(),Sl(4667,"p"),rN(4668,"Placeholder do campo de pesquisa do "),Sl(4669,"code"),rN(4670,"po-multiselect"),og(),rN(4671,"."),og(),Sl(4672,"blockquote")(4673,"p"),rN(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Sl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),rN(4679," property"),Wl(4680,"br"),og()()(),Sl(4681,"td",21)(4682,"code",27),rN(4683,"string"),og()(),Sl(4684,"td",24)(4685,"p"),rN(4686,"Nome de refer\xEAncia do campo."),og()()(),Sl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),rN(4691," range"),Wl(4692,"br"),og()()(),Sl(4693,"td",21)(4694,"code",29),rN(4695,"boolean"),og()(),Sl(4696,"td",24)(4697,"em")(4698,"strong"),rN(4699,"(opcional)"),og()(),Sl(4700,"p"),rN(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Sl(4702,"blockquote")(4703,"p"),rN(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Sl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),rN(4709," rangePresetOptions"),Wl(4710,"br"),og()()(),Sl(4711,"td",21)(4712,"code",77),rN(4713,"Array<PoCalendarRangePreset>"),og()(),Sl(4714,"td",24)(4715,"em")(4716,"strong"),rN(4717,"(opcional)"),og()(),Sl(4718,"p"),rN(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Sl(4720,"p"),rN(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Sl(4722,"code"),rN(4723,"PoCalendarRangePreset"),og(),rN(4724,"."),og(),Sl(4725,"p")(4726,"strong"),rN(4727,"Componente compat\xEDvel:"),og(),Sl(4728,"code"),rN(4729,"po-datepicker-range"),og()()()(),Sl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),rN(4734," rangePresets"),Wl(4735,"br"),og()()(),Sl(4736,"td",21)(4737,"code",29),rN(4738,"boolean "),og(),Sl(4739,"code",32),rN(4740," Array<string>"),og()(),Sl(4741,"td",24)(4742,"em")(4743,"strong"),rN(4744,"(opcional)"),og()(),Sl(4745,"p"),rN(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Sl(4747,"p"),rN(4748,"Aceita os seguintes valores:"),og(),Sl(4749,"ul")(4750,"li")(4751,"code"),rN(4752,"true"),og(),rN(4753,": exibe todos os presets padr\xE3o."),og(),Sl(4754,"li")(4755,"code"),rN(4756,"false"),og(),rN(4757,": n\xE3o exibe os presets padr\xE3o."),og(),Sl(4758,"li")(4759,"code"),rN(4760,"Array<string>"),og(),rN(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Sl(4762,"p")(4763,"strong"),rN(4764,"Componente compat\xEDvel:"),og(),Sl(4765,"code"),rN(4766,"po-datepicker-range"),og()()()(),Sl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),rN(4771," rangePresetsOrder"),Wl(4772,"br"),og()()(),Sl(4773,"td",21)(4774,"code",78),rN(4775,"'asc' "),og(),Sl(4776,"code",79),rN(4777," 'desc'"),og()(),Sl(4778,"td",24)(4779,"em")(4780,"strong"),rN(4781,"(opcional)"),og()(),Sl(4782,"p"),rN(4783,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Sl(4784,"p"),rN(4785,"Valores aceitos:"),og(),Sl(4786,"ul")(4787,"li")(4788,"code"),rN(4789,"'asc'"),og(),rN(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Sl(4791,"li")(4792,"code"),rN(4793,"'desc'"),og(),rN(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Sl(4795,"p")(4796,"strong"),rN(4797,"Componente compat\xEDvel:"),og(),Sl(4798,"code"),rN(4799,"po-datepicker-range"),og()()()(),Sl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),rN(4804," readonly"),Wl(4805,"br"),og()()(),Sl(4806,"td",21)(4807,"code",29),rN(4808,"boolean"),og()(),Sl(4809,"td",24)(4810,"em")(4811,"strong"),rN(4812,"(opcional)"),og()(),Sl(4813,"p"),rN(4814,"Indica que o campo ser\xE1 somente leitura."),og(),Sl(4815,"p")(4816,"strong"),rN(4817,"Componentes compat\xEDveis:"),og(),Sl(4818,"code"),rN(4819,"po-datepicker"),og(),rN(4820,", "),Sl(4821,"code"),rN(4822,"po-datepicker-range"),og(),rN(4823,", "),Sl(4824,"code"),rN(4825,"po-timepicker"),og(),rN(4826,", "),Sl(4827,"code"),rN(4828,"po-input"),og(),rN(4829,", "),Sl(4830,"code"),rN(4831,"po-number"),og(),rN(4832,`,
`),Sl(4833,"code"),rN(4834,"po-decimal"),og(),rN(4835,", "),Sl(4836,"code"),rN(4837,"po-select"),og(),rN(4838,", "),Sl(4839,"code"),rN(4840,"po-textarea"),og(),rN(4841,", "),Sl(4842,"code"),rN(4843,"po-password"),og(),rN(4844,"."),og()()(),Sl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),rN(4849," removeInitialFilter"),Wl(4850,"br"),og()()(),Sl(4851,"td",21)(4852,"code",29),rN(4853,"boolean"),og()(),Sl(4854,"td",24)(4855,"em")(4856,"strong"),rN(4857,"(opcional)"),og()(),Sl(4858,"p"),rN(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Sl(4860,"blockquote")(4861,"p"),rN(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Sl(4863,"p")(4864,"strong"),rN(4865,"Componente compat\xEDvel"),og(),rN(4866,": "),Sl(4867,"code"),rN(4868,"po-combo"),og()()()(),Sl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),rN(4873," required"),Wl(4874,"br"),og()()(),Sl(4875,"td",21)(4876,"code",29),rN(4877,"boolean"),og()(),Sl(4878,"td",24)(4879,"em")(4880,"strong"),rN(4881,"(opcional)"),og()(),Sl(4882,"p"),rN(4883,"Define a obrigatoriedade do campo."),og(),Sl(4884,"p")(4885,"strong"),rN(4886,"Componentes compat\xEDveis:"),og(),Sl(4887,"code"),rN(4888,"po-datepicker"),og(),rN(4889,", "),Sl(4890,"code"),rN(4891,"po-datepicker-range"),og(),rN(4892,", "),Sl(4893,"code"),rN(4894,"po-timepicker"),og(),rN(4895,", "),Sl(4896,"code"),rN(4897,"po-input"),og(),rN(4898,", "),Sl(4899,"code"),rN(4900,"po-number"),og(),rN(4901,`,
`),Sl(4902,"code"),rN(4903,"po-decimal"),og(),rN(4904,", "),Sl(4905,"code"),rN(4906,"po-select"),og(),rN(4907,", "),Sl(4908,"code"),rN(4909,"po-radio-group"),og(),rN(4910,", "),Sl(4911,"code"),rN(4912,"po-combo"),og(),rN(4913,", "),Sl(4914,"code"),rN(4915,"po-lookup"),og(),rN(4916,", "),Sl(4917,"code"),rN(4918,"po-checkbox-group"),og(),rN(4919,", "),Sl(4920,"code"),rN(4921,"po-multiselect"),og(),rN(4922,`,
`),Sl(4923,"code"),rN(4924,"po-textarea"),og(),rN(4925,", "),Sl(4926,"code"),rN(4927,"po-password``, "),og(),rN(4928,"po-upload`."),og()()(),Sl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),rN(4933," requiredFieldErrorMessage"),Wl(4934,"br"),og()()(),Sl(4935,"td",21)(4936,"code",29),rN(4937,"boolean"),og()(),Sl(4938,"td",24)(4939,"em")(4940,"strong"),rN(4941,"(opcional)"),og()(),Sl(4942,"p"),rN(4943,"Exibe a mensagem setada na propriedade "),Sl(4944,"code"),rN(4945,"errorMessage"),og(),rN(4946," se o campo estiver vazio e for requerido."),og(),Sl(4947,"blockquote")(4948,"p"),rN(4949,"Necess\xE1rio que a propriedade "),Sl(4950,"code"),rN(4951,"required"),og(),rN(4952," esteja habilitada."),og()(),Sl(4953,"p")(4954,"strong"),rN(4955,"Componentes compat\xEDveis:"),og(),Sl(4956,"code"),rN(4957,"po-datepicker"),og(),rN(4958,", "),Sl(4959,"code"),rN(4960,"po-timepicker"),og(),rN(4961,", "),Sl(4962,"code"),rN(4963,"po-input"),og(),rN(4964,", "),Sl(4965,"code"),rN(4966,"po-number"),og(),rN(4967,", "),Sl(4968,"code"),rN(4969,"po-decimal"),og(),rN(4970,", "),Sl(4971,"code"),rN(4972,"po-password"),og(),rN(4973,"."),og()()(),Sl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),rN(4978," restrictions"),Wl(4979,"br"),og()()(),Sl(4980,"td",21)(4981,"code",80),rN(4982,"PoUploadFileRestrictions"),og()(),Sl(4983,"td",24)(4984,"em")(4985,"strong"),rN(4986,"(opcional)"),og()(),Sl(4987,"p"),rN(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(4989,"code"),rN(4990,"PoUploadFileRestrictions"),og(),rN(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Sl(4992,"p")(4993,"strong"),rN(4994,"Componente compat\xEDvel"),og(),rN(4995,": "),Sl(4996,"code"),rN(4997,"po-upload"),og()()()(),Sl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),rN(5002," rows"),Wl(5003,"br"),og()()(),Sl(5004,"td",21)(5005,"code",45),rN(5006,"number"),og()(),Sl(5007,"td",24)(5008,"em")(5009,"strong"),rN(5010,"(opcional)"),og()(),Sl(5011,"p"),rN(5012,"Quantidade de linhas exibidas no "),Sl(5013,"code"),rN(5014,"po-textarea"),og(),rN(5015,"."),og()()(),Sl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),rN(5020," searchService"),Wl(5021,"br"),og()()(),Sl(5022,"td",21)(5023,"code",27),rN(5024,"string "),og(),Sl(5025,"code",34),rN(5026," PoLookupFilter"),og()(),Sl(5027,"td",24)(5028,"em")(5029,"strong"),rN(5030,"(opcional)"),og()(),Sl(5031,"p"),rN(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Sl(5033,"code"),rN(5034,"columns"),og(),rN(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Sl(5036,"strong"),rN(5037,"Importante:"),og()(),Sl(5038,"blockquote")(5039,"p"),rN(5040,"Caso utilizar a propriedade "),Sl(5041,"code"),rN(5042,"optionsService"),og(),rN(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(5044,"a",7),rN(5045,"guia de API do PO UI"),og(),rN(5046,"."),og()()()(),Sl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),rN(5051," secondInterval"),Wl(5052,"br"),og()()(),Sl(5053,"td",21)(5054,"code",45),rN(5055,"number"),og()(),Sl(5056,"td",24)(5057,"em")(5058,"strong"),rN(5059,"(opcional)"),og()(),Sl(5060,"p"),rN(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Sl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),rN(5066," secret"),Wl(5067,"br"),og()()(),Sl(5068,"td",21)(5069,"code",29),rN(5070,"boolean"),og()(),Sl(5071,"td",24)(5072,"em")(5073,"strong"),rN(5074,"(opcional)"),og()(),Sl(5075,"p"),rN(5076,"Esconde a informa\xE7\xE3o estilo "),Sl(5077,"em"),rN(5078,"password"),og(),rN(5079,", pode ser utilizado quando o tipo de dado for "),Sl(5080,"em"),rN(5081,"string"),og(),rN(5082,"."),og()()(),Sl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),rN(5087," showRequired"),Wl(5088,"br"),og()()(),Sl(5089,"td",21)(5090,"code",29),rN(5091,"boolean"),og()(),Sl(5092,"td",24)(5093,"em")(5094,"strong"),rN(5095,"(opcional)"),og()(),Sl(5096,"p"),rN(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(5098,"blockquote")(5099,"p"),rN(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(5101,"ul")(5102,"li"),rN(5103,"N\xE3o possuir "),Sl(5104,"code"),rN(5105,"p-help"),og(),rN(5106," e/ou "),Sl(5107,"code"),rN(5108,"p-label"),og(),rN(5109,"."),og()(),Sl(5110,"p")(5111,"strong"),rN(5112,"Componentes compat\xEDveis:"),og(),Sl(5113,"code"),rN(5114,"po-datepicker"),og(),rN(5115,", "),Sl(5116,"code"),rN(5117,"po-datepicker-range"),og(),rN(5118,", "),Sl(5119,"code"),rN(5120,"po-timepicker"),og(),rN(5121,", "),Sl(5122,"code"),rN(5123,"po-input"),og(),rN(5124,", "),Sl(5125,"code"),rN(5126,"po-number"),og(),rN(5127,`,
`),Sl(5128,"code"),rN(5129,"po-decimal"),og(),rN(5130,", "),Sl(5131,"code"),rN(5132,"po-select"),og(),rN(5133,", "),Sl(5134,"code"),rN(5135,"po-radio-group"),og(),rN(5136,", "),Sl(5137,"code"),rN(5138,"po-combo"),og(),rN(5139,", "),Sl(5140,"code"),rN(5141,"po-lookup"),og(),rN(5142,", "),Sl(5143,"code"),rN(5144,"po-checkbox-group"),og(),rN(5145,", "),Sl(5146,"code"),rN(5147,"po-multiselect"),og(),rN(5148,`,
`),Sl(5149,"code"),rN(5150,"po-textarea"),og(),rN(5151,", "),Sl(5152,"code"),rN(5153,"po-password"),og(),rN(5154,", "),Sl(5155,"code"),rN(5156,"po-upload"),og(),rN(5157,"."),og()()(),Sl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),rN(5162," showSeconds"),Wl(5163,"br"),og()()(),Sl(5164,"td",21)(5165,"code",29),rN(5166,"boolean"),og()(),Sl(5167,"td",24)(5168,"em")(5169,"strong"),rN(5170,"(opcional)"),og()(),Sl(5171,"p"),rN(5172,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Sl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),rN(5177," showThumbnail"),Wl(5178,"br"),og()()(),Sl(5179,"td",21)(5180,"code",29),rN(5181,"boolean"),og()(),Sl(5182,"td",24)(5183,"em")(5184,"strong"),rN(5185,"(opcional)"),og()(),Sl(5186,"p"),rN(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Sl(5188,"blockquote")(5189,"p"),rN(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(5191,"code"),rN(5192,".png"),og(),rN(5193,", "),Sl(5194,"code"),rN(5195,".jpg"),og(),rN(5196,", "),Sl(5197,"code"),rN(5198,".jpeg"),og(),rN(5199," e "),Sl(5200,"code"),rN(5201,".gif"),og(),rN(5202,")."),og()(),Sl(5203,"p")(5204,"strong"),rN(5205,"Componente compat\xEDvel"),og(),rN(5206,": "),Sl(5207,"code"),rN(5208,"po-upload"),og()()()(),Sl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),rN(5213," size"),Wl(5214,"br"),og()()(),Sl(5215,"td",21)(5216,"code",27),rN(5217,"string"),og()(),Sl(5218,"td",24)(5219,"em")(5220,"strong"),rN(5221,"(opcional)"),og()(),Sl(5222,"p"),rN(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Sl(5224,"ul")(5225,"li")(5226,"code"),rN(5227,"small"),og(),rN(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(5229,"li")(5230,"code"),rN(5231,"medium"),og(),rN(5232,": aplica a medida medium de cada componente."),og(),Sl(5233,"li")(5234,"code"),rN(5235,"large"),og(),rN(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Sl(5237,"code"),rN(5238,"po-checkbox"),og(),rN(5239," e "),Sl(5240,"code"),rN(5241,"po-radio-group"),og(),rN(5242,")."),Sl(5243,"blockquote")(5244,"p"),rN(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(5246,"code"),rN(5247,"medium"),og(),rN(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(5249,"a",40),rN(5250,"po-theme"),og(),rN(5251,"."),og()()()()()(),Sl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),rN(5256," sort"),Wl(5257,"br"),og()()(),Sl(5258,"td",21)(5259,"code",29),rN(5260,"boolean"),og()(),Sl(5261,"td",24)(5262,"em")(5263,"strong"),rN(5264,"(opcional)"),og()(),Sl(5265,"p"),rN(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Sl(5267,"p")(5268,"strong"),rN(5269,"Componentes compat\xEDveis:"),og(),Sl(5270,"code"),rN(5271,"po-combo"),og(),rN(5272,", po-multiselect"),og()()(),Sl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),rN(5277," step"),Wl(5278,"br"),og()()(),Sl(5279,"td",21)(5280,"code",45),rN(5281,"number"),og()(),Sl(5282,"td",24)(5283,"em")(5284,"strong"),rN(5285,"(opcional)"),og()(),Sl(5286,"p"),rN(5287,"Intervalo utilizado no "),Sl(5288,"code"),rN(5289,"po-number"),og(),rN(5290,"."),og()()(),Sl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),rN(5295," thousandMaxlength"),Wl(5296,"br"),og()()(),Sl(5297,"td",21)(5298,"code",45),rN(5299,"number"),og()(),Sl(5300,"td",24)(5301,"em")(5302,"strong"),rN(5303,"(opcional)"),og()(),Sl(5304,"p"),rN(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Sl(5306,"blockquote")(5307,"p"),rN(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(5309,"code"),rN(5310,"type"),og(),rN(5311," for "),Sl(5312,"em"),rN(5313,"currency"),og(),rN(5314," ou "),Sl(5315,"em"),rN(5316,"decimal"),og(),rN(5317,"."),og()()()(),Sl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),rN(5322," type"),Wl(5323,"br"),og()()(),Sl(5324,"td",21)(5325,"code",27),rN(5326,"string "),og(),Sl(5327,"code",81),rN(5328," PoDynamicFieldType"),og()(),Sl(5329,"td",24)(5330,"em")(5331,"strong"),rN(5332,"(opcional)"),og()(),Sl(5333,"p"),rN(5334,"Tipo do valor campo."),og(),Sl(5335,"p"),rN(5336,"Valores v\xE1lidos:"),og(),Sl(5337,"ul")(5338,"li")(5339,"code"),rN(5340,"boolean"),og(),rN(5341,": Valores "),Sl(5342,"em"),rN(5343,"booleanos"),og(),rN(5344,"."),og(),Sl(5345,"li")(5346,"code"),rN(5347,"currency"),og(),rN(5348,": Valores monet\xE1rios."),og(),Sl(5349,"li")(5350,"code"),rN(5351,"decimal"),og(),rN(5352,": Valores decimais."),og(),Sl(5353,"li")(5354,"code"),rN(5355,"date"),og(),rN(5356,": Valores de datas."),Sl(5357,"ul")(5358,"li"),rN(5359,"Aceita os tipos "),Sl(5360,"strong"),rN(5361,"string"),og(),rN(5362," e "),Sl(5363,"strong"),rN(5364,"Date"),og(),rN(5365,` padr\xE3o do Javascript,
por exemplo: `),Sl(5366,"code"),rN(5367,"'2017-11-28'"),og(),rN(5368," ou "),Sl(5369,"code"),rN(5370,"new Date(2017, 10, 28)"),og(),rN(5371,"."),og()()(),Sl(5372,"li")(5373,"code"),rN(5374,"dateTime"),og(),rN(5375,": Valor de data com hor\xE1rio."),Sl(5376,"ul")(5377,"li"),rN(5378,"Aceita o tipo "),Sl(5379,"em"),rN(5380,"string"),og(),rN(5381," no formato "),Sl(5382,"strong"),rN(5383,"ISO-8601"),og(),rN(5384," extendido "),Sl(5385,"strong"),rN(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),rN(5387,`
e o tipo `),Sl(5388,"strong"),rN(5389,"Date"),og(),rN(5390," padr\xE3o do Javascript, por exemplo: "),Sl(5391,"code"),rN(5392,"'2017-11-28T00:00:00-02:00'"),og(),rN(5393," ou "),Sl(5394,"code"),rN(5395,"new Date(2017, 10, 28)"),og(),rN(5396,"."),og()()(),Sl(5397,"li")(5398,"code"),rN(5399,"number"),og(),rN(5400,": Valores num\xE9ricos."),og(),Sl(5401,"li")(5402,"code"),rN(5403,"string"),og(),rN(5404,": Textos."),og(),Sl(5405,"li")(5406,"code"),rN(5407,"time"),og(),rN(5408,": Valor do hor\xE1rio."),Sl(5409,"ul")(5410,"li"),rN(5411,"Aceita o tipo "),Sl(5412,"strong"),rN(5413,"string"),og(),rN(5414," nos formatos "),Sl(5415,"strong"),rN(5416,"'HH:mm:ss'"),og(),rN(5417," ou "),Sl(5418,"strong"),rN(5419,"'HH:mm:ss.ffffff'"),og(),rN(5420,", por exemplo: "),Sl(5421,"code"),rN(5422,"'23:12:45'"),og(),rN(5423,"."),og()()()()()(),Sl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),rN(5428," url"),Wl(5429,"br"),og()()(),Sl(5430,"td",21)(5431,"code",27),rN(5432,"string"),og()(),Sl(5433,"td",24)(5434,"em")(5435,"strong"),rN(5436,"(opcional)"),og()(),Sl(5437,"p"),rN(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Sl(5439,"p")(5440,"strong"),rN(5441,"Componente compat\xEDvel"),og(),rN(5442,": "),Sl(5443,"code"),rN(5444,"po-upload"),og()()()(),Sl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),rN(5449," validate"),Wl(5450,"br"),og()()(),Sl(5451,"td",21)(5452,"code",27),rN(5453,"string "),og(),Sl(5454,"code",44),rN(5455," Function"),og()(),Sl(5456,"td",24)(5457,"em")(5458,"strong"),rN(5459,"(opcional)"),og()(),Sl(5460,"p"),rN(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(5462,"strong"),rN(5463,"mudan\xE7as do campo"),og(),rN(5464,"."),og(),Sl(5465,"ul")(5466,"li"),rN(5467,"A propriedade aceita os seguintes tipos:"),og()(),Sl(5468,"ul")(5469,"li")(5470,"strong"),rN(5471,"String"),og(),rN(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(5473,"code"),rN(5474,"POST"),og(),rN(5475,"."),og(),Sl(5476,"li")(5477,"strong"),rN(5478,"Function"),og(),rN(5479,": M\xE9todo que ser\xE1 executado."),og()(),Sl(5480,"p"),rN(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Sl(5482,"code"),rN(5483,"PoDynamicFormFieldChanged"),og(),rN(5484,":"),og(),Sl(5485,"p")(5486,"code"),rN(5487,"{ property: 'property name', value: 'new value' }"),og()(),Sl(5488,"p"),rN(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(5490,"a",82),rN(5491,"PoDynamicFormFieldValidation"),og(),rN(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Sl(5493,"pre")(5494,"code"),rN(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Sl(5496,"p"),rN(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(5498,"code"),rN(5499,"bind"),og(),rN(5500,`, por exemplo:
`),Sl(5501,"code"),rN(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Sl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),rN(5507," visible"),Wl(5508,"br"),og()()(),Sl(5509,"td",21)(5510,"code",29),rN(5511,"boolean"),og()(),Sl(5512,"td",24)(5513,"em")(5514,"strong"),rN(5515,"(opcional)"),og()(),Sl(5516,"p"),rN(5517,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Sl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),rN(5522," yearRangeLimit"),Wl(5523,"br"),og()()(),Sl(5524,"td",21)(5525,"code",45),rN(5526,"number"),og()(),Sl(5527,"td",24)(5528,"em")(5529,"strong"),rN(5530,"(opcional)"),og()(),Sl(5531,"p"),rN(5532,"Define o limite de anos exibidos na lista de anos do "),Sl(5533,"code"),rN(5534,"po-datepicker"),og(),rN(5535," nos modos "),Sl(5536,"code"),rN(5537,"month-year"),og(),rN(5538," e "),Sl(5539,"code"),rN(5540,"year"),og(),rN(5541,"."),og()()()(),Sl(5542,"h4",43)(5543,"code",5),rN(5544,"PoLookupColumn"),og()(),Sl(5545,"div",2)(5546,"p"),rN(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),og()(),Sl(5548,"h4",12),rN(5549,"Propriedades"),og(),Sl(5550,"table",13)(5551,"tr",14)(5552,"th",15),rN(5553,"Nome"),og(),Sl(5554,"th",15),rN(5555,"Tipo"),og(),Sl(5556,"th",15),rN(5557,"Descri\xE7\xE3o"),og()(),Sl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),rN(5562," fieldLabel"),Wl(5563,"br"),og()()(),Sl(5564,"td",21)(5565,"code",29),rN(5566,"boolean"),og()(),Sl(5567,"td",24)(5568,"em")(5569,"strong"),rN(5570,"(opcional)"),og()(),Sl(5571,"p"),rN(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),og(),Sl(5573,"p"),rN(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),og(),Sl(5575,"p"),rN(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Sl(5577,"code"),rN(5578,"p-field-format"),og(),rN(5579," ou "),Sl(5580,"code"),rN(5581,"p-field-label"),og(),rN(5582," forem configurados no componente."),og()()(),Sl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),rN(5587," format"),Wl(5588,"br"),og()()(),Sl(5589,"td",21)(5590,"code",27),rN(5591,"string"),og()(),Sl(5592,"td",24)(5593,"em")(5594,"strong"),rN(5595,"(opcional)"),og()(),Sl(5596,"p"),rN(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Sl(5598,"ul")(5599,"li"),rN(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og(),Sl(5601,"li"),rN(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()()()(),Sl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),rN(5607," label"),Wl(5608,"br"),og()()(),Sl(5609,"td",21)(5610,"code",27),rN(5611,"string"),og()(),Sl(5612,"td",24)(5613,"em")(5614,"strong"),rN(5615,"(opcional)"),og()(),Sl(5616,"p"),rN(5617,"Texto para t\xEDtulo da coluna."),og(),Sl(5618,"p"),rN(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(5620,"em"),rN(5621,"label"),og(),rN(5622," o valor da propriedade "),Sl(5623,"em"),rN(5624,"property"),og(),rN(5625," com a primeira letra em mai\xFAsculo."),og()()(),Sl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),rN(5630," mask"),Wl(5631,"br"),og()()(),Sl(5632,"td",21)(5633,"code",27),rN(5634,"string"),og()(),Sl(5635,"td",24)(5636,"em")(5637,"strong"),rN(5638,"(opcional)"),og()(),Sl(5639,"p"),rN(5640,"Define uma m\xE1scara para formata\xE7\xE3o do valor exibido na coluna."),og(),Sl(5641,"p"),rN(5642,"A m\xE1scara \xE9 aplicada somente para "),Sl(5643,"strong"),rN(5644,"exibi\xE7\xE3o"),og(),rN(5645,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),og(),Sl(5646,"p"),rN(5647,"Caracteres v\xE1lidos para a m\xE1scara:"),og(),Sl(5648,"ul")(5649,"li")(5650,"code"),rN(5651,"9"),og(),rN(5652," : aceita um d\xEDgito num\xE9rico (0-9)."),og(),Sl(5653,"li")(5654,"code"),rN(5655,"@"),og(),rN(5656," : aceita um caractere alfab\xE9tico (a-z, A-Z)."),og(),Sl(5657,"li")(5658,"code"),rN(5659,"w"),og(),rN(5660," : aceita um caractere alfanum\xE9rico (a-z, A-Z, 0-9)."),og(),Sl(5661,"li"),rN(5662,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Sl(5663,"code"),rN(5664,"."),og(),rN(5665,", "),Sl(5666,"code"),rN(5667,"-"),og(),rN(5668,", "),Sl(5669,"code"),rN(5670,"/"),og(),rN(5671,", "),Sl(5672,"code"),rN(5673,"("),og(),rN(5674,", "),Sl(5675,"code"),rN(5676,")"),og(),rN(5677,", "),Sl(5678,"code"),rN(5679,"+"),og(),rN(5680,", "),Wl(5681,"code"),rN(5682,")."),og()(),Sl(5683,"p"),rN(5684,"Exemplos de uso:"),og(),Sl(5685,"pre")(5686,"code"),rN(5687,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),og()(),Sl(5688,"blockquote")(5689,"p"),rN(5690,"Esta propriedade \xE9 utilizada apenas para colunas do tipo "),Sl(5691,"code"),rN(5692,"string"),og(),rN(5693,` (padr\xE3o).
Caso a coluna possua um `),Sl(5694,"code"),rN(5695,"type"),og(),rN(5696," diferente de "),Sl(5697,"code"),rN(5698,"string"),og(),rN(5699,", a m\xE1scara ser\xE1 ignorada."),og()()()(),Sl(5700,"tr",16)(5701,"td",17)(5702,"div",25)(5703,"span",26),rN(5704," property"),Wl(5705,"br"),og()()(),Sl(5706,"td",21)(5707,"code",27),rN(5708,"string"),og()(),Sl(5709,"td",24)(5710,"em")(5711,"strong"),rN(5712,"(opcional)"),og()(),Sl(5713,"p"),rN(5714,"Nome identificador da coluna."),og()()(),Sl(5715,"tr",16)(5716,"td",17)(5717,"div",25)(5718,"span",26),rN(5719," type"),Wl(5720,"br"),og()()(),Sl(5721,"td",21)(5722,"code",27),rN(5723,"string"),og()(),Sl(5724,"td",24)(5725,"em")(5726,"strong"),rN(5727,"(opcional)"),og()(),Sl(5728,"p"),rN(5729,"Tipo da coluna:"),og(),Sl(5730,"ul")(5731,"li"),rN(5732,"string (padr\xE3o): textos"),og(),Sl(5733,"li"),rN(5734,"number: valores num\xE9ricos"),og(),Sl(5735,"li"),rN(5736,"date: data"),og(),Sl(5737,"li"),rN(5738,"currency: valores monet\xE1rios"),og(),Sl(5739,"li"),rN(5740,"dateTime: data e hora"),og()()()(),Sl(5741,"tr",16)(5742,"td",17)(5743,"div",25)(5744,"span",26),rN(5745," width"),Wl(5746,"br"),og()()(),Sl(5747,"td",21)(5748,"code",27),rN(5749,"string"),og()(),Sl(5750,"td",24)(5751,"em")(5752,"strong"),rN(5753,"(opcional)"),og()(),Sl(5754,"p"),rN(5755,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),og()()()(),Sl(5756,"h4",43)(5757,"code",5),rN(5758,"PoLookupFilter"),og()(),Sl(5759,"div",2)(5760,"p"),rN(5761,"Define o tipo de busca utilizado no po-lookup."),og()(),Sl(5762,"h4",12),rN(5763,"M\xE9todos"),og(),Sl(5764,"table",41)(5765,"tr",16)(5766,"th",42)(5767,"div",25)(5768,"h4")(5769,"span",26),rN(5770," getFilteredItems "),og()()()()(),Sl(5771,"tr",24)(5772,"td",24)(5773,"p"),rN(5774,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Sl(5775,"em"),rN(5776,"Observable"),og(),rN(5777," com a resposta da API no formato da interface "),Sl(5778,"code"),rN(5779,"PoLookupResponseApi"),og(),rN(5780,"."),og()()()(),Sl(5781,"h5")(5782,"b"),rN(5783,"Par\xE2metros"),og()(),Sl(5784,"table",13)(5785,"tr",14)(5786,"th",15),rN(5787,"Nome"),og(),Sl(5788,"th",15),rN(5789,"Tipo"),og(),Sl(5790,"th",15),rN(5791,"Descri\xE7\xE3o"),og()(),Sl(5792,"tr",16)(5793,"td",17),rN(5794," params"),og(),Sl(5795,"td",21)(5796,"code",83),rN(5797," PoLookupFilteredItemsParams "),og()(),Sl(5798,"td",24)(5799,"p"),rN(5800,"Objeto enviado por par\xE2metro que implementa a interface "),Sl(5801,"code"),rN(5802,"PoLookupFilteredItemsParams"),og(),rN(5803,"."),og()()()(),Wl(5804,"br"),Sl(5805,"table",41)(5806,"tr",16)(5807,"th",42)(5808,"div",25)(5809,"h4")(5810,"span",26),rN(5811," getObjectByValue "),og()()()()(),Sl(5812,"tr",24)(5813,"td",24)(5814,"p"),rN(5815,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og(),Sl(5816,"p"),rN(5817,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),og()()()(),Sl(5818,"h5")(5819,"b"),rN(5820,"Par\xE2metros"),og()(),Sl(5821,"table",13)(5822,"tr",14)(5823,"th",15),rN(5824,"Nome"),og(),Sl(5825,"th",15),rN(5826,"Tipo"),og(),Sl(5827,"th",15),rN(5828,"Descri\xE7\xE3o"),og()(),Sl(5829,"tr",16)(5830,"td",17),rN(5831," value"),og(),Sl(5832,"td",21)(5833,"code",27),rN(5834," string "),og(),Sl(5835,"code",74),rN(5836," Array<any> "),og()(),Sl(5837,"td",24)(5838,"p"),rN(5839,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Sl(5840,"tr",16)(5841,"td",17),rN(5842," filterParams"),og(),Sl(5843,"td",21)(5844,"code",83),rN(5845," any "),og()(),Sl(5846,"td",24)(5847,"p"),rN(5848,"Valor informado atrav\xE9s da propriedade "),Sl(5849,"code"),rN(5850,"p-filter-params"),og(),rN(5851,"."),og()()()(),Wl(5852,"br"),Sl(5853,"h4",43)(5854,"code",5),rN(5855,"PoLookupFilteredItemsParams"),og()(),Sl(5856,"div",2)(5857,"p"),rN(5858,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Sl(5859,"code"),rN(5860,"getFilteredItems"),og(),rN(5861,"."),og()(),Sl(5862,"h4",12),rN(5863,"Propriedades"),og(),Sl(5864,"table",13)(5865,"tr",14)(5866,"th",15),rN(5867,"Nome"),og(),Sl(5868,"th",15),rN(5869,"Tipo"),og(),Sl(5870,"th",15),rN(5871,"Descri\xE7\xE3o"),og()(),Sl(5872,"tr",16)(5873,"td",17)(5874,"div",25)(5875,"span",26),rN(5876," advancedFilters"),Wl(5877,"br"),og()()(),Sl(5878,"td",21)(5879,"code",84),rN(5880,`{ [key: string]: any;
}`),og()(),Sl(5881,"td",24)(5882,"em")(5883,"strong"),rN(5884,"(opcional)"),og()(),Sl(5885,"p"),rN(5886,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),og()()(),Sl(5887,"tr",16)(5888,"td",17)(5889,"div",25)(5890,"span",26),rN(5891," filter"),Wl(5892,"br"),og()()(),Sl(5893,"td",21)(5894,"code",27),rN(5895,"string"),og()(),Sl(5896,"td",24)(5897,"em")(5898,"strong"),rN(5899,"(opcional)"),og()(),Sl(5900,"p"),rN(5901,"Conte\xFAdo utilizado para filtrar a lista de itens."),og()()(),Sl(5902,"tr",16)(5903,"td",17)(5904,"div",25)(5905,"span",26),rN(5906," filterParams"),Wl(5907,"br"),og()()(),Sl(5908,"td",21)(5909,"code",33),rN(5910,"any"),og()(),Sl(5911,"td",24)(5912,"em")(5913,"strong"),rN(5914,"(opcional)"),og()(),Sl(5915,"p"),rN(5916,"Valor informado atrav\xE9s da propriedade "),Sl(5917,"code"),rN(5918,"p-filter-params"),og(),rN(5919,"."),og()()(),Sl(5920,"tr",16)(5921,"td",17)(5922,"div",25)(5923,"span",26),rN(5924," order"),Wl(5925,"br"),og()()(),Sl(5926,"td",21)(5927,"code",27),rN(5928,"string"),og()(),Sl(5929,"td",24)(5930,"em")(5931,"strong"),rN(5932,"(opcional)"),og()(),Sl(5933,"p"),rN(5934,"Coluna que est\xE1 sendo ordenada na tabela."),og(),Sl(5935,"ul")(5936,"li"),rN(5937,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Sl(5938,"code"),rN(5939,"-<colunaOrdenada>"),og(),rN(5940,", por exemplo "),Sl(5941,"code"),rN(5942,"-name"),og(),rN(5943,"."),og(),Sl(5944,"li"),rN(5945,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Sl(5946,"code"),rN(5947,"<colunaOrdenada>"),og(),rN(5948,", por exemplo "),Sl(5949,"code"),rN(5950,"name"),og(),rN(5951,"."),og()()()(),Sl(5952,"tr",16)(5953,"td",17)(5954,"div",25)(5955,"span",26),rN(5956," page"),Wl(5957,"br"),og()()(),Sl(5958,"td",21)(5959,"code",45),rN(5960,"number"),og()(),Sl(5961,"td",24)(5962,"em")(5963,"strong"),rN(5964,"(opcional)"),og()(),Sl(5965,"p"),rN(5966,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),og()()(),Sl(5967,"tr",16)(5968,"td",17)(5969,"div",25)(5970,"span",26),rN(5971," pageSize"),Wl(5972,"br"),og()()(),Sl(5973,"td",21)(5974,"code",45),rN(5975,"number"),og()(),Sl(5976,"td",24)(5977,"em")(5978,"strong"),rN(5979,"(opcional)"),og()(),Sl(5980,"p"),rN(5981,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),og()()()(),Sl(5982,"h4",43)(5983,"code",5),rN(5984,"PoLookupLiterals"),og()(),Sl(5985,"div",2)(5986,"p"),rN(5987,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(5988,"code"),rN(5989,"po-lookup"),og(),rN(5990,"."),og()(),Sl(5991,"h4",12),rN(5992,"Propriedades"),og(),Sl(5993,"table",13)(5994,"tr",14)(5995,"th",15),rN(5996,"Nome"),og(),Sl(5997,"th",15),rN(5998,"Tipo"),og(),Sl(5999,"th",15),rN(6e3,"Descri\xE7\xE3o"),og()(),Sl(6001,"tr",16)(6002,"td",17)(6003,"div",25)(6004,"span",26),rN(6005," clean"),Wl(6006,"br"),og()()(),Sl(6007,"td",21)(6008,"code",27),rN(6009,"string"),og()(),Sl(6010,"td",24)(6011,"em")(6012,"strong"),rN(6013,"(opcional)"),og()(),Sl(6014,"p"),rN(6015,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),og()()(),Sl(6016,"tr",16)(6017,"td",17)(6018,"div",25)(6019,"span",26),rN(6020," modalAdvancedSearch"),Wl(6021,"br"),og()()(),Sl(6022,"td",21)(6023,"code",27),rN(6024,"string"),og()(),Sl(6025,"td",24)(6026,"em")(6027,"strong"),rN(6028,"(opcional)"),og()(),Sl(6029,"p"),rN(6030,"Texto do link de busca avan\xE7ada."),og(),Sl(6031,"p"),rN(6032,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),og()()(),Sl(6033,"tr",16)(6034,"td",17)(6035,"div",25)(6036,"span",26),rN(6037," modalAdvancedSearchPrimaryActionLabel"),Wl(6038,"br"),og()()(),Sl(6039,"td",21)(6040,"code",27),rN(6041,"string"),og()(),Sl(6042,"td",24)(6043,"em")(6044,"strong"),rN(6045,"(opcional)"),og()(),Sl(6046,"p"),rN(6047,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),og()()(),Sl(6048,"tr",16)(6049,"td",17)(6050,"div",25)(6051,"span",26),rN(6052," modalAdvancedSearchSecondaryActionLabel"),Wl(6053,"br"),og()()(),Sl(6054,"td",21)(6055,"code",27),rN(6056,"string"),og()(),Sl(6057,"td",24)(6058,"em")(6059,"strong"),rN(6060,"(opcional)"),og()(),Sl(6061,"p"),rN(6062,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),og()()(),Sl(6063,"tr",16)(6064,"td",17)(6065,"div",25)(6066,"span",26),rN(6067," modalAdvancedSearchTitle"),Wl(6068,"br"),og()()(),Sl(6069,"td",21)(6070,"code",27),rN(6071,"string"),og()(),Sl(6072,"td",24)(6073,"em")(6074,"strong"),rN(6075,"(opcional)"),og()(),Sl(6076,"p"),rN(6077,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),og()()(),Sl(6078,"tr",16)(6079,"td",17)(6080,"div",25)(6081,"span",26),rN(6082," modalDisclaimerGroupTitle"),Wl(6083,"br"),og()()(),Sl(6084,"td",21)(6085,"code",27),rN(6086,"string"),og()(),Sl(6087,"td",24)(6088,"em")(6089,"strong"),rN(6090,"(opcional)"),og()(),Sl(6091,"p"),rN(6092,"Texto exibido no t\xEDtulo do disclaimer."),og()()(),Sl(6093,"tr",16)(6094,"td",17)(6095,"div",25)(6096,"span",26),rN(6097," modalPlaceholder"),Wl(6098,"br"),og()()(),Sl(6099,"td",21)(6100,"code",27),rN(6101,"string"),og()(),Sl(6102,"td",24)(6103,"em")(6104,"strong"),rN(6105,"(opcional)"),og()(),Sl(6106,"p"),rN(6107,"Texto exibido no placeholder do input da modal."),og()()(),Sl(6108,"tr",16)(6109,"td",17)(6110,"div",25)(6111,"span",26),rN(6112," modalPrimaryActionLabel"),Wl(6113,"br"),og()()(),Sl(6114,"td",21)(6115,"code",27),rN(6116,"string"),og()(),Sl(6117,"td",24)(6118,"em")(6119,"strong"),rN(6120,"(opcional)"),og()(),Sl(6121,"p"),rN(6122,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),og()()(),Sl(6123,"tr",16)(6124,"td",17)(6125,"div",25)(6126,"span",26),rN(6127," modalSecondaryActionLabel"),Wl(6128,"br"),og()()(),Sl(6129,"td",21)(6130,"code",27),rN(6131,"string"),og()(),Sl(6132,"td",24)(6133,"em")(6134,"strong"),rN(6135,"(opcional)"),og()(),Sl(6136,"p"),rN(6137,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),og()()(),Sl(6138,"tr",16)(6139,"td",17)(6140,"div",25)(6141,"span",26),rN(6142," modalTableLoadMoreData"),Wl(6143,"br"),og()()(),Sl(6144,"td",21)(6145,"code",27),rN(6146,"string"),og()(),Sl(6147,"td",24)(6148,"em")(6149,"strong"),rN(6150,"(opcional)"),og()(),Sl(6151,"p"),rN(6152,"Label do "),Sl(6153,"code"),rN(6154,"button"),og(),rN(6155," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),og()()(),Sl(6156,"tr",16)(6157,"td",17)(6158,"div",25)(6159,"span",26),rN(6160," modalTableLoadingData"),Wl(6161,"br"),og()()(),Sl(6162,"td",21)(6163,"code",27),rN(6164,"string"),og()(),Sl(6165,"td",24)(6166,"em")(6167,"strong"),rN(6168,"(opcional)"),og()(),Sl(6169,"p"),rN(6170,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Sl(6171,"tr",16)(6172,"td",17)(6173,"div",25)(6174,"span",26),rN(6175," modalTableNoColumns"),Wl(6176,"br"),og()()(),Sl(6177,"td",21)(6178,"code",27),rN(6179,"string"),og()(),Sl(6180,"td",24)(6181,"em")(6182,"strong"),rN(6183,"(opcional)"),og()(),Sl(6184,"p"),rN(6185,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Sl(6186,"tr",16)(6187,"td",17)(6188,"div",25)(6189,"span",26),rN(6190," modalTableNoData"),Wl(6191,"br"),og()()(),Sl(6192,"td",21)(6193,"code",27),rN(6194,"string"),og()(),Sl(6195,"td",24)(6196,"em")(6197,"strong"),rN(6198,"(opcional)"),og()(),Sl(6199,"p"),rN(6200,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Sl(6201,"tr",16)(6202,"td",17)(6203,"div",25)(6204,"span",26),rN(6205," modalTitle"),Wl(6206,"br"),og()()(),Sl(6207,"td",21)(6208,"code",27),rN(6209,"string"),og()(),Sl(6210,"td",24)(6211,"em")(6212,"strong"),rN(6213,"(opcional)"),og()(),Sl(6214,"p"),rN(6215,"Texto exibido no t\xEDtulo da modal."),og()()(),Sl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),rN(6220," search"),Wl(6221,"br"),og()()(),Sl(6222,"td",21)(6223,"code",27),rN(6224,"string"),og()(),Sl(6225,"td",24)(6226,"em")(6227,"strong"),rN(6228,"(opcional)"),og()(),Sl(6229,"p"),rN(6230,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),og()()()(),Sl(6231,"h4",43)(6232,"code",5),rN(6233,"PoLookupResponseApi"),og()(),Sl(6234,"div",2)(6235,"p"),rN(6236,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),og()(),Sl(6237,"h4",12),rN(6238,"Propriedades"),og(),Sl(6239,"table",13)(6240,"tr",14)(6241,"th",15),rN(6242,"Nome"),og(),Sl(6243,"th",15),rN(6244,"Tipo"),og(),Sl(6245,"th",15),rN(6246,"Descri\xE7\xE3o"),og()(),Sl(6247,"tr",16)(6248,"td",17)(6249,"div",25)(6250,"span",26),rN(6251," hasNext"),Wl(6252,"br"),og()()(),Sl(6253,"td",21)(6254,"code",29),rN(6255,"boolean"),og()(),Sl(6256,"td",24)(6257,"p"),rN(6258,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),og()()(),Sl(6259,"tr",16)(6260,"td",17)(6261,"div",25)(6262,"span",26),rN(6263," items"),Wl(6264,"br"),og()()(),Sl(6265,"td",21)(6266,"code",85),rN(6267,"Array<object>"),og()(),Sl(6268,"td",24)(6269,"p"),rN(6270,"Lista de itens retornados."),og()()()(),Sl(6271,"h3"),rN(6272,"Enums"),og(),Sl(6273,"h4",4)(6274,"code",5),rN(6275,"PoTableColumnSpacing"),og()(),Sl(6276,"div",2)(6277,"p"),rN(6278,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Sl(6279,"strong"),rN(6280,"p-spacing"),og(),rN(6281,") do po-table."),og()(),Sl(6282,"h4",12),rN(6283,"Propriedades"),og(),Sl(6284,"table",13)(6285,"tr",14)(6286,"th",15),rN(6287,"Nome"),og(),Sl(6288,"th",15),rN(6289,"Descri\xE7\xE3o"),og()(),Sl(6290,"tr",16)(6291,"td",17)(6292,"div",25)(6293,"span",26),rN(6294," ExtraSmall"),Wl(6295,"br"),og()()(),Sl(6296,"td",24)(6297,"p"),rN(6298,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Sl(6299,"tr",16)(6300,"td",17)(6301,"div",25)(6302,"span",26),rN(6303," Small"),Wl(6304,"br"),og()()(),Sl(6305,"td",24)(6306,"p"),rN(6307,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Sl(6308,"tr",16)(6309,"td",17)(6310,"div",25)(6311,"span",26),rN(6312," Medium"),Wl(6313,"br"),og()()(),Sl(6314,"td",24)(6315,"p"),rN(6316,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Sl(6317,"tr",16)(6318,"td",17)(6319,"div",25)(6320,"span",26),rN(6321," Large"),Wl(6322,"br"),og()()(),Sl(6323,"td",24)(6324,"p"),rN(6325,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var Ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-lookup-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view")(11,"sample-po-lookup-mask-view"),og()()()),l&2&&(rw("p-actions",o.actions),Lp(2),rw("p-active",o.activeTab==="doc"),Lp(2),rw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ae,je,Ve,He,Be,Ue,Qe,Je],encapsulation:2,changeDetection:1})}return a})();var Ct=[{path:"",component:Ye}],$e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[mL.forChild(Ct),mL]})}return a})();var ni=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,$e]})}return a})();export{ni as DocPoLookupModule};