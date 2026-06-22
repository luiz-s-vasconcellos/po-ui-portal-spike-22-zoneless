import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aH as Ka,F as Sl,z as eN,J as og,H as Wl,a3 as rNe,b8 as Bme,b9 as qme,a1 as ft,Q as nw,L as Lp}from'./main-WP3NAV7C.js';var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:false,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-table"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoTableColumnTemplateDirective"),og()(),Sl(12,"div",2)(13,"p"),eN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),og(),Sl(15,"p"),eN(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),og(),Sl(17,"p"),eN(18,"Retorno:"),og(),Sl(19,"ul")(20,"li"),eN(21,"value: valor referente ao conte\xFAdo da linha corrente."),og()(),Sl(22,"p"),eN(23,"Modo de uso:"),og(),Sl(24,"pre")(25,"code",6),eN(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Sl(27,"blockquote")(28,"p"),eN(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),Sl(30,"code"),eN(31,"status"),og(),eN(32," ter\xE3o o conte\xFAdo alterado para "),Sl(33,"code"),eN(34,"<h1>${value}</h1>"),og(),eN(35,`,
sendo que `),Sl(36,"code"),eN(37,"value"),og(),eN(38," refere-se ao conte\xFAdo da linha."),og()(),Sl(39,"pre")(40,"code",6),eN(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Sl(42,"blockquote")(43,"p"),eN(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),og()(),Sl(45,"p"),eN(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),og(),Sl(47,"pre")(48,"code",7),eN(49,`...
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
`),og()(),Sl(50,"blockquote")(51,"p"),eN(52,"Observa\xE7\xE3o: Sempre adicionar o "),Sl(53,"strong"),eN(54,"type"),og(),eN(55," da coluna que deseja manipular com a directiva como "),Sl(56,"code"),eN(57,"columnTemplate"),og()()()(),Sl(58,"div",8)(59,"h4",9),eN(60,"Seletor"),og(),Sl(61,"pre",10),eN(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),og()(),Sl(63,"h4",11),eN(64,"Propriedades"),og(),Sl(65,"table",12)(66,"tr",13)(67,"th",14),eN(68,"Nome"),og(),Sl(69,"th",14),eN(70,"Tipo"),og(),Sl(71,"th",14),eN(72,"Padr\xE3o"),og(),Sl(73,"th",14),eN(74,"Descri\xE7\xE3o"),og()(),Sl(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),eN(79," p-property"),Wl(80,"br"),og()()(),Sl(81,"td",19)(82,"code",20),eN(83,"string"),og()(),Sl(84,"td",21),eN(85,"-"),og(),Sl(86,"td",22)(87,"em")(88,"strong"),eN(89,"(opcional)"),og()(),Sl(90,"p"),eN(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),og(),Sl(92,"p"),eN(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-table-column-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[rNe,Bme,qme,y],encapsulation:2})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[hL.forChild(q),hL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoTableColumnTemplateModule};