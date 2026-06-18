import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,cn as a3,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as F3,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,b6 as Yo,ba as yNe,a3 as cNe,aD as Xy,aT as eN,aE as Qy,bd as Ax,c0 as zD}from'./main-FCMDZGSJ.js';var te=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&zl(0,"po-avatar",0);},dependencies:[a3],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Avatar Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-avatar-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ce,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,te],encapsulation:2})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=Dx();zl(0,"po-avatar",1)(1,"po-divider",2),Il(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),ww("ngModelChange",function(v){return Xy(u),eN(i.size,v)||(i.size=v),Qy(v)}),og(),QA(),Il(6,"po-input",5),ww("ngModelChange",function(v){return Xy(u),eN(i.src,v)||(i.src=v),Qy(v)}),og(),QA(),og(),Il(7,"div",3)(8,"po-button",6),ft("p-click",function(){return i.restore()}),og()()();}o&2&&(nw("p-size",i.size)("p-src",i.src),Lp(5),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0(),Lp(),Ew("ngModel",i.src),e0());},dependencies:[G9,$9,z9,mk,hk,a3,Qt,mv,F3,Dde],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Avatar Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="sizes"
      [(ngModel)]="size"
      p-help="Select a size for the avatar"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-input
      class="po-lg-6"
      name="src"
      [(ngModel)]="src"
      p-clear
      p-help="Enter a url or path of the image that will be displayed"
      p-label="Source"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-avatar-labs',
  templateUrl: './sample-po-avatar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarLabsComponent implements OnInit {
  src: string;
  size: string;

  sizeOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Extra Large (144x144)', value: 'xl' },
    { label: 'Large (96x96)', value: 'lg' },
    { label: 'Medium (64x64)', value: 'md' },
    { label: 'Small (32x32)', value: 'sm' },
    { label: 'Extra small (24x24)', value: 'xs' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.src = 'http://lorempixel.com/144/144/cats';
    this.size = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-avatar-labs"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,oe],encapsulation:2})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(l){window.open(`tel:${l}`,"_self");}sendContact(l){window.open(`mailto:${l}`,"_self");}formatPhoneNumber(l){return `(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=Dx();Il(0,"div",1)(1,"po-widget",2),ft("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),Il(2,"po-avatar",3),ft("p-click",function(){Xy(u);let v=Ax(17);return Qy(v.open())}),og(),Il(3,"div",4)(4,"p")(5,"strong"),Qx(6,"Name:"),og(),Qx(7),og(),Il(8,"p")(9,"strong"),Qx(10,"Phone:"),og(),Qx(11),og(),Il(12,"p")(13,"strong"),Qx(14,"E-mail:"),og(),Qx(15),og()()()(),Il(16,"po-modal",5,0),zl(18,"img",6),og();}o&2&&(Lp(2),nw("p-src",i.avatar),Lp(5),dg(" ",i.contact.name),Lp(4),dg(" ",i.formatPhoneNumber(i.contact.phone)),Lp(4),dg(" ",i.contact.email),Lp(3),nw("src",i.avatar,zD));},dependencies:[a3,Yo,yNe],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Avatar - Business Card"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-widget
    class="po-sm-12 po-md-8 po-lg-6"
    p-height="250"
    p-title="Business Card"
    p-primary-label="Call"
    p-secondary-label="Send e-mail"
    (p-primary-action)="callContact(contact.phone)"
    (p-secondary-action)="sendContact(contact.email)"
  >
    <po-avatar class="po-md-4" p-size="lg" [p-src]="avatar" (p-click)="modal.open()"> </po-avatar>

    <div class="po-md-8">
      <p><strong>Name:</strong> { { contact.name }}</p>
      <p><strong>Phone:</strong> { { formatPhoneNumber(contact.phone) }}</p>
      <p><strong>E-mail:</strong> { { contact.email }}</p>
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Profile Image">
  <img [src]="avatar" class="sample-center-image" />
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-business-card',
  styleUrls: ['./sample-po-avatar-business-card.component.css'],
  templateUrl: './sample-po-avatar-business-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBusinessCardComponent {
  avatar = 'http://lorempixel.com/300/300/cats/';

  contact = {
    name: 'Mr. Dev PO',
    email: 'dev.po@po-ui.com',
    phone: '47912012015'
  };

  callContact(phone) {
    window.open(\`tel:\${phone}\`, '_self');
  }

  sendContact(email) {
    window.open(\`mailto:\${email}\`, '_self');
  }

  formatPhoneNumber(phone) {
    return \`(\${phone.substring(0, 2)}) \${phone.substring(2, 7)}-\${phone.substring(7)}\`;
  }
}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-avatar-business-card"),og(),zl(29,"hr")),o&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-avatar."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoAvatarComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-avatar"),og(),Qx(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),og(),Il(18,"p"),Qx(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),Il(20,"code"),Qx(21,"po-avatar"),og(),Qx(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),og()(),Il(23,"div",6)(24,"h4",7),Qx(25,"Seletor"),og(),Il(26,"pre",8),Qx(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),og()(),Il(28,"h4",9),Qx(29,"Propriedades"),og(),Il(30,"table",10)(31,"tr",11)(32,"th",12),Qx(33,"Nome"),og(),Il(34,"th",12),Qx(35,"Tipo"),og(),Il(36,"th",12),Qx(37,"Padr\xE3o"),og(),Il(38,"th",12),Qx(39,"Descri\xE7\xE3o"),og()(),Il(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),Qx(44," (p-click)"),zl(45,"br"),og()()(),Il(46,"td",17)(47,"code",18),Qx(48,"EventEmitter"),og()(),Il(49,"td",19),Qx(50,"-"),og(),Il(51,"td",20)(52,"p"),Qx(53,"Evento disparado ao clicar na imagem do "),Il(54,"em"),Qx(55,"avatar"),og(),Qx(56,"."),og()()(),Il(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),Qx(61," p-loading"),zl(62,"br"),og()()(),Il(63,"td",17)(64,"code",23),Qx(65,"'eager' "),og(),Il(66,"code",24),Qx(67," 'lazy'"),og()(),Il(68,"td",19)(69,"p")(70,"code"),Qx(71,"eager"),og()()(),Il(72,"td",20)(73,"em")(74,"strong"),Qx(75,"(opcional)"),og()(),Il(76,"p"),Qx(77,"Indica como o navegador deve carregar a imagem."),og(),Il(78,"p"),Qx(79,"Valores v\xE1lidos:"),og(),Il(80,"ul")(81,"li")(82,"code"),Qx(83,"eager"),og(),Qx(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),og(),Il(85,"li")(86,"code"),Qx(87,"lazy"),og(),Qx(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),og()()()(),Il(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),Qx(93," p-size"),zl(94,"br"),og()()(),Il(95,"td",17)(96,"code",25),Qx(97,"string"),og()(),Il(98,"td",19)(99,"p")(100,"code"),Qx(101,"md"),og()()(),Il(102,"td",20)(103,"em")(104,"strong"),Qx(105,"(opcional)"),og()(),Il(106,"p"),Qx(107,"Tamanho de exibi\xE7\xE3o do componente."),og(),Il(108,"p"),Qx(109,"Valores v\xE1lidos:"),og(),Il(110,"ul")(111,"li")(112,"code"),Qx(113,"xs"),og(),Qx(114," (24x24)"),og(),Il(115,"li")(116,"code"),Qx(117,"sm"),og(),Qx(118," (32x32)"),og(),Il(119,"li")(120,"code"),Qx(121,"md"),og(),Qx(122," (64x64)"),og(),Il(123,"li")(124,"code"),Qx(125,"lg"),og(),Qx(126," (96x96)"),og(),Il(127,"li")(128,"code"),Qx(129,"xl"),og(),Qx(130," (144x144)"),og()()()(),Il(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),Qx(135," p-src"),zl(136,"br"),og()()(),Il(137,"td",17)(138,"code",25),Qx(139,"string"),og()(),Il(140,"td",19),Qx(141,"-"),og(),Il(142,"td",20)(143,"p"),Qx(144,"Fonte da imagem que pode ser um caminho local ("),Il(145,"code"),Qx(146,"./assets/images/logo-black-small.png"),og(),Qx(147,`)
ou um servidor externo (`),Il(148,"code"),Qx(149,"https://po-ui.io/assets/images/logo-black-small.png"),og(),Qx(150,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-avatar-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),og()()()),o&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ne,ie,pe,re],encapsulation:2})}return n})();var Ee=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(Ee),uL]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,me]})}return n})();
export{Ue as DocPoAvatarModule};