import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,cg as Ma,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,av as Gl,aw as co,ax as lo,a3 as cNe}from'./main-FCMDZGSJ.js';var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:false,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&zl(0,"po-page-dynamic-edit",0),o&2&&nw("p-fields",uN(2,G,lN(1,V)));},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Dynamic Edit Basic"),og(),Il(4,"a",2),ft("click",function(){return d.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-dynamic-edit-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+d.sampleCodeButtonIcon),Lp(),dg(" ",d.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,W,d.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,B],encapsulation:2})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:true,required:true},{property:"name",divider:"Personal data",required:true},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&Gl(J,7),o&2){let u;co(u=lo())&&(d.dynamicEdit=u.first);}},standalone:false,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&zl(0,"po-page-dynamic-edit",1,0),o&2&&nw("p-auto-router",true)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi);},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Page Dynamic Edit - User"),og(),Il(4,"a",2),ft("click",function(){return d.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-page-dynamic-edit-user"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+d.sampleCodeButtonIcon),Lp(),dg(" ",d.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Z,d.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:false,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do template do po-page-dynamic-detail."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoPageDynamicEditComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O "),Il(15,"code"),Qx(16,"po-page-dynamic-edit"),og(),Qx(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),og(),Il(18,"h3"),Qx(19,"Utiliza\xE7\xE3o via rota"),og(),Il(20,"p"),Qx(21,"Ao utilizar as rotas para inicializar o template, o "),Il(22,"code"),Qx(23,"page-dynamic-edit"),og(),Qx(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),og(),Il(25,"p"),Qx(26,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(27,"p"),Qx(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),Il(29,"code"),Qx(30,"app-routing.module.ts"),og()(),Il(31,"pre")(32,"code"),Qx(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),og()(),Il(34,"p"),Qx(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),og(),Il(36,"p"),Qx(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),og(),Il(38,"blockquote")(39,"p"),Qx(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),og()(),Il(41,"p"),Qx(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),Il(43,"code"),Qx(44,"id"),og(),Qx(45,":"),og(),Il(46,"pre")(47,"code"),Qx(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),og()(),Il(49,"p"),Qx(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),og(),Il(51,"p"),Qx(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Il(53,"a",6),Qx(54,"PoPageDynamicEditMetadata"),og(),Qx(55,". Por exemplo:"),og(),Il(56,"pre")(57,"code"),Qx(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),og()(),Il(59,"blockquote")(60,"p"),Qx(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),Il(62,"code"),Qx(63,"serviceApi"),og(),Qx(64," da seguinte forma:"),og()(),Il(65,"pre")(66,"code"),Qx(67,`GET {end-point}/metadata?type=edit&version={version}
`),og()(),Il(68,"h4"),Qx(69,"Tokens customiz\xE1veis"),og(),Il(70,"table")(71,"thead")(72,"tr")(73,"th"),Qx(74,"Propriedade"),og(),Il(75,"th"),Qx(76,"Descri\xE7\xE3o"),og(),Il(77,"th"),Qx(78,"Valor Padr\xE3o"),og()()(),Il(79,"tbody")(80,"tr")(81,"td")(82,"strong"),Qx(83,"Header"),og()(),zl(84,"td")(85,"td"),og(),Il(86,"tr")(87,"td")(88,"code"),Qx(89,"--padding"),og()(),Il(90,"td"),Qx(91,"Espa\xE7amento do header"),og(),Il(92,"td")(93,"code"),Qx(94,"var(--spacing-xs) var(--spacing-md)"),og()()(),Il(95,"tr")(96,"td")(97,"code"),Qx(98,"--gap"),og()(),Il(99,"td"),Qx(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Il(101,"td")(102,"code"),Qx(103,"var(--spacing-md)"),og()()(),Il(104,"tr")(105,"td")(106,"code"),Qx(107,"--gap-actions"),og()(),Il(108,"td"),Qx(109,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Il(110,"td")(111,"code"),Qx(112,"var(--spacing-xs)"),og()()(),Il(113,"tr")(114,"td")(115,"code"),Qx(116,"--font-family"),og()(),Il(117,"td"),Qx(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Il(119,"td")(120,"code"),Qx(121,"var(--font-family-theme)"),og()()(),Il(122,"tr")(123,"td")(124,"strong"),Qx(125,"Content"),og()(),zl(126,"td")(127,"td"),og(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--padding-content"),og()(),Il(132,"td"),Qx(133,"Espa\xE7amento do conte\xFAdo"),og(),Il(134,"td")(135,"code"),Qx(136,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Il(137,"div",7)(138,"h4",8),Qx(139,"Seletor"),og(),Il(140,"pre",9),Qx(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="unknown"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),og()(),Il(142,"h4",10),Qx(143,"Propriedades"),og(),Il(144,"table",11)(145,"tr",12)(146,"th",13),Qx(147,"Nome"),og(),Il(148,"th",13),Qx(149,"Tipo"),og(),Il(150,"th",13),Qx(151,"Padr\xE3o"),og(),Il(152,"th",13),Qx(153,"Descri\xE7\xE3o"),og()(),Il(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),Qx(158," p-actions"),zl(159,"br"),og()()(),Il(160,"td",18)(161,"code",19),Qx(162,"PoPageDynamicEditActions"),og()(),Il(163,"td",20),Qx(164,"-"),og(),Il(165,"td",21)(166,"em")(167,"strong"),Qx(168,"(opcional)"),og()(),Il(169,"p"),Qx(170,"A\xE7\xF5es da p\xE1gina."),og()()(),Il(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),Qx(175," p-auto-router"),zl(176,"br"),og()()(),Il(177,"td",18)(178,"code",22),Qx(179,"boolean"),og()(),Il(180,"td",20)(181,"p"),Qx(182,"false"),og()(),Il(183,"td",21)(184,"em")(185,"strong"),Qx(186,"(opcional)"),og()(),Il(187,"p"),Qx(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),og(),Il(189,"blockquote")(190,"p"),Qx(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),Il(192,"code"),Qx(193,"**"),og(),Qx(194,") especificada."),og()()()(),Il(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),Qx(199," p-breadcrumb"),zl(200,"br"),og()()(),Il(201,"td",18)(202,"code",23),Qx(203,"PoBreadcrumb"),og()(),Il(204,"td",20),Qx(205,"-"),og(),Il(206,"td",21)(207,"em")(208,"strong"),Qx(209,"(opcional)"),og()(),Il(210,"p"),Qx(211,"Objeto com propriedades do breadcrumb."),og()()(),Il(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),Qx(216," p-components-size"),zl(217,"br"),og()()(),Il(218,"td",18)(219,"code",24),Qx(220,"string"),og()(),Il(221,"td",20)(222,"p")(223,"code"),Qx(224,"medium"),og()()(),Il(225,"td",21)(226,"em")(227,"strong"),Qx(228,"(opcional)"),og()(),Il(229,"p"),Qx(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(231,"ul")(232,"li")(233,"code"),Qx(234,"small"),og(),Qx(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(236,"li")(237,"code"),Qx(238,"medium"),og(),Qx(239,": aplica a medida medium de cada componente."),og()(),Il(240,"blockquote")(241,"p"),Qx(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(243,"code"),Qx(244,"medium"),og(),Qx(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(246,"a",25),Qx(247,"po-theme"),og(),Qx(248,"."),og()()()(),Il(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),Qx(253," p-fields"),zl(254,"br"),og()()(),Il(255,"td",18)(256,"code",26),Qx(257,"Array<PoPageDynamicEditField>"),og()(),Il(258,"td",20),Qx(259,"-"),og(),Il(260,"td",21)(261,"p"),Qx(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),og()()(),Il(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),Qx(267," p-literals"),zl(268,"br"),og()()(),Il(269,"td",18)(270,"code",27),Qx(271,"PoPageDynamicEditLiterals"),og()(),Il(272,"td",20),Qx(273,"-"),og(),Il(274,"td",21)(275,"em")(276,"strong"),Qx(277,"(opcional)"),og()(),Il(278,"p"),Qx(279,"Objeto com as literais usadas no "),Il(280,"code"),Qx(281,"po-page-dynamic-edit"),og(),Qx(282,"."),og(),Il(283,"p"),Qx(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),og(),Il(285,"pre")(286,"code"),Qx(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),og()(),Il(288,"p"),Qx(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(290,"pre")(291,"code"),Qx(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),og()(),Il(293,"blockquote")(294,"p"),Qx(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Il(296,"a",28)(297,"code"),Qx(298,"PoI18nService"),og()(),Qx(299," ou "),Il(300,"em"),Qx(301,"browser"),og(),Qx(302,"."),og()()()(),Il(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),Qx(307," p-notification-type"),zl(308,"br"),og()()(),Il(309,"td",18)(310,"code",24),Qx(311,"string"),og()(),Il(312,"td",20)(313,"p"),Qx(314,"warning"),og()(),Il(315,"td",21)(316,"em")(317,"strong"),Qx(318,"(opcional)"),og()(),Il(319,"p"),Qx(320,"Tipo da notifica\xE7\xE3o."),og(),Il(321,"p"),Qx(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),og(),Il(323,"pre")(324,"code"),Qx(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),og()(),Il(326,"blockquote")(327,"p"),Qx(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),og()()()(),Il(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),Qx(333," p-load"),zl(334,"br"),og()()(),Il(335,"td",18)(336,"code",24),Qx(337,"string "),og(),Il(338,"code",29),Qx(339," (() => PoPageDynamicEditOptions)"),og()(),Il(340,"td",20),Qx(341,"-"),og(),Il(342,"td",21)(343,"p"),Qx(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og(),Il(345,"p"),Qx(346,"A propriedade aceita os seguintes tipos:"),og(),Il(347,"ul")(348,"li")(349,"code"),Qx(350,"string"),og(),Qx(351,": "),Il(352,"em"),Qx(353,"Endpoint"),og(),Qx(354," usado pelo componente para requisi\xE7\xE3o via "),Il(355,"code"),Qx(356,"POST"),og(),Qx(357,"."),og(),Il(358,"li")(359,"code"),Qx(360,"function"),og(),Qx(361,": M\xE9todo que ser\xE1 executado."),og()(),Il(362,"p"),Qx(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Il(364,"code"),Qx(365,"PoPageDynamicEditOptions"),og(),Qx(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),og(),Il(367,"p"),Qx(368,"Por exemplo:"),og(),Il(369,"pre")(370,"code"),Qx(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),og()(),Il(372,"p"),Qx(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Il(374,"code"),Qx(375,"bind"),og(),Qx(376,", por exemplo:"),og(),Il(377,"pre")(378,"code"),Qx(379,`[p-load]="onLoadOptions.bind(this)"
`),og()()()(),Il(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),Qx(384," p-load-data"),zl(385,"br"),og()()(),Il(386,"td",18)(387,"code",30),Qx(388,"unknown"),og()(),Il(389,"td",20),Qx(390,"-"),og(),Il(391,"td",21)(392,"em")(393,"strong"),Qx(394,"(opcional)"),og()(),Il(395,"p"),Qx(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),og(),Il(397,"p"),Qx(398,"A propriedade aceita os seguintes tipos:"),og(),Il(399,"ul")(400,"li")(401,"code"),Qx(402,"function"),og(),Qx(403,": M\xE9todo que ser\xE1 executado."),og()(),Il(404,"p"),Qx(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),og(),Il(406,"p"),Qx(407,"Por exemplo:"),og(),Il(408,"pre")(409,"code"),Qx(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),og()(),Il(411,"p"),Qx(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Il(413,"code"),Qx(414,"bind"),og(),Qx(415,", por exemplo:"),og(),Il(416,"pre")(417,"code"),Qx(418,`[p-load-data]="onLoadCustom.bind(this)"
`),og()()()(),Il(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Qx(423," p-service-api"),zl(424,"br"),og()()(),Il(425,"td",18)(426,"code",24),Qx(427,"string"),og()(),Il(428,"td",20),Qx(429,"-"),og(),Il(430,"td",21)(431,"p"),Qx(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),og(),Il(433,"p"),Qx(434,"Para as a\xE7\xF5es de "),Il(435,"code"),Qx(436,"save"),og(),Qx(437," e "),Il(438,"code"),Qx(439,"saveNew"),og(),Qx(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),og(),Il(441,"blockquote")(442,"p")(443,"code"),Qx(444,"POST {end-point}"),og()()(),Il(445,"pre")(446,"code"),Qx(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),og()(),Il(448,"p"),Qx(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Il(450,"code"),Qx(451,"name"),og(),Qx(452," e "),Il(453,"code"),Qx(454,"city"),og(),Qx(455," foram preenchidas:"),og(),Il(456,"pre")(457,"code"),Qx(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),og()(),Il(459,"p"),Qx(460,"Request payload:"),og(),Il(461,"pre")(462,"code"),Qx(463,`{ "name": "Fulano", "city": "Smallville" }
`),og()(),Il(464,"p"),Qx(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),Il(466,"code"),Qx(467,"id"),og(),Qx(468,"."),og(),Il(469,"p"),Qx(470,"Exemplo de configura\xE7\xE3o de rota:"),og(),Il(471,"pre")(472,"code"),Qx(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),og()(),Il(474,"p"),Qx(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),og(),Il(476,"blockquote")(477,"p")(478,"code"),Qx(479,"GET {end-point}/{id}"),og()()(),Il(480,"p"),Qx(481,"Nos m\xE9todos de "),Il(482,"code"),Qx(483,"save"),og(),Qx(484," e "),Il(485,"code"),Qx(486,"saveNew"),og(),Qx(487,", ao inv\xE9s de um "),Il(488,"code"),Qx(489,"POST"),og(),Qx(490,", ser\xE1 disparado um "),Il(491,"code"),Qx(492,"PUT"),og(),Qx(493,"."),og(),Il(494,"p"),Qx(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Il(496,"code"),Qx(497,"name"),og(),Qx(498," e "),Il(499,"code"),Qx(500,"city"),og(),Qx(501," foram preenchidas / atualizadas, e o "),Il(502,"code"),Qx(503,"id"),og(),Qx(504," da url \xE9 2:"),og(),Il(505,"pre")(506,"code"),Qx(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),og()(),Il(508,"p"),Qx(509,"Request payload:"),og(),Il(510,"pre")(511,"code"),Qx(512,`{ "name": "Fulano", "city": "Metropolis" }
`),og()()()(),Il(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),Qx(517," p-title"),zl(518,"br"),og()()(),Il(519,"td",18)(520,"code",24),Qx(521,"string"),og()(),Il(522,"td",20),Qx(523,"-"),og(),Il(524,"td",21)(525,"p"),Qx(526,"T\xEDtulo da p\xE1gina."),og()()()(),Il(527,"h3",10),Qx(528,"M\xE9todos"),og(),Il(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),Qx(535," showAdditionalHelp "),og()()()()(),Il(536,"tr",21)(537,"td",21)(538,"p"),Qx(539,"M\xE9todo que exibe "),Il(540,"code"),Qx(541,"p-helper"),og(),Qx(542," ou executa a a\xE7\xE3o definida em "),Il(543,"code"),Qx(544,"p-helper{eventOnClick}"),og(),Qx(545," ou em "),Il(546,"code"),Qx(547,"p-additionalHelp"),og(),Qx(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(549,"code"),Qx(550,"keydown"),og(),Qx(551,"."),og(),Il(552,"pre")(553,"code"),Qx(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),og()()()()(),Il(555,"h5")(556,"b"),Qx(557,"Par\xE2metros"),og()(),Il(558,"table",11)(559,"tr",12)(560,"th",13),Qx(561,"Nome"),og(),Il(562,"th",13),Qx(563,"Tipo"),og(),Il(564,"th",13),Qx(565,"Descri\xE7\xE3o"),og()(),Il(566,"tr",14)(567,"td",15),Qx(568," property"),og(),Il(569,"td",18)(570,"code",33),Qx(571," string "),og()(),Il(572,"td",21)(573,"p"),Qx(574,"Identificador da coluna."),og()()()(),zl(575,"br"),Il(576,"h3"),Qx(577,"Interfaces"),og(),Il(578,"h4",34)(579,"code",5),Qx(580,"PoPageDynamicEditActions"),og()(),Il(581,"div",2)(582,"p"),Qx(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),og()(),Il(584,"h4",10),Qx(585,"Propriedades"),og(),Il(586,"table",11)(587,"tr",12)(588,"th",13),Qx(589,"Nome"),og(),Il(590,"th",13),Qx(591,"Tipo"),og(),Il(592,"th",13),Qx(593,"Descri\xE7\xE3o"),og()(),Il(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),Qx(598," beforeCancel"),zl(599,"br"),og()()(),Il(600,"td",18)(601,"code",24),Qx(602,"string "),og(),Il(603,"code",35),Qx(604," (() => PoPageDynamicEditBeforeCancel)"),og()(),Il(605,"td",21)(606,"em")(607,"strong"),Qx(608,"(opcional)"),og()(),Il(609,"p"),Qx(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),og(),Il(611,"p"),Qx(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Il(613,"code"),Qx(614,"PoPageDynamicEditBeforeCancel"),og(),Qx(615,"."),og(),Il(616,"blockquote")(617,"p"),Qx(618,"A url ser\xE1 chamada via POST"),og()(),Il(619,"p"),Qx(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Il(621,"strong"),Qx(622,"beforeCancel"),og(),Qx(623,`
ou definir a mensagem no atributo `),Il(624,"code"),Qx(625,"_messages"),og(),Qx(626,` na resposta da API conforme definido
em `),Il(627,"a",36),Qx(628,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Il(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),Qx(633," beforeSave"),zl(634,"br"),og()()(),Il(635,"td",18)(636,"code",24),Qx(637,"string "),og(),Il(638,"code",37),Qx(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),og()(),Il(640,"td",21)(641,"em")(642,"strong"),Qx(643,"(opcional)"),og()(),Il(644,"p"),Qx(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),og(),Il(646,"p"),Qx(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Il(648,"code"),Qx(649,"PoPageDynamicEditBeforeSave"),og(),Qx(650,"."),og(),Il(651,"blockquote")(652,"p"),Qx(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Il(654,"code"),Qx(655,"POST {beforeSave}/{key}"),og(),Qx(656,"."),og()(),Il(657,"p"),Qx(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Il(659,"strong"),Qx(660,"beforeSave"),og(),Qx(661,`
ou definir a mensagem no atributo `),Il(662,"code"),Qx(663,"_messages"),og(),Qx(664,` na resposta da API conforme definido
em `),Il(665,"a",36),Qx(666,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Il(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),Qx(671," beforeSaveNew"),zl(672,"br"),og()()(),Il(673,"td",18)(674,"code",24),Qx(675,"string "),og(),Il(676,"code",38),Qx(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),og()(),Il(678,"td",21)(679,"em")(680,"strong"),Qx(681,"(opcional)"),og()(),Il(682,"p"),Qx(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),og(),Il(684,"p"),Qx(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Il(686,"code"),Qx(687,"PoPageDynamicEditBeforeSaveNew"),og(),Qx(688,"."),og(),Il(689,"blockquote")(690,"p"),Qx(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Il(692,"code"),Qx(693,"POST {beforeSave}/{key}"),og(),Qx(694,"."),og()(),Il(695,"p"),Qx(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Il(697,"strong"),Qx(698,"beforeSaveNew"),og(),Qx(699,`
ou definir a mensagem no atributo `),Il(700,"code"),Qx(701,"_messages"),og(),Qx(702,` na resposta da API conforme definido
em `),Il(703,"a",36),Qx(704,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Il(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),Qx(709," cancel"),zl(710,"br"),og()()(),Il(711,"td",18)(712,"code",24),Qx(713,"string "),og(),Il(714,"code",22),Qx(715," boolean "),og(),Il(716,"code",39),Qx(717," Function"),og()(),Il(718,"td",21)(719,"em")(720,"strong"),Qx(721,"(opcional)"),og()(),Il(722,"p"),Qx(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),Il(724,"code"),Qx(725,"navigator.back()"),og(),Qx(726,"."),og(),Il(727,"blockquote")(728,"p"),Qx(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),og()(),Il(730,"blockquote")(731,"p"),Qx(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),Il(733,"code"),Qx(734,"false"),og(),Qx(735,";"),og()(),Il(736,"pre")(737,"code"),Qx(738,`actions = {
  cancel: '/'
};
`),og()()()(),Il(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),Qx(743," save"),zl(744,"br"),og()()(),Il(745,"td",18)(746,"code",24),Qx(747,"string "),og(),Il(748,"code",40),Qx(749," ((resource: any, id: string) => void)"),og()(),Il(750,"td",21)(751,"em")(752,"strong"),Qx(753,"(opcional)"),og()(),Il(754,"p"),Qx(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),og(),Il(756,"p"),Qx(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),og(),Il(758,"blockquote")(759,"p"),Qx(760,"A rota pode conter um par\xE2metro chamando id."),og()(),Il(761,"pre")(762,"code"),Qx(763,`actions = {
  save: 'detail/:id'
};
`),og()(),Il(764,"p"),Qx(765,"Se for passado um m\xE9todo:"),og(),Il(766,"ul")(767,"li"),Qx(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),Il(769,"code"),Qx(770,"{ email: 'example@email.com' }"),og(),Qx(771,"."),og(),Il(772,"li"),Qx(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),og()()()(),Il(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),Qx(778," saveNew"),zl(779,"br"),og()()(),Il(780,"td",18)(781,"code",24),Qx(782,"string "),og(),Il(783,"code",41),Qx(784," ((resource: any, id?: string) => void)"),og()(),Il(785,"td",21)(786,"em")(787,"strong"),Qx(788,"(opcional)"),og()(),Il(789,"p"),Qx(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),og(),Il(791,"p"),Qx(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),og(),Il(793,"blockquote")(794,"p"),Qx(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),og()(),Il(796,"pre")(797,"code"),Qx(798,`actions = {
  saveNew: 'new'
};
`),og()(),Il(799,"p"),Qx(800,"A rota pode conter um par\xE2metro id."),og(),Il(801,"pre")(802,"code"),Qx(803,`actions = {
  saveNew: 'edit/:id'
};
`),og()(),Il(804,"p"),Qx(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),og()()()(),Il(806,"h4",34)(807,"code",5),Qx(808,"PoPageDynamicEditBeforeCancel"),og()(),Il(809,"div",2)(810,"p"),Qx(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Il(812,"code"),Qx(813,"beforeCancel"),og(),Qx(814,"."),og()(),Il(815,"h4",10),Qx(816,"Propriedades"),og(),Il(817,"table",11)(818,"tr",12)(819,"th",13),Qx(820,"Nome"),og(),Il(821,"th",13),Qx(822,"Tipo"),og(),Il(823,"th",13),Qx(824,"Descri\xE7\xE3o"),og()(),Il(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),Qx(829," allowAction"),zl(830,"br"),og()()(),Il(831,"td",18)(832,"code",22),Qx(833,"boolean"),og()(),Il(834,"td",21)(835,"em")(836,"strong"),Qx(837,"(opcional)"),og()(),Il(838,"p"),Qx(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),og()()(),Il(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),Qx(844," newUrl"),zl(845,"br"),og()()(),Il(846,"td",18)(847,"code",24),Qx(848,"string"),og()(),Il(849,"td",21)(850,"em")(851,"strong"),Qx(852,"(opcional)"),og()(),Il(853,"p"),Qx(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),Il(855,"code"),Qx(856,"cancel"),og(),Qx(857,"."),og()()()(),Il(858,"h4",34)(859,"code",5),Qx(860,"PoPageDynamicEditBeforeSaveNew"),og()(),Il(861,"div",2)(862,"p"),Qx(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Il(864,"code"),Qx(865,"beforeSaveNew"),og(),Qx(866,"."),og()(),Il(867,"h4",10),Qx(868,"Propriedades"),og(),Il(869,"table",11)(870,"tr",12)(871,"th",13),Qx(872,"Nome"),og(),Il(873,"th",13),Qx(874,"Tipo"),og(),Il(875,"th",13),Qx(876,"Descri\xE7\xE3o"),og()(),Il(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),Qx(881," allowAction"),zl(882,"br"),og()()(),Il(883,"td",18)(884,"code",22),Qx(885,"boolean"),og()(),Il(886,"td",21)(887,"em")(888,"strong"),Qx(889,"(opcional)"),og()(),Il(890,"p"),Qx(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),og()()(),Il(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),Qx(896," newUrl"),zl(897,"br"),og()()(),Il(898,"td",18)(899,"code",24),Qx(900,"string"),og()(),Il(901,"td",21)(902,"em")(903,"strong"),Qx(904,"(opcional)"),og()(),Il(905,"p"),Qx(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),Il(907,"code"),Qx(908,"saveNew"),og(),Qx(909,"."),og()()(),Il(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),Qx(914," resource"),zl(915,"br"),og()()(),Il(916,"td",18)(917,"code",42),Qx(918,"any"),og()(),Il(919,"td",21)(920,"em")(921,"strong"),Qx(922,"(opcional)"),og()(),Il(923,"p"),Qx(924,"Recurso atualizado."),og(),Il(925,"p"),Qx(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Il(927,"code"),Qx(928,"key: true"),og(),Qx(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),og(),Il(930,"ul")(931,"li")(932,"p"),Qx(933,"recurso anterior com a propriedade id foi que definida como "),Il(934,"em"),Qx(935,"key"),og(),Qx(936,":"),og(),Il(937,"pre")(938,"code"),Qx(939,`{ id: 1, name: 'Ane' }
`),og()()(),Il(940,"li")(941,"p"),Qx(942,"recurso retornado no "),Il(943,"code"),Qx(944,"beforeSaveNew"),og(),Qx(945,":"),og(),Il(946,"pre")(947,"code"),Qx(948,`{ id: 50, age: 23 }
`),og()()(),Il(949,"li")(950,"p"),Qx(951,"Mesclagem do recurso:"),og(),Il(952,"pre")(953,"code"),Qx(954,`{ id: 1, name: 'Ane', age: 23 }
`),og()()()(),Il(955,"blockquote")(956,"p"),Qx(957,"Caso "),Il(958,"code"),Qx(959,"allowAction"),og(),Qx(960," seja "),Il(961,"code"),Qx(962,"false"),og(),Qx(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),og()()()()(),Il(964,"h4",34)(965,"code",5),Qx(966,"PoPageDynamicEditBeforeSave"),og()(),Il(967,"div",2)(968,"p"),Qx(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Il(970,"code"),Qx(971,"beforeSave"),og(),Qx(972,"."),og()(),Il(973,"h4",10),Qx(974,"Propriedades"),og(),Il(975,"table",11)(976,"tr",12)(977,"th",13),Qx(978,"Nome"),og(),Il(979,"th",13),Qx(980,"Tipo"),og(),Il(981,"th",13),Qx(982,"Descri\xE7\xE3o"),og()(),Il(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),Qx(987," allowAction"),zl(988,"br"),og()()(),Il(989,"td",18)(990,"code",22),Qx(991,"boolean"),og()(),Il(992,"td",21)(993,"em")(994,"strong"),Qx(995,"(opcional)"),og()(),Il(996,"p"),Qx(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),og()()(),Il(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),Qx(1002," newUrl"),zl(1003,"br"),og()()(),Il(1004,"td",18)(1005,"code",24),Qx(1006,"string"),og()(),Il(1007,"td",21)(1008,"em")(1009,"strong"),Qx(1010,"(opcional)"),og()(),Il(1011,"p"),Qx(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),Il(1013,"code"),Qx(1014,"save"),og(),Qx(1015,"."),og()()(),Il(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),Qx(1020," resource"),zl(1021,"br"),og()()(),Il(1022,"td",18)(1023,"code",42),Qx(1024,"any"),og()(),Il(1025,"td",21)(1026,"em")(1027,"strong"),Qx(1028,"(opcional)"),og()(),Il(1029,"p"),Qx(1030,"Recurso atualizado."),og(),Il(1031,"p"),Qx(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),og(),Il(1033,"ul")(1034,"li")(1035,"p"),Qx(1036,"recurso anterior:"),og(),Il(1037,"pre")(1038,"code"),Qx(1039,`{ name: 'Ane' }
`),og()()(),Il(1040,"li")(1041,"p"),Qx(1042,"recurso retornado no "),Il(1043,"code"),Qx(1044,"beforeSave"),og(),Qx(1045,":"),og(),Il(1046,"pre")(1047,"code"),Qx(1048,`{ age: 23 }
`),og()()(),Il(1049,"li")(1050,"p"),Qx(1051,"Mesclagem do recurso:"),og(),Il(1052,"pre")(1053,"code"),Qx(1054,`{ name: 'Ane', age: 23 }
`),og()()()(),Il(1055,"blockquote")(1056,"p"),Qx(1057,"Caso "),Il(1058,"code"),Qx(1059,"allowAction"),og(),Qx(1060," seja "),Il(1061,"code"),Qx(1062,"false"),og(),Qx(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),og()()()()(),Il(1064,"h4",34)(1065,"code",5),Qx(1066,"PoPageDynamicEditField"),og()(),Il(1067,"div",2)(1068,"p"),Qx(1069,"Interface dos fields usados para compor o template "),Il(1070,"code"),Qx(1071,"po-page-dynamic-edit"),og(),Qx(1072,`.
Herda as defini\xE7\xF5es da interface
`),Il(1073,"a",43),Qx(1074,"PoDynamicFormField"),og(),Qx(1075,"."),og()(),Il(1076,"h4",10),Qx(1077,"Propriedades"),og(),Il(1078,"table",11)(1079,"tr",12)(1080,"th",13),Qx(1081,"Nome"),og(),Il(1082,"th",13),Qx(1083,"Tipo"),og(),Il(1084,"th",13),Qx(1085,"Descri\xE7\xE3o"),og()(),Il(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),Qx(1090," duplicate"),zl(1091,"br"),og()()(),Il(1092,"td",18)(1093,"code",22),Qx(1094,"boolean"),og()(),Il(1095,"td",21)(1096,"em")(1097,"strong"),Qx(1098,"(opcional)"),og()(),Il(1099,"p"),Qx(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),og()()()(),Il(1101,"h4",34)(1102,"code",5),Qx(1103,"PoPageDynamicEditLiterals"),og()(),Il(1104,"div",2)(1105,"p"),Qx(1106,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1107,"code"),Qx(1108,"po-page-dynamic-edit"),og(),Qx(1109,"."),og()(),Il(1110,"h4",10),Qx(1111,"Propriedades"),og(),Il(1112,"table",11)(1113,"tr",12)(1114,"th",13),Qx(1115,"Nome"),og(),Il(1116,"th",13),Qx(1117,"Tipo"),og(),Il(1118,"th",13),Qx(1119,"Descri\xE7\xE3o"),og()(),Il(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),Qx(1124," cancelConfirmMessage"),zl(1125,"br"),og()()(),Il(1126,"td",18)(1127,"code",24),Qx(1128,"string"),og()(),Il(1129,"td",21)(1130,"em")(1131,"strong"),Qx(1132,"(opcional)"),og()(),Il(1133,"p"),Qx(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),og()()(),Il(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),Qx(1139," detailActionNew"),zl(1140,"br"),og()()(),Il(1141,"td",18)(1142,"code",24),Qx(1143,"string"),og()(),Il(1144,"td",21)(1145,"em")(1146,"strong"),Qx(1147,"(opcional)"),og()(),Il(1148,"p"),Qx(1149,"R\xF3tulo exibido no bot\xE3o "),Il(1150,"code"),Qx(1151,"Novo"),og(),Qx(1152,"."),og()()(),Il(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),Qx(1157," pageActionCancel"),zl(1158,"br"),og()()(),Il(1159,"td",18)(1160,"code",24),Qx(1161,"string"),og()(),Il(1162,"td",21)(1163,"em")(1164,"strong"),Qx(1165,"(opcional)"),og()(),Il(1166,"p"),Qx(1167,"R\xF3tulo exibido no bot\xE3o "),Il(1168,"code"),Qx(1169,"Cancelar"),og(),Qx(1170,"."),og()()(),Il(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),Qx(1175," pageActionSave"),zl(1176,"br"),og()()(),Il(1177,"td",18)(1178,"code",24),Qx(1179,"string"),og()(),Il(1180,"td",21)(1181,"em")(1182,"strong"),Qx(1183,"(opcional)"),og()(),Il(1184,"p"),Qx(1185,"R\xF3tulo exibido no bot\xE3o "),Il(1186,"code"),Qx(1187,"Salvar"),og(),Qx(1188,"."),og()()(),Il(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),Qx(1193," pageActionSaveNew"),zl(1194,"br"),og()()(),Il(1195,"td",18)(1196,"code",24),Qx(1197,"string"),og()(),Il(1198,"td",21)(1199,"em")(1200,"strong"),Qx(1201,"(opcional)"),og()(),Il(1202,"p"),Qx(1203,"R\xF3tulo exibido no bot\xE3o "),Il(1204,"code"),Qx(1205,"Salvar e novo"),og(),Qx(1206,"."),og()()(),Il(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),Qx(1211," registerNotFound"),zl(1212,"br"),og()()(),Il(1213,"td",18)(1214,"code",24),Qx(1215,"string"),og()(),Il(1216,"td",21)(1217,"em")(1218,"strong"),Qx(1219,"(opcional)"),og()(),Il(1220,"p"),Qx(1221,"Texto exibido para resgistro n\xE3o encontrado."),og()()(),Il(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),Qx(1226," saveNotificationError"),zl(1227,"br"),og()()(),Il(1228,"td",18)(1229,"code",24),Qx(1230,"string"),og()(),Il(1231,"td",21)(1232,"em")(1233,"strong"),Qx(1234,"(opcional)"),og()(),Il(1235,"p"),Qx(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),og()()(),Il(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),Qx(1241," saveNotificationSuccessSave"),zl(1242,"br"),og()()(),Il(1243,"td",18)(1244,"code",24),Qx(1245,"string"),og()(),Il(1246,"td",21)(1247,"em")(1248,"strong"),Qx(1249,"(opcional)"),og()(),Il(1250,"p"),Qx(1251,"Texto exibido para recurso salvo com sucesso."),og()()(),Il(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),Qx(1256," saveNotificationSuccessUpdate"),zl(1257,"br"),og()()(),Il(1258,"td",18)(1259,"code",24),Qx(1260,"string"),og()(),Il(1261,"td",21)(1262,"em")(1263,"strong"),Qx(1264,"(opcional)"),og()(),Il(1265,"p"),Qx(1266,"Texto exibido para recurso atualizado com sucesso."),og()()(),Il(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),Qx(1271," saveNotificationWarning"),zl(1272,"br"),og()()(),Il(1273,"td",18)(1274,"code",24),Qx(1275,"string"),og()(),Il(1276,"td",21)(1277,"em")(1278,"strong"),Qx(1279,"(opcional)"),og()(),Il(1280,"p"),Qx(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),og()()()(),Il(1282,"h4",34)(1283,"code",5),Qx(1284,"PoPageDynamicEditMetadata"),og()(),Il(1285,"div",2)(1286,"p"),Qx(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),zl(1288,"a",44),og()(),Il(1289,"h4",10),Qx(1290,"Propriedades"),og(),Il(1291,"table",11)(1292,"tr",12)(1293,"th",13),Qx(1294,"Nome"),og(),Il(1295,"th",13),Qx(1296,"Tipo"),og(),Il(1297,"th",13),Qx(1298,"Descri\xE7\xE3o"),og()(),Il(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),Qx(1303," actions"),zl(1304,"br"),og()()(),Il(1305,"td",18)(1306,"code",19),Qx(1307,"PoPageDynamicEditActions"),og()(),Il(1308,"td",21)(1309,"em")(1310,"strong"),Qx(1311,"(opcional)"),og()(),Il(1312,"p"),Qx(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),og()()(),Il(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),Qx(1318," autoRouter"),zl(1319,"br"),og()()(),Il(1320,"td",18)(1321,"code",22),Qx(1322,"boolean"),og()(),Il(1323,"td",21)(1324,"em")(1325,"strong"),Qx(1326,"(opcional)"),og()(),Il(1327,"p"),Qx(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),Il(1329,"code"),Qx(1330,"p-actions"),og()(),Il(1331,"p"),Qx(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),Il(1333,"code"),Qx(1334,"p-actions"),og(),Qx(1335,"."),og(),Il(1336,"blockquote")(1337,"p"),Qx(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),Il(1339,"code"),Qx(1340,"**"),og(),Qx(1341,") especificada."),og()()()(),Il(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),Qx(1346," breadcrumb"),zl(1347,"br"),og()()(),Il(1348,"td",18)(1349,"code",23),Qx(1350,"PoBreadcrumb"),og()(),Il(1351,"td",21)(1352,"em")(1353,"strong"),Qx(1354,"(opcional)"),og()(),Il(1355,"p"),Qx(1356,"Objeto com propriedades do breadcrumb."),og()()(),Il(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),Qx(1361," fields"),zl(1362,"br"),og()()(),Il(1363,"td",18)(1364,"code",26),Qx(1365,"Array<PoPageDynamicEditField>"),og()(),Il(1366,"td",21)(1367,"em")(1368,"strong"),Qx(1369,"(opcional)"),og()(),Il(1370,"p"),Qx(1371,"Lista dos campos usados."),og()()(),Il(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),Qx(1376," title"),zl(1377,"br"),og()()(),Il(1378,"td",18)(1379,"code",24),Qx(1380,"string"),og()(),Il(1381,"td",21)(1382,"em")(1383,"strong"),Qx(1384,"(opcional)"),og()(),Il(1385,"p"),Qx(1386,"T\xEDtulo da p\xE1gina."),og()()(),Il(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),Qx(1391," version"),zl(1392,"br"),og()()(),Il(1393,"td",18)(1394,"code",45),Qx(1395,"number"),og()(),Il(1396,"td",21)(1397,"p"),Qx(1398,"Vers\xE3o do metadado devolvido pelo backend."),og()()()(),Il(1399,"h4",34)(1400,"code",5),Qx(1401,"PoPageDynamicEditOptions"),og()(),Il(1402,"div",2)(1403,"p"),Qx(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),og()(),Il(1405,"h4",10),Qx(1406,"Propriedades"),og(),Il(1407,"table",11)(1408,"tr",12)(1409,"th",13),Qx(1410,"Nome"),og(),Il(1411,"th",13),Qx(1412,"Tipo"),og(),Il(1413,"th",13),Qx(1414,"Descri\xE7\xE3o"),og()(),Il(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),Qx(1419," actions"),zl(1420,"br"),og()()(),Il(1421,"td",18)(1422,"code",19),Qx(1423,"PoPageDynamicEditActions"),og()(),Il(1424,"td",21)(1425,"em")(1426,"strong"),Qx(1427,"(opcional)"),og()(),Il(1428,"p"),Qx(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),og()()(),Il(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),Qx(1434," breadcrumb"),zl(1435,"br"),og()()(),Il(1436,"td",18)(1437,"code",23),Qx(1438,"PoBreadcrumb"),og()(),Il(1439,"td",21)(1440,"em")(1441,"strong"),Qx(1442,"(opcional)"),og()(),Il(1443,"p"),Qx(1444,"Objeto com propriedades do breadcrumb."),og()()(),Il(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),Qx(1449," fields"),zl(1450,"br"),og()()(),Il(1451,"td",18)(1452,"code",26),Qx(1453,"Array<PoPageDynamicEditField>"),og()(),Il(1454,"td",21)(1455,"em")(1456,"strong"),Qx(1457,"(opcional)"),og()(),Il(1458,"p"),Qx(1459,"Lista dos campos usados."),og()()(),Il(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),Qx(1464," title"),zl(1465,"br"),og()()(),Il(1466,"td",18)(1467,"code",24),Qx(1468,"string"),og()(),Il(1469,"td",21)(1470,"em")(1471,"strong"),Qx(1472,"(opcional)"),og()(),Il(1473,"p"),Qx(1474,"T\xEDtulo da p\xE1gina."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return d.changeTab("doc")}),zl(3,"sample-po-page-dynamic-edit-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return d.changeTab("web")}),zl(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),og()()()),o&2&&(nw("p-actions",d.actions),Lp(2),nw("p-active",d.activeTab==="doc"),Lp(2),nw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[cNe,qme,Yme,L,O,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(te),uL]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,U]})}return a})();export{fe as DocPoPageDynamicEditModule};