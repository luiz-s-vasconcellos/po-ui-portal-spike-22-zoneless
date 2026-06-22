import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aH as Ka,F as Sl,z as eN,J as og,H as Wl,a3 as rNe,b8 as Bme,b9 as qme,a1 as ft,Q as nw,L as Lp}from'./main-WP3NAV7C.js';var T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:82,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,l){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente "),Sl(7,"code"),eN(8,"po-list-view"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoListViewDetailTemplateDirective"),og()(),Sl(15,"div",2)(16,"p"),eN(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Sl(18,"code"),eN(19,"Exibir detalhes"),og(),eN(20," abaixo do conte\xFAdo principal do item."),og(),Sl(21,"p"),eN(22,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Sl(23,"ul")(24,"li"),eN(25,"Item: "),Sl(26,"code"),eN(27,"item"),og(),eN(28," determina o item da linha corrente."),og(),Sl(29,"li"),eN(30,"\xCDndice: "),Sl(31,"code"),eN(32,"index"),og(),eN(33," determina o \xEDndice da linha corrente."),og()(),Sl(34,"p"),eN(35,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(36,"em"),eN(37,"syntax sugar"),og(),eN(38,". Veja a seguir ambos, respectivamente:"),og(),Sl(39,"pre")(40,"code"),eN(41,`...
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
`),og()(),Sl(42,"pre")(43,"code"),eN(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()()(),Sl(45,"div",6)(46,"h4",7),eN(47,"Seletor"),og(),Sl(48,"pre",8),eN(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),og()(),Sl(50,"h4",9),eN(51,"Propriedades"),og(),Sl(52,"table",10)(53,"tr",11)(54,"th",12),eN(55,"Nome"),og(),Sl(56,"th",12),eN(57,"Tipo"),og(),Sl(58,"th",12),eN(59,"Padr\xE3o"),og(),Sl(60,"th",12),eN(61,"Descri\xE7\xE3o"),og()(),Sl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),eN(66," p-show-detail"),Wl(67,"br"),og()()(),Sl(68,"td",17)(69,"code",18),eN(70,"(item) => boolean"),og()(),Sl(71,"td",19),eN(72,"-"),og(),Sl(73,"td",20)(74,"em")(75,"strong"),eN(76,"(opcional)"),og()(),Sl(77,"p"),eN(78,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Sl(79,"code"),eN(80,"boolean"),og(),eN(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-list-view-detail-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),n&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[rNe,Bme,qme,T],encapsulation:2})}return o})();var V=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[hL.forChild(V),hL]})}return o})();var B=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{B as DocPoListViewDetailTemplateModule};