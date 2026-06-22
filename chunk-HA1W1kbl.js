import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,cr as Vp,cs as Upe,H as Wl,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,c8 as wde,aJ as Hhe,bH as M3,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,b5 as Whe,ba as fNe,ct as fo,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var re=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&Wl(0,"po-button-group",0),a&2&&nw("p-buttons",o.buttons);},dependencies:[Upe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Button Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-basic',
  templateUrl: './sample-po-button-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupBasicComponent {
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button) {
    alert(\`\${button.label}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,fe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return i})();var me=(()=>{class i{poNotification=f(Yp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Vp.None},{label:"single",value:Vp.Single},{label:"multiple",value:Vp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=wx();Sl(0,"div",2),Wl(1,"po-button-group",3),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2)(6,"po-input",4),ww("ngModelChange",function(m){return Ky(u),nN(o.button.label,m)||(o.button.label=m),Xy(m)}),og(),e0(),Sl(7,"po-input",5),ww("ngModelChange",function(m){return Ky(u),nN(o.button.action,m)||(o.button.action=m),Xy(m)}),og(),e0(),Sl(8,"po-input",6),ww("ngModelChange",function(m){return Ky(u),nN(o.button.tooltip,m)||(o.button.tooltip=m),Xy(m)}),og(),e0(),Sl(9,"po-radio-group",7),ww("ngModelChange",function(m){return Ky(u),nN(o.button.icon,m)||(o.button.icon=m),Xy(m)}),og(),e0(),Sl(10,"po-switch",8),ww("ngModelChange",function(m){return Ky(u),nN(o.button.disabled,m)||(o.button.disabled=m),Xy(m)}),og(),e0(),og(),Sl(11,"div",2)(12,"po-button",9),ft("p-click",function(){Ky(u);let m=Nx(4);return o.addButton(),Xy(m.reset())}),og()()(),Wl(13,"po-divider"),Sl(14,"form",null,1)(16,"div",2)(17,"po-select",10),ww("ngModelChange",function(m){return Ky(u),nN(o.toggle,m)||(o.toggle=m),Xy(m)}),og(),e0(),Sl(18,"po-radio-group",11),ww("ngModelChange",function(m){return Ky(u),nN(o.size,m)||(o.size=m),Xy(m)}),og(),e0(),og(),Sl(19,"div",2)(20,"po-button",12),ft("p-click",function(){Ky(u);let m=Nx(4);return Nx(15).reset(),m.reset(),Xy(o.restore())}),og()()();}if(a&2){let u=Nx(4);Lp(),nw("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Lp(5),Ew("ngModel",o.button.label),n0(),Lp(),Ew("ngModel",o.button.action),n0(),Lp(),Ew("ngModel",o.button.tooltip),n0(),Lp(),Ew("ngModel",o.button.icon),nw("p-options",o.iconsOptions),n0(),Lp(),Ew("ngModel",o.button.disabled),n0(),Lp(2),nw("p-disabled",u.invalid),Lp(5),Ew("ngModel",o.toggle),nw("p-options",o.toggleOptions),n0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,Upe,mv,L3,wde,Hhe,M3],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Button Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="buttons" [p-toggle]="toggle" [p-size]="size"> </po-button-group>
</div>

<po-divider />

<form #fButtons="ngForm">
  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="buttonLabel" [(ngModel)]="button.label" p-label="Button label"> </po-input>

    <po-input
      class="po-lg-4 po-md-6"
      name="buttonAction"
      [(ngModel)]="button.action"
      p-label="Button action"
      p-required
    >
    </po-input>

    <po-input class="po-lg-4 po-md-6" name="buttonTooltip" [(ngModel)]="button.tooltip" p-label="Button tooltip">
    </po-input>

    <po-radio-group
      class="po-lg-12"
      name="buttonIcon"
      [(ngModel)]="button.icon"
      p-columns="4"
      p-label="Button Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-switch class="po-lg-4 po-md-6" name="buttonDisabled" [(ngModel)]="button.disabled" p-label="Button disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add button"
      [p-disabled]="fButtons.invalid"
      (p-click)="addButton(); fButtons.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select
      class="po-lg-4 po-md-6"
      name="toggle"
      [(ngModel)]="toggle"
      p-label="Toggle"
      [p-options]="toggleOptions"
    ></po-select>

    <po-radio-group
      class="po-lg-12"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); fButtons.reset(); restore()">
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoButtonGroupItem,
  PoButtonGroupToggle,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-labs',
  templateUrl: './sample-po-button-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  button: any;
  buttons: Array<PoButtonGroupItem>;
  size: string;
  toggle: PoButtonGroupToggle;

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  restore() {
    this.size = 'medium';
    this.button = {};
    this.buttons = [];
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return i})();var de=(()=>{class i{poNotification=f(Yp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"div",1),eN(2,"Choose the type of attendance"),og(),Sl(3,"div",2),eN(4,"Get your password"),og()(),Wl(5,"po-divider"),Sl(6,"div",0),Wl(7,"po-button-group",3),og()),a&2&&(Lp(7),nw("p-buttons",o.attendances));},dependencies:[Upe,mv],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Button Group - Attendance"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  private poNotification = inject(PoNotificationService);

  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'an an-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'an an-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'an an-flask', action: this.getPassword.bind(this) }
  ];

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](\`
      Type of attendance: \${attendance.label} -
      Your password: \${password}
    \`);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-attendance"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return i})();var ce=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(Sl(0,"div",0),eN(1,"Create New Post"),og(),Sl(2,"po-widget")(3,"div",1)(4,"div",2),Wl(5,"po-button-group",3),og(),Sl(6,"div",2),Wl(7,"po-button-group",4),og(),Sl(8,"po-textarea",5),ww("ngModelChange",function(g){return nN(o.textArea,g)||(o.textArea=g),g}),og(),e0(),Sl(9,"div",6),eN(10),og()()()),a&2&&(Lp(5),nw("p-buttons",o.fontStyle),Lp(2),nw("p-buttons",o.textAlign),Lp(),Ew("ngModel",o.textArea),n0(),Lp(),fo("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Lp(),dg(" ",o.textArea," "));},dependencies:[G9,_k,Upe,Whe,fNe],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Button Group - Post"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-font-title po-mb-2">Create New Post</div>
<po-widget>
  <div class="po-row">
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="multiple" [p-buttons]="fontStyle"> </po-button-group>
    </div>
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="single" [p-buttons]="textAlign"> </po-button-group>
    </div>
    <po-textarea class="po-md-12" name="textArea" [(ngModel)]="textArea" p-maxlength="400"> </po-textarea>

    <div
      class="po-md-12 po-mt-3 po-font-text-large"
      [style.font-weight]="setBold ? 'bold' : 'normal'"
      [style.font-style]="setItalic ? 'italic' : 'normal'"
      [style.text-decoration]="setUnderline ? 'underline' : 'none'"
      [style.text-align]="setTextAlignment"
    >
      { { textArea }}
    </div>
  </div>
</po-widget>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-post',
  templateUrl: './sample-po-button-group-post.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonGroupPostComponent {
  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<PoButtonGroupItem> = [
    { icon: 'an an-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'an an-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'an an-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'an an-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'an an-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'an an-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'an an-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-post"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ge,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-button-group."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoButtonGroupComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-button-group"),og(),eN(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),og(),Sl(18,"p"),eN(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),og(),Sl(20,"p"),eN(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),og(),Sl(22,"h4"),eN(23,"Boas pr\xE1ticas"),og(),Sl(24,"ul")(25,"li"),eN(26,"Evite usar o "),Sl(27,"code"),eN(28,"po-button-group"),og(),eN(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),Sl(30,"code"),eN(31,"po-button"),og(),eN(32,"."),og(),Sl(33,"li"),eN(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),Sl(35,"code"),eN(36,"po-button-group"),og(),eN(37,"."),og()(),Sl(38,"blockquote")(39,"p"),eN(40,"As recomenda\xE7\xF5es do "),Sl(41,"code"),eN(42,"po-button"),og(),eN(43," tamb\xE9m valem para o "),Sl(44,"code"),eN(45,"po-button-group"),og(),eN(46,"."),og()(),Sl(47,"h4"),eN(48,"Tokens customiz\xE1veis"),og(),Sl(49,"p"),eN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(51,"blockquote")(52,"p"),eN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),eN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(56,"."),og()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),eN(61,"Propriedade"),og(),Sl(62,"th"),eN(63,"Descri\xE7\xE3o"),og(),Sl(64,"th"),eN(65,"Valor Padr\xE3o"),og()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),eN(70,"Default Values"),og()(),Wl(71,"td")(72,"td"),og(),Sl(73,"tr")(74,"td")(75,"code"),eN(76,"--font-family"),og()(),Sl(77,"td"),eN(78,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(79,"td")(80,"code"),eN(81,"var(--font-family-theme)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),eN(85,"--font-size"),og()(),Sl(86,"td"),eN(87,"Tamanho da fonte"),og(),Sl(88,"td")(89,"code"),eN(90,"var(--font-size-default)"),og()()(),Sl(91,"tr")(92,"td")(93,"code"),eN(94,"--font-weight"),og()(),Sl(95,"td"),eN(96,"Peso da fonte"),og(),Sl(97,"td")(98,"code"),eN(99,"var(--font-weight-bold)"),og()()(),Sl(100,"tr")(101,"td")(102,"code"),eN(103,"--line-height"),og()(),Sl(104,"td"),eN(105,"Tamanho da label"),og(),Sl(106,"td")(107,"code"),eN(108,"var(--line-height-none)"),og()()(),Sl(109,"tr")(110,"td")(111,"code"),eN(112,"--border-radius"),og()(),Sl(113,"td"),eN(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(115,"td")(116,"code"),eN(117,"var(--border-radius-md)"),og()()(),Sl(118,"tr")(119,"td")(120,"code"),eN(121,"--border-width"),og()(),Sl(122,"td"),eN(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(124,"td")(125,"code"),eN(126,"var(--border-width-md)"),og()()(),Sl(127,"tr")(128,"td")(129,"code"),eN(130,"--padding"),og()(),Sl(131,"td"),eN(132,"Preenchimento"),og(),Sl(133,"td")(134,"code"),eN(135,"0 1em"),og()()(),Sl(136,"tr")(137,"td")(138,"code"),eN(139,"--text-color"),og()(),Sl(140,"td"),eN(141,"Cor do texto"),og(),Sl(142,"td")(143,"code"),eN(144,"var(--color-neutral-light-00)"),og()()(),Sl(145,"tr")(146,"td")(147,"code"),eN(148,"--color"),og()(),Sl(149,"td"),eN(150,"Cor principal do bot\xE3o"),og(),Sl(151,"td")(152,"code"),eN(153,"var(--color-action-default)"),og()()(),Sl(154,"tr")(155,"td")(156,"code"),eN(157,"--background-color"),og()(),Sl(158,"td"),eN(159,"Cor de background"),og(),Sl(160,"td")(161,"code"),eN(162,"var(--color-transparent)"),og()()(),Sl(163,"tr")(164,"td")(165,"code"),eN(166,"--shadow"),og()(),Sl(167,"td"),eN(168,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(169,"td")(170,"code"),eN(171,"var(--shadow-none)"),og()()(),Sl(172,"tr")(173,"td")(174,"strong"),eN(175,"Hover"),og()(),Wl(176,"td")(177,"td"),og(),Sl(178,"tr")(179,"td")(180,"code"),eN(181,"--color-hover"),og()(),Sl(182,"td"),eN(183,"Cor principal no estado hover"),og(),Sl(184,"td")(185,"code"),eN(186,"var(--color-action-hover)"),og()()(),Sl(187,"tr")(188,"td")(189,"code"),eN(190,"--background-hover"),og()(),Sl(191,"td"),eN(192,"Cor de background no estado hover"),og(),Sl(193,"td")(194,"code"),eN(195,"var(--color-brand-01-lighter)"),og()()(),Sl(196,"tr")(197,"td")(198,"code"),eN(199,"--border-color-hover"),og()(),Sl(200,"td"),eN(201,"Cor da borda no estado hover"),og(),Sl(202,"td")(203,"code"),eN(204,"var(--color-brand-01-darkest)"),og()()(),Sl(205,"tr")(206,"td")(207,"strong"),eN(208,"Focused"),og()(),Wl(209,"td")(210,"td"),og(),Sl(211,"tr")(212,"td")(213,"code"),eN(214,"--outline-color-focused"),og()(),Sl(215,"td"),eN(216,"Cor do outline do estado de focus"),og(),Sl(217,"td")(218,"code"),eN(219,"var(--color-action-focus)"),og()()(),Sl(220,"tr")(221,"td")(222,"strong"),eN(223,"Pressed"),og()(),Wl(224,"td")(225,"td"),og(),Sl(226,"tr")(227,"td")(228,"code"),eN(229,"--color-pressed"),og()(),Sl(230,"td"),eN(231,"Cor principal no estado de pressionado"),og(),Sl(232,"td")(233,"code"),eN(234,"var(--color-action-pressed)"),og()()(),Sl(235,"tr")(236,"td")(237,"code"),eN(238,"--background-pressed"),og()(),Sl(239,"td"),eN(240,"Cor de background no estado de pressionado\xA0"),og(),Sl(241,"td")(242,"code"),eN(243,"var(--color-brand-01-light)"),og()()(),Sl(244,"tr")(245,"td")(246,"strong"),eN(247,"Disabled"),og()(),Wl(248,"td")(249,"td"),og(),Sl(250,"tr")(251,"td")(252,"code"),eN(253,"--color-disabled"),og()(),Sl(254,"td"),eN(255,"Cor principal no estado disabled"),og(),Sl(256,"td")(257,"code"),eN(258,"var(--color-action-disabled)"),og()()(),Sl(259,"tr")(260,"td")(261,"code"),eN(262,"--background-color-disabled"),og(),eN(263," \xA0"),og(),Sl(264,"td"),eN(265,"Cor de background no estado disabled"),og(),Sl(266,"td")(267,"code"),eN(268,"var(--color-transparent)"),og()()()()()(),Sl(269,"div",7)(270,"h4",8),eN(271,"Seletor"),og(),Sl(272,"pre",9),eN(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),og()(),Sl(274,"h4",10),eN(275,"Propriedades"),og(),Sl(276,"table",11)(277,"tr",12)(278,"th",13),eN(279,"Nome"),og(),Sl(280,"th",13),eN(281,"Tipo"),og(),Sl(282,"th",13),eN(283,"Padr\xE3o"),og(),Sl(284,"th",13),eN(285,"Descri\xE7\xE3o"),og()(),Sl(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),eN(290," p-buttons"),Wl(291,"br"),og()()(),Sl(292,"td",18)(293,"code",19),eN(294,"Array<PoButtonGroupItem>"),og()(),Sl(295,"td",20),eN(296,"-"),og(),Sl(297,"td",21)(298,"p"),eN(299,"Lista de bot\xF5es."),og()()(),Sl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),eN(304," p-size"),Wl(305,"br"),og()()(),Sl(306,"td",18)(307,"code",22),eN(308,"string"),og()(),Sl(309,"td",20)(310,"p")(311,"code"),eN(312,"medium"),og()()(),Sl(313,"td",21)(314,"em")(315,"strong"),eN(316,"(opcional)"),og()(),Sl(317,"p"),eN(318,"Define o tamanho do componente:"),og(),Sl(319,"ul")(320,"li")(321,"code"),eN(322,"small"),og(),eN(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(324,"li")(325,"code"),eN(326,"medium"),og(),eN(327,": altura de 44px."),og()(),Sl(328,"blockquote")(329,"p"),eN(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(331,"code"),eN(332,"medium"),og(),eN(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(334,"a",23),eN(335,"po-theme"),og(),eN(336,"."),og()()()(),Sl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),eN(341," p-toggle"),Wl(342,"br"),og()()(),Sl(343,"td",18)(344,"code",22),eN(345,"string"),og()(),Sl(346,"td",20)(347,"p")(348,"code"),eN(349,"none"),og()()(),Sl(350,"td",21)(351,"em")(352,"strong"),eN(353,"(opcional)"),og()(),Sl(354,"p"),eN(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),Sl(356,"code"),eN(357,"PoButtonGroupToggle"),og(),eN(358,":"),og(),Sl(359,"ul")(360,"li")(361,"code"),eN(362,"multiple"),og(),eN(363,": permite m\xFAltiplas sele\xE7\xF5es."),og(),Sl(364,"li")(365,"code"),eN(366,"none"),og(),eN(367,": desativa a funcionalidade de sele\xE7\xE3o."),og(),Sl(368,"li")(369,"code"),eN(370,"single"),og(),eN(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),og()()()()(),Sl(372,"h3"),eN(373,"Interfaces"),og(),Sl(374,"h4",24)(375,"code",5),eN(376,"PoButtonGroupItem"),og()(),Sl(377,"div",2)(378,"p"),eN(379,"Interface para os itens do "),Sl(380,"code"),eN(381,"po-button-group"),og(),eN(382,"."),og()(),Sl(383,"h4",10),eN(384,"Propriedades"),og(),Sl(385,"table",11)(386,"tr",12)(387,"th",13),eN(388,"Nome"),og(),Sl(389,"th",13),eN(390,"Tipo"),og(),Sl(391,"th",13),eN(392,"Descri\xE7\xE3o"),og()(),Sl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),eN(397," action"),Wl(398,"br"),og()()(),Sl(399,"td",18)(400,"code",25),eN(401,"Function"),og()(),Sl(402,"td",21)(403,"p"),eN(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),og()()(),Sl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),eN(409," disabled"),Wl(410,"br"),og()()(),Sl(411,"td",18)(412,"code",26),eN(413,"boolean"),og()(),Sl(414,"td",21)(415,"em")(416,"strong"),eN(417,"(opcional)"),og()(),Sl(418,"p"),eN(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),og(),Sl(420,"blockquote")(421,"p"),eN(422,"Por padr\xE3o esta propriedade \xE9 "),Sl(423,"code"),eN(424,"false"),og(),eN(425,"."),og()()()(),Sl(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),eN(430," icon"),Wl(431,"br"),og()()(),Sl(432,"td",18)(433,"code",22),eN(434,"string "),og(),Sl(435,"code",27),eN(436," TemplateRef<void>"),og()(),Sl(437,"td",21)(438,"em")(439,"strong"),eN(440,"(opcional)"),og()(),Sl(441,"p"),eN(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Sl(443,"p"),eN(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(445,"a",28),eN(446,"Biblioteca de \xEDcones"),og(),eN(447,". conforme exemplo abaixo:"),og(),Sl(448,"pre")(449,"code"),eN(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),og()(),Sl(451,"p"),eN(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(453,"em"),eN(454,"Font Awesome"),og(),eN(455,", da seguinte forma:"),og(),Sl(456,"pre")(457,"code"),eN(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),og()(),Sl(459,"p"),eN(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(461,"code"),eN(462,"TemplateRef"),og(),eN(463,", conforme exemplo abaixo:"),og(),Sl(464,"p"),eN(465,"component.html:"),og(),Sl(466,"pre")(467,"code"),eN(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(469,"p"),eN(470,"component.ts:"),og(),Sl(471,"pre")(472,"code"),eN(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),og()(),Sl(474,"blockquote")(475,"p"),eN(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(477,"code"),eN(478,"font-size: inherit"),og(),eN(479," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),eN(484," label"),Wl(485,"br"),og()()(),Sl(486,"td",18)(487,"code",22),eN(488,"string"),og()(),Sl(489,"td",21)(490,"em")(491,"strong"),eN(492,"(opcional)"),og()(),Sl(493,"p"),eN(494,"Label do bot\xE3o."),og()()(),Sl(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),eN(499," selected"),Wl(500,"br"),og()()(),Sl(501,"td",18)(502,"code",26),eN(503,"boolean"),og()(),Sl(504,"td",21)(505,"em")(506,"strong"),eN(507,"(opcional)"),og()(),Sl(508,"p"),eN(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),Sl(510,"code"),eN(511,"p-toggle"),og(),eN(512,"."),og()()(),Sl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),eN(517," tooltip"),Wl(518,"br"),og()()(),Sl(519,"td",18)(520,"code",22),eN(521,"string"),og()(),Sl(522,"td",21)(523,"em")(524,"strong"),eN(525,"(opcional)"),og()(),Sl(526,"p"),eN(527,"Define a mensagem a ser exibida ao posicionar o "),Sl(528,"em"),eN(529,"mouse"),og(),eN(530," sobre o bot\xE3o."),og()()()(),Sl(531,"h3"),eN(532,"Enums"),og(),Sl(533,"h4",4)(534,"code",5),eN(535,"PoButtonGroupToggle"),og()(),Sl(536,"div",2)(537,"p"),eN(538,"Tipos de sele\xE7\xE3o ("),Sl(539,"code"),eN(540,"p-toggle"),og(),eN(541,") dispon\xEDveis para o componente."),og()(),Sl(542,"h4",10),eN(543,"Propriedades"),og(),Sl(544,"table",11)(545,"tr",12)(546,"th",13),eN(547,"Nome"),og(),Sl(548,"th",13),eN(549,"Descri\xE7\xE3o"),og()(),Sl(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),eN(554," Multiple"),Wl(555,"br"),og()()(),Sl(556,"td",21)(557,"p"),eN(558,"Sele\xE7\xE3o m\xFAltipla."),og()()(),Sl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),eN(563," None"),Wl(564,"br"),og()()(),Sl(565,"td",21)(566,"p"),eN(567,"Sele\xE7\xE3o desabilitada."),og()()(),Sl(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),eN(572," Single"),Wl(573,"br"),og()()(),Sl(574,"td",21)(575,"p"),eN(576,"Sele\xE7\xE3o \xFAnica."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-button-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,pe,se,ue,ge,be],encapsulation:2})}return i})();var Ae=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[hL.forChild(Ae),hL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,Se]})}return i})();export{bt as DocPoButtonGroupModule};