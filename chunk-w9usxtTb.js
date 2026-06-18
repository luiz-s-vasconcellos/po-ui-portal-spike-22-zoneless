import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,V,cA as r5,e as s,r as r$1,cB as eNe,H as Il,a1 as ft,R as og,A as Lp,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,q as Qx,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,bH as k3,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,b2 as Jhe,a3 as cNe,b7 as E3,cC as gNe,cD as cw,cE as Rx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var re=(()=>{class i{poNotification=f(Yp);menuItems=[{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:false,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"po-context-menu",1),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og()()),a&2&&(Lp(),nw("p-items",o.menuItems));},dependencies:[eNe],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context Menu Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-context-menu-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return i})();var pe=(()=>{class i{poNotification=f(Yp);contextTitle=V("Cadastro");title=V("Funcion\xE1rio");expanded=V(true);newItemLabel=V("");selected=V(false);menuItems=V([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`);}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(false));}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(true),this.newItemLabel.set(""),this.selected.set(false),this.menuItems.set([]);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:false,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=Dx();Il(0,"div",1)(1,"po-context-menu",2),ww("p-expandedChange",function(d){return Xy(u),eN(o.expanded,d)||(o.expanded=d),Qy(d)}),ft("p-item-selected",function(d){return o.onItemSelected(d)}),og()(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(d){return Xy(u),eN(o.contextTitle,d)||(o.contextTitle=d),Qy(d)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(d){return Xy(u),eN(o.title,d)||(o.title=d),Qy(d)}),og(),QA(),og(),Il(8,"div",3)(9,"po-switch",6),ww("ngModelChange",function(d){return Xy(u),eN(o.expanded,d)||(o.expanded=d),Qy(d)}),og(),QA(),og(),zl(10,"po-divider"),Il(11,"div",7)(12,"po-input",8),ww("ngModelChange",function(d){return Xy(u),eN(o.newItemLabel,d)||(o.newItemLabel=d),Qy(d)}),og(),QA(),Il(13,"po-switch",9),ww("ngModelChange",function(d){return Xy(u),eN(o.selected,d)||(o.selected=d),Qy(d)}),og(),QA(),Il(14,"po-button",10),ft("p-click",function(){return o.addItem()}),og()(),zl(15,"po-divider"),Il(16,"div",3)(17,"po-button",11),ft("p-click",function(){return o.restore()}),og()()();}a&2&&(Lp(),nw("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),Ew("p-expanded",o.expanded),Lp(5),Ew("ngModel",o.contextTitle),e0(),Lp(),Ew("ngModel",o.title),e0(),Lp(2),Ew("ngModel",o.expanded),e0(),Lp(3),Ew("ngModel",o.newItemLabel),e0(),Lp(),Ew("ngModel",o.selected),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,eNe,mv,O3,k3],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context Menu Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-context-menu-wrapper">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-context-menu-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return i})();var Me=["tab"],ue=(()=>{class i{tab=r5("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=V([{label:"Dados cadastrais",selected:true},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label);}onActivatedTab(m){this.updateSelectedItemMenu(m.id);}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>s(r$1({},o),{selected:o.label===m}));this.menuItems.set(a);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&cw(o.tab,Me,5),a&2&&Rx();},standalone:false,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(Il(0,"po-context-tabs",null,0)(2,"po-tab",2),ft("p-activated-tab",function(s){return o.onActivatedTab(s)}),Il(3,"div",3)(4,"po-context-menu",4),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Il(5,"po-page-default",5),zl(6,"po-dynamic-form",6,1),og()()(),Il(8,"po-tab",7),ft("p-activated-tab",function(s){return o.onActivatedTab(s)}),Il(9,"div",3)(10,"po-context-menu",4),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Il(11,"po-page-default",8),zl(12,"po-dynamic-form",6,1),og()()(),Il(14,"po-tab",9),ft("p-activated-tab",function(s){return o.onActivatedTab(s)}),Il(15,"div",3)(16,"po-context-menu",4),ft("p-item-selected",function(s){return o.onItemSelected(s)}),og(),Il(17,"po-page-default",10),zl(18,"po-table",11),og()()()()),a&2&&(Lp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),nw("p-fields",o.formDadosCadastrais),Lp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),nw("p-fields",o.formEndereco),Lp(4),nw("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),Lp(2),nw("p-items",o.documentos));},dependencies:[eNe,Jhe,cNe,E3,qme,gNe],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"],changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Context - Cadastro de Usu\xE1rio"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-context-tabs #tab>
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, signal, viewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),og(),Il(25,"pre",11),Qx(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-context-menu-user"),og(),zl(29,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:false,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-context-menu."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoContextMenuComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-context-menu"),og(),Qx(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),Il(18,"code"),Qx(19,"po-menu"),og(),Qx(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),og(),Il(21,"p"),Qx(22,"No caso de uso do componente "),Il(23,"code"),Qx(24,"po-page-default"),og(),Qx(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),Il(26,"strong"),Qx(27,"po-context-menu-wrapper"),og(),Qx(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),og(),Il(29,"p"),Qx(30,"O uso simult\xE2neo dos componentes "),Il(31,"code"),Qx(32,"po-menu"),og(),Qx(33," e "),Il(34,"code"),Qx(35,"po-context-menu"),og(),Qx(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),og(),Il(37,"h4"),Qx(38,"Tokens customiz\xE1veis"),og(),Il(39,"p"),Qx(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(41,"blockquote")(42,"p"),Qx(43,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(44,"a",6),Qx(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(46,"."),og()(),Il(47,"table")(48,"thead")(49,"tr")(50,"th"),Qx(51,"Propriedade"),og(),Il(52,"th"),Qx(53,"Descri\xE7\xE3o"),og(),Il(54,"th"),Qx(55,"Valor Padr\xE3o"),og()()(),Il(56,"tbody")(57,"tr")(58,"td")(59,"strong"),Qx(60,"Default Values"),og()(),zl(61,"td")(62,"td"),og(),Il(63,"tr")(64,"td")(65,"code"),Qx(66,"--font-family"),og()(),Il(67,"td"),Qx(68,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(69,"td")(70,"code"),Qx(71,"var(--font-family-theme)"),og()()(),Il(72,"tr")(73,"td")(74,"code"),Qx(75,"--font-size"),og()(),Il(76,"td"),Qx(77,"Tamanho da fonte dos itens"),og(),Il(78,"td")(79,"code"),Qx(80,"var(--font-size-default)"),og()()(),Il(81,"tr")(82,"td")(83,"code"),Qx(84,"--font-size-context-title"),og()(),Il(85,"td"),Qx(86,"Tamanho da fonte do t\xEDtulo de contexto"),og(),Il(87,"td")(88,"code"),Qx(89,"var(--font-size-sm)"),og()()(),Il(90,"tr")(91,"td")(92,"code"),Qx(93,"--font-size-title"),og()(),Il(94,"td"),Qx(95,"Tamanho da fonte do t\xEDtulo principal"),og(),Il(96,"td")(97,"code"),Qx(98,"var(--font-size-lg)"),og()()(),Il(99,"tr")(100,"td")(101,"code"),Qx(102,"--line-height"),og()(),Il(103,"td"),Qx(104,"Altura da linha"),og(),Il(105,"td")(106,"code"),Qx(107,"var(--line-height-md)"),og()()(),Il(108,"tr")(109,"td")(110,"code"),Qx(111,"--border-radius"),og()(),Il(112,"td"),Qx(113,"Raio dos cantos dos itens"),og(),Il(114,"td")(115,"code"),Qx(116,"var(--border-radius-md)"),og()()(),Il(117,"tr")(118,"td")(119,"code"),Qx(120,"--border-color"),og()(),Il(121,"td"),Qx(122,"Cor da borda lateral direita do componente"),og(),Il(123,"td")(124,"code"),Qx(125,"var(--color-neutral-light-20)"),og()()(),Il(126,"tr")(127,"td")(128,"code"),Qx(129,"--background-color"),og()(),Il(130,"td"),Qx(131,"Cor de fundo do componente"),og(),Il(132,"td")(133,"code"),Qx(134,"var(--color-neutral-light-05)"),og()()(),Il(135,"tr")(136,"td")(137,"code"),Qx(138,"--color"),og()(),Il(139,"td"),Qx(140,"Cor do texto dos itens"),og(),Il(141,"td")(142,"code"),Qx(143,"var(--color-action-default)"),og()()(),Il(144,"tr")(145,"td")(146,"code"),Qx(147,"--color-context-title"),og()(),Il(148,"td"),Qx(149,"Cor do texto do t\xEDtulo de contexto"),og(),Il(150,"td")(151,"code"),Qx(152,"var(--color-neutral-mid-40)"),og()()(),Il(153,"tr")(154,"td")(155,"code"),Qx(156,"--color-title"),og()(),Il(157,"td"),Qx(158,"Cor do texto do t\xEDtulo principal"),og(),Il(159,"td")(160,"code"),Qx(161,"var(--color-neutral-dark-80)"),og()()(),Il(162,"tr")(163,"td")(164,"code"),Qx(165,"--font-weight"),og()(),Il(166,"td"),Qx(167,"Peso da fonte dos itens"),og(),Il(168,"td")(169,"code"),Qx(170,"var(--font-weight-bold)"),og()()(),Il(171,"tr")(172,"td")(173,"code"),Qx(174,"--font-weight-title"),og()(),Il(175,"td"),Qx(176,"Peso da fonte do t\xEDtulo principal"),og(),Il(177,"td")(178,"code"),Qx(179,"var(--font-weight-bold)"),og()()(),Il(180,"tr")(181,"td")(182,"code"),Qx(183,"--outline-color-focused"),og()(),Il(184,"td"),Qx(185,"Cor do outline no estado de focus"),og(),Il(186,"td")(187,"code"),Qx(188,"var(--color-action-focus)"),og()()(),Il(189,"tr")(190,"td")(191,"strong"),Qx(192,"Hover"),og()(),zl(193,"td")(194,"td"),og(),Il(195,"tr")(196,"td")(197,"code"),Qx(198,"--color-hover"),og()(),Il(199,"td"),Qx(200,"Cor do texto no estado hover"),og(),Il(201,"td")(202,"code"),Qx(203,"var(--color-brand-01-darkest)"),og()()(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--background-color-hover"),og()(),Il(208,"td"),Qx(209,"Cor de fundo no estado hover"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-brand-01-lighter)"),og()()(),Il(213,"tr")(214,"td")(215,"strong"),Qx(216,"Pressed"),og()(),zl(217,"td")(218,"td"),og(),Il(219,"tr")(220,"td")(221,"code"),Qx(222,"--background-color-pressed"),og()(),Il(223,"td"),Qx(224,"Cor de fundo no estado pressed"),og(),Il(225,"td")(226,"code"),Qx(227,"var(--color-brand-01-light)"),og()()(),Il(228,"tr")(229,"td")(230,"strong"),Qx(231,"Active (Selected)"),og()(),zl(232,"td")(233,"td"),og(),Il(234,"tr")(235,"td")(236,"code"),Qx(237,"--background-color-actived"),og()(),Il(238,"td"),Qx(239,"Cor de fundo do item selecionado"),og(),Il(240,"td")(241,"code"),Qx(242,"var(--color-brand-01-lightest)"),og()()(),Il(243,"tr")(244,"td")(245,"code"),Qx(246,"--color-actived"),og()(),Il(247,"td"),Qx(248,"Cor do texto do item selecionado"),og(),Il(249,"td")(250,"code"),Qx(251,"var(--color-action-pressed)"),og()()()()()(),Il(252,"div",7)(253,"h4",8),Qx(254,"Seletor"),og(),Il(255,"pre",9),Qx(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),og()(),Il(257,"h4",10),Qx(258,"Propriedades"),og(),Il(259,"table",11)(260,"tr",12)(261,"th",13),Qx(262,"Nome"),og(),Il(263,"th",13),Qx(264,"Tipo"),og(),Il(265,"th",13),Qx(266,"Padr\xE3o"),og(),Il(267,"th",13),Qx(268,"Descri\xE7\xE3o"),og()(),Il(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),Qx(273," p-context-title"),zl(274,"br"),og()()(),Il(275,"td",18)(276,"code",19),Qx(277,"string"),og()(),Il(278,"td",20),Qx(279,"-"),og(),Il(280,"td",21)(281,"p"),Qx(282,"T\xEDtulo do contexto superior"),og()()(),Il(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),Qx(287," p-expanded"),zl(288,"br"),og()()(),Il(289,"td",18)(290,"code",22),Qx(291,"boolean"),og()(),Il(292,"td",20)(293,"p")(294,"code"),Qx(295,"true"),og()()(),Il(296,"td",21)(297,"p"),Qx(298,"Define se o menu est\xE1 aberto ou fechado."),og(),Il(299,"p"),Qx(300,"Suporta two-way binding:"),og(),Il(301,"pre")(302,"code",23),Qx(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),og()(),Il(304,"p"),Qx(305,"ou"),og(),Il(306,"pre")(307,"code",23),Qx(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),og()()()(),Il(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),Qx(313," (p-item-selected)"),zl(314,"br"),og()()(),Il(315,"td",18)(316,"code",26),Qx(317,"EventEmitter"),og()(),Il(318,"td",20),Qx(319,"-"),og(),Il(320,"td",21)(321,"p"),Qx(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),og()()(),Il(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),Qx(327," p-items"),zl(328,"br"),og()()(),Il(329,"td",18)(330,"code",27),Qx(331,"Array<PoContextMenuItem>"),og()(),Il(332,"td",20),Qx(333,"-"),og(),Il(334,"td",21)(335,"p"),Qx(336,"Lista de itens para renderiza\xE7\xE3o."),og(),Il(337,"blockquote")(338,"p"),Qx(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),Il(340,"code"),Qx(341,"selected: true"),og(),Qx(342,`.
Se mais de um item estiver com `),Il(343,"code"),Qx(344,"selected: true"),og(),Qx(345,", apenas o primeiro ser\xE1 mantido como selecionado."),og()()()(),Il(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),Qx(350," p-title"),zl(351,"br"),og()()(),Il(352,"td",18)(353,"code",19),Qx(354,"string"),og()(),Il(355,"td",20),Qx(356,"-"),og(),Il(357,"td",21)(358,"p"),Qx(359,"T\xEDtulo principal do menu"),og()()()(),Il(360,"h3"),Qx(361,"Interfaces"),og(),Il(362,"h4",28)(363,"code",5),Qx(364,"PoContextMenuItem"),og()(),Il(365,"div",2)(366,"p"),Qx(367,"Interface para os itens do componente po-context-menu."),og()(),Il(368,"h4",10),Qx(369,"Propriedades"),og(),Il(370,"table",11)(371,"tr",12)(372,"th",13),Qx(373,"Nome"),og(),Il(374,"th",13),Qx(375,"Tipo"),og(),Il(376,"th",13),Qx(377,"Descri\xE7\xE3o"),og()(),Il(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),Qx(382," action"),zl(383,"br"),og()()(),Il(384,"td",18)(385,"code",29),Qx(386,"Function"),og()(),Il(387,"td",21)(388,"em")(389,"strong"),Qx(390,"(opcional)"),og()(),Il(391,"p"),Qx(392,"A\xE7\xE3o executada ao clicar no item."),og()()(),Il(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),Qx(397," label"),zl(398,"br"),og()()(),Il(399,"td",18)(400,"code",19),Qx(401,"string"),og()(),Il(402,"td",21)(403,"p"),Qx(404,"Texto do item de menu."),og()()(),Il(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),Qx(409," selected"),zl(410,"br"),og()()(),Il(411,"td",18)(412,"code",22),Qx(413,"boolean"),og()(),Il(414,"td",21)(415,"em")(416,"strong"),Qx(417,"(opcional)"),og()(),Il(418,"p"),Qx(419,"Estado de sele\xE7\xE3o do item."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-context-menu-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,se,ce,be,xe],encapsulation:2})}return i})();var De=[{path:"",component:Ce}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[uL.forChild(De),uL]})}return i})();var ct=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,Se]})}return i})();export{ct as DocPoContextMenuModule};