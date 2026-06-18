import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,co as oS,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,aI as dc,aQ as hx,aR as fx,aS as px,a3 as cNe,bk as u_,cq as d_,am as Ot,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&zl(0,"po-badge");},dependencies:[oS],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Badge Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-badge></po-badge>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-badge-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=Dx();Il(0,"div",1),zl(1,"po-badge",2),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",1)(6,"po-number",3),ww("ngModelChange",function(r){return Xy(g),eN(i.value,r)||(i.value=r),Qy(r)}),og(),QA(),Il(7,"po-input",4),ww("ngModelChange",function(r){return Xy(g),eN(i.color,r)||(i.color=r),Qy(r)}),og(),QA(),og(),Il(8,"div",1)(9,"po-checkbox-group",5),ww("ngModelChange",function(r){return Xy(g),eN(i.properties,r)||(i.properties=r),Qy(r)}),ft("p-change",function(r){return i.propertiesChange(r)}),og(),QA(),Il(10,"po-radio-group",6),ww("ngModelChange",function(r){return Xy(g),eN(i.status,r)||(i.status=r),Qy(r)}),ft("p-change",function(r){return i.statusChange(r)}),og(),QA(),Il(11,"po-radio-group",7),ww("ngModelChange",function(r){return Xy(g),eN(i.size,r)||(i.size=r),Qy(r)}),og(),QA(),Il(12,"po-radio-group",8),ww("ngModelChange",function(r){return Xy(g),eN(i.icon,r)||(i.icon=r),Qy(r)}),ft("p-change",function(r){return i.iconsChange(r)}),og(),QA(),og(),Il(13,"div",1)(14,"po-button",9),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),nw("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Lp(5),Ew("ngModel",i.value),nw("p-min",0),e0(),Lp(),Ew("ngModel",i.color),e0(),Lp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.status),nw("p-options",i.statusOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizesOptions),e0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Hhe,Dde,oS],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Badge Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-badge-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return a})();function Pe(a,Se){if(a&1&&(Il(0,"div",1)(1,"po-container")(2,"div",2),u_(),Il(3,"svg",3),zl(4,"circle",4)(5,"path",5),og(),d_(),Il(6,"p",6),Qx(7),zl(8,"po-badge",7),og()()()()),a&2){let p=Se.$implicit;Lp(3),Ot("kind",p.status),Lp(4),dg(" ",p.nome," "),Lp(),nw("p-status",p.status==="online"?"positive":"negative");}}var me=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"div"),hx(2,Pe,9,3,"div",1,fx),og()()),l&2&&(Lp(2),px(i.users));},dependencies:[dc,oS],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Badge Message"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-badge-message/sample-po-badge-message.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row po-mt-3">
  <div>
    @for (user of users; track user) {
      <div class="po-mb-1">
        <po-container>
          <div class="card">
            <svg class="po-mr-2" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p class="po-mr-2 card-name-user po-text-color-neutral-dark-40">
              { { user.nome }}
              <po-badge
                class="po-badge-wrap"
                [p-status]="user.status === 'online' ? 'positive' : 'negative'"
              ></po-badge>
            </p>
          </div>
        </po-container>
      </div>
    }
  </div>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-badge-message/sample-po-badge-message.component.css"),og(),Il(25,"pre",11),Qx(26,`.po-badge-wrap {
  position: absolute;
  top: -5px;
  right: -5px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-badge-message"),og(),zl(29,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-badge."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoBadgeComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),og()(),Il(15,"div",6)(16,"h4",7),Qx(17,"Seletor"),og(),Il(18,"pre",8),Qx(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),og()(),Il(20,"h4",9),Qx(21,"Propriedades"),og(),Il(22,"table",10)(23,"tr",11)(24,"th",12),Qx(25,"Nome"),og(),Il(26,"th",12),Qx(27,"Tipo"),og(),Il(28,"th",12),Qx(29,"Padr\xE3o"),og(),Il(30,"th",12),Qx(31,"Descri\xE7\xE3o"),og()(),Il(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Qx(36," p-aria-label"),zl(37,"br"),og()()(),Il(38,"td",17)(39,"code",18),Qx(40,"string"),og()(),Il(41,"td",19),Qx(42,"-"),og(),Il(43,"td",20)(44,"p"),Qx(45,"Define um "),Il(46,"code"),Qx(47,"aria-label"),og(),Qx(48," para o "),Il(49,"code"),Qx(50,"po-badge"),og()()()(),Il(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),Qx(55," p-color"),zl(56,"br"),og()()(),Il(57,"td",17)(58,"code",18),Qx(59,"string"),og()(),Il(60,"td",19)(61,"p")(62,"code"),Qx(63,"color-07"),og()()(),Il(64,"td",20)(65,"em")(66,"strong"),Qx(67,"(opcional)"),og()(),Il(68,"p"),Qx(69,"Determina a cor do "),Il(70,"code"),Qx(71,"po-badge"),og(),Qx(72,". As maneiras de customizar as cores s\xE3o:"),og(),Il(73,"ul")(74,"li"),Qx(75,"Hexadeximal, por exemplo "),Il(76,"code"),Qx(77,"#c64840"),og(),Qx(78,";"),og(),Il(79,"li"),Qx(80,"RGB, como "),Il(81,"code"),Qx(82,"rgb(0, 0, 165)"),og(),Qx(83,";"),og(),Il(84,"li"),Qx(85,"O nome da cor, por exemplo "),Il(86,"code"),Qx(87,"blue"),og(),Qx(88,";"),og(),Il(89,"li"),Qx(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Il(91,"ul")(92,"li"),zl(93,"span",21),Il(94,"code"),Qx(95,"color-01"),og()(),Il(96,"li"),zl(97,"span",22),Il(98,"code"),Qx(99,"color-02"),og()(),Il(100,"li"),zl(101,"span",23),Il(102,"code"),Qx(103,"color-03"),og()(),Il(104,"li"),zl(105,"span",24),Il(106,"code"),Qx(107,"color-04"),og()(),Il(108,"li"),zl(109,"span",25),Il(110,"code"),Qx(111,"color-05"),og()(),Il(112,"li"),zl(113,"span",26),Il(114,"code"),Qx(115,"color-06"),og()(),Il(116,"li"),zl(117,"span",27),Il(118,"code"),Qx(119,"color-07"),og()(),Il(120,"li"),zl(121,"span",28),Il(122,"code"),Qx(123,"color-08"),og()(),Il(124,"li"),zl(125,"span",29),Il(126,"code"),Qx(127,"color-09"),og()(),Il(128,"li"),zl(129,"span",30),Il(130,"code"),Qx(131,"color-10"),og()(),Il(132,"li"),zl(133,"span",31),Il(134,"code"),Qx(135,"color-11"),og()(),Il(136,"li"),zl(137,"span",32),Il(138,"code"),Qx(139,"color-12"),og()()()()(),Il(140,"blockquote")(141,"p"),Qx(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Il(143,"strong"),Qx(144,"Caption Tag Colors"),og(),Qx(145,":"),og()(),Il(146,"ul")(147,"li"),zl(148,"span",33),Il(149,"code"),Qx(150,"caption-tag-01"),og(),zl(151,"span",34),Il(152,"code"),Qx(153,"caption-tag-02"),og(),zl(154,"span",35),Il(155,"code"),Qx(156,"caption-tag-03"),og(),zl(157,"span",36),Il(158,"code"),Qx(159,"caption-tag-04"),og(),zl(160,"span",37),Il(161,"code"),Qx(162,"caption-tag-05"),og()(),Il(163,"li"),zl(164,"span",38),Il(165,"code"),Qx(166,"caption-tag-06"),og(),zl(167,"span",39),Il(168,"code"),Qx(169,"caption-tag-07"),og(),zl(170,"span",40),Il(171,"code"),Qx(172,"caption-tag-08"),og(),zl(173,"span",41),Il(174,"code"),Qx(175,"caption-tag-09"),og(),zl(176,"span",42),Il(177,"code"),Qx(178,"caption-tag-10"),og()(),Il(179,"li"),zl(180,"span",43),Il(181,"code"),Qx(182,"caption-tag-11"),og(),zl(183,"span",44),Il(184,"code"),Qx(185,"caption-tag-12"),og(),zl(186,"span",45),Il(187,"code"),Qx(188,"caption-tag-13"),og(),zl(189,"span",46),Il(190,"code"),Qx(191,"caption-tag-14"),og(),zl(192,"span",47),Il(193,"code"),Qx(194,"caption-tag-15"),og()(),Il(195,"li"),zl(196,"span",48),Il(197,"code"),Qx(198,"caption-tag-16"),og(),zl(199,"span",49),Il(200,"code"),Qx(201,"caption-tag-17"),og(),zl(202,"span",50),Il(203,"code"),Qx(204,"caption-tag-18"),og(),zl(205,"span",51),Il(206,"code"),Qx(207,"caption-tag-19"),og(),zl(208,"span",52),Il(209,"code"),Qx(210,"caption-tag-20"),og()(),Il(211,"li"),zl(212,"span",53),Il(213,"code"),Qx(214,"caption-tag-21"),og(),zl(215,"span",54),Il(216,"code"),Qx(217,"caption-tag-22"),og(),zl(218,"span",55),Il(219,"code"),Qx(220,"caption-tag-23"),og(),zl(221,"span",56),Il(222,"code"),Qx(223,"caption-tag-24"),og(),zl(224,"span",57),Il(225,"code"),Qx(226,"caption-tag-25"),og()(),Il(227,"li"),zl(228,"span",58),Il(229,"code"),Qx(230,"caption-tag-26"),og(),zl(231,"span",59),Il(232,"code"),Qx(233,"caption-tag-27"),og(),zl(234,"span",60),Il(235,"code"),Qx(236,"caption-tag-28"),og(),zl(237,"span",61),Il(238,"code"),Qx(239,"caption-tag-29"),og(),zl(240,"span",62),Il(241,"code"),Qx(242,"caption-tag-30"),og()(),Il(243,"li"),zl(244,"span",63),Il(245,"code"),Qx(246,"caption-tag-31"),og(),zl(247,"span",64),Il(248,"code"),Qx(249,"caption-tag-32"),og(),zl(250,"span",65),Il(251,"code"),Qx(252,"caption-tag-33"),og(),zl(253,"span",66),Il(254,"code"),Qx(255,"caption-tag-34"),og(),zl(256,"span",67),Il(257,"code"),Qx(258,"caption-tag-35"),og()()(),Il(259,"p"),Qx(260,"Exemplo de uso:"),og(),Il(261,"pre")(262,"code"),Qx(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),og()()()(),Il(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),Qx(268," p-icon"),zl(269,"br"),og()()(),Il(270,"td",17)(271,"code",68),Qx(272,"PoBadgeIcon"),og()(),Il(273,"td",19),Qx(274,"-"),og(),Il(275,"td",20)(276,"em")(277,"strong"),Qx(278,"(opcional)"),og()(),Il(279,"p"),Qx(280,"\xCDcone exibido no "),Il(281,"code"),Qx(282,"po-badge"),og(),Qx(283,"."),og(),Il(284,"p"),Qx(285,"Para exibir icone do status atual declare a propriedade "),Il(286,"code"),Qx(287,"p-icon"),og(),Qx(288,". conforme exemplo abaixo:"),og(),Il(289,"pre")(290,"code"),Qx(291,`<po-badge [p-icon]="true"></po-badge>
`),og()(),Il(292,"p"),Qx(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(294,"a",69),Qx(295,"Biblioteca de \xEDcones"),og(),Qx(296,". conforme exemplo abaixo:"),og(),Il(297,"pre")(298,"code"),Qx(299,`<po-badge p-icon="an an-user"></po-badge>
`),og()(),Il(300,"p"),Qx(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(302,"em"),Qx(303,"Font Awesome"),og(),Qx(304,", da seguinte forma:"),og(),Il(305,"pre")(306,"code"),Qx(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),og()(),Il(308,"p"),Qx(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(310,"code"),Qx(311,"TemplateRef"),og(),Qx(312,", conforme exemplo abaixo:"),og(),Il(313,"pre")(314,"code"),Qx(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Il(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),Qx(320," p-show-border"),zl(321,"br"),og()()(),Il(322,"td",17)(323,"code",70),Qx(324,"boolean"),og()(),Il(325,"td",19),Qx(326,"-"),og(),Il(327,"td",20)(328,"p"),Qx(329,"Exibe uma borda para o "),Il(330,"code"),Qx(331,"po-badge"),og()(),Il(332,"blockquote")(333,"p"),Qx(334,"Pode personalizar cor da bordar com a propriedade "),Il(335,"code"),Qx(336,"p-color-border"),og()()()()(),Il(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),Qx(341," p-size"),zl(342,"br"),og()()(),Il(343,"td",17)(344,"code",71),Qx(345,"PoBadgeSize"),og()(),Il(346,"td",19)(347,"p")(348,"code"),Qx(349,"medium"),og()()(),Il(350,"td",20)(351,"p"),Qx(352,"Define o tamanho do "),Il(353,"code"),Qx(354,"po-badge"),og()(),Il(355,"p"),Qx(356,"Valores v\xE1lidos:"),og(),Il(357,"ul")(358,"li")(359,"code"),Qx(360,"small"),og(),Qx(361,": o "),Il(362,"code"),Qx(363,"po-badge"),og(),Qx(364," fica do tamanho padr\xE3o, com 8px de altura.;"),og(),Il(365,"li")(366,"code"),Qx(367,"medium"),og(),Qx(368,": o "),Il(369,"code"),Qx(370,"po-badge"),og(),Qx(371," fica do tamanho padr\xE3o, com 16px de altura.;"),og(),Il(372,"li")(373,"code"),Qx(374,"large"),og(),Qx(375,": o "),Il(376,"code"),Qx(377,"po-badge"),og(),Qx(378," fica do tamanho padr\xE3o, com 24px de altura.;"),og()()()(),Il(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),Qx(383," p-status"),zl(384,"br"),og()()(),Il(385,"td",17)(386,"code",72),Qx(387,"PoBadgeStatus"),og()(),Il(388,"td",19),Qx(389,"-"),og(),Il(390,"td",20)(391,"p"),Qx(392,"Define o estado do "),Il(393,"code"),Qx(394,"po-badge"),og()(),Il(395,"p"),Qx(396,"Valores v\xE1lidos:"),og(),Il(397,"ul")(398,"li")(399,"code"),Qx(400,"positive"),og(),Qx(401,": Define a cor do "),Il(402,"code"),Qx(403,"po-badge"),og(),Qx(404," com a cor de feedback positivo.;"),og(),Il(405,"li")(406,"code"),Qx(407,"negative"),og(),Qx(408,": Define a cor do "),Il(409,"code"),Qx(410,"po-badge"),og(),Qx(411," com a cor de feedback negative.;"),og(),Il(412,"li")(413,"code"),Qx(414,"warning"),og(),Qx(415,": Define a cor do "),Il(416,"code"),Qx(417,"po-badge"),og(),Qx(418," com a cor de feedback warning.;"),og(),Il(419,"li")(420,"code"),Qx(421,"disabled"),og(),Qx(422,": Define a cor do "),Il(423,"code"),Qx(424,"po-badge"),og(),Qx(425," com a cor de feedback disabled;"),og()()()(),Il(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),Qx(430," p-value"),zl(431,"br"),og()()(),Il(432,"td",17)(433,"code",73),Qx(434,"number"),og()(),Il(435,"td",19),Qx(436,"-"),og(),Il(437,"td",20)(438,"p"),Qx(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-badge-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,re,de,ce,ge],encapsulation:2})}return a})();var Me=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[uL.forChild(Me),uL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,be]})}return a})();export{$e as DocPoBadgeModule};