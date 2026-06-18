import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,H as Il,q as Qx,R as og,J as zl,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-FCMDZGSJ.js';var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-media-query-doc"]],standalone:false,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do servi\xE7o "),Il(7,"code"),Qx(8,"po-media-query"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Services"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoMediaQueryService"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),og(),Il(18,"p"),Qx(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),og(),Il(20,"p"),Qx(21,"Exemplo de uso:"),og(),Il(22,"p"),Qx(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),og(),Il(24,"pre")(25,"code"),Qx(26,`import { PoMediaQueryService } from './po-media-query.service';

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
`),og()()(),Il(27,"h3",6),Qx(28,"M\xE9todos"),og(),Il(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),Qx(35," updateTokens "),og()()()()(),Il(36,"tr",12)(37,"td",12)(38,"p"),Qx(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),og()()()(),Il(40,"h5")(41,"b"),Qx(42,"Par\xE2metros"),og()(),Il(43,"table",13)(44,"tr",14)(45,"th",15),Qx(46,"Nome"),og(),Il(47,"th",15),Qx(48,"Tipo"),og(),Il(49,"th",15),Qx(50,"Descri\xE7\xE3o"),og()(),Il(51,"tr",8)(52,"td",16),Qx(53," tokens"),og(),Il(54,"td",17)(55,"code",18),Qx(56," PoMediaQueryTokens "),og()(),Il(57,"td",12)(58,"p"),Qx(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),og()()()(),zl(60,"br"),Il(61,"h3"),Qx(62,"Interfaces"),og(),Il(63,"h4",19)(64,"code",5),Qx(65,"PoMediaQueryTokens"),og()(),Il(66,"div",2)(67,"p"),Qx(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),og(),Il(69,"blockquote")(70,"p"),Qx(71,"Os tipos de valores aceitos para cada token s\xE3o: "),Il(72,"code"),Qx(73,"pixels"),og(),Qx(74," , "),Il(75,"code"),Qx(76,"em"),og(),Qx(77," e "),Il(78,"code"),Qx(79,"rem"),og(),Qx(80,"."),og()()(),Il(81,"h4",6),Qx(82,"Propriedades"),og(),Il(83,"table",13)(84,"tr",14)(85,"th",15),Qx(86,"Nome"),og(),Il(87,"th",15),Qx(88,"Tipo"),og(),Il(89,"th",15),Qx(90,"Descri\xE7\xE3o"),og()(),Il(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),Qx(95," lg"),zl(96,"br"),og()()(),Il(97,"td",17)(98,"code",20),Qx(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),og()(),Il(100,"td",12)(101,"em")(102,"strong"),Qx(103,"(opcional)"),og()(),Il(104,"p"),Qx(105,"Define a regra para lg."),og(),Il(106,"p")(107,"code"),Qx(108,"gridSystemLgMinWidth"),og(),Qx(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),Il(110,"code"),Qx(111,"lg"),og(),Qx(112,")."),og(),Il(113,"p")(114,"code"),Qx(115,"gridSystemLgMaxWidth"),og(),Qx(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),Il(117,"code"),Qx(118,"lg"),og(),Qx(119,")."),og(),Il(120,"p"),Qx(121,"Exemplo de uso:"),og(),Il(122,"pre")(123,"code",21),Qx(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),og()()()(),Il(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),Qx(129," md"),zl(130,"br"),og()()(),Il(131,"td",17)(132,"code",22),Qx(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),og()(),Il(134,"td",12)(135,"em")(136,"strong"),Qx(137,"(opcional)"),og()(),Il(138,"p"),Qx(139,"Define a regra para md."),og(),Il(140,"p")(141,"code"),Qx(142,"gridSystemMdMinWidth"),og(),Qx(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),Il(144,"code"),Qx(145,"md"),og(),Qx(146,")."),og(),Il(147,"p")(148,"code"),Qx(149,"gridSystemMdMaxWidth"),og(),Qx(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),Il(151,"code"),Qx(152,"md"),og(),Qx(153,")."),og(),Il(154,"p"),Qx(155,"Exemplo de uso:"),og(),Il(156,"pre")(157,"code",21),Qx(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),og()()()(),Il(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),Qx(163," offset"),zl(164,"br"),og()()(),Il(165,"td",17)(166,"code",23),Qx(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),og()(),Il(168,"td",12)(169,"em")(170,"strong"),Qx(171,"(opcional)"),og()(),Il(172,"p"),Qx(173,"Define a regra offset."),og(),Il(174,"p")(175,"code"),Qx(176,"gridSystemOffsetMinWidth"),og(),Qx(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),Il(178,"code"),Qx(179,"offset"),og(),Qx(180,")."),og(),Il(181,"p")(182,"code"),Qx(183,"gridSystemOffsetMaxWidth"),og(),Qx(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),Il(185,"code"),Qx(186,"offset"),og(),Qx(187,")."),og(),Il(188,"p"),Qx(189,"Exemplo de uso:"),og(),Il(190,"pre")(191,"code",21),Qx(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),og()()()(),Il(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),Qx(197," pull"),zl(198,"br"),og()()(),Il(199,"td",17)(200,"code",24),Qx(201,`{ 'gridSystemPullMaxWidth': string;
}`),og()(),Il(202,"td",12)(203,"em")(204,"strong"),Qx(205,"(opcional)"),og()(),Il(206,"p"),Qx(207,"Define a regra pull."),og(),Il(208,"p")(209,"code"),Qx(210,"gridSystemPullMaxWidth"),og(),Qx(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),Il(212,"code"),Qx(213,"pull"),og(),Qx(214,")."),og(),Il(215,"p"),Qx(216,"Exemplo de uso:"),og(),Il(217,"pre")(218,"code",21),Qx(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),og()()()(),Il(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),Qx(224," sm"),zl(225,"br"),og()()(),Il(226,"td",17)(227,"code",25),Qx(228,`{ 'gridSystemSmMaxWidth': string;
}`),og()(),Il(229,"td",12)(230,"em")(231,"strong"),Qx(232,"(opcional)"),og()(),Il(233,"p"),Qx(234,"Define a regra para sm."),og(),Il(235,"p")(236,"code"),Qx(237,"gridSystemSmMaxWidth"),og(),Qx(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),Il(239,"code"),Qx(240,"sm"),og(),Qx(241,")."),og(),Il(242,"p"),Qx(243,"Exemplo de uso:"),og(),Il(244,"pre")(245,"code",21),Qx(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),og()()()(),Il(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),Qx(251," xl"),zl(252,"br"),og()()(),Il(253,"td",17)(254,"code",26),Qx(255,`{ 'gridSystemXlMinWidth': string;
}`),og()(),Il(256,"td",12)(257,"em")(258,"strong"),Qx(259,"(opcional)"),og()(),Il(260,"p"),Qx(261,"Define a regra xl."),og(),Il(262,"p")(263,"code"),Qx(264,"gridSystemXlMinWidth"),og(),Qx(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),Il(266,"code"),Qx(267,"pull"),og(),Qx(268,")."),og(),Il(269,"p"),Qx(270,"Exemplo de uso:"),og(),Il(271,"pre")(272,"code",21),Qx(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),og()()()()()());},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return d.changeTab("doc")}),zl(3,"sample-po-media-query-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return d.changeTab("web")}),og()()()),a&2&&(nw("p-actions",d.actions),Lp(2),nw("p-active",d.activeTab==="doc"),Lp(2),nw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[cNe,qme,Yme,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(q),uL]})}return n})();var R=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,W]})}return n})();export{R as DocPoMediaQueryModule};