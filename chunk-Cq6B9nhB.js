import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,by as Bpe,H as Wl,Q as nw,bM as hN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var pe=()=>({label:"Po Portal",link:"portal"}),ce=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),se=(n,de)=>[n,de],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&Wl(0,"po-breadcrumb",0),a&2&&nw("p-items",hN(3,se,dN(1,pe),dN(2,ce)));},dependencies:[Bpe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Breadcrumb Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-breadcrumb-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Se,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ee],encapsulation:2})}return n})();var ne=(()=>{class n{poNotification=f(Yp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=wx();Wl(0,"po-breadcrumb",2)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),ww("ngModelChange",function(d){return Ky(c),nN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Xy(d)}),og(),e0(),Sl(6,"po-input",5),ww("ngModelChange",function(d){return Ky(c),nN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Xy(d)}),og(),e0(),Sl(7,"po-input",6),ww("ngModelChange",function(d){return Ky(c),nN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Xy(d)}),og(),e0(),og(),Sl(8,"div",3)(9,"po-button",7),ft("p-click",function(){return o.addBreadcrumb()}),og()()(),Wl(10,"po-divider"),Sl(11,"form",null,1)(13,"div",3)(14,"po-input",8),ww("ngModelChange",function(d){return Ky(c),nN(o.favoriteService,d)||(o.favoriteService=d),Xy(d)}),og(),e0(),Sl(15,"po-input",9),ww("ngModelChange",function(d){return Ky(c),nN(o.paramsService,d)||(o.paramsService=d),Xy(d)}),og(),e0(),og(),Wl(16,"po-divider"),Sl(17,"div",3)(18,"po-button",10),ft("p-click",function(){Ky(c);let d=Nx(3),le=Nx(12);return d.reset(),le.reset(),Xy(o.restore())}),og()()();}if(a&2){let c=Nx(3);nw("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Lp(5),Ew("ngModel",o.breadcrumbItem.action),n0(),Lp(),Ew("ngModel",o.breadcrumbItem.label),n0(),Lp(),Ew("ngModel",o.breadcrumbItem.link),n0(),Lp(2),nw("p-disabled",c.invalid),Lp(5),Ew("ngModel",o.favoriteService),nw("p-disabled",!o.breadcrumbItems?.length),n0(),Lp(),Ew("ngModel",o.paramsService),nw("p-disabled",!o.breadcrumbItems?.length),n0();}},dependencies:[Z9,G9,q9,_k,mk,Bpe,Qt,mv,L3],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Breadcrumb Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
</po-breadcrumb>

<po-divider />

<form #breadcrumbForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="breadcrumbAction" [(ngModel)]="breadcrumbItem.action" p-label="Breadcrumb action">
    </po-input>

    <po-input
      class="po-md-4"
      name="breadcrumbLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-label="Breadcrumb label"
      p-required
    >
    </po-input>

    <po-input class="po-md-4" name="breadcrumbLink" [(ngModel)]="breadcrumbItem.link" p-label="Breadcrumb link">
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Add breadcrumb"
      [p-disabled]="breadcrumbForm.invalid"
      (p-click)="addBreadcrumb()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="favoriteService"
      [(ngModel)]="favoriteService"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/favorite"
      p-label="Favorite service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="paramsService"
      [(ngModel)]="paramsService"
      p-clean
      p-help="Ex.: { id: 14, user: 'dev.po' }"
      p-label="Params service"
      [p-disabled]="!breadcrumbItems?.length"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="breadcrumbForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumbItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-breadcrumb-labs',
  templateUrl: './sample-po-breadcrumb-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbItems: Array<PoBreadcrumbItem>;
  favoriteService: string;
  paramsService: object;

  ngOnInit() {
    this.restore();
  }

  addBreadcrumb() {
    const breadcrumbItem: PoBreadcrumbItem = Object.assign({}, this.breadcrumbItem);
    breadcrumbItem.action = breadcrumbItem.action ? this.showAction.bind(this, breadcrumbItem.action) : undefined;

    this.breadcrumbItems = [...this.breadcrumbItems, breadcrumbItem];

    this.restoreBreadcrumbItemForm();
  }

  restore() {
    this.favoriteService = undefined;
    this.paramsService = undefined;
    this.breadcrumbItems = [];
    this.restoreBreadcrumbItemForm();
  }

  restoreBreadcrumbItemForm() {
    this.breadcrumbItem = { action: undefined, label: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Breadcrumb clicked: \${action}\`);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-breadcrumb-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ve,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ne],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-breadcrumb."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoBreadcrumbComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),og(),Sl(15,"p"),eN(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),og(),Sl(17,"p"),eN(18,"Caso um endere\xE7o seja especificado na propriedade "),Sl(19,"code"),eN(20,"p-favorite-service"),og(),eN(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),og(),Sl(22,"p"),eN(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Sl(24,"code"),eN(25,"p-params-service"),og(),eN(26," que recebe um objeto contendo as informa\xE7\xF5es."),og(),Sl(27,"h4"),eN(28,"Tokens customiz\xE1veis"),og(),Sl(29,"p"),eN(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(31,"blockquote")(32,"p"),eN(33,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(34,"a",6),eN(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(36,"."),og()(),Sl(37,"table")(38,"thead")(39,"tr")(40,"th"),eN(41,"Propriedade"),og(),Sl(42,"th"),eN(43,"Descri\xE7\xE3o"),og(),Sl(44,"th"),eN(45,"Valor Padr\xE3o"),og()()(),Sl(46,"tbody")(47,"tr")(48,"td")(49,"strong"),eN(50,"Default Values"),og()(),Wl(51,"td")(52,"td"),og(),Sl(53,"tr")(54,"td")(55,"code"),eN(56,"--font-family"),og()(),Sl(57,"td"),eN(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),og(),Sl(59,"td")(60,"code"),eN(61,"var(--font-family-theme)"),og()()(),Sl(62,"tr")(63,"td")(64,"code"),eN(65,"--color"),og()(),Sl(66,"td"),eN(67,"Cor principal do icone de lista"),og(),Sl(68,"td")(69,"code"),eN(70,"var(--color-action-default)"),og()()(),Sl(71,"tr")(72,"td")(73,"code"),eN(74,"--color-icon"),og()(),Sl(75,"td"),eN(76,'Cor do icone ">"'),og(),Sl(77,"td")(78,"code"),eN(79,"var(--color-neutral-mid-60)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),eN(83,"--color-current-page"),og(),eN(84," \xA0"),og(),Sl(85,"td"),eN(86,"Cor do pagina atual"),og(),Sl(87,"td")(88,"code"),eN(89,"var(--color-neutral-mid-60)"),og()()()()()(),Sl(90,"div",7)(91,"h4",8),eN(92,"Seletor"),og(),Sl(93,"pre",9),eN(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),og()(),Sl(95,"h4",10),eN(96,"Propriedades"),og(),Sl(97,"table",11)(98,"tr",12)(99,"th",13),eN(100,"Nome"),og(),Sl(101,"th",13),eN(102,"Tipo"),og(),Sl(103,"th",13),eN(104,"Padr\xE3o"),og(),Sl(105,"th",13),eN(106,"Descri\xE7\xE3o"),og()(),Sl(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),eN(111," p-favorite-service"),Wl(112,"br"),og()()(),Sl(113,"td",18)(114,"code",19),eN(115,"string"),og()(),Sl(116,"td",20),eN(117,"-"),og(),Sl(118,"td",21)(119,"em")(120,"strong"),eN(121,"(opcional)"),og()(),Sl(122,"p"),eN(123,"Permite definir uma URL no componente "),Sl(124,"code"),eN(125,"po-breadcrumb"),og(),eN(126," para favoritar ou desfavoritar."),og(),Sl(127,"blockquote")(128,"p"),eN(129,"Para utilizar esta propriedade, o \xFAltimo "),Sl(130,"code"),eN(131,"PoBreadcrumbItem"),og(),eN(132," da lista de items da propriedade "),Sl(133,"code"),eN(134,"p-items"),og(),eN(135," deve ter um link informado."),og()(),Sl(136,"blockquote")(137,"p"),eN(138,"A API deve estar preparada para retornar um objeto no formato "),Sl(139,"code"),eN(140,"{ isFavorite: boolean }"),og(),eN(141,"."),og()(),Sl(142,"p"),eN(143,"Ao iniciar, o "),Sl(144,"code"),eN(145,"po-breadcrumb"),og(),eN(146," faz um GET na URL definida na propriedade "),Sl(147,"code"),eN(148,"p-favorite-service"),og(),eN(149,` e deve retornar a propriedade
`),Sl(150,"code"),eN(151,"{ isFavorite: boolean }"),og(),eN(152," do \xFAltimo "),Sl(153,"code"),eN(154,"PoBreadcrumbItem"),og(),eN(155," definido na lista de itens da propriedade "),Sl(156,"code"),eN(157,"p-items"),og(),eN(158,"."),og(),Sl(159,"p"),eN(160,"Ao clicar em favoritar ou desfavoritar o "),Sl(161,"code"),eN(162,"po-breadcrumb"),og(),eN(163," faz um POST com o link e a propriedade "),Sl(164,"code"),eN(165,"{ isFavorite: boolean }"),og(),eN(166,`
definidos no \xFAltimo item da propriedade `),Sl(167,"code"),eN(168,"p-items"),og(),eN(169,"."),og(),Sl(170,"blockquote")(171,"p"),eN(172,"Caso algum par\xE2metro seja definido na propriedade "),Sl(173,"code"),eN(174,"p-params-service"),og(),eN(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),og()(),Sl(176,"p"),eN(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),og(),Sl(178,"pre")(179,"code"),eN(180,`https://po-ui.io/sample/api/favorite
`),og()(),Sl(181,"p"),eN(182,"Ao fazer o GET o "),Sl(183,"code"),eN(184,"po-breadcrumb"),og(),eN(185," concatena o link com a URL de servi\xE7o. Exemplo:"),og(),Sl(186,"pre")(187,"code"),eN(188,`GET http://<domain>/api/favorite?url=/example
`),og()(),Sl(189,"pre")(190,"code"),eN(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),og()(),Sl(192,"pre")(193,"code"),eN(194,`POST
payload: { isFavorite: true, url: '/example' }
`),og()(),Sl(195,"p"),eN(196,"Caso possua par\xE2metros definidos na propriedade "),Sl(197,"code"),eN(198,"p-params-service"),og(),eN(199,":"),og(),Sl(200,"pre")(201,"code"),eN(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()(),Sl(203,"p"),eN(204,"Exemplos de retorno:"),og(),Sl(205,"pre")(206,"code"),eN(207,`{ isFavorite: true, url: "/example" }
`),og()(),Sl(208,"pre")(209,"code"),eN(210,`{ isFavorite: false, url: "/example" }
`),og()(),Sl(211,"pre")(212,"code"),eN(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()()()(),Sl(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),eN(218," p-items"),Wl(219,"br"),og()()(),Sl(220,"td",18)(221,"code",22),eN(222,"PoBreadcrumbItem[]"),og()(),Sl(223,"td",20),eN(224,"-"),og(),Sl(225,"td",21)(226,"p"),eN(227,"Lista de itens do "),Sl(228,"em"),eN(229,"breadcrumb"),og(),eN(230,"."),og(),Sl(231,"p")(232,"strong"),eN(233,"Exemplo:"),og()(),Sl(234,"pre")(235,"code"),eN(236,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),eN(241," p-params-service"),Wl(242,"br"),og()()(),Sl(243,"td",18)(244,"code",23),eN(245,"object"),og()(),Sl(246,"td",20),eN(247,"-"),og(),Sl(248,"td",21)(249,"em")(250,"strong"),eN(251,"(opcional)"),og()(),Sl(252,"p"),eN(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()(),Sl(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),eN(258," p-size"),Wl(259,"br"),og()()(),Sl(260,"td",18)(261,"code",19),eN(262,"string"),og()(),Sl(263,"td",20)(264,"p")(265,"code"),eN(266,"medium"),og()()(),Sl(267,"td",21)(268,"em")(269,"strong"),eN(270,"(opcional)"),og()(),Sl(271,"p"),eN(272,"Define o tamanho do componente entre "),Sl(273,"code"),eN(274,"small"),og(),eN(275," ou "),Sl(276,"code"),eN(277,"medium"),og(),eN(278,"."),og(),Sl(279,"blockquote")(280,"p"),eN(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(282,"code"),eN(283,"medium"),og(),eN(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(285,"a",24),eN(286,"po-theme"),og(),eN(287,"."),og()()()()(),Sl(288,"h3"),eN(289,"Interfaces"),og(),Sl(290,"h4",25)(291,"code",5),eN(292,"PoBreadcrumbItem"),og()(),Sl(293,"div",2)(294,"p"),eN(295,"Interface que define cada item do componente "),Sl(296,"strong"),eN(297,"po-breadcrumb"),og(),eN(298,"."),og()(),Sl(299,"h4",10),eN(300,"Propriedades"),og(),Sl(301,"table",11)(302,"tr",12)(303,"th",13),eN(304,"Nome"),og(),Sl(305,"th",13),eN(306,"Tipo"),og(),Sl(307,"th",13),eN(308,"Descri\xE7\xE3o"),og()(),Sl(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),eN(313," action"),Wl(314,"br"),og()()(),Sl(315,"td",18)(316,"code",26),eN(317,"Function"),og()(),Sl(318,"td",21)(319,"em")(320,"strong"),eN(321,"(opcional)"),og()(),Sl(322,"p"),eN(323,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(324,"blockquote")(325,"p"),eN(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(327,"em"),eN(328,"label"),og(),eN(329," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),eN(334," label"),Wl(335,"br"),og()()(),Sl(336,"td",18)(337,"code",19),eN(338,"string"),og()(),Sl(339,"td",21)(340,"p"),eN(341,"R\xF3tulo do item."),og()()(),Sl(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),eN(346," link"),Wl(347,"br"),og()()(),Sl(348,"td",18)(349,"code",19),eN(350,"string"),og()(),Sl(351,"td",21)(352,"em")(353,"strong"),eN(354,"(opcional)"),og()(),Sl(355,"p"),eN(356,"Url do item."),og(),Sl(357,"blockquote")(358,"p"),eN(359,"Caso o item tamb\xE9m contenha uma "),Sl(360,"em"),eN(361,"action"),og(),eN(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(363,"em"),eN(364,"link"),og(),eN(365,"."),og()(),Sl(366,"blockquote")(367,"p"),eN(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(369,"strong")(370,"a",27),eN(371,"Veja um exemplo de como criar rotas aqui"),og()(),eN(372,"."),og()(),Sl(373,"blockquote")(374,"p"),eN(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(376,"code"),eN(377,"p-favorite-service"),og(),eN(378," consiga favoritar ou desfavoritar."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-breadcrumb-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,ie,oe,ae],encapsulation:2})}return n})();var xe=[{path:"",component:re}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[hL.forChild(xe),hL]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,me]})}return n})();export{Ge as DocPoBreadcrumbModule};