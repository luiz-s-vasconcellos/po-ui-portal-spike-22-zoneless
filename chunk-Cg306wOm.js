import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aH as Ka,C as Sl,y as rN,J as og,F as Wl,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-list-view-detail-template-doc"]],standalone:false,decls:82,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,l){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-list-view"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoListViewDetailTemplateDirective"),og()(),Sl(15,"div",2)(16,"p"),rN(17,`Esta diretiva permite que sejam apresentadas informa\xE7\xF5es adicionais de cada item, construindo um
bot\xE3o `),Sl(18,"code"),rN(19,"Exibir detalhes"),og(),rN(20," abaixo do conte\xFAdo principal do item."),og(),Sl(21,"p"),rN(22,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Sl(23,"ul")(24,"li"),rN(25,"Item: "),Sl(26,"code"),rN(27,"item"),og(),rN(28," determina o item da linha corrente."),og(),Sl(29,"li"),rN(30,"\xCDndice: "),Sl(31,"code"),rN(32,"index"),og(),rN(33," determina o \xEDndice da linha corrente."),og()(),Sl(34,"p"),rN(35,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(36,"em"),rN(37,"syntax sugar"),og(),rN(38,". Veja a seguir ambos, respectivamente:"),og(),Sl(39,"pre")(40,"code"),rN(41,`...
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
`),og()(),Sl(42,"pre")(43,"code"),rN(44,`...
<po-list-view
   p-property-title="name"
   [p-items]="items">
   <div *p-list-view-detail-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()()(),Sl(45,"div",6)(46,"h4",7),rN(47,"Seletor"),og(),Sl(48,"pre",8),rN(49,`<[p-list-view-detail-template]
    p-show-detail="(item) => boolean" >
</[p-list-view-detail-template]>
`),og()(),Sl(50,"h4",9),rN(51,"Propriedades"),og(),Sl(52,"table",10)(53,"tr",11)(54,"th",12),rN(55,"Nome"),og(),Sl(56,"th",12),rN(57,"Tipo"),og(),Sl(58,"th",12),rN(59,"Padr\xE3o"),og(),Sl(60,"th",12),rN(61,"Descri\xE7\xE3o"),og()(),Sl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),rN(66," p-show-detail"),Wl(67,"br"),og()()(),Sl(68,"td",17)(69,"code",18),rN(70,"(item) => boolean"),og()(),Sl(71,"td",19),rN(72,"-"),og(),Sl(73,"td",20)(74,"em")(75,"strong"),rN(76,"(opcional)"),og()(),Sl(77,"p"),rN(78,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Sl(79,"code"),rN(80,"boolean"),og(),rN(81,`, que ser\xE1 utilizado como a valida\xE7\xE3o para que o detalhe de item
da lista inicie aberto ou fechado.`),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var y=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Detail Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-list-view-detail-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),n&2&&(rw("p-actions",l.actions),Lp(2),rw("p-active",l.activeTab==="doc"),Lp(2),rw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,T],encapsulation:2,changeDetection:1})}return o})();var V=[{path:"",component:y}],P=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[mL.forChild(V),mL]})}return o})();var B=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,P]})}return o})();export{B as DocPoListViewDetailTemplateModule};