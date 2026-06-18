import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,n as nb,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c8 as Dde,bb as ta,aB as Dx,H as Il,q as Qx,R as og,aM as ww,aN as QA,J as zl,a1 as ft,A as Lp,aO as Ew,aP as e0,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,ar as Ux,au as dg,bs as uN,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}`;successMessage=`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(a){this.http=a;}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.restore();}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage;}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let a=this.getParam(),r=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",r,{headers:a,params:i}).subscribe();}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200";}static \u0275fac=function(r){return new(r||n)(C(nb))};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:false,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let u=Dx();Il(0,"h2"),Qx(1,"Process request with Http Interceptor"),og(),Il(2,"p",1),Qx(3,"Edit response object by server with pattern expected by Http Interceptor:"),og(),Il(4,"po-code-editor",2),ww("ngModelChange",function(p){return Xy(u),eN(i.requestMessage,p)||(i.requestMessage=p),Qy(p)}),og(),QA(),zl(5,"po-divider"),Il(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),ww("ngModelChange",function(p){return Xy(u),eN(i.status,p)||(i.status=p),Qy(p)}),ft("p-change",function(){return i.changeOption()}),og(),QA(),Il(10,"po-radio-group",5),ww("ngModelChange",function(p){return Xy(u),eN(i.headerParam,p)||(i.headerParam=p),Qy(p)}),og(),QA(),og(),Il(11,"div",6)(12,"po-button",7),ft("p-click",function(){return i.processRequest()}),og()(),Il(13,"div",6)(14,"po-button",8),ft("p-click",function(){return i.restore()}),og()()();}r&2&&(Lp(4),Ew("ngModel",i.requestMessage),e0(),Lp(5),Ew("ngModel",i.status),nw("p-options",i.statusOptions),e0(),Lp(),Ew("ngModel",i.headerParam),nw("p-options",i.headerParamOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,Dde,ta],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n}),Y=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Http Interceptor Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-http-interceptor-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<h2>Process request with Http Interceptor</h2>
<p class="po-text-color-neutral-dark-40">Edit response object by server with pattern expected by Http Interceptor:</p>

<po-code-editor [(ngModel)]="requestMessage" p-height="330" p-theme="vs-dark"> </po-code-editor>

<po-divider />

<form #requestForm="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="status"
      [(ngModel)]="status"
      p-label="Http Status"
      [p-options]="statusOptions"
      (p-change)="changeOption()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="headerParam"
      [(ngModel)]="headerParam"
      p-label="Disables Notifications"
      [p-options]="headerParamOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Process Request" (p-click)="processRequest()"> </po-button>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-http-interceptor-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sample-po-http-interceptor-labs',
  templateUrl: './sample-po-http-interceptor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHttpInterceptorLabsComponent implements OnDestroy, OnInit {
  headerParam: string;
  requestMessage: string;
  status: string;

  errorMessage = \`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}\`;

  successMessage = \`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}\`;

  readonly statusOptions: Array<PoRadioGroupOption> = [
    { label: '200 - Success', value: '200' },
    { label: '401 - Error', value: '401' }
  ];

  readonly headerParamOptions: Array<PoRadioGroupOption> = [
    { label: 'X-PO-No-Message', value: 'No-Message' },
    { label: 'X-PO-No-Error', value: 'No-Error' }
  ];

  private apiSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.restore();
  }

  changeOption() {
    this.requestMessage = this.status === '200' ? this.successMessage : this.errorMessage;
  }

  getParam() {
    return this.headerParam === 'No-Message'
      ? { 'X-PO-No-Message': 'true' }
      : this.headerParam === 'No-Error'
        ? { 'X-PO-No-Error': 'true' }
        : {};
  }

  processRequest() {
    const headers = this.getParam();
    const body = JSON.parse(this.requestMessage);
    const params = { status: this.status || '' };

    this.apiSubscription = this.http
      .post(\`https://po-sample-api.onrender.com/v1/messages\`, body, { headers, params })
      .subscribe();
  }

  restore() {
    this.headerParam = undefined;
    this.requestMessage = this.successMessage;
    this.status = '200';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-http-interceptor-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,oe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Q],encapsulation:2})}return n})();var Z=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:false,decls:184,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Services"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoHttpInterceptorService"),og()(),Il(10,"div",2)(11,"p"),Qx(12,"O "),Il(13,"em"),Qx(14,"interceptor"),og(),Qx(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),og(),Il(16,"p"),Qx(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),og(),Il(18,"h2"),Qx(19,"Configura\xE7\xE3o"),og(),Il(20,"p"),Qx(21,"Para o correto funcionamento do interceptor "),Il(22,"code"),Qx(23,"po-http-interceptor"),og(),Qx(24,", \xE9 necess\xE1rio configurar o "),Il(25,"code"),Qx(26,"HttpClient"),og(),Qx(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Il(28,"code"),Qx(29,"provideHttpClient(withInterceptorsFromDi())"),og(),Qx(30,"."),og(),Il(31,"h3"),Qx(32,"1) NgModule"),og(),Il(33,"p"),Qx(34,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),Il(35,"code"),Qx(36,"AppModule"),og(),Qx(37,"), configure o "),Il(38,"code"),Qx(39,"HttpClient"),og(),Qx(40,`,
como no exemplo abaixo:`),og(),Il(41,"pre")(42,"code"),Qx(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
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
`),og()(),Il(44,"p"),Qx(45,"Ao importar o m\xF3dulo "),Il(46,"code"),Qx(47,"PoModule"),og(),Qx(48," na aplica\xE7\xE3o, o "),Il(49,"code"),Qx(50,"po-http-interceptor"),og(),Qx(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),og(),Il(52,"h3"),Qx(53,"2) Standalone"),og(),Il(54,"p"),Qx(55,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Il(56,"code"),Qx(57,"src/app/app.config.ts"),og(),Qx(58,"), adicione os providers e configure o "),Il(59,"code"),Qx(60,"HttpClient"),og(),Qx(61,`,
como no exemplo abaixo:`),og(),Il(62,"pre")(63,"code"),Qx(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoHttpInterceptorModule } from '@po-ui/ng-components';

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([
      PoHttpInterceptorModule
    ]),
    ...
  ]
};
`),og()(),Il(65,"h2"),Qx(66,"Como usar"),og(),Il(67,"p"),Qx(68,"Ao realizar requisi\xE7\xF5es utilize o "),Il(69,"code"),Qx(70,"HttpClient"),og(),Qx(71,", conforme exemplo abaixo:"),og(),Il(72,"pre")(73,"code"),Qx(74,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users');
  }

  ...

}
`),og()(),Il(75,"p"),Qx(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),og(),Il(77,"h3"),Qx(78,"Estrutura das mensagens"),og(),Il(79,"h4"),Qx(80,"Mensagens de sucesso "),Il(81,"code"),Qx(82,"2xx"),og()(),Il(83,"p"),Qx(84,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),Il(85,"code"),Qx(86,"_messages"),og(),Qx(87,` no objeto de retorno.
Por exemplo:`),og(),Il(88,"pre")(89,"code"),Qx(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),og()(),Il(91,"h4"),Qx(92,"Mensagens de erro "),Il(93,"code"),Qx(94,"4xx"),og(),Qx(95," ou "),Il(96,"code"),Qx(97,"5xx"),og()(),Il(98,"p"),Qx(99,"Ao retornar erro, o objeto n\xE3o necessita ter "),Il(100,"code"),Qx(101,"_messages"),og(),Qx(102,", deve-se retornar o objeto diretamente:"),og(),Il(103,"pre")(104,"code"),Qx(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),og()(),Il(106,"p"),Qx(107,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),og(),Il(108,"ul")(109,"li")(110,"code"),Qx(111,"helpUrl"),og(),Qx(112,": link para a documenta\xE7\xE3o do erro;"),Il(113,"ul")(114,"li"),Qx(115,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),Il(116,"code"),Qx(117,"detailedMessage"),og(),Qx(118,"."),og()()(),Il(119,"li")(120,"code"),Qx(121,"type"),og(),Qx(122,": \xC9 poss\xEDvel informar "),Il(123,"code"),Qx(124,"error"),og(),Qx(125,", "),Il(126,"code"),Qx(127,"warning"),og(),Qx(128," e "),Il(129,"code"),Qx(130,"information"),og(),Qx(131,", sendo "),Il(132,"code"),Qx(133,"error"),og(),Qx(134," o valor padr\xE3o."),og(),Il(135,"li")(136,"code"),Qx(137,"details"),og(),Qx(138,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),og(),Il(139,"li")(140,"code"),Qx(141,"detailTitle"),og(),Qx(142,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),Il(143,"code"),Qx(144,"code - message"),og()()(),Il(145,"blockquote")(146,"p"),Qx(147,"Veja o "),Il(148,"a",6),Qx(149,"Guia de implementa\xE7\xE3o de APIs"),og(),Qx(150," para mais detalhes sobre a estrutura das mensagens."),og()(),Il(151,"h3"),Qx(152,"Cabe\xE7alho"),og(),Il(153,"p"),Qx(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Il(155,"code"),Qx(156,"true"),og(),Qx(157,":"),og(),Il(158,"ul")(159,"li")(160,"p")(161,"code"),Qx(162,"X-PO-No-Message"),og(),Qx(163,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),og()(),Il(164,"li")(165,"p")(166,"code"),Qx(167,"X-PO-No-Error"),og(),Qx(168,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),Il(169,"code"),Qx(170,"4xx"),og(),Qx(171," e "),Il(172,"code"),Qx(173,"5xx"),og(),Qx(174,"."),og()()(),Il(175,"pre")(176,"code"),Qx(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Il(178,"blockquote")(179,"p"),Qx(180,"Ap\xF3s a valida\xE7\xE3o no "),Il(181,"em"),Qx(182,"interceptor"),og(),Qx(183,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),og()()()());},encapsulation:2})}return n})();var $=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-http-interceptor-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-http-interceptor-labs-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Y,Z],encapsulation:2})}return n})();var re=[{path:"",component:$}],ee=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(re),uL]})}return n})();var _e=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};