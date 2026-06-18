import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dc as rNe,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,a3 as cNe}from'./main-FCMDZGSJ.js';var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:"id",label:"C\xF3digo",align:"right",readonly:true,freeze:true,width:120},{property:"name",label:"Nome",width:"200px",required:true},{property:"occupation",label:"Cargo",width:150},{property:"email",label:"E-mail",width:100,required:true},{property:"status",label:"Status",align:"center",width:80},{property:"lastActivity",label:"\xDAltima atividade",align:"center",width:140}];data=[{id:629131,name:"Jhonatas Silvano",occupation:"Developer",email:"jhonatas.silvano@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:78492341,name:"Rafael Gon\xE7alvez",occupation:"Engineer",email:"rafael.goncalvez@po-ui.com.br",status:"Active",lastActivity:"2018-12-10"},{id:986434,name:"Nicoli Pereira",occupation:"Developer",email:"nicoli.pereira@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:4235652,name:"Mauricio Jo\xE3o Mendez",occupation:"Developer",email:"mauricio.joao@po-ui.com.br",status:"Active",lastActivity:"2018-11-23"},{id:629131,name:"Leandro Oliveira",occupation:"Engineer",email:"leandro.oliveira@po-ui.com.br",status:"Active",lastActivity:"2018-11-30"}];onBeforeSave(a,o){return a.occupation!=="Engineer"}onAfterSave(a){}onBeforeRemove(a){return  true}onAfterRemove(a){}onBeforeInsert(a){return  true}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic"]],standalone:false,decls:1,vars:3,consts:[[3,"p-row-actions","p-data","p-columns"]],template:function(o,l){o&1&&zl(0,"po-grid",0),o&2&&nw("p-row-actions",l.rowActions)("p-data",l.data)("p-columns",l.columns);},dependencies:[rNe],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n}),M=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Grid Basic"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-grid-basic/sample-po-grid-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-grid-basic/sample-po-grid-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-grid-basic',
  templateUrl: './sample-po-grid-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGridBasicComponent {
  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this),
    afterRemove: this.onAfterRemove.bind(this),
    beforeInsert: this.onBeforeInsert.bind(this)
  };

  columns = [
    { property: 'id', label: 'C\xF3digo', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'name', label: 'Nome', width: '200px', required: true },
    { property: 'occupation', label: 'Cargo', width: 150 },
    { property: 'email', label: 'E-mail', width: 100, required: true },
    { property: 'status', label: 'Status', align: 'center', width: 80 },
    { property: 'lastActivity', label: '\xDAltima atividade', align: 'center', width: 140 }
  ];

  data = [
    {
      id: 629131,
      name: 'Jhonatas Silvano',
      occupation: 'Developer',
      email: 'jhonatas.silvano@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 78492341,
      name: 'Rafael Gon\xE7alvez',
      occupation: 'Engineer',
      email: 'rafael.goncalvez@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-10'
    },
    {
      id: 986434,
      name: 'Nicoli Pereira',
      occupation: 'Developer',
      email: 'nicoli.pereira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 4235652,
      name: 'Mauricio Jo\xE3o Mendez',
      occupation: 'Developer',
      email: 'mauricio.joao@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-23'
    },
    {
      id: 629131,
      name: 'Leandro Oliveira',
      occupation: 'Engineer',
      email: 'leandro.oliveira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-30'
    }
  ];

  onBeforeSave(row: any, old: any) {
    return row.occupation !== 'Engineer';
  }

  onAfterSave(row) {
    // console.log('onAfterSave(new): ', row);
  }

  onBeforeRemove(row) {
    // console.log('onBeforeRemove: ', row);

    return true;
  }

  onAfterRemove(row) {
    // console.log('onAfterRemove: ', row);
  }

  onBeforeInsert(row) {
    // console.log('onBeforeInsert: ', row);

    return true;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-grid-basic"),og(),zl(23,"hr")),o&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,_,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,G],encapsulation:2})}return n})();var I=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-doc"]],standalone:false,decls:217,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoGridRowActions"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"]],template:function(o,l){o&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoGridModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-grid."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoGridComponent"),og()(),Il(12,"div",2)(13,"blockquote")(14,"p"),Qx(15,"Componente em desenvolvimento, podendo haver BREAKING CHANGES nas pr\xF3ximas vers\xF5es."),og()(),Il(16,"p"),Qx(17,"Componente grid."),og(),Il(18,"p"),Qx(19,"A\xE7\xF5es / atalhos:"),og(),Il(20,"ul")(21,"li"),Qx(22,"ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;"),og(),Il(23,"li"),Qx(24,"ARROW-DOWN: Navega para celula inferior;"),og(),Il(25,"li"),Qx(26,"ARROW-RIGHT: Navega para celula direita;"),og(),Il(27,"li"),Qx(28,"ARROW-LEFT: Navega para celula esquerda;"),og(),Il(29,"li"),Qx(30,"TAB: Navega para pr\xF3xima celula;"),og(),Il(31,"li"),Qx(32,"SHIFT+TAB: Navega para celula anterior;"),og(),Il(33,"li"),Qx(34,"CTRL+DEL: Remove linha;"),og(),Il(35,"li"),Qx(36,"DEL/BACKSPACE: Limpa celula;"),og(),Il(37,"li"),Qx(38,"ENTER: Edita linha com valor atual/Confirma edi\xE7\xE3o da celula;"),og(),Il(39,"li"),Qx(40,"DOUBLE-CLICK: Edita linha com valor atual;"),og(),Il(41,"li"),Qx(42,"ESC: Cancela edi\xE7\xE3o da celula / Cancela inser\xE7\xE3o de linhas em branco;"),og(),Il(43,"li"),Qx(44,"A..Z/0..9: Inicia edi\xE7\xE3o com valor em branco."),og()()(),Il(45,"div",6)(46,"h4",7),Qx(47,"Seletor"),og(),Il(48,"pre",8),Qx(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),og()(),Il(50,"h4",9),Qx(51,"Propriedades"),og(),Il(52,"table",10)(53,"tr",11)(54,"th",12),Qx(55,"Nome"),og(),Il(56,"th",12),Qx(57,"Tipo"),og(),Il(58,"th",12),Qx(59,"Padr\xE3o"),og(),Il(60,"th",12),Qx(61,"Descri\xE7\xE3o"),og()(),Il(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),Qx(66," p-columns"),zl(67,"br"),og()()(),Il(68,"td",17)(69,"code",18),Qx(70,"Array<any>"),og()(),Il(71,"td",19),Qx(72,"-"),og(),Il(73,"td",20)(74,"p"),Qx(75,"Colunas exibidas no grid."),og()()(),Il(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),Qx(80," p-data"),zl(81,"br"),og()()(),Il(82,"td",17)(83,"code",18),Qx(84,"Array<any>"),og()(),Il(85,"td",19),Qx(86,"-"),og(),Il(87,"td",20)(88,"p"),Qx(89,"Lista com os dados que ser\xE3o exibidos no grid."),og()()(),Il(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),Qx(94," p-row-actions"),zl(95,"br"),og()()(),Il(96,"td",17)(97,"code",21),Qx(98,"PoGridRowActions"),og()(),Il(99,"td",19),Qx(100,"-"),og(),Il(101,"td",20)(102,"p"),Qx(103,"A\xE7\xF5es disparadas quando uma linha do grid \xE9 manipulada."),og()()()(),Il(104,"h3"),Qx(105,"Interfaces"),og(),Il(106,"h4",22)(107,"code",5),Qx(108,"PoGridRowActions"),og()(),Il(109,"div",2)(110,"p"),Qx(111,"A\xE7\xF5es executadas durante a manipula\xE7\xE3o das linhas do grid."),og()(),Il(112,"h4",9),Qx(113,"Propriedades"),og(),Il(114,"table",10)(115,"tr",11)(116,"th",12),Qx(117,"Nome"),og(),Il(118,"th",12),Qx(119,"Tipo"),og(),Il(120,"th",12),Qx(121,"Descri\xE7\xE3o"),og()(),Il(122,"tr",13)(123,"td",14)(124,"div",15)(125,"span",16),Qx(126," afterRemove"),zl(127,"br"),og()()(),Il(128,"td",17)(129,"code",23),Qx(130,"() => void"),og()(),Il(131,"td",20)(132,"em")(133,"strong"),Qx(134,"(opcional)"),og()(),Il(135,"p"),Qx(136,"M\xE9todo executado ap\xF3s uma linha do grid ser removida."),og()()(),Il(137,"tr",13)(138,"td",14)(139,"div",15)(140,"span",16),Qx(141," afterSave"),zl(142,"br"),og()()(),Il(143,"td",17)(144,"code",24),Qx(145,"(row: any) => void"),og()(),Il(146,"td",20)(147,"em")(148,"strong"),Qx(149,"(opcional)"),og()(),Il(150,"p"),Qx(151,"M\xE9todo executado ap\xF3s uma linha do grid ser salva, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados."),og()()(),Il(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),Qx(156," beforeInsert"),zl(157,"br"),og()()(),Il(158,"td",17)(159,"code",25),Qx(160,"(row: any) => boolean"),og()(),Il(161,"td",20)(162,"em")(163,"strong"),Qx(164,"(opcional)"),og()(),Il(165,"p"),Qx(166,"M\xE9todo executado antes de uma nova linha ser inserida no grid, se o m\xE9todo retornar algo diferente de "),Il(167,"code"),Qx(168,"true"),og(),Qx(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),og(),Il(170,"p"),Qx(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),og(),Il(172,"pre")(173,"code"),Qx(174,`rowActions: PoGridRowActions = {
  beforeInsert: this.onBeforeInsert.bind(this);
  ...
};

// Inicia a linha j\xE1 com as propriedades \`name\` e \`created\` preenchidas.
onBeforeInsert(row: any) {
  row.name = 'Fulano';
  row.created = '2018-20-12';
  ...

  return true;
}
`),og()()()(),Il(175,"tr",13)(176,"td",14)(177,"div",15)(178,"span",16),Qx(179," beforeRemove"),zl(180,"br"),og()()(),Il(181,"td",17)(182,"code",25),Qx(183,"(row: any) => boolean"),og()(),Il(184,"td",20)(185,"em")(186,"strong"),Qx(187,"(opcional)"),og()(),Il(188,"p"),Qx(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Il(190,"code"),Qx(191,"true"),og(),Qx(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),og()()(),Il(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),Qx(197," beforeSave"),zl(198,"br"),og()()(),Il(199,"td",17)(200,"code",26),Qx(201,"(updatedRow: any, originalRow: any) => boolean"),og()(),Il(202,"td",20)(203,"em")(204,"strong"),Qx(205,"(opcional)"),og()(),Il(206,"p"),Qx(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Il(208,"code"),Qx(209,"true"),og(),Qx(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),og(),Il(211,"blockquote")(212,"p"),Qx(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),og()(),Il(214,"pre")(215,"code"),Qx(216,`rowActions: PoGridRowActions = {
  beforeSave: this.onBeforeSave.bind(this);
  ...
};

onBeforeSave(updatedRow: any, originalRow: any) {
  // Verifica se a propriedade \`name\` foi alterada.
  if (updatedRow.name !== originalRow.name) {
    return false;
  }

  // Verifica se \xE9 menor de idade
  if (updatedRow.age < 18) {
    return false;
  }
  ...

  updatedRow.updated = '2018-20-12';

  return true;
}
`),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var F=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Grid",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-grid-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),zl(5,"sample-po-grid-basic-view"),og()()()),o&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,M,I],encapsulation:2})}return n})();var z=[{path:"",component:F}],N=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[uL.forChild(z),uL]})}return n})();var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,N]})}return n})();export{oe as DocPoGridModule};