import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,ae as Be,aW as Yp,r as r$1,ab as lt,bK as bo,aB as Dx,H as Il,a1 as ft,R as og,J as zl,A as Lp,T as nw,bs as uN,a7 as lN,av as Gl,aw as co,ax as lo,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,ar as Ux,au as dg,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aJ as qhe,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,bv as gb,cz as kz,b5 as $he,c9 as Yhe,b6 as Yo,ba as yNe,aq as lx,at as ux,i as Z,a3 as cNe,aD as Xy,aE as Qy,aT as eN,aA as Sx}from'./main-QSTLMRDK.js';var Te=["target"],ke=()=>({label:"PO Popup"}),De=l=>[l],Se=(()=>{class l{cdr=f(Be);targetRef;ngAfterViewInit(){this.cdr.detectChanges();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&Gl(Te,5,Z),a&2){let r;co(r=lo())&&(o.targetRef=r.first);}},standalone:false,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=Dx();Il(0,"po-icon",2,0),ft("click",function(){Xy(r);let i=Ax(3);return Qy(i.toggle())}),og(),zl(2,"po-popup",3,1);}a&2&&(Lp(2),nw("p-actions",uN(3,De,lN(2,ke)))("p-target",o.targetRef));},dependencies:[lt,bo],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Popup - Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-popup-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ve,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return l})();var Oe=["target"],Ce=(()=>{class l{poNotification=f(Yp);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore();}addAction(d){let a=r$1({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else {let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a];}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm();}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0;}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm();}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0};}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return !d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o);}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`);}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&Gl(Oe,7,Z),a&2){let r;co(r=lo())&&(o.targetRef=r.first);}},standalone:false,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=Dx();zl(0,"po-popup",4,0),Il(2,"div",5)(3,"div",6)(4,"po-button",7,1),ft("p-click",function(){Xy(r);let i=Ax(1);return Qy(i.toggle())}),og()()(),zl(6,"po-divider"),Il(7,"form",null,2)(9,"po-input",8),ww("ngModelChange",function(i){return Xy(r),eN(o.action.label,i)||(o.action.label=i),Qy(i)}),og(),QA(),Il(10,"po-input",9),ww("ngModelChange",function(i){return Xy(r),eN(o.action.action,i)||(o.action.action=i),Qy(i)}),og(),QA(),Il(11,"po-input",10),ww("ngModelChange",function(i){return Xy(r),eN(o.action.url,i)||(o.action.url=i),Qy(i)}),og(),QA(),Il(12,"po-select",11),ww("ngModelChange",function(i){return Xy(r),eN(o.action.type,i)||(o.action.type=i),Qy(i)}),og(),QA(),Il(13,"po-select",12),ww("ngModelChange",function(i){return Xy(r),eN(o.action.icon,i)||(o.action.icon=i),Qy(i)}),og(),QA(),Il(14,"po-select",13),ww("ngModelChange",function(i){return Xy(r),eN(o.action.parent,i)||(o.action.parent=i),Qy(i)}),og(),QA(),Il(15,"po-checkbox-group",14),ww("ngModelChange",function(i){return Xy(r),eN(o.action,i)||(o.action=i),Qy(i)}),og(),QA(),Il(16,"div",15)(17,"po-button",16),ft("p-click",function(){return o.addAction(o.action)}),og()()(),zl(18,"po-divider"),Il(19,"form",null,3)(21,"div",15)(22,"po-input",17),ww("ngModelChange",function(i){return Xy(r),eN(o.positions,i)||(o.positions=i),Qy(i)}),ft("p-change",function(){return o.convertToArray()}),og(),QA(),Il(23,"po-select",18),ww("ngModelChange",function(i){return Xy(r),eN(o.position,i)||(o.position=i),Qy(i)}),og(),QA(),Il(24,"po-checkbox-group",19),ww("ngModelChange",function(i){return Xy(r),eN(o.properties,i)||(o.properties=i),Qy(i)}),og(),QA(),Il(25,"po-radio-group",20),ww("ngModelChange",function(i){return Xy(r),eN(o.size,i)||(o.size=i),Qy(i)}),og(),QA(),og(),Il(26,"div",15)(27,"po-button",21),ft("p-click",function(){Xy(r);let i=Ax(8);return Ax(20).reset(),i.reset(),Qy(o.restore())}),og()()();}if(a&2){let r=Ax(8);nw("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),Lp(9),Ew("ngModel",o.action.label),e0(),Lp(),Ew("ngModel",o.action.action),e0(),Lp(),Ew("ngModel",o.action.url),e0(),Lp(),Ew("ngModel",o.action.type),nw("p-options",o.typeOptions),e0(),Lp(),Ew("ngModel",o.action.icon),nw("p-options",o.iconOptions),e0(),Lp(),Ew("ngModel",o.action.parent),nw("p-options",o.parentList),e0(),Lp(),Ew("ngModel",o.action),nw("p-options",o.actionOptions),e0(),Lp(2),nw("p-disabled",r.form.invalid),Lp(5),Ew("ngModel",o.positions),e0(),Lp(),Ew("ngModel",o.position),nw("p-options",o.positionOptions),e0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,qhe,bo],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"],changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Popup - Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-popup
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ElementRef, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-popup-labs"),og(),zl(29,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ce],encapsulation:2})}return l})();var We=["formEmail"],Ne=["target"];function ze(l,Je){if(l&1&&(Il(0,"div")(1,"div",6),zl(2,"po-info",20),og(),zl(3,"po-divider"),og()),l&2){let d=Sx();Lp(2),nw("p-value",d.cc);}}var ye=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:true}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset();}};}send(){this.poModal.open();}reset(){this.formEmail.reset();}clear(){this.emailText=void 0;}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase();}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase();}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&Gl(We,7)(Ne,7,Z)(Yo,7),a&2){let r;co(r=lo())&&(o.formEmail=r.first),co(r=lo())&&(o.targetRef=r.first),co(r=lo())&&(o.poModal=r.first);}},standalone:false,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=Dx();Il(0,"po-popup",3,0)(2,"div",4)(3,"div",5),Qx(4,"Settings"),og()()(),Il(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),ww("ngModelChange",function(i){return Xy(r),eN(o.to,i)||(o.to=i),Qy(i)}),og(),QA(),Il(11,"po-email",9),ww("ngModelChange",function(i){return Xy(r),eN(o.cc,i)||(o.cc=i),Qy(i)}),og(),QA(),Il(12,"po-input",10),ww("ngModelChange",function(i){return Xy(r),eN(o.subject,i)||(o.subject=i),Qy(i)}),og(),QA(),og(),Il(13,"div",6)(14,"po-textarea",11,2),ww("ngModelChange",function(i){return Xy(r),eN(o.emailText,i)||(o.emailText=i),Qy(i)}),ft("click",function(){Xy(r);let i=Ax(1);return Qy(i.toggle())}),og(),QA(),zl(16,"img",12),og(),Il(17,"div",6)(18,"po-button",13),ft("p-click",function(){return o.send()}),og(),Il(19,"po-button",14),ft("p-click",function(){return o.reset()}),og()()()()(),Il(20,"po-modal",15)(21,"div",6),zl(22,"po-info",16)(23,"po-info",17),og(),zl(24,"po-divider"),lx(25,ze,4,1,"div"),Il(26,"div",6),zl(27,"po-info",18),og(),zl(28,"po-divider"),Il(29,"div",6)(30,"po-textarea",19),ww("ngModelChange",function(i){return Xy(r),eN(o.emailText,i)||(o.emailText=i),Qy(i)}),og(),QA(),og()();}if(a&2){let r=Ax(8);nw("p-actions",o.popupActions)("p-target",o.targetRef),Lp(10),Ew("ngModel",o.to),e0(),Lp(),Ew("ngModel",o.cc),e0(),Lp(),Ew("ngModel",o.subject),e0(),Lp(2),Ew("ngModel",o.emailText),e0(),Lp(4),nw("p-disabled",r.form.invalid),Lp(),nw("p-disabled",r.form.invalid),Lp(),nw("p-primary-action",o.primaryAction),Lp(2),nw("p-value",o.from),Lp(),nw("p-value",o.to),Lp(2),ux(o.cc!==""?25:-1),Lp(2),nw("p-value",o.subject),Lp(3),Ew("ngModel",o.emailText),e0();}},dependencies:[G9,gb,$9,z9,mk,hk,Qt,mv,kz,O3,$he,Yhe,Yo,bo,yNe],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"],changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-email-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Popup Email"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-popup-email/sample-po-popup-email.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-popup-email/sample-po-popup-email.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-logo-po {
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
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-popup-email"),og(),zl(29,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,He,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ye],encapsulation:2})}return l})();var _e=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-popup-doc"]],standalone:false,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPopupModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-popup."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoPopupComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-popup"),og(),Qx(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),og(),Il(18,"p"),Qx(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),Il(20,"code"),Qx(21,"subItems"),og(),Qx(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),og(),Il(23,"p"),Qx(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),Il(25,"code"),Qx(26,"po-popup"),og(),Qx(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),Il(28,"code"),Qx(29,"p-position"),og(),Qx(30,"."),og(),Il(31,"p"),Qx(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),Il(33,"em"),Qx(34,"template"),og(),Il(35,"em"),Qx(36,"header"),og(),Qx(37," para o "),Il(38,"code"),Qx(39,"po-popup"),og(),Qx(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),Il(41,"code"),Qx(42,"p-popup-header-template"),og(),Qx(43," no elemento que servir\xE1 de template, por exemplo:"),og(),Il(44,"pre")(45,"code"),Qx(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),og()(),Il(47,"h4"),Qx(48,"Tokens customiz\xE1veis"),og(),Il(49,"p"),Qx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(51,"blockquote")(52,"p"),Qx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(54,"a",6),Qx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(56,"."),og()(),Il(57,"table")(58,"thead")(59,"tr")(60,"th"),Qx(61,"Propriedade"),og(),Il(62,"th"),Qx(63,"Descri\xE7\xE3o"),og(),Il(64,"th"),Qx(65,"Valor Padr\xE3o"),og()()(),Il(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Qx(70,"Default Values"),og()(),zl(71,"td")(72,"td"),og(),Il(73,"tr")(74,"td")(75,"code"),Qx(76,"--border-radius"),og()(),Il(77,"td"),Qx(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--border-radius-md)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--border-width"),og()(),Il(86,"td"),Qx(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(88,"td")(89,"code"),Qx(90,"var(--border-width-sm)"),og()()(),Il(91,"tr")(92,"td")(93,"code"),Qx(94,"--border-color"),og()(),Il(95,"td"),Qx(96,"Cor da borda"),og(),Il(97,"td")(98,"code"),Qx(99,"var(--color-neutral-light-20)"),og()()(),Il(100,"tr")(101,"td")(102,"code"),Qx(103,"--background"),og()(),Il(104,"td"),Qx(105,"Cor do background"),og(),Il(106,"td")(107,"code"),Qx(108,"var(--color-neutral-light-00)"),og()()(),Il(109,"tr")(110,"td")(111,"code"),Qx(112,"--shadow"),og()(),Il(113,"td"),Qx(114,"Cont\xE9m o valor da sombra do elemento"),og(),Il(115,"td")(116,"code"),Qx(117,"var(--shadow-md)"),og()()(),Il(118,"tr")(119,"td")(120,"strong"),Qx(121,"po-popup po-item-list"),og()(),zl(122,"td")(123,"td"),og(),Il(124,"tr")(125,"td")(126,"code"),Qx(127,"--font-family"),og()(),Il(128,"td"),Qx(129,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(130,"td")(131,"code"),Qx(132,"var(--font-family-theme)"),og()()(),Il(133,"tr")(134,"td")(135,"code"),Qx(136,"--font-size"),og()(),Il(137,"td"),Qx(138,"Tamanho da fonte"),og(),Il(139,"td")(140,"code"),Qx(141,"var(--font-size-default)"),og()()(),Il(142,"tr")(143,"td")(144,"code"),Qx(145,"--line-height"),og()(),Il(146,"td"),Qx(147,"Tamanho da label"),og(),Il(148,"td")(149,"code"),Qx(150,"var(--line-height-md)"),og()()(),Il(151,"tr")(152,"td")(153,"strong"),Qx(154,"Action"),og()(),zl(155,"td")(156,"td"),og(),Il(157,"tr")(158,"td")(159,"code"),Qx(160,"--font-weight"),og()(),Il(161,"td"),Qx(162,"Peso da fonte"),og(),Il(163,"td")(164,"code"),Qx(165,"var(--font-weight-bold)"),og()()(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--color"),og()(),Il(170,"td"),Qx(171,"Cor principal do popup"),og(),Il(172,"td")(173,"code"),Qx(174,"var(--color-action-default)"),og()()(),Il(175,"tr")(176,"td")(177,"strong"),Qx(178,"Hover"),og()(),zl(179,"td")(180,"td"),og(),Il(181,"tr")(182,"td")(183,"code"),Qx(184,"--color-hover"),og()(),Il(185,"td"),Qx(186,"Cor principal no estado hover"),og(),Il(187,"td")(188,"code"),Qx(189,"var(--color-brand-01-darkest)"),og()()(),Il(190,"tr")(191,"td")(192,"code"),Qx(193,"--background-hover"),og()(),Il(194,"td"),Qx(195,"Cor de background no estado hover"),og(),Il(196,"td")(197,"code"),Qx(198,"var(--color-brand-01-lighter)"),og()()(),Il(199,"tr")(200,"td")(201,"strong"),Qx(202,"Focused"),og()(),zl(203,"td")(204,"td"),og(),Il(205,"tr")(206,"td")(207,"code"),Qx(208,"--outline-color-focused"),og()(),Il(209,"td"),Qx(210,"Cor do outline do estado de focus"),og(),Il(211,"td")(212,"code"),Qx(213,"var(--color-action-focus)"),og()()(),Il(214,"tr")(215,"td")(216,"strong"),Qx(217,"Pressed"),og()(),zl(218,"td")(219,"td"),og(),Il(220,"tr")(221,"td")(222,"code"),Qx(223,"--background-pressed"),og()(),Il(224,"td"),Qx(225,"Cor de background no estado de pressionado\xA0"),og(),Il(226,"td")(227,"code"),Qx(228,"var(--color-brand-01-light)"),og()()(),Il(229,"tr")(230,"td")(231,"strong"),Qx(232,"Disabled"),og()(),zl(233,"td")(234,"td"),og(),Il(235,"tr")(236,"td")(237,"code"),Qx(238,"--color-disabled"),og()(),Il(239,"td"),Qx(240,"Cor principal no estado disabled"),og(),Il(241,"td")(242,"code"),Qx(243,"var(--color-action-disabled)"),og()()(),Il(244,"tr")(245,"td")(246,"strong"),Qx(247,"Selected"),og()(),zl(248,"td")(249,"td"),og(),Il(250,"tr")(251,"td")(252,"code"),Qx(253,"--font-weight-selected"),og()(),Il(254,"td"),Qx(255,"Peso da fonte no estado selecionado"),og(),Il(256,"td")(257,"code"),Qx(258,"var(--font-weight-bold)"),og()()(),Il(259,"tr")(260,"td")(261,"code"),Qx(262,"--background-selected"),og()(),Il(263,"td"),Qx(264,"Cor de background no estado selecionado"),og(),Il(265,"td")(266,"code"),Qx(267,"var(--color-brand-01-lightest)"),og()()(),Il(268,"tr")(269,"td")(270,"strong"),Qx(271,"Option e check"),og()(),zl(272,"td")(273,"td"),og(),Il(274,"tr")(275,"td")(276,"code"),Qx(277,"--color-option"),og()(),Il(278,"td"),Qx(279,"Cor principa no estado Option/check"),og(),Il(280,"td")(281,"code"),Qx(282,"var(--color-neutral-dark-90)"),og()()()()()(),Il(283,"div",7)(284,"h4",8),Qx(285,"Seletor"),og(),Il(286,"pre",9),Qx(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),og()(),Il(288,"h4",10),Qx(289,"Propriedades"),og(),Il(290,"table",11)(291,"tr",12)(292,"th",13),Qx(293,"Nome"),og(),Il(294,"th",13),Qx(295,"Tipo"),og(),Il(296,"th",13),Qx(297,"Padr\xE3o"),og(),Il(298,"th",13),Qx(299,"Descri\xE7\xE3o"),og()(),Il(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),Qx(304," p-actions"),zl(305,"br"),og()()(),Il(306,"td",18)(307,"code",19),Qx(308,"PoPopupAction[]"),og()(),Il(309,"td",20),Qx(310,"-"),og(),Il(311,"td",21)(312,"p"),Qx(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),og()()(),Il(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),Qx(318," p-custom-positions"),zl(319,"br"),og()()(),Il(320,"td",18)(321,"code",22),Qx(322,"string[]"),og()(),Il(323,"td",20),Qx(324,"-"),og(),Il(325,"td",21)(326,"em")(327,"strong"),Qx(328,"(opcional)"),og()(),Il(329,"p"),Qx(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),Il(331,"code"),Qx(332,"po-popup"),og(),Qx(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),Il(334,"em"),Qx(335,"array"),og(),Qx(336,". Caso n\xE3o seja definido, o "),Il(337,"code"),Qx(338,"po-popup"),og(),Qx(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),og(),Il(340,"blockquote")(341,"p"),Qx(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),Il(343,"code"),Qx(344,"p-position"),og(),Qx(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),Il(346,"code"),Qx(347,"p-custom-position"),og(),Qx(348,"."),og()(),Il(349,"p"),Qx(350,"Posi\xE7\xF5es v\xE1lidas:"),og(),Il(351,"ul")(352,"li")(353,"code"),Qx(354,"right"),og(),Qx(355,": Posiciona o po-popup no lado direito do componente alvo."),og(),Il(356,"li")(357,"code"),Qx(358,"right-bottom"),og(),Qx(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),og(),Il(360,"li")(361,"code"),Qx(362,"right-top"),og(),Qx(363,": Posiciona o po-popup no lado direito superior do componente alvo."),og(),Il(364,"li")(365,"code"),Qx(366,"bottom"),og(),Qx(367,": Posiciona o po-popup abaixo do componente alvo."),og(),Il(368,"li")(369,"code"),Qx(370,"bottom-left"),og(),Qx(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),og(),Il(372,"li")(373,"code"),Qx(374,"bottom-right"),og(),Qx(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),og(),Il(376,"li")(377,"code"),Qx(378,"left"),og(),Qx(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),og(),Il(380,"li")(381,"code"),Qx(382,"left-top"),og(),Qx(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),og(),Il(384,"li")(385,"code"),Qx(386,"left-bottom"),og(),Qx(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),og(),Il(388,"li")(389,"code"),Qx(390,"top"),og(),Qx(391,": Posiciona o po-popup acima do componente alvo."),og(),Il(392,"li")(393,"code"),Qx(394,"top-right"),og(),Qx(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),og(),Il(396,"li")(397,"code"),Qx(398,"top-left"),og(),Qx(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),og()()()(),Il(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),Qx(404," p-hide-arrow"),zl(405,"br"),og()()(),Il(406,"td",18)(407,"code",23),Qx(408,"boolean"),og()(),Il(409,"td",20)(410,"p")(411,"code"),Qx(412,"false"),og()()(),Il(413,"td",21)(414,"em")(415,"strong"),Qx(416,"(opcional)"),og()(),Il(417,"p"),Qx(418,"Oculta a seta do componente "),Il(419,"em"),Qx(420,"popup"),og(),Qx(421,"."),og()()(),Il(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),Qx(426," p-position"),zl(427,"br"),og()()(),Il(428,"td",18)(429,"code",24),Qx(430,"string"),og()(),Il(431,"td",20)(432,"p")(433,"code"),Qx(434,"bottom-left"),og()()(),Il(435,"td",21)(436,"em")(437,"strong"),Qx(438,"(opcional)"),og()(),Il(439,"p"),Qx(440,"Define a posi\xE7\xE3o inicial que o "),Il(441,"code"),Qx(442,"po-popup"),og(),Qx(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),Il(444,"code"),Qx(445,"bottom-left"),og(),Qx(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Il(447,"blockquote")(448,"p"),Qx(449,"Caso seja definido um "),Il(450,"code"),Qx(451,"p-custom-positions"),og(),Qx(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),Il(453,"code"),Qx(454,"p-position"),og(),Qx(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),Il(456,"code"),Qx(457,"p-custom-positions"),og(),Qx(458,"."),og()(),Il(459,"p"),Qx(460,"Posi\xE7\xF5es v\xE1lidas:"),og(),Il(461,"ul")(462,"li")(463,"code"),Qx(464,"right"),og(),Qx(465,": Posiciona o po-popup no lado direito do componente alvo."),og(),Il(466,"li")(467,"code"),Qx(468,"right-bottom"),og(),Qx(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),og(),Il(470,"li")(471,"code"),Qx(472,"right-top"),og(),Qx(473,": Posiciona o po-popup no lado direito superior do componente alvo."),og(),Il(474,"li")(475,"code"),Qx(476,"bottom"),og(),Qx(477,": Posiciona o po-popup abaixo do componente alvo."),og(),Il(478,"li")(479,"code"),Qx(480,"bottom-left"),og(),Qx(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),og(),Il(482,"li")(483,"code"),Qx(484,"bottom-right"),og(),Qx(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),og(),Il(486,"li")(487,"code"),Qx(488,"left"),og(),Qx(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),og(),Il(490,"li")(491,"code"),Qx(492,"left-top"),og(),Qx(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),og(),Il(494,"li")(495,"code"),Qx(496,"left-bottom"),og(),Qx(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),og(),Il(498,"li")(499,"code"),Qx(500,"top"),og(),Qx(501,": Posiciona o po-popup acima do componente alvo."),og(),Il(502,"li")(503,"code"),Qx(504,"top-right"),og(),Qx(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),og(),Il(506,"li")(507,"code"),Qx(508,"top-left"),og(),Qx(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),og()()()(),Il(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),Qx(514," p-size"),zl(515,"br"),og()()(),Il(516,"td",18)(517,"code",24),Qx(518,"string"),og()(),Il(519,"td",20)(520,"p")(521,"code"),Qx(522,"medium"),og()()(),Il(523,"td",21)(524,"em")(525,"strong"),Qx(526,"(opcional)"),og()(),Il(527,"p"),Qx(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(529,"ul")(530,"li")(531,"code"),Qx(532,"small"),og(),Qx(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(534,"li")(535,"code"),Qx(536,"medium"),og(),Qx(537,": aplica a medida medium de cada componente."),og()(),Il(538,"blockquote")(539,"p"),Qx(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(541,"code"),Qx(542,"medium"),og(),Qx(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(544,"a",25),Qx(545,"po-theme"),og(),Qx(546,"."),og()()()(),Il(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),Qx(551," p-target"),zl(552,"br"),og()()(),Il(553,"td",18)(554,"code",26),Qx(555,"any"),og()(),Il(556,"td",20),Qx(557,"-"),og(),Il(558,"td",21)(559,"p"),Qx(560,"Para utilizar o "),Il(561,"code"),Qx(562,"po-popup"),og(),Qx(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),Il(564,"code"),Qx(565,"toggle"),og(),Qx(566,", por exemplo:"),og(),Il(567,"pre")(568,"code"),Qx(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),og()(),Il(570,"p"),Qx(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),Il(572,"code"),Qx(573,"ElementRef"),og(),Qx(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),og(),Il(575,"pre")(576,"code"),Qx(577,`// component.html

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
`),og()()()()(),Il(578,"h3",10),Qx(579,"M\xE9todos"),og(),Il(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),Qx(586," close "),og()()()()(),Il(587,"tr",21)(588,"td",21)(589,"p"),Qx(590,"Fecha o componente "),Il(591,"em"),Qx(592,"popup"),og(),Qx(593,"."),og(),Il(594,"blockquote")(595,"p"),Qx(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),og()()()()(),zl(597,"br"),Il(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),Qx(604," open "),og()()()()(),Il(605,"tr",21)(606,"td",21)(607,"p"),Qx(608,"Abre o componente "),Il(609,"em"),Qx(610,"popup"),og(),Qx(611,"."),og(),Il(612,"blockquote")(613,"p"),Qx(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),og()()()()(),zl(615,"br"),Il(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),Qx(622," toggle "),og()()()()(),Il(623,"tr",21)(624,"td",21)(625,"p"),Qx(626,"Respons\xE1vel por abrir e fechar o "),Il(627,"em"),Qx(628,"popup"),og(),Qx(629,"."),og(),Il(630,"p"),Qx(631,"Quando disparado abrir\xE1 o "),Il(632,"em"),Qx(633,"popup"),og(),Qx(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),Il(635,"code"),Qx(636,"target"),og(),Qx(637," ir\xE1 fecha-lo."),og(),Il(638,"p"),Qx(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),og()()()(),zl(640,"br"),Il(641,"h3"),Qx(642,"Interfaces"),og(),Il(643,"h4",29)(644,"code",5),Qx(645,"PoPopupAction"),og()(),Il(646,"div",2)(647,"p"),Qx(648,"Interface para lista de a\xE7\xF5es do componente."),og()(),Il(649,"h4",10),Qx(650,"Propriedades"),og(),Il(651,"table",11)(652,"tr",12)(653,"th",13),Qx(654,"Nome"),og(),Il(655,"th",13),Qx(656,"Tipo"),og(),Il(657,"th",13),Qx(658,"Descri\xE7\xE3o"),og()(),Il(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),Qx(663," action"),zl(664,"br"),og()()(),Il(665,"td",18)(666,"code",30),Qx(667,"Function"),og()(),Il(668,"td",21)(669,"em")(670,"strong"),Qx(671,"(opcional)"),og()(),Il(672,"p"),Qx(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Il(674,"p"),Qx(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(676,"code"),Qx(677,"subItems"),og(),Qx(678,"."),og(),Il(679,"blockquote")(680,"p"),Qx(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Il(682,"em"),Qx(683,"bind"),og(),Qx(684,`:
`),Il(685,"code"),Qx(686,"action: this.myFunction.bind(this)"),og()()()()(),Il(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),Qx(691," disabled"),zl(692,"br"),og()()(),Il(693,"td",18)(694,"code",23),Qx(695,"boolean "),og(),Il(696,"code",30),Qx(697," Function"),og()(),Il(698,"td",21)(699,"em")(700,"strong"),Qx(701,"(opcional)"),og()(),Il(702,"p"),Qx(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Il(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),Qx(708," icon"),zl(709,"br"),og()()(),Il(710,"td",18)(711,"code",24),Qx(712,"string "),og(),Il(713,"code",31),Qx(714," TemplateRef<void>"),og()(),Il(715,"td",21)(716,"em")(717,"strong"),Qx(718,"(opcional)"),og()(),Il(719,"p"),Qx(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Il(721,"p"),Qx(722,"Aceita \xEDcones da "),Il(723,"a",32),Qx(724,"Biblioteca de \xEDcones"),og(),Qx(725,`, fontes externas (ex: Font Awesome)
ou um `),Il(726,"code"),Qx(727,"TemplateRef"),og(),Qx(728," para \xEDcones customizados."),og(),Il(729,"pre")(730,"code"),Qx(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Il(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),Qx(736," label"),zl(737,"br"),og()()(),Il(738,"td",18)(739,"code",24),Qx(740,"string"),og()(),Il(741,"td",21)(742,"p"),Qx(743,"R\xF3tulo da a\xE7\xE3o."),og(),Il(744,"p"),Qx(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Il(746,"code"),Qx(747,"subItems"),og(),Qx(748,"."),og()()(),Il(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),Qx(753," selected"),zl(754,"br"),og()()(),Il(755,"td",18)(756,"code",23),Qx(757,"boolean"),og()(),Il(758,"td",21)(759,"em")(760,"strong"),Qx(761,"(opcional)"),og()(),Il(762,"p"),Qx(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Il(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),Qx(768," separator"),zl(769,"br"),og()()(),Il(770,"td",18)(771,"code",23),Qx(772,"boolean"),og()(),Il(773,"td",21)(774,"em")(775,"strong"),Qx(776,"(opcional)"),og()(),Il(777,"p"),Qx(778,"Atribui uma linha separadora acima do item."),og()()(),Il(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),Qx(783," subItems"),zl(784,"br"),og()()(),Il(785,"td",18)(786,"code",33),Qx(787,"Array<PoPopupAction>"),og()(),Il(788,"td",21)(789,"em")(790,"strong"),Qx(791,"(opcional)"),og()(),Il(792,"p"),Qx(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Il(794,"p"),Qx(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Il(796,"blockquote")(797,"p"),Qx(798,"As propriedades "),Il(799,"code"),Qx(800,"disabled"),og(),Qx(801,", "),Il(802,"code"),Qx(803,"type"),og(),Qx(804," e "),Il(805,"code"),Qx(806,"visible"),og(),Qx(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Il(808,"blockquote")(809,"p"),Qx(810,"Quando "),Il(811,"code"),Qx(812,"url"),og(),Qx(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Il(814,"blockquote")(815,"p"),Qx(816,"Em subn\xEDveis aninhados, o "),Il(817,"code"),Qx(818,"icon"),og(),Qx(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Il(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),Qx(824," type"),zl(825,"br"),og()()(),Il(826,"td",18)(827,"code",24),Qx(828,"string"),og()(),Il(829,"td",21)(830,"em")(831,"strong"),Qx(832,"(opcional)"),og()(),Il(833,"p"),Qx(834,"Define a cor do item."),og(),Il(835,"p"),Qx(836,"Valores v\xE1lidos:"),og(),Il(837,"ul")(838,"li")(839,"code"),Qx(840,"default"),og()(),Il(841,"li")(842,"code"),Qx(843,"danger"),og()()()()(),Il(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),Qx(848," url"),zl(849,"br"),og()()(),Il(850,"td",18)(851,"code",24),Qx(852,"string"),og()(),Il(853,"td",21)(854,"em")(855,"strong"),Qx(856,"(opcional)"),og()(),Il(857,"p"),Qx(858,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Il(859,"p"),Qx(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Il(861,"code"),Qx(862,"url"),og(),Qx(863," \xE9 informada em um agrupador, o clique "),Il(864,"strong"),Qx(865,"n\xE3o abrir\xE1 os subitens"),og(),Qx(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Il(867,"blockquote")(868,"p"),Qx(869,"Quando informada, tem prioridade sobre a propriedade "),Il(870,"code"),Qx(871,"action"),og(),Qx(872,"."),og()()()(),Il(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),Qx(877," visible"),zl(878,"br"),og()()(),Il(879,"td",18)(880,"code",23),Qx(881,"boolean "),og(),Il(882,"code",30),Qx(883," Function"),og()(),Il(884,"td",21)(885,"em")(886,"strong"),Qx(887,"(opcional)"),og()(),Il(888,"p"),Qx(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()()());},dependencies:[Ka],encapsulation:2})}return l})();var Ae=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(C(Xn),C(En))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-popup-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,ve,Pe,we,_e],encapsulation:2})}return l})();var Ge=[{path:"",component:Ae}],Me=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[uL.forChild(Ge),uL]})}return l})();var qt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[sr,Me]})}return l})();export{qt as DocPoPopupModule};