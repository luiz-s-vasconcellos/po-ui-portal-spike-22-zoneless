import {f as fe,u as ue,s as sr,a as uL,C as C$1,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,J as zl,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-QSTLMRDK.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-stepper"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoStepComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-step"),og(),Qx(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Il(18,"em"),Qx(19,"step"),og(),Qx(20,") do "),Il(21,"code"),Qx(22,"po-stepper"),og(),Qx(23,", por exemplo:"),og(),Il(24,"pre")(25,"code"),Qx(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),og()(),Il(27,"p"),Qx(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Il(29,"code"),Qx(30,"po-step"),og(),Qx(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Il(32,"em"),Qx(33,"default"),og(),Qx(34,` e os demais ficam
desabilitados (`),Il(35,"em"),Qx(36,"disabled"),og(),Qx(37,")."),og(),Il(38,"p"),Qx(39,"Ao clicar no "),Il(40,"code"),Qx(41,"po-step"),og(),Qx(42," que est\xE1 com o status "),Il(43,"em"),Qx(44,"default"),og(),Qx(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Il(46,"em"),Qx(47,"done"),og(),Qx(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Il(49,"em"),Qx(50,"default"),og(),Qx(51,` e o restante permanecer\xE1
com o status desabilitado.`),og(),Il(52,"blockquote")(53,"p"),Qx(54,"Ao utilizar o "),Il(55,"code"),Qx(56,"po-step"),og(),Qx(57,", o componente "),Il(58,"code"),Qx(59,"po-stepper"),og(),Qx(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Il(61,"code"),Qx(62,"po-step"),og(),Qx(63," que esteja com o status igual a desabilitado ("),Il(64,"em"),Qx(65,"disabled"),og(),Qx(66,")."),og()(),Il(67,"p"),Qx(68,"Acesse a "),Il(69,"a",6),Qx(70,"documenta\xE7\xE3o do "),Il(71,"code"),Qx(72,"po-stepper"),og()(),Qx(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),og()(),Il(74,"div",7)(75,"h4",8),Qx(76,"Seletor"),og(),Il(77,"pre",9),Qx(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),og()(),Il(79,"h4",10),Qx(80,"Propriedades"),og(),Il(81,"table",11)(82,"tr",12)(83,"th",13),Qx(84,"Nome"),og(),Il(85,"th",13),Qx(86,"Tipo"),og(),Il(87,"th",13),Qx(88,"Padr\xE3o"),og(),Il(89,"th",13),Qx(90,"Descri\xE7\xE3o"),og()(),Il(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),Qx(95," p-can-active-next-step"),zl(96,"br"),og()()(),Il(97,"td",18)(98,"code",19),Qx(99,"((currentStep) => boolean) "),og(),Il(100,"code",20),Qx(101," ((currentStep) => Observable<boolean>)"),og()(),Il(102,"td",21),Qx(103,"-"),og(),Il(104,"td",22)(105,"em")(106,"strong"),Qx(107,"(opcional)"),og()(),Il(108,"p"),Qx(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Il(110,"em"),Qx(111,"step"),og(),Qx(112," for clicado ou quando o m\xE9todo "),Il(113,"code"),Qx(114,"PoStepperComponent.next()"),og(),Qx(115,` for chamado.
Ao retornar `),Il(116,"code"),Qx(117,"true"),og(),Qx(118," define que esse "),Il(119,"em"),Qx(120,"step"),og(),Qx(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Il(122,"em"),Qx(123,"done"),og(),Qx(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Il(125,"code"),Qx(126,"Observable<boolean>"),og(),Qx(127,". Ao retornar um "),Il(128,"code"),Qx(129,"Observable<boolean>"),og(),Qx(130,`,
garanta que esse `),Il(131,"code"),Qx(132,"Observable"),og(),Qx(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Il(134,"em"),Qx(135,"step"),og(),Qx(136,"."),og(),Il(137,"p"),Qx(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Il(139,"code"),Qx(140,"PoStepComponent"),og(),Qx(141," atual."),og(),Il(142,"p"),Qx(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Il(144,"code"),Qx(145,"PoStepComponent"),og(),Qx(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Il(147,"code"),Qx(148,"bind"),og(),Qx(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Il(150,"code"),Qx(151,"validate"),og(),Qx(152,":"),og(),Il(153,"pre")(154,"code"),Qx(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),og()()()(),Il(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),Qx(160," p-icon-default"),zl(161,"br"),og()()(),Il(162,"td",18)(163,"code",23),Qx(164,"string "),og(),Il(165,"code",24),Qx(166," TemplateRef<void>"),og()(),Il(167,"td",21),Qx(168,"-"),og(),Il(169,"td",22)(170,"em")(171,"strong"),Qx(172,"(opcional)"),og()(),Il(173,"p"),Qx(174,"Define o \xEDcone padr\xE3o do step em seu status "),Il(175,"em"),Qx(176,"default"),og(),Qx(177,`.
Esta propriedade permite usar \xEDcones da `),Il(178,"a",25),Qx(179,"Biblioteca de \xEDcones"),og(),Qx(180,"."),og(),Il(181,"pre")(182,"code"),Qx(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),og()(),Il(184,"p"),Qx(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(186,"code"),Qx(187,"TemplateRef"),og(),Qx(188,", conforme exemplo abaixo:"),og(),Il(189,"pre")(190,"code"),Qx(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),og()(),Il(192,"blockquote")(193,"p"),Qx(194,"Deve-se usar "),Il(195,"code"),Qx(196,"font-size: inherit"),og(),Qx(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Il(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),Qx(202," p-label"),zl(203,"br"),og()()(),Il(204,"td",18)(205,"code",23),Qx(206,"string"),og()(),Il(207,"td",21),Qx(208,"-"),og(),Il(209,"td",22)(210,"p"),Qx(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Il(212,"em"),Qx(213,"step"),og(),Qx(214,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(C$1(Xn),C$1(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),zl(3,"sample-po-step-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[cNe,qme,Yme,y],encapsulation:2})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[uL.forChild(M),uL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,q]})}return i})();export{L as DocPoStepModule};