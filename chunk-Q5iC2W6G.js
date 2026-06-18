import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,J as zl,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-QSTLMRDK.js';var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:false,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-table"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoTableColumnTemplateDirective"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),og(),Il(15,"p"),Qx(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),og(),Il(17,"p"),Qx(18,"Retorno:"),og(),Il(19,"ul")(20,"li"),Qx(21,"value: valor referente ao conte\xFAdo da linha corrente."),og()(),Il(22,"p"),Qx(23,"Modo de uso:"),og(),Il(24,"pre")(25,"code",6),Qx(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Il(27,"blockquote")(28,"p"),Qx(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),Il(30,"code"),Qx(31,"status"),og(),Qx(32," ter\xE3o o conte\xFAdo alterado para "),Il(33,"code"),Qx(34,"<h1>${value}</h1>"),og(),Qx(35,`,
sendo que `),Il(36,"code"),Qx(37,"value"),og(),Qx(38," refere-se ao conte\xFAdo da linha."),og()(),Il(39,"pre")(40,"code",6),Qx(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Il(42,"blockquote")(43,"p"),Qx(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),og()(),Il(45,"p"),Qx(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),og(),Il(47,"pre")(48,"code",7),Qx(49,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),og()(),Il(50,"blockquote")(51,"p"),Qx(52,"Observa\xE7\xE3o: Sempre adicionar o "),Il(53,"strong"),Qx(54,"type"),og(),Qx(55," da coluna que deseja manipular com a directiva como "),Il(56,"code"),Qx(57,"columnTemplate"),og()()()(),Il(58,"div",8)(59,"h4",9),Qx(60,"Seletor"),og(),Il(61,"pre",10),Qx(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),og()(),Il(63,"h4",11),Qx(64,"Propriedades"),og(),Il(65,"table",12)(66,"tr",13)(67,"th",14),Qx(68,"Nome"),og(),Il(69,"th",14),Qx(70,"Tipo"),og(),Il(71,"th",14),Qx(72,"Padr\xE3o"),og(),Il(73,"th",14),Qx(74,"Descri\xE7\xE3o"),og()(),Il(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),Qx(79," p-property"),zl(80,"br"),og()()(),Il(81,"td",19)(82,"code",20),Qx(83,"string"),og()(),Il(84,"td",21),Qx(85,"-"),og(),Il(86,"td",22)(87,"em")(88,"strong"),Qx(89,"(opcional)"),og()(),Il(90,"p"),Qx(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),og(),Il(92,"p"),Qx(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-table-column-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,y],encapsulation:2})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(q),uL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoTableColumnTemplateModule};