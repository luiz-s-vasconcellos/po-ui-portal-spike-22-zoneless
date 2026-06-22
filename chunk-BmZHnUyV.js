import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aH as Ka,F as Sl,z as eN,J as og,H as Wl,a3 as rNe,b8 as Bme,b9 as qme,a1 as ft,Q as nw,L as Lp}from'./main-WP3NAV7C.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-stepper"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoStepComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-step"),og(),eN(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Sl(18,"em"),eN(19,"step"),og(),eN(20,") do "),Sl(21,"code"),eN(22,"po-stepper"),og(),eN(23,", por exemplo:"),og(),Sl(24,"pre")(25,"code"),eN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),og()(),Sl(27,"p"),eN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Sl(29,"code"),eN(30,"po-step"),og(),eN(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Sl(32,"em"),eN(33,"default"),og(),eN(34,` e os demais ficam
desabilitados (`),Sl(35,"em"),eN(36,"disabled"),og(),eN(37,")."),og(),Sl(38,"p"),eN(39,"Ao clicar no "),Sl(40,"code"),eN(41,"po-step"),og(),eN(42," que est\xE1 com o status "),Sl(43,"em"),eN(44,"default"),og(),eN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Sl(46,"em"),eN(47,"done"),og(),eN(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Sl(49,"em"),eN(50,"default"),og(),eN(51,` e o restante permanecer\xE1
com o status desabilitado.`),og(),Sl(52,"blockquote")(53,"p"),eN(54,"Ao utilizar o "),Sl(55,"code"),eN(56,"po-step"),og(),eN(57,", o componente "),Sl(58,"code"),eN(59,"po-stepper"),og(),eN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Sl(61,"code"),eN(62,"po-step"),og(),eN(63," que esteja com o status igual a desabilitado ("),Sl(64,"em"),eN(65,"disabled"),og(),eN(66,")."),og()(),Sl(67,"p"),eN(68,"Acesse a "),Sl(69,"a",6),eN(70,"documenta\xE7\xE3o do "),Sl(71,"code"),eN(72,"po-stepper"),og()(),eN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),og()(),Sl(74,"div",7)(75,"h4",8),eN(76,"Seletor"),og(),Sl(77,"pre",9),eN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),og()(),Sl(79,"h4",10),eN(80,"Propriedades"),og(),Sl(81,"table",11)(82,"tr",12)(83,"th",13),eN(84,"Nome"),og(),Sl(85,"th",13),eN(86,"Tipo"),og(),Sl(87,"th",13),eN(88,"Padr\xE3o"),og(),Sl(89,"th",13),eN(90,"Descri\xE7\xE3o"),og()(),Sl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),eN(95," p-can-active-next-step"),Wl(96,"br"),og()()(),Sl(97,"td",18)(98,"code",19),eN(99,"((currentStep) => boolean) "),og(),Sl(100,"code",20),eN(101," ((currentStep) => Observable<boolean>)"),og()(),Sl(102,"td",21),eN(103,"-"),og(),Sl(104,"td",22)(105,"em")(106,"strong"),eN(107,"(opcional)"),og()(),Sl(108,"p"),eN(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Sl(110,"em"),eN(111,"step"),og(),eN(112," for clicado ou quando o m\xE9todo "),Sl(113,"code"),eN(114,"PoStepperComponent.next()"),og(),eN(115,` for chamado.
Ao retornar `),Sl(116,"code"),eN(117,"true"),og(),eN(118," define que esse "),Sl(119,"em"),eN(120,"step"),og(),eN(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Sl(122,"em"),eN(123,"done"),og(),eN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Sl(125,"code"),eN(126,"Observable<boolean>"),og(),eN(127,". Ao retornar um "),Sl(128,"code"),eN(129,"Observable<boolean>"),og(),eN(130,`,
garanta que esse `),Sl(131,"code"),eN(132,"Observable"),og(),eN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Sl(134,"em"),eN(135,"step"),og(),eN(136,"."),og(),Sl(137,"p"),eN(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Sl(139,"code"),eN(140,"PoStepComponent"),og(),eN(141," atual."),og(),Sl(142,"p"),eN(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Sl(144,"code"),eN(145,"PoStepComponent"),og(),eN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Sl(147,"code"),eN(148,"bind"),og(),eN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Sl(150,"code"),eN(151,"validate"),og(),eN(152,":"),og(),Sl(153,"pre")(154,"code"),eN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),og()()()(),Sl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),eN(160," p-icon-default"),Wl(161,"br"),og()()(),Sl(162,"td",18)(163,"code",23),eN(164,"string "),og(),Sl(165,"code",24),eN(166," TemplateRef<void>"),og()(),Sl(167,"td",21),eN(168,"-"),og(),Sl(169,"td",22)(170,"em")(171,"strong"),eN(172,"(opcional)"),og()(),Sl(173,"p"),eN(174,"Define o \xEDcone padr\xE3o do step em seu status "),Sl(175,"em"),eN(176,"default"),og(),eN(177,`.
Esta propriedade permite usar \xEDcones da `),Sl(178,"a",25),eN(179,"Biblioteca de \xEDcones"),og(),eN(180,"."),og(),Sl(181,"pre")(182,"code"),eN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),og()(),Sl(184,"p"),eN(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(186,"code"),eN(187,"TemplateRef"),og(),eN(188,", conforme exemplo abaixo:"),og(),Sl(189,"pre")(190,"code"),eN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),og()(),Sl(192,"blockquote")(193,"p"),eN(194,"Deve-se usar "),Sl(195,"code"),eN(196,"font-size: inherit"),og(),eN(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Sl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),eN(202," p-label"),Wl(203,"br"),og()()(),Sl(204,"td",18)(205,"code",23),eN(206,"string"),og()(),Sl(207,"td",21),eN(208,"-"),og(),Sl(209,"td",22)(210,"p"),eN(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Sl(212,"em"),eN(213,"step"),og(),eN(214,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-step-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[rNe,Bme,qme,y],encapsulation:2})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[hL.forChild(M),hL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,q]})}return i})();export{L as DocPoStepModule};