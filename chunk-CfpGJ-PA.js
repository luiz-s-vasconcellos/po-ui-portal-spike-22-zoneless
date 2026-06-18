import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dJ as Jn,dK as Tv,dL as Bde,H as Il,J as zl,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,c8 as Dde,bH as k3,b6 as Yo,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-message","Toaster Basic - Information","p-type","information",1,"po-md-12"]],template:function(a,n){a&1&&(Il(0,"div",0),zl(1,"po-toaster",1),og());},dependencies:[Bde],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Toaster Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-toaster-basic/sample-po-toaster-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-toaster-basic/sample-po-toaster-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-toaster-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ie],encapsulation:2})}return i})();var Ee=["toasterRef"],le=(()=>{class i{poModal;toasterRef;message="Title Message";supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.";actionLabel="action";type=Jn.Information;mode=Tv.Inline;showIcon=true;hasAction=false;action=void 0;properties=[];sizeActions="medium";propertiesOptions=[{value:"hide",label:"Hide"},{value:"showClose",label:"Show close"}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Jn.Success},{label:"Error",value:Jn.Error},{label:"Warning",value:Jn.Warning},{label:"Information",value:Jn.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0;}restore(){this.message="Title Message",this.supportMessage="Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.",this.actionLabel="action",this.type=Jn.Information,this.mode=Tv.Inline,this.showIcon=true,this.hasAction=false,this.action=void 0,this.properties=[],this.sizeActions="medium";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs"]],viewQuery:function(a,n){if(a&1&&Gl(Yo,7)(Ee,5),a&2){let m;co(m=lo())&&(n.poModal=m.first),co(m=lo())&&(n.toasterRef=m.first);}},standalone:false,decls:19,vars:19,consts:[["toasterRef",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-size-actions","p-hide","p-mode","p-message","p-support-message","p-type","p-show-close","p-action","p-action-label"],["p-columns","4","p-label","Type","name","type",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Message","name","message","p-clean","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Support Message","name","supportMessage","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Has Action","name","action",1,"po-md-6","po-lg-2",3,"p-change","ngModelChange","ngModel"],["p-label","Action Label","name","actionLabel","p-clean","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"],["p-title","PO Notification"]],template:function(a,n){if(a&1){let m=Dx();Il(0,"div",2),zl(1,"po-toaster",3,0),og(),zl(3,"po-divider"),Il(4,"form",null,1)(6,"po-radio-group",4),ww("ngModelChange",function(l){return Xy(m),eN(n.type,l)||(n.type=l),Qy(l)}),og(),QA(),Il(7,"po-input",5),ww("ngModelChange",function(l){return Xy(m),eN(n.message,l)||(n.message=l),Qy(l)}),og(),QA(),Il(8,"po-input",6),ww("ngModelChange",function(l){return Xy(m),eN(n.supportMessage,l)||(n.supportMessage=l),Qy(l)}),og(),QA(),Il(9,"po-switch",7),ft("p-change",function(){return n.changeAction()}),ww("ngModelChange",function(l){return Xy(m),eN(n.hasAction,l)||(n.hasAction=l),Qy(l)}),og(),QA(),Il(10,"po-input",8),ww("ngModelChange",function(l){return Xy(m),eN(n.actionLabel,l)||(n.actionLabel=l),Qy(l)}),og(),QA(),Il(11,"div",2)(12,"po-checkbox-group",9),ww("ngModelChange",function(l){return Xy(m),eN(n.properties,l)||(n.properties=l),Qy(l)}),og(),QA(),Il(13,"po-radio-group",10),ww("ngModelChange",function(l){return Xy(m),eN(n.sizeActions,l)||(n.sizeActions=l),Qy(l)}),og(),QA(),og(),zl(14,"po-divider"),Il(15,"div",2)(16,"po-button",11),ft("p-click",function(){return n.restore()}),og()()(),Il(17,"po-modal",12),Qx(18," Notification Action "),og();}a&2&&(Lp(),nw("p-size-actions",n.sizeActions)("p-hide",n.properties.includes("hide"))("p-mode",n.mode)("p-message",n.message)("p-support-message",n.supportMessage)("p-type",n.type)("p-show-close",n.properties.includes("showClose"))("p-action",n.action)("p-action-label",n.actionLabel),Lp(5),Ew("ngModel",n.type),nw("p-options",n.typeOptions),e0(),Lp(),Ew("ngModel",n.message),e0(),Lp(),Ew("ngModel",n.supportMessage),e0(),Lp(),Ew("ngModel",n.hasAction),e0(),Lp(),Ew("ngModel",n.actionLabel),e0(),Lp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),e0(),Lp(),Ew("ngModel",n.sizeActions),nw("p-options",n.sizeActionsOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Dde,k3,Yo,Bde],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Toaster Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-toaster-labs/sample-po-toaster-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-toaster-labs/sample-po-toaster-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-toaster-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-toaster-doc"]],standalone:false,decls:499,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Function"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoToasterType"]],template:function(a,n){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoToasterModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-toaster."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoToasterComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O Toaster serve para exibir uma mensagem tempor\xE1ria em linha na interface, podendo ou n\xE3o ser removida pelos usu\xE1rios a depender do uso especificado."),og(),Il(15,"h4"),Qx(16,"Acessibilidade tratada no componente"),og(),Il(17,"p"),Qx(18,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(19,"ul")(20,"li"),Qx(21,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),og(),Il(22,"li"),Qx(23,"Permitir que o usu\xE1rio feche facilmente o toaster e n\xE3o retirar o foco de onde est\xE1. (2.2.4: Interrup\xE7\xF5es (AAA));"),og(),Il(24,"li"),Qx(25,"Preservar o foco vis\xEDvel na navega\xE7\xE3o via teclado. (2.4.7: Foco vis\xEDvel (A));"),og(),Il(26,"li"),Qx(27,"\xC1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: \xC1rea de clique (AAA));"),og()(),Il(28,"h4"),Qx(29,"Tokens customiz\xE1veis"),og(),Il(30,"p"),Qx(31,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(32,"blockquote")(33,"p"),Qx(34,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(35,"a",6),Qx(36,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(37,"."),og()(),Il(38,"table")(39,"thead")(40,"tr")(41,"th"),Qx(42,"Propriedade"),og(),Il(43,"th"),Qx(44,"Descri\xE7\xE3o"),og(),Il(45,"th"),Qx(46,"Valor Padr\xE3o"),og()()(),Il(47,"tbody")(48,"tr")(49,"td")(50,"strong"),Qx(51,"Default Values"),og()(),zl(52,"td")(53,"td"),og(),Il(54,"tr")(55,"td")(56,"code"),Qx(57,"--font-family"),og()(),Il(58,"td"),Qx(59,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(60,"td")(61,"code"),Qx(62,"var(--font-family-theme)"),og()()(),Il(63,"tr")(64,"td")(65,"code"),Qx(66,"--font-color"),og()(),Il(67,"td"),Qx(68,"Cor principal do texto"),og(),Il(69,"td")(70,"code"),Qx(71,"var(--color-neutral-dark-90)"),og()()(),Il(72,"tr")(73,"td")(74,"code"),Qx(75,"--font-color-support"),og()(),Il(76,"td"),Qx(77,"Cor principal do texto de supporte"),og(),Il(78,"td")(79,"code"),Qx(80,"var(--color-neutral-dark-80)"),og()()(),Il(81,"tr")(82,"td")(83,"code"),Qx(84,"--border-radius"),og()(),Il(85,"td"),Qx(86,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Il(87,"td")(88,"code"),Qx(89,"var(--border-radius-md)"),og()()(),Il(90,"tr")(91,"td")(92,"strong"),Qx(93,"Type Success"),og()(),zl(94,"td")(95,"td"),og(),Il(96,"tr")(97,"td")(98,"code"),Qx(99,"--color-success"),og()(),Il(100,"td"),Qx(101,"Cor principal no tipo success"),og(),Il(102,"td")(103,"code"),Qx(104,"var(--color-feedback-positive-base)"),og()()(),Il(105,"tr")(106,"td")(107,"code"),Qx(108,"--background-success"),og()(),Il(109,"td"),Qx(110,"Cor de fundo principal no tipo success"),og(),Il(111,"td")(112,"code"),Qx(113,"var(--color-feedback-positive-lightest)"),og()()(),Il(114,"tr")(115,"td")(116,"code"),Qx(117,"--border-color-success"),og()(),Il(118,"td"),Qx(119,"Cor da borda principal tipo success"),og(),Il(120,"td")(121,"code"),Qx(122,"var(--color-feedback-positive-lighter)"),og()()(),Il(123,"tr")(124,"td")(125,"strong"),Qx(126,"Type Error"),og()(),zl(127,"td")(128,"td"),og(),Il(129,"tr")(130,"td")(131,"code"),Qx(132,"--color-error"),og()(),Il(133,"td"),Qx(134,"Cor principal no tipo error"),og(),Il(135,"td")(136,"code"),Qx(137,"var(--color-feedback-negative-base)"),og()()(),Il(138,"tr")(139,"td")(140,"code"),Qx(141,"--background-error"),og()(),Il(142,"td"),Qx(143,"Cor de fundo principal no tipo error"),og(),Il(144,"td")(145,"code"),Qx(146,"var(--color-feedback-negative-lightest)"),og()()(),Il(147,"tr")(148,"td")(149,"code"),Qx(150,"--border-color-error"),og()(),Il(151,"td"),Qx(152,"Cor da borda principal tipo error"),og(),Il(153,"td")(154,"code"),Qx(155,"var(--color-feedback-negative-lighter)"),og()()(),Il(156,"tr")(157,"td")(158,"strong"),Qx(159,"Type Warning"),og()(),zl(160,"td")(161,"td"),og(),Il(162,"tr")(163,"td")(164,"code"),Qx(165,"--color-icon-warning"),og()(),Il(166,"td"),Qx(167,"Cor principal do icone no tipo warning"),og(),Il(168,"td")(169,"code"),Qx(170,"var(--color-neutral-dark-90)"),og()()(),Il(171,"tr")(172,"td")(173,"code"),Qx(174,"--color-warning"),og()(),Il(175,"td"),Qx(176,"Cor principal no tipo warning"),og(),Il(177,"td")(178,"code"),Qx(179,"var(--color-feedback-warning-base)"),og()()(),Il(180,"tr")(181,"td")(182,"code"),Qx(183,"--background-warning"),og()(),Il(184,"td"),Qx(185,"Cor de fundo principal no tipo warning"),og(),Il(186,"td")(187,"code"),Qx(188,"var(--color-feedback-warning-lightest)"),og()()(),Il(189,"tr")(190,"td")(191,"code"),Qx(192,"--border-color-warning"),og()(),Il(193,"td"),Qx(194,"Cor da borda principal tipo warning"),og(),Il(195,"td")(196,"code"),Qx(197,"var(--color-feedback-warning-lighter)"),og()()(),Il(198,"tr")(199,"td")(200,"strong"),Qx(201,"Type Info"),og()(),zl(202,"td")(203,"td"),og(),Il(204,"tr")(205,"td")(206,"code"),Qx(207,"--color-info"),og()(),Il(208,"td"),Qx(209,"Cor principal no tipo info"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-feedback-info-base)"),og()()(),Il(213,"tr")(214,"td")(215,"code"),Qx(216,"--background-info"),og()(),Il(217,"td"),Qx(218,"Cor de fundo principal no tipo info"),og(),Il(219,"td")(220,"code"),Qx(221,"var(--color-feedback-info-lightest)"),og()()(),Il(222,"tr")(223,"td")(224,"code"),Qx(225,"--border-color-info"),og()(),Il(226,"td"),Qx(227,"Cor da borda principal tipo info"),og(),Il(228,"td")(229,"code"),Qx(230,"var(--color-feedback-info-lighter)"),og()()()()()(),Il(231,"div",7)(232,"h4",8),Qx(233,"Seletor"),og(),Il(234,"pre",9),Qx(235,`<po-toaster
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
`),og()(),Il(236,"h4",10),Qx(237,"Propriedades"),og(),Il(238,"table",11)(239,"tr",12)(240,"th",13),Qx(241,"Nome"),og(),Il(242,"th",13),Qx(243,"Tipo"),og(),Il(244,"th",13),Qx(245,"Padr\xE3o"),og(),Il(246,"th",13),Qx(247,"Descri\xE7\xE3o"),og()(),Il(248,"tr",14)(249,"td",15)(250,"div",16)(251,"span",17),Qx(252," p-action"),zl(253,"br"),og()()(),Il(254,"td",18)(255,"code",19),Qx(256,"Function"),og()(),Il(257,"td",20),Qx(258,"-"),og(),Il(259,"td",21)(260,"em")(261,"strong"),Qx(262,"(opcional)"),og()(),Il(263,"p"),Qx(264,"A\xE7\xE3o para a notifica\xE7\xE3o."),og()()(),Il(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),Qx(269," p-action-label"),zl(270,"br"),og()()(),Il(271,"td",18)(272,"code",22),Qx(273,"string"),og()(),Il(274,"td",20),Qx(275,"-"),og(),Il(276,"td",21)(277,"em")(278,"strong"),Qx(279,"(opcional)"),og()(),Il(280,"p"),Qx(281,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),og()()(),Il(282,"tr",14)(283,"td",15)(284,"div",16)(285,"span",17),Qx(286," p-hide"),zl(287,"br"),og()()(),Il(288,"td",18)(289,"code",23),Qx(290,"boolean"),og()(),Il(291,"td",20)(292,"p")(293,"code"),Qx(294,"false"),og()()(),Il(295,"td",21)(296,"em")(297,"strong"),Qx(298,"(opcional)"),og()(),Il(299,"p"),Qx(300,"Define se o Toaster esta invisivel."),og()()(),Il(301,"tr",14)(302,"td",15)(303,"div",24)(304,"span",25),Qx(305," (p-hide-change)"),zl(306,"br"),og()()(),Il(307,"td",18)(308,"code",26),Qx(309,"EventEmitter"),og()(),Il(310,"td",20),Qx(311,"-"),og(),Il(312,"td",21)(313,"em")(314,"strong"),Qx(315,"(opcional)"),og()(),Il(316,"p"),Qx(317,"Evento emitido quando o valor de "),Il(318,"code"),Qx(319,"isHide"),og(),Qx(320," \xE9 alterado."),og()()(),Il(321,"tr",14)(322,"td",15)(323,"div",16)(324,"span",17),Qx(325," p-message"),zl(326,"br"),og()()(),Il(327,"td",18)(328,"code",22),Qx(329,"string"),og()(),Il(330,"td",20),Qx(331,"-"),og(),Il(332,"td",21)(333,"em")(334,"strong"),Qx(335,"(opcional)"),og()(),Il(336,"p"),Qx(337,"Mensagem a ser exibida na notifica\xE7\xE3o."),og()()(),Il(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),Qx(342," p-show-close"),zl(343,"br"),og()()(),Il(344,"td",18)(345,"code",23),Qx(346,"boolean"),og()(),Il(347,"td",20)(348,"p")(349,"code"),Qx(350,"true"),og()()(),Il(351,"td",21)(352,"em")(353,"strong"),Qx(354,"(opcional)"),og()(),Il(355,"p"),Qx(356,"Exibe bot\xE3o de fechar no toaster modo inline."),og()()(),Il(357,"tr",14)(358,"td",15)(359,"div",16)(360,"span",17),Qx(361," p-size-actions"),zl(362,"br"),og()()(),Il(363,"td",18)(364,"code",22),Qx(365,"string"),og()(),Il(366,"td",20)(367,"p")(368,"code"),Qx(369,"medium"),og()()(),Il(370,"td",21)(371,"em")(372,"strong"),Qx(373,"(opcional)"),og()(),Il(374,"p"),Qx(375,"Define o tamanho das a\xE7\xF5es no componente:"),og(),Il(376,"ul")(377,"li")(378,"code"),Qx(379,"small"),og(),Qx(380,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(381,"li")(382,"code"),Qx(383,"medium"),og(),Qx(384,": aplica a medida medium de cada componente."),og()(),Il(385,"blockquote")(386,"p"),Qx(387,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(388,"code"),Qx(389,"medium"),og(),Qx(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(391,"a",27),Qx(392,"po-theme"),og(),Qx(393,"."),og()()()(),Il(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),Qx(398," p-support-message"),zl(399,"br"),og()()(),Il(400,"td",18)(401,"code",22),Qx(402,"string"),og()(),Il(403,"td",20),Qx(404,"-"),og(),Il(405,"td",21)(406,"em")(407,"strong"),Qx(408,"(opcional)"),og()(),Il(409,"p"),Qx(410,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),og()()(),Il(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Qx(415," p-type"),zl(416,"br"),og()()(),Il(417,"td",18)(418,"code",28),Qx(419,"PoToasterType"),og()(),Il(420,"td",20)(421,"p")(422,"code"),Qx(423,"PoToasterType.Information"),og()()(),Il(424,"td",21)(425,"em")(426,"strong"),Qx(427,"(opcional)"),og()(),Il(428,"p"),Qx(429,"Determina o tipo de notifica\xE7\xE3o."),og(),Il(430,"p"),Qx(431,"Valores aceitos: "),Il(432,"code"),Qx(433,"error"),og(),Qx(434,", "),Il(435,"code"),Qx(436,"information"),og(),Qx(437,", "),Il(438,"code"),Qx(439,"success"),og(),Qx(440," e "),Il(441,"code"),Qx(442,"warning"),og(),Qx(443,"."),og()()()(),Il(444,"h3"),Qx(445,"Enums"),og(),Il(446,"h4",4)(447,"code",5),Qx(448,"PoToasterType"),og()(),Il(449,"div",2)(450,"p"),Qx(451,"Define os tipos poss\xEDveis para o "),Il(452,"code"),Qx(453,"PoToasterComponent"),og(),Qx(454,"."),og()(),Il(455,"h4",10),Qx(456,"Propriedades"),og(),Il(457,"table",11)(458,"tr",12)(459,"th",13),Qx(460,"Nome"),og(),Il(461,"th",13),Qx(462,"Descri\xE7\xE3o"),og()(),Il(463,"tr",14)(464,"td",15)(465,"div",16)(466,"span",17),Qx(467," Error"),zl(468,"br"),og()()(),Il(469,"td",21)(470,"p"),Qx(471,"Tipo de toaster para mensagens de erro."),og()()(),Il(472,"tr",14)(473,"td",15)(474,"div",16)(475,"span",17),Qx(476," Information"),zl(477,"br"),og()()(),Il(478,"td",21)(479,"p"),Qx(480,"Tipo de toaster para mensagens informativas."),og()()(),Il(481,"tr",14)(482,"td",15)(483,"div",16)(484,"span",17),Qx(485," Success"),zl(486,"br"),og()()(),Il(487,"td",21)(488,"p"),Qx(489,"Tipo de toaster para mensagens de sucesso."),og()()(),Il(490,"tr",14)(491,"td",15)(492,"div",16)(493,"span",17),Qx(494," Warning"),zl(495,"br"),og()()(),Il(496,"td",21)(497,"p"),Qx(498,"Tipo de toaster para mensagens de aten\xE7\xE3o."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Toaster",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-toaster-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-toaster-basic-view")(6,"sample-po-toaster-labs-view"),og()()()),a&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,re,se,pe],encapsulation:2})}return i})();var ve=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[uL.forChild(ve),uL]})}return i})();var He=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,de]})}return i})();export{He as DocPoToasterModule};