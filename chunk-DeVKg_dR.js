import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,c5 as Vde,cd as Da,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,bH as k3,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,bD as Ede,aJ as qhe,ce as dNe,aq as lx,at as ux,cc as Fa,aI as dc,c9 as Yhe,a7 as lN,a3 as cNe,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Pe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&zl(0,"po-page-change-password");},dependencies:[Da],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Change Password Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-change-password></po-page-change-password>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-change-password-basic"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Pe],encapsulation:2})}return a})();var Se=(()=>{class a{poDialog=f(Vde);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&Gl(Da,7),i&2){let m;co(m=lo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=Dx();Il(0,"po-page-change-password",2),ft("p-submit",function(p){return o.submit(p)}),og(),zl(1,"po-divider",3),Il(2,"form",null,0)(4,"div",4)(5,"po-input",5),ww("ngModelChange",function(p){return Xy(m),eN(o.urlHome,p)||(o.urlHome=p),Qy(p)}),og(),QA(),Il(6,"po-input",6),ww("ngModelChange",function(p){return Xy(m),eN(o.recovery,p)||(o.recovery=p),Qy(p)}),og(),QA(),og(),Il(7,"div",4)(8,"po-input",7),ww("ngModelChange",function(p){return Xy(m),eN(o.urlBack,p)||(o.urlBack=p),Qy(p)}),og(),QA(),Il(9,"po-input",8),ww("ngModelChange",function(p){return Xy(m),eN(o.logo,p)||(o.logo=p),Qy(p)}),og(),QA(),og(),Il(10,"div",4)(11,"po-input",9),ww("ngModelChange",function(p){return Xy(m),eN(o.secondaryLogo,p)||(o.secondaryLogo=p),Qy(p)}),og(),QA(),Il(12,"po-switch",10),ww("ngModelChange",function(p){return Xy(m),eN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Qy(p)}),og(),QA(),og(),Il(13,"po-radio-group",11),ww("ngModelChange",function(p){return Xy(m),eN(o.componentsSize,p)||(o.componentsSize=p),Qy(p)}),og(),QA(),zl(14,"br")(15,"po-divider"),Il(16,"form",null,1)(18,"div",4)(19,"po-input",12),ww("ngModelChange",function(p){return Xy(m),eN(o.requirement.requirement,p)||(o.requirement.requirement=p),Qy(p)}),og(),QA(),Il(20,"po-switch",13),ww("ngModelChange",function(p){return Xy(m),eN(o.requirement.status,p)||(o.requirement.status=p),Qy(p)}),og(),QA(),og(),Il(21,"div",4)(22,"po-button",14),ft("p-click",function(){return o.addRequirement()}),og()()(),zl(23,"po-divider"),Il(24,"div",4)(25,"po-button",15),ft("p-click",function(){return o.restore()}),og()()();}if(i&2){let m=Ax(17);nw("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Lp(5),Ew("ngModel",o.urlHome),e0(),Lp(),Ew("ngModel",o.recovery),e0(),Lp(2),Ew("ngModel",o.urlBack),e0(),Lp(),Ew("ngModel",o.logo),e0(),Lp(2),Ew("ngModel",o.secondaryLogo),e0(),Lp(),Ew("ngModel",o.hideCurrentPassword),e0(),Lp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),e0(),Lp(6),Ew("ngModel",o.requirement.requirement),e0(),Lp(),Ew("ngModel",o.requirement.status),e0(),Lp(2),nw("p-disabled",m.form.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,Dde,k3,Da],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Change Password Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-change-password
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-change-password-labs"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Be,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return a})();function Ne(a,X){if(a&1){let r=Dx();Il(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),zl(5,"po-input",4),QA(),Il(6,"po-datepicker",5),ww("ngModelChange",function(o){Xy(r);let m=Sx();return eN(m.birthday,o)||(m.birthday=o),Qy(o)}),og(),QA(),zl(7,"po-input",6),QA(),og(),Il(8,"div",3)(9,"po-select",7),ww("ngModelChange",function(o){Xy(r);let m=Sx();return eN(m.country,o)||(m.country=o),Qy(o)}),og(),QA(),Il(10,"po-select",8),ww("ngModelChange",function(o){Xy(r);let m=Sx();return eN(m.city,o)||(m.city=o),Qy(o)}),og(),QA(),zl(11,"po-input",9),QA(),og(),zl(12,"po-divider",10),Il(13,"po-button",11),ft("p-click",function(){Xy(r);let o=Sx();return Qy(o.showChangePasswordScreen())}),og()()()();}if(a&2){let r=Sx();nw("p-breadcrumb",r.breadcrumb),Lp(5),nw("ngModel",r.fullName),e0(),Lp(),Ew("ngModel",r.birthday),e0(),Lp(),nw("ngModel",r.email),e0(),Lp(2),Ew("ngModel",r.country),nw("p-options",r.countryOptions),e0(),Lp(),Ew("ngModel",r.city),nw("p-options",r.cityOptions),e0(),Lp(),nw("ngModel",r.phoneNumber),e0();}}function ze(a,X){if(a&1){let r=Dx();Il(0,"po-page-change-password",12),ft("p-submit",function(){Xy(r);let o=Sx();return Qy(o.onSubmit())}),og();}if(a&2){let r=Sx();nw("p-url-back",r.url)("p-url-home",r.url);}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&Gl(Da,5),i&2){let m;co(m=lo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&lx(0,Ne,14,9,"po-page-edit",1)(1,ze,1,2,"po-page-change-password",2),i&2&&ux(o.changePasswordScreen?1:0);},dependencies:[G9,$9,z9,mk,hk,Qt,mv,Ede,O3,qhe,dNe,Da],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Change Password Modify"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),og(),Il(13,"pre",7),Qx(14,`@if (!changePasswordScreen) {
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-change-password-modify"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return a})();function He(a,X){if(a&1){let r=Dx();Il(0,"po-page-login",2),ft("p-login-submit",function(){Xy(r);let o=Sx();return Qy(o.checkLogin())}),og();}}function We(a,X){if(a&1){let r=Dx();Il(0,"po-page-change-password",3),ft("p-submit",function(){Xy(r);let o=Sx();return Qy(o.onSubmit())}),og();}if(a&2){let r=Sx();nw("p-requirements",r.requirements);}}var xe=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&Gl(Da,7),i&2){let m;co(m=lo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(lx(0,He,1,0,"po-page-login",0),lx(1,We,1,1,"po-page-change-password",1)),i&2&&(ux(o.login?-1:0),Lp(),ux(o.login?1:-1));},dependencies:[Da,Fa],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Change Password Create"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),og(),Il(13,"pre",7),Qx(14,`@if (!login) {
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-change-password-create"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,je,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,xe],encapsulation:2})}return a})();var Qe=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(Il(0,"po-container")(1,"div",0),zl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),zl(5,"po-page-change-password",4)),i&2&&(Lp(5),nw("p-recovery",lN(1,Qe)));},dependencies:[dc,Yhe,Da],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Change Password Request"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-change-password-request"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Je,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ve],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do template do po-page-change-password."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoPageChangePasswordComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-page-change-password"),og(),Qx(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),og(),Il(18,"p"),Qx(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),og(),Il(20,"p"),Qx(21,"A propriedade "),Il(22,"code"),Qx(23,"p-url-new-password"),og(),Qx(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Il(25,"em"),Qx(26,"client side"),og(),Qx(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Il(28,"em"),Qx(29,"propriedades"),og(),Qx(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Il(31,"p"),Qx(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Il(33,"em"),Qx(34,"assets"),og(),Qx(35," no arquivo "),Il(36,"strong"),Qx(37,"angular.json"),og(),Qx(38," da aplica\xE7\xE3o na seguinte ordem:"),og(),Il(39,"pre")(40,"code"),Qx(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Il(42,"div",6)(43,"h4",7),Qx(44,"Seletor"),og(),Il(45,"pre",8),Qx(46,`<po-page-change-password
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
`),og()(),Il(47,"h4",9),Qx(48,"Propriedades"),og(),Il(49,"table",10)(50,"tr",11)(51,"th",12),Qx(52,"Nome"),og(),Il(53,"th",12),Qx(54,"Tipo"),og(),Il(55,"th",12),Qx(56,"Padr\xE3o"),og(),Il(57,"th",12),Qx(58,"Descri\xE7\xE3o"),og()(),Il(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),Qx(63," p-components-size"),zl(64,"br"),og()()(),Il(65,"td",17)(66,"code",18),Qx(67,"string"),og()(),Il(68,"td",19)(69,"p")(70,"code"),Qx(71,"medium"),og()()(),Il(72,"td",20)(73,"em")(74,"strong"),Qx(75,"(opcional)"),og()(),Il(76,"p"),Qx(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(78,"ul")(79,"li")(80,"code"),Qx(81,"small"),og(),Qx(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(83,"li")(84,"code"),Qx(85,"medium"),og(),Qx(86,": aplica a medida medium de cada componente."),og()(),Il(87,"blockquote")(88,"p"),Qx(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(90,"code"),Qx(91,"medium"),og(),Qx(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(93,"a",21),Qx(94,"po-theme"),og(),Qx(95,"."),og()()()(),Il(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),Qx(100," p-hide-current-password"),zl(101,"br"),og()()(),Il(102,"td",17)(103,"code",22),Qx(104,"boolean"),og()(),Il(105,"td",19)(106,"p")(107,"code"),Qx(108,"false"),og()()(),Il(109,"td",20)(110,"em")(111,"strong"),Qx(112,"(opcional)"),og()(),Il(113,"p"),Qx(114,"Esconde o campo "),Il(115,"code"),Qx(116,"Senha atual"),og(),Qx(117," para que o template seja para cria\xE7\xE3o de senha."),og()()(),Il(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),Qx(122," p-logo"),zl(123,"br"),og()()(),Il(124,"td",17)(125,"code",18),Qx(126,"string"),og()(),Il(127,"td",19),Qx(128,"-"),og(),Il(129,"td",20)(130,"em")(131,"strong"),Qx(132,"(opcional)"),og()(),Il(133,"p"),Qx(134,"Caminho para a logomarca localizada na parte superior."),og(),Il(135,"blockquote")(136,"p"),Qx(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Il(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),Qx(142," p-no-autocomplete-password"),zl(143,"br"),og()()(),Il(144,"td",17)(145,"code",22),Qx(146,"boolean"),og()(),Il(147,"td",19)(148,"p")(149,"code"),Qx(150,"true"),og()()(),Il(151,"td",20)(152,"em")(153,"strong"),Qx(154,"(opcional)"),og()(),Il(155,"p"),Qx(156,"Define a propriedade nativa "),Il(157,"code"),Qx(158,"autocomplete"),og(),Qx(159," do campo como "),Il(160,"code"),Qx(161,"off"),og(),Qx(162,"."),og(),Il(163,"blockquote")(164,"p"),Qx(165,"No input de senha("),Il(166,"code"),Qx(167,"po-password"),og(),Qx(168,") ser\xE1 definido como "),Il(169,"code"),Qx(170,"new-password"),og(),Qx(171,"."),og()()()(),Il(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),Qx(176," p-recovery"),zl(177,"br"),og()()(),Il(178,"td",17)(179,"code",18),Qx(180,"string "),og(),Il(181,"code",23),Qx(182," Function "),og(),Il(183,"code",24),Qx(184," PoPageChangePasswordRecovery"),og()(),Il(185,"td",19),Qx(186,"-"),og(),Il(187,"td",20)(188,"em")(189,"strong"),Qx(190,"(opcional)"),og()(),Il(191,"p"),Qx(192,"URL para a a\xE7\xE3o do link "),Il(193,"code"),Qx(194,"Esqueceu a senha"),og(),Qx(195,"."),og(),Il(196,"p"),Qx(197,"A propriedade aceita os seguintes tipos:"),og(),Il(198,"ul")(199,"li")(200,"p")(201,"strong"),Qx(202,"String"),og(),Qx(203,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Il(204,"li")(205,"p")(206,"strong"),Qx(207,"Function"),og(),Qx(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Il(209,"pre")(210,"code"),Qx(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),og()()(),Il(212,"li")(213,"p")(214,"strong"),Qx(215,"PoPageChangePasswordRecovery"),og(),Qx(216,": cria-se v\xEDnculo autom\xE1tico com o template "),Il(217,"strong"),Qx(218,"po-modal-password-recovery"),og(),Qx(219,`.
O objeto deve conter a `),Il(220,"strong"),Qx(221,"url"),og(),Qx(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Il(223,"strong"),Qx(224,"tipo"),og(),Qx(225,` de modal para recupera\xE7\xE3o de senha,
`),Il(226,"strong"),Qx(227,"email"),og(),Qx(228," para contato e "),Il(229,"strong"),Qx(230,"m\xE1scara"),og(),Qx(231," do campo de telefone."),og()()(),Il(232,"blockquote")(233,"p"),Qx(234,"Caso n\xE3o tenha valor o link "),Il(235,"code"),Qx(236,"Esqueceu a senha"),og(),Qx(237," desaparece."),og()()()(),Il(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),Qx(242," p-requirements"),zl(243,"br"),og()()(),Il(244,"td",17)(245,"code",25),Qx(246,"PoPageChangePasswordRequirement[]"),og()(),Il(247,"td",19),Qx(248,"-"),og(),Il(249,"td",20)(250,"em")(251,"strong"),Qx(252,"(opcional)"),og()(),Il(253,"p"),Qx(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),og()()(),Il(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),Qx(259," p-secondary-logo"),zl(260,"br"),og()()(),Il(261,"td",17)(262,"code",18),Qx(263,"string"),og()(),Il(264,"td",19),Qx(265,"-"),og(),Il(266,"td",20)(267,"em")(268,"strong"),Qx(269,"(opcional)"),og()(),Il(270,"p"),Qx(271,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Il(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),Qx(276," (p-submit)"),zl(277,"br"),og()()(),Il(278,"td",17)(279,"code",28),Qx(280,"EventEmitter"),og()(),Il(281,"td",19),Qx(282,"-"),og(),Il(283,"td",20)(284,"em")(285,"strong"),Qx(286,"(opcional)"),og()(),Il(287,"p"),Qx(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),og(),Il(289,"p"),Qx(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Il(291,"code"),Qx(292,"openConfirmation"),og(),Qx(293,". Exemplo:"),og(),Il(294,"pre")(295,"code"),Qx(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),og()(),Il(297,"blockquote")(298,"p"),Qx(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Il(300,"code"),Qx(301,"p-url-new-password"),og(),Qx(302,"."),og()()()(),Il(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),Qx(307," p-token"),zl(308,"br"),og()()(),Il(309,"td",17)(310,"code",18),Qx(311,"string"),og()(),Il(312,"td",19),Qx(313,"-"),og(),Il(314,"td",20)(315,"em")(316,"strong"),Qx(317,"(opcional)"),og()(),Il(318,"p"),Qx(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),og(),Il(320,"blockquote")(321,"p"),Qx(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),og()()()(),Il(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),Qx(327," p-url-back"),zl(328,"br"),og()()(),Il(329,"td",17)(330,"code",18),Qx(331,"string"),og()(),Il(332,"td",19)(333,"p")(334,"code"),Qx(335,"/"),og()()(),Il(336,"td",20)(337,"em")(338,"strong"),Qx(339,"(opcional)"),og()(),Il(340,"p"),Qx(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),og(),Il(342,"blockquote")(343,"p"),Qx(344,"O bot\xE3o "),Il(345,"code"),Qx(346,"Voltar"),og(),Qx(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),Il(348,"code"),Qx(349,"p-hide-current-password"),og(),Qx(350,` for
falsa.`),og()()()(),Il(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),Qx(355," p-url-home"),zl(356,"br"),og()()(),Il(357,"td",17)(358,"code",18),Qx(359,"string"),og()(),Il(360,"td",19)(361,"p")(362,"code"),Qx(363,"/"),og()()(),Il(364,"td",20)(365,"em")(366,"strong"),Qx(367,"(opcional)"),og()(),Il(368,"p"),Qx(369,"URL para a a\xE7\xE3o do bot\xE3o "),Il(370,"code"),Qx(371,"Entrar no sistema"),og(),Qx(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Il(373,"code"),Qx(374,"openConfirmation"),og(),Qx(375,"."),og()()(),Il(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),Qx(380," p-url-new-password"),zl(381,"br"),og()()(),Il(382,"td",17)(383,"code",18),Qx(384,"string"),og()(),Il(385,"td",19),Qx(386,"-"),og(),Il(387,"td",20)(388,"em")(389,"strong"),Qx(390,"(opcional)"),og()(),Il(391,"p"),Qx(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),Il(393,"code"),Qx(394,"p-submit"),og(),Qx(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),og(),Il(396,"h3"),Qx(397,"Processo"),og(),Il(398,"p"),Qx(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),Il(400,"strong"),Qx(401,"salvar"),og(),Qx(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Il(403,"code"),Qx(404,"POST"),og(),Qx(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),og(),Il(406,"pre")(407,"code"),Qx(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),og()(),Il(409,"p"),Qx(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Il(411,"code"),Qx(412,"204"),og(),Qx(413,"."),og(),Il(414,"p"),Qx(415,"Em caso de "),Il(416,"strong"),Qx(417,"sucesso"),og(),Qx(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),og(),Il(419,"blockquote")(420,"p"),Qx(421,"O token ser\xE1 informado pela propriedade "),Il(422,"code"),Qx(423,"p-token"),og(),Qx(424,"do componente ou por um "),Il(425,"em"),Qx(426,"query parameter"),og(),Qx(427," na URL do template."),og()(),Il(428,"p")(429,"em"),Qx(430,"Processo finalizado."),og()(),zl(431,"hr"),Il(432,"h4"),Qx(433,"Praticidade"),og(),Il(434,"p"),Qx(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Il(436,"code"),Qx(437,"po-page-change-password"),og(),Qx(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Il(439,"code"),Qx(440,"/change-password"),og(),Qx(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Il(442,"pre")(443,"code"),Qx(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),og()(),Il(445,"p"),Qx(446,"O metadado "),Il(447,"code"),Qx(448,"serviceApi"),og(),Qx(449," deve ser a "),Il(450,"strong"),Qx(451,"url"),og(),Qx(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),Il(453,"code"),Qx(454,"recovery"),og(),Qx(455,` \xE9 a interface
`),Il(456,"code"),Qx(457,"PoPageChangePasswordRecovery"),og(),Qx(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),og(),Il(459,"blockquote")(460,"p"),Qx(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()()(),Il(462,"h3",9),Qx(463,"M\xE9todos"),og(),Il(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),Qx(470," openConfirmation "),og()()()()(),Il(471,"tr",20)(472,"td",20)(473,"p"),Qx(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),Il(475,"code"),Qx(476,"p-url-home"),og(),Qx(477,""),og()()()(),zl(478,"br"),Il(479,"h3"),Qx(480,"Interfaces"),og(),Il(481,"h4",31)(482,"code",5),Qx(483,"PoPageChangePasswordRecovery"),og()(),Il(484,"div",2)(485,"p"),Qx(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Il(487,"code"),Qx(488,"po-modal-password-recovery"),og(),Qx(489,"."),og()(),Il(490,"h4",9),Qx(491,"Propriedades"),og(),Il(492,"table",10)(493,"tr",11)(494,"th",12),Qx(495,"Nome"),og(),Il(496,"th",12),Qx(497,"Tipo"),og(),Il(498,"th",12),Qx(499,"Descri\xE7\xE3o"),og()(),Il(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),Qx(504," contactMail"),zl(505,"br"),og()()(),Il(506,"td",17)(507,"code",18),Qx(508,"string"),og()(),Il(509,"td",20)(510,"em")(511,"strong"),Qx(512,"(opcional)"),og()(),Il(513,"p"),Qx(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Il(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),Qx(519," phoneMask"),zl(520,"br"),og()()(),Il(521,"td",17)(522,"code",18),Qx(523,"string"),og()(),Il(524,"td",20)(525,"em")(526,"strong"),Qx(527,"(opcional)"),og()(),Il(528,"p"),Qx(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Il(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),Qx(534," type"),zl(535,"br"),og()()(),Il(536,"td",17)(537,"code",32),Qx(538,"PoModalPasswordRecoveryType"),og()(),Il(539,"td",20)(540,"em")(541,"strong"),Qx(542,"(opcional)"),og()(),Il(543,"p"),Qx(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Il(545,"a",33),Qx(546,"PoModalPasswordRecoveryType"),og(),Qx(547,"."),og(),Il(548,"blockquote")(549,"p"),Qx(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Il(551,"code"),Qx(552,"PoModalPasswordRecoveryType.Email"),og(),Qx(553,"."),og()()()(),Il(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),Qx(558," url"),zl(559,"br"),og()()(),Il(560,"td",17)(561,"code",18),Qx(562,"string"),og()(),Il(563,"td",20)(564,"p"),Qx(565,"Endpoint usado pelo template "),Il(566,"strong"),Qx(567,"PoModalPasswordRecovery"),og(),Qx(568," para requisi\xE7\xE3o do recurso."),og(),Il(569,"blockquote")(570,"p"),Qx(571,"Saiba mais em "),Il(572,"a",33),Qx(573,"PoModalPasswordRecovery"),og(),Qx(574,"."),og()()()()(),Il(575,"h4",31)(576,"code",5),Qx(577,"PoPageChangePasswordRequirement"),og()(),Il(578,"div",2)(579,"p"),Qx(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),Il(581,"code"),Qx(582,"p-password-requirements"),og(),Qx(583,"."),og()(),Il(584,"h4",9),Qx(585,"Propriedades"),og(),Il(586,"table",10)(587,"tr",11)(588,"th",12),Qx(589,"Nome"),og(),Il(590,"th",12),Qx(591,"Tipo"),og(),Il(592,"th",12),Qx(593,"Descri\xE7\xE3o"),og()(),Il(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),Qx(598," requirement"),zl(599,"br"),og()()(),Il(600,"td",17)(601,"code",18),Qx(602,"string"),og()(),Il(603,"td",20)(604,"p"),Qx(605,"Requisito."),og()()(),Il(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),Qx(610," status"),zl(611,"br"),og()()(),Il(612,"td",17)(613,"code",22),Qx(614,"boolean "),og(),Il(615,"code",23),Qx(616," Function"),og()(),Il(617,"td",20)(618,"p"),Qx(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),og(),Il(620,"p"),Qx(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),og()()()(),Il(622,"h4",31)(623,"code",5),Qx(624,"PoPageChangePassword"),og()(),Il(625,"div",2)(626,"p"),Qx(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Il(628,"code"),Qx(629,"po-page-change-password"),og(),Qx(630,"."),og()(),Il(631,"h4",9),Qx(632,"Propriedades"),og(),Il(633,"table",10)(634,"tr",11)(635,"th",12),Qx(636,"Nome"),og(),Il(637,"th",12),Qx(638,"Tipo"),og(),Il(639,"th",12),Qx(640,"Descri\xE7\xE3o"),og()(),Il(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),Qx(645," currentPassword"),zl(646,"br"),og()()(),Il(647,"td",17)(648,"code",18),Qx(649,"string"),og()(),Il(650,"td",20)(651,"em")(652,"strong"),Qx(653,"(opcional)"),og()(),Il(654,"p"),Qx(655,"Senha atual"),og()()(),Il(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),Qx(660," newPassword"),zl(661,"br"),og()()(),Il(662,"td",17)(663,"code",18),Qx(664,"string"),og()(),Il(665,"td",20)(666,"em")(667,"strong"),Qx(668,"(opcional)"),og()(),Il(669,"p"),Qx(670,"Nova senha"),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-page-change-password-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),og()()()),i&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,we,Ee,fe,ye,_e,Me],encapsulation:2})}return a})();var Xe=[{path:"",component:qe}],Te=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Xe),uL]})}return a})();var zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};