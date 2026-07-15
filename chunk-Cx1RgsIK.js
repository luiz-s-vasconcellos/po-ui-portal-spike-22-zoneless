import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aH as Ka,C as Sl,y as rN,J as og,F as Wl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:false,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-table"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoTableColumnTemplateDirective"),og()(),Sl(12,"div",2)(13,"p"),rN(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),og(),Sl(15,"p"),rN(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),og(),Sl(17,"p"),rN(18,"Retorno:"),og(),Sl(19,"ul")(20,"li"),rN(21,"value: valor referente ao conte\xFAdo da linha corrente."),og()(),Sl(22,"p"),rN(23,"Modo de uso:"),og(),Sl(24,"pre")(25,"code",6),rN(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Sl(27,"blockquote")(28,"p"),rN(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),Sl(30,"code"),rN(31,"status"),og(),rN(32," ter\xE3o o conte\xFAdo alterado para "),Sl(33,"code"),rN(34,"<h1>${value}</h1>"),og(),rN(35,`,
sendo que `),Sl(36,"code"),rN(37,"value"),og(),rN(38," refere-se ao conte\xFAdo da linha."),og()(),Sl(39,"pre")(40,"code",6),rN(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),og()(),Sl(42,"blockquote")(43,"p"),rN(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),og()(),Sl(45,"p"),rN(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),og(),Sl(47,"pre")(48,"code",7),rN(49,`...
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
`),og()(),Sl(50,"blockquote")(51,"p"),rN(52,"Observa\xE7\xE3o: Sempre adicionar o "),Sl(53,"strong"),rN(54,"type"),og(),rN(55," da coluna que deseja manipular com a directiva como "),Sl(56,"code"),rN(57,"columnTemplate"),og()()()(),Sl(58,"div",8)(59,"h4",9),rN(60,"Seletor"),og(),Sl(61,"pre",10),rN(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),og()(),Sl(63,"h4",11),rN(64,"Propriedades"),og(),Sl(65,"table",12)(66,"tr",13)(67,"th",14),rN(68,"Nome"),og(),Sl(69,"th",14),rN(70,"Tipo"),og(),Sl(71,"th",14),rN(72,"Padr\xE3o"),og(),Sl(73,"th",14),rN(74,"Descri\xE7\xE3o"),og()(),Sl(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),rN(79," p-property"),Wl(80,"br"),og()()(),Sl(81,"td",19)(82,"code",20),rN(83,"string"),og()(),Sl(84,"td",21),rN(85,"-"),og(),Sl(86,"td",22)(87,"em")(88,"strong"),rN(89,"(opcional)"),og()(),Sl(90,"p"),rN(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),og(),Sl(92,"p"),rN(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-table-column-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(rw("p-actions",l.actions),Lp(2),rw("p-active",l.activeTab==="doc"),Lp(2),rw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,y],encapsulation:2,changeDetection:1})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[mL.forChild(q),mL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoTableColumnTemplateModule};