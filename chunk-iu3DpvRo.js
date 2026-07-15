import {f as fe$1,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aW as Yp,b0 as Qt,bL as ri,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b1 as mv,b4 as L3,c8 as Tde,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,bD as Mde,cz as Pz,cZ as Hhe,ba as vNe,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&Wl(0,"po-button",0);},dependencies:[Qt,ri],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tooltip Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tooltip-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,fe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore();}restore(){this.tooltip="",this.tooltipPosition=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:false,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let s=Ix();Sl(0,"div",1)(1,"div",2),Wl(2,"po-button",3),og()(),Wl(3,"po-divider"),Sl(4,"form",null,0)(6,"div",1)(7,"po-input",4),Cw("ngModelChange",function(l){return Ky(s),oN(i.tooltip,l)||(i.tooltip=l),Xy(l)}),og(),n0(),og(),Sl(8,"div",1)(9,"po-radio-group",5),Cw("ngModelChange",function(l){return Ky(s),oN(i.tooltipPosition,l)||(i.tooltipPosition=l),Xy(l)}),og(),n0(),og(),Sl(10,"div",1)(11,"po-button",6),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(2),rw("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),Lp(5),ww("ngModel",i.tooltip),i0(),Lp(2),ww("ngModel",i.tooltipPosition),rw("p-options",i.tooltipPositionOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,L3,Tde,ri],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tooltip Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tooltip-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,re],encapsulation:2,changeDetection:1})}return n})();var ve=["formNewUser"],se=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(m){this.poNotification=m;}ngOnInit(){this.initialize();}cancel(){this.formNewUser.reset();}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields");}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form";}static \u0275fac=function(a){return new(a||n)(w(Yp))};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&ql(ve,7),a&2){let s;lo(s=uo())&&(i.formNewUser=s.first);}},standalone:false,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let s=Ix();Sl(0,"div",1)(1,"po-widget",2),ft("p-primary-action",function(){return i.cancel()})("p-secondary-action",function(){return i.confirm()}),Sl(2,"form",null,0)(4,"div",1)(5,"po-input",3),Cw("ngModelChange",function(l){return Ky(s),oN(i.registration,l)||(i.registration=l),Xy(l)}),og(),n0(),Sl(6,"po-email",4),Cw("ngModelChange",function(l){return Ky(s),oN(i.email,l)||(i.email=l),Xy(l)}),og(),n0(),og(),Sl(7,"div",1)(8,"po-input",5),Cw("ngModelChange",function(l){return Ky(s),oN(i.name,l)||(i.name=l),Xy(l)}),og(),n0(),Sl(9,"po-input",6),Cw("ngModelChange",function(l){return Ky(s),oN(i.CPF,l)||(i.CPF=l),Xy(l)}),og(),n0(),og(),Sl(10,"div",1)(11,"po-datepicker",7),Cw("ngModelChange",function(l){return Ky(s),oN(i.birthDate,l)||(i.birthDate=l),Xy(l)}),og(),n0(),Sl(12,"po-input",8),Cw("ngModelChange",function(l){return Ky(s),oN(i.genre,l)||(i.genre=l),Xy(l)}),og(),n0(),og(),Sl(13,"div",1)(14,"po-password",9),Cw("ngModelChange",function(l){return Ky(s),oN(i.password,l)||(i.password=l),Xy(l)}),og(),n0(),Sl(15,"po-password",10),Cw("ngModelChange",function(l){return Ky(s),oN(i.confirmPassword,l)||(i.confirmPassword=l),Xy(l)}),og(),n0(),og()()()();}a&2&&(Lp(5),ww("ngModel",i.registration),rw("p-tooltip",i.registrationTooltip),i0(),Lp(),ww("ngModel",i.email),rw("p-tooltip",i.emailTooltip),i0(),Lp(2),ww("ngModel",i.name),rw("p-tooltip",i.nameTooltip),i0(),Lp(),ww("ngModel",i.CPF),i0(),Lp(2),ww("ngModel",i.birthDate),i0(),Lp(),ww("ngModel",i.genre),i0(),Lp(2),ww("ngModel",i.password),rw("p-tooltip",i.passwordTooltip),i0(),Lp(),ww("ngModel",i.confirmPassword),rw("p-pattern",i.password),i0());},dependencies:[Q9,Z9,K9,wk,_k,Mde,Pz,L3,Hhe,vNe,ri],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Tooltip - New User"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tooltip-new-user"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Pe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return n})();var ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:false,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo da diretiva Po-Tooltip."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoTooltipDirective"),og()(),Sl(12,"div",2)(13,"p"),rN(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),og(),Sl(15,"p"),rN(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),og(),Sl(17,"p"),rN(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),Sl(19,"a",6)(20,"strong"),rN(21,"po-popover"),og()(),rN(22,"."),og(),Sl(23,"h4"),rN(24,"Tokens customiz\xE1veis"),og(),Sl(25,"p"),rN(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(27,"blockquote")(28,"p"),rN(29,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(30,"a",7),rN(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(32,"."),og()(),Sl(33,"table")(34,"thead")(35,"tr")(36,"th"),rN(37,"Propriedade"),og(),Sl(38,"th"),rN(39,"Descri\xE7\xE3o"),og(),Sl(40,"th"),rN(41,"Valor Padr\xE3o"),og()()(),Sl(42,"tbody")(43,"tr")(44,"td")(45,"strong"),rN(46,"Default Values"),og()(),Wl(47,"td")(48,"td"),og(),Sl(49,"tr")(50,"td")(51,"code"),rN(52,"--border-radius"),og(),rN(53," \xA0"),og(),Sl(54,"td"),rN(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(56,"td")(57,"code"),rN(58,"var(--border-radius-md)"),og()()(),Sl(59,"tr")(60,"td")(61,"code"),rN(62,"--color"),og()(),Sl(63,"td"),rN(64,"Cor principal da tooltip"),og(),Sl(65,"td")(66,"code"),rN(67,"var(--color-neutral-dark-80)"),og()()(),Sl(68,"tr")(69,"td")(70,"code"),rN(71,"--font-family"),og()(),Sl(72,"td"),rN(73,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(74,"td")(75,"code"),rN(76,"var(--font-family-theme)"),og()()(),Sl(77,"tr")(78,"td")(79,"code"),rN(80,"--text-color"),og()(),Sl(81,"td"),rN(82,"Cor do texto"),og(),Sl(83,"td")(84,"code"),rN(85,"var(--color-neutral-light-00)"),og()()()()()(),Sl(86,"div",8)(87,"h4",9),rN(88,"Seletor"),og(),Sl(89,"pre",10),rN(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),og()(),Sl(91,"h4",11),rN(92,"Propriedades"),og(),Sl(93,"table",12)(94,"tr",13)(95,"th",14),rN(96,"Nome"),og(),Sl(97,"th",14),rN(98,"Tipo"),og(),Sl(99,"th",14),rN(100,"Padr\xE3o"),og(),Sl(101,"th",14),rN(102,"Descri\xE7\xE3o"),og()(),Sl(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),rN(107," p-append-in-body"),Wl(108,"br"),og()()(),Sl(109,"td",19)(110,"code",20),rN(111,"boolean"),og()(),Sl(112,"td",21)(113,"p")(114,"code"),rN(115,"false"),og()()(),Sl(116,"td",22)(117,"em")(118,"strong"),rN(119,"(opcional)"),og()(),Sl(120,"p"),rN(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),og()()(),Sl(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),rN(126," p-hide-arrow"),Wl(127,"br"),og()()(),Sl(128,"td",19)(129,"code",20),rN(130,"boolean"),og()(),Sl(131,"td",21)(132,"p")(133,"code"),rN(134,"false"),og()()(),Sl(135,"td",22)(136,"em")(137,"strong"),rN(138,"(opcional)"),og()(),Sl(139,"p"),rN(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),og(),Sl(141,"p"),rN(142,"Quando "),Sl(143,"code"),rN(144,"true"),og(),rN(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),Sl(146,"code"),rN(147,"false"),og(),rN(148,", a seta ser\xE1 exibida normalmente."),og(),Sl(149,"p"),rN(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),og()()(),Sl(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),rN(155," p-inner-html"),Wl(156,"br"),og()()(),Sl(157,"td",19)(158,"code",20),rN(159,"boolean"),og()(),Sl(160,"td",21)(161,"p")(162,"code"),rN(163,"false"),og()()(),Sl(164,"td",22)(165,"em")(166,"strong"),rN(167,"(opcional)"),og()(),Sl(168,"p"),rN(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),og(),Sl(170,"p"),rN(171,"Quando "),Sl(172,"code"),rN(173,"true"),og(),rN(174,", o valor da propriedade "),Sl(175,"code"),rN(176,"tooltip"),og(),rN(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),Sl(178,"code"),rN(179,"false"),og(),rN(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),og()()(),Sl(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),rN(185," p-tooltip"),Wl(186,"br"),og()()(),Sl(187,"td",19)(188,"code",23),rN(189,"string"),og()(),Sl(190,"td",21),rN(191,"-"),og(),Sl(192,"td",22)(193,"p"),rN(194,"Habilita e atribui um texto ao po-tooltip."),og(),Sl(195,"p")(196,"strong"),rN(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()()()(),Sl(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),rN(202," p-tooltip-position"),Wl(203,"br"),og()()(),Sl(204,"td",19)(205,"code",23),rN(206,"string"),og()(),Sl(207,"td",21)(208,"p"),rN(209,"bottom"),og()(),Sl(210,"td",22)(211,"em")(212,"strong"),rN(213,"(opcional)"),og()(),Sl(214,"p"),rN(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Sl(216,"p"),rN(217,"Posi\xE7\xF5es v\xE1lidas:"),og(),Sl(218,"ul")(219,"li")(220,"code"),rN(221,"right"),og(),rN(222,": Posiciona o po-tooltip no lado direito do componente alvo."),og(),Sl(223,"li")(224,"code"),rN(225,"right-bottom"),og(),rN(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),og(),Sl(227,"li")(228,"code"),rN(229,"right-top"),og(),rN(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),og(),Sl(231,"li")(232,"code"),rN(233,"bottom"),og(),rN(234,": Posiciona o po-tooltip abaixo do componente alvo."),og(),Sl(235,"li")(236,"code"),rN(237,"bottom-left"),og(),rN(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),og(),Sl(239,"li")(240,"code"),rN(241,"bottom-right"),og(),rN(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),og(),Sl(243,"li")(244,"code"),rN(245,"left"),og(),rN(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),og(),Sl(247,"li")(248,"code"),rN(249,"left-top"),og(),rN(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),og(),Sl(251,"li")(252,"code"),rN(253,"left-bottom"),og(),rN(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),og(),Sl(255,"li")(256,"code"),rN(257,"top"),og(),rN(258,": Posiciona o po-tooltip acima do componente alvo."),og(),Sl(259,"li")(260,"code"),rN(261,"top-right"),og(),rN(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),og(),Sl(263,"li")(264,"code"),rN(265,"top-left"),og(),rN(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),og()()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tooltip-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),og()()()),a&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,pe,me,de,ce],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:"",component:ue}],ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[mL.forChild(xe),mL]})}return n})();var Ye=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[sr,ge]})}return n})();export{Ye as DocPoTooltipModule};