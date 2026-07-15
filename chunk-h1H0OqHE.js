import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,r as rb,G,I,j,cI as y3,F as Wl,O as rw,bs as gN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,bH as k3,c9 as jhe,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,bC as f3,b7 as M3,Q as we,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Ee=()=>({value:"disclaimer"}),ye=a=>[a],pe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&Wl(0,"po-disclaimer-group",0),o&2&&rw("p-disclaimers",gN(2,ye,pN(1,Ee)));},dependencies:[y3],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Disclaimer Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-disclaimer-group-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,De,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,pe],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore();}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0};}changeEvent(l){this.event=l;}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event="";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:false,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=Ix();Sl(0,"po-disclaimer-group",2),ft("p-change",function(){return n.changeEvent("p-change")}),og(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4),og(),Wl(4,"po-divider"),Sl(5,"form",null,0)(7,"div",3)(8,"po-input",5),Cw("ngModelChange",function(d){return Ky(s),oN(n.disclaimer.label,d)||(n.disclaimer.label=d),Xy(d)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(d){return Ky(s),oN(n.disclaimer.value,d)||(n.disclaimer.value=d),Xy(d)}),og(),n0(),og(),Sl(10,"div",3)(11,"po-input",7),Cw("ngModelChange",function(d){return Ky(s),oN(n.disclaimer.property,d)||(n.disclaimer.property=d),Xy(d)}),og(),n0(),Sl(12,"po-switch",8),Cw("ngModelChange",function(d){return Ky(s),oN(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),Xy(d)}),og(),n0(),og(),Sl(13,"div",3)(14,"po-button",9),ft("p-click",function(){return n.addDisclaimer()}),og()()(),Wl(15,"po-divider"),Sl(16,"form",null,1)(18,"div",3)(19,"po-input",10),Cw("ngModelChange",function(d){return Ky(s),oN(n.title,d)||(n.title=d),Xy(d)}),og(),n0(),Sl(20,"po-checkbox-group",11),Cw("ngModelChange",function(d){return Ky(s),oN(n.properties,d)||(n.properties=d),Xy(d)}),og(),n0(),og(),Sl(21,"div",3)(22,"po-button",12),ft("p-click",function(){Ky(s);let d=kx(6),Ce=kx(17);return d.reset(),Ce.reset(),Xy(n.restore())}),og()()();}if(o&2){let s=kx(6);rw("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),Lp(3),rw("p-value",n.event),Lp(5),ww("ngModel",n.disclaimer.label),i0(),Lp(),ww("ngModel",n.disclaimer.value),i0(),Lp(2),ww("ngModel",n.disclaimer.property),i0(),Lp(),ww("ngModel",n.disclaimer.hideClose),i0(),Lp(2),rw("p-disabled",s.invalid),Lp(5),ww("ngModel",n.title),i0(),Lp(),ww("ngModel",n.properties),rw("p-options",n.propertiesOptions),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Qt,y3,mv,b3,L3,k3,jhe],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Disclaimer Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-disclaimer-group
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-disclaimer-group-labs"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Te,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ue],encapsulation:2,changeDetection:1})}return a})();var q=(()=>{class a{http=f(rb);getClimates(){return [{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return [{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(G(l=>l.results))}getTerrains(){return [{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var he=(()=>{class a{disclaimerGroupSwPlanetsService=f(q);climate;columns;filteredItems=j([]);filters=[];items;name;terrain;climates;terrains;ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems.set([...this.items]);}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains();}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n];}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate");}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0);}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems.set(this.items.filter(n));}resetFilters(){this.filteredItems.set([...this.items||[]]);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:false,features:[we([q])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(Sl(0,"div",0)(1,"po-input",1),Cw("ngModelChange",function(p){return oN(n.name,p)||(n.name=p),p}),ft("p-change",function(){return n.addFilter(n.name,"name")}),og(),n0(),Sl(2,"po-combo",2),Cw("ngModelChange",function(p){return oN(n.climate,p)||(n.climate=p),p}),ft("p-change",function(){return n.addFilter(n.climate,"climate")}),og(),n0(),Sl(3,"po-combo",3),Cw("ngModelChange",function(p){return oN(n.terrain,p)||(n.terrain=p),p}),ft("p-change",function(){return n.addFilter(n.terrain,"terrain")}),og(),n0(),Sl(4,"po-disclaimer-group",4),ft("p-change",function(){return n.changeFilters(n.filters)}),og()(),Wl(5,"po-divider"),Sl(6,"div",0),Wl(7,"po-table",5),og()),o&2&&(Lp(),ww("ngModel",n.name),i0(),Lp(),ww("ngModel",n.climate),rw("p-options",n.climates),i0(),Lp(),ww("ngModel",n.terrain),rw("p-options",n.terrains),i0(),Lp(),rw("p-disclaimers",n.filters),Lp(3),rw("p-columns",n.columns)("p-items",n.filteredItems())("p-hide-table-search",false));},dependencies:[Z9,wk,y3,mv,f3,L3,M3],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Disclaimer Group - Star Wars Planets"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
  <po-table class="po-md-12" [p-columns]="columns" [p-items]="filteredItems()" [p-hide-table-search]="false"> </po-table>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy, signal } from '@angular/core';

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
  filteredItems = signal<Array<any>>([]);
  filters: Array<PoDisclaimer> = [];
  items: Array<any>;
  name: string;
  terrain: string;

  public climates: Array<PoComboOption>;
  public terrains: Array<PoComboOption>;

  ngOnInit() {
    this.disclaimerGroupSwPlanetsService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems.set([...this.items]);
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

    this.filteredItems.set(this.items.filter(filterItems));
  }

  private resetFilters() {
    this.filteredItems.set([...(this.items || [])]);
  }
}
`),og(),Sl(21,"label",6),rN(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable, inject } from '@angular/core';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-disclaimer-group-sw-planets"),og(),Wl(27,"hr")),o&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Fe,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:false,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-disclaimer-group."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoDisclaimerGroupComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-disclaimer-group"),og(),rN(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),og(),Sl(18,"p"),rN(19,"\xC0 partir de dois "),Sl(20,"em"),rN(21,"disclaimers"),og(),rN(22," com o bot\xE3o "),Sl(23,"strong"),rN(24,"fechar"),og(),rN(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),Sl(26,"em"),rN(27,"disclaimer"),og(),rN(28," que possibilita "),Sl(29,"strong"),rN(30,"remover todos"),og(),rN(31,", mas que tamb\xE9m pode ser desabilitado."),og(),Sl(32,"p"),rN(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),Sl(34,"em"),rN(35,"disclaimers"),og(),rN(36," atrav\xE9s do teclado utilizando a tecla "),Sl(37,"em"),rN(38,"tab"),og(),rN(39," e, para remo\xE7\xE3o do "),Sl(40,"em"),rN(41,"disclaimer"),og(),rN(42,` selecionado,
basta pressionar a tecla `),Sl(43,"em"),rN(44,"enter"),og(),rN(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),Sl(46,"code"),rN(47,"hideClose"),og(),rN(48," estiver habilitada."),og(),Sl(49,"blockquote")(50,"p"),rN(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),Sl(52,"a",6),rN(53,"po-page-list"),og(),rN(54,". "),og()()(),Sl(55,"div",7)(56,"h4",8),rN(57,"Seletor"),og(),Sl(58,"pre",9),rN(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),og()(),Sl(60,"h4",10),rN(61,"Propriedades"),og(),Sl(62,"table",11)(63,"tr",12)(64,"th",13),rN(65,"Nome"),og(),Sl(66,"th",13),rN(67,"Tipo"),og(),Sl(68,"th",13),rN(69,"Padr\xE3o"),og(),Sl(70,"th",13),rN(71,"Descri\xE7\xE3o"),og()(),Sl(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),rN(76," (p-change)"),Wl(77,"br"),og()()(),Sl(78,"td",18)(79,"code",19),rN(80,"EventEmitter"),og()(),Sl(81,"td",20),rN(82,"-"),og(),Sl(83,"td",21)(84,"em")(85,"strong"),rN(86,"(opcional)"),og()(),Sl(87,"p"),rN(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),Sl(89,"em"),rN(90,"disclaimers"),og(),rN(91," for modificada."),og()()(),Sl(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),rN(96," p-disclaimers"),Wl(97,"br"),og()()(),Sl(98,"td",18)(99,"code",24),rN(100,"PoDisclaimer[]"),og()(),Sl(101,"td",20),rN(102,"-"),og(),Sl(103,"td",21)(104,"p"),rN(105,"Lista de "),Sl(106,"em"),rN(107,"disclaimers"),og(),rN(108,"."),og(),Sl(109,"p"),rN(110,"Para que a lista de "),Sl(111,"em"),rN(112,"disclaimers"),og(),rN(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),Sl(114,"code"),rN(115,"PoDisclaimer"),og(),rN(116,"."),og(),Sl(117,"p"),rN(118,"Exemplo adicionando um "),Sl(119,"em"),rN(120,"disclaimer"),og(),rN(121," no array:"),og(),Sl(122,"pre")(123,"code"),rN(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),og()(),Sl(125,"p"),rN(126,"ou"),og(),Sl(127,"pre")(128,"code"),rN(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),og()()()(),Sl(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),rN(134," p-hide-remove-all"),Wl(135,"br"),og()()(),Sl(136,"td",18)(137,"code",25),rN(138,"boolean"),og()(),Sl(139,"td",20)(140,"p")(141,"code"),rN(142,"false"),og()()(),Sl(143,"td",21)(144,"em")(145,"strong"),rN(146,"(opcional)"),og()(),Sl(147,"p"),rN(148,"Oculta o bot\xE3o para remover todos os "),Sl(149,"em"),rN(150,"disclaimers"),og(),rN(151," do grupo."),og(),Sl(152,"blockquote")(153,"p"),rN(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),Sl(155,"em"),rN(156,"disclaimers"),og(),rN(157," com a op\xE7\xE3o "),Sl(158,"code"),rN(159,"hideClose"),og(),rN(160," habilitada."),og()()()(),Sl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),rN(165," (p-remove)"),Wl(166,"br"),og()()(),Sl(167,"td",18)(168,"code",19),rN(169,"EventEmitter"),og()(),Sl(170,"td",20),rN(171,"-"),og(),Sl(172,"td",21)(173,"em")(174,"strong"),rN(175,"(opcional)"),og()(),Sl(176,"p"),rN(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),Sl(178,"em"),rN(179,"disclaimer"),og(),rN(180," for removido da lista de "),Sl(181,"em"),rN(182,"disclaimers"),og(),rN(183," pelo usu\xE1rio."),og(),Sl(184,"p"),rN(185,"Recebe como par\xE2metro um objeto conforme a interface "),Sl(186,"code"),rN(187,"PoDisclaimerGroupRemoveAction"),og(),rN(188,"."),og()()(),Sl(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),rN(193," (p-remove-all)"),Wl(194,"br"),og()()(),Sl(195,"td",18)(196,"code",19),rN(197,"EventEmitter"),og()(),Sl(198,"td",20),rN(199,"-"),og(),Sl(200,"td",21)(201,"em")(202,"strong"),rN(203,"(opcional)"),og()(),Sl(204,"p"),rN(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),Sl(206,"em"),rN(207,"disclaimers"),og(),rN(208," forem removidos da lista de "),Sl(209,"em"),rN(210,"disclaimers"),og(),rN(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),og(),Sl(212,"p"),rN(213,"Recebe como par\xE2metro uma lista contendo todos os "),Sl(214,"code"),rN(215,"disclaimers"),og(),rN(216," removidos."),og()()(),Sl(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),rN(221," p-title"),Wl(222,"br"),og()()(),Sl(223,"td",18)(224,"code",26),rN(225,"string"),og()(),Sl(226,"td",20),rN(227,"-"),og(),Sl(228,"td",21)(229,"em")(230,"strong"),rN(231,"(opcional)"),og()(),Sl(232,"p"),rN(233,"T\xEDtulo do grupo de "),Sl(234,"em"),rN(235,"disclaimers"),og(),rN(236,"."),og()()()(),Sl(237,"h3"),rN(238,"Interfaces"),og(),Sl(239,"h4",27)(240,"code",5),rN(241,"PoDisclaimer"),og()(),Sl(242,"div",2)(243,"p"),rN(244,"Interface que representa o objeto "),Sl(245,"code"),rN(246,"po-disclaimer"),og(),rN(247,"."),og()(),Sl(248,"h4",10),rN(249,"Propriedades"),og(),Sl(250,"table",11)(251,"tr",12)(252,"th",13),rN(253,"Nome"),og(),Sl(254,"th",13),rN(255,"Tipo"),og(),Sl(256,"th",13),rN(257,"Descri\xE7\xE3o"),og()(),Sl(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),rN(262," hideClose"),Wl(263,"br"),og()()(),Sl(264,"td",18)(265,"code",25),rN(266,"boolean"),og()(),Sl(267,"td",21)(268,"em")(269,"strong"),rN(270,"(opcional)"),og()(),Sl(271,"p"),rN(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),Sl(273,"em"),rN(274,"disclaimer"),og(),rN(275,"."),og()()(),Sl(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),rN(280," label"),Wl(281,"br"),og()()(),Sl(282,"td",18)(283,"code",26),rN(284,"string"),og()(),Sl(285,"td",21)(286,"em")(287,"strong"),rN(288,"(opcional)"),og()(),Sl(289,"p"),rN(290,"Texto de exibi\xE7\xE3o do objeto."),og()()(),Sl(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),rN(295," property"),Wl(296,"br"),og()()(),Sl(297,"td",18)(298,"code",26),rN(299,"string"),og()(),Sl(300,"td",21)(301,"em")(302,"strong"),rN(303,"(opcional)"),og()(),Sl(304,"p"),rN(305,"Nome da propriedade vinculada ao objeto "),Sl(306,"em"),rN(307,"disclaimer"),og(),rN(308,"."),og()()(),Sl(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),rN(313," value"),Wl(314,"br"),og()()(),Sl(315,"td",18)(316,"code",28),rN(317,"any"),og()(),Sl(318,"td",21)(319,"p"),rN(320,"Valor do objeto."),og()()()(),Sl(321,"h4",27)(322,"code",5),rN(323,"PoDisclaimerGroupRemoveAction"),og()(),Sl(324,"div",2)(325,"p"),rN(326,"Estrutura do objeto representando o estado dos "),Sl(327,"em"),rN(328,"disclaimers"),og(),rN(329," ap\xF3s a remo\xE7\xE3o."),og()(),Sl(330,"h4",10),rN(331,"Propriedades"),og(),Sl(332,"table",11)(333,"tr",12)(334,"th",13),rN(335,"Nome"),og(),Sl(336,"th",13),rN(337,"Tipo"),og(),Sl(338,"th",13),rN(339,"Descri\xE7\xE3o"),og()(),Sl(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),rN(344," currentDisclaimers"),Wl(345,"br"),og()()(),Sl(346,"td",18)(347,"code",29),rN(348,"Array<PoDisclaimer>"),og()(),Sl(349,"td",21)(350,"p"),rN(351,"Lista com os "),Sl(352,"em"),rN(353,"disclaimers"),og(),rN(354," atuais (restantes)."),og()()(),Sl(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),rN(359," removedDisclaimer"),Wl(360,"br"),og()()(),Sl(361,"td",18)(362,"code",30),rN(363,"PoDisclaimer"),og()(),Sl(364,"td",21)(365,"p")(366,"em"),rN(367,"Disclaimer"),og(),rN(368," que foi removido."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-disclaimer-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),og()()()),o&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,ce,ge,be,fe],encapsulation:2,changeDetection:1})}return a})();var Le=[{path:"",component:Se}],ve=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[mL.forChild(Le),mL]})}return a})();var ut=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,ve]})}return a})();export{ut as DocPoDisclaimerGroupModule};