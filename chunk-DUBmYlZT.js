import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aH as Ka,C as Sl,y as rN,J as og,F as Wl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-step-doc"]],standalone:false,decls:215,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-stepper"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","((currentStep)","=>","boolean)"],["pan","",1,"docs-api-property-type","((currentStep)","=>","Observable<boolean>)"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(n,r){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoStepperModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-stepper"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoStepComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-step"),og(),rN(17," \xE9 utilizado para envolver e renderizar o conte\xFAdo de um passo ("),Sl(18,"em"),rN(19,"step"),og(),rN(20,") do "),Sl(21,"code"),rN(22,"po-stepper"),og(),rN(23,", por exemplo:"),og(),Sl(24,"pre")(25,"code"),rN(26,`<po-stepper>

  <po-step p-label="Endere\xE7o">

      <!-- Conte\xFAdo referente ao endere\xE7o -->

  </po-step>

  <po-step p-label="Pagamento">

      <!-- Conte\xFAdo referente ao pagamento -->

  </po-step>

</po-stepper>
`),og()(),Sl(27,"p"),rN(28,`A renderiza\xE7\xE3o do conte\xFAdo envolvido na tela e o controle dos status s\xE3o feitos automaticamente. No qual, o primeiro
`),Sl(29,"code"),rN(30,"po-step"),og(),rN(31," encontrado ser\xE1 colocado como ativo, o pr\xF3ximo fica com o status "),Sl(32,"em"),rN(33,"default"),og(),rN(34,` e os demais ficam
desabilitados (`),Sl(35,"em"),rN(36,"disabled"),og(),rN(37,")."),og(),Sl(38,"p"),rN(39,"Ao clicar no "),Sl(40,"code"),rN(41,"po-step"),og(),rN(42," que est\xE1 com o status "),Sl(43,"em"),rN(44,"default"),og(),rN(45,`, o que est\xE1 ativo ficar\xE1 com o
status de conclu\xEDdo (`),Sl(46,"em"),rN(47,"done"),og(),rN(48,") e o pr\xF3ximo que estava desabilitado ficar\xE1 com o status "),Sl(49,"em"),rN(50,"default"),og(),rN(51,` e o restante permanecer\xE1
com o status desabilitado.`),og(),Sl(52,"blockquote")(53,"p"),rN(54,"Ao utilizar o "),Sl(55,"code"),rN(56,"po-step"),og(),rN(57,", o componente "),Sl(58,"code"),rN(59,"po-stepper"),og(),rN(60,` funcionar\xE1 de forma sequencial, ou seja, n\xE3o ser\xE1 poss\xEDvel
pular para outro `),Sl(61,"code"),rN(62,"po-step"),og(),rN(63," que esteja com o status igual a desabilitado ("),Sl(64,"em"),rN(65,"disabled"),og(),rN(66,")."),og()(),Sl(67,"p"),rN(68,"Acesse a "),Sl(69,"a",6),rN(70,"documenta\xE7\xE3o do "),Sl(71,"code"),rN(72,"po-stepper"),og()(),rN(73,` para ter mais informa\xE7\xF5es sobre o seu funcionamento
e exemplos de uso.`),og()(),Sl(74,"div",7)(75,"h4",8),rN(76,"Seletor"),og(),Sl(77,"pre",9),rN(78,`<po-step
    p-can-active-next-step="((currentStep) => boolean) | ((currentStep) => Observable<boolean>)"
    p-icon-default="string | TemplateRef<void>"
    p-label="string" >
</po-step>
`),og()(),Sl(79,"h4",10),rN(80,"Propriedades"),og(),Sl(81,"table",11)(82,"tr",12)(83,"th",13),rN(84,"Nome"),og(),Sl(85,"th",13),rN(86,"Tipo"),og(),Sl(87,"th",13),rN(88,"Padr\xE3o"),og(),Sl(89,"th",13),rN(90,"Descri\xE7\xE3o"),og()(),Sl(91,"tr",14)(92,"td",15)(93,"div",16)(94,"span",17),rN(95," p-can-active-next-step"),Wl(96,"br"),og()()(),Sl(97,"td",18)(98,"code",19),rN(99,"((currentStep) => boolean) "),og(),Sl(100,"code",20),rN(101," ((currentStep) => Observable<boolean>)"),og()(),Sl(102,"td",21),rN(103,"-"),og(),Sl(104,"td",22)(105,"em")(106,"strong"),rN(107,"(opcional)"),og()(),Sl(108,"p"),rN(109,"Fun\xE7\xE3o chamada quando o pr\xF3ximo "),Sl(110,"em"),rN(111,"step"),og(),rN(112," for clicado ou quando o m\xE9todo "),Sl(113,"code"),rN(114,"PoStepperComponent.next()"),og(),rN(115,` for chamado.
Ao retornar `),Sl(116,"code"),rN(117,"true"),og(),rN(118," define que esse "),Sl(119,"em"),rN(120,"step"),og(),rN(121," ficar\xE1 ativo e o atual como conclu\xEDdo ("),Sl(122,"em"),rN(123,"done"),og(),rN(124,`).
Tamb\xE9m aceita fun\xE7\xF5es que retornem `),Sl(125,"code"),rN(126,"Observable<boolean>"),og(),rN(127,". Ao retornar um "),Sl(128,"code"),rN(129,"Observable<boolean>"),og(),rN(130,`,
garanta que esse `),Sl(131,"code"),rN(132,"Observable"),og(),rN(133,` ser\xE1 completado, caso houver algum erro durante o processo n\xE3o ser\xE1 poss\xEDvel prosseguir
ao pr\xF3ximo `),Sl(134,"em"),rN(135,"step"),og(),rN(136,"."),og(),Sl(137,"p"),rN(138,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o "),Sl(139,"code"),rN(140,"PoStepComponent"),og(),rN(141," atual."),og(),Sl(142,"p"),rN(143,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Sl(144,"code"),rN(145,"PoStepComponent"),og(),rN(146,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Sl(147,"code"),rN(148,"bind"),og(),rN(149,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Sl(150,"code"),rN(151,"validate"),og(),rN(152,":"),og(),Sl(153,"pre")(154,"code"),rN(155,`<po-step p-label="Step 1" [p-can-active-next-step]="validate.bind(this)">
...
</po-step>
`),og()()()(),Sl(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),rN(160," p-icon-default"),Wl(161,"br"),og()()(),Sl(162,"td",18)(163,"code",23),rN(164,"string "),og(),Sl(165,"code",24),rN(166," TemplateRef<void>"),og()(),Sl(167,"td",21),rN(168,"-"),og(),Sl(169,"td",22)(170,"em")(171,"strong"),rN(172,"(opcional)"),og()(),Sl(173,"p"),rN(174,"Define o \xEDcone padr\xE3o do step em seu status "),Sl(175,"em"),rN(176,"default"),og(),rN(177,`.
Esta propriedade permite usar \xEDcones da `),Sl(178,"a",25),rN(179,"Biblioteca de \xEDcones"),og(),rN(180,"."),og(),Sl(181,"pre")(182,"code"),rN(183,`<po-stepper>
   ...
   <po-step p-icon-default="an an-map-pin"></po-step>
</po-stepper>
`),og()(),Sl(184,"p"),rN(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(186,"code"),rN(187,"TemplateRef"),og(),rN(188,", conforme exemplo abaixo:"),og(),Sl(189,"pre")(190,"code"),rN(191,`<po-stepper>
   ...
   <po-step [p-icon-default]="template"></po-step>
</po-stepper>

<ng-template #template>
   <i class="an an-shopping-cart"></i>
</ng-template
`),og()(),Sl(192,"blockquote")(193,"p"),rN(194,"Deve-se usar "),Sl(195,"code"),rN(196,"font-size: inherit"),og(),rN(197," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),og()()()(),Sl(198,"tr",14)(199,"td",15)(200,"div",16)(201,"span",17),rN(202," p-label"),Wl(203,"br"),og()()(),Sl(204,"td",18)(205,"code",23),rN(206,"string"),og()(),Sl(207,"td",21),rN(208,"-"),og(),Sl(209,"td",22)(210,"p"),rN(211,"T\xEDtulo que ser\xE1 exibido descrevendo o passo ("),Sl(212,"em"),rN(213,"step"),og(),rN(214,")."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var C=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Step",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-step-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(rw("p-actions",r.actions),Lp(2),rw("p-active",r.activeTab==="doc"),Lp(2),rw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[sNe,Ume,$me,y],encapsulation:2,changeDetection:1})}return i})();var M=[{path:"",component:C}],q=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[mL.forChild(M),mL]})}return i})();var L=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,q]})}return i})();export{L as DocPoStepModule};