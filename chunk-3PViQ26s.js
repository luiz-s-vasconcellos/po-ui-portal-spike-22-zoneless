import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,c5 as Ode,cd as Da,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,c8 as Tde,bH as k3,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,av as ql,aw as lo,ax as uo,bD as Mde,aJ as Whe,ce as cNe,aq as px,at as gx,cc as Fa,aI as dc,c9 as jhe,a7 as pN,a3 as sNe,aA as xx,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Pe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&Wl(0,"po-page-change-password");},dependencies:[Da],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Change Password Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-change-password></po-page-change-password>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-basic"),og(),Wl(23,"hr")),i&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ke,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poDialog=f(Ode);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&ql(Da,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=Ix();Sl(0,"po-page-change-password",2),ft("p-submit",function(p){return o.submit(p)}),og(),Wl(1,"po-divider",3),Sl(2,"form",null,0)(4,"div",4)(5,"po-input",5),Cw("ngModelChange",function(p){return Ky(m),oN(o.urlHome,p)||(o.urlHome=p),Xy(p)}),og(),n0(),Sl(6,"po-input",6),Cw("ngModelChange",function(p){return Ky(m),oN(o.recovery,p)||(o.recovery=p),Xy(p)}),og(),n0(),og(),Sl(7,"div",4)(8,"po-input",7),Cw("ngModelChange",function(p){return Ky(m),oN(o.urlBack,p)||(o.urlBack=p),Xy(p)}),og(),n0(),Sl(9,"po-input",8),Cw("ngModelChange",function(p){return Ky(m),oN(o.logo,p)||(o.logo=p),Xy(p)}),og(),n0(),og(),Sl(10,"div",4)(11,"po-input",9),Cw("ngModelChange",function(p){return Ky(m),oN(o.secondaryLogo,p)||(o.secondaryLogo=p),Xy(p)}),og(),n0(),Sl(12,"po-switch",10),Cw("ngModelChange",function(p){return Ky(m),oN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Xy(p)}),og(),n0(),og(),Sl(13,"po-radio-group",11),Cw("ngModelChange",function(p){return Ky(m),oN(o.componentsSize,p)||(o.componentsSize=p),Xy(p)}),og(),n0(),Wl(14,"br")(15,"po-divider"),Sl(16,"form",null,1)(18,"div",4)(19,"po-input",12),Cw("ngModelChange",function(p){return Ky(m),oN(o.requirement.requirement,p)||(o.requirement.requirement=p),Xy(p)}),og(),n0(),Sl(20,"po-switch",13),Cw("ngModelChange",function(p){return Ky(m),oN(o.requirement.status,p)||(o.requirement.status=p),Xy(p)}),og(),n0(),og(),Sl(21,"div",4)(22,"po-button",14),ft("p-click",function(){return o.addRequirement()}),og()()(),Wl(23,"po-divider"),Sl(24,"div",4)(25,"po-button",15),ft("p-click",function(){return o.restore()}),og()()();}if(i&2){let m=kx(17);rw("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Lp(5),ww("ngModel",o.urlHome),i0(),Lp(),ww("ngModel",o.recovery),i0(),Lp(2),ww("ngModel",o.urlBack),i0(),Lp(),ww("ngModel",o.logo),i0(),Lp(2),ww("ngModel",o.secondaryLogo),i0(),Lp(),ww("ngModel",o.hideCurrentPassword),i0(),Lp(),ww("ngModel",o.componentsSize),rw("p-options",o.componentsSizeOptions),i0(),Lp(6),ww("ngModel",o.requirement.requirement),i0(),Lp(),ww("ngModel",o.requirement.status),i0(),Lp(2),rw("p-disabled",m.form.invalid);}},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,L3,Tde,k3,Da],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Change Password Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-change-password
  [p-components-size]="componentsSize"
  [p-hide-current-password]="hideCurrentPassword"
  [p-logo]="logo"
  [p-recovery]="recovery"
  [p-requirements]="requirements"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="urlBack"
  [p-url-home]="urlHome"
  (p-submit)="submit($event)"
>
</po-page-change-password>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="urlHome" [(ngModel)]="urlHome" p-label="Url home"> </po-input>

    <po-input class="po-md-6" name="recovery" [(ngModel)]="recovery" p-label="Recovery"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="urlBack" [(ngModel)]="urlBack" p-label="Url back"> </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>

    <po-switch
      class="po-lg-6"
      name="hideCurrentPassword"
      [(ngModel)]="hideCurrentPassword"
      p-label="Hide current password"
    >
    </po-switch>
  </div>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <br />

  <po-divider />

  <form #fRequirements="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="requirement"
        [(ngModel)]="requirement.requirement"
        p-label="Requirement"
        p-required
      >
      </po-input>

      <po-switch class="po-md-6" name="requirementStatus" [(ngModel)]="requirement.status" p-label="Requirement Status">
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-3"
        p-label="Add Password Requirement"
        [p-disabled]="fRequirements.form.invalid"
        (p-click)="addRequirement()"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption } from '@po-ui/ng-components';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-labs',
  templateUrl: './sample-po-page-change-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  componentsSize: string;
  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.componentsSize = 'medium';
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      componentsSize: this.componentsSize,
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-labs"),og(),Wl(23,"hr")),i&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Be,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,we],encapsulation:2,changeDetection:1})}return a})();function Ne(a,X){if(a&1){let r=Ix();Sl(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),Wl(5,"po-input",4),n0(),Sl(6,"po-datepicker",5),Cw("ngModelChange",function(o){Ky(r);let m=xx();return oN(m.birthday,o)||(m.birthday=o),Xy(o)}),og(),n0(),Wl(7,"po-input",6),n0(),og(),Sl(8,"div",3)(9,"po-select",7),Cw("ngModelChange",function(o){Ky(r);let m=xx();return oN(m.country,o)||(m.country=o),Xy(o)}),og(),n0(),Sl(10,"po-select",8),Cw("ngModelChange",function(o){Ky(r);let m=xx();return oN(m.city,o)||(m.city=o),Xy(o)}),og(),n0(),Wl(11,"po-input",9),n0(),og(),Wl(12,"po-divider",10),Sl(13,"po-button",11),ft("p-click",function(){Ky(r);let o=xx();return Xy(o.showChangePasswordScreen())}),og()()()();}if(a&2){let r=xx();rw("p-breadcrumb",r.breadcrumb),Lp(5),rw("ngModel",r.fullName),i0(),Lp(),ww("ngModel",r.birthday),i0(),Lp(),rw("ngModel",r.email),i0(),Lp(2),ww("ngModel",r.country),rw("p-options",r.countryOptions),i0(),Lp(),ww("ngModel",r.city),rw("p-options",r.cityOptions),i0(),Lp(),rw("ngModel",r.phoneNumber),i0();}}function ze(a,X){if(a&1){let r=Ix();Sl(0,"po-page-change-password",12),ft("p-submit",function(){Ky(r);let o=xx();return Xy(o.onSubmit())}),og();}if(a&2){let r=xx();rw("p-url-back",r.url)("p-url-home",r.url);}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&ql(Da,5),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&px(0,Ne,14,9,"po-page-edit",1)(1,ze,1,2,"po-page-change-password",2),i&2&&gx(o.changePasswordScreen?1:0);},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,Mde,L3,Whe,cNe,Da],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Change Password Modify"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),og(),Sl(13,"pre",7),rN(14,`@if (!changePasswordScreen) {
  <po-page-edit p-title="User Profile" [p-breadcrumb]="breadcrumb">
    <form #formEditUser="ngForm">
      <div class="po-row">
        <div class="po-row">
          <po-input class="po-md-12" name="fullName" [ngModel]="fullName" p-label="Name"> </po-input>
          <po-datepicker
            class="po-md-6"
            name="birthday"
            [(ngModel)]="birthday"
            p-clean
            p-format="dd/mm/yyyy"
            p-label="Birthday Date"
            p-required
          >
          </po-datepicker>
          <po-input class="po-md-6" name="email" [ngModel]="email" p-label="Email"> </po-input>
        </div>
        <div class="po-row">
          <po-select
            class="po-md-6"
            name="country"
            [(ngModel)]="country"
            p-disabled
            p-label="Country"
            [p-options]="countryOptions"
          >
          </po-select>
          <po-select class="po-md-6" name="city" [(ngModel)]="city" p-disabled p-label="City" [p-options]="cityOptions">
          </po-select>
          <po-input
            class="po-md-12"
            name="phoneNumber"
            [ngModel]="phoneNumber"
            p-label="Phone Number"
            p-mask="(99)99999-9999"
          >
          </po-input>
        </div>
        <po-divider class="po-md-12 po-mt-3" p-label="Change Password"> </po-divider>
        <po-button
          class="po-pb-3 po-pt-3 po-md-3"
          p-label="Change Your Password"
          (p-click)="showChangePasswordScreen()"
        >
        </po-button>
      </div>
    </form>
  </po-page-edit>
} @else {
  <po-page-change-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-url-back]="url"
    [p-url-home]="url"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoPageChangePasswordComponent } from '@po-ui/ng-templates';

import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-change-password-modify',
  templateUrl: './sample-po-page-change-password-modify.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordModifyComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

  birthday: string;
  changePasswordScreen: boolean;
  city: string;
  country: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  url: string;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/documentation/po-page-change-password' }, { label: 'Profile' }]
  };

  public readonly cityOptions: Array<PoSelectOption> = [{ label: 'S\xE3o Paulo', value: 'sp' }];

  public readonly countryOptions: Array<PoSelectOption> = [{ label: 'Brazil', value: 'br' }];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.birthday = '1991-11-28T00:00:00-02:00';
    this.changePasswordScreen = false;
    this.city = 'sp';
    this.country = 'br';
    this.email = 'natasha.romanova@mail.com.br';
    this.fullName = 'Natasha Romanova';
    this.phoneNumber = '119999999999';
    this.url = '/home';
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  showChangePasswordScreen() {
    this.changePasswordScreen = true;
  }

  showProfileScreen() {
    this.changePasswordScreen = false;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-modify"),og(),Wl(23,"hr")),i&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,be],encapsulation:2,changeDetection:1})}return a})();function He(a,X){if(a&1){let r=Ix();Sl(0,"po-page-login",2),ft("p-login-submit",function(){Ky(r);let o=xx();return Xy(o.checkLogin())}),og();}}function We(a,X){if(a&1){let r=Ix();Sl(0,"po-page-change-password",3),ft("p-submit",function(){Ky(r);let o=xx();return Xy(o.onSubmit())}),og();}if(a&2){let r=xx();rw("p-requirements",r.requirements);}}var ye=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&ql(Da,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(px(0,He,1,0,"po-page-login",0),px(1,We,1,1,"po-page-change-password",1)),i&2&&(gx(o.login?-1:0),Lp(),gx(o.login?1:-1));},dependencies:[Da,Fa],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Change Password Create"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),og(),Sl(13,"pre",7),rN(14,`@if (!login) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (login) {
  <po-page-change-password
    p-hide-current-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-home="/home"
    [p-requirements]="requirements"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoPageChangePasswordComponent, PoPageChangePasswordRequirement } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-create',
  templateUrl: './sample-po-page-change-password-create.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordCreateComponent {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  login: boolean = false;
  requirements: Array<PoPageChangePasswordRequirement> = [
    { requirement: 'Use at least one symbol (ex. !, @, #).', status: this.validateSymbols.bind(this) },
    { requirement: 'Mix uppercase and lowercase characters.', status: this.validateCases.bind(this) },
    { requirement: 'Min of 5 characters.', status: this.validateCharacters.bind(this) }
  ];

  checkLogin() {
    this.login = !this.login;
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  validateCases(newPassword: string) {
    if (newPassword) {
      let result = newPassword.match(/[a-z]/g);

      if (!result || result.length < 1) {
        return false;
      }

      result = newPassword.match(/[A-Z]/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }

  validateCharacters(newPassword: string) {
    return newPassword && newPassword.length >= 5;
  }

  validateSymbols(newPassword: string) {
    if (newPassword) {
      const result = newPassword.match(/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-create"),og(),Wl(23,"hr")),i&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,je,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ye],encapsulation:2,changeDetection:1})}return a})();var Qe=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),Wl(5,"po-page-change-password",4)),i&2&&(Lp(5),rw("p-recovery",pN(1,Qe)));},dependencies:[dc,jhe,Da],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Change Password Request"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your Password Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-change-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-token="rzDsQiSYoq"
  p-url-new-password="https://thf.totvs.com.br/sample/api/new-password"
  [p-recovery]="{ url: 'https://po-sample-api.onrender.com/v1/users', type: 'all', contactMail: 'support@mail.com' }"
>
</po-page-change-password>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-request"),og(),Wl(23,"hr")),i&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Je,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ve],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do template do po-page-change-password."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoPageChangePasswordComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-page-change-password"),og(),rN(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),og(),Sl(18,"p"),rN(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),og(),Sl(20,"p"),rN(21,"A propriedade "),Sl(22,"code"),rN(23,"p-url-new-password"),og(),rN(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Sl(25,"em"),rN(26,"client side"),og(),rN(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(28,"em"),rN(29,"propriedades"),og(),rN(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Sl(31,"p"),rN(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(33,"em"),rN(34,"assets"),og(),rN(35," no arquivo "),Sl(36,"strong"),rN(37,"angular.json"),og(),rN(38," da aplica\xE7\xE3o na seguinte ordem:"),og(),Sl(39,"pre")(40,"code"),rN(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Sl(42,"div",6)(43,"h4",7),rN(44,"Seletor"),og(),Sl(45,"pre",8),rN(46,`<po-page-change-password
    p-components-size="string"
    p-hide-current-password="boolean"
    p-logo="string"
    p-no-autocomplete-password="boolean"
    p-recovery="string | Function | PoPageChangePasswordRecovery"
    p-requirements="PoPageChangePasswordRequirement[]"
    p-secondary-logo="string"
    (p-submit)="EventEmitter"
    p-token="string"
    p-url-back="string"
    p-url-home="string"
    p-url-new-password="string" >
</po-page-change-password>
`),og()(),Sl(47,"h4",9),rN(48,"Propriedades"),og(),Sl(49,"table",10)(50,"tr",11)(51,"th",12),rN(52,"Nome"),og(),Sl(53,"th",12),rN(54,"Tipo"),og(),Sl(55,"th",12),rN(56,"Padr\xE3o"),og(),Sl(57,"th",12),rN(58,"Descri\xE7\xE3o"),og()(),Sl(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),rN(63," p-components-size"),Wl(64,"br"),og()()(),Sl(65,"td",17)(66,"code",18),rN(67,"string"),og()(),Sl(68,"td",19)(69,"p")(70,"code"),rN(71,"medium"),og()()(),Sl(72,"td",20)(73,"em")(74,"strong"),rN(75,"(opcional)"),og()(),Sl(76,"p"),rN(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(78,"ul")(79,"li")(80,"code"),rN(81,"small"),og(),rN(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(83,"li")(84,"code"),rN(85,"medium"),og(),rN(86,": aplica a medida medium de cada componente."),og()(),Sl(87,"blockquote")(88,"p"),rN(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(90,"code"),rN(91,"medium"),og(),rN(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(93,"a",21),rN(94,"po-theme"),og(),rN(95,"."),og()()()(),Sl(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),rN(100," p-hide-current-password"),Wl(101,"br"),og()()(),Sl(102,"td",17)(103,"code",22),rN(104,"boolean"),og()(),Sl(105,"td",19)(106,"p")(107,"code"),rN(108,"false"),og()()(),Sl(109,"td",20)(110,"em")(111,"strong"),rN(112,"(opcional)"),og()(),Sl(113,"p"),rN(114,"Esconde o campo "),Sl(115,"code"),rN(116,"Senha atual"),og(),rN(117," para que o template seja para cria\xE7\xE3o de senha."),og()()(),Sl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),rN(122," p-logo"),Wl(123,"br"),og()()(),Sl(124,"td",17)(125,"code",18),rN(126,"string"),og()(),Sl(127,"td",19),rN(128,"-"),og(),Sl(129,"td",20)(130,"em")(131,"strong"),rN(132,"(opcional)"),og()(),Sl(133,"p"),rN(134,"Caminho para a logomarca localizada na parte superior."),og(),Sl(135,"blockquote")(136,"p"),rN(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Sl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),rN(142," p-no-autocomplete-password"),Wl(143,"br"),og()()(),Sl(144,"td",17)(145,"code",22),rN(146,"boolean"),og()(),Sl(147,"td",19)(148,"p")(149,"code"),rN(150,"true"),og()()(),Sl(151,"td",20)(152,"em")(153,"strong"),rN(154,"(opcional)"),og()(),Sl(155,"p"),rN(156,"Define a propriedade nativa "),Sl(157,"code"),rN(158,"autocomplete"),og(),rN(159," do campo como "),Sl(160,"code"),rN(161,"off"),og(),rN(162,"."),og(),Sl(163,"blockquote")(164,"p"),rN(165,"No input de senha("),Sl(166,"code"),rN(167,"po-password"),og(),rN(168,") ser\xE1 definido como "),Sl(169,"code"),rN(170,"new-password"),og(),rN(171,"."),og()()()(),Sl(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),rN(176," p-recovery"),Wl(177,"br"),og()()(),Sl(178,"td",17)(179,"code",18),rN(180,"string "),og(),Sl(181,"code",23),rN(182," Function "),og(),Sl(183,"code",24),rN(184," PoPageChangePasswordRecovery"),og()(),Sl(185,"td",19),rN(186,"-"),og(),Sl(187,"td",20)(188,"em")(189,"strong"),rN(190,"(opcional)"),og()(),Sl(191,"p"),rN(192,"URL para a a\xE7\xE3o do link "),Sl(193,"code"),rN(194,"Esqueceu a senha"),og(),rN(195,"."),og(),Sl(196,"p"),rN(197,"A propriedade aceita os seguintes tipos:"),og(),Sl(198,"ul")(199,"li")(200,"p")(201,"strong"),rN(202,"String"),og(),rN(203,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Sl(204,"li")(205,"p")(206,"strong"),rN(207,"Function"),og(),rN(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Sl(209,"pre")(210,"code"),rN(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),og()()(),Sl(212,"li")(213,"p")(214,"strong"),rN(215,"PoPageChangePasswordRecovery"),og(),rN(216,": cria-se v\xEDnculo autom\xE1tico com o template "),Sl(217,"strong"),rN(218,"po-modal-password-recovery"),og(),rN(219,`.
O objeto deve conter a `),Sl(220,"strong"),rN(221,"url"),og(),rN(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Sl(223,"strong"),rN(224,"tipo"),og(),rN(225,` de modal para recupera\xE7\xE3o de senha,
`),Sl(226,"strong"),rN(227,"email"),og(),rN(228," para contato e "),Sl(229,"strong"),rN(230,"m\xE1scara"),og(),rN(231," do campo de telefone."),og()()(),Sl(232,"blockquote")(233,"p"),rN(234,"Caso n\xE3o tenha valor o link "),Sl(235,"code"),rN(236,"Esqueceu a senha"),og(),rN(237," desaparece."),og()()()(),Sl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),rN(242," p-requirements"),Wl(243,"br"),og()()(),Sl(244,"td",17)(245,"code",25),rN(246,"PoPageChangePasswordRequirement[]"),og()(),Sl(247,"td",19),rN(248,"-"),og(),Sl(249,"td",20)(250,"em")(251,"strong"),rN(252,"(opcional)"),og()(),Sl(253,"p"),rN(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),og()()(),Sl(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),rN(259," p-secondary-logo"),Wl(260,"br"),og()()(),Sl(261,"td",17)(262,"code",18),rN(263,"string"),og()(),Sl(264,"td",19),rN(265,"-"),og(),Sl(266,"td",20)(267,"em")(268,"strong"),rN(269,"(opcional)"),og()(),Sl(270,"p"),rN(271,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Sl(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),rN(276," (p-submit)"),Wl(277,"br"),og()()(),Sl(278,"td",17)(279,"code",28),rN(280,"EventEmitter"),og()(),Sl(281,"td",19),rN(282,"-"),og(),Sl(283,"td",20)(284,"em")(285,"strong"),rN(286,"(opcional)"),og()(),Sl(287,"p"),rN(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),og(),Sl(289,"p"),rN(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Sl(291,"code"),rN(292,"openConfirmation"),og(),rN(293,". Exemplo:"),og(),Sl(294,"pre")(295,"code"),rN(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),og()(),Sl(297,"blockquote")(298,"p"),rN(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(300,"code"),rN(301,"p-url-new-password"),og(),rN(302,"."),og()()()(),Sl(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),rN(307," p-token"),Wl(308,"br"),og()()(),Sl(309,"td",17)(310,"code",18),rN(311,"string"),og()(),Sl(312,"td",19),rN(313,"-"),og(),Sl(314,"td",20)(315,"em")(316,"strong"),rN(317,"(opcional)"),og()(),Sl(318,"p"),rN(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),og(),Sl(320,"blockquote")(321,"p"),rN(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),og()()()(),Sl(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),rN(327," p-url-back"),Wl(328,"br"),og()()(),Sl(329,"td",17)(330,"code",18),rN(331,"string"),og()(),Sl(332,"td",19)(333,"p")(334,"code"),rN(335,"/"),og()()(),Sl(336,"td",20)(337,"em")(338,"strong"),rN(339,"(opcional)"),og()(),Sl(340,"p"),rN(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),og(),Sl(342,"blockquote")(343,"p"),rN(344,"O bot\xE3o "),Sl(345,"code"),rN(346,"Voltar"),og(),rN(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),Sl(348,"code"),rN(349,"p-hide-current-password"),og(),rN(350,` for
falsa.`),og()()()(),Sl(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),rN(355," p-url-home"),Wl(356,"br"),og()()(),Sl(357,"td",17)(358,"code",18),rN(359,"string"),og()(),Sl(360,"td",19)(361,"p")(362,"code"),rN(363,"/"),og()()(),Sl(364,"td",20)(365,"em")(366,"strong"),rN(367,"(opcional)"),og()(),Sl(368,"p"),rN(369,"URL para a a\xE7\xE3o do bot\xE3o "),Sl(370,"code"),rN(371,"Entrar no sistema"),og(),rN(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Sl(373,"code"),rN(374,"openConfirmation"),og(),rN(375,"."),og()()(),Sl(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),rN(380," p-url-new-password"),Wl(381,"br"),og()()(),Sl(382,"td",17)(383,"code",18),rN(384,"string"),og()(),Sl(385,"td",19),rN(386,"-"),og(),Sl(387,"td",20)(388,"em")(389,"strong"),rN(390,"(opcional)"),og()(),Sl(391,"p"),rN(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),Sl(393,"code"),rN(394,"p-submit"),og(),rN(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),og(),Sl(396,"h3"),rN(397,"Processo"),og(),Sl(398,"p"),rN(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),Sl(400,"strong"),rN(401,"salvar"),og(),rN(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Sl(403,"code"),rN(404,"POST"),og(),rN(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),og(),Sl(406,"pre")(407,"code"),rN(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),og()(),Sl(409,"p"),rN(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(411,"code"),rN(412,"204"),og(),rN(413,"."),og(),Sl(414,"p"),rN(415,"Em caso de "),Sl(416,"strong"),rN(417,"sucesso"),og(),rN(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),og(),Sl(419,"blockquote")(420,"p"),rN(421,"O token ser\xE1 informado pela propriedade "),Sl(422,"code"),rN(423,"p-token"),og(),rN(424,"do componente ou por um "),Sl(425,"em"),rN(426,"query parameter"),og(),rN(427," na URL do template."),og()(),Sl(428,"p")(429,"em"),rN(430,"Processo finalizado."),og()(),Wl(431,"hr"),Sl(432,"h4"),rN(433,"Praticidade"),og(),Sl(434,"p"),rN(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Sl(436,"code"),rN(437,"po-page-change-password"),og(),rN(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Sl(439,"code"),rN(440,"/change-password"),og(),rN(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Sl(442,"pre")(443,"code"),rN(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'change-password', component: PoPageChangePasswordComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/new-password',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      }
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),og()(),Sl(445,"p"),rN(446,"O metadado "),Sl(447,"code"),rN(448,"serviceApi"),og(),rN(449," deve ser a "),Sl(450,"strong"),rN(451,"url"),og(),rN(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),Sl(453,"code"),rN(454,"recovery"),og(),rN(455,` \xE9 a interface
`),Sl(456,"code"),rN(457,"PoPageChangePasswordRecovery"),og(),rN(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),og(),Sl(459,"blockquote")(460,"p"),rN(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()()(),Sl(462,"h3",9),rN(463,"M\xE9todos"),og(),Sl(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),rN(470," openConfirmation "),og()()()()(),Sl(471,"tr",20)(472,"td",20)(473,"p"),rN(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),Sl(475,"code"),rN(476,"p-url-home"),og(),rN(477,""),og()()()(),Wl(478,"br"),Sl(479,"h3"),rN(480,"Interfaces"),og(),Sl(481,"h4",31)(482,"code",5),rN(483,"PoPageChangePasswordRecovery"),og()(),Sl(484,"div",2)(485,"p"),rN(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Sl(487,"code"),rN(488,"po-modal-password-recovery"),og(),rN(489,"."),og()(),Sl(490,"h4",9),rN(491,"Propriedades"),og(),Sl(492,"table",10)(493,"tr",11)(494,"th",12),rN(495,"Nome"),og(),Sl(496,"th",12),rN(497,"Tipo"),og(),Sl(498,"th",12),rN(499,"Descri\xE7\xE3o"),og()(),Sl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),rN(504," contactMail"),Wl(505,"br"),og()()(),Sl(506,"td",17)(507,"code",18),rN(508,"string"),og()(),Sl(509,"td",20)(510,"em")(511,"strong"),rN(512,"(opcional)"),og()(),Sl(513,"p"),rN(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Sl(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),rN(519," phoneMask"),Wl(520,"br"),og()()(),Sl(521,"td",17)(522,"code",18),rN(523,"string"),og()(),Sl(524,"td",20)(525,"em")(526,"strong"),rN(527,"(opcional)"),og()(),Sl(528,"p"),rN(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Sl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),rN(534," type"),Wl(535,"br"),og()()(),Sl(536,"td",17)(537,"code",32),rN(538,"PoModalPasswordRecoveryType"),og()(),Sl(539,"td",20)(540,"em")(541,"strong"),rN(542,"(opcional)"),og()(),Sl(543,"p"),rN(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Sl(545,"a",33),rN(546,"PoModalPasswordRecoveryType"),og(),rN(547,"."),og(),Sl(548,"blockquote")(549,"p"),rN(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Sl(551,"code"),rN(552,"PoModalPasswordRecoveryType.Email"),og(),rN(553,"."),og()()()(),Sl(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),rN(558," url"),Wl(559,"br"),og()()(),Sl(560,"td",17)(561,"code",18),rN(562,"string"),og()(),Sl(563,"td",20)(564,"p"),rN(565,"Endpoint usado pelo template "),Sl(566,"strong"),rN(567,"PoModalPasswordRecovery"),og(),rN(568," para requisi\xE7\xE3o do recurso."),og(),Sl(569,"blockquote")(570,"p"),rN(571,"Saiba mais em "),Sl(572,"a",33),rN(573,"PoModalPasswordRecovery"),og(),rN(574,"."),og()()()()(),Sl(575,"h4",31)(576,"code",5),rN(577,"PoPageChangePasswordRequirement"),og()(),Sl(578,"div",2)(579,"p"),rN(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),Sl(581,"code"),rN(582,"p-password-requirements"),og(),rN(583,"."),og()(),Sl(584,"h4",9),rN(585,"Propriedades"),og(),Sl(586,"table",10)(587,"tr",11)(588,"th",12),rN(589,"Nome"),og(),Sl(590,"th",12),rN(591,"Tipo"),og(),Sl(592,"th",12),rN(593,"Descri\xE7\xE3o"),og()(),Sl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),rN(598," requirement"),Wl(599,"br"),og()()(),Sl(600,"td",17)(601,"code",18),rN(602,"string"),og()(),Sl(603,"td",20)(604,"p"),rN(605,"Requisito."),og()()(),Sl(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),rN(610," status"),Wl(611,"br"),og()()(),Sl(612,"td",17)(613,"code",22),rN(614,"boolean "),og(),Sl(615,"code",23),rN(616," Function"),og()(),Sl(617,"td",20)(618,"p"),rN(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),og(),Sl(620,"p"),rN(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),og()()()(),Sl(622,"h4",31)(623,"code",5),rN(624,"PoPageChangePassword"),og()(),Sl(625,"div",2)(626,"p"),rN(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(628,"code"),rN(629,"po-page-change-password"),og(),rN(630,"."),og()(),Sl(631,"h4",9),rN(632,"Propriedades"),og(),Sl(633,"table",10)(634,"tr",11)(635,"th",12),rN(636,"Nome"),og(),Sl(637,"th",12),rN(638,"Tipo"),og(),Sl(639,"th",12),rN(640,"Descri\xE7\xE3o"),og()(),Sl(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),rN(645," currentPassword"),Wl(646,"br"),og()()(),Sl(647,"td",17)(648,"code",18),rN(649,"string"),og()(),Sl(650,"td",20)(651,"em")(652,"strong"),rN(653,"(opcional)"),og()(),Sl(654,"p"),rN(655,"Senha atual"),og()()(),Sl(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),rN(660," newPassword"),Wl(661,"br"),og()()(),Sl(662,"td",17)(663,"code",18),rN(664,"string"),og()(),Sl(665,"td",20)(666,"em")(667,"strong"),rN(668,"(opcional)"),og()(),Sl(669,"p"),rN(670,"Nova senha"),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-page-change-password-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),og()()()),i&2&&(rw("p-actions",o.actions),Lp(2),rw("p-active",o.activeTab==="doc"),Lp(2),rw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,Se,Ee,fe,xe,_e,Me],encapsulation:2,changeDetection:1})}return a})();var Xe=[{path:"",component:qe}],Te=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[mL.forChild(Xe),mL]})}return a})();var zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};