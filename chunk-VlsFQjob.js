import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,db as tNe,H as Wl,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,a3 as rNe}from'./main-WP3NAV7C.js';var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:"id",label:"C\xF3digo",align:"right",readonly:true,freeze:true,width:120},{property:"name",label:"Nome",width:"200px",required:true},{property:"occupation",label:"Cargo",width:150},{property:"email",label:"E-mail",width:100,required:true},{property:"status",label:"Status",align:"center",width:80},{property:"lastActivity",label:"\xDAltima atividade",align:"center",width:140}];data=[{id:629131,name:"Jhonatas Silvano",occupation:"Developer",email:"jhonatas.silvano@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:78492341,name:"Rafael Gon\xE7alvez",occupation:"Engineer",email:"rafael.goncalvez@po-ui.com.br",status:"Active",lastActivity:"2018-12-10"},{id:986434,name:"Nicoli Pereira",occupation:"Developer",email:"nicoli.pereira@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:4235652,name:"Mauricio Jo\xE3o Mendez",occupation:"Developer",email:"mauricio.joao@po-ui.com.br",status:"Active",lastActivity:"2018-11-23"},{id:629131,name:"Leandro Oliveira",occupation:"Engineer",email:"leandro.oliveira@po-ui.com.br",status:"Active",lastActivity:"2018-11-30"}];onBeforeSave(a,o){return a.occupation!=="Engineer"}onAfterSave(a){}onBeforeRemove(a){return  true}onAfterRemove(a){}onBeforeInsert(a){return  true}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic"]],standalone:false,decls:1,vars:3,consts:[[3,"p-row-actions","p-data","p-columns"]],template:function(o,l){o&1&&Wl(0,"po-grid",0),o&2&&nw("p-row-actions",l.rowActions)("p-data",l.data)("p-columns",l.columns);},dependencies:[tNe],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n}),M=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Grid Basic"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-grid-basic/sample-po-grid-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-grid-basic/sample-po-grid-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-grid-basic"),og(),Wl(23,"hr")),o&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,_,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,G],encapsulation:2})}return n})();var I=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-doc"]],standalone:false,decls:217,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoGridRowActions"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"]],template:function(o,l){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoGridModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-grid."),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoGridComponent"),og()(),Sl(12,"div",2)(13,"blockquote")(14,"p"),eN(15,"Componente em desenvolvimento, podendo haver BREAKING CHANGES nas pr\xF3ximas vers\xF5es."),og()(),Sl(16,"p"),eN(17,"Componente grid."),og(),Sl(18,"p"),eN(19,"A\xE7\xF5es / atalhos:"),og(),Sl(20,"ul")(21,"li"),eN(22,"ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;"),og(),Sl(23,"li"),eN(24,"ARROW-DOWN: Navega para celula inferior;"),og(),Sl(25,"li"),eN(26,"ARROW-RIGHT: Navega para celula direita;"),og(),Sl(27,"li"),eN(28,"ARROW-LEFT: Navega para celula esquerda;"),og(),Sl(29,"li"),eN(30,"TAB: Navega para pr\xF3xima celula;"),og(),Sl(31,"li"),eN(32,"SHIFT+TAB: Navega para celula anterior;"),og(),Sl(33,"li"),eN(34,"CTRL+DEL: Remove linha;"),og(),Sl(35,"li"),eN(36,"DEL/BACKSPACE: Limpa celula;"),og(),Sl(37,"li"),eN(38,"ENTER: Edita linha com valor atual/Confirma edi\xE7\xE3o da celula;"),og(),Sl(39,"li"),eN(40,"DOUBLE-CLICK: Edita linha com valor atual;"),og(),Sl(41,"li"),eN(42,"ESC: Cancela edi\xE7\xE3o da celula / Cancela inser\xE7\xE3o de linhas em branco;"),og(),Sl(43,"li"),eN(44,"A..Z/0..9: Inicia edi\xE7\xE3o com valor em branco."),og()()(),Sl(45,"div",6)(46,"h4",7),eN(47,"Seletor"),og(),Sl(48,"pre",8),eN(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),og()(),Sl(50,"h4",9),eN(51,"Propriedades"),og(),Sl(52,"table",10)(53,"tr",11)(54,"th",12),eN(55,"Nome"),og(),Sl(56,"th",12),eN(57,"Tipo"),og(),Sl(58,"th",12),eN(59,"Padr\xE3o"),og(),Sl(60,"th",12),eN(61,"Descri\xE7\xE3o"),og()(),Sl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),eN(66," p-columns"),Wl(67,"br"),og()()(),Sl(68,"td",17)(69,"code",18),eN(70,"Array<any>"),og()(),Sl(71,"td",19),eN(72,"-"),og(),Sl(73,"td",20)(74,"p"),eN(75,"Colunas exibidas no grid."),og()()(),Sl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),eN(80," p-data"),Wl(81,"br"),og()()(),Sl(82,"td",17)(83,"code",18),eN(84,"Array<any>"),og()(),Sl(85,"td",19),eN(86,"-"),og(),Sl(87,"td",20)(88,"p"),eN(89,"Lista com os dados que ser\xE3o exibidos no grid."),og()()(),Sl(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),eN(94," p-row-actions"),Wl(95,"br"),og()()(),Sl(96,"td",17)(97,"code",21),eN(98,"PoGridRowActions"),og()(),Sl(99,"td",19),eN(100,"-"),og(),Sl(101,"td",20)(102,"p"),eN(103,"A\xE7\xF5es disparadas quando uma linha do grid \xE9 manipulada."),og()()()(),Sl(104,"h3"),eN(105,"Interfaces"),og(),Sl(106,"h4",22)(107,"code",5),eN(108,"PoGridRowActions"),og()(),Sl(109,"div",2)(110,"p"),eN(111,"A\xE7\xF5es executadas durante a manipula\xE7\xE3o das linhas do grid."),og()(),Sl(112,"h4",9),eN(113,"Propriedades"),og(),Sl(114,"table",10)(115,"tr",11)(116,"th",12),eN(117,"Nome"),og(),Sl(118,"th",12),eN(119,"Tipo"),og(),Sl(120,"th",12),eN(121,"Descri\xE7\xE3o"),og()(),Sl(122,"tr",13)(123,"td",14)(124,"div",15)(125,"span",16),eN(126," afterRemove"),Wl(127,"br"),og()()(),Sl(128,"td",17)(129,"code",23),eN(130,"() => void"),og()(),Sl(131,"td",20)(132,"em")(133,"strong"),eN(134,"(opcional)"),og()(),Sl(135,"p"),eN(136,"M\xE9todo executado ap\xF3s uma linha do grid ser removida."),og()()(),Sl(137,"tr",13)(138,"td",14)(139,"div",15)(140,"span",16),eN(141," afterSave"),Wl(142,"br"),og()()(),Sl(143,"td",17)(144,"code",24),eN(145,"(row: any) => void"),og()(),Sl(146,"td",20)(147,"em")(148,"strong"),eN(149,"(opcional)"),og()(),Sl(150,"p"),eN(151,"M\xE9todo executado ap\xF3s uma linha do grid ser salva, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados."),og()()(),Sl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),eN(156," beforeInsert"),Wl(157,"br"),og()()(),Sl(158,"td",17)(159,"code",25),eN(160,"(row: any) => boolean"),og()(),Sl(161,"td",20)(162,"em")(163,"strong"),eN(164,"(opcional)"),og()(),Sl(165,"p"),eN(166,"M\xE9todo executado antes de uma nova linha ser inserida no grid, se o m\xE9todo retornar algo diferente de "),Sl(167,"code"),eN(168,"true"),og(),eN(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),og(),Sl(170,"p"),eN(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),og(),Sl(172,"pre")(173,"code"),eN(174,`rowActions: PoGridRowActions = {
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
`),og()()()(),Sl(175,"tr",13)(176,"td",14)(177,"div",15)(178,"span",16),eN(179," beforeRemove"),Wl(180,"br"),og()()(),Sl(181,"td",17)(182,"code",25),eN(183,"(row: any) => boolean"),og()(),Sl(184,"td",20)(185,"em")(186,"strong"),eN(187,"(opcional)"),og()(),Sl(188,"p"),eN(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Sl(190,"code"),eN(191,"true"),og(),eN(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),og()()(),Sl(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),eN(197," beforeSave"),Wl(198,"br"),og()()(),Sl(199,"td",17)(200,"code",26),eN(201,"(updatedRow: any, originalRow: any) => boolean"),og()(),Sl(202,"td",20)(203,"em")(204,"strong"),eN(205,"(opcional)"),og()(),Sl(206,"p"),eN(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Sl(208,"code"),eN(209,"true"),og(),eN(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),og(),Sl(211,"blockquote")(212,"p"),eN(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),og()(),Sl(214,"pre")(215,"code"),eN(216,`rowActions: PoGridRowActions = {
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
`),og()()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var F=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Grid",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-grid-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),Wl(5,"sample-po-grid-basic-view"),og()()()),o&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[rNe,Bme,qme,M,I],encapsulation:2})}return n})();var z=[{path:"",component:F}],N=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[hL.forChild(z),hL]})}return n})();var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[sr,N]})}return n})();export{oe as DocPoGridModule};