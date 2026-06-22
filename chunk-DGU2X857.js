import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,k as j,cA as s5,g as s,r as r$1,cB as Z3e,F as Sl,a1 as ft,J as og,L as Lp,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,H as Wl,z as eN,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,bH as M3,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,b2 as Khe,a3 as rNe,b7 as k3,cC as uNe,cD as cw,cE as xx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var re=(()=>{class i{poNotification=f(Yp);menuItems=[{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:false,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"po-context-menu",1),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og()()),a&2&&(Lp(),nw("p-items",o.menuItems));},dependencies:[Z3e],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context Menu Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-basic',
  templateUrl: './sample-po-context-menu-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuBasicComponent {
  readonly poNotification = inject(PoNotificationService);

  menuItems: Array<PoContextMenuItem> = [
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ];

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-menu-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ge,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return i})();var pe=(()=>{class i{poNotification=f(Yp);contextTitle=j("Cadastro");title=j("Funcion\xE1rio");expanded=j(true);newItemLabel=j("");selected=j(false);menuItems=j([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(false));}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(true),this.newItemLabel.set(""),this.selected.set(false),this.menuItems.set([]);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:false,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=wx();Sl(0,"div",1)(1,"po-context-menu",2),ww("p-expandedChange",function(d){return Ky(u),nN(o.expanded,d)||(o.expanded=d),Xy(d)}),ft("p-item-selected",function(d){return o.onItemSelected(d)}),og()(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(d){return Ky(u),nN(o.contextTitle,d)||(o.contextTitle=d),Xy(d)}),og(),e0(),Sl(7,"po-input",5),ww("ngModelChange",function(d){return Ky(u),nN(o.title,d)||(o.title=d),Xy(d)}),og(),e0(),og(),Sl(8,"div",3)(9,"po-switch",6),ww("ngModelChange",function(d){return Ky(u),nN(o.expanded,d)||(o.expanded=d),Xy(d)}),og(),e0(),og(),Wl(10,"po-divider"),Sl(11,"div",7)(12,"po-input",8),ww("ngModelChange",function(d){return Ky(u),nN(o.newItemLabel,d)||(o.newItemLabel=d),Xy(d)}),og(),e0(),Sl(13,"po-switch",9),ww("ngModelChange",function(d){return Ky(u),nN(o.selected,d)||(o.selected=d),Xy(d)}),og(),e0(),Sl(14,"po-button",10),ft("p-click",function(){return o.addItem()}),og()(),Wl(15,"po-divider"),Sl(16,"div",3)(17,"po-button",11),ft("p-click",function(){return o.restore()}),og()()();}a&2&&(Lp(),nw("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),Ew("p-expanded",o.expanded),Lp(5),Ew("ngModel",o.contextTitle),n0(),Lp(),Ew("ngModel",o.title),n0(),Lp(2),Ew("ngModel",o.expanded),n0(),Lp(3),Ew("ngModel",o.newItemLabel),n0(),Lp(),Ew("ngModel",o.selected),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,Z3e,mv,L3,M3],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context Menu Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    [p-context-title]="contextTitle()"
    [p-title]="title()"
    [p-items]="menuItems()"
    [(p-expanded)]="expanded"
    (p-item-selected)="onItemSelected($event)"
  />
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="contextTitle" [(ngModel)]="contextTitle" p-label="Context Title" p-clean />

    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-clean />
  </div>

  <div class="po-row">
    <po-switch
      class="po-md-6"
      name="expanded"
      [(ngModel)]="expanded"
      p-label="Expanded"
      p-label-off="Collapsed"
      p-label-on="Expanded"
    />
  </div>

  <po-divider />

  <div class="po-row po-pb-1">
    <po-input class="po-md-6" name="newItemLabel" [(ngModel)]="newItemLabel" p-label="New Item Label" />

    <po-switch
      class="po-md-6"
      name="Selected"
      [(ngModel)]="selected"
      p-label="Selected"
      p-help="Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado."
    />

    <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()" />
  </div>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-labs',
  templateUrl: './sample-po-context-menu-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuLabsComponent {
  readonly poNotification = inject(PoNotificationService);

  contextTitle = signal<string>('Cadastro');
  title = signal<string>('Funcion\xE1rio');
  expanded = signal<boolean>(true);
  newItemLabel = signal<string>('');
  selected = signal<boolean>(false);

  menuItems = signal<Array<PoContextMenuItem>>([]);

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }

  addItem(): void {
    if (!this.newItemLabel()) {
      return;
    }

    this.menuItems.set([...this.menuItems(), { label: this.newItemLabel(), selected: this.selected() }]);
    this.newItemLabel.set('');
    this.selected.set(false);
  }

  restore(): void {
    this.contextTitle.set('Cadastro');
    this.title.set('Funcion\xE1rio');
    this.expanded.set(true);
    this.newItemLabel.set('');
    this.selected.set(false);
    this.menuItems.set([]);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-context-menu-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ve,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return i})();var Me=["tab"],ue=(()=>{class i{tab=s5("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=j([{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label);}onActivatedTab(m){this.updateSelectedItemMenu(m.id);}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r$1({},o),{selected:o.label===m}));this.menuItems.set(a);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&cw(o.tab,Me,5),a&2&&xx();},standalone:false,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(Sl(0,"po-context-tabs",null,0)(2,"po-tab",2),ft("p-activated-tab",function(s){return o.onActivatedTab(s)}),Sl(3,"div",3)(4,"po-context-menu",4),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Sl(5,"po-page-default",5),Wl(6,"po-dynamic-form",6,1),og()()(),Sl(8,"po-tab",7),ft("p-activated-tab",function(s){return o.onActivatedTab(s)}),Sl(9,"div",3)(10,"po-context-menu",4),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Sl(11,"po-page-default",8),Wl(12,"po-dynamic-form",6,1),og()()(),Sl(14,"po-tab",9),ft("p-activated-tab",function(s){return o.onActivatedTab(s)}),Sl(15,"div",3)(16,"po-context-menu",4),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Sl(17,"po-page-default",10),Wl(18,"po-table",11),og()()()()),a&2&&(Lp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),nw("p-fields",o.formDadosCadastrais),Lp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),nw("p-fields",o.formEndereco),Lp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),nw("p-items",o.documentos));},dependencies:[Z3e,Khe,rNe,k3,Bme,uNe],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Context - Cadastro de Usu\xE1rio"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-context-tabs #tab>
  <po-tab
    p-label="Dados cadastrais"
    p-hide-close
    p-active
    id="Dados cadastrais"
    (p-activated-tab)="onActivatedTab($event)"
  >
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Dados cadastrais">
        <po-dynamic-form #dynamicForm [p-fields]="formDadosCadastrais" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Endere\xE7os" id="Endere\xE7os" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Endere\xE7os">
        <po-dynamic-form #dynamicForm [p-fields]="formEndereco" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Documentos" id="Documentos" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Documentos">
        <po-table [p-items]="documentos" />
      </po-page-default>
    </div>
  </po-tab>
</po-context-tabs>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoContextMenuItem, PoContextTabsComponent, PoDynamicFormField, PoTabComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-user',
  templateUrl: './sample-po-context-menu-user.component.html',
  styleUrls: ['./sample-po-context-menu-user.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextMenuUserComponent {
  private readonly tab = viewChild<PoContextTabsComponent>('tab');
  contextTitle = 'Cadastro';
  title = 'Usu\xE1rio';

  menuItems = signal<Array<PoContextMenuItem>>([
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ]);

  formDadosCadastrais: Array<PoDynamicFormField> = [
    {
      property: 'name',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.'
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 }
  ];

  formEndereco: Array<PoDynamicFormField> = [
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' }
  ];

  documentos = [
    { Documento: 'CPF', Valor: '987.xxx.xxx-60' },
    { Documento: 'Passporte', Valor: '123456xxx-1' }
  ];

  onItemSelected(value: PoContextMenuItem) {
    this.updateSelectedItemMenu(value.label);
    this.tab().activateTab(value.label);
  }

  onActivatedTab(value: PoTabComponent) {
    this.updateSelectedItemMenu(value.id);
  }

  private updateSelectedItemMenu(label: string) {
    const menuItems = this.menuItems().map(x => ({ ...x, selected: x.label === label }));
    this.menuItems.set(menuItems);
  }
}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),og(),Sl(25,"pre",11),eN(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-context-menu-user"),og(),Wl(29,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:false,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-context-menu."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoContextMenuComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-context-menu"),og(),eN(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Sl(18,"code"),eN(19,"po-menu"),og(),eN(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),og(),Sl(21,"p"),eN(22,"No caso de uso do componente "),Sl(23,"code"),eN(24,"po-page-default"),og(),eN(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Sl(26,"strong"),eN(27,"po-context-menu-wrapper"),og(),eN(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),og(),Sl(29,"p"),eN(30,"O uso simult\xE2neo dos componentes "),Sl(31,"code"),eN(32,"po-menu"),og(),eN(33," e "),Sl(34,"code"),eN(35,"po-context-menu"),og(),eN(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),og(),Sl(37,"h4"),eN(38,"Tokens customiz\xE1veis"),og(),Sl(39,"p"),eN(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(41,"blockquote")(42,"p"),eN(43,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(44,"a",6),eN(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(46,"."),og()(),Sl(47,"table")(48,"thead")(49,"tr")(50,"th"),eN(51,"Propriedade"),og(),Sl(52,"th"),eN(53,"Descri\xE7\xE3o"),og(),Sl(54,"th"),eN(55,"Valor Padr\xE3o"),og()()(),Sl(56,"tbody")(57,"tr")(58,"td")(59,"strong"),eN(60,"Default Values"),og()(),Wl(61,"td")(62,"td"),og(),Sl(63,"tr")(64,"td")(65,"code"),eN(66,"--font-family"),og()(),Sl(67,"td"),eN(68,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(69,"td")(70,"code"),eN(71,"var(--font-family-theme)"),og()()(),Sl(72,"tr")(73,"td")(74,"code"),eN(75,"--font-size"),og()(),Sl(76,"td"),eN(77,"Tamanho da fonte dos itens"),og(),Sl(78,"td")(79,"code"),eN(80,"var(--font-size-default)"),og()()(),Sl(81,"tr")(82,"td")(83,"code"),eN(84,"--font-size-context-title"),og()(),Sl(85,"td"),eN(86,"Tamanho da fonte do t\xEDtulo de contexto"),og(),Sl(87,"td")(88,"code"),eN(89,"var(--font-size-sm)"),og()()(),Sl(90,"tr")(91,"td")(92,"code"),eN(93,"--font-size-title"),og()(),Sl(94,"td"),eN(95,"Tamanho da fonte do t\xEDtulo principal"),og(),Sl(96,"td")(97,"code"),eN(98,"var(--font-size-lg)"),og()()(),Sl(99,"tr")(100,"td")(101,"code"),eN(102,"--line-height"),og()(),Sl(103,"td"),eN(104,"Altura da linha"),og(),Sl(105,"td")(106,"code"),eN(107,"var(--line-height-md)"),og()()(),Sl(108,"tr")(109,"td")(110,"code"),eN(111,"--border-radius"),og()(),Sl(112,"td"),eN(113,"Raio dos cantos dos itens"),og(),Sl(114,"td")(115,"code"),eN(116,"var(--border-radius-md)"),og()()(),Sl(117,"tr")(118,"td")(119,"code"),eN(120,"--border-color"),og()(),Sl(121,"td"),eN(122,"Cor da borda lateral direita do componente"),og(),Sl(123,"td")(124,"code"),eN(125,"var(--color-neutral-light-20)"),og()()(),Sl(126,"tr")(127,"td")(128,"code"),eN(129,"--background-color"),og()(),Sl(130,"td"),eN(131,"Cor de fundo do componente"),og(),Sl(132,"td")(133,"code"),eN(134,"var(--color-neutral-light-05)"),og()()(),Sl(135,"tr")(136,"td")(137,"code"),eN(138,"--color"),og()(),Sl(139,"td"),eN(140,"Cor do texto dos itens"),og(),Sl(141,"td")(142,"code"),eN(143,"var(--color-action-default)"),og()()(),Sl(144,"tr")(145,"td")(146,"code"),eN(147,"--color-context-title"),og()(),Sl(148,"td"),eN(149,"Cor do texto do t\xEDtulo de contexto"),og(),Sl(150,"td")(151,"code"),eN(152,"var(--color-neutral-mid-40)"),og()()(),Sl(153,"tr")(154,"td")(155,"code"),eN(156,"--color-title"),og()(),Sl(157,"td"),eN(158,"Cor do texto do t\xEDtulo principal"),og(),Sl(159,"td")(160,"code"),eN(161,"var(--color-neutral-dark-80)"),og()()(),Sl(162,"tr")(163,"td")(164,"code"),eN(165,"--font-weight"),og()(),Sl(166,"td"),eN(167,"Peso da fonte dos itens"),og(),Sl(168,"td")(169,"code"),eN(170,"var(--font-weight-bold)"),og()()(),Sl(171,"tr")(172,"td")(173,"code"),eN(174,"--font-weight-title"),og()(),Sl(175,"td"),eN(176,"Peso da fonte do t\xEDtulo principal"),og(),Sl(177,"td")(178,"code"),eN(179,"var(--font-weight-bold)"),og()()(),Sl(180,"tr")(181,"td")(182,"code"),eN(183,"--outline-color-focused"),og()(),Sl(184,"td"),eN(185,"Cor do outline no estado de focus"),og(),Sl(186,"td")(187,"code"),eN(188,"var(--color-action-focus)"),og()()(),Sl(189,"tr")(190,"td")(191,"strong"),eN(192,"Hover"),og()(),Wl(193,"td")(194,"td"),og(),Sl(195,"tr")(196,"td")(197,"code"),eN(198,"--color-hover"),og()(),Sl(199,"td"),eN(200,"Cor do texto no estado hover"),og(),Sl(201,"td")(202,"code"),eN(203,"var(--color-brand-01-darkest)"),og()()(),Sl(204,"tr")(205,"td")(206,"code"),eN(207,"--background-color-hover"),og()(),Sl(208,"td"),eN(209,"Cor de fundo no estado hover"),og(),Sl(210,"td")(211,"code"),eN(212,"var(--color-brand-01-lighter)"),og()()(),Sl(213,"tr")(214,"td")(215,"strong"),eN(216,"Pressed"),og()(),Wl(217,"td")(218,"td"),og(),Sl(219,"tr")(220,"td")(221,"code"),eN(222,"--background-color-pressed"),og()(),Sl(223,"td"),eN(224,"Cor de fundo no estado pressed"),og(),Sl(225,"td")(226,"code"),eN(227,"var(--color-brand-01-light)"),og()()(),Sl(228,"tr")(229,"td")(230,"strong"),eN(231,"Active (Selected)"),og()(),Wl(232,"td")(233,"td"),og(),Sl(234,"tr")(235,"td")(236,"code"),eN(237,"--background-color-actived"),og()(),Sl(238,"td"),eN(239,"Cor de fundo do item selecionado"),og(),Sl(240,"td")(241,"code"),eN(242,"var(--color-brand-01-lightest)"),og()()(),Sl(243,"tr")(244,"td")(245,"code"),eN(246,"--color-actived"),og()(),Sl(247,"td"),eN(248,"Cor do texto do item selecionado"),og(),Sl(249,"td")(250,"code"),eN(251,"var(--color-action-pressed)"),og()()()()()(),Sl(252,"div",7)(253,"h4",8),eN(254,"Seletor"),og(),Sl(255,"pre",9),eN(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),og()(),Sl(257,"h4",10),eN(258,"Propriedades"),og(),Sl(259,"table",11)(260,"tr",12)(261,"th",13),eN(262,"Nome"),og(),Sl(263,"th",13),eN(264,"Tipo"),og(),Sl(265,"th",13),eN(266,"Padr\xE3o"),og(),Sl(267,"th",13),eN(268,"Descri\xE7\xE3o"),og()(),Sl(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),eN(273," p-context-title"),Wl(274,"br"),og()()(),Sl(275,"td",18)(276,"code",19),eN(277,"string"),og()(),Sl(278,"td",20),eN(279,"-"),og(),Sl(280,"td",21)(281,"p"),eN(282,"T\xEDtulo do contexto superior"),og()()(),Sl(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),eN(287," p-expanded"),Wl(288,"br"),og()()(),Sl(289,"td",18)(290,"code",22),eN(291,"boolean"),og()(),Sl(292,"td",20)(293,"p")(294,"code"),eN(295,"true"),og()()(),Sl(296,"td",21)(297,"p"),eN(298,"Define se o menu est\xE1 aberto ou fechado."),og(),Sl(299,"p"),eN(300,"Suporta two-way binding:"),og(),Sl(301,"pre")(302,"code",23),eN(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),og()(),Sl(304,"p"),eN(305,"ou"),og(),Sl(306,"pre")(307,"code",23),eN(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),og()()()(),Sl(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),eN(313," (p-item-selected)"),Wl(314,"br"),og()()(),Sl(315,"td",18)(316,"code",26),eN(317,"EventEmitter"),og()(),Sl(318,"td",20),eN(319,"-"),og(),Sl(320,"td",21)(321,"p"),eN(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),og()()(),Sl(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),eN(327," p-items"),Wl(328,"br"),og()()(),Sl(329,"td",18)(330,"code",27),eN(331,"Array<PoContextMenuItem>"),og()(),Sl(332,"td",20),eN(333,"-"),og(),Sl(334,"td",21)(335,"p"),eN(336,"Lista de itens para renderiza\xE7\xE3o."),og(),Sl(337,"blockquote")(338,"p"),eN(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),Sl(340,"code"),eN(341,"selected: true"),og(),eN(342,`.
Se mais de um item estiver com `),Sl(343,"code"),eN(344,"selected: true"),og(),eN(345,", apenas o primeiro ser\xE1 mantido como selecionado."),og()()()(),Sl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),eN(350," p-title"),Wl(351,"br"),og()()(),Sl(352,"td",18)(353,"code",19),eN(354,"string"),og()(),Sl(355,"td",20),eN(356,"-"),og(),Sl(357,"td",21)(358,"p"),eN(359,"T\xEDtulo principal do menu"),og()()()(),Sl(360,"h3"),eN(361,"Interfaces"),og(),Sl(362,"h4",28)(363,"code",5),eN(364,"PoContextMenuItem"),og()(),Sl(365,"div",2)(366,"p"),eN(367,"Interface para os itens do componente po-context-menu."),og()(),Sl(368,"h4",10),eN(369,"Propriedades"),og(),Sl(370,"table",11)(371,"tr",12)(372,"th",13),eN(373,"Nome"),og(),Sl(374,"th",13),eN(375,"Tipo"),og(),Sl(376,"th",13),eN(377,"Descri\xE7\xE3o"),og()(),Sl(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),eN(382," action"),Wl(383,"br"),og()()(),Sl(384,"td",18)(385,"code",29),eN(386,"Function"),og()(),Sl(387,"td",21)(388,"em")(389,"strong"),eN(390,"(opcional)"),og()(),Sl(391,"p"),eN(392,"A\xE7\xE3o executada ao clicar no item."),og()()(),Sl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),eN(397," label"),Wl(398,"br"),og()()(),Sl(399,"td",18)(400,"code",19),eN(401,"string"),og()(),Sl(402,"td",21)(403,"p"),eN(404,"Texto do item de menu."),og()()(),Sl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),eN(409," selected"),Wl(410,"br"),og()()(),Sl(411,"td",18)(412,"code",22),eN(413,"boolean"),og()(),Sl(414,"td",21)(415,"em")(416,"strong"),eN(417,"(opcional)"),og()(),Sl(418,"p"),eN(419,"Estado de sele\xE7\xE3o do item."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-context-menu-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,se,ce,be,xe],encapsulation:2})}return i})();var De=[{path:"",component:Ce}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[hL.forChild(De),hL]})}return i})();var ct=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,Se]})}return i})();export{ct as DocPoContextMenuModule};