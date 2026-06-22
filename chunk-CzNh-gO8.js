import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,aH as Ka,F as Sl,z as eN,J as og,H as Wl,a3 as rNe,b8 as Bme,b9 as qme,a1 as ft,Q as nw,L as Lp}from'./main-WP3NAV7C.js';var D=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-list-view-content-template-doc"]],standalone:false,decls:96,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(o,r){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoListViewModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente "),Sl(7,"code"),eN(8,"po-list-view"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoListViewContentTemplateDirective"),og()(),Sl(15,"div",2)(16,"p"),eN(17,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),og(),Sl(18,"p"),eN(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Sl(20,"ul")(21,"li"),eN(22,"Item: "),Sl(23,"code"),eN(24,"item"),og(),eN(25," determina o item da linha corrente."),og(),Sl(26,"li"),eN(27,"\xCDndice: "),Sl(28,"code"),eN(29,"index"),og(),eN(30," determina o \xEDndice da linha corrente."),og()(),Sl(31,"p"),eN(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(33,"em"),eN(34,"syntax sugar"),og(),eN(35,". Veja a seguir ambos, respectivamente:"),og(),Sl(36,"pre")(37,"code"),eN(38,`...
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
`),og()(),Sl(39,"pre")(40,"code"),eN(41,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),og()(),Sl(42,"p"),eN(43,"A diretiva "),Sl(44,"strong"),eN(45,"p-list-view-content-template"),og(),eN(46,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),Sl(47,"code"),eN(48,"p-title"),og(),eN(49,`,
a mesma deve retornar um valor do tipo `),Sl(50,"em"),eN(51,"string"),og(),eN(52,". Veja o exemplo a seguir:"),og(),Sl(53,"pre")(54,"code"),eN(55,`...
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
`),og()()(),Sl(56,"div",6)(57,"h4",7),eN(58,"Seletor"),og(),Sl(59,"pre",8),eN(60,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),og()(),Sl(61,"h4",9),eN(62,"Propriedades"),og(),Sl(63,"table",10)(64,"tr",11)(65,"th",12),eN(66,"Nome"),og(),Sl(67,"th",12),eN(68,"Tipo"),og(),Sl(69,"th",12),eN(70,"Padr\xE3o"),og(),Sl(71,"th",12),eN(72,"Descri\xE7\xE3o"),og()(),Sl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),eN(77," p-title"),Wl(78,"br"),og()()(),Sl(79,"td",17)(80,"code",18),eN(81,"(item) => string"),og()(),Sl(82,"td",19),eN(83,"-"),og(),Sl(84,"td",20)(85,"em")(86,"strong"),eN(87,"(opcional)"),og()(),Sl(88,"p"),eN(89,"Fun\xE7\xE3o que deve retornar um valor do tipo "),Sl(90,"code"),eN(91,"string"),og(),eN(92,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),og(),Sl(93,"blockquote")(94,"p"),eN(95,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var T=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,r){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-list-view-content-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),og()()()),o&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[rNe,Bme,qme,D],encapsulation:2})}return n})();var V=[{path:"",component:T}],P=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[hL.forChild(V),hL]})}return n})();var W=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,P]})}return n})();export{W as DocPoListViewContentTemplateModule};