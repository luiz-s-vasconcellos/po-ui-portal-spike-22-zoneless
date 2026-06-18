import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,by as Upe,J as zl,T as nw,bM as dN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var pe=()=>({label:"Po Portal",link:"portal"}),ce=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),se=(n,de)=>[n,de],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&zl(0,"po-breadcrumb",0),a&2&&nw("p-items",dN(3,se,lN(1,pe),lN(2,ce)));},dependencies:[Upe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Breadcrumb Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-breadcrumb-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ee],encapsulation:2})}return n})();var ne=(()=>{class n{poNotification=f(Yp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=Dx();zl(0,"po-breadcrumb",2)(1,"po-divider"),Il(2,"form",null,0)(4,"div",3)(5,"po-input",4),ww("ngModelChange",function(d){return Xy(c),eN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Qy(d)}),og(),QA(),Il(6,"po-input",5),ww("ngModelChange",function(d){return Xy(c),eN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Qy(d)}),og(),QA(),Il(7,"po-input",6),ww("ngModelChange",function(d){return Xy(c),eN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Qy(d)}),og(),QA(),og(),Il(8,"div",3)(9,"po-button",7),ft("p-click",function(){return o.addBreadcrumb()}),og()()(),zl(10,"po-divider"),Il(11,"form",null,1)(13,"div",3)(14,"po-input",8),ww("ngModelChange",function(d){return Xy(c),eN(o.favoriteService,d)||(o.favoriteService=d),Qy(d)}),og(),QA(),Il(15,"po-input",9),ww("ngModelChange",function(d){return Xy(c),eN(o.paramsService,d)||(o.paramsService=d),Qy(d)}),og(),QA(),og(),zl(16,"po-divider"),Il(17,"div",3)(18,"po-button",10),ft("p-click",function(){Xy(c);let d=Ax(3),le=Ax(12);return d.reset(),le.reset(),Qy(o.restore())}),og()()();}if(a&2){let c=Ax(3);nw("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Lp(5),Ew("ngModel",o.breadcrumbItem.action),e0(),Lp(),Ew("ngModel",o.breadcrumbItem.label),e0(),Lp(),Ew("ngModel",o.breadcrumbItem.link),e0(),Lp(2),nw("p-disabled",c.invalid),Lp(5),Ew("ngModel",o.favoriteService),nw("p-disabled",!o.breadcrumbItems?.length),e0(),Lp(),Ew("ngModel",o.paramsService),nw("p-disabled",!o.breadcrumbItems?.length),e0();}},dependencies:[G9,$9,z9,mk,hk,Upe,Qt,mv,O3],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Breadcrumb Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-breadcrumb-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ne],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-breadcrumb."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoBreadcrumbComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),og(),Il(15,"p"),Qx(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),og(),Il(17,"p"),Qx(18,"Caso um endere\xE7o seja especificado na propriedade "),Il(19,"code"),Qx(20,"p-favorite-service"),og(),Qx(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),og(),Il(22,"p"),Qx(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Il(24,"code"),Qx(25,"p-params-service"),og(),Qx(26," que recebe um objeto contendo as informa\xE7\xF5es."),og(),Il(27,"h4"),Qx(28,"Tokens customiz\xE1veis"),og(),Il(29,"p"),Qx(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(31,"blockquote")(32,"p"),Qx(33,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(34,"a",6),Qx(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(36,"."),og()(),Il(37,"table")(38,"thead")(39,"tr")(40,"th"),Qx(41,"Propriedade"),og(),Il(42,"th"),Qx(43,"Descri\xE7\xE3o"),og(),Il(44,"th"),Qx(45,"Valor Padr\xE3o"),og()()(),Il(46,"tbody")(47,"tr")(48,"td")(49,"strong"),Qx(50,"Default Values"),og()(),zl(51,"td")(52,"td"),og(),Il(53,"tr")(54,"td")(55,"code"),Qx(56,"--font-family"),og()(),Il(57,"td"),Qx(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),og(),Il(59,"td")(60,"code"),Qx(61,"var(--font-family-theme)"),og()()(),Il(62,"tr")(63,"td")(64,"code"),Qx(65,"--color"),og()(),Il(66,"td"),Qx(67,"Cor principal do icone de lista"),og(),Il(68,"td")(69,"code"),Qx(70,"var(--color-action-default)"),og()()(),Il(71,"tr")(72,"td")(73,"code"),Qx(74,"--color-icon"),og()(),Il(75,"td"),Qx(76,'Cor do icone ">"'),og(),Il(77,"td")(78,"code"),Qx(79,"var(--color-neutral-mid-60)"),og()()(),Il(80,"tr")(81,"td")(82,"code"),Qx(83,"--color-current-page"),og(),Qx(84," \xA0"),og(),Il(85,"td"),Qx(86,"Cor do pagina atual"),og(),Il(87,"td")(88,"code"),Qx(89,"var(--color-neutral-mid-60)"),og()()()()()(),Il(90,"div",7)(91,"h4",8),Qx(92,"Seletor"),og(),Il(93,"pre",9),Qx(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),og()(),Il(95,"h4",10),Qx(96,"Propriedades"),og(),Il(97,"table",11)(98,"tr",12)(99,"th",13),Qx(100,"Nome"),og(),Il(101,"th",13),Qx(102,"Tipo"),og(),Il(103,"th",13),Qx(104,"Padr\xE3o"),og(),Il(105,"th",13),Qx(106,"Descri\xE7\xE3o"),og()(),Il(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),Qx(111," p-favorite-service"),zl(112,"br"),og()()(),Il(113,"td",18)(114,"code",19),Qx(115,"string"),og()(),Il(116,"td",20),Qx(117,"-"),og(),Il(118,"td",21)(119,"em")(120,"strong"),Qx(121,"(opcional)"),og()(),Il(122,"p"),Qx(123,"Permite definir uma URL no componente "),Il(124,"code"),Qx(125,"po-breadcrumb"),og(),Qx(126," para favoritar ou desfavoritar."),og(),Il(127,"blockquote")(128,"p"),Qx(129,"Para utilizar esta propriedade, o \xFAltimo "),Il(130,"code"),Qx(131,"PoBreadcrumbItem"),og(),Qx(132," da lista de items da propriedade "),Il(133,"code"),Qx(134,"p-items"),og(),Qx(135," deve ter um link informado."),og()(),Il(136,"blockquote")(137,"p"),Qx(138,"A API deve estar preparada para retornar um objeto no formato "),Il(139,"code"),Qx(140,"{ isFavorite: boolean }"),og(),Qx(141,"."),og()(),Il(142,"p"),Qx(143,"Ao iniciar, o "),Il(144,"code"),Qx(145,"po-breadcrumb"),og(),Qx(146," faz um GET na URL definida na propriedade "),Il(147,"code"),Qx(148,"p-favorite-service"),og(),Qx(149,` e deve retornar a propriedade
`),Il(150,"code"),Qx(151,"{ isFavorite: boolean }"),og(),Qx(152," do \xFAltimo "),Il(153,"code"),Qx(154,"PoBreadcrumbItem"),og(),Qx(155," definido na lista de itens da propriedade "),Il(156,"code"),Qx(157,"p-items"),og(),Qx(158,"."),og(),Il(159,"p"),Qx(160,"Ao clicar em favoritar ou desfavoritar o "),Il(161,"code"),Qx(162,"po-breadcrumb"),og(),Qx(163," faz um POST com o link e a propriedade "),Il(164,"code"),Qx(165,"{ isFavorite: boolean }"),og(),Qx(166,`
definidos no \xFAltimo item da propriedade `),Il(167,"code"),Qx(168,"p-items"),og(),Qx(169,"."),og(),Il(170,"blockquote")(171,"p"),Qx(172,"Caso algum par\xE2metro seja definido na propriedade "),Il(173,"code"),Qx(174,"p-params-service"),og(),Qx(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),og()(),Il(176,"p"),Qx(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),og(),Il(178,"pre")(179,"code"),Qx(180,`https://po-ui.io/sample/api/favorite
`),og()(),Il(181,"p"),Qx(182,"Ao fazer o GET o "),Il(183,"code"),Qx(184,"po-breadcrumb"),og(),Qx(185," concatena o link com a URL de servi\xE7o. Exemplo:"),og(),Il(186,"pre")(187,"code"),Qx(188,`GET http://<domain>/api/favorite?url=/example
`),og()(),Il(189,"pre")(190,"code"),Qx(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),og()(),Il(192,"pre")(193,"code"),Qx(194,`POST
payload: { isFavorite: true, url: '/example' }
`),og()(),Il(195,"p"),Qx(196,"Caso possua par\xE2metros definidos na propriedade "),Il(197,"code"),Qx(198,"p-params-service"),og(),Qx(199,":"),og(),Il(200,"pre")(201,"code"),Qx(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()(),Il(203,"p"),Qx(204,"Exemplos de retorno:"),og(),Il(205,"pre")(206,"code"),Qx(207,`{ isFavorite: true, url: "/example" }
`),og()(),Il(208,"pre")(209,"code"),Qx(210,`{ isFavorite: false, url: "/example" }
`),og()(),Il(211,"pre")(212,"code"),Qx(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()()()(),Il(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),Qx(218," p-items"),zl(219,"br"),og()()(),Il(220,"td",18)(221,"code",22),Qx(222,"PoBreadcrumbItem[]"),og()(),Il(223,"td",20),Qx(224,"-"),og(),Il(225,"td",21)(226,"p"),Qx(227,"Lista de itens do "),Il(228,"em"),Qx(229,"breadcrumb"),og(),Qx(230,"."),og(),Il(231,"p")(232,"strong"),Qx(233,"Exemplo:"),og()(),Il(234,"pre")(235,"code"),Qx(236,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Il(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),Qx(241," p-params-service"),zl(242,"br"),og()()(),Il(243,"td",18)(244,"code",23),Qx(245,"object"),og()(),Il(246,"td",20),Qx(247,"-"),og(),Il(248,"td",21)(249,"em")(250,"strong"),Qx(251,"(opcional)"),og()(),Il(252,"p"),Qx(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()(),Il(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),Qx(258," p-size"),zl(259,"br"),og()()(),Il(260,"td",18)(261,"code",19),Qx(262,"string"),og()(),Il(263,"td",20)(264,"p")(265,"code"),Qx(266,"medium"),og()()(),Il(267,"td",21)(268,"em")(269,"strong"),Qx(270,"(opcional)"),og()(),Il(271,"p"),Qx(272,"Define o tamanho do componente entre "),Il(273,"code"),Qx(274,"small"),og(),Qx(275," ou "),Il(276,"code"),Qx(277,"medium"),og(),Qx(278,"."),og(),Il(279,"blockquote")(280,"p"),Qx(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(282,"code"),Qx(283,"medium"),og(),Qx(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(285,"a",24),Qx(286,"po-theme"),og(),Qx(287,"."),og()()()()(),Il(288,"h3"),Qx(289,"Interfaces"),og(),Il(290,"h4",25)(291,"code",5),Qx(292,"PoBreadcrumbItem"),og()(),Il(293,"div",2)(294,"p"),Qx(295,"Interface que define cada item do componente "),Il(296,"strong"),Qx(297,"po-breadcrumb"),og(),Qx(298,"."),og()(),Il(299,"h4",10),Qx(300,"Propriedades"),og(),Il(301,"table",11)(302,"tr",12)(303,"th",13),Qx(304,"Nome"),og(),Il(305,"th",13),Qx(306,"Tipo"),og(),Il(307,"th",13),Qx(308,"Descri\xE7\xE3o"),og()(),Il(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),Qx(313," action"),zl(314,"br"),og()()(),Il(315,"td",18)(316,"code",26),Qx(317,"Function"),og()(),Il(318,"td",21)(319,"em")(320,"strong"),Qx(321,"(opcional)"),og()(),Il(322,"p"),Qx(323,"A\xE7\xE3o executada ao clicar no item."),og(),Il(324,"blockquote")(325,"p"),Qx(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Il(327,"em"),Qx(328,"label"),og(),Qx(329," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Il(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),Qx(334," label"),zl(335,"br"),og()()(),Il(336,"td",18)(337,"code",19),Qx(338,"string"),og()(),Il(339,"td",21)(340,"p"),Qx(341,"R\xF3tulo do item."),og()()(),Il(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),Qx(346," link"),zl(347,"br"),og()()(),Il(348,"td",18)(349,"code",19),Qx(350,"string"),og()(),Il(351,"td",21)(352,"em")(353,"strong"),Qx(354,"(opcional)"),og()(),Il(355,"p"),Qx(356,"Url do item."),og(),Il(357,"blockquote")(358,"p"),Qx(359,"Caso o item tamb\xE9m contenha uma "),Il(360,"em"),Qx(361,"action"),og(),Qx(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Il(363,"em"),Qx(364,"link"),og(),Qx(365,"."),og()(),Il(366,"blockquote")(367,"p"),Qx(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Il(369,"strong")(370,"a",27),Qx(371,"Veja um exemplo de como criar rotas aqui"),og()(),Qx(372,"."),og()(),Il(373,"blockquote")(374,"p"),Qx(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Il(376,"code"),Qx(377,"p-favorite-service"),og(),Qx(378," consiga favoritar ou desfavoritar."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-breadcrumb-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,ie,oe,ae],encapsulation:2})}return n})();var xe=[{path:"",component:re}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(xe),uL]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,me]})}return n})();export{Ge as DocPoBreadcrumbModule};