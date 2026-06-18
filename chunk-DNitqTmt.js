import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,J as zl,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-FCMDZGSJ.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-table"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoTableRowTemplateDirective"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),og(),Il(15,"blockquote")(16,"p"),Qx(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),Il(18,"em"),Qx(19,"master-detail"),og(),Qx(20,"."),og()(),Il(21,"p"),Qx(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),Il(23,"em"),Qx(24,"linha"),og(),Qx(25," e/ou "),Il(26,"em"),Qx(27,"\xEDndice"),og(),Qx(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),og(),Il(29,"ul")(30,"li"),Qx(31,"Linha: "),Il(32,"code"),Qx(33,"row"),og(),Qx(34," determina o item da linha corrente."),og(),Il(35,"li"),Qx(36,"\xCDndice: "),Il(37,"code"),Qx(38,"rowIndex"),og(),Qx(39," determina o \xEDndice da linha corrente."),og()(),Il(40,"p"),Qx(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Il(42,"em"),Qx(43,"syntax sugar"),og(),Qx(44,". Veja a seguir ambos, respectivamente:"),og(),Il(45,"pre")(46,"code"),Qx(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),og()(),Il(48,"pre")(49,"code"),Qx(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),og()(),Il(51,"p"),Qx(52,"A diretiva "),Il(53,"strong"),Qx(54,"p-table-row-template"),og(),Qx(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),Il(56,"em"),Qx(57,"template"),og(),Qx(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Il(59,"code"),Qx(60,"p-table-row-template-show"),og(),Qx(61,`,
a mesma deve retornar um valor do tipo `),Il(62,"em"),Qx(63,"boolean"),og(),Qx(64,". Veja o exemplo a seguir:"),og(),Il(65,"pre")(66,"code"),Qx(67,`...
@Component({
   selector: 'app-root',
   templateUrl: \`
     ...
     <po-table
       [p-columns]="columns"
       [p-items]="items">
         <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isUndelivered">
           <detail-row [row]="rowItem"> </detail-row>
         </div>
     ...
   \`
})
export class AppComponent {
   public dataTable = [{
     code: 1200,
     product: 'Rice',
     costumer: 'Supermarket 1',
     quantity: 3,
     status: 'delivered',
     license_plate: 'MDJD9191',
     batch_product: 18041822,
     driver: 'Jos\xE9 Oliveira'
   }, {
     code: 1355,
     product: 'Bean',
     costumer: 'Supermarket 2',
     quantity: 1,
     status: 'transport',
     license_plate: 'XXA5454',
     batch_product: 18041821,
     driver: 'Francisco Pereira'
   }];

   isUndelivered(row, index: number) {
     return row.status !== 'delivered';
   }
}
`),og()(),Il(68,"blockquote")(69,"p"),Qx(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),Il(71,"code"),Qx(72,"status"),og(),Qx(73,`
n\xE3o correspondam \xE0 `),Il(74,"em"),Qx(75,"delivered"),og(),Qx(76,"."),og()()(),Il(77,"div",6)(78,"h4",7),Qx(79,"Seletor"),og(),Il(80,"pre",8),Qx(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),og()(),Il(82,"h4",9),Qx(83,"Propriedades"),og(),Il(84,"table",10)(85,"tr",11)(86,"th",12),Qx(87,"Nome"),og(),Il(88,"th",12),Qx(89,"Tipo"),og(),Il(90,"th",12),Qx(91,"Padr\xE3o"),og(),Il(92,"th",12),Qx(93,"Descri\xE7\xE3o"),og()(),Il(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),Qx(98," p-table-row-template-show"),zl(99,"br"),og()()(),Il(100,"td",17)(101,"code",18),Qx(102,"(row: any, index: number) => boolean"),og()(),Il(103,"td",19)(104,"p")(105,"code"),Qx(106,"true"),og()()(),Il(107,"td",20)(108,"em")(109,"strong"),Qx(110,"(opcional)"),og()(),Il(111,"p"),Qx(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),og(),Il(113,"p"),Qx(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),og()()(),Il(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),Qx(119," p-table-row-template-arrow-direction"),zl(120,"br"),og()()(),Il(121,"td",17)(122,"code",21),Qx(123,"PoTableRowTemplateArrowDirection"),og()(),Il(124,"td",19)(125,"p")(126,"code"),Qx(127,"'LEFT'"),og()()(),Il(128,"td",20)(129,"em")(130,"strong"),Qx(131,"(opcional)"),og()(),Il(132,"p"),Qx(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),og()()()(),Il(134,"h3"),Qx(135,"Enums"),og(),Il(136,"h4",4)(137,"code",5),Qx(138,"PoTableRowTemplateArrowDirection"),og()(),Il(139,"div",2)(140,"p"),Qx(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),og()(),Il(142,"h4",9),Qx(143,"Propriedades"),og(),Il(144,"table",10)(145,"tr",11)(146,"th",12),Qx(147,"Nome"),og(),Il(148,"th",12),Qx(149,"Descri\xE7\xE3o"),og()(),Il(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),Qx(154," Left"),zl(155,"br"),og()()(),Il(156,"td",20)(157,"p"),Qx(158,"Posiciona a "),Il(159,"em"),Qx(160,"arrow"),og(),Qx(161," na esquerda. (Padr\xE3o)"),og()()(),Il(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),Qx(166," Right"),zl(167,"br"),og()()(),Il(168,"td",20)(169,"p"),Qx(170,"Posiciona a "),Il(171,"em"),Qx(172,"arrow"),og(),Qx(173," na direita"),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),zl(3,"sample-po-table-row-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[cNe,qme,Yme,D],encapsulation:2})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[uL.forChild(q),uL]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{U as DocPoTableRowTemplateModule};