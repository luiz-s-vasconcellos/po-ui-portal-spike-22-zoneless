import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,r as rb,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c8 as Tde,bb as ta,aB as Ix,C as Sl,y as rN,J as og,aM as Cw,aN as n0,F as Wl,a1 as ft,L as Lp,aO as ww,aP as i0,O as rw,an as SO,aH as Ka,b8 as Ume,b9 as $me,ar as Gx,au as dg,bs as gN,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Q=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
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
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(r){this.http=r;}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe();}ngOnInit(){this.restore();}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage;}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let r=this.getParam(),a=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",a,{headers:r,params:i}).subscribe();}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200";}static \u0275fac=function(a){return new(a||n)(w(rb))};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:false,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let u=Ix();Sl(0,"h2"),rN(1,"Process request with Http Interceptor"),og(),Sl(2,"p",1),rN(3,"Edit response object by server with pattern expected by Http Interceptor:"),og(),Sl(4,"po-code-editor",2),Cw("ngModelChange",function(p){return Ky(u),oN(i.requestMessage,p)||(i.requestMessage=p),Xy(p)}),og(),n0(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),Cw("ngModelChange",function(p){return Ky(u),oN(i.status,p)||(i.status=p),Xy(p)}),ft("p-change",function(){return i.changeOption()}),og(),n0(),Sl(10,"po-radio-group",5),Cw("ngModelChange",function(p){return Ky(u),oN(i.headerParam,p)||(i.headerParam=p),Xy(p)}),og(),n0(),og(),Sl(11,"div",6)(12,"po-button",7),ft("p-click",function(){return i.processRequest()}),og()(),Sl(13,"div",6)(14,"po-button",8),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(Lp(4),ww("ngModel",i.requestMessage),i0(),Lp(5),ww("ngModel",i.status),rw("p-options",i.statusOptions),i0(),Lp(),ww("ngModel",i.headerParam),rw("p-options",i.headerParamOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,Tde,ta],encapsulation:2,changeDetection:1})}return n})();var oe=n=>({"docs-sample-code-tabs":n}),Y=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Http Interceptor Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-http-interceptor-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<h2>Process request with Http Interceptor</h2>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-http-interceptor-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-http-interceptor-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,oe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Q],encapsulation:2,changeDetection:1})}return n})();var Z=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:false,decls:184,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),og()(),Wl(4,"div",2),Sl(5,"h3",3),rN(6,"Services"),og(),Sl(7,"h4",4)(8,"code",5),rN(9,"PoHttpInterceptorService"),og()(),Sl(10,"div",2)(11,"p"),rN(12,"O "),Sl(13,"em"),rN(14,"interceptor"),og(),rN(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),og(),Sl(16,"p"),rN(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),og(),Sl(18,"h2"),rN(19,"Configura\xE7\xE3o"),og(),Sl(20,"p"),rN(21,"Para o correto funcionamento do interceptor "),Sl(22,"code"),rN(23,"po-http-interceptor"),og(),rN(24,", \xE9 necess\xE1rio configurar o "),Sl(25,"code"),rN(26,"HttpClient"),og(),rN(27,` para utilizar
os interceptors registrados via Dependency Injection (DI) por meio da fun\xE7\xE3o `),Sl(28,"code"),rN(29,"provideHttpClient(withInterceptorsFromDi())"),og(),rN(30,"."),og(),Sl(31,"h3"),rN(32,"1) NgModule"),og(),Sl(33,"p"),rN(34,"No m\xF3dulo principal da aplica\xE7\xE3o (geralmente "),Sl(35,"code"),rN(36,"AppModule"),og(),rN(37,"), configure o "),Sl(38,"code"),rN(39,"HttpClient"),og(),rN(40,`,
como no exemplo abaixo:`),og(),Sl(41,"pre")(42,"code"),rN(43,`import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
`),og()(),Sl(44,"p"),rN(45,"Ao importar o m\xF3dulo "),Sl(46,"code"),rN(47,"PoModule"),og(),rN(48," na aplica\xE7\xE3o, o "),Sl(49,"code"),rN(50,"po-http-interceptor"),og(),rN(51,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),og(),Sl(52,"h3"),rN(53,"2) Standalone"),og(),Sl(54,"p"),rN(55,"No arquivo contendo a configura\xE7\xE3o da aplica\xE7\xE3o (geralmente "),Sl(56,"code"),rN(57,"src/app/app.config.ts"),og(),rN(58,"), adicione os providers e configure o "),Sl(59,"code"),rN(60,"HttpClient"),og(),rN(61,`,
como no exemplo abaixo:`),og(),Sl(62,"pre")(63,"code"),rN(64,`import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
`),og()(),Sl(65,"h2"),rN(66,"Como usar"),og(),Sl(67,"p"),rN(68,"Ao realizar requisi\xE7\xF5es utilize o "),Sl(69,"code"),rN(70,"HttpClient"),og(),rN(71,", conforme exemplo abaixo:"),og(),Sl(72,"pre")(73,"code"),rN(74,`import { HttpClient } from '@angular/common/http';

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
`),og()(),Sl(75,"p"),rN(76,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),og(),Sl(77,"h3"),rN(78,"Estrutura das mensagens"),og(),Sl(79,"h4"),rN(80,"Mensagens de sucesso "),Sl(81,"code"),rN(82,"2xx"),og()(),Sl(83,"p"),rN(84,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),Sl(85,"code"),rN(86,"_messages"),og(),rN(87,` no objeto de retorno.
Por exemplo:`),og(),Sl(88,"pre")(89,"code"),rN(90,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),og()(),Sl(91,"h4"),rN(92,"Mensagens de erro "),Sl(93,"code"),rN(94,"4xx"),og(),rN(95," ou "),Sl(96,"code"),rN(97,"5xx"),og()(),Sl(98,"p"),rN(99,"Ao retornar erro, o objeto n\xE3o necessita ter "),Sl(100,"code"),rN(101,"_messages"),og(),rN(102,", deve-se retornar o objeto diretamente:"),og(),Sl(103,"pre")(104,"code"),rN(105,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),og()(),Sl(106,"p"),rN(107,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),og(),Sl(108,"ul")(109,"li")(110,"code"),rN(111,"helpUrl"),og(),rN(112,": link para a documenta\xE7\xE3o do erro;"),Sl(113,"ul")(114,"li"),rN(115,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),Sl(116,"code"),rN(117,"detailedMessage"),og(),rN(118,"."),og()()(),Sl(119,"li")(120,"code"),rN(121,"type"),og(),rN(122,": \xC9 poss\xEDvel informar "),Sl(123,"code"),rN(124,"error"),og(),rN(125,", "),Sl(126,"code"),rN(127,"warning"),og(),rN(128," e "),Sl(129,"code"),rN(130,"information"),og(),rN(131,", sendo "),Sl(132,"code"),rN(133,"error"),og(),rN(134," o valor padr\xE3o."),og(),Sl(135,"li")(136,"code"),rN(137,"details"),og(),rN(138,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),og(),Sl(139,"li")(140,"code"),rN(141,"detailTitle"),og(),rN(142,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),Sl(143,"code"),rN(144,"code - message"),og()()(),Sl(145,"blockquote")(146,"p"),rN(147,"Veja o "),Sl(148,"a",6),rN(149,"Guia de implementa\xE7\xE3o de APIs"),og(),rN(150," para mais detalhes sobre a estrutura das mensagens."),og()(),Sl(151,"h3"),rN(152,"Cabe\xE7alho"),og(),Sl(153,"p"),rN(154,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),Sl(155,"code"),rN(156,"true"),og(),rN(157,":"),og(),Sl(158,"ul")(159,"li")(160,"p")(161,"code"),rN(162,"X-PO-No-Message"),og(),rN(163,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),og()(),Sl(164,"li")(165,"p")(166,"code"),rN(167,"X-PO-No-Error"),og(),rN(168,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),Sl(169,"code"),rN(170,"4xx"),og(),rN(171," e "),Sl(172,"code"),rN(173,"5xx"),og(),rN(174,"."),og()()(),Sl(175,"pre")(176,"code"),rN(177,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),og()(),Sl(178,"blockquote")(179,"p"),rN(180,"Ap\xF3s a valida\xE7\xE3o no "),Sl(181,"em"),rN(182,"interceptor"),og(),rN(183,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),og()()()());},encapsulation:2,changeDetection:1})}return n})();var $=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-http-interceptor-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-http-interceptor-labs-view"),og()()()),a&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,Y,Z],encapsulation:2,changeDetection:1})}return n})();var ae=[{path:"",component:$}],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[mL.forChild(ae),mL]})}return n})();var _e=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,ee]})}return n})();export{_e as DocPoHttpInterceptorModule};