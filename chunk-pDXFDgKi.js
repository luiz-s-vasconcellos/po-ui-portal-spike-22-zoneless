import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,cj as Ta,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,b2 as Jhe,b3 as nNe,b7 as E3,ba as yNe,ck as Us,cl as Ws,a2 as JE,a3 as cNe,aB as Dx,aA as Sx,aD as Xy,aE as Qy}from'./main-QSTLMRDK.js';var N=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:false,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&zl(0,"po-page-job-scheduler",0),o&2&&nw("p-breadcrumb",m.breadcrumb);},dependencies:[Ta],encapsulation:2,changeDetection:1})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),G=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Job Scheduler - Background Process"),og(),Il(4,"a",2),ft("click",function(){return m.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-job-scheduler-background-process"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+m.sampleCodeButtonIcon),Lp(),dg(" ",m.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ee,m.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,N],encapsulation:2})}return i})();function ne(i,_){if(i&1){let r=Dx();Il(0,"h1"),Qx(1,"Etapa 1"),og(),Il(2,"po-dynamic-form",4),ft("p-form",function(m){Xy(r);let c=Sx();return Qy(c.getFormExample(m))}),og();}if(i&2){let r=Sx();Lp(2),nw("p-fields",r.parametersForm);}}function ie(i,_){if(i&1){let r=Dx();Il(0,"po-table",5),ft("p-selected",function(m){Xy(r);let c=Sx();return Qy(c.selectedItem(m))}),og();}if(i&2){let r=Sx();nw("p-items",r.items)("p-selectable",true);}}function oe(i,_){if(i&1&&(Il(0,"po-widget",6),zl(1,"po-dynamic-view",7),og()),i&2){let r=Sx();Lp(),nw("p-fields",r.fieldsSummary)("p-value",r.valueSummary);}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:true,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:true,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r;}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version};}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:false,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(Il(0,"po-page-job-scheduler",0),JE(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),og()),o&2&&(nw("p-step-execution-last",true),Lp(),nw("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),Lp(),nw("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue));},dependencies:[Jhe,nNe,E3,yNe,Ta,Us,Ws],encapsulation:2,changeDetection:1})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Job Scheduler - Directives"),og(),Il(4,"a",2),ft("click",function(){return m.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="$safeNavigationMigration(dynamicForm?.form.invalid)"
    [p-execution-parameter]="$safeNavigationMigration(dynamicForm?.form.value)"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-job-scheduler-directives"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+m.sampleCodeButtonIcon),Lp(),dg(" ",m.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,re,m.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,W],encapsulation:2})}return i})();var $=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:false,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Componente"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoPageJobSchedulerComponent"),og()(),Il(10,"div",2)(11,"p"),Qx(12,"O "),Il(13,"code"),Qx(14,"po-page-job-scheduler"),og(),Qx(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),og(),Il(16,"p"),Qx(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),og(),Il(18,"p"),Qx(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),Il(20,"a",6),Qx(21,"Guia de implementa\xE7\xE3o de APIs"),og(),Qx(22,"."),og(),Il(23,"h4"),Qx(24,"Tokens customiz\xE1veis"),og(),Il(25,"blockquote")(26,"p"),Qx(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(28,"a",7),Qx(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(30,"."),og()(),Il(31,"table")(32,"thead")(33,"tr")(34,"th"),Qx(35,"Propriedade"),og(),Il(36,"th"),Qx(37,"Descri\xE7\xE3o"),og(),Il(38,"th"),Qx(39,"Valor Padr\xE3o"),og()()(),Il(40,"tbody")(41,"tr")(42,"td")(43,"strong"),Qx(44,"Header"),og()(),zl(45,"td")(46,"td"),og(),Il(47,"tr")(48,"td")(49,"code"),Qx(50,"--padding"),og()(),Il(51,"td"),Qx(52,"Espa\xE7amento do header"),og(),Il(53,"td")(54,"code"),Qx(55,"var(--spacing-xs) var(--spacing-md)"),og()()(),Il(56,"tr")(57,"td")(58,"code"),Qx(59,"--gap"),og()(),Il(60,"td"),Qx(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Il(62,"td")(63,"code"),Qx(64,"var(--spacing-md)"),og()()(),Il(65,"tr")(66,"td")(67,"code"),Qx(68,"--gap-actions"),og()(),Il(69,"td"),Qx(70,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Il(71,"td")(72,"code"),Qx(73,"var(--spacing-xs)"),og()()(),Il(74,"tr")(75,"td")(76,"code"),Qx(77,"--font-family"),og()(),Il(78,"td"),Qx(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Il(80,"td")(81,"code"),Qx(82,"var(--font-family-theme)"),og()()(),Il(83,"tr")(84,"td")(85,"strong"),Qx(86,"Content"),og()(),zl(87,"td")(88,"td"),og(),Il(89,"tr")(90,"td")(91,"code"),Qx(92,"--padding-content"),og()(),Il(93,"td"),Qx(94,"Espa\xE7amento do conte\xFAdo"),og(),Il(95,"td")(96,"code"),Qx(97,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Il(98,"div",8)(99,"h4",9),Qx(100,"Seletor"),og(),Il(101,"pre",10),Qx(102,`<po-page-job-scheduler
    p-before-send="unknown"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),og()(),Il(103,"h4",11),Qx(104,"Propriedades"),og(),Il(105,"table",12)(106,"tr",13)(107,"th",14),Qx(108,"Nome"),og(),Il(109,"th",14),Qx(110,"Tipo"),og(),Il(111,"th",14),Qx(112,"Padr\xE3o"),og(),Il(113,"th",14),Qx(114,"Descri\xE7\xE3o"),og()(),Il(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),Qx(119," p-before-send"),zl(120,"br"),og()()(),Il(121,"td",19)(122,"code",20),Qx(123,"unknown"),og()(),Il(124,"td",21),Qx(125,"-"),og(),Il(126,"td",22)(127,"em")(128,"strong"),Qx(129,"(opcional)"),og()(),Il(130,"p"),Qx(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),og(),Il(132,"blockquote")(133,"p"),Qx(134,"Deve retornar um objeto do tipo "),Il(135,"code"),Qx(136,"PoPageJobScheduler"),og(),Qx(137," para ser adicionado ao model do PoPageJobScheduler."),og()(),Il(138,"blockquote")(139,"p"),Qx(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),Il(141,"code"),Qx(142,"PoJobSchedulerInternal"),og(),Qx(143,"."),og()(),Il(144,"p"),Qx(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Il(146,"code"),Qx(147,"PoPageJobScheduler"),og(),Qx(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Il(149,"code"),Qx(150,"bind"),og(),Qx(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Il(152,"code"),Qx(153,"beforeSend"),og(),Qx(154,":"),og(),Il(155,"pre")(156,"code"),Qx(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),og()()()(),Il(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),Qx(162," p-breadcrumb"),zl(163,"br"),og()()(),Il(164,"td",19)(165,"code",23),Qx(166,"PoBreadcrumb"),og()(),Il(167,"td",21),Qx(168,"-"),og(),Il(169,"td",22)(170,"em")(171,"strong"),Qx(172,"(opcional)"),og()(),Il(173,"p"),Qx(174,"Objeto com as propriedades do breadcrumb."),og()()(),Il(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),Qx(179," p-components-size"),zl(180,"br"),og()()(),Il(181,"td",19)(182,"code",24),Qx(183,"string"),og()(),Il(184,"td",21)(185,"p")(186,"code"),Qx(187,"medium"),og()()(),Il(188,"td",22)(189,"em")(190,"strong"),Qx(191,"(opcional)"),og()(),Il(192,"p"),Qx(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(194,"ul")(195,"li")(196,"code"),Qx(197,"small"),og(),Qx(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(199,"li")(200,"code"),Qx(201,"medium"),og(),Qx(202,": aplica a medida medium de cada componente."),og()(),Il(203,"blockquote")(204,"p"),Qx(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(206,"code"),Qx(207,"medium"),og(),Qx(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(209,"a",25),Qx(210,"po-theme"),og(),Qx(211,"."),og()()()(),Il(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),Qx(216," (p-error)"),zl(217,"br"),og()()(),Il(218,"td",19)(219,"code",28),Qx(220,"EventEmitter"),og()(),Il(221,"td",21),Qx(222,"-"),og(),Il(223,"td",22)(224,"em")(225,"strong"),Qx(226,"(opcional)"),og()(),Il(227,"p"),Qx(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),og()()(),Il(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),Qx(233," p-parameters"),zl(234,"br"),og()()(),Il(235,"td",19)(236,"code",29),Qx(237,"Array<PoDynamicFormField>"),og()(),Il(238,"td",21),Qx(239,"-"),og(),Il(240,"td",22)(241,"p"),Qx(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),og(),Il(243,"p"),Qx(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),og()()(),Il(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),Qx(249," p-service-api"),zl(250,"br"),og()()(),Il(251,"td",19)(252,"code",24),Qx(253,"string"),og()(),Il(254,"td",21),Qx(255,"-"),og(),Il(256,"td",22)(257,"p"),Qx(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),og(),Il(259,"h4"),Qx(260,"Processos"),og(),Il(261,"p"),Qx(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Il(263,"code"),Qx(264,"GET"),og(),Qx(265," para o endpoint "),Il(266,"code"),Qx(267,"{service-api}/processes"),og(),Qx(268,`, para buscar
essa lista de processos.`),og(),Il(269,"p"),Qx(270,"Este endpoint "),Il(271,"code"),Qx(272,"{service-api}/processes"),og(),Qx(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),og(),Il(274,"pre")(275,"code"),Qx(276,`GET {service-api}/processes
`),og()(),Il(277,"pre")(278,"code"),Qx(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),og()(),Il(280,"p"),Qx(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),og(),Il(282,"p"),Qx(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Il(284,"code"),Qx(285,"search"),og(),Qx(286,". Da seguinte forma:"),og(),Il(287,"pre")(288,"code"),Qx(289,`GET {service-api}/processes?search=relatorio
`),og()(),Il(290,"blockquote")(291,"p"),Qx(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),Il(293,"a",6),Qx(294,"Guia de implementa\xE7\xE3o de APIs"),og(),Qx(295,`.
Caso seja informada a propriedade `),Il(296,"code"),Qx(297,"p-parameters"),og(),Qx(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),og()(),Il(299,"p"),Qx(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Il(301,"code"),Qx(302,"{service-api}/processes"),og(),Qx(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Il(304,"strong"),Qx(305,"identificador do processo - "),Il(306,"code"),Qx(307,"processID"),og()(),Qx(308," e ao salvar ser\xE1 enviado um "),Il(309,"code"),Qx(310,"POST"),og(),Qx(311," para o endpoint difinido "),Il(312,"code"),Qx(313,"serviceApi"),og(),Qx(314," conforme abaixo:"),og(),Il(315,"pre")(316,"code"),Qx(317,`POST {service-api}
`),og()(),Il(318,"p")(319,"em"),Qx(320,"Request payload"),og(),Qx(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Il(322,"code"),Qx(323,"PoJobScheduler"),og(),Qx(324,":"),og(),Il(325,"pre")(326,"code"),Qx(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),og()(),Il(328,"p"),Qx(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),Il(330,"code"),Qx(331,"GET"),og(),Qx(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Il(333,"a",30),Qx(334,"PoDynamicFormField"),og(),Qx(335,". Por\xE9m, caso utilizar a propriedade "),Il(336,"code"),Qx(337,"p-parameters"),og(),Qx(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),og(),Il(339,"pre")(340,"code"),Qx(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),og()(),Il(342,"h4"),Qx(343,"Salvar e Atualizar"),og(),Il(344,"p"),Qx(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),Il(346,"em"),Qx(347,"payload"),og(),Qx(348,`.
Abaixo uma requisi\xE7\xE3o `),Il(349,"code"),Qx(350,"POST"),og(),Qx(351," disparada, onde as propriedades do "),Il(352,"em"),Qx(353,"Job Scheduler"),og(),Qx(354," foram preenchidas:"),og(),Il(355,"pre")(356,"code"),Qx(357,`POST {service-api}
`),og()(),Il(358,"p")(359,"em"),Qx(360,"Request payload"),og(),Qx(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Il(362,"code"),Qx(363,"PoJobScheduler"),og(),Qx(364,":"),og(),Il(365,"pre")(366,"code"),Qx(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),og()(),Il(368,"p"),Qx(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),Il(370,"code"),Qx(371,"id"),og(),Qx(372,"."),og(),Il(373,"p"),Qx(374,"Exemplo de configura\xE7\xE3o de rota:"),og(),Il(375,"pre")(376,"code"),Qx(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),og()(),Il(378,"p"),Qx(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),og(),Il(380,"pre")(381,"code"),Qx(382,`GET {service-api}/{id}
`),og()(),Il(383,"p"),Qx(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),Il(385,"code"),Qx(386,"PUT"),og(),Qx(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Il(388,"code"),Qx(389,"PUT"),og(),Qx(390," disparada, onde a propriedade "),Il(391,"em"),Qx(392,"recurrent"),og(),Qx(393," e "),Il(394,"em"),Qx(395,"daily"),og(),Qx(396," foram atualizadas:"),og(),Il(397,"pre")(398,"code"),Qx(399,`PUT {service-api}/{id}
`),og()(),Il(400,"p")(401,"em"),Qx(402,"Request payload"),og(),Qx(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Il(404,"code"),Qx(405,"PoJobScheduler"),og(),Qx(406,":"),og(),Il(407,"pre")(408,"code"),Qx(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),og()()()(),Il(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),Qx(414," p-step-execution-last"),zl(415,"br"),og()()(),Il(416,"td",19)(417,"code",31),Qx(418,"boolean"),og()(),Il(419,"td",21),Qx(420,"-"),og(),Il(421,"td",22)(422,"em")(423,"strong"),Qx(424,"(opcional)"),og()(),Il(425,"p"),Qx(426,"Define se o step "),Il(427,"code"),Qx(428,"Agendamento"),og(),Qx(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),og(),Il(430,"blockquote")(431,"p"),Qx(432,"Aplic\xE1vel apenas quando utilizado "),Il(433,"code"),Qx(434,"PoJobSchedulerParametersTemplateDirective"),og()()()()(),Il(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),Qx(439," p-orientation"),zl(440,"br"),og()()(),Il(441,"td",19)(442,"code",32),Qx(443,"PoStepperOrientation"),og()(),Il(444,"td",21),Qx(445,"-"),og(),Il(446,"td",22)(447,"em")(448,"strong"),Qx(449,"(opcional)"),og()(),Il(450,"p"),Qx(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Il(452,"code"),Qx(453,"po-stepper"),og(),Qx(454,"."),og(),Il(455,"blockquote")(456,"p"),Qx(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),og()(),Il(458,"blockquote")(459,"p"),Qx(460,"Veja os valores v\xE1lidos no "),Il(461,"em"),Qx(462,"enum"),og(),Il(463,"a",33),Qx(464,"PoStepperOrientation"),og(),Qx(465,"."),og()()()(),Il(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),Qx(470," (p-success)"),zl(471,"br"),og()()(),Il(472,"td",19)(473,"code",28),Qx(474,"EventEmitter"),og()(),Il(475,"td",21),Qx(476,"-"),og(),Il(477,"td",22)(478,"em")(479,"strong"),Qx(480,"(opcional)"),og()(),Il(481,"p"),Qx(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),og()()(),Il(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),Qx(487," p-title"),zl(488,"br"),og()()(),Il(489,"td",19)(490,"code",24),Qx(491,"string"),og()(),Il(492,"td",21),Qx(493,"-"),og(),Il(494,"td",22)(495,"p"),Qx(496,"T\xEDtulo da p\xE1gina."),og()()()(),Il(497,"h3"),Qx(498,"Interfaces"),og(),Il(499,"h4",34)(500,"code",5),Qx(501,"PoJobScheduler"),og()(),Il(502,"div",2)(503,"p"),Qx(504,"Estrutura do "),Il(505,"em"),Qx(506,"payload"),og(),Qx(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),Il(508,"em"),Qx(509,"Job Scheduler"),og(),Qx(510,"."),og()(),Il(511,"h4",11),Qx(512,"Propriedades"),og(),Il(513,"table",12)(514,"tr",13)(515,"th",14),Qx(516,"Nome"),og(),Il(517,"th",14),Qx(518,"Tipo"),og(),Il(519,"th",14),Qx(520,"Descri\xE7\xE3o"),og()(),Il(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),Qx(525," daily"),zl(526,"br"),og()()(),Il(527,"td",19)(528,"code",35),Qx(529,`{ hour: number; minute: number;
}`),og()(),Il(530,"td",22)(531,"em")(532,"strong"),Qx(533,"(opcional)"),og()(),Il(534,"p"),Qx(535,"Define uma repeti\xE7\xE3o di\xE1ria."),og()()(),Il(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),Qx(540," executionParameter"),zl(541,"br"),og()()(),Il(542,"td",19)(543,"code",36),Qx(544,"object"),og()(),Il(545,"td",22)(546,"em")(547,"strong"),Qx(548,"(opcional)"),og()(),Il(549,"p"),Qx(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),og()()(),Il(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),Qx(555," firstExecution"),zl(556,"br"),og()()(),Il(557,"td",19)(558,"code",24),Qx(559,"string"),og()(),Il(560,"td",22)(561,"em")(562,"strong"),Qx(563,"(opcional)"),og()(),Il(564,"p"),Qx(565,"Data da primeira execu\xE7\xE3o."),og()()(),Il(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),Qx(570," monthly"),zl(571,"br"),og()()(),Il(572,"td",19)(573,"code",37),Qx(574,`{ day: number; hour: number; minute: number;
}`),og()(),Il(575,"td",22)(576,"em")(577,"strong"),Qx(578,"(opcional)"),og()(),Il(579,"p"),Qx(580,"Define uma repeti\xE7\xE3o mensal."),og()()(),Il(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),Qx(585," processID"),zl(586,"br"),og()()(),Il(587,"td",19)(588,"code",24),Qx(589,"string"),og()(),Il(590,"td",22)(591,"p"),Qx(592,"Identificador do processo."),og()()(),Il(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),Qx(597," recurrent"),zl(598,"br"),og()()(),Il(599,"td",19)(600,"code",31),Qx(601,"boolean"),og()(),Il(602,"td",22)(603,"em")(604,"strong"),Qx(605,"(opcional)"),og()(),Il(606,"p"),Qx(607,"Permite uma execu\xE7\xE3o recorrente."),og()()(),Il(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),Qx(612," weekly"),zl(613,"br"),og()()(),Il(614,"td",19)(615,"code",38),Qx(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),og()(),Il(617,"td",22)(618,"em")(619,"strong"),Qx(620,"(opcional)"),og()(),Il(621,"p"),Qx(622,"Define uma repeti\xE7\xE3o semanal."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var X=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return m.changeTab("doc")}),zl(3,"sample-po-page-job-scheduler-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return m.changeTab("web")}),zl(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),og()()()),o&2&&(nw("p-actions",m.actions),Lp(2),nw("p-active",m.activeTab==="doc"),Lp(2),nw("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[cNe,qme,Yme,G,U,$],encapsulation:2})}return i})();var de=[{path:"",component:X}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[uL.forChild(de),uL]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};