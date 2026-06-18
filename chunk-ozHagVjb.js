import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,aH as Ka,H as Il,q as Qx,R as og,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,J as zl,T as nw,A as Lp}from'./main-QSTLMRDK.js';var x=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-slide-content-template-doc"]],standalone:false,decls:47,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,l){n&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoSlideModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-slide"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoSlideContentTemplateDirective"),og()(),Il(15,"div",2)(16,"p"),Qx(17,"Esta diretiva permite a customiza\xE7\xE3o de um slide."),og(),Il(18,"p"),Qx(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Il(20,"ul")(21,"li"),Qx(22,"Item: "),Il(23,"code"),Qx(24,"item"),og(),Qx(25," determina o item do slide corrente."),og(),Il(26,"li"),Qx(27,"\xCDndice: "),Il(28,"code"),Qx(29,"index"),og(),Qx(30," determina o \xEDndice do slide corrente."),og()(),Il(31,"p"),Qx(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Il(33,"em"),Qx(34,"syntax sugar"),og(),Qx(35,". Veja a seguir ambos, respectivamente:"),og(),Il(36,"pre")(37,"code"),Qx(38,`...
<po-slide
  [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

  <ng-template p-slide-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="item.id"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-slide>

...
`),og()(),Il(39,"pre")(40,"code"),Qx(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),og()()(),Il(42,"div",6)(43,"h4",7),Qx(44,"Seletor"),og(),Il(45,"pre",8),Qx(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),og()()());},dependencies:[Ka],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Slide Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-slide-content-template-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),n&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,x],encapsulation:2})}return o})();var _=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[uL.forChild(_),uL]})}return o})();var O=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{O as DocPoSlideContentTemplateModule};