import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,cm as P3,c6 as U,r as r$1,cc as Fa,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,aI as dc,c9 as Yhe,cb as xa,aq as lx,at as ux,a3 as cNe,aD as Xy,aA as Sx,aE as Qy,aT as eN}from'./main-QSTLMRDK.js';var ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&zl(0,"po-page-login");},dependencies:[Fa],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Login Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-login></po-page-login>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-login-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ue],encapsulation:2})}return r})();var ge=(()=>{class r{poDialog=f(Vde);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];ngOnInit(){this.restore();}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={};}addLoginError(){this.loginErrors.push(this.loginError),this.loginError="";}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError="";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(p){this.customLiterals=void 0;}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(p),componentsSize:this.componentsSize});}onChangeCustomProperties(){this.customField=Object.assign({},this.customField);}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support="";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs"]],standalone:false,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=Dx();Il(0,"po-page-login",2),ft("p-login-submit",function(a){return i.loginSubmit(a)}),og(),zl(1,"po-divider"),Il(2,"form",null,0)(4,"div",3)(5,"po-input",4),ww("ngModelChange",function(a){return Xy(d),eN(i.literals,a)||(i.literals=a),Qy(a)}),ft("p-change",function(){return i.changeLiterals()}),og(),QA(),Il(6,"po-input",5),ww("ngModelChange",function(a){return Xy(d),eN(i.productName,a)||(i.productName=a),Qy(a)}),og(),QA(),og(),Il(7,"div",3)(8,"po-input",6),ww("ngModelChange",function(a){return Xy(d),eN(i.loginPattern,a)||(i.loginPattern=a),Qy(a)}),og(),QA(),Il(9,"po-input",7),ww("ngModelChange",function(a){return Xy(d),eN(i.login,a)||(i.login=a),Qy(a)}),og(),QA(),og(),Il(10,"div",3)(11,"po-input",8),ww("ngModelChange",function(a){return Xy(d),eN(i.exceededAttempts,a)||(i.exceededAttempts=a),Qy(a)}),og(),QA(),Il(12,"po-input",9),ww("ngModelChange",function(a){return Xy(d),eN(i.passwordPattern,a)||(i.passwordPattern=a),Qy(a)}),og(),QA(),og(),Il(13,"div",3)(14,"po-input",10),ww("ngModelChange",function(a){return Xy(d),eN(i.contactEmail,a)||(i.contactEmail=a),Qy(a)}),og(),QA(),Il(15,"po-input",11),ww("ngModelChange",function(a){return Xy(d),eN(i.environment,a)||(i.environment=a),Qy(a)}),og(),QA(),og(),Il(16,"div",3)(17,"po-input",12),ww("ngModelChange",function(a){return Xy(d),eN(i.logo,a)||(i.logo=a),Qy(a)}),og(),QA(),Il(18,"po-input",13),ww("ngModelChange",function(a){return Xy(d),eN(i.secondaryLogo,a)||(i.secondaryLogo=a),Qy(a)}),og(),QA(),og(),Il(19,"div",3)(20,"po-input",14),ww("ngModelChange",function(a){return Xy(d),eN(i.background,a)||(i.background=a),Qy(a)}),og(),QA(),Il(21,"po-input",15),ww("ngModelChange",function(a){return Xy(d),eN(i.support,a)||(i.support=a),Qy(a)}),og(),QA(),og(),Il(22,"div",3)(23,"po-input",16),ww("ngModelChange",function(a){return Xy(d),eN(i.recovery,a)||(i.recovery=a),Qy(a)}),og(),QA(),Il(24,"po-input",17),ww("ngModelChange",function(a){return Xy(d),eN(i.registerUrl,a)||(i.registerUrl=a),Qy(a)}),og(),QA(),og(),Il(25,"div",3)(26,"po-checkbox-group",18),ww("ngModelChange",function(a){return Xy(d),eN(i.properties,a)||(i.properties=a),Qy(a)}),og(),QA(),Il(27,"po-radio-group",19),ww("ngModelChange",function(a){return Xy(d),eN(i.componentsSize,a)||(i.componentsSize=a),Qy(a)}),og(),QA(),og(),zl(28,"po-divider",20),Il(29,"div",3)(30,"po-input",21),ww("ngModelChange",function(a){return Xy(d),eN(i.loginError,a)||(i.loginError=a),Qy(a)}),og(),QA(),Il(31,"po-button",22),ft("p-click",function(){return i.addLoginError()}),og()(),zl(32,"po-divider",23),Il(33,"div",3)(34,"po-input",24),ww("ngModelChange",function(a){return Xy(d),eN(i.passwordError,a)||(i.passwordError=a),Qy(a)}),og(),QA(),Il(35,"po-button",25),ft("p-click",function(){return i.addPasswordError()}),og()(),zl(36,"po-divider",26),Il(37,"div",3)(38,"po-input",27),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.property,a)||(i.customField.property=a),Qy(a)}),ft("p-change-model",function(){return i.onChangeCustomProperties()}),og(),QA(),Il(39,"po-input",28),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.value,a)||(i.customField.value=a),Qy(a)}),og(),QA(),og(),Il(40,"div",3)(41,"po-input",29),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.placeholder,a)||(i.customField.placeholder=a),Qy(a)}),og(),QA(),Il(42,"po-input",30),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.pattern,a)||(i.customField.pattern=a),Qy(a)}),og(),QA(),Il(43,"po-input",31),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Qy(a)}),og(),QA(),og(),zl(44,"po-divider"),Il(45,"div",3)(46,"po-input",32),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.url,a)||(i.customField.url=a),Qy(a)}),ft("p-change-model",function(){return i.onChangeCustomProperties()}),og(),QA(),Il(47,"po-input",33),ww("ngModelChange",function(a){return Xy(d),eN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Qy(a)}),ft("p-change-model",function(){return i.onChangeCustomProperties()}),og(),QA(),og(),zl(48,"po-divider"),Il(49,"form",null,1)(51,"div",3)(52,"po-input",34),ww("ngModelChange",function(a){return Xy(d),eN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Qy(a)}),og(),QA(),Il(53,"po-input",35),ww("ngModelChange",function(a){return Xy(d),eN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Qy(a)}),og(),QA(),og(),Il(54,"div",3)(55,"po-button",36),ft("p-click",function(){return i.addCustomFieldOption()}),og()()(),zl(56,"br")(57,"po-divider"),Il(58,"div",3)(59,"po-button",37),ft("p-click",function(){return i.restore()}),og()()();}if(l&2){let d=Ax(50);nw("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),Lp(5),Ew("ngModel",i.literals),e0(),Lp(),Ew("ngModel",i.productName),e0(),Lp(2),Ew("ngModel",i.loginPattern),e0(),Lp(),Ew("ngModel",i.login),e0(),Lp(2),Ew("ngModel",i.exceededAttempts),e0(),Lp(),Ew("ngModel",i.passwordPattern),e0(),Lp(2),Ew("ngModel",i.contactEmail),e0(),Lp(),Ew("ngModel",i.environment),e0(),Lp(2),Ew("ngModel",i.logo),e0(),Lp(),Ew("ngModel",i.secondaryLogo),e0(),Lp(2),Ew("ngModel",i.background),e0(),Lp(),Ew("ngModel",i.support),e0(),Lp(2),Ew("ngModel",i.recovery),e0(),Lp(),Ew("ngModel",i.registerUrl),e0(),Lp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),e0(),Lp(3),Ew("ngModel",i.loginError),e0(),Lp(4),Ew("ngModel",i.passwordError),e0(),Lp(4),Ew("ngModel",i.customField.property),e0(),Lp(),Ew("ngModel",i.customField.value),e0(),Lp(2),Ew("ngModel",i.customField.placeholder),e0(),Lp(),Ew("ngModel",i.customField.pattern),e0(),Lp(),Ew("ngModel",i.customField.errorPattern),e0(),Lp(3),Ew("ngModel",i.customField.url),e0(),Lp(),Ew("ngModel",i.customField.fieldValue),e0(),Lp(5),Ew("ngModel",i.customFieldOption.label),e0(),Lp(),Ew("ngModel",i.customFieldOption.value),e0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,Fa],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r}),Ee=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Login Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-login
  [p-background]="background"
  [p-components-size]="componentsSize"
  [p-contact-email]="contactEmail"
  [p-custom-field]="customField"
  [p-environment]="environment"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-hide-remember-user]="properties.includes('hideRememberUser')"
  [p-loading]="properties.includes('loading')"
  [p-literals]="customLiterals"
  [p-login]="login"
  [p-login-errors]="loginErrors"
  [p-login-pattern]="loginPattern"
  [p-logo]="logo"
  [p-password-errors]="passwordErrors"
  [p-password-pattern]="passwordPattern"
  [p-product-name]="productName"
  [p-recovery]="recovery"
  [p-register-url]="registerUrl"
  [p-secondary-logo]="secondaryLogo"
  [p-support]="support"
  (p-login-submit)="loginSubmit($event)"
>
</po-page-login>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="productName"
      [(ngModel)]="productName"
      p-clean
      p-help="A custom name that succeeds the title"
      p-label="Product Name"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="loginPattern"
      [(ngModel)]="loginPattern"
      p-clean
      p-help="Ex.: ^[a-zA-Z]*$ (Only letters)"
      p-label="Login Pattern"
    >
    </po-input>

    <po-input class="po-lg-6" name="login" [(ngModel)]="login" p-clean p-help="Ex.: podev" p-label="Login"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="exceededAttempts"
      [(ngModel)]="exceededAttempts"
      p-clean
      p-help="Ex.: 5"
      p-label="Exceeded Attempts Warning"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="passwordPattern"
      [(ngModel)]="passwordPattern"
      p-clean
      p-help="Ex.: ^(\\d*)$ (Only numbers)"
      p-label="Password Pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="contactMail" [(ngModel)]="contactEmail" p-clean p-label="Contact Email"> </po-input>

    <po-input class="po-lg-6" name="environment" [(ngModel)]="environment" p-clean p-label="Environment"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>

    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="background" [(ngModel)]="background" p-clean p-label="Background"> </po-input>

    <po-input class="po-lg-6" name="support" [(ngModel)]="support" p-clean p-label="Support"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="recovery" [(ngModel)]="recovery" p-clean p-label="Recovery"> </po-input>

    <po-input class="po-lg-6" name="registerUrl" [(ngModel)]="registerUrl" p-clean p-label="Register URL"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <po-divider p-label="Login Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-md-8" name="loginError" [(ngModel)]="loginError" p-clean p-label="Login Error"> </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Login Error" (p-click)="addLoginError()"> </po-button>
  </div>

  <po-divider p-label="Password Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-lg-8" name="passwordError" [(ngModel)]="passwordError" p-clean p-label="Password Error">
    </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Password Error" (p-click)="addPasswordError()"> </po-button>
  </div>

  <po-divider p-label="Custom Field"></po-divider>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldProperty"
      [(ngModel)]="customField.property"
      p-clean
      p-help="Ex.: domain"
      p-label="Custom Field Property"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldValue"
      [(ngModel)]="customField.value"
      p-clean
      p-help="Ex.: JV01"
      p-label="Custom Field Value"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-4"
      name="customFieldPlaceholder"
      [(ngModel)]="customField.placeholder"
      p-clean
      p-help="Ex.: Enter your domain"
      p-label="Custom Field Placeholder"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldPattern"
      [(ngModel)]="customField.pattern"
      p-clean
      p-help="Ex.: [a-z]"
      p-label="Custom Field Pattern"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldErrorPattern"
      [(ngModel)]="customField.errorPattern"
      p-clean
      p-help="Ex.: Value doesn\`t match expected"
      p-label="Custom Field Error Pattern"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldComboUrl"
      [(ngModel)]="customField.url"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/heroes"
      p-label="Custom Field URL"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldComboValue"
      [(ngModel)]="customField.fieldValue"
      p-clean
      p-help="Property to specify the return field. Ex.: value, nickname, label"
      p-label="Custom Field Field Value"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>
  </div>

  <po-divider />

  <form #formCustomFieldOptions="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="customFieldOptionLabel"
        [(ngModel)]="customFieldOption.label"
        p-clean
        p-label="Custom Field Option Label"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="customFieldOptionValue"
        [(ngModel)]="customFieldOption.value"
        p-clean
        p-label="Custom Field Option Value"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-4"
        p-label="Add Custom Field Option"
        [p-disabled]="formCustomFieldOptions.invalid"
        (p-click)="addCustomFieldOption()"
      >
      </po-button>
    </div>
  </form>

  <br />

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-labs',
  templateUrl: './sample-po-page-login-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  background: string;
  componentsSize: string;
  contactEmail: string;
  customField: PoPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<PoSelectOption>;
  customLiterals: PoPageLoginLiterals;
  environment: string;
  exceededAttempts: number;
  secondaryLogo: string;
  literals: string;
  login: string;
  loginPattern: string;
  loginError: string;
  loginErrors: Array<string>;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: string;
  registerUrl: string;
  support: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({ label: this.customFieldOption.label, value: this.customFieldOption.value });
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData),
        componentsSize: this.componentsSize
      });
    }
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.componentsSize = 'medium';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0;
    this.secondaryLogo = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.loginError = '';
    this.loginErrors = [];
    this.logo = undefined;
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.productName = '';
    this.recovery = '';
    this.registerUrl = '';
    this.support = '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-login-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ge],encapsulation:2})}return r})();function Te(r,fe){if(r&1){let p=Dx();Il(0,"po-page-login",6),ft("p-login-change",function(){Xy(p);let i=Sx();return Qy(i.loginChange())})("p-login-submit",function(i){Xy(p);let d=Sx();return Qy(d.checkLogin(i))})("p-password-change",function(){Xy(p);let i=Sx();return Qy(i.passwordChange())}),og();}if(r&2){let p=Sx();nw("p-custom-field",p.customField)("p-exceeded-attempts-warning",p.exceededAttempts)("p-literals",p.literalsI18n)("p-loading",p.loading)("p-password-errors",p.passwordErrors)("p-login-errors",p.loginErrors)("p-recovery",p.passwordRecovery);}}function ke(r,fe){if(r&1&&zl(0,"po-page-blocked-user",5),r&2){let p=Sx();nw("p-params",p.params);}}var Se=(()=>{class r{poI18nService=f(P3);poDialog=f(Vde);customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=false;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:U.All,contactMail:"support@mail.com"};showPageBlocked=false;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe();}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0;});}checkLogin(p){this.loading=true,p.login==="devpo"&&p.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=false,title:"Access released",message:"You are on vacation, take time to rest."});},3e3)):(this.loading=false,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."]);}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[]);}loginChange(){this.loginErrors.length&&(this.loginErrors=[]);}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=true);}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:false,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"]],template:function(l,i){l&1&&(Il(0,"po-container")(1,"div",0),zl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),lx(5,Te,1,7,"po-page-login",4),lx(6,ke,1,1,"po-page-blocked-user",5)),l&2&&(Lp(5),ux(i.showPageBlocked?-1:5),Lp(),ux(i.showPageBlocked?6:-1));},dependencies:[dc,Yhe,xa,Fa],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),he=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Login - Human Resources"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

@if (!showPageBlocked) {
  <po-page-login
    p-hide-remember-user
    p-login-pattern="^[a-zA-Z]*$"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-password-pattern="^(\\d*)$"
    p-product-name="Human Resources"
    p-register-url="http://po.com"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-custom-field]="customField"
    [p-exceeded-attempts-warning]="exceededAttempts"
    [p-literals]="literalsI18n"
    [p-loading]="loading"
    [p-password-errors]="passwordErrors"
    [p-login-errors]="loginErrors"
    [p-recovery]="passwordRecovery"
    (p-login-change)="loginChange()"
    (p-login-submit)="checkLogin($event)"
    (p-password-change)="passwordChange()"
  >
  </po-page-login>
}

@if (showPageBlocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="exceededAttempts"
    p-url-back="https://po-ui.io/documentation/po-page-login"
    [p-params]="params"
  >
  </po-page-blocked-user>
}
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoDialogService, PoI18nService } from '@po-ui/ng-components';
import {
  PoModalPasswordRecoveryType,
  PoPageBlockedUserReasonParams,
  PoPageLoginCustomField,
  PoPageLoginLiterals,
  PoPageLoginRecovery
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-human-resources',
  templateUrl: './sample-po-page-login-human-resources.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginHumanResourcesComponent implements OnDestroy, OnInit {
  private poI18nService = inject(PoI18nService);
  private poDialog = inject(PoDialogService);

  customField: PoPageLoginCustomField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  attempts = 3;
  exceededAttempts: number;
  literalsI18n: PoPageLoginLiterals;
  loading: boolean = false;
  loginErrors = [];
  passwordErrors = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 24 };
  passwordRecovery: PoPageLoginRecovery = {
    url: 'https://po-sample-api.onrender.com/v1/users',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'support@mail.com'
  };
  showPageBlocked: boolean = false;

  private i18nSubscription: Subscription;

  ngOnDestroy() {
    this.i18nSubscription.unsubscribe();
  }

  ngOnInit() {
    this.i18nSubscription = this.poI18nService.getLiterals().subscribe(literals => {
      this.literalsI18n = literals;
      this.exceededAttempts = 0;
    });
  }

  checkLogin(formData) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {
      this.passwordErrors = [];
      this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.poDialog.alert({
          ok: () => (this.loading = false),
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });
      }, 3000);
    } else {
      this.loading = false;
      this.generateAttempts();
      this.passwordErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
    }
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  private generateAttempts() {
    if (this.attempts >= 1) {
      this.attempts--;
      this.exceededAttempts = this.attempts;
    }
    if (this.attempts === 0) {
      this.showPageBlocked = true;
    }
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),og(),Il(23,"pre",9),Qx(24,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com i18n.
 */

// import { NgModule } from '@angular/core';

// import { PoModule } from '@po-ui/ng-components/po.module';
// import { PoI18nConfig, PoI18nModule } from '@po-ui/ng-components/services/po-i18n';

// import { SamplePoPageLoginHumanResourcesComponent } from './sample-po-page-login-human-resources.component';

// const humanResourcesEnLiterals = {
//   loginErrorPattern: 'Invalid ID',
//   loginPlaceholder: 'Insert your ID',
//   passwordErrorPattern: 'Invalid PIN',
//   passwordPlaceholder: 'Insert your PIN',
//   submitLabel: 'Access your account',
//   forgotPassword: 'Forgot your ID or PIN?',
//   highlightInfo: 'For us the future is now'
// };

// const humanResourcesEsLiterals = {
//   loginErrorPattern: 'ID invalido',
//   loginPlaceholder: 'Inserte su ID',
//   passwordErrorPattern: 'Contrase\xF1a incorrecta',
//   passwordPlaceholder: 'Inserte su contrase\xF1a',
//   submitLabel: 'Accede a su cuenta',
//   forgotPassword: '\xBFOlvid\xF3 su ID o contrase\xF1a?',
//   highlightInfo: 'Para nosotros el futuro es ahora'
// };

// const humanResourcesPtLiterals = {
// loginErrorPattern: 'ID inv\xE1lido',
//   loginPlaceholder: 'Insira seu ID',
//   passwordErrorPattern: 'Senha incorreta',
//   passwordPlaceholder: 'Insira sua senha',
//   submitLabel: 'Acesse a sua conta',
//   forgotPassword: 'Esqueceu seu ID ou sua senha?',
//   highlightInfo: 'Para n\xF3s o futuro \xE9 agora'
// };

// const poI18nConfig: PoI18nConfig = {
//   contexts: {
//     general: {
//       'en': humanResourcesEnLiterals,
//       'es': humanResourcesEsLiterals,
//       'pt': humanResourcesPtLiterals,
//     }
//   },
//   default: {
//    context: 'general',
//    cache: true
//   }
// };

// @NgModule({
//   imports: [
//     PoModule,
//     PoI18nModule.config(poI18nConfig)
//   ],
//   declarations: [
//     SamplePoPageLoginHumanResourcesComponent
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoPageLoginHumanResourcesModule { }
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-page-login-human-resources"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return r})();var xe=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(p){p?.language==="jp"?this.literals=r$1({},this.japoneseLiterals):this.literals={};}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:false,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(Il(0,"po-container")(1,"div",0),zl(2,"po-info",1)(3,"po-info",2),og()(),Il(4,"po-page-login",3),ft("p-language-change",function(m){return i.changeLanguage(m)}),og()),l&2&&(Lp(4),nw("p-languages",i.languages)("p-literals",i.literals));},dependencies:[dc,Yhe,Fa],encapsulation:2,changeDetection:1})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Login - Automatic Service"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Login" p-value="admin"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Password" p-value="admin"></po-info>
  </div>
</po-container>
<po-page-login
  p-authentication-url="https://po-sample-api.onrender.com/v1/users/authentication"
  p-blocked-url="/documentation/po-page-blocked-user"
  p-authentication-type="Bearer"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-languages]="languages"
  [p-literals]="literals"
  (p-language-change)="changeLanguage($event)"
>
</po-page-login>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoLanguage } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-automatic-service',
  templateUrl: './sample-po-page-login-automatic-service.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginAutomaticServiceComponent {
  literals: PoPageLoginLiterals;
  japoneseLiterals: PoPageLoginLiterals = {
    welcome: '\u3088\u3046\u3053\u305D',
    loginLabel: '\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    loginPlaceholder: '\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordErrorPattern: '\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981',
    passwordLabel: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordPlaceholder: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    submitLabel: '\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0',
    submittedLabel: '\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...',
    rememberUser: '\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3',
    rememberUserHint: '\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059',
    loginHint: \`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\`
  };

  languages: Array<PoLanguage> = [
    { language: 'pt', description: 'Portugu\xEAs' },
    { language: 'jp', description: '\u65E5\u672C\u8A9E' }
  ];

  changeLanguage(language: PoLanguage) {
    if (language?.language === 'jp') {
      this.literals = { ...this.japoneseLiterals };
    } else {
      this.literals = {};
    }
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-login-automatic-service"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,xe],encapsulation:2})}return r})();var ve=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-doc"]],standalone:false,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do template do po-page-login."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoPageLoginComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-page-login"),og(),Qx(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),og(),Il(18,"p"),Qx(19,"A propriedade "),Il(20,"code"),Qx(21,"p-authentication-url"),og(),Qx(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Il(23,"em"),Qx(24,"client side"),og(),Qx(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Il(26,"em"),Qx(27,"propriedades"),og(),Qx(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Il(29,"p"),Qx(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Il(31,"em"),Qx(32,"assets"),og(),Qx(33," no arquivo "),Il(34,"strong"),Qx(35,"angular.json"),og(),Qx(36," da aplica\xE7\xE3o na seguinte ordem:"),og(),Il(37,"pre")(38,"code"),Qx(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Il(40,"div",6)(41,"h4",7),Qx(42,"Seletor"),og(),Il(43,"pre",8),Qx(44,`<po-page-login
    p-authentication-type="PoPageLoginAuthenticationType"
    p-authentication-url="string"
    p-background="string"
    p-blocked-url="string"
    p-components-size="string"
    p-contact-email="string"
    p-custom-field="string | PoPageLoginCustomField"
    p-environment="string"
    p-exceeded-attempts-warning="number"
    p-hide-label-status="boolean"
    p-hide-password-peek="boolean"
    p-hide-remember-user="boolean"
    (p-language-change)="EventEmitter"
    p-languages="Array<PoLanguage>"
    p-literals="PoPageLoginLiterals"
    p-loading="boolean"
    p-login="string"
    (p-login-change)="EventEmitter"
    p-login-errors="string[]"
    p-login-pattern="string"
    (p-login-submit)="EventEmitter"
    p-logo="string"
    p-no-autocomplete-login="boolean"
    p-no-autocomplete-password="boolean"
    (p-password-change)="EventEmitter"
    p-password-errors="string[]"
    p-password-pattern="string"
    p-product-name="string"
    p-recovery="string | Function | PoPageLoginRecovery"
    p-register-url="string"
    p-secondary-logo="string"
    p-support="string | Function" >
</po-page-login>
`),og()(),Il(45,"h4",9),Qx(46,"Propriedades"),og(),Il(47,"table",10)(48,"tr",11)(49,"th",12),Qx(50,"Nome"),og(),Il(51,"th",12),Qx(52,"Tipo"),og(),Il(53,"th",12),Qx(54,"Padr\xE3o"),og(),Il(55,"th",12),Qx(56,"Descri\xE7\xE3o"),og()(),Il(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),Qx(61," p-authentication-type"),zl(62,"br"),og()()(),Il(63,"td",17)(64,"code",18),Qx(65,"PoPageLoginAuthenticationType"),og()(),Il(66,"td",19)(67,"p")(68,"code"),Qx(69,"PoPageLoginAuthenticationType.Basic"),og()()(),Il(70,"td",20)(71,"em")(72,"strong"),Qx(73,"(opcional)"),og()(),Il(74,"p"),Qx(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),Il(76,"code"),Qx(77,"Basic"),og(),Qx(78," e "),Il(79,"code"),Qx(80,"Bearer"),og(),Qx(81,"."),og(),Il(82,"blockquote")(83,"p"),Qx(84,"Caso o tipo definido seja "),Il(85,"code"),Qx(86,"Basic"),og(),Qx(87,", o componente far\xE1 uma requisi\xE7\xE3o "),Il(88,"code"),Qx(89,"POST"),og(),Qx(90," contendo:"),og()(),Il(91,"pre")(92,"code"),Qx(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),og()(),Il(94,"blockquote")(95,"p"),Qx(96,"Caso o tipo definido seja "),Il(97,"code"),Qx(98,"Bearer"),og(),Qx(99,", o componente far\xE1 uma requisi\xE7\xE3o "),Il(100,"code"),Qx(101,"POST"),og(),Qx(102," contendo:"),og()(),Il(103,"pre")(104,"code"),Qx(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),og()()()(),Il(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),Qx(110," p-authentication-url"),zl(111,"br"),og()()(),Il(112,"td",17)(113,"code",21),Qx(114,"string"),og()(),Il(115,"td",19),Qx(116,"-"),og(),Il(117,"td",20)(118,"em")(119,"strong"),Qx(120,"(opcional)"),og()(),Il(121,"p"),Qx(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),Il(123,"code"),Qx(124,"p-login-submit"),og(),Qx(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),og(),Il(126,"h3"),Qx(127,"Processos"),og(),Il(128,"p"),Qx(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),Il(130,"strong"),Qx(131,"Enter"),og(),Qx(132,", o componente far\xE1 uma requisi\xE7\xE3o "),Il(133,"code"),Qx(134,"POST"),og(),Qx(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),og(),Il(136,"pre")(137,"code"),Qx(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),og()(),Il(139,"p"),Qx(140,"Em caso de "),Il(141,"strong"),Qx(142,"sucesso"),og(),Qx(143,", o objeto de retorno \xE9 armazenado no "),Il(144,"code"),Qx(145,"sessionStorage"),og(),Qx(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Il(147,"code"),Qx(148,"/"),og(),Qx(149,"."),og(),Il(150,"pre")(151,"code"),Qx(152,`200:
{
  user: user
}
`),og()(),Il(153,"p"),Qx(154,"Em caso de "),Il(155,"strong"),Qx(156,"erro"),og(),Qx(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),og(),Il(158,"pre")(159,"code"),Qx(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),og()(),Il(161,"blockquote")(162,"p"),Qx(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),Il(164,"code"),Qx(165,"p-exceeded-attempts-warning"),og(),Qx(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Il(167,"code"),Qx(168,"p-login-errors"),og(),Qx(169,` e
`),Il(170,"code"),Qx(171,"p-password-errors"),og(),Qx(172," conforme retorno abaixo:"),og()(),Il(173,"pre")(174,"code"),Qx(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),og()(),Il(176,"blockquote")(177,"p"),Qx(178,"Caso o valor atribu\xEDdo para "),Il(179,"code"),Qx(180,"p-exceeded-attempts-warning"),og(),Qx(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Il(182,"code"),Qx(183,"p-blocked-url"),og(),Qx(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),og()(),Il(185,"p")(186,"em"),Qx(187,"Processo finalizado."),og()(),zl(188,"hr"),Il(189,"h4"),Qx(190,"Praticidade"),og(),Il(191,"p"),Qx(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Il(193,"code"),Qx(194,"po-page-login"),og(),Qx(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Il(196,"code"),Qx(197,"/login"),og(),Qx(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Il(199,"pre")(200,"code"),Qx(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'login', component: PoPageLoginComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/users/authentication',
      environment: 'development',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      },
      registerUrl: '/new-password',
      authenticationType: PoPageLoginAthenticationType.Basic
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),og()(),Il(202,"p"),Qx(203,"O metadado "),Il(204,"code"),Qx(205,"serviceApi"),og(),Qx(206," deve ser a "),Il(207,"strong"),Qx(208,"url"),og(),Qx(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),Il(210,"code"),Qx(211,"environment"),og(),Qx(212,` alimenta a propriedade
`),Il(213,"code"),Qx(214,"p-environment"),og(),Qx(215,", "),Il(216,"code"),Qx(217,"recovery"),og(),Qx(218," \xE9 a interface "),Il(219,"code"),Qx(220,"PoPageLoginRecovery"),og(),Qx(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Il(222,"code"),Qx(223,"registerUrl"),og(),Qx(224," alimenta a propriedade "),Il(225,"code"),Qx(226,"p-register-url"),og(),Qx(227," e "),Il(228,"code"),Qx(229,"authenticationType"),og(),Qx(230," que define a propriedade "),Il(231,"code"),Qx(232,"p-authentication-type"),og(),Qx(233,"."),og(),Il(234,"blockquote")(235,"p"),Qx(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()(),Il(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),Qx(241," p-background"),zl(242,"br"),og()()(),Il(243,"td",17)(244,"code",21),Qx(245,"string"),og()(),Il(246,"td",19),Qx(247,"-"),og(),Il(248,"td",20)(249,"em")(250,"strong"),Qx(251,"(opcional)"),og()(),Il(252,"p"),Qx(253,"O "),Il(254,"code"),Qx(255,"p-background"),og(),Qx(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),og(),Il(257,"p"),Qx(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),og(),Il(259,"p"),Qx(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Il(261,"code"),Qx(262,"highlightInfo"),og(),Qx(263,"."),og(),Il(264,"blockquote")(265,"p"),Qx(266,"Veja mais sobre as literais na propriedade "),Il(267,"code"),Qx(268,"p-literals"),og(),Qx(269,"."),og()(),Il(270,"p"),Qx(271,"Exemplos de valores v\xE1lidos:"),og(),Il(272,"ul")(273,"li")(274,"strong"),Qx(275,"local"),og(),Qx(276,": "),Il(277,"code"),Qx(278,"./assets/images/login-background.png"),og()(),Il(279,"li")(280,"strong"),Qx(281,"url externa"),og(),Qx(282,": "),Il(283,"code"),Qx(284,"https://po-ui.io/assets/images/login-background.png"),og()()(),Il(285,"blockquote")(286,"p"),Qx(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),og()()()(),Il(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),Qx(292," p-blocked-url"),zl(293,"br"),og()()(),Il(294,"td",17)(295,"code",21),Qx(296,"string"),og()(),Il(297,"td",19),Qx(298,"-"),og(),Il(299,"td",20)(300,"em")(301,"strong"),Qx(302,"(opcional)"),og()(),Il(303,"p"),Qx(304,"Caso o valor atribu\xEDdo para "),Il(305,"code"),Qx(306,"p-exceeded-attempts-warning"),og(),Qx(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),og()()(),Il(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),Qx(312," p-components-size"),zl(313,"br"),og()()(),Il(314,"td",17)(315,"code",21),Qx(316,"string"),og()(),Il(317,"td",19)(318,"p")(319,"code"),Qx(320,"medium"),og()()(),Il(321,"td",20)(322,"em")(323,"strong"),Qx(324,"(opcional)"),og()(),Il(325,"p"),Qx(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(327,"ul")(328,"li")(329,"code"),Qx(330,"small"),og(),Qx(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(332,"li")(333,"code"),Qx(334,"medium"),og(),Qx(335,": aplica a medida medium de cada componente."),og()(),Il(336,"blockquote")(337,"p"),Qx(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(339,"code"),Qx(340,"medium"),og(),Qx(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(342,"a",22),Qx(343,"po-theme"),og(),Qx(344,"."),og()()()(),Il(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),Qx(349," p-contact-email"),zl(350,"br"),og()()(),Il(351,"td",17)(352,"code",21),Qx(353,"string"),og()(),Il(354,"td",19),Qx(355,"-"),og(),Il(356,"td",20)(357,"em")(358,"strong"),Qx(359,"(opcional)"),og()(),Il(360,"p"),Qx(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),og()()(),Il(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),Qx(366," p-custom-field"),zl(367,"br"),og()()(),Il(368,"td",17)(369,"code",21),Qx(370,"string "),og(),Il(371,"code",23),Qx(372," PoPageLoginCustomField"),og()(),Il(373,"td",19),Qx(374,"-"),og(),Il(375,"td",20)(376,"em")(377,"strong"),Qx(378,"(opcional)"),og()(),Il(379,"p"),Qx(380,"Ao informar um valor do tipo "),Il(381,"code"),Qx(382,"string"),og(),Qx(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Il(384,"code"),Qx(385,"literals"),og(),Qx(386," como "),Il(387,"code"),Qx(388,"customFieldErrorPattern"),og(),Qx(389," e "),Il(390,"code"),Qx(391,"customFieldPlaceholder"),og(),Qx(392,"."),og(),Il(393,"p"),Qx(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),Il(395,"code"),Qx(396,"PoPageLoginCustomField"),og(),Qx(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Il(398,"code"),Qx(399,"po-input"),og(),Qx(400,", "),Il(401,"code"),Qx(402,"po-combo"),og(),Qx(403,` especificamente para servi\xE7os
ou `),Il(404,"code"),Qx(405,"po-select"),og(),Qx(406," para valores fixos."),og(),Il(407,"p"),Qx(408,"Abaixo seguem os exemplos de cada tipo de campo."),og(),Il(409,"p")(410,"code"),Qx(411,"po-input"),og(),Qx(412,":"),og(),Il(413,"pre")(414,"code"),Qx(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),og()(),Il(416,"p")(417,"code"),Qx(418,"po-combo"),og(),Qx(419,":"),og(),Il(420,"pre")(421,"code"),Qx(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),og()(),Il(423,"p")(424,"code"),Qx(425,"po-select"),og(),Qx(426,":"),og(),Il(427,"pre")(428,"code"),Qx(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),og()(),Il(430,"p"),Qx(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),og()()(),Il(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),Qx(436," p-environment"),zl(437,"br"),og()()(),Il(438,"td",17)(439,"code",21),Qx(440,"string"),og()(),Il(441,"td",19),Qx(442,"-"),og(),Il(443,"td",20)(444,"em")(445,"strong"),Qx(446,"(opcional)"),og()(),Il(447,"p"),Qx(448,"Adiciona uma "),Il(449,"code"),Qx(450,"tag"),og(),Qx(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),og(),Il(452,"blockquote")(453,"p"),Qx(454,"Essa propriedade limita o texto em 40 caracteres."),og()()()(),Il(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),Qx(459," p-exceeded-attempts-warning"),zl(460,"br"),og()()(),Il(461,"td",17)(462,"code",24),Qx(463,"number"),og()(),Il(464,"td",19)(465,"p")(466,"code"),Qx(467,"0"),og()()(),Il(468,"td",20)(469,"em")(470,"strong"),Qx(471,"(opcional)"),og()(),Il(472,"p"),Qx(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),og(),Il(474,"blockquote")(475,"p"),Qx(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),Il(477,"code"),Qx(478,"p-authentication-url"),og(),Qx(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Il(480,"code"),Qx(481,"p-exceeded-attempts-warning"),og(),Qx(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),og()()()(),Il(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),Qx(487," p-hide-label-status"),zl(488,"br"),og()()(),Il(489,"td",17)(490,"code",25),Qx(491,"boolean"),og()(),Il(492,"td",19)(493,"p")(494,"code"),Qx(495,"false"),og()()(),Il(496,"td",20)(497,"em")(498,"strong"),Qx(499,"(opcional)"),og()(),Il(500,"p"),Qx(501,"Indica se o status do "),Il(502,"code"),Qx(503,"model"),og(),Qx(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),og(),Il(505,"blockquote")(506,"p"),Qx(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Il(508,"code"),Qx(509,"false"),og(),Qx(510,"."),og()()()(),Il(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),Qx(515," p-hide-password-peek"),zl(516,"br"),og()()(),Il(517,"td",17)(518,"code",25),Qx(519,"boolean"),og()(),Il(520,"td",19)(521,"p")(522,"code"),Qx(523,"false"),og()()(),Il(524,"td",20)(525,"em")(526,"strong"),Qx(527,"(opcional)"),og()(),Il(528,"p"),Qx(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),og()()(),Il(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),Qx(534," p-hide-remember-user"),zl(535,"br"),og()()(),Il(536,"td",17)(537,"code",25),Qx(538,"boolean"),og()(),Il(539,"td",19)(540,"p")(541,"code"),Qx(542,"false"),og()()(),Il(543,"td",20)(544,"em")(545,"strong"),Qx(546,"(opcional)"),og()(),Il(547,"p"),Qx(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),og(),Il(549,"p"),Qx(550,"Quando essa propriedade \xE9 setada com "),Il(551,"code"),Qx(552,"true"),og(),Qx(553," a propriedade "),Il(554,"code"),Qx(555,"rememberUser"),og(),Qx(556," enviada no evento "),Il(557,"code"),Qx(558,"p-login-submit"),og(),Qx(559,` ser\xE1 sempre
`),Il(560,"code"),Qx(561,"false"),og(),Qx(562,"."),og(),Il(563,"blockquote")(564,"p"),Qx(565,"Veja a propriedade "),Il(566,"code"),Qx(567,"p-literals"),og(),Qx(568," para customizar a literal "),Il(569,"code"),Qx(570,"rememberUser"),og(),Qx(571,"."),og()()()(),Il(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),Qx(576," (p-language-change)"),zl(577,"br"),og()()(),Il(578,"td",17)(579,"code",28),Qx(580,"EventEmitter"),og()(),Il(581,"td",19),Qx(582,"-"),og(),Il(583,"td",20)(584,"em")(585,"strong"),Qx(586,"(opcional)"),og()(),Il(587,"p"),Qx(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),og(),Il(589,"p"),Qx(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Il(591,"code"),Qx(592,"PoLanguage"),og(),Qx(593," com a linguagem selecionada."),og()()(),Il(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),Qx(598," p-languages"),zl(599,"br"),og()()(),Il(600,"td",17)(601,"code",29),Qx(602,"Array<PoLanguage>"),og()(),Il(603,"td",19),Qx(604,"-"),og(),Il(605,"td",20)(606,"em")(607,"strong"),Qx(608,"(opcional)"),og()(),Il(609,"p"),Qx(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),og(),Il(611,"p"),Qx(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),og(),Il(613,"p"),Qx(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),og(),Il(615,"p"),Qx(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),Il(617,"code"),Qx(618,"i18n"),og(),Qx(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),og(),Il(620,"blockquote")(621,"p"),Qx(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),Il(623,"code"),Qx(624,"p-literals"),og(),Qx(625,"."),og()()()(),Il(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),Qx(630," p-literals"),zl(631,"br"),og()()(),Il(632,"td",17)(633,"code",30),Qx(634,"PoPageLoginLiterals"),og()(),Il(635,"td",19),Qx(636,"-"),og(),Il(637,"td",20)(638,"em")(639,"strong"),Qx(640,"(opcional)"),og()(),Il(641,"p"),Qx(642,"Objeto com as literais usadas no "),Il(643,"code"),Qx(644,"po-page-login"),og(),Qx(645,"."),og(),Il(646,"p"),Qx(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(648,"pre")(649,"code"),Qx(650,`const customLiterals: PoPageLoginLiterals = {
  attempts: '{0} vez(es) ',
  createANewPasswordNow: 'Melhor criar uma senha nova agora! Voc\xEA vai poder entrar no sistema logo em seguida.',
  forgotPassword: 'Esqueceu sua senha?',
  forgotYourPassword: 'Esqueceu sua senha?',
  highlightInfo: '',
  iForgotMyPassword: 'Esqueci minha senha',
  ifYouTryHarder: 'Se tentar mais ',
  welcome: 'Boas-vindas',
  loginErrorPattern: 'Login obrigat\xF3rio',
  loginHint: 'Caso n\xE3o possua usu\xE1rio entre em contato com o suporte',
  loginLabel: 'Insira seu usu\xE1rio',
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordErrorPattern: 'Senha obrigat\xF3ria',
  passwordLabel: 'Insira sua senha',
  passwordPlaceholder: 'Insira sua senha de acesso',
  customFieldErrorPattern: 'Campo customizado inv\xE1lido',
  customFieldPlaceholder: 'Por favor insira um valor',
  registerUrl: 'Novo registro',
  rememberUser: 'Lembrar usu\xE1rio',
  rememberUserHint: 'Esta op\xE7\xE3o pode ser desabilitada nas configura\xE7\xF5es do sistema',
  submitLabel: 'Acessar sistema',
  submittedLabel: 'Carregando...',
  titlePopover: 'Opa!',
  yourUserWillBeBlocked: 'sem sucesso seu usu\xE1rio ser\xE1 bloqueado e voc\xEA fica 24 horas sem poder acessar :('
};
`),og()(),Il(651,"p"),Qx(652,"Ou passando apenas as literais que deseja customizar:"),og(),Il(653,"pre")(654,"code"),Qx(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),og()(),Il(656,"p"),Qx(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(658,"pre")(659,"code"),Qx(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),og()(),Il(661,"blockquote")(662,"p"),Qx(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),og()()()(),Il(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),Qx(668," p-loading"),zl(669,"br"),og()()(),Il(670,"td",17)(671,"code",25),Qx(672,"boolean"),og()(),Il(673,"td",19)(674,"p")(675,"code"),Qx(676,"false"),og()()(),Il(677,"td",20)(678,"em")(679,"strong"),Qx(680,"(opcional)"),og()(),Il(681,"p"),Qx(682,"Habilita um estado de carregamento ao bot\xE3o de "),Il(683,"em"),Qx(684,"login"),og(),Qx(685,"."),og(),Il(686,"blockquote")(687,"p"),Qx(688,"\xC9 necess\xE1rio atribuir "),Il(689,"code"),Qx(690,"true"),og(),Qx(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),Il(692,"code"),Qx(693,"p-login-submit"),og(),Qx(694,"."),og()()()(),Il(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),Qx(699," p-login"),zl(700,"br"),og()()(),Il(701,"td",17)(702,"code",21),Qx(703,"string"),og()(),Il(704,"td",19),Qx(705,"-"),og(),Il(706,"td",20)(707,"em")(708,"strong"),Qx(709,"(opcional)"),og()(),Il(710,"p"),Qx(711,"Valor do modelo do campo de login."),og()()(),Il(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),Qx(716," (p-login-change)"),zl(717,"br"),og()()(),Il(718,"td",17)(719,"code",28),Qx(720,"EventEmitter"),og()(),Il(721,"td",19),Qx(722,"-"),og(),Il(723,"td",20)(724,"em")(725,"strong"),Qx(726,"(opcional)"),og()(),Il(727,"p"),Qx(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),og(),Il(729,"p"),Qx(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Il(731,"code"),Qx(732,"string"),og(),Qx(733," com o texto informado no campo."),og(),Il(734,"blockquote")(735,"p"),Qx(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Il(737,"code"),Qx(738,"p-authentication-url"),og(),Qx(739,"."),og()()()(),Il(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),Qx(744," p-login-errors"),zl(745,"br"),og()()(),Il(746,"td",17)(747,"code",31),Qx(748,"string[]"),og()(),Il(749,"td",19),Qx(750,"-"),og(),Il(751,"td",20)(752,"em")(753,"strong"),Qx(754,"(opcional)"),og()(),Il(755,"p"),Qx(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),og()()(),Il(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),Qx(761," p-login-pattern"),zl(762,"br"),og()()(),Il(763,"td",17)(764,"code",21),Qx(765,"string"),og()(),Il(766,"td",19),Qx(767,"-"),og(),Il(768,"td",20)(769,"em")(770,"strong"),Qx(771,"(opcional)"),og()(),Il(772,"p"),Qx(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),Il(774,"code"),Qx(775,"loginErrorPattern"),og(),Qx(776,`
ser\xE1 exibida.`),og(),Il(777,"p"),Qx(778,"Exemplos de valores v\xE1lidos:"),og(),Il(779,"ul")(780,"li"),Qx(781,"email: "),Il(782,"code"),Qx(783,"[expressao-regular-email]"),og()(),Il(784,"li"),Qx(785,"cpf: "),Il(786,"code"),Qx(787,"[expressao-regular-cpf]"),og()()(),Il(788,"blockquote")(789,"p"),Qx(790,"Veja a propriedade "),Il(791,"code"),Qx(792,"p-literals"),og(),Qx(793," para customizar a literal "),Il(794,"code"),Qx(795,"loginErrorPattern"),og(),Qx(796,"."),og()()()(),Il(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),Qx(801," (p-login-submit)"),zl(802,"br"),og()()(),Il(803,"td",17)(804,"code",28),Qx(805,"EventEmitter"),og()(),Il(806,"td",19),Qx(807,"-"),og(),Il(808,"td",20)(809,"p"),Qx(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),Il(811,"code"),Qx(812,"Enter"),og(),Qx(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),og(),Il(814,"p"),Qx(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Il(816,"code"),Qx(817,"PoPageLogin"),og(),Qx(818," com os dados informados no formul\xE1rio."),og(),Il(819,"blockquote")(820,"p"),Qx(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Il(822,"code"),Qx(823,"p-url-recovery"),og(),Qx(824,"."),og()(),Il(825,"blockquote")(826,"p"),Qx(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),Il(828,"code"),Qx(829,"PoPageLogin"),og(),Qx(830," mais abaixo."),og()()()(),Il(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),Qx(835," p-logo"),zl(836,"br"),og()()(),Il(837,"td",17)(838,"code",21),Qx(839,"string"),og()(),Il(840,"td",19),Qx(841,"-"),og(),Il(842,"td",20)(843,"em")(844,"strong"),Qx(845,"(opcional)"),og()(),Il(846,"p"),Qx(847,"Caminho para a logomarca localizada na parte superior."),og(),Il(848,"blockquote")(849,"p"),Qx(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Il(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),Qx(855," p-no-autocomplete-login"),zl(856,"br"),og()()(),Il(857,"td",17)(858,"code",25),Qx(859,"boolean"),og()(),Il(860,"td",19)(861,"p")(862,"code"),Qx(863,"true"),og()()(),Il(864,"td",20)(865,"em")(866,"strong"),Qx(867,"(opcional)"),og()(),Il(868,"p"),Qx(869,"Define a propriedade nativa "),Il(870,"code"),Qx(871,"autocomplete"),og(),Qx(872," do campo como "),Il(873,"code"),Qx(874,"off"),og(),Qx(875,"."),og()()(),Il(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),Qx(880," p-no-autocomplete-password"),zl(881,"br"),og()()(),Il(882,"td",17)(883,"code",25),Qx(884,"boolean"),og()(),Il(885,"td",19)(886,"p")(887,"code"),Qx(888,"true"),og()()(),Il(889,"td",20)(890,"em")(891,"strong"),Qx(892,"(opcional)"),og()(),Il(893,"p"),Qx(894,"Define a propriedade nativa "),Il(895,"code"),Qx(896,"autocomplete"),og(),Qx(897," do campo como "),Il(898,"code"),Qx(899,"off"),og(),Qx(900,"."),og(),Il(901,"blockquote")(902,"p"),Qx(903,"No componente "),Il(904,"code"),Qx(905,"po-password"),og(),Qx(906," ser\xE1 definido como "),Il(907,"code"),Qx(908,"new-password"),og(),Qx(909,"."),og()()()(),Il(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),Qx(914," (p-password-change)"),zl(915,"br"),og()()(),Il(916,"td",17)(917,"code",28),Qx(918,"EventEmitter"),og()(),Il(919,"td",19),Qx(920,"-"),og(),Il(921,"td",20)(922,"em")(923,"strong"),Qx(924,"(opcional)"),og()(),Il(925,"p"),Qx(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),og(),Il(927,"p"),Qx(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Il(929,"code"),Qx(930,"string"),og(),Qx(931," com o texto informado no campo."),og(),Il(932,"blockquote")(933,"p"),Qx(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Il(935,"code"),Qx(936,"p-authentication-url"),og(),Qx(937,"."),og()()()(),Il(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),Qx(942," p-password-errors"),zl(943,"br"),og()()(),Il(944,"td",17)(945,"code",31),Qx(946,"string[]"),og()(),Il(947,"td",19),Qx(948,"-"),og(),Il(949,"td",20)(950,"em")(951,"strong"),Qx(952,"(opcional)"),og()(),Il(953,"p"),Qx(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),og()()(),Il(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),Qx(959," p-password-pattern"),zl(960,"br"),og()()(),Il(961,"td",17)(962,"code",21),Qx(963,"string"),og()(),Il(964,"td",19),Qx(965,"-"),og(),Il(966,"td",20)(967,"em")(968,"strong"),Qx(969,"(opcional)"),og()(),Il(970,"p"),Qx(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),Il(972,"code"),Qx(973,"passwordErrorPattern"),og(),Qx(974,`
ser\xE1 exibida.`),og(),Il(975,"p"),Qx(976,"Exemplos de valores v\xE1lidos:"),og(),Il(977,"ul")(978,"li"),Qx(979,"Apenas n\xFAmeros: "),Il(980,"code"),Qx(981,"\\d?"),og()(),Il(982,"li"),Qx(983,"Letras m\xEDnusculas: "),Il(984,"code"),Qx(985,"\\z?"),og()()(),Il(986,"blockquote")(987,"p"),Qx(988,"Veja a propriedade "),Il(989,"code"),Qx(990,"p-literals"),og(),Qx(991," para customizar a literal "),Il(992,"code"),Qx(993,"passwordErrorPattern"),og(),Qx(994,"."),og()()()(),Il(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),Qx(999," p-product-name"),zl(1e3,"br"),og()()(),Il(1001,"td",17)(1002,"code",21),Qx(1003,"string"),og()(),Il(1004,"td",19),Qx(1005,"-"),og(),Il(1006,"td",20)(1007,"em")(1008,"strong"),Qx(1009,"(opcional)"),og()(),Il(1010,"p"),Qx(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),og()()(),Il(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),Qx(1016," p-recovery"),zl(1017,"br"),og()()(),Il(1018,"td",17)(1019,"code",21),Qx(1020,"string "),og(),Il(1021,"code",32),Qx(1022," Function "),og(),Il(1023,"code",33),Qx(1024," PoPageLoginRecovery"),og()(),Il(1025,"td",19),Qx(1026,"-"),og(),Il(1027,"td",20)(1028,"em")(1029,"strong"),Qx(1030,"(opcional)"),og()(),Il(1031,"p"),Qx(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),og(),Il(1033,"p"),Qx(1034,"A propriedade aceita os seguintes tipos:"),og(),Il(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),Qx(1039,"String"),og(),Qx(1040,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Il(1041,"li")(1042,"p")(1043,"strong"),Qx(1044,"Function"),og(),Qx(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Il(1046,"pre")(1047,"code"),Qx(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),og()()(),Il(1049,"li")(1050,"p")(1051,"strong"),Qx(1052,"PoPageLoginRecovery"),og(),Qx(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),Il(1054,"strong"),Qx(1055,"po-modal-password-recovery"),og(),Qx(1056,`.
O objeto deve conter a `),Il(1057,"strong"),Qx(1058,"url"),og(),Qx(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Il(1060,"strong"),Qx(1061,"tipo"),og(),Qx(1062,` de modal para recupera\xE7\xE3o de senha,
`),Il(1063,"strong"),Qx(1064,"email"),og(),Qx(1065," para contato e "),Il(1066,"strong"),Qx(1067,"m\xE1scara"),og(),Qx(1068," do campo de telefone."),og()()()()(),Il(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),Qx(1073," p-register-url"),zl(1074,"br"),og()()(),Il(1075,"td",17)(1076,"code",21),Qx(1077,"string"),og()(),Il(1078,"td",19),Qx(1079,"-"),og(),Il(1080,"td",20)(1081,"em")(1082,"strong"),Qx(1083,"(opcional)"),og()(),Il(1084,"p"),Qx(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),og(),Il(1086,"p"),Qx(1087,"Exemplos de valores v\xE1lidos:"),og(),Il(1088,"ul")(1089,"li")(1090,"strong"),Qx(1091,"local"),og(),Qx(1092,": "),Il(1093,"code"),Qx(1094,"/home"),og()(),Il(1095,"li")(1096,"strong"),Qx(1097,"url externa"),og(),Qx(1098,": "),Il(1099,"code"),Qx(1100,"https://po-ui.io"),og()()(),Il(1101,"blockquote")(1102,"p"),Qx(1103,"Veja a propriedade "),Il(1104,"code"),Qx(1105,"p-literals"),og(),Qx(1106," para customizar a literal "),Il(1107,"code"),Qx(1108,"registerUrl"),og(),Qx(1109,"."),og()()()(),Il(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),Qx(1114," p-secondary-logo"),zl(1115,"br"),og()()(),Il(1116,"td",17)(1117,"code",21),Qx(1118,"string"),og()(),Il(1119,"td",19),Qx(1120,"-"),og(),Il(1121,"td",20)(1122,"em")(1123,"strong"),Qx(1124,"(opcional)"),og()(),Il(1125,"p"),Qx(1126,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Il(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),Qx(1131," p-support"),zl(1132,"br"),og()()(),Il(1133,"td",17)(1134,"code",21),Qx(1135,"string "),og(),Il(1136,"code",32),Qx(1137," Function"),og()(),Il(1138,"td",19),Qx(1139,"-"),og(),Il(1140,"td",20)(1141,"em")(1142,"strong"),Qx(1143,"(opcional)"),og()(),Il(1144,"p"),Qx(1145,"Exibe um bot\xE3o para suporte."),og(),Il(1146,"p"),Qx(1147,"A propriedade aceita os seguintes tipos:"),og(),Il(1148,"ul")(1149,"li")(1150,"strong"),Qx(1151,"String"),og(),Qx(1152,": URL externa ou uma rota v\xE1lida;"),og(),Il(1153,"li")(1154,"strong"),Qx(1155,"Function"),og(),Qx(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),Il(1157,"pre")(1158,"code"),Qx(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),og()()()()()()(),Il(1160,"h3"),Qx(1161,"Interfaces"),og(),Il(1162,"h4",34)(1163,"code",5),Qx(1164,"PoPageLoginCustomField"),og()(),Il(1165,"div",2)(1166,"p"),Qx(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),Il(1168,"code"),Qx(1169,"po-page-login"),og(),Qx(1170,"."),og()(),Il(1171,"h4",9),Qx(1172,"Propriedades"),og(),Il(1173,"table",10)(1174,"tr",11)(1175,"th",12),Qx(1176,"Nome"),og(),Il(1177,"th",12),Qx(1178,"Tipo"),og(),Il(1179,"th",12),Qx(1180,"Descri\xE7\xE3o"),og()(),Il(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),Qx(1185," errorPattern"),zl(1186,"br"),og()()(),Il(1187,"td",17)(1188,"code",21),Qx(1189,"string"),og()(),Il(1190,"td",20)(1191,"em")(1192,"strong"),Qx(1193,"(opcional)"),og()(),Il(1194,"p"),Qx(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),Il(1196,"code"),Qx(1197,"pattern"),og(),Qx(1198," n\xE3o for v\xE1lida."),og()()(),Il(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),Qx(1203," fieldValue"),zl(1204,"br"),og()()(),Il(1205,"td",17)(1206,"code",21),Qx(1207,"string"),og()(),Il(1208,"td",20)(1209,"em")(1210,"strong"),Qx(1211,"(opcional)"),og()(),Il(1212,"p"),Qx(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Il(1214,"code"),Qx(1215,"po-combo"),og(),Qx(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og()()(),Il(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),Qx(1221," options"),zl(1222,"br"),og()()(),Il(1223,"td",17)(1224,"code",35),Qx(1225,"Array<PoSelectOption>"),og()(),Il(1226,"td",20)(1227,"em")(1228,"strong"),Qx(1229,"(opcional)"),og()(),Il(1230,"p"),Qx(1231,"Lista de op\xE7\xF5es de um "),Il(1232,"code"),Qx(1233,"po-select"),og(),Qx(1234,"."),og()()(),Il(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),Qx(1239," pattern"),zl(1240,"br"),og()()(),Il(1241,"td",17)(1242,"code",21),Qx(1243,"string"),og()(),Il(1244,"td",20)(1245,"em")(1246,"strong"),Qx(1247,"(opcional)"),og()(),Il(1248,"p"),Qx(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Il(1250,"code"),Qx(1251,"errorPattern"),og(),Qx(1252," ser\xE1 exibida."),og()()(),Il(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),Qx(1257," placeholder"),zl(1258,"br"),og()()(),Il(1259,"td",17)(1260,"code",21),Qx(1261,"string"),og()(),Il(1262,"td",20)(1263,"em")(1264,"strong"),Qx(1265,"(opcional)"),og()(),Il(1266,"p"),Qx(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),og()()(),Il(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),Qx(1272," property"),zl(1273,"br"),og()()(),Il(1274,"td",17)(1275,"code",21),Qx(1276,"string"),og()(),Il(1277,"td",20)(1278,"p"),Qx(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),og()()(),Il(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),Qx(1284," url"),zl(1285,"br"),og()()(),Il(1286,"td",17)(1287,"code",21),Qx(1288,"string"),og()(),Il(1289,"td",20)(1290,"em")(1291,"strong"),Qx(1292,"(opcional)"),og()(),Il(1293,"p"),Qx(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Il(1295,"code"),Qx(1296,"po-combo"),og(),Qx(1297,"."),og()()(),Il(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),Qx(1302," value"),zl(1303,"br"),og()()(),Il(1304,"td",17)(1305,"code",21),Qx(1306,"string "),og(),Il(1307,"code",24),Qx(1308," number"),og()(),Il(1309,"td",20)(1310,"em")(1311,"strong"),Qx(1312,"(opcional)"),og()(),Il(1313,"p"),Qx(1314,"Valor do campo customizado."),og()()()(),Il(1315,"h4",34)(1316,"code",5),Qx(1317,"PoPageLoginLiterals"),og()(),Il(1318,"div",2)(1319,"p"),Qx(1320,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1321,"code"),Qx(1322,"po-page-login"),og(),Qx(1323,"."),og()(),Il(1324,"h4",9),Qx(1325,"Propriedades"),og(),Il(1326,"table",10)(1327,"tr",11)(1328,"th",12),Qx(1329,"Nome"),og(),Il(1330,"th",12),Qx(1331,"Tipo"),og(),Il(1332,"th",12),Qx(1333,"Descri\xE7\xE3o"),og()(),Il(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),Qx(1338," attempts"),zl(1339,"br"),og()()(),Il(1340,"td",17)(1341,"code",21),Qx(1342,"string"),og()(),Il(1343,"td",20)(1344,"em")(1345,"strong"),Qx(1346,"(opcional)"),og()(),Il(1347,"p"),Qx(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),og()()(),Il(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),Qx(1353," createANewPasswordNow"),zl(1354,"br"),og()()(),Il(1355,"td",17)(1356,"code",21),Qx(1357,"string"),og()(),Il(1358,"td",20)(1359,"em")(1360,"strong"),Qx(1361,"(opcional)"),og()(),Il(1362,"p"),Qx(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),og()()(),Il(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),Qx(1368," customFieldErrorPattern"),zl(1369,"br"),og()()(),Il(1370,"td",17)(1371,"code",21),Qx(1372,"string"),og()(),Il(1373,"td",20)(1374,"em")(1375,"strong"),Qx(1376,"(opcional)"),og()(),Il(1377,"p"),Qx(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),og()()(),Il(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),Qx(1383," customFieldPlaceholder"),zl(1384,"br"),og()()(),Il(1385,"td",17)(1386,"code",21),Qx(1387,"string"),og()(),Il(1388,"td",20)(1389,"em")(1390,"strong"),Qx(1391,"(opcional)"),og()(),Il(1392,"p"),Qx(1393,"Placeholder para o campo customizado."),og()()(),Il(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),Qx(1398," forgotPassword"),zl(1399,"br"),og()()(),Il(1400,"td",17)(1401,"code",21),Qx(1402,"string"),og()(),Il(1403,"td",20)(1404,"em")(1405,"strong"),Qx(1406,"(opcional)"),og()(),Il(1407,"p"),Qx(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),og()()(),Il(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),Qx(1413," forgotYourPassword"),zl(1414,"br"),og()()(),Il(1415,"td",17)(1416,"code",21),Qx(1417,"string"),og()(),Il(1418,"td",20)(1419,"em")(1420,"strong"),Qx(1421,"(opcional)"),og()(),Il(1422,"p"),Qx(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),og()()(),Il(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),Qx(1428," highlightInfo"),zl(1429,"br"),og()()(),Il(1430,"td",17)(1431,"code",21),Qx(1432,"string"),og()(),Il(1433,"td",20)(1434,"em")(1435,"strong"),Qx(1436,"(opcional)"),og()(),Il(1437,"p"),Qx(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),Il(1439,"code"),Qx(1440,"p-background"),og(),Qx(1441,"."),og()()(),Il(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),Qx(1446," iForgotMyPassword"),zl(1447,"br"),og()()(),Il(1448,"td",17)(1449,"code",21),Qx(1450,"string"),og()(),Il(1451,"td",20)(1452,"em")(1453,"strong"),Qx(1454,"(opcional)"),og()(),Il(1455,"p"),Qx(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),og()()(),Il(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),Qx(1461," ifYouTryHarder"),zl(1462,"br"),og()()(),Il(1463,"td",17)(1464,"code",21),Qx(1465,"string"),og()(),Il(1466,"td",20)(1467,"em")(1468,"strong"),Qx(1469,"(opcional)"),og()(),Il(1470,"p"),Qx(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),og()()(),Il(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),Qx(1476," loginErrorPattern"),zl(1477,"br"),og()()(),Il(1478,"td",17)(1479,"code",21),Qx(1480,"string"),og()(),Il(1481,"td",20)(1482,"em")(1483,"strong"),Qx(1484,"(opcional)"),og()(),Il(1485,"p"),Qx(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),og()()(),Il(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),Qx(1491," loginHint"),zl(1492,"br"),og()()(),Il(1493,"td",17)(1494,"code",21),Qx(1495,"string"),og()(),Il(1496,"td",20)(1497,"em")(1498,"strong"),Qx(1499,"(opcional)"),og()(),Il(1500,"p"),Qx(1501,"Texto exibido como dica para o campo de login."),og()()(),Il(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),Qx(1506," loginLabel"),zl(1507,"br"),og()()(),Il(1508,"td",17)(1509,"code",21),Qx(1510,"string"),og()(),Il(1511,"td",20)(1512,"em")(1513,"strong"),Qx(1514,"(opcional)"),og()(),Il(1515,"p"),Qx(1516,"Texto exibido como label do campo de login."),og()()(),Il(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),Qx(1521," loginPlaceholder"),zl(1522,"br"),og()()(),Il(1523,"td",17)(1524,"code",21),Qx(1525,"string"),og()(),Il(1526,"td",20)(1527,"em")(1528,"strong"),Qx(1529,"(opcional)"),og()(),Il(1530,"p"),Qx(1531,"Placeholder do campo de login."),og()()(),Il(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),Qx(1536," passwordErrorPattern"),zl(1537,"br"),og()()(),Il(1538,"td",17)(1539,"code",21),Qx(1540,"string"),og()(),Il(1541,"td",20)(1542,"em")(1543,"strong"),Qx(1544,"(opcional)"),og()(),Il(1545,"p"),Qx(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),og()()(),Il(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),Qx(1551," passwordLabel"),zl(1552,"br"),og()()(),Il(1553,"td",17)(1554,"code",21),Qx(1555,"string"),og()(),Il(1556,"td",20)(1557,"em")(1558,"strong"),Qx(1559,"(opcional)"),og()(),Il(1560,"p"),Qx(1561,"Texto exibido como label do campo de password."),og()()(),Il(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),Qx(1566," passwordPlaceholder"),zl(1567,"br"),og()()(),Il(1568,"td",17)(1569,"code",21),Qx(1570,"string"),og()(),Il(1571,"td",20)(1572,"em")(1573,"strong"),Qx(1574,"(opcional)"),og()(),Il(1575,"p"),Qx(1576,"Placeholder do campo de password."),og()()(),Il(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),Qx(1581," registerUrl"),zl(1582,"br"),og()()(),Il(1583,"td",17)(1584,"code",21),Qx(1585,"string"),og()(),Il(1586,"td",20)(1587,"em")(1588,"strong"),Qx(1589,"(opcional)"),og()(),Il(1590,"p"),Qx(1591,"Texto exibido no link de novo cadastro."),og()()(),Il(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),Qx(1596," rememberUser"),zl(1597,"br"),og()()(),Il(1598,"td",17)(1599,"code",21),Qx(1600,"string"),og()(),Il(1601,"td",20)(1602,"em")(1603,"strong"),Qx(1604,"(opcional)"),og()(),Il(1605,"p"),Qx(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),og()()(),Il(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),Qx(1611," rememberUserHint"),zl(1612,"br"),og()()(),Il(1613,"td",17)(1614,"code",21),Qx(1615,"string"),og()(),Il(1616,"td",20)(1617,"em")(1618,"strong"),Qx(1619,"(opcional)"),og()(),Il(1620,"p"),Qx(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),og()()(),Il(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),Qx(1626," submitLabel"),zl(1627,"br"),og()()(),Il(1628,"td",17)(1629,"code",21),Qx(1630,"string"),og()(),Il(1631,"td",20)(1632,"em")(1633,"strong"),Qx(1634,"(opcional)"),og()(),Il(1635,"p"),Qx(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),og()()(),Il(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),Qx(1641," submittedLabel"),zl(1642,"br"),og()()(),Il(1643,"td",17)(1644,"code",21),Qx(1645,"string"),og()(),Il(1646,"td",20)(1647,"em")(1648,"strong"),Qx(1649,"(opcional)"),og()(),Il(1650,"p"),Qx(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),og()()(),Il(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),Qx(1656," support"),zl(1657,"br"),og()()(),Il(1658,"td",17)(1659,"code",21),Qx(1660,"string"),og()(),Il(1661,"td",20)(1662,"em")(1663,"strong"),Qx(1664,"(opcional)"),og()(),Il(1665,"p"),Qx(1666,"Label do bot\xE3o de suporte."),og()()(),Il(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),Qx(1671," titlePopover"),zl(1672,"br"),og()()(),Il(1673,"td",17)(1674,"code",21),Qx(1675,"string"),og()(),Il(1676,"td",20)(1677,"em")(1678,"strong"),Qx(1679,"(opcional)"),og()(),Il(1680,"p"),Qx(1681,"T\xEDtulo do popover para aviso de bloqueio."),og()()(),Il(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),Qx(1686," welcome"),zl(1687,"br"),og()()(),Il(1688,"td",17)(1689,"code",21),Qx(1690,"string"),og()(),Il(1691,"td",20)(1692,"em")(1693,"strong"),Qx(1694,"(opcional)"),og()(),Il(1695,"p"),Qx(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),og()()(),Il(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),Qx(1701," yourUserWillBeBlocked"),zl(1702,"br"),og()()(),Il(1703,"td",17)(1704,"code",21),Qx(1705,"string"),og()(),Il(1706,"td",20)(1707,"em")(1708,"strong"),Qx(1709,"(opcional)"),og()(),Il(1710,"p"),Qx(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),og()()()(),Il(1712,"h4",34)(1713,"code",5),Qx(1714,"PoPageLoginRecovery"),og()(),Il(1715,"div",2)(1716,"p"),Qx(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Il(1718,"code"),Qx(1719,"po-modal-password-recovery"),og(),Qx(1720,"."),og()(),Il(1721,"h4",9),Qx(1722,"Propriedades"),og(),Il(1723,"table",10)(1724,"tr",11)(1725,"th",12),Qx(1726,"Nome"),og(),Il(1727,"th",12),Qx(1728,"Tipo"),og(),Il(1729,"th",12),Qx(1730,"Descri\xE7\xE3o"),og()(),Il(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),Qx(1735," contactMail"),zl(1736,"br"),og()()(),Il(1737,"td",17)(1738,"code",21),Qx(1739,"string"),og()(),Il(1740,"td",20)(1741,"em")(1742,"strong"),Qx(1743,"(opcional)"),og()(),Il(1744,"p"),Qx(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Il(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),Qx(1750," phoneMask"),zl(1751,"br"),og()()(),Il(1752,"td",17)(1753,"code",21),Qx(1754,"string"),og()(),Il(1755,"td",20)(1756,"em")(1757,"strong"),Qx(1758,"(opcional)"),og()(),Il(1759,"p"),Qx(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Il(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),Qx(1765," type"),zl(1766,"br"),og()()(),Il(1767,"td",17)(1768,"code",36),Qx(1769,"PoModalPasswordRecoveryType"),og()(),Il(1770,"td",20)(1771,"em")(1772,"strong"),Qx(1773,"(opcional)"),og()(),Il(1774,"p"),Qx(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Il(1776,"a",37),Qx(1777,"PoModalPasswordRecoveryType"),og(),Qx(1778,"."),og(),Il(1779,"blockquote")(1780,"p"),Qx(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Il(1782,"code"),Qx(1783,"PoModalPasswordRecoveryType.Email"),og(),Qx(1784,"."),og()()()(),Il(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),Qx(1789," url"),zl(1790,"br"),og()()(),Il(1791,"td",17)(1792,"code",21),Qx(1793,"string"),og()(),Il(1794,"td",20)(1795,"p"),Qx(1796,"Endpoint usado pelo template "),Il(1797,"strong"),Qx(1798,"PoModalPasswordRecovery"),og(),Qx(1799," para requisi\xE7\xE3o do recurso."),og(),Il(1800,"blockquote")(1801,"p"),Qx(1802,"Saiba mais em "),Il(1803,"a",37),Qx(1804,"PoModalPasswordRecovery"),og(),Qx(1805,"."),og()()()()(),Il(1806,"h4",34)(1807,"code",5),Qx(1808,"PoPageLogin"),og()(),Il(1809,"div",2)(1810,"p"),Qx(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Il(1812,"code"),Qx(1813,"po-page-login"),og(),Qx(1814,"."),og()(),Il(1815,"h4",9),Qx(1816,"Propriedades"),og(),Il(1817,"table",10)(1818,"tr",11)(1819,"th",12),Qx(1820,"Nome"),og(),Il(1821,"th",12),Qx(1822,"Tipo"),og(),Il(1823,"th",12),Qx(1824,"Descri\xE7\xE3o"),og()(),Il(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),Qx(1829," login"),zl(1830,"br"),og()()(),Il(1831,"td",17)(1832,"code",21),Qx(1833,"string"),og()(),Il(1834,"td",20)(1835,"p"),Qx(1836,"Login preenchido pelo usu\xE1rio."),og()()(),Il(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),Qx(1841," password"),zl(1842,"br"),og()()(),Il(1843,"td",17)(1844,"code",21),Qx(1845,"string"),og()(),Il(1846,"td",20)(1847,"p"),Qx(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),og()()(),Il(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),Qx(1853," rememberUser"),zl(1854,"br"),og()()(),Il(1855,"td",17)(1856,"code",25),Qx(1857,"boolean"),og()(),Il(1858,"td",20)(1859,"p"),Qx(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),og()()()(),Il(1861,"h3"),Qx(1862,"Enums"),og(),Il(1863,"h4",4)(1864,"code",5),Qx(1865,"PoPageLoginAuthenticationType"),og()(),Il(1866,"div",2)(1867,"p")(1868,"em"),Qx(1869,"Enum"),og(),Qx(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),og()(),Il(1871,"h4",9),Qx(1872,"Propriedades"),og(),Il(1873,"table",10)(1874,"tr",11)(1875,"th",12),Qx(1876,"Nome"),og(),Il(1877,"th",12),Qx(1878,"Descri\xE7\xE3o"),og()(),Il(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),Qx(1883," Basic"),zl(1884,"br"),og()()(),Il(1885,"td",20)(1886,"p"),Qx(1887,"Autentica\xE7\xE3o Basic"),og()()(),Il(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),Qx(1892," Bearer"),zl(1893,"br"),og()()(),Il(1894,"td",20)(1895,"p"),Qx(1896,"Autentica\xE7\xE3o Bearer"),og()()()()());},dependencies:[Ka],encapsulation:2})}return r})();var Pe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(C(Xn),C(En))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-page-login-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ce,Ee,he,be,ve],encapsulation:2})}return r})();var We=[{path:"",component:Pe}],Ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[uL.forChild(We),uL]})}return r})();var wt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[sr,Ce]})}return r})();export{wt as DocPoPageLoginModule};