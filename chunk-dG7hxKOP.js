import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,df as eme,H as Wl,Q as nw,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,aB as wx,aM as ww,aN as e0,aO as Ew,aP as n0,bD as Pde,aJ as Hhe,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var te=(()=>{class n{srcImage="https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg";static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-basic"]],standalone:false,decls:1,vars:1,consts:[["p-alt","teste de imagem","p-height","300",3,"p-src"]],template:function(a,i){a&1&&Wl(0,"po-image",0),a&2&&nw("p-src",i.srcImage);},dependencies:[eme],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Image Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-image-basic/sample-po-image-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-image-basic/sample-po-image-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-image-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ce,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,te],encapsulation:2})}return n})();var ne=(()=>{class n{alt;height;src;ngOnInit(){this.restore();}restore(){this.alt=void 0,this.height="auto",this.src=void 0;}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-labs"]],standalone:false,decls:11,vars:6,consts:[["f","ngForm"],[3,"p-src","p-alt","p-height"],[1,"po-row"],["name","src","p-clean","","p-label","Source","p-help","Enter a url or path of the image that will be displayed",1,"po-md-6",3,"ngModelChange","ngModel"],["name","alt","p-clean","","p-label","Alternate","p-help","Alternative text for image description. Ex.: Po Ui logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=wx();Wl(0,"po-image",1)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",2)(5,"po-input",3),ww("ngModelChange",function(l){return Ky(d),nN(i.src,l)||(i.src=l),Xy(l)}),og(),e0(),Sl(6,"po-input",4),ww("ngModelChange",function(l){return Ky(d),nN(i.alt,l)||(i.alt=l),Xy(l)}),og(),e0(),Sl(7,"po-input",5),ww("ngModelChange",function(l){return Ky(d),nN(i.height,l)||(i.height=l),Xy(l)}),og(),e0(),og(),Wl(8,"po-divider"),Sl(9,"div",2)(10,"po-button",6),ft("p-click",function(){return i.restore()}),og()()();}a&2&&(nw("p-src",i.src)("p-alt",i.alt)("p-height",i.height),Lp(5),Ew("ngModel",i.src),n0(),Lp(),Ew("ngModel",i.alt),n0(),Lp(),Ew("ngModel",i.height),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,eme],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Image Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-image-labs/sample-po-image-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

<po-divider />
<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="src"
      [(ngModel)]="src"
      p-clean
      p-label="Source"
      p-help="Enter a url or path of the image that will be displayed"
    ></po-input>
    <po-input
      class="po-md-6"
      name="alt"
      [(ngModel)]="alt"
      p-clean
      p-label="Alternate"
      p-help="Alternative text for image description. Ex.: Po Ui logo"
    ></po-input>
    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-label="Height"></po-input>
  </div>
  <po-divider />
  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-image-labs/sample-po-image-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-labs',
  templateUrl: './sample-po-image-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageLabsComponent implements OnInit {
  alt: string;
  height: string | number;
  src: string;

  ngOnInit(): void {
    this.restore();
  }

  restore() {
    this.alt = undefined;
    this.height = 'auto';
    this.src = undefined;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-image-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,fe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ne],encapsulation:2})}return n})();var Ce=["bookingForm"],ve=["datepicker"],le=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];travelOptions=[{label:"Nova york",value:"https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{label:"B\xE9lgica",value:"https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{label:"Madrid",value:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-travel"]],viewQuery:function(a,i){if(a&1&&ql(Ce,7)(ve,7),a&2){let d;lo(d=uo())&&(i.form=d.first),lo(d=uo())&&(i.datepickerComponent=d.first);}},standalone:false,decls:17,vars:11,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],[1,"po-md-3"],["p-height","150",3,"p-src"],[1,"po-md-9"],["name","destinations","p-label","Destinos",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"]],template:function(a,i){if(a&1){let d=wx();Sl(0,"div",2)(1,"div",3),eN(2,"Choosing a trip"),og()(),Sl(3,"div",4)(4,"div",5),Wl(5,"po-image",6),og(),Sl(6,"div",7)(7,"form",null,0)(9,"div",4)(10,"po-select",8),ww("ngModelChange",function(l){return Ky(d),nN(i.destinations,l)||(i.destinations=l),Xy(l)}),og(),e0(),Sl(11,"po-select",9),ww("ngModelChange",function(l){return Ky(d),nN(i.children,l)||(i.children=l),Xy(l)}),og(),e0(),Sl(12,"po-select",10),ww("ngModelChange",function(l){return Ky(d),nN(i.adults,l)||(i.adults=l),Xy(l)}),og(),e0(),og(),Sl(13,"div",4)(14,"po-datepicker",11,1),ww("ngModelChange",function(l){return Ky(d),nN(i.checkin,l)||(i.checkin=l),Xy(l)}),og(),e0(),Sl(16,"po-datepicker",12),ww("ngModelChange",function(l){return Ky(d),nN(i.checkout,l)||(i.checkout=l),Xy(l)}),og(),e0(),og()()()();}a&2&&(Lp(5),nw("p-src",i.destinations),Lp(5),Ew("ngModel",i.destinations),nw("p-options",i.travelOptions),n0(),Lp(),Ew("ngModel",i.children),nw("p-options",i.childrenOptions),n0(),Lp(),Ew("ngModel",i.adults),nw("p-options",i.adultsOptions),n0(),Lp(2),Ew("ngModel",i.checkin),nw("p-max-date",i.checkout),n0(),Lp(2),Ew("ngModel",i.checkout),nw("p-min-date",i.checkin),n0());},dependencies:[Z9,G9,q9,_k,mk,Pde,Hhe,eme],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Image Travel"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-image-travel/sample-po-image-travel.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-text-center">
  <div class="po-font-title">Choosing a trip</div>
</div>

<div class="po-row">
  <div class="po-md-3">
    <po-image [p-src]="destinations" p-height="150"> </po-image>
  </div>

  <div class="po-md-9">
    <form #bookingForm="ngForm">
      <div class="po-row">
        <po-select
          class="po-md-4"
          name="destinations"
          [(ngModel)]="destinations"
          p-label="Destinos"
          [p-options]="travelOptions"
        >
        </po-select>

        <po-select
          class="po-md-4"
          name="children"
          [(ngModel)]="children"
          p-label="Children"
          [p-options]="childrenOptions"
        >
        </po-select>

        <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
        </po-select>
      </div>

      <div class="po-row">
        <po-datepicker
          #datepicker
          class="po-md-4"
          name="checkin"
          [(ngModel)]="checkin"
          p-label="Check In"
          p-placeholder="dd/mm/yyyy"
          p-required
          [p-max-date]="checkout"
        >
        </po-datepicker>

        <po-datepicker
          class="po-md-4"
          name="checkout"
          [(ngModel)]="checkout"
          p-label="Check Out"
          p-placeholder="dd/mm/yyyy"
          p-required
          [p-min-date]="checkin"
        >
        </po-datepicker>
      </div>
    </form>
  </div>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-image-travel/sample-po-image-travel.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-image-travel',
  templateUrl: './sample-po-image-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageTravelComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  destinations: string =
    'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly travelOptions: Array<PoSelectOption> = [
    {
      label: 'Nova york',
      value:
        'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      label: 'B\xE9lgica',
      value:
        'https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      label: 'Madrid',
      value:
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ];

  constructor() {}

  restore() {
    this.adults = 1;
    this.children = 0;
    this.checkin = undefined;
    this.checkout = undefined;
    this.destinations =
      'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-image-travel"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,le],encapsulation:2})}return n})();var pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-image-doc"]],standalone:false,decls:181,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoImageLoading"],["pan","",1,"docs-api-property-type","boolean"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoImageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente po-image"),og()(),Sl(7,"h3",3),eN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoImageComponent"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"As imagens t\xEAm a fun\xE7\xE3o de traduzir visualmente ideias espec\xEDficas ou mensagens complexas, mostrar um produto ou contar uma hist\xF3ria, estabelecendo empatia e se conectando com os usu\xE1rios."),og(),Sl(15,"h4"),eN(16,"Boas Pr\xE1ticas"),og(),Sl(17,"p"),eN(18,"O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xFAdo Web (WCAG) 2.1. Tamb\xE9m foram estruturadas padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia para os usu\xE1rios. Por isso, \xE9 muito importante que, ao aplicar esse componente, o propriet\xE1rio do conte\xFAdo leve em considera\xE7\xE3o alguns crit\xE9rios e pr\xE1ticas:"),og(),Sl(19,"h5"),eN(20,"Uso"),og(),Sl(21,"ul")(22,"li"),eN(23,"Ao utilizar imagens, mantenha uma coer\xEAncia entre elas no produto, de modo que compartilhem um mesmo estilo e inten\xE7\xE3o entre si."),og(),Sl(24,"li"),eN(25,"Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca."),og(),Sl(26,"li"),eN(27,"Ao utilizar fotografias, \xE9 recomend\xE1vel o uso de propor\xE7\xF5es de aspecto padr\xE3o, como 1:1, 3:1, 3:2, 16:9."),og(),Sl(28,"li"),eN(29,"Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportar\xE1 em diferentes formatos. Isso tamb\xE9m ajuda a transmitir a mensagem de forma objetiva e consistente."),og()(),Sl(30,"h5"),eN(31,"Imagem como plano de fundo"),og(),Sl(32,"ul")(33,"li"),eN(34,"Avalie se \xE9 realmente necess\xE1rio o uso de imagem como plano de fundo e evite sempre que poss\xEDvel, pois pode ocasionar em um baixo contraste entre texto e imagem."),og(),Sl(35,"li"),eN(36,"Caso utilize, redobre a aten\xE7\xE3o na escolha da imagem e certifique-se de que ela est\xE1 adequada para a leitura do texto e n\xE3o est\xE1 sendo apenas um ru\xEDdo."),og(),Sl(37,"li"),eN(38,"Tenha especial aten\xE7\xE3o em telas menores. Embora seja poss\xEDvel posicionar o texto em uma \xE1rea mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espa\xE7os, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualiza\xE7\xE3o da imagem."),og(),Sl(39,"li"),eN(40,"Verifique a taxa de contraste do texto em rela\xE7\xE3o ao fundo. Deve ser suficiente para atender aos padr\xF5es de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt."),og(),Sl(41,"li"),eN(42,"Se n\xE3o tiver controle sobre qual imagem ser\xE1 colocada por tr\xE1s do texto, o recomendado \xE9 n\xE3o utilizar nesse formato."),og()(),Sl(43,"h4"),eN(44,"Acessibilidade tratada no componente"),og(),Sl(45,"p"),eN(46,"As boas pr\xE1ticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:"),og(),Sl(47,"ul")(48,"li"),eN(49,"Imagem informativa simples, como por exemplo uma fotografia de um produto."),og(),Sl(50,"li"),eN(51,"Imagem complexa, como um gr\xE1fico, infogr\xE1fico ou diagrama."),og(),Sl(52,"li"),eN(53,"Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas n\xE3o \xE9 essencial para compreender a informa\xE7\xE3o."),og()()(),Sl(54,"div",6)(55,"h4",7),eN(56,"Seletor"),og(),Sl(57,"pre",8),eN(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),og()(),Sl(59,"h4",9),eN(60,"Propriedades"),og(),Sl(61,"table",10)(62,"tr",11)(63,"th",12),eN(64,"Nome"),og(),Sl(65,"th",12),eN(66,"Tipo"),og(),Sl(67,"th",12),eN(68,"Padr\xE3o"),og(),Sl(69,"th",12),eN(70,"Descri\xE7\xE3o"),og()(),Sl(71,"tr",13)(72,"td",14)(73,"div",15)(74,"span",16),eN(75," p-alt"),Wl(76,"br"),og()()(),Sl(77,"td",17)(78,"code",18),eN(79,"string"),og()(),Sl(80,"td",19),eN(81,"-"),og(),Sl(82,"td",20)(83,"em")(84,"strong"),eN(85,"(opcional)"),og()(),Sl(86,"p"),eN(87,"Defini o texto alternativo descrevendo a imagem."),og()()(),Sl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),eN(92," p-height"),Wl(93,"br"),og()()(),Sl(94,"td",17)(95,"code",21),eN(96,"number"),og()(),Sl(97,"td",19),eN(98,"-"),og(),Sl(99,"td",20)(100,"em")(101,"strong"),eN(102,"(opcional)"),og()(),Sl(103,"p"),eN(104,"Define a altura da imagem em "),Sl(105,"em"),eN(106,"pixels"),og(),eN(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),og()()(),Sl(108,"tr",13)(109,"td",14)(110,"div",15)(111,"span",16),eN(112," p-loading"),Wl(113,"br"),og()()(),Sl(114,"td",17)(115,"code",22),eN(116,"PoImageLoading"),og()(),Sl(117,"td",19),eN(118,"-"),og(),Sl(119,"td",20)(120,"em")(121,"strong"),eN(122,"(opcional)"),og()(),Sl(123,"p"),eN(124,"Defini o carregamento que pode ser dos tipo:"),og(),Sl(125,"p"),eN(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),og(),Sl(127,"blockquote")(128,"p"),eN(129,"N\xE3o \xE9 permitido definir esta propriedade em conjunto com a propriedade "),Sl(130,"code"),eN(131,"p-priority"),og(),eN(132,"."),og()()()(),Sl(133,"tr",13)(134,"td",14)(135,"div",15)(136,"span",16),eN(137," p-priority"),Wl(138,"br"),og()()(),Sl(139,"td",17)(140,"code",23),eN(141,"boolean"),og()(),Sl(142,"td",19)(143,"p")(144,"code"),eN(145,"false"),og()()(),Sl(146,"td",20)(147,"em")(148,"strong"),eN(149,"(opcional)"),og()(),Sl(150,"p"),eN(151,"Defini a prioridade de carregamento da imagem."),og(),Sl(152,"blockquote")(153,"p"),eN(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),og()(),Sl(155,"pre")(156,"code"),eN(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),og()()()(),Sl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),eN(162," p-src"),Wl(163,"br"),og()()(),Sl(164,"td",17)(165,"code",18),eN(166,"string"),og()(),Sl(167,"td",19),eN(168,"-"),og(),Sl(169,"td",20)(170,"em")(171,"strong"),eN(172,"(opcional)"),og()(),Sl(173,"p"),eN(174,"Fonte da imagem que pode ser um caminho local ("),Sl(175,"code"),eN(176,"./assets/images/logo-black-small.png"),og(),eN(177,`)
ou um servidor externo (`),Sl(178,"code"),eN(179,"https://po-ui.io/assets/images/logo-black-small.png"),og(),eN(180,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var re=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Image",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-image-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-image-basic-view")(6,"sample-po-image-labs-view")(7,"sample-po-image-travel-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,ie,ae,me,pe],encapsulation:2})}return n})();var we=[{path:"",component:re}],se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[hL.forChild(we),hL]})}return n})();var Qe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue({imports:[sr,se]})}return n})();
export{Qe as DocPoImageModule};