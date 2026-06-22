import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,n as nb,G,I,cI as y3,H as Wl,Q as nw,bs as fN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,bH as M3,c9 as Ghe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,bC as f3,b7 as k3,R as we,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Ce=()=>({value:"disclaimer"}),Ee=a=>[a],me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&Wl(0,"po-disclaimer-group",0),o&2&&nw("p-disclaimers",fN(2,Ee,dN(1,Ce)));},dependencies:[y3],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Disclaimer Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-disclaimer-group-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return a})();var ce=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=wx();Sl(0,"po-disclaimer-group",2),ft("p-change",function(){return n.changeEvent("p-change")}),og(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4),og(),Wl(4,"po-divider"),Sl(5,"form",null,0)(7,"div",3)(8,"po-input",5),ww("ngModelChange",function(d){return Ky(s),nN(n.disclaimer.label,d)||(n.disclaimer.label=d),Xy(d)}),og(),e0(),Sl(9,"po-input",6),ww("ngModelChange",function(d){return Ky(s),nN(n.disclaimer.value,d)||(n.disclaimer.value=d),Xy(d)}),og(),e0(),og(),Sl(10,"div",3)(11,"po-input",7),ww("ngModelChange",function(d){return Ky(s),nN(n.disclaimer.property,d)||(n.disclaimer.property=d),Xy(d)}),og(),e0(),Sl(12,"po-switch",8),ww("ngModelChange",function(d){return Ky(s),nN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Xy(d)}),og(),e0(),og(),Sl(13,"div",3)(14,"po-button",9),ft("p-click",function(){return n.addDisclaimer()}),og()()(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"div",3)(19,"po-input",10),ww("ngModelChange",function(d){return Ky(s),nN(n.title,d)||(n.title=d),Xy(d)}),og(),e0(),Sl(20,"po-checkbox-group",11),ww("ngModelChange",function(d){return Ky(s),nN(n.properties,d)||(n.properties=d),Xy(d)}),og(),e0(),og(),Sl(21,"div",3)(22,"po-button",12),ft("p-click",function(){Ky(s);let d=Nx(6),ve=Nx(17);return d.reset(),ve.reset(),Xy(n.restore())}),og()()();}if(o&2){let s=Nx(6);nw("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Lp(3),nw("p-value",n.event),Lp(5),Ew("ngModel",n.disclaimer.label),n0(),Lp(),Ew("ngModel",n.disclaimer.value),n0(),Lp(2),Ew("ngModel",n.disclaimer.property),n0(),Lp(),Ew("ngModel",n.disclaimer.hideClose),n0(),Lp(2),nw("p-disabled",s.invalid),Lp(5),Ew("ngModel",n.title),n0(),Lp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,y3,mv,b3,L3,M3,Ghe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Disclaimer Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-disclaimer-group
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-disclaimer-group-labs"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return a})();var q=(()=>{class a{http=f(nb);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(G(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ge=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items];}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0);}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n);}resetFilters(){this.filteredItems=[...this.items||[]];}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we([q])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(Sl(0,"div",0)(1,"po-input",1),ww("ngModelChange",function(p){return nN(n.name,p)||(n.name=p),p}),ft("p-change",function(){return n.addFilter(n.name,"name")}),og(),e0(),Sl(2,"po-combo",2),ww("ngModelChange",function(p){return nN(n.climate,p)||(n.climate=p),p}),ft("p-change",function(){return n.addFilter(n.climate,"climate")}),og(),e0(),Sl(3,"po-combo",3),ww("ngModelChange",function(p){return nN(n.terrain,p)||(n.terrain=p),p}),ft("p-change",function(){return n.addFilter(n.terrain,"terrain")}),og(),e0(),Sl(4,"po-disclaimer-group",4),ft("p-change",function(){return n.changeFilters(n.filters)}),og()(),Wl(5,"po-divider"),Sl(6,"div",0),Wl(7,"po-table",5),og()),o&2&&(Lp(),Ew("ngModel",n.name),n0(),Lp(),Ew("ngModel",n.climate),nw("p-options",n.climates),n0(),Lp(),Ew("ngModel",n.terrain),nw("p-options",n.terrains),n0(),Lp(),nw("p-disclaimers",n.filters),Lp(3),nw("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",false));},dependencies:[G9,_k,y3,mv,f3,L3,k3],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Disclaimer Group - Star Wars Planets"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { Injectable, inject } from '@angular/core';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-disclaimer-group-sw-planets"),og(),Wl(27,"hr")),o&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Me,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-disclaimer-group."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoDisclaimerGroupComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-disclaimer-group"),og(),eN(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),og(),Sl(18,"p"),eN(19,"\xC0 partir de dois "),Sl(20,"em"),eN(21,"disclaimers"),og(),eN(22," com o bot\xE3o "),Sl(23,"strong"),eN(24,"fechar"),og(),eN(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Sl(26,"em"),eN(27,"disclaimer"),og(),eN(28," que possibilita "),Sl(29,"strong"),eN(30,"remover todos"),og(),eN(31,", mas que tamb\xE9m pode ser desabilitado."),og(),Sl(32,"p"),eN(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Sl(34,"em"),eN(35,"disclaimers"),og(),eN(36," atrav\xE9s do teclado utilizando a tecla "),Sl(37,"em"),eN(38,"tab"),og(),eN(39," e, para remo\xE7\xE3o do "),Sl(40,"em"),eN(41,"disclaimer"),og(),eN(42,` selecionado,
basta pressionar a tecla `),Sl(43,"em"),eN(44,"enter"),og(),eN(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),Sl(46,"code"),eN(47,"hideClose"),og(),eN(48," estiver habilitada."),og(),Sl(49,"blockquote")(50,"p"),eN(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),Sl(52,"a",6),eN(53,"po-page-list"),og(),eN(54,". "),og()()(),Sl(55,"div",7)(56,"h4",8),eN(57,"Seletor"),og(),Sl(58,"pre",9),eN(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),og()(),Sl(60,"h4",10),eN(61,"Propriedades"),og(),Sl(62,"table",11)(63,"tr",12)(64,"th",13),eN(65,"Nome"),og(),Sl(66,"th",13),eN(67,"Tipo"),og(),Sl(68,"th",13),eN(69,"Padr\xE3o"),og(),Sl(70,"th",13),eN(71,"Descri\xE7\xE3o"),og()(),Sl(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),eN(76," (p-change)"),Wl(77,"br"),og()()(),Sl(78,"td",18)(79,"code",19),eN(80,"EventEmitter"),og()(),Sl(81,"td",20),eN(82,"-"),og(),Sl(83,"td",21)(84,"em")(85,"strong"),eN(86,"(opcional)"),og()(),Sl(87,"p"),eN(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Sl(89,"em"),eN(90,"disclaimers"),og(),eN(91," for modificada."),og()()(),Sl(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),eN(96," p-disclaimers"),Wl(97,"br"),og()()(),Sl(98,"td",18)(99,"code",24),eN(100,"PoDisclaimer[]"),og()(),Sl(101,"td",20),eN(102,"-"),og(),Sl(103,"td",21)(104,"p"),eN(105,"Lista de "),Sl(106,"em"),eN(107,"disclaimers"),og(),eN(108,"."),og(),Sl(109,"p"),eN(110,"Para que a lista de "),Sl(111,"em"),eN(112,"disclaimers"),og(),eN(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Sl(114,"code"),eN(115,"PoDisclaimer"),og(),eN(116,"."),og(),Sl(117,"p"),eN(118,"Exemplo adicionando um "),Sl(119,"em"),eN(120,"disclaimer"),og(),eN(121," no array:"),og(),Sl(122,"pre")(123,"code"),eN(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),og()(),Sl(125,"p"),eN(126,"ou"),og(),Sl(127,"pre")(128,"code"),eN(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),og()()()(),Sl(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),eN(134," p-hide-remove-all"),Wl(135,"br"),og()()(),Sl(136,"td",18)(137,"code",25),eN(138,"boolean"),og()(),Sl(139,"td",20)(140,"p")(141,"code"),eN(142,"false"),og()()(),Sl(143,"td",21)(144,"em")(145,"strong"),eN(146,"(opcional)"),og()(),Sl(147,"p"),eN(148,"Oculta o bot\xE3o para remover todos os "),Sl(149,"em"),eN(150,"disclaimers"),og(),eN(151," do grupo."),og(),Sl(152,"blockquote")(153,"p"),eN(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Sl(155,"em"),eN(156,"disclaimers"),og(),eN(157," com a op\xE7\xE3o "),Sl(158,"code"),eN(159,"hideClose"),og(),eN(160," habilitada."),og()()()(),Sl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),eN(165," (p-remove)"),Wl(166,"br"),og()()(),Sl(167,"td",18)(168,"code",19),eN(169,"EventEmitter"),og()(),Sl(170,"td",20),eN(171,"-"),og(),Sl(172,"td",21)(173,"em")(174,"strong"),eN(175,"(opcional)"),og()(),Sl(176,"p"),eN(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Sl(178,"em"),eN(179,"disclaimer"),og(),eN(180," for removido da lista de "),Sl(181,"em"),eN(182,"disclaimers"),og(),eN(183," pelo usu\xE1rio."),og(),Sl(184,"p"),eN(185,"Recebe como par\xE2metro um objeto conforme a interface "),Sl(186,"code"),eN(187,"PoDisclaimerGroupRemoveAction"),og(),eN(188,"."),og()()(),Sl(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),eN(193," (p-remove-all)"),Wl(194,"br"),og()()(),Sl(195,"td",18)(196,"code",19),eN(197,"EventEmitter"),og()(),Sl(198,"td",20),eN(199,"-"),og(),Sl(200,"td",21)(201,"em")(202,"strong"),eN(203,"(opcional)"),og()(),Sl(204,"p"),eN(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Sl(206,"em"),eN(207,"disclaimers"),og(),eN(208," forem removidos da lista de "),Sl(209,"em"),eN(210,"disclaimers"),og(),eN(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Sl(212,"p"),eN(213,"Recebe como par\xE2metro uma lista contendo todos os "),Sl(214,"code"),eN(215,"disclaimers"),og(),eN(216," removidos."),og()()(),Sl(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),eN(221," p-title"),Wl(222,"br"),og()()(),Sl(223,"td",18)(224,"code",26),eN(225,"string"),og()(),Sl(226,"td",20),eN(227,"-"),og(),Sl(228,"td",21)(229,"em")(230,"strong"),eN(231,"(opcional)"),og()(),Sl(232,"p"),eN(233,"T\xEDtulo do grupo de "),Sl(234,"em"),eN(235,"disclaimers"),og(),eN(236,"."),og()()()(),Sl(237,"h3"),eN(238,"Interfaces"),og(),Sl(239,"h4",27)(240,"code",5),eN(241,"PoDisclaimer"),og()(),Sl(242,"div",2)(243,"p"),eN(244,"Interface que representa o objeto "),Sl(245,"code"),eN(246,"po-disclaimer"),og(),eN(247,"."),og()(),Sl(248,"h4",10),eN(249,"Propriedades"),og(),Sl(250,"table",11)(251,"tr",12)(252,"th",13),eN(253,"Nome"),og(),Sl(254,"th",13),eN(255,"Tipo"),og(),Sl(256,"th",13),eN(257,"Descri\xE7\xE3o"),og()(),Sl(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),eN(262," hideClose"),Wl(263,"br"),og()()(),Sl(264,"td",18)(265,"code",25),eN(266,"boolean"),og()(),Sl(267,"td",21)(268,"em")(269,"strong"),eN(270,"(opcional)"),og()(),Sl(271,"p"),eN(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Sl(273,"em"),eN(274,"disclaimer"),og(),eN(275,"."),og()()(),Sl(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),eN(280," label"),Wl(281,"br"),og()()(),Sl(282,"td",18)(283,"code",26),eN(284,"string"),og()(),Sl(285,"td",21)(286,"em")(287,"strong"),eN(288,"(opcional)"),og()(),Sl(289,"p"),eN(290,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Sl(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),eN(295," property"),Wl(296,"br"),og()()(),Sl(297,"td",18)(298,"code",26),eN(299,"string"),og()(),Sl(300,"td",21)(301,"em")(302,"strong"),eN(303,"(opcional)"),og()(),Sl(304,"p"),eN(305,"Nome da propriedade vinculada ao objeto "),Sl(306,"em"),eN(307,"disclaimer"),og(),eN(308,"."),og()()(),Sl(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),eN(313," value"),Wl(314,"br"),og()()(),Sl(315,"td",18)(316,"code",28),eN(317,"any"),og()(),Sl(318,"td",21)(319,"p"),eN(320,"Valor do objeto."),og()()()(),Sl(321,"h4",27)(322,"code",5),eN(323,"PoDisclaimerGroupRemoveAction"),og()(),Sl(324,"div",2)(325,"p"),eN(326,"Estrutura do objeto representando o estado dos "),Sl(327,"em"),eN(328,"disclaimers"),og(),eN(329," ap\xF3s a remo\xE7\xE3o."),og()(),Sl(330,"h4",10),eN(331,"Propriedades"),og(),Sl(332,"table",11)(333,"tr",12)(334,"th",13),eN(335,"Nome"),og(),Sl(336,"th",13),eN(337,"Tipo"),og(),Sl(338,"th",13),eN(339,"Descri\xE7\xE3o"),og()(),Sl(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),eN(344," currentDisclaimers"),Wl(345,"br"),og()()(),Sl(346,"td",18)(347,"code",29),eN(348,"Array<PoDisclaimer>"),og()(),Sl(349,"td",21)(350,"p"),eN(351,"Lista com os "),Sl(352,"em"),eN(353,"disclaimers"),og(),eN(354," atuais (restantes)."),og()()(),Sl(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),eN(359," removedDisclaimer"),Wl(360,"br"),og()()(),Sl(361,"td",18)(362,"code",30),eN(363,"PoDisclaimer"),og()(),Sl(364,"td",21)(365,"p")(366,"em"),eN(367,"Disclaimer"),og(),eN(368," que foi removido."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-disclaimer-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),og()()()),o&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,de,ue,he,be],encapsulation:2})}return a})();var Ie=[{path:"",component:fe}],Se=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[hL.forChild(Ie),hL]})}return a})();var ct=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Se]})}return a})();export{ct as DocPoDisclaimerGroupModule};