import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,a as r$1,bA as dS,F as Wl,O as rw,bs as gN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aJ as Whe,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,cn as o3,ba as vNe,aq as px,at as gx,a3 as sNe,aD as Ky,aT as oN,aE as Xy,aA as xx}from'./main-TVDUJ47Y.js';var xe=()=>({label:"How to install PO",url:"/guides/how-install"}),ve=i=>[i],se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:false,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Wl(0,"po-dropdown",0),a&2&&rw("p-actions",gN(2,ve,pN(1,xe)));},dependencies:[dS],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dropdown Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,De,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:false,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&Wl(0,"po-dropdown",0),a&2&&rw("p-actions",o.actions);},dependencies:[dS],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dropdown Subitems"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-subitems"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,_e,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ce],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{poNotification=f(Yp);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(r){let a=r$1({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return !r||!Array.isArray(r)||r.forEach(m=>{let{label:u}=m;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o);}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}showAction(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:false,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=Ix();Sl(0,"div",2),Wl(1,"po-dropdown",3),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"po-input",4),Cw("ngModelChange",function(p){return Ky(m),oN(o.action.label,p)||(o.action.label=p),Xy(p)}),og(),n0(),Sl(6,"po-input",5),Cw("ngModelChange",function(p){return Ky(m),oN(o.action.action,p)||(o.action.action=p),Xy(p)}),og(),n0(),Sl(7,"po-input",6),Cw("ngModelChange",function(p){return Ky(m),oN(o.action.url,p)||(o.action.url=p),Xy(p)}),og(),n0(),Sl(8,"po-select",7),Cw("ngModelChange",function(p){return Ky(m),oN(o.action.type,p)||(o.action.type=p),Xy(p)}),og(),n0(),Sl(9,"po-select",8),Cw("ngModelChange",function(p){return Ky(m),oN(o.action.icon,p)||(o.action.icon=p),Xy(p)}),og(),n0(),Sl(10,"po-select",9),Cw("ngModelChange",function(p){return Ky(m),oN(o.action.parent,p)||(o.action.parent=p),Xy(p)}),og(),n0(),Sl(11,"po-checkbox-group",10),Cw("ngModelChange",function(p){return Ky(m),oN(o.action,p)||(o.action=p),Xy(p)}),og(),n0(),Sl(12,"div",2)(13,"po-button",11),ft("p-click",function(){return o.addAction(o.action)}),og()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"div",2)(18,"po-input",12),Cw("ngModelChange",function(p){return Ky(m),oN(o.label,p)||(o.label=p),Xy(p)}),og(),n0(),og(),Sl(19,"po-checkbox-group",13),Cw("ngModelChange",function(p){return Ky(m),oN(o.properties,p)||(o.properties=p),Xy(p)}),og(),n0(),Sl(20,"po-radio-group",14),Cw("ngModelChange",function(p){return Ky(m),oN(o.size,p)||(o.size=p),Xy(p)}),og(),n0(),Sl(21,"div",2)(22,"po-button",15),ft("p-click",function(){return o.restore()}),og()()();}if(a&2){let m=kx(4);Lp(),rw("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),Lp(4),ww("ngModel",o.action.label),i0(),Lp(),ww("ngModel",o.action.action),i0(),Lp(),ww("ngModel",o.action.url),i0(),Lp(),ww("ngModel",o.action.type),rw("p-options",o.typeOptions),i0(),Lp(),ww("ngModel",o.action.icon),rw("p-options",o.iconOptions),i0(),Lp(),ww("ngModel",o.action.parent),rw("p-options",o.parentList),i0(),Lp(),ww("ngModel",o.action),rw("p-options",o.actionOptions),i0(),Lp(2),rw("p-disabled",m.form.invalid),Lp(5),ww("ngModel",o.label),i0(),Lp(),ww("ngModel",o.properties),rw("p-options",o.propertiesOptions),i0(),Lp(),ww("ngModel",o.size),rw("p-options",o.sizeOptions),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,dS,b3,L3,Tde,Whe],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dropdown Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Te,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return i})();function Le(i,Ce){if(i&1&&(Sl(0,"div",0),Wl(1,"po-avatar",2),Sl(2,"div",3)(3,"span",4),rN(4),og(),Sl(5,"span",5),rN(6),og(),Sl(7,"span",5),rN(8),og()()(),Sl(9,"div",0),Wl(10,"po-dropdown",6),og()),i&2){let r=xx();Lp(),rw("p-src",r.userAvatar),Lp(3),dg(" ",r.currentFriend.name," "),Lp(2),dg(" ",r.currentFriend.mutualFriends," mutual friends "),Lp(2),dg(" Resides in ",r.currentFriend.reside," "),Lp(2),rw("p-actions",r.answers);}}function Ne(i,Ce){i&1&&(Sl(0,"div",0)(1,"span",7),rN(2,"Congratulations TOTVS, no more requests!"),og()());}var Se=(()=>{class i{poNotification=f(Yp);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0);}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend);}setCurrentFriend(r){this.currentFriend=this.newFriends[r];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:false,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"po-widget",1),px(2,Le,11,5)(3,Ne,3,0,"div",0),og()()),a&2&&(Lp(2),gx(o.currentFriend?2:3));},dependencies:[o3,dS,vNe],encapsulation:2,changeDetection:1})}return i})();var Ie=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dropdown - Social Network"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dropdown-social-network"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ie,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Se],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:false,decls:631,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-dropdown."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoDropdownComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-dropdown"),og(),rN(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),og(),Sl(18,"blockquote")(19,"p"),rN(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),Sl(21,"code"),rN(22,"RouterModule"),og(),rN(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),og()(),Sl(24,"pre")(25,"code"),rN(26,`import { RouterModule } from '@angular/router';

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
`),og()(),Sl(27,"blockquote")(28,"p"),rN(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),Sl(30,"a",6),rN(31,"/Configurando as rotas do po-menu"),og(),rN(32,"."),og()(),Sl(33,"h4"),rN(34,"Tokens customiz\xE1veis"),og(),Sl(35,"p"),rN(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(37,"blockquote")(38,"p"),rN(39,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(40,"a",7),rN(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(42,"."),og()(),Sl(43,"table")(44,"thead")(45,"tr")(46,"th"),rN(47,"Propriedade"),og(),Sl(48,"th"),rN(49,"Descri\xE7\xE3o"),og(),Sl(50,"th"),rN(51,"Valor Padr\xE3o"),og()()(),Sl(52,"tbody")(53,"tr")(54,"td")(55,"strong"),rN(56,"Default Values"),og()(),Wl(57,"td")(58,"td"),og(),Sl(59,"tr")(60,"td")(61,"code"),rN(62,"--font-family"),og()(),Sl(63,"td"),rN(64,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(65,"td")(66,"code"),rN(67,"var(--font-family-theme)"),og()()(),Sl(68,"tr")(69,"td")(70,"code"),rN(71,"--font-size"),og()(),Sl(72,"td"),rN(73,"Tamanho da fonte"),og(),Sl(74,"td")(75,"code"),rN(76,"var(--font-size-default)"),og()()(),Sl(77,"tr")(78,"td")(79,"code"),rN(80,"--font-weight"),og()(),Sl(81,"td"),rN(82,"Peso da fonte"),og(),Sl(83,"td")(84,"code"),rN(85,"var(--font-weight-bold)"),og()()(),Sl(86,"tr")(87,"td")(88,"code"),rN(89,"--line-height"),og()(),Sl(90,"td"),rN(91,"Tamanho da label"),og(),Sl(92,"td")(93,"code"),rN(94,"var(--line-height-none)"),og()()(),Sl(95,"tr")(96,"td")(97,"code"),rN(98,"--color"),og()(),Sl(99,"td"),rN(100,"Cor principal do dropdown"),og(),Sl(101,"td")(102,"code"),rN(103,"var(--color-action-default)"),og()()(),Sl(104,"tr")(105,"td")(106,"code"),rN(107,"--border-radius"),og()(),Sl(108,"td"),rN(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(110,"td")(111,"code"),rN(112,"var(--border-radius-md)"),og()()(),Sl(113,"tr")(114,"td")(115,"code"),rN(116,"--border-width"),og()(),Sl(117,"td"),rN(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(119,"td")(120,"code"),rN(121,"var(--border-width-md)"),og()()(),Sl(122,"tr")(123,"td")(124,"code"),rN(125,"--padding"),og()(),Sl(126,"td"),rN(127,"Preenchimento"),og(),Sl(128,"td")(129,"code"),rN(130,"0 1em"),og()()(),Sl(131,"tr")(132,"td")(133,"strong"),rN(134,"Hover"),og()(),Wl(135,"td")(136,"td"),og(),Sl(137,"tr")(138,"td")(139,"code"),rN(140,"--color-hover"),og()(),Sl(141,"td"),rN(142,"Cor principal no estado hover"),og(),Sl(143,"td")(144,"code"),rN(145,"var(--color-brand-01-darkest)"),og()()(),Sl(146,"tr")(147,"td")(148,"code"),rN(149,"--background-hover"),og()(),Sl(150,"td"),rN(151,"Cor de background no estado hover"),og(),Sl(152,"td")(153,"code"),rN(154,"var(--color-brand-01-lighter)"),og()()(),Sl(155,"tr")(156,"td")(157,"strong"),rN(158,"Focused"),og()(),Wl(159,"td")(160,"td"),og(),Sl(161,"tr")(162,"td")(163,"code"),rN(164,"--outline-color-focused"),og(),rN(165," \xA0"),og(),Sl(166,"td"),rN(167,"Cor do outline do estado de focus"),og(),Sl(168,"td")(169,"code"),rN(170,"var(--color-action-focus)"),og()()(),Sl(171,"tr")(172,"td")(173,"strong"),rN(174,"Pressed"),og()(),Wl(175,"td")(176,"td"),og(),Sl(177,"tr")(178,"td")(179,"code"),rN(180,"--background-pressed"),og(),rN(181," \xA0"),og(),Sl(182,"td"),rN(183,"Cor de background no estado de pressionado\xA0"),og(),Sl(184,"td")(185,"code"),rN(186,"var(--color-brand-01-light)"),og()()(),Sl(187,"tr")(188,"td")(189,"strong"),rN(190,"Disabled"),og()(),Wl(191,"td")(192,"td"),og(),Sl(193,"tr")(194,"td")(195,"code"),rN(196,"--color-disabled"),og()(),Sl(197,"td"),rN(198,"Cor principal no estado disabled"),og(),Sl(199,"td")(200,"code"),rN(201,"var(--color-action-disabled)"),og()()()()()(),Sl(202,"div",8)(203,"h4",9),rN(204,"Seletor"),og(),Sl(205,"pre",10),rN(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    p-size="string" >
</po-dropdown>
`),og()(),Sl(207,"h4",11),rN(208,"Propriedades"),og(),Sl(209,"table",12)(210,"tr",13)(211,"th",14),rN(212,"Nome"),og(),Sl(213,"th",14),rN(214,"Tipo"),og(),Sl(215,"th",14),rN(216,"Padr\xE3o"),og(),Sl(217,"th",14),rN(218,"Descri\xE7\xE3o"),og()(),Sl(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),rN(223," p-actions"),Wl(224,"br"),og()()(),Sl(225,"td",19)(226,"code",20),rN(227,"PoDropdownAction[]"),og()(),Sl(228,"td",21),rN(229,"-"),og(),Sl(230,"td",22)(231,"p"),rN(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Sl(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),rN(237," p-disabled"),Wl(238,"br"),og()()(),Sl(239,"td",19)(240,"code",23),rN(241,"boolean"),og()(),Sl(242,"td",21)(243,"p")(244,"code"),rN(245,"false"),og()()(),Sl(246,"td",22)(247,"em")(248,"strong"),rN(249,"(opcional)"),og()(),Sl(250,"p"),rN(251,"Desabilita o campo."),og()()(),Sl(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),rN(256," p-label"),Wl(257,"br"),og()()(),Sl(258,"td",19)(259,"code",24),rN(260,"string"),og()(),Sl(261,"td",21),rN(262,"-"),og(),Sl(263,"td",22)(264,"p"),rN(265,"Adiciona um r\xF3tulo ao "),Sl(266,"code"),rN(267,"dropdown"),og(),rN(268,"."),og()()(),Sl(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),rN(273," p-position"),Wl(274,"br"),og()()(),Sl(275,"td",19)(276,"code",24),rN(277,"string"),og()(),Sl(278,"td",21)(279,"p")(280,"code"),rN(281,"bottom-left"),og()()(),Sl(282,"td",22)(283,"em")(284,"strong"),rN(285,"(opcional)"),og()(),Sl(286,"p"),rN(287,"Define a posi\xE7\xE3o preferencial de abertura do popup do dropdown em rela\xE7\xE3o ao bot\xE3o."),og(),Sl(288,"p"),rN(289,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(290,"ul")(291,"li")(292,"code"),rN(293,"right"),og(),rN(294,": No lado direito."),og(),Sl(295,"li")(296,"code"),rN(297,"right-bottom"),og(),rN(298,": No lado direito inferior."),og(),Sl(299,"li")(300,"code"),rN(301,"right-top"),og(),rN(302,": No lado direito superior."),og(),Sl(303,"li")(304,"code"),rN(305,"bottom"),og(),rN(306,": Abaixo."),og(),Sl(307,"li")(308,"code"),rN(309,"bottom-left"),og(),rN(310,": Abaixo e \xE0 esquerda (padr\xE3o)."),og(),Sl(311,"li")(312,"code"),rN(313,"bottom-right"),og(),rN(314,": Abaixo e \xE0 direita."),og(),Sl(315,"li")(316,"code"),rN(317,"left"),og(),rN(318,": No lado esquerdo."),og(),Sl(319,"li")(320,"code"),rN(321,"left-top"),og(),rN(322,": No lado esquerdo superior."),og(),Sl(323,"li")(324,"code"),rN(325,"left-bottom"),og(),rN(326,": No lado esquerdo inferior."),og(),Sl(327,"li")(328,"code"),rN(329,"top"),og(),rN(330,": Acima."),og(),Sl(331,"li")(332,"code"),rN(333,"top-right"),og(),rN(334,": Acima e \xE0 direita."),og(),Sl(335,"li")(336,"code"),rN(337,"top-left"),og(),rN(338,": Acima e \xE0 esquerda."),og()(),Sl(339,"blockquote")(340,"p"),rN(341,"O popup ser\xE1 rotacionado automaticamente caso n\xE3o caiba na posi\xE7\xE3o definida."),og()()()(),Sl(342,"tr",15)(343,"td",16)(344,"div",17)(345,"span",18),rN(346," p-size"),Wl(347,"br"),og()()(),Sl(348,"td",19)(349,"code",24),rN(350,"string"),og()(),Sl(351,"td",21)(352,"p")(353,"code"),rN(354,"medium"),og()()(),Sl(355,"td",22)(356,"em")(357,"strong"),rN(358,"(opcional)"),og()(),Sl(359,"p"),rN(360,"Define o tamanho do componente:"),og(),Sl(361,"ul")(362,"li")(363,"code"),rN(364,"small"),og(),rN(365,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(366,"li")(367,"code"),rN(368,"medium"),og(),rN(369,": altura do button como 44px."),og()(),Sl(370,"blockquote")(371,"p"),rN(372,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(373,"code"),rN(374,"medium"),og(),rN(375,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(376,"a",25),rN(377,"po-theme"),og(),rN(378,"."),og()()()()(),Sl(379,"h3"),rN(380,"Interfaces"),og(),Sl(381,"h4",26)(382,"code",5),rN(383,"PoDropdownAction"),og()(),Sl(384,"div",2)(385,"p"),rN(386,"Interface para as a\xE7\xF5es do componente "),Sl(387,"code"),rN(388,"po-dropdown"),og(),rN(389,"."),og()(),Sl(390,"h4",11),rN(391,"Propriedades"),og(),Sl(392,"table",12)(393,"tr",13)(394,"th",14),rN(395,"Nome"),og(),Sl(396,"th",14),rN(397,"Tipo"),og(),Sl(398,"th",14),rN(399,"Descri\xE7\xE3o"),og()(),Sl(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),rN(404," action"),Wl(405,"br"),og()()(),Sl(406,"td",19)(407,"code",27),rN(408,"Function"),og()(),Sl(409,"td",22)(410,"em")(411,"strong"),rN(412,"(opcional)"),og()(),Sl(413,"p"),rN(414,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(415,"p"),rN(416,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(417,"code"),rN(418,"subItems"),og(),rN(419,"."),og(),Sl(420,"blockquote")(421,"p"),rN(422,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(423,"em"),rN(424,"bind"),og(),rN(425,`:
`),Sl(426,"code"),rN(427,"action: this.myFunction.bind(this)"),og()()()()(),Sl(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),rN(432," disabled"),Wl(433,"br"),og()()(),Sl(434,"td",19)(435,"code",23),rN(436,"boolean "),og(),Sl(437,"code",27),rN(438," Function"),og()(),Sl(439,"td",22)(440,"em")(441,"strong"),rN(442,"(opcional)"),og()(),Sl(443,"p"),rN(444,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(445,"tr",15)(446,"td",16)(447,"div",17)(448,"span",18),rN(449," icon"),Wl(450,"br"),og()()(),Sl(451,"td",19)(452,"code",24),rN(453,"string "),og(),Sl(454,"code",28),rN(455," TemplateRef<void>"),og()(),Sl(456,"td",22)(457,"em")(458,"strong"),rN(459,"(opcional)"),og()(),Sl(460,"p"),rN(461,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(462,"p"),rN(463,"Aceita \xEDcones da "),Sl(464,"a",29),rN(465,"Biblioteca de \xEDcones"),og(),rN(466,`, fontes externas (ex: Font Awesome)
ou um `),Sl(467,"code"),rN(468,"TemplateRef"),og(),rN(469," para \xEDcones customizados."),og(),Sl(470,"pre")(471,"code"),rN(472,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(473,"tr",15)(474,"td",16)(475,"div",17)(476,"span",18),rN(477," label"),Wl(478,"br"),og()()(),Sl(479,"td",19)(480,"code",24),rN(481,"string"),og()(),Sl(482,"td",22)(483,"p"),rN(484,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(485,"p"),rN(486,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(487,"code"),rN(488,"subItems"),og(),rN(489,"."),og()()(),Sl(490,"tr",15)(491,"td",16)(492,"div",17)(493,"span",18),rN(494," selected"),Wl(495,"br"),og()()(),Sl(496,"td",19)(497,"code",23),rN(498,"boolean"),og()(),Sl(499,"td",22)(500,"em")(501,"strong"),rN(502,"(opcional)"),og()(),Sl(503,"p"),rN(504,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(505,"tr",15)(506,"td",16)(507,"div",17)(508,"span",18),rN(509," separator"),Wl(510,"br"),og()()(),Sl(511,"td",19)(512,"code",23),rN(513,"boolean"),og()(),Sl(514,"td",22)(515,"em")(516,"strong"),rN(517,"(opcional)"),og()(),Sl(518,"p"),rN(519,"Atribui uma linha separadora acima do item."),og()()(),Sl(520,"tr",15)(521,"td",16)(522,"div",17)(523,"span",18),rN(524," subItems"),Wl(525,"br"),og()()(),Sl(526,"td",19)(527,"code",30),rN(528,"Array<PoPopupAction>"),og()(),Sl(529,"td",22)(530,"em")(531,"strong"),rN(532,"(opcional)"),og()(),Sl(533,"p"),rN(534,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(535,"p"),rN(536,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(537,"blockquote")(538,"p"),rN(539,"As propriedades "),Sl(540,"code"),rN(541,"disabled"),og(),rN(542,", "),Sl(543,"code"),rN(544,"type"),og(),rN(545," e "),Sl(546,"code"),rN(547,"visible"),og(),rN(548," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(549,"blockquote")(550,"p"),rN(551,"Quando "),Sl(552,"code"),rN(553,"url"),og(),rN(554," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(555,"blockquote")(556,"p"),rN(557,"Em subn\xEDveis aninhados, o "),Sl(558,"code"),rN(559,"icon"),og(),rN(560," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(561,"tr",15)(562,"td",16)(563,"div",17)(564,"span",18),rN(565," type"),Wl(566,"br"),og()()(),Sl(567,"td",19)(568,"code",24),rN(569,"string"),og()(),Sl(570,"td",22)(571,"em")(572,"strong"),rN(573,"(opcional)"),og()(),Sl(574,"p"),rN(575,"Define a cor do item."),og(),Sl(576,"p"),rN(577,"Valores v\xE1lidos:"),og(),Sl(578,"ul")(579,"li")(580,"code"),rN(581,"default"),og()(),Sl(582,"li")(583,"code"),rN(584,"danger"),og()()()()(),Sl(585,"tr",15)(586,"td",16)(587,"div",17)(588,"span",18),rN(589," url"),Wl(590,"br"),og()()(),Sl(591,"td",19)(592,"code",24),rN(593,"string"),og()(),Sl(594,"td",22)(595,"em")(596,"strong"),rN(597,"(opcional)"),og()(),Sl(598,"p"),rN(599,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(600,"p"),rN(601,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(602,"code"),rN(603,"url"),og(),rN(604," \xE9 informada em um agrupador, o clique "),Sl(605,"strong"),rN(606,"n\xE3o abrir\xE1 os subitens"),og(),rN(607,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(608,"blockquote")(609,"p"),rN(610,"Quando informada, tem prioridade sobre a propriedade "),Sl(611,"code"),rN(612,"action"),og(),rN(613,"."),og()()()(),Sl(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),rN(618," visible"),Wl(619,"br"),og()()(),Sl(620,"td",19)(621,"code",23),rN(622,"boolean "),og(),Sl(623,"code",27),rN(624," Function"),og()(),Sl(625,"td",22)(626,"em")(627,"strong"),rN(628,"(opcional)"),og()(),Sl(629,"p"),rN(630,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-dropdown-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),og()()()),a&2&&(rw("p-actions",o.actions),Lp(2),rw("p-active",o.activeTab==="doc"),Lp(2),rw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,me,ue,ge,he,fe],encapsulation:2,changeDetection:1})}return i})();var qe=[{path:"",component:Ee}],we=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[mL.forChild(qe),mL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,we]})}return i})();export{vt as DocPoDropdownModule};