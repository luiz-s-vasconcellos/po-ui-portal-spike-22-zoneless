import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,e as s,r as r$1,cw as $o,df as Tt,J as zl,T as nw,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aF as $9,aG as mk,b0 as Qt,b1 as mv,bB as cc,b4 as O3,c8 as Dde,aN as QA,aq as lx,aM as ww,aP as e0,at as ux,bM as dN,a7 as lN,aO as Ew,cy as dde,aI as dc,a3 as cNe,aB as Dx,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var le=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&zl(0,"po-helper",0),l&2&&nw("p-helper",i.poHelper);},dependencies:[Tt],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Helper Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.'
  };
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-helper-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return o})();var ge=()=>({label:"Help",value:"help"}),xe=()=>({label:"Info",value:"info"}),re=(o,V)=>[o,V],ve=()=>({label:"Medium",value:"medium"}),Ce=()=>({label:"Small",value:"small"});function ye(o,V){if(o&1){let p=Dx();Il(0,"po-input",9),ww("ngModelChange",function(i){Xy(p);let d=Sx();return eN(d.footerTitle,i)||(d.footerTitle=i),Qy(i)}),ft("ngModelChange",function(i){Xy(p);let d=Sx();return Qy(d.setFooterTitle(i))}),og(),QA();}if(o&2){let p=Sx();Ew("ngModel",p.footerTitle),e0();}}var me=(()=>{class o{helperDisabled=false;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked");}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r$1({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}});}updateHelperType(p){this.helperOptions=s(r$1({},this.helperOptions),{type:p});}reset(){this.helperDisabled=false,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs"]],standalone:false,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(zl(0,"po-helper",0)(1,"po-divider"),Il(2,"div",1)(3,"po-input",2),ft("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{title:u})}),og(),QA(),Il(4,"po-input",3),ft("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{content:u})}),og(),QA(),og(),Il(5,"div",1),lx(6,ye,1,1,"po-input",4),og(),Il(7,"div",1)(8,"po-radio-group",5),ft("ngModelChange",function(u){return i.updateHelperType(u)}),og(),QA(),og(),Il(9,"div",1)(10,"po-radio-group",6),ww("ngModelChange",function(u){return eN(i.helperSize,u)||(i.helperSize=u),u}),og(),QA(),og(),Il(11,"div",1)(12,"po-checkbox",7),ww("ngModelChange",function(u){return eN(i.helperDisabled,u)||(i.helperDisabled=u),u}),og(),QA(),og(),zl(13,"po-divider"),Il(14,"div",1)(15,"po-button",8),ft("p-click",function(){return i.reset()}),og()()),l&2&&(nw("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),Lp(3),nw("ngModel",i.helperOptions.title),e0(),Lp(),nw("ngModel",i.helperOptions.content),e0(),Lp(2),ux(i.helperOptions.type==="help"?6:-1),Lp(2),nw("p-columns",4)("ngModel",i.helperOptions.type)("p-options",dN(15,re,lN(13,ge),lN(14,xe))),e0(),Lp(2),Ew("ngModel",i.helperSize),nw("p-columns",4)("p-options",dN(20,re,lN(18,ve),lN(19,Ce))),e0(),Lp(2),Ew("ngModel",i.helperDisabled),e0());},dependencies:[$9,mk,Qt,mv,cc,O3,Dde,Tt],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Helper Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

<po-divider></po-divider>

<div class="po-row">
  <po-input
    class="po-md-6"
    name="title"
    [ngModel]="helperOptions.title"
    (ngModelChange)="helperOptions = { ...helperOptions, title: $event }"
    p-clean
    p-label="Title"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="content"
    [ngModel]="helperOptions.content"
    (ngModelChange)="helperOptions = { ...helperOptions, content: $event }"
    p-clean
    p-label="Content"
    p-help="Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes."
  >
  </po-input>
</div>

<div class="po-row">
  @if (helperOptions.type === 'help') {
    <po-input
      class="po-md-6"
      name="footerTitle"
      [(ngModel)]="footerTitle"
      (ngModelChange)="setFooterTitle($event)"
      p-clean
      p-label="Footer Action"
    >
    </po-input>
  }
</div>

<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12"
    [p-columns]="4"
    p-label="Type"
    [ngModel]="helperOptions.type"
    (ngModelChange)="updateHelperType($event)"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="helperSize"
    [p-columns]="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-checkbox class="po-md-12" name="disabled" [(ngModel)]="helperDisabled" p-label="Disabled"> </po-checkbox>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="reset()"></po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperDisabled: boolean = false;
  helperSize: string = 'medium';

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help'
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  setFooterTitle(title: string) {
    this.footerTitle = title;
    if (title.length === 0) {
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions = {
        ...this.helperOptions,
        footerAction: {
          label: this.footerTitle,
          action: this.footerAction.bind(this)
        }
      };
    }
  }

  updateHelperType(type: string) {
    this.helperOptions = {
      ...this.helperOptions,
      type: type as 'help' | 'info'
    };
  }

  reset() {
    this.helperDisabled = false;
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help'
    };
    this.helperSize = 'medium';
    this.footerTitle = '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-helper-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,me],encapsulation:2})}return o})();var de=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:false,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(Il(0,"po-container")(1,"div",0)(2,"div",1),Qx(3,"Sales Performance"),og(),zl(4,"po-helper",2),og(),Il(5,"div",3)(6,"div",4),zl(7,"po-chart",5),og()()()),l&2&&(Lp(4),nw("p-helper",i.helperOptions),Lp(3),nw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover));},dependencies:[dde,dc,Tt],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Helper Sales Performance"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-container>
  <div class="po-row po-mb-3">
    <div class="po-font-title">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.',
    type: 'info'
  };

  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-helper-sales-performance"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-doc"]],standalone:false,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoHelperModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-helper"),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoHelperComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O componente "),Il(15,"code"),Qx(16,"po-helper"),og(),Qx(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),og(),Il(18,"p"),Qx(19,"Principais funcionalidades:"),og(),Il(20,"ul")(21,"li"),Qx(22,"Exibe \xEDcone de ajuda ("),Il(23,"code"),Qx(24,"help"),og(),Qx(25,") ou informa\xE7\xE3o ("),Il(26,"code"),Qx(27,"info"),og(),Qx(28,") conforme configura\xE7\xE3o."),og(),Il(29,"li"),Qx(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),Il(31,"code"),Qx(32,"p-helper"),og(),Qx(33,"."),og(),Il(34,"li"),Qx(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),og(),Il(36,"li"),Qx(37,"Controle do tamanho do componente via propriedade "),Il(38,"code"),Qx(39,"p-size"),og(),Qx(40," ("),Il(41,"code"),Qx(42,"small"),og(),Qx(43," ou "),Il(44,"code"),Qx(45,"medium"),og(),Qx(46,")."),og(),Il(47,"li"),Qx(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),og()(),Il(49,"p"),Qx(50,"Exemplo de uso:"),og(),Il(51,"pre")(52,"code",6),Qx(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),og()(),Il(54,"p"),Qx(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),og(),Il(56,"pre")(57,"code",6),Qx(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),og()(),Il(59,"p"),Qx(60,"A propriedade "),Il(61,"code"),Qx(62,"p-helper"),og(),Qx(63," aceita um objeto do tipo "),Il(64,"code"),Qx(65,"PoHelperOptions"),og(),Qx(66,":"),og(),Il(67,"pre")(68,"code",7),Qx(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),og()(),Il(70,"blockquote")(71,"p")(72,"strong"),Qx(73,"Importante:"),og(),Qx(74," A propriedade "),Il(75,"code"),Qx(76,"footerAction"),og(),Qx(77," n\xE3o pode ser utilizada quando o tipo do helper for "),Il(78,"code"),Qx(79,"info"),og(),Qx(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),og()(),Il(81,"h4"),Qx(82,"Tokens customiz\xE1veis"),og(),Il(83,"p"),Qx(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(85,"blockquote")(86,"p"),Qx(87,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(88,"a",8),Qx(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(90,"."),og()(),Il(91,"table")(92,"thead")(93,"tr")(94,"th"),Qx(95,"Propriedade"),og(),Il(96,"th"),Qx(97,"Descri\xE7\xE3o"),og(),Il(98,"th"),Qx(99,"Valor Padr\xE3o"),og()()(),Il(100,"tbody")(101,"tr")(102,"td")(103,"code"),Qx(104,"--color"),og()(),Il(105,"td"),Qx(106,"Cor principal do \xEDcone"),og(),Il(107,"td")(108,"code"),Qx(109,"var(--color-action-default)"),og()()(),Il(110,"tr")(111,"td")(112,"code"),Qx(113,"--border-color-hover"),og()(),Il(114,"td"),Qx(115,"Cor da borda no estado hover"),og(),Il(116,"td")(117,"code"),Qx(118,"var(--color-brand-01-darkest)"),og()()(),Il(119,"tr")(120,"td")(121,"code"),Qx(122,"--background-pressed"),og()(),Il(123,"td"),Qx(124,"Cor de background no estado de pressionado\xA0"),og(),Il(125,"td")(126,"code"),Qx(127,"var(--color-brand-01-light)"),og()()(),Il(128,"tr")(129,"td")(130,"code"),Qx(131,"--color-disabled"),og()(),Il(132,"td"),Qx(133,"Cor principal no estado disabled"),og(),Il(134,"td")(135,"code"),Qx(136,"var(--color-action-disabled)"),og()()()()()(),Il(137,"div",9)(138,"h4",10),Qx(139,"Seletor"),og(),Il(140,"pre",11),Qx(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),og()(),Il(142,"h4",12),Qx(143,"Propriedades"),og(),Il(144,"table",13)(145,"tr",14)(146,"th",15),Qx(147,"Nome"),og(),Il(148,"th",15),Qx(149,"Tipo"),og(),Il(150,"th",15),Qx(151,"Padr\xE3o"),og(),Il(152,"th",15),Qx(153,"Descri\xE7\xE3o"),og()(),Il(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),Qx(158," p-append-in-body"),zl(159,"br"),og()()(),Il(160,"td",20)(161,"code",21),Qx(162,"boolean"),og()(),Il(163,"td",22),Qx(164,"-"),og(),Il(165,"td",23)(166,"em")(167,"strong"),Qx(168,"(opcional)"),og()(),Il(169,"p"),Qx(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Il(171,"code"),Qx(172,"p-target"),og(),Qx(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Il(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),Qx(178," p-disabled"),zl(179,"br"),og()()(),Il(180,"td",20)(181,"code",21),Qx(182,"boolean"),og()(),Il(183,"td",22)(184,"p")(185,"code"),Qx(186,"false"),og()()(),Il(187,"td",23)(188,"em")(189,"strong"),Qx(190,"(opcional)"),og()(),Il(191,"p"),Qx(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),og()()(),Il(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),Qx(197," p-helper"),zl(198,"br"),og()()(),Il(199,"td",20)(200,"code",24),Qx(201,"PoHelperOptions "),og(),Il(202,"code",25),Qx(203," string"),og()(),Il(204,"td",22),Qx(205,"-"),og(),Il(206,"td",23)(207,"em")(208,"strong"),Qx(209,"(opcional)"),og()(),Il(210,"p"),Qx(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),og(),Il(212,"p"),Qx(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Il(214,"code"),Qx(215,"PoHelperOptions"),og(),Qx(216," para configura\xE7\xE3o avan\xE7ada:"),og(),Il(217,"ul")(218,"li")(219,"code"),Qx(220,"title"),og(),Qx(221,": T\xEDtulo do popover."),og(),Il(222,"li")(223,"code"),Qx(224,"content"),og(),Qx(225,": Conte\xFAdo explicativo exibido no popover."),og(),Il(226,"li")(227,"code"),Qx(228,"type"),og(),Qx(229,": Tipo do \xEDcone ("),Il(230,"code"),Qx(231,"help"),og(),Qx(232," ou "),Il(233,"code"),Qx(234,"info"),og(),Qx(235,")."),og(),Il(236,"li")(237,"code"),Qx(238,"eventOnClick"),og(),Qx(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),og(),Il(240,"li")(241,"code"),Qx(242,"footerAction"),og(),Qx(243,": Objeto com "),Il(244,"code"),Qx(245,"label"),og(),Qx(246," e "),Il(247,"code"),Qx(248,"action"),og(),Qx(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),og()(),Il(250,"p"),Qx(251,"Exemplo de uso:"),og(),Il(252,"pre")(253,"code",6),Qx(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),og()()()(),Il(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),Qx(259," p-size"),zl(260,"br"),og()()(),Il(261,"td",20)(262,"code",25),Qx(263,"string"),og()(),Il(264,"td",22)(265,"p")(266,"code"),Qx(267,"medium"),og()()(),Il(268,"td",23)(269,"em")(270,"strong"),Qx(271,"(opcional)"),og()(),Il(272,"p"),Qx(273,"Define o tamanho do componente:"),og(),Il(274,"ul")(275,"li")(276,"code"),Qx(277,"small"),og(),Qx(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(279,"li")(280,"code"),Qx(281,"medium"),og(),Qx(282,": altura do \xEDcone com seu valor de 24px."),og()(),Il(283,"blockquote")(284,"p"),Qx(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(286,"code"),Qx(287,"medium"),og(),Qx(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(289,"a",26),Qx(290,"po-theme"),og(),Qx(291,"."),og()()()()(),Il(292,"h3"),Qx(293,"Interfaces"),og(),Il(294,"h4",27)(295,"code",5),Qx(296,"PoHelperOptions"),og()(),Il(297,"div",2)(298,"p"),Qx(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Il(300,"em"),Qx(301,"helper"),og(),Qx(302,")."),og()(),Il(303,"h4",12),Qx(304,"Propriedades"),og(),Il(305,"table",13)(306,"tr",14)(307,"th",15),Qx(308,"Nome"),og(),Il(309,"th",15),Qx(310,"Tipo"),og(),Il(311,"th",15),Qx(312,"Descri\xE7\xE3o"),og()(),Il(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),Qx(317," content"),zl(318,"br"),og()()(),Il(319,"td",20)(320,"code",25),Qx(321,"string"),og()(),Il(322,"td",23)(323,"em")(324,"strong"),Qx(325,"(opcional)"),og()(),Il(326,"p"),Qx(327,"Texto explicativo exibido no popover."),og(),Il(328,"p"),Qx(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Il(330,"code"),Qx(331,"<b>"),og(),Qx(332," (negrito), "),Il(333,"code"),Qx(334,"<strong>"),og(),Qx(335," (negrito), "),Il(336,"code"),Qx(337,"<i>"),og(),Qx(338," (it\xE1lico), "),Il(339,"code"),Qx(340,"<em>"),og(),Qx(341,` (it\xE1lico) e
`),Il(342,"code"),Qx(343,"<u>"),og(),Qx(344," (sublinhado)."),og(),Il(345,"p"),Qx(346,"Exemplo:"),og(),Il(347,"pre")(348,"code",7),Qx(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),og()()()(),Il(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),Qx(354," eventOnClick"),zl(355,"br"),og()()(),Il(356,"td",20)(357,"code",28),Qx(358,"Function"),og()(),Il(359,"td",23)(360,"em")(361,"strong"),Qx(362,"(opcional)"),og()(),Il(363,"p"),Qx(364,"Evento disparado ao clicar no \xEDcone do helper."),og(),Il(365,"p"),Qx(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),og(),Il(367,"p"),Qx(368,"Pode ser uma fun\xE7\xE3o ou um "),Il(369,"code"),Qx(370,"EventEmitter"),og(),Qx(371,"."),og(),Il(372,"p"),Qx(373,"Exemplo:"),og(),Il(374,"pre")(375,"code"),Qx(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),og()()()(),Il(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),Qx(381," footerAction"),zl(382,"br"),og()()(),Il(383,"td",20)(384,"code",29),Qx(385,`{ label: string; action: Function;
}`),og()(),Il(386,"td",23)(387,"em")(388,"strong"),Qx(389,"(opcional)"),og()(),Il(390,"p"),Qx(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Il(392,"code"),Qx(393,"help"),og(),Qx(394," e desconsiderada quando o type for "),Il(395,"code"),Qx(396,"info"),og(),Qx(397,"."),og(),Il(398,"p"),Qx(399,"Deve ser um objeto com as propriedades:"),og(),Il(400,"ul")(401,"li")(402,"code"),Qx(403,"label"),og(),Qx(404,": Texto do bot\xE3o."),og(),Il(405,"li")(406,"code"),Qx(407,"action"),og(),Qx(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),og()(),Il(409,"p"),Qx(410,"Exemplo:"),og(),Il(411,"pre")(412,"code",7),Qx(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),og()()()(),Il(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),Qx(418," title"),zl(419,"br"),og()()(),Il(420,"td",20)(421,"code",25),Qx(422,"string"),og()(),Il(423,"td",23)(424,"em")(425,"strong"),Qx(426,"(opcional)"),og()(),Il(427,"p"),Qx(428,"T\xEDtulo do helper exibido no popover."),og()()(),Il(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),Qx(433," type"),zl(434,"br"),og()()(),Il(435,"td",20)(436,"code",30),Qx(437,"'info' "),og(),Il(438,"code",31),Qx(439," 'help'"),og()(),Il(440,"td",23)(441,"em")(442,"strong"),Qx(443,"(opcional)"),og()(),Il(444,"p"),Qx(445,"Tipo do \xEDcone exibido: "),Il(446,"code"),Qx(447,"info"),og(),Qx(448," ou "),Il(449,"code"),Qx(450,"help"),og(),Qx(451,"."),og(),Il(452,"p"),Qx(453,"Quando o valor \xE9 "),Il(454,"code"),Qx(455,"info"),og(),Qx(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),og(),Il(457,"p"),Qx(458,"Quando o valor \xE9 "),Il(459,"code"),Qx(460,"help"),og(),Qx(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-helper-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,pe,se,ce,ue],encapsulation:2})}return o})();var Oe=[{path:"",component:he}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[uL.forChild(Oe),uL]})}return o})();var it=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,Ee]})}return o})();export{it as DocPoHelperModule};