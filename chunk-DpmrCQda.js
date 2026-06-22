import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,da as ime,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,bH as M3,c9 as Ghe,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,aI as dc,aQ as gx,aS as mx,a3 as rNe,B as yw,aD as Ky,aT as nN,aE as Xy,aA as Mx}from'./main-WP3NAV7C.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Wl(0,"po-filter-chip",0);},dependencies:[ime],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Filter Chip Basic"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,fe,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,oe],encapsulation:2})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=wx();Sl(0,"div",1)(1,"po-filter-chip",2),ft("p-selected-change",function(c){return l.onSelectedChange(c)}),og()(),Wl(2,"po-divider"),Sl(3,"div",1),Wl(4,"po-info",3)(5,"po-info",4),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",1)(10,"po-input",5),ww("ngModelChange",function(c){return Ky(h),nN(l.label,c)||(l.label=c),Xy(c)}),og(),e0(),og(),Sl(11,"div",1)(12,"po-switch",6),ww("ngModelChange",function(c){return Ky(h),nN(l.selected,c)||(l.selected=c),Xy(c)}),og(),e0(),Sl(13,"po-switch",7),ww("ngModelChange",function(c){return Ky(h),nN(l.disabled,c)||(l.disabled=c),Xy(c)}),og(),e0(),og(),Sl(14,"div",1)(15,"po-button",8),ft("p-click",function(){return l.restore()}),og()()();}o&2&&(Lp(),nw("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Lp(3),nw("p-value",l.model),Lp(),nw("p-value",l.event),Lp(5),Ew("ngModel",l.label),n0(),Lp(2),Ew("ngModel",l.selected),n0(),Lp(),Ew("ngModel",l.disabled),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,M3,ime,Ghe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Filter Chip Labs"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-filter-chip
    [p-label]="label"
    [p-selected]="selected"
    [p-disabled]="disabled"
    (p-selected-change)="onSelectedChange($event)"
  >
  </po-filter-chip>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="model"></po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"></po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label"></po-input>
  </div>

  <div class="po-row">
    <po-switch class="po-md-4" name="selected" [(ngModel)]="selected" p-label="Selected"></po-switch>
    <po-switch class="po-md-4" name="disabled" [(ngModel)]="disabled" p-label="Disabled"></po-switch>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

@Component({
  selector: 'sample-po-filter-chip-labs',
  templateUrl: './sample-po-filter-chip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipLabsComponent implements OnInit {
  label: string;
  selected: boolean;
  disabled: boolean;
  event: string;
  model: string;

  ngOnInit() {
    this.restore();
  }

  onSelectedChange(event: PoFilterChipSelectedChange): void {
    this.selected = event.selected;
    this.model = JSON.stringify(event);
    this.event = 'p-selected-change';
  }

  restore() {
    this.label = 'Filter';
    this.selected = false;
    this.disabled = false;
    this.event = '';
    this.model = '';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-labs"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Se,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=wx();Sl(0,"po-filter-chip",7),ft("p-selected-change",function(l){Ky(a);let h=Mx();return Xy(h.onFilterChange(l))}),og();}if(n&2){let a=b.$implicit;nw("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Sl(0,"div",5)(1,"span",8),eN(2),og(),Sl(3,"span",9),eN(4),og()()),n&2){let a=b.$implicit;Lp(2),yw(a.name),Lp(2),dg("(",a.category,")");}}function ye(n,b){n&1&&(Sl(0,"div",6)(1,"span",10),eN(2,"No products found."),og()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"div",1)(2,"p",2),eN(3,"Filter by category:"),og(),Sl(4,"div",3),gx(5,xe,1,2,"po-filter-chip",4,Ee),og()()(),Wl(7,"po-divider"),Sl(8,"div",0)(9,"div",1)(10,"p",2),eN(11),og(),Sl(12,"po-container"),gx(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),og()()()),o&2&&(Lp(5),mx(l.filters),Lp(6),dg("Products (",l.filteredProducts.length,"):"),Lp(2),mx(l.filteredProducts));},dependencies:[dc,mv,ime],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Filter Chip - Filter List"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Filter by category:</p>
    <div class="po-mt-1">
      @for (filter of filters; track filter.label) {
        <po-filter-chip
          class="po-mr-1"
          [p-label]="filter.label"
          [p-selected]="filter.selected"
          (p-selected-change)="onFilterChange($event)"
        >
        </po-filter-chip>
      }
    </div>
  </div>
</div>

<po-divider />

<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Products ({ { filteredProducts.length }}):</p>
    <po-container>
      @for (product of filteredProducts; track product.name) {
        <div class="po-row po-p-1">
          <span class="po-font-text-bold po-mr-1">{ { product.name }}</span>
          <span class="po-font-text-small">({ { product.category }})</span>
        </div>
      } @empty {
        <div class="po-row po-p-2">
          <span class="po-font-text">No products found.</span>
        </div>
      }
    </po-container>
  </div>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

interface FilterOption {
  label: string;
  selected: boolean;
}

interface Product {
  name: string;
  category: string;
}

@Component({
  selector: 'sample-po-filter-chip-filter-list',
  templateUrl: './sample-po-filter-chip-filter-list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipFilterListComponent {
  filters: Array<FilterOption> = [
    { label: 'Electronics', selected: false },
    { label: 'Clothing', selected: false },
    { label: 'Books', selected: false },
    { label: 'Sports', selected: false }
  ];

  products: Array<Product> = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Sneakers', category: 'Clothing' },
    { name: 'Novel', category: 'Books' },
    { name: 'Cookbook', category: 'Books' },
    { name: 'Basketball', category: 'Sports' },
    { name: 'Tennis Racket', category: 'Sports' }
  ];

  get filteredProducts(): Array<Product> {
    const activeFilters = this.filters.filter(f => f.selected).map(f => f.label);

    if (activeFilters.length === 0) {
      return this.products;
    }

    return this.products.filter(p => activeFilters.includes(p.category));
  }

  onFilterChange(event: PoFilterChipSelectedChange): void {
    const filter = this.filters.find(f => f.label === event.label);
    if (filter) {
      filter.selected = event.selected;
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-filter-list"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente "),Sl(7,"code"),eN(8,"po-filter-chip"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoFilterChipComponent"),og()(),Sl(15,"div",2)(16,"p"),eN(17,"O "),Sl(18,"code"),eN(19,"po-filter-chip"),og(),eN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),og(),Sl(21,"h4"),eN(22,"Boas pr\xE1ticas"),og(),Sl(23,"ul")(24,"li"),eN(25,"Utilize "),Sl(26,"code"),eN(27,"labels"),og(),eN(28," curtos e descritivos para os filtros."),og(),Sl(29,"li"),eN(30,"Agrupe m\xFAltiplos "),Sl(31,"code"),eN(32,"po-filter-chip"),og(),eN(33," para representar op\xE7\xF5es de filtragem relacionadas."),og(),Sl(34,"li"),eN(35,"Utilize a propriedade "),Sl(36,"code"),eN(37,"p-disabled"),og(),eN(38," para filtros temporariamente indispon\xEDveis."),og()(),Sl(39,"h4"),eN(40,"Acessibilidade tratada no componente"),og(),Sl(41,"p"),eN(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(43,"ul")(44,"li"),eN(45,"O componente possui "),Sl(46,"code"),eN(47,'role="option"'),og(),eN(48," e "),Sl(49,"code"),eN(50,"aria-selected"),og(),eN(51," refletindo o estado de sele\xE7\xE3o. "),Sl(52,"a",6),eN(53,"W3C WAI-ARIA 3.14 Listbox"),og()(),Sl(54,"li"),eN(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(56,"a",7),eN(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()()(),Sl(58,"h4"),eN(59,"Tokens customiz\xE1veis"),og(),Sl(60,"p"),eN(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(62,"blockquote")(63,"p"),eN(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(65,"a",8),eN(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(67,"."),og()(),Sl(68,"table")(69,"thead")(70,"tr")(71,"th"),eN(72,"Propriedade"),og(),Sl(73,"th"),eN(74,"Descri\xE7\xE3o"),og(),Sl(75,"th"),eN(76,"Valor Padr\xE3o"),og()()(),Sl(77,"tbody")(78,"tr")(79,"td")(80,"code"),eN(81,"--border-radius"),og()(),Sl(82,"td"),eN(83,"Raio dos cantos do elemento"),og(),Sl(84,"td")(85,"code"),eN(86,"var(--border-radius-lg)"),og()()(),Sl(87,"tr")(88,"td")(89,"code"),eN(90,"--border-width"),og()(),Sl(91,"td"),eN(92,"Largura da borda"),og(),Sl(93,"td")(94,"code"),eN(95,"var(--border-width-sm)"),og()()(),Sl(96,"tr")(97,"td")(98,"code"),eN(99,"--font-family"),og()(),Sl(100,"td"),eN(101,"Fam\xEDlia tipogr\xE1fica"),og(),Sl(102,"td")(103,"code"),eN(104,"var(--font-family-theme)"),og()()(),Sl(105,"tr")(106,"td")(107,"code"),eN(108,"--font-size"),og()(),Sl(109,"td"),eN(110,"Tamanho da fonte"),og(),Sl(111,"td")(112,"code"),eN(113,"var(--font-size-default)"),og()()(),Sl(114,"tr")(115,"td")(116,"code"),eN(117,"--font-weight"),og()(),Sl(118,"td"),eN(119,"Peso da fonte"),og(),Sl(120,"td")(121,"code"),eN(122,"var(--font-weight-normal)"),og()()(),Sl(123,"tr")(124,"td")(125,"strong"),eN(126,"Default"),og()(),Wl(127,"td")(128,"td"),og(),Sl(129,"tr")(130,"td")(131,"code"),eN(132,"--border-color"),og()(),Sl(133,"td"),eN(134,"Cor da borda no estado padr\xE3o"),og(),Sl(135,"td")(136,"code"),eN(137,"var(--color-neutral-light-20)"),og()()(),Sl(138,"tr")(139,"td")(140,"code"),eN(141,"--text-color"),og()(),Sl(142,"td"),eN(143,"Cor do texto no estado padr\xE3o"),og(),Sl(144,"td")(145,"code"),eN(146,"var(--color-neutral-dark-80)"),og()()(),Sl(147,"tr")(148,"td")(149,"code"),eN(150,"--background-color"),og()(),Sl(151,"td"),eN(152,"Cor de fundo no estado padr\xE3o"),og(),Sl(153,"td")(154,"code"),eN(155,"transparent"),og()()(),Sl(156,"tr")(157,"td")(158,"strong"),eN(159,"Hover"),og()(),Wl(160,"td")(161,"td"),og(),Sl(162,"tr")(163,"td")(164,"code"),eN(165,"--background-color-hover"),og()(),Sl(166,"td"),eN(167,"Cor de fundo no estado hover"),og(),Sl(168,"td")(169,"code"),eN(170,"var(--color-brand-01-lightest)"),og()()(),Sl(171,"tr")(172,"td")(173,"code"),eN(174,"--text-color-hover"),og()(),Sl(175,"td"),eN(176,"Cor do texto no estado hover"),og(),Sl(177,"td")(178,"code"),eN(179,"var(--color-action-default)"),og()()(),Sl(180,"tr")(181,"td")(182,"strong"),eN(183,"Selected"),og()(),Wl(184,"td")(185,"td"),og(),Sl(186,"tr")(187,"td")(188,"code"),eN(189,"--background-color-selected"),og()(),Sl(190,"td"),eN(191,"Cor de fundo no estado selecionado"),og(),Sl(192,"td")(193,"code"),eN(194,"var(--color-brand-01-lightest)"),og()()(),Sl(195,"tr")(196,"td")(197,"code"),eN(198,"--border-color-selected"),og()(),Sl(199,"td"),eN(200,"Cor da borda no estado selecionado"),og(),Sl(201,"td")(202,"code"),eN(203,"var(--color-brand-01-lighter)"),og()()(),Sl(204,"tr")(205,"td")(206,"code"),eN(207,"--text-color-selected"),og()(),Sl(208,"td"),eN(209,"Cor do texto no estado selecionado"),og(),Sl(210,"td")(211,"code"),eN(212,"var(--color-action-default)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),eN(216,"--icon-color-selected"),og()(),Sl(217,"td"),eN(218,"Cor do \xEDcone no estado selecionado"),og(),Sl(219,"td")(220,"code"),eN(221,"var(--color-action-default)"),og()()(),Sl(222,"tr")(223,"td")(224,"strong"),eN(225,"Disabled"),og()(),Wl(226,"td")(227,"td"),og(),Sl(228,"tr")(229,"td")(230,"code"),eN(231,"--opacity-disabled"),og()(),Sl(232,"td"),eN(233,"Opacidade no estado desabilitado"),og(),Sl(234,"td")(235,"code"),eN(236,"0.5"),og()()()()()(),Sl(237,"div",9)(238,"h4",10),eN(239,"Seletor"),og(),Sl(240,"pre",11),eN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),og()(),Sl(242,"h4",12),eN(243,"Propriedades"),og(),Sl(244,"table",13)(245,"tr",14)(246,"th",15),eN(247,"Nome"),og(),Sl(248,"th",15),eN(249,"Tipo"),og(),Sl(250,"th",15),eN(251,"Padr\xE3o"),og(),Sl(252,"th",15),eN(253,"Descri\xE7\xE3o"),og()(),Sl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),eN(258," p-disabled"),Wl(259,"br"),og()()(),Sl(260,"td",20)(261,"code",21),eN(262,"boolean"),og()(),Sl(263,"td",22)(264,"p")(265,"code"),eN(266,"false"),og()()(),Sl(267,"td",23)(268,"em")(269,"strong"),eN(270,"(opcional)"),og()(),Sl(271,"p"),eN(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),og(),Sl(273,"p"),eN(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),og()()(),Sl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),eN(279," p-label"),Wl(280,"br"),og()()(),Sl(281,"td",20)(282,"code",24),eN(283,"string "),og(),Sl(284,"code",25),eN(285," undefined"),og()(),Sl(286,"td",22),eN(287,"-"),og(),Sl(288,"td",23)(289,"em")(290,"strong"),eN(291,"(opcional)"),og()(),Sl(292,"p"),eN(293,"Define o r\xF3tulo de texto exibido no chip."),og()()(),Sl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),eN(298," p-selected"),Wl(299,"br"),og()()(),Sl(300,"td",20)(301,"code",21),eN(302,"boolean"),og()(),Sl(303,"td",22)(304,"p")(305,"code"),eN(306,"false"),og()()(),Sl(307,"td",23)(308,"em")(309,"strong"),eN(310,"(opcional)"),og()(),Sl(311,"p"),eN(312,"Define o estado de sele\xE7\xE3o do chip."),og()()(),Sl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),eN(317," (p-selected-change)"),Wl(318,"br"),og()()(),Sl(319,"td",20)(320,"code",28),eN(321,"EventEmitter"),og()(),Sl(322,"td",22),eN(323,"-"),og(),Sl(324,"td",23)(325,"em")(326,"strong"),eN(327,"(opcional)"),og()(),Sl(328,"p"),eN(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Sl(330,"em"),eN(331,"chip"),og(),eN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),og()()()(),Sl(333,"h3"),eN(334,"Interfaces"),og(),Sl(335,"h4",29)(336,"code",5),eN(337,"PoFilterChipSelectedChange"),og()(),Sl(338,"div",2)(339,"p"),eN(340,"Interface que define o objeto emitido pelo evento "),Sl(341,"code"),eN(342,"p-selected-change"),og(),eN(343,"."),og()(),Sl(344,"h4",12),eN(345,"Propriedades"),og(),Sl(346,"table",13)(347,"tr",14)(348,"th",15),eN(349,"Nome"),og(),Sl(350,"th",15),eN(351,"Tipo"),og(),Sl(352,"th",15),eN(353,"Descri\xE7\xE3o"),og()(),Sl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),eN(358," label"),Wl(359,"br"),og()()(),Sl(360,"td",20)(361,"code",24),eN(362,"string"),og()(),Sl(363,"td",23)(364,"p"),eN(365,"R\xF3tulo de texto do "),Sl(366,"em"),eN(367,"chip"),og(),eN(368,"."),og()()(),Sl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),eN(373," selected"),Wl(374,"br"),og()()(),Sl(375,"td",20)(376,"code",21),eN(377,"boolean"),og()(),Sl(378,"td",23)(379,"p"),eN(380,"Estado de sele\xE7\xE3o do "),Sl(381,"em"),eN(382,"chip"),og(),eN(383," ("),Sl(384,"code"),eN(385,"true"),og(),eN(386," para selecionado, "),Sl(387,"code"),eN(388,"false"),og(),eN(389," para desmarcado)."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-filter-chip-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),Wl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),og()()()),o&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[rNe,Bme,qme,ae,pe,se,me],encapsulation:2})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[hL.forChild(De),hL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[sr,he]})}return n})();export{et as DocPoFilterChipModule};