import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,J as zl,T as nw,A as Lp}from'./main-FCMDZGSJ.js';var D=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-table-cell-template-doc"]],standalone:false,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(a,l){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-table"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoTableCellTemplateDirective"),og()(),Il(12,"div",2)(13,"p"),Qx(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),og(),Il(15,"p"),Qx(16,"Em seu uso, deve-se apenas adicionar a diretiva "),Il(17,"strong"),Qx(18,"p-table-cell-template"),og(),Qx(19," \xE0 tag "),Il(20,"code"),Qx(21,"ng-template"),og(),Qx(22,"."),og(),Il(23,"p"),Qx(24,"Retorno:"),og(),Il(25,"ul")(26,"li")(27,"code"),Qx(28,"column"),og(),Qx(29,": conte\xFAdo da coluna corrente."),og(),Il(30,"li")(31,"code"),Qx(32,"row"),og(),Qx(33,": conte\xFAdo da linha corrente"),og()(),Il(34,"p"),Qx(35,"Modo de uso:"),og(),Il(36,"pre")(37,"code"),Qx(38,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),og()(),Il(39,"blockquote")(40,"p"),Qx(41,"No exemplo acima, o usu\xE1rio tem como retorno "),Il(42,"code"),Qx(43,"row"),og(),Qx(44," e a "),Il(45,"code"),Qx(46,"column"),og(),Qx(47," corrente, neste caso ele tem total liberdade para manipular os objetos."),og()(),Il(48,"p"),Qx(49,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),og(),Il(50,"pre")(51,"code"),Qx(52,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),og()(),Il(53,"blockquote")(54,"p"),Qx(55,"Observa\xE7\xE3o: Sempre adicionar o "),Il(56,"strong"),Qx(57,"type"),og(),Qx(58," da coluna que deseja manipular com a directiva como "),Il(59,"code"),Qx(60,"cellTemplate"),og()()()(),Il(61,"div",6)(62,"h4",7),Qx(63,"Seletor"),og(),Il(64,"pre",8),Qx(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),og()()());},dependencies:[Ka],encapsulation:2})}return n})();var y=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Table Cell Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-table-cell-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,D],encapsulation:2})}return n})();var I=[{path:"",component:y}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(I),uL]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoTableCellTemplateModule};