import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,n as nb,dM as hR,bv as gb,aF as G9,aG as _k,b0 as Qt,b4 as L3,bH as M3,c9 as Ghe,F as Sl,H as Wl,J as og,aM as ww,aN as e0,a1 as ft,L as Lp,Q as nw,aO as Ew,aP as n0,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,ar as $x,au as dg,bs as fN,a3 as rNe,aT as nN}from'./main-WP3NAV7C.js';var V=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=false;screenLockHeaderParam=false;pendingRequests=0;url="";subscription;apiSubscription;constructor(a,i){this.http=a,this.httpRequestInterceptor=i;}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(a=>{this.pendingRequests=a;});}getRequest(){let a={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:a}).subscribe(()=>{});}static \u0275fac=function(i){return new(i||o)(w(nb),w(hR))};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:false,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,r){i&1&&(Sl(0,"div",0),Wl(1,"po-info",1),og(),Sl(2,"div",0)(3,"po-input",2),ww("ngModelChange",function(l){return nN(r.url,l)||(r.url=l),l}),og(),e0(),og(),Sl(4,"div",0)(5,"po-switch",3),ww("ngModelChange",function(l){return nN(r.countPendingRequestHeaderParam,l)||(r.countPendingRequestHeaderParam=l),l}),og(),e0(),Sl(6,"po-switch",4),ww("ngModelChange",function(l){return nN(r.screenLockHeaderParam,l)||(r.screenLockHeaderParam=l),l}),og(),e0(),og(),Sl(7,"div",0)(8,"po-button",5),ft("p-click",function(){return r.getRequest()}),og()()),i&2&&(Lp(),nw("p-value",r.pendingRequests),Lp(2),Ew("ngModel",r.url),n0(),Lp(2),Ew("ngModel",r.countPendingRequestHeaderParam),n0(),Lp(),Ew("ngModel",r.screenLockHeaderParam),n0(),Lp(2),nw("p-disabled",!r.url));},dependencies:[gb,G9,_k,Qt,L3,M3,Ghe],encapsulation:2,changeDetection:1})}return o})();var Y=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,r){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Http Request Interceptor Labs"),og(),Sl(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-http-request-interceptor-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-http-request-interceptor-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-http-request-interceptor-labs"),og(),Wl(23,"hr")),i&2&&(Lp(5),$x("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Y,r.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,V],encapsulation:2})}return o})();var G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:false,decls:97,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,r){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),og()(),Wl(4,"div",2),Sl(5,"h3",3),eN(6,"Services"),og(),Sl(7,"h4",4)(8,"code",5),eN(9,"PoHttpRequestInterceptorService"),og()(),Sl(10,"div",2)(11,"p"),eN(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),og(),Sl(13,"p"),eN(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),Sl(15,"code"),eN(16,"X-PO-No-Count-Pending-Requests"),og(),eN(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),Sl(18,"code"),eN(19,"'true'"),og(),eN(20,`,
por exemplo:`),og(),Sl(21,"pre")(22,"code"),eN(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Sl(24,"p"),eN(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),Sl(26,"code"),eN(27,"getCountPendingRequests"),og(),eN(28,` do
servi\xE7o `),Sl(29,"code"),eN(30,"PoHttpRequestInterceptorService"),og(),eN(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),Sl(32,"code"),eN(33,"HttpClient"),og(),eN(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),og(),Sl(35,"p"),eN(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),Sl(37,"em"),eN(38,"loading"),og(),eN(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),Sl(40,"code"),eN(41,"X-PO-Screen-Lock"),og(),eN(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),Sl(43,"code"),eN(44,"'true'"),og(),eN(45,"."),og(),Sl(46,"p"),eN(47,"por exemplo:"),og(),Sl(48,"pre")(49,"code"),eN(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Sl(51,"blockquote")(52,"p"),eN(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),og()(),Sl(54,"h2"),eN(55,"Configura\xE7\xE3o"),og(),Sl(56,"p"),eN(57,"\xC9 necess\xE1rio configurar o "),Sl(58,"code"),eN(59,"HttpClient"),og(),eN(60,` para utilizar os interceptors registrados via Dependency Injection (DI)
por meio da fun\xE7\xE3o `),Sl(61,"code"),eN(62,"provideHttpClient(withInterceptorsFromDi())"),og(),eN(63,"."),og(),Sl(64,"h3"),eN(65,"1) NgModule"),og(),Sl(66,"pre")(67,"code"),eN(68,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),og()(),Sl(69,"p"),eN(70,"Ao importar o m\xF3dulo "),Sl(71,"code"),eN(72,"PoModule"),og(),eN(73," na aplica\xE7\xE3o, o "),Sl(74,"code"),eN(75,"po-http-request-interceptor"),og(),eN(76,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),og(),Sl(77,"h3"),eN(78,"2) Standalone"),og(),Sl(79,"p"),eN(80,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Sl(81,"code"),eN(82,"src/app/app.config.ts"),og(),eN(83,"), adicione os providers e configure o "),Sl(84,"code"),eN(85,"HttpClient"),og(),eN(86,`,
como no exemplo abaixo:`),og(),Sl(87,"pre")(88,"code"),eN(89,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),og()(),Sl(90,"h2"),eN(91,"Como usar"),og(),Sl(92,"p"),eN(93,"Segue abaixo um exemplo de uso:"),og(),Sl(94,"pre")(95,"code"),eN(96,`import { HttpClient } from '@angular/common/http';

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
`),og()()()());},encapsulation:2})}return o})();var J=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,r){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-http-request-interceptor-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),Wl(5,"sample-po-http-request-interceptor-labs-view"),og()()()),i&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[rNe,Bme,qme,U,G],encapsulation:2})}return o})();var ee=[{path:"",component:J}],K=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[hL.forChild(ee),hL]})}return o})();var qe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,K]})}return o})();export{qe as DocPoHttpRequestInterceptorModule};