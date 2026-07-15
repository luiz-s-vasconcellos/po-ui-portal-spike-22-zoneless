import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aH as Ka,C as Sl,y as rN,J as og,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,F as Wl,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var T=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-combo-option-template-doc"]],standalone:false,decls:69,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,p){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoComboOptionTemplateDirective"),og()(),Sl(21,"div",2)(22,"p"),rN(23,"Esta diretiva permite personalizar o conte\xFAdo dos itens exibidos na lista de op\xE7\xF5es do componente."),og(),Sl(24,"blockquote")(25,"p"),rN(26,"Quando utilizada em dispositivos "),Sl(27,"em"),rN(28,"mobile"),og(),rN(29," ser\xE1 exibido o componente nativo."),og()(),Sl(30,"p"),rN(31,"Para personalizar o conte\xFAdo de cada item da lista deve-se utilizar a diretiva "),Sl(32,"code"),rN(33,"p-combo-option-template"),og(),rN(34," com "),Sl(35,"code"),rN(36,"ng-template"),og(),rN(37,`
dentro da `),Sl(38,"em"),rN(39,"tag"),og(),Sl(40,"code"),rN(41,"po-combo"),og(),rN(42,"."),og(),Sl(43,"p"),rN(44,"Para obter a refer\xEAncia do item atual utilize "),Sl(45,"code"),rN(46,"let-option"),og(),rN(47,", com isso voc\xEA ter\xE1 acesso aos valores e poder\xE1 personalizar sua exibi\xE7\xE3o."),og(),Sl(48,"p"),rN(49,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),Sl(50,"em"),rN(51,"syntax sugar"),og(),rN(52,". Veja a seguir ambos, respectivamente:"),og(),Sl(53,"pre")(54,"code"),rN(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),og()(),Sl(56,"pre")(57,"code"),rN(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),og()(),Sl(59,"p"),rN(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),og(),Sl(61,"pre")(62,"code"),rN(63,`...
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
`),og()()(),Sl(64,"div",6)(65,"h4",7),rN(66,"Seletor"),og(),Sl(67,"pre",8),rN(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),og()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var P=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Combo Option Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,p){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return p.changeTab("doc")}),Wl(3,"sample-po-combo-option-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return p.changeTab("web")}),og()()()),n&2&&(rw("p-actions",p.actions),Lp(2),rw("p-active",p.activeTab==="doc"),Lp(2),rw("p-hide",p.hidePoWebSample)("p-active",p.activeTab==="web"));},dependencies:[sNe,Ume,$me,T],encapsulation:2,changeDetection:1})}return i})();var O=[{path:"",component:P}],y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[mL.forChild(O),mL]})}return i})();var W=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,y]})}return i})();export{W as DocPoComboOptionTemplateModule};