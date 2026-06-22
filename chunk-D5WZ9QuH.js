import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,c5 as Lde,cm as D3,c6 as U,r as r$1,cc as Fa,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,aI as dc,c9 as Ghe,cb as xa,aq as dx,at as fx,a3 as rNe,aD as Ky,aA as Mx,aE as Xy,aT as nN}from'./main-WP3NAV7C.js';var ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-page-login");},dependencies:[Fa],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Login Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-login></po-page-login>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-login-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ye,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ue],encapsulation:2})}return r})();var ge=(()=>{class r{poDialog=f(Lde);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];ngOnInit(){this.restore();}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={};}addLoginError(){this.loginErrors.push(this.loginError),this.loginError="";}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError="";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(p){this.customLiterals=void 0;}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(p),componentsSize:this.componentsSize});}onChangeCustomProperties(){this.customField=Object.assign({},this.customField);}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support="";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs"]],standalone:false,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=wx();Sl(0,"po-page-login",2),ft("p-login-submit",function(a){return i.loginSubmit(a)}),og(),Wl(1,"po-divider"),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),ww("ngModelChange",function(a){return Ky(d),nN(i.literals,a)||(i.literals=a),Xy(a)}),ft("p-change",function(){return i.changeLiterals()}),og(),e0(),Sl(6,"po-input",5),ww("ngModelChange",function(a){return Ky(d),nN(i.productName,a)||(i.productName=a),Xy(a)}),og(),e0(),og(),Sl(7,"div",3)(8,"po-input",6),ww("ngModelChange",function(a){return Ky(d),nN(i.loginPattern,a)||(i.loginPattern=a),Xy(a)}),og(),e0(),Sl(9,"po-input",7),ww("ngModelChange",function(a){return Ky(d),nN(i.login,a)||(i.login=a),Xy(a)}),og(),e0(),og(),Sl(10,"div",3)(11,"po-input",8),ww("ngModelChange",function(a){return Ky(d),nN(i.exceededAttempts,a)||(i.exceededAttempts=a),Xy(a)}),og(),e0(),Sl(12,"po-input",9),ww("ngModelChange",function(a){return Ky(d),nN(i.passwordPattern,a)||(i.passwordPattern=a),Xy(a)}),og(),e0(),og(),Sl(13,"div",3)(14,"po-input",10),ww("ngModelChange",function(a){return Ky(d),nN(i.contactEmail,a)||(i.contactEmail=a),Xy(a)}),og(),e0(),Sl(15,"po-input",11),ww("ngModelChange",function(a){return Ky(d),nN(i.environment,a)||(i.environment=a),Xy(a)}),og(),e0(),og(),Sl(16,"div",3)(17,"po-input",12),ww("ngModelChange",function(a){return Ky(d),nN(i.logo,a)||(i.logo=a),Xy(a)}),og(),e0(),Sl(18,"po-input",13),ww("ngModelChange",function(a){return Ky(d),nN(i.secondaryLogo,a)||(i.secondaryLogo=a),Xy(a)}),og(),e0(),og(),Sl(19,"div",3)(20,"po-input",14),ww("ngModelChange",function(a){return Ky(d),nN(i.background,a)||(i.background=a),Xy(a)}),og(),e0(),Sl(21,"po-input",15),ww("ngModelChange",function(a){return Ky(d),nN(i.support,a)||(i.support=a),Xy(a)}),og(),e0(),og(),Sl(22,"div",3)(23,"po-input",16),ww("ngModelChange",function(a){return Ky(d),nN(i.recovery,a)||(i.recovery=a),Xy(a)}),og(),e0(),Sl(24,"po-input",17),ww("ngModelChange",function(a){return Ky(d),nN(i.registerUrl,a)||(i.registerUrl=a),Xy(a)}),og(),e0(),og(),Sl(25,"div",3)(26,"po-checkbox-group",18),ww("ngModelChange",function(a){return Ky(d),nN(i.properties,a)||(i.properties=a),Xy(a)}),og(),e0(),Sl(27,"po-radio-group",19),ww("ngModelChange",function(a){return Ky(d),nN(i.componentsSize,a)||(i.componentsSize=a),Xy(a)}),og(),e0(),og(),Wl(28,"po-divider",20),Sl(29,"div",3)(30,"po-input",21),ww("ngModelChange",function(a){return Ky(d),nN(i.loginError,a)||(i.loginError=a),Xy(a)}),og(),e0(),Sl(31,"po-button",22),ft("p-click",function(){return i.addLoginError()}),og()(),Wl(32,"po-divider",23),Sl(33,"div",3)(34,"po-input",24),ww("ngModelChange",function(a){return Ky(d),nN(i.passwordError,a)||(i.passwordError=a),Xy(a)}),og(),e0(),Sl(35,"po-button",25),ft("p-click",function(){return i.addPasswordError()}),og()(),Wl(36,"po-divider",26),Sl(37,"div",3)(38,"po-input",27),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.property,a)||(i.customField.property=a),Xy(a)}),ft("p-change-model",function(){return i.onChangeCustomProperties()}),og(),e0(),Sl(39,"po-input",28),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.value,a)||(i.customField.value=a),Xy(a)}),og(),e0(),og(),Sl(40,"div",3)(41,"po-input",29),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.placeholder,a)||(i.customField.placeholder=a),Xy(a)}),og(),e0(),Sl(42,"po-input",30),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.pattern,a)||(i.customField.pattern=a),Xy(a)}),og(),e0(),Sl(43,"po-input",31),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Xy(a)}),og(),e0(),og(),Wl(44,"po-divider"),Sl(45,"div",3)(46,"po-input",32),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.url,a)||(i.customField.url=a),Xy(a)}),ft("p-change-model",function(){return i.onChangeCustomProperties()}),og(),e0(),Sl(47,"po-input",33),ww("ngModelChange",function(a){return Ky(d),nN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Xy(a)}),ft("p-change-model",function(){return i.onChangeCustomProperties()}),og(),e0(),og(),Wl(48,"po-divider"),Sl(49,"form",null,1)(51,"div",3)(52,"po-input",34),ww("ngModelChange",function(a){return Ky(d),nN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Xy(a)}),og(),e0(),Sl(53,"po-input",35),ww("ngModelChange",function(a){return Ky(d),nN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Xy(a)}),og(),e0(),og(),Sl(54,"div",3)(55,"po-button",36),ft("p-click",function(){return i.addCustomFieldOption()}),og()()(),Wl(56,"br")(57,"po-divider"),Sl(58,"div",3)(59,"po-button",37),ft("p-click",function(){return i.restore()}),og()()();}if(l&2){let d=Nx(50);nw("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),Lp(5),Ew("ngModel",i.literals),n0(),Lp(),Ew("ngModel",i.productName),n0(),Lp(2),Ew("ngModel",i.loginPattern),n0(),Lp(),Ew("ngModel",i.login),n0(),Lp(2),Ew("ngModel",i.exceededAttempts),n0(),Lp(),Ew("ngModel",i.passwordPattern),n0(),Lp(2),Ew("ngModel",i.contactEmail),n0(),Lp(),Ew("ngModel",i.environment),n0(),Lp(2),Ew("ngModel",i.logo),n0(),Lp(),Ew("ngModel",i.secondaryLogo),n0(),Lp(2),Ew("ngModel",i.background),n0(),Lp(),Ew("ngModel",i.support),n0(),Lp(2),Ew("ngModel",i.recovery),n0(),Lp(),Ew("ngModel",i.registerUrl),n0(),Lp(2),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),Ew("ngModel",i.componentsSize),nw("p-options",i.componentsSizeOptions),n0(),Lp(3),Ew("ngModel",i.loginError),n0(),Lp(4),Ew("ngModel",i.passwordError),n0(),Lp(4),Ew("ngModel",i.customField.property),n0(),Lp(),Ew("ngModel",i.customField.value),n0(),Lp(2),Ew("ngModel",i.customField.placeholder),n0(),Lp(),Ew("ngModel",i.customField.pattern),n0(),Lp(),Ew("ngModel",i.customField.errorPattern),n0(),Lp(3),Ew("ngModel",i.customField.url),n0(),Lp(),Ew("ngModel",i.customField.fieldValue),n0(),Lp(5),Ew("ngModel",i.customFieldOption.label),n0(),Lp(),Ew("ngModel",i.customFieldOption.value),n0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,Fa],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r}),Ee=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Login Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-login
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-login-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Me,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ge],encapsulation:2})}return r})();function Te(r,fe){if(r&1){let p=wx();Sl(0,"po-page-login",6),ft("p-login-change",function(){Ky(p);let i=Mx();return Xy(i.loginChange())})("p-login-submit",function(i){Ky(p);let d=Mx();return Xy(d.checkLogin(i))})("p-password-change",function(){Ky(p);let i=Mx();return Xy(i.passwordChange())}),og();}if(r&2){let p=Mx();nw("p-custom-field",p.customField)("p-exceeded-attempts-warning",p.exceededAttempts)("p-literals",p.literalsI18n)("p-loading",p.loading)("p-password-errors",p.passwordErrors)("p-login-errors",p.loginErrors)("p-recovery",p.passwordRecovery);}}function ke(r,fe){if(r&1&&Wl(0,"po-page-blocked-user",5),r&2){let p=Mx();nw("p-params",p.params);}}var Se=(()=>{class r{poI18nService=f(D3);poDialog=f(Lde);customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=false;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:U.All,contactMail:"support@mail.com"};showPageBlocked=false;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe();}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0;});}checkLogin(p){this.loading=true,p.login==="devpo"&&p.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=false,title:"Access released",message:"You are on vacation, take time to rest."});},3e3)):(this.loading=false,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."]);}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[]);}loginChange(){this.loginErrors.length&&(this.loginErrors=[]);}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=true);}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:false,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"]],template:function(l,i){l&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),dx(5,Te,1,7,"po-page-login",4),dx(6,ke,1,1,"po-page-blocked-user",5)),l&2&&(Lp(5),fx(i.showPageBlocked?-1:5),Lp(),fx(i.showPageBlocked?6:-1));},dependencies:[dc,Ghe,xa,Fa],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),he=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Login - Human Resources"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),og(),Sl(23,"pre",9),eN(24,`/**
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-page-login-human-resources"),og(),Wl(27,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return r})();var xe=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(p){p?.language==="jp"?this.literals=r$1({},this.japoneseLiterals):this.literals={};}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:false,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2),og()(),Sl(4,"po-page-login",3),ft("p-language-change",function(m){return i.changeLanguage(m)}),og()),l&2&&(Lp(4),nw("p-languages",i.languages)("p-literals",i.literals));},dependencies:[dc,Ghe,Fa],encapsulation:2,changeDetection:1})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Login - Automatic Service"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-login-automatic-service"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Be,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,xe],encapsulation:2})}return r})();var ve=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-doc"]],standalone:false,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do template do po-page-login."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoPageLoginComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-page-login"),og(),eN(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),og(),Sl(18,"p"),eN(19,"A propriedade "),Sl(20,"code"),eN(21,"p-authentication-url"),og(),eN(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Sl(23,"em"),eN(24,"client side"),og(),eN(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(26,"em"),eN(27,"propriedades"),og(),eN(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Sl(29,"p"),eN(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(31,"em"),eN(32,"assets"),og(),eN(33," no arquivo "),Sl(34,"strong"),eN(35,"angular.json"),og(),eN(36," da aplica\xE7\xE3o na seguinte ordem:"),og(),Sl(37,"pre")(38,"code"),eN(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Sl(40,"div",6)(41,"h4",7),eN(42,"Seletor"),og(),Sl(43,"pre",8),eN(44,`<po-page-login
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
`),og()(),Sl(45,"h4",9),eN(46,"Propriedades"),og(),Sl(47,"table",10)(48,"tr",11)(49,"th",12),eN(50,"Nome"),og(),Sl(51,"th",12),eN(52,"Tipo"),og(),Sl(53,"th",12),eN(54,"Padr\xE3o"),og(),Sl(55,"th",12),eN(56,"Descri\xE7\xE3o"),og()(),Sl(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),eN(61," p-authentication-type"),Wl(62,"br"),og()()(),Sl(63,"td",17)(64,"code",18),eN(65,"PoPageLoginAuthenticationType"),og()(),Sl(66,"td",19)(67,"p")(68,"code"),eN(69,"PoPageLoginAuthenticationType.Basic"),og()()(),Sl(70,"td",20)(71,"em")(72,"strong"),eN(73,"(opcional)"),og()(),Sl(74,"p"),eN(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),Sl(76,"code"),eN(77,"Basic"),og(),eN(78," e "),Sl(79,"code"),eN(80,"Bearer"),og(),eN(81,"."),og(),Sl(82,"blockquote")(83,"p"),eN(84,"Caso o tipo definido seja "),Sl(85,"code"),eN(86,"Basic"),og(),eN(87,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(88,"code"),eN(89,"POST"),og(),eN(90," contendo:"),og()(),Sl(91,"pre")(92,"code"),eN(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),og()(),Sl(94,"blockquote")(95,"p"),eN(96,"Caso o tipo definido seja "),Sl(97,"code"),eN(98,"Bearer"),og(),eN(99,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(100,"code"),eN(101,"POST"),og(),eN(102," contendo:"),og()(),Sl(103,"pre")(104,"code"),eN(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),og()()()(),Sl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),eN(110," p-authentication-url"),Wl(111,"br"),og()()(),Sl(112,"td",17)(113,"code",21),eN(114,"string"),og()(),Sl(115,"td",19),eN(116,"-"),og(),Sl(117,"td",20)(118,"em")(119,"strong"),eN(120,"(opcional)"),og()(),Sl(121,"p"),eN(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),Sl(123,"code"),eN(124,"p-login-submit"),og(),eN(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),og(),Sl(126,"h3"),eN(127,"Processos"),og(),Sl(128,"p"),eN(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),Sl(130,"strong"),eN(131,"Enter"),og(),eN(132,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(133,"code"),eN(134,"POST"),og(),eN(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),og(),Sl(136,"pre")(137,"code"),eN(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),og()(),Sl(139,"p"),eN(140,"Em caso de "),Sl(141,"strong"),eN(142,"sucesso"),og(),eN(143,", o objeto de retorno \xE9 armazenado no "),Sl(144,"code"),eN(145,"sessionStorage"),og(),eN(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Sl(147,"code"),eN(148,"/"),og(),eN(149,"."),og(),Sl(150,"pre")(151,"code"),eN(152,`200:
{
  user: user
}
`),og()(),Sl(153,"p"),eN(154,"Em caso de "),Sl(155,"strong"),eN(156,"erro"),og(),eN(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),og(),Sl(158,"pre")(159,"code"),eN(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),og()(),Sl(161,"blockquote")(162,"p"),eN(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),Sl(164,"code"),eN(165,"p-exceeded-attempts-warning"),og(),eN(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Sl(167,"code"),eN(168,"p-login-errors"),og(),eN(169,` e
`),Sl(170,"code"),eN(171,"p-password-errors"),og(),eN(172," conforme retorno abaixo:"),og()(),Sl(173,"pre")(174,"code"),eN(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),og()(),Sl(176,"blockquote")(177,"p"),eN(178,"Caso o valor atribu\xEDdo para "),Sl(179,"code"),eN(180,"p-exceeded-attempts-warning"),og(),eN(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Sl(182,"code"),eN(183,"p-blocked-url"),og(),eN(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),og()(),Sl(185,"p")(186,"em"),eN(187,"Processo finalizado."),og()(),Wl(188,"hr"),Sl(189,"h4"),eN(190,"Praticidade"),og(),Sl(191,"p"),eN(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Sl(193,"code"),eN(194,"po-page-login"),og(),eN(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Sl(196,"code"),eN(197,"/login"),og(),eN(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Sl(199,"pre")(200,"code"),eN(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),og()(),Sl(202,"p"),eN(203,"O metadado "),Sl(204,"code"),eN(205,"serviceApi"),og(),eN(206," deve ser a "),Sl(207,"strong"),eN(208,"url"),og(),eN(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),Sl(210,"code"),eN(211,"environment"),og(),eN(212,` alimenta a propriedade
`),Sl(213,"code"),eN(214,"p-environment"),og(),eN(215,", "),Sl(216,"code"),eN(217,"recovery"),og(),eN(218," \xE9 a interface "),Sl(219,"code"),eN(220,"PoPageLoginRecovery"),og(),eN(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Sl(222,"code"),eN(223,"registerUrl"),og(),eN(224," alimenta a propriedade "),Sl(225,"code"),eN(226,"p-register-url"),og(),eN(227," e "),Sl(228,"code"),eN(229,"authenticationType"),og(),eN(230," que define a propriedade "),Sl(231,"code"),eN(232,"p-authentication-type"),og(),eN(233,"."),og(),Sl(234,"blockquote")(235,"p"),eN(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()(),Sl(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),eN(241," p-background"),Wl(242,"br"),og()()(),Sl(243,"td",17)(244,"code",21),eN(245,"string"),og()(),Sl(246,"td",19),eN(247,"-"),og(),Sl(248,"td",20)(249,"em")(250,"strong"),eN(251,"(opcional)"),og()(),Sl(252,"p"),eN(253,"O "),Sl(254,"code"),eN(255,"p-background"),og(),eN(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),og(),Sl(257,"p"),eN(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),og(),Sl(259,"p"),eN(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Sl(261,"code"),eN(262,"highlightInfo"),og(),eN(263,"."),og(),Sl(264,"blockquote")(265,"p"),eN(266,"Veja mais sobre as literais na propriedade "),Sl(267,"code"),eN(268,"p-literals"),og(),eN(269,"."),og()(),Sl(270,"p"),eN(271,"Exemplos de valores v\xE1lidos:"),og(),Sl(272,"ul")(273,"li")(274,"strong"),eN(275,"local"),og(),eN(276,": "),Sl(277,"code"),eN(278,"./assets/images/login-background.png"),og()(),Sl(279,"li")(280,"strong"),eN(281,"url externa"),og(),eN(282,": "),Sl(283,"code"),eN(284,"https://po-ui.io/assets/images/login-background.png"),og()()(),Sl(285,"blockquote")(286,"p"),eN(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),og()()()(),Sl(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),eN(292," p-blocked-url"),Wl(293,"br"),og()()(),Sl(294,"td",17)(295,"code",21),eN(296,"string"),og()(),Sl(297,"td",19),eN(298,"-"),og(),Sl(299,"td",20)(300,"em")(301,"strong"),eN(302,"(opcional)"),og()(),Sl(303,"p"),eN(304,"Caso o valor atribu\xEDdo para "),Sl(305,"code"),eN(306,"p-exceeded-attempts-warning"),og(),eN(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),og()()(),Sl(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),eN(312," p-components-size"),Wl(313,"br"),og()()(),Sl(314,"td",17)(315,"code",21),eN(316,"string"),og()(),Sl(317,"td",19)(318,"p")(319,"code"),eN(320,"medium"),og()()(),Sl(321,"td",20)(322,"em")(323,"strong"),eN(324,"(opcional)"),og()(),Sl(325,"p"),eN(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(327,"ul")(328,"li")(329,"code"),eN(330,"small"),og(),eN(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(332,"li")(333,"code"),eN(334,"medium"),og(),eN(335,": aplica a medida medium de cada componente."),og()(),Sl(336,"blockquote")(337,"p"),eN(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(339,"code"),eN(340,"medium"),og(),eN(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(342,"a",22),eN(343,"po-theme"),og(),eN(344,"."),og()()()(),Sl(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),eN(349," p-contact-email"),Wl(350,"br"),og()()(),Sl(351,"td",17)(352,"code",21),eN(353,"string"),og()(),Sl(354,"td",19),eN(355,"-"),og(),Sl(356,"td",20)(357,"em")(358,"strong"),eN(359,"(opcional)"),og()(),Sl(360,"p"),eN(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),og()()(),Sl(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),eN(366," p-custom-field"),Wl(367,"br"),og()()(),Sl(368,"td",17)(369,"code",21),eN(370,"string "),og(),Sl(371,"code",23),eN(372," PoPageLoginCustomField"),og()(),Sl(373,"td",19),eN(374,"-"),og(),Sl(375,"td",20)(376,"em")(377,"strong"),eN(378,"(opcional)"),og()(),Sl(379,"p"),eN(380,"Ao informar um valor do tipo "),Sl(381,"code"),eN(382,"string"),og(),eN(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Sl(384,"code"),eN(385,"literals"),og(),eN(386," como "),Sl(387,"code"),eN(388,"customFieldErrorPattern"),og(),eN(389," e "),Sl(390,"code"),eN(391,"customFieldPlaceholder"),og(),eN(392,"."),og(),Sl(393,"p"),eN(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),Sl(395,"code"),eN(396,"PoPageLoginCustomField"),og(),eN(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Sl(398,"code"),eN(399,"po-input"),og(),eN(400,", "),Sl(401,"code"),eN(402,"po-combo"),og(),eN(403,` especificamente para servi\xE7os
ou `),Sl(404,"code"),eN(405,"po-select"),og(),eN(406," para valores fixos."),og(),Sl(407,"p"),eN(408,"Abaixo seguem os exemplos de cada tipo de campo."),og(),Sl(409,"p")(410,"code"),eN(411,"po-input"),og(),eN(412,":"),og(),Sl(413,"pre")(414,"code"),eN(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),og()(),Sl(416,"p")(417,"code"),eN(418,"po-combo"),og(),eN(419,":"),og(),Sl(420,"pre")(421,"code"),eN(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),og()(),Sl(423,"p")(424,"code"),eN(425,"po-select"),og(),eN(426,":"),og(),Sl(427,"pre")(428,"code"),eN(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),og()(),Sl(430,"p"),eN(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),og()()(),Sl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),eN(436," p-environment"),Wl(437,"br"),og()()(),Sl(438,"td",17)(439,"code",21),eN(440,"string"),og()(),Sl(441,"td",19),eN(442,"-"),og(),Sl(443,"td",20)(444,"em")(445,"strong"),eN(446,"(opcional)"),og()(),Sl(447,"p"),eN(448,"Adiciona uma "),Sl(449,"code"),eN(450,"tag"),og(),eN(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),og(),Sl(452,"blockquote")(453,"p"),eN(454,"Essa propriedade limita o texto em 40 caracteres."),og()()()(),Sl(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),eN(459," p-exceeded-attempts-warning"),Wl(460,"br"),og()()(),Sl(461,"td",17)(462,"code",24),eN(463,"number"),og()(),Sl(464,"td",19)(465,"p")(466,"code"),eN(467,"0"),og()()(),Sl(468,"td",20)(469,"em")(470,"strong"),eN(471,"(opcional)"),og()(),Sl(472,"p"),eN(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),og(),Sl(474,"blockquote")(475,"p"),eN(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),Sl(477,"code"),eN(478,"p-authentication-url"),og(),eN(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Sl(480,"code"),eN(481,"p-exceeded-attempts-warning"),og(),eN(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),og()()()(),Sl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),eN(487," p-hide-label-status"),Wl(488,"br"),og()()(),Sl(489,"td",17)(490,"code",25),eN(491,"boolean"),og()(),Sl(492,"td",19)(493,"p")(494,"code"),eN(495,"false"),og()()(),Sl(496,"td",20)(497,"em")(498,"strong"),eN(499,"(opcional)"),og()(),Sl(500,"p"),eN(501,"Indica se o status do "),Sl(502,"code"),eN(503,"model"),og(),eN(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),og(),Sl(505,"blockquote")(506,"p"),eN(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Sl(508,"code"),eN(509,"false"),og(),eN(510,"."),og()()()(),Sl(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),eN(515," p-hide-password-peek"),Wl(516,"br"),og()()(),Sl(517,"td",17)(518,"code",25),eN(519,"boolean"),og()(),Sl(520,"td",19)(521,"p")(522,"code"),eN(523,"false"),og()()(),Sl(524,"td",20)(525,"em")(526,"strong"),eN(527,"(opcional)"),og()(),Sl(528,"p"),eN(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),og()()(),Sl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),eN(534," p-hide-remember-user"),Wl(535,"br"),og()()(),Sl(536,"td",17)(537,"code",25),eN(538,"boolean"),og()(),Sl(539,"td",19)(540,"p")(541,"code"),eN(542,"false"),og()()(),Sl(543,"td",20)(544,"em")(545,"strong"),eN(546,"(opcional)"),og()(),Sl(547,"p"),eN(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),og(),Sl(549,"p"),eN(550,"Quando essa propriedade \xE9 setada com "),Sl(551,"code"),eN(552,"true"),og(),eN(553," a propriedade "),Sl(554,"code"),eN(555,"rememberUser"),og(),eN(556," enviada no evento "),Sl(557,"code"),eN(558,"p-login-submit"),og(),eN(559,` ser\xE1 sempre
`),Sl(560,"code"),eN(561,"false"),og(),eN(562,"."),og(),Sl(563,"blockquote")(564,"p"),eN(565,"Veja a propriedade "),Sl(566,"code"),eN(567,"p-literals"),og(),eN(568," para customizar a literal "),Sl(569,"code"),eN(570,"rememberUser"),og(),eN(571,"."),og()()()(),Sl(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),eN(576," (p-language-change)"),Wl(577,"br"),og()()(),Sl(578,"td",17)(579,"code",28),eN(580,"EventEmitter"),og()(),Sl(581,"td",19),eN(582,"-"),og(),Sl(583,"td",20)(584,"em")(585,"strong"),eN(586,"(opcional)"),og()(),Sl(587,"p"),eN(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),og(),Sl(589,"p"),eN(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Sl(591,"code"),eN(592,"PoLanguage"),og(),eN(593," com a linguagem selecionada."),og()()(),Sl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),eN(598," p-languages"),Wl(599,"br"),og()()(),Sl(600,"td",17)(601,"code",29),eN(602,"Array<PoLanguage>"),og()(),Sl(603,"td",19),eN(604,"-"),og(),Sl(605,"td",20)(606,"em")(607,"strong"),eN(608,"(opcional)"),og()(),Sl(609,"p"),eN(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),og(),Sl(611,"p"),eN(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),og(),Sl(613,"p"),eN(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),og(),Sl(615,"p"),eN(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),Sl(617,"code"),eN(618,"i18n"),og(),eN(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),og(),Sl(620,"blockquote")(621,"p"),eN(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),Sl(623,"code"),eN(624,"p-literals"),og(),eN(625,"."),og()()()(),Sl(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),eN(630," p-literals"),Wl(631,"br"),og()()(),Sl(632,"td",17)(633,"code",30),eN(634,"PoPageLoginLiterals"),og()(),Sl(635,"td",19),eN(636,"-"),og(),Sl(637,"td",20)(638,"em")(639,"strong"),eN(640,"(opcional)"),og()(),Sl(641,"p"),eN(642,"Objeto com as literais usadas no "),Sl(643,"code"),eN(644,"po-page-login"),og(),eN(645,"."),og(),Sl(646,"p"),eN(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(648,"pre")(649,"code"),eN(650,`const customLiterals: PoPageLoginLiterals = {
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
`),og()(),Sl(651,"p"),eN(652,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(653,"pre")(654,"code"),eN(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),og()(),Sl(656,"p"),eN(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(658,"pre")(659,"code"),eN(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),og()(),Sl(661,"blockquote")(662,"p"),eN(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),og()()()(),Sl(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),eN(668," p-loading"),Wl(669,"br"),og()()(),Sl(670,"td",17)(671,"code",25),eN(672,"boolean"),og()(),Sl(673,"td",19)(674,"p")(675,"code"),eN(676,"false"),og()()(),Sl(677,"td",20)(678,"em")(679,"strong"),eN(680,"(opcional)"),og()(),Sl(681,"p"),eN(682,"Habilita um estado de carregamento ao bot\xE3o de "),Sl(683,"em"),eN(684,"login"),og(),eN(685,"."),og(),Sl(686,"blockquote")(687,"p"),eN(688,"\xC9 necess\xE1rio atribuir "),Sl(689,"code"),eN(690,"true"),og(),eN(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),Sl(692,"code"),eN(693,"p-login-submit"),og(),eN(694,"."),og()()()(),Sl(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),eN(699," p-login"),Wl(700,"br"),og()()(),Sl(701,"td",17)(702,"code",21),eN(703,"string"),og()(),Sl(704,"td",19),eN(705,"-"),og(),Sl(706,"td",20)(707,"em")(708,"strong"),eN(709,"(opcional)"),og()(),Sl(710,"p"),eN(711,"Valor do modelo do campo de login."),og()()(),Sl(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),eN(716," (p-login-change)"),Wl(717,"br"),og()()(),Sl(718,"td",17)(719,"code",28),eN(720,"EventEmitter"),og()(),Sl(721,"td",19),eN(722,"-"),og(),Sl(723,"td",20)(724,"em")(725,"strong"),eN(726,"(opcional)"),og()(),Sl(727,"p"),eN(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),og(),Sl(729,"p"),eN(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Sl(731,"code"),eN(732,"string"),og(),eN(733," com o texto informado no campo."),og(),Sl(734,"blockquote")(735,"p"),eN(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(737,"code"),eN(738,"p-authentication-url"),og(),eN(739,"."),og()()()(),Sl(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),eN(744," p-login-errors"),Wl(745,"br"),og()()(),Sl(746,"td",17)(747,"code",31),eN(748,"string[]"),og()(),Sl(749,"td",19),eN(750,"-"),og(),Sl(751,"td",20)(752,"em")(753,"strong"),eN(754,"(opcional)"),og()(),Sl(755,"p"),eN(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),og()()(),Sl(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),eN(761," p-login-pattern"),Wl(762,"br"),og()()(),Sl(763,"td",17)(764,"code",21),eN(765,"string"),og()(),Sl(766,"td",19),eN(767,"-"),og(),Sl(768,"td",20)(769,"em")(770,"strong"),eN(771,"(opcional)"),og()(),Sl(772,"p"),eN(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),Sl(774,"code"),eN(775,"loginErrorPattern"),og(),eN(776,`
ser\xE1 exibida.`),og(),Sl(777,"p"),eN(778,"Exemplos de valores v\xE1lidos:"),og(),Sl(779,"ul")(780,"li"),eN(781,"email: "),Sl(782,"code"),eN(783,"[expressao-regular-email]"),og()(),Sl(784,"li"),eN(785,"cpf: "),Sl(786,"code"),eN(787,"[expressao-regular-cpf]"),og()()(),Sl(788,"blockquote")(789,"p"),eN(790,"Veja a propriedade "),Sl(791,"code"),eN(792,"p-literals"),og(),eN(793," para customizar a literal "),Sl(794,"code"),eN(795,"loginErrorPattern"),og(),eN(796,"."),og()()()(),Sl(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),eN(801," (p-login-submit)"),Wl(802,"br"),og()()(),Sl(803,"td",17)(804,"code",28),eN(805,"EventEmitter"),og()(),Sl(806,"td",19),eN(807,"-"),og(),Sl(808,"td",20)(809,"p"),eN(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),Sl(811,"code"),eN(812,"Enter"),og(),eN(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),og(),Sl(814,"p"),eN(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Sl(816,"code"),eN(817,"PoPageLogin"),og(),eN(818," com os dados informados no formul\xE1rio."),og(),Sl(819,"blockquote")(820,"p"),eN(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(822,"code"),eN(823,"p-url-recovery"),og(),eN(824,"."),og()(),Sl(825,"blockquote")(826,"p"),eN(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),Sl(828,"code"),eN(829,"PoPageLogin"),og(),eN(830," mais abaixo."),og()()()(),Sl(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),eN(835," p-logo"),Wl(836,"br"),og()()(),Sl(837,"td",17)(838,"code",21),eN(839,"string"),og()(),Sl(840,"td",19),eN(841,"-"),og(),Sl(842,"td",20)(843,"em")(844,"strong"),eN(845,"(opcional)"),og()(),Sl(846,"p"),eN(847,"Caminho para a logomarca localizada na parte superior."),og(),Sl(848,"blockquote")(849,"p"),eN(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Sl(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),eN(855," p-no-autocomplete-login"),Wl(856,"br"),og()()(),Sl(857,"td",17)(858,"code",25),eN(859,"boolean"),og()(),Sl(860,"td",19)(861,"p")(862,"code"),eN(863,"true"),og()()(),Sl(864,"td",20)(865,"em")(866,"strong"),eN(867,"(opcional)"),og()(),Sl(868,"p"),eN(869,"Define a propriedade nativa "),Sl(870,"code"),eN(871,"autocomplete"),og(),eN(872," do campo como "),Sl(873,"code"),eN(874,"off"),og(),eN(875,"."),og()()(),Sl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),eN(880," p-no-autocomplete-password"),Wl(881,"br"),og()()(),Sl(882,"td",17)(883,"code",25),eN(884,"boolean"),og()(),Sl(885,"td",19)(886,"p")(887,"code"),eN(888,"true"),og()()(),Sl(889,"td",20)(890,"em")(891,"strong"),eN(892,"(opcional)"),og()(),Sl(893,"p"),eN(894,"Define a propriedade nativa "),Sl(895,"code"),eN(896,"autocomplete"),og(),eN(897," do campo como "),Sl(898,"code"),eN(899,"off"),og(),eN(900,"."),og(),Sl(901,"blockquote")(902,"p"),eN(903,"No componente "),Sl(904,"code"),eN(905,"po-password"),og(),eN(906," ser\xE1 definido como "),Sl(907,"code"),eN(908,"new-password"),og(),eN(909,"."),og()()()(),Sl(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),eN(914," (p-password-change)"),Wl(915,"br"),og()()(),Sl(916,"td",17)(917,"code",28),eN(918,"EventEmitter"),og()(),Sl(919,"td",19),eN(920,"-"),og(),Sl(921,"td",20)(922,"em")(923,"strong"),eN(924,"(opcional)"),og()(),Sl(925,"p"),eN(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),og(),Sl(927,"p"),eN(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Sl(929,"code"),eN(930,"string"),og(),eN(931," com o texto informado no campo."),og(),Sl(932,"blockquote")(933,"p"),eN(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(935,"code"),eN(936,"p-authentication-url"),og(),eN(937,"."),og()()()(),Sl(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),eN(942," p-password-errors"),Wl(943,"br"),og()()(),Sl(944,"td",17)(945,"code",31),eN(946,"string[]"),og()(),Sl(947,"td",19),eN(948,"-"),og(),Sl(949,"td",20)(950,"em")(951,"strong"),eN(952,"(opcional)"),og()(),Sl(953,"p"),eN(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),og()()(),Sl(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),eN(959," p-password-pattern"),Wl(960,"br"),og()()(),Sl(961,"td",17)(962,"code",21),eN(963,"string"),og()(),Sl(964,"td",19),eN(965,"-"),og(),Sl(966,"td",20)(967,"em")(968,"strong"),eN(969,"(opcional)"),og()(),Sl(970,"p"),eN(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),Sl(972,"code"),eN(973,"passwordErrorPattern"),og(),eN(974,`
ser\xE1 exibida.`),og(),Sl(975,"p"),eN(976,"Exemplos de valores v\xE1lidos:"),og(),Sl(977,"ul")(978,"li"),eN(979,"Apenas n\xFAmeros: "),Sl(980,"code"),eN(981,"\\d?"),og()(),Sl(982,"li"),eN(983,"Letras m\xEDnusculas: "),Sl(984,"code"),eN(985,"\\z?"),og()()(),Sl(986,"blockquote")(987,"p"),eN(988,"Veja a propriedade "),Sl(989,"code"),eN(990,"p-literals"),og(),eN(991," para customizar a literal "),Sl(992,"code"),eN(993,"passwordErrorPattern"),og(),eN(994,"."),og()()()(),Sl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),eN(999," p-product-name"),Wl(1e3,"br"),og()()(),Sl(1001,"td",17)(1002,"code",21),eN(1003,"string"),og()(),Sl(1004,"td",19),eN(1005,"-"),og(),Sl(1006,"td",20)(1007,"em")(1008,"strong"),eN(1009,"(opcional)"),og()(),Sl(1010,"p"),eN(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),og()()(),Sl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),eN(1016," p-recovery"),Wl(1017,"br"),og()()(),Sl(1018,"td",17)(1019,"code",21),eN(1020,"string "),og(),Sl(1021,"code",32),eN(1022," Function "),og(),Sl(1023,"code",33),eN(1024," PoPageLoginRecovery"),og()(),Sl(1025,"td",19),eN(1026,"-"),og(),Sl(1027,"td",20)(1028,"em")(1029,"strong"),eN(1030,"(opcional)"),og()(),Sl(1031,"p"),eN(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),og(),Sl(1033,"p"),eN(1034,"A propriedade aceita os seguintes tipos:"),og(),Sl(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),eN(1039,"String"),og(),eN(1040,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Sl(1041,"li")(1042,"p")(1043,"strong"),eN(1044,"Function"),og(),eN(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Sl(1046,"pre")(1047,"code"),eN(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),og()()(),Sl(1049,"li")(1050,"p")(1051,"strong"),eN(1052,"PoPageLoginRecovery"),og(),eN(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),Sl(1054,"strong"),eN(1055,"po-modal-password-recovery"),og(),eN(1056,`.
O objeto deve conter a `),Sl(1057,"strong"),eN(1058,"url"),og(),eN(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Sl(1060,"strong"),eN(1061,"tipo"),og(),eN(1062,` de modal para recupera\xE7\xE3o de senha,
`),Sl(1063,"strong"),eN(1064,"email"),og(),eN(1065," para contato e "),Sl(1066,"strong"),eN(1067,"m\xE1scara"),og(),eN(1068," do campo de telefone."),og()()()()(),Sl(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),eN(1073," p-register-url"),Wl(1074,"br"),og()()(),Sl(1075,"td",17)(1076,"code",21),eN(1077,"string"),og()(),Sl(1078,"td",19),eN(1079,"-"),og(),Sl(1080,"td",20)(1081,"em")(1082,"strong"),eN(1083,"(opcional)"),og()(),Sl(1084,"p"),eN(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),og(),Sl(1086,"p"),eN(1087,"Exemplos de valores v\xE1lidos:"),og(),Sl(1088,"ul")(1089,"li")(1090,"strong"),eN(1091,"local"),og(),eN(1092,": "),Sl(1093,"code"),eN(1094,"/home"),og()(),Sl(1095,"li")(1096,"strong"),eN(1097,"url externa"),og(),eN(1098,": "),Sl(1099,"code"),eN(1100,"https://po-ui.io"),og()()(),Sl(1101,"blockquote")(1102,"p"),eN(1103,"Veja a propriedade "),Sl(1104,"code"),eN(1105,"p-literals"),og(),eN(1106," para customizar a literal "),Sl(1107,"code"),eN(1108,"registerUrl"),og(),eN(1109,"."),og()()()(),Sl(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),eN(1114," p-secondary-logo"),Wl(1115,"br"),og()()(),Sl(1116,"td",17)(1117,"code",21),eN(1118,"string"),og()(),Sl(1119,"td",19),eN(1120,"-"),og(),Sl(1121,"td",20)(1122,"em")(1123,"strong"),eN(1124,"(opcional)"),og()(),Sl(1125,"p"),eN(1126,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Sl(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),eN(1131," p-support"),Wl(1132,"br"),og()()(),Sl(1133,"td",17)(1134,"code",21),eN(1135,"string "),og(),Sl(1136,"code",32),eN(1137," Function"),og()(),Sl(1138,"td",19),eN(1139,"-"),og(),Sl(1140,"td",20)(1141,"em")(1142,"strong"),eN(1143,"(opcional)"),og()(),Sl(1144,"p"),eN(1145,"Exibe um bot\xE3o para suporte."),og(),Sl(1146,"p"),eN(1147,"A propriedade aceita os seguintes tipos:"),og(),Sl(1148,"ul")(1149,"li")(1150,"strong"),eN(1151,"String"),og(),eN(1152,": URL externa ou uma rota v\xE1lida;"),og(),Sl(1153,"li")(1154,"strong"),eN(1155,"Function"),og(),eN(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),Sl(1157,"pre")(1158,"code"),eN(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),og()()()()()()(),Sl(1160,"h3"),eN(1161,"Interfaces"),og(),Sl(1162,"h4",34)(1163,"code",5),eN(1164,"PoPageLoginCustomField"),og()(),Sl(1165,"div",2)(1166,"p"),eN(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),Sl(1168,"code"),eN(1169,"po-page-login"),og(),eN(1170,"."),og()(),Sl(1171,"h4",9),eN(1172,"Propriedades"),og(),Sl(1173,"table",10)(1174,"tr",11)(1175,"th",12),eN(1176,"Nome"),og(),Sl(1177,"th",12),eN(1178,"Tipo"),og(),Sl(1179,"th",12),eN(1180,"Descri\xE7\xE3o"),og()(),Sl(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),eN(1185," errorPattern"),Wl(1186,"br"),og()()(),Sl(1187,"td",17)(1188,"code",21),eN(1189,"string"),og()(),Sl(1190,"td",20)(1191,"em")(1192,"strong"),eN(1193,"(opcional)"),og()(),Sl(1194,"p"),eN(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),Sl(1196,"code"),eN(1197,"pattern"),og(),eN(1198," n\xE3o for v\xE1lida."),og()()(),Sl(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),eN(1203," fieldValue"),Wl(1204,"br"),og()()(),Sl(1205,"td",17)(1206,"code",21),eN(1207,"string"),og()(),Sl(1208,"td",20)(1209,"em")(1210,"strong"),eN(1211,"(opcional)"),og()(),Sl(1212,"p"),eN(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Sl(1214,"code"),eN(1215,"po-combo"),og(),eN(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og()()(),Sl(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),eN(1221," options"),Wl(1222,"br"),og()()(),Sl(1223,"td",17)(1224,"code",35),eN(1225,"Array<PoSelectOption>"),og()(),Sl(1226,"td",20)(1227,"em")(1228,"strong"),eN(1229,"(opcional)"),og()(),Sl(1230,"p"),eN(1231,"Lista de op\xE7\xF5es de um "),Sl(1232,"code"),eN(1233,"po-select"),og(),eN(1234,"."),og()()(),Sl(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),eN(1239," pattern"),Wl(1240,"br"),og()()(),Sl(1241,"td",17)(1242,"code",21),eN(1243,"string"),og()(),Sl(1244,"td",20)(1245,"em")(1246,"strong"),eN(1247,"(opcional)"),og()(),Sl(1248,"p"),eN(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Sl(1250,"code"),eN(1251,"errorPattern"),og(),eN(1252," ser\xE1 exibida."),og()()(),Sl(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),eN(1257," placeholder"),Wl(1258,"br"),og()()(),Sl(1259,"td",17)(1260,"code",21),eN(1261,"string"),og()(),Sl(1262,"td",20)(1263,"em")(1264,"strong"),eN(1265,"(opcional)"),og()(),Sl(1266,"p"),eN(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),og()()(),Sl(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),eN(1272," property"),Wl(1273,"br"),og()()(),Sl(1274,"td",17)(1275,"code",21),eN(1276,"string"),og()(),Sl(1277,"td",20)(1278,"p"),eN(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),og()()(),Sl(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),eN(1284," url"),Wl(1285,"br"),og()()(),Sl(1286,"td",17)(1287,"code",21),eN(1288,"string"),og()(),Sl(1289,"td",20)(1290,"em")(1291,"strong"),eN(1292,"(opcional)"),og()(),Sl(1293,"p"),eN(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Sl(1295,"code"),eN(1296,"po-combo"),og(),eN(1297,"."),og()()(),Sl(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),eN(1302," value"),Wl(1303,"br"),og()()(),Sl(1304,"td",17)(1305,"code",21),eN(1306,"string "),og(),Sl(1307,"code",24),eN(1308," number"),og()(),Sl(1309,"td",20)(1310,"em")(1311,"strong"),eN(1312,"(opcional)"),og()(),Sl(1313,"p"),eN(1314,"Valor do campo customizado."),og()()()(),Sl(1315,"h4",34)(1316,"code",5),eN(1317,"PoPageLoginLiterals"),og()(),Sl(1318,"div",2)(1319,"p"),eN(1320,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1321,"code"),eN(1322,"po-page-login"),og(),eN(1323,"."),og()(),Sl(1324,"h4",9),eN(1325,"Propriedades"),og(),Sl(1326,"table",10)(1327,"tr",11)(1328,"th",12),eN(1329,"Nome"),og(),Sl(1330,"th",12),eN(1331,"Tipo"),og(),Sl(1332,"th",12),eN(1333,"Descri\xE7\xE3o"),og()(),Sl(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),eN(1338," attempts"),Wl(1339,"br"),og()()(),Sl(1340,"td",17)(1341,"code",21),eN(1342,"string"),og()(),Sl(1343,"td",20)(1344,"em")(1345,"strong"),eN(1346,"(opcional)"),og()(),Sl(1347,"p"),eN(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),og()()(),Sl(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),eN(1353," createANewPasswordNow"),Wl(1354,"br"),og()()(),Sl(1355,"td",17)(1356,"code",21),eN(1357,"string"),og()(),Sl(1358,"td",20)(1359,"em")(1360,"strong"),eN(1361,"(opcional)"),og()(),Sl(1362,"p"),eN(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),og()()(),Sl(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),eN(1368," customFieldErrorPattern"),Wl(1369,"br"),og()()(),Sl(1370,"td",17)(1371,"code",21),eN(1372,"string"),og()(),Sl(1373,"td",20)(1374,"em")(1375,"strong"),eN(1376,"(opcional)"),og()(),Sl(1377,"p"),eN(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),og()()(),Sl(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),eN(1383," customFieldPlaceholder"),Wl(1384,"br"),og()()(),Sl(1385,"td",17)(1386,"code",21),eN(1387,"string"),og()(),Sl(1388,"td",20)(1389,"em")(1390,"strong"),eN(1391,"(opcional)"),og()(),Sl(1392,"p"),eN(1393,"Placeholder para o campo customizado."),og()()(),Sl(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),eN(1398," forgotPassword"),Wl(1399,"br"),og()()(),Sl(1400,"td",17)(1401,"code",21),eN(1402,"string"),og()(),Sl(1403,"td",20)(1404,"em")(1405,"strong"),eN(1406,"(opcional)"),og()(),Sl(1407,"p"),eN(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),og()()(),Sl(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),eN(1413," forgotYourPassword"),Wl(1414,"br"),og()()(),Sl(1415,"td",17)(1416,"code",21),eN(1417,"string"),og()(),Sl(1418,"td",20)(1419,"em")(1420,"strong"),eN(1421,"(opcional)"),og()(),Sl(1422,"p"),eN(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),og()()(),Sl(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),eN(1428," highlightInfo"),Wl(1429,"br"),og()()(),Sl(1430,"td",17)(1431,"code",21),eN(1432,"string"),og()(),Sl(1433,"td",20)(1434,"em")(1435,"strong"),eN(1436,"(opcional)"),og()(),Sl(1437,"p"),eN(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),Sl(1439,"code"),eN(1440,"p-background"),og(),eN(1441,"."),og()()(),Sl(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),eN(1446," iForgotMyPassword"),Wl(1447,"br"),og()()(),Sl(1448,"td",17)(1449,"code",21),eN(1450,"string"),og()(),Sl(1451,"td",20)(1452,"em")(1453,"strong"),eN(1454,"(opcional)"),og()(),Sl(1455,"p"),eN(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),og()()(),Sl(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),eN(1461," ifYouTryHarder"),Wl(1462,"br"),og()()(),Sl(1463,"td",17)(1464,"code",21),eN(1465,"string"),og()(),Sl(1466,"td",20)(1467,"em")(1468,"strong"),eN(1469,"(opcional)"),og()(),Sl(1470,"p"),eN(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),og()()(),Sl(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),eN(1476," loginErrorPattern"),Wl(1477,"br"),og()()(),Sl(1478,"td",17)(1479,"code",21),eN(1480,"string"),og()(),Sl(1481,"td",20)(1482,"em")(1483,"strong"),eN(1484,"(opcional)"),og()(),Sl(1485,"p"),eN(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),og()()(),Sl(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),eN(1491," loginHint"),Wl(1492,"br"),og()()(),Sl(1493,"td",17)(1494,"code",21),eN(1495,"string"),og()(),Sl(1496,"td",20)(1497,"em")(1498,"strong"),eN(1499,"(opcional)"),og()(),Sl(1500,"p"),eN(1501,"Texto exibido como dica para o campo de login."),og()()(),Sl(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),eN(1506," loginLabel"),Wl(1507,"br"),og()()(),Sl(1508,"td",17)(1509,"code",21),eN(1510,"string"),og()(),Sl(1511,"td",20)(1512,"em")(1513,"strong"),eN(1514,"(opcional)"),og()(),Sl(1515,"p"),eN(1516,"Texto exibido como label do campo de login."),og()()(),Sl(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),eN(1521," loginPlaceholder"),Wl(1522,"br"),og()()(),Sl(1523,"td",17)(1524,"code",21),eN(1525,"string"),og()(),Sl(1526,"td",20)(1527,"em")(1528,"strong"),eN(1529,"(opcional)"),og()(),Sl(1530,"p"),eN(1531,"Placeholder do campo de login."),og()()(),Sl(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),eN(1536," passwordErrorPattern"),Wl(1537,"br"),og()()(),Sl(1538,"td",17)(1539,"code",21),eN(1540,"string"),og()(),Sl(1541,"td",20)(1542,"em")(1543,"strong"),eN(1544,"(opcional)"),og()(),Sl(1545,"p"),eN(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),og()()(),Sl(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),eN(1551," passwordLabel"),Wl(1552,"br"),og()()(),Sl(1553,"td",17)(1554,"code",21),eN(1555,"string"),og()(),Sl(1556,"td",20)(1557,"em")(1558,"strong"),eN(1559,"(opcional)"),og()(),Sl(1560,"p"),eN(1561,"Texto exibido como label do campo de password."),og()()(),Sl(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),eN(1566," passwordPlaceholder"),Wl(1567,"br"),og()()(),Sl(1568,"td",17)(1569,"code",21),eN(1570,"string"),og()(),Sl(1571,"td",20)(1572,"em")(1573,"strong"),eN(1574,"(opcional)"),og()(),Sl(1575,"p"),eN(1576,"Placeholder do campo de password."),og()()(),Sl(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),eN(1581," registerUrl"),Wl(1582,"br"),og()()(),Sl(1583,"td",17)(1584,"code",21),eN(1585,"string"),og()(),Sl(1586,"td",20)(1587,"em")(1588,"strong"),eN(1589,"(opcional)"),og()(),Sl(1590,"p"),eN(1591,"Texto exibido no link de novo cadastro."),og()()(),Sl(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),eN(1596," rememberUser"),Wl(1597,"br"),og()()(),Sl(1598,"td",17)(1599,"code",21),eN(1600,"string"),og()(),Sl(1601,"td",20)(1602,"em")(1603,"strong"),eN(1604,"(opcional)"),og()(),Sl(1605,"p"),eN(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),og()()(),Sl(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),eN(1611," rememberUserHint"),Wl(1612,"br"),og()()(),Sl(1613,"td",17)(1614,"code",21),eN(1615,"string"),og()(),Sl(1616,"td",20)(1617,"em")(1618,"strong"),eN(1619,"(opcional)"),og()(),Sl(1620,"p"),eN(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),og()()(),Sl(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),eN(1626," submitLabel"),Wl(1627,"br"),og()()(),Sl(1628,"td",17)(1629,"code",21),eN(1630,"string"),og()(),Sl(1631,"td",20)(1632,"em")(1633,"strong"),eN(1634,"(opcional)"),og()(),Sl(1635,"p"),eN(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),og()()(),Sl(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),eN(1641," submittedLabel"),Wl(1642,"br"),og()()(),Sl(1643,"td",17)(1644,"code",21),eN(1645,"string"),og()(),Sl(1646,"td",20)(1647,"em")(1648,"strong"),eN(1649,"(opcional)"),og()(),Sl(1650,"p"),eN(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),og()()(),Sl(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),eN(1656," support"),Wl(1657,"br"),og()()(),Sl(1658,"td",17)(1659,"code",21),eN(1660,"string"),og()(),Sl(1661,"td",20)(1662,"em")(1663,"strong"),eN(1664,"(opcional)"),og()(),Sl(1665,"p"),eN(1666,"Label do bot\xE3o de suporte."),og()()(),Sl(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),eN(1671," titlePopover"),Wl(1672,"br"),og()()(),Sl(1673,"td",17)(1674,"code",21),eN(1675,"string"),og()(),Sl(1676,"td",20)(1677,"em")(1678,"strong"),eN(1679,"(opcional)"),og()(),Sl(1680,"p"),eN(1681,"T\xEDtulo do popover para aviso de bloqueio."),og()()(),Sl(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),eN(1686," welcome"),Wl(1687,"br"),og()()(),Sl(1688,"td",17)(1689,"code",21),eN(1690,"string"),og()(),Sl(1691,"td",20)(1692,"em")(1693,"strong"),eN(1694,"(opcional)"),og()(),Sl(1695,"p"),eN(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),og()()(),Sl(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),eN(1701," yourUserWillBeBlocked"),Wl(1702,"br"),og()()(),Sl(1703,"td",17)(1704,"code",21),eN(1705,"string"),og()(),Sl(1706,"td",20)(1707,"em")(1708,"strong"),eN(1709,"(opcional)"),og()(),Sl(1710,"p"),eN(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),og()()()(),Sl(1712,"h4",34)(1713,"code",5),eN(1714,"PoPageLoginRecovery"),og()(),Sl(1715,"div",2)(1716,"p"),eN(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Sl(1718,"code"),eN(1719,"po-modal-password-recovery"),og(),eN(1720,"."),og()(),Sl(1721,"h4",9),eN(1722,"Propriedades"),og(),Sl(1723,"table",10)(1724,"tr",11)(1725,"th",12),eN(1726,"Nome"),og(),Sl(1727,"th",12),eN(1728,"Tipo"),og(),Sl(1729,"th",12),eN(1730,"Descri\xE7\xE3o"),og()(),Sl(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),eN(1735," contactMail"),Wl(1736,"br"),og()()(),Sl(1737,"td",17)(1738,"code",21),eN(1739,"string"),og()(),Sl(1740,"td",20)(1741,"em")(1742,"strong"),eN(1743,"(opcional)"),og()(),Sl(1744,"p"),eN(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Sl(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),eN(1750," phoneMask"),Wl(1751,"br"),og()()(),Sl(1752,"td",17)(1753,"code",21),eN(1754,"string"),og()(),Sl(1755,"td",20)(1756,"em")(1757,"strong"),eN(1758,"(opcional)"),og()(),Sl(1759,"p"),eN(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Sl(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),eN(1765," type"),Wl(1766,"br"),og()()(),Sl(1767,"td",17)(1768,"code",36),eN(1769,"PoModalPasswordRecoveryType"),og()(),Sl(1770,"td",20)(1771,"em")(1772,"strong"),eN(1773,"(opcional)"),og()(),Sl(1774,"p"),eN(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Sl(1776,"a",37),eN(1777,"PoModalPasswordRecoveryType"),og(),eN(1778,"."),og(),Sl(1779,"blockquote")(1780,"p"),eN(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Sl(1782,"code"),eN(1783,"PoModalPasswordRecoveryType.Email"),og(),eN(1784,"."),og()()()(),Sl(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),eN(1789," url"),Wl(1790,"br"),og()()(),Sl(1791,"td",17)(1792,"code",21),eN(1793,"string"),og()(),Sl(1794,"td",20)(1795,"p"),eN(1796,"Endpoint usado pelo template "),Sl(1797,"strong"),eN(1798,"PoModalPasswordRecovery"),og(),eN(1799," para requisi\xE7\xE3o do recurso."),og(),Sl(1800,"blockquote")(1801,"p"),eN(1802,"Saiba mais em "),Sl(1803,"a",37),eN(1804,"PoModalPasswordRecovery"),og(),eN(1805,"."),og()()()()(),Sl(1806,"h4",34)(1807,"code",5),eN(1808,"PoPageLogin"),og()(),Sl(1809,"div",2)(1810,"p"),eN(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(1812,"code"),eN(1813,"po-page-login"),og(),eN(1814,"."),og()(),Sl(1815,"h4",9),eN(1816,"Propriedades"),og(),Sl(1817,"table",10)(1818,"tr",11)(1819,"th",12),eN(1820,"Nome"),og(),Sl(1821,"th",12),eN(1822,"Tipo"),og(),Sl(1823,"th",12),eN(1824,"Descri\xE7\xE3o"),og()(),Sl(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),eN(1829," login"),Wl(1830,"br"),og()()(),Sl(1831,"td",17)(1832,"code",21),eN(1833,"string"),og()(),Sl(1834,"td",20)(1835,"p"),eN(1836,"Login preenchido pelo usu\xE1rio."),og()()(),Sl(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),eN(1841," password"),Wl(1842,"br"),og()()(),Sl(1843,"td",17)(1844,"code",21),eN(1845,"string"),og()(),Sl(1846,"td",20)(1847,"p"),eN(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),og()()(),Sl(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),eN(1853," rememberUser"),Wl(1854,"br"),og()()(),Sl(1855,"td",17)(1856,"code",25),eN(1857,"boolean"),og()(),Sl(1858,"td",20)(1859,"p"),eN(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),og()()()(),Sl(1861,"h3"),eN(1862,"Enums"),og(),Sl(1863,"h4",4)(1864,"code",5),eN(1865,"PoPageLoginAuthenticationType"),og()(),Sl(1866,"div",2)(1867,"p")(1868,"em"),eN(1869,"Enum"),og(),eN(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),og()(),Sl(1871,"h4",9),eN(1872,"Propriedades"),og(),Sl(1873,"table",10)(1874,"tr",11)(1875,"th",12),eN(1876,"Nome"),og(),Sl(1877,"th",12),eN(1878,"Descri\xE7\xE3o"),og()(),Sl(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),eN(1883," Basic"),Wl(1884,"br"),og()()(),Sl(1885,"td",20)(1886,"p"),eN(1887,"Autentica\xE7\xE3o Basic"),og()()(),Sl(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),eN(1892," Bearer"),Wl(1893,"br"),og()()(),Sl(1894,"td",20)(1895,"p"),eN(1896,"Autentica\xE7\xE3o Bearer"),og()()()()());},dependencies:[Ka],encapsulation:2})}return r})();var Pe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(En))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-page-login-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ce,Ee,he,be,ve],encapsulation:2})}return r})();var We=[{path:"",component:Pe}],Ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[hL.forChild(We),hL]})}return r})();var wt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[sr,Ce]})}return r})();export{wt as DocPoPageLoginModule};