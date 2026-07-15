import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,df as ime,F as Wl,O as rw,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,aB as Ix,aM as Cw,aN as n0,aO as ww,aP as i0,bD as Mde,aJ as Whe,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var te=(()=>{class i{srcImage="https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg";static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-basic"]],standalone:false,decls:1,vars:1,consts:[["p-alt","teste de imagem","p-height","300",3,"p-src"]],template:function(a,n){a&1&&Wl(0,"po-image",0),a&2&&rw("p-src",n.srcImage);},dependencies:[ime],encapsulation:2,changeDetection:1})}return i})();var ce=i=>({"docs-sample-code-tabs":i}),ne=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Image Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-image-basic/sample-po-image-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-image-basic/sample-po-image-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-image-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ce,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,te],encapsulation:2,changeDetection:1})}return i})();var ie=(()=>{class i{alt;height;src;ngOnInit(){this.restore();}restore(){this.alt=void 0,this.height="auto",this.src=void 0;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-labs"]],standalone:false,decls:11,vars:6,consts:[["f","ngForm"],[3,"p-src","p-alt","p-height"],[1,"po-row"],["name","src","p-clean","","p-label","Source","p-help","Enter a url or path of the image that will be displayed",1,"po-md-6",3,"ngModelChange","ngModel"],["name","alt","p-clean","","p-label","Alternate","p-help","Alternative text for image description. Ex.: Po Ui logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let d=Ix();Wl(0,"po-image",1)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",2)(5,"po-input",3),Cw("ngModelChange",function(l){return Ky(d),oN(n.src,l)||(n.src=l),Xy(l)}),og(),n0(),Sl(6,"po-input",4),Cw("ngModelChange",function(l){return Ky(d),oN(n.alt,l)||(n.alt=l),Xy(l)}),og(),n0(),Sl(7,"po-input",5),Cw("ngModelChange",function(l){return Ky(d),oN(n.height,l)||(n.height=l),Xy(l)}),og(),n0(),og(),Wl(8,"po-divider"),Sl(9,"div",2)(10,"po-button",6),ft("p-click",function(){return n.restore()}),og()()();}a&2&&(rw("p-src",n.src)("p-alt",n.alt)("p-height",n.height),Lp(5),ww("ngModel",n.src),i0(),Lp(),ww("ngModel",n.alt),i0(),Lp(),ww("ngModel",n.height),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,L3,ime],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Image Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-image-labs/sample-po-image-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-image-labs/sample-po-image-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-image-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,fe,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ie],encapsulation:2,changeDetection:1})}return i})();var Ce=["bookingForm"],Se=["datepicker"],le=(()=>{class i{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];travelOptions=[{label:"Nova york",value:"https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{label:"B\xE9lgica",value:"https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{label:"Madrid",value:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-travel"]],viewQuery:function(a,n){if(a&1&&ql(Ce,7)(Se,7),a&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.datepickerComponent=d.first);}},standalone:false,decls:17,vars:11,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],[1,"po-md-3"],["p-height","150",3,"p-src"],[1,"po-md-9"],["name","destinations","p-label","Destinos",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"]],template:function(a,n){if(a&1){let d=Ix();Sl(0,"div",2)(1,"div",3),rN(2,"Choosing a trip"),og()(),Sl(3,"div",4)(4,"div",5),Wl(5,"po-image",6),og(),Sl(6,"div",7)(7,"form",null,0)(9,"div",4)(10,"po-select",8),Cw("ngModelChange",function(l){return Ky(d),oN(n.destinations,l)||(n.destinations=l),Xy(l)}),og(),n0(),Sl(11,"po-select",9),Cw("ngModelChange",function(l){return Ky(d),oN(n.children,l)||(n.children=l),Xy(l)}),og(),n0(),Sl(12,"po-select",10),Cw("ngModelChange",function(l){return Ky(d),oN(n.adults,l)||(n.adults=l),Xy(l)}),og(),n0(),og(),Sl(13,"div",4)(14,"po-datepicker",11,1),Cw("ngModelChange",function(l){return Ky(d),oN(n.checkin,l)||(n.checkin=l),Xy(l)}),og(),n0(),Sl(16,"po-datepicker",12),Cw("ngModelChange",function(l){return Ky(d),oN(n.checkout,l)||(n.checkout=l),Xy(l)}),og(),n0(),og()()()();}a&2&&(Lp(5),rw("p-src",n.destinations),Lp(5),ww("ngModel",n.destinations),rw("p-options",n.travelOptions),i0(),Lp(),ww("ngModel",n.children),rw("p-options",n.childrenOptions),i0(),Lp(),ww("ngModel",n.adults),rw("p-options",n.adultsOptions),i0(),Lp(2),ww("ngModel",n.checkin),rw("p-max-date",n.checkout),i0(),Lp(2),ww("ngModel",n.checkout),rw("p-min-date",n.checkin),i0());},dependencies:[Q9,Z9,K9,wk,_k,Mde,Whe,ime],encapsulation:2,changeDetection:1})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Image Travel"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-image-travel/sample-po-image-travel.component.html"),og(),Sl(13,"pre",7),rN(14,`<div class="po-text-center">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-image-travel/sample-po-image-travel.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-image-travel"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ee,n.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-image-doc"]],standalone:false,decls:181,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoImageLoading"],["pan","",1,"docs-api-property-type","boolean"]],template:function(a,n){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoImageModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente po-image"),og()(),Sl(7,"h3",3),rN(8,"Componente"),og(),Sl(9,"h4",4)(10,"code",5),rN(11,"PoImageComponent"),og()(),Sl(12,"div",2)(13,"p"),rN(14,"As imagens t\xEAm a fun\xE7\xE3o de traduzir visualmente ideias espec\xEDficas ou mensagens complexas, mostrar um produto ou contar uma hist\xF3ria, estabelecendo empatia e se conectando com os usu\xE1rios."),og(),Sl(15,"h4"),rN(16,"Boas Pr\xE1ticas"),og(),Sl(17,"p"),rN(18,"O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xFAdo Web (WCAG) 2.1. Tamb\xE9m foram estruturadas padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia para os usu\xE1rios. Por isso, \xE9 muito importante que, ao aplicar esse componente, o propriet\xE1rio do conte\xFAdo leve em considera\xE7\xE3o alguns crit\xE9rios e pr\xE1ticas:"),og(),Sl(19,"h5"),rN(20,"Uso"),og(),Sl(21,"ul")(22,"li"),rN(23,"Ao utilizar imagens, mantenha uma coer\xEAncia entre elas no produto, de modo que compartilhem um mesmo estilo e inten\xE7\xE3o entre si."),og(),Sl(24,"li"),rN(25,"Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca."),og(),Sl(26,"li"),rN(27,"Ao utilizar fotografias, \xE9 recomend\xE1vel o uso de propor\xE7\xF5es de aspecto padr\xE3o, como 1:1, 3:1, 3:2, 16:9."),og(),Sl(28,"li"),rN(29,"Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportar\xE1 em diferentes formatos. Isso tamb\xE9m ajuda a transmitir a mensagem de forma objetiva e consistente."),og()(),Sl(30,"h5"),rN(31,"Imagem como plano de fundo"),og(),Sl(32,"ul")(33,"li"),rN(34,"Avalie se \xE9 realmente necess\xE1rio o uso de imagem como plano de fundo e evite sempre que poss\xEDvel, pois pode ocasionar em um baixo contraste entre texto e imagem."),og(),Sl(35,"li"),rN(36,"Caso utilize, redobre a aten\xE7\xE3o na escolha da imagem e certifique-se de que ela est\xE1 adequada para a leitura do texto e n\xE3o est\xE1 sendo apenas um ru\xEDdo."),og(),Sl(37,"li"),rN(38,"Tenha especial aten\xE7\xE3o em telas menores. Embora seja poss\xEDvel posicionar o texto em uma \xE1rea mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espa\xE7os, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualiza\xE7\xE3o da imagem."),og(),Sl(39,"li"),rN(40,"Verifique a taxa de contraste do texto em rela\xE7\xE3o ao fundo. Deve ser suficiente para atender aos padr\xF5es de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt."),og(),Sl(41,"li"),rN(42,"Se n\xE3o tiver controle sobre qual imagem ser\xE1 colocada por tr\xE1s do texto, o recomendado \xE9 n\xE3o utilizar nesse formato."),og()(),Sl(43,"h4"),rN(44,"Acessibilidade tratada no componente"),og(),Sl(45,"p"),rN(46,"As boas pr\xE1ticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:"),og(),Sl(47,"ul")(48,"li"),rN(49,"Imagem informativa simples, como por exemplo uma fotografia de um produto."),og(),Sl(50,"li"),rN(51,"Imagem complexa, como um gr\xE1fico, infogr\xE1fico ou diagrama."),og(),Sl(52,"li"),rN(53,"Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas n\xE3o \xE9 essencial para compreender a informa\xE7\xE3o."),og()()(),Sl(54,"div",6)(55,"h4",7),rN(56,"Seletor"),og(),Sl(57,"pre",8),rN(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),og()(),Sl(59,"h4",9),rN(60,"Propriedades"),og(),Sl(61,"table",10)(62,"tr",11)(63,"th",12),rN(64,"Nome"),og(),Sl(65,"th",12),rN(66,"Tipo"),og(),Sl(67,"th",12),rN(68,"Padr\xE3o"),og(),Sl(69,"th",12),rN(70,"Descri\xE7\xE3o"),og()(),Sl(71,"tr",13)(72,"td",14)(73,"div",15)(74,"span",16),rN(75," p-alt"),Wl(76,"br"),og()()(),Sl(77,"td",17)(78,"code",18),rN(79,"string"),og()(),Sl(80,"td",19),rN(81,"-"),og(),Sl(82,"td",20)(83,"em")(84,"strong"),rN(85,"(opcional)"),og()(),Sl(86,"p"),rN(87,"Defini o texto alternativo descrevendo a imagem."),og()()(),Sl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),rN(92," p-height"),Wl(93,"br"),og()()(),Sl(94,"td",17)(95,"code",21),rN(96,"number"),og()(),Sl(97,"td",19),rN(98,"-"),og(),Sl(99,"td",20)(100,"em")(101,"strong"),rN(102,"(opcional)"),og()(),Sl(103,"p"),rN(104,"Define a altura da imagem em "),Sl(105,"em"),rN(106,"pixels"),og(),rN(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),og()()(),Sl(108,"tr",13)(109,"td",14)(110,"div",15)(111,"span",16),rN(112," p-loading"),Wl(113,"br"),og()()(),Sl(114,"td",17)(115,"code",22),rN(116,"PoImageLoading"),og()(),Sl(117,"td",19),rN(118,"-"),og(),Sl(119,"td",20)(120,"em")(121,"strong"),rN(122,"(opcional)"),og()(),Sl(123,"p"),rN(124,"Defini o carregamento que pode ser dos tipo:"),og(),Sl(125,"p"),rN(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),og(),Sl(127,"blockquote")(128,"p"),rN(129,"N\xE3o \xE9 permitido definir esta propriedade em conjunto com a propriedade "),Sl(130,"code"),rN(131,"p-priority"),og(),rN(132,"."),og()()()(),Sl(133,"tr",13)(134,"td",14)(135,"div",15)(136,"span",16),rN(137," p-priority"),Wl(138,"br"),og()()(),Sl(139,"td",17)(140,"code",23),rN(141,"boolean"),og()(),Sl(142,"td",19)(143,"p")(144,"code"),rN(145,"false"),og()()(),Sl(146,"td",20)(147,"em")(148,"strong"),rN(149,"(opcional)"),og()(),Sl(150,"p"),rN(151,"Defini a prioridade de carregamento da imagem."),og(),Sl(152,"blockquote")(153,"p"),rN(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),og()(),Sl(155,"pre")(156,"code"),rN(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),og()()()(),Sl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),rN(162," p-src"),Wl(163,"br"),og()()(),Sl(164,"td",17)(165,"code",18),rN(166,"string"),og()(),Sl(167,"td",19),rN(168,"-"),og(),Sl(169,"td",20)(170,"em")(171,"strong"),rN(172,"(opcional)"),og()(),Sl(173,"p"),rN(174,"Fonte da imagem que pode ser um caminho local ("),Sl(175,"code"),rN(176,"./assets/images/logo-black-small.png"),og(),rN(177,`)
ou um servidor externo (`),Sl(178,"code"),rN(179,"https://po-ui.io/assets/images/logo-black-small.png"),og(),rN(180,")."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var re=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Image",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-image-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-image-basic-view")(6,"sample-po-image-labs-view")(7,"sample-po-image-travel-view"),og()()()),a&2&&(rw("p-actions",n.actions),Lp(2),rw("p-active",n.activeTab==="doc"),Lp(2),rw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,ne,ae,me,pe],encapsulation:2,changeDetection:1})}return i})();var we=[{path:"",component:re}],se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue({imports:[mL.forChild(we),mL]})}return i})();var Qe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue({imports:[sr,se]})}return i})();
export{Qe as DocPoImageModule};