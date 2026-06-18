import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,n as nb,W,w,cI as b3,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,bC as v3,b7 as E3,X as we,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Ce=()=>({value:"disclaimer"}),Ee=a=>[a],me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&zl(0,"po-disclaimer-group",0),o&2&&nw("p-disclaimers",uN(2,Ee,lN(1,Ce)));},dependencies:[b3],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Disclaimer Group Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-disclaimer-group-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=Dx();Il(0,"po-disclaimer-group",2),ft("p-change",function(){return n.changeEvent("p-change")}),og(),zl(1,"po-divider"),Il(2,"div",3),zl(3,"po-info",4),og(),zl(4,"po-divider"),Il(5,"form",null,0)(7,"div",3)(8,"po-input",5),ww("ngModelChange",function(d){return Xy(s),eN(n.disclaimer.label,d)||(n.disclaimer.label=d),Qy(d)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(d){return Xy(s),eN(n.disclaimer.value,d)||(n.disclaimer.value=d),Qy(d)}),og(),QA(),og(),Il(10,"div",3)(11,"po-input",7),ww("ngModelChange",function(d){return Xy(s),eN(n.disclaimer.property,d)||(n.disclaimer.property=d),Qy(d)}),og(),QA(),Il(12,"po-switch",8),ww("ngModelChange",function(d){return Xy(s),eN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Qy(d)}),og(),QA(),og(),Il(13,"div",3)(14,"po-button",9),ft("p-click",function(){return n.addDisclaimer()}),og()()(),zl(15,"po-divider"),Il(16,"form",null,1)(18,"div",3)(19,"po-input",10),ww("ngModelChange",function(d){return Xy(s),eN(n.title,d)||(n.title=d),Qy(d)}),og(),QA(),Il(20,"po-checkbox-group",11),ww("ngModelChange",function(d){return Xy(s),eN(n.properties,d)||(n.properties=d),Qy(d)}),og(),QA(),og(),Il(21,"div",3)(22,"po-button",12),ft("p-click",function(){Xy(s);let d=Ax(6),ve=Ax(17);return d.reset(),ve.reset(),Qy(n.restore())}),og()()();}if(o&2){let s=Ax(6);nw("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Lp(3),nw("p-value",n.event),Lp(5),Ew("ngModel",n.disclaimer.label),e0(),Lp(),Ew("ngModel",n.disclaimer.value),e0(),Lp(2),Ew("ngModel",n.disclaimer.property),e0(),Lp(),Ew("ngModel",n.disclaimer.hideClose),e0(),Lp(2),nw("p-disabled",s.invalid),Lp(5),Ew("ngModel",n.title),e0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,b3,mv,C3,O3,k3,Yhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Disclaimer Group Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-disclaimer-group
  [p-disclaimers]="disclaimers"
  [p-hide-remove-all]="$safeNavigationMigration(properties?.includes('hideRemoveAll'))"
  [p-title]="title"
  (p-change)="changeEvent('p-change')"
>
</po-disclaimer-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #disclaimerForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimer.label" p-label="Disclaimer Label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimer.value"
      p-label="Disclaimer Value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerProperty" [(ngModel)]="disclaimer.property" p-label="Disclaimer Property">
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimer.hideClose"
      p-label="Disclaimer Hide Close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Disclaimer"
      [p-disabled]="disclaimerForm.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="disclaimerForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDisclaimer } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-disclaimer-group-labs',
  templateUrl: './sample-po-disclaimer-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupLabsComponent implements OnInit {
  disclaimer: PoDisclaimer;
  disclaimers: Array<PoDisclaimer>;
  event: string;
  properties: Array<string> = [];
  title: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideRemoveAll', label: 'Hide remove all' }];

  ngOnInit() {
    this.restore();
  }

  addDisclaimer() {
    this.disclaimers = [...this.disclaimers, this.disclaimer];

    this.disclaimer = { value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.disclaimer = { value: undefined };
    this.disclaimers = [];

    this.event = '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-disclaimer-group-labs"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return a})();var q=(()=>{class a{http=f(nb);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(W(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items];}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0);}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n);}resetFilters(){this.filteredItems=[...this.items||[]];}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we([q])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(Il(0,"div",0)(1,"po-input",1),ww("ngModelChange",function(p){return eN(n.name,p)||(n.name=p),p}),ft("p-change",function(){return n.addFilter(n.name,"name")}),og(),QA(),Il(2,"po-combo",2),ww("ngModelChange",function(p){return eN(n.climate,p)||(n.climate=p),p}),ft("p-change",function(){return n.addFilter(n.climate,"climate")}),og(),QA(),Il(3,"po-combo",3),ww("ngModelChange",function(p){return eN(n.terrain,p)||(n.terrain=p),p}),ft("p-change",function(){return n.addFilter(n.terrain,"terrain")}),og(),QA(),Il(4,"po-disclaimer-group",4),ft("p-change",function(){return n.changeFilters(n.filters)}),og()(),zl(5,"po-divider"),Il(6,"div",0),zl(7,"po-table",5),og()),o&2&&(Lp(),Ew("ngModel",n.name),e0(),Lp(),Ew("ngModel",n.climate),nw("p-options",n.climates),e0(),Lp(),Ew("ngModel",n.terrain),nw("p-options",n.terrains),e0(),Lp(),nw("p-disclaimers",n.filters),Lp(3),nw("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",false));},dependencies:[$9,mk,b3,mv,v3,O3,E3],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Disclaimer Group - Star Wars Planets"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-input
    class="po-md-4"
    name="name"
    [(ngModel)]="name"
    p-help="Contains planet name"
    p-label="Planet Name"
    (p-change)="addFilter(name, 'name')"
  >
  </po-input>

  <po-combo
    class="po-md-4"
    name="climate"
    [(ngModel)]="climate"
    p-help="Planet climate"
    p-label="Climate"
    [p-options]="climates"
    (p-change)="addFilter(climate, 'climate')"
  >
  </po-combo>

  <po-combo
    class="po-md-4"
    [(ngModel)]="terrain"
    name="terrain"
    p-help="Planet terrain"
    p-label="Terrain"
    [p-options]="terrains"
    (p-change)="addFilter(terrain, 'terrain')"
  >
  </po-combo>

  <po-disclaimer-group [p-disclaimers]="filters" (p-change)="changeFilters(filters)"> </po-disclaimer-group>
</div>

<po-divider />

<div class="po-row">
  <po-table class="po-md-12" [p-columns]="columns" [p-items]="filteredItems" [p-hide-table-search]="false"> </po-table>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoDisclaimer, PoTableColumn } from '@po-ui/ng-components';

import { SamplePoDisclaimerGroupSwPlanetsService } from './sample-po-disclaimer-group-sw-planets.service';

@Component({
  selector: 'sample-po-disclaimer-group-sw-planets',
  templateUrl: './sample-po-disclaimer-group-sw-planets.component.html',
  providers: [SamplePoDisclaimerGroupSwPlanetsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupSwPlanetsComponent implements OnInit {
  disclaimerGroupSwPlanetsService = inject(SamplePoDisclaimerGroupSwPlanetsService);

  climate: string;
  columns: Array<PoTableColumn>;
  filteredItems: Array<any> = [];
  filters: Array<PoDisclaimer> = [];
  items: Array<any>;
  name: string;
  terrain: string;

  public climates: Array<PoComboOption>;
  public terrains: Array<PoComboOption>;

  ngOnInit() {
    this.disclaimerGroupSwPlanetsService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = [...this.items];
    });
    this.columns = this.disclaimerGroupSwPlanetsService.getColumns();
    this.climates = this.disclaimerGroupSwPlanetsService.getClimates();
    this.terrains = this.disclaimerGroupSwPlanetsService.getTerrains();
  }

  addFilter(value: any, property: string) {
    let filter = this.filters.find(item => item.property === property);

    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;
    this.filters = [...this.filters, filter];
  }

  changeFilters(filters: Array<PoDisclaimer>) {
    filters.length ? this.filter(filters) : this.resetFilters();
    this.clearFieldsIfNoFilter('name', 'terrain', 'climate');
  }

  private clearFieldsIfNoFilter(...fields: Array<string>) {
    const fieldHaveNoFilter = field => !this.filters.some(filter => filter.property === field);

    const fieldsWithoutFilter = fields.filter(field => this[field] && fieldHaveNoFilter(field));

    fieldsWithoutFilter.forEach(field => (this[field] = undefined));
  }

  private filter(filters: Array<PoDisclaimer>) {
    const filterCondition = (filter, item) =>
      item[filter.property].toLocaleLowerCase().includes(filter.value.toLocaleLowerCase());
    const filterItems = item => filters.every(filter => filterCondition(filter, item));

    this.filteredItems = this.items.filter(filterItems);
  }

  private resetFilters() {
    this.filteredItems = [...(this.items || [])];
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoComboOption, PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDisclaimerGroupSwPlanetsService {
  private http = inject(HttpClient);

  getClimates(): Array<PoComboOption> {
    return [
      { value: 'arid', label: 'Arid' },
      { value: 'frozen', label: 'Frozen' },
      { value: 'murky', label: 'Murky' },
      { value: 'temperate', label: 'Temperate' },
      { value: 'tropical', label: 'Tropical' }
    ];
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Planet Name' },
      { property: 'climate', label: 'Climate' },
      { property: 'terrain', label: 'Terrain' },
      { property: 'surface_water', label: 'Surface Water' },
      { property: 'gravity', label: 'Gravity' },
      { property: 'population', label: 'Population', type: 'number' }
    ];
  }

  getItems(): Observable<Array<any>> {
    return this.http.get('https://swapi.dev/api/planets/').pipe(map((response: any) => response.results));
  }

  getTerrains(): Array<PoComboOption> {
    return [
      { value: 'barren', label: 'Barren' },
      { value: 'cityscape', label: 'Cityscape' },
      { value: 'desert', label: 'Desert' },
      { value: 'forests', label: 'Forests' },
      { value: 'gas giant', label: 'Gas giant' },
      { value: 'grasslands', label: 'Grasslands' },
      { value: 'grassy hills', label: 'Grassy hills' },
      { value: 'ice caves', label: 'Ice caves' },
      { value: 'jungles', label: 'Jungles' },
      { value: 'lakes', label: 'Lakes' },
      { value: 'mountain ranges', label: 'Mountain ranges' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'ocean', label: 'Ocean' },
      { value: 'rainforests', label: 'Rainforests' },
      { value: 'rock', label: 'Rock' },
      { value: 'swamp', label: 'Swamp' },
      { value: 'tundra', label: 'Tundra' }
    ];
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-disclaimer-group-sw-planets"),og(),zl(27,"hr")),o&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-disclaimer-group."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoDisclaimerGroupComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-disclaimer-group"),og(),Qx(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),og(),Il(18,"p"),Qx(19,"\xC0 partir de dois "),Il(20,"em"),Qx(21,"disclaimers"),og(),Qx(22," com o bot\xE3o "),Il(23,"strong"),Qx(24,"fechar"),og(),Qx(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Il(26,"em"),Qx(27,"disclaimer"),og(),Qx(28," que possibilita "),Il(29,"strong"),Qx(30,"remover todos"),og(),Qx(31,", mas que tamb\xE9m pode ser desabilitado."),og(),Il(32,"p"),Qx(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Il(34,"em"),Qx(35,"disclaimers"),og(),Qx(36," atrav\xE9s do teclado utilizando a tecla "),Il(37,"em"),Qx(38,"tab"),og(),Qx(39," e, para remo\xE7\xE3o do "),Il(40,"em"),Qx(41,"disclaimer"),og(),Qx(42,` selecionado,
basta pressionar a tecla `),Il(43,"em"),Qx(44,"enter"),og(),Qx(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),Il(46,"code"),Qx(47,"hideClose"),og(),Qx(48," estiver habilitada."),og(),Il(49,"blockquote")(50,"p"),Qx(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),Il(52,"a",6),Qx(53,"po-page-list"),og(),Qx(54,". "),og()()(),Il(55,"div",7)(56,"h4",8),Qx(57,"Seletor"),og(),Il(58,"pre",9),Qx(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),og()(),Il(60,"h4",10),Qx(61,"Propriedades"),og(),Il(62,"table",11)(63,"tr",12)(64,"th",13),Qx(65,"Nome"),og(),Il(66,"th",13),Qx(67,"Tipo"),og(),Il(68,"th",13),Qx(69,"Padr\xE3o"),og(),Il(70,"th",13),Qx(71,"Descri\xE7\xE3o"),og()(),Il(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),Qx(76," (p-change)"),zl(77,"br"),og()()(),Il(78,"td",18)(79,"code",19),Qx(80,"EventEmitter"),og()(),Il(81,"td",20),Qx(82,"-"),og(),Il(83,"td",21)(84,"em")(85,"strong"),Qx(86,"(opcional)"),og()(),Il(87,"p"),Qx(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Il(89,"em"),Qx(90,"disclaimers"),og(),Qx(91," for modificada."),og()()(),Il(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),Qx(96," p-disclaimers"),zl(97,"br"),og()()(),Il(98,"td",18)(99,"code",24),Qx(100,"PoDisclaimer[]"),og()(),Il(101,"td",20),Qx(102,"-"),og(),Il(103,"td",21)(104,"p"),Qx(105,"Lista de "),Il(106,"em"),Qx(107,"disclaimers"),og(),Qx(108,"."),og(),Il(109,"p"),Qx(110,"Para que a lista de "),Il(111,"em"),Qx(112,"disclaimers"),og(),Qx(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Il(114,"code"),Qx(115,"PoDisclaimer"),og(),Qx(116,"."),og(),Il(117,"p"),Qx(118,"Exemplo adicionando um "),Il(119,"em"),Qx(120,"disclaimer"),og(),Qx(121," no array:"),og(),Il(122,"pre")(123,"code"),Qx(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),og()(),Il(125,"p"),Qx(126,"ou"),og(),Il(127,"pre")(128,"code"),Qx(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),og()()()(),Il(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),Qx(134," p-hide-remove-all"),zl(135,"br"),og()()(),Il(136,"td",18)(137,"code",25),Qx(138,"boolean"),og()(),Il(139,"td",20)(140,"p")(141,"code"),Qx(142,"false"),og()()(),Il(143,"td",21)(144,"em")(145,"strong"),Qx(146,"(opcional)"),og()(),Il(147,"p"),Qx(148,"Oculta o bot\xE3o para remover todos os "),Il(149,"em"),Qx(150,"disclaimers"),og(),Qx(151," do grupo."),og(),Il(152,"blockquote")(153,"p"),Qx(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Il(155,"em"),Qx(156,"disclaimers"),og(),Qx(157," com a op\xE7\xE3o "),Il(158,"code"),Qx(159,"hideClose"),og(),Qx(160," habilitada."),og()()()(),Il(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),Qx(165," (p-remove)"),zl(166,"br"),og()()(),Il(167,"td",18)(168,"code",19),Qx(169,"EventEmitter"),og()(),Il(170,"td",20),Qx(171,"-"),og(),Il(172,"td",21)(173,"em")(174,"strong"),Qx(175,"(opcional)"),og()(),Il(176,"p"),Qx(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Il(178,"em"),Qx(179,"disclaimer"),og(),Qx(180," for removido da lista de "),Il(181,"em"),Qx(182,"disclaimers"),og(),Qx(183," pelo usu\xE1rio."),og(),Il(184,"p"),Qx(185,"Recebe como par\xE2metro um objeto conforme a interface "),Il(186,"code"),Qx(187,"PoDisclaimerGroupRemoveAction"),og(),Qx(188,"."),og()()(),Il(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),Qx(193," (p-remove-all)"),zl(194,"br"),og()()(),Il(195,"td",18)(196,"code",19),Qx(197,"EventEmitter"),og()(),Il(198,"td",20),Qx(199,"-"),og(),Il(200,"td",21)(201,"em")(202,"strong"),Qx(203,"(opcional)"),og()(),Il(204,"p"),Qx(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Il(206,"em"),Qx(207,"disclaimers"),og(),Qx(208," forem removidos da lista de "),Il(209,"em"),Qx(210,"disclaimers"),og(),Qx(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Il(212,"p"),Qx(213,"Recebe como par\xE2metro uma lista contendo todos os "),Il(214,"code"),Qx(215,"disclaimers"),og(),Qx(216," removidos."),og()()(),Il(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),Qx(221," p-title"),zl(222,"br"),og()()(),Il(223,"td",18)(224,"code",26),Qx(225,"string"),og()(),Il(226,"td",20),Qx(227,"-"),og(),Il(228,"td",21)(229,"em")(230,"strong"),Qx(231,"(opcional)"),og()(),Il(232,"p"),Qx(233,"T\xEDtulo do grupo de "),Il(234,"em"),Qx(235,"disclaimers"),og(),Qx(236,"."),og()()()(),Il(237,"h3"),Qx(238,"Interfaces"),og(),Il(239,"h4",27)(240,"code",5),Qx(241,"PoDisclaimer"),og()(),Il(242,"div",2)(243,"p"),Qx(244,"Interface que representa o objeto "),Il(245,"code"),Qx(246,"po-disclaimer"),og(),Qx(247,"."),og()(),Il(248,"h4",10),Qx(249,"Propriedades"),og(),Il(250,"table",11)(251,"tr",12)(252,"th",13),Qx(253,"Nome"),og(),Il(254,"th",13),Qx(255,"Tipo"),og(),Il(256,"th",13),Qx(257,"Descri\xE7\xE3o"),og()(),Il(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),Qx(262," hideClose"),zl(263,"br"),og()()(),Il(264,"td",18)(265,"code",25),Qx(266,"boolean"),og()(),Il(267,"td",21)(268,"em")(269,"strong"),Qx(270,"(opcional)"),og()(),Il(271,"p"),Qx(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Il(273,"em"),Qx(274,"disclaimer"),og(),Qx(275,"."),og()()(),Il(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),Qx(280," label"),zl(281,"br"),og()()(),Il(282,"td",18)(283,"code",26),Qx(284,"string"),og()(),Il(285,"td",21)(286,"em")(287,"strong"),Qx(288,"(opcional)"),og()(),Il(289,"p"),Qx(290,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Il(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),Qx(295," property"),zl(296,"br"),og()()(),Il(297,"td",18)(298,"code",26),Qx(299,"string"),og()(),Il(300,"td",21)(301,"em")(302,"strong"),Qx(303,"(opcional)"),og()(),Il(304,"p"),Qx(305,"Nome da propriedade vinculada ao objeto "),Il(306,"em"),Qx(307,"disclaimer"),og(),Qx(308,"."),og()()(),Il(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),Qx(313," value"),zl(314,"br"),og()()(),Il(315,"td",18)(316,"code",28),Qx(317,"any"),og()(),Il(318,"td",21)(319,"p"),Qx(320,"Valor do objeto."),og()()()(),Il(321,"h4",27)(322,"code",5),Qx(323,"PoDisclaimerGroupRemoveAction"),og()(),Il(324,"div",2)(325,"p"),Qx(326,"Estrutura do objeto representando o estado dos "),Il(327,"em"),Qx(328,"disclaimers"),og(),Qx(329," ap\xF3s a remo\xE7\xE3o."),og()(),Il(330,"h4",10),Qx(331,"Propriedades"),og(),Il(332,"table",11)(333,"tr",12)(334,"th",13),Qx(335,"Nome"),og(),Il(336,"th",13),Qx(337,"Tipo"),og(),Il(338,"th",13),Qx(339,"Descri\xE7\xE3o"),og()(),Il(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),Qx(344," currentDisclaimers"),zl(345,"br"),og()()(),Il(346,"td",18)(347,"code",29),Qx(348,"Array<PoDisclaimer>"),og()(),Il(349,"td",21)(350,"p"),Qx(351,"Lista com os "),Il(352,"em"),Qx(353,"disclaimers"),og(),Qx(354," atuais (restantes)."),og()()(),Il(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),Qx(359," removedDisclaimer"),zl(360,"br"),og()()(),Il(361,"td",18)(362,"code",30),Qx(363,"PoDisclaimer"),og()(),Il(364,"td",21)(365,"p")(366,"em"),Qx(367,"Disclaimer"),og(),Qx(368," que foi removido."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-disclaimer-group-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),og()()()),o&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,de,ue,he,be],encapsulation:2})}return a})();var Ie=[{path:"",component:fe}],Se=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[uL.forChild(Ie),uL]})}return a})();var ct=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Se]})}return a})();export{ct as DocPoDisclaimerGroupModule};