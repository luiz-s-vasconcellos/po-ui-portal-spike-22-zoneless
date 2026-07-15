import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,aH as Ka,C as Sl,y as rN,J as og,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,F as Wl,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var x=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-slide-content-template-doc"]],standalone:false,decls:47,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(n,l){n&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoSlideModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-slide"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoSlideContentTemplateDirective"),og()(),Sl(15,"div",2)(16,"p"),rN(17,"Esta diretiva permite a customiza\xE7\xE3o de um slide."),og(),Sl(18,"p"),rN(19,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),og(),Sl(20,"ul")(21,"li"),rN(22,"Item: "),Sl(23,"code"),rN(24,"item"),og(),rN(25," determina o item do slide corrente."),og(),Sl(26,"li"),rN(27,"\xCDndice: "),Sl(28,"code"),rN(29,"index"),og(),rN(30," determina o \xEDndice do slide corrente."),og()(),Sl(31,"p"),rN(32,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),Sl(33,"em"),rN(34,"syntax sugar"),og(),rN(35,". Veja a seguir ambos, respectivamente:"),og(),Sl(36,"pre")(37,"code"),rN(38,`...
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
`),og()(),Sl(39,"pre")(40,"code"),rN(41,`...
<po-slide
   [p-slides]="[{ id: 1, name: 'Register', email: 'register@po-ui.com' }]">

   <div *p-slide-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-slide>
...
`),og()()(),Sl(42,"div",6)(43,"h4",7),rN(44,"Seletor"),og(),Sl(45,"pre",8),rN(46,`<[p-slide-content-template] >
</[p-slide-content-template]>
`),og()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","Slide Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,l){n&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-slide-content-template-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),n&2&&(rw("p-actions",l.actions),Lp(2),rw("p-active",l.activeTab==="doc"),Lp(2),rw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,x],encapsulation:2,changeDetection:1})}return o})();var _=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[mL.forChild(_),mL]})}return o})();var O=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,y]})}return o})();export{O as DocPoSlideContentTemplateModule};