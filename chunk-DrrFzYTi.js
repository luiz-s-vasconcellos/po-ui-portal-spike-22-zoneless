import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,g as s,r as r$1,cw as $o,de as St,H as Wl,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aF as G9,aG as _k,b0 as Qt,b1 as mv,bB as cc,b4 as L3,c8 as wde,aN as e0,aq as dx,aM as ww,aP as n0,at as fx,bM as hN,a7 as dN,aO as Ew,cy as K3e,aI as dc,a3 as rNe,aB as wx,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var le=(()=>{class o{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic"]],standalone:false,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&Wl(0,"po-helper",0),l&2&&nw("p-helper",i.poHelper);},dependencies:[St],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Helper Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-helper [p-helper]="poHelper"></po-helper>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-helper-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,be,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,le],encapsulation:2})}return o})();var ge=()=>({label:"Help",value:"help"}),xe=()=>({label:"Info",value:"info"}),re=(o,V)=>[o,V],ve=()=>({label:"Medium",value:"medium"}),Ce=()=>({label:"Small",value:"small"});function ye(o,V){if(o&1){let p=wx();Sl(0,"po-input",9),ww("ngModelChange",function(i){Ky(p);let d=Mx();return nN(d.footerTitle,i)||(d.footerTitle=i),Xy(i)}),ft("ngModelChange",function(i){Ky(p);let d=Mx();return Xy(d.setFooterTitle(i))}),og(),e0();}if(o&2){let p=Mx();Ew("ngModel",p.footerTitle),n0();}}var me=(()=>{class o{helperDisabled=false;helperSize="medium";helperOptions={title:"",content:"",type:"help"};footerTitle="";footerAction(){alert("Footer action clicked");}setFooterTitle(p){this.footerTitle=p,p.length===0?delete this.helperOptions.footerAction:this.helperOptions=s(r$1({},this.helperOptions),{footerAction:{label:this.footerTitle,action:this.footerAction.bind(this)}});}updateHelperType(p){this.helperOptions=s(r$1({},this.helperOptions),{type:p});}reset(){this.helperDisabled=false,this.helperOptions={title:"",content:"",type:"help"},this.helperSize="medium",this.footerTitle="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs"]],standalone:false,decls:16,vars:23,consts:[[3,"p-helper","p-size","p-disabled"],[1,"po-row"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content","p-help","Consulte a <b>documenta\xE7\xE3o</b> para mais detalhes.",1,"po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModel"],["name","type","p-label","Type",1,"po-md-12",3,"ngModelChange","p-columns","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-options"],["name","disabled","p-label","Disabled",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["name","footerTitle","p-clean","","p-label","Footer Action",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Wl(0,"po-helper",0)(1,"po-divider"),Sl(2,"div",1)(3,"po-input",2),ft("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{title:u})}),og(),e0(),Sl(4,"po-input",3),ft("ngModelChange",function(u){return i.helperOptions=s(r$1({},i.helperOptions),{content:u})}),og(),e0(),og(),Sl(5,"div",1),dx(6,ye,1,1,"po-input",4),og(),Sl(7,"div",1)(8,"po-radio-group",5),ft("ngModelChange",function(u){return i.updateHelperType(u)}),og(),e0(),og(),Sl(9,"div",1)(10,"po-radio-group",6),ww("ngModelChange",function(u){return nN(i.helperSize,u)||(i.helperSize=u),u}),og(),e0(),og(),Sl(11,"div",1)(12,"po-checkbox",7),ww("ngModelChange",function(u){return nN(i.helperDisabled,u)||(i.helperDisabled=u),u}),og(),e0(),og(),Wl(13,"po-divider"),Sl(14,"div",1)(15,"po-button",8),ft("p-click",function(){return i.reset()}),og()()),l&2&&(nw("p-helper",i.helperOptions)("p-size",i.helperSize)("p-disabled",i.helperDisabled),Lp(3),nw("ngModel",i.helperOptions.title),n0(),Lp(),nw("ngModel",i.helperOptions.content),n0(),Lp(2),fx(i.helperOptions.type==="help"?6:-1),Lp(2),nw("p-columns",4)("ngModel",i.helperOptions.type)("p-options",hN(15,re,dN(13,ge),dN(14,xe))),n0(),Lp(2),Ew("ngModel",i.helperSize),nw("p-columns",4)("p-options",hN(20,re,dN(18,ve),dN(19,Ce))),n0(),Lp(2),Ew("ngModel",i.helperDisabled),n0());},dependencies:[G9,_k,Qt,mv,cc,L3,wde,St],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Helper Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize" [p-disabled]="helperDisabled"></po-helper>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-helper-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,me],encapsulation:2})}return o})();var de=(()=>{class o{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into <b>employee turnover rate</b> and <i>sales performance</i>. Hover over the chart for <u>more details</u>.",type:"info"};type=$o.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:true};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance"]],standalone:false,decls:8,vars:4,consts:[[1,"po-row","po-mb-3"],[1,"po-font-title"],[3,"p-helper"],[1,"po-row"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(Sl(0,"po-container")(1,"div",0)(2,"div",1),eN(3,"Sales Performance"),og(),Wl(4,"po-helper",2),og(),Sl(5,"div",3)(6,"div",4),Wl(7,"po-chart",5),og()()()),l&2&&(Lp(4),nw("p-helper",i.helperOptions),Lp(3),nw("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover));},dependencies:[K3e,dc,St],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-sales-performance-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Helper Sales Performance"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-container>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-helper-sales-performance"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return o})();var ue=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-helper-doc"]],standalone:false,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoHelperModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-helper"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoHelperComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O componente "),Sl(15,"code"),eN(16,"po-helper"),og(),eN(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),og(),Sl(18,"p"),eN(19,"Principais funcionalidades:"),og(),Sl(20,"ul")(21,"li"),eN(22,"Exibe \xEDcone de ajuda ("),Sl(23,"code"),eN(24,"help"),og(),eN(25,") ou informa\xE7\xE3o ("),Sl(26,"code"),eN(27,"info"),og(),eN(28,") conforme configura\xE7\xE3o."),og(),Sl(29,"li"),eN(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),Sl(31,"code"),eN(32,"p-helper"),og(),eN(33,"."),og(),Sl(34,"li"),eN(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),og(),Sl(36,"li"),eN(37,"Controle do tamanho do componente via propriedade "),Sl(38,"code"),eN(39,"p-size"),og(),eN(40," ("),Sl(41,"code"),eN(42,"small"),og(),eN(43," ou "),Sl(44,"code"),eN(45,"medium"),og(),eN(46,")."),og(),Sl(47,"li"),eN(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),og()(),Sl(49,"p"),eN(50,"Exemplo de uso:"),og(),Sl(51,"pre")(52,"code",6),eN(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),og()(),Sl(54,"p"),eN(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),og(),Sl(56,"pre")(57,"code",6),eN(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),og()(),Sl(59,"p"),eN(60,"A propriedade "),Sl(61,"code"),eN(62,"p-helper"),og(),eN(63," aceita um objeto do tipo "),Sl(64,"code"),eN(65,"PoHelperOptions"),og(),eN(66,":"),og(),Sl(67,"pre")(68,"code",7),eN(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),og()(),Sl(70,"blockquote")(71,"p")(72,"strong"),eN(73,"Importante:"),og(),eN(74," A propriedade "),Sl(75,"code"),eN(76,"footerAction"),og(),eN(77," n\xE3o pode ser utilizada quando o tipo do helper for "),Sl(78,"code"),eN(79,"info"),og(),eN(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),og()(),Sl(81,"h4"),eN(82,"Tokens customiz\xE1veis"),og(),Sl(83,"p"),eN(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(85,"blockquote")(86,"p"),eN(87,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(88,"a",8),eN(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(90,"."),og()(),Sl(91,"table")(92,"thead")(93,"tr")(94,"th"),eN(95,"Propriedade"),og(),Sl(96,"th"),eN(97,"Descri\xE7\xE3o"),og(),Sl(98,"th"),eN(99,"Valor Padr\xE3o"),og()()(),Sl(100,"tbody")(101,"tr")(102,"td")(103,"code"),eN(104,"--color"),og()(),Sl(105,"td"),eN(106,"Cor principal do \xEDcone"),og(),Sl(107,"td")(108,"code"),eN(109,"var(--color-action-default)"),og()()(),Sl(110,"tr")(111,"td")(112,"code"),eN(113,"--border-color-hover"),og()(),Sl(114,"td"),eN(115,"Cor da borda no estado hover"),og(),Sl(116,"td")(117,"code"),eN(118,"var(--color-brand-01-darkest)"),og()()(),Sl(119,"tr")(120,"td")(121,"code"),eN(122,"--background-pressed"),og()(),Sl(123,"td"),eN(124,"Cor de background no estado de pressionado\xA0"),og(),Sl(125,"td")(126,"code"),eN(127,"var(--color-brand-01-light)"),og()()(),Sl(128,"tr")(129,"td")(130,"code"),eN(131,"--color-disabled"),og()(),Sl(132,"td"),eN(133,"Cor principal no estado disabled"),og(),Sl(134,"td")(135,"code"),eN(136,"var(--color-action-disabled)"),og()()()()()(),Sl(137,"div",9)(138,"h4",10),eN(139,"Seletor"),og(),Sl(140,"pre",11),eN(141,`<po-helper
    p-append-in-body="boolean"
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-helper>
`),og()(),Sl(142,"h4",12),eN(143,"Propriedades"),og(),Sl(144,"table",13)(145,"tr",14)(146,"th",15),eN(147,"Nome"),og(),Sl(148,"th",15),eN(149,"Tipo"),og(),Sl(150,"th",15),eN(151,"Padr\xE3o"),og(),Sl(152,"th",15),eN(153,"Descri\xE7\xE3o"),og()(),Sl(154,"tr",16)(155,"td",17)(156,"div",18)(157,"span",19),eN(158," p-append-in-body"),Wl(159,"br"),og()()(),Sl(160,"td",20)(161,"code",21),eN(162,"boolean"),og()(),Sl(163,"td",22),eN(164,"-"),og(),Sl(165,"td",23)(166,"em")(167,"strong"),eN(168,"(opcional)"),og()(),Sl(169,"p"),eN(170,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Sl(171,"code"),eN(172,"p-target"),og(),eN(173,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Sl(174,"tr",16)(175,"td",17)(176,"div",18)(177,"span",19),eN(178," p-disabled"),Wl(179,"br"),og()()(),Sl(180,"td",20)(181,"code",21),eN(182,"boolean"),og()(),Sl(183,"td",22)(184,"p")(185,"code"),eN(186,"false"),og()()(),Sl(187,"td",23)(188,"em")(189,"strong"),eN(190,"(opcional)"),og()(),Sl(191,"p"),eN(192,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),og()()(),Sl(193,"tr",16)(194,"td",17)(195,"div",18)(196,"span",19),eN(197," p-helper"),Wl(198,"br"),og()()(),Sl(199,"td",20)(200,"code",24),eN(201,"PoHelperOptions "),og(),Sl(202,"code",25),eN(203," string"),og()(),Sl(204,"td",22),eN(205,"-"),og(),Sl(206,"td",23)(207,"em")(208,"strong"),eN(209,"(opcional)"),og()(),Sl(210,"p"),eN(211,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),og(),Sl(212,"p"),eN(213,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),Sl(214,"code"),eN(215,"PoHelperOptions"),og(),eN(216," para configura\xE7\xE3o avan\xE7ada:"),og(),Sl(217,"ul")(218,"li")(219,"code"),eN(220,"title"),og(),eN(221,": T\xEDtulo do popover."),og(),Sl(222,"li")(223,"code"),eN(224,"content"),og(),eN(225,": Conte\xFAdo explicativo exibido no popover."),og(),Sl(226,"li")(227,"code"),eN(228,"type"),og(),eN(229,": Tipo do \xEDcone ("),Sl(230,"code"),eN(231,"help"),og(),eN(232," ou "),Sl(233,"code"),eN(234,"info"),og(),eN(235,")."),og(),Sl(236,"li")(237,"code"),eN(238,"eventOnClick"),og(),eN(239,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),og(),Sl(240,"li")(241,"code"),eN(242,"footerAction"),og(),eN(243,": Objeto com "),Sl(244,"code"),eN(245,"label"),og(),eN(246," e "),Sl(247,"code"),eN(248,"action"),og(),eN(249," para a\xE7\xE3o customizada no rodap\xE9 do popover."),og()(),Sl(250,"p"),eN(251,"Exemplo de uso:"),og(),Sl(252,"pre")(253,"code",6),eN(254,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),og()()()(),Sl(255,"tr",16)(256,"td",17)(257,"div",18)(258,"span",19),eN(259," p-size"),Wl(260,"br"),og()()(),Sl(261,"td",20)(262,"code",25),eN(263,"string"),og()(),Sl(264,"td",22)(265,"p")(266,"code"),eN(267,"medium"),og()()(),Sl(268,"td",23)(269,"em")(270,"strong"),eN(271,"(opcional)"),og()(),Sl(272,"p"),eN(273,"Define o tamanho do componente:"),og(),Sl(274,"ul")(275,"li")(276,"code"),eN(277,"small"),og(),eN(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(279,"li")(280,"code"),eN(281,"medium"),og(),eN(282,": altura do \xEDcone com seu valor de 24px."),og()(),Sl(283,"blockquote")(284,"p"),eN(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(286,"code"),eN(287,"medium"),og(),eN(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(289,"a",26),eN(290,"po-theme"),og(),eN(291,"."),og()()()()(),Sl(292,"h3"),eN(293,"Interfaces"),og(),Sl(294,"h4",27)(295,"code",5),eN(296,"PoHelperOptions"),og()(),Sl(297,"div",2)(298,"p"),eN(299,"Interface para configura\xE7\xE3o das op\xE7\xF5es de ajuda ("),Sl(300,"em"),eN(301,"helper"),og(),eN(302,")."),og()(),Sl(303,"h4",12),eN(304,"Propriedades"),og(),Sl(305,"table",13)(306,"tr",14)(307,"th",15),eN(308,"Nome"),og(),Sl(309,"th",15),eN(310,"Tipo"),og(),Sl(311,"th",15),eN(312,"Descri\xE7\xE3o"),og()(),Sl(313,"tr",16)(314,"td",17)(315,"div",18)(316,"span",19),eN(317," content"),Wl(318,"br"),og()()(),Sl(319,"td",20)(320,"code",25),eN(321,"string"),og()(),Sl(322,"td",23)(323,"em")(324,"strong"),eN(325,"(opcional)"),og()(),Sl(326,"p"),eN(327,"Texto explicativo exibido no popover."),og(),Sl(328,"p"),eN(329,"Suporta formata\xE7\xE3o b\xE1sica com as tags "),Sl(330,"code"),eN(331,"<b>"),og(),eN(332," (negrito), "),Sl(333,"code"),eN(334,"<strong>"),og(),eN(335," (negrito), "),Sl(336,"code"),eN(337,"<i>"),og(),eN(338," (it\xE1lico), "),Sl(339,"code"),eN(340,"<em>"),og(),eN(341,` (it\xE1lico) e
`),Sl(342,"code"),eN(343,"<u>"),og(),eN(344," (sublinhado)."),og(),Sl(345,"p"),eN(346,"Exemplo:"),og(),Sl(347,"pre")(348,"code",7),eN(349,`content: 'Texto <b>importante</b> com <em>destaque</em> e <u>sublinhado</u>'
`),og()()()(),Sl(350,"tr",16)(351,"td",17)(352,"div",18)(353,"span",19),eN(354," eventOnClick"),Wl(355,"br"),og()()(),Sl(356,"td",20)(357,"code",28),eN(358,"Function"),og()(),Sl(359,"td",23)(360,"em")(361,"strong"),eN(362,"(opcional)"),og()(),Sl(363,"p"),eN(364,"Evento disparado ao clicar no \xEDcone do helper."),og(),Sl(365,"p"),eN(366,"O conte\xFAdo do popover n\xE3o \xE9 exibido quando esta propriedade \xE9 definida, para controle total do evento pelo desenvolvedor."),og(),Sl(367,"p"),eN(368,"Pode ser uma fun\xE7\xE3o ou um "),Sl(369,"code"),eN(370,"EventEmitter"),og(),eN(371,"."),og(),Sl(372,"p"),eN(373,"Exemplo:"),og(),Sl(374,"pre")(375,"code"),eN(376,`eventOnClick: (event) => {
 alert('Clicou no helper');
 console.log(event);
}
`),og()()()(),Sl(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),eN(381," footerAction"),Wl(382,"br"),og()()(),Sl(383,"td",20)(384,"code",29),eN(385,`{ label: string; action: Function;
}`),og()(),Sl(386,"td",23)(387,"em")(388,"strong"),eN(389,"(opcional)"),og()(),Sl(390,"p"),eN(391,`A\xE7\xE3o customizada exibida no rodap\xE9 do popover.
Compat\xEDvel apenas com a propriedade type com o valor `),Sl(392,"code"),eN(393,"help"),og(),eN(394," e desconsiderada quando o type for "),Sl(395,"code"),eN(396,"info"),og(),eN(397,"."),og(),Sl(398,"p"),eN(399,"Deve ser um objeto com as propriedades:"),og(),Sl(400,"ul")(401,"li")(402,"code"),eN(403,"label"),og(),eN(404,": Texto do bot\xE3o."),og(),Sl(405,"li")(406,"code"),eN(407,"action"),og(),eN(408,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),og()(),Sl(409,"p"),eN(410,"Exemplo:"),og(),Sl(411,"pre")(412,"code",7),eN(413,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),og()()()(),Sl(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),eN(418," title"),Wl(419,"br"),og()()(),Sl(420,"td",20)(421,"code",25),eN(422,"string"),og()(),Sl(423,"td",23)(424,"em")(425,"strong"),eN(426,"(opcional)"),og()(),Sl(427,"p"),eN(428,"T\xEDtulo do helper exibido no popover."),og()()(),Sl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),eN(433," type"),Wl(434,"br"),og()()(),Sl(435,"td",20)(436,"code",30),eN(437,"'info' "),og(),Sl(438,"code",31),eN(439," 'help'"),og()(),Sl(440,"td",23)(441,"em")(442,"strong"),eN(443,"(opcional)"),og()(),Sl(444,"p"),eN(445,"Tipo do \xEDcone exibido: "),Sl(446,"code"),eN(447,"info"),og(),eN(448," ou "),Sl(449,"code"),eN(450,"help"),og(),eN(451,"."),og(),Sl(452,"p"),eN(453,"Quando o valor \xE9 "),Sl(454,"code"),eN(455,"info"),og(),eN(456,", o popover exibe apenas informa\xE7\xF5es e n\xE3o permite a\xE7\xF5es customizadas."),og(),Sl(457,"p"),eN(458,"Quando o valor \xE9 "),Sl(459,"code"),eN(460,"help"),og(),eN(461,", o popover pode exibir a\xE7\xF5es customizadas no rodap\xE9."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-helper-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,pe,se,ce,ue],encapsulation:2})}return o})();var Oe=[{path:"",component:he}],Ee=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[hL.forChild(Oe),hL]})}return o})();var it=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[sr,Ee]})}return o})();export{it as DocPoHelperModule};