import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,r as r$1,bA as pS,H as Wl,Q as nw,bs as fN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aJ as Hhe,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,cn as o3,ba as fNe,aq as dx,at as fx,a3 as rNe,aD as Ky,aT as nN,aE as Xy,aA as Mx}from'./main-WP3NAV7C.js';var xe=()=>({label:"How to install PO",url:"/guides/how-install"}),ve=i=>[i],se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:false,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Wl(0,"po-dropdown",0),a&2&&nw("p-actions",fN(2,ve,dN(1,xe)));},dependencies:[pS],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dropdown Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return i})();var ce=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:false,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Wl(0,"po-dropdown",0),a&2&&nw("p-actions",o.actions);},dependencies:[pS],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dropdown Subitems"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-subitems"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_e,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return i})();var be=(()=>{class i{poNotification=f(Yp);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(r){let a=r$1({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return !r||!Array.isArray(r)||r.forEach(m=>{let{label:u}=m;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o);}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}showAction(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:false,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=wx();Sl(0,"div",2),Wl(1,"po-dropdown",3),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"po-input",4),ww("ngModelChange",function(p){return Ky(m),nN(o.action.label,p)||(o.action.label=p),Xy(p)}),og(),e0(),Sl(6,"po-input",5),ww("ngModelChange",function(p){return Ky(m),nN(o.action.action,p)||(o.action.action=p),Xy(p)}),og(),e0(),Sl(7,"po-input",6),ww("ngModelChange",function(p){return Ky(m),nN(o.action.url,p)||(o.action.url=p),Xy(p)}),og(),e0(),Sl(8,"po-select",7),ww("ngModelChange",function(p){return Ky(m),nN(o.action.type,p)||(o.action.type=p),Xy(p)}),og(),e0(),Sl(9,"po-select",8),ww("ngModelChange",function(p){return Ky(m),nN(o.action.icon,p)||(o.action.icon=p),Xy(p)}),og(),e0(),Sl(10,"po-select",9),ww("ngModelChange",function(p){return Ky(m),nN(o.action.parent,p)||(o.action.parent=p),Xy(p)}),og(),e0(),Sl(11,"po-checkbox-group",10),ww("ngModelChange",function(p){return Ky(m),nN(o.action,p)||(o.action=p),Xy(p)}),og(),e0(),Sl(12,"div",2)(13,"po-button",11),ft("p-click",function(){return o.addAction(o.action)}),og()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"div",2)(18,"po-input",12),ww("ngModelChange",function(p){return Ky(m),nN(o.label,p)||(o.label=p),Xy(p)}),og(),e0(),og(),Sl(19,"po-checkbox-group",13),ww("ngModelChange",function(p){return Ky(m),nN(o.properties,p)||(o.properties=p),Xy(p)}),og(),e0(),Sl(20,"po-radio-group",14),ww("ngModelChange",function(p){return Ky(m),nN(o.size,p)||(o.size=p),Xy(p)}),og(),e0(),Sl(21,"div",2)(22,"po-button",15),ft("p-click",function(){return o.restore()}),og()()();}if(a&2){let m=Nx(4);Lp(),nw("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),Lp(4),Ew("ngModel",o.action.label),n0(),Lp(),Ew("ngModel",o.action.action),n0(),Lp(),Ew("ngModel",o.action.url),n0(),Lp(),Ew("ngModel",o.action.type),nw("p-options",o.typeOptions),n0(),Lp(),Ew("ngModel",o.action.icon),nw("p-options",o.iconOptions),n0(),Lp(),Ew("ngModel",o.action.parent),nw("p-options",o.parentList),n0(),Lp(),Ew("ngModel",o.action),nw("p-options",o.actionOptions),n0(),Lp(2),nw("p-disabled",m.form.invalid),Lp(5),Ew("ngModel",o.label),n0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),n0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,pS,b3,L3,wde,Hhe],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dropdown Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return i})();function Le(i,Ce){if(i&1&&(Sl(0,"div",0),Wl(1,"po-avatar",2),Sl(2,"div",3)(3,"span",4),eN(4),og(),Sl(5,"span",5),eN(6),og(),Sl(7,"span",5),eN(8),og()()(),Sl(9,"div",0),Wl(10,"po-dropdown",6),og()),i&2){let r=Mx();Lp(),nw("p-src",r.userAvatar),Lp(3),dg(" ",r.currentFriend.name," "),Lp(2),dg(" ",r.currentFriend.mutualFriends," mutual friends "),Lp(2),dg(" Resides in ",r.currentFriend.reside," "),Lp(2),nw("p-actions",r.answers);}}function Ne(i,Ce){i&1&&(Sl(0,"div",0)(1,"span",7),eN(2,"Congratulations TOTVS, no more requests!"),og()());}var Se=(()=>{class i{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"po-widget",1),dx(2,Le,11,5)(3,Ne,3,0,"div",0),og()()),a&2&&(Lp(2),fx(o.currentFriend?2:3));},dependencies:[o3,pS,fNe],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dropdown - Social Network"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-social-network"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ie,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return i})();var fe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:false,decls:631,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-dropdown."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoDropdownComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-dropdown"),og(),eN(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),og(),Sl(18,"blockquote")(19,"p"),eN(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),Sl(21,"code"),eN(22,"RouterModule"),og(),eN(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),og()(),Sl(24,"pre")(25,"code"),eN(26,`import { RouterModule } from '@angular/router';

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
`),og()(),Sl(27,"blockquote")(28,"p"),eN(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Sl(30,"a",6),eN(31,"/Configurando as rotas do po-menu"),og(),eN(32,"."),og()(),Sl(33,"h4"),eN(34,"Tokens customiz\xE1veis"),og(),Sl(35,"p"),eN(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(37,"blockquote")(38,"p"),eN(39,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(40,"a",7),eN(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(42,"."),og()(),Sl(43,"table")(44,"thead")(45,"tr")(46,"th"),eN(47,"Propriedade"),og(),Sl(48,"th"),eN(49,"Descri\xE7\xE3o"),og(),Sl(50,"th"),eN(51,"Valor Padr\xE3o"),og()()(),Sl(52,"tbody")(53,"tr")(54,"td")(55,"strong"),eN(56,"Default Values"),og()(),Wl(57,"td")(58,"td"),og(),Sl(59,"tr")(60,"td")(61,"code"),eN(62,"--font-family"),og()(),Sl(63,"td"),eN(64,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(65,"td")(66,"code"),eN(67,"var(--font-family-theme)"),og()()(),Sl(68,"tr")(69,"td")(70,"code"),eN(71,"--font-size"),og()(),Sl(72,"td"),eN(73,"Tamanho da fonte"),og(),Sl(74,"td")(75,"code"),eN(76,"var(--font-size-default)"),og()()(),Sl(77,"tr")(78,"td")(79,"code"),eN(80,"--font-weight"),og()(),Sl(81,"td"),eN(82,"Peso da fonte"),og(),Sl(83,"td")(84,"code"),eN(85,"var(--font-weight-bold)"),og()()(),Sl(86,"tr")(87,"td")(88,"code"),eN(89,"--line-height"),og()(),Sl(90,"td"),eN(91,"Tamanho da label"),og(),Sl(92,"td")(93,"code"),eN(94,"var(--line-height-none)"),og()()(),Sl(95,"tr")(96,"td")(97,"code"),eN(98,"--color"),og()(),Sl(99,"td"),eN(100,"Cor principal do dropdown"),og(),Sl(101,"td")(102,"code"),eN(103,"var(--color-action-default)"),og()()(),Sl(104,"tr")(105,"td")(106,"code"),eN(107,"--border-radius"),og()(),Sl(108,"td"),eN(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(110,"td")(111,"code"),eN(112,"var(--border-radius-md)"),og()()(),Sl(113,"tr")(114,"td")(115,"code"),eN(116,"--border-width"),og()(),Sl(117,"td"),eN(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(119,"td")(120,"code"),eN(121,"var(--border-width-md)"),og()()(),Sl(122,"tr")(123,"td")(124,"code"),eN(125,"--padding"),og()(),Sl(126,"td"),eN(127,"Preenchimento"),og(),Sl(128,"td")(129,"code"),eN(130,"0 1em"),og()()(),Sl(131,"tr")(132,"td")(133,"strong"),eN(134,"Hover"),og()(),Wl(135,"td")(136,"td"),og(),Sl(137,"tr")(138,"td")(139,"code"),eN(140,"--color-hover"),og()(),Sl(141,"td"),eN(142,"Cor principal no estado hover"),og(),Sl(143,"td")(144,"code"),eN(145,"var(--color-brand-01-darkest)"),og()()(),Sl(146,"tr")(147,"td")(148,"code"),eN(149,"--background-hover"),og()(),Sl(150,"td"),eN(151,"Cor de background no estado hover"),og(),Sl(152,"td")(153,"code"),eN(154,"var(--color-brand-01-lighter)"),og()()(),Sl(155,"tr")(156,"td")(157,"strong"),eN(158,"Focused"),og()(),Wl(159,"td")(160,"td"),og(),Sl(161,"tr")(162,"td")(163,"code"),eN(164,"--outline-color-focused"),og(),eN(165," \xA0"),og(),Sl(166,"td"),eN(167,"Cor do outline do estado de focus"),og(),Sl(168,"td")(169,"code"),eN(170,"var(--color-action-focus)"),og()()(),Sl(171,"tr")(172,"td")(173,"strong"),eN(174,"Pressed"),og()(),Wl(175,"td")(176,"td"),og(),Sl(177,"tr")(178,"td")(179,"code"),eN(180,"--background-pressed"),og(),eN(181," \xA0"),og(),Sl(182,"td"),eN(183,"Cor de background no estado de pressionado\xA0"),og(),Sl(184,"td")(185,"code"),eN(186,"var(--color-brand-01-light)"),og()()(),Sl(187,"tr")(188,"td")(189,"strong"),eN(190,"Disabled"),og()(),Wl(191,"td")(192,"td"),og(),Sl(193,"tr")(194,"td")(195,"code"),eN(196,"--color-disabled"),og()(),Sl(197,"td"),eN(198,"Cor principal no estado disabled"),og(),Sl(199,"td")(200,"code"),eN(201,"var(--color-action-disabled)"),og()()()()()(),Sl(202,"div",8)(203,"h4",9),eN(204,"Seletor"),og(),Sl(205,"pre",10),eN(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    p-size="string" >
</po-dropdown>
`),og()(),Sl(207,"h4",11),eN(208,"Propriedades"),og(),Sl(209,"table",12)(210,"tr",13)(211,"th",14),eN(212,"Nome"),og(),Sl(213,"th",14),eN(214,"Tipo"),og(),Sl(215,"th",14),eN(216,"Padr\xE3o"),og(),Sl(217,"th",14),eN(218,"Descri\xE7\xE3o"),og()(),Sl(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),eN(223," p-actions"),Wl(224,"br"),og()()(),Sl(225,"td",19)(226,"code",20),eN(227,"PoDropdownAction[]"),og()(),Sl(228,"td",21),eN(229,"-"),og(),Sl(230,"td",22)(231,"p"),eN(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Sl(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),eN(237," p-disabled"),Wl(238,"br"),og()()(),Sl(239,"td",19)(240,"code",23),eN(241,"boolean"),og()(),Sl(242,"td",21)(243,"p")(244,"code"),eN(245,"false"),og()()(),Sl(246,"td",22)(247,"em")(248,"strong"),eN(249,"(opcional)"),og()(),Sl(250,"p"),eN(251,"Desabilita o campo."),og()()(),Sl(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),eN(256," p-label"),Wl(257,"br"),og()()(),Sl(258,"td",19)(259,"code",24),eN(260,"string"),og()(),Sl(261,"td",21),eN(262,"-"),og(),Sl(263,"td",22)(264,"p"),eN(265,"Adiciona um r\xF3tulo ao "),Sl(266,"code"),eN(267,"dropdown"),og(),eN(268,"."),og()()(),Sl(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),eN(273," p-position"),Wl(274,"br"),og()()(),Sl(275,"td",19)(276,"code",24),eN(277,"string"),og()(),Sl(278,"td",21)(279,"p")(280,"code"),eN(281,"bottom-left"),og()()(),Sl(282,"td",22)(283,"em")(284,"strong"),eN(285,"(opcional)"),og()(),Sl(286,"p"),eN(287,"Define a posi\xE7\xE3o preferencial de abertura do popup do dropdown em rela\xE7\xE3o ao bot\xE3o."),og(),Sl(288,"p"),eN(289,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(290,"ul")(291,"li")(292,"code"),eN(293,"right"),og(),eN(294,": No lado direito."),og(),Sl(295,"li")(296,"code"),eN(297,"right-bottom"),og(),eN(298,": No lado direito inferior."),og(),Sl(299,"li")(300,"code"),eN(301,"right-top"),og(),eN(302,": No lado direito superior."),og(),Sl(303,"li")(304,"code"),eN(305,"bottom"),og(),eN(306,": Abaixo."),og(),Sl(307,"li")(308,"code"),eN(309,"bottom-left"),og(),eN(310,": Abaixo e \xE0 esquerda (padr\xE3o)."),og(),Sl(311,"li")(312,"code"),eN(313,"bottom-right"),og(),eN(314,": Abaixo e \xE0 direita."),og(),Sl(315,"li")(316,"code"),eN(317,"left"),og(),eN(318,": No lado esquerdo."),og(),Sl(319,"li")(320,"code"),eN(321,"left-top"),og(),eN(322,": No lado esquerdo superior."),og(),Sl(323,"li")(324,"code"),eN(325,"left-bottom"),og(),eN(326,": No lado esquerdo inferior."),og(),Sl(327,"li")(328,"code"),eN(329,"top"),og(),eN(330,": Acima."),og(),Sl(331,"li")(332,"code"),eN(333,"top-right"),og(),eN(334,": Acima e \xE0 direita."),og(),Sl(335,"li")(336,"code"),eN(337,"top-left"),og(),eN(338,": Acima e \xE0 esquerda."),og()(),Sl(339,"blockquote")(340,"p"),eN(341,"O popup ser\xE1 rotacionado automaticamente caso n\xE3o caiba na posi\xE7\xE3o definida."),og()()()(),Sl(342,"tr",15)(343,"td",16)(344,"div",17)(345,"span",18),eN(346," p-size"),Wl(347,"br"),og()()(),Sl(348,"td",19)(349,"code",24),eN(350,"string"),og()(),Sl(351,"td",21)(352,"p")(353,"code"),eN(354,"medium"),og()()(),Sl(355,"td",22)(356,"em")(357,"strong"),eN(358,"(opcional)"),og()(),Sl(359,"p"),eN(360,"Define o tamanho do componente:"),og(),Sl(361,"ul")(362,"li")(363,"code"),eN(364,"small"),og(),eN(365,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(366,"li")(367,"code"),eN(368,"medium"),og(),eN(369,": altura do button como 44px."),og()(),Sl(370,"blockquote")(371,"p"),eN(372,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(373,"code"),eN(374,"medium"),og(),eN(375,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(376,"a",25),eN(377,"po-theme"),og(),eN(378,"."),og()()()()(),Sl(379,"h3"),eN(380,"Interfaces"),og(),Sl(381,"h4",26)(382,"code",5),eN(383,"PoDropdownAction"),og()(),Sl(384,"div",2)(385,"p"),eN(386,"Interface para as a\xE7\xF5es do componente "),Sl(387,"code"),eN(388,"po-dropdown"),og(),eN(389,"."),og()(),Sl(390,"h4",11),eN(391,"Propriedades"),og(),Sl(392,"table",12)(393,"tr",13)(394,"th",14),eN(395,"Nome"),og(),Sl(396,"th",14),eN(397,"Tipo"),og(),Sl(398,"th",14),eN(399,"Descri\xE7\xE3o"),og()(),Sl(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),eN(404," action"),Wl(405,"br"),og()()(),Sl(406,"td",19)(407,"code",27),eN(408,"Function"),og()(),Sl(409,"td",22)(410,"em")(411,"strong"),eN(412,"(opcional)"),og()(),Sl(413,"p"),eN(414,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(415,"p"),eN(416,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(417,"code"),eN(418,"subItems"),og(),eN(419,"."),og(),Sl(420,"blockquote")(421,"p"),eN(422,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(423,"em"),eN(424,"bind"),og(),eN(425,`:
`),Sl(426,"code"),eN(427,"action: this.myFunction.bind(this)"),og()()()()(),Sl(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),eN(432," disabled"),Wl(433,"br"),og()()(),Sl(434,"td",19)(435,"code",23),eN(436,"boolean "),og(),Sl(437,"code",27),eN(438," Function"),og()(),Sl(439,"td",22)(440,"em")(441,"strong"),eN(442,"(opcional)"),og()(),Sl(443,"p"),eN(444,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),eN(449," icon"),Wl(450,"br"),og()()(),Sl(451,"td",19)(452,"code",24),eN(453,"string "),og(),Sl(454,"code",28),eN(455," TemplateRef<void>"),og()(),Sl(456,"td",22)(457,"em")(458,"strong"),eN(459,"(opcional)"),og()(),Sl(460,"p"),eN(461,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(462,"p"),eN(463,"Aceita \xEDcones da "),Sl(464,"a",29),eN(465,"Biblioteca de \xEDcones"),og(),eN(466,`, fontes externas (ex: Font Awesome)
ou um `),Sl(467,"code"),eN(468,"TemplateRef"),og(),eN(469," para \xEDcones customizados."),og(),Sl(470,"pre")(471,"code"),eN(472,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(473,"tr",15)(474,"td",16)(475,"div",17)(476,"span",18),eN(477," label"),Wl(478,"br"),og()()(),Sl(479,"td",19)(480,"code",24),eN(481,"string"),og()(),Sl(482,"td",22)(483,"p"),eN(484,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(485,"p"),eN(486,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(487,"code"),eN(488,"subItems"),og(),eN(489,"."),og()()(),Sl(490,"tr",15)(491,"td",16)(492,"div",17)(493,"span",18),eN(494," selected"),Wl(495,"br"),og()()(),Sl(496,"td",19)(497,"code",23),eN(498,"boolean"),og()(),Sl(499,"td",22)(500,"em")(501,"strong"),eN(502,"(opcional)"),og()(),Sl(503,"p"),eN(504,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(505,"tr",15)(506,"td",16)(507,"div",17)(508,"span",18),eN(509," separator"),Wl(510,"br"),og()()(),Sl(511,"td",19)(512,"code",23),eN(513,"boolean"),og()(),Sl(514,"td",22)(515,"em")(516,"strong"),eN(517,"(opcional)"),og()(),Sl(518,"p"),eN(519,"Atribui uma linha separadora acima do item."),og()()(),Sl(520,"tr",15)(521,"td",16)(522,"div",17)(523,"span",18),eN(524," subItems"),Wl(525,"br"),og()()(),Sl(526,"td",19)(527,"code",30),eN(528,"Array<PoPopupAction>"),og()(),Sl(529,"td",22)(530,"em")(531,"strong"),eN(532,"(opcional)"),og()(),Sl(533,"p"),eN(534,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(535,"p"),eN(536,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(537,"blockquote")(538,"p"),eN(539,"As propriedades "),Sl(540,"code"),eN(541,"disabled"),og(),eN(542,", "),Sl(543,"code"),eN(544,"type"),og(),eN(545," e "),Sl(546,"code"),eN(547,"visible"),og(),eN(548," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(549,"blockquote")(550,"p"),eN(551,"Quando "),Sl(552,"code"),eN(553,"url"),og(),eN(554," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(555,"blockquote")(556,"p"),eN(557,"Em subn\xEDveis aninhados, o "),Sl(558,"code"),eN(559,"icon"),og(),eN(560," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(561,"tr",15)(562,"td",16)(563,"div",17)(564,"span",18),eN(565," type"),Wl(566,"br"),og()()(),Sl(567,"td",19)(568,"code",24),eN(569,"string"),og()(),Sl(570,"td",22)(571,"em")(572,"strong"),eN(573,"(opcional)"),og()(),Sl(574,"p"),eN(575,"Define a cor do item."),og(),Sl(576,"p"),eN(577,"Valores v\xE1lidos:"),og(),Sl(578,"ul")(579,"li")(580,"code"),eN(581,"default"),og()(),Sl(582,"li")(583,"code"),eN(584,"danger"),og()()()()(),Sl(585,"tr",15)(586,"td",16)(587,"div",17)(588,"span",18),eN(589," url"),Wl(590,"br"),og()()(),Sl(591,"td",19)(592,"code",24),eN(593,"string"),og()(),Sl(594,"td",22)(595,"em")(596,"strong"),eN(597,"(opcional)"),og()(),Sl(598,"p"),eN(599,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(600,"p"),eN(601,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(602,"code"),eN(603,"url"),og(),eN(604," \xE9 informada em um agrupador, o clique "),Sl(605,"strong"),eN(606,"n\xE3o abrir\xE1 os subitens"),og(),eN(607,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(608,"blockquote")(609,"p"),eN(610,"Quando informada, tem prioridade sobre a propriedade "),Sl(611,"code"),eN(612,"action"),og(),eN(613,"."),og()()()(),Sl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),eN(618," visible"),Wl(619,"br"),og()()(),Sl(620,"td",19)(621,"code",23),eN(622,"boolean "),og(),Sl(623,"code",27),eN(624," Function"),og()(),Sl(625,"td",22)(626,"em")(627,"strong"),eN(628,"(opcional)"),og()(),Sl(629,"p"),eN(630,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-dropdown-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,me,ue,ge,he,fe],encapsulation:2})}return i})();var qe=[{path:"",component:Ee}],we=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[hL.forChild(qe),hL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,we]})}return i})();export{vt as DocPoDropdownModule};