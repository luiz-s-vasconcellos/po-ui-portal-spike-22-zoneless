import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aW as Yp,b0 as Qt,bL as ri,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b1 as mv,b4 as F3,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,bD as Ede,cz as kz,cZ as Uhe,ba as yNe,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&zl(0,"po-button",0);},dependencies:[Qt,ri],encapsulation:2,changeDetection:1})}return n})();var he=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tooltip Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tooltip-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,he,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ae],encapsulation:2})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=Dx();Il(0,"div",1)(1,"div",2),zl(2,"po-button",3),og()(),zl(3,"po-divider"),Il(4,"form",null,0)(6,"div",1)(7,"po-input",4),ww("ngModelChange",function(l){return Xy(s),eN(i.tooltip,l)||(i.tooltip=l),Qy(l)}),og(),QA(),og(),Il(8,"div",1)(9,"po-radio-group",5),ww("ngModelChange",function(l){return Xy(s),eN(i.tooltipPosition,l)||(i.tooltipPosition=l),Qy(l)}),og(),QA(),og(),Il(10,"div",1)(11,"po-button",6),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(2),nw("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Lp(5),Ew("ngModel",i.tooltip),e0(),Lp(2),Ew("ngModel",i.tooltipPosition),nw("p-options",i.tooltipPositionOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,F3,Dde,ri],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tooltip Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <div class="po-md-4 po-lg-2 po-offset-md-4 po-offset-lg-5 po-offset-xl-5">
    <po-button [p-tooltip]="tooltip" [p-tooltip-position]="tooltipPosition" p-label="Po-Tooltip"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-12" name="tooltip" [(ngModel)]="tooltip" p-clean p-label="Tooltip"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="tooltipPosition"
      [(ngModel)]="tooltipPosition"
      p-label="Position"
      [p-options]="tooltipPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-labs',
  templateUrl: './sample-po-tooltip-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipLabsComponent implements OnInit {
  tooltip: string;
  tooltipPosition: string;

  public readonly tooltipPositionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.tooltip = '';
    this.tooltipPosition = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tooltip-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return n})();var ve=["formNewUser"],se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(C(Yp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&Gl(ve,7),a&2){let s;co(s=lo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=Dx();Il(0,"div",1)(1,"po-widget",2),ft("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),Il(2,"form",null,0)(4,"div",1)(5,"po-input",3),ww("ngModelChange",function(l){return Xy(s),eN(i.registration,l)||(i.registration=l),Qy(l)}),og(),QA(),Il(6,"po-email",4),ww("ngModelChange",function(l){return Xy(s),eN(i.email,l)||(i.email=l),Qy(l)}),og(),QA(),og(),Il(7,"div",1)(8,"po-input",5),ww("ngModelChange",function(l){return Xy(s),eN(i.name,l)||(i.name=l),Qy(l)}),og(),QA(),Il(9,"po-input",6),ww("ngModelChange",function(l){return Xy(s),eN(i.CPF,l)||(i.CPF=l),Qy(l)}),og(),QA(),og(),Il(10,"div",1)(11,"po-datepicker",7),ww("ngModelChange",function(l){return Xy(s),eN(i.birthDate,l)||(i.birthDate=l),Qy(l)}),og(),QA(),Il(12,"po-input",8),ww("ngModelChange",function(l){return Xy(s),eN(i.genre,l)||(i.genre=l),Qy(l)}),og(),QA(),og(),Il(13,"div",1)(14,"po-password",9),ww("ngModelChange",function(l){return Xy(s),eN(i.password,l)||(i.password=l),Qy(l)}),og(),QA(),Il(15,"po-password",10),ww("ngModelChange",function(l){return Xy(s),eN(i.confirmPassword,l)||(i.confirmPassword=l),Qy(l)}),og(),QA(),og()()()();}a&2&&(Lp(5),Ew("ngModel",i.registration),nw("p-tooltip",i.registrationTooltip),e0(),Lp(),Ew("ngModel",i.email),nw("p-tooltip",i.emailTooltip),e0(),Lp(2),Ew("ngModel",i.name),nw("p-tooltip",i.nameTooltip),e0(),Lp(),Ew("ngModel",i.CPF),e0(),Lp(2),Ew("ngModel",i.birthDate),e0(),Lp(),Ew("ngModel",i.genre),e0(),Lp(2),Ew("ngModel",i.password),nw("p-tooltip",i.passwordTooltip),e0(),Lp(),Ew("ngModel",i.confirmPassword),nw("p-pattern",i.password),e0());},dependencies:[G9,$9,z9,mk,hk,Ede,kz,F3,Uhe,yNe,ri],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Tooltip - New User"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget
    class="po-md-12"
    p-primary-label="Cancel"
    p-secondary-label="Confirm"
    p-title="Register New User"
    (p-primary-action)="cancel()"
    (p-secondary-action)="confirm()"
  >
    <form #formNewUser="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="registration"
          [(ngModel)]="registration"
          p-clean
          p-label="Registration"
          p-mask="99999-99/99"
          p-minlength="11"
          p-required
          [p-tooltip]="registrationTooltip"
        >
        </po-input>

        <po-email
          class="po-md-6"
          name="email"
          [(ngModel)]="email"
          p-clean
          p-label="Email"
          p-pattern="@po-ui.com"
          p-required
          [p-tooltip]="emailTooltip"
        >
        </po-email>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="name"
          [(ngModel)]="name"
          p-clean
          p-label="Name"
          p-required
          [p-tooltip]="nameTooltip"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="CPF"
          [(ngModel)]="CPF"
          p-clean
          p-label="CPF"
          p-mask="999.999.999-99"
          p-minlength="14"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
        </po-datepicker>

        <po-input class="po-md-6" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
      </div>

      <div class="po-row">
        <po-password
          class="po-md-6"
          name="password"
          [(ngModel)]="password"
          p-clean
          p-label="Password"
          p-minlength="8"
          p-required
          [p-tooltip]="passwordTooltip"
        >
        </po-password>

        <po-password
          class="po-md-6"
          name="confirmPassword"
          [(ngModel)]="confirmPassword"
          p-clean
          p-label="Confirm Password"
          p-required
          [p-pattern]="password"
        >
        </po-password>
      </div>
    </form>
  </po-widget>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-new-user',
  templateUrl: './sample-po-tooltip-new-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipNewUserComponent implements OnInit {
  @ViewChild('formNewUser', { static: true }) formNewUser: UntypedFormControl;

  birthDate: Date;
  confirmPassword: string;
  CPF: string;
  email: string;
  emailTooltip: string;
  genre: string;
  name: string;
  nameTooltip: string;
  password: string;
  passwordTooltip: string;
  registration: number;
  registrationTooltip: string;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.formNewUser.reset();
  }

  confirm() {
    if (this.formNewUser.valid) {
      this.poNotification.success(\`New user registered\`);
      this.cancel();
    } else {
      this.poNotification.error(\`Please fill in the required fields\`);
    }
  }

  initialize() {
    this.emailTooltip = 'your_account@po-ui.com';
    this.nameTooltip = 'Enter full name';
    this.passwordTooltip = 'Password must contain at least 8 characters';
    this.registrationTooltip = 'The registration number is on the registration form';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-tooltip-new-user"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo da diretiva Po-Tooltip."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoTooltipDirective"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),og(),Il(15,"p"),Qx(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),og(),Il(17,"p"),Qx(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Il(19,"a",6)(20,"strong"),Qx(21,"po-popover"),og()(),Qx(22,"."),og(),Il(23,"h4"),Qx(24,"Tokens customiz\xE1veis"),og(),Il(25,"p"),Qx(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(27,"blockquote")(28,"p"),Qx(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(30,"a",7),Qx(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(32,"."),og()(),Il(33,"table")(34,"thead")(35,"tr")(36,"th"),Qx(37,"Propriedade"),og(),Il(38,"th"),Qx(39,"Descri\xE7\xE3o"),og(),Il(40,"th"),Qx(41,"Valor Padr\xE3o"),og()()(),Il(42,"tbody")(43,"tr")(44,"td")(45,"strong"),Qx(46,"Default Values"),og()(),zl(47,"td")(48,"td"),og(),Il(49,"tr")(50,"td")(51,"code"),Qx(52,"--border-radius"),og(),Qx(53," \xA0"),og(),Il(54,"td"),Qx(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(56,"td")(57,"code"),Qx(58,"var(--border-radius-md)"),og()()(),Il(59,"tr")(60,"td")(61,"code"),Qx(62,"--color"),og()(),Il(63,"td"),Qx(64,"Cor principal da tooltip"),og(),Il(65,"td")(66,"code"),Qx(67,"var(--color-neutral-dark-80)"),og()()(),Il(68,"tr")(69,"td")(70,"code"),Qx(71,"--font-family"),og()(),Il(72,"td"),Qx(73,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(74,"td")(75,"code"),Qx(76,"var(--font-family-theme)"),og()()(),Il(77,"tr")(78,"td")(79,"code"),Qx(80,"--text-color"),og()(),Il(81,"td"),Qx(82,"Cor do texto"),og(),Il(83,"td")(84,"code"),Qx(85,"var(--color-neutral-light-00)"),og()()()()()(),Il(86,"div",8)(87,"h4",9),Qx(88,"Seletor"),og(),Il(89,"pre",10),Qx(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),og()(),Il(91,"h4",11),Qx(92,"Propriedades"),og(),Il(93,"table",12)(94,"tr",13)(95,"th",14),Qx(96,"Nome"),og(),Il(97,"th",14),Qx(98,"Tipo"),og(),Il(99,"th",14),Qx(100,"Padr\xE3o"),og(),Il(101,"th",14),Qx(102,"Descri\xE7\xE3o"),og()(),Il(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),Qx(107," p-append-in-body"),zl(108,"br"),og()()(),Il(109,"td",19)(110,"code",20),Qx(111,"boolean"),og()(),Il(112,"td",21)(113,"p")(114,"code"),Qx(115,"false"),og()()(),Il(116,"td",22)(117,"em")(118,"strong"),Qx(119,"(opcional)"),og()(),Il(120,"p"),Qx(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),og()()(),Il(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),Qx(126," p-hide-arrow"),zl(127,"br"),og()()(),Il(128,"td",19)(129,"code",20),Qx(130,"boolean"),og()(),Il(131,"td",21)(132,"p")(133,"code"),Qx(134,"false"),og()()(),Il(135,"td",22)(136,"em")(137,"strong"),Qx(138,"(opcional)"),og()(),Il(139,"p"),Qx(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),og(),Il(141,"p"),Qx(142,"Quando "),Il(143,"code"),Qx(144,"true"),og(),Qx(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Il(146,"code"),Qx(147,"false"),og(),Qx(148,", a seta ser\xE1 exibida normalmente."),og(),Il(149,"p"),Qx(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),og()()(),Il(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),Qx(155," p-inner-html"),zl(156,"br"),og()()(),Il(157,"td",19)(158,"code",20),Qx(159,"boolean"),og()(),Il(160,"td",21)(161,"p")(162,"code"),Qx(163,"false"),og()()(),Il(164,"td",22)(165,"em")(166,"strong"),Qx(167,"(opcional)"),og()(),Il(168,"p"),Qx(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),og(),Il(170,"p"),Qx(171,"Quando "),Il(172,"code"),Qx(173,"true"),og(),Qx(174,", o valor da propriedade "),Il(175,"code"),Qx(176,"tooltip"),og(),Qx(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Il(178,"code"),Qx(179,"false"),og(),Qx(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),og()()(),Il(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),Qx(185," p-tooltip"),zl(186,"br"),og()()(),Il(187,"td",19)(188,"code",23),Qx(189,"string"),og()(),Il(190,"td",21),Qx(191,"-"),og(),Il(192,"td",22)(193,"p"),Qx(194,"Habilita e atribui um texto ao po-tooltip."),og(),Il(195,"p")(196,"strong"),Qx(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()()()(),Il(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),Qx(202," p-tooltip-position"),zl(203,"br"),og()()(),Il(204,"td",19)(205,"code",23),Qx(206,"string"),og()(),Il(207,"td",21)(208,"p"),Qx(209,"bottom"),og()(),Il(210,"td",22)(211,"em")(212,"strong"),Qx(213,"(opcional)"),og()(),Il(214,"p"),Qx(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Il(216,"p"),Qx(217,"Posi\xE7\xF5es v\xE1lidas:"),og(),Il(218,"ul")(219,"li")(220,"code"),Qx(221,"right"),og(),Qx(222,": Posiciona o po-tooltip no lado direito do componente alvo."),og(),Il(223,"li")(224,"code"),Qx(225,"right-bottom"),og(),Qx(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),og(),Il(227,"li")(228,"code"),Qx(229,"right-top"),og(),Qx(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),og(),Il(231,"li")(232,"code"),Qx(233,"bottom"),og(),Qx(234,": Posiciona o po-tooltip abaixo do componente alvo."),og(),Il(235,"li")(236,"code"),Qx(237,"bottom-left"),og(),Qx(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),og(),Il(239,"li")(240,"code"),Qx(241,"bottom-right"),og(),Qx(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),og(),Il(243,"li")(244,"code"),Qx(245,"left"),og(),Qx(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),og(),Il(247,"li")(248,"code"),Qx(249,"left-top"),og(),Qx(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),og(),Il(251,"li")(252,"code"),Qx(253,"left-bottom"),og(),Qx(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),og(),Il(255,"li")(256,"code"),Qx(257,"top"),og(),Qx(258,": Posiciona o po-tooltip acima do componente alvo."),og(),Il(259,"li")(260,"code"),Qx(261,"top-right"),og(),Qx(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),og(),Il(263,"li")(264,"code"),Qx(265,"top-left"),og(),Qx(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-tooltip-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,pe,me,de,ce],encapsulation:2})}return n})();var xe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[uL.forChild(xe),uL]})}return n})();var Ye=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[sr,ge]})}return n})();export{Ye as DocPoTooltipModule};