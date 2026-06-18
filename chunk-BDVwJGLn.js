import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,n as nb,dw as Up,w,cM as Z9,cN as lm,aL as Jue,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft$1,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,a_ as spe,a$ as o3,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,c9 as Yhe,ba as yNe,ap as Te,aB as Dx,aQ as hx,aR as fx,aM as ww,aN as QA,br as iN,aS as px,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,Y as aNe,_ as dme,a2 as JE,X as we,aI as dc,b6 as Yo,b7 as E3,cQ as Ik,cR as Ck,cz as kz,cp as Hhe,cX as L3,a3 as cNe,aA as Sx,aq as lx,at as ux,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic"]],standalone:false,decls:1,vars:0,template:function(o,i){o&1&&zl(0,"po-search");},dependencies:[Jue],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search Basic"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-basic/sample-po-search-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-search></po-search>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-search-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,$e,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,qe],encapsulation:2})}return a})();var nt=["poSearch"];function it(a,w){if(a&1&&(Il(0,"div")(1,"strong"),Qx(2),og(),Qx(3),og()),a&2){let r=w.$implicit,o=Sx().$implicit;Lp(2),dg("",r,": "),Lp(),dg(" ",o[r]," \xA0 ");}}function at(a,w){if(a&1&&(Il(0,"li"),hx(1,it,4,2,"div",null,fx),og()),a&2){let r=w.$implicit,o=Sx();Lp(),px(o.changeFilter(r));}}var Be=(()=>{class a{http=f(nb);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Up.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}ngOnChanges(r){r.items&&(this.filteredItems=this.items);}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"]);});}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r);}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r);}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change";}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o);}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"");}catch(r){this.customLiterals=void 0;}}changeEvent(r){setTimeout(()=>{this.event=r;});}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"");}catch(r){this.customLocateSummary=void 0;}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Up.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService();}cleanInput(){try{this.poSearch.clearSearch();}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&Gl(nt,7),o&2){let p;co(p=lo())&&(i.poSearch=p.first);}},standalone:false,features:[Te],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=Dx();Il(0,"div",2)(1,"po-search",3,0),ft$1("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),og()(),zl(3,"po-divider"),Il(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),hx(9,at,3,0,"li",null,fx),og()()()()(),zl(11,"po-divider"),Il(12,"div",2),zl(13,"po-info",7)(14,"po-info",8),og(),zl(15,"po-divider"),Il(16,"form",null,1)(18,"po-input",9),ww("ngModelChange",function(d){return Xy(p),eN(i.ariaLabel,d)||(i.ariaLabel=d),Qy(d)}),og(),QA(),Il(19,"po-input",10),ww("ngModelChange",function(d){return Xy(p),eN(i.itemsModel,d)||(i.itemsModel=d),Qy(d)}),ft$1("p-change-model",function(d){return i.changeItems(d)}),og(),QA(),Il(20,"po-checkbox-group",11),ww("ngModelChange",function(d){return Xy(p),eN(i.properties,d)||(i.properties=d),Qy(d)}),og(),QA(),Il(21,"po-radio-group",12),ww("ngModelChange",function(d){return Xy(p),eN(i.icon,d)||(i.icon=d),Qy(d)}),og(),QA(),Il(22,"po-radio-group",13),ww("ngModelChange",function(d){return Xy(p),eN(i.searchMode,d)||(i.searchMode=d),Qy(d)}),og(),QA(),Il(23,"po-radio-group",14),ww("ngModelChange",function(d){return Xy(p),eN(i.filterMode,d)||(i.filterMode=d),Qy(d)}),og(),QA(),Il(24,"po-radio-group",15),ww("ngModelChange",function(d){return Xy(p),eN(i.size,d)||(i.size=d),Qy(d)}),og(),QA(),Il(25,"po-input",16),ww("ngModelChange",function(d){return Xy(p),eN(i.locateSummary,d)||(i.locateSummary=d),Qy(d)}),ft$1("p-change",function(){return i.changeLocateSummary()}),og(),QA(),Il(26,"po-input",17),ww("ngModelChange",function(d){return Xy(p),eN(i.literals,d)||(i.literals=d),Qy(d)}),ft$1("p-change",function(){return i.changeLiterals()}),og(),QA(),Il(27,"po-input",18),ww("ngModelChange",function(d){return Xy(p),eN(i.filterModel,d)||(i.filterModel=d),Qy(d)}),ft$1("p-change-model",function(d){return i.updateFilterKeys(d)}),og(),QA(),Il(28,"po-input",19),ww("ngModelChange",function(d){return Xy(p),eN(i.filterSelectModel,d)||(i.filterSelectModel=d),Qy(d)}),ft$1("p-change",function(d){return i.updateFilterSelect(d)}),og(),QA(),zl(29,"po-divider"),Il(30,"div",2)(31,"po-button",20),ft$1("p-click",function(){return i.restore()}),og()()();}o&2&&(Lp(),nw("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),Lp(5),nw("p-label",iN("Itens encontrados: ",i.filteredItems?.length)),Lp(3),px(i.filteredItems),Lp(4),nw("p-value",i.search),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.ariaLabel),e0(),Lp(),Ew("ngModel",i.itemsModel),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),e0(),Lp(),Ew("ngModel",i.searchMode),nw("p-options",i.searchModeOptions),e0(),Lp(),Ew("ngModel",i.filterMode),nw("p-options",i.filterModeOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0(),Lp(),Ew("ngModel",i.locateSummary),e0(),Lp(),Ew("ngModel",i.literals),e0(),Lp(),Ew("ngModel",i.filterModel),e0(),Lp(),Ew("ngModel",i.filterSelectModel),e0());},dependencies:[G9,$9,z9,mk,hk,spe,o3,Qt,mv,C3,O3,Dde,Yhe,yNe,Jue],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search Labs"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-labs/sample-po-search-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="filter($event)"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
                </div>
              }
            </li>
          }
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styleUrls: ['./sample-po-search-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  protected http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' | 'execute' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Execute', value: 'execute' },
    { label: 'Locate', value: 'locate' },
    { label: 'Trigger', value: 'trigger' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-search-labs/sample-po-search-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-search-labs"),og(),zl(29,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,lt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Be],encapsulation:2})}return a})();var le=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function st(a,w){if(a&1&&(Il(0,"div",0),zl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),og()),a&2){let r=w.$implicit;Lp(),nw("p-value",r.name),Lp(),nw("p-value",r.nickname),Lp(),nw("p-value",r.email);}}function mt(a,w){a&1&&zl(0,"div");}function pt(a,w){if(a&1&&(Il(0,"li",7),Qx(1),lx(2,mt,1,0,"div"),og(),Il(3,"li",7),Qx(4),og()),a&2){let r=w.$implicit,o=Sx();Lp(),dg(" Nickname: ",r.nickname," "),Lp(),ux(o.compareObjects(r)?2:-1),Lp(2),dg("Email: ",r.email);}}var Ve=(()=>{class a{service=f(le);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people"]],standalone:false,features:[we([le])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(Il(0,"div",0)(1,"po-search",1),ft$1("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),zl(2,"po-divider"),hx(3,st,4,3,"div",0,fx),zl(5,"po-divider"),Il(6,"po-list-view",2),JE(7,pt,5,3,"ng-template",3),og()),o&2&&(Lp(),nw("p-items",i.items)("p-filter-keys",i.filterKeys),Lp(2),px(i.peopleFiltered),Lp(3),nw("p-items",i.items));},dependencies:[mv,Yhe,aNe,dme,Jue],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search Find People"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<po-divider />

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}

<po-divider />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styleUrls: ['./sample-po-search-find-people.component.css'],
  providers: [SamplePoSearchFindPeopleService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  private service = inject(SamplePoSearchFindPeopleService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),og()()(),Il(25,"po-tab",10)(26,"div")(27,"label",6),Qx(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),og(),Il(29,"pre",11),Qx(30,`li {
  list-style: none;
  display: flex;
  align-items: center;
}

li div {
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  background-color: green;
  margin-left: 10px;
}
`),og()()()()(),Il(31,"div",12),zl(32,"sample-po-search-find-people"),og(),zl(33,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ct,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ve],encapsulation:2})}return a})();var re=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ht(a,w){if(a&1&&(Il(0,"div",0),zl(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),og()),a&2){let r=w.$implicit;Lp(2),nw("p-value",r.name),Lp(),nw("p-value",r.nickname),Lp(),nw("p-value",r.email);}}var je=(()=>{class a{service=f(re);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox"]],standalone:false,features:[we([re])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(Il(0,"div",0)(1,"po-search",1),ft$1("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),hx(2,ht,5,3,"div",0,fx)),o&2&&(Lp(),nw("p-items",i.items)("p-filter-keys",i.filterKeys),Lp(),px(i.peopleFiltered));},dependencies:[mv,Yhe,Jue],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search With Listbox"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-divider />
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  private service = inject(SamplePoSearchListboxService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-search-listbox"),og(),zl(27,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ft,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,je],encapsulation:2})}return a})();function Et(a,w){if(a&1&&(Il(0,"div",0)(1,"po-container",2),zl(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),og()()),a&2){let r=w.$implicit;Lp(2),nw("p-value",r.name),Lp(),nw("p-value",r.gender),Lp(),nw("p-value",r.planet),Lp(),nw("p-value",r.father);}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}];}filtered(r){this.filteredItems=r;}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select"]],standalone:false,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(Il(0,"div",0)(1,"po-search",1),ft$1("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),hx(2,Et,6,4,"div",0,fx)),o&2&&(Lp(),nw("p-items",i.items)("p-filter-select",i.filterSelect),Lp(),px(i.filteredItems));},dependencies:[dc,Yhe,Jue],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search With Filter Select + Listbox"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

@for (people of filteredItems; track people) {
  <div class="po-row">
    <po-container class="po-row po-mt-2">
      <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
      <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
      <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
      <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
    </po-container>
  </div>
}
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-search-filter-select"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,vt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Re],encapsulation:2})}return a})();var Ke=(()=>{class a{poModal;filterType=Up.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&Gl(Yo,7),o&2){let p;co(p=lo())&&(i.poModal=p.first);}},standalone:false,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(Il(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),Qx(4,"Entre com o nome ou c\xF3digo da rotina"),og()(),Il(5,"div",1)(6,"po-search",3),ft$1("p-footer-action-listbox",function(){return i.footerAction()}),og()()()(),Il(7,"po-modal",4,0),zl(9,"po-table",5),og()),o&2&&(Lp(),nw("p-height",180),Lp(5),nw("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),Lp(3),nw("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",true));},dependencies:[Yo,E3,yNe,Jue],styles:[".full[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search Form Fields with Execute"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-execute/sample-po-search-execute.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-title="Pesquisar e executar"
    p-help="https://github.com/po-ui/po-angular/stargazers"
    [p-height]="180"
  >
    <div class="po-row">
      <span>Entre com o nome ou c\xF3digo da rotina</span>
    </div>
    <div class="po-row">
      <po-search
        class="po-mt-2 full"
        name="Po Search"
        [p-search-type]="'execute'"
        [p-items]="itemsAction"
        [p-filter-type]="filterType"
        [p-filter-keys]="filterKeysAction"
        [p-keys-label]="keysLabel"
        (p-footer-action-listbox)="footerAction()"
      />
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Rotinas">
  <po-table [p-columns]="columns" [p-items]="itemsAction" [p-hide-columns-manager]="true"> </po-table>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSearchFilterMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-execute',
  templateUrl: './sample-po-search-execute.component.html',
  styleUrls: ['./sample-po-search-execute.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchExecuteComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  filterType = PoSearchFilterMode.contains;
  filterKeysAction: Array<string> = ['rotina', 'codigo', 'modulo', 'versao'];
  keysLabel: Array<string> = ['rotina', 'codigo'];

  itemsAction = [
    {
      rotina: 'Contas a Pagar',
      codigo: 'MATA103',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Contas a Pagar\`)
    },
    {
      rotina: 'Cota\xE7\xE3o de Fornecedores',
      codigo: 'MATA140',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Cota\xE7\xE3o de Fornecedores\`)
    },
    {
      rotina: 'Meus Funcionarios',
      codigo: 'XPTO987',
      modulo: 'RH',
      versao: '1.2.3',
      url: 'documentation/po-widget'
    }
  ];

  columns = [
    { property: 'rotina', label: 'Rotina' },
    { property: 'codigo', label: 'C\xF3digo' },
    { property: 'modulo', label: 'M\xF3dulo' },
    { property: 'versao', label: 'Vers\xE3o' }
  ];

  footerAction() {
    this.poModal.open();
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-search-execute/sample-po-search-execute.component.css"),og(),Il(25,"pre",11),Qx(26,`.full {
  width: 100%;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-search-execute"),og(),zl(29,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ct,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ke],encapsulation:2})}return a})();var _t=["nameInput"],Mt=["cpfInput"],wt=["addressInput"],It=["numberInput"],Tt=["emailInput"],kt=["websiteInput"],Ft=["reactiveFormData"],Ue=(()=>{class a{fb=f(Z9);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=true;locateSummary={currentIndex:0,total:0};filterType=Up.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm();}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}];}createForm(){this.reactiveForm=this.fb.group({name:["",[lm.required,lm.minLength(5)]],cpf:["",lm.required],address:["",lm.required],number:["",lm.required],email:["",lm.required],website:["",lm.required]});}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i};}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent();}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent();}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary());}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary());}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r};}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus());}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&Gl(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;co(p=lo())&&(i.nameInput=p.first),co(p=lo())&&(i.cpfInput=p.first),co(p=lo())&&(i.addressInput=p.first),co(p=lo())&&(i.numberInput=p.first),co(p=lo())&&(i.emailInput=p.first),co(p=lo())&&(i.websiteInput=p.first),co(p=lo())&&(i.reactiveFormModal=p.first);}},standalone:false,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(Il(0,"div",7)(1,"div",8)(2,"po-search",9),ft$1("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),og()()(),zl(3,"po-divider"),Il(4,"form",10)(5,"div",7),zl(6,"po-input",11,0),QA(),zl(8,"po-input",12,1),QA(),og(),Il(10,"div",7),zl(11,"po-input",13,2),QA(),zl(13,"po-number",14,3),QA(),og(),Il(15,"div",7),zl(16,"po-email",15,4),QA(),zl(18,"po-url",16,5),QA(),og(),Il(20,"div",7)(21,"po-button",17),ft$1("p-click",function(){return i.saveForm()}),og()()(),Il(22,"po-modal",18,6)(24,"div",7),zl(25,"po-info",19)(26,"po-info",20),og(),zl(27,"po-divider"),Il(28,"div",7),zl(29,"po-info",21)(30,"po-info",22),og(),zl(31,"po-divider"),Il(32,"div",7),zl(33,"po-info",23)(34,"po-info",24),og()()),o&2&&(Lp(2),nw("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),Lp(2),nw("formGroup",i.reactiveForm),Lp(2),e0(),Lp(2),e0(),Lp(3),e0(),Lp(2),e0(),Lp(3),e0(),Lp(2),e0(),Lp(3),nw("p-disabled",!i.reactiveForm.valid),Lp(),nw("p-primary-action",i.modalPrimaryAction),Lp(3),nw("p-value",i.reactiveForm.controls.name.value),Lp(),nw("p-value",i.reactiveForm.controls.cpf.value),Lp(3),nw("p-value",i.reactiveForm.controls.address.value),Lp(),nw("p-value",i.reactiveForm.controls.number.value),Lp(3),nw("p-value",i.reactiveForm.controls.email.value),Lp(),nw("p-value",i.reactiveForm.controls.website.value));},dependencies:[G9,$9,z9,Ik,Ck,Qt,mv,kz,O3,Hhe,L3,Yhe,Yo,Jue],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Search Form Fields with Locate"),og(),Il(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <div class="po-ml-1 po-mr-1">
    <po-search
      p-search-type="locate"
      [p-literals]="searchLiterals"
      [p-locate-summary]="locateSummary"
      (p-change-model)="updateSearchTerm($event)"
      (p-locate-next)="onNextOccurrenceClick()"
      (p-locate-previous)="onPreviousOccurrenceClick()"
    />
  </div>
</div>
<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  protected fb = inject(UntypedFormBuilder);

  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  firstSearch = true;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    console.log('updateSearchTerm');
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    this.currentIndex = -1;

    const total = this.filteredIndexes.length;

    this.locateSummary = {
      currentIndex: 0,
      total: total
    };
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    console.log('onNextOccurrenceClick');
    this.goToNextOccurrence();
    this.focusCurrent();
  }

  onPreviousOccurrenceClick() {
    console.log('onPreviousOccurrenceClick');
    this.goToPreviousOccurrence();
    this.focusCurrent();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-search-fields-locate"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Lt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ue],encapsulation:2})}return a})();var Qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-doc"]],standalone:false,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoSearchModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-search."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoSearchComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),og(),Il(15,"p"),Qx(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),og(),Il(17,"h4"),Qx(18,"Boas pr\xE1ticas"),og(),Il(19,"p"),Qx(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),og(),Il(21,"ul")(22,"li"),Qx(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),og(),Il(24,"li"),Qx(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),og(),Il(26,"li"),Qx(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),og(),Il(28,"li"),Qx(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),og(),Il(30,"li"),Qx(31,"Quando apropriado, destaque os termos da busca nos resultados."),og(),Il(32,"li"),Qx(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),og(),Il(34,"li"),Qx(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),og(),Il(36,"li"),Qx(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),og()(),Il(38,"h4"),Qx(39,"Acessibilidade tratada no componente"),og(),Il(40,"p"),Qx(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),og(),Il(42,"ul")(43,"li"),Qx(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),og(),Il(45,"li"),Qx(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),og()(),Il(47,"h4"),Qx(48,"Tokens customiz\xE1veis"),og(),Il(49,"p"),Qx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(51,"blockquote")(52,"p"),Qx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(54,"a",6),Qx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(56,"."),og()(),Il(57,"table")(58,"thead")(59,"tr")(60,"th"),Qx(61,"Propriedade"),og(),Il(62,"th"),Qx(63,"Descri\xE7\xE3o"),og(),Il(64,"th"),Qx(65,"Valor Padr\xE3o"),og()()(),Il(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Qx(70,"Default Values"),og()(),zl(71,"td")(72,"td"),og(),Il(73,"tr")(74,"td")(75,"code"),Qx(76,"--font-family"),og()(),Il(77,"td"),Qx(78,"Fam\xEDlia tipogr\xE1fica do campo"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--font-family-theme)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--font-size"),og()(),Il(86,"td"),Qx(87,"Tamanho da fonte do campo"),og(),Il(88,"td")(89,"code"),Qx(90,"var(--font-size-default)"),og()()(),Il(91,"tr")(92,"td")(93,"code"),Qx(94,"--text-color-placeholder"),og()(),Il(95,"td"),Qx(96,"Cor do texto no placeholder"),og(),Il(97,"td")(98,"code"),Qx(99,"var(--color-neutral-light-30)"),og()()(),Il(100,"tr")(101,"td")(102,"code"),Qx(103,"--color"),og()(),Il(104,"td"),Qx(105,"Cor das bordas"),og(),Il(106,"td")(107,"code"),Qx(108,"var(--color-neutral-dark-70)"),og()()(),Il(109,"tr")(110,"td")(111,"code"),Qx(112,"--border-radius"),og()(),Il(113,"td"),Qx(114,"Raio das bordas"),og(),Il(115,"td")(116,"code"),Qx(117,"var(--border-radius-md)"),og()()(),Il(118,"tr")(119,"td")(120,"code"),Qx(121,"--background"),og()(),Il(122,"td"),Qx(123,"Cor de background"),og(),Il(124,"td")(125,"code"),Qx(126,"var(--color-neutral-light-05)"),og()()(),Il(127,"tr")(128,"td")(129,"code"),Qx(130,"--text-color"),og()(),Il(131,"td"),Qx(132,"Cor do texto edit\xE1vel"),og(),Il(133,"td")(134,"code"),Qx(135,"var(--color-neutral-dark-90)"),og()()(),Il(136,"tr")(137,"td")(138,"code"),Qx(139,"--color-clear"),og()(),Il(140,"td"),Qx(141,"Cor do \xEDcone close"),og(),Il(142,"td")(143,"code"),Qx(144,"var(--color-action-default)"),og()()(),Il(145,"tr")(146,"td")(147,"code"),Qx(148,"--color-controls"),og()(),Il(149,"td"),Qx(150,"Cor dos \xEDcones de controle do mode location"),og(),Il(151,"td")(152,"code"),Qx(153,"var(--color-action-default)"),og()()(),Il(154,"tr")(155,"td")(156,"code"),Qx(157,"--transition-property"),og()(),Il(158,"td"),Qx(159,"Atributo da transi\xE7\xE3o"),og(),Il(160,"td")(161,"code"),Qx(162,"all"),og()()(),Il(163,"tr")(164,"td")(165,"code"),Qx(166,"--transition-duration"),og()(),Il(167,"td"),Qx(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),og(),Il(169,"td")(170,"code"),Qx(171,"var(--duration-extra-fast)"),og()()(),Il(172,"tr")(173,"td")(174,"code"),Qx(175,"--transition-timing"),og()(),Il(176,"td"),Qx(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),og(),Il(178,"td")(179,"code"),Qx(180,"var(--timing-standart)"),og()()(),Il(181,"tr")(182,"td")(183,"strong"),Qx(184,"Icon"),og()(),zl(185,"td")(186,"td"),og(),Il(187,"tr")(188,"td")(189,"code"),Qx(190,"--color-icon-read"),og()(),Il(191,"td"),Qx(192,"Cor do \xEDcone de busca no modo action"),og(),Il(193,"td")(194,"code"),Qx(195,"var(--color-neutral-dark-70)"),og()()(),Il(196,"tr")(197,"td")(198,"code"),Qx(199,"--color-icon"),og()(),Il(200,"td"),Qx(201,"Cor do \xEDcone de busca no modo trigger"),og(),Il(202,"td")(203,"code"),Qx(204,"var(--color-action-default)"),og()()(),Il(205,"tr")(206,"td")(207,"strong"),Qx(208,"Hover"),og()(),zl(209,"td")(210,"td"),og(),Il(211,"tr")(212,"td")(213,"code"),Qx(214,"--color-hover"),og()(),Il(215,"td"),Qx(216,"Cor das bordas no estado hover"),og(),Il(217,"td")(218,"code"),Qx(219,"var(--color-action-hover)"),og()()(),Il(220,"tr")(221,"td")(222,"code"),Qx(223,"--background-hover"),og()(),Il(224,"td"),Qx(225,"Cor de background no estado hover"),og(),Il(226,"td")(227,"code"),Qx(228,"var(--color-brand-01-lightest)"),og()()(),Il(229,"tr")(230,"td")(231,"strong"),Qx(232,"Focused"),og()(),zl(233,"td")(234,"td"),og(),Il(235,"tr")(236,"td")(237,"code"),Qx(238,"--color-focused"),og()(),Il(239,"td"),Qx(240,"Cor das bordas no estado de focus"),og(),Il(241,"td")(242,"code"),Qx(243,"var(--color-action-default)"),og()()(),Il(244,"tr")(245,"td")(246,"code"),Qx(247,"--outline-color-focused"),og()(),Il(248,"td"),Qx(249,"Cor do outline no estado de focus"),og(),Il(250,"td")(251,"code"),Qx(252,"var(--color-action-focus)"),og()()(),Il(253,"tr")(254,"td")(255,"strong"),Qx(256,"Disabled"),og()(),zl(257,"td")(258,"td"),og(),Il(259,"tr")(260,"td")(261,"code"),Qx(262,"--color-disabled"),og()(),Il(263,"td"),Qx(264,"Cor principal no estado disabled"),og(),Il(265,"td")(266,"code"),Qx(267,"var(--color-action-disabled)"),og()()(),Il(268,"tr")(269,"td")(270,"code"),Qx(271,"--background-disabled"),og()(),Il(272,"td"),Qx(273,"Cor de background no estado disabled"),og(),Il(274,"td")(275,"code"),Qx(276,"var(--color-neutral-light-20)"),og()()()()()(),Il(277,"div",7)(278,"h4",8),Qx(279,"Seletor"),og(),Il(280,"pre",9),Qx(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    (p-focus)="EventEmitter"
    (p-footer-action-listbox)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-keydown)="EventEmitter"
    p-keys-label="Array<string>"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    p-loading="boolean"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    name="string"
    p-no-autocomplete="boolean"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),og()(),Il(282,"h4",10),Qx(283,"Propriedades"),og(),Il(284,"table",11)(285,"tr",12)(286,"th",13),Qx(287,"Nome"),og(),Il(288,"th",13),Qx(289,"Tipo"),og(),Il(290,"th",13),Qx(291,"Padr\xE3o"),og(),Il(292,"th",13),Qx(293,"Descri\xE7\xE3o"),og()(),Il(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),Qx(298," p-aria-label"),zl(299,"br"),og()()(),Il(300,"td",18)(301,"code",19),Qx(302,"string"),og()(),Il(303,"td",20),Qx(304,"-"),og(),Il(305,"td",21)(306,"em")(307,"strong"),Qx(308,"(opcional)"),og()(),Il(309,"p"),Qx(310,"Define um aria-label para o po-search."),og(),Il(311,"blockquote")(312,"p"),Qx(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),Il(314,"code"),Qx(315,"aria-label"),og(),Qx(316,` \xE9 utilizado para
acessibilidade.`),og()()()(),Il(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),Qx(321," (p-blur)"),zl(322,"br"),og()()(),Il(323,"td",18)(324,"code",24),Qx(325,"EventEmitter"),og()(),Il(326,"td",20),Qx(327,"-"),og(),Il(328,"td",21)(329,"em")(330,"strong"),Qx(331,"(opcional)"),og()(),Il(332,"p"),Qx(333,"Evento disparado ao sair do campo."),og()()(),Il(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),Qx(338," (p-change-model)"),zl(339,"br"),og()()(),Il(340,"td",18)(341,"code",24),Qx(342,"EventEmitter"),og()(),Il(343,"td",20),Qx(344,"-"),og(),Il(345,"td",21)(346,"em")(347,"strong"),Qx(348,"(opcional)"),og()(),Il(349,"p"),Qx(350,"Evento disparado ao alterar valor do model."),og()()(),Il(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),Qx(355," p-disabled"),zl(356,"br"),og()()(),Il(357,"td",18)(358,"code",25),Qx(359,"boolean"),og()(),Il(360,"td",20)(361,"p")(362,"code"),Qx(363,"false"),og()()(),Il(364,"td",21)(365,"em")(366,"strong"),Qx(367,"(opcional)"),og()(),Il(368,"p"),Qx(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og()()(),Il(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),Qx(374," (p-filter)"),zl(375,"br"),og()()(),Il(376,"td",18)(377,"code",24),Qx(378,"EventEmitter"),og()(),Il(379,"td",20),Qx(380,"-"),og(),Il(381,"td",21)(382,"em")(383,"strong"),Qx(384,"(opcional)"),og()(),Il(385,"p"),Qx(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),og(),Il(387,"blockquote")(388,"p"),Qx(389,"Incompat\xEDvel com a propriedade "),Il(390,"code"),Qx(391,"p-search-type"),og(),Qx(392," do tipo "),Il(393,"code"),Qx(394,"locate"),og(),Qx(395,"."),og()()()(),Il(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),Qx(400," p-filter-keys"),zl(401,"br"),og()()(),Il(402,"td",18)(403,"code",26),Qx(404,"Array<any>"),og()(),Il(405,"td",20),Qx(406,"-"),og(),Il(407,"td",21)(408,"p"),Qx(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),Il(410,"code"),Qx(411,"p-items"),og(),Qx(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),og(),Il(413,"pre")(414,"code",27),Qx(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),og()(),Il(416,"blockquote")(417,"p"),Qx(418,"Esta propriedade \xE9 ignorada quando utilizado com "),Il(419,"code"),Qx(420,"p-filter-select"),og(),Qx(421,` e incompat\xEDvel com a propriedade
`),Il(422,"code"),Qx(423,"p-search-type"),og(),Qx(424," do tipo "),Il(425,"code"),Qx(426,"locate"),og(),Qx(427,"."),og()()()(),Il(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),Qx(432," p-filter-select"),zl(433,"br"),og()()(),Il(434,"td",18)(435,"code",28),Qx(436,"PoSearchFilterSelect[]"),og()(),Il(437,"td",20),Qx(438,"-"),og(),Il(439,"td",21)(440,"p"),Qx(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Il(442,"code"),Qx(443,"p-items"),og(),Qx(444,". Automaticamente adiciona a op\xE7\xE3o "),Il(445,"strong"),Qx(446,"Todos"),og(),Qx(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),og(),Il(448,"p"),Qx(449,"Exemplo de uso:"),og(),Il(450,"pre")(451,"code",27),Qx(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),og()(),Il(453,"blockquote")(454,"p"),Qx(455,"Ao ser habilitada, a propriedade "),Il(456,"code"),Qx(457,"p-filter-keys"),og(),Qx(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Il(459,"code"),Qx(460,"p-search-type"),og(),Qx(461," do tipo "),Il(462,"code"),Qx(463,"locate"),og(),Qx(464,"."),og()()()(),Il(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),Qx(469," p-filter-type"),zl(470,"br"),og()()(),Il(471,"td",18)(472,"code",29),Qx(473,"PoSearchFilterMode"),og()(),Il(474,"td",20)(475,"p")(476,"code"),Qx(477,"startsWith"),og()()(),Il(478,"td",21)(479,"em")(480,"strong"),Qx(481,"(opcional)"),og()(),Il(482,"p"),Qx(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Il(484,"strong"),Qx(485,"PoSearchFilterMode"),og(),Qx(486,"."),og(),Il(487,"blockquote")(488,"p"),Qx(489,"Incompat\xEDvel com a propriedade "),Il(490,"code"),Qx(491,"p-search-type"),og(),Qx(492," do tipo "),Il(493,"code"),Qx(494,"locate"),og(),Qx(495,"."),og()()()(),Il(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),Qx(500," (p-filtered-items-change)"),zl(501,"br"),og()()(),Il(502,"td",18)(503,"code",24),Qx(504,"EventEmitter"),og()(),Il(505,"td",20),Qx(506,"-"),og(),Il(507,"td",21)(508,"em")(509,"strong"),Qx(510,"(opcional)"),og()(),Il(511,"p"),Qx(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),og(),Il(513,"blockquote")(514,"p"),Qx(515,"Incompat\xEDvel com a propriedade "),Il(516,"code"),Qx(517,"p-search-type"),og(),Qx(518," do tipo "),Il(519,"code"),Qx(520,"locate"),og(),Qx(521,"."),og()()()(),Il(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),Qx(526," (p-focus)"),zl(527,"br"),og()()(),Il(528,"td",18)(529,"code",24),Qx(530,"EventEmitter"),og()(),Il(531,"td",20),Qx(532,"-"),og(),Il(533,"td",21)(534,"em")(535,"strong"),Qx(536,"(opcional)"),og()(),Il(537,"p"),Qx(538,"Evento emitido quando o campo de entrada (input) recebe foco."),og()()(),Il(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),Qx(543," (p-footer-action-listbox)"),zl(544,"br"),og()()(),Il(545,"td",18)(546,"code",24),Qx(547,"EventEmitter"),og()(),Il(548,"td",20),Qx(549,"-"),og(),Il(550,"td",21)(551,"em")(552,"strong"),Qx(553,"(opcional)"),og()(),Il(554,"p"),Qx(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),Il(556,"code"),Qx(557,"listbox"),og(),Qx(558,`.
O texto exibido pode ser configurado por meio do literal `),Il(559,"code"),Qx(560,"footerActionListbox"),og(),Qx(561,"."),og()()(),Il(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),Qx(566," p-icon"),zl(567,"br"),og()()(),Il(568,"td",18)(569,"code",19),Qx(570,"string "),og(),Il(571,"code",30),Qx(572," TemplateRef<void>"),og()(),Il(573,"td",20),Qx(574,"-"),og(),Il(575,"td",21)(576,"em")(577,"strong"),Qx(578,"(opcional)"),og()(),Il(579,"p"),Qx(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),og(),Il(581,"p"),Qx(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(583,"a",31),Qx(584,"Biblioteca de \xEDcones PO UI"),og(),Qx(585,", conforme exemplo:"),og(),Il(586,"pre")(587,"code"),Qx(588,`<po-search p-icon="an an-user"></po-search>
`),og()(),Il(589,"p"),Qx(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(591,"em"),Qx(592,"Font Awesome"),og(),Qx(593,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Il(594,"pre")(595,"code"),Qx(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),og()(),Il(597,"p"),Qx(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(599,"code"),Qx(600,"TemplateRef"),og(),Qx(601,", conforme exemplo abaixo:"),og(),Il(602,"pre")(603,"code"),Qx(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),og()()()(),Il(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),Qx(609," p-items"),zl(610,"br"),og()()(),Il(611,"td",18)(612,"code",26),Qx(613,"Array<any>"),og()(),Il(614,"td",20),Qx(615,"-"),og(),Il(616,"td",21)(617,"em")(618,"strong"),Qx(619,"(opcional)"),og()(),Il(620,"p"),Qx(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),og(),Il(622,"blockquote")(623,"p"),Qx(624,"Incompat\xEDvel com a propriedade "),Il(625,"code"),Qx(626,"p-search-type"),og(),Qx(627," do tipo "),Il(628,"code"),Qx(629,"locate"),og(),Qx(630,"."),og()()()(),Il(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),Qx(635," (p-keydown)"),zl(636,"br"),og()()(),Il(637,"td",18)(638,"code",24),Qx(639,"EventEmitter"),og()(),Il(640,"td",20),Qx(641,"-"),og(),Il(642,"td",21)(643,"em")(644,"strong"),Qx(645,"(opcional)"),og()(),Il(646,"p"),Qx(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(648,"code"),Qx(649,"KeyboardEvent"),og(),Qx(650," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),Qx(655," p-keys-label"),zl(656,"br"),og()()(),Il(657,"td",18)(658,"code",32),Qx(659,"Array<string>"),og()(),Il(660,"td",20),Qx(661,"-"),og(),Il(662,"td",21)(663,"em")(664,"strong"),Qx(665,"(opcional)"),og()(),Il(666,"p"),Qx(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),Il(668,"code"),Qx(669,"listbox"),og(),Qx(670,` quando a propriedade
`),Il(671,"code"),Qx(672,"p-show-listbox"),og(),Qx(673," estiver habilitada."),og(),Il(674,"p"),Qx(675,"Deve ser informado um array de strings contendo at\xE9 "),Il(676,"strong"),Qx(677,"3 propriedades"),og(),Qx(678,"."),og(),Il(679,"p"),Qx(680,"Exemplo de uso:"),og(),Il(681,"pre")(682,"code",33),Qx(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),og()()()(),Il(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),Qx(688," (p-listbox-onclick)"),zl(689,"br"),og()()(),Il(690,"td",18)(691,"code",24),Qx(692,"EventEmitter"),og()(),Il(693,"td",20),Qx(694,"-"),og(),Il(695,"td",21)(696,"em")(697,"strong"),Qx(698,"(opcional)"),og()(),Il(699,"p"),Qx(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),og(),Il(701,"blockquote")(702,"p"),Qx(703,"Incompat\xEDvel com a propriedade "),Il(704,"code"),Qx(705,"p-search-type"),og(),Qx(706," do tipo "),Il(707,"code"),Qx(708,"locate"),og(),Qx(709,"."),og()()()(),Il(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),Qx(714," p-literals"),zl(715,"br"),og()()(),Il(716,"td",18)(717,"code",34),Qx(718,"PoSearchLiterals"),og()(),Il(719,"td",20),Qx(720,"-"),og(),Il(721,"td",21)(722,"em")(723,"strong"),Qx(724,"(opcional)"),og()(),Il(725,"p"),Qx(726,"Objeto com as literais usadas no "),Il(727,"code"),Qx(728,"po-search"),og(),Qx(729,", permitindo personalizar os textos exibidos no componente."),og(),Il(730,"p"),Qx(731,"Para utilizar basta passar a literal que deseja customizar:"),og(),Il(732,"pre")(733,"code"),Qx(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),og()(),Il(735,"p"),Qx(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Il(737,"pre")(738,"code"),Qx(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),og()(),Il(740,"blockquote")(741,"p"),Qx(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Il(743,"a",35)(744,"code"),Qx(745,"PoI18nService"),og()(),Qx(746,` ou
do browser.`),og()()()(),Il(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),Qx(751," p-loading"),zl(752,"br"),og()()(),Il(753,"td",18)(754,"code",25),Qx(755,"boolean"),og()(),Il(756,"td",20)(757,"p")(758,"code"),Qx(759,"false"),og()()(),Il(760,"td",21)(761,"em")(762,"strong"),Qx(763,"(opcional)"),og()(),Il(764,"p"),Qx(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og(),Il(766,"blockquote")(767,"p"),Qx(768,"Incompat\xEDvel com a propriedade "),Il(769,"code"),Qx(770,"p-search-type"),og(),Qx(771," do tipo "),Il(772,"code"),Qx(773,"locate"),og(),Qx(774,"."),og()()()(),Il(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),Qx(779," (p-locate-next)"),zl(780,"br"),og()()(),Il(781,"td",18)(782,"code",24),Qx(783,"EventEmitter"),og()(),Il(784,"td",20),Qx(785,"-"),og(),Il(786,"td",21)(787,"em")(788,"strong"),Qx(789,"(opcional)"),og()(),Il(790,"p"),Qx(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),og(),Il(792,"blockquote")(793,"p"),Qx(794,"Compat\xEDvel com a propriedade "),Il(795,"code"),Qx(796,"p-search-type"),og(),Qx(797," do tipo "),Il(798,"code"),Qx(799,"locate"),og(),Qx(800,"."),og()()()(),Il(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),Qx(805," (p-locate-previous)"),zl(806,"br"),og()()(),Il(807,"td",18)(808,"code",24),Qx(809,"EventEmitter"),og()(),Il(810,"td",20),Qx(811,"-"),og(),Il(812,"td",21)(813,"em")(814,"strong"),Qx(815,"(opcional)"),og()(),Il(816,"p"),Qx(817,'Evento disparado ao clicar no controle "Resultado anterior".'),og(),Il(818,"blockquote")(819,"p"),Qx(820,"Compat\xEDvel com a propriedade "),Il(821,"code"),Qx(822,"p-search-type"),og(),Qx(823," do tipo "),Il(824,"code"),Qx(825,"locate"),og(),Qx(826,"."),og()()()(),Il(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),Qx(831," p-locate-summary"),zl(832,"br"),og()()(),Il(833,"td",18)(834,"code",36),Qx(835,"PoSearchLocateSummary"),og()(),Il(836,"td",20),Qx(837,"-"),og(),Il(838,"td",21)(839,"em")(840,"strong"),Qx(841,"(opcional)"),og()(),Il(842,"p"),Qx(843,"Define os valores do contador exibido ao usar a propriedade "),Il(844,"code"),Qx(845,"p-search-type"),og(),Qx(846," do tipo "),Il(847,"code"),Qx(848,"locate"),og(),Qx(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),og(),Il(850,"pre")(851,"code",33),Qx(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),og()(),Il(853,"blockquote")(854,"p"),Qx(855,"Compat\xEDvel com a propriedade "),Il(856,"code"),Qx(857,"p-search-type"),og(),Qx(858," do tipo "),Il(859,"code"),Qx(860,"locate"),og(),Qx(861,"."),og()()()(),Il(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),Qx(866," name"),zl(867,"br"),og()()(),Il(868,"td",18)(869,"code",19),Qx(870,"string"),og()(),Il(871,"td",20),Qx(872,"-"),og(),Il(873,"td",21)(874,"em")(875,"strong"),Qx(876,"(opcional)"),og()(),Il(877,"p"),Qx(878,"Nome e identificador do campo."),og()()(),Il(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),Qx(883," p-no-autocomplete"),zl(884,"br"),og()()(),Il(885,"td",18)(886,"code",25),Qx(887,"boolean"),og()(),Il(888,"td",20)(889,"p")(890,"code"),Qx(891,"false"),og()()(),Il(892,"td",21)(893,"em")(894,"strong"),Qx(895,"(opcional)"),og()(),Il(896,"p"),Qx(897,"Define a propriedade nativa "),Il(898,"code"),Qx(899,"autocomplete"),og(),Qx(900," do campo como "),Il(901,"code"),Qx(902,"off"),og(),Qx(903,"."),og()()(),Il(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),Qx(908," p-show-listbox"),zl(909,"br"),og()()(),Il(910,"td",18)(911,"code",25),Qx(912,"boolean"),og()(),Il(913,"td",20)(914,"p")(915,"code"),Qx(916,"false"),og()()(),Il(917,"td",21)(918,"em")(919,"strong"),Qx(920,"(opcional)"),og()(),Il(921,"p"),Qx(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),Il(923,"code"),Qx(924,"p-filter-keys"),og(),Qx(925," ou "),Il(926,"code"),Qx(927,"p-filter-select"),og(),Qx(928,` enquanto realiza
uma busca, respeitando o `),Il(929,"code"),Qx(930,"p-filter-type"),og(),Qx(931," como modo de pesquisa."),og(),Il(932,"blockquote")(933,"p"),Qx(934,"Incompat\xEDvel com a propriedade "),Il(935,"code"),Qx(936,"p-search-type"),og(),Qx(937," do tipo "),Il(938,"code"),Qx(939,"locate"),og(),Qx(940,"."),og()()()(),Il(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),Qx(945," p-size"),zl(946,"br"),og()()(),Il(947,"td",18)(948,"code",19),Qx(949,"string"),og()(),Il(950,"td",20)(951,"p")(952,"code"),Qx(953,"medium"),og()()(),Il(954,"td",21)(955,"em")(956,"strong"),Qx(957,"(opcional)"),og()(),Il(958,"p"),Qx(959,"Define o tamanho do componente:"),og(),Il(960,"ul")(961,"li")(962,"code"),Qx(963,"small"),og(),Qx(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(965,"li")(966,"code"),Qx(967,"medium"),og(),Qx(968,": altura do input como 44px."),og()(),Il(969,"blockquote")(970,"p"),Qx(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(972,"code"),Qx(973,"medium"),og(),Qx(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(975,"a",37),Qx(976,"po-theme"),og(),Qx(977,"."),og()()()(),Il(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),Qx(982," p-search-type"),zl(983,"br"),og()()(),Il(984,"td",18)(985,"code",38),Qx(986,"searchMode"),og()(),Il(987,"td",20)(988,"p")(989,"code"),Qx(990,"action"),og()()(),Il(991,"td",21)(992,"em")(993,"strong"),Qx(994,"(opcional)"),og()(),Il(995,"p"),Qx(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),og(),Il(997,"ul")(998,"li")(999,"code"),Qx(1e3,"action"),og(),Qx(1001,": Realiza a busca a cada caractere digitado."),og(),Il(1002,"li")(1003,"code"),Qx(1004,"trigger"),og(),Qx(1005,": Realiza a busca ao pressionar "),Il(1006,"code"),Qx(1007,"enter"),og(),Qx(1008," ou clicar no \xEDcone de busca."),og(),Il(1009,"li")(1010,"code"),Qx(1011,"locate"),og(),Qx(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),og(),Il(1013,"li")(1014,"code"),Qx(1015,"execute"),og(),Qx(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),Il(1017,"code"),Qx(1018,"listbox"),og(),Qx(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),Il(1020,"code"),Qx(1021,"action"),og(),Qx(1022," ou "),Il(1023,"code"),Qx(1024,"url"),og(),Qx(1025," nos itens definidos em "),Il(1026,"code"),Qx(1027,"p-items"),og(),Qx(1028,"."),og()()()()(),Il(1029,"h3"),Qx(1030,"Interfaces"),og(),Il(1031,"h4",39)(1032,"code",5),Qx(1033,"PoSearchFilterSelect"),og()(),Il(1034,"div",2)(1035,"p"),Qx(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),Il(1037,"code"),Qx(1038,"po-search"),og(),Qx(1039,", ao usar a propriedade "),Il(1040,"code"),Qx(1041,"p-filter-select"),og(),Qx(1042,"."),og()(),Il(1043,"h4",10),Qx(1044,"Propriedades"),og(),Il(1045,"table",11)(1046,"tr",12)(1047,"th",13),Qx(1048,"Nome"),og(),Il(1049,"th",13),Qx(1050,"Tipo"),og(),Il(1051,"th",13),Qx(1052,"Descri\xE7\xE3o"),og()(),Il(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),Qx(1057," label"),zl(1058,"br"),og()()(),Il(1059,"td",18)(1060,"code",19),Qx(1061,"string"),og()(),Il(1062,"td",21)(1063,"p"),Qx(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og()()(),Il(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),Qx(1069," value"),zl(1070,"br"),og()()(),Il(1071,"td",18)(1072,"code",32),Qx(1073,"Array<string> "),og(),Il(1074,"code",19),Qx(1075," string"),og()(),Il(1076,"td",21)(1077,"p"),Qx(1078,"Valores que ser\xE3o atribu\xEDdos ao "),Il(1079,"code"),Qx(1080,"p-filter-keys"),og()()()()(),Il(1081,"h4",39)(1082,"code",5),Qx(1083,"PoSearchLocateSummary"),og()(),Il(1084,"div",2)(1085,"p"),Qx(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),Il(1087,"code"),Qx(1088,"p-filter-locate"),og(),Qx(1089,"."),og()(),Il(1090,"h4",10),Qx(1091,"Propriedades"),og(),Il(1092,"table",11)(1093,"tr",12)(1094,"th",13),Qx(1095,"Nome"),og(),Il(1096,"th",13),Qx(1097,"Tipo"),og(),Il(1098,"th",13),Qx(1099,"Descri\xE7\xE3o"),og()(),Il(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),Qx(1104," currentIndex"),zl(1105,"br"),og()()(),Il(1106,"td",18)(1107,"code",40),Qx(1108,"number"),og()(),Il(1109,"td",21)(1110,"p"),Qx(1111,"\xCDndice atual da ocorr\xEAncia localizada."),og()()(),Il(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),Qx(1116," total"),zl(1117,"br"),og()()(),Il(1118,"td",18)(1119,"code",40),Qx(1120,"number"),og()(),Il(1121,"td",21)(1122,"p"),Qx(1123,"Total de ocorr\xEAncias encontradas."),og()()()(),Il(1124,"h4",39)(1125,"code",5),Qx(1126,"PoSearchOption"),og()(),Il(1127,"div",2)(1128,"p"),Qx(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),Il(1130,"code"),Qx(1131,"po-search"),og(),Qx(1132,"."),og()(),Il(1133,"h4",10),Qx(1134,"Propriedades"),og(),Il(1135,"table",11)(1136,"tr",12)(1137,"th",13),Qx(1138,"Nome"),og(),Il(1139,"th",13),Qx(1140,"Tipo"),og(),Il(1141,"th",13),Qx(1142,"Descri\xE7\xE3o"),og()(),Il(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),Qx(1147," label"),zl(1148,"br"),og()()(),Il(1149,"td",18)(1150,"code",19),Qx(1151,"string"),og()(),Il(1152,"td",21)(1153,"em")(1154,"strong"),Qx(1155,"(opcional)"),og()(),Il(1156,"p"),Qx(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og(),Il(1158,"blockquote")(1159,"p"),Qx(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Il(1161,"code"),Qx(1162,"value"),og(),Qx(1163,"."),og()()()(),Il(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),Qx(1168," value"),zl(1169,"br"),og()()(),Il(1170,"td",18)(1171,"code",19),Qx(1172,"string "),og(),Il(1173,"code",40),Qx(1174," number"),og()(),Il(1175,"td",21)(1176,"p"),Qx(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Il(1178,"em"),Qx(1179,"model"),og(),Qx(1180,"."),og()()()(),Il(1181,"h4",39)(1182,"code",5),Qx(1183,"PoSearchLiterals"),og()(),Il(1184,"div",2)(1185,"p"),Qx(1186,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1187,"code"),Qx(1188,"po-search"),og(),Qx(1189,"."),og()(),Il(1190,"h4",10),Qx(1191,"Propriedades"),og(),Il(1192,"table",11)(1193,"tr",12)(1194,"th",13),Qx(1195,"Nome"),og(),Il(1196,"th",13),Qx(1197,"Tipo"),og(),Il(1198,"th",13),Qx(1199,"Descri\xE7\xE3o"),og()(),Il(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),Qx(1204," all"),zl(1205,"br"),og()()(),Il(1206,"td",18)(1207,"code",19),Qx(1208,"string"),og()(),Il(1209,"td",21)(1210,"em")(1211,"strong"),Qx(1212,"(opcional)"),og()(),Il(1213,"p"),Qx(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),og(),Il(1215,"blockquote")(1216,"p"),Qx(1217,"Exibido apenas quando a propriedade "),Il(1218,"code"),Qx(1219,"p-filter-select"),og(),Qx(1220," estiver habilitada."),og()()()(),Il(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),Qx(1225," clean"),zl(1226,"br"),og()()(),Il(1227,"td",18)(1228,"code",19),Qx(1229,"string"),og()(),Il(1230,"td",21)(1231,"em")(1232,"strong"),Qx(1233,"(opcional)"),og()(),Il(1234,"p"),Qx(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),og()()(),Il(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),Qx(1240," footerActionListbox"),zl(1241,"br"),og()()(),Il(1242,"td",18)(1243,"code",19),Qx(1244,"string"),og()(),Il(1245,"td",21)(1246,"em")(1247,"strong"),Qx(1248,"(opcional)"),og()(),Il(1249,"p"),Qx(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),og()()(),Il(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),Qx(1255," next"),zl(1256,"br"),og()()(),Il(1257,"td",18)(1258,"code",19),Qx(1259,"string"),og()(),Il(1260,"td",21)(1261,"em")(1262,"strong"),Qx(1263,"(opcional)"),og()(),Il(1264,"p"),Qx(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),og(),Il(1266,"blockquote")(1267,"p"),Qx(1268,"Exibido apenas quando a propriedade "),Il(1269,"code"),Qx(1270,"p-filter-locate"),og(),Qx(1271," estiver habilitada."),og()()()(),Il(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),Qx(1276," of"),zl(1277,"br"),og()()(),Il(1278,"td",18)(1279,"code",19),Qx(1280,"string"),og()(),Il(1281,"td",21)(1282,"em")(1283,"strong"),Qx(1284,"(opcional)"),og()(),Il(1285,"p"),Qx(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),og(),Il(1287,"blockquote")(1288,"p"),Qx(1289,"Exibido apenas quando a propriedade "),Il(1290,"code"),Qx(1291,"p-filter-locate"),og(),Qx(1292," estiver habilitada."),og()()()(),Il(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),Qx(1297," placeholderListbox"),zl(1298,"br"),og()()(),Il(1299,"td",18)(1300,"code",19),Qx(1301,"string"),og()(),Il(1302,"td",21)(1303,"em")(1304,"strong"),Qx(1305,"(opcional)"),og()(),Il(1306,"p"),Qx(1307,"Texto exibido como "),Il(1308,"em"),Qx(1309,"placeholder"),og(),Qx(1310," na lista de resultados."),og()()(),Il(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),Qx(1315," previous"),zl(1316,"br"),og()()(),Il(1317,"td",18)(1318,"code",19),Qx(1319,"string"),og()(),Il(1320,"td",21)(1321,"em")(1322,"strong"),Qx(1323,"(opcional)"),og()(),Il(1324,"p"),Qx(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),og(),Il(1326,"blockquote")(1327,"p"),Qx(1328,"Exibido apenas quando a propriedade "),Il(1329,"code"),Qx(1330,"p-filter-locate"),og(),Qx(1331," estiver habilitada."),og()()()(),Il(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),Qx(1336," result"),zl(1337,"br"),og()()(),Il(1338,"td",18)(1339,"code",19),Qx(1340,"string"),og()(),Il(1341,"td",21)(1342,"em")(1343,"strong"),Qx(1344,"(opcional)"),og()(),Il(1345,"p"),Qx(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),og(),Il(1347,"blockquote")(1348,"p"),Qx(1349,"Exibido apenas quando a propriedade "),Il(1350,"code"),Qx(1351,"p-filter-locate"),og(),Qx(1352," estiver habilitada."),og()()()(),Il(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),Qx(1357," search"),zl(1358,"br"),og()()(),Il(1359,"td",18)(1360,"code",19),Qx(1361,"string"),og()(),Il(1362,"td",21)(1363,"em")(1364,"strong"),Qx(1365,"(opcional)"),og()(),Il(1366,"p"),Qx(1367,"Texto exibido como "),Il(1368,"em"),Qx(1369,"placeholder"),og(),Qx(1370," no campo de busca."),og()()()(),Il(1371,"h3"),Qx(1372,"Enums"),og(),Il(1373,"h4",4)(1374,"code",5),Qx(1375,"PoSearchFilterMode"),og()(),Il(1376,"div",2)(1377,"p"),Qx(1378,"Define o tipo de busca usado no "),Il(1379,"code"),Qx(1380,"po-search"),og(),Qx(1381,"."),og()(),Il(1382,"h4",10),Qx(1383,"Propriedades"),og(),Il(1384,"table",11)(1385,"tr",12)(1386,"th",13),Qx(1387,"Nome"),og(),Il(1388,"th",13),Qx(1389,"Descri\xE7\xE3o"),og()(),Il(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),Qx(1394," startsWith"),zl(1395,"br"),og()()(),Il(1396,"td",21)(1397,"p"),Qx(1398,"Verifica se o texto "),Il(1399,"em"),Qx(1400,"inicia"),og(),Qx(1401," com o valor pesquisado."),og()()(),Il(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),Qx(1406," contains"),zl(1407,"br"),og()()(),Il(1408,"td",21)(1409,"p"),Qx(1410,"Verifica se o texto "),Il(1411,"em"),Qx(1412,"cont\xE9m"),og(),Qx(1413," o valor pesquisado."),og()()(),Il(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),Qx(1418," endsWith"),zl(1419,"br"),og()()(),Il(1420,"td",21)(1421,"p"),Qx(1422,"Verifica se o texto "),Il(1423,"em"),Qx(1424,"finaliza"),og(),Qx(1425," com o valor pesquisado."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft$1("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-search-doc"),og(),Il(4,"po-tab",3),ft$1("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),og()()()),o&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2})}return a})();var Ot=[{path:"",component:Xe}],Ye=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(Ot),uL]})}return a})();var Jn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ye]})}return a})();export{Jn as DocPoSearchModule};