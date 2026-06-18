import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dh as lv,c9 as Yhe,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,cp as Hhe,c8 as Dde,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&zl(0,"po-info",0);},dependencies:[Yhe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Info Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-info-basic/sample-po-info-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-info-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,re,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Z],encapsulation:2})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:lv.Horizontal},{label:"Vertical",value:lv.Vertical}];ngOnInit(){this.restore();}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs"]],standalone:false,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=Dx();zl(0,"po-info",1)(1,"po-divider"),Il(2,"form",null,0)(4,"div",2)(5,"po-input",3),ww("ngModelChange",function(r){return Xy(c),eN(i.label,r)||(i.label=r),Qy(r)}),og(),QA(),Il(6,"po-input",4),ww("ngModelChange",function(r){return Xy(c),eN(i.value,r)||(i.value=r),Qy(r)}),og(),QA(),og(),Il(7,"div",2)(8,"po-input",5),ww("ngModelChange",function(r){return Xy(c),eN(i.url,r)||(i.url=r),Qy(r)}),og(),QA(),Il(9,"po-number",6),ww("ngModelChange",function(r){return Xy(c),eN(i.labelSize,r)||(i.labelSize=r),Qy(r)}),og(),QA(),Il(10,"po-radio-group",7),ww("ngModelChange",function(r){return Xy(c),eN(i.orientation,r)||(i.orientation=r),Qy(r)}),og(),QA(),og(),Il(11,"div",2)(12,"po-button",8),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(nw("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),Lp(5),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.value),e0(),Lp(2),Ew("ngModel",i.url),e0(),Lp(),Ew("ngModel",i.labelSize),e0(),Lp(),Ew("ngModel",i.orientation),nw("p-options",i.orientationOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,O3,Hhe,Dde,Yhe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Info Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-info-labs/sample-po-info-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
</po-info>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="url" [(ngModel)]="url" p-clean p-label="Url"> </po-input>

    <po-number
      class="po-lg-2 po-md-6"
      name="labelSize"
      [(ngModel)]="labelSize"
      p-clean
      p-label="Label size"
      p-max="11"
      p-min="1"
    >
    </po-number>

    <po-radio-group
      class="po-lg-6 po-md-12"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoInfoOrientation, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-info-labs',
  templateUrl: './sample-po-info-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoLabsComponent implements OnInit {
  label: string;
  labelSize: number;
  orientation: PoInfoOrientation;
  url: string;
  value: string;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoInfoOrientation.Horizontal },
    { label: 'Vertical', value: PoInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'PO Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.url = undefined;
    this.value = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-info-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,de,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,te],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-doc"]],standalone:false,decls:223,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"],["href","https://po-ui.io/documentation/po-theme"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoInfoModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-info."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoInfoComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),og()(),Il(15,"div",6)(16,"h4",7),Qx(17,"Seletor"),og(),Il(18,"pre",8),Qx(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),og()(),Il(20,"h4",9),Qx(21,"Propriedades"),og(),Il(22,"table",10)(23,"tr",11)(24,"th",12),Qx(25,"Nome"),og(),Il(26,"th",12),Qx(27,"Tipo"),og(),Il(28,"th",12),Qx(29,"Padr\xE3o"),og(),Il(30,"th",12),Qx(31,"Descri\xE7\xE3o"),og()(),Il(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Qx(36," p-label"),zl(37,"br"),og()()(),Il(38,"td",17)(39,"code",18),Qx(40,"string"),og()(),Il(41,"td",19),Qx(42,"-"),og(),Il(43,"td",20)(44,"p"),Qx(45,"Valor do r\xF3tulo a ser exibido."),og()()(),Il(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),Qx(50," p-label-size"),zl(51,"br"),og()()(),Il(52,"td",17)(53,"code",21),Qx(54,"number"),og()(),Il(55,"td",19),Qx(56,"-"),og(),Il(57,"td",20)(58,"em")(59,"strong"),Qx(60,"(opcional)"),og()(),Il(61,"p"),Qx(62,"Quantidade de "),Il(63,"a",22),Qx(64,"colunas"),og(),Qx(65," usadas para a exibi\xE7\xE3o da "),Il(66,"code"),Qx(67,"p-label"),og(),Qx(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),og(),Il(69,"p"),Qx(70,"Valores v\xE1lidos:"),og(),Il(71,"ul")(72,"li")(73,"code"),Qx(74,"[1 .. 11]"),og()()(),Il(75,"blockquote")(76,"p"),Qx(77,"A propriedade "),Il(78,"code"),Qx(79,"p-value"),og(),Qx(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),og()()()(),Il(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),Qx(85," p-orientation"),zl(86,"br"),og()()(),Il(87,"td",17)(88,"code",23),Qx(89,"PoInfoOrientation"),og()(),Il(90,"td",19)(91,"p")(92,"code"),Qx(93,"vertical"),og()()(),Il(94,"td",20)(95,"em")(96,"strong"),Qx(97,"(opcional)"),og()(),Il(98,"p"),Qx(99,"Define o layout de exibi\xE7\xE3o."),og(),Il(100,"blockquote")(101,"p"),Qx(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),Il(103,"code"),Qx(104,"p-label-size"),og(),Qx(105," para um maior controle das informa\xE7\xF5es exibidas."),og()()()(),Il(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),Qx(110," p-size"),zl(111,"br"),og()()(),Il(112,"td",17)(113,"code",18),Qx(114,"string"),og()(),Il(115,"td",19)(116,"p")(117,"code"),Qx(118,"medium"),og()()(),Il(119,"td",20)(120,"em")(121,"strong"),Qx(122,"(opcional)"),og()(),Il(123,"p"),Qx(124,"Define o tamanho do componente entre "),Il(125,"code"),Qx(126,"small"),og(),Qx(127," ou "),Il(128,"code"),Qx(129,"medium"),og(),Qx(130,"."),og(),Il(131,"blockquote")(132,"p"),Qx(133,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(134,"code"),Qx(135,"medium"),og(),Qx(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(137,"a",24),Qx(138,"po-theme"),og(),Qx(139,"."),og()()()(),Il(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),Qx(144," p-url"),zl(145,"br"),og()()(),Il(146,"td",17)(147,"code",18),Qx(148,"string"),og()(),Il(149,"td",19),Qx(150,"-"),og(),Il(151,"td",20)(152,"em")(153,"strong"),Qx(154,"(opcional)"),og()(),Il(155,"p"),Qx(156,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),Il(157,"em"),Qx(158,"link"),og(),Qx(159," e ao ser clicado ser\xE1 redirecionado para a URL informada."),og(),Il(160,"blockquote")(161,"p"),Qx(162,"Caso informar "),Il(163,"code"),Qx(164,"http://"),og(),Qx(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Il(166,"code"),Qx(167,"/customers"),og(),Qx(168,", ser\xE1 aberto na aba atual."),og()()()(),Il(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),Qx(173," p-value"),zl(174,"br"),og()()(),Il(175,"td",17)(176,"code",18),Qx(177,"string"),og()(),Il(178,"td",19),Qx(179,"-"),og(),Il(180,"td",20)(181,"em")(182,"strong"),Qx(183,"(opcional)"),og()(),Il(184,"p"),Qx(185,"Valor do conte\xFAdo a ser exibido."),og()()()(),Il(186,"h3"),Qx(187,"Enums"),og(),Il(188,"h4",4)(189,"code",5),Qx(190,"PoInfoOrientation"),og()(),Il(191,"div",2)(192,"p"),Qx(193,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Il(194,"code"),Qx(195,"po-info"),og(),Qx(196,"."),og()(),Il(197,"h4",9),Qx(198,"Propriedades"),og(),Il(199,"table",10)(200,"tr",11)(201,"th",12),Qx(202,"Nome"),og(),Il(203,"th",12),Qx(204,"Descri\xE7\xE3o"),og()(),Il(205,"tr",13)(206,"td",14)(207,"div",15)(208,"span",16),Qx(209," Horizontal"),zl(210,"br"),og()()(),Il(211,"td",20)(212,"p"),Qx(213,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),og()()(),Il(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),Qx(218," Vertical"),zl(219,"br"),og()()(),Il(220,"td",20)(221,"p"),Qx(222,"Exibe o valor na vertical, ou seja, abaixo do label."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-info-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ee,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ie}],ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[uL.forChild(fe),uL]})}return o})();var Be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,ae]})}return o})();export{Be as DocPoInfoModule};