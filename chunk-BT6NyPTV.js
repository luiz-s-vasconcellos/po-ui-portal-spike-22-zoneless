import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,cr as Vp,cs as qpe,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,aJ as qhe,bH as k3,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,b5 as $he,ba as yNe,ct as uo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var re=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic"]],standalone:false,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&zl(0,"po-button-group",0),a&2&&nw("p-buttons",o.buttons);},dependencies:[qpe],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Group Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-group-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return i})();var me=(()=>{class i{poNotification=f(Yp);button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:Vp.None},{label:"single",value:Vp.Single},{label:"multiple",value:Vp.Multiple}];ngOnInit(){this.restore();}action(r){this.poNotification.success(r.action);}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={};}restore(){this.size="medium",this.button={},this.buttons=[];}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs"]],standalone:false,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=Dx();Il(0,"div",2),zl(1,"po-button-group",3),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",2)(6,"po-input",4),ww("ngModelChange",function(m){return Xy(u),eN(o.button.label,m)||(o.button.label=m),Qy(m)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(m){return Xy(u),eN(o.button.action,m)||(o.button.action=m),Qy(m)}),og(),QA(),Il(8,"po-input",6),ww("ngModelChange",function(m){return Xy(u),eN(o.button.tooltip,m)||(o.button.tooltip=m),Qy(m)}),og(),QA(),Il(9,"po-radio-group",7),ww("ngModelChange",function(m){return Xy(u),eN(o.button.icon,m)||(o.button.icon=m),Qy(m)}),og(),QA(),Il(10,"po-switch",8),ww("ngModelChange",function(m){return Xy(u),eN(o.button.disabled,m)||(o.button.disabled=m),Qy(m)}),og(),QA(),og(),Il(11,"div",2)(12,"po-button",9),ft("p-click",function(){Xy(u);let m=Ax(4);return o.addButton(),Qy(m.reset())}),og()()(),zl(13,"po-divider"),Il(14,"form",null,1)(16,"div",2)(17,"po-select",10),ww("ngModelChange",function(m){return Xy(u),eN(o.toggle,m)||(o.toggle=m),Qy(m)}),og(),QA(),Il(18,"po-radio-group",11),ww("ngModelChange",function(m){return Xy(u),eN(o.size,m)||(o.size=m),Qy(m)}),og(),QA(),og(),Il(19,"div",2)(20,"po-button",12),ft("p-click",function(){Xy(u);let m=Ax(4);return Ax(15).reset(),m.reset(),Qy(o.restore())}),og()()();}if(a&2){let u=Ax(4);Lp(),nw("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),Lp(5),Ew("ngModel",o.button.label),e0(),Lp(),Ew("ngModel",o.button.action),e0(),Lp(),Ew("ngModel",o.button.tooltip),e0(),Lp(),Ew("ngModel",o.button.icon),nw("p-options",o.iconsOptions),e0(),Lp(),Ew("ngModel",o.button.disabled),e0(),Lp(2),nw("p-disabled",u.invalid),Lp(5),Ew("ngModel",o.toggle),nw("p-options",o.toggleOptions),e0(),Lp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,qpe,mv,O3,Dde,qhe,k3],encapsulation:2,changeDetection:1})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Group Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-group-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return i})();var de=(()=>{class i{poNotification=f(Yp);attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `);}getTypeNotification(r=""){switch(r){case "Emergency":return "error";case "Appointment":return "information";case "Exams":return "success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:false,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"div",1),Qx(2,"Choose the type of attendance"),og(),Il(3,"div",2),Qx(4,"Get your password"),og()(),zl(5,"po-divider"),Il(6,"div",0),zl(7,"po-button-group",3),og()),a&2&&(Lp(7),nw("p-buttons",o.attendances));},dependencies:[qpe,mv],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Group - Attendance"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<po-divider />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-group-attendance"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return i})();var ce=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:true,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post"]],standalone:false,decls:11,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(Il(0,"div",0),Qx(1,"Create New Post"),og(),Il(2,"po-widget")(3,"div",1)(4,"div",2),zl(5,"po-button-group",3),og(),Il(6,"div",2),zl(7,"po-button-group",4),og(),Il(8,"po-textarea",5),ww("ngModelChange",function(g){return eN(o.textArea,g)||(o.textArea=g),g}),og(),QA(),Il(9,"div",6),Qx(10),og()()()),a&2&&(Lp(5),nw("p-buttons",o.fontStyle),Lp(2),nw("p-buttons",o.textAlign),Lp(),Ew("ngModel",o.textArea),e0(),Lp(),uo("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),Lp(),dg(" ",o.textArea," "));},dependencies:[$9,mk,qpe,$he,yNe],encapsulation:2,changeDetection:1})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Button Group - Post"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-font-title po-mb-2">Create New Post</div>
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-button-group-post"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ge,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-button-group-doc"]],standalone:false,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-button-group."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoButtonGroupComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-button-group"),og(),Qx(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),og(),Il(18,"p"),Qx(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),og(),Il(20,"p"),Qx(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),og(),Il(22,"h4"),Qx(23,"Boas pr\xE1ticas"),og(),Il(24,"ul")(25,"li"),Qx(26,"Evite usar o "),Il(27,"code"),Qx(28,"po-button-group"),og(),Qx(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),Il(30,"code"),Qx(31,"po-button"),og(),Qx(32,"."),og(),Il(33,"li"),Qx(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),Il(35,"code"),Qx(36,"po-button-group"),og(),Qx(37,"."),og()(),Il(38,"blockquote")(39,"p"),Qx(40,"As recomenda\xE7\xF5es do "),Il(41,"code"),Qx(42,"po-button"),og(),Qx(43," tamb\xE9m valem para o "),Il(44,"code"),Qx(45,"po-button-group"),og(),Qx(46,"."),og()(),Il(47,"h4"),Qx(48,"Tokens customiz\xE1veis"),og(),Il(49,"p"),Qx(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(51,"blockquote")(52,"p"),Qx(53,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(54,"a",6),Qx(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(56,"."),og()(),Il(57,"table")(58,"thead")(59,"tr")(60,"th"),Qx(61,"Propriedade"),og(),Il(62,"th"),Qx(63,"Descri\xE7\xE3o"),og(),Il(64,"th"),Qx(65,"Valor Padr\xE3o"),og()()(),Il(66,"tbody")(67,"tr")(68,"td")(69,"strong"),Qx(70,"Default Values"),og()(),zl(71,"td")(72,"td"),og(),Il(73,"tr")(74,"td")(75,"code"),Qx(76,"--font-family"),og()(),Il(77,"td"),Qx(78,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(79,"td")(80,"code"),Qx(81,"var(--font-family-theme)"),og()()(),Il(82,"tr")(83,"td")(84,"code"),Qx(85,"--font-size"),og()(),Il(86,"td"),Qx(87,"Tamanho da fonte"),og(),Il(88,"td")(89,"code"),Qx(90,"var(--font-size-default)"),og()()(),Il(91,"tr")(92,"td")(93,"code"),Qx(94,"--font-weight"),og()(),Il(95,"td"),Qx(96,"Peso da fonte"),og(),Il(97,"td")(98,"code"),Qx(99,"var(--font-weight-bold)"),og()()(),Il(100,"tr")(101,"td")(102,"code"),Qx(103,"--line-height"),og()(),Il(104,"td"),Qx(105,"Tamanho da label"),og(),Il(106,"td")(107,"code"),Qx(108,"var(--line-height-none)"),og()()(),Il(109,"tr")(110,"td")(111,"code"),Qx(112,"--border-radius"),og()(),Il(113,"td"),Qx(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(115,"td")(116,"code"),Qx(117,"var(--border-radius-md)"),og()()(),Il(118,"tr")(119,"td")(120,"code"),Qx(121,"--border-width"),og()(),Il(122,"td"),Qx(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(124,"td")(125,"code"),Qx(126,"var(--border-width-md)"),og()()(),Il(127,"tr")(128,"td")(129,"code"),Qx(130,"--padding"),og()(),Il(131,"td"),Qx(132,"Preenchimento"),og(),Il(133,"td")(134,"code"),Qx(135,"0 1em"),og()()(),Il(136,"tr")(137,"td")(138,"code"),Qx(139,"--text-color"),og()(),Il(140,"td"),Qx(141,"Cor do texto"),og(),Il(142,"td")(143,"code"),Qx(144,"var(--color-neutral-light-00)"),og()()(),Il(145,"tr")(146,"td")(147,"code"),Qx(148,"--color"),og()(),Il(149,"td"),Qx(150,"Cor principal do bot\xE3o"),og(),Il(151,"td")(152,"code"),Qx(153,"var(--color-action-default)"),og()()(),Il(154,"tr")(155,"td")(156,"code"),Qx(157,"--background-color"),og()(),Il(158,"td"),Qx(159,"Cor de background"),og(),Il(160,"td")(161,"code"),Qx(162,"var(--color-transparent)"),og()()(),Il(163,"tr")(164,"td")(165,"code"),Qx(166,"--shadow"),og()(),Il(167,"td"),Qx(168,"Cont\xE9m o valor da sombra do elemento"),og(),Il(169,"td")(170,"code"),Qx(171,"var(--shadow-none)"),og()()(),Il(172,"tr")(173,"td")(174,"strong"),Qx(175,"Hover"),og()(),zl(176,"td")(177,"td"),og(),Il(178,"tr")(179,"td")(180,"code"),Qx(181,"--color-hover"),og()(),Il(182,"td"),Qx(183,"Cor principal no estado hover"),og(),Il(184,"td")(185,"code"),Qx(186,"var(--color-action-hover)"),og()()(),Il(187,"tr")(188,"td")(189,"code"),Qx(190,"--background-hover"),og()(),Il(191,"td"),Qx(192,"Cor de background no estado hover"),og(),Il(193,"td")(194,"code"),Qx(195,"var(--color-brand-01-lighter)"),og()()(),Il(196,"tr")(197,"td")(198,"code"),Qx(199,"--border-color-hover"),og()(),Il(200,"td"),Qx(201,"Cor da borda no estado hover"),og(),Il(202,"td")(203,"code"),Qx(204,"var(--color-brand-01-darkest)"),og()()(),Il(205,"tr")(206,"td")(207,"strong"),Qx(208,"Focused"),og()(),zl(209,"td")(210,"td"),og(),Il(211,"tr")(212,"td")(213,"code"),Qx(214,"--outline-color-focused"),og()(),Il(215,"td"),Qx(216,"Cor do outline do estado de focus"),og(),Il(217,"td")(218,"code"),Qx(219,"var(--color-action-focus)"),og()()(),Il(220,"tr")(221,"td")(222,"strong"),Qx(223,"Pressed"),og()(),zl(224,"td")(225,"td"),og(),Il(226,"tr")(227,"td")(228,"code"),Qx(229,"--color-pressed"),og()(),Il(230,"td"),Qx(231,"Cor principal no estado de pressionado"),og(),Il(232,"td")(233,"code"),Qx(234,"var(--color-action-pressed)"),og()()(),Il(235,"tr")(236,"td")(237,"code"),Qx(238,"--background-pressed"),og()(),Il(239,"td"),Qx(240,"Cor de background no estado de pressionado\xA0"),og(),Il(241,"td")(242,"code"),Qx(243,"var(--color-brand-01-light)"),og()()(),Il(244,"tr")(245,"td")(246,"strong"),Qx(247,"Disabled"),og()(),zl(248,"td")(249,"td"),og(),Il(250,"tr")(251,"td")(252,"code"),Qx(253,"--color-disabled"),og()(),Il(254,"td"),Qx(255,"Cor principal no estado disabled"),og(),Il(256,"td")(257,"code"),Qx(258,"var(--color-action-disabled)"),og()()(),Il(259,"tr")(260,"td")(261,"code"),Qx(262,"--background-color-disabled"),og(),Qx(263," \xA0"),og(),Il(264,"td"),Qx(265,"Cor de background no estado disabled"),og(),Il(266,"td")(267,"code"),Qx(268,"var(--color-transparent)"),og()()()()()(),Il(269,"div",7)(270,"h4",8),Qx(271,"Seletor"),og(),Il(272,"pre",9),Qx(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),og()(),Il(274,"h4",10),Qx(275,"Propriedades"),og(),Il(276,"table",11)(277,"tr",12)(278,"th",13),Qx(279,"Nome"),og(),Il(280,"th",13),Qx(281,"Tipo"),og(),Il(282,"th",13),Qx(283,"Padr\xE3o"),og(),Il(284,"th",13),Qx(285,"Descri\xE7\xE3o"),og()(),Il(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),Qx(290," p-buttons"),zl(291,"br"),og()()(),Il(292,"td",18)(293,"code",19),Qx(294,"Array<PoButtonGroupItem>"),og()(),Il(295,"td",20),Qx(296,"-"),og(),Il(297,"td",21)(298,"p"),Qx(299,"Lista de bot\xF5es."),og()()(),Il(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),Qx(304," p-size"),zl(305,"br"),og()()(),Il(306,"td",18)(307,"code",22),Qx(308,"string"),og()(),Il(309,"td",20)(310,"p")(311,"code"),Qx(312,"medium"),og()()(),Il(313,"td",21)(314,"em")(315,"strong"),Qx(316,"(opcional)"),og()(),Il(317,"p"),Qx(318,"Define o tamanho do componente:"),og(),Il(319,"ul")(320,"li")(321,"code"),Qx(322,"small"),og(),Qx(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(324,"li")(325,"code"),Qx(326,"medium"),og(),Qx(327,": altura de 44px."),og()(),Il(328,"blockquote")(329,"p"),Qx(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(331,"code"),Qx(332,"medium"),og(),Qx(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(334,"a",23),Qx(335,"po-theme"),og(),Qx(336,"."),og()()()(),Il(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),Qx(341," p-toggle"),zl(342,"br"),og()()(),Il(343,"td",18)(344,"code",22),Qx(345,"string"),og()(),Il(346,"td",20)(347,"p")(348,"code"),Qx(349,"none"),og()()(),Il(350,"td",21)(351,"em")(352,"strong"),Qx(353,"(opcional)"),og()(),Il(354,"p"),Qx(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),Il(356,"code"),Qx(357,"PoButtonGroupToggle"),og(),Qx(358,":"),og(),Il(359,"ul")(360,"li")(361,"code"),Qx(362,"multiple"),og(),Qx(363,": permite m\xFAltiplas sele\xE7\xF5es."),og(),Il(364,"li")(365,"code"),Qx(366,"none"),og(),Qx(367,": desativa a funcionalidade de sele\xE7\xE3o."),og(),Il(368,"li")(369,"code"),Qx(370,"single"),og(),Qx(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),og()()()()(),Il(372,"h3"),Qx(373,"Interfaces"),og(),Il(374,"h4",24)(375,"code",5),Qx(376,"PoButtonGroupItem"),og()(),Il(377,"div",2)(378,"p"),Qx(379,"Interface para os itens do "),Il(380,"code"),Qx(381,"po-button-group"),og(),Qx(382,"."),og()(),Il(383,"h4",10),Qx(384,"Propriedades"),og(),Il(385,"table",11)(386,"tr",12)(387,"th",13),Qx(388,"Nome"),og(),Il(389,"th",13),Qx(390,"Tipo"),og(),Il(391,"th",13),Qx(392,"Descri\xE7\xE3o"),og()(),Il(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),Qx(397," action"),zl(398,"br"),og()()(),Il(399,"td",18)(400,"code",25),Qx(401,"Function"),og()(),Il(402,"td",21)(403,"p"),Qx(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),og()()(),Il(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),Qx(409," disabled"),zl(410,"br"),og()()(),Il(411,"td",18)(412,"code",26),Qx(413,"boolean"),og()(),Il(414,"td",21)(415,"em")(416,"strong"),Qx(417,"(opcional)"),og()(),Il(418,"p"),Qx(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),og(),Il(420,"blockquote")(421,"p"),Qx(422,"Por padr\xE3o esta propriedade \xE9 "),Il(423,"code"),Qx(424,"false"),og(),Qx(425,"."),og()()()(),Il(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),Qx(430," icon"),zl(431,"br"),og()()(),Il(432,"td",18)(433,"code",22),Qx(434,"string "),og(),Il(435,"code",27),Qx(436," TemplateRef<void>"),og()(),Il(437,"td",21)(438,"em")(439,"strong"),Qx(440,"(opcional)"),og()(),Il(441,"p"),Qx(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),og(),Il(443,"p"),Qx(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(445,"a",28),Qx(446,"Biblioteca de \xEDcones"),og(),Qx(447,". conforme exemplo abaixo:"),og(),Il(448,"pre")(449,"code"),Qx(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),og()(),Il(451,"p"),Qx(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Il(453,"em"),Qx(454,"Font Awesome"),og(),Qx(455,", da seguinte forma:"),og(),Il(456,"pre")(457,"code"),Qx(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),og()(),Il(459,"p"),Qx(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(461,"code"),Qx(462,"TemplateRef"),og(),Qx(463,", conforme exemplo abaixo:"),og(),Il(464,"p"),Qx(465,"component.html:"),og(),Il(466,"pre")(467,"code"),Qx(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Il(469,"p"),Qx(470,"component.ts:"),og(),Il(471,"pre")(472,"code"),Qx(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),og()(),Il(474,"blockquote")(475,"p"),Qx(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Il(477,"code"),Qx(478,"font-size: inherit"),og(),Qx(479," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Il(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),Qx(484," label"),zl(485,"br"),og()()(),Il(486,"td",18)(487,"code",22),Qx(488,"string"),og()(),Il(489,"td",21)(490,"em")(491,"strong"),Qx(492,"(opcional)"),og()(),Il(493,"p"),Qx(494,"Label do bot\xE3o."),og()()(),Il(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),Qx(499," selected"),zl(500,"br"),og()()(),Il(501,"td",18)(502,"code",26),Qx(503,"boolean"),og()(),Il(504,"td",21)(505,"em")(506,"strong"),Qx(507,"(opcional)"),og()(),Il(508,"p"),Qx(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),Il(510,"code"),Qx(511,"p-toggle"),og(),Qx(512,"."),og()()(),Il(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),Qx(517," tooltip"),zl(518,"br"),og()()(),Il(519,"td",18)(520,"code",22),Qx(521,"string"),og()(),Il(522,"td",21)(523,"em")(524,"strong"),Qx(525,"(opcional)"),og()(),Il(526,"p"),Qx(527,"Define a mensagem a ser exibida ao posicionar o "),Il(528,"em"),Qx(529,"mouse"),og(),Qx(530," sobre o bot\xE3o."),og()()()(),Il(531,"h3"),Qx(532,"Enums"),og(),Il(533,"h4",4)(534,"code",5),Qx(535,"PoButtonGroupToggle"),og()(),Il(536,"div",2)(537,"p"),Qx(538,"Tipos de sele\xE7\xE3o ("),Il(539,"code"),Qx(540,"p-toggle"),og(),Qx(541,") dispon\xEDveis para o componente."),og()(),Il(542,"h4",10),Qx(543,"Propriedades"),og(),Il(544,"table",11)(545,"tr",12)(546,"th",13),Qx(547,"Nome"),og(),Il(548,"th",13),Qx(549,"Descri\xE7\xE3o"),og()(),Il(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),Qx(554," Multiple"),zl(555,"br"),og()()(),Il(556,"td",21)(557,"p"),Qx(558,"Sele\xE7\xE3o m\xFAltipla."),og()()(),Il(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),Qx(563," None"),zl(564,"br"),og()()(),Il(565,"td",21)(566,"p"),Qx(567,"Sele\xE7\xE3o desabilitada."),og()()(),Il(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),Qx(572," Single"),zl(573,"br"),og()()(),Il(574,"td",21)(575,"p"),Qx(576,"Sele\xE7\xE3o \xFAnica."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var he=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-button-group-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,pe,se,ue,ge,be],encapsulation:2})}return i})();var Ae=[{path:"",component:he}],Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[uL.forChild(Ae),uL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[sr,Se]})}return i})();export{bt as DocPoButtonGroupModule};