import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,dg as lv,c9 as jhe,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,cp as Bhe,c8 as Tde,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&Wl(0,"po-info",0);},dependencies:[jhe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Info Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-info-basic/sample-po-info-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-info-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,re,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:lv.Horizontal},{label:"Vertical",value:lv.Vertical}];ngOnInit(){this.restore();}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs"]],standalone:false,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=Ix();Wl(0,"po-info",1)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",2)(5,"po-input",3),Cw("ngModelChange",function(r){return Ky(c),oN(i.label,r)||(i.label=r),Xy(r)}),og(),n0(),Sl(6,"po-input",4),Cw("ngModelChange",function(r){return Ky(c),oN(i.value,r)||(i.value=r),Xy(r)}),og(),n0(),og(),Sl(7,"div",2)(8,"po-input",5),Cw("ngModelChange",function(r){return Ky(c),oN(i.url,r)||(i.url=r),Xy(r)}),og(),n0(),Sl(9,"po-number",6),Cw("ngModelChange",function(r){return Ky(c),oN(i.labelSize,r)||(i.labelSize=r),Xy(r)}),og(),n0(),Sl(10,"po-radio-group",7),Cw("ngModelChange",function(r){return Ky(c),oN(i.orientation,r)||(i.orientation=r),Xy(r)}),og(),n0(),og(),Sl(11,"div",2)(12,"po-button",8),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(rw("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),Lp(5),ww("ngModel",i.label),i0(),Lp(),ww("ngModel",i.value),i0(),Lp(2),ww("ngModel",i.url),i0(),Lp(),ww("ngModel",i.labelSize),i0(),Lp(),ww("ngModel",i.orientation),rw("p-options",i.orientationOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,L3,Bhe,Tde,jhe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Info Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-info-labs/sample-po-info-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-info-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,de,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-doc"]],standalone:false,decls:223,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"],["href","https://po-ui.io/documentation/po-theme"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoInfoModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-info."),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoInfoComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),og()(),Sl(15,"div",6)(16,"h4",7),rN(17,"Seletor"),og(),Sl(18,"pre",8),rN(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),og()(),Sl(20,"h4",9),rN(21,"Propriedades"),og(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),rN(25,"Nome"),og(),Sl(26,"th",12),rN(27,"Tipo"),og(),Sl(28,"th",12),rN(29,"Padr\xE3o"),og(),Sl(30,"th",12),rN(31,"Descri\xE7\xE3o"),og()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),rN(36," p-label"),Wl(37,"br"),og()()(),Sl(38,"td",17)(39,"code",18),rN(40,"string"),og()(),Sl(41,"td",19),rN(42,"-"),og(),Sl(43,"td",20)(44,"p"),rN(45,"Valor do r\xF3tulo a ser exibido."),og()()(),Sl(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),rN(50," p-label-size"),Wl(51,"br"),og()()(),Sl(52,"td",17)(53,"code",21),rN(54,"number"),og()(),Sl(55,"td",19),rN(56,"-"),og(),Sl(57,"td",20)(58,"em")(59,"strong"),rN(60,"(opcional)"),og()(),Sl(61,"p"),rN(62,"Quantidade de "),Sl(63,"a",22),rN(64,"colunas"),og(),rN(65," usadas para a exibi\xE7\xE3o da "),Sl(66,"code"),rN(67,"p-label"),og(),rN(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),og(),Sl(69,"p"),rN(70,"Valores v\xE1lidos:"),og(),Sl(71,"ul")(72,"li")(73,"code"),rN(74,"[1 .. 11]"),og()()(),Sl(75,"blockquote")(76,"p"),rN(77,"A propriedade "),Sl(78,"code"),rN(79,"p-value"),og(),rN(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),og()()()(),Sl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),rN(85," p-orientation"),Wl(86,"br"),og()()(),Sl(87,"td",17)(88,"code",23),rN(89,"PoInfoOrientation"),og()(),Sl(90,"td",19)(91,"p")(92,"code"),rN(93,"vertical"),og()()(),Sl(94,"td",20)(95,"em")(96,"strong"),rN(97,"(opcional)"),og()(),Sl(98,"p"),rN(99,"Define o layout de exibi\xE7\xE3o."),og(),Sl(100,"blockquote")(101,"p"),rN(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),Sl(103,"code"),rN(104,"p-label-size"),og(),rN(105," para um maior controle das informa\xE7\xF5es exibidas."),og()()()(),Sl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),rN(110," p-size"),Wl(111,"br"),og()()(),Sl(112,"td",17)(113,"code",18),rN(114,"string"),og()(),Sl(115,"td",19)(116,"p")(117,"code"),rN(118,"medium"),og()()(),Sl(119,"td",20)(120,"em")(121,"strong"),rN(122,"(opcional)"),og()(),Sl(123,"p"),rN(124,"Define o tamanho do componente entre "),Sl(125,"code"),rN(126,"small"),og(),rN(127," ou "),Sl(128,"code"),rN(129,"medium"),og(),rN(130,"."),og(),Sl(131,"blockquote")(132,"p"),rN(133,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(134,"code"),rN(135,"medium"),og(),rN(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(137,"a",24),rN(138,"po-theme"),og(),rN(139,"."),og()()()(),Sl(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),rN(144," p-url"),Wl(145,"br"),og()()(),Sl(146,"td",17)(147,"code",18),rN(148,"string"),og()(),Sl(149,"td",19),rN(150,"-"),og(),Sl(151,"td",20)(152,"em")(153,"strong"),rN(154,"(opcional)"),og()(),Sl(155,"p"),rN(156,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),Sl(157,"em"),rN(158,"link"),og(),rN(159," e ao ser clicado ser\xE1 redirecionado para a URL informada."),og(),Sl(160,"blockquote")(161,"p"),rN(162,"Caso informar "),Sl(163,"code"),rN(164,"http://"),og(),rN(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Sl(166,"code"),rN(167,"/customers"),og(),rN(168,", ser\xE1 aberto na aba atual."),og()()()(),Sl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),rN(173," p-value"),Wl(174,"br"),og()()(),Sl(175,"td",17)(176,"code",18),rN(177,"string"),og()(),Sl(178,"td",19),rN(179,"-"),og(),Sl(180,"td",20)(181,"em")(182,"strong"),rN(183,"(opcional)"),og()(),Sl(184,"p"),rN(185,"Valor do conte\xFAdo a ser exibido."),og()()()(),Sl(186,"h3"),rN(187,"Enums"),og(),Sl(188,"h4",4)(189,"code",5),rN(190,"PoInfoOrientation"),og()(),Sl(191,"div",2)(192,"p"),rN(193,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Sl(194,"code"),rN(195,"po-info"),og(),rN(196,"."),og()(),Sl(197,"h4",9),rN(198,"Propriedades"),og(),Sl(199,"table",10)(200,"tr",11)(201,"th",12),rN(202,"Nome"),og(),Sl(203,"th",12),rN(204,"Descri\xE7\xE3o"),og()(),Sl(205,"tr",13)(206,"td",14)(207,"div",15)(208,"span",16),rN(209," Horizontal"),Wl(210,"br"),og()()(),Sl(211,"td",20)(212,"p"),rN(213,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),og()()(),Sl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),rN(218," Vertical"),Wl(219,"br"),og()()(),Sl(220,"td",20)(221,"p"),rN(222,"Exibe o valor na vertical, ou seja, abaixo do label."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-info-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),og()()()),a&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:"",component:ie}],ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[mL.forChild(fe),mL]})}return o})();var Be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,ae]})}return o})();export{Be as DocPoInfoModule};