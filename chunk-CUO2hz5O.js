import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,n as nb,dv as Up,I,cM as Q9,cN as lm,aL as Kue,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft$1,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,a_ as rpe,a$ as i3,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,c9 as Ghe,ba as fNe,ap as Te,aB as wx,aQ as gx,aR as px,aM as ww,aN as e0,br as sN,aS as mx,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,T as iNe,_ as sme,a2 as JE,R as we,aI as dc,b6 as Yo,b7 as k3,cQ as Mk,cR as Sk,cz as Pz,cp as Rhe,cX as I3,a3 as rNe,aA as Mx,aq as dx,at as fx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic"]],standalone:false,decls:1,vars:0,template:function(o,i){o&1&&Wl(0,"po-search");},dependencies:[Kue],encapsulation:2,changeDetection:1})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search Basic"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-basic/sample-po-search-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-search></po-search>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-search-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,$e,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,qe],encapsulation:2})}return a})();var nt=["poSearch"];function it(a,w){if(a&1&&(Sl(0,"div")(1,"strong"),eN(2),og(),eN(3),og()),a&2){let r=w.$implicit,o=Mx().$implicit;Lp(2),dg("",r,": "),Lp(),dg(" ",o[r]," \xA0 ");}}function at(a,w){if(a&1&&(Sl(0,"li"),gx(1,it,4,2,"div",null,px),og()),a&2){let r=w.$implicit,o=Mx();Lp(),mx(o.changeFilter(r));}}var Be=(()=>{class a{http=f(nb);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=Up.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}ngOnChanges(r){r.items&&(this.filteredItems=this.items);}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"]);});}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r);}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r);}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change";}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o);}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"");}catch(r){this.customLiterals=void 0;}}changeEvent(r){setTimeout(()=>{this.event=r;});}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"");}catch(r){this.customLocateSummary=void 0;}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=Up.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService();}cleanInput(){try{this.poSearch.clearSearch();}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&ql(nt,7),o&2){let p;lo(p=uo())&&(i.poSearch=p.first);}},standalone:false,features:[Te],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=wx();Sl(0,"div",2)(1,"po-search",3,0),ft$1("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),og()(),Wl(3,"po-divider"),Sl(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),gx(9,at,3,0,"li",null,px),og()()()()(),Wl(11,"po-divider"),Sl(12,"div",2),Wl(13,"po-info",7)(14,"po-info",8),og(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"po-input",9),ww("ngModelChange",function(d){return Ky(p),nN(i.ariaLabel,d)||(i.ariaLabel=d),Xy(d)}),og(),e0(),Sl(19,"po-input",10),ww("ngModelChange",function(d){return Ky(p),nN(i.itemsModel,d)||(i.itemsModel=d),Xy(d)}),ft$1("p-change-model",function(d){return i.changeItems(d)}),og(),e0(),Sl(20,"po-checkbox-group",11),ww("ngModelChange",function(d){return Ky(p),nN(i.properties,d)||(i.properties=d),Xy(d)}),og(),e0(),Sl(21,"po-radio-group",12),ww("ngModelChange",function(d){return Ky(p),nN(i.icon,d)||(i.icon=d),Xy(d)}),og(),e0(),Sl(22,"po-radio-group",13),ww("ngModelChange",function(d){return Ky(p),nN(i.searchMode,d)||(i.searchMode=d),Xy(d)}),og(),e0(),Sl(23,"po-radio-group",14),ww("ngModelChange",function(d){return Ky(p),nN(i.filterMode,d)||(i.filterMode=d),Xy(d)}),og(),e0(),Sl(24,"po-radio-group",15),ww("ngModelChange",function(d){return Ky(p),nN(i.size,d)||(i.size=d),Xy(d)}),og(),e0(),Sl(25,"po-input",16),ww("ngModelChange",function(d){return Ky(p),nN(i.locateSummary,d)||(i.locateSummary=d),Xy(d)}),ft$1("p-change",function(){return i.changeLocateSummary()}),og(),e0(),Sl(26,"po-input",17),ww("ngModelChange",function(d){return Ky(p),nN(i.literals,d)||(i.literals=d),Xy(d)}),ft$1("p-change",function(){return i.changeLiterals()}),og(),e0(),Sl(27,"po-input",18),ww("ngModelChange",function(d){return Ky(p),nN(i.filterModel,d)||(i.filterModel=d),Xy(d)}),ft$1("p-change-model",function(d){return i.updateFilterKeys(d)}),og(),e0(),Sl(28,"po-input",19),ww("ngModelChange",function(d){return Ky(p),nN(i.filterSelectModel,d)||(i.filterSelectModel=d),Xy(d)}),ft$1("p-change",function(d){return i.updateFilterSelect(d)}),og(),e0(),Wl(29,"po-divider"),Sl(30,"div",2)(31,"po-button",20),ft$1("p-click",function(){return i.restore()}),og()()();}o&2&&(Lp(),nw("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),Lp(5),nw("p-label",sN("Itens encontrados: ",i.filteredItems?.length)),Lp(3),mx(i.filteredItems),Lp(4),nw("p-value",i.search),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.ariaLabel),n0(),Lp(),Ew("ngModel",i.itemsModel),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),n0(),Lp(),Ew("ngModel",i.searchMode),nw("p-options",i.searchModeOptions),n0(),Lp(),Ew("ngModel",i.filterMode),nw("p-options",i.filterModeOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0(),Lp(),Ew("ngModel",i.locateSummary),n0(),Lp(),Ew("ngModel",i.literals),n0(),Lp(),Ew("ngModel",i.filterModel),n0(),Lp(),Ew("ngModel",i.filterSelectModel),n0());},dependencies:[Z9,G9,q9,_k,mk,rpe,i3,Qt,mv,b3,L3,wde,Ghe,fNe,Kue],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"],changeDetection:1})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search Labs"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-labs/sample-po-search-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-search-labs/sample-po-search-labs.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-search-labs"),og(),Wl(29,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,lt,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Be],encapsulation:2})}return a})();var le=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function st(a,w){if(a&1&&(Sl(0,"div",0),Wl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),og()),a&2){let r=w.$implicit;Lp(),nw("p-value",r.name),Lp(),nw("p-value",r.nickname),Lp(),nw("p-value",r.email);}}function mt(a,w){a&1&&Wl(0,"div");}function pt(a,w){if(a&1&&(Sl(0,"li",7),eN(1),dx(2,mt,1,0,"div"),og(),Sl(3,"li",7),eN(4),og()),a&2){let r=w.$implicit,o=Mx();Lp(),dg(" Nickname: ",r.nickname," "),Lp(),fx(o.compareObjects(r)?2:-1),Lp(2),dg("Email: ",r.email);}}var Ve=(()=>{class a{service=f(le);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people"]],standalone:false,features:[we([le])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"po-search",1),ft$1("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),Wl(2,"po-divider"),gx(3,st,4,3,"div",0,px),Wl(5,"po-divider"),Sl(6,"po-list-view",2),JE(7,pt,5,3,"ng-template",3),og()),o&2&&(Lp(),nw("p-items",i.items)("p-filter-keys",i.filterKeys),Lp(2),mx(i.peopleFiltered),Lp(3),nw("p-items",i.items));},dependencies:[mv,Ghe,iNe,sme,Kue],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"],changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search Find People"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),eN(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),og(),Sl(29,"pre",11),eN(30,`li {
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
`),og()()()()(),Sl(31,"div",12),Wl(32,"sample-po-search-find-people"),og(),Wl(33,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ct,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ve],encapsulation:2})}return a})();var re=(()=>{class a{getItems(){return [{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ht(a,w){if(a&1&&(Sl(0,"div",0),Wl(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),og()),a&2){let r=w.$implicit;Lp(2),nw("p-value",r.name),Lp(),nw("p-value",r.nickname),Lp(),nw("p-value",r.email);}}var je=(()=>{class a{service=f(re);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems();}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[]);}compareObjects(r){return !!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox"]],standalone:false,features:[we([re])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"po-search",1),ft$1("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),gx(2,ht,5,3,"div",0,px)),o&2&&(Lp(),nw("p-items",i.items)("p-filter-keys",i.filterKeys),Lp(),mx(i.peopleFiltered));},dependencies:[mv,Ghe,Kue],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search With Listbox"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Sl(21,"label",6),eN(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-search-listbox"),og(),Wl(27,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ft,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,je],encapsulation:2})}return a})();function Et(a,w){if(a&1&&(Sl(0,"div",0)(1,"po-container",2),Wl(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),og()()),a&2){let r=w.$implicit;Lp(2),nw("p-value",r.name),Lp(),nw("p-value",r.gender),Lp(),nw("p-value",r.planet),Lp(),nw("p-value",r.father);}}var Re=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}];}filtered(r){this.filteredItems=r;}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select"]],standalone:false,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"po-search",1),ft$1("p-filtered-items-change",function(h){return i.filtered(h)}),og()(),gx(2,Et,6,4,"div",0,px)),o&2&&(Lp(),nw("p-items",i.items)("p-filter-select",i.filterSelect),Lp(),mx(i.filteredItems));},dependencies:[dc,Ghe,Kue],encapsulation:2,changeDetection:1})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search With Filter Select + Listbox"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-search-filter-select"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,vt,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Re],encapsulation:2})}return a})();var Ke=(()=>{class a{poModal;filterType=Up.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&ql(Yo,7),o&2){let p;lo(p=uo())&&(i.poModal=p.first);}},standalone:false,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(Sl(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),eN(4,"Entre com o nome ou c\xF3digo da rotina"),og()(),Sl(5,"div",1)(6,"po-search",3),ft$1("p-footer-action-listbox",function(){return i.footerAction()}),og()()()(),Sl(7,"po-modal",4,0),Wl(9,"po-table",5),og()),o&2&&(Lp(),nw("p-height",180),Lp(5),nw("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),Lp(3),nw("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",true));},dependencies:[Yo,k3,fNe,Kue],styles:[".full[_ngcontent-%COMP%]{width:100%}"],changeDetection:1})}return a})();var Ct=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-execute-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search Form Fields with Execute"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-execute/sample-po-search-execute.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-search-execute/sample-po-search-execute.component.css"),og(),Sl(25,"pre",11),eN(26,`.full {
  width: 100%;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-search-execute"),og(),Wl(29,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ct,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ke],encapsulation:2})}return a})();var _t=["nameInput"],Mt=["cpfInput"],wt=["addressInput"],It=["numberInput"],Tt=["emailInput"],kt=["websiteInput"],Ft=["reactiveFormData"],Ue=(()=>{class a{fb=f(Q9);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=true;locateSummary={currentIndex:0,total:0};filterType=Up.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm();}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}];}createForm(){this.reactiveForm=this.fb.group({name:["",[lm.required,lm.minLength(5)]],cpf:["",lm.required],address:["",lm.required],number:["",lm.required],email:["",lm.required],website:["",lm.required]});}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i};}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent();}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent();}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary());}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary());}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r};}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus());}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&ql(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7)(kt,7)(Ft,7),o&2){let p;lo(p=uo())&&(i.nameInput=p.first),lo(p=uo())&&(i.cpfInput=p.first),lo(p=uo())&&(i.addressInput=p.first),lo(p=uo())&&(i.numberInput=p.first),lo(p=uo())&&(i.emailInput=p.first),lo(p=uo())&&(i.websiteInput=p.first),lo(p=uo())&&(i.reactiveFormModal=p.first);}},standalone:false,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(Sl(0,"div",7)(1,"div",8)(2,"po-search",9),ft$1("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),og()()(),Wl(3,"po-divider"),Sl(4,"form",10)(5,"div",7),Wl(6,"po-input",11,0),e0(),Wl(8,"po-input",12,1),e0(),og(),Sl(10,"div",7),Wl(11,"po-input",13,2),e0(),Wl(13,"po-number",14,3),e0(),og(),Sl(15,"div",7),Wl(16,"po-email",15,4),e0(),Wl(18,"po-url",16,5),e0(),og(),Sl(20,"div",7)(21,"po-button",17),ft$1("p-click",function(){return i.saveForm()}),og()()(),Sl(22,"po-modal",18,6)(24,"div",7),Wl(25,"po-info",19)(26,"po-info",20),og(),Wl(27,"po-divider"),Sl(28,"div",7),Wl(29,"po-info",21)(30,"po-info",22),og(),Wl(31,"po-divider"),Sl(32,"div",7),Wl(33,"po-info",23)(34,"po-info",24),og()()),o&2&&(Lp(2),nw("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),Lp(2),nw("formGroup",i.reactiveForm),Lp(2),n0(),Lp(2),n0(),Lp(3),n0(),Lp(2),n0(),Lp(3),n0(),Lp(2),n0(),Lp(3),nw("p-disabled",!i.reactiveForm.valid),Lp(),nw("p-primary-action",i.modalPrimaryAction),Lp(3),nw("p-value",i.reactiveForm.controls.name.value),Lp(),nw("p-value",i.reactiveForm.controls.cpf.value),Lp(3),nw("p-value",i.reactiveForm.controls.address.value),Lp(),nw("p-value",i.reactiveForm.controls.number.value),Lp(3),nw("p-value",i.reactiveForm.controls.email.value),Lp(),nw("p-value",i.reactiveForm.controls.website.value));},dependencies:[Z9,G9,q9,Mk,Sk,Qt,mv,Pz,L3,Rhe,I3,Ghe,Yo,Kue],encapsulation:2,changeDetection:1})}return a})();var Lt=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Search Form Fields with Locate"),og(),Sl(4,"a",2),ft$1("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterViewInit, Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-search-fields-locate"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Lt,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ue],encapsulation:2})}return a})();var Qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-search-doc"]],standalone:false,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoSearchModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-search."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoSearchComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),og(),Sl(15,"p"),eN(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),og(),Sl(17,"h4"),eN(18,"Boas pr\xE1ticas"),og(),Sl(19,"p"),eN(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),og(),Sl(21,"ul")(22,"li"),eN(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),og(),Sl(24,"li"),eN(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),og(),Sl(26,"li"),eN(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),og(),Sl(28,"li"),eN(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),og(),Sl(30,"li"),eN(31,"Quando apropriado, destaque os termos da busca nos resultados."),og(),Sl(32,"li"),eN(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),og(),Sl(34,"li"),eN(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),og(),Sl(36,"li"),eN(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),og()(),Sl(38,"h4"),eN(39,"Acessibilidade tratada no componente"),og(),Sl(40,"p"),eN(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),og(),Sl(42,"ul")(43,"li"),eN(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),og(),Sl(45,"li"),eN(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),og()(),Sl(47,"h4"),eN(48,"Tokens customiz\xE1veis"),og(),Sl(49,"p"),eN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(51,"blockquote")(52,"p"),eN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),eN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(56,"."),og()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),eN(61,"Propriedade"),og(),Sl(62,"th"),eN(63,"Descri\xE7\xE3o"),og(),Sl(64,"th"),eN(65,"Valor Padr\xE3o"),og()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),eN(70,"Default Values"),og()(),Wl(71,"td")(72,"td"),og(),Sl(73,"tr")(74,"td")(75,"code"),eN(76,"--font-family"),og()(),Sl(77,"td"),eN(78,"Fam\xEDlia tipogr\xE1fica do campo"),og(),Sl(79,"td")(80,"code"),eN(81,"var(--font-family-theme)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),eN(85,"--font-size"),og()(),Sl(86,"td"),eN(87,"Tamanho da fonte do campo"),og(),Sl(88,"td")(89,"code"),eN(90,"var(--font-size-default)"),og()()(),Sl(91,"tr")(92,"td")(93,"code"),eN(94,"--text-color-placeholder"),og()(),Sl(95,"td"),eN(96,"Cor do texto no placeholder"),og(),Sl(97,"td")(98,"code"),eN(99,"var(--color-neutral-light-30)"),og()()(),Sl(100,"tr")(101,"td")(102,"code"),eN(103,"--color"),og()(),Sl(104,"td"),eN(105,"Cor das bordas"),og(),Sl(106,"td")(107,"code"),eN(108,"var(--color-neutral-dark-70)"),og()()(),Sl(109,"tr")(110,"td")(111,"code"),eN(112,"--border-radius"),og()(),Sl(113,"td"),eN(114,"Raio das bordas"),og(),Sl(115,"td")(116,"code"),eN(117,"var(--border-radius-md)"),og()()(),Sl(118,"tr")(119,"td")(120,"code"),eN(121,"--background"),og()(),Sl(122,"td"),eN(123,"Cor de background"),og(),Sl(124,"td")(125,"code"),eN(126,"var(--color-neutral-light-05)"),og()()(),Sl(127,"tr")(128,"td")(129,"code"),eN(130,"--text-color"),og()(),Sl(131,"td"),eN(132,"Cor do texto edit\xE1vel"),og(),Sl(133,"td")(134,"code"),eN(135,"var(--color-neutral-dark-90)"),og()()(),Sl(136,"tr")(137,"td")(138,"code"),eN(139,"--color-clear"),og()(),Sl(140,"td"),eN(141,"Cor do \xEDcone close"),og(),Sl(142,"td")(143,"code"),eN(144,"var(--color-action-default)"),og()()(),Sl(145,"tr")(146,"td")(147,"code"),eN(148,"--color-controls"),og()(),Sl(149,"td"),eN(150,"Cor dos \xEDcones de controle do mode location"),og(),Sl(151,"td")(152,"code"),eN(153,"var(--color-action-default)"),og()()(),Sl(154,"tr")(155,"td")(156,"code"),eN(157,"--transition-property"),og()(),Sl(158,"td"),eN(159,"Atributo da transi\xE7\xE3o"),og(),Sl(160,"td")(161,"code"),eN(162,"all"),og()()(),Sl(163,"tr")(164,"td")(165,"code"),eN(166,"--transition-duration"),og()(),Sl(167,"td"),eN(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),og(),Sl(169,"td")(170,"code"),eN(171,"var(--duration-extra-fast)"),og()()(),Sl(172,"tr")(173,"td")(174,"code"),eN(175,"--transition-timing"),og()(),Sl(176,"td"),eN(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),og(),Sl(178,"td")(179,"code"),eN(180,"var(--timing-standart)"),og()()(),Sl(181,"tr")(182,"td")(183,"strong"),eN(184,"Icon"),og()(),Wl(185,"td")(186,"td"),og(),Sl(187,"tr")(188,"td")(189,"code"),eN(190,"--color-icon-read"),og()(),Sl(191,"td"),eN(192,"Cor do \xEDcone de busca no modo action"),og(),Sl(193,"td")(194,"code"),eN(195,"var(--color-neutral-dark-70)"),og()()(),Sl(196,"tr")(197,"td")(198,"code"),eN(199,"--color-icon"),og()(),Sl(200,"td"),eN(201,"Cor do \xEDcone de busca no modo trigger"),og(),Sl(202,"td")(203,"code"),eN(204,"var(--color-action-default)"),og()()(),Sl(205,"tr")(206,"td")(207,"strong"),eN(208,"Hover"),og()(),Wl(209,"td")(210,"td"),og(),Sl(211,"tr")(212,"td")(213,"code"),eN(214,"--color-hover"),og()(),Sl(215,"td"),eN(216,"Cor das bordas no estado hover"),og(),Sl(217,"td")(218,"code"),eN(219,"var(--color-action-hover)"),og()()(),Sl(220,"tr")(221,"td")(222,"code"),eN(223,"--background-hover"),og()(),Sl(224,"td"),eN(225,"Cor de background no estado hover"),og(),Sl(226,"td")(227,"code"),eN(228,"var(--color-brand-01-lightest)"),og()()(),Sl(229,"tr")(230,"td")(231,"strong"),eN(232,"Focused"),og()(),Wl(233,"td")(234,"td"),og(),Sl(235,"tr")(236,"td")(237,"code"),eN(238,"--color-focused"),og()(),Sl(239,"td"),eN(240,"Cor das bordas no estado de focus"),og(),Sl(241,"td")(242,"code"),eN(243,"var(--color-action-default)"),og()()(),Sl(244,"tr")(245,"td")(246,"code"),eN(247,"--outline-color-focused"),og()(),Sl(248,"td"),eN(249,"Cor do outline no estado de focus"),og(),Sl(250,"td")(251,"code"),eN(252,"var(--color-action-focus)"),og()()(),Sl(253,"tr")(254,"td")(255,"strong"),eN(256,"Disabled"),og()(),Wl(257,"td")(258,"td"),og(),Sl(259,"tr")(260,"td")(261,"code"),eN(262,"--color-disabled"),og()(),Sl(263,"td"),eN(264,"Cor principal no estado disabled"),og(),Sl(265,"td")(266,"code"),eN(267,"var(--color-action-disabled)"),og()()(),Sl(268,"tr")(269,"td")(270,"code"),eN(271,"--background-disabled"),og()(),Sl(272,"td"),eN(273,"Cor de background no estado disabled"),og(),Sl(274,"td")(275,"code"),eN(276,"var(--color-neutral-light-20)"),og()()()()()(),Sl(277,"div",7)(278,"h4",8),eN(279,"Seletor"),og(),Sl(280,"pre",9),eN(281,`<po-search
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
`),og()(),Sl(282,"h4",10),eN(283,"Propriedades"),og(),Sl(284,"table",11)(285,"tr",12)(286,"th",13),eN(287,"Nome"),og(),Sl(288,"th",13),eN(289,"Tipo"),og(),Sl(290,"th",13),eN(291,"Padr\xE3o"),og(),Sl(292,"th",13),eN(293,"Descri\xE7\xE3o"),og()(),Sl(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),eN(298," p-aria-label"),Wl(299,"br"),og()()(),Sl(300,"td",18)(301,"code",19),eN(302,"string"),og()(),Sl(303,"td",20),eN(304,"-"),og(),Sl(305,"td",21)(306,"em")(307,"strong"),eN(308,"(opcional)"),og()(),Sl(309,"p"),eN(310,"Define um aria-label para o po-search."),og(),Sl(311,"blockquote")(312,"p"),eN(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),Sl(314,"code"),eN(315,"aria-label"),og(),eN(316,` \xE9 utilizado para
acessibilidade.`),og()()()(),Sl(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),eN(321," (p-blur)"),Wl(322,"br"),og()()(),Sl(323,"td",18)(324,"code",24),eN(325,"EventEmitter"),og()(),Sl(326,"td",20),eN(327,"-"),og(),Sl(328,"td",21)(329,"em")(330,"strong"),eN(331,"(opcional)"),og()(),Sl(332,"p"),eN(333,"Evento disparado ao sair do campo."),og()()(),Sl(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),eN(338," (p-change-model)"),Wl(339,"br"),og()()(),Sl(340,"td",18)(341,"code",24),eN(342,"EventEmitter"),og()(),Sl(343,"td",20),eN(344,"-"),og(),Sl(345,"td",21)(346,"em")(347,"strong"),eN(348,"(opcional)"),og()(),Sl(349,"p"),eN(350,"Evento disparado ao alterar valor do model."),og()()(),Sl(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),eN(355," p-disabled"),Wl(356,"br"),og()()(),Sl(357,"td",18)(358,"code",25),eN(359,"boolean"),og()(),Sl(360,"td",20)(361,"p")(362,"code"),eN(363,"false"),og()()(),Sl(364,"td",21)(365,"em")(366,"strong"),eN(367,"(opcional)"),og()(),Sl(368,"p"),eN(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),og()()(),Sl(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),eN(374," (p-filter)"),Wl(375,"br"),og()()(),Sl(376,"td",18)(377,"code",24),eN(378,"EventEmitter"),og()(),Sl(379,"td",20),eN(380,"-"),og(),Sl(381,"td",21)(382,"em")(383,"strong"),eN(384,"(opcional)"),og()(),Sl(385,"p"),eN(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),og(),Sl(387,"blockquote")(388,"p"),eN(389,"Incompat\xEDvel com a propriedade "),Sl(390,"code"),eN(391,"p-search-type"),og(),eN(392," do tipo "),Sl(393,"code"),eN(394,"locate"),og(),eN(395,"."),og()()()(),Sl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),eN(400," p-filter-keys"),Wl(401,"br"),og()()(),Sl(402,"td",18)(403,"code",26),eN(404,"Array<any>"),og()(),Sl(405,"td",20),eN(406,"-"),og(),Sl(407,"td",21)(408,"p"),eN(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),Sl(410,"code"),eN(411,"p-items"),og(),eN(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),og(),Sl(413,"pre")(414,"code",27),eN(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),og()(),Sl(416,"blockquote")(417,"p"),eN(418,"Esta propriedade \xE9 ignorada quando utilizado com "),Sl(419,"code"),eN(420,"p-filter-select"),og(),eN(421,` e incompat\xEDvel com a propriedade
`),Sl(422,"code"),eN(423,"p-search-type"),og(),eN(424," do tipo "),Sl(425,"code"),eN(426,"locate"),og(),eN(427,"."),og()()()(),Sl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),eN(432," p-filter-select"),Wl(433,"br"),og()()(),Sl(434,"td",18)(435,"code",28),eN(436,"PoSearchFilterSelect[]"),og()(),Sl(437,"td",20),eN(438,"-"),og(),Sl(439,"td",21)(440,"p"),eN(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),Sl(442,"code"),eN(443,"p-items"),og(),eN(444,". Automaticamente adiciona a op\xE7\xE3o "),Sl(445,"strong"),eN(446,"Todos"),og(),eN(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),og(),Sl(448,"p"),eN(449,"Exemplo de uso:"),og(),Sl(450,"pre")(451,"code",27),eN(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),og()(),Sl(453,"blockquote")(454,"p"),eN(455,"Ao ser habilitada, a propriedade "),Sl(456,"code"),eN(457,"p-filter-keys"),og(),eN(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),Sl(459,"code"),eN(460,"p-search-type"),og(),eN(461," do tipo "),Sl(462,"code"),eN(463,"locate"),og(),eN(464,"."),og()()()(),Sl(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),eN(469," p-filter-type"),Wl(470,"br"),og()()(),Sl(471,"td",18)(472,"code",29),eN(473,"PoSearchFilterMode"),og()(),Sl(474,"td",20)(475,"p")(476,"code"),eN(477,"startsWith"),og()()(),Sl(478,"td",21)(479,"em")(480,"strong"),eN(481,"(opcional)"),og()(),Sl(482,"p"),eN(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),Sl(484,"strong"),eN(485,"PoSearchFilterMode"),og(),eN(486,"."),og(),Sl(487,"blockquote")(488,"p"),eN(489,"Incompat\xEDvel com a propriedade "),Sl(490,"code"),eN(491,"p-search-type"),og(),eN(492," do tipo "),Sl(493,"code"),eN(494,"locate"),og(),eN(495,"."),og()()()(),Sl(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),eN(500," (p-filtered-items-change)"),Wl(501,"br"),og()()(),Sl(502,"td",18)(503,"code",24),eN(504,"EventEmitter"),og()(),Sl(505,"td",20),eN(506,"-"),og(),Sl(507,"td",21)(508,"em")(509,"strong"),eN(510,"(opcional)"),og()(),Sl(511,"p"),eN(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),og(),Sl(513,"blockquote")(514,"p"),eN(515,"Incompat\xEDvel com a propriedade "),Sl(516,"code"),eN(517,"p-search-type"),og(),eN(518," do tipo "),Sl(519,"code"),eN(520,"locate"),og(),eN(521,"."),og()()()(),Sl(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),eN(526," (p-focus)"),Wl(527,"br"),og()()(),Sl(528,"td",18)(529,"code",24),eN(530,"EventEmitter"),og()(),Sl(531,"td",20),eN(532,"-"),og(),Sl(533,"td",21)(534,"em")(535,"strong"),eN(536,"(opcional)"),og()(),Sl(537,"p"),eN(538,"Evento emitido quando o campo de entrada (input) recebe foco."),og()()(),Sl(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),eN(543," (p-footer-action-listbox)"),Wl(544,"br"),og()()(),Sl(545,"td",18)(546,"code",24),eN(547,"EventEmitter"),og()(),Sl(548,"td",20),eN(549,"-"),og(),Sl(550,"td",21)(551,"em")(552,"strong"),eN(553,"(opcional)"),og()(),Sl(554,"p"),eN(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),Sl(556,"code"),eN(557,"listbox"),og(),eN(558,`.
O texto exibido pode ser configurado por meio do literal `),Sl(559,"code"),eN(560,"footerActionListbox"),og(),eN(561,"."),og()()(),Sl(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),eN(566," p-icon"),Wl(567,"br"),og()()(),Sl(568,"td",18)(569,"code",19),eN(570,"string "),og(),Sl(571,"code",30),eN(572," TemplateRef<void>"),og()(),Sl(573,"td",20),eN(574,"-"),og(),Sl(575,"td",21)(576,"em")(577,"strong"),eN(578,"(opcional)"),og()(),Sl(579,"p"),eN(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),og(),Sl(581,"p"),eN(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(583,"a",31),eN(584,"Biblioteca de \xEDcones PO UI"),og(),eN(585,", conforme exemplo:"),og(),Sl(586,"pre")(587,"code"),eN(588,`<po-search p-icon="an an-user"></po-search>
`),og()(),Sl(589,"p"),eN(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(591,"em"),eN(592,"Font Awesome"),og(),eN(593,`, desde que a biblioteca
esteja carregada no projeto:`),og(),Sl(594,"pre")(595,"code"),eN(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),og()(),Sl(597,"p"),eN(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(599,"code"),eN(600,"TemplateRef"),og(),eN(601,", conforme exemplo abaixo:"),og(),Sl(602,"pre")(603,"code"),eN(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),og()()()(),Sl(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),eN(609," p-items"),Wl(610,"br"),og()()(),Sl(611,"td",18)(612,"code",26),eN(613,"Array<any>"),og()(),Sl(614,"td",20),eN(615,"-"),og(),Sl(616,"td",21)(617,"em")(618,"strong"),eN(619,"(opcional)"),og()(),Sl(620,"p"),eN(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),og(),Sl(622,"blockquote")(623,"p"),eN(624,"Incompat\xEDvel com a propriedade "),Sl(625,"code"),eN(626,"p-search-type"),og(),eN(627," do tipo "),Sl(628,"code"),eN(629,"locate"),og(),eN(630,"."),og()()()(),Sl(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),eN(635," (p-keydown)"),Wl(636,"br"),og()()(),Sl(637,"td",18)(638,"code",24),eN(639,"EventEmitter"),og()(),Sl(640,"td",20),eN(641,"-"),og(),Sl(642,"td",21)(643,"em")(644,"strong"),eN(645,"(opcional)"),og()(),Sl(646,"p"),eN(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(648,"code"),eN(649,"KeyboardEvent"),og(),eN(650," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),eN(655," p-keys-label"),Wl(656,"br"),og()()(),Sl(657,"td",18)(658,"code",32),eN(659,"Array<string>"),og()(),Sl(660,"td",20),eN(661,"-"),og(),Sl(662,"td",21)(663,"em")(664,"strong"),eN(665,"(opcional)"),og()(),Sl(666,"p"),eN(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),Sl(668,"code"),eN(669,"listbox"),og(),eN(670,` quando a propriedade
`),Sl(671,"code"),eN(672,"p-show-listbox"),og(),eN(673," estiver habilitada."),og(),Sl(674,"p"),eN(675,"Deve ser informado um array de strings contendo at\xE9 "),Sl(676,"strong"),eN(677,"3 propriedades"),og(),eN(678,"."),og(),Sl(679,"p"),eN(680,"Exemplo de uso:"),og(),Sl(681,"pre")(682,"code",33),eN(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),og()()()(),Sl(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),eN(688," (p-listbox-onclick)"),Wl(689,"br"),og()()(),Sl(690,"td",18)(691,"code",24),eN(692,"EventEmitter"),og()(),Sl(693,"td",20),eN(694,"-"),og(),Sl(695,"td",21)(696,"em")(697,"strong"),eN(698,"(opcional)"),og()(),Sl(699,"p"),eN(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),og(),Sl(701,"blockquote")(702,"p"),eN(703,"Incompat\xEDvel com a propriedade "),Sl(704,"code"),eN(705,"p-search-type"),og(),eN(706," do tipo "),Sl(707,"code"),eN(708,"locate"),og(),eN(709,"."),og()()()(),Sl(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),eN(714," p-literals"),Wl(715,"br"),og()()(),Sl(716,"td",18)(717,"code",34),eN(718,"PoSearchLiterals"),og()(),Sl(719,"td",20),eN(720,"-"),og(),Sl(721,"td",21)(722,"em")(723,"strong"),eN(724,"(opcional)"),og()(),Sl(725,"p"),eN(726,"Objeto com as literais usadas no "),Sl(727,"code"),eN(728,"po-search"),og(),eN(729,", permitindo personalizar os textos exibidos no componente."),og(),Sl(730,"p"),eN(731,"Para utilizar basta passar a literal que deseja customizar:"),og(),Sl(732,"pre")(733,"code"),eN(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),og()(),Sl(735,"p"),eN(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Sl(737,"pre")(738,"code"),eN(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),og()(),Sl(740,"blockquote")(741,"p"),eN(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Sl(743,"a",35)(744,"code"),eN(745,"PoI18nService"),og()(),eN(746,` ou
do browser.`),og()()()(),Sl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),eN(751," p-loading"),Wl(752,"br"),og()()(),Sl(753,"td",18)(754,"code",25),eN(755,"boolean"),og()(),Sl(756,"td",20)(757,"p")(758,"code"),eN(759,"false"),og()()(),Sl(760,"td",21)(761,"em")(762,"strong"),eN(763,"(opcional)"),og()(),Sl(764,"p"),eN(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og(),Sl(766,"blockquote")(767,"p"),eN(768,"Incompat\xEDvel com a propriedade "),Sl(769,"code"),eN(770,"p-search-type"),og(),eN(771," do tipo "),Sl(772,"code"),eN(773,"locate"),og(),eN(774,"."),og()()()(),Sl(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),eN(779," (p-locate-next)"),Wl(780,"br"),og()()(),Sl(781,"td",18)(782,"code",24),eN(783,"EventEmitter"),og()(),Sl(784,"td",20),eN(785,"-"),og(),Sl(786,"td",21)(787,"em")(788,"strong"),eN(789,"(opcional)"),og()(),Sl(790,"p"),eN(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),og(),Sl(792,"blockquote")(793,"p"),eN(794,"Compat\xEDvel com a propriedade "),Sl(795,"code"),eN(796,"p-search-type"),og(),eN(797," do tipo "),Sl(798,"code"),eN(799,"locate"),og(),eN(800,"."),og()()()(),Sl(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),eN(805," (p-locate-previous)"),Wl(806,"br"),og()()(),Sl(807,"td",18)(808,"code",24),eN(809,"EventEmitter"),og()(),Sl(810,"td",20),eN(811,"-"),og(),Sl(812,"td",21)(813,"em")(814,"strong"),eN(815,"(opcional)"),og()(),Sl(816,"p"),eN(817,'Evento disparado ao clicar no controle "Resultado anterior".'),og(),Sl(818,"blockquote")(819,"p"),eN(820,"Compat\xEDvel com a propriedade "),Sl(821,"code"),eN(822,"p-search-type"),og(),eN(823," do tipo "),Sl(824,"code"),eN(825,"locate"),og(),eN(826,"."),og()()()(),Sl(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),eN(831," p-locate-summary"),Wl(832,"br"),og()()(),Sl(833,"td",18)(834,"code",36),eN(835,"PoSearchLocateSummary"),og()(),Sl(836,"td",20),eN(837,"-"),og(),Sl(838,"td",21)(839,"em")(840,"strong"),eN(841,"(opcional)"),og()(),Sl(842,"p"),eN(843,"Define os valores do contador exibido ao usar a propriedade "),Sl(844,"code"),eN(845,"p-search-type"),og(),eN(846," do tipo "),Sl(847,"code"),eN(848,"locate"),og(),eN(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),og(),Sl(850,"pre")(851,"code",33),eN(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),og()(),Sl(853,"blockquote")(854,"p"),eN(855,"Compat\xEDvel com a propriedade "),Sl(856,"code"),eN(857,"p-search-type"),og(),eN(858," do tipo "),Sl(859,"code"),eN(860,"locate"),og(),eN(861,"."),og()()()(),Sl(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),eN(866," name"),Wl(867,"br"),og()()(),Sl(868,"td",18)(869,"code",19),eN(870,"string"),og()(),Sl(871,"td",20),eN(872,"-"),og(),Sl(873,"td",21)(874,"em")(875,"strong"),eN(876,"(opcional)"),og()(),Sl(877,"p"),eN(878,"Nome e identificador do campo."),og()()(),Sl(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),eN(883," p-no-autocomplete"),Wl(884,"br"),og()()(),Sl(885,"td",18)(886,"code",25),eN(887,"boolean"),og()(),Sl(888,"td",20)(889,"p")(890,"code"),eN(891,"false"),og()()(),Sl(892,"td",21)(893,"em")(894,"strong"),eN(895,"(opcional)"),og()(),Sl(896,"p"),eN(897,"Define a propriedade nativa "),Sl(898,"code"),eN(899,"autocomplete"),og(),eN(900," do campo como "),Sl(901,"code"),eN(902,"off"),og(),eN(903,"."),og()()(),Sl(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),eN(908," p-show-listbox"),Wl(909,"br"),og()()(),Sl(910,"td",18)(911,"code",25),eN(912,"boolean"),og()(),Sl(913,"td",20)(914,"p")(915,"code"),eN(916,"false"),og()()(),Sl(917,"td",21)(918,"em")(919,"strong"),eN(920,"(opcional)"),og()(),Sl(921,"p"),eN(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),Sl(923,"code"),eN(924,"p-filter-keys"),og(),eN(925," ou "),Sl(926,"code"),eN(927,"p-filter-select"),og(),eN(928,` enquanto realiza
uma busca, respeitando o `),Sl(929,"code"),eN(930,"p-filter-type"),og(),eN(931," como modo de pesquisa."),og(),Sl(932,"blockquote")(933,"p"),eN(934,"Incompat\xEDvel com a propriedade "),Sl(935,"code"),eN(936,"p-search-type"),og(),eN(937," do tipo "),Sl(938,"code"),eN(939,"locate"),og(),eN(940,"."),og()()()(),Sl(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),eN(945," p-size"),Wl(946,"br"),og()()(),Sl(947,"td",18)(948,"code",19),eN(949,"string"),og()(),Sl(950,"td",20)(951,"p")(952,"code"),eN(953,"medium"),og()()(),Sl(954,"td",21)(955,"em")(956,"strong"),eN(957,"(opcional)"),og()(),Sl(958,"p"),eN(959,"Define o tamanho do componente:"),og(),Sl(960,"ul")(961,"li")(962,"code"),eN(963,"small"),og(),eN(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(965,"li")(966,"code"),eN(967,"medium"),og(),eN(968,": altura do input como 44px."),og()(),Sl(969,"blockquote")(970,"p"),eN(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(972,"code"),eN(973,"medium"),og(),eN(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(975,"a",37),eN(976,"po-theme"),og(),eN(977,"."),og()()()(),Sl(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),eN(982," p-search-type"),Wl(983,"br"),og()()(),Sl(984,"td",18)(985,"code",38),eN(986,"searchMode"),og()(),Sl(987,"td",20)(988,"p")(989,"code"),eN(990,"action"),og()()(),Sl(991,"td",21)(992,"em")(993,"strong"),eN(994,"(opcional)"),og()(),Sl(995,"p"),eN(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),og(),Sl(997,"ul")(998,"li")(999,"code"),eN(1e3,"action"),og(),eN(1001,": Realiza a busca a cada caractere digitado."),og(),Sl(1002,"li")(1003,"code"),eN(1004,"trigger"),og(),eN(1005,": Realiza a busca ao pressionar "),Sl(1006,"code"),eN(1007,"enter"),og(),eN(1008," ou clicar no \xEDcone de busca."),og(),Sl(1009,"li")(1010,"code"),eN(1011,"locate"),og(),eN(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),og(),Sl(1013,"li")(1014,"code"),eN(1015,"execute"),og(),eN(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),Sl(1017,"code"),eN(1018,"listbox"),og(),eN(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),Sl(1020,"code"),eN(1021,"action"),og(),eN(1022," ou "),Sl(1023,"code"),eN(1024,"url"),og(),eN(1025," nos itens definidos em "),Sl(1026,"code"),eN(1027,"p-items"),og(),eN(1028,"."),og()()()()(),Sl(1029,"h3"),eN(1030,"Interfaces"),og(),Sl(1031,"h4",39)(1032,"code",5),eN(1033,"PoSearchFilterSelect"),og()(),Sl(1034,"div",2)(1035,"p"),eN(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),Sl(1037,"code"),eN(1038,"po-search"),og(),eN(1039,", ao usar a propriedade "),Sl(1040,"code"),eN(1041,"p-filter-select"),og(),eN(1042,"."),og()(),Sl(1043,"h4",10),eN(1044,"Propriedades"),og(),Sl(1045,"table",11)(1046,"tr",12)(1047,"th",13),eN(1048,"Nome"),og(),Sl(1049,"th",13),eN(1050,"Tipo"),og(),Sl(1051,"th",13),eN(1052,"Descri\xE7\xE3o"),og()(),Sl(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),eN(1057," label"),Wl(1058,"br"),og()()(),Sl(1059,"td",18)(1060,"code",19),eN(1061,"string"),og()(),Sl(1062,"td",21)(1063,"p"),eN(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og()()(),Sl(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),eN(1069," value"),Wl(1070,"br"),og()()(),Sl(1071,"td",18)(1072,"code",32),eN(1073,"Array<string> "),og(),Sl(1074,"code",19),eN(1075," string"),og()(),Sl(1076,"td",21)(1077,"p"),eN(1078,"Valores que ser\xE3o atribu\xEDdos ao "),Sl(1079,"code"),eN(1080,"p-filter-keys"),og()()()()(),Sl(1081,"h4",39)(1082,"code",5),eN(1083,"PoSearchLocateSummary"),og()(),Sl(1084,"div",2)(1085,"p"),eN(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),Sl(1087,"code"),eN(1088,"p-filter-locate"),og(),eN(1089,"."),og()(),Sl(1090,"h4",10),eN(1091,"Propriedades"),og(),Sl(1092,"table",11)(1093,"tr",12)(1094,"th",13),eN(1095,"Nome"),og(),Sl(1096,"th",13),eN(1097,"Tipo"),og(),Sl(1098,"th",13),eN(1099,"Descri\xE7\xE3o"),og()(),Sl(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),eN(1104," currentIndex"),Wl(1105,"br"),og()()(),Sl(1106,"td",18)(1107,"code",40),eN(1108,"number"),og()(),Sl(1109,"td",21)(1110,"p"),eN(1111,"\xCDndice atual da ocorr\xEAncia localizada."),og()()(),Sl(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),eN(1116," total"),Wl(1117,"br"),og()()(),Sl(1118,"td",18)(1119,"code",40),eN(1120,"number"),og()(),Sl(1121,"td",21)(1122,"p"),eN(1123,"Total de ocorr\xEAncias encontradas."),og()()()(),Sl(1124,"h4",39)(1125,"code",5),eN(1126,"PoSearchOption"),og()(),Sl(1127,"div",2)(1128,"p"),eN(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),Sl(1130,"code"),eN(1131,"po-search"),og(),eN(1132,"."),og()(),Sl(1133,"h4",10),eN(1134,"Propriedades"),og(),Sl(1135,"table",11)(1136,"tr",12)(1137,"th",13),eN(1138,"Nome"),og(),Sl(1139,"th",13),eN(1140,"Tipo"),og(),Sl(1141,"th",13),eN(1142,"Descri\xE7\xE3o"),og()(),Sl(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),eN(1147," label"),Wl(1148,"br"),og()()(),Sl(1149,"td",18)(1150,"code",19),eN(1151,"string"),og()(),Sl(1152,"td",21)(1153,"em")(1154,"strong"),eN(1155,"(opcional)"),og()(),Sl(1156,"p"),eN(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og(),Sl(1158,"blockquote")(1159,"p"),eN(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Sl(1161,"code"),eN(1162,"value"),og(),eN(1163,"."),og()()()(),Sl(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),eN(1168," value"),Wl(1169,"br"),og()()(),Sl(1170,"td",18)(1171,"code",19),eN(1172,"string "),og(),Sl(1173,"code",40),eN(1174," number"),og()(),Sl(1175,"td",21)(1176,"p"),eN(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Sl(1178,"em"),eN(1179,"model"),og(),eN(1180,"."),og()()()(),Sl(1181,"h4",39)(1182,"code",5),eN(1183,"PoSearchLiterals"),og()(),Sl(1184,"div",2)(1185,"p"),eN(1186,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1187,"code"),eN(1188,"po-search"),og(),eN(1189,"."),og()(),Sl(1190,"h4",10),eN(1191,"Propriedades"),og(),Sl(1192,"table",11)(1193,"tr",12)(1194,"th",13),eN(1195,"Nome"),og(),Sl(1196,"th",13),eN(1197,"Tipo"),og(),Sl(1198,"th",13),eN(1199,"Descri\xE7\xE3o"),og()(),Sl(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),eN(1204," all"),Wl(1205,"br"),og()()(),Sl(1206,"td",18)(1207,"code",19),eN(1208,"string"),og()(),Sl(1209,"td",21)(1210,"em")(1211,"strong"),eN(1212,"(opcional)"),og()(),Sl(1213,"p"),eN(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),og(),Sl(1215,"blockquote")(1216,"p"),eN(1217,"Exibido apenas quando a propriedade "),Sl(1218,"code"),eN(1219,"p-filter-select"),og(),eN(1220," estiver habilitada."),og()()()(),Sl(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),eN(1225," clean"),Wl(1226,"br"),og()()(),Sl(1227,"td",18)(1228,"code",19),eN(1229,"string"),og()(),Sl(1230,"td",21)(1231,"em")(1232,"strong"),eN(1233,"(opcional)"),og()(),Sl(1234,"p"),eN(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),og()()(),Sl(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),eN(1240," footerActionListbox"),Wl(1241,"br"),og()()(),Sl(1242,"td",18)(1243,"code",19),eN(1244,"string"),og()(),Sl(1245,"td",21)(1246,"em")(1247,"strong"),eN(1248,"(opcional)"),og()(),Sl(1249,"p"),eN(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),og()()(),Sl(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),eN(1255," next"),Wl(1256,"br"),og()()(),Sl(1257,"td",18)(1258,"code",19),eN(1259,"string"),og()(),Sl(1260,"td",21)(1261,"em")(1262,"strong"),eN(1263,"(opcional)"),og()(),Sl(1264,"p"),eN(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),og(),Sl(1266,"blockquote")(1267,"p"),eN(1268,"Exibido apenas quando a propriedade "),Sl(1269,"code"),eN(1270,"p-filter-locate"),og(),eN(1271," estiver habilitada."),og()()()(),Sl(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),eN(1276," of"),Wl(1277,"br"),og()()(),Sl(1278,"td",18)(1279,"code",19),eN(1280,"string"),og()(),Sl(1281,"td",21)(1282,"em")(1283,"strong"),eN(1284,"(opcional)"),og()(),Sl(1285,"p"),eN(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),og(),Sl(1287,"blockquote")(1288,"p"),eN(1289,"Exibido apenas quando a propriedade "),Sl(1290,"code"),eN(1291,"p-filter-locate"),og(),eN(1292," estiver habilitada."),og()()()(),Sl(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),eN(1297," placeholderListbox"),Wl(1298,"br"),og()()(),Sl(1299,"td",18)(1300,"code",19),eN(1301,"string"),og()(),Sl(1302,"td",21)(1303,"em")(1304,"strong"),eN(1305,"(opcional)"),og()(),Sl(1306,"p"),eN(1307,"Texto exibido como "),Sl(1308,"em"),eN(1309,"placeholder"),og(),eN(1310," na lista de resultados."),og()()(),Sl(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),eN(1315," previous"),Wl(1316,"br"),og()()(),Sl(1317,"td",18)(1318,"code",19),eN(1319,"string"),og()(),Sl(1320,"td",21)(1321,"em")(1322,"strong"),eN(1323,"(opcional)"),og()(),Sl(1324,"p"),eN(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),og(),Sl(1326,"blockquote")(1327,"p"),eN(1328,"Exibido apenas quando a propriedade "),Sl(1329,"code"),eN(1330,"p-filter-locate"),og(),eN(1331," estiver habilitada."),og()()()(),Sl(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),eN(1336," result"),Wl(1337,"br"),og()()(),Sl(1338,"td",18)(1339,"code",19),eN(1340,"string"),og()(),Sl(1341,"td",21)(1342,"em")(1343,"strong"),eN(1344,"(opcional)"),og()(),Sl(1345,"p"),eN(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),og(),Sl(1347,"blockquote")(1348,"p"),eN(1349,"Exibido apenas quando a propriedade "),Sl(1350,"code"),eN(1351,"p-filter-locate"),og(),eN(1352," estiver habilitada."),og()()()(),Sl(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),eN(1357," search"),Wl(1358,"br"),og()()(),Sl(1359,"td",18)(1360,"code",19),eN(1361,"string"),og()(),Sl(1362,"td",21)(1363,"em")(1364,"strong"),eN(1365,"(opcional)"),og()(),Sl(1366,"p"),eN(1367,"Texto exibido como "),Sl(1368,"em"),eN(1369,"placeholder"),og(),eN(1370," no campo de busca."),og()()()(),Sl(1371,"h3"),eN(1372,"Enums"),og(),Sl(1373,"h4",4)(1374,"code",5),eN(1375,"PoSearchFilterMode"),og()(),Sl(1376,"div",2)(1377,"p"),eN(1378,"Define o tipo de busca usado no "),Sl(1379,"code"),eN(1380,"po-search"),og(),eN(1381,"."),og()(),Sl(1382,"h4",10),eN(1383,"Propriedades"),og(),Sl(1384,"table",11)(1385,"tr",12)(1386,"th",13),eN(1387,"Nome"),og(),Sl(1388,"th",13),eN(1389,"Descri\xE7\xE3o"),og()(),Sl(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),eN(1394," startsWith"),Wl(1395,"br"),og()()(),Sl(1396,"td",21)(1397,"p"),eN(1398,"Verifica se o texto "),Sl(1399,"em"),eN(1400,"inicia"),og(),eN(1401," com o valor pesquisado."),og()()(),Sl(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),eN(1406," contains"),Wl(1407,"br"),og()()(),Sl(1408,"td",21)(1409,"p"),eN(1410,"Verifica se o texto "),Sl(1411,"em"),eN(1412,"cont\xE9m"),og(),eN(1413," o valor pesquisado."),og()()(),Sl(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),eN(1418," endsWith"),Wl(1419,"br"),og()()(),Sl(1420,"td",21)(1421,"p"),eN(1422,"Verifica se o texto "),Sl(1423,"em"),eN(1424,"finaliza"),og(),eN(1425," com o valor pesquisado."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft$1("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-search-doc"),og(),Sl(4,"po-tab",3),ft$1("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),og()()()),o&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,Oe,Ne,ze,We,He,Je,Ge,Qe],encapsulation:2})}return a})();var Ot=[{path:"",component:Xe}],Ye=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[hL.forChild(Ot),hL]})}return a})();var Jn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ye]})}return a})();export{Jn as DocPoSearchModule};