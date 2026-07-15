import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,co as oS,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,aI as dc,aQ as yx,aR as vx,aS as _x,a3 as sNe,bk as l_,cq as u_,am as Ot,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-badge");},dependencies:[oS],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Badge Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-badge></po-badge>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-badge-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,fe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:true},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore();}propertiesChange(p){this.properties=p;}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=false,p==="none"&&(this.iconsOptions[4].disabled=true);}iconsChange(p){this.value=void 0,this.showIcon=p==="true";}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=false,this.iconsOptions[4].disabled=true,this.properties=[];}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs"]],standalone:false,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=Ix();Sl(0,"div",1),Wl(1,"po-badge",2),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-number",3),Cw("ngModelChange",function(r){return Ky(g),oN(i.value,r)||(i.value=r),Xy(r)}),og(),n0(),Sl(7,"po-input",4),Cw("ngModelChange",function(r){return Ky(g),oN(i.color,r)||(i.color=r),Xy(r)}),og(),n0(),og(),Sl(8,"div",1)(9,"po-checkbox-group",5),Cw("ngModelChange",function(r){return Ky(g),oN(i.properties,r)||(i.properties=r),Xy(r)}),ft("p-change",function(r){return i.propertiesChange(r)}),og(),n0(),Sl(10,"po-radio-group",6),Cw("ngModelChange",function(r){return Ky(g),oN(i.status,r)||(i.status=r),Xy(r)}),ft("p-change",function(r){return i.statusChange(r)}),og(),n0(),Sl(11,"po-radio-group",7),Cw("ngModelChange",function(r){return Ky(g),oN(i.size,r)||(i.size=r),Xy(r)}),og(),n0(),Sl(12,"po-radio-group",8),Cw("ngModelChange",function(r){return Ky(g),oN(i.icon,r)||(i.icon=r),Xy(r)}),ft("p-change",function(r){return i.iconsChange(r)}),og(),n0(),og(),Sl(13,"div",1)(14,"po-button",9),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Lp(),rw("p-color",i.color)("p-icon",i.showIcon?true:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),Lp(5),ww("ngModel",i.value),rw("p-min",0),i0(),Lp(),ww("ngModel",i.color),i0(),Lp(2),ww("ngModel",i.properties),rw("p-options",i.propertiesOptions),i0(),Lp(),ww("ngModel",i.status),rw("p-options",i.statusOptions),i0(),Lp(),ww("ngModel",i.size),rw("p-options",i.sizesOptions),i0(),Lp(),ww("ngModel",i.icon),rw("p-options",i.iconsOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Bhe,Tde,oS],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Badge Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-badge-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return a})();function Pe(a,he){if(a&1&&(Sl(0,"div",1)(1,"po-container")(2,"div",2),l_(),Sl(3,"svg",3),Wl(4,"circle",4)(5,"path",5),og(),u_(),Sl(6,"p",6),rN(7),Wl(8,"po-badge",7),og()()()()),a&2){let p=he.$implicit;Lp(3),Ot("kind",p.status),Lp(4),dg(" ",p.nome," "),Lp(),rw("p-status",p.status==="online"?"positive":"negative");}}var me=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message"]],standalone:false,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"div"),yx(2,Pe,9,3,"div",1,vx),og()()),l&2&&(Lp(2),_x(i.users));},dependencies:[dc,oS],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"],changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-message-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Badge Message"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-badge-message/sample-po-badge-message.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row po-mt-3">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),rN(24,"sample-po-badge-message/sample-po-badge-message.component.css"),og(),Sl(25,"pre",11),rN(26,`.po-badge-wrap {
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
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-badge-message"),og(),Wl(29,"hr")),l&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ye,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-badge-doc"]],standalone:false,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-badge."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoBadgeComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),og()(),Sl(15,"div",6)(16,"h4",7),rN(17,"Seletor"),og(),Sl(18,"pre",8),rN(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),og()(),Sl(20,"h4",9),rN(21,"Propriedades"),og(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),rN(25,"Nome"),og(),Sl(26,"th",12),rN(27,"Tipo"),og(),Sl(28,"th",12),rN(29,"Padr\xE3o"),og(),Sl(30,"th",12),rN(31,"Descri\xE7\xE3o"),og()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),rN(36," p-aria-label"),Wl(37,"br"),og()()(),Sl(38,"td",17)(39,"code",18),rN(40,"string"),og()(),Sl(41,"td",19),rN(42,"-"),og(),Sl(43,"td",20)(44,"p"),rN(45,"Define um "),Sl(46,"code"),rN(47,"aria-label"),og(),rN(48," para o "),Sl(49,"code"),rN(50,"po-badge"),og()()()(),Sl(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),rN(55," p-color"),Wl(56,"br"),og()()(),Sl(57,"td",17)(58,"code",18),rN(59,"string"),og()(),Sl(60,"td",19)(61,"p")(62,"code"),rN(63,"color-07"),og()()(),Sl(64,"td",20)(65,"em")(66,"strong"),rN(67,"(opcional)"),og()(),Sl(68,"p"),rN(69,"Determina a cor do "),Sl(70,"code"),rN(71,"po-badge"),og(),rN(72,". As maneiras de customizar as cores s\xE3o:"),og(),Sl(73,"ul")(74,"li"),rN(75,"Hexadeximal, por exemplo "),Sl(76,"code"),rN(77,"#c64840"),og(),rN(78,";"),og(),Sl(79,"li"),rN(80,"RGB, como "),Sl(81,"code"),rN(82,"rgb(0, 0, 165)"),og(),rN(83,";"),og(),Sl(84,"li"),rN(85,"O nome da cor, por exemplo "),Sl(86,"code"),rN(87,"blue"),og(),rN(88,";"),og(),Sl(89,"li"),rN(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),Sl(91,"ul")(92,"li"),Wl(93,"span",21),Sl(94,"code"),rN(95,"color-01"),og()(),Sl(96,"li"),Wl(97,"span",22),Sl(98,"code"),rN(99,"color-02"),og()(),Sl(100,"li"),Wl(101,"span",23),Sl(102,"code"),rN(103,"color-03"),og()(),Sl(104,"li"),Wl(105,"span",24),Sl(106,"code"),rN(107,"color-04"),og()(),Sl(108,"li"),Wl(109,"span",25),Sl(110,"code"),rN(111,"color-05"),og()(),Sl(112,"li"),Wl(113,"span",26),Sl(114,"code"),rN(115,"color-06"),og()(),Sl(116,"li"),Wl(117,"span",27),Sl(118,"code"),rN(119,"color-07"),og()(),Sl(120,"li"),Wl(121,"span",28),Sl(122,"code"),rN(123,"color-08"),og()(),Sl(124,"li"),Wl(125,"span",29),Sl(126,"code"),rN(127,"color-09"),og()(),Sl(128,"li"),Wl(129,"span",30),Sl(130,"code"),rN(131,"color-10"),og()(),Sl(132,"li"),Wl(133,"span",31),Sl(134,"code"),rN(135,"color-11"),og()(),Sl(136,"li"),Wl(137,"span",32),Sl(138,"code"),rN(139,"color-12"),og()()()()(),Sl(140,"blockquote")(141,"p"),rN(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(143,"strong"),rN(144,"Caption Tag Colors"),og(),rN(145,":"),og()(),Sl(146,"ul")(147,"li"),Wl(148,"span",33),Sl(149,"code"),rN(150,"caption-tag-01"),og(),Wl(151,"span",34),Sl(152,"code"),rN(153,"caption-tag-02"),og(),Wl(154,"span",35),Sl(155,"code"),rN(156,"caption-tag-03"),og(),Wl(157,"span",36),Sl(158,"code"),rN(159,"caption-tag-04"),og(),Wl(160,"span",37),Sl(161,"code"),rN(162,"caption-tag-05"),og()(),Sl(163,"li"),Wl(164,"span",38),Sl(165,"code"),rN(166,"caption-tag-06"),og(),Wl(167,"span",39),Sl(168,"code"),rN(169,"caption-tag-07"),og(),Wl(170,"span",40),Sl(171,"code"),rN(172,"caption-tag-08"),og(),Wl(173,"span",41),Sl(174,"code"),rN(175,"caption-tag-09"),og(),Wl(176,"span",42),Sl(177,"code"),rN(178,"caption-tag-10"),og()(),Sl(179,"li"),Wl(180,"span",43),Sl(181,"code"),rN(182,"caption-tag-11"),og(),Wl(183,"span",44),Sl(184,"code"),rN(185,"caption-tag-12"),og(),Wl(186,"span",45),Sl(187,"code"),rN(188,"caption-tag-13"),og(),Wl(189,"span",46),Sl(190,"code"),rN(191,"caption-tag-14"),og(),Wl(192,"span",47),Sl(193,"code"),rN(194,"caption-tag-15"),og()(),Sl(195,"li"),Wl(196,"span",48),Sl(197,"code"),rN(198,"caption-tag-16"),og(),Wl(199,"span",49),Sl(200,"code"),rN(201,"caption-tag-17"),og(),Wl(202,"span",50),Sl(203,"code"),rN(204,"caption-tag-18"),og(),Wl(205,"span",51),Sl(206,"code"),rN(207,"caption-tag-19"),og(),Wl(208,"span",52),Sl(209,"code"),rN(210,"caption-tag-20"),og()(),Sl(211,"li"),Wl(212,"span",53),Sl(213,"code"),rN(214,"caption-tag-21"),og(),Wl(215,"span",54),Sl(216,"code"),rN(217,"caption-tag-22"),og(),Wl(218,"span",55),Sl(219,"code"),rN(220,"caption-tag-23"),og(),Wl(221,"span",56),Sl(222,"code"),rN(223,"caption-tag-24"),og(),Wl(224,"span",57),Sl(225,"code"),rN(226,"caption-tag-25"),og()(),Sl(227,"li"),Wl(228,"span",58),Sl(229,"code"),rN(230,"caption-tag-26"),og(),Wl(231,"span",59),Sl(232,"code"),rN(233,"caption-tag-27"),og(),Wl(234,"span",60),Sl(235,"code"),rN(236,"caption-tag-28"),og(),Wl(237,"span",61),Sl(238,"code"),rN(239,"caption-tag-29"),og(),Wl(240,"span",62),Sl(241,"code"),rN(242,"caption-tag-30"),og()(),Sl(243,"li"),Wl(244,"span",63),Sl(245,"code"),rN(246,"caption-tag-31"),og(),Wl(247,"span",64),Sl(248,"code"),rN(249,"caption-tag-32"),og(),Wl(250,"span",65),Sl(251,"code"),rN(252,"caption-tag-33"),og(),Wl(253,"span",66),Sl(254,"code"),rN(255,"caption-tag-34"),og(),Wl(256,"span",67),Sl(257,"code"),rN(258,"caption-tag-35"),og()()(),Sl(259,"p"),rN(260,"Exemplo de uso:"),og(),Sl(261,"pre")(262,"code"),rN(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),og()()()(),Sl(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),rN(268," p-icon"),Wl(269,"br"),og()()(),Sl(270,"td",17)(271,"code",68),rN(272,"PoBadgeIcon"),og()(),Sl(273,"td",19),rN(274,"-"),og(),Sl(275,"td",20)(276,"em")(277,"strong"),rN(278,"(opcional)"),og()(),Sl(279,"p"),rN(280,"\xCDcone exibido no "),Sl(281,"code"),rN(282,"po-badge"),og(),rN(283,"."),og(),Sl(284,"p"),rN(285,"Para exibir icone do status atual declare a propriedade "),Sl(286,"code"),rN(287,"p-icon"),og(),rN(288,". conforme exemplo abaixo:"),og(),Sl(289,"pre")(290,"code"),rN(291,`<po-badge [p-icon]="true"></po-badge>
`),og()(),Sl(292,"p"),rN(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(294,"a",69),rN(295,"Biblioteca de \xEDcones"),og(),rN(296,". conforme exemplo abaixo:"),og(),Sl(297,"pre")(298,"code"),rN(299,`<po-badge p-icon="an an-user"></po-badge>
`),og()(),Sl(300,"p"),rN(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(302,"em"),rN(303,"Font Awesome"),og(),rN(304,", da seguinte forma:"),og(),Sl(305,"pre")(306,"code"),rN(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),og()(),Sl(308,"p"),rN(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(310,"code"),rN(311,"TemplateRef"),og(),rN(312,", conforme exemplo abaixo:"),og(),Sl(313,"pre")(314,"code"),rN(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()()()(),Sl(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),rN(320," p-show-border"),Wl(321,"br"),og()()(),Sl(322,"td",17)(323,"code",70),rN(324,"boolean"),og()(),Sl(325,"td",19),rN(326,"-"),og(),Sl(327,"td",20)(328,"p"),rN(329,"Exibe uma borda para o "),Sl(330,"code"),rN(331,"po-badge"),og()(),Sl(332,"blockquote")(333,"p"),rN(334,"Pode personalizar cor da bordar com a propriedade "),Sl(335,"code"),rN(336,"p-color-border"),og()()()()(),Sl(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),rN(341," p-size"),Wl(342,"br"),og()()(),Sl(343,"td",17)(344,"code",71),rN(345,"PoBadgeSize"),og()(),Sl(346,"td",19)(347,"p")(348,"code"),rN(349,"medium"),og()()(),Sl(350,"td",20)(351,"p"),rN(352,"Define o tamanho do "),Sl(353,"code"),rN(354,"po-badge"),og()(),Sl(355,"p"),rN(356,"Valores v\xE1lidos:"),og(),Sl(357,"ul")(358,"li")(359,"code"),rN(360,"small"),og(),rN(361,": o "),Sl(362,"code"),rN(363,"po-badge"),og(),rN(364," fica do tamanho padr\xE3o, com 8px de altura.;"),og(),Sl(365,"li")(366,"code"),rN(367,"medium"),og(),rN(368,": o "),Sl(369,"code"),rN(370,"po-badge"),og(),rN(371," fica do tamanho padr\xE3o, com 16px de altura.;"),og(),Sl(372,"li")(373,"code"),rN(374,"large"),og(),rN(375,": o "),Sl(376,"code"),rN(377,"po-badge"),og(),rN(378," fica do tamanho padr\xE3o, com 24px de altura.;"),og()()()(),Sl(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),rN(383," p-status"),Wl(384,"br"),og()()(),Sl(385,"td",17)(386,"code",72),rN(387,"PoBadgeStatus"),og()(),Sl(388,"td",19),rN(389,"-"),og(),Sl(390,"td",20)(391,"p"),rN(392,"Define o estado do "),Sl(393,"code"),rN(394,"po-badge"),og()(),Sl(395,"p"),rN(396,"Valores v\xE1lidos:"),og(),Sl(397,"ul")(398,"li")(399,"code"),rN(400,"positive"),og(),rN(401,": Define a cor do "),Sl(402,"code"),rN(403,"po-badge"),og(),rN(404," com a cor de feedback positivo.;"),og(),Sl(405,"li")(406,"code"),rN(407,"negative"),og(),rN(408,": Define a cor do "),Sl(409,"code"),rN(410,"po-badge"),og(),rN(411," com a cor de feedback negative.;"),og(),Sl(412,"li")(413,"code"),rN(414,"warning"),og(),rN(415,": Define a cor do "),Sl(416,"code"),rN(417,"po-badge"),og(),rN(418," com a cor de feedback warning.;"),og(),Sl(419,"li")(420,"code"),rN(421,"disabled"),og(),rN(422,": Define a cor do "),Sl(423,"code"),rN(424,"po-badge"),og(),rN(425," com a cor de feedback disabled;"),og()()()(),Sl(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),rN(430," p-value"),Wl(431,"br"),og()()(),Sl(432,"td",17)(433,"code",73),rN(434,"number"),og()(),Sl(435,"td",19),rN(436,"-"),og(),Sl(437,"td",20)(438,"p"),rN(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-badge-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),og()()()),l&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,re,de,ce,ge],encapsulation:2,changeDetection:1})}return a})();var Me=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[mL.forChild(Me),mL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[sr,be]})}return a})();export{$e as DocPoBadgeModule};