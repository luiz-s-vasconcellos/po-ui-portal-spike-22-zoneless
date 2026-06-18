import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,r as r$1,dM as _Ne,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,a3 as cNe,ab as lt,d8 as Fme,d9 as fNe,b7 as E3,ba as yNe,av as Gl,aw as co,ax as lo,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ye=()=>({label:"Adicionar",value:1.1}),ue=a=>[a],xe=a=>({label:"Gerenciador de usu\xE1rios",value:1,subItems:a}),be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic"]],standalone:false,decls:1,vars:8,consts:[[3,"p-items"]],template:function(o,i){o&1&&zl(0,"po-tree-view",0),o&2&&nw("p-items",uN(6,ue,uN(4,xe,uN(2,ue,lN(1,ye)))));},dependencies:[_Ne],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tree View Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tree-view-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ie,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return a})();var he=(()=>{class a{componentsSize="medium";event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=false;componentsSizeOptions=[{value:"small",label:"Small"},{value:"medium",label:"Medium"}];itemPropertiesOptions=[{value:"selected",label:"Selected"},{value:"expanded",label:"Expanded"},{value:"disable-selection",label:"Disable Selection"}];ngOnInit(){this.restore();}add(r){r.selected=this.itemProperties.includes("selected"),r.expanded=this.itemProperties.includes("expanded"),r.isSelectable=!this.itemProperties.includes("disable-selection");let o=r$1({},r);if(!this.parent)this.items=[...this.items,o];else {let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o];}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items);}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`;}restore(){this.componentsSize="medium",this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4;}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Ve}=c;i.push({label:`${"-".repeat(o)} ${p}`,value:Ve}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0;}),i}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs"]],standalone:false,decls:24,vars:18,consts:[["treeViewItemForm","ngForm"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-components-size","p-items","p-selectable","p-max-level","p-single-select"],["p-label","Events"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Po Tree View Config"],["name","level","p-label","Max Level",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","selectable","p-label","Selectable",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","singleSelect","p-label","Single Select",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-5",3,"ngModelChange","ngModel","p-options"],["p-label","Po Tree View Item"],["name","parent","p-label","Parent Item","p-placeholder","Add tree view item",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","value","p-label","Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","itemProperties","p-columns","3","p-label","Item Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"o-md-4","po-lg-2",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"]],template:function(o,i){if(o&1){let m=Dx();Il(0,"po-tree-view",1),ft("p-collapsed",function(p){return i.changeEvent("p-collapsed",p)})("p-expanded",function(p){return i.changeEvent("p-expanded",p)})("p-selected",function(p){return i.changeEvent("p-selected",p)})("p-unselected",function(p){return i.changeEvent("p-unselected",p)}),og(),zl(1,"po-divider",2),Il(2,"div",3),zl(3,"po-info",4),og(),zl(4,"po-divider",5),Il(5,"div",3)(6,"po-input",6),ww("ngModelChange",function(p){return Xy(m),eN(i.maxLevel,p)||(i.maxLevel=p),Qy(p)}),og(),QA(),Il(7,"po-switch",7),ww("ngModelChange",function(p){return Xy(m),eN(i.selectable,p)||(i.selectable=p),Qy(p)}),og(),QA(),Il(8,"po-switch",8),ww("ngModelChange",function(p){return Xy(m),eN(i.singleSelect,p)||(i.singleSelect=p),Qy(p)}),og(),QA(),Il(9,"po-radio-group",9),ww("ngModelChange",function(p){return Xy(m),eN(i.componentsSize,p)||(i.componentsSize=p),Qy(p)}),og(),QA(),og(),zl(10,"po-divider",10),Il(11,"form",null,0)(13,"div",3)(14,"po-select",11),ww("ngModelChange",function(p){return Xy(m),eN(i.parent,p)||(i.parent=p),Qy(p)}),og(),QA(),Il(15,"po-input",12),ww("ngModelChange",function(p){return Xy(m),eN(i.treeViewItem.label,p)||(i.treeViewItem.label=p),Qy(p)}),og(),QA(),Il(16,"po-input",13),ww("ngModelChange",function(p){return Xy(m),eN(i.treeViewItem.value,p)||(i.treeViewItem.value=p),Qy(p)}),og(),QA(),og(),Il(17,"div",3)(18,"po-checkbox-group",14),ww("ngModelChange",function(p){return Xy(m),eN(i.itemProperties,p)||(i.itemProperties=p),Qy(p)}),og(),QA(),og(),Il(19,"div",3)(20,"po-button",15),ft("p-click",function(){Xy(m);let p=Ax(12);return i.add(i.treeViewItem),p.reset(),Qy(i.itemProperties=[])}),og()()(),zl(21,"po-divider"),Il(22,"div",3)(23,"po-button",16),ft("p-click",function(){return i.restore()}),og()();}if(o&2){let m=Ax(12);nw("p-components-size",i.componentsSize)("p-items",i.items)("p-selectable",i.selectable)("p-max-level",i.maxLevel)("p-single-select",i.singleSelect),Lp(3),nw("p-value",i.event),Lp(3),Ew("ngModel",i.maxLevel),e0(),Lp(),Ew("ngModel",i.selectable),e0(),Lp(),Ew("ngModel",i.singleSelect),e0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),e0(),Lp(5),Ew("ngModel",i.parent),nw("p-options",i.parentList),e0(),Lp(),Ew("ngModel",i.treeViewItem.label),e0(),Lp(),Ew("ngModel",i.treeViewItem.value),e0(),Lp(2),Ew("ngModel",i.itemProperties),nw("p-options",i.itemPropertiesOptions),e0(),Lp(2),nw("p-disabled",m.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,qhe,k3,Yhe,_Ne],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tree View Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-tree-view
  [p-components-size]="componentsSize"
  [p-items]="items"
  [p-selectable]="selectable"
  (p-collapsed)="changeEvent('p-collapsed', $event)"
  (p-expanded)="changeEvent('p-expanded', $event)"
  (p-selected)="changeEvent('p-selected', $event)"
  (p-unselected)="changeEvent('p-unselected', $event)"
  [p-max-level]="maxLevel"
  [p-single-select]="singleSelect"
>
</po-tree-view>

<po-divider p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Po Tree View Config"></po-divider>

<div class="po-row">
  <po-input class="po-md-6 po-lg-3" name="level" [(ngModel)]="maxLevel" p-label="Max Level"> </po-input>
  <po-switch class="po-md-6 po-lg-2" name="selectable" [(ngModel)]="selectable" p-label="Selectable"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="singleSelect" [(ngModel)]="singleSelect" p-label="Single Select">
  </po-switch>

  <po-radio-group
    class="po-lg-5"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>
</div>

<po-divider p-label="Po Tree View Item"></po-divider>

<form #treeViewItemForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-4"
      name="parent"
      [(ngModel)]="parent"
      p-label="Parent Item"
      p-placeholder="Add tree view item"
      [p-options]="parentList"
    >
    </po-select>

    <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="treeViewItem.label" p-label="Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="value" [(ngModel)]="treeViewItem.value" p-label="Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="itemProperties"
      [(ngModel)]="itemProperties"
      p-columns="3"
      p-label="Item Properties"
      [p-options]="itemPropertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="o-md-4 po-lg-2"
      p-label="Add"
      [p-disabled]="treeViewItemForm.invalid"
      (p-click)="add(treeViewItem); treeViewItemForm.reset(); this.itemProperties = []"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-labs',
  templateUrl: 'sample-po-tree-view-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewLabsComponent implements OnInit {
  componentsSize: string = 'medium';
  event: string;
  items: Array<PoTreeViewItem>;
  itemProperties: Array<string>;
  parent: string;
  parentList: Array<PoSelectOption>;
  selectable: boolean;
  treeViewItem: PoTreeViewItem;
  maxLevel: number = 4;
  singleSelect: boolean = false;

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' }
  ];

  readonly itemPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'selected', label: 'Selected' },
    { value: 'expanded', label: 'Expanded' },
    { value: 'disable-selection', label: 'Disable Selection' }
  ];

  ngOnInit() {
    this.restore();
  }

  add(treeViewItem: PoTreeViewItem) {
    treeViewItem.selected = this.itemProperties.includes('selected');
    treeViewItem.expanded = this.itemProperties.includes('expanded');
    treeViewItem.isSelectable = !this.itemProperties.includes('disable-selection');

    const treeViewItemClone = { ...treeViewItem };

    if (!this.parent) {
      this.items = [...this.items, treeViewItemClone];
    } else {
      const treeViewItemNode = this.getTreeViewItemNode(this.items, this.parent);

      if (!treeViewItemNode.subItems) {
        treeViewItemNode.subItems = [];
      }

      treeViewItemNode.subItems = [...treeViewItemNode.subItems, treeViewItemClone];
    }

    this.items = [].concat(this.items);
    this.parentList = this.updateParentList(this.items);
  }

  changeEvent(event: string, treeViewItem: PoTreeViewItem) {
    this.event = \`\${event}: \${JSON.stringify(treeViewItem)}\`;
  }

  restore() {
    this.componentsSize = 'medium';
    this.event = undefined;
    this.items = [];
    this.parent = undefined;
    this.parentList = [];
    this.itemProperties = [];
    this.selectable = undefined;
    this.treeViewItem = <any>{};
    this.maxLevel = 4;
  }

  private getTreeViewItemNode(items: Array<PoTreeViewItem>, value: string) {
    let treeViewItemNode: PoTreeViewItem;

    if (!items) {
      return;
    }

    for (const item of items) {
      if (item.value === value) {
        treeViewItemNode = item;
        break;
      } else if (!treeViewItemNode) {
        treeViewItemNode = this.getTreeViewItemNode(item.subItems, value);
      }
    }

    return treeViewItemNode;
  }

  private updateParentList(
    items: Array<PoTreeViewItem>,
    level = 0,
    parentList = [],
    parentItem?: PoTreeViewItem
  ): Array<PoSelectOption> {
    items.forEach(item => {
      const { label, value } = item;

      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value });

      if (item.subItems) {
        this.updateParentList(item.subItems, ++level, parentList, item);
        --level;
      }

      level = !parentItem ? 0 : level;
    });

    return parentList;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tree-view-labs"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return a})();var ge=(()=>{class a{items=[{label:"my_project",value:1,expanded:true,subItems:[{label:"angular.json",value:121},{label:"browserslist",value:122,subItems:[{label:"e2e",value:1223,subItems:[{label:"protractor.conf.js",value:12231},{label:"src",value:12232},{label:"tsconfig.json",value:12233}]}]},{label:"karma.conf.js",value:123},{label:"node_modules",value:124},{label:"package.json",value:125},{label:"package-lock.json",value:126},{label:"README.md",value:127},{label:"src",value:128,subItems:[{label:"app",value:1281},{label:"assets",value:1282},{label:"environments",value:1283},{label:"favicon.ico",value:1284},{label:"index.html",value:1285},{label:"main.ts",value:1286},{label:"polyfills.ts",value:1287},{label:"styles.css",value:1288},{label:"test.ts",value:1289}]},{label:"tsconfig.app.json",value:129},{label:"tsconfig.json",value:130},{label:"tsconfig.spec.json",value:131},{label:"eslint.json",value:132}]}];static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure"]],standalone:false,decls:4,vars:1,consts:[["p-title","Angular folder structure"],[1,"po-mb-4","po-ml-1","po-text-color-neutral-dark-40"],[1,"po-lg-4","po-md-6",3,"p-items"]],template:function(o,i){o&1&&(Il(0,"po-page-default",0)(1,"p",1),Qx(2," This is the basic structure created using the Angular cli: "),og(),zl(3,"po-tree-view",2),og()),o&2&&(Lp(3),nw("p-items",i.items));},dependencies:[cNe,_Ne],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-folder-structure-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tree View - Folder Structure"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-folder-structure',
  templateUrl: 'sample-po-tree-view-folder-structure.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewFolderStructureComponent {
  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'my_project',
      value: 1,
      expanded: true,
      subItems: [
        { label: 'angular.json', value: 121 },
        {
          label: 'browserslist',
          value: 122,
          subItems: [
            {
              label: 'e2e',
              value: 1223,
              subItems: [
                { label: 'protractor.conf.js', value: 12231 },
                { label: 'src', value: 12232 },
                { label: 'tsconfig.json', value: 12233 }
              ]
            }
          ]
        },
        { label: 'karma.conf.js', value: 123 },
        { label: 'node_modules', value: 124 },
        { label: 'package.json', value: 125 },
        { label: 'package-lock.json', value: 126 },
        { label: 'README.md', value: 127 },
        {
          label: 'src',
          value: 128,
          subItems: [
            { label: 'app', value: 1281 },
            { label: 'assets', value: 1282 },
            { label: 'environments', value: 1283 },
            { label: 'favicon.ico', value: 1284 },
            { label: 'index.html', value: 1285 },
            { label: 'main.ts', value: 1286 },
            { label: 'polyfills.ts', value: 1287 },
            { label: 'styles.css', value: 1288 },
            { label: 'test.ts', value: 1289 }
          ]
        },
        { label: 'tsconfig.app.json', value: 129 },
        { label: 'tsconfig.json', value: 130 },
        { label: 'tsconfig.spec.json', value: 131 },
        { label: 'eslint.json', value: 132 }
      ]
    }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tree-view-folder-structure"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return a})();var Ae=["stepper"],fe=(()=>{class a{stepper;columnsItemsSelected=[{property:"item"}];confirmed=false;itemsListSelected=[];items=[{label:"Condiments",value:"condiments",subItems:[{label:"Extra virgin Olive",value:"extraVirginOlive"},{label:"Mayonnaise",value:"Mayonnaise"},{label:"Tomato ketchup",value:"tomatoKetchup"},{label:"Soda",value:"soda"}]},{label:"Drinks",value:"drinks",subItems:[{label:"Orange juice",value:"orangeJuice"},{label:"Grape juice",value:"grapeJuice"},{label:"Beer",value:"beer"},{label:"Wine",value:"wine"},{label:"Soda",value:"soda"}]},{label:"Grains",value:122,subItems:[{label:"Black bean",value:"blackBean"},{label:"Chickpeas",value:"chickpeas"},{label:"Lentil",value:"lentil"},{label:"Pea",value:"pea"}]},{label:"Personal hygiene",value:"personalHygiene",subItems:[{label:"Body wash",value:"bodyWash"},{label:"Deodorant",value:"deodorant"},{label:"Shampoo",value:"deodorant"},{label:"Conditioner",value:"conditioner"},{label:"Sunscreen lotion",value:"sunscreenLotion"}]},{label:"Frozen foods",value:"frozenFoods",subItems:[{label:"Hamburguer",value:"hamburguer"},{label:"Lasagna",value:"lasagna"},{label:"Sandwiches",value:"sandwiches"}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label});}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label});}checkOut(){this.confirmed=true,this.stepper.next();}isConfirmed(){return !!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item));}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket"]],viewQuery:function(o,i){if(o&1&&Gl(Ae,7),o&2){let m;co(m=lo())&&(i.stepper=m.first);}},standalone:false,decls:18,vars:6,consts:[["stepper",""],["p-title","Welcome to the PO Supermarket"],[1,"po-offset-md-3","po-offset-lg-2","po-offset-xl-2"],[1,"po-row"],["p-step-icons","",1,"po-md-9","po-lg-8","po-mb-1"],["p-label","Step 1"],[1,"po-font-subtitle"],["p-selectable","",3,"p-selected","p-unselected","p-items"],["p-label","Step 2",3,"p-can-active-next-step"],["p-primary-label","Confirm","p-title","Selected items",3,"p-primary-action","p-disabled"],["p-striped","",3,"p-columns","p-items","p-hide-table-search"],["p-label","Step 3"],[1,"po-row","po-font-display"],["p-icon","po-icon an an-check"]],template:function(o,i){o&1&&(Il(0,"po-page-default",1)(1,"div",2)(2,"div",3)(3,"po-stepper",4,0)(5,"po-step",5)(6,"p",6),Qx(7,"Please, select your items:"),og(),Il(8,"po-tree-view",7),ft("p-selected",function(c){return i.addItem(c)})("p-unselected",function(c){return i.removeItem(c)}),og()(),Il(9,"po-step",8)(10,"po-widget",9),ft("p-primary-action",function(){return i.checkOut()}),zl(11,"po-table",10),og()(),Il(12,"po-step",11)(13,"po-widget")(14,"div",12)(15,"p"),Qx(16,"Order dispatched"),og(),zl(17,"po-icon",13),og()()()()()()()),o&2&&(Lp(8),nw("p-items",i.items),Lp(),nw("p-can-active-next-step",i.isConfirmed.bind(i)),Lp(),nw("p-disabled",i.itemsListSelected.length<1),Lp(),nw("p-columns",i.columnsItemsSelected)("p-items",i.itemsListSelected)("p-hide-table-search",false));},dependencies:[lt,cNe,Fme,fNe,E3,_Ne,yNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-supermarket-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tree View - Supermarket"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Welcome to the PO Supermarket">
  <div class="po-offset-md-3 po-offset-lg-2 po-offset-xl-2">
    <div class="po-row">
      <po-stepper #stepper p-step-icons class="po-md-9 po-lg-8 po-mb-1">
        <po-step p-label="Step 1">
          <p class="po-font-subtitle">Please, select your items:</p>

          <po-tree-view
            p-selectable
            [p-items]="items"
            (p-selected)="addItem($event)"
            (p-unselected)="removeItem($event)"
          >
          </po-tree-view>
        </po-step>

        <po-step p-label="Step 2" [p-can-active-next-step]="isConfirmed.bind(this)">
          <po-widget
            p-primary-label="Confirm"
            p-title="Selected items"
            [p-disabled]="itemsListSelected.length < 1"
            (p-primary-action)="checkOut()"
          >
            <po-table
              p-striped
              [p-columns]="columnsItemsSelected"
              [p-items]="itemsListSelected"
              [p-hide-table-search]="false"
            >
            </po-table>
          </po-widget>
        </po-step>

        <po-step p-label="Step 3">
          <po-widget>
            <div class="po-row po-font-display">
              <p>Order dispatched</p>
              <po-icon p-icon="po-icon an an-check"></po-icon>
            </div>
          </po-widget>
        </po-step>
      </po-stepper>
    </div>
  </div>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoStepperComponent, PoTableColumn, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-supermarket',
  templateUrl: 'sample-po-tree-view-supermarket.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTreeViewSupermarketComponent {
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;

  columnsItemsSelected: Array<PoTableColumn> = [{ property: 'item' }];
  confirmed: boolean = false;
  itemsListSelected: Array<any> = [];

  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'Condiments',
      value: 'condiments',
      subItems: [
        { label: 'Extra virgin Olive', value: 'extraVirginOlive' },
        { label: 'Mayonnaise', value: 'Mayonnaise' },
        { label: 'Tomato ketchup', value: 'tomatoKetchup' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Drinks',
      value: 'drinks',
      subItems: [
        { label: 'Orange juice', value: 'orangeJuice' },
        { label: 'Grape juice', value: 'grapeJuice' },
        { label: 'Beer', value: 'beer' },
        { label: 'Wine', value: 'wine' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Grains',
      value: 122,
      subItems: [
        { label: 'Black bean', value: 'blackBean' },
        { label: 'Chickpeas', value: 'chickpeas' },
        { label: 'Lentil', value: 'lentil' },
        { label: 'Pea', value: 'pea' }
      ]
    },
    {
      label: 'Personal hygiene',
      value: 'personalHygiene',
      subItems: [
        { label: 'Body wash', value: 'bodyWash' },
        { label: 'Deodorant', value: 'deodorant' },
        { label: 'Shampoo', value: 'deodorant' },
        { label: 'Conditioner', value: 'conditioner' },
        { label: 'Sunscreen lotion', value: 'sunscreenLotion' }
      ]
    },
    {
      label: 'Frozen foods',
      value: 'frozenFoods',
      subItems: [
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Lasagna', value: 'lasagna' },
        { label: 'Sandwiches', value: 'sandwiches' }
      ]
    }
  ];

  addItem(seletectedItem) {
    if (seletectedItem.subItems) {
      seletectedItem.subItems.forEach(itemSelected => {
        if (!this.itemsListSelected.some(item => item.item === itemSelected.label)) {
          this.itemsListSelected.push({ item: itemSelected.label });
        }
      });
    } else {
      if (!this.itemsListSelected.some(item => item.item === seletectedItem.label)) {
        this.itemsListSelected.push({ item: seletectedItem.label });
      }
    }
  }

  checkOut() {
    this.confirmed = true;
    this.stepper.next();
  }

  isConfirmed() {
    return !!this.confirmed;
  }

  removeItem(unseletectedItem) {
    if (unseletectedItem.subItems) {
      const removedValues = unseletectedItem.subItems.map(item => item.label);
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => !removedValues.includes(itemSelected.item)
      );
    } else {
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => unseletectedItem.label !== itemSelected.item
      );
    }
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tree-view-supermarket"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,fe],encapsulation:2})}return a})();var Ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tree-view-doc"]],standalone:false,decls:358,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoTreeViewItem>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","null"]],template:function(o,i){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTreeViewModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-tree-view"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoTreeViewComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),og(),Il(18,"p"),Qx(19,"Nele \xE9 poss\xEDvel navegar entre os itens atrav\xE9s da tecla "),Il(20,"em"),Qx(21,"tab"),og(),Qx(22,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),Il(23,"em"),Qx(24,"enter"),og(),Qx(25," e "),Il(26,"em"),Qx(27,"space"),og(),Qx(28,"."),og(),Il(29,"p"),Qx(30,"Al\xE9m da navega\xE7\xE3o, o componente possibilita tamb\xE9m a sele\xE7\xE3o dos itens do primeiro ao \xFAltimo n\xEDvel, tanto de forma parcial como completa."),og(),Il(31,"p"),Qx(32,"O componente tamb\xE9m possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. "),og()(),Il(33,"div",6)(34,"h4",7),Qx(35,"Seletor"),og(),Il(36,"pre",8),Qx(37,`<po-tree-view
    (p-collapsed)="EventEmitter"
    p-components-size="string"
    (p-expanded)="EventEmitter"
    p-items="Array<PoTreeViewItem>"
    p-max-level="number"
    p-selectable="boolean"
    (p-selected)="EventEmitter"
    p-single-select="boolean"
    (p-unselected)="EventEmitter" >
</po-tree-view>
`),og()(),Il(38,"h4",9),Qx(39,"Propriedades"),og(),Il(40,"table",10)(41,"tr",11)(42,"th",12),Qx(43,"Nome"),og(),Il(44,"th",12),Qx(45,"Tipo"),og(),Il(46,"th",12),Qx(47,"Padr\xE3o"),og(),Il(48,"th",12),Qx(49,"Descri\xE7\xE3o"),og()(),Il(50,"tr",13)(51,"td",14)(52,"div",15)(53,"span",16),Qx(54," (p-collapsed)"),zl(55,"br"),og()()(),Il(56,"td",17)(57,"code",18),Qx(58,"EventEmitter"),og()(),Il(59,"td",19),Qx(60,"-"),og(),Il(61,"td",20)(62,"em")(63,"strong"),Qx(64,"(opcional)"),og()(),Il(65,"p"),Qx(66,"A\xE7\xE3o que ser\xE1 disparada ao colapsar um item."),og(),Il(67,"blockquote")(68,"p"),Qx(69,"Como par\xE2metro o componente envia o item colapsado."),og()()()(),Il(70,"tr",13)(71,"td",14)(72,"div",21)(73,"span",22),Qx(74," p-components-size"),zl(75,"br"),og()()(),Il(76,"td",17)(77,"code",23),Qx(78,"string"),og()(),Il(79,"td",19)(80,"p")(81,"code"),Qx(82,"medium"),og()()(),Il(83,"td",20)(84,"em")(85,"strong"),Qx(86,"(opcional)"),og()(),Il(87,"p"),Qx(88,"Define o tamanho dos componentes de formul\xE1rio:"),og(),Il(89,"ul")(90,"li")(91,"code"),Qx(92,"small"),og(),Qx(93,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(94,"li")(95,"code"),Qx(96,"medium"),og(),Qx(97,": aplica a medida medium de cada componente."),og()(),Il(98,"blockquote")(99,"p"),Qx(100,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(101,"code"),Qx(102,"medium"),og(),Qx(103,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(104,"a",24),Qx(105,"po-theme"),og(),Qx(106,"."),og()()()(),Il(107,"tr",13)(108,"td",14)(109,"div",15)(110,"span",16),Qx(111," (p-expanded)"),zl(112,"br"),og()()(),Il(113,"td",17)(114,"code",18),Qx(115,"EventEmitter"),og()(),Il(116,"td",19),Qx(117,"-"),og(),Il(118,"td",20)(119,"em")(120,"strong"),Qx(121,"(opcional)"),og()(),Il(122,"p"),Qx(123,"A\xE7\xE3o que ser\xE1 disparada ao expandir um item."),og(),Il(124,"blockquote")(125,"p"),Qx(126,"Como par\xE2metro o componente envia o item expandido."),og()()()(),Il(127,"tr",13)(128,"td",14)(129,"div",21)(130,"span",22),Qx(131," p-items"),zl(132,"br"),og()()(),Il(133,"td",17)(134,"code",25),Qx(135,"Array<PoTreeViewItem>"),og()(),Il(136,"td",19),Qx(137,"-"),og(),Il(138,"td",20)(139,"p"),Qx(140,"Lista de itens do tipo "),Il(141,"code"),Qx(142,"PoTreeViewItem"),og(),Qx(143," que ser\xE1 renderizada pelo componente."),og()()(),Il(144,"tr",13)(145,"td",14)(146,"div",21)(147,"span",22),Qx(148," p-max-level"),zl(149,"br"),og()()(),Il(150,"td",17)(151,"code",26),Qx(152,"number"),og()(),Il(153,"td",19)(154,"p"),Qx(155,"4"),og()(),Il(156,"td",20)(157,"em")(158,"strong"),Qx(159,"(opcional)"),og()(),Il(160,"p"),Qx(161,"Define o m\xE1ximo de n\xEDveis para o tree-view."),og(),Il(162,"blockquote")(163,"p"),Qx(164,"O valor padr\xE3o \xE9 4"),og()()()(),Il(165,"tr",13)(166,"td",14)(167,"div",21)(168,"span",22),Qx(169," p-selectable"),zl(170,"br"),og()()(),Il(171,"td",17)(172,"code",27),Qx(173,"boolean"),og()(),Il(174,"td",19)(175,"p"),Qx(176,"false"),og()(),Il(177,"td",20)(178,"em")(179,"strong"),Qx(180,"(opcional)"),og()(),Il(181,"p"),Qx(182,"Habilita uma caixa de sele\xE7\xE3o para selecionar e/ou desmarcar um item da lista."),og()()(),Il(183,"tr",13)(184,"td",14)(185,"div",15)(186,"span",16),Qx(187," (p-selected)"),zl(188,"br"),og()()(),Il(189,"td",17)(190,"code",18),Qx(191,"EventEmitter"),og()(),Il(192,"td",19),Qx(193,"-"),og(),Il(194,"td",20)(195,"em")(196,"strong"),Qx(197,"(opcional)"),og()(),Il(198,"p"),Qx(199,"A\xE7\xE3o que ser\xE1 disparada ao selecionar um item."),og(),Il(200,"blockquote")(201,"p"),Qx(202,"Como par\xE2metro o componente envia o item selecionado."),og()()()(),Il(203,"tr",13)(204,"td",14)(205,"div",21)(206,"span",22),Qx(207," p-single-select"),zl(208,"br"),og()()(),Il(209,"td",17)(210,"code",27),Qx(211,"boolean"),og()(),Il(212,"td",19)(213,"p"),Qx(214,"false"),og()(),Il(215,"td",20)(216,"em")(217,"strong"),Qx(218,"(opcional)"),og()(),Il(219,"p"),Qx(220,"Habilita a sele\xE7\xE3o para item \xFAnico atr\xE1ves de po-radio."),og()()(),Il(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),Qx(225," (p-unselected)"),zl(226,"br"),og()()(),Il(227,"td",17)(228,"code",18),Qx(229,"EventEmitter"),og()(),Il(230,"td",19),Qx(231,"-"),og(),Il(232,"td",20)(233,"em")(234,"strong"),Qx(235,"(opcional)"),og()(),Il(236,"p"),Qx(237,"A\xE7\xE3o que ser\xE1 disparada ao desfazer a sele\xE7\xE3o de um item."),og(),Il(238,"blockquote")(239,"p"),Qx(240,"Como par\xE2metro o componente envia o item que foi desmarcado."),og()()()()(),Il(241,"h3"),Qx(242,"Interfaces"),og(),Il(243,"h4",28)(244,"code",5),Qx(245,"PoTreeViewItem"),og()(),Il(246,"div",2)(247,"p"),Qx(248,"Interface para defini\xE7\xE3o dos itens do componente "),Il(249,"code"),Qx(250,"po-tree-view"),og(),Qx(251,"."),og()(),Il(252,"h4",9),Qx(253,"Propriedades"),og(),Il(254,"table",10)(255,"tr",11)(256,"th",12),Qx(257,"Nome"),og(),Il(258,"th",12),Qx(259,"Tipo"),og(),Il(260,"th",12),Qx(261,"Descri\xE7\xE3o"),og()(),Il(262,"tr",13)(263,"td",14)(264,"div",21)(265,"span",22),Qx(266," expanded"),zl(267,"br"),og()()(),Il(268,"td",17)(269,"code",27),Qx(270,"boolean"),og()(),Il(271,"td",20)(272,"em")(273,"strong"),Qx(274,"(opcional)"),og()(),Il(275,"p"),Qx(276,"Expande o item."),og()()(),Il(277,"tr",13)(278,"td",14)(279,"div",21)(280,"span",22),Qx(281," isSelectable"),zl(282,"br"),og()()(),Il(283,"td",17)(284,"code",27),Qx(285,"boolean "),og(),Il(286,"code",29),Qx(287," null"),og()(),Il(288,"td",20)(289,"em")(290,"strong"),Qx(291,"(opcional)"),og()(),Il(292,"p"),Qx(293,"Permite ativar/desativar a sele\xE7\xE3o do item"),og()()(),Il(294,"tr",13)(295,"td",14)(296,"div",21)(297,"span",22),Qx(298," label"),zl(299,"br"),og()()(),Il(300,"td",17)(301,"code",23),Qx(302,"string"),og()(),Il(303,"td",20)(304,"p"),Qx(305,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),og()()(),Il(306,"tr",13)(307,"td",14)(308,"div",21)(309,"span",22),Qx(310," selected"),zl(311,"br"),og()()(),Il(312,"td",17)(313,"code",27),Qx(314,"boolean "),og(),Il(315,"code",29),Qx(316," null"),og()(),Il(317,"td",20)(318,"em")(319,"strong"),Qx(320,"(opcional)"),og()(),Il(321,"p"),Qx(322,"Marca o item como selecionado."),og(),Il(323,"blockquote")(324,"p"),Qx(325,"Caso o item que conter "),Il(326,"code"),Qx(327,"subItems"),og(),Qx(328," for selecionado, os seus itens filhos ser\xE3o tamb\xE9m selecionados."),og()()()(),Il(329,"tr",13)(330,"td",14)(331,"div",21)(332,"span",22),Qx(333," subItems"),zl(334,"br"),og()()(),Il(335,"td",17)(336,"code",25),Qx(337,"Array<PoTreeViewItem>"),og()(),Il(338,"td",20)(339,"em")(340,"strong"),Qx(341,"(opcional)"),og()(),Il(342,"p"),Qx(343,"Lista de itens do pr\xF3ximo n\xEDvel, e assim consecutivamente at\xE9 que se atinja o quarto n\xEDvel."),og()()(),Il(344,"tr",13)(345,"td",14)(346,"div",21)(347,"span",22),Qx(348," value"),zl(349,"br"),og()()(),Il(350,"td",17)(351,"code",23),Qx(352,"string "),og(),Il(353,"code",26),Qx(354," number"),og()(),Il(355,"td",20)(356,"p"),Qx(357,"Valor do item que poder\xE1 ser utilizado como refer\xEAncia para sua identifica\xE7\xE3o."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tree View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-tree-view-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-tree-view-basic-view")(6,"sample-po-tree-view-labs-view")(7,"sample-po-tree-view-folder-structure-view")(8,"sample-po-tree-view-supermarket-view"),og()()()),o&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ve,Se,we,Ee,Ce],encapsulation:2})}return a})();var We=[{path:"",component:Te}],Pe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[uL.forChild(We),uL]})}return a})();var gt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,Pe]})}return a})();export{gt as DocPoTreeViewModule};