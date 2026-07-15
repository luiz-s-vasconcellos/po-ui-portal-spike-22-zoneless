import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,da as ome,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,bH as k3,c9 as jhe,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,aI as dc,aQ as yx,aS as _x,a3 as sNe,_ as _w,aD as Ky,aT as oN,aE as Xy,aA as xx}from'./main-TVDUJ47Y.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&Wl(0,"po-filter-chip",0);},dependencies:[ome],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Filter Chip Basic"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,fe,l.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,oe],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=Ix();Sl(0,"div",1)(1,"po-filter-chip",2),ft("p-selected-change",function(c){return l.onSelectedChange(c)}),og()(),Wl(2,"po-divider"),Sl(3,"div",1),Wl(4,"po-info",3)(5,"po-info",4),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",1)(10,"po-input",5),Cw("ngModelChange",function(c){return Ky(h),oN(l.label,c)||(l.label=c),Xy(c)}),og(),n0(),og(),Sl(11,"div",1)(12,"po-switch",6),Cw("ngModelChange",function(c){return Ky(h),oN(l.selected,c)||(l.selected=c),Xy(c)}),og(),n0(),Sl(13,"po-switch",7),Cw("ngModelChange",function(c){return Ky(h),oN(l.disabled,c)||(l.disabled=c),Xy(c)}),og(),n0(),og(),Sl(14,"div",1)(15,"po-button",8),ft("p-click",function(){return l.restore()}),og()()();}o&2&&(Lp(),rw("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Lp(3),rw("p-value",l.model),Lp(),rw("p-value",l.event),Lp(5),ww("ngModel",l.label),i0(),Lp(2),ww("ngModel",l.selected),i0(),Lp(),ww("ngModel",l.disabled),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,L3,k3,ome,jhe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Filter Chip Labs"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-labs"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Se,l.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Ix();Sl(0,"po-filter-chip",7),ft("p-selected-change",function(l){Ky(a);let h=xx();return Xy(h.onFilterChange(l))}),og();}if(n&2){let a=b.$implicit;rw("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Sl(0,"div",5)(1,"span",8),rN(2),og(),Sl(3,"span",9),rN(4),og()()),n&2){let a=b.$implicit;Lp(2),_w(a.name),Lp(2),dg("(",a.category,")");}}function ye(n,b){n&1&&(Sl(0,"div",6)(1,"span",10),rN(2,"No products found."),og()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"div",1)(2,"p",2),rN(3,"Filter by category:"),og(),Sl(4,"div",3),yx(5,xe,1,2,"po-filter-chip",4,Ee),og()()(),Wl(7,"po-divider"),Sl(8,"div",0)(9,"div",1)(10,"p",2),rN(11),og(),Sl(12,"po-container"),yx(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),og()()()),o&2&&(Lp(5),_x(l.filters),Lp(6),dg("Products (",l.filteredProducts.length,"):"),Lp(2),_x(l.filteredProducts));},dependencies:[dc,mv,ome],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Filter Chip - Filter List"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-filter-chip-filter-list"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,we,l.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-filter-chip"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoFilterChipComponent"),og()(),Sl(15,"div",2)(16,"p"),rN(17,"O "),Sl(18,"code"),rN(19,"po-filter-chip"),og(),rN(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),og(),Sl(21,"h4"),rN(22,"Boas pr\xE1ticas"),og(),Sl(23,"ul")(24,"li"),rN(25,"Utilize "),Sl(26,"code"),rN(27,"labels"),og(),rN(28," curtos e descritivos para os filtros."),og(),Sl(29,"li"),rN(30,"Agrupe m\xFAltiplos "),Sl(31,"code"),rN(32,"po-filter-chip"),og(),rN(33," para representar op\xE7\xF5es de filtragem relacionadas."),og(),Sl(34,"li"),rN(35,"Utilize a propriedade "),Sl(36,"code"),rN(37,"p-disabled"),og(),rN(38," para filtros temporariamente indispon\xEDveis."),og()(),Sl(39,"h4"),rN(40,"Acessibilidade tratada no componente"),og(),Sl(41,"p"),rN(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(43,"ul")(44,"li"),rN(45,"O componente possui "),Sl(46,"code"),rN(47,'role="option"'),og(),rN(48," e "),Sl(49,"code"),rN(50,"aria-selected"),og(),rN(51," refletindo o estado de sele\xE7\xE3o. "),Sl(52,"a",6),rN(53,"W3C WAI-ARIA 3.14 Listbox"),og()(),Sl(54,"li"),rN(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(56,"a",7),rN(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()()(),Sl(58,"h4"),rN(59,"Tokens customiz\xE1veis"),og(),Sl(60,"p"),rN(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(62,"blockquote")(63,"p"),rN(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(65,"a",8),rN(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(67,"."),og()(),Sl(68,"table")(69,"thead")(70,"tr")(71,"th"),rN(72,"Propriedade"),og(),Sl(73,"th"),rN(74,"Descri\xE7\xE3o"),og(),Sl(75,"th"),rN(76,"Valor Padr\xE3o"),og()()(),Sl(77,"tbody")(78,"tr")(79,"td")(80,"code"),rN(81,"--border-radius"),og()(),Sl(82,"td"),rN(83,"Raio dos cantos do elemento"),og(),Sl(84,"td")(85,"code"),rN(86,"var(--border-radius-lg)"),og()()(),Sl(87,"tr")(88,"td")(89,"code"),rN(90,"--border-width"),og()(),Sl(91,"td"),rN(92,"Largura da borda"),og(),Sl(93,"td")(94,"code"),rN(95,"var(--border-width-sm)"),og()()(),Sl(96,"tr")(97,"td")(98,"code"),rN(99,"--font-family"),og()(),Sl(100,"td"),rN(101,"Fam\xEDlia tipogr\xE1fica"),og(),Sl(102,"td")(103,"code"),rN(104,"var(--font-family-theme)"),og()()(),Sl(105,"tr")(106,"td")(107,"code"),rN(108,"--font-size"),og()(),Sl(109,"td"),rN(110,"Tamanho da fonte"),og(),Sl(111,"td")(112,"code"),rN(113,"var(--font-size-default)"),og()()(),Sl(114,"tr")(115,"td")(116,"code"),rN(117,"--font-weight"),og()(),Sl(118,"td"),rN(119,"Peso da fonte"),og(),Sl(120,"td")(121,"code"),rN(122,"var(--font-weight-normal)"),og()()(),Sl(123,"tr")(124,"td")(125,"strong"),rN(126,"Default"),og()(),Wl(127,"td")(128,"td"),og(),Sl(129,"tr")(130,"td")(131,"code"),rN(132,"--border-color"),og()(),Sl(133,"td"),rN(134,"Cor da borda no estado padr\xE3o"),og(),Sl(135,"td")(136,"code"),rN(137,"var(--color-neutral-light-20)"),og()()(),Sl(138,"tr")(139,"td")(140,"code"),rN(141,"--text-color"),og()(),Sl(142,"td"),rN(143,"Cor do texto no estado padr\xE3o"),og(),Sl(144,"td")(145,"code"),rN(146,"var(--color-neutral-dark-80)"),og()()(),Sl(147,"tr")(148,"td")(149,"code"),rN(150,"--background-color"),og()(),Sl(151,"td"),rN(152,"Cor de fundo no estado padr\xE3o"),og(),Sl(153,"td")(154,"code"),rN(155,"transparent"),og()()(),Sl(156,"tr")(157,"td")(158,"strong"),rN(159,"Hover"),og()(),Wl(160,"td")(161,"td"),og(),Sl(162,"tr")(163,"td")(164,"code"),rN(165,"--background-color-hover"),og()(),Sl(166,"td"),rN(167,"Cor de fundo no estado hover"),og(),Sl(168,"td")(169,"code"),rN(170,"var(--color-brand-01-lightest)"),og()()(),Sl(171,"tr")(172,"td")(173,"code"),rN(174,"--text-color-hover"),og()(),Sl(175,"td"),rN(176,"Cor do texto no estado hover"),og(),Sl(177,"td")(178,"code"),rN(179,"var(--color-action-default)"),og()()(),Sl(180,"tr")(181,"td")(182,"strong"),rN(183,"Selected"),og()(),Wl(184,"td")(185,"td"),og(),Sl(186,"tr")(187,"td")(188,"code"),rN(189,"--background-color-selected"),og()(),Sl(190,"td"),rN(191,"Cor de fundo no estado selecionado"),og(),Sl(192,"td")(193,"code"),rN(194,"var(--color-brand-01-lightest)"),og()()(),Sl(195,"tr")(196,"td")(197,"code"),rN(198,"--border-color-selected"),og()(),Sl(199,"td"),rN(200,"Cor da borda no estado selecionado"),og(),Sl(201,"td")(202,"code"),rN(203,"var(--color-brand-01-lighter)"),og()()(),Sl(204,"tr")(205,"td")(206,"code"),rN(207,"--text-color-selected"),og()(),Sl(208,"td"),rN(209,"Cor do texto no estado selecionado"),og(),Sl(210,"td")(211,"code"),rN(212,"var(--color-action-default)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),rN(216,"--icon-color-selected"),og()(),Sl(217,"td"),rN(218,"Cor do \xEDcone no estado selecionado"),og(),Sl(219,"td")(220,"code"),rN(221,"var(--color-action-default)"),og()()(),Sl(222,"tr")(223,"td")(224,"strong"),rN(225,"Disabled"),og()(),Wl(226,"td")(227,"td"),og(),Sl(228,"tr")(229,"td")(230,"code"),rN(231,"--opacity-disabled"),og()(),Sl(232,"td"),rN(233,"Opacidade no estado desabilitado"),og(),Sl(234,"td")(235,"code"),rN(236,"0.5"),og()()()()()(),Sl(237,"div",9)(238,"h4",10),rN(239,"Seletor"),og(),Sl(240,"pre",11),rN(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),og()(),Sl(242,"h4",12),rN(243,"Propriedades"),og(),Sl(244,"table",13)(245,"tr",14)(246,"th",15),rN(247,"Nome"),og(),Sl(248,"th",15),rN(249,"Tipo"),og(),Sl(250,"th",15),rN(251,"Padr\xE3o"),og(),Sl(252,"th",15),rN(253,"Descri\xE7\xE3o"),og()(),Sl(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),rN(258," p-disabled"),Wl(259,"br"),og()()(),Sl(260,"td",20)(261,"code",21),rN(262,"boolean"),og()(),Sl(263,"td",22)(264,"p")(265,"code"),rN(266,"false"),og()()(),Sl(267,"td",23)(268,"em")(269,"strong"),rN(270,"(opcional)"),og()(),Sl(271,"p"),rN(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),og(),Sl(273,"p"),rN(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),og()()(),Sl(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),rN(279," p-label"),Wl(280,"br"),og()()(),Sl(281,"td",20)(282,"code",24),rN(283,"string "),og(),Sl(284,"code",25),rN(285," undefined"),og()(),Sl(286,"td",22),rN(287,"-"),og(),Sl(288,"td",23)(289,"em")(290,"strong"),rN(291,"(opcional)"),og()(),Sl(292,"p"),rN(293,"Define o r\xF3tulo de texto exibido no chip."),og()()(),Sl(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),rN(298," p-selected"),Wl(299,"br"),og()()(),Sl(300,"td",20)(301,"code",21),rN(302,"boolean"),og()(),Sl(303,"td",22)(304,"p")(305,"code"),rN(306,"false"),og()()(),Sl(307,"td",23)(308,"em")(309,"strong"),rN(310,"(opcional)"),og()(),Sl(311,"p"),rN(312,"Define o estado de sele\xE7\xE3o do chip."),og()()(),Sl(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),rN(317," (p-selected-change)"),Wl(318,"br"),og()()(),Sl(319,"td",20)(320,"code",28),rN(321,"EventEmitter"),og()(),Sl(322,"td",22),rN(323,"-"),og(),Sl(324,"td",23)(325,"em")(326,"strong"),rN(327,"(opcional)"),og()(),Sl(328,"p"),rN(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Sl(330,"em"),rN(331,"chip"),og(),rN(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),og()()()(),Sl(333,"h3"),rN(334,"Interfaces"),og(),Sl(335,"h4",29)(336,"code",5),rN(337,"PoFilterChipSelectedChange"),og()(),Sl(338,"div",2)(339,"p"),rN(340,"Interface que define o objeto emitido pelo evento "),Sl(341,"code"),rN(342,"p-selected-change"),og(),rN(343,"."),og()(),Sl(344,"h4",12),rN(345,"Propriedades"),og(),Sl(346,"table",13)(347,"tr",14)(348,"th",15),rN(349,"Nome"),og(),Sl(350,"th",15),rN(351,"Tipo"),og(),Sl(352,"th",15),rN(353,"Descri\xE7\xE3o"),og()(),Sl(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),rN(358," label"),Wl(359,"br"),og()()(),Sl(360,"td",20)(361,"code",24),rN(362,"string"),og()(),Sl(363,"td",23)(364,"p"),rN(365,"R\xF3tulo de texto do "),Sl(366,"em"),rN(367,"chip"),og(),rN(368,"."),og()()(),Sl(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),rN(373," selected"),Wl(374,"br"),og()()(),Sl(375,"td",20)(376,"code",21),rN(377,"boolean"),og()(),Sl(378,"td",23)(379,"p"),rN(380,"Estado de sele\xE7\xE3o do "),Sl(381,"em"),rN(382,"chip"),og(),rN(383," ("),Sl(384,"code"),rN(385,"true"),og(),rN(386," para selecionado, "),Sl(387,"code"),rN(388,"false"),og(),rN(389," para desmarcado)."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-filter-chip-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),Wl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),og()()()),o&2&&(rw("p-actions",l.actions),Lp(2),rw("p-active",l.activeTab==="doc"),Lp(2),rw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,ae,pe,se,me],encapsulation:2,changeDetection:1})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[mL.forChild(De),mL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[sr,he]})}return n})();export{et as DocPoFilterChipModule};