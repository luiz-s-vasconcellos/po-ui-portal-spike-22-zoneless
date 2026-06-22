import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aH as Ka,F as Sl,z as eN,J as og,H as Wl,a3 as rNe,b8 as Bme,b9 as qme,a1 as ft,Q as nw,L as Lp}from'./main-WP3NAV7C.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-table"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoTableRowTemplateDirective"),og()(),Sl(12,"div",2)(13,"p"),eN(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),og(),Sl(15,"blockquote")(16,"p"),eN(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),Sl(18,"em"),eN(19,"master-detail"),og(),eN(20,"."),og()(),Sl(21,"p"),eN(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),Sl(23,"em"),eN(24,"linha"),og(),eN(25," e/ou "),Sl(26,"em"),eN(27,"\xEDndice"),og(),eN(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),og(),Sl(29,"ul")(30,"li"),eN(31,"Linha: "),Sl(32,"code"),eN(33,"row"),og(),eN(34," determina o item da linha corrente."),og(),Sl(35,"li"),eN(36,"\xCDndice: "),Sl(37,"code"),eN(38,"rowIndex"),og(),eN(39," determina o \xEDndice da linha corrente."),og()(),Sl(40,"p"),eN(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Sl(42,"em"),eN(43,"syntax sugar"),og(),eN(44,". Veja a seguir ambos, respectivamente:"),og(),Sl(45,"pre")(46,"code"),eN(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),og()(),Sl(48,"pre")(49,"code"),eN(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),og()(),Sl(51,"p"),eN(52,"A diretiva "),Sl(53,"strong"),eN(54,"p-table-row-template"),og(),eN(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),Sl(56,"em"),eN(57,"template"),og(),eN(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Sl(59,"code"),eN(60,"p-table-row-template-show"),og(),eN(61,`,
a mesma deve retornar um valor do tipo `),Sl(62,"em"),eN(63,"boolean"),og(),eN(64,". Veja o exemplo a seguir:"),og(),Sl(65,"pre")(66,"code"),eN(67,`...
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
`),og()(),Sl(68,"blockquote")(69,"p"),eN(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),Sl(71,"code"),eN(72,"status"),og(),eN(73,`
n\xE3o correspondam \xE0 `),Sl(74,"em"),eN(75,"delivered"),og(),eN(76,"."),og()()(),Sl(77,"div",6)(78,"h4",7),eN(79,"Seletor"),og(),Sl(80,"pre",8),eN(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),og()(),Sl(82,"h4",9),eN(83,"Propriedades"),og(),Sl(84,"table",10)(85,"tr",11)(86,"th",12),eN(87,"Nome"),og(),Sl(88,"th",12),eN(89,"Tipo"),og(),Sl(90,"th",12),eN(91,"Padr\xE3o"),og(),Sl(92,"th",12),eN(93,"Descri\xE7\xE3o"),og()(),Sl(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),eN(98," p-table-row-template-show"),Wl(99,"br"),og()()(),Sl(100,"td",17)(101,"code",18),eN(102,"(row: any, index: number) => boolean"),og()(),Sl(103,"td",19)(104,"p")(105,"code"),eN(106,"true"),og()()(),Sl(107,"td",20)(108,"em")(109,"strong"),eN(110,"(opcional)"),og()(),Sl(111,"p"),eN(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),og(),Sl(113,"p"),eN(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),og()()(),Sl(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),eN(119," p-table-row-template-arrow-direction"),Wl(120,"br"),og()()(),Sl(121,"td",17)(122,"code",21),eN(123,"PoTableRowTemplateArrowDirection"),og()(),Sl(124,"td",19)(125,"p")(126,"code"),eN(127,"'LEFT'"),og()()(),Sl(128,"td",20)(129,"em")(130,"strong"),eN(131,"(opcional)"),og()(),Sl(132,"p"),eN(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),og()()()(),Sl(134,"h3"),eN(135,"Enums"),og(),Sl(136,"h4",4)(137,"code",5),eN(138,"PoTableRowTemplateArrowDirection"),og()(),Sl(139,"div",2)(140,"p"),eN(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),og()(),Sl(142,"h4",9),eN(143,"Propriedades"),og(),Sl(144,"table",10)(145,"tr",11)(146,"th",12),eN(147,"Nome"),og(),Sl(148,"th",12),eN(149,"Descri\xE7\xE3o"),og()(),Sl(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),eN(154," Left"),Wl(155,"br"),og()()(),Sl(156,"td",20)(157,"p"),eN(158,"Posiciona a "),Sl(159,"em"),eN(160,"arrow"),og(),eN(161," na esquerda. (Padr\xE3o)"),og()()(),Sl(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),eN(166," Right"),Wl(167,"br"),og()()(),Sl(168,"td",20)(169,"p"),eN(170,"Posiciona a "),Sl(171,"em"),eN(172,"arrow"),og(),eN(173," na direita"),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-table-row-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[rNe,Bme,qme,D],encapsulation:2})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[hL.forChild(q),hL]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{U as DocPoTableRowTemplateModule};