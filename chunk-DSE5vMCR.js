import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,dI as Xn$1,dJ as Tv,dK as Nde,C as Sl,F as Wl,J as og,an as SO,aH as Ka,b8 as Ume,b9 as $me,y as rN,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,bH as k3,b6 as Yo,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(Sl(0,"div",0),Wl(1,"po-toaster",1),og());},dependencies:[Nde],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Toaster Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toaster-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ge,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ie],encapsulation:2,changeDetection:1})}return i})();var Ee=["toasterRef"],le=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=Xn$1.Information;mode=Tv.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Xn$1.Success},{label:"Error",value:Xn$1.Error},{label:"Warning",value:Xn$1.Warning},{label:"Information",value:Xn$1.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=Xn$1.Information,this.mode=Tv.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&ql(Yo,7)(Ee,5),a&2){let m;lo(m=uo())&&(n.poModal=m.first),lo(m=uo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=Ix();Sl(0,"div",2),Wl(1,"po-toaster",3,0),og(),Wl(3,"po-divider"),Sl(4,"form",null,1)(6,"po-radio-group",4),Cw("ngModelChange",function(l){return Ky(m),oN(n.type,l)||(n.type=l),Xy(l)}),og(),n0(),Sl(7,"po-input",5),Cw("ngModelChange",function(l){return Ky(m),oN(n.message,l)||(n.message=l),Xy(l)}),og(),n0(),Sl(8,"po-input",6),Cw("ngModelChange",function(l){return Ky(m),oN(n.supportMessage,l)||(n.supportMessage=l),Xy(l)}),og(),n0(),Sl(9,"po-switch",7),ft("p-change",function(){return n.changeAction()}),Cw("ngModelChange",function(l){return Ky(m),oN(n.hasAction,l)||(n.hasAction=l),Xy(l)}),og(),n0(),Sl(10,"po-input",8),Cw("ngModelChange",function(l){return Ky(m),oN(n.actionLabel,l)||(n.actionLabel=l),Xy(l)}),og(),n0(),Sl(11,"div",2)(12,"po-checkbox-group",9),Cw("ngModelChange",function(l){return Ky(m),oN(n.properties,l)||(n.properties=l),Xy(l)}),og(),n0(),Sl(13,"po-radio-group",10),Cw("ngModelChange",function(l){return Ky(m),oN(n.sizeActions,l)||(n.sizeActions=l),Xy(l)}),og(),n0(),og(),Wl(14,"po-divider"),Sl(15,"div",2)(16,"po-button",11),ft("p-click",function(){return n.restore()}),og()()(),Sl(17,"po-modal",12),rN(18," Notification Action "),og();}a&2&&(Lp(),rw("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Lp(5),ww("ngModel",n.type),rw("p-options",n.typeOptions),i0(),Lp(),ww("ngModel",n.message),i0(),Lp(),ww("ngModel",n.supportMessage),i0(),Lp(),ww("ngModel",n.hasAction),i0(),Lp(),ww("ngModel",n.actionLabel),i0(),Lp(2),ww("ngModel",n.properties),rw("p-options",n.propertiesOptions),i0(),Lp(),ww("ngModel",n.sizeActions),rw("p-options",n.sizeActionsOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,b3,L3,Tde,k3,Yo,Nde],encapsulation:2,changeDetection:1})}return i})();var be=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Toaster Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-row">
  <po-toaster
    #toasterRef
    class="po-md-12"
    [p-size-actions]="sizeActions"
    [p-hide]="properties.includes('hide')"
    [p-mode]="mode"
    [p-message]="message"
    [p-support-message]="supportMessage"
    [p-type]="type"
    [p-show-close]="properties.includes('showClose')"
    [p-action]="action"
    [p-action-label]="actionLabel"
  ></po-toaster>
</div>

<po-divider />

<form #f="ngForm">
  <po-radio-group
    p-columns="4"
    p-label="Type"
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    [p-options]="typeOptions"
  ></po-radio-group>

  <po-input p-label="Message" class="po-md-6" name="message" [(ngModel)]="message" p-clean p-required> </po-input>

  <po-input p-label="Support Message" class="po-md-6" name="supportMessage" [(ngModel)]="supportMessage" p-clean>
  </po-input>

  <po-switch
    p-label="Has Action"
    class="po-md-6 po-lg-2"
    (p-change)="changeAction()"
    name="action"
    [(ngModel)]="hasAction"
  >
  </po-switch>

  <po-input p-label="Action Label" class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="actionLabel" p-clean>
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-6"
      name="sizeActions"
      [(ngModel)]="sizeActions"
      p-label="Size actions"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoToasterComponent,
  PoToasterMode,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toaster-labs',
  templateUrl: './sample-po-toaster-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterLabsComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('toasterRef') toasterRef: PoToasterComponent;

  message = 'Title Message';
  supportMessage =
    'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
  actionLabel = 'action';
  type: PoToasterType = PoToasterType.Information;
  mode = PoToasterMode.Inline;
  showIcon = true;
  hasAction = false;
  action = undefined;
  properties: Array<string> = [];
  sizeActions: string = 'medium';

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hide', label: 'Hide' },
    { value: 'showClose', label: 'Show close' }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor() {}

  changeAction() {
    if (this.hasAction) {
      this.action = () => this.poModal.open();
    } else {
      this.action = undefined;
    }
  }

  restore() {
    this.message = 'Title Message';
    this.supportMessage =
      'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
    this.actionLabel = 'action';
    this.type = PoToasterType.Information;
    this.mode = PoToasterMode.Inline;
    this.showIcon = true;
    this.hasAction = false;
    this.action = undefined;
    this.properties = [];
    this.sizeActions = 'medium';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-toaster-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,be,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoToasterModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-toaster."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoToasterComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),og(),Sl(15,"h4"),rN(16,"Acessibilidade tratada no componente"),og(),Sl(17,"p"),rN(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(19,"ul")(20,"li"),rN(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),og(),Sl(22,"li"),rN(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),og(),Sl(24,"li"),rN(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),og(),Sl(26,"li"),rN(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),og()(),Sl(28,"h4"),rN(29,"Tokens customiz\xE1veis"),og(),Sl(30,"p"),rN(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(32,"blockquote")(33,"p"),rN(34,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(35,"a",6),rN(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(37,"."),og()(),Sl(38,"table")(39,"thead")(40,"tr")(41,"th"),rN(42,"Propriedade"),og(),Sl(43,"th"),rN(44,"Descri\xE7\xE3o"),og(),Sl(45,"th"),rN(46,"Valor Padr\xE3o"),og()()(),Sl(47,"tbody")(48,"tr")(49,"td")(50,"strong"),rN(51,"Default Values"),og()(),Wl(52,"td")(53,"td"),og(),Sl(54,"tr")(55,"td")(56,"code"),rN(57,"--font-family"),og()(),Sl(58,"td"),rN(59,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(60,"td")(61,"code"),rN(62,"var(--font-family-theme)"),og()()(),Sl(63,"tr")(64,"td")(65,"code"),rN(66,"--font-color"),og()(),Sl(67,"td"),rN(68,"Cor principal do texto"),og(),Sl(69,"td")(70,"code"),rN(71,"var(--color-neutral-dark-90)"),og()()(),Sl(72,"tr")(73,"td")(74,"code"),rN(75,"--font-color-support"),og()(),Sl(76,"td"),rN(77,"Cor principal do texto de supporte"),og(),Sl(78,"td")(79,"code"),rN(80,"var(--color-neutral-dark-80)"),og()()(),Sl(81,"tr")(82,"td")(83,"code"),rN(84,"--border-radius"),og()(),Sl(85,"td"),rN(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Sl(87,"td")(88,"code"),rN(89,"var(--border-radius-md)"),og()()(),Sl(90,"tr")(91,"td")(92,"strong"),rN(93,"Type Success"),og()(),Wl(94,"td")(95,"td"),og(),Sl(96,"tr")(97,"td")(98,"code"),rN(99,"--color-success"),og()(),Sl(100,"td"),rN(101,"Cor principal no tipo success"),og(),Sl(102,"td")(103,"code"),rN(104,"var(--color-feedback-positive-base)"),og()()(),Sl(105,"tr")(106,"td")(107,"code"),rN(108,"--background-success"),og()(),Sl(109,"td"),rN(110,"Cor de fundo principal no tipo success"),og(),Sl(111,"td")(112,"code"),rN(113,"var(--color-feedback-positive-lightest)"),og()()(),Sl(114,"tr")(115,"td")(116,"code"),rN(117,"--border-color-success"),og()(),Sl(118,"td"),rN(119,"Cor da borda principal tipo success"),og(),Sl(120,"td")(121,"code"),rN(122,"var(--color-feedback-positive-lighter)"),og()()(),Sl(123,"tr")(124,"td")(125,"strong"),rN(126,"Type Error"),og()(),Wl(127,"td")(128,"td"),og(),Sl(129,"tr")(130,"td")(131,"code"),rN(132,"--color-error"),og()(),Sl(133,"td"),rN(134,"Cor principal no tipo error"),og(),Sl(135,"td")(136,"code"),rN(137,"var(--color-feedback-negative-base)"),og()()(),Sl(138,"tr")(139,"td")(140,"code"),rN(141,"--background-error"),og()(),Sl(142,"td"),rN(143,"Cor de fundo principal no tipo error"),og(),Sl(144,"td")(145,"code"),rN(146,"var(--color-feedback-negative-lightest)"),og()()(),Sl(147,"tr")(148,"td")(149,"code"),rN(150,"--border-color-error"),og()(),Sl(151,"td"),rN(152,"Cor da borda principal tipo error"),og(),Sl(153,"td")(154,"code"),rN(155,"var(--color-feedback-negative-lighter)"),og()()(),Sl(156,"tr")(157,"td")(158,"strong"),rN(159,"Type Warning"),og()(),Wl(160,"td")(161,"td"),og(),Sl(162,"tr")(163,"td")(164,"code"),rN(165,"--color-icon-warning"),og()(),Sl(166,"td"),rN(167,"Cor principal do icone no tipo warning"),og(),Sl(168,"td")(169,"code"),rN(170,"var(--color-neutral-dark-90)"),og()()(),Sl(171,"tr")(172,"td")(173,"code"),rN(174,"--color-warning"),og()(),Sl(175,"td"),rN(176,"Cor principal no tipo warning"),og(),Sl(177,"td")(178,"code"),rN(179,"var(--color-feedback-warning-base)"),og()()(),Sl(180,"tr")(181,"td")(182,"code"),rN(183,"--background-warning"),og()(),Sl(184,"td"),rN(185,"Cor de fundo principal no tipo warning"),og(),Sl(186,"td")(187,"code"),rN(188,"var(--color-feedback-warning-lightest)"),og()()(),Sl(189,"tr")(190,"td")(191,"code"),rN(192,"--border-color-warning"),og()(),Sl(193,"td"),rN(194,"Cor da borda principal tipo warning"),og(),Sl(195,"td")(196,"code"),rN(197,"var(--color-feedback-warning-lighter)"),og()()(),Sl(198,"tr")(199,"td")(200,"strong"),rN(201,"Type Info"),og()(),Wl(202,"td")(203,"td"),og(),Sl(204,"tr")(205,"td")(206,"code"),rN(207,"--color-info"),og()(),Sl(208,"td"),rN(209,"Cor principal no tipo info"),og(),Sl(210,"td")(211,"code"),rN(212,"var(--color-feedback-info-base)"),og()()(),Sl(213,"tr")(214,"td")(215,"code"),rN(216,"--background-info"),og()(),Sl(217,"td"),rN(218,"Cor de fundo principal no tipo info"),og(),Sl(219,"td")(220,"code"),rN(221,"var(--color-feedback-info-lightest)"),og()()(),Sl(222,"tr")(223,"td")(224,"code"),rN(225,"--border-color-info"),og()(),Sl(226,"td"),rN(227,"Cor da borda principal tipo info"),og(),Sl(228,"td")(229,"code"),rN(230,"var(--color-feedback-info-lighter)"),og()()()()()(),Sl(231,"div",7)(232,"h4",8),rN(233,"Seletor"),og(),Sl(234,"pre",9),rN(235,`<po-toaster
    p-action="Function"
    p-action-label="string"
    p-hide="boolean"
    (p-hide-change)="EventEmitter"
    p-message="string"
    p-show-close="boolean"
    p-size-actions="string"
    p-support-message="string"
    p-type="PoToasterType" >
</po-toaster>
`),og()(),Sl(236,"h4",10),rN(237,"Propriedades"),og(),Sl(238,"table",11)(239,"tr",12)(240,"th",13),rN(241,"Nome"),og(),Sl(242,"th",13),rN(243,"Tipo"),og(),Sl(244,"th",13),rN(245,"Padr\xE3o"),og(),Sl(246,"th",13),rN(247,"Descri\xE7\xE3o"),og()(),Sl(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),rN(252," p-action"),Wl(253,"br"),og()()(),Sl(254,"td",18)(255,"code",19),rN(256,"Function"),og()(),Sl(257,"td",20),rN(258,"-"),og(),Sl(259,"td",21)(260,"em")(261,"strong"),rN(262,"(opcional)"),og()(),Sl(263,"p"),rN(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),og()()(),Sl(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),rN(269," p-action-label"),Wl(270,"br"),og()()(),Sl(271,"td",18)(272,"code",22),rN(273,"string"),og()(),Sl(274,"td",20),rN(275,"-"),og(),Sl(276,"td",21)(277,"em")(278,"strong"),rN(279,"(opcional)"),og()(),Sl(280,"p"),rN(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),og()()(),Sl(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),rN(286," p-hide"),Wl(287,"br"),og()()(),Sl(288,"td",18)(289,"code",23),rN(290,"boolean"),og()(),Sl(291,"td",20)(292,"p")(293,"code"),rN(294,"false"),og()()(),Sl(295,"td",21)(296,"em")(297,"strong"),rN(298,"(opcional)"),og()(),Sl(299,"p"),rN(300,"Define se o Toaster esta invisivel."),og()()(),Sl(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),rN(305," (p-hide-change)"),Wl(306,"br"),og()()(),Sl(307,"td",18)(308,"code",26),rN(309,"EventEmitter"),og()(),Sl(310,"td",20),rN(311,"-"),og(),Sl(312,"td",21)(313,"em")(314,"strong"),rN(315,"(opcional)"),og()(),Sl(316,"p"),rN(317,"Evento emitido quando o valor de "),Sl(318,"code"),rN(319,"isHide"),og(),rN(320," \xE9 alterado."),og()()(),Sl(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),rN(325," p-message"),Wl(326,"br"),og()()(),Sl(327,"td",18)(328,"code",22),rN(329,"string"),og()(),Sl(330,"td",20),rN(331,"-"),og(),Sl(332,"td",21)(333,"em")(334,"strong"),rN(335,"(opcional)"),og()(),Sl(336,"p"),rN(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),og()()(),Sl(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),rN(342," p-show-close"),Wl(343,"br"),og()()(),Sl(344,"td",18)(345,"code",23),rN(346,"boolean"),og()(),Sl(347,"td",20)(348,"p")(349,"code"),rN(350,"true"),og()()(),Sl(351,"td",21)(352,"em")(353,"strong"),rN(354,"(opcional)"),og()(),Sl(355,"p"),rN(356,"Exibe bot\xE3o de fechar no toaster modo inline."),og()()(),Sl(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),rN(361," p-size-actions"),Wl(362,"br"),og()()(),Sl(363,"td",18)(364,"code",22),rN(365,"string"),og()(),Sl(366,"td",20)(367,"p")(368,"code"),rN(369,"medium"),og()()(),Sl(370,"td",21)(371,"em")(372,"strong"),rN(373,"(opcional)"),og()(),Sl(374,"p"),rN(375,"Define o tamanho das a\xE7\xF5es no componente:"),og(),Sl(376,"ul")(377,"li")(378,"code"),rN(379,"small"),og(),rN(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(381,"li")(382,"code"),rN(383,"medium"),og(),rN(384,": aplica a medida medium de cada componente."),og()(),Sl(385,"blockquote")(386,"p"),rN(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(388,"code"),rN(389,"medium"),og(),rN(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(391,"a",27),rN(392,"po-theme"),og(),rN(393,"."),og()()()(),Sl(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),rN(398," p-support-message"),Wl(399,"br"),og()()(),Sl(400,"td",18)(401,"code",22),rN(402,"string"),og()(),Sl(403,"td",20),rN(404,"-"),og(),Sl(405,"td",21)(406,"em")(407,"strong"),rN(408,"(opcional)"),og()(),Sl(409,"p"),rN(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),og()()(),Sl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),rN(415," p-type"),Wl(416,"br"),og()()(),Sl(417,"td",18)(418,"code",28),rN(419,"PoToasterType"),og()(),Sl(420,"td",20)(421,"p")(422,"code"),rN(423,"PoToasterType.Information"),og()()(),Sl(424,"td",21)(425,"em")(426,"strong"),rN(427,"(opcional)"),og()(),Sl(428,"p"),rN(429,"Determina o tipo de notifica\xE7\xE3o."),og(),Sl(430,"p"),rN(431,"Valores aceitos: "),Sl(432,"code"),rN(433,"error"),og(),rN(434,", "),Sl(435,"code"),rN(436,"information"),og(),rN(437,", "),Sl(438,"code"),rN(439,"success"),og(),rN(440," e "),Sl(441,"code"),rN(442,"warning"),og(),rN(443,"."),og()()()(),Sl(444,"h3"),rN(445,"Enums"),og(),Sl(446,"h4",4)(447,"code",5),rN(448,"PoToasterType"),og()(),Sl(449,"div",2)(450,"p"),rN(451,"Define os tipos poss\xEDveis para o "),Sl(452,"code"),rN(453,"PoToasterComponent"),og(),rN(454,"."),og()(),Sl(455,"h4",10),rN(456,"Propriedades"),og(),Sl(457,"table",11)(458,"tr",12)(459,"th",13),rN(460,"Nome"),og(),Sl(461,"th",13),rN(462,"Descri\xE7\xE3o"),og()(),Sl(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),rN(467," Error"),Wl(468,"br"),og()()(),Sl(469,"td",21)(470,"p"),rN(471,"Tipo de toaster para mensagens de erro."),og()()(),Sl(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),rN(476," Information"),Wl(477,"br"),og()()(),Sl(478,"td",21)(479,"p"),rN(480,"Tipo de toaster para mensagens informativas."),og()()(),Sl(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),rN(485," Success"),Wl(486,"br"),og()()(),Sl(487,"td",21)(488,"p"),rN(489,"Tipo de toaster para mensagens de sucesso."),og()()(),Sl(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),rN(494," Warning"),Wl(495,"br"),og()()(),Sl(496,"td",21)(497,"p"),rN(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-toaster-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),og()()()),a&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,re,se,pe],encapsulation:2,changeDetection:1})}return i})();var ve=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[mL.forChild(ve),mL]})}return i})();var He=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,de]})}return i})();export{He as DocPoToasterModule};