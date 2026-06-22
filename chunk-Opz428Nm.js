import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,ae as Be,aW as Yp,r as r$1,ab as lt,bK as bo,aB as wx,F as Sl,a1 as ft,J as og,H as Wl,L as Lp,Q as nw,bs as fN,a7 as dN,av as ql,aw as lo,ax as uo,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,ar as $x,au as dg,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aJ as Hhe,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,bv as gb,cz as Pz,b5 as Whe,c9 as Ghe,b6 as Yo,ba as fNe,aq as dx,at as fx,K,a3 as rNe,aD as Ky,aE as Xy,aT as nN,aA as Mx}from'./main-WP3NAV7C.js';var Te=["target"],ke=()=>({label:"PO Popup"}),De=l=>[l],Se=(()=>{class l{cdr=f(Be);targetRef;ngAfterViewInit(){this.cdr.detectChanges();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&ql(Te,5,K),a&2){let r;lo(r=uo())&&(o.targetRef=r.first);}},standalone:false,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=wx();Sl(0,"po-icon",2,0),ft("click",function(){Ky(r);let i=Nx(3);return Xy(i.toggle())}),og(),Wl(2,"po-popup",3,1);}a&2&&(Lp(2),nw("p-actions",fN(3,De,dN(2,ke)))("p-target",o.targetRef));},dependencies:[lt,bo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Popup - Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-popup-basic',
  templateUrl: './sample-po-popup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupBasicComponent implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popup-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ve,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return l})();var Oe=["target"],Ce=(()=>{class l{poNotification=f(Yp);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let a=r$1({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0;}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return !d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o);}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&ql(Oe,7,K),a&2){let r;lo(r=uo())&&(o.targetRef=r.first);}},standalone:false,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=wx();Wl(0,"po-popup",4,0),Sl(2,"div",5)(3,"div",6)(4,"po-button",7,1),ft("p-click",function(){Ky(r);let i=Nx(1);return Xy(i.toggle())}),og()()(),Wl(6,"po-divider"),Sl(7,"form",null,2)(9,"po-input",8),ww("ngModelChange",function(i){return Ky(r),nN(o.action.label,i)||(o.action.label=i),Xy(i)}),og(),e0(),Sl(10,"po-input",9),ww("ngModelChange",function(i){return Ky(r),nN(o.action.action,i)||(o.action.action=i),Xy(i)}),og(),e0(),Sl(11,"po-input",10),ww("ngModelChange",function(i){return Ky(r),nN(o.action.url,i)||(o.action.url=i),Xy(i)}),og(),e0(),Sl(12,"po-select",11),ww("ngModelChange",function(i){return Ky(r),nN(o.action.type,i)||(o.action.type=i),Xy(i)}),og(),e0(),Sl(13,"po-select",12),ww("ngModelChange",function(i){return Ky(r),nN(o.action.icon,i)||(o.action.icon=i),Xy(i)}),og(),e0(),Sl(14,"po-select",13),ww("ngModelChange",function(i){return Ky(r),nN(o.action.parent,i)||(o.action.parent=i),Xy(i)}),og(),e0(),Sl(15,"po-checkbox-group",14),ww("ngModelChange",function(i){return Ky(r),nN(o.action,i)||(o.action=i),Xy(i)}),og(),e0(),Sl(16,"div",15)(17,"po-button",16),ft("p-click",function(){return o.addAction(o.action)}),og()()(),Wl(18,"po-divider"),Sl(19,"form",null,3)(21,"div",15)(22,"po-input",17),ww("ngModelChange",function(i){return Ky(r),nN(o.positions,i)||(o.positions=i),Xy(i)}),ft("p-change",function(){return o.convertToArray()}),og(),e0(),Sl(23,"po-select",18),ww("ngModelChange",function(i){return Ky(r),nN(o.position,i)||(o.position=i),Xy(i)}),og(),e0(),Sl(24,"po-checkbox-group",19),ww("ngModelChange",function(i){return Ky(r),nN(o.properties,i)||(o.properties=i),Xy(i)}),og(),e0(),Sl(25,"po-radio-group",20),ww("ngModelChange",function(i){return Ky(r),nN(o.size,i)||(o.size=i),Xy(i)}),og(),e0(),og(),Sl(26,"div",15)(27,"po-button",21),ft("p-click",function(){Ky(r);let i=Nx(8);return Nx(20).reset(),i.reset(),Xy(o.restore())}),og()()();}if(a&2){let r=Nx(8);nw("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),Lp(9),Ew("ngModel",o.action.label),n0(),Lp(),Ew("ngModel",o.action.action),n0(),Lp(),Ew("ngModel",o.action.url),n0(),Lp(),Ew("ngModel",o.action.type),nw("p-options",o.typeOptions),n0(),Lp(),Ew("ngModel",o.action.icon),nw("p-options",o.iconOptions),n0(),Lp(),Ew("ngModel",o.action.parent),nw("p-options",o.parentList),n0(),Lp(),Ew("ngModel",o.action),nw("p-options",o.actionOptions),n0(),Lp(2),nw("p-disabled",r.form.invalid),Lp(5),Ew("ngModel",o.positions),n0(),Lp(),Ew("ngModel",o.position),nw("p-options",o.positionOptions),n0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),n0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,Hhe,bo],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Popup - Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="Popup" (p-click)="popup.toggle()"> </po-button>
  </div>
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
      class="po-lg-2 po-md-4"
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
    <po-input
      class="po-md-6"
      name="customPositions"
      [(ngModel)]="positions"
      p-help='["top", "left", "right-bottom"]'
      p-label="Custom positions"
      (p-change)="convertToArray()"
    >
    </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12 po-lg-3"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); formAction.reset(); restore()">
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPopupAction,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-labs',
  templateUrl: './sample-po-popup-labs.component.html',
  styleUrls: ['./sample-po-popup-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  action: PoPopupAction & { parent?: string };
  actions: Array<PoPopupAction>;
  customPositions: Array<string>;
  parentList: Array<PoSelectOption>;
  position: string;
  positions: string;
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
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly positionOptions: Array<PoSelectOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

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

  addAction(action: PoPopupAction & { parent?: string }) {
    const newAction: PoPopupAction = { ...action };
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

  convertToArray() {
    this.customPositions = this.positions && this.positions.length ? JSON.parse(this.positions) : undefined;
  }

  restore() {
    this.actions = [];
    this.customPositions = [];
    this.parentList = [];
    this.position = undefined;
    this.positions = '';
    this.properties = [];
    this.size = 'medium';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    } as any;
  }

  private getActionNode(items: Array<PoPopupAction>, value: string): PoPopupAction | undefined {
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
    items: Array<PoPopupAction>,
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

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-popup-labs"),og(),Wl(29,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ce],encapsulation:2})}return l})();var We=["formEmail"],Ne=["target"];function ze(l,Je){if(l&1&&(Sl(0,"div")(1,"div",6),Wl(2,"po-info",20),og(),Wl(3,"po-divider"),og()),l&2){let d=Mx();Lp(2),nw("p-value",d.cc);}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:true}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset();}};}send(){this.poModal.open();}reset(){this.formEmail.reset();}clear(){this.emailText=void 0;}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase();}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&ql(We,7)(Ne,7,K)(Yo,7),a&2){let r;lo(r=uo())&&(o.formEmail=r.first),lo(r=uo())&&(o.targetRef=r.first),lo(r=uo())&&(o.poModal=r.first);}},standalone:false,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=wx();Sl(0,"po-popup",3,0)(2,"div",4)(3,"div",5),eN(4,"Settings"),og()()(),Sl(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),ww("ngModelChange",function(i){return Ky(r),nN(o.to,i)||(o.to=i),Xy(i)}),og(),e0(),Sl(11,"po-email",9),ww("ngModelChange",function(i){return Ky(r),nN(o.cc,i)||(o.cc=i),Xy(i)}),og(),e0(),Sl(12,"po-input",10),ww("ngModelChange",function(i){return Ky(r),nN(o.subject,i)||(o.subject=i),Xy(i)}),og(),e0(),og(),Sl(13,"div",6)(14,"po-textarea",11,2),ww("ngModelChange",function(i){return Ky(r),nN(o.emailText,i)||(o.emailText=i),Xy(i)}),ft("click",function(){Ky(r);let i=Nx(1);return Xy(i.toggle())}),og(),e0(),Wl(16,"img",12),og(),Sl(17,"div",6)(18,"po-button",13),ft("p-click",function(){return o.send()}),og(),Sl(19,"po-button",14),ft("p-click",function(){return o.reset()}),og()()()()(),Sl(20,"po-modal",15)(21,"div",6),Wl(22,"po-info",16)(23,"po-info",17),og(),Wl(24,"po-divider"),dx(25,ze,4,1,"div"),Sl(26,"div",6),Wl(27,"po-info",18),og(),Wl(28,"po-divider"),Sl(29,"div",6)(30,"po-textarea",19),ww("ngModelChange",function(i){return Ky(r),nN(o.emailText,i)||(o.emailText=i),Xy(i)}),og(),e0(),og()();}if(a&2){let r=Nx(8);nw("p-actions",o.popupActions)("p-target",o.targetRef),Lp(10),Ew("ngModel",o.to),n0(),Lp(),Ew("ngModel",o.cc),n0(),Lp(),Ew("ngModel",o.subject),n0(),Lp(2),Ew("ngModel",o.emailText),n0(),Lp(4),nw("p-disabled",r.form.invalid),Lp(),nw("p-disabled",r.form.invalid),Lp(),nw("p-primary-action",o.primaryAction),Lp(2),nw("p-value",o.from),Lp(),nw("p-value",o.to),Lp(2),fx(o.cc!==""?25:-1),Lp(2),nw("p-value",o.subject),Lp(3),Ew("ngModel",o.emailText),n0();}},dependencies:[Z9,gb,G9,q9,_k,mk,Qt,mv,Pz,L3,Whe,Ghe,Yo,bo,fNe],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Popup Email"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-popup-email/sample-po-popup-email.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
  <div p-popup-header-template>
    <div class="sample-popup-header-template">Settings</div>
  </div>
</po-popup>

<div class="po-row">
  <po-widget class="po-sm-12" p-title="Send email">
    <form #formEmail="ngForm">
      <div class="po-row">
        <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

        <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

        <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-textarea
          #target
          class="po-lg-10"
          name="message"
          [(ngModel)]="emailText"
          p-help="Click show settings popup"
          p-label="Message"
          p-required
          (click)="popup.toggle()"
        >
        </po-textarea>

        <img class="po-lg-2 sample-logo-po" src="./assets/graphics/po.png" />
      </div>

      <div class="po-row">
        <po-button
          class="po-md-4"
          p-label="Send"
          p-kind="primary"
          [p-disabled]="formEmail.form.invalid"
          (p-click)="send()"
        >
        </po-button>
        <po-button class="po-md-4" p-label="Reset" [p-disabled]="formEmail.form.invalid" (p-click)="reset()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [(ngModel)]="emailText"
      p-label="E-mail"
      p-readonly
      p-rows="6"
      ngDefaultControl
    >
    </po-textarea>
  </div>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoPopupAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-email',
  templateUrl: './sample-po-popup-email.component.html',
  styleUrls: ['./sample-po-popup-email.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopupEmailComponent implements OnInit {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<PoPopupAction>;
  primaryAction: PoModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'an an-plus', label: 'Upper Text', type: 'default', action: this.upper.bind(this) },
      { icon: 'an an-minus', label: 'Lower Text', type: 'default', action: this.lower.bind(this) },
      { icon: 'an an-x', label: 'Clear', type: 'danger', action: this.clear.bind(this), separator: true }
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.poModal.close();
        this.reset();
      }
    };
  }

  send() {
    this.poModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }
}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-popup-email/sample-po-popup-email.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-logo-po {
  height: 15%;
  padding-top: 2.5%;
}

.sample-popup-header-template {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #0c9abe;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-top: 5%;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-popup-email"),og(),Wl(29,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,He,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ye],encapsulation:2})}return l})();var _e=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-doc"]],standalone:false,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPopupModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-popup."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoPopupComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-popup"),og(),eN(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),og(),Sl(18,"p"),eN(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),Sl(20,"code"),eN(21,"subItems"),og(),eN(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),og(),Sl(23,"p"),eN(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),Sl(25,"code"),eN(26,"po-popup"),og(),eN(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),Sl(28,"code"),eN(29,"p-position"),og(),eN(30,"."),og(),Sl(31,"p"),eN(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),Sl(33,"em"),eN(34,"template"),og(),Sl(35,"em"),eN(36,"header"),og(),eN(37," para o "),Sl(38,"code"),eN(39,"po-popup"),og(),eN(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Sl(41,"code"),eN(42,"p-popup-header-template"),og(),eN(43," no elemento que servir\xE1 de template, por exemplo:"),og(),Sl(44,"pre")(45,"code"),eN(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),og()(),Sl(47,"h4"),eN(48,"Tokens customiz\xE1veis"),og(),Sl(49,"p"),eN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(51,"blockquote")(52,"p"),eN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),eN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(56,"."),og()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),eN(61,"Propriedade"),og(),Sl(62,"th"),eN(63,"Descri\xE7\xE3o"),og(),Sl(64,"th"),eN(65,"Valor Padr\xE3o"),og()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),eN(70,"Default Values"),og()(),Wl(71,"td")(72,"td"),og(),Sl(73,"tr")(74,"td")(75,"code"),eN(76,"--border-radius"),og()(),Sl(77,"td"),eN(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(79,"td")(80,"code"),eN(81,"var(--border-radius-md)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),eN(85,"--border-width"),og()(),Sl(86,"td"),eN(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(88,"td")(89,"code"),eN(90,"var(--border-width-sm)"),og()()(),Sl(91,"tr")(92,"td")(93,"code"),eN(94,"--border-color"),og()(),Sl(95,"td"),eN(96,"Cor da borda"),og(),Sl(97,"td")(98,"code"),eN(99,"var(--color-neutral-light-20)"),og()()(),Sl(100,"tr")(101,"td")(102,"code"),eN(103,"--background"),og()(),Sl(104,"td"),eN(105,"Cor do background"),og(),Sl(106,"td")(107,"code"),eN(108,"var(--color-neutral-light-00)"),og()()(),Sl(109,"tr")(110,"td")(111,"code"),eN(112,"--shadow"),og()(),Sl(113,"td"),eN(114,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(115,"td")(116,"code"),eN(117,"var(--shadow-md)"),og()()(),Sl(118,"tr")(119,"td")(120,"strong"),eN(121,"po-popup po-item-list"),og()(),Wl(122,"td")(123,"td"),og(),Sl(124,"tr")(125,"td")(126,"code"),eN(127,"--font-family"),og()(),Sl(128,"td"),eN(129,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(130,"td")(131,"code"),eN(132,"var(--font-family-theme)"),og()()(),Sl(133,"tr")(134,"td")(135,"code"),eN(136,"--font-size"),og()(),Sl(137,"td"),eN(138,"Tamanho da fonte"),og(),Sl(139,"td")(140,"code"),eN(141,"var(--font-size-default)"),og()()(),Sl(142,"tr")(143,"td")(144,"code"),eN(145,"--line-height"),og()(),Sl(146,"td"),eN(147,"Tamanho da label"),og(),Sl(148,"td")(149,"code"),eN(150,"var(--line-height-md)"),og()()(),Sl(151,"tr")(152,"td")(153,"strong"),eN(154,"Action"),og()(),Wl(155,"td")(156,"td"),og(),Sl(157,"tr")(158,"td")(159,"code"),eN(160,"--font-weight"),og()(),Sl(161,"td"),eN(162,"Peso da fonte"),og(),Sl(163,"td")(164,"code"),eN(165,"var(--font-weight-bold)"),og()()(),Sl(166,"tr")(167,"td")(168,"code"),eN(169,"--color"),og()(),Sl(170,"td"),eN(171,"Cor principal do popup"),og(),Sl(172,"td")(173,"code"),eN(174,"var(--color-action-default)"),og()()(),Sl(175,"tr")(176,"td")(177,"strong"),eN(178,"Hover"),og()(),Wl(179,"td")(180,"td"),og(),Sl(181,"tr")(182,"td")(183,"code"),eN(184,"--color-hover"),og()(),Sl(185,"td"),eN(186,"Cor principal no estado hover"),og(),Sl(187,"td")(188,"code"),eN(189,"var(--color-brand-01-darkest)"),og()()(),Sl(190,"tr")(191,"td")(192,"code"),eN(193,"--background-hover"),og()(),Sl(194,"td"),eN(195,"Cor de background no estado hover"),og(),Sl(196,"td")(197,"code"),eN(198,"var(--color-brand-01-lighter)"),og()()(),Sl(199,"tr")(200,"td")(201,"strong"),eN(202,"Focused"),og()(),Wl(203,"td")(204,"td"),og(),Sl(205,"tr")(206,"td")(207,"code"),eN(208,"--outline-color-focused"),og()(),Sl(209,"td"),eN(210,"Cor do outline do estado de focus"),og(),Sl(211,"td")(212,"code"),eN(213,"var(--color-action-focus)"),og()()(),Sl(214,"tr")(215,"td")(216,"strong"),eN(217,"Pressed"),og()(),Wl(218,"td")(219,"td"),og(),Sl(220,"tr")(221,"td")(222,"code"),eN(223,"--background-pressed"),og()(),Sl(224,"td"),eN(225,"Cor de background no estado de pressionado\xA0"),og(),Sl(226,"td")(227,"code"),eN(228,"var(--color-brand-01-light)"),og()()(),Sl(229,"tr")(230,"td")(231,"strong"),eN(232,"Disabled"),og()(),Wl(233,"td")(234,"td"),og(),Sl(235,"tr")(236,"td")(237,"code"),eN(238,"--color-disabled"),og()(),Sl(239,"td"),eN(240,"Cor principal no estado disabled"),og(),Sl(241,"td")(242,"code"),eN(243,"var(--color-action-disabled)"),og()()(),Sl(244,"tr")(245,"td")(246,"strong"),eN(247,"Selected"),og()(),Wl(248,"td")(249,"td"),og(),Sl(250,"tr")(251,"td")(252,"code"),eN(253,"--font-weight-selected"),og()(),Sl(254,"td"),eN(255,"Peso da fonte no estado selecionado"),og(),Sl(256,"td")(257,"code"),eN(258,"var(--font-weight-bold)"),og()()(),Sl(259,"tr")(260,"td")(261,"code"),eN(262,"--background-selected"),og()(),Sl(263,"td"),eN(264,"Cor de background no estado selecionado"),og(),Sl(265,"td")(266,"code"),eN(267,"var(--color-brand-01-lightest)"),og()()(),Sl(268,"tr")(269,"td")(270,"strong"),eN(271,"Option e check"),og()(),Wl(272,"td")(273,"td"),og(),Sl(274,"tr")(275,"td")(276,"code"),eN(277,"--color-option"),og()(),Sl(278,"td"),eN(279,"Cor principa no estado Option/check"),og(),Sl(280,"td")(281,"code"),eN(282,"var(--color-neutral-dark-90)"),og()()()()()(),Sl(283,"div",7)(284,"h4",8),eN(285,"Seletor"),og(),Sl(286,"pre",9),eN(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),og()(),Sl(288,"h4",10),eN(289,"Propriedades"),og(),Sl(290,"table",11)(291,"tr",12)(292,"th",13),eN(293,"Nome"),og(),Sl(294,"th",13),eN(295,"Tipo"),og(),Sl(296,"th",13),eN(297,"Padr\xE3o"),og(),Sl(298,"th",13),eN(299,"Descri\xE7\xE3o"),og()(),Sl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),eN(304," p-actions"),Wl(305,"br"),og()()(),Sl(306,"td",18)(307,"code",19),eN(308,"PoPopupAction[]"),og()(),Sl(309,"td",20),eN(310,"-"),og(),Sl(311,"td",21)(312,"p"),eN(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Sl(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),eN(318," p-custom-positions"),Wl(319,"br"),og()()(),Sl(320,"td",18)(321,"code",22),eN(322,"string[]"),og()(),Sl(323,"td",20),eN(324,"-"),og(),Sl(325,"td",21)(326,"em")(327,"strong"),eN(328,"(opcional)"),og()(),Sl(329,"p"),eN(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),Sl(331,"code"),eN(332,"po-popup"),og(),eN(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Sl(334,"em"),eN(335,"array"),og(),eN(336,". Caso n\xE3o seja definido, o "),Sl(337,"code"),eN(338,"po-popup"),og(),eN(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),og(),Sl(340,"blockquote")(341,"p"),eN(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),Sl(343,"code"),eN(344,"p-position"),og(),eN(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Sl(346,"code"),eN(347,"p-custom-position"),og(),eN(348,"."),og()(),Sl(349,"p"),eN(350,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(351,"ul")(352,"li")(353,"code"),eN(354,"right"),og(),eN(355,": Posiciona o po-popup no lado direito do componente alvo."),og(),Sl(356,"li")(357,"code"),eN(358,"right-bottom"),og(),eN(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),og(),Sl(360,"li")(361,"code"),eN(362,"right-top"),og(),eN(363,": Posiciona o po-popup no lado direito superior do componente alvo."),og(),Sl(364,"li")(365,"code"),eN(366,"bottom"),og(),eN(367,": Posiciona o po-popup abaixo do componente alvo."),og(),Sl(368,"li")(369,"code"),eN(370,"bottom-left"),og(),eN(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),og(),Sl(372,"li")(373,"code"),eN(374,"bottom-right"),og(),eN(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),og(),Sl(376,"li")(377,"code"),eN(378,"left"),og(),eN(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),og(),Sl(380,"li")(381,"code"),eN(382,"left-top"),og(),eN(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),og(),Sl(384,"li")(385,"code"),eN(386,"left-bottom"),og(),eN(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),og(),Sl(388,"li")(389,"code"),eN(390,"top"),og(),eN(391,": Posiciona o po-popup acima do componente alvo."),og(),Sl(392,"li")(393,"code"),eN(394,"top-right"),og(),eN(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),og(),Sl(396,"li")(397,"code"),eN(398,"top-left"),og(),eN(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),og()()()(),Sl(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),eN(404," p-hide-arrow"),Wl(405,"br"),og()()(),Sl(406,"td",18)(407,"code",23),eN(408,"boolean"),og()(),Sl(409,"td",20)(410,"p")(411,"code"),eN(412,"false"),og()()(),Sl(413,"td",21)(414,"em")(415,"strong"),eN(416,"(opcional)"),og()(),Sl(417,"p"),eN(418,"Oculta a seta do componente "),Sl(419,"em"),eN(420,"popup"),og(),eN(421,"."),og()()(),Sl(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),eN(426," p-position"),Wl(427,"br"),og()()(),Sl(428,"td",18)(429,"code",24),eN(430,"string"),og()(),Sl(431,"td",20)(432,"p")(433,"code"),eN(434,"bottom-left"),og()()(),Sl(435,"td",21)(436,"em")(437,"strong"),eN(438,"(opcional)"),og()(),Sl(439,"p"),eN(440,"Define a posi\xE7\xE3o inicial que o "),Sl(441,"code"),eN(442,"po-popup"),og(),eN(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Sl(444,"code"),eN(445,"bottom-left"),og(),eN(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Sl(447,"blockquote")(448,"p"),eN(449,"Caso seja definido um "),Sl(450,"code"),eN(451,"p-custom-positions"),og(),eN(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),Sl(453,"code"),eN(454,"p-position"),og(),eN(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Sl(456,"code"),eN(457,"p-custom-positions"),og(),eN(458,"."),og()(),Sl(459,"p"),eN(460,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(461,"ul")(462,"li")(463,"code"),eN(464,"right"),og(),eN(465,": Posiciona o po-popup no lado direito do componente alvo."),og(),Sl(466,"li")(467,"code"),eN(468,"right-bottom"),og(),eN(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),og(),Sl(470,"li")(471,"code"),eN(472,"right-top"),og(),eN(473,": Posiciona o po-popup no lado direito superior do componente alvo."),og(),Sl(474,"li")(475,"code"),eN(476,"bottom"),og(),eN(477,": Posiciona o po-popup abaixo do componente alvo."),og(),Sl(478,"li")(479,"code"),eN(480,"bottom-left"),og(),eN(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),og(),Sl(482,"li")(483,"code"),eN(484,"bottom-right"),og(),eN(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),og(),Sl(486,"li")(487,"code"),eN(488,"left"),og(),eN(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),og(),Sl(490,"li")(491,"code"),eN(492,"left-top"),og(),eN(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),og(),Sl(494,"li")(495,"code"),eN(496,"left-bottom"),og(),eN(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),og(),Sl(498,"li")(499,"code"),eN(500,"top"),og(),eN(501,": Posiciona o po-popup acima do componente alvo."),og(),Sl(502,"li")(503,"code"),eN(504,"top-right"),og(),eN(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),og(),Sl(506,"li")(507,"code"),eN(508,"top-left"),og(),eN(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),og()()()(),Sl(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),eN(514," p-size"),Wl(515,"br"),og()()(),Sl(516,"td",18)(517,"code",24),eN(518,"string"),og()(),Sl(519,"td",20)(520,"p")(521,"code"),eN(522,"medium"),og()()(),Sl(523,"td",21)(524,"em")(525,"strong"),eN(526,"(opcional)"),og()(),Sl(527,"p"),eN(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(529,"ul")(530,"li")(531,"code"),eN(532,"small"),og(),eN(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(534,"li")(535,"code"),eN(536,"medium"),og(),eN(537,": aplica a medida medium de cada componente."),og()(),Sl(538,"blockquote")(539,"p"),eN(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(541,"code"),eN(542,"medium"),og(),eN(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(544,"a",25),eN(545,"po-theme"),og(),eN(546,"."),og()()()(),Sl(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),eN(551," p-target"),Wl(552,"br"),og()()(),Sl(553,"td",18)(554,"code",26),eN(555,"any"),og()(),Sl(556,"td",20),eN(557,"-"),og(),Sl(558,"td",21)(559,"p"),eN(560,"Para utilizar o "),Sl(561,"code"),eN(562,"po-popup"),og(),eN(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Sl(564,"code"),eN(565,"toggle"),og(),eN(566,", por exemplo:"),og(),Sl(567,"pre")(568,"code"),eN(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),og()(),Sl(570,"p"),eN(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),Sl(572,"code"),eN(573,"ElementRef"),og(),eN(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),og(),Sl(575,"pre")(576,"code"),eN(577,`// component.html

<po-button #poButton
  p-label="Open Popover"
  (p-click)="popup.toggle()">
</po-button>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="poButtonRef">
</po-popup>

// component.ts

@ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
`),og()()()()(),Sl(578,"h3",10),eN(579,"M\xE9todos"),og(),Sl(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),eN(586," close "),og()()()()(),Sl(587,"tr",21)(588,"td",21)(589,"p"),eN(590,"Fecha o componente "),Sl(591,"em"),eN(592,"popup"),og(),eN(593,"."),og(),Sl(594,"blockquote")(595,"p"),eN(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),og()()()()(),Wl(597,"br"),Sl(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),eN(604," open "),og()()()()(),Sl(605,"tr",21)(606,"td",21)(607,"p"),eN(608,"Abre o componente "),Sl(609,"em"),eN(610,"popup"),og(),eN(611,"."),og(),Sl(612,"blockquote")(613,"p"),eN(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),og()()()()(),Wl(615,"br"),Sl(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),eN(622," toggle "),og()()()()(),Sl(623,"tr",21)(624,"td",21)(625,"p"),eN(626,"Respons\xE1vel por abrir e fechar o "),Sl(627,"em"),eN(628,"popup"),og(),eN(629,"."),og(),Sl(630,"p"),eN(631,"Quando disparado abrir\xE1 o "),Sl(632,"em"),eN(633,"popup"),og(),eN(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),Sl(635,"code"),eN(636,"target"),og(),eN(637," ir\xE1 fecha-lo."),og(),Sl(638,"p"),eN(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),og()()()(),Wl(640,"br"),Sl(641,"h3"),eN(642,"Interfaces"),og(),Sl(643,"h4",29)(644,"code",5),eN(645,"PoPopupAction"),og()(),Sl(646,"div",2)(647,"p"),eN(648,"Interface para lista de a\xE7\xF5es do componente."),og()(),Sl(649,"h4",10),eN(650,"Propriedades"),og(),Sl(651,"table",11)(652,"tr",12)(653,"th",13),eN(654,"Nome"),og(),Sl(655,"th",13),eN(656,"Tipo"),og(),Sl(657,"th",13),eN(658,"Descri\xE7\xE3o"),og()(),Sl(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),eN(663," action"),Wl(664,"br"),og()()(),Sl(665,"td",18)(666,"code",30),eN(667,"Function"),og()(),Sl(668,"td",21)(669,"em")(670,"strong"),eN(671,"(opcional)"),og()(),Sl(672,"p"),eN(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Sl(674,"p"),eN(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(676,"code"),eN(677,"subItems"),og(),eN(678,"."),og(),Sl(679,"blockquote")(680,"p"),eN(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(682,"em"),eN(683,"bind"),og(),eN(684,`:
`),Sl(685,"code"),eN(686,"action: this.myFunction.bind(this)"),og()()()()(),Sl(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),eN(691," disabled"),Wl(692,"br"),og()()(),Sl(693,"td",18)(694,"code",23),eN(695,"boolean "),og(),Sl(696,"code",30),eN(697," Function"),og()(),Sl(698,"td",21)(699,"em")(700,"strong"),eN(701,"(opcional)"),og()(),Sl(702,"p"),eN(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Sl(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),eN(708," icon"),Wl(709,"br"),og()()(),Sl(710,"td",18)(711,"code",24),eN(712,"string "),og(),Sl(713,"code",31),eN(714," TemplateRef<void>"),og()(),Sl(715,"td",21)(716,"em")(717,"strong"),eN(718,"(opcional)"),og()(),Sl(719,"p"),eN(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(721,"p"),eN(722,"Aceita \xEDcones da "),Sl(723,"a",32),eN(724,"Biblioteca de \xEDcones"),og(),eN(725,`, fontes externas (ex: Font Awesome)
ou um `),Sl(726,"code"),eN(727,"TemplateRef"),og(),eN(728," para \xEDcones customizados."),og(),Sl(729,"pre")(730,"code"),eN(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Sl(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),eN(736," label"),Wl(737,"br"),og()()(),Sl(738,"td",18)(739,"code",24),eN(740,"string"),og()(),Sl(741,"td",21)(742,"p"),eN(743,"R\xF3tulo da a\xE7\xE3o."),og(),Sl(744,"p"),eN(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(746,"code"),eN(747,"subItems"),og(),eN(748,"."),og()()(),Sl(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),eN(753," selected"),Wl(754,"br"),og()()(),Sl(755,"td",18)(756,"code",23),eN(757,"boolean"),og()(),Sl(758,"td",21)(759,"em")(760,"strong"),eN(761,"(opcional)"),og()(),Sl(762,"p"),eN(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Sl(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),eN(768," separator"),Wl(769,"br"),og()()(),Sl(770,"td",18)(771,"code",23),eN(772,"boolean"),og()(),Sl(773,"td",21)(774,"em")(775,"strong"),eN(776,"(opcional)"),og()(),Sl(777,"p"),eN(778,"Atribui uma linha separadora acima do item."),og()()(),Sl(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),eN(783," subItems"),Wl(784,"br"),og()()(),Sl(785,"td",18)(786,"code",33),eN(787,"Array<PoPopupAction>"),og()(),Sl(788,"td",21)(789,"em")(790,"strong"),eN(791,"(opcional)"),og()(),Sl(792,"p"),eN(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Sl(794,"p"),eN(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Sl(796,"blockquote")(797,"p"),eN(798,"As propriedades "),Sl(799,"code"),eN(800,"disabled"),og(),eN(801,", "),Sl(802,"code"),eN(803,"type"),og(),eN(804," e "),Sl(805,"code"),eN(806,"visible"),og(),eN(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Sl(808,"blockquote")(809,"p"),eN(810,"Quando "),Sl(811,"code"),eN(812,"url"),og(),eN(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Sl(814,"blockquote")(815,"p"),eN(816,"Em subn\xEDveis aninhados, o "),Sl(817,"code"),eN(818,"icon"),og(),eN(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Sl(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),eN(824," type"),Wl(825,"br"),og()()(),Sl(826,"td",18)(827,"code",24),eN(828,"string"),og()(),Sl(829,"td",21)(830,"em")(831,"strong"),eN(832,"(opcional)"),og()(),Sl(833,"p"),eN(834,"Define a cor do item."),og(),Sl(835,"p"),eN(836,"Valores v\xE1lidos:"),og(),Sl(837,"ul")(838,"li")(839,"code"),eN(840,"default"),og()(),Sl(841,"li")(842,"code"),eN(843,"danger"),og()()()()(),Sl(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),eN(848," url"),Wl(849,"br"),og()()(),Sl(850,"td",18)(851,"code",24),eN(852,"string"),og()(),Sl(853,"td",21)(854,"em")(855,"strong"),eN(856,"(opcional)"),og()(),Sl(857,"p"),eN(858,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Sl(859,"p"),eN(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(861,"code"),eN(862,"url"),og(),eN(863," \xE9 informada em um agrupador, o clique "),Sl(864,"strong"),eN(865,"n\xE3o abrir\xE1 os subitens"),og(),eN(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Sl(867,"blockquote")(868,"p"),eN(869,"Quando informada, tem prioridade sobre a propriedade "),Sl(870,"code"),eN(871,"action"),og(),eN(872,"."),og()()()(),Sl(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),eN(877," visible"),Wl(878,"br"),og()()(),Sl(879,"td",18)(880,"code",23),eN(881,"boolean "),og(),Sl(882,"code",30),eN(883," Function"),og()(),Sl(884,"td",21)(885,"em")(886,"strong"),eN(887,"(opcional)"),og()(),Sl(888,"p"),eN(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var Ae=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(w(Xn),w(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-popup-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,ve,Pe,we,_e],encapsulation:2})}return l})();var Ge=[{path:"",component:Ae}],Me=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[hL.forChild(Ge),hL]})}return l})();var qt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,Me]})}return l})();export{qt as DocPoPopupModule};