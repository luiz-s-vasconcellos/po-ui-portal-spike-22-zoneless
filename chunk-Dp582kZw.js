import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,da as rme,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,aI as dc,aQ as hx,aS as px,a3 as cNe,B as yw,aD as Xy,aT as eN,aE as Qy,aA as Sx}from'./main-QSTLMRDK.js';var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&zl(0,"po-filter-chip",0);},dependencies:[rme],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Filter Chip Basic"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-filter-chip-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return n})();var re=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore();}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change";}restore(){this.label="Filter",this.selected=false,this.disabled=false,this.event="",this.model="";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:false,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=Dx();Il(0,"div",1)(1,"po-filter-chip",2),ft("p-selected-change",function(c){return l.onSelectedChange(c)}),og()(),zl(2,"po-divider"),Il(3,"div",1),zl(4,"po-info",3)(5,"po-info",4),og(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"div",1)(10,"po-input",5),ww("ngModelChange",function(c){return Xy(h),eN(l.label,c)||(l.label=c),Qy(c)}),og(),QA(),og(),Il(11,"div",1)(12,"po-switch",6),ww("ngModelChange",function(c){return Xy(h),eN(l.selected,c)||(l.selected=c),Qy(c)}),og(),QA(),Il(13,"po-switch",7),ww("ngModelChange",function(c){return Xy(h),eN(l.disabled,c)||(l.disabled=c),Qy(c)}),og(),QA(),og(),Il(14,"div",1)(15,"po-button",8),ft("p-click",function(){return l.restore()}),og()()();}o&2&&(Lp(),nw("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),Lp(3),nw("p-value",l.model),Lp(),nw("p-value",l.event),Lp(5),Ew("ngModel",l.label),e0(),Lp(2),Ew("ngModel",l.selected),e0(),Lp(),Ew("ngModel",l.disabled),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,k3,rme,Yhe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Filter Chip Labs"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-filter-chip-labs"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return n})();var Ee=(n,b)=>b.label,ve=(n,b)=>b.name;function xe(n,b){if(n&1){let a=Dx();Il(0,"po-filter-chip",7),ft("p-selected-change",function(l){Xy(a);let h=Sx();return Qy(h.onFilterChange(l))}),og();}if(n&2){let a=b.$implicit;nw("p-label",a.label)("p-selected",a.selected);}}function Fe(n,b){if(n&1&&(Il(0,"div",5)(1,"span",8),Qx(2),og(),Il(3,"span",9),Qx(4),og()()),n&2){let a=b.$implicit;Lp(2),yw(a.name),Lp(2),dg("(",a.category,")");}}function ye(n,b){n&1&&(Il(0,"div",6)(1,"span",10),Qx(2,"No products found."),og()());}var de=(()=>{class n{filters=[{label:"Electronics",selected:false},{label:"Clothing",selected:false},{label:"Books",selected:false},{label:"Sports",selected:false}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected);}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:false,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(Il(0,"div",0)(1,"div",1)(2,"p",2),Qx(3,"Filter by category:"),og(),Il(4,"div",3),hx(5,xe,1,2,"po-filter-chip",4,Ee),og()()(),zl(7,"po-divider"),Il(8,"div",0)(9,"div",1)(10,"p",2),Qx(11),og(),Il(12,"po-container"),hx(13,Fe,5,2,"div",5,ve,false,ye,3,0,"div",6),og()()()),o&2&&(Lp(5),px(l.filters),Lp(6),dg("Products (",l.filteredProducts.length,"):"),Lp(2),px(l.filteredProducts));},dependencies:[dc,mv,rme],encapsulation:2,changeDetection:1})}return n})();var we=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Filter Chip - Filter List"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-filter-chip-filter-list"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:false,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-filter-chip"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoFilterChipComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"O "),Il(18,"code"),Qx(19,"po-filter-chip"),og(),Qx(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),og(),Il(21,"h4"),Qx(22,"Boas pr\xE1ticas"),og(),Il(23,"ul")(24,"li"),Qx(25,"Utilize "),Il(26,"code"),Qx(27,"labels"),og(),Qx(28," curtos e descritivos para os filtros."),og(),Il(29,"li"),Qx(30,"Agrupe m\xFAltiplos "),Il(31,"code"),Qx(32,"po-filter-chip"),og(),Qx(33," para representar op\xE7\xF5es de filtragem relacionadas."),og(),Il(34,"li"),Qx(35,"Utilize a propriedade "),Il(36,"code"),Qx(37,"p-disabled"),og(),Qx(38," para filtros temporariamente indispon\xEDveis."),og()(),Il(39,"h4"),Qx(40,"Acessibilidade tratada no componente"),og(),Il(41,"p"),Qx(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(43,"ul")(44,"li"),Qx(45,"O componente possui "),Il(46,"code"),Qx(47,'role="option"'),og(),Qx(48," e "),Il(49,"code"),Qx(50,"aria-selected"),og(),Qx(51," refletindo o estado de sele\xE7\xE3o. "),Il(52,"a",6),Qx(53,"W3C WAI-ARIA 3.14 Listbox"),og()(),Il(54,"li"),Qx(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Il(56,"a",7),Qx(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()()(),Il(58,"h4"),Qx(59,"Tokens customiz\xE1veis"),og(),Il(60,"p"),Qx(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(62,"blockquote")(63,"p"),Qx(64,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(65,"a",8),Qx(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(67,"."),og()(),Il(68,"table")(69,"thead")(70,"tr")(71,"th"),Qx(72,"Propriedade"),og(),Il(73,"th"),Qx(74,"Descri\xE7\xE3o"),og(),Il(75,"th"),Qx(76,"Valor Padr\xE3o"),og()()(),Il(77,"tbody")(78,"tr")(79,"td")(80,"code"),Qx(81,"--border-radius"),og()(),Il(82,"td"),Qx(83,"Raio dos cantos do elemento"),og(),Il(84,"td")(85,"code"),Qx(86,"var(--border-radius-lg)"),og()()(),Il(87,"tr")(88,"td")(89,"code"),Qx(90,"--border-width"),og()(),Il(91,"td"),Qx(92,"Largura da borda"),og(),Il(93,"td")(94,"code"),Qx(95,"var(--border-width-sm)"),og()()(),Il(96,"tr")(97,"td")(98,"code"),Qx(99,"--font-family"),og()(),Il(100,"td"),Qx(101,"Fam\xEDlia tipogr\xE1fica"),og(),Il(102,"td")(103,"code"),Qx(104,"var(--font-family-theme)"),og()()(),Il(105,"tr")(106,"td")(107,"code"),Qx(108,"--font-size"),og()(),Il(109,"td"),Qx(110,"Tamanho da fonte"),og(),Il(111,"td")(112,"code"),Qx(113,"var(--font-size-default)"),og()()(),Il(114,"tr")(115,"td")(116,"code"),Qx(117,"--font-weight"),og()(),Il(118,"td"),Qx(119,"Peso da fonte"),og(),Il(120,"td")(121,"code"),Qx(122,"var(--font-weight-normal)"),og()()(),Il(123,"tr")(124,"td")(125,"strong"),Qx(126,"Default"),og()(),zl(127,"td")(128,"td"),og(),Il(129,"tr")(130,"td")(131,"code"),Qx(132,"--border-color"),og()(),Il(133,"td"),Qx(134,"Cor da borda no estado padr\xE3o"),og(),Il(135,"td")(136,"code"),Qx(137,"var(--color-neutral-light-20)"),og()()(),Il(138,"tr")(139,"td")(140,"code"),Qx(141,"--text-color"),og()(),Il(142,"td"),Qx(143,"Cor do texto no estado padr\xE3o"),og(),Il(144,"td")(145,"code"),Qx(146,"var(--color-neutral-dark-80)"),og()()(),Il(147,"tr")(148,"td")(149,"code"),Qx(150,"--background-color"),og()(),Il(151,"td"),Qx(152,"Cor de fundo no estado padr\xE3o"),og(),Il(153,"td")(154,"code"),Qx(155,"transparent"),og()()(),Il(156,"tr")(157,"td")(158,"strong"),Qx(159,"Hover"),og()(),zl(160,"td")(161,"td"),og(),Il(162,"tr")(163,"td")(164,"code"),Qx(165,"--background-color-hover"),og()(),Il(166,"td"),Qx(167,"Cor de fundo no estado hover"),og(),Il(168,"td")(169,"code"),Qx(170,"var(--color-brand-01-lightest)"),og()()(),Il(171,"tr")(172,"td")(173,"code"),Qx(174,"--text-color-hover"),og()(),Il(175,"td"),Qx(176,"Cor do texto no estado hover"),og(),Il(177,"td")(178,"code"),Qx(179,"var(--color-action-default)"),og()()(),Il(180,"tr")(181,"td")(182,"strong"),Qx(183,"Selected"),og()(),zl(184,"td")(185,"td"),og(),Il(186,"tr")(187,"td")(188,"code"),Qx(189,"--background-color-selected"),og()(),Il(190,"td"),Qx(191,"Cor de fundo no estado selecionado"),og(),Il(192,"td")(193,"code"),Qx(194,"var(--color-brand-01-lightest)"),og()()(),Il(195,"tr")(196,"td")(197,"code"),Qx(198,"--border-color-selected"),og()(),Il(199,"td"),Qx(200,"Cor da borda no estado selecionado"),og(),Il(201,"td")(202,"code"),Qx(203,"var(--color-brand-01-lighter)"),og()()(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--text-color-selected"),og()(),Il(208,"td"),Qx(209,"Cor do texto no estado selecionado"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-action-default)"),og()()(),Il(213,"tr")(214,"td")(215,"code"),Qx(216,"--icon-color-selected"),og()(),Il(217,"td"),Qx(218,"Cor do \xEDcone no estado selecionado"),og(),Il(219,"td")(220,"code"),Qx(221,"var(--color-action-default)"),og()()(),Il(222,"tr")(223,"td")(224,"strong"),Qx(225,"Disabled"),og()(),zl(226,"td")(227,"td"),og(),Il(228,"tr")(229,"td")(230,"code"),Qx(231,"--opacity-disabled"),og()(),Il(232,"td"),Qx(233,"Opacidade no estado desabilitado"),og(),Il(234,"td")(235,"code"),Qx(236,"0.5"),og()()()()()(),Il(237,"div",9)(238,"h4",10),Qx(239,"Seletor"),og(),Il(240,"pre",11),Qx(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),og()(),Il(242,"h4",12),Qx(243,"Propriedades"),og(),Il(244,"table",13)(245,"tr",14)(246,"th",15),Qx(247,"Nome"),og(),Il(248,"th",15),Qx(249,"Tipo"),og(),Il(250,"th",15),Qx(251,"Padr\xE3o"),og(),Il(252,"th",15),Qx(253,"Descri\xE7\xE3o"),og()(),Il(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),Qx(258," p-disabled"),zl(259,"br"),og()()(),Il(260,"td",20)(261,"code",21),Qx(262,"boolean"),og()(),Il(263,"td",22)(264,"p")(265,"code"),Qx(266,"false"),og()()(),Il(267,"td",23)(268,"em")(269,"strong"),Qx(270,"(opcional)"),og()(),Il(271,"p"),Qx(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),og(),Il(273,"p"),Qx(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),og()()(),Il(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),Qx(279," p-label"),zl(280,"br"),og()()(),Il(281,"td",20)(282,"code",24),Qx(283,"string "),og(),Il(284,"code",25),Qx(285," undefined"),og()(),Il(286,"td",22),Qx(287,"-"),og(),Il(288,"td",23)(289,"em")(290,"strong"),Qx(291,"(opcional)"),og()(),Il(292,"p"),Qx(293,"Define o r\xF3tulo de texto exibido no chip."),og()()(),Il(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),Qx(298," p-selected"),zl(299,"br"),og()()(),Il(300,"td",20)(301,"code",21),Qx(302,"boolean"),og()(),Il(303,"td",22)(304,"p")(305,"code"),Qx(306,"false"),og()()(),Il(307,"td",23)(308,"em")(309,"strong"),Qx(310,"(opcional)"),og()(),Il(311,"p"),Qx(312,"Define o estado de sele\xE7\xE3o do chip."),og()()(),Il(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),Qx(317," (p-selected-change)"),zl(318,"br"),og()()(),Il(319,"td",20)(320,"code",28),Qx(321,"EventEmitter"),og()(),Il(322,"td",22),Qx(323,"-"),og(),Il(324,"td",23)(325,"em")(326,"strong"),Qx(327,"(opcional)"),og()(),Il(328,"p"),Qx(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),Il(330,"em"),Qx(331,"chip"),og(),Qx(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),og()()()(),Il(333,"h3"),Qx(334,"Interfaces"),og(),Il(335,"h4",29)(336,"code",5),Qx(337,"PoFilterChipSelectedChange"),og()(),Il(338,"div",2)(339,"p"),Qx(340,"Interface que define o objeto emitido pelo evento "),Il(341,"code"),Qx(342,"p-selected-change"),og(),Qx(343,"."),og()(),Il(344,"h4",12),Qx(345,"Propriedades"),og(),Il(346,"table",13)(347,"tr",14)(348,"th",15),Qx(349,"Nome"),og(),Il(350,"th",15),Qx(351,"Tipo"),og(),Il(352,"th",15),Qx(353,"Descri\xE7\xE3o"),og()(),Il(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),Qx(358," label"),zl(359,"br"),og()()(),Il(360,"td",20)(361,"code",24),Qx(362,"string"),og()(),Il(363,"td",23)(364,"p"),Qx(365,"R\xF3tulo de texto do "),Il(366,"em"),Qx(367,"chip"),og(),Qx(368,"."),og()()(),Il(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),Qx(373," selected"),zl(374,"br"),og()()(),Il(375,"td",20)(376,"code",21),Qx(377,"boolean"),og()(),Il(378,"td",23)(379,"p"),Qx(380,"Estado de sele\xE7\xE3o do "),Il(381,"em"),Qx(382,"chip"),og(),Qx(383," ("),Il(384,"code"),Qx(385,"true"),og(),Qx(386," para selecionado, "),Il(387,"code"),Qx(388,"false"),og(),Qx(389," para desmarcado)."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-filter-chip-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),zl(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),og()()()),o&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,ae,pe,se,me],encapsulation:2})}return n})();var De=[{path:"",component:ce}],he=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[uL.forChild(De),uL]})}return n})();var et=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[sr,he]})}return n})();export{et as DocPoFilterChipModule};