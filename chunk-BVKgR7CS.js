import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,J as zl,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-FCMDZGSJ.js';var D=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:96,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(o,r){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-list-view"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoListViewContentTemplateDirective"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),og(),Il(18,"p"),Qx(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Il(20,"ul")(21,"li"),Qx(22,"Item: "),Il(23,"code"),Qx(24,"item"),og(),Qx(25," determina o item da linha corrente."),og(),Il(26,"li"),Qx(27,"\xCDndice: "),Il(28,"code"),Qx(29,"index"),og(),Qx(30," determina o \xEDndice da linha corrente."),og()(),Il(31,"p"),Qx(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Il(33,"em"),Qx(34,"syntax sugar"),og(),Qx(35,". Veja a seguir ambos, respectivamente:"),og(),Il(36,"pre")(37,"code"),Qx(38,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),og()(),Il(39,"pre")(40,"code"),Qx(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()(),Il(42,"p"),Qx(43,"A diretiva "),Il(44,"strong"),Qx(45,"p-list-view-content-template"),og(),Qx(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Il(47,"code"),Qx(48,"p-title"),og(),Qx(49,`,
a mesma deve retornar um valor do tipo `),Il(50,"em"),Qx(51,"string"),og(),Qx(52,". Veja o exemplo a seguir:"),og(),Il(53,"pre")(54,"code"),Qx(55,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),og()()(),Il(56,"div",6)(57,"h4",7),Qx(58,"Seletor"),og(),Il(59,"pre",8),Qx(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),og()(),Il(61,"h4",9),Qx(62,"Propriedades"),og(),Il(63,"table",10)(64,"tr",11)(65,"th",12),Qx(66,"Nome"),og(),Il(67,"th",12),Qx(68,"Tipo"),og(),Il(69,"th",12),Qx(70,"Padr\xE3o"),og(),Il(71,"th",12),Qx(72,"Descri\xE7\xE3o"),og()(),Il(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),Qx(77," p-title"),zl(78,"br"),og()()(),Il(79,"td",17)(80,"code",18),Qx(81,"(item) => string"),og()(),Il(82,"td",19),Qx(83,"-"),og(),Il(84,"td",20)(85,"em")(86,"strong"),Qx(87,"(opcional)"),og()(),Il(88,"p"),Qx(89,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Il(90,"code"),Qx(91,"string"),og(),Qx(92,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),og(),Il(93,"blockquote")(94,"p"),Qx(95,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var T=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,r){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),zl(3,"sample-po-list-view-content-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),o&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[cNe,qme,Yme,D],encapsulation:2})}return n})();var V=[{path:"",component:T}],P=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(V),uL]})}return n})();var W=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoListViewContentTemplateModule};