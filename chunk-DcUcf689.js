import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,c as f,aW as Yp,by as Upe,F as Wl,O as rw,bM as mN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,aB as Ix,aM as Cw,aN as n0,bd as kx,aO as ww,aP as i0,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var pe=()=>({label:"Po Portal",link:"portal"}),ce=()=>({label:"Po Breadcrumb",link:"breadcrumb"}),se=(n,de)=>[n,de],ee=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-items"]],template:function(a,o){a&1&&Wl(0,"po-breadcrumb",0),a&2&&rw("p-items",mN(3,se,pN(1,pe),pN(2,ce)));},dependencies:[Upe],encapsulation:2,changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Breadcrumb Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-breadcrumb
  [p-items]="[
    { label: 'Po Portal', link: 'portal' },
    { label: 'Po Breadcrumb', link: 'breadcrumb' }
  ]"
>
</po-breadcrumb>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-breadcrumb-basic/sample-po-breadcrumb-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-breadcrumb-basic',
  templateUrl: './sample-po-breadcrumb-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoBreadcrumbBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-breadcrumb-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Se,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{poNotification=f(Yp);breadcrumbItem;breadcrumbItems;favoriteService;paramsService;ngOnInit(){this.restore();}addBreadcrumb(){let m=Object.assign({},this.breadcrumbItem);m.action=m.action?this.showAction.bind(this,m.action):void 0,this.breadcrumbItems=[...this.breadcrumbItems,m],this.restoreBreadcrumbItemForm();}restore(){this.favoriteService=void 0,this.paramsService=void 0,this.breadcrumbItems=[],this.restoreBreadcrumbItemForm();}restoreBreadcrumbItemForm(){this.breadcrumbItem={action:void 0,label:void 0,link:void 0};}showAction(m){this.poNotification.success(`Breadcrumb clicked: ${m}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs"]],standalone:false,decls:19,vars:11,consts:[["breadcrumbForm","ngForm"],["propertiesForm","ngForm"],[3,"p-favorite-service","p-items","p-params-service"],[1,"po-row"],["name","breadcrumbAction","p-label","Breadcrumb action",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLabel","p-label","Breadcrumb label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","breadcrumbLink","p-label","Breadcrumb link",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb",1,"po-md-3",3,"p-click","p-disabled"],["name","favoriteService","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/favorite","p-label","Favorite service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["name","paramsService","p-clean","","p-help","Ex.: { id: 14, user: 'dev.po' }","p-label","Params service",1,"po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let c=Ix();Wl(0,"po-breadcrumb",2)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Cw("ngModelChange",function(d){return Ky(c),oN(o.breadcrumbItem.action,d)||(o.breadcrumbItem.action=d),Xy(d)}),og(),n0(),Sl(6,"po-input",5),Cw("ngModelChange",function(d){return Ky(c),oN(o.breadcrumbItem.label,d)||(o.breadcrumbItem.label=d),Xy(d)}),og(),n0(),Sl(7,"po-input",6),Cw("ngModelChange",function(d){return Ky(c),oN(o.breadcrumbItem.link,d)||(o.breadcrumbItem.link=d),Xy(d)}),og(),n0(),og(),Sl(8,"div",3)(9,"po-button",7),ft("p-click",function(){return o.addBreadcrumb()}),og()()(),Wl(10,"po-divider"),Sl(11,"form",null,1)(13,"div",3)(14,"po-input",8),Cw("ngModelChange",function(d){return Ky(c),oN(o.favoriteService,d)||(o.favoriteService=d),Xy(d)}),og(),n0(),Sl(15,"po-input",9),Cw("ngModelChange",function(d){return Ky(c),oN(o.paramsService,d)||(o.paramsService=d),Xy(d)}),og(),n0(),og(),Wl(16,"po-divider"),Sl(17,"div",3)(18,"po-button",10),ft("p-click",function(){Ky(c);let d=kx(3),le=kx(12);return d.reset(),le.reset(),Xy(o.restore())}),og()()();}if(a&2){let c=kx(3);rw("p-favorite-service",o.favoriteService)("p-items",o.breadcrumbItems)("p-params-service",o.paramsService),Lp(5),ww("ngModel",o.breadcrumbItem.action),i0(),Lp(),ww("ngModel",o.breadcrumbItem.label),i0(),Lp(),ww("ngModel",o.breadcrumbItem.link),i0(),Lp(2),rw("p-disabled",c.invalid),Lp(5),ww("ngModel",o.favoriteService),rw("p-disabled",!o.breadcrumbItems?.length),i0(),Lp(),ww("ngModel",o.paramsService),rw("p-disabled",!o.breadcrumbItems?.length),i0();}},dependencies:[Q9,Z9,K9,wk,_k,Upe,Qt,mv,L3],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Breadcrumb Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-breadcrumb [p-favorite-service]="favoriteService" [p-items]="breadcrumbItems" [p-params-service]="paramsService">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-breadcrumb-labs/sample-po-breadcrumb-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-breadcrumb-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ve,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-breadcrumb-doc"]],standalone:false,decls:379,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumbItem[]"],["pan","",1,"docs-api-property-type","object"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoBreadcrumbModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-breadcrumb."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoBreadcrumbComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,`Este componente gera uma estrutura de navega\xE7\xE3o que apresenta ao usu\xE1rio a localiza\xE7\xE3o
da URL atual, exibindo as antecessoras conforme \xE9 realizado a navega\xE7\xE3o na aplica\xE7\xE3o.`),og(),Sl(15,"p"),rN(16,`Quando n\xE3o houver espa\xE7amento suficiente para exibi-l\xE1s, o componente se encarrega tamb\xE9m
de agrupar as URLs antecessoras, gerando assim um \xEDcone que permite a visualiza\xE7\xE3o em cascata.`),og(),Sl(17,"p"),rN(18,"Caso um endere\xE7o seja especificado na propriedade "),Sl(19,"code"),rN(20,"p-favorite-service"),og(),rN(21,`, o componente permite ao usu\xE1rio
favoritar a URL.`),og(),Sl(22,"p"),rN(23,`Havendo necessidade de incluir par\xE2metros na requisi\xE7\xE3o do servi\xE7o,
o componente disp\xF5e da propriedade `),Sl(24,"code"),rN(25,"p-params-service"),og(),rN(26," que recebe um objeto contendo as informa\xE7\xF5es."),og(),Sl(27,"h4"),rN(28,"Tokens customiz\xE1veis"),og(),Sl(29,"p"),rN(30,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(31,"blockquote")(32,"p"),rN(33,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(34,"a",6),rN(35,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(36,"."),og()(),Sl(37,"table")(38,"thead")(39,"tr")(40,"th"),rN(41,"Propriedade"),og(),Sl(42,"th"),rN(43,"Descri\xE7\xE3o"),og(),Sl(44,"th"),rN(45,"Valor Padr\xE3o"),og()()(),Sl(46,"tbody")(47,"tr")(48,"td")(49,"strong"),rN(50,"Default Values"),og()(),Wl(51,"td")(52,"td"),og(),Sl(53,"tr")(54,"td")(55,"code"),rN(56,"--font-family"),og()(),Sl(57,"td"),rN(58,"Fam\xEDlia tipogr\xE1fica usada \xA0"),og(),Sl(59,"td")(60,"code"),rN(61,"var(--font-family-theme)"),og()()(),Sl(62,"tr")(63,"td")(64,"code"),rN(65,"--color"),og()(),Sl(66,"td"),rN(67,"Cor principal do icone de lista"),og(),Sl(68,"td")(69,"code"),rN(70,"var(--color-action-default)"),og()()(),Sl(71,"tr")(72,"td")(73,"code"),rN(74,"--color-icon"),og()(),Sl(75,"td"),rN(76,'Cor do icone ">"'),og(),Sl(77,"td")(78,"code"),rN(79,"var(--color-neutral-mid-60)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),rN(83,"--color-current-page"),og(),rN(84," \xA0"),og(),Sl(85,"td"),rN(86,"Cor do pagina atual"),og(),Sl(87,"td")(88,"code"),rN(89,"var(--color-neutral-mid-60)"),og()()()()()(),Sl(90,"div",7)(91,"h4",8),rN(92,"Seletor"),og(),Sl(93,"pre",9),rN(94,`<po-breadcrumb
    p-favorite-service="string"
    p-items="PoBreadcrumbItem[]"
    p-params-service="object"
    p-size="string" >
</po-breadcrumb>
`),og()(),Sl(95,"h4",10),rN(96,"Propriedades"),og(),Sl(97,"table",11)(98,"tr",12)(99,"th",13),rN(100,"Nome"),og(),Sl(101,"th",13),rN(102,"Tipo"),og(),Sl(103,"th",13),rN(104,"Padr\xE3o"),og(),Sl(105,"th",13),rN(106,"Descri\xE7\xE3o"),og()(),Sl(107,"tr",14)(108,"td",15)(109,"div",16)(110,"span",17),rN(111," p-favorite-service"),Wl(112,"br"),og()()(),Sl(113,"td",18)(114,"code",19),rN(115,"string"),og()(),Sl(116,"td",20),rN(117,"-"),og(),Sl(118,"td",21)(119,"em")(120,"strong"),rN(121,"(opcional)"),og()(),Sl(122,"p"),rN(123,"Permite definir uma URL no componente "),Sl(124,"code"),rN(125,"po-breadcrumb"),og(),rN(126," para favoritar ou desfavoritar."),og(),Sl(127,"blockquote")(128,"p"),rN(129,"Para utilizar esta propriedade, o \xFAltimo "),Sl(130,"code"),rN(131,"PoBreadcrumbItem"),og(),rN(132," da lista de items da propriedade "),Sl(133,"code"),rN(134,"p-items"),og(),rN(135," deve ter um link informado."),og()(),Sl(136,"blockquote")(137,"p"),rN(138,"A API deve estar preparada para retornar um objeto no formato "),Sl(139,"code"),rN(140,"{ isFavorite: boolean }"),og(),rN(141,"."),og()(),Sl(142,"p"),rN(143,"Ao iniciar, o "),Sl(144,"code"),rN(145,"po-breadcrumb"),og(),rN(146," faz um GET na URL definida na propriedade "),Sl(147,"code"),rN(148,"p-favorite-service"),og(),rN(149,` e deve retornar a propriedade
`),Sl(150,"code"),rN(151,"{ isFavorite: boolean }"),og(),rN(152," do \xFAltimo "),Sl(153,"code"),rN(154,"PoBreadcrumbItem"),og(),rN(155," definido na lista de itens da propriedade "),Sl(156,"code"),rN(157,"p-items"),og(),rN(158,"."),og(),Sl(159,"p"),rN(160,"Ao clicar em favoritar ou desfavoritar o "),Sl(161,"code"),rN(162,"po-breadcrumb"),og(),rN(163," faz um POST com o link e a propriedade "),Sl(164,"code"),rN(165,"{ isFavorite: boolean }"),og(),rN(166,`
definidos no \xFAltimo item da propriedade `),Sl(167,"code"),rN(168,"p-items"),og(),rN(169,"."),og(),Sl(170,"blockquote")(171,"p"),rN(172,"Caso algum par\xE2metro seja definido na propriedade "),Sl(173,"code"),rN(174,"p-params-service"),og(),rN(175,`, o mesmo ser\xE1 enviado para a API e retornar\xE1
ap\xF3s fazer um GET ou POST.`),og()(),Sl(176,"p"),rN(177,"Exemplo de URL contendo o servi\xE7o de favoritar ou desfavoritar:"),og(),Sl(178,"pre")(179,"code"),rN(180,`https://po-ui.io/sample/api/favorite
`),og()(),Sl(181,"p"),rN(182,"Ao fazer o GET o "),Sl(183,"code"),rN(184,"po-breadcrumb"),og(),rN(185," concatena o link com a URL de servi\xE7o. Exemplo:"),og(),Sl(186,"pre")(187,"code"),rN(188,`GET http://<domain>/api/favorite?url=/example
`),og()(),Sl(189,"pre")(190,"code"),rN(191,`GET http://po.com.br/sample/api/favorite?url=/example
`),og()(),Sl(192,"pre")(193,"code"),rN(194,`POST
payload: { isFavorite: true, url: '/example' }
`),og()(),Sl(195,"p"),rN(196,"Caso possua par\xE2metros definidos na propriedade "),Sl(197,"code"),rN(198,"p-params-service"),og(),rN(199,":"),og(),Sl(200,"pre")(201,"code"),rN(202,`POST
payload: { isFavorite: true, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()(),Sl(203,"p"),rN(204,"Exemplos de retorno:"),og(),Sl(205,"pre")(206,"code"),rN(207,`{ isFavorite: true, url: "/example" }
`),og()(),Sl(208,"pre")(209,"code"),rN(210,`{ isFavorite: false, url: "/example" }
`),og()(),Sl(211,"pre")(212,"code"),rN(213,`{ isFavorite: false, url: "/example", params: "{ id: 14, user: 'dev.po' }" }
`),og()()()(),Sl(214,"tr",14)(215,"td",15)(216,"div",16)(217,"span",17),rN(218," p-items"),Wl(219,"br"),og()()(),Sl(220,"td",18)(221,"code",22),rN(222,"PoBreadcrumbItem[]"),og()(),Sl(223,"td",20),rN(224,"-"),og(),Sl(225,"td",21)(226,"p"),rN(227,"Lista de itens do "),Sl(228,"em"),rN(229,"breadcrumb"),og(),rN(230,"."),og(),Sl(231,"p")(232,"strong"),rN(233,"Exemplo:"),og()(),Sl(234,"pre")(235,"code"),rN(236,`{ label: 'Po Portal', link: 'portal' }
`),og()()()(),Sl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),rN(241," p-params-service"),Wl(242,"br"),og()()(),Sl(243,"td",18)(244,"code",23),rN(245,"object"),og()(),Sl(246,"td",20),rN(247,"-"),og(),Sl(248,"td",21)(249,"em")(250,"strong"),rN(251,"(opcional)"),og()(),Sl(252,"p"),rN(253,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),og()()(),Sl(254,"tr",14)(255,"td",15)(256,"div",16)(257,"span",17),rN(258," p-size"),Wl(259,"br"),og()()(),Sl(260,"td",18)(261,"code",19),rN(262,"string"),og()(),Sl(263,"td",20)(264,"p")(265,"code"),rN(266,"medium"),og()()(),Sl(267,"td",21)(268,"em")(269,"strong"),rN(270,"(opcional)"),og()(),Sl(271,"p"),rN(272,"Define o tamanho do componente entre "),Sl(273,"code"),rN(274,"small"),og(),rN(275," ou "),Sl(276,"code"),rN(277,"medium"),og(),rN(278,"."),og(),Sl(279,"blockquote")(280,"p"),rN(281,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(282,"code"),rN(283,"medium"),og(),rN(284,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(285,"a",24),rN(286,"po-theme"),og(),rN(287,"."),og()()()()(),Sl(288,"h3"),rN(289,"Interfaces"),og(),Sl(290,"h4",25)(291,"code",5),rN(292,"PoBreadcrumbItem"),og()(),Sl(293,"div",2)(294,"p"),rN(295,"Interface que define cada item do componente "),Sl(296,"strong"),rN(297,"po-breadcrumb"),og(),rN(298,"."),og()(),Sl(299,"h4",10),rN(300,"Propriedades"),og(),Sl(301,"table",11)(302,"tr",12)(303,"th",13),rN(304,"Nome"),og(),Sl(305,"th",13),rN(306,"Tipo"),og(),Sl(307,"th",13),rN(308,"Descri\xE7\xE3o"),og()(),Sl(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),rN(313," action"),Wl(314,"br"),og()()(),Sl(315,"td",18)(316,"code",26),rN(317,"Function"),og()(),Sl(318,"td",21)(319,"em")(320,"strong"),rN(321,"(opcional)"),og()(),Sl(322,"p"),rN(323,"A\xE7\xE3o executada ao clicar no item."),og(),Sl(324,"blockquote")(325,"p"),rN(326,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),Sl(327,"em"),rN(328,"label"),og(),rN(329," do item como par\xE2metro para execu\xE7\xE3o."),og()()()(),Sl(330,"tr",14)(331,"td",15)(332,"div",16)(333,"span",17),rN(334," label"),Wl(335,"br"),og()()(),Sl(336,"td",18)(337,"code",19),rN(338,"string"),og()(),Sl(339,"td",21)(340,"p"),rN(341,"R\xF3tulo do item."),og()()(),Sl(342,"tr",14)(343,"td",15)(344,"div",16)(345,"span",17),rN(346," link"),Wl(347,"br"),og()()(),Sl(348,"td",18)(349,"code",19),rN(350,"string"),og()(),Sl(351,"td",21)(352,"em")(353,"strong"),rN(354,"(opcional)"),og()(),Sl(355,"p"),rN(356,"Url do item."),og(),Sl(357,"blockquote")(358,"p"),rN(359,"Caso o item tamb\xE9m contenha uma "),Sl(360,"em"),rN(361,"action"),og(),rN(362," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),Sl(363,"em"),rN(364,"link"),og(),rN(365,"."),og()(),Sl(366,"blockquote")(367,"p"),rN(368,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Sl(369,"strong")(370,"a",27),rN(371,"Veja um exemplo de como criar rotas aqui"),og()(),rN(372,"."),og()(),Sl(373,"blockquote")(374,"p"),rN(375,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),Sl(376,"code"),rN(377,"p-favorite-service"),og(),rN(378," consiga favoritar ou desfavoritar."),og()()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Breadcrumb",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-breadcrumb-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-breadcrumb-basic-view")(6,"sample-po-breadcrumb-labs-view"),og()()()),a&2&&(rw("p-actions",o.actions),Lp(2),rw("p-active",o.activeTab==="doc"),Lp(2),rw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,ie,oe,ae],encapsulation:2,changeDetection:1})}return n})();var xe=[{path:"",component:re}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[mL.forChild(xe),mL]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,me]})}return n})();export{Ge as DocPoBreadcrumbModule};