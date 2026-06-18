import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,J as zl,T as nw,A as Lp}from'./main-FCMDZGSJ.js';var P=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-combo-option-template-doc"]],standalone:false,decls:69,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,p){n&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoComboOptionTemplateDirective"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"Esta diretiva permite personalizar o conte\xFAdo dos itens exibidos na lista de op\xE7\xF5es do componente."),og(),Il(24,"blockquote")(25,"p"),Qx(26,"Quando utilizada em dispositivos "),Il(27,"em"),Qx(28,"mobile"),og(),Qx(29," ser\xE1 exibido o componente nativo."),og()(),Il(30,"p"),Qx(31,"Para personalizar o conte\xFAdo de cada item da lista deve-se utilizar a diretiva "),Il(32,"code"),Qx(33,"p-combo-option-template"),og(),Qx(34," com "),Il(35,"code"),Qx(36,"ng-template"),og(),Qx(37,`
dentro da `),Il(38,"em"),Qx(39,"tag"),og(),Il(40,"code"),Qx(41,"po-combo"),og(),Qx(42,"."),og(),Il(43,"p"),Qx(44,"Para obter a refer\xEAncia do item atual utilize "),Il(45,"code"),Qx(46,"let-option"),og(),Qx(47,", com isso voc\xEA ter\xE1 acesso aos valores e poder\xE1 personalizar sua exibi\xE7\xE3o."),og(),Il(48,"p"),Qx(49,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Il(50,"em"),Qx(51,"syntax sugar"),og(),Qx(52,". Veja a seguir ambos, respectivamente:"),og(),Il(53,"pre")(54,"code"),Qx(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),og()(),Il(56,"pre")(57,"code"),Qx(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),og()(),Il(59,"p"),Qx(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),og(),Il(61,"pre")(62,"code"),Qx(63,`...
<ng-template p-combo-option-template let-option>
  <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
  <ng-template #optionsGroupTitle>
    <p class="po-combo-item-title" [innerHtml]="option.label"></p>
  </ng-template>
  <ng-template #optionsGroupList>
    <div class="po-combo-item">
      <div class="po-row">
        <po-avatar class="po-md-1" p-size="sm"></po-avatar>
        <div class="po-md-11" [innerHtml]="option.label"></div>
      </div>
    </div>
  </ng-template>
</ng-template>
...
`),og()()(),Il(64,"div",6)(65,"h4",7),Qx(66,"Seletor"),og(),Il(67,"pre",8),Qx(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),og()()());},dependencies:[Ka],encapsulation:2})}return i})();var D=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Combo Option Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,p){n&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return p.changeTab("doc")}),zl(3,"sample-po-combo-option-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return p.changeTab("web")}),og()()()),n&2&&(nw("p-actions",p.actions),Lp(2),nw("p-active",p.activeTab==="doc"),Lp(2),nw("p-hide",p.hidePoWebSample)("p-active",p.activeTab==="web"));},dependencies:[cNe,qme,Yme,P],encapsulation:2})}return i})();var O=[{path:"",component:D}],M=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[uL.forChild(O),uL]})}return i})();var W=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,M]})}return i})();export{W as DocPoComboOptionTemplateModule};