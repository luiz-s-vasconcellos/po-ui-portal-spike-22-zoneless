import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,cj as Ta,H as Wl,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,b2 as Khe,b3 as eNe,b7 as k3,ba as fNe,ck as Us,cl as Ws,a2 as JE,a3 as rNe,aB as wx,aA as Mx,aD as Ky,aE as Xy}from'./main-WP3NAV7C.js';var N=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:false,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&Wl(0,"po-page-job-scheduler",0),o&2&&nw("p-breadcrumb",m.breadcrumb);},dependencies:[Ta],encapsulation:2,changeDetection:1})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),G=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Job Scheduler - Background Process"),og(),Sl(4,"a",2),ft("click",function(){return m.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-job-scheduler-background-process"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+m.sampleCodeButtonIcon),Lp(),dg(" ",m.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ee,m.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,N],encapsulation:2})}return i})();function ne(i,_){if(i&1){let r=wx();Sl(0,"h1"),eN(1,"Etapa 1"),og(),Sl(2,"po-dynamic-form",4),ft("p-form",function(m){Ky(r);let c=Mx();return Xy(c.getFormExample(m))}),og();}if(i&2){let r=Mx();Lp(2),nw("p-fields",r.parametersForm);}}function ie(i,_){if(i&1){let r=wx();Sl(0,"po-table",5),ft("p-selected",function(m){Ky(r);let c=Mx();return Xy(c.selectedItem(m))}),og();}if(i&2){let r=Mx();nw("p-items",r.items)("p-selectable",true);}}function oe(i,_){if(i&1&&(Sl(0,"po-widget",6),Wl(1,"po-dynamic-view",7),og()),i&2){let r=Mx();Lp(),nw("p-fields",r.fieldsSummary)("p-value",r.valueSummary);}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:true,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:true,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r;}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version};}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:false,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(Sl(0,"po-page-job-scheduler",0),JE(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),og()),o&2&&(nw("p-step-execution-last",true),Lp(),nw("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),Lp(),nw("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue));},dependencies:[Khe,eNe,k3,fNe,Ta,Us,Ws],encapsulation:2,changeDetection:1})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Page Job Scheduler - Directives"),og(),Sl(4,"a",2),ft("click",function(){return m.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-job-scheduler
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-job-scheduler-directives"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+m.sampleCodeButtonIcon),Lp(),dg(" ",m.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,re,m.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,W],encapsulation:2})}return i})();var $=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:false,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),og()(),Wl(4,"div",2),Sl(5,"h3",3),eN(6,"Componente"),og(),Sl(7,"h4",4)(8,"code",5),eN(9,"PoPageJobSchedulerComponent"),og()(),Sl(10,"div",2)(11,"p"),eN(12,"O "),Sl(13,"code"),eN(14,"po-page-job-scheduler"),og(),eN(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),og(),Sl(16,"p"),eN(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),og(),Sl(18,"p"),eN(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),Sl(20,"a",6),eN(21,"Guia de implementa\xE7\xE3o de APIs"),og(),eN(22,"."),og(),Sl(23,"h4"),eN(24,"Tokens customiz\xE1veis"),og(),Sl(25,"blockquote")(26,"p"),eN(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(28,"a",7),eN(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(30,"."),og()(),Sl(31,"table")(32,"thead")(33,"tr")(34,"th"),eN(35,"Propriedade"),og(),Sl(36,"th"),eN(37,"Descri\xE7\xE3o"),og(),Sl(38,"th"),eN(39,"Valor Padr\xE3o"),og()()(),Sl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),eN(44,"Header"),og()(),Wl(45,"td")(46,"td"),og(),Sl(47,"tr")(48,"td")(49,"code"),eN(50,"--padding"),og()(),Sl(51,"td"),eN(52,"Espa\xE7amento do header"),og(),Sl(53,"td")(54,"code"),eN(55,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(56,"tr")(57,"td")(58,"code"),eN(59,"--gap"),og()(),Sl(60,"td"),eN(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(62,"td")(63,"code"),eN(64,"var(--spacing-md)"),og()()(),Sl(65,"tr")(66,"td")(67,"code"),eN(68,"--gap-actions"),og()(),Sl(69,"td"),eN(70,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(71,"td")(72,"code"),eN(73,"var(--spacing-xs)"),og()()(),Sl(74,"tr")(75,"td")(76,"code"),eN(77,"--font-family"),og()(),Sl(78,"td"),eN(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(80,"td")(81,"code"),eN(82,"var(--font-family-theme)"),og()()(),Sl(83,"tr")(84,"td")(85,"strong"),eN(86,"Content"),og()(),Wl(87,"td")(88,"td"),og(),Sl(89,"tr")(90,"td")(91,"code"),eN(92,"--padding-content"),og()(),Sl(93,"td"),eN(94,"Espa\xE7amento do conte\xFAdo"),og(),Sl(95,"td")(96,"code"),eN(97,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(98,"div",8)(99,"h4",9),eN(100,"Seletor"),og(),Sl(101,"pre",10),eN(102,`<po-page-job-scheduler
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
`),og()(),Sl(103,"h4",11),eN(104,"Propriedades"),og(),Sl(105,"table",12)(106,"tr",13)(107,"th",14),eN(108,"Nome"),og(),Sl(109,"th",14),eN(110,"Tipo"),og(),Sl(111,"th",14),eN(112,"Padr\xE3o"),og(),Sl(113,"th",14),eN(114,"Descri\xE7\xE3o"),og()(),Sl(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),eN(119," p-before-send"),Wl(120,"br"),og()()(),Sl(121,"td",19)(122,"code",20),eN(123,"unknown"),og()(),Sl(124,"td",21),eN(125,"-"),og(),Sl(126,"td",22)(127,"em")(128,"strong"),eN(129,"(opcional)"),og()(),Sl(130,"p"),eN(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),og(),Sl(132,"blockquote")(133,"p"),eN(134,"Deve retornar um objeto do tipo "),Sl(135,"code"),eN(136,"PoPageJobScheduler"),og(),eN(137," para ser adicionado ao model do PoPageJobScheduler."),og()(),Sl(138,"blockquote")(139,"p"),eN(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),Sl(141,"code"),eN(142,"PoJobSchedulerInternal"),og(),eN(143,"."),og()(),Sl(144,"p"),eN(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Sl(146,"code"),eN(147,"PoPageJobScheduler"),og(),eN(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Sl(149,"code"),eN(150,"bind"),og(),eN(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Sl(152,"code"),eN(153,"beforeSend"),og(),eN(154,":"),og(),Sl(155,"pre")(156,"code"),eN(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),og()()()(),Sl(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),eN(162," p-breadcrumb"),Wl(163,"br"),og()()(),Sl(164,"td",19)(165,"code",23),eN(166,"PoBreadcrumb"),og()(),Sl(167,"td",21),eN(168,"-"),og(),Sl(169,"td",22)(170,"em")(171,"strong"),eN(172,"(opcional)"),og()(),Sl(173,"p"),eN(174,"Objeto com as propriedades do breadcrumb."),og()()(),Sl(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),eN(179," p-components-size"),Wl(180,"br"),og()()(),Sl(181,"td",19)(182,"code",24),eN(183,"string"),og()(),Sl(184,"td",21)(185,"p")(186,"code"),eN(187,"medium"),og()()(),Sl(188,"td",22)(189,"em")(190,"strong"),eN(191,"(opcional)"),og()(),Sl(192,"p"),eN(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(194,"ul")(195,"li")(196,"code"),eN(197,"small"),og(),eN(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(199,"li")(200,"code"),eN(201,"medium"),og(),eN(202,": aplica a medida medium de cada componente."),og()(),Sl(203,"blockquote")(204,"p"),eN(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(206,"code"),eN(207,"medium"),og(),eN(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(209,"a",25),eN(210,"po-theme"),og(),eN(211,"."),og()()()(),Sl(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),eN(216," (p-error)"),Wl(217,"br"),og()()(),Sl(218,"td",19)(219,"code",28),eN(220,"EventEmitter"),og()(),Sl(221,"td",21),eN(222,"-"),og(),Sl(223,"td",22)(224,"em")(225,"strong"),eN(226,"(opcional)"),og()(),Sl(227,"p"),eN(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),og()()(),Sl(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),eN(233," p-parameters"),Wl(234,"br"),og()()(),Sl(235,"td",19)(236,"code",29),eN(237,"Array<PoDynamicFormField>"),og()(),Sl(238,"td",21),eN(239,"-"),og(),Sl(240,"td",22)(241,"p"),eN(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),og(),Sl(243,"p"),eN(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),og()()(),Sl(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),eN(249," p-service-api"),Wl(250,"br"),og()()(),Sl(251,"td",19)(252,"code",24),eN(253,"string"),og()(),Sl(254,"td",21),eN(255,"-"),og(),Sl(256,"td",22)(257,"p"),eN(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),og(),Sl(259,"h4"),eN(260,"Processos"),og(),Sl(261,"p"),eN(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Sl(263,"code"),eN(264,"GET"),og(),eN(265," para o endpoint "),Sl(266,"code"),eN(267,"{service-api}/processes"),og(),eN(268,`, para buscar
essa lista de processos.`),og(),Sl(269,"p"),eN(270,"Este endpoint "),Sl(271,"code"),eN(272,"{service-api}/processes"),og(),eN(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),og(),Sl(274,"pre")(275,"code"),eN(276,`GET {service-api}/processes
`),og()(),Sl(277,"pre")(278,"code"),eN(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),og()(),Sl(280,"p"),eN(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),og(),Sl(282,"p"),eN(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Sl(284,"code"),eN(285,"search"),og(),eN(286,". Da seguinte forma:"),og(),Sl(287,"pre")(288,"code"),eN(289,`GET {service-api}/processes?search=relatorio
`),og()(),Sl(290,"blockquote")(291,"p"),eN(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),Sl(293,"a",6),eN(294,"Guia de implementa\xE7\xE3o de APIs"),og(),eN(295,`.
Caso seja informada a propriedade `),Sl(296,"code"),eN(297,"p-parameters"),og(),eN(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),og()(),Sl(299,"p"),eN(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Sl(301,"code"),eN(302,"{service-api}/processes"),og(),eN(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Sl(304,"strong"),eN(305,"identificador do processo - "),Sl(306,"code"),eN(307,"processID"),og()(),eN(308," e ao salvar ser\xE1 enviado um "),Sl(309,"code"),eN(310,"POST"),og(),eN(311," para o endpoint difinido "),Sl(312,"code"),eN(313,"serviceApi"),og(),eN(314," conforme abaixo:"),og(),Sl(315,"pre")(316,"code"),eN(317,`POST {service-api}
`),og()(),Sl(318,"p")(319,"em"),eN(320,"Request payload"),og(),eN(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Sl(322,"code"),eN(323,"PoJobScheduler"),og(),eN(324,":"),og(),Sl(325,"pre")(326,"code"),eN(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),og()(),Sl(328,"p"),eN(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),Sl(330,"code"),eN(331,"GET"),og(),eN(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Sl(333,"a",30),eN(334,"PoDynamicFormField"),og(),eN(335,". Por\xE9m, caso utilizar a propriedade "),Sl(336,"code"),eN(337,"p-parameters"),og(),eN(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),og(),Sl(339,"pre")(340,"code"),eN(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),og()(),Sl(342,"h4"),eN(343,"Salvar e Atualizar"),og(),Sl(344,"p"),eN(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),Sl(346,"em"),eN(347,"payload"),og(),eN(348,`.
Abaixo uma requisi\xE7\xE3o `),Sl(349,"code"),eN(350,"POST"),og(),eN(351," disparada, onde as propriedades do "),Sl(352,"em"),eN(353,"Job Scheduler"),og(),eN(354," foram preenchidas:"),og(),Sl(355,"pre")(356,"code"),eN(357,`POST {service-api}
`),og()(),Sl(358,"p")(359,"em"),eN(360,"Request payload"),og(),eN(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Sl(362,"code"),eN(363,"PoJobScheduler"),og(),eN(364,":"),og(),Sl(365,"pre")(366,"code"),eN(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),og()(),Sl(368,"p"),eN(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),Sl(370,"code"),eN(371,"id"),og(),eN(372,"."),og(),Sl(373,"p"),eN(374,"Exemplo de configura\xE7\xE3o de rota:"),og(),Sl(375,"pre")(376,"code"),eN(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),og()(),Sl(378,"p"),eN(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),og(),Sl(380,"pre")(381,"code"),eN(382,`GET {service-api}/{id}
`),og()(),Sl(383,"p"),eN(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),Sl(385,"code"),eN(386,"PUT"),og(),eN(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Sl(388,"code"),eN(389,"PUT"),og(),eN(390," disparada, onde a propriedade "),Sl(391,"em"),eN(392,"recurrent"),og(),eN(393," e "),Sl(394,"em"),eN(395,"daily"),og(),eN(396," foram atualizadas:"),og(),Sl(397,"pre")(398,"code"),eN(399,`PUT {service-api}/{id}
`),og()(),Sl(400,"p")(401,"em"),eN(402,"Request payload"),og(),eN(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Sl(404,"code"),eN(405,"PoJobScheduler"),og(),eN(406,":"),og(),Sl(407,"pre")(408,"code"),eN(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),og()()()(),Sl(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),eN(414," p-step-execution-last"),Wl(415,"br"),og()()(),Sl(416,"td",19)(417,"code",31),eN(418,"boolean"),og()(),Sl(419,"td",21),eN(420,"-"),og(),Sl(421,"td",22)(422,"em")(423,"strong"),eN(424,"(opcional)"),og()(),Sl(425,"p"),eN(426,"Define se o step "),Sl(427,"code"),eN(428,"Agendamento"),og(),eN(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),og(),Sl(430,"blockquote")(431,"p"),eN(432,"Aplic\xE1vel apenas quando utilizado "),Sl(433,"code"),eN(434,"PoJobSchedulerParametersTemplateDirective"),og()()()()(),Sl(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),eN(439," p-orientation"),Wl(440,"br"),og()()(),Sl(441,"td",19)(442,"code",32),eN(443,"PoStepperOrientation"),og()(),Sl(444,"td",21),eN(445,"-"),og(),Sl(446,"td",22)(447,"em")(448,"strong"),eN(449,"(opcional)"),og()(),Sl(450,"p"),eN(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Sl(452,"code"),eN(453,"po-stepper"),og(),eN(454,"."),og(),Sl(455,"blockquote")(456,"p"),eN(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),og()(),Sl(458,"blockquote")(459,"p"),eN(460,"Veja os valores v\xE1lidos no "),Sl(461,"em"),eN(462,"enum"),og(),Sl(463,"a",33),eN(464,"PoStepperOrientation"),og(),eN(465,"."),og()()()(),Sl(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),eN(470," (p-success)"),Wl(471,"br"),og()()(),Sl(472,"td",19)(473,"code",28),eN(474,"EventEmitter"),og()(),Sl(475,"td",21),eN(476,"-"),og(),Sl(477,"td",22)(478,"em")(479,"strong"),eN(480,"(opcional)"),og()(),Sl(481,"p"),eN(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),og()()(),Sl(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),eN(487," p-title"),Wl(488,"br"),og()()(),Sl(489,"td",19)(490,"code",24),eN(491,"string"),og()(),Sl(492,"td",21),eN(493,"-"),og(),Sl(494,"td",22)(495,"p"),eN(496,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(497,"h3"),eN(498,"Interfaces"),og(),Sl(499,"h4",34)(500,"code",5),eN(501,"PoJobScheduler"),og()(),Sl(502,"div",2)(503,"p"),eN(504,"Estrutura do "),Sl(505,"em"),eN(506,"payload"),og(),eN(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),Sl(508,"em"),eN(509,"Job Scheduler"),og(),eN(510,"."),og()(),Sl(511,"h4",11),eN(512,"Propriedades"),og(),Sl(513,"table",12)(514,"tr",13)(515,"th",14),eN(516,"Nome"),og(),Sl(517,"th",14),eN(518,"Tipo"),og(),Sl(519,"th",14),eN(520,"Descri\xE7\xE3o"),og()(),Sl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),eN(525," daily"),Wl(526,"br"),og()()(),Sl(527,"td",19)(528,"code",35),eN(529,`{ hour: number; minute: number;
}`),og()(),Sl(530,"td",22)(531,"em")(532,"strong"),eN(533,"(opcional)"),og()(),Sl(534,"p"),eN(535,"Define uma repeti\xE7\xE3o di\xE1ria."),og()()(),Sl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),eN(540," executionParameter"),Wl(541,"br"),og()()(),Sl(542,"td",19)(543,"code",36),eN(544,"object"),og()(),Sl(545,"td",22)(546,"em")(547,"strong"),eN(548,"(opcional)"),og()(),Sl(549,"p"),eN(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),og()()(),Sl(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),eN(555," firstExecution"),Wl(556,"br"),og()()(),Sl(557,"td",19)(558,"code",24),eN(559,"string"),og()(),Sl(560,"td",22)(561,"em")(562,"strong"),eN(563,"(opcional)"),og()(),Sl(564,"p"),eN(565,"Data da primeira execu\xE7\xE3o."),og()()(),Sl(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),eN(570," monthly"),Wl(571,"br"),og()()(),Sl(572,"td",19)(573,"code",37),eN(574,`{ day: number; hour: number; minute: number;
}`),og()(),Sl(575,"td",22)(576,"em")(577,"strong"),eN(578,"(opcional)"),og()(),Sl(579,"p"),eN(580,"Define uma repeti\xE7\xE3o mensal."),og()()(),Sl(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),eN(585," processID"),Wl(586,"br"),og()()(),Sl(587,"td",19)(588,"code",24),eN(589,"string"),og()(),Sl(590,"td",22)(591,"p"),eN(592,"Identificador do processo."),og()()(),Sl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),eN(597," recurrent"),Wl(598,"br"),og()()(),Sl(599,"td",19)(600,"code",31),eN(601,"boolean"),og()(),Sl(602,"td",22)(603,"em")(604,"strong"),eN(605,"(opcional)"),og()(),Sl(606,"p"),eN(607,"Permite uma execu\xE7\xE3o recorrente."),og()()(),Sl(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),eN(612," weekly"),Wl(613,"br"),og()()(),Sl(614,"td",19)(615,"code",38),eN(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),og()(),Sl(617,"td",22)(618,"em")(619,"strong"),eN(620,"(opcional)"),og()(),Sl(621,"p"),eN(622,"Define uma repeti\xE7\xE3o semanal."),og()()()()());},dependencies:[Ka],encapsulation:2})}return i})();var X=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return m.changeTab("doc")}),Wl(3,"sample-po-page-job-scheduler-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return m.changeTab("web")}),Wl(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),og()()()),o&2&&(nw("p-actions",m.actions),Lp(2),nw("p-active",m.activeTab==="doc"),Lp(2),nw("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[rNe,Bme,qme,G,U,$],encapsulation:2})}return i})();var de=[{path:"",component:X}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[hL.forChild(de),hL]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[sr,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};