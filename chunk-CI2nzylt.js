import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,cg as Ma,F as Wl,O as rw,bs as gN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,av as ql,aw as lo,ax as uo,a3 as sNe}from'./main-TVDUJ47Y.js';var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:false,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&Wl(0,"po-page-dynamic-edit",0),o&2&&rw("p-fields",gN(2,G,pN(1,V)));},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Dynamic Edit Basic"),og(),Sl(4,"a",2),ft("click",function(){return d.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-dynamic-edit-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+d.sampleCodeButtonIcon),Lp(),dg(" ",d.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,W,d.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,B],encapsulation:2,changeDetection:1})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:true,required:true},{property:"name",divider:"Personal data",required:true},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&ql(J,7),o&2){let u;lo(u=uo())&&(d.dynamicEdit=u.first);}},standalone:false,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&Wl(0,"po-page-dynamic-edit",1,0),o&2&&rw("p-auto-router",true)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi);},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Page Dynamic Edit - User"),og(),Sl(4,"a",2),ft("click",function(){return d.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-dynamic-edit
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-dynamic-edit-user"),og(),Wl(23,"hr")),o&2&&(Lp(5),Gx("po-icon "+d.sampleCodeButtonIcon),Lp(),dg(" ",d.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Z,d.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,j],encapsulation:2,changeDetection:1})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:false,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do template do po-page-dynamic-detail."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoPageDynamicEditComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"O "),Sl(15,"code"),rN(16,"po-page-dynamic-edit"),og(),rN(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),og(),Sl(18,"h3"),rN(19,"Utiliza\xE7\xE3o via rota"),og(),Sl(20,"p"),rN(21,"Ao utilizar as rotas para inicializar o template, o "),Sl(22,"code"),rN(23,"page-dynamic-edit"),og(),rN(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),og(),Sl(25,"p"),rN(26,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(27,"p"),rN(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),Sl(29,"code"),rN(30,"app-routing.module.ts"),og()(),Sl(31,"pre")(32,"code"),rN(33,`const routes: Routes = [
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
`),og()(),Sl(34,"p"),rN(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),og(),Sl(36,"p"),rN(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),og(),Sl(38,"blockquote")(39,"p"),rN(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),og()(),Sl(41,"p"),rN(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),Sl(43,"code"),rN(44,"id"),og(),rN(45,":"),og(),Sl(46,"pre")(47,"code"),rN(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),og()(),Sl(49,"p"),rN(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),og(),Sl(51,"p"),rN(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Sl(53,"a",6),rN(54,"PoPageDynamicEditMetadata"),og(),rN(55,". Por exemplo:"),og(),Sl(56,"pre")(57,"code"),rN(58,` {
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
`),og()(),Sl(59,"blockquote")(60,"p"),rN(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),Sl(62,"code"),rN(63,"serviceApi"),og(),rN(64," da seguinte forma:"),og()(),Sl(65,"pre")(66,"code"),rN(67,`GET {end-point}/metadata?type=edit&version={version}
`),og()(),Sl(68,"h4"),rN(69,"Tokens customiz\xE1veis"),og(),Sl(70,"table")(71,"thead")(72,"tr")(73,"th"),rN(74,"Propriedade"),og(),Sl(75,"th"),rN(76,"Descri\xE7\xE3o"),og(),Sl(77,"th"),rN(78,"Valor Padr\xE3o"),og()()(),Sl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),rN(83,"Header"),og()(),Wl(84,"td")(85,"td"),og(),Sl(86,"tr")(87,"td")(88,"code"),rN(89,"--padding"),og()(),Sl(90,"td"),rN(91,"Espa\xE7amento do header"),og(),Sl(92,"td")(93,"code"),rN(94,"var(--spacing-xs) var(--spacing-md)"),og()()(),Sl(95,"tr")(96,"td")(97,"code"),rN(98,"--gap"),og()(),Sl(99,"td"),rN(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Sl(101,"td")(102,"code"),rN(103,"var(--spacing-md)"),og()()(),Sl(104,"tr")(105,"td")(106,"code"),rN(107,"--gap-actions"),og()(),Sl(108,"td"),rN(109,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Sl(110,"td")(111,"code"),rN(112,"var(--spacing-xs)"),og()()(),Sl(113,"tr")(114,"td")(115,"code"),rN(116,"--font-family"),og()(),Sl(117,"td"),rN(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Sl(119,"td")(120,"code"),rN(121,"var(--font-family-theme)"),og()()(),Sl(122,"tr")(123,"td")(124,"strong"),rN(125,"Content"),og()(),Wl(126,"td")(127,"td"),og(),Sl(128,"tr")(129,"td")(130,"code"),rN(131,"--padding-content"),og()(),Sl(132,"td"),rN(133,"Espa\xE7amento do conte\xFAdo"),og(),Sl(134,"td")(135,"code"),rN(136,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Sl(137,"div",7)(138,"h4",8),rN(139,"Seletor"),og(),Sl(140,"pre",9),rN(141,`<po-page-dynamic-edit
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
`),og()(),Sl(142,"h4",10),rN(143,"Propriedades"),og(),Sl(144,"table",11)(145,"tr",12)(146,"th",13),rN(147,"Nome"),og(),Sl(148,"th",13),rN(149,"Tipo"),og(),Sl(150,"th",13),rN(151,"Padr\xE3o"),og(),Sl(152,"th",13),rN(153,"Descri\xE7\xE3o"),og()(),Sl(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),rN(158," p-actions"),Wl(159,"br"),og()()(),Sl(160,"td",18)(161,"code",19),rN(162,"PoPageDynamicEditActions"),og()(),Sl(163,"td",20),rN(164,"-"),og(),Sl(165,"td",21)(166,"em")(167,"strong"),rN(168,"(opcional)"),og()(),Sl(169,"p"),rN(170,"A\xE7\xF5es da p\xE1gina."),og()()(),Sl(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),rN(175," p-auto-router"),Wl(176,"br"),og()()(),Sl(177,"td",18)(178,"code",22),rN(179,"boolean"),og()(),Sl(180,"td",20)(181,"p"),rN(182,"false"),og()(),Sl(183,"td",21)(184,"em")(185,"strong"),rN(186,"(opcional)"),og()(),Sl(187,"p"),rN(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),og(),Sl(189,"blockquote")(190,"p"),rN(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),Sl(192,"code"),rN(193,"**"),og(),rN(194,") especificada."),og()()()(),Sl(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),rN(199," p-breadcrumb"),Wl(200,"br"),og()()(),Sl(201,"td",18)(202,"code",23),rN(203,"PoBreadcrumb"),og()(),Sl(204,"td",20),rN(205,"-"),og(),Sl(206,"td",21)(207,"em")(208,"strong"),rN(209,"(opcional)"),og()(),Sl(210,"p"),rN(211,"Objeto com propriedades do breadcrumb."),og()()(),Sl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),rN(216," p-components-size"),Wl(217,"br"),og()()(),Sl(218,"td",18)(219,"code",24),rN(220,"string"),og()(),Sl(221,"td",20)(222,"p")(223,"code"),rN(224,"medium"),og()()(),Sl(225,"td",21)(226,"em")(227,"strong"),rN(228,"(opcional)"),og()(),Sl(229,"p"),rN(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(231,"ul")(232,"li")(233,"code"),rN(234,"small"),og(),rN(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(236,"li")(237,"code"),rN(238,"medium"),og(),rN(239,": aplica a medida medium de cada componente."),og()(),Sl(240,"blockquote")(241,"p"),rN(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(243,"code"),rN(244,"medium"),og(),rN(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(246,"a",25),rN(247,"po-theme"),og(),rN(248,"."),og()()()(),Sl(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),rN(253," p-fields"),Wl(254,"br"),og()()(),Sl(255,"td",18)(256,"code",26),rN(257,"Array<PoPageDynamicEditField>"),og()(),Sl(258,"td",20),rN(259,"-"),og(),Sl(260,"td",21)(261,"p"),rN(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),og()()(),Sl(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),rN(267," p-literals"),Wl(268,"br"),og()()(),Sl(269,"td",18)(270,"code",27),rN(271,"PoPageDynamicEditLiterals"),og()(),Sl(272,"td",20),rN(273,"-"),og(),Sl(274,"td",21)(275,"em")(276,"strong"),rN(277,"(opcional)"),og()(),Sl(278,"p"),rN(279,"Objeto com as literais usadas no "),Sl(280,"code"),rN(281,"po-page-dynamic-edit"),og(),rN(282,"."),og(),Sl(283,"p"),rN(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),og(),Sl(285,"pre")(286,"code"),rN(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),og()(),Sl(288,"p"),rN(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(290,"pre")(291,"code"),rN(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),og()(),Sl(293,"blockquote")(294,"p"),rN(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(296,"a",28)(297,"code"),rN(298,"PoI18nService"),og()(),rN(299," ou "),Sl(300,"em"),rN(301,"browser"),og(),rN(302,"."),og()()()(),Sl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),rN(307," p-notification-type"),Wl(308,"br"),og()()(),Sl(309,"td",18)(310,"code",24),rN(311,"string"),og()(),Sl(312,"td",20)(313,"p"),rN(314,"warning"),og()(),Sl(315,"td",21)(316,"em")(317,"strong"),rN(318,"(opcional)"),og()(),Sl(319,"p"),rN(320,"Tipo da notifica\xE7\xE3o."),og(),Sl(321,"p"),rN(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),og(),Sl(323,"pre")(324,"code"),rN(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),og()(),Sl(326,"blockquote")(327,"p"),rN(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),og()()()(),Sl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),rN(333," p-load"),Wl(334,"br"),og()()(),Sl(335,"td",18)(336,"code",24),rN(337,"string "),og(),Sl(338,"code",29),rN(339," (() => PoPageDynamicEditOptions)"),og()(),Sl(340,"td",20),rN(341,"-"),og(),Sl(342,"td",21)(343,"p"),rN(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og(),Sl(345,"p"),rN(346,"A propriedade aceita os seguintes tipos:"),og(),Sl(347,"ul")(348,"li")(349,"code"),rN(350,"string"),og(),rN(351,": "),Sl(352,"em"),rN(353,"Endpoint"),og(),rN(354," usado pelo componente para requisi\xE7\xE3o via "),Sl(355,"code"),rN(356,"POST"),og(),rN(357,"."),og(),Sl(358,"li")(359,"code"),rN(360,"function"),og(),rN(361,": M\xE9todo que ser\xE1 executado."),og()(),Sl(362,"p"),rN(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(364,"code"),rN(365,"PoPageDynamicEditOptions"),og(),rN(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),og(),Sl(367,"p"),rN(368,"Por exemplo:"),og(),Sl(369,"pre")(370,"code"),rN(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),og()(),Sl(372,"p"),rN(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(374,"code"),rN(375,"bind"),og(),rN(376,", por exemplo:"),og(),Sl(377,"pre")(378,"code"),rN(379,`[p-load]="onLoadOptions.bind(this)"
`),og()()()(),Sl(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),rN(384," p-load-data"),Wl(385,"br"),og()()(),Sl(386,"td",18)(387,"code",30),rN(388,"unknown"),og()(),Sl(389,"td",20),rN(390,"-"),og(),Sl(391,"td",21)(392,"em")(393,"strong"),rN(394,"(opcional)"),og()(),Sl(395,"p"),rN(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),og(),Sl(397,"p"),rN(398,"A propriedade aceita os seguintes tipos:"),og(),Sl(399,"ul")(400,"li")(401,"code"),rN(402,"function"),og(),rN(403,": M\xE9todo que ser\xE1 executado."),og()(),Sl(404,"p"),rN(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),og(),Sl(406,"p"),rN(407,"Por exemplo:"),og(),Sl(408,"pre")(409,"code"),rN(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),og()(),Sl(411,"p"),rN(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(413,"code"),rN(414,"bind"),og(),rN(415,", por exemplo:"),og(),Sl(416,"pre")(417,"code"),rN(418,`[p-load-data]="onLoadCustom.bind(this)"
`),og()()()(),Sl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),rN(423," p-service-api"),Wl(424,"br"),og()()(),Sl(425,"td",18)(426,"code",24),rN(427,"string"),og()(),Sl(428,"td",20),rN(429,"-"),og(),Sl(430,"td",21)(431,"p"),rN(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),og(),Sl(433,"p"),rN(434,"Para as a\xE7\xF5es de "),Sl(435,"code"),rN(436,"save"),og(),rN(437," e "),Sl(438,"code"),rN(439,"saveNew"),og(),rN(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),og(),Sl(441,"blockquote")(442,"p")(443,"code"),rN(444,"POST {end-point}"),og()()(),Sl(445,"pre")(446,"code"),rN(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),og()(),Sl(448,"p"),rN(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Sl(450,"code"),rN(451,"name"),og(),rN(452," e "),Sl(453,"code"),rN(454,"city"),og(),rN(455," foram preenchidas:"),og(),Sl(456,"pre")(457,"code"),rN(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),og()(),Sl(459,"p"),rN(460,"Request payload:"),og(),Sl(461,"pre")(462,"code"),rN(463,`{ "name": "Fulano", "city": "Smallville" }
`),og()(),Sl(464,"p"),rN(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),Sl(466,"code"),rN(467,"id"),og(),rN(468,"."),og(),Sl(469,"p"),rN(470,"Exemplo de configura\xE7\xE3o de rota:"),og(),Sl(471,"pre")(472,"code"),rN(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),og()(),Sl(474,"p"),rN(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),og(),Sl(476,"blockquote")(477,"p")(478,"code"),rN(479,"GET {end-point}/{id}"),og()()(),Sl(480,"p"),rN(481,"Nos m\xE9todos de "),Sl(482,"code"),rN(483,"save"),og(),rN(484," e "),Sl(485,"code"),rN(486,"saveNew"),og(),rN(487,", ao inv\xE9s de um "),Sl(488,"code"),rN(489,"POST"),og(),rN(490,", ser\xE1 disparado um "),Sl(491,"code"),rN(492,"PUT"),og(),rN(493,"."),og(),Sl(494,"p"),rN(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Sl(496,"code"),rN(497,"name"),og(),rN(498," e "),Sl(499,"code"),rN(500,"city"),og(),rN(501," foram preenchidas / atualizadas, e o "),Sl(502,"code"),rN(503,"id"),og(),rN(504," da url \xE9 2:"),og(),Sl(505,"pre")(506,"code"),rN(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),og()(),Sl(508,"p"),rN(509,"Request payload:"),og(),Sl(510,"pre")(511,"code"),rN(512,`{ "name": "Fulano", "city": "Metropolis" }
`),og()()()(),Sl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),rN(517," p-title"),Wl(518,"br"),og()()(),Sl(519,"td",18)(520,"code",24),rN(521,"string"),og()(),Sl(522,"td",20),rN(523,"-"),og(),Sl(524,"td",21)(525,"p"),rN(526,"T\xEDtulo da p\xE1gina."),og()()()(),Sl(527,"h3",10),rN(528,"M\xE9todos"),og(),Sl(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),rN(535," showAdditionalHelp "),og()()()()(),Sl(536,"tr",21)(537,"td",21)(538,"p"),rN(539,"M\xE9todo que exibe "),Sl(540,"code"),rN(541,"p-helper"),og(),rN(542," ou executa a a\xE7\xE3o definida em "),Sl(543,"code"),rN(544,"p-helper{eventOnClick}"),og(),rN(545," ou em "),Sl(546,"code"),rN(547,"p-additionalHelp"),og(),rN(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(549,"code"),rN(550,"keydown"),og(),rN(551,"."),og(),Sl(552,"pre")(553,"code"),rN(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),og()()()()(),Sl(555,"h5")(556,"b"),rN(557,"Par\xE2metros"),og()(),Sl(558,"table",11)(559,"tr",12)(560,"th",13),rN(561,"Nome"),og(),Sl(562,"th",13),rN(563,"Tipo"),og(),Sl(564,"th",13),rN(565,"Descri\xE7\xE3o"),og()(),Sl(566,"tr",14)(567,"td",15),rN(568," property"),og(),Sl(569,"td",18)(570,"code",33),rN(571," string "),og()(),Sl(572,"td",21)(573,"p"),rN(574,"Identificador da coluna."),og()()()(),Wl(575,"br"),Sl(576,"h3"),rN(577,"Interfaces"),og(),Sl(578,"h4",34)(579,"code",5),rN(580,"PoPageDynamicEditActions"),og()(),Sl(581,"div",2)(582,"p"),rN(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),og()(),Sl(584,"h4",10),rN(585,"Propriedades"),og(),Sl(586,"table",11)(587,"tr",12)(588,"th",13),rN(589,"Nome"),og(),Sl(590,"th",13),rN(591,"Tipo"),og(),Sl(592,"th",13),rN(593,"Descri\xE7\xE3o"),og()(),Sl(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),rN(598," beforeCancel"),Wl(599,"br"),og()()(),Sl(600,"td",18)(601,"code",24),rN(602,"string "),og(),Sl(603,"code",35),rN(604," (() => PoPageDynamicEditBeforeCancel)"),og()(),Sl(605,"td",21)(606,"em")(607,"strong"),rN(608,"(opcional)"),og()(),Sl(609,"p"),rN(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),og(),Sl(611,"p"),rN(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Sl(613,"code"),rN(614,"PoPageDynamicEditBeforeCancel"),og(),rN(615,"."),og(),Sl(616,"blockquote")(617,"p"),rN(618,"A url ser\xE1 chamada via POST"),og()(),Sl(619,"p"),rN(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Sl(621,"strong"),rN(622,"beforeCancel"),og(),rN(623,`
ou definir a mensagem no atributo `),Sl(624,"code"),rN(625,"_messages"),og(),rN(626,` na resposta da API conforme definido
em `),Sl(627,"a",36),rN(628,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Sl(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),rN(633," beforeSave"),Wl(634,"br"),og()()(),Sl(635,"td",18)(636,"code",24),rN(637,"string "),og(),Sl(638,"code",37),rN(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),og()(),Sl(640,"td",21)(641,"em")(642,"strong"),rN(643,"(opcional)"),og()(),Sl(644,"p"),rN(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),og(),Sl(646,"p"),rN(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Sl(648,"code"),rN(649,"PoPageDynamicEditBeforeSave"),og(),rN(650,"."),og(),Sl(651,"blockquote")(652,"p"),rN(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Sl(654,"code"),rN(655,"POST {beforeSave}/{key}"),og(),rN(656,"."),og()(),Sl(657,"p"),rN(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Sl(659,"strong"),rN(660,"beforeSave"),og(),rN(661,`
ou definir a mensagem no atributo `),Sl(662,"code"),rN(663,"_messages"),og(),rN(664,` na resposta da API conforme definido
em `),Sl(665,"a",36),rN(666,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Sl(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),rN(671," beforeSaveNew"),Wl(672,"br"),og()()(),Sl(673,"td",18)(674,"code",24),rN(675,"string "),og(),Sl(676,"code",38),rN(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),og()(),Sl(678,"td",21)(679,"em")(680,"strong"),rN(681,"(opcional)"),og()(),Sl(682,"p"),rN(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),og(),Sl(684,"p"),rN(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Sl(686,"code"),rN(687,"PoPageDynamicEditBeforeSaveNew"),og(),rN(688,"."),og(),Sl(689,"blockquote")(690,"p"),rN(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Sl(692,"code"),rN(693,"POST {beforeSave}/{key}"),og(),rN(694,"."),og()(),Sl(695,"p"),rN(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Sl(697,"strong"),rN(698,"beforeSaveNew"),og(),rN(699,`
ou definir a mensagem no atributo `),Sl(700,"code"),rN(701,"_messages"),og(),rN(702,` na resposta da API conforme definido
em `),Sl(703,"a",36),rN(704,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Sl(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),rN(709," cancel"),Wl(710,"br"),og()()(),Sl(711,"td",18)(712,"code",24),rN(713,"string "),og(),Sl(714,"code",22),rN(715," boolean "),og(),Sl(716,"code",39),rN(717," Function"),og()(),Sl(718,"td",21)(719,"em")(720,"strong"),rN(721,"(opcional)"),og()(),Sl(722,"p"),rN(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),Sl(724,"code"),rN(725,"navigator.back()"),og(),rN(726,"."),og(),Sl(727,"blockquote")(728,"p"),rN(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),og()(),Sl(730,"blockquote")(731,"p"),rN(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),Sl(733,"code"),rN(734,"false"),og(),rN(735,";"),og()(),Sl(736,"pre")(737,"code"),rN(738,`actions = {
  cancel: '/'
};
`),og()()()(),Sl(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),rN(743," save"),Wl(744,"br"),og()()(),Sl(745,"td",18)(746,"code",24),rN(747,"string "),og(),Sl(748,"code",40),rN(749," ((resource: any, id: string) => void)"),og()(),Sl(750,"td",21)(751,"em")(752,"strong"),rN(753,"(opcional)"),og()(),Sl(754,"p"),rN(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),og(),Sl(756,"p"),rN(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),og(),Sl(758,"blockquote")(759,"p"),rN(760,"A rota pode conter um par\xE2metro chamando id."),og()(),Sl(761,"pre")(762,"code"),rN(763,`actions = {
  save: 'detail/:id'
};
`),og()(),Sl(764,"p"),rN(765,"Se for passado um m\xE9todo:"),og(),Sl(766,"ul")(767,"li"),rN(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),Sl(769,"code"),rN(770,"{ email: 'example@email.com' }"),og(),rN(771,"."),og(),Sl(772,"li"),rN(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),og()()()(),Sl(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),rN(778," saveNew"),Wl(779,"br"),og()()(),Sl(780,"td",18)(781,"code",24),rN(782,"string "),og(),Sl(783,"code",41),rN(784," ((resource: any, id?: string) => void)"),og()(),Sl(785,"td",21)(786,"em")(787,"strong"),rN(788,"(opcional)"),og()(),Sl(789,"p"),rN(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),og(),Sl(791,"p"),rN(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),og(),Sl(793,"blockquote")(794,"p"),rN(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),og()(),Sl(796,"pre")(797,"code"),rN(798,`actions = {
  saveNew: 'new'
};
`),og()(),Sl(799,"p"),rN(800,"A rota pode conter um par\xE2metro id."),og(),Sl(801,"pre")(802,"code"),rN(803,`actions = {
  saveNew: 'edit/:id'
};
`),og()(),Sl(804,"p"),rN(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),og()()()(),Sl(806,"h4",34)(807,"code",5),rN(808,"PoPageDynamicEditBeforeCancel"),og()(),Sl(809,"div",2)(810,"p"),rN(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Sl(812,"code"),rN(813,"beforeCancel"),og(),rN(814,"."),og()(),Sl(815,"h4",10),rN(816,"Propriedades"),og(),Sl(817,"table",11)(818,"tr",12)(819,"th",13),rN(820,"Nome"),og(),Sl(821,"th",13),rN(822,"Tipo"),og(),Sl(823,"th",13),rN(824,"Descri\xE7\xE3o"),og()(),Sl(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),rN(829," allowAction"),Wl(830,"br"),og()()(),Sl(831,"td",18)(832,"code",22),rN(833,"boolean"),og()(),Sl(834,"td",21)(835,"em")(836,"strong"),rN(837,"(opcional)"),og()(),Sl(838,"p"),rN(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),og()()(),Sl(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),rN(844," newUrl"),Wl(845,"br"),og()()(),Sl(846,"td",18)(847,"code",24),rN(848,"string"),og()(),Sl(849,"td",21)(850,"em")(851,"strong"),rN(852,"(opcional)"),og()(),Sl(853,"p"),rN(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),Sl(855,"code"),rN(856,"cancel"),og(),rN(857,"."),og()()()(),Sl(858,"h4",34)(859,"code",5),rN(860,"PoPageDynamicEditBeforeSaveNew"),og()(),Sl(861,"div",2)(862,"p"),rN(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Sl(864,"code"),rN(865,"beforeSaveNew"),og(),rN(866,"."),og()(),Sl(867,"h4",10),rN(868,"Propriedades"),og(),Sl(869,"table",11)(870,"tr",12)(871,"th",13),rN(872,"Nome"),og(),Sl(873,"th",13),rN(874,"Tipo"),og(),Sl(875,"th",13),rN(876,"Descri\xE7\xE3o"),og()(),Sl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),rN(881," allowAction"),Wl(882,"br"),og()()(),Sl(883,"td",18)(884,"code",22),rN(885,"boolean"),og()(),Sl(886,"td",21)(887,"em")(888,"strong"),rN(889,"(opcional)"),og()(),Sl(890,"p"),rN(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),og()()(),Sl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),rN(896," newUrl"),Wl(897,"br"),og()()(),Sl(898,"td",18)(899,"code",24),rN(900,"string"),og()(),Sl(901,"td",21)(902,"em")(903,"strong"),rN(904,"(opcional)"),og()(),Sl(905,"p"),rN(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),Sl(907,"code"),rN(908,"saveNew"),og(),rN(909,"."),og()()(),Sl(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),rN(914," resource"),Wl(915,"br"),og()()(),Sl(916,"td",18)(917,"code",42),rN(918,"any"),og()(),Sl(919,"td",21)(920,"em")(921,"strong"),rN(922,"(opcional)"),og()(),Sl(923,"p"),rN(924,"Recurso atualizado."),og(),Sl(925,"p"),rN(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Sl(927,"code"),rN(928,"key: true"),og(),rN(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),og(),Sl(930,"ul")(931,"li")(932,"p"),rN(933,"recurso anterior com a propriedade id foi que definida como "),Sl(934,"em"),rN(935,"key"),og(),rN(936,":"),og(),Sl(937,"pre")(938,"code"),rN(939,`{ id: 1, name: 'Ane' }
`),og()()(),Sl(940,"li")(941,"p"),rN(942,"recurso retornado no "),Sl(943,"code"),rN(944,"beforeSaveNew"),og(),rN(945,":"),og(),Sl(946,"pre")(947,"code"),rN(948,`{ id: 50, age: 23 }
`),og()()(),Sl(949,"li")(950,"p"),rN(951,"Mesclagem do recurso:"),og(),Sl(952,"pre")(953,"code"),rN(954,`{ id: 1, name: 'Ane', age: 23 }
`),og()()()(),Sl(955,"blockquote")(956,"p"),rN(957,"Caso "),Sl(958,"code"),rN(959,"allowAction"),og(),rN(960," seja "),Sl(961,"code"),rN(962,"false"),og(),rN(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),og()()()()(),Sl(964,"h4",34)(965,"code",5),rN(966,"PoPageDynamicEditBeforeSave"),og()(),Sl(967,"div",2)(968,"p"),rN(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Sl(970,"code"),rN(971,"beforeSave"),og(),rN(972,"."),og()(),Sl(973,"h4",10),rN(974,"Propriedades"),og(),Sl(975,"table",11)(976,"tr",12)(977,"th",13),rN(978,"Nome"),og(),Sl(979,"th",13),rN(980,"Tipo"),og(),Sl(981,"th",13),rN(982,"Descri\xE7\xE3o"),og()(),Sl(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),rN(987," allowAction"),Wl(988,"br"),og()()(),Sl(989,"td",18)(990,"code",22),rN(991,"boolean"),og()(),Sl(992,"td",21)(993,"em")(994,"strong"),rN(995,"(opcional)"),og()(),Sl(996,"p"),rN(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),og()()(),Sl(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),rN(1002," newUrl"),Wl(1003,"br"),og()()(),Sl(1004,"td",18)(1005,"code",24),rN(1006,"string"),og()(),Sl(1007,"td",21)(1008,"em")(1009,"strong"),rN(1010,"(opcional)"),og()(),Sl(1011,"p"),rN(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),Sl(1013,"code"),rN(1014,"save"),og(),rN(1015,"."),og()()(),Sl(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),rN(1020," resource"),Wl(1021,"br"),og()()(),Sl(1022,"td",18)(1023,"code",42),rN(1024,"any"),og()(),Sl(1025,"td",21)(1026,"em")(1027,"strong"),rN(1028,"(opcional)"),og()(),Sl(1029,"p"),rN(1030,"Recurso atualizado."),og(),Sl(1031,"p"),rN(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),og(),Sl(1033,"ul")(1034,"li")(1035,"p"),rN(1036,"recurso anterior:"),og(),Sl(1037,"pre")(1038,"code"),rN(1039,`{ name: 'Ane' }
`),og()()(),Sl(1040,"li")(1041,"p"),rN(1042,"recurso retornado no "),Sl(1043,"code"),rN(1044,"beforeSave"),og(),rN(1045,":"),og(),Sl(1046,"pre")(1047,"code"),rN(1048,`{ age: 23 }
`),og()()(),Sl(1049,"li")(1050,"p"),rN(1051,"Mesclagem do recurso:"),og(),Sl(1052,"pre")(1053,"code"),rN(1054,`{ name: 'Ane', age: 23 }
`),og()()()(),Sl(1055,"blockquote")(1056,"p"),rN(1057,"Caso "),Sl(1058,"code"),rN(1059,"allowAction"),og(),rN(1060," seja "),Sl(1061,"code"),rN(1062,"false"),og(),rN(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),og()()()()(),Sl(1064,"h4",34)(1065,"code",5),rN(1066,"PoPageDynamicEditField"),og()(),Sl(1067,"div",2)(1068,"p"),rN(1069,"Interface dos fields usados para compor o template "),Sl(1070,"code"),rN(1071,"po-page-dynamic-edit"),og(),rN(1072,`.
Herda as defini\xE7\xF5es da interface
`),Sl(1073,"a",43),rN(1074,"PoDynamicFormField"),og(),rN(1075,"."),og()(),Sl(1076,"h4",10),rN(1077,"Propriedades"),og(),Sl(1078,"table",11)(1079,"tr",12)(1080,"th",13),rN(1081,"Nome"),og(),Sl(1082,"th",13),rN(1083,"Tipo"),og(),Sl(1084,"th",13),rN(1085,"Descri\xE7\xE3o"),og()(),Sl(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),rN(1090," duplicate"),Wl(1091,"br"),og()()(),Sl(1092,"td",18)(1093,"code",22),rN(1094,"boolean"),og()(),Sl(1095,"td",21)(1096,"em")(1097,"strong"),rN(1098,"(opcional)"),og()(),Sl(1099,"p"),rN(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),og()()()(),Sl(1101,"h4",34)(1102,"code",5),rN(1103,"PoPageDynamicEditLiterals"),og()(),Sl(1104,"div",2)(1105,"p"),rN(1106,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1107,"code"),rN(1108,"po-page-dynamic-edit"),og(),rN(1109,"."),og()(),Sl(1110,"h4",10),rN(1111,"Propriedades"),og(),Sl(1112,"table",11)(1113,"tr",12)(1114,"th",13),rN(1115,"Nome"),og(),Sl(1116,"th",13),rN(1117,"Tipo"),og(),Sl(1118,"th",13),rN(1119,"Descri\xE7\xE3o"),og()(),Sl(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),rN(1124," cancelConfirmMessage"),Wl(1125,"br"),og()()(),Sl(1126,"td",18)(1127,"code",24),rN(1128,"string"),og()(),Sl(1129,"td",21)(1130,"em")(1131,"strong"),rN(1132,"(opcional)"),og()(),Sl(1133,"p"),rN(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),og()()(),Sl(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),rN(1139," detailActionNew"),Wl(1140,"br"),og()()(),Sl(1141,"td",18)(1142,"code",24),rN(1143,"string"),og()(),Sl(1144,"td",21)(1145,"em")(1146,"strong"),rN(1147,"(opcional)"),og()(),Sl(1148,"p"),rN(1149,"R\xF3tulo exibido no bot\xE3o "),Sl(1150,"code"),rN(1151,"Novo"),og(),rN(1152,"."),og()()(),Sl(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),rN(1157," pageActionCancel"),Wl(1158,"br"),og()()(),Sl(1159,"td",18)(1160,"code",24),rN(1161,"string"),og()(),Sl(1162,"td",21)(1163,"em")(1164,"strong"),rN(1165,"(opcional)"),og()(),Sl(1166,"p"),rN(1167,"R\xF3tulo exibido no bot\xE3o "),Sl(1168,"code"),rN(1169,"Cancelar"),og(),rN(1170,"."),og()()(),Sl(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),rN(1175," pageActionSave"),Wl(1176,"br"),og()()(),Sl(1177,"td",18)(1178,"code",24),rN(1179,"string"),og()(),Sl(1180,"td",21)(1181,"em")(1182,"strong"),rN(1183,"(opcional)"),og()(),Sl(1184,"p"),rN(1185,"R\xF3tulo exibido no bot\xE3o "),Sl(1186,"code"),rN(1187,"Salvar"),og(),rN(1188,"."),og()()(),Sl(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),rN(1193," pageActionSaveNew"),Wl(1194,"br"),og()()(),Sl(1195,"td",18)(1196,"code",24),rN(1197,"string"),og()(),Sl(1198,"td",21)(1199,"em")(1200,"strong"),rN(1201,"(opcional)"),og()(),Sl(1202,"p"),rN(1203,"R\xF3tulo exibido no bot\xE3o "),Sl(1204,"code"),rN(1205,"Salvar e novo"),og(),rN(1206,"."),og()()(),Sl(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),rN(1211," registerNotFound"),Wl(1212,"br"),og()()(),Sl(1213,"td",18)(1214,"code",24),rN(1215,"string"),og()(),Sl(1216,"td",21)(1217,"em")(1218,"strong"),rN(1219,"(opcional)"),og()(),Sl(1220,"p"),rN(1221,"Texto exibido para resgistro n\xE3o encontrado."),og()()(),Sl(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),rN(1226," saveNotificationError"),Wl(1227,"br"),og()()(),Sl(1228,"td",18)(1229,"code",24),rN(1230,"string"),og()(),Sl(1231,"td",21)(1232,"em")(1233,"strong"),rN(1234,"(opcional)"),og()(),Sl(1235,"p"),rN(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),og()()(),Sl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),rN(1241," saveNotificationSuccessSave"),Wl(1242,"br"),og()()(),Sl(1243,"td",18)(1244,"code",24),rN(1245,"string"),og()(),Sl(1246,"td",21)(1247,"em")(1248,"strong"),rN(1249,"(opcional)"),og()(),Sl(1250,"p"),rN(1251,"Texto exibido para recurso salvo com sucesso."),og()()(),Sl(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),rN(1256," saveNotificationSuccessUpdate"),Wl(1257,"br"),og()()(),Sl(1258,"td",18)(1259,"code",24),rN(1260,"string"),og()(),Sl(1261,"td",21)(1262,"em")(1263,"strong"),rN(1264,"(opcional)"),og()(),Sl(1265,"p"),rN(1266,"Texto exibido para recurso atualizado com sucesso."),og()()(),Sl(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),rN(1271," saveNotificationWarning"),Wl(1272,"br"),og()()(),Sl(1273,"td",18)(1274,"code",24),rN(1275,"string"),og()(),Sl(1276,"td",21)(1277,"em")(1278,"strong"),rN(1279,"(opcional)"),og()(),Sl(1280,"p"),rN(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),og()()()(),Sl(1282,"h4",34)(1283,"code",5),rN(1284,"PoPageDynamicEditMetadata"),og()(),Sl(1285,"div",2)(1286,"p"),rN(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),Wl(1288,"a",44),og()(),Sl(1289,"h4",10),rN(1290,"Propriedades"),og(),Sl(1291,"table",11)(1292,"tr",12)(1293,"th",13),rN(1294,"Nome"),og(),Sl(1295,"th",13),rN(1296,"Tipo"),og(),Sl(1297,"th",13),rN(1298,"Descri\xE7\xE3o"),og()(),Sl(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),rN(1303," actions"),Wl(1304,"br"),og()()(),Sl(1305,"td",18)(1306,"code",19),rN(1307,"PoPageDynamicEditActions"),og()(),Sl(1308,"td",21)(1309,"em")(1310,"strong"),rN(1311,"(opcional)"),og()(),Sl(1312,"p"),rN(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),og()()(),Sl(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),rN(1318," autoRouter"),Wl(1319,"br"),og()()(),Sl(1320,"td",18)(1321,"code",22),rN(1322,"boolean"),og()(),Sl(1323,"td",21)(1324,"em")(1325,"strong"),rN(1326,"(opcional)"),og()(),Sl(1327,"p"),rN(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),Sl(1329,"code"),rN(1330,"p-actions"),og()(),Sl(1331,"p"),rN(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),Sl(1333,"code"),rN(1334,"p-actions"),og(),rN(1335,"."),og(),Sl(1336,"blockquote")(1337,"p"),rN(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),Sl(1339,"code"),rN(1340,"**"),og(),rN(1341,") especificada."),og()()()(),Sl(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),rN(1346," breadcrumb"),Wl(1347,"br"),og()()(),Sl(1348,"td",18)(1349,"code",23),rN(1350,"PoBreadcrumb"),og()(),Sl(1351,"td",21)(1352,"em")(1353,"strong"),rN(1354,"(opcional)"),og()(),Sl(1355,"p"),rN(1356,"Objeto com propriedades do breadcrumb."),og()()(),Sl(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),rN(1361," fields"),Wl(1362,"br"),og()()(),Sl(1363,"td",18)(1364,"code",26),rN(1365,"Array<PoPageDynamicEditField>"),og()(),Sl(1366,"td",21)(1367,"em")(1368,"strong"),rN(1369,"(opcional)"),og()(),Sl(1370,"p"),rN(1371,"Lista dos campos usados."),og()()(),Sl(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),rN(1376," title"),Wl(1377,"br"),og()()(),Sl(1378,"td",18)(1379,"code",24),rN(1380,"string"),og()(),Sl(1381,"td",21)(1382,"em")(1383,"strong"),rN(1384,"(opcional)"),og()(),Sl(1385,"p"),rN(1386,"T\xEDtulo da p\xE1gina."),og()()(),Sl(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),rN(1391," version"),Wl(1392,"br"),og()()(),Sl(1393,"td",18)(1394,"code",45),rN(1395,"number"),og()(),Sl(1396,"td",21)(1397,"p"),rN(1398,"Vers\xE3o do metadado devolvido pelo backend."),og()()()(),Sl(1399,"h4",34)(1400,"code",5),rN(1401,"PoPageDynamicEditOptions"),og()(),Sl(1402,"div",2)(1403,"p"),rN(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),og()(),Sl(1405,"h4",10),rN(1406,"Propriedades"),og(),Sl(1407,"table",11)(1408,"tr",12)(1409,"th",13),rN(1410,"Nome"),og(),Sl(1411,"th",13),rN(1412,"Tipo"),og(),Sl(1413,"th",13),rN(1414,"Descri\xE7\xE3o"),og()(),Sl(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),rN(1419," actions"),Wl(1420,"br"),og()()(),Sl(1421,"td",18)(1422,"code",19),rN(1423,"PoPageDynamicEditActions"),og()(),Sl(1424,"td",21)(1425,"em")(1426,"strong"),rN(1427,"(opcional)"),og()(),Sl(1428,"p"),rN(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),og()()(),Sl(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),rN(1434," breadcrumb"),Wl(1435,"br"),og()()(),Sl(1436,"td",18)(1437,"code",23),rN(1438,"PoBreadcrumb"),og()(),Sl(1439,"td",21)(1440,"em")(1441,"strong"),rN(1442,"(opcional)"),og()(),Sl(1443,"p"),rN(1444,"Objeto com propriedades do breadcrumb."),og()()(),Sl(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),rN(1449," fields"),Wl(1450,"br"),og()()(),Sl(1451,"td",18)(1452,"code",26),rN(1453,"Array<PoPageDynamicEditField>"),og()(),Sl(1454,"td",21)(1455,"em")(1456,"strong"),rN(1457,"(opcional)"),og()(),Sl(1458,"p"),rN(1459,"Lista dos campos usados."),og()()(),Sl(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),rN(1464," title"),Wl(1465,"br"),og()()(),Sl(1466,"td",18)(1467,"code",24),rN(1468,"string"),og()(),Sl(1469,"td",21)(1470,"em")(1471,"strong"),rN(1472,"(opcional)"),og()(),Sl(1473,"p"),rN(1474,"T\xEDtulo da p\xE1gina."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return d.changeTab("doc")}),Wl(3,"sample-po-page-dynamic-edit-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return d.changeTab("web")}),Wl(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),og()()()),o&2&&(rw("p-actions",d.actions),Lp(2),rw("p-active",d.activeTab==="doc"),Lp(2),rw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[sNe,Ume,$me,L,O,_],encapsulation:2,changeDetection:1})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[mL.forChild(te),mL]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,U]})}return a})();export{fe as DocPoPageDynamicEditModule};