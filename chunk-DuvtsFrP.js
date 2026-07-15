import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aH as Ka,C as Sl,y as rN,J as og,F as Wl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:false,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-table"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoTableRowTemplateDirective"),og()(),Sl(12,"div",2)(13,"p"),rN(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),og(),Sl(15,"blockquote")(16,"p"),rN(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),Sl(18,"em"),rN(19,"master-detail"),og(),rN(20,"."),og()(),Sl(21,"p"),rN(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),Sl(23,"em"),rN(24,"linha"),og(),rN(25," e/ou "),Sl(26,"em"),rN(27,"\xEDndice"),og(),rN(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),og(),Sl(29,"ul")(30,"li"),rN(31,"Linha: "),Sl(32,"code"),rN(33,"row"),og(),rN(34," determina o item da linha corrente."),og(),Sl(35,"li"),rN(36,"\xCDndice: "),Sl(37,"code"),rN(38,"rowIndex"),og(),rN(39," determina o \xEDndice da linha corrente."),og()(),Sl(40,"p"),rN(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Sl(42,"em"),rN(43,"syntax sugar"),og(),rN(44,". Veja a seguir ambos, respectivamente:"),og(),Sl(45,"pre")(46,"code"),rN(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),og()(),Sl(48,"pre")(49,"code"),rN(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),og()(),Sl(51,"p"),rN(52,"A diretiva "),Sl(53,"strong"),rN(54,"p-table-row-template"),og(),rN(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),Sl(56,"em"),rN(57,"template"),og(),rN(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Sl(59,"code"),rN(60,"p-table-row-template-show"),og(),rN(61,`,
a mesma deve retornar um valor do tipo `),Sl(62,"em"),rN(63,"boolean"),og(),rN(64,". Veja o exemplo a seguir:"),og(),Sl(65,"pre")(66,"code"),rN(67,`...
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
`),og()(),Sl(68,"blockquote")(69,"p"),rN(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),Sl(71,"code"),rN(72,"status"),og(),rN(73,`
n\xE3o correspondam \xE0 `),Sl(74,"em"),rN(75,"delivered"),og(),rN(76,"."),og()()(),Sl(77,"div",6)(78,"h4",7),rN(79,"Seletor"),og(),Sl(80,"pre",8),rN(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),og()(),Sl(82,"h4",9),rN(83,"Propriedades"),og(),Sl(84,"table",10)(85,"tr",11)(86,"th",12),rN(87,"Nome"),og(),Sl(88,"th",12),rN(89,"Tipo"),og(),Sl(90,"th",12),rN(91,"Padr\xE3o"),og(),Sl(92,"th",12),rN(93,"Descri\xE7\xE3o"),og()(),Sl(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),rN(98," p-table-row-template-show"),Wl(99,"br"),og()()(),Sl(100,"td",17)(101,"code",18),rN(102,"(row: any, index: number) => boolean"),og()(),Sl(103,"td",19)(104,"p")(105,"code"),rN(106,"true"),og()()(),Sl(107,"td",20)(108,"em")(109,"strong"),rN(110,"(opcional)"),og()(),Sl(111,"p"),rN(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),og(),Sl(113,"p"),rN(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),og()()(),Sl(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),rN(119," p-table-row-template-arrow-direction"),Wl(120,"br"),og()()(),Sl(121,"td",17)(122,"code",21),rN(123,"PoTableRowTemplateArrowDirection"),og()(),Sl(124,"td",19)(125,"p")(126,"code"),rN(127,"'LEFT'"),og()()(),Sl(128,"td",20)(129,"em")(130,"strong"),rN(131,"(opcional)"),og()(),Sl(132,"p"),rN(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),og()()()(),Sl(134,"h3"),rN(135,"Enums"),og(),Sl(136,"h4",4)(137,"code",5),rN(138,"PoTableRowTemplateArrowDirection"),og()(),Sl(139,"div",2)(140,"p"),rN(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),og()(),Sl(142,"h4",9),rN(143,"Propriedades"),og(),Sl(144,"table",10)(145,"tr",11)(146,"th",12),rN(147,"Nome"),og(),Sl(148,"th",12),rN(149,"Descri\xE7\xE3o"),og()(),Sl(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),rN(154," Left"),Wl(155,"br"),og()()(),Sl(156,"td",20)(157,"p"),rN(158,"Posiciona a "),Sl(159,"em"),rN(160,"arrow"),og(),rN(161," na esquerda. (Padr\xE3o)"),og()()(),Sl(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),rN(166," Right"),Wl(167,"br"),og()()(),Sl(168,"td",20)(169,"p"),rN(170,"Posiciona a "),Sl(171,"em"),rN(172,"arrow"),og(),rN(173," na direita"),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-table-row-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),n&2&&(rw("p-actions",r.actions),Lp(2),rw("p-active",r.activeTab==="doc"),Lp(2),rw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[sNe,Ume,$me,D],encapsulation:2,changeDetection:1})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[mL.forChild(q),mL]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{U as DocPoTableRowTemplateModule};