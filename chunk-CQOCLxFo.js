import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,ca as bt,cb as xa,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,c8 as wde,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,cc as Fa,aq as dx,at as fx,a3 as rNe,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ie=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Wl(0,"po-page-blocked-user");},dependencies:[xa],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Blocked User Basic"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-blocked-user></po-page-blocked-user>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-basic"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Pe,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ie],encapsulation:2})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=bt.None;secondaryLogo;url;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];reasonOptions=[{label:"Default",value:bt.None},{label:"Expired Password",value:bt.ExpiredPassword},{label:"Exceeded Attempts",value:bt.ExceededAttempts}];ngOnInit(){this.restore();}changeLiterals(){try{this.customParams=JSON.parse(this.params);}catch(p){this.customParams=void 0;}}restore(){this.componentsSize="medium",this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=bt.None,this.secondaryLogo="",this.url=void 0;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:false,decls:15,vars:18,consts:[["f","ngForm"],[3,"p-components-size","p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","4","p-label","Reason Screen Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'{"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Secondary logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(i,a){if(i&1){let u=wx();Wl(0,"po-page-blocked-user",1)(1,"po-divider",2),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),ww("ngModelChange",function(r){return Ky(u),nN(a.contactPhone,r)||(a.contactPhone=r),Xy(r)}),og(),e0(),Sl(6,"po-input",5),ww("ngModelChange",function(r){return Ky(u),nN(a.contactMail,r)||(a.contactMail=r),Xy(r)}),og(),e0(),Sl(7,"po-radio-group",6),ww("ngModelChange",function(r){return Ky(u),nN(a.reason,r)||(a.reason=r),Xy(r)}),og(),e0(),Sl(8,"po-input",7),ww("ngModelChange",function(r){return Ky(u),nN(a.params,r)||(a.params=r),Xy(r)}),ft("p-change",function(){return a.changeLiterals()}),og(),e0(),Sl(9,"po-input",8),ww("ngModelChange",function(r){return Ky(u),nN(a.url,r)||(a.url=r),Xy(r)}),og(),e0(),Sl(10,"po-input",9),ww("ngModelChange",function(r){return Ky(u),nN(a.logo,r)||(a.logo=r),Xy(r)}),og(),e0(),Sl(11,"po-input",10),ww("ngModelChange",function(r){return Ky(u),nN(a.secondaryLogo,r)||(a.secondaryLogo=r),Xy(r)}),og(),e0(),Sl(12,"po-radio-group",11),ww("ngModelChange",function(r){return Ky(u),nN(a.componentsSize,r)||(a.componentsSize=r),Xy(r)}),og(),e0(),og(),Sl(13,"div",3)(14,"po-button",12),ft("p-click",function(){return a.restore()}),og()()();}i&2&&(nw("p-components-size",a.componentsSize)("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),Lp(5),Ew("ngModel",a.contactPhone),n0(),Lp(),Ew("ngModel",a.contactMail),n0(),Lp(),Ew("ngModel",a.reason),nw("p-options",a.reasonOptions),n0(),Lp(),Ew("ngModel",a.params),n0(),Lp(),Ew("ngModel",a.url),n0(),Lp(),Ew("ngModel",a.logo),n0(),Lp(),Ew("ngModel",a.secondaryLogo),n0(),Lp(),Ew("ngModel",a.componentsSize),nw("p-options",a.componentsSizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,wde,xa],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Blocked User Labs"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-blocked-user
  [p-components-size]="componentsSize"
  [p-contact-email]="contactMail"
  [p-contact-phone]="contactPhone"
  [p-logo]="logo"
  [p-params]="customParams"
  [p-reason]="reason"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="url"
>
</po-page-blocked-user>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="contactPhone"
      [(ngModel)]="contactPhone"
      p-clean
      p-help="11 99999 9999"
      p-label="Contact Phone"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="contactMail"
      [(ngModel)]="contactMail"
      p-help="user@po-ui.com.br"
      p-label="Contact Mail"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="reason"
      [(ngModel)]="reason"
      p-columns="4"
      p-label="Reason Screen Type"
      [p-options]="reasonOptions"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="params"
      [(ngModel)]="params"
      p-clean
      p-help='{"attempts": 20, "days": 20, "hours": 20}'
      p-label="Custom Params"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-help="https://po-ui.io/home" p-label="URL Link">
    </po-input>

    <po-input
      class="po-md-6"
      name="logo"
      [(ngModel)]="logo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Logo"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="secondaryLogo"
      [(ngModel)]="secondaryLogo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Secondary logo"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { PoPageBlockedUserReason, PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-labs',
  templateUrl: './sample-po-page-blocked-user-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserLabsComponent implements OnInit {
  componentsSize: string;
  contactMail: string;
  contactPhone: string;
  customParams: PoPageBlockedUserReasonParams;
  params: string;
  logo: string;
  reason: PoPageBlockedUserReason = PoPageBlockedUserReason.None;
  secondaryLogo: string;
  url: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly reasonOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoPageBlockedUserReason.None },
    { label: 'Expired Password', value: PoPageBlockedUserReason.ExpiredPassword },
    { label: 'Exceeded Attempts', value: PoPageBlockedUserReason.ExceededAttempts }
  ];

  ngOnInit() {
    this.restore();
  }

  changeLiterals() {
    try {
      this.customParams = JSON.parse(this.params);
    } catch {
      this.customParams = undefined;
    }
  }

  restore() {
    this.componentsSize = 'medium';
    this.contactMail = undefined;
    this.contactPhone = undefined;
    this.customParams = { attempts: 5, days: 90, hours: 24 };
    this.params = '';
    this.logo = '';
    this.reason = PoPageBlockedUserReason.None;
    this.secondaryLogo = '';
    this.url = undefined;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-labs"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return n})();function ke(n,z){if(n&1){let p=wx();Sl(0,"po-page-login",2),ft("p-login-submit",function(){Ky(p);let a=Mx();return Xy(a.checkLogin())}),og();}}function xe(n,z){if(n&1&&Wl(0,"po-page-blocked-user",1),n&2){let p=Mx();nw("p-params",p.params);}}var re=(()=>{class n{blocked=false;params={attempts:1,hours:48};checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(dx(0,ke,1,0,"po-page-login",0),dx(1,xe,1,1,"po-page-blocked-user",1)),i&2&&(fx(a.blocked?-1:0),Lp(),fx(a.blocked?1:-1));},dependencies:[xa,Fa],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Blocked User Exceeded Attempts"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),og(),Sl(13,"pre",7),eN(14,`@if (!blocked) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (blocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="exceededAttempts"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
    [p-params]="params"
  >
  </po-page-blocked-user>
}
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-exceeded-attempts',
  templateUrl: './sample-po-page-blocked-user-exceeded-attempts.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserExceededAttemptsComponent {
  blocked = false;
  params: PoPageBlockedUserReasonParams = { attempts: 1, hours: 48 };

  checkLogin() {
    this.blocked = true;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-exceeded-attempts"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Be,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return n})();function _e(n,z){if(n&1){let p=wx();Sl(0,"po-page-login",2),ft("p-login-submit",function(){Ky(p);let a=Mx();return Xy(a.checkLogin())}),og();}}function we(n,z){n&1&&Wl(0,"po-page-blocked-user",1);}var de=(()=>{class n{blocked=false;checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(dx(0,_e,1,0,"po-page-login",0),dx(1,we,1,0,"po-page-blocked-user",1)),i&2&&(fx(a.blocked?-1:0),Lp(),fx(a.blocked?1:-1));},dependencies:[xa,Fa],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Blocked User Expired Password"),og(),Sl(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),og(),Sl(13,"pre",7),eN(14,`@if (!blocked) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (blocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="expiredPassword"
    p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
  >
  </po-page-blocked-user>
}
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-expired-password',
  templateUrl: './sample-po-page-blocked-user-expired-password.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserExpiredPasswordComponent {
  blocked = false;

  checkLogin() {
    this.blocked = true;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-expired-password"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ue,a.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return n})();var ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do template do po-page-blocked-user."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoPageBlockedUserComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-page-blocked-user"),og(),eN(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),og(),Sl(18,"p"),eN(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),og(),Sl(20,"p"),eN(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),og(),Sl(22,"p"),eN(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(24,"em"),eN(25,"assets"),og(),eN(26," no arquivo "),Sl(27,"strong"),eN(28,"angular.json"),og(),eN(29," da aplica\xE7\xE3o na seguinte ordem:"),og(),Sl(30,"pre")(31,"code"),eN(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()(),Wl(33,"hr"),Sl(34,"h4"),eN(35,"Praticidade"),og(),Sl(36,"p"),eN(37,"O "),Sl(38,"code"),eN(39,"po-page-blocked-user"),og(),eN(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Sl(41,"code"),eN(42,"/access-denied"),og(),eN(43,":"),og(),Sl(44,"pre")(45,"code"),eN(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'access-denied', component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.po@po-ui.com',
      contactPhone: '0800 1234 000',
      reason: PoPageBlockedUserReason.ExpiredPassword,
      urlBack: '/home'
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),og()(),Sl(47,"blockquote")(48,"p"),eN(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),og()()(),Sl(50,"div",6)(51,"h4",7),eN(52,"Seletor"),og(),Sl(53,"pre",8),eN(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),og()(),Sl(55,"h4",9),eN(56,"Propriedades"),og(),Sl(57,"table",10)(58,"tr",11)(59,"th",12),eN(60,"Nome"),og(),Sl(61,"th",12),eN(62,"Tipo"),og(),Sl(63,"th",12),eN(64,"Padr\xE3o"),og(),Sl(65,"th",12),eN(66,"Descri\xE7\xE3o"),og()(),Sl(67,"tr",13)(68,"td",14)(69,"div",15)(70,"span",16),eN(71," p-components-size"),Wl(72,"br"),og()()(),Sl(73,"td",17)(74,"code",18),eN(75,"string"),og()(),Sl(76,"td",19)(77,"p")(78,"code"),eN(79,"medium"),og()()(),Sl(80,"td",20)(81,"em")(82,"strong"),eN(83,"(opcional)"),og()(),Sl(84,"p"),eN(85,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(86,"ul")(87,"li")(88,"code"),eN(89,"small"),og(),eN(90,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(91,"li")(92,"code"),eN(93,"medium"),og(),eN(94,": aplica a medida medium de cada componente."),og()(),Sl(95,"blockquote")(96,"p"),eN(97,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(98,"code"),eN(99,"medium"),og(),eN(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(101,"a",21),eN(102,"po-theme"),og(),eN(103,"."),og()()()(),Sl(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),eN(108," p-contact-email"),Wl(109,"br"),og()()(),Sl(110,"td",17)(111,"code",18),eN(112,"string"),og()(),Sl(113,"td",19),eN(114,"-"),og(),Sl(115,"td",20)(116,"em")(117,"strong"),eN(118,"(opcional)"),og()(),Sl(119,"p"),eN(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),og()()(),Sl(121,"tr",13)(122,"td",14)(123,"div",15)(124,"span",16),eN(125," p-contact-phone"),Wl(126,"br"),og()()(),Sl(127,"td",17)(128,"code",18),eN(129,"string"),og()(),Sl(130,"td",19),eN(131,"-"),og(),Sl(132,"td",20)(133,"em")(134,"strong"),eN(135,"(opcional)"),og()(),Sl(136,"p"),eN(137,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),og(),Sl(138,"blockquote")(139,"p"),eN(140,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),og()()()(),Sl(141,"tr",13)(142,"td",14)(143,"div",15)(144,"span",16),eN(145," p-logo"),Wl(146,"br"),og()()(),Sl(147,"td",17)(148,"code",18),eN(149,"string"),og()(),Sl(150,"td",19),eN(151,"-"),og(),Sl(152,"td",20)(153,"em")(154,"strong"),eN(155,"(opcional)"),og()(),Sl(156,"p"),eN(157,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),og()()(),Sl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),eN(162," p-params"),Wl(163,"br"),og()()(),Sl(164,"td",17)(165,"code",22),eN(166,"PoPageBlockedUserReasonParams"),og()(),Sl(167,"td",19),eN(168,"-"),og(),Sl(169,"td",20)(170,"em")(171,"strong"),eN(172,"(opcional)"),og()(),Sl(173,"p"),eN(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),og(),Sl(175,"pre")(176,"code"),eN(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),og()(),Sl(178,"blockquote")(179,"p"),eN(180,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),og()(),Sl(181,"blockquote")(182,"p"),eN(183,"Veja os par\xE2metros customiz\xE1veis na interface "),Sl(184,"code"),eN(185,"PoPageBlockedUserReasonParams"),og(),eN(186,"."),og()()()(),Sl(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),eN(191," p-reason"),Wl(192,"br"),og()()(),Sl(193,"td",17)(194,"code",23),eN(195,"PoPageBlockedUserReason"),og()(),Sl(196,"td",19)(197,"p")(198,"code"),eN(199,"PoPageBlockedUserReason.None"),og()()(),Sl(200,"td",20)(201,"em")(202,"strong"),eN(203,"(opcional)"),og()(),Sl(204,"p"),eN(205,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),og(),Sl(206,"blockquote")(207,"p"),eN(208,"Veja os valores v\xE1lidos no "),Sl(209,"em"),eN(210,"enum"),og(),Sl(211,"code"),eN(212,"PoPageBlockedUserReason"),og(),eN(213,"."),og()()()(),Sl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),eN(218," p-secondary-logo"),Wl(219,"br"),og()()(),Sl(220,"td",17)(221,"code",18),eN(222,"string"),og()(),Sl(223,"td",19),eN(224,"-"),og(),Sl(225,"td",20)(226,"em")(227,"strong"),eN(228,"(opcional)"),og()(),Sl(229,"p"),eN(230,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Sl(231,"tr",13)(232,"td",14)(233,"div",15)(234,"span",16),eN(235," p-url-back"),Wl(236,"br"),og()()(),Sl(237,"td",17)(238,"code",18),eN(239,"string"),og()(),Sl(240,"td",19)(241,"p")(242,"code"),eN(243,"/"),og()()(),Sl(244,"td",20)(245,"em")(246,"strong"),eN(247,"(opcional)"),og()(),Sl(248,"p"),eN(249,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),og()()()(),Sl(250,"h3"),eN(251,"Interfaces"),og(),Sl(252,"h4",24)(253,"code",5),eN(254,"PoPageBlockedUserReasonParams"),og()(),Sl(255,"div",2)(256,"p"),eN(257,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),Sl(258,"code"),eN(259,"po-page-blocked-user"),og(),eN(260,"."),og()(),Sl(261,"h4",9),eN(262,"Propriedades"),og(),Sl(263,"table",10)(264,"tr",11)(265,"th",12),eN(266,"Nome"),og(),Sl(267,"th",12),eN(268,"Tipo"),og(),Sl(269,"th",12),eN(270,"Descri\xE7\xE3o"),og()(),Sl(271,"tr",13)(272,"td",14)(273,"div",15)(274,"span",16),eN(275," attempts"),Wl(276,"br"),og()()(),Sl(277,"td",17)(278,"code",25),eN(279,"number"),og()(),Sl(280,"td",20)(281,"em")(282,"strong"),eN(283,"(opcional)"),og()(),Sl(284,"p"),eN(285,"Quantidade m\xE1xima de tentativas."),og()()(),Sl(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),eN(290," days"),Wl(291,"br"),og()()(),Sl(292,"td",17)(293,"code",25),eN(294,"number"),og()(),Sl(295,"td",20)(296,"em")(297,"strong"),eN(298,"(opcional)"),og()(),Sl(299,"p"),eN(300,"Quantidade de dias para expira\xE7\xE3o de senha."),og()()(),Sl(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),eN(305," hours"),Wl(306,"br"),og()()(),Sl(307,"td",17)(308,"code",25),eN(309,"number"),og()(),Sl(310,"td",20)(311,"em")(312,"strong"),eN(313,"(opcional)"),og()(),Sl(314,"p"),eN(315,"Horas que o sistema permanecer\xE1 bloqueado."),og()()()(),Sl(316,"h3"),eN(317,"Enums"),og(),Sl(318,"h4",4)(319,"code",5),eN(320,"PoPageBlockedUserReason"),og()(),Sl(321,"div",2)(322,"p")(323,"em"),eN(324,"Enum"),og(),eN(325," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),og()(),Sl(326,"h4",9),eN(327,"Propriedades"),og(),Sl(328,"table",10)(329,"tr",11)(330,"th",12),eN(331,"Nome"),og(),Sl(332,"th",12),eN(333,"Descri\xE7\xE3o"),og()(),Sl(334,"tr",13)(335,"td",14)(336,"div",15)(337,"span",16),eN(338," None"),Wl(339,"br"),og()()(),Sl(340,"td",20)(341,"p"),eN(342,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),og()()(),Sl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),eN(347," ExceededAttempts"),Wl(348,"br"),og()()(),Sl(349,"td",20)(350,"p"),eN(351,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),og()()(),Sl(352,"tr",13)(353,"td",14)(354,"div",15)(355,"span",16),eN(356," ExpiredPassword"),Wl(357,"br"),og()()(),Sl(358,"td",20)(359,"p"),eN(360,"Defini\xE7\xE3o para senha expirada."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ge=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return a.changeTab("doc")}),Wl(3,"sample-po-page-blocked-user-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return a.changeTab("web")}),Wl(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),og()()()),i&2&&(nw("p-actions",a.actions),Lp(2),nw("p-active",a.activeTab==="doc"),Lp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[rNe,Bme,qme,le,se,me,ce,ue],encapsulation:2})}return n})();var De=[{path:"",component:ge}],he=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[hL.forChild(De),hL]})}return n})();var rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[sr,he]})}return n})();export{rt as DocPoPageBlockedUserModule};