import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,aK as aS,H as Il,J as zl,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,cZ as Uhe,bd as Ax,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var ne=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,o){a&1&&(Il(0,"div",0),zl(1,"po-loading-overlay"),og());},dependencies:[aS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Loading Overlay Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-loading-overlay-basic"),og(),zl(29,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ne],encapsulation:2})}return i})();var ae=(()=>{class i{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore();}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[];},2e3);}restore(){this.size="lg",this.text=null;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs"]],standalone:false,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,o){if(a&1){let d=Dx();Il(0,"div",1),zl(1,"po-loading-overlay",2),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(r){return Xy(d),eN(o.text,r)||(o.text=r),Qy(r)}),og(),QA(),Il(7,"po-checkbox-group",5),ww("ngModelChange",function(r){return Xy(d),eN(o.properties,r)||(o.properties=r),Qy(r)}),ft("p-change",function(r){return o.onChangeCheckbox(r)}),og(),QA(),og(),Il(8,"div",3)(9,"po-radio-group",6),ww("ngModelChange",function(r){return Xy(d),eN(o.size,r)||(o.size=r),Qy(r)}),og(),QA(),og(),Il(10,"div",3)(11,"div",7)(12,"po-button",8),ft("p-click",function(){return o.restore()}),og()()()();}a&2&&(Lp(),nw("p-screen-lock",o.properties==null?null:o.properties.includes("screenLock"))("p-text",o.text)("p-size",o.size),Lp(5),Ew("ngModel",o.text),e0(),Lp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),e0(),Lp(2),Ew("ngModel",o.size),nw("p-options",o.sizesOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,O3,Dde,aS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Loading Overlay Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="sample-container">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Il(21,"po-tab",10)(22,"div")(23,"label",6),Qx(24,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css"),og(),Il(25,"pre",11),Qx(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),og()()()()(),Il(27,"div",12),zl(28,"sample-po-loading-overlay-labs"),og(),zl(29,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ce,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ae],encapsulation:2})}return i})();var re=(()=>{class i{poNotification=f(Yp);environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=true;connectionTest(){let p="Connection ok";this.isHideLoading=false,setTimeout(()=>{this.isHideLoading=true,this.poNotification.success(p);},450);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:false,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,o){if(a&1){let d=Dx();Il(0,"form",null,0)(2,"div"),zl(3,"po-loading-overlay",1),og(),Il(4,"div",2)(5,"po-input",3),ww("ngModelChange",function(r){return Xy(d),eN(o.environment.urlServer,r)||(o.environment.urlServer=r),Qy(r)}),og(),QA(),Il(6,"po-input",4),ww("ngModelChange",function(r){return Xy(d),eN(o.environment.urlDB,r)||(o.environment.urlDB=r),Qy(r)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(r){return Xy(d),eN(o.environment.userDB,r)||(o.environment.userDB=r),Qy(r)}),og(),QA(),Il(8,"po-password",6),ww("ngModelChange",function(r){return Xy(d),eN(o.environment.passwordDB,r)||(o.environment.passwordDB=r),Qy(r)}),og(),QA(),og(),Il(9,"div",2)(10,"po-button",7),ft("p-click",function(){Xy(d);let r=Ax(1);return o.connectionTest(),Qy(r.reset())}),og()()();}if(a&2){let d=Ax(1);Lp(3),nw("hidden",o.isHideLoading),Lp(2),Ew("ngModel",o.environment.urlServer),e0(),Lp(),Ew("ngModel",o.environment.urlDB),e0(),Lp(),Ew("ngModel",o.environment.userDB),e0(),Lp(),Ew("ngModel",o.environment.passwordDB),e0(),Lp(2),nw("p-disabled",d.invalid);}},dependencies:[G9,$9,z9,mk,hk,Qt,O3,Uhe,aS],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Loading Overlay - Connection Test"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #formConfig="ngForm">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-loading-overlay-connection-test"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,re],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-doc"]],standalone:false,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-loading-overlay."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoLoadingOverlayComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"Este componente mostra ao usu\xE1rio uma imagem de "),Il(15,"em"),Qx(16,"loading"),og(),Qx(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),og(),Il(18,"h4"),Qx(19,"Tokens customiz\xE1veis"),og(),Il(20,"p"),Qx(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),zl(22,"br"),Qx(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Il(24,"code"),Qx(25,".po-loading"),og()(),Il(26,"blockquote")(27,"p"),Qx(28,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(29,"a",6),Qx(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(31,"."),og()(),Il(32,"table")(33,"thead")(34,"tr")(35,"th"),Qx(36,"Propriedade"),og(),Il(37,"th"),Qx(38,"Descri\xE7\xE3o"),og(),Il(39,"th"),Qx(40,"Valor Padr\xE3o"),og()()(),Il(41,"tbody")(42,"tr")(43,"td")(44,"strong"),Qx(45,"Default Values"),og()(),zl(46,"td")(47,"td"),og(),Il(48,"tr")(49,"td")(50,"code"),Qx(51,"--font-family"),og()(),Il(52,"td"),Qx(53,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(54,"td")(55,"code"),Qx(56,"var(--font-family-theme)"),og()()(),Il(57,"tr")(58,"td")(59,"code"),Qx(60,"--font-weight"),og()(),Il(61,"td"),Qx(62,"Peso da fonte"),og(),Il(63,"td")(64,"code"),Qx(65,"var(--font-weight-normal)"),og()()(),Il(66,"tr")(67,"td")(68,"code"),Qx(69,"--text-color"),og()(),Il(70,"td"),Qx(71,"Cor do texto"),og(),Il(72,"td")(73,"code"),Qx(74,"var(--color-neutral-dark-70)"),og()()(),Il(75,"tr")(76,"td")(77,"code"),Qx(78,"--border-radius"),og()(),Il(79,"td"),Qx(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(81,"td")(82,"code"),Qx(83,"var(--border-radius-md)"),og()()(),Il(84,"tr")(85,"td")(86,"code"),Qx(87,"--border-width"),og()(),Il(88,"td"),Qx(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Il(90,"td")(91,"code"),Qx(92,"var(--border-width-sm)"),og()()(),Il(93,"tr")(94,"td")(95,"code"),Qx(96,"--border-color"),og()(),Il(97,"td"),Qx(98,"Cor da borda"),og(),Il(99,"td")(100,"code"),Qx(101,"var(--color-neutral-light-20)"),og()()(),Il(102,"tr")(103,"td")(104,"code"),Qx(105,"--background"),og()(),Il(106,"td"),Qx(107,"Cor de background"),og(),Il(108,"td")(109,"code"),Qx(110,"var(--color-neutral-light-00)"),og()()(),Il(111,"tr")(112,"td")(113,"code"),Qx(114,"--shadow"),og()(),Il(115,"td"),Qx(116,"Cont\xE9m o valor da sombra do elemento"),og(),Il(117,"td")(118,"code"),Qx(119,"var(--shadow-md)"),og()()(),Il(120,"tr")(121,"td")(122,"strong"),Qx(123,"po-loading-icon"),og()(),zl(124,"td")(125,"td"),og(),Il(126,"tr")(127,"td")(128,"code"),Qx(129,"--color"),og()(),Il(130,"td"),Qx(131,"Cor principal do spinner"),og(),Il(132,"td")(133,"code"),Qx(134,"var(--color-action-default)"),og()()()()()(),Il(135,"div",7)(136,"h4",8),Qx(137,"Seletor"),og(),Il(138,"pre",9),Qx(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),og()(),Il(140,"h4",10),Qx(141,"Propriedades"),og(),Il(142,"table",11)(143,"tr",12)(144,"th",13),Qx(145,"Nome"),og(),Il(146,"th",13),Qx(147,"Tipo"),og(),Il(148,"th",13),Qx(149,"Padr\xE3o"),og(),Il(150,"th",13),Qx(151,"Descri\xE7\xE3o"),og()(),Il(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),Qx(156," p-screen-lock"),zl(157,"br"),og()()(),Il(158,"td",18)(159,"code",19),Qx(160,"boolean"),og()(),Il(161,"td",20)(162,"p")(163,"code"),Qx(164,"false"),og()()(),Il(165,"td",21)(166,"em")(167,"strong"),Qx(168,"(opcional)"),og()(),Il(169,"p"),Qx(170,"Define se o "),Il(171,"em"),Qx(172,"overlay"),og(),Qx(173," ser\xE1 aplicado a um "),Il(174,"em"),Qx(175,"container"),og(),Qx(176," ou \xE0 p\xE1gina inteira."),og(),Il(177,"p"),Qx(178,"Para utilizar o componente como um "),Il(179,"em"),Qx(180,"container"),og(),Qx(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),og(),Il(182,"pre")(183,"code"),Qx(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),og()()()(),Il(185,"tr",14)(186,"td",15)(187,"div",16)(188,"span",17),Qx(189," p-size"),zl(190,"br"),og()()(),Il(191,"td",18)(192,"code",22),Qx(193,"string"),og()(),Il(194,"td",20)(195,"p")(196,"code"),Qx(197,"lg"),og()()(),Il(198,"td",21)(199,"em")(200,"strong"),Qx(201,"(opcional)"),og()(),Il(202,"p"),Qx(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),Il(204,"em"),Qx(205,"loading"),og(),Qx(206,"."),og(),Il(207,"p"),Qx(208,"Tamanhos dispon\xEDveis para o "),Il(209,"em"),Qx(210,"loading"),og(),Qx(211,":"),og(),Il(212,"ul")(213,"li")(214,"code"),Qx(215,"xs"),og(),Qx(216,": 1rem"),og(),Il(217,"li")(218,"code"),Qx(219,"sm"),og(),Qx(220,": 1.5rem"),og(),Il(221,"li")(222,"code"),Qx(223,"md"),og(),Qx(224,": 3rem"),og(),Il(225,"li")(226,"code"),Qx(227,"lg"),og(),Qx(228,": 5rem (valor padr\xE3o)"),og()()()(),Il(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),Qx(233," p-text"),zl(234,"br"),og()()(),Il(235,"td",18)(236,"code",22),Qx(237,"string"),og()(),Il(238,"td",20)(239,"p")(240,"code"),Qx(241,"Carregando"),og()()(),Il(242,"td",21)(243,"em")(244,"strong"),Qx(245,"(opcional)"),og()(),Il(246,"p"),Qx(247,"Texto a ser exibido no componente."),og(),Il(248,"blockquote")(249,"p"),Qx(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Il(251,"a",23)(252,"strong"),Qx(253,"PoI18n"),og()(),Qx(254," ou navegador."),og()()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-loading-overlay-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,ie,le,pe,se],encapsulation:2})}return i})();var xe=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[uL.forChild(xe),uL]})}return i})();var Ye=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,de]})}return i})();export{Ye as DocPoLoadingOverlayModule};