import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,c5 as Lde,cd as Da,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,c8 as wde,bH as M3,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,av as ql,aw as lo,ax as uo,bD as Pde,aJ as Hhe,ce as sNe,aq as dx,at as fx,cc as Fa,aI as dc,c9 as Ghe,a7 as dN,a3 as rNe,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Pe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:false,decls:1,vars:0,template:function(i,o){i&1&&Wl(0,"po-page-change-password");},dependencies:[Da],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Change Password Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-change-password></po-page-change-password>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-basic"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Pe],encapsulation:2})}return a})();var Se=(()=>{class a{poDialog=f(Lde);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:false};}restore(){this.componentsSize="medium",this.hideCurrentPassword=false,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:false},this.requirements=[],this.secondaryLogo=void 0;}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()});}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&ql(Da,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let m=wx();Sl(0,"po-page-change-password",2),ft("p-submit",function(p){return o.submit(p)}),og(),Wl(1,"po-divider",3),Sl(2,"form",null,0)(4,"div",4)(5,"po-input",5),ww("ngModelChange",function(p){return Ky(m),nN(o.urlHome,p)||(o.urlHome=p),Xy(p)}),og(),e0(),Sl(6,"po-input",6),ww("ngModelChange",function(p){return Ky(m),nN(o.recovery,p)||(o.recovery=p),Xy(p)}),og(),e0(),og(),Sl(7,"div",4)(8,"po-input",7),ww("ngModelChange",function(p){return Ky(m),nN(o.urlBack,p)||(o.urlBack=p),Xy(p)}),og(),e0(),Sl(9,"po-input",8),ww("ngModelChange",function(p){return Ky(m),nN(o.logo,p)||(o.logo=p),Xy(p)}),og(),e0(),og(),Sl(10,"div",4)(11,"po-input",9),ww("ngModelChange",function(p){return Ky(m),nN(o.secondaryLogo,p)||(o.secondaryLogo=p),Xy(p)}),og(),e0(),Sl(12,"po-switch",10),ww("ngModelChange",function(p){return Ky(m),nN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Xy(p)}),og(),e0(),og(),Sl(13,"po-radio-group",11),ww("ngModelChange",function(p){return Ky(m),nN(o.componentsSize,p)||(o.componentsSize=p),Xy(p)}),og(),e0(),Wl(14,"br")(15,"po-divider"),Sl(16,"form",null,1)(18,"div",4)(19,"po-input",12),ww("ngModelChange",function(p){return Ky(m),nN(o.requirement.requirement,p)||(o.requirement.requirement=p),Xy(p)}),og(),e0(),Sl(20,"po-switch",13),ww("ngModelChange",function(p){return Ky(m),nN(o.requirement.status,p)||(o.requirement.status=p),Xy(p)}),og(),e0(),og(),Sl(21,"div",4)(22,"po-button",14),ft("p-click",function(){return o.addRequirement()}),og()()(),Wl(23,"po-divider"),Sl(24,"div",4)(25,"po-button",15),ft("p-click",function(){return o.restore()}),og()()();}if(i&2){let m=Nx(17);nw("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),Lp(5),Ew("ngModel",o.urlHome),n0(),Lp(),Ew("ngModel",o.recovery),n0(),Lp(2),Ew("ngModel",o.urlBack),n0(),Lp(),Ew("ngModel",o.logo),n0(),Lp(2),Ew("ngModel",o.secondaryLogo),n0(),Lp(),Ew("ngModel",o.hideCurrentPassword),n0(),Lp(),Ew("ngModel",o.componentsSize),nw("p-options",o.componentsSizeOptions),n0(),Lp(6),Ew("ngModel",o.requirement.requirement),n0(),Lp(),Ew("ngModel",o.requirement.status),n0(),Lp(2),nw("p-disabled",m.form.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,wde,M3,Da],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Change Password Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-change-password
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-labs"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Be,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return a})();function Ne(a,X){if(a&1){let r=wx();Sl(0,"po-page-edit",1)(1,"form",null,0)(3,"div",3)(4,"div",3),Wl(5,"po-input",4),e0(),Sl(6,"po-datepicker",5),ww("ngModelChange",function(o){Ky(r);let m=Mx();return nN(m.birthday,o)||(m.birthday=o),Xy(o)}),og(),e0(),Wl(7,"po-input",6),e0(),og(),Sl(8,"div",3)(9,"po-select",7),ww("ngModelChange",function(o){Ky(r);let m=Mx();return nN(m.country,o)||(m.country=o),Xy(o)}),og(),e0(),Sl(10,"po-select",8),ww("ngModelChange",function(o){Ky(r);let m=Mx();return nN(m.city,o)||(m.city=o),Xy(o)}),og(),e0(),Wl(11,"po-input",9),e0(),og(),Wl(12,"po-divider",10),Sl(13,"po-button",11),ft("p-click",function(){Ky(r);let o=Mx();return Xy(o.showChangePasswordScreen())}),og()()()();}if(a&2){let r=Mx();nw("p-breadcrumb",r.breadcrumb),Lp(5),nw("ngModel",r.fullName),n0(),Lp(),Ew("ngModel",r.birthday),n0(),Lp(),nw("ngModel",r.email),n0(),Lp(2),Ew("ngModel",r.country),nw("p-options",r.countryOptions),n0(),Lp(),Ew("ngModel",r.city),nw("p-options",r.cityOptions),n0(),Lp(),nw("ngModel",r.phoneNumber),n0();}}function ze(a,X){if(a&1){let r=wx();Sl(0,"po-page-change-password",12),ft("p-submit",function(){Ky(r);let o=Mx();return Xy(o.onSubmit())}),og();}if(a&2){let r=Mx();nw("p-url-back",r.url)("p-url-home",r.url);}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize();}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=false,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home";}onSubmit(){this.changePassword.openConfirmation();}showChangePasswordScreen(){this.changePasswordScreen=true;}showProfileScreen(){this.changePasswordScreen=false;}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&ql(Da,5),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:1,consts:[["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-url-back","p-url-home"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){i&1&&dx(0,Ne,14,9,"po-page-edit",1)(1,ze,1,2,"po-page-change-password",2),i&2&&fx(o.changePasswordScreen?1:0);},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,Pde,L3,Hhe,sNe,Da],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Change Password Modify"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),og(),Sl(13,"pre",7),eN(14,`@if (!changePasswordScreen) {
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-modify"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return a})();function He(a,X){if(a&1){let r=wx();Sl(0,"po-page-login",2),ft("p-login-submit",function(){Ky(r);let o=Mx();return Xy(o.checkLogin())}),og();}}function We(a,X){if(a&1){let r=wx();Sl(0,"po-page-change-password",3),ft("p-submit",function(){Ky(r);let o=Mx();return Xy(o.onSubmit())}),og();}if(a&2){let r=Mx();nw("p-requirements",r.requirements);}}var xe=(()=>{class a{changePassword;login=false;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login;}onSubmit(){this.changePassword.openConfirmation();}validateCases(r){if(r){let i=r.match(/[a-z]/g);return !(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return !(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&ql(Da,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first);}},standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&(dx(0,He,1,0,"po-page-login",0),dx(1,We,1,1,"po-page-change-password",1)),i&2&&(fx(o.login?-1:0),Lp(),fx(o.login?1:-1));},dependencies:[Da,Fa],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Change Password Create"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),og(),Sl(13,"pre",7),eN(14,`@if (!login) {
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-create"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,je,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,xe],encapsulation:2})}return a})();var Qe=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),ve=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:false,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),Wl(5,"po-page-change-password",4)),i&2&&(Lp(5),nw("p-recovery",dN(1,Qe)));},dependencies:[dc,Ghe,Da],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Change Password Request"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-change-password-request"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Je,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ve],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:false,decls:671,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do template do po-page-change-password."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoPageChangePasswordComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-page-change-password"),og(),eN(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),og(),Sl(18,"p"),eN(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),og(),Sl(20,"p"),eN(21,"A propriedade "),Sl(22,"code"),eN(23,"p-url-new-password"),og(),eN(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Sl(25,"em"),eN(26,"client side"),og(),eN(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(28,"em"),eN(29,"propriedades"),og(),eN(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Sl(31,"p"),eN(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(33,"em"),eN(34,"assets"),og(),eN(35," no arquivo "),Sl(36,"strong"),eN(37,"angular.json"),og(),eN(38," da aplica\xE7\xE3o na seguinte ordem:"),og(),Sl(39,"pre")(40,"code"),eN(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Sl(42,"div",6)(43,"h4",7),eN(44,"Seletor"),og(),Sl(45,"pre",8),eN(46,`<po-page-change-password
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
`),og()(),Sl(47,"h4",9),eN(48,"Propriedades"),og(),Sl(49,"table",10)(50,"tr",11)(51,"th",12),eN(52,"Nome"),og(),Sl(53,"th",12),eN(54,"Tipo"),og(),Sl(55,"th",12),eN(56,"Padr\xE3o"),og(),Sl(57,"th",12),eN(58,"Descri\xE7\xE3o"),og()(),Sl(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),eN(63," p-components-size"),Wl(64,"br"),og()()(),Sl(65,"td",17)(66,"code",18),eN(67,"string"),og()(),Sl(68,"td",19)(69,"p")(70,"code"),eN(71,"medium"),og()()(),Sl(72,"td",20)(73,"em")(74,"strong"),eN(75,"(opcional)"),og()(),Sl(76,"p"),eN(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(78,"ul")(79,"li")(80,"code"),eN(81,"small"),og(),eN(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(83,"li")(84,"code"),eN(85,"medium"),og(),eN(86,": aplica a medida medium de cada componente."),og()(),Sl(87,"blockquote")(88,"p"),eN(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(90,"code"),eN(91,"medium"),og(),eN(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(93,"a",21),eN(94,"po-theme"),og(),eN(95,"."),og()()()(),Sl(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),eN(100," p-hide-current-password"),Wl(101,"br"),og()()(),Sl(102,"td",17)(103,"code",22),eN(104,"boolean"),og()(),Sl(105,"td",19)(106,"p")(107,"code"),eN(108,"false"),og()()(),Sl(109,"td",20)(110,"em")(111,"strong"),eN(112,"(opcional)"),og()(),Sl(113,"p"),eN(114,"Esconde o campo "),Sl(115,"code"),eN(116,"Senha atual"),og(),eN(117," para que o template seja para cria\xE7\xE3o de senha."),og()()(),Sl(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),eN(122," p-logo"),Wl(123,"br"),og()()(),Sl(124,"td",17)(125,"code",18),eN(126,"string"),og()(),Sl(127,"td",19),eN(128,"-"),og(),Sl(129,"td",20)(130,"em")(131,"strong"),eN(132,"(opcional)"),og()(),Sl(133,"p"),eN(134,"Caminho para a logomarca localizada na parte superior."),og(),Sl(135,"blockquote")(136,"p"),eN(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Sl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),eN(142," p-no-autocomplete-password"),Wl(143,"br"),og()()(),Sl(144,"td",17)(145,"code",22),eN(146,"boolean"),og()(),Sl(147,"td",19)(148,"p")(149,"code"),eN(150,"true"),og()()(),Sl(151,"td",20)(152,"em")(153,"strong"),eN(154,"(opcional)"),og()(),Sl(155,"p"),eN(156,"Define a propriedade nativa "),Sl(157,"code"),eN(158,"autocomplete"),og(),eN(159," do campo como "),Sl(160,"code"),eN(161,"off"),og(),eN(162,"."),og(),Sl(163,"blockquote")(164,"p"),eN(165,"No input de senha("),Sl(166,"code"),eN(167,"po-password"),og(),eN(168,") ser\xE1 definido como "),Sl(169,"code"),eN(170,"new-password"),og(),eN(171,"."),og()()()(),Sl(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),eN(176," p-recovery"),Wl(177,"br"),og()()(),Sl(178,"td",17)(179,"code",18),eN(180,"string "),og(),Sl(181,"code",23),eN(182," Function "),og(),Sl(183,"code",24),eN(184," PoPageChangePasswordRecovery"),og()(),Sl(185,"td",19),eN(186,"-"),og(),Sl(187,"td",20)(188,"em")(189,"strong"),eN(190,"(opcional)"),og()(),Sl(191,"p"),eN(192,"URL para a a\xE7\xE3o do link "),Sl(193,"code"),eN(194,"Esqueceu a senha"),og(),eN(195,"."),og(),Sl(196,"p"),eN(197,"A propriedade aceita os seguintes tipos:"),og(),Sl(198,"ul")(199,"li")(200,"p")(201,"strong"),eN(202,"String"),og(),eN(203,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Sl(204,"li")(205,"p")(206,"strong"),eN(207,"Function"),og(),eN(208,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Sl(209,"pre")(210,"code"),eN(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),og()()(),Sl(212,"li")(213,"p")(214,"strong"),eN(215,"PoPageChangePasswordRecovery"),og(),eN(216,": cria-se v\xEDnculo autom\xE1tico com o template "),Sl(217,"strong"),eN(218,"po-modal-password-recovery"),og(),eN(219,`.
O objeto deve conter a `),Sl(220,"strong"),eN(221,"url"),og(),eN(222," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Sl(223,"strong"),eN(224,"tipo"),og(),eN(225,` de modal para recupera\xE7\xE3o de senha,
`),Sl(226,"strong"),eN(227,"email"),og(),eN(228," para contato e "),Sl(229,"strong"),eN(230,"m\xE1scara"),og(),eN(231," do campo de telefone."),og()()(),Sl(232,"blockquote")(233,"p"),eN(234,"Caso n\xE3o tenha valor o link "),Sl(235,"code"),eN(236,"Esqueceu a senha"),og(),eN(237," desaparece."),og()()()(),Sl(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),eN(242," p-requirements"),Wl(243,"br"),og()()(),Sl(244,"td",17)(245,"code",25),eN(246,"PoPageChangePasswordRequirement[]"),og()(),Sl(247,"td",19),eN(248,"-"),og(),Sl(249,"td",20)(250,"em")(251,"strong"),eN(252,"(opcional)"),og()(),Sl(253,"p"),eN(254,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),og()()(),Sl(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),eN(259," p-secondary-logo"),Wl(260,"br"),og()()(),Sl(261,"td",17)(262,"code",18),eN(263,"string"),og()(),Sl(264,"td",19),eN(265,"-"),og(),Sl(266,"td",20)(267,"em")(268,"strong"),eN(269,"(opcional)"),og()(),Sl(270,"p"),eN(271,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Sl(272,"tr",13)(273,"td",14)(274,"div",26)(275,"span",27),eN(276," (p-submit)"),Wl(277,"br"),og()()(),Sl(278,"td",17)(279,"code",28),eN(280,"EventEmitter"),og()(),Sl(281,"td",19),eN(282,"-"),og(),Sl(283,"td",20)(284,"em")(285,"strong"),eN(286,"(opcional)"),og()(),Sl(287,"p"),eN(288,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),og(),Sl(289,"p"),eN(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Sl(291,"code"),eN(292,"openConfirmation"),og(),eN(293,". Exemplo:"),og(),Sl(294,"pre")(295,"code"),eN(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),og()(),Sl(297,"blockquote")(298,"p"),eN(299,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(300,"code"),eN(301,"p-url-new-password"),og(),eN(302,"."),og()()()(),Sl(303,"tr",13)(304,"td",14)(305,"div",15)(306,"span",16),eN(307," p-token"),Wl(308,"br"),og()()(),Sl(309,"td",17)(310,"code",18),eN(311,"string"),og()(),Sl(312,"td",19),eN(313,"-"),og(),Sl(314,"td",20)(315,"em")(316,"strong"),eN(317,"(opcional)"),og()(),Sl(318,"p"),eN(319,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),og(),Sl(320,"blockquote")(321,"p"),eN(322,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),og()()()(),Sl(323,"tr",13)(324,"td",14)(325,"div",15)(326,"span",16),eN(327," p-url-back"),Wl(328,"br"),og()()(),Sl(329,"td",17)(330,"code",18),eN(331,"string"),og()(),Sl(332,"td",19)(333,"p")(334,"code"),eN(335,"/"),og()()(),Sl(336,"td",20)(337,"em")(338,"strong"),eN(339,"(opcional)"),og()(),Sl(340,"p"),eN(341,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),og(),Sl(342,"blockquote")(343,"p"),eN(344,"O bot\xE3o "),Sl(345,"code"),eN(346,"Voltar"),og(),eN(347," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),Sl(348,"code"),eN(349,"p-hide-current-password"),og(),eN(350,` for
falsa.`),og()()()(),Sl(351,"tr",13)(352,"td",14)(353,"div",15)(354,"span",16),eN(355," p-url-home"),Wl(356,"br"),og()()(),Sl(357,"td",17)(358,"code",18),eN(359,"string"),og()(),Sl(360,"td",19)(361,"p")(362,"code"),eN(363,"/"),og()()(),Sl(364,"td",20)(365,"em")(366,"strong"),eN(367,"(opcional)"),og()(),Sl(368,"p"),eN(369,"URL para a a\xE7\xE3o do bot\xE3o "),Sl(370,"code"),eN(371,"Entrar no sistema"),og(),eN(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Sl(373,"code"),eN(374,"openConfirmation"),og(),eN(375,"."),og()()(),Sl(376,"tr",13)(377,"td",14)(378,"div",15)(379,"span",16),eN(380," p-url-new-password"),Wl(381,"br"),og()()(),Sl(382,"td",17)(383,"code",18),eN(384,"string"),og()(),Sl(385,"td",19),eN(386,"-"),og(),Sl(387,"td",20)(388,"em")(389,"strong"),eN(390,"(opcional)"),og()(),Sl(391,"p"),eN(392,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),Sl(393,"code"),eN(394,"p-submit"),og(),eN(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),og(),Sl(396,"h3"),eN(397,"Processo"),og(),Sl(398,"p"),eN(399,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),Sl(400,"strong"),eN(401,"salvar"),og(),eN(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Sl(403,"code"),eN(404,"POST"),og(),eN(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),og(),Sl(406,"pre")(407,"code"),eN(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),og()(),Sl(409,"p"),eN(410,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(411,"code"),eN(412,"204"),og(),eN(413,"."),og(),Sl(414,"p"),eN(415,"Em caso de "),Sl(416,"strong"),eN(417,"sucesso"),og(),eN(418,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),og(),Sl(419,"blockquote")(420,"p"),eN(421,"O token ser\xE1 informado pela propriedade "),Sl(422,"code"),eN(423,"p-token"),og(),eN(424,"do componente ou por um "),Sl(425,"em"),eN(426,"query parameter"),og(),eN(427," na URL do template."),og()(),Sl(428,"p")(429,"em"),eN(430,"Processo finalizado."),og()(),Wl(431,"hr"),Sl(432,"h4"),eN(433,"Praticidade"),og(),Sl(434,"p"),eN(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Sl(436,"code"),eN(437,"po-page-change-password"),og(),eN(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Sl(439,"code"),eN(440,"/change-password"),og(),eN(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Sl(442,"pre")(443,"code"),eN(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),og()(),Sl(445,"p"),eN(446,"O metadado "),Sl(447,"code"),eN(448,"serviceApi"),og(),eN(449," deve ser a "),Sl(450,"strong"),eN(451,"url"),og(),eN(452," para requisi\xE7\xE3o dos recursos de troca de senha. E "),Sl(453,"code"),eN(454,"recovery"),og(),eN(455,` \xE9 a interface
`),Sl(456,"code"),eN(457,"PoPageChangePasswordRecovery"),og(),eN(458," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),og(),Sl(459,"blockquote")(460,"p"),eN(461,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()()(),Sl(462,"h3",9),eN(463,"M\xE9todos"),og(),Sl(464,"table",29)(465,"tr",13)(466,"th",30)(467,"div",15)(468,"h4")(469,"span",16),eN(470," openConfirmation "),og()()()()(),Sl(471,"tr",20)(472,"td",20)(473,"p"),eN(474,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),Sl(475,"code"),eN(476,"p-url-home"),og(),eN(477,""),og()()()(),Wl(478,"br"),Sl(479,"h3"),eN(480,"Interfaces"),og(),Sl(481,"h4",31)(482,"code",5),eN(483,"PoPageChangePasswordRecovery"),og()(),Sl(484,"div",2)(485,"p"),eN(486,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Sl(487,"code"),eN(488,"po-modal-password-recovery"),og(),eN(489,"."),og()(),Sl(490,"h4",9),eN(491,"Propriedades"),og(),Sl(492,"table",10)(493,"tr",11)(494,"th",12),eN(495,"Nome"),og(),Sl(496,"th",12),eN(497,"Tipo"),og(),Sl(498,"th",12),eN(499,"Descri\xE7\xE3o"),og()(),Sl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),eN(504," contactMail"),Wl(505,"br"),og()()(),Sl(506,"td",17)(507,"code",18),eN(508,"string"),og()(),Sl(509,"td",20)(510,"em")(511,"strong"),eN(512,"(opcional)"),og()(),Sl(513,"p"),eN(514,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Sl(515,"tr",13)(516,"td",14)(517,"div",15)(518,"span",16),eN(519," phoneMask"),Wl(520,"br"),og()()(),Sl(521,"td",17)(522,"code",18),eN(523,"string"),og()(),Sl(524,"td",20)(525,"em")(526,"strong"),eN(527,"(opcional)"),og()(),Sl(528,"p"),eN(529,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Sl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),eN(534," type"),Wl(535,"br"),og()()(),Sl(536,"td",17)(537,"code",32),eN(538,"PoModalPasswordRecoveryType"),og()(),Sl(539,"td",20)(540,"em")(541,"strong"),eN(542,"(opcional)"),og()(),Sl(543,"p"),eN(544,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Sl(545,"a",33),eN(546,"PoModalPasswordRecoveryType"),og(),eN(547,"."),og(),Sl(548,"blockquote")(549,"p"),eN(550,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Sl(551,"code"),eN(552,"PoModalPasswordRecoveryType.Email"),og(),eN(553,"."),og()()()(),Sl(554,"tr",13)(555,"td",14)(556,"div",15)(557,"span",16),eN(558," url"),Wl(559,"br"),og()()(),Sl(560,"td",17)(561,"code",18),eN(562,"string"),og()(),Sl(563,"td",20)(564,"p"),eN(565,"Endpoint usado pelo template "),Sl(566,"strong"),eN(567,"PoModalPasswordRecovery"),og(),eN(568," para requisi\xE7\xE3o do recurso."),og(),Sl(569,"blockquote")(570,"p"),eN(571,"Saiba mais em "),Sl(572,"a",33),eN(573,"PoModalPasswordRecovery"),og(),eN(574,"."),og()()()()(),Sl(575,"h4",31)(576,"code",5),eN(577,"PoPageChangePasswordRequirement"),og()(),Sl(578,"div",2)(579,"p"),eN(580,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),Sl(581,"code"),eN(582,"p-password-requirements"),og(),eN(583,"."),og()(),Sl(584,"h4",9),eN(585,"Propriedades"),og(),Sl(586,"table",10)(587,"tr",11)(588,"th",12),eN(589,"Nome"),og(),Sl(590,"th",12),eN(591,"Tipo"),og(),Sl(592,"th",12),eN(593,"Descri\xE7\xE3o"),og()(),Sl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),eN(598," requirement"),Wl(599,"br"),og()()(),Sl(600,"td",17)(601,"code",18),eN(602,"string"),og()(),Sl(603,"td",20)(604,"p"),eN(605,"Requisito."),og()()(),Sl(606,"tr",13)(607,"td",14)(608,"div",15)(609,"span",16),eN(610," status"),Wl(611,"br"),og()()(),Sl(612,"td",17)(613,"code",22),eN(614,"boolean "),og(),Sl(615,"code",23),eN(616," Function"),og()(),Sl(617,"td",20)(618,"p"),eN(619,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),og(),Sl(620,"p"),eN(621,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),og()()()(),Sl(622,"h4",31)(623,"code",5),eN(624,"PoPageChangePassword"),og()(),Sl(625,"div",2)(626,"p"),eN(627,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(628,"code"),eN(629,"po-page-change-password"),og(),eN(630,"."),og()(),Sl(631,"h4",9),eN(632,"Propriedades"),og(),Sl(633,"table",10)(634,"tr",11)(635,"th",12),eN(636,"Nome"),og(),Sl(637,"th",12),eN(638,"Tipo"),og(),Sl(639,"th",12),eN(640,"Descri\xE7\xE3o"),og()(),Sl(641,"tr",13)(642,"td",14)(643,"div",15)(644,"span",16),eN(645," currentPassword"),Wl(646,"br"),og()()(),Sl(647,"td",17)(648,"code",18),eN(649,"string"),og()(),Sl(650,"td",20)(651,"em")(652,"strong"),eN(653,"(opcional)"),og()(),Sl(654,"p"),eN(655,"Senha atual"),og()()(),Sl(656,"tr",13)(657,"td",14)(658,"div",15)(659,"span",16),eN(660," newPassword"),Wl(661,"br"),og()()(),Sl(662,"td",17)(663,"code",18),eN(664,"string"),og()(),Sl(665,"td",20)(666,"em")(667,"strong"),eN(668,"(opcional)"),og()(),Sl(669,"p"),eN(670,"Nova senha"),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-page-change-password-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),og()()()),i&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,we,Ee,fe,ye,_e,Me],encapsulation:2})}return a})();var Xe=[{path:"",component:qe}],Te=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[hL.forChild(Xe),hL]})}return a})();var zt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};