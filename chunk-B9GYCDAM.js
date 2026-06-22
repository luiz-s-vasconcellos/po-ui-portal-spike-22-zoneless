import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,co as nS,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,aI as dc,aQ as gx,aR as px,aS as mx,a3 as rNe,bk as l_,cq as u_,am as Ot,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-badge");},dependencies:[nS],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Badge Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-badge></po-badge>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-badge-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,fe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,le],encapsulation:2})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=wx();Sl(0,"div",1),Wl(1,"po-badge",2),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-number",3),ww("ngModelChange",function(r){return Ky(g),nN(i.value,r)||(i.value=r),Xy(r)}),og(),e0(),Sl(7,"po-input",4),ww("ngModelChange",function(r){return Ky(g),nN(i.color,r)||(i.color=r),Xy(r)}),og(),e0(),og(),Sl(8,"div",1)(9,"po-checkbox-group",5),ww("ngModelChange",function(r){return Ky(g),nN(i.properties,r)||(i.properties=r),Xy(r)}),ft("p-change",function(r){return i.propertiesChange(r)}),og(),e0(),Sl(10,"po-radio-group",6),ww("ngModelChange",function(r){return Ky(g),nN(i.status,r)||(i.status=r),Xy(r)}),ft("p-change",function(r){return i.statusChange(r)}),og(),e0(),Sl(11,"po-radio-group",7),ww("ngModelChange",function(r){return Ky(g),nN(i.size,r)||(i.size=r),Xy(r)}),og(),e0(),Sl(12,"po-radio-group",8),ww("ngModelChange",function(r){return Ky(g),nN(i.icon,r)||(i.icon=r),Xy(r)}),ft("p-change",function(r){return i.iconsChange(r)}),og(),e0(),og(),Sl(13,"div",1)(14,"po-button",9),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),nw("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Lp(5),Ew("ngModel",i.value),nw("p-min",0),n0(),Lp(),Ew("ngModel",i.color),n0(),Lp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.status),nw("p-options",i.statusOptions),n0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizesOptions),n0(),Lp(),Ew("ngModel",i.icon),nw("p-options",i.iconsOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,Rhe,wde,nS],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Badge Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-badge-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return a})();function Pe(a,Se){if(a&1&&(Sl(0,"div",1)(1,"po-container")(2,"div",2),l_(),Sl(3,"svg",3),Wl(4,"circle",4)(5,"path",5),og(),u_(),Sl(6,"p",6),eN(7),Wl(8,"po-badge",7),og()()()()),a&2){let p=Se.$implicit;Lp(3),Ot("kind",p.status),Lp(4),dg(" ",p.nome," "),Lp(),nw("p-status",p.status==="online"?"positive":"negative");}}var me=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"div"),gx(2,Pe,9,3,"div",1,px),og()()),l&2&&(Lp(2),mx(i.users));},dependencies:[dc,nS],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Badge Message"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-badge-message/sample-po-badge-message.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row po-mt-3">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-badge-message/sample-po-badge-message.component.css"),og(),Sl(25,"pre",11),eN(26,`.po-badge-wrap {
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
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-badge-message"),og(),Wl(29,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Be,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-badge."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoBadgeComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),og()(),Sl(15,"div",6)(16,"h4",7),eN(17,"Seletor"),og(),Sl(18,"pre",8),eN(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),og()(),Sl(20,"h4",9),eN(21,"Propriedades"),og(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),eN(25,"Nome"),og(),Sl(26,"th",12),eN(27,"Tipo"),og(),Sl(28,"th",12),eN(29,"Padr\xE3o"),og(),Sl(30,"th",12),eN(31,"Descri\xE7\xE3o"),og()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),eN(36," p-aria-label"),Wl(37,"br"),og()()(),Sl(38,"td",17)(39,"code",18),eN(40,"string"),og()(),Sl(41,"td",19),eN(42,"-"),og(),Sl(43,"td",20)(44,"p"),eN(45,"Define um "),Sl(46,"code"),eN(47,"aria-label"),og(),eN(48," para o "),Sl(49,"code"),eN(50,"po-badge"),og()()()(),Sl(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),eN(55," p-color"),Wl(56,"br"),og()()(),Sl(57,"td",17)(58,"code",18),eN(59,"string"),og()(),Sl(60,"td",19)(61,"p")(62,"code"),eN(63,"color-07"),og()()(),Sl(64,"td",20)(65,"em")(66,"strong"),eN(67,"(opcional)"),og()(),Sl(68,"p"),eN(69,"Determina a cor do "),Sl(70,"code"),eN(71,"po-badge"),og(),eN(72,". As maneiras de customizar as cores s\xE3o:"),og(),Sl(73,"ul")(74,"li"),eN(75,"Hexadeximal, por exemplo "),Sl(76,"code"),eN(77,"#c64840"),og(),eN(78,";"),og(),Sl(79,"li"),eN(80,"RGB, como "),Sl(81,"code"),eN(82,"rgb(0, 0, 165)"),og(),eN(83,";"),og(),Sl(84,"li"),eN(85,"O nome da cor, por exemplo "),Sl(86,"code"),eN(87,"blue"),og(),eN(88,";"),og(),Sl(89,"li"),eN(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Sl(91,"ul")(92,"li"),Wl(93,"span",21),Sl(94,"code"),eN(95,"color-01"),og()(),Sl(96,"li"),Wl(97,"span",22),Sl(98,"code"),eN(99,"color-02"),og()(),Sl(100,"li"),Wl(101,"span",23),Sl(102,"code"),eN(103,"color-03"),og()(),Sl(104,"li"),Wl(105,"span",24),Sl(106,"code"),eN(107,"color-04"),og()(),Sl(108,"li"),Wl(109,"span",25),Sl(110,"code"),eN(111,"color-05"),og()(),Sl(112,"li"),Wl(113,"span",26),Sl(114,"code"),eN(115,"color-06"),og()(),Sl(116,"li"),Wl(117,"span",27),Sl(118,"code"),eN(119,"color-07"),og()(),Sl(120,"li"),Wl(121,"span",28),Sl(122,"code"),eN(123,"color-08"),og()(),Sl(124,"li"),Wl(125,"span",29),Sl(126,"code"),eN(127,"color-09"),og()(),Sl(128,"li"),Wl(129,"span",30),Sl(130,"code"),eN(131,"color-10"),og()(),Sl(132,"li"),Wl(133,"span",31),Sl(134,"code"),eN(135,"color-11"),og()(),Sl(136,"li"),Wl(137,"span",32),Sl(138,"code"),eN(139,"color-12"),og()()()()(),Sl(140,"blockquote")(141,"p"),eN(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(143,"strong"),eN(144,"Caption Tag Colors"),og(),eN(145,":"),og()(),Sl(146,"ul")(147,"li"),Wl(148,"span",33),Sl(149,"code"),eN(150,"caption-tag-01"),og(),Wl(151,"span",34),Sl(152,"code"),eN(153,"caption-tag-02"),og(),Wl(154,"span",35),Sl(155,"code"),eN(156,"caption-tag-03"),og(),Wl(157,"span",36),Sl(158,"code"),eN(159,"caption-tag-04"),og(),Wl(160,"span",37),Sl(161,"code"),eN(162,"caption-tag-05"),og()(),Sl(163,"li"),Wl(164,"span",38),Sl(165,"code"),eN(166,"caption-tag-06"),og(),Wl(167,"span",39),Sl(168,"code"),eN(169,"caption-tag-07"),og(),Wl(170,"span",40),Sl(171,"code"),eN(172,"caption-tag-08"),og(),Wl(173,"span",41),Sl(174,"code"),eN(175,"caption-tag-09"),og(),Wl(176,"span",42),Sl(177,"code"),eN(178,"caption-tag-10"),og()(),Sl(179,"li"),Wl(180,"span",43),Sl(181,"code"),eN(182,"caption-tag-11"),og(),Wl(183,"span",44),Sl(184,"code"),eN(185,"caption-tag-12"),og(),Wl(186,"span",45),Sl(187,"code"),eN(188,"caption-tag-13"),og(),Wl(189,"span",46),Sl(190,"code"),eN(191,"caption-tag-14"),og(),Wl(192,"span",47),Sl(193,"code"),eN(194,"caption-tag-15"),og()(),Sl(195,"li"),Wl(196,"span",48),Sl(197,"code"),eN(198,"caption-tag-16"),og(),Wl(199,"span",49),Sl(200,"code"),eN(201,"caption-tag-17"),og(),Wl(202,"span",50),Sl(203,"code"),eN(204,"caption-tag-18"),og(),Wl(205,"span",51),Sl(206,"code"),eN(207,"caption-tag-19"),og(),Wl(208,"span",52),Sl(209,"code"),eN(210,"caption-tag-20"),og()(),Sl(211,"li"),Wl(212,"span",53),Sl(213,"code"),eN(214,"caption-tag-21"),og(),Wl(215,"span",54),Sl(216,"code"),eN(217,"caption-tag-22"),og(),Wl(218,"span",55),Sl(219,"code"),eN(220,"caption-tag-23"),og(),Wl(221,"span",56),Sl(222,"code"),eN(223,"caption-tag-24"),og(),Wl(224,"span",57),Sl(225,"code"),eN(226,"caption-tag-25"),og()(),Sl(227,"li"),Wl(228,"span",58),Sl(229,"code"),eN(230,"caption-tag-26"),og(),Wl(231,"span",59),Sl(232,"code"),eN(233,"caption-tag-27"),og(),Wl(234,"span",60),Sl(235,"code"),eN(236,"caption-tag-28"),og(),Wl(237,"span",61),Sl(238,"code"),eN(239,"caption-tag-29"),og(),Wl(240,"span",62),Sl(241,"code"),eN(242,"caption-tag-30"),og()(),Sl(243,"li"),Wl(244,"span",63),Sl(245,"code"),eN(246,"caption-tag-31"),og(),Wl(247,"span",64),Sl(248,"code"),eN(249,"caption-tag-32"),og(),Wl(250,"span",65),Sl(251,"code"),eN(252,"caption-tag-33"),og(),Wl(253,"span",66),Sl(254,"code"),eN(255,"caption-tag-34"),og(),Wl(256,"span",67),Sl(257,"code"),eN(258,"caption-tag-35"),og()()(),Sl(259,"p"),eN(260,"Exemplo de uso:"),og(),Sl(261,"pre")(262,"code"),eN(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),og()()()(),Sl(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),eN(268," p-icon"),Wl(269,"br"),og()()(),Sl(270,"td",17)(271,"code",68),eN(272,"PoBadgeIcon"),og()(),Sl(273,"td",19),eN(274,"-"),og(),Sl(275,"td",20)(276,"em")(277,"strong"),eN(278,"(opcional)"),og()(),Sl(279,"p"),eN(280,"\xCDcone exibido no "),Sl(281,"code"),eN(282,"po-badge"),og(),eN(283,"."),og(),Sl(284,"p"),eN(285,"Para exibir icone do status atual declare a propriedade "),Sl(286,"code"),eN(287,"p-icon"),og(),eN(288,". conforme exemplo abaixo:"),og(),Sl(289,"pre")(290,"code"),eN(291,`<po-badge [p-icon]="true"></po-badge>
`),og()(),Sl(292,"p"),eN(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(294,"a",69),eN(295,"Biblioteca de \xEDcones"),og(),eN(296,". conforme exemplo abaixo:"),og(),Sl(297,"pre")(298,"code"),eN(299,`<po-badge p-icon="an an-user"></po-badge>
`),og()(),Sl(300,"p"),eN(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(302,"em"),eN(303,"Font Awesome"),og(),eN(304,", da seguinte forma:"),og(),Sl(305,"pre")(306,"code"),eN(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),og()(),Sl(308,"p"),eN(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(310,"code"),eN(311,"TemplateRef"),og(),eN(312,", conforme exemplo abaixo:"),og(),Sl(313,"pre")(314,"code"),eN(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Sl(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),eN(320," p-show-border"),Wl(321,"br"),og()()(),Sl(322,"td",17)(323,"code",70),eN(324,"boolean"),og()(),Sl(325,"td",19),eN(326,"-"),og(),Sl(327,"td",20)(328,"p"),eN(329,"Exibe uma borda para o "),Sl(330,"code"),eN(331,"po-badge"),og()(),Sl(332,"blockquote")(333,"p"),eN(334,"Pode personalizar cor da bordar com a propriedade "),Sl(335,"code"),eN(336,"p-color-border"),og()()()()(),Sl(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),eN(341," p-size"),Wl(342,"br"),og()()(),Sl(343,"td",17)(344,"code",71),eN(345,"PoBadgeSize"),og()(),Sl(346,"td",19)(347,"p")(348,"code"),eN(349,"medium"),og()()(),Sl(350,"td",20)(351,"p"),eN(352,"Define o tamanho do "),Sl(353,"code"),eN(354,"po-badge"),og()(),Sl(355,"p"),eN(356,"Valores v\xE1lidos:"),og(),Sl(357,"ul")(358,"li")(359,"code"),eN(360,"small"),og(),eN(361,": o "),Sl(362,"code"),eN(363,"po-badge"),og(),eN(364," fica do tamanho padr\xE3o, com 8px de altura.;"),og(),Sl(365,"li")(366,"code"),eN(367,"medium"),og(),eN(368,": o "),Sl(369,"code"),eN(370,"po-badge"),og(),eN(371," fica do tamanho padr\xE3o, com 16px de altura.;"),og(),Sl(372,"li")(373,"code"),eN(374,"large"),og(),eN(375,": o "),Sl(376,"code"),eN(377,"po-badge"),og(),eN(378," fica do tamanho padr\xE3o, com 24px de altura.;"),og()()()(),Sl(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),eN(383," p-status"),Wl(384,"br"),og()()(),Sl(385,"td",17)(386,"code",72),eN(387,"PoBadgeStatus"),og()(),Sl(388,"td",19),eN(389,"-"),og(),Sl(390,"td",20)(391,"p"),eN(392,"Define o estado do "),Sl(393,"code"),eN(394,"po-badge"),og()(),Sl(395,"p"),eN(396,"Valores v\xE1lidos:"),og(),Sl(397,"ul")(398,"li")(399,"code"),eN(400,"positive"),og(),eN(401,": Define a cor do "),Sl(402,"code"),eN(403,"po-badge"),og(),eN(404," com a cor de feedback positivo.;"),og(),Sl(405,"li")(406,"code"),eN(407,"negative"),og(),eN(408,": Define a cor do "),Sl(409,"code"),eN(410,"po-badge"),og(),eN(411," com a cor de feedback negative.;"),og(),Sl(412,"li")(413,"code"),eN(414,"warning"),og(),eN(415,": Define a cor do "),Sl(416,"code"),eN(417,"po-badge"),og(),eN(418," com a cor de feedback warning.;"),og(),Sl(419,"li")(420,"code"),eN(421,"disabled"),og(),eN(422,": Define a cor do "),Sl(423,"code"),eN(424,"po-badge"),og(),eN(425," com a cor de feedback disabled;"),og()()()(),Sl(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),eN(430," p-value"),Wl(431,"br"),og()()(),Sl(432,"td",17)(433,"code",73),eN(434,"number"),og()(),Sl(435,"td",19),eN(436,"-"),og(),Sl(437,"td",20)(438,"p"),eN(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-badge-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,re,de,ce,ge],encapsulation:2})}return a})();var Me=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[hL.forChild(Me),hL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,be]})}return a})();export{$e as DocPoBadgeModule};