import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,aK as rS,F as Sl,H as Wl,J as og,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as wde,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,cZ as Nhe,bd as Nx,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ne=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,o){a&1&&(Sl(0,"div",0),Wl(1,"po-loading-overlay"),og());},dependencies:[rS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Loading Overlay Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-loading-overlay-basic"),og(),Wl(29,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ge,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ne],encapsulation:2})}return i})();var ae=(()=>{class i{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore();}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[];},2e3);}restore(){this.size="lg",this.text=null;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs"]],standalone:false,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,o){if(a&1){let d=wx();Sl(0,"div",1),Wl(1,"po-loading-overlay",2),og(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(r){return Ky(d),nN(o.text,r)||(o.text=r),Xy(r)}),og(),e0(),Sl(7,"po-checkbox-group",5),ww("ngModelChange",function(r){return Ky(d),nN(o.properties,r)||(o.properties=r),Xy(r)}),ft("p-change",function(r){return o.onChangeCheckbox(r)}),og(),e0(),og(),Sl(8,"div",3)(9,"po-radio-group",6),ww("ngModelChange",function(r){return Ky(d),nN(o.size,r)||(o.size=r),Xy(r)}),og(),e0(),og(),Sl(10,"div",3)(11,"div",7)(12,"po-button",8),ft("p-click",function(){return o.restore()}),og()()()();}a&2&&(Lp(),nw("p-screen-lock",o.properties==null?null:o.properties.includes("screenLock"))("p-text",o.text)("p-size",o.size),Lp(5),Ew("ngModel",o.text),n0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),n0(),Lp(2),Ew("ngModel",o.size),nw("p-options",o.sizesOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,b3,L3,wde,rS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Loading Overlay Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="sample-container">
  <po-loading-overlay
    [p-screen-lock]="$safeNavigationMigration(properties?.includes('screenLock'))"
    [p-text]="text"
    [p-size]="size"
  >
  </po-loading-overlay>
</div>

<po-divider />

<form #formProperties="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="text" [(ngModel)]="text" p-label="Text"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="onChangeCheckbox($event)"
    >
    </po-checkbox-group>
  </div>
  <div class="po-row">
    <po-radio-group class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <div class="po-md-3">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-labs',
  templateUrl: './sample-po-loading-overlay-labs.component.html',
  styleUrls: ['./sample-po-loading-overlay-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayLabsComponent implements OnInit {
  properties: Array<string> = [];
  text: string;
  size: string;
  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'screenLock', label: 'Screen Lock' }];

  ngOnInit() {
    this.restore();
  }

  onChangeCheckbox(checkbox: Array<string>) {
    if (checkbox.includes('screenLock')) {
      setTimeout(() => {
        this.properties = [];
      }, 2000);
    }
  }

  restore() {
    this.size = 'lg';
    this.text = null;
  }
}
`),og()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),eN(24,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css"),og(),Sl(25,"pre",11),eN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),og()()()()(),Sl(27,"div",12),Wl(28,"sample-po-loading-overlay-labs"),og(),Wl(29,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ce,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ae],encapsulation:2})}return i})();var re=(()=>{class i{poNotification=f(Yp);environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=true;connectionTest(){let p="Connection ok";this.isHideLoading=false,setTimeout(()=>{this.isHideLoading=true,this.poNotification.success(p);},450);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:false,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,o){if(a&1){let d=wx();Sl(0,"form",null,0)(2,"div"),Wl(3,"po-loading-overlay",1),og(),Sl(4,"div",2)(5,"po-input",3),ww("ngModelChange",function(r){return Ky(d),nN(o.environment.urlServer,r)||(o.environment.urlServer=r),Xy(r)}),og(),e0(),Sl(6,"po-input",4),ww("ngModelChange",function(r){return Ky(d),nN(o.environment.urlDB,r)||(o.environment.urlDB=r),Xy(r)}),og(),e0(),Sl(7,"po-input",5),ww("ngModelChange",function(r){return Ky(d),nN(o.environment.userDB,r)||(o.environment.userDB=r),Xy(r)}),og(),e0(),Sl(8,"po-password",6),ww("ngModelChange",function(r){return Ky(d),nN(o.environment.passwordDB,r)||(o.environment.passwordDB=r),Xy(r)}),og(),e0(),og(),Sl(9,"div",2)(10,"po-button",7),ft("p-click",function(){Ky(d);let r=Nx(1);return o.connectionTest(),Xy(r.reset())}),og()()();}if(a&2){let d=Nx(1);Lp(3),nw("hidden",o.isHideLoading),Lp(2),Ew("ngModel",o.environment.urlServer),n0(),Lp(),Ew("ngModel",o.environment.urlDB),n0(),Lp(),Ew("ngModel",o.environment.userDB),n0(),Lp(),Ew("ngModel",o.environment.passwordDB),n0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[Z9,G9,q9,_k,mk,Qt,L3,Nhe,rS],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Loading Overlay - Connection Test"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #formConfig="ngForm">
  <div>
    <po-loading-overlay [hidden]="isHideLoading"></po-loading-overlay>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="urlServer"
      [(ngModel)]="environment.urlServer"
      p-clean
      p-label="URL Server"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="urlDB" [(ngModel)]="environment.urlDB" p-clean p-label="URL Database" p-required>
    </po-input>

    <po-input class="po-md-6" name="userDB" [(ngModel)]="environment.userDB" p-clean p-label="User Database" p-required>
    </po-input>

    <po-password
      class="po-md-6"
      name="passwordDB"
      [(ngModel)]="environment.passwordDB"
      p-clean
      p-label="Password Database"
      p-required
    >
    </po-password>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Connect"
      [p-disabled]="formConfig.invalid"
      (p-click)="connectionTest(); formConfig.reset()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-connection-test',
  templateUrl: 'sample-po-loading-overlay-connection-test.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayConnectionTestComponent {
  private poNotification = inject(PoNotificationService);

  environment = {
    urlServer: '',
    urlDB: '',
    userDB: '',
    passwordDB: ''
  };

  isHideLoading = true;

  connectionTest() {
    const message = 'Connection ok';

    this.isHideLoading = false;

    setTimeout(() => {
      this.isHideLoading = true;
      this.poNotification.success(message);
    }, 450);
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-loading-overlay-connection-test"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ye,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,re],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-doc"]],standalone:false,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-loading-overlay."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoLoadingOverlayComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"Este componente mostra ao usu\xE1rio uma imagem de "),Sl(15,"em"),eN(16,"loading"),og(),eN(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),og(),Sl(18,"h4"),eN(19,"Tokens customiz\xE1veis"),og(),Sl(20,"p"),eN(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(22,"br"),eN(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(24,"code"),eN(25,".po-loading"),og()(),Sl(26,"blockquote")(27,"p"),eN(28,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(29,"a",6),eN(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(31,"."),og()(),Sl(32,"table")(33,"thead")(34,"tr")(35,"th"),eN(36,"Propriedade"),og(),Sl(37,"th"),eN(38,"Descri\xE7\xE3o"),og(),Sl(39,"th"),eN(40,"Valor Padr\xE3o"),og()()(),Sl(41,"tbody")(42,"tr")(43,"td")(44,"strong"),eN(45,"Default Values"),og()(),Wl(46,"td")(47,"td"),og(),Sl(48,"tr")(49,"td")(50,"code"),eN(51,"--font-family"),og()(),Sl(52,"td"),eN(53,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(54,"td")(55,"code"),eN(56,"var(--font-family-theme)"),og()()(),Sl(57,"tr")(58,"td")(59,"code"),eN(60,"--font-weight"),og()(),Sl(61,"td"),eN(62,"Peso da fonte"),og(),Sl(63,"td")(64,"code"),eN(65,"var(--font-weight-normal)"),og()()(),Sl(66,"tr")(67,"td")(68,"code"),eN(69,"--text-color"),og()(),Sl(70,"td"),eN(71,"Cor do texto"),og(),Sl(72,"td")(73,"code"),eN(74,"var(--color-neutral-dark-70)"),og()()(),Sl(75,"tr")(76,"td")(77,"code"),eN(78,"--border-radius"),og()(),Sl(79,"td"),eN(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(81,"td")(82,"code"),eN(83,"var(--border-radius-md)"),og()()(),Sl(84,"tr")(85,"td")(86,"code"),eN(87,"--border-width"),og()(),Sl(88,"td"),eN(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Sl(90,"td")(91,"code"),eN(92,"var(--border-width-sm)"),og()()(),Sl(93,"tr")(94,"td")(95,"code"),eN(96,"--border-color"),og()(),Sl(97,"td"),eN(98,"Cor da borda"),og(),Sl(99,"td")(100,"code"),eN(101,"var(--color-neutral-light-20)"),og()()(),Sl(102,"tr")(103,"td")(104,"code"),eN(105,"--background"),og()(),Sl(106,"td"),eN(107,"Cor de background"),og(),Sl(108,"td")(109,"code"),eN(110,"var(--color-neutral-light-00)"),og()()(),Sl(111,"tr")(112,"td")(113,"code"),eN(114,"--shadow"),og()(),Sl(115,"td"),eN(116,"Cont\xE9m o valor da sombra do elemento"),og(),Sl(117,"td")(118,"code"),eN(119,"var(--shadow-md)"),og()()(),Sl(120,"tr")(121,"td")(122,"strong"),eN(123,"po-loading-icon"),og()(),Wl(124,"td")(125,"td"),og(),Sl(126,"tr")(127,"td")(128,"code"),eN(129,"--color"),og()(),Sl(130,"td"),eN(131,"Cor principal do spinner"),og(),Sl(132,"td")(133,"code"),eN(134,"var(--color-action-default)"),og()()()()()(),Sl(135,"div",7)(136,"h4",8),eN(137,"Seletor"),og(),Sl(138,"pre",9),eN(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),og()(),Sl(140,"h4",10),eN(141,"Propriedades"),og(),Sl(142,"table",11)(143,"tr",12)(144,"th",13),eN(145,"Nome"),og(),Sl(146,"th",13),eN(147,"Tipo"),og(),Sl(148,"th",13),eN(149,"Padr\xE3o"),og(),Sl(150,"th",13),eN(151,"Descri\xE7\xE3o"),og()(),Sl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),eN(156," p-screen-lock"),Wl(157,"br"),og()()(),Sl(158,"td",18)(159,"code",19),eN(160,"boolean"),og()(),Sl(161,"td",20)(162,"p")(163,"code"),eN(164,"false"),og()()(),Sl(165,"td",21)(166,"em")(167,"strong"),eN(168,"(opcional)"),og()(),Sl(169,"p"),eN(170,"Define se o "),Sl(171,"em"),eN(172,"overlay"),og(),eN(173," ser\xE1 aplicado a um "),Sl(174,"em"),eN(175,"container"),og(),eN(176," ou \xE0 p\xE1gina inteira."),og(),Sl(177,"p"),eN(178,"Para utilizar o componente como um "),Sl(179,"em"),eN(180,"container"),og(),eN(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),og(),Sl(182,"pre")(183,"code"),eN(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),og()()()(),Sl(185,"tr",14)(186,"td",15)(187,"div",16)(188,"span",17),eN(189," p-size"),Wl(190,"br"),og()()(),Sl(191,"td",18)(192,"code",22),eN(193,"string"),og()(),Sl(194,"td",20)(195,"p")(196,"code"),eN(197,"lg"),og()()(),Sl(198,"td",21)(199,"em")(200,"strong"),eN(201,"(opcional)"),og()(),Sl(202,"p"),eN(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),Sl(204,"em"),eN(205,"loading"),og(),eN(206,"."),og(),Sl(207,"p"),eN(208,"Tamanhos dispon\xEDveis para o "),Sl(209,"em"),eN(210,"loading"),og(),eN(211,":"),og(),Sl(212,"ul")(213,"li")(214,"code"),eN(215,"xs"),og(),eN(216,": 1rem"),og(),Sl(217,"li")(218,"code"),eN(219,"sm"),og(),eN(220,": 1.5rem"),og(),Sl(221,"li")(222,"code"),eN(223,"md"),og(),eN(224,": 3rem"),og(),Sl(225,"li")(226,"code"),eN(227,"lg"),og(),eN(228,": 5rem (valor padr\xE3o)"),og()()()(),Sl(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),eN(233," p-text"),Wl(234,"br"),og()()(),Sl(235,"td",18)(236,"code",22),eN(237,"string"),og()(),Sl(238,"td",20)(239,"p")(240,"code"),eN(241,"Carregando"),og()()(),Sl(242,"td",21)(243,"em")(244,"strong"),eN(245,"(opcional)"),og()(),Sl(246,"p"),eN(247,"Texto a ser exibido no componente."),og(),Sl(248,"blockquote")(249,"p"),eN(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(251,"a",23)(252,"strong"),eN(253,"PoI18n"),og()(),eN(254," ou navegador."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-loading-overlay-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,ie,le,pe,se],encapsulation:2})}return i})();var xe=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[hL.forChild(xe),hL]})}return i})();var Ye=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,de]})}return i})();export{Ye as DocPoLoadingOverlayModule};