import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,r as r$1,bA as uS,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,cn as a3,ba as yNe,aq as lx,at as ux,a3 as cNe,aD as Xy,aT as eN,aE as Qy,aA as Sx}from'./main-QSTLMRDK.js';var xe=()=>({label:"How to install PO",url:"/guides/how-install"}),ve=i=>[i],se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:false,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&zl(0,"po-dropdown",0),a&2&&nw("p-actions",uN(2,ve,lN(1,xe)));},dependencies:[uS],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dropdown Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dropdown-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return i})();var ce=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:false,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&zl(0,"po-dropdown",0),a&2&&nw("p-actions",o.actions);},dependencies:[uS],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dropdown Subitems"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-subitems',
  templateUrl: './sample-po-dropdown-subitems.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSubitemsComponent {
  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    { label: 'New Cancellation', action: () => console.log('New Cancellation'), type: 'danger' },
    {
      label: 'Reports',
      subItems: [
        { label: 'Monthly Sales', action: () => console.log('Monthly Sales'), icon: 'an an-chart-line-up' },
        { label: 'Annual Sales', action: () => console.log('Annual Sales'), icon: 'an an-chart-line-up' }
      ]
    },
    {
      label: 'Settings',
      subItems: [
        { label: 'Users', action: () => console.log('Users') },
        {
          label: 'System',
          subItems: [
            { label: 'Backup', action: () => console.log('Backup') },
            { label: 'Logs', action: () => console.log('Logs') }
          ]
        }
      ]
    }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dropdown-subitems"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_e,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return i})();var be=(()=>{class i{poNotification=f(Yp);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(r){let a=r$1({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return !r||!Array.isArray(r)||r.forEach(m=>{let{label:u}=m;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o);}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}showAction(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:false,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=Dx();Il(0,"div",2),zl(1,"po-dropdown",3),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"po-input",4),ww("ngModelChange",function(p){return Xy(m),eN(o.action.label,p)||(o.action.label=p),Qy(p)}),og(),QA(),Il(6,"po-input",5),ww("ngModelChange",function(p){return Xy(m),eN(o.action.action,p)||(o.action.action=p),Qy(p)}),og(),QA(),Il(7,"po-input",6),ww("ngModelChange",function(p){return Xy(m),eN(o.action.url,p)||(o.action.url=p),Qy(p)}),og(),QA(),Il(8,"po-select",7),ww("ngModelChange",function(p){return Xy(m),eN(o.action.type,p)||(o.action.type=p),Qy(p)}),og(),QA(),Il(9,"po-select",8),ww("ngModelChange",function(p){return Xy(m),eN(o.action.icon,p)||(o.action.icon=p),Qy(p)}),og(),QA(),Il(10,"po-select",9),ww("ngModelChange",function(p){return Xy(m),eN(o.action.parent,p)||(o.action.parent=p),Qy(p)}),og(),QA(),Il(11,"po-checkbox-group",10),ww("ngModelChange",function(p){return Xy(m),eN(o.action,p)||(o.action=p),Qy(p)}),og(),QA(),Il(12,"div",2)(13,"po-button",11),ft("p-click",function(){return o.addAction(o.action)}),og()()(),zl(14,"po-divider"),Il(15,"form",null,1)(17,"div",2)(18,"po-input",12),ww("ngModelChange",function(p){return Xy(m),eN(o.label,p)||(o.label=p),Qy(p)}),og(),QA(),og(),Il(19,"po-checkbox-group",13),ww("ngModelChange",function(p){return Xy(m),eN(o.properties,p)||(o.properties=p),Qy(p)}),og(),QA(),Il(20,"po-radio-group",14),ww("ngModelChange",function(p){return Xy(m),eN(o.size,p)||(o.size=p),Qy(p)}),og(),QA(),Il(21,"div",2)(22,"po-button",15),ft("p-click",function(){return o.restore()}),og()()();}if(a&2){let m=Ax(4);Lp(),nw("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),Lp(4),Ew("ngModel",o.action.label),e0(),Lp(),Ew("ngModel",o.action.action),e0(),Lp(),Ew("ngModel",o.action.url),e0(),Lp(),Ew("ngModel",o.action.type),nw("p-options",o.typeOptions),e0(),Lp(),Ew("ngModel",o.action.icon),nw("p-options",o.iconOptions),e0(),Lp(),Ew("ngModel",o.action.parent),nw("p-options",o.parentList),e0(),Lp(),Ew("ngModel",o.action),nw("p-options",o.actionOptions),e0(),Lp(2),nw("p-disabled",m.form.invalid),Lp(5),Ew("ngModel",o.label),e0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,uS,C3,O3,Dde,qhe],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dropdown Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
    [p-size]="size"
  >
  </po-dropdown>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>
  </div>
  <po-checkbox-group
    class="po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDropdownAction,
  PoRadioGroupOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoDropdownAction & { parent?: string };
  actions: Array<PoDropdownAction>;
  parentList: Array<PoSelectOption>;
  label: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoDropdownAction & { parent?: string }) {
    const newAction: PoDropdownAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  private getActionNode(items: Array<PoDropdownAction>, value: string): PoDropdownAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoDropdownAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  restore() {
    this.actions = [];
    this.parentList = [];
    this.label = 'PO Dropdown';
    this.size = 'medium';
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    } as any;
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dropdown-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return i})();function Le(i,Ce){if(i&1&&(Il(0,"div",0),zl(1,"po-avatar",2),Il(2,"div",3)(3,"span",4),Qx(4),og(),Il(5,"span",5),Qx(6),og(),Il(7,"span",5),Qx(8),og()()(),Il(9,"div",0),zl(10,"po-dropdown",6),og()),i&2){let r=Sx();Lp(),nw("p-src",r.userAvatar),Lp(3),dg(" ",r.currentFriend.name," "),Lp(2),dg(" ",r.currentFriend.mutualFriends," mutual friends "),Lp(2),dg(" Resides in ",r.currentFriend.reside," "),Lp(2),nw("p-actions",r.answers);}}function Ne(i,Ce){i&1&&(Il(0,"div",0)(1,"span",7),Qx(2,"Congratulations TOTVS, no more requests!"),og()());}var Se=(()=>{class i{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"po-widget",1),lx(2,Le,11,5)(3,Ne,3,0,"div",0),og()()),a&2&&(Lp(2),ux(o.currentFriend?2:3));},dependencies:[a3,uS,yNe],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dropdown - Social Network"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dropdown-social-network"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ie,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return i})();var fe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:false,decls:631,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-dropdown."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoDropdownComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-dropdown"),og(),Qx(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),og(),Il(18,"blockquote")(19,"p"),Qx(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),Il(21,"code"),Qx(22,"RouterModule"),og(),Qx(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),og()(),Il(24,"pre")(25,"code"),Qx(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
`),og()(),Il(27,"blockquote")(28,"p"),Qx(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Il(30,"a",6),Qx(31,"/Configurando as rotas do po-menu"),og(),Qx(32,"."),og()(),Il(33,"h4"),Qx(34,"Tokens customiz\xE1veis"),og(),Il(35,"p"),Qx(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(37,"blockquote")(38,"p"),Qx(39,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(40,"a",7),Qx(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(42,"."),og()(),Il(43,"table")(44,"thead")(45,"tr")(46,"th"),Qx(47,"Propriedade"),og(),Il(48,"th"),Qx(49,"Descri\xE7\xE3o"),og(),Il(50,"th"),Qx(51,"Valor Padr\xE3o"),og()()(),Il(52,"tbody")(53,"tr")(54,"td")(55,"strong"),Qx(56,"Default Values"),og()(),zl(57,"td")(58,"td"),og(),Il(59,"tr")(60,"td")(61,"code"),Qx(62,"--font-family"),og()(),Il(63,"td"),Qx(64,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(65,"td")(66,"code"),Qx(67,"var(--font-family-theme)"),og()()(),Il(68,"tr")(69,"td")(70,"code"),Qx(71,"--font-size"),og()(),Il(72,"td"),Qx(73,"Tamanho da fonte"),og(),Il(74,"td")(75,"code"),Qx(76,"var(--font-size-default)"),og()()(),Il(77,"tr")(78,"td")(79,"code"),Qx(80,"--font-weight"),og()(),Il(81,"td"),Qx(82,"Peso da fonte"),og(),Il(83,"td")(84,"code"),Qx(85,"var(--font-weight-bold)"),og()()(),Il(86,"tr")(87,"td")(88,"code"),Qx(89,"--line-height"),og()(),Il(90,"td"),Qx(91,"Tamanho da label"),og(),Il(92,"td")(93,"code"),Qx(94,"var(--line-height-none)"),og()()(),Il(95,"tr")(96,"td")(97,"code"),Qx(98,"--color"),og()(),Il(99,"td"),Qx(100,"Cor principal do dropdown"),og(),Il(101,"td")(102,"code"),Qx(103,"var(--color-action-default)"),og()()(),Il(104,"tr")(105,"td")(106,"code"),Qx(107,"--border-radius"),og()(),Il(108,"td"),Qx(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(110,"td")(111,"code"),Qx(112,"var(--border-radius-md)"),og()()(),Il(113,"tr")(114,"td")(115,"code"),Qx(116,"--border-width"),og()(),Il(117,"td"),Qx(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(119,"td")(120,"code"),Qx(121,"var(--border-width-md)"),og()()(),Il(122,"tr")(123,"td")(124,"code"),Qx(125,"--padding"),og()(),Il(126,"td"),Qx(127,"Preenchimento"),og(),Il(128,"td")(129,"code"),Qx(130,"0 1em"),og()()(),Il(131,"tr")(132,"td")(133,"strong"),Qx(134,"Hover"),og()(),zl(135,"td")(136,"td"),og(),Il(137,"tr")(138,"td")(139,"code"),Qx(140,"--color-hover"),og()(),Il(141,"td"),Qx(142,"Cor principal no estado hover"),og(),Il(143,"td")(144,"code"),Qx(145,"var(--color-brand-01-darkest)"),og()()(),Il(146,"tr")(147,"td")(148,"code"),Qx(149,"--background-hover"),og()(),Il(150,"td"),Qx(151,"Cor de background no estado hover"),og(),Il(152,"td")(153,"code"),Qx(154,"var(--color-brand-01-lighter)"),og()()(),Il(155,"tr")(156,"td")(157,"strong"),Qx(158,"Focused"),og()(),zl(159,"td")(160,"td"),og(),Il(161,"tr")(162,"td")(163,"code"),Qx(164,"--outline-color-focused"),og(),Qx(165," \xA0"),og(),Il(166,"td"),Qx(167,"Cor do outline do estado de focus"),og(),Il(168,"td")(169,"code"),Qx(170,"var(--color-action-focus)"),og()()(),Il(171,"tr")(172,"td")(173,"strong"),Qx(174,"Pressed"),og()(),zl(175,"td")(176,"td"),og(),Il(177,"tr")(178,"td")(179,"code"),Qx(180,"--background-pressed"),og(),Qx(181," \xA0"),og(),Il(182,"td"),Qx(183,"Cor de background no estado de pressionado\xA0"),og(),Il(184,"td")(185,"code"),Qx(186,"var(--color-brand-01-light)"),og()()(),Il(187,"tr")(188,"td")(189,"strong"),Qx(190,"Disabled"),og()(),zl(191,"td")(192,"td"),og(),Il(193,"tr")(194,"td")(195,"code"),Qx(196,"--color-disabled"),og()(),Il(197,"td"),Qx(198,"Cor principal no estado disabled"),og(),Il(199,"td")(200,"code"),Qx(201,"var(--color-action-disabled)"),og()()()()()(),Il(202,"div",8)(203,"h4",9),Qx(204,"Seletor"),og(),Il(205,"pre",10),Qx(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    p-size="string" >
</po-dropdown>
`),og()(),Il(207,"h4",11),Qx(208,"Propriedades"),og(),Il(209,"table",12)(210,"tr",13)(211,"th",14),Qx(212,"Nome"),og(),Il(213,"th",14),Qx(214,"Tipo"),og(),Il(215,"th",14),Qx(216,"Padr\xE3o"),og(),Il(217,"th",14),Qx(218,"Descri\xE7\xE3o"),og()(),Il(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),Qx(223," p-actions"),zl(224,"br"),og()()(),Il(225,"td",19)(226,"code",20),Qx(227,"PoDropdownAction[]"),og()(),Il(228,"td",21),Qx(229,"-"),og(),Il(230,"td",22)(231,"p"),Qx(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Il(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),Qx(237," p-disabled"),zl(238,"br"),og()()(),Il(239,"td",19)(240,"code",23),Qx(241,"boolean"),og()(),Il(242,"td",21)(243,"p")(244,"code"),Qx(245,"false"),og()()(),Il(246,"td",22)(247,"em")(248,"strong"),Qx(249,"(opcional)"),og()(),Il(250,"p"),Qx(251,"Desabilita o campo."),og()()(),Il(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),Qx(256," p-label"),zl(257,"br"),og()()(),Il(258,"td",19)(259,"code",24),Qx(260,"string"),og()(),Il(261,"td",21),Qx(262,"-"),og(),Il(263,"td",22)(264,"p"),Qx(265,"Adiciona um r\xF3tulo ao "),Il(266,"code"),Qx(267,"dropdown"),og(),Qx(268,"."),og()()(),Il(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),Qx(273," p-position"),zl(274,"br"),og()()(),Il(275,"td",19)(276,"code",24),Qx(277,"string"),og()(),Il(278,"td",21)(279,"p")(280,"code"),Qx(281,"bottom-left"),og()()(),Il(282,"td",22)(283,"em")(284,"strong"),Qx(285,"(opcional)"),og()(),Il(286,"p"),Qx(287,"Define a posi\xE7\xE3o preferencial de abertura do popup do dropdown em rela\xE7\xE3o ao bot\xE3o."),og(),Il(288,"p"),Qx(289,"Posi\xE7\xF5es v\xE1lidas:"),og(),Il(290,"ul")(291,"li")(292,"code"),Qx(293,"right"),og(),Qx(294,": No lado direito."),og(),Il(295,"li")(296,"code"),Qx(297,"right-bottom"),og(),Qx(298,": No lado direito inferior."),og(),Il(299,"li")(300,"code"),Qx(301,"right-top"),og(),Qx(302,": No lado direito superior."),og(),Il(303,"li")(304,"code"),Qx(305,"bottom"),og(),Qx(306,": Abaixo."),og(),Il(307,"li")(308,"code"),Qx(309,"bottom-left"),og(),Qx(310,": Abaixo e \xE0 esquerda (padr\xE3o)."),og(),Il(311,"li")(312,"code"),Qx(313,"bottom-right"),og(),Qx(314,": Abaixo e \xE0 direita."),og(),Il(315,"li")(316,"code"),Qx(317,"left"),og(),Qx(318,": No lado esquerdo."),og(),Il(319,"li")(320,"code"),Qx(321,"left-top"),og(),Qx(322,": No lado esquerdo superior."),og(),Il(323,"li")(324,"code"),Qx(325,"left-bottom"),og(),Qx(326,": No lado esquerdo inferior."),og(),Il(327,"li")(328,"code"),Qx(329,"top"),og(),Qx(330,": Acima."),og(),Il(331,"li")(332,"code"),Qx(333,"top-right"),og(),Qx(334,": Acima e \xE0 direita."),og(),Il(335,"li")(336,"code"),Qx(337,"top-left"),og(),Qx(338,": Acima e \xE0 esquerda."),og()(),Il(339,"blockquote")(340,"p"),Qx(341,"O popup ser\xE1 rotacionado automaticamente caso n\xE3o caiba na posi\xE7\xE3o definida."),og()()()(),Il(342,"tr",15)(343,"td",16)(344,"div",17)(345,"span",18),Qx(346," p-size"),zl(347,"br"),og()()(),Il(348,"td",19)(349,"code",24),Qx(350,"string"),og()(),Il(351,"td",21)(352,"p")(353,"code"),Qx(354,"medium"),og()()(),Il(355,"td",22)(356,"em")(357,"strong"),Qx(358,"(opcional)"),og()(),Il(359,"p"),Qx(360,"Define o tamanho do componente:"),og(),Il(361,"ul")(362,"li")(363,"code"),Qx(364,"small"),og(),Qx(365,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(366,"li")(367,"code"),Qx(368,"medium"),og(),Qx(369,": altura do button como 44px."),og()(),Il(370,"blockquote")(371,"p"),Qx(372,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(373,"code"),Qx(374,"medium"),og(),Qx(375,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(376,"a",25),Qx(377,"po-theme"),og(),Qx(378,"."),og()()()()(),Il(379,"h3"),Qx(380,"Interfaces"),og(),Il(381,"h4",26)(382,"code",5),Qx(383,"PoDropdownAction"),og()(),Il(384,"div",2)(385,"p"),Qx(386,"Interface para as a\xE7\xF5es do componente "),Il(387,"code"),Qx(388,"po-dropdown"),og(),Qx(389,"."),og()(),Il(390,"h4",11),Qx(391,"Propriedades"),og(),Il(392,"table",12)(393,"tr",13)(394,"th",14),Qx(395,"Nome"),og(),Il(396,"th",14),Qx(397,"Tipo"),og(),Il(398,"th",14),Qx(399,"Descri\xE7\xE3o"),og()(),Il(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),Qx(404," action"),zl(405,"br"),og()()(),Il(406,"td",19)(407,"code",27),Qx(408,"Function"),og()(),Il(409,"td",22)(410,"em")(411,"strong"),Qx(412,"(opcional)"),og()(),Il(413,"p"),Qx(414,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(415,"p"),Qx(416,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(417,"code"),Qx(418,"subItems"),og(),Qx(419,"."),og(),Il(420,"blockquote")(421,"p"),Qx(422,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(423,"em"),Qx(424,"bind"),og(),Qx(425,`:
`),Il(426,"code"),Qx(427,"action: this.myFunction.bind(this)"),og()()()()(),Il(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),Qx(432," disabled"),zl(433,"br"),og()()(),Il(434,"td",19)(435,"code",23),Qx(436,"boolean "),og(),Il(437,"code",27),Qx(438," Function"),og()(),Il(439,"td",22)(440,"em")(441,"strong"),Qx(442,"(opcional)"),og()(),Il(443,"p"),Qx(444,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),Qx(449," icon"),zl(450,"br"),og()()(),Il(451,"td",19)(452,"code",24),Qx(453,"string "),og(),Il(454,"code",28),Qx(455," TemplateRef<void>"),og()(),Il(456,"td",22)(457,"em")(458,"strong"),Qx(459,"(opcional)"),og()(),Il(460,"p"),Qx(461,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(462,"p"),Qx(463,"Aceita \xEDcones da "),Il(464,"a",29),Qx(465,"Biblioteca de \xEDcones"),og(),Qx(466,`, fontes externas (ex: Font Awesome)
ou um `),Il(467,"code"),Qx(468,"TemplateRef"),og(),Qx(469," para \xEDcones customizados."),og(),Il(470,"pre")(471,"code"),Qx(472,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(473,"tr",15)(474,"td",16)(475,"div",17)(476,"span",18),Qx(477," label"),zl(478,"br"),og()()(),Il(479,"td",19)(480,"code",24),Qx(481,"string"),og()(),Il(482,"td",22)(483,"p"),Qx(484,"R\xF3tulo da a\xE7\xE3o."),og(),Il(485,"p"),Qx(486,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(487,"code"),Qx(488,"subItems"),og(),Qx(489,"."),og()()(),Il(490,"tr",15)(491,"td",16)(492,"div",17)(493,"span",18),Qx(494," selected"),zl(495,"br"),og()()(),Il(496,"td",19)(497,"code",23),Qx(498,"boolean"),og()(),Il(499,"td",22)(500,"em")(501,"strong"),Qx(502,"(opcional)"),og()(),Il(503,"p"),Qx(504,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(505,"tr",15)(506,"td",16)(507,"div",17)(508,"span",18),Qx(509," separator"),zl(510,"br"),og()()(),Il(511,"td",19)(512,"code",23),Qx(513,"boolean"),og()(),Il(514,"td",22)(515,"em")(516,"strong"),Qx(517,"(opcional)"),og()(),Il(518,"p"),Qx(519,"Atribui uma linha separadora acima do item."),og()()(),Il(520,"tr",15)(521,"td",16)(522,"div",17)(523,"span",18),Qx(524," subItems"),zl(525,"br"),og()()(),Il(526,"td",19)(527,"code",30),Qx(528,"Array<PoPopupAction>"),og()(),Il(529,"td",22)(530,"em")(531,"strong"),Qx(532,"(opcional)"),og()(),Il(533,"p"),Qx(534,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(535,"p"),Qx(536,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(537,"blockquote")(538,"p"),Qx(539,"As propriedades "),Il(540,"code"),Qx(541,"disabled"),og(),Qx(542,", "),Il(543,"code"),Qx(544,"type"),og(),Qx(545," e "),Il(546,"code"),Qx(547,"visible"),og(),Qx(548," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(549,"blockquote")(550,"p"),Qx(551,"Quando "),Il(552,"code"),Qx(553,"url"),og(),Qx(554," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(555,"blockquote")(556,"p"),Qx(557,"Em subn\xEDveis aninhados, o "),Il(558,"code"),Qx(559,"icon"),og(),Qx(560," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(561,"tr",15)(562,"td",16)(563,"div",17)(564,"span",18),Qx(565," type"),zl(566,"br"),og()()(),Il(567,"td",19)(568,"code",24),Qx(569,"string"),og()(),Il(570,"td",22)(571,"em")(572,"strong"),Qx(573,"(opcional)"),og()(),Il(574,"p"),Qx(575,"Define a cor do item."),og(),Il(576,"p"),Qx(577,"Valores v\xE1lidos:"),og(),Il(578,"ul")(579,"li")(580,"code"),Qx(581,"default"),og()(),Il(582,"li")(583,"code"),Qx(584,"danger"),og()()()()(),Il(585,"tr",15)(586,"td",16)(587,"div",17)(588,"span",18),Qx(589," url"),zl(590,"br"),og()()(),Il(591,"td",19)(592,"code",24),Qx(593,"string"),og()(),Il(594,"td",22)(595,"em")(596,"strong"),Qx(597,"(opcional)"),og()(),Il(598,"p"),Qx(599,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(600,"p"),Qx(601,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(602,"code"),Qx(603,"url"),og(),Qx(604," \xE9 informada em um agrupador, o clique "),Il(605,"strong"),Qx(606,"n\xE3o abrir\xE1 os subitens"),og(),Qx(607,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(608,"blockquote")(609,"p"),Qx(610,"Quando informada, tem prioridade sobre a propriedade "),Il(611,"code"),Qx(612,"action"),og(),Qx(613,"."),og()()()(),Il(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),Qx(618," visible"),zl(619,"br"),og()()(),Il(620,"td",19)(621,"code",23),Qx(622,"boolean "),og(),Il(623,"code",27),Qx(624," Function"),og()(),Il(625,"td",22)(626,"em")(627,"strong"),Qx(628,"(opcional)"),og()(),Il(629,"p"),Qx(630,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-dropdown-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,me,ue,ge,he,fe],encapsulation:2})}return i})();var qe=[{path:"",component:Ee}],we=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[uL.forChild(qe),uL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,we]})}return i})();export{vt as DocPoDropdownModule};