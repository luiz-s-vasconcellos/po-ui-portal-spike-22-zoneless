import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,cn as o3,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,c8 as Tde,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,b6 as Yo,ba as vNe,a3 as sNe,aD as Ky,aT as oN,aE as Xy,bd as kx,c0 as zD}from'./main-TVDUJ47Y.js';var te=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&Wl(0,"po-avatar",0);},dependencies:[o3],encapsulation:2,changeDetection:1})}return n})();var de=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Avatar Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-avatar-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,de,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,te],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=Ix();Wl(0,"po-avatar",1)(1,"po-divider",2),Sl(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),Cw("ngModelChange",function(v){return Ky(u),oN(i.size,v)||(i.size=v),Xy(v)}),og(),n0(),Sl(6,"po-input",5),Cw("ngModelChange",function(v){return Ky(u),oN(i.src,v)||(i.src=v),Xy(v)}),og(),n0(),og(),Sl(7,"div",3)(8,"po-button",6),ft("p-click",function(){return i.restore()}),og()()();}o&2&&(rw("p-size",i.size)("p-src",i.src),Lp(5),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0(),Lp(),ww("ngModel",i.src),i0());},dependencies:[Q9,Z9,K9,wk,_k,o3,Qt,mv,L3,Tde],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Avatar Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-avatar-labs"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ge,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,oe],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(l){window.open(`tel:${l}`,"_self");}sendContact(l){window.open(`mailto:${l}`,"_self");}formatPhoneNumber(l){return `(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=Ix();Sl(0,"div",1)(1,"po-widget",2),ft("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),Sl(2,"po-avatar",3),ft("p-click",function(){Ky(u);let v=kx(17);return Xy(v.open())}),og(),Sl(3,"div",4)(4,"p")(5,"strong"),rN(6,"Name:"),og(),rN(7),og(),Sl(8,"p")(9,"strong"),rN(10,"Phone:"),og(),rN(11),og(),Sl(12,"p")(13,"strong"),rN(14,"E-mail:"),og(),rN(15),og()()()(),Sl(16,"po-modal",5,0),Wl(18,"img",6),og();}o&2&&(Lp(2),rw("p-src",i.avatar),Lp(5),dg(" ",i.contact.name),Lp(4),dg(" ",i.formatPhoneNumber(i.contact.phone)),Lp(4),dg(" ",i.contact.email),Lp(3),rw("src",i.avatar,zD));},dependencies:[o3,Yo,vNe],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Avatar - Business Card"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),rN(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),og(),Sl(25,"pre",11),rN(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-avatar-business-card"),og(),Wl(29,"hr")),o&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-avatar."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoAvatarComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O componente "),Sl(15,"code"),rN(16,"po-avatar"),og(),rN(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),og(),Sl(18,"p"),rN(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),Sl(20,"code"),rN(21,"po-avatar"),og(),rN(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),og()(),Sl(23,"div",6)(24,"h4",7),rN(25,"Seletor"),og(),Sl(26,"pre",8),rN(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),og()(),Sl(28,"h4",9),rN(29,"Propriedades"),og(),Sl(30,"table",10)(31,"tr",11)(32,"th",12),rN(33,"Nome"),og(),Sl(34,"th",12),rN(35,"Tipo"),og(),Sl(36,"th",12),rN(37,"Padr\xE3o"),og(),Sl(38,"th",12),rN(39,"Descri\xE7\xE3o"),og()(),Sl(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),rN(44," (p-click)"),Wl(45,"br"),og()()(),Sl(46,"td",17)(47,"code",18),rN(48,"EventEmitter"),og()(),Sl(49,"td",19),rN(50,"-"),og(),Sl(51,"td",20)(52,"p"),rN(53,"Evento disparado ao clicar na imagem do "),Sl(54,"em"),rN(55,"avatar"),og(),rN(56,"."),og()()(),Sl(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),rN(61," p-loading"),Wl(62,"br"),og()()(),Sl(63,"td",17)(64,"code",23),rN(65,"'eager' "),og(),Sl(66,"code",24),rN(67," 'lazy'"),og()(),Sl(68,"td",19)(69,"p")(70,"code"),rN(71,"eager"),og()()(),Sl(72,"td",20)(73,"em")(74,"strong"),rN(75,"(opcional)"),og()(),Sl(76,"p"),rN(77,"Indica como o navegador deve carregar a imagem."),og(),Sl(78,"p"),rN(79,"Valores v\xE1lidos:"),og(),Sl(80,"ul")(81,"li")(82,"code"),rN(83,"eager"),og(),rN(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),og(),Sl(85,"li")(86,"code"),rN(87,"lazy"),og(),rN(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),og()()()(),Sl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),rN(93," p-size"),Wl(94,"br"),og()()(),Sl(95,"td",17)(96,"code",25),rN(97,"string"),og()(),Sl(98,"td",19)(99,"p")(100,"code"),rN(101,"md"),og()()(),Sl(102,"td",20)(103,"em")(104,"strong"),rN(105,"(opcional)"),og()(),Sl(106,"p"),rN(107,"Tamanho de exibi\xE7\xE3o do componente."),og(),Sl(108,"p"),rN(109,"Valores v\xE1lidos:"),og(),Sl(110,"ul")(111,"li")(112,"code"),rN(113,"xs"),og(),rN(114," (24x24)"),og(),Sl(115,"li")(116,"code"),rN(117,"sm"),og(),rN(118," (32x32)"),og(),Sl(119,"li")(120,"code"),rN(121,"md"),og(),rN(122," (64x64)"),og(),Sl(123,"li")(124,"code"),rN(125,"lg"),og(),rN(126," (96x96)"),og(),Sl(127,"li")(128,"code"),rN(129,"xl"),og(),rN(130," (144x144)"),og()()()(),Sl(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),rN(135," p-src"),Wl(136,"br"),og()()(),Sl(137,"td",17)(138,"code",25),rN(139,"string"),og()(),Sl(140,"td",19),rN(141,"-"),og(),Sl(142,"td",20)(143,"p"),rN(144,"Fonte da imagem que pode ser um caminho local ("),Sl(145,"code"),rN(146,"./assets/images/logo-black-small.png"),og(),rN(147,`)
ou um servidor externo (`),Sl(148,"code"),rN(149,"https://po-ui.io/assets/images/logo-black-small.png"),og(),rN(150,")."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-avatar-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),og()()()),o&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ne,ie,re,pe],encapsulation:2,changeDetection:1})}return n})();var Ee=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[mL.forChild(Ee),mL]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,me]})}return n})();
export{Ue as DocPoAvatarModule};