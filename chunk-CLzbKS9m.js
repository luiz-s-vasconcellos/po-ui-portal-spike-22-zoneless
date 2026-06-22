import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,F as Sl,z as eN,J as og,H as Wl,a3 as rNe,b8 as Bme,b9 as qme,a1 as ft,Q as nw,L as Lp}from'./main-WP3NAV7C.js';var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-media-query-doc"]],standalone:false,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do servi\xE7o "),Sl(7,"code"),eN(8,"po-media-query"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Services"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoMediaQueryService"),og()(),Sl(15,"div",2)(16,"p"),eN(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),og(),Sl(18,"p"),eN(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),og(),Sl(20,"p"),eN(21,"Exemplo de uso:"),og(),Sl(22,"p"),eN(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),og(),Sl(24,"pre")(25,"code"),eN(26,`import { PoMediaQueryService } from './po-media-query.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {

 // Definindo tokens personalizados para os breakpoints do grid system
 constructor(private poMediaQueryService: PoMediaQueryService) {}

 ngOnInit() {
   const tokens: PoMediaQueryTokens =  {
    sm: {
     gridSystemSmMaxWidth: '1024px' // Limite m\xE1ximo para telas pequenas (at\xE9 1024px)
     },
    md: {
     gridSystemMdMinWidth: '1025px', // Limite m\xEDnimo para telas m\xE9dias (a partir de 1025px)
     gridSystemMdMaxWidth: '1366px' // Limite m\xE1ximo para telas m\xE9dias (at\xE9 1366px)
    },
    lg: {
     gridSystemLgMinWidth: '1367px', // Limite m\xEDnimo para telas grandes (a partir de 1367px)
     gridSystemLgMaxWidth: '1465px' // Limite m\xE1ximo para telas grandes (at\xE9 1465px)
    },
    xl: {
     gridSystemXlMinWidth: '1466px' // Limite m\xEDnimo para telas extra grandes (a partir de 1466px)
    }
   };

   // Atualiza os tokens de media queries com os novos valores
   this.poMediaQueryService.updateTokens(tokens);
 }
}
`),og()()(),Sl(27,"h3",6),eN(28,"M\xE9todos"),og(),Sl(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),eN(35," updateTokens "),og()()()()(),Sl(36,"tr",12)(37,"td",12)(38,"p"),eN(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),og()()()(),Sl(40,"h5")(41,"b"),eN(42,"Par\xE2metros"),og()(),Sl(43,"table",13)(44,"tr",14)(45,"th",15),eN(46,"Nome"),og(),Sl(47,"th",15),eN(48,"Tipo"),og(),Sl(49,"th",15),eN(50,"Descri\xE7\xE3o"),og()(),Sl(51,"tr",8)(52,"td",16),eN(53," tokens"),og(),Sl(54,"td",17)(55,"code",18),eN(56," PoMediaQueryTokens "),og()(),Sl(57,"td",12)(58,"p"),eN(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),og()()()(),Wl(60,"br"),Sl(61,"h3"),eN(62,"Interfaces"),og(),Sl(63,"h4",19)(64,"code",5),eN(65,"PoMediaQueryTokens"),og()(),Sl(66,"div",2)(67,"p"),eN(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),og(),Sl(69,"blockquote")(70,"p"),eN(71,"Os tipos de valores aceitos para cada token s\xE3o: "),Sl(72,"code"),eN(73,"pixels"),og(),eN(74," , "),Sl(75,"code"),eN(76,"em"),og(),eN(77," e "),Sl(78,"code"),eN(79,"rem"),og(),eN(80,"."),og()()(),Sl(81,"h4",6),eN(82,"Propriedades"),og(),Sl(83,"table",13)(84,"tr",14)(85,"th",15),eN(86,"Nome"),og(),Sl(87,"th",15),eN(88,"Tipo"),og(),Sl(89,"th",15),eN(90,"Descri\xE7\xE3o"),og()(),Sl(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),eN(95," lg"),Wl(96,"br"),og()()(),Sl(97,"td",17)(98,"code",20),eN(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),og()(),Sl(100,"td",12)(101,"em")(102,"strong"),eN(103,"(opcional)"),og()(),Sl(104,"p"),eN(105,"Define a regra para lg."),og(),Sl(106,"p")(107,"code"),eN(108,"gridSystemLgMinWidth"),og(),eN(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(110,"code"),eN(111,"lg"),og(),eN(112,")."),og(),Sl(113,"p")(114,"code"),eN(115,"gridSystemLgMaxWidth"),og(),eN(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(117,"code"),eN(118,"lg"),og(),eN(119,")."),og(),Sl(120,"p"),eN(121,"Exemplo de uso:"),og(),Sl(122,"pre")(123,"code",21),eN(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),og()()()(),Sl(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),eN(129," md"),Wl(130,"br"),og()()(),Sl(131,"td",17)(132,"code",22),eN(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),og()(),Sl(134,"td",12)(135,"em")(136,"strong"),eN(137,"(opcional)"),og()(),Sl(138,"p"),eN(139,"Define a regra para md."),og(),Sl(140,"p")(141,"code"),eN(142,"gridSystemMdMinWidth"),og(),eN(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(144,"code"),eN(145,"md"),og(),eN(146,")."),og(),Sl(147,"p")(148,"code"),eN(149,"gridSystemMdMaxWidth"),og(),eN(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(151,"code"),eN(152,"md"),og(),eN(153,")."),og(),Sl(154,"p"),eN(155,"Exemplo de uso:"),og(),Sl(156,"pre")(157,"code",21),eN(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),og()()()(),Sl(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),eN(163," offset"),Wl(164,"br"),og()()(),Sl(165,"td",17)(166,"code",23),eN(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),og()(),Sl(168,"td",12)(169,"em")(170,"strong"),eN(171,"(opcional)"),og()(),Sl(172,"p"),eN(173,"Define a regra offset."),og(),Sl(174,"p")(175,"code"),eN(176,"gridSystemOffsetMinWidth"),og(),eN(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(178,"code"),eN(179,"offset"),og(),eN(180,")."),og(),Sl(181,"p")(182,"code"),eN(183,"gridSystemOffsetMaxWidth"),og(),eN(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(185,"code"),eN(186,"offset"),og(),eN(187,")."),og(),Sl(188,"p"),eN(189,"Exemplo de uso:"),og(),Sl(190,"pre")(191,"code",21),eN(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),og()()()(),Sl(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),eN(197," pull"),Wl(198,"br"),og()()(),Sl(199,"td",17)(200,"code",24),eN(201,`{ 'gridSystemPullMaxWidth': string;
}`),og()(),Sl(202,"td",12)(203,"em")(204,"strong"),eN(205,"(opcional)"),og()(),Sl(206,"p"),eN(207,"Define a regra pull."),og(),Sl(208,"p")(209,"code"),eN(210,"gridSystemPullMaxWidth"),og(),eN(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(212,"code"),eN(213,"pull"),og(),eN(214,")."),og(),Sl(215,"p"),eN(216,"Exemplo de uso:"),og(),Sl(217,"pre")(218,"code",21),eN(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),og()()()(),Sl(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),eN(224," sm"),Wl(225,"br"),og()()(),Sl(226,"td",17)(227,"code",25),eN(228,`{ 'gridSystemSmMaxWidth': string;
}`),og()(),Sl(229,"td",12)(230,"em")(231,"strong"),eN(232,"(opcional)"),og()(),Sl(233,"p"),eN(234,"Define a regra para sm."),og(),Sl(235,"p")(236,"code"),eN(237,"gridSystemSmMaxWidth"),og(),eN(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),Sl(239,"code"),eN(240,"sm"),og(),eN(241,")."),og(),Sl(242,"p"),eN(243,"Exemplo de uso:"),og(),Sl(244,"pre")(245,"code",21),eN(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),og()()()(),Sl(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),eN(251," xl"),Wl(252,"br"),og()()(),Sl(253,"td",17)(254,"code",26),eN(255,`{ 'gridSystemXlMinWidth': string;
}`),og()(),Sl(256,"td",12)(257,"em")(258,"strong"),eN(259,"(opcional)"),og()(),Sl(260,"p"),eN(261,"Define a regra xl."),og(),Sl(262,"p")(263,"code"),eN(264,"gridSystemXlMinWidth"),og(),eN(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),Sl(266,"code"),eN(267,"pull"),og(),eN(268,")."),og(),Sl(269,"p"),eN(270,"Exemplo de uso:"),og(),Sl(271,"pre")(272,"code",21),eN(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),og()()()()()());},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return d.changeTab("doc")}),Wl(3,"sample-po-media-query-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return d.changeTab("web")}),og()()()),a&2&&(nw("p-actions",d.actions),Lp(2),nw("p-active",d.activeTab==="doc"),Lp(2),nw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[rNe,Bme,qme,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[hL.forChild(q),hL]})}return n})();var R=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,W]})}return n})();export{R as DocPoMediaQueryModule};