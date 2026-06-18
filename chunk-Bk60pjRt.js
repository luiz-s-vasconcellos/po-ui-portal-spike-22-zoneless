import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,J as zl,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-QSTLMRDK.js';var T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:82,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,l){n&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-list-view"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoListViewDetailTemplateDirective"),og()(),Il(15,"div",2)(16,"p"),Qx(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Il(18,"code"),Qx(19,"Exibir detalhes"),og(),Qx(20," abaixo do conte\xFAdo principal do item."),og(),Il(21,"p"),Qx(22,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Il(23,"ul")(24,"li"),Qx(25,"Item: "),Il(26,"code"),Qx(27,"item"),og(),Qx(28," determina o item da linha corrente."),og(),Il(29,"li"),Qx(30,"\xCDndice: "),Il(31,"code"),Qx(32,"index"),og(),Qx(33," determina o \xEDndice da linha corrente."),og()(),Il(34,"p"),Qx(35,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Il(36,"em"),Qx(37,"syntax sugar"),og(),Qx(38,". Veja a seguir ambos, respectivamente:"),og(),Il(39,"pre")(40,"code"),Qx(41,`...
<po-list-view
  p-property-title="name"
  [p-items]="items">

  <ng-template p-list-view-detail-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),og()(),Il(42,"pre")(43,"code"),Qx(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()()(),Il(45,"div",6)(46,"h4",7),Qx(47,"Seletor"),og(),Il(48,"pre",8),Qx(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),og()(),Il(50,"h4",9),Qx(51,"Propriedades"),og(),Il(52,"table",10)(53,"tr",11)(54,"th",12),Qx(55,"Nome"),og(),Il(56,"th",12),Qx(57,"Tipo"),og(),Il(58,"th",12),Qx(59,"Padr\xE3o"),og(),Il(60,"th",12),Qx(61,"Descri\xE7\xE3o"),og()(),Il(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),Qx(66," p-show-detail"),zl(67,"br"),og()()(),Il(68,"td",17)(69,"code",18),Qx(70,"(item) => boolean"),og()(),Il(71,"td",19),Qx(72,"-"),og(),Il(73,"td",20)(74,"em")(75,"strong"),Qx(76,"(opcional)"),og()(),Il(77,"p"),Qx(78,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Il(79,"code"),Qx(80,"boolean"),og(),Qx(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-list-view-detail-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),n&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,T],encapsulation:2})}return o})();var V=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[uL.forChild(V),uL]})}return o})();var B=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{B as DocPoListViewDetailTemplateModule};