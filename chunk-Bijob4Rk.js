import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,n as nb,dN as fR,bv as gb,aF as $9,aG as mk,b0 as Qt,b4 as F3,bH as k3,c9 as Yhe,H as Il,J as zl,R as og,aM as ww,aN as QA,a1 as ft,A as Lp,T as nw,aO as Ew,aP as e0,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,ar as Ux,au as dg,bs as uN,a3 as cNe,aT as eN}from'./main-FCMDZGSJ.js';var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=false;screenLockHeaderParam=false;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i;}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a;});}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{});}static \u0275fac=function(i){return new(i||o)(C(nb),C(fR))};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:false,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(Il(0,"div",0),zl(1,"po-info",1),og(),Il(2,"div",0)(3,"po-input",2),ww("ngModelChange",function(l){return eN(r.url,l)||(r.url=l),l}),og(),QA(),og(),Il(4,"div",0)(5,"po-switch",3),ww("ngModelChange",function(l){return eN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),og(),QA(),Il(6,"po-switch",4),ww("ngModelChange",function(l){return eN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),og(),QA(),og(),Il(7,"div",0)(8,"po-button",5),ft("p-click",function(){return r.getRequest()}),og()()),i&2&&(Lp(),nw("p-value",r.pendingRequests),Lp(2),Ew("ngModel",r.url),e0(),Lp(2),Ew("ngModel",r.countPendingRequestHeaderParam),e0(),Lp(),Ew("ngModel",r.screenLockHeaderParam),e0(),Lp(2),nw("p-disabled",!r.url));},dependencies:[gb,$9,mk,Qt,F3,k3,Yhe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Http Request Interceptor Labs"),og(),Il(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-http-request-interceptor-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-info class="po-lg-12" p-label="Pending Requests" [p-value]="pendingRequests"> </po-info>
</div>

<div class="po-row">
  <po-input
    class="po-lg-6"
    name="url"
    [(ngModel)]="url"
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="URL"
    p-required
  >
  </po-input>
</div>

<div class="po-row">
  <po-switch
    class="po-lg-6"
    name="countPendingRequestHeaderParam"
    [(ngModel)]="countPendingRequestHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-No-Count-Pending-Requests"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>

  <po-switch
    class="po-lg-6"
    name="screenLockHeaderParam"
    [(ngModel)]="screenLockHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-Screen-Lock"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>
</div>

<div class="po-row">
  <po-button class="po-md-4" p-label="Get request" [p-disabled]="!url" (p-click)="getRequest()"> </po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-http-request-interceptor-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { PoHttpRequestInterceptorService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-http-request-interceptor-labs',
  templateUrl: './sample-po-http-request-interceptor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy {
  countPendingRequestHeaderParam = false;
  screenLockHeaderParam = false;

  pendingRequests: number = 0;
  url: string = '';

  private subscription: Subscription;
  private apiSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private httpRequestInterceptor: PoHttpRequestInterceptorService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
      this.pendingRequests = data;
    });
  }

  getRequest() {
    const headers = {
      'X-PO-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),
      'X-PO-Screen-Lock': this.screenLockHeaderParam.toString()
    };

    this.apiSubscription = this.http.get(this.url, { headers: headers }).subscribe(() => {});
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-http-request-interceptor-labs"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Y,r.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,V],encapsulation:2})}return o})();var G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:false,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Services"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoHttpRequestInterceptorService"),og()(),Il(10,"div",2)(11,"p"),Qx(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),og(),Il(13,"p"),Qx(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Il(15,"code"),Qx(16,"X-PO-No-Count-Pending-Requests"),og(),Qx(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),Il(18,"code"),Qx(19,"'true'"),og(),Qx(20,`,
por exemplo:`),og(),Il(21,"pre")(22,"code"),Qx(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Il(24,"p"),Qx(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),Il(26,"code"),Qx(27,"getCountPendingRequests"),og(),Qx(28,` do
servi\xE7o `),Il(29,"code"),Qx(30,"PoHttpRequestInterceptorService"),og(),Qx(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),Il(32,"code"),Qx(33,"HttpClient"),og(),Qx(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),og(),Il(35,"p"),Qx(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),Il(37,"em"),Qx(38,"loading"),og(),Qx(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Il(40,"code"),Qx(41,"X-PO-Screen-Lock"),og(),Qx(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),Il(43,"code"),Qx(44,"'true'"),og(),Qx(45,"."),og(),Il(46,"p"),Qx(47,"por exemplo:"),og(),Il(48,"pre")(49,"code"),Qx(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Il(51,"blockquote")(52,"p"),Qx(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),og()(),Il(54,"h2"),Qx(55,"Configura\xE7\xE3o"),og(),Il(56,"p"),Qx(57,"\xC9 necess\xE1rio configurar o "),Il(58,"code"),Qx(59,"HttpClient"),og(),Qx(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Il(61,"code"),Qx(62,"provideHttpClient(withInterceptorsFromDi())"),og(),Qx(63,"."),og(),Il(64,"h3"),Qx(65,"1) NgModule"),og(),Il(66,"pre")(67,"code"),Qx(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),og()(),Il(69,"p"),Qx(70,"Ao importar o m\xF3dulo "),Il(71,"code"),Qx(72,"PoModule"),og(),Qx(73," na aplica\xE7\xE3o, o "),Il(74,"code"),Qx(75,"po-http-request-interceptor"),og(),Qx(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),og(),Il(77,"h3"),Qx(78,"2) Standalone"),og(),Il(79,"p"),Qx(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Il(81,"code"),Qx(82,"src/app/app.config.ts"),og(),Qx(83,"), adicione os providers e configure o "),Il(84,"code"),Qx(85,"HttpClient"),og(),Qx(86,`,
como no exemplo abaixo:`),og(),Il(87,"pre")(88,"code"),Qx(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoHttpRequestModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpRequestModule
    ]),
    ...
  ]
};
`),og()(),Il(90,"h2"),Qx(91,"Como usar"),og(),Il(92,"p"),Qx(93,"Segue abaixo um exemplo de uso:"),og(),Il(94,"pre")(95,"code"),Qx(96,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
 providedIn: 'root'
})
export class CustomersService {

 headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 pendingRequests: number = 0;
 subscription: Subscription;

 constructor(
   private http: HttpClient,
   private httpRequestInterceptor: PoHttpRequestInterceptorService) { }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

 ngOnInit(): void {
   this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
     this.pendingRequests = data;
   });
 }

 getCustomers() {
   return this.http.get(\`/customers/1\`, { headers: headers });
 }

 ...

}
`),og()()()());},encapsulation:2})}return o})();var J=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),zl(3,"sample-po-http-request-interceptor-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),zl(5,"sample-po-http-request-interceptor-labs-view"),og()()()),i&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[cNe,qme,Yme,U,G],encapsulation:2})}return o})();var ee=[{path:"",component:J}],K=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[uL.forChild(ee),uL]})}return o})();var qe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,K]})}return o})();export{qe as DocPoHttpRequestInterceptorModule};