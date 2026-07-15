import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,cr as Vp,cs as qpe,F as Wl,O as rw,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,c8 as Tde,aJ as Whe,bH as k3,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,b5 as Ghe,ba as vNe,ct as fo,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var re=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&Wl(0,"po-button-group",0),a&2&&rw("p-buttons",o.buttons);},dependencies:[qpe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Group Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,fe,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poNotification=f(Yp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Vp.None},{label:"single",value:Vp.Single},{label:"multiple",value:Vp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=Ix();Sl(0,"div",2),Wl(1,"po-button-group",3),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2)(6,"po-input",4),Cw("ngModelChange",function(m){return Ky(u),oN(o.button.label,m)||(o.button.label=m),Xy(m)}),og(),n0(),Sl(7,"po-input",5),Cw("ngModelChange",function(m){return Ky(u),oN(o.button.action,m)||(o.button.action=m),Xy(m)}),og(),n0(),Sl(8,"po-input",6),Cw("ngModelChange",function(m){return Ky(u),oN(o.button.tooltip,m)||(o.button.tooltip=m),Xy(m)}),og(),n0(),Sl(9,"po-radio-group",7),Cw("ngModelChange",function(m){return Ky(u),oN(o.button.icon,m)||(o.button.icon=m),Xy(m)}),og(),n0(),Sl(10,"po-switch",8),Cw("ngModelChange",function(m){return Ky(u),oN(o.button.disabled,m)||(o.button.disabled=m),Xy(m)}),og(),n0(),og(),Sl(11,"div",2)(12,"po-button",9),ft("p-click",function(){Ky(u);let m=kx(4);return o.addButton(),Xy(m.reset())}),og()()(),Wl(13,"po-divider"),Sl(14,"form",null,1)(16,"div",2)(17,"po-select",10),Cw("ngModelChange",function(m){return Ky(u),oN(o.toggle,m)||(o.toggle=m),Xy(m)}),og(),n0(),Sl(18,"po-radio-group",11),Cw("ngModelChange",function(m){return Ky(u),oN(o.size,m)||(o.size=m),Xy(m)}),og(),n0(),og(),Sl(19,"div",2)(20,"po-button",12),ft("p-click",function(){Ky(u);let m=kx(4);return kx(15).reset(),m.reset(),Xy(o.restore())}),og()()();}if(a&2){let u=kx(4);Lp(),rw("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Lp(5),ww("ngModel",o.button.label),i0(),Lp(),ww("ngModel",o.button.action),i0(),Lp(),ww("ngModel",o.button.tooltip),i0(),Lp(),ww("ngModel",o.button.icon),rw("p-options",o.iconsOptions),i0(),Lp(),ww("ngModel",o.button.disabled),i0(),Lp(2),rw("p-disabled",u.invalid),Lp(5),ww("ngModel",o.toggle),rw("p-options",o.toggleOptions),i0(),Lp(),ww("ngModel",o.size),rw("p-options",o.sizeOptions),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Qt,qpe,mv,L3,Tde,Whe,k3],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Group Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{poNotification=f(Yp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"div",1),rN(2,"Choose the type of attendance"),og(),Sl(3,"div",2),rN(4,"Get your password"),og()(),Wl(5,"po-divider"),Sl(6,"div",0),Wl(7,"po-button-group",3),og()),a&2&&(Lp(7),rw("p-buttons",o.attendances));},dependencies:[qpe,mv],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Group - Attendance"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-attendance"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,we,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(Sl(0,"div",0),rN(1,"Create New Post"),og(),Sl(2,"po-widget")(3,"div",1)(4,"div",2),Wl(5,"po-button-group",3),og(),Sl(6,"div",2),Wl(7,"po-button-group",4),og(),Sl(8,"po-textarea",5),Cw("ngModelChange",function(g){return oN(o.textArea,g)||(o.textArea=g),g}),og(),n0(),Sl(9,"div",6),rN(10),og()()()),a&2&&(Lp(5),rw("p-buttons",o.fontStyle),Lp(2),rw("p-buttons",o.textAlign),Lp(),ww("ngModel",o.textArea),i0(),Lp(),fo("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Lp(),dg(" ",o.textArea," "));},dependencies:[Z9,wk,qpe,Ghe,vNe],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Button Group - Post"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-button-group-post"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,_e,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ce],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-button-group."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoButtonGroupComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-button-group"),og(),rN(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),og(),Sl(18,"p"),rN(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),og(),Sl(20,"p"),rN(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),og(),Sl(22,"h4"),rN(23,"Boas pr\xE1ticas"),og(),Sl(24,"ul")(25,"li"),rN(26,"Evite usar o "),Sl(27,"code"),rN(28,"po-button-group"),og(),rN(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),Sl(30,"code"),rN(31,"po-button"),og(),rN(32,"."),og(),Sl(33,"li"),rN(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),Sl(35,"code"),rN(36,"po-button-group"),og(),rN(37,"."),og()(),Sl(38,"blockquote")(39,"p"),rN(40,"As recomenda\xE7\xF5es do "),Sl(41,"code"),rN(42,"po-button"),og(),rN(43," tamb\xE9m valem para o "),Sl(44,"code"),rN(45,"po-button-group"),og(),rN(46,"."),og()(),Sl(47,"h4"),rN(48,"Tokens customiz\xE1veis"),og(),Sl(49,"p"),rN(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(51,"blockquote")(52,"p"),rN(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(54,"a",6),rN(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(56,"."),og()(),Sl(57,"table")(58,"thead")(59,"tr")(60,"th"),rN(61,"Propriedade"),og(),Sl(62,"th"),rN(63,"Descri\xE7\xE3o"),og(),Sl(64,"th"),rN(65,"Valor Padr\xE3o"),og()()(),Sl(66,"tbody")(67,"tr")(68,"td")(69,"strong"),rN(70,"Default Values"),og()(),Wl(71,"td")(72,"td"),og(),Sl(73,"tr")(74,"td")(75,"code"),rN(76,"--font-family"),og()(),Sl(77,"td"),rN(78,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(79,"td")(80,"code"),rN(81,"var(--font-family-theme)"),og()()(),Sl(82,"tr")(83,"td")(84,"code"),rN(85,"--font-size"),og()(),Sl(86,"td"),rN(87,"Tamanho da fonte"),og(),Sl(88,"td")(89,"code"),rN(90,"var(--font-size-default)"),og()()(),Sl(91,"tr")(92,"td")(93,"code"),rN(94,"--font-weight"),og()(),Sl(95,"td"),rN(96,"Peso da fonte"),og(),Sl(97,"td")(98,"code"),rN(99,"var(--font-weight-bold)"),og()()(),Sl(100,"tr")(101,"td")(102,"code"),rN(103,"--line-height"),og()(),Sl(104,"td"),rN(105,"Tamanho da label"),og(),Sl(106,"td")(107,"code"),rN(108,"var(--line-height-none)"),og()()(),Sl(109,"tr")(110,"td")(111,"code"),rN(112,"--border-radius"),og()(),Sl(113,"td"),rN(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(115,"td")(116,"code"),rN(117,"var(--border-radius-md)"),og()()(),Sl(118,"tr")(119,"td")(120,"code"),rN(121,"--border-width"),og()(),Sl(122,"td"),rN(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(124,"td")(125,"code"),rN(126,"var(--border-width-md)"),og()()(),Sl(127,"tr")(128,"td")(129,"code"),rN(130,"--padding"),og()(),Sl(131,"td"),rN(132,"Preenchimento"),og(),Sl(133,"td")(134,"code"),rN(135,"0 1em"),og()()(),Sl(136,"tr")(137,"td")(138,"code"),rN(139,"--text-color"),og()(),Sl(140,"td"),rN(141,"Cor do texto"),og(),Sl(142,"td")(143,"code"),rN(144,"var(--color-neutral-light-00)"),og()()(),Sl(145,"tr")(146,"td")(147,"code"),rN(148,"--color"),og()(),Sl(149,"td"),rN(150,"Cor principal do bot\xE3o"),og(),Sl(151,"td")(152,"code"),rN(153,"var(--color-action-default)"),og()()(),Sl(154,"tr")(155,"td")(156,"code"),rN(157,"--background-color"),og()(),Sl(158,"td"),rN(159,"Cor de background"),og(),Sl(160,"td")(161,"code"),rN(162,"var(--color-transparent)"),og()()(),Sl(163,"tr")(164,"td")(165,"code"),rN(166,"--shadow"),og()(),Sl(167,"td"),rN(168,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(169,"td")(170,"code"),rN(171,"var(--shadow-none)"),og()()(),Sl(172,"tr")(173,"td")(174,"strong"),rN(175,"Hover"),og()(),Wl(176,"td")(177,"td"),og(),Sl(178,"tr")(179,"td")(180,"code"),rN(181,"--color-hover"),og()(),Sl(182,"td"),rN(183,"Cor principal no estado hover"),og(),Sl(184,"td")(185,"code"),rN(186,"var(--color-action-hover)"),og()()(),Sl(187,"tr")(188,"td")(189,"code"),rN(190,"--background-hover"),og()(),Sl(191,"td"),rN(192,"Cor de background no estado hover"),og(),Sl(193,"td")(194,"code"),rN(195,"var(--color-brand-01-lighter)"),og()()(),Sl(196,"tr")(197,"td")(198,"code"),rN(199,"--border-color-hover"),og()(),Sl(200,"td"),rN(201,"Cor da borda no estado hover"),og(),Sl(202,"td")(203,"code"),rN(204,"var(--color-brand-01-darkest)"),og()()(),Sl(205,"tr")(206,"td")(207,"strong"),rN(208,"Focused"),og()(),Wl(209,"td")(210,"td"),og(),Sl(211,"tr")(212,"td")(213,"code"),rN(214,"--outline-color-focused"),og()(),Sl(215,"td"),rN(216,"Cor do outline do estado de focus"),og(),Sl(217,"td")(218,"code"),rN(219,"var(--color-action-focus)"),og()()(),Sl(220,"tr")(221,"td")(222,"strong"),rN(223,"Pressed"),og()(),Wl(224,"td")(225,"td"),og(),Sl(226,"tr")(227,"td")(228,"code"),rN(229,"--color-pressed"),og()(),Sl(230,"td"),rN(231,"Cor principal no estado de pressionado"),og(),Sl(232,"td")(233,"code"),rN(234,"var(--color-action-pressed)"),og()()(),Sl(235,"tr")(236,"td")(237,"code"),rN(238,"--background-pressed"),og()(),Sl(239,"td"),rN(240,"Cor de background no estado de pressionado\xA0"),og(),Sl(241,"td")(242,"code"),rN(243,"var(--color-brand-01-light)"),og()()(),Sl(244,"tr")(245,"td")(246,"strong"),rN(247,"Disabled"),og()(),Wl(248,"td")(249,"td"),og(),Sl(250,"tr")(251,"td")(252,"code"),rN(253,"--color-disabled"),og()(),Sl(254,"td"),rN(255,"Cor principal no estado disabled"),og(),Sl(256,"td")(257,"code"),rN(258,"var(--color-action-disabled)"),og()()(),Sl(259,"tr")(260,"td")(261,"code"),rN(262,"--background-color-disabled"),og(),rN(263," \xA0"),og(),Sl(264,"td"),rN(265,"Cor de background no estado disabled"),og(),Sl(266,"td")(267,"code"),rN(268,"var(--color-transparent)"),og()()()()()(),Sl(269,"div",7)(270,"h4",8),rN(271,"Seletor"),og(),Sl(272,"pre",9),rN(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),og()(),Sl(274,"h4",10),rN(275,"Propriedades"),og(),Sl(276,"table",11)(277,"tr",12)(278,"th",13),rN(279,"Nome"),og(),Sl(280,"th",13),rN(281,"Tipo"),og(),Sl(282,"th",13),rN(283,"Padr\xE3o"),og(),Sl(284,"th",13),rN(285,"Descri\xE7\xE3o"),og()(),Sl(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),rN(290," p-buttons"),Wl(291,"br"),og()()(),Sl(292,"td",18)(293,"code",19),rN(294,"Array<PoButtonGroupItem>"),og()(),Sl(295,"td",20),rN(296,"-"),og(),Sl(297,"td",21)(298,"p"),rN(299,"Lista de bot\xF5es."),og()()(),Sl(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),rN(304," p-size"),Wl(305,"br"),og()()(),Sl(306,"td",18)(307,"code",22),rN(308,"string"),og()(),Sl(309,"td",20)(310,"p")(311,"code"),rN(312,"medium"),og()()(),Sl(313,"td",21)(314,"em")(315,"strong"),rN(316,"(opcional)"),og()(),Sl(317,"p"),rN(318,"Define o tamanho do componente:"),og(),Sl(319,"ul")(320,"li")(321,"code"),rN(322,"small"),og(),rN(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(324,"li")(325,"code"),rN(326,"medium"),og(),rN(327,": altura de 44px."),og()(),Sl(328,"blockquote")(329,"p"),rN(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(331,"code"),rN(332,"medium"),og(),rN(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(334,"a",23),rN(335,"po-theme"),og(),rN(336,"."),og()()()(),Sl(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),rN(341," p-toggle"),Wl(342,"br"),og()()(),Sl(343,"td",18)(344,"code",22),rN(345,"string"),og()(),Sl(346,"td",20)(347,"p")(348,"code"),rN(349,"none"),og()()(),Sl(350,"td",21)(351,"em")(352,"strong"),rN(353,"(opcional)"),og()(),Sl(354,"p"),rN(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),Sl(356,"code"),rN(357,"PoButtonGroupToggle"),og(),rN(358,":"),og(),Sl(359,"ul")(360,"li")(361,"code"),rN(362,"multiple"),og(),rN(363,": permite m\xFAltiplas sele\xE7\xF5es."),og(),Sl(364,"li")(365,"code"),rN(366,"none"),og(),rN(367,": desativa a funcionalidade de sele\xE7\xE3o."),og(),Sl(368,"li")(369,"code"),rN(370,"single"),og(),rN(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),og()()()()(),Sl(372,"h3"),rN(373,"Interfaces"),og(),Sl(374,"h4",24)(375,"code",5),rN(376,"PoButtonGroupItem"),og()(),Sl(377,"div",2)(378,"p"),rN(379,"Interface para os itens do "),Sl(380,"code"),rN(381,"po-button-group"),og(),rN(382,"."),og()(),Sl(383,"h4",10),rN(384,"Propriedades"),og(),Sl(385,"table",11)(386,"tr",12)(387,"th",13),rN(388,"Nome"),og(),Sl(389,"th",13),rN(390,"Tipo"),og(),Sl(391,"th",13),rN(392,"Descri\xE7\xE3o"),og()(),Sl(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),rN(397," action"),Wl(398,"br"),og()()(),Sl(399,"td",18)(400,"code",25),rN(401,"Function"),og()(),Sl(402,"td",21)(403,"p"),rN(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),og()()(),Sl(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),rN(409," disabled"),Wl(410,"br"),og()()(),Sl(411,"td",18)(412,"code",26),rN(413,"boolean"),og()(),Sl(414,"td",21)(415,"em")(416,"strong"),rN(417,"(opcional)"),og()(),Sl(418,"p"),rN(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),og(),Sl(420,"blockquote")(421,"p"),rN(422,"Por padr\xE3o esta propriedade \xE9 "),Sl(423,"code"),rN(424,"false"),og(),rN(425,"."),og()()()(),Sl(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),rN(430," icon"),Wl(431,"br"),og()()(),Sl(432,"td",18)(433,"code",22),rN(434,"string "),og(),Sl(435,"code",27),rN(436," TemplateRef<void>"),og()(),Sl(437,"td",21)(438,"em")(439,"strong"),rN(440,"(opcional)"),og()(),Sl(441,"p"),rN(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Sl(443,"p"),rN(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(445,"a",28),rN(446,"Biblioteca de \xEDcones"),og(),rN(447,". conforme exemplo abaixo:"),og(),Sl(448,"pre")(449,"code"),rN(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),og()(),Sl(451,"p"),rN(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(453,"em"),rN(454,"Font Awesome"),og(),rN(455,", da seguinte forma:"),og(),Sl(456,"pre")(457,"code"),rN(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),og()(),Sl(459,"p"),rN(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(461,"code"),rN(462,"TemplateRef"),og(),rN(463,", conforme exemplo abaixo:"),og(),Sl(464,"p"),rN(465,"component.html:"),og(),Sl(466,"pre")(467,"code"),rN(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Sl(469,"p"),rN(470,"component.ts:"),og(),Sl(471,"pre")(472,"code"),rN(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),og()(),Sl(474,"blockquote")(475,"p"),rN(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(477,"code"),rN(478,"font-size: inherit"),og(),rN(479," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Sl(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),rN(484," label"),Wl(485,"br"),og()()(),Sl(486,"td",18)(487,"code",22),rN(488,"string"),og()(),Sl(489,"td",21)(490,"em")(491,"strong"),rN(492,"(opcional)"),og()(),Sl(493,"p"),rN(494,"Label do bot\xE3o."),og()()(),Sl(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),rN(499," selected"),Wl(500,"br"),og()()(),Sl(501,"td",18)(502,"code",26),rN(503,"boolean"),og()(),Sl(504,"td",21)(505,"em")(506,"strong"),rN(507,"(opcional)"),og()(),Sl(508,"p"),rN(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),Sl(510,"code"),rN(511,"p-toggle"),og(),rN(512,"."),og()()(),Sl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),rN(517," tooltip"),Wl(518,"br"),og()()(),Sl(519,"td",18)(520,"code",22),rN(521,"string"),og()(),Sl(522,"td",21)(523,"em")(524,"strong"),rN(525,"(opcional)"),og()(),Sl(526,"p"),rN(527,"Define a mensagem a ser exibida ao posicionar o "),Sl(528,"em"),rN(529,"mouse"),og(),rN(530," sobre o bot\xE3o."),og()()()(),Sl(531,"h3"),rN(532,"Enums"),og(),Sl(533,"h4",4)(534,"code",5),rN(535,"PoButtonGroupToggle"),og()(),Sl(536,"div",2)(537,"p"),rN(538,"Tipos de sele\xE7\xE3o ("),Sl(539,"code"),rN(540,"p-toggle"),og(),rN(541,") dispon\xEDveis para o componente."),og()(),Sl(542,"h4",10),rN(543,"Propriedades"),og(),Sl(544,"table",11)(545,"tr",12)(546,"th",13),rN(547,"Nome"),og(),Sl(548,"th",13),rN(549,"Descri\xE7\xE3o"),og()(),Sl(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),rN(554," Multiple"),Wl(555,"br"),og()()(),Sl(556,"td",21)(557,"p"),rN(558,"Sele\xE7\xE3o m\xFAltipla."),og()()(),Sl(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),rN(563," None"),Wl(564,"br"),og()()(),Sl(565,"td",21)(566,"p"),rN(567,"Sele\xE7\xE3o desabilitada."),og()()(),Sl(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),rN(572," Single"),Wl(573,"br"),og()()(),Sl(574,"td",21)(575,"p"),rN(576,"Sele\xE7\xE3o \xFAnica."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-button-group-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),og()()()),a&2&&(rw("p-actions",o.actions),Lp(2),rw("p-active",o.activeTab==="doc"),Lp(2),rw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,pe,se,ue,ge,be],encapsulation:2,changeDetection:1})}return i})();var Ae=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[mL.forChild(Ae),mL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,Se]})}return i})();export{bt as DocPoButtonGroupModule};