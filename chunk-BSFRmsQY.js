import {f as fe,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,a_ as spe,a$ as i3,C as Sl,y as rN,J as og,an as SO,aH as Ka,b8 as Ume,b9 as $me,F as Wl,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aF as Z9,aG as wk,b0 as Qt,b1 as mv,b2 as Xhe,c4 as b3,b4 as L3,c8 as Tde,aB as Ix,aQ as yx,aR as vx,aM as Cw,aN as n0,bd as kx,aS as _x,aO as ww,aP as i0,a3 as sNe,av as ql,aw as lo,ax as uo,aD as Ky,aT as oN,aE as Xy}from'./main-TVDUJ47Y.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(Sl(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),rN(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),og()(),Sl(4,"po-accordion-item",2)(5,"p",1),rN(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),og()()());},dependencies:[spe,i3],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Accordion Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,be,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ae],encapsulation:2,changeDetection:1})}return n})();function Se(n,H){if(n&1&&(Sl(0,"po-accordion-item",2),rN(1),og()),n&2){let l=H.$implicit,a=H.$index;rw("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Lp(),dg(" Accordion Item Content ",a," ");}}var de=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Ix();Sl(0,"po-accordion",1),yx(1,Se,2,5,"po-accordion-item",2,vx),og(),Wl(3,"po-divider",3),Sl(4,"div",4)(5,"po-input",5),Cw("ngModelChange",function(c){return Ky(m),oN(i.literals,c)||(i.literals=c),Xy(c)}),ft("p-change",function(){return i.changeLiterals()}),og(),n0(),Sl(6,"po-checkbox-group",6),Cw("ngModelChange",function(c){return Ky(m),oN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Xy(c)}),og(),n0(),og(),Wl(7,"po-divider",7)(8,"po-dynamic-form",8,0),Sl(10,"div",9)(11,"po-radio-group",10),Cw("ngModelChange",function(c){return Ky(m),oN(i.typeTag,c)||(i.typeTag=c),Xy(c)}),og(),n0(),Sl(12,"po-checkbox-group",11),Cw("ngModelChange",function(c){return Ky(m),oN(i.disabledItem,c)||(i.disabledItem=c),Xy(c)}),og(),n0(),og(),Sl(13,"div",12)(14,"po-radio-group",13),Cw("ngModelChange",function(c){return Ky(m),oN(i.size,c)||(i.size=c),Xy(c)}),og(),n0(),Sl(15,"po-button",14),ft("p-click",function(){Ky(m);let c=kx(9);return i.addAccordionItem(c.form.value),Xy(c.form.reset())}),og()(),Sl(16,"div",15)(17,"po-button",16),ft("p-click",function(){return i.restore()}),og()();}if(a&2){let m=kx(9);rw("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Lp(),_x(i.accordionItems),Lp(4),ww("ngModel",i.literals),i0(),Lp(),ww("ngModel",i.propertiesAccordion),rw("p-options",i.propertiesAccordionOptions),i0(),Lp(2),rw("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Lp(3),rw("p-options",i.typeTagOptions),ww("ngModel",i.typeTag),i0(),Lp(),rw("p-options",i.disabledOption),ww("ngModel",i.disabledItem),i0(),Lp(2),ww("ngModel",i.size),rw("p-options",i.sizeOptions),i0(),Lp(),rw("p-disabled",m.form.invalid);}},dependencies:[Z9,wk,spe,i3,Qt,mv,Xhe,b3,L3,Tde],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Accordion Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-accordion
  [p-literals]="customLiterals"
  [p-show-manager-accordion]="propertiesAccordion.includes('showManager')"
  [p-allow-expand-all-items]="propertiesAccordion.includes('expandItems')"
  [p-size]="size"
>
  @for (accordionItem of accordionItems; track accordionItem; let i = $index) {
    <po-accordion-item
      [p-label]="accordionItem.label"
      [p-disabled]="accordionItem.disabledItem"
      [p-label-tag]="accordionItem.labelTag"
      [p-type-tag]="accordionItem.typeTag"
    >
      Accordion Item Content { { i }}
    </po-accordion-item>
  }
</po-accordion>

<po-divider p-label="ACCORDION"></po-divider>
<div class="po-row po-mt-1 po-mb-1">
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"closeAllItems": "Fechar itens"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>
  <po-checkbox-group
    class="po-md-6"
    name="propertiesAccordion"
    [(ngModel)]="propertiesAccordion"
    p-label="Properties Accordion"
    [p-options]="propertiesAccordionOptions"
  >
  </po-checkbox-group>
</div>

<po-divider p-label="ACCORDION ITEM"></po-divider>
<po-dynamic-form #accordionForm [p-fields]="accordionFieldsForm" [p-value]="accordionItems"> </po-dynamic-form>

<div class="po-row po-mt-2 po-mb-2">
  <po-radio-group class="po-md-6" p-label="Type Tag" [p-options]="typeTagOptions" [(ngModel)]="typeTag">
  </po-radio-group>
  <po-checkbox-group
    class="po-md-6"
    p-label="Properties Accordion Item"
    name="disabledItem"
    [p-options]="disabledOption"
    [(ngModel)]="disabledItem"
  >
  </po-checkbox-group>
</div>

<div class="po-row po-mt-1">
  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>
  <po-button
    class="po-md-6"
    p-label="Add Accordion"
    [p-disabled]="accordionForm.form.invalid"
    (p-click)="addAccordionItem(accordionForm.form.value); accordionForm.form.reset()"
  >
  </po-button>
</div>

<div class="po-row po-mt-2">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoAccordionItemComponent,
  PoAccordionLiterals,
  PoCheckboxGroupOption,
  PoDynamicFormField,
  PoRadioGroupOption,
  PoTagType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-labs',
  templateUrl: './sample-po-accordion-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionLabsComponent implements OnInit {
  accordionFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', required: true, gridColumns: 6 },
    { property: 'labelTag', label: 'Label Tag', gridColumns: 6 }
  ];

  propertiesAccordionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showManager', label: 'Show Accordion Manager' },
    { value: 'expandItems', label: 'Allow Expand All Items' }
  ];

  typeTagOptions: Array<PoRadioGroupOption> = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  disabledOption: Array<PoRadioGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  properties: Array<string> = [];
  propertiesAccordion: Array<string> = [];
  disabledItem: Array<string> = [];
  accordionItemIndex: number;
  customLiterals: PoAccordionLiterals;
  literals: string;
  typeTag: PoTagType;
  accordionItems: Array<PoAccordionItemComponent> = [];
  size: string;

  ngOnInit() {
    this.restore();
  }

  addAccordionItem(accordionItem: PoAccordionItemComponent) {
    accordionItem.disabledItem = this.disabledItem.includes('disabled');
    if (accordionItem.labelTag) {
      accordionItem.typeTag = this.typeTag;
    }
    const newAccordionItem = Object.assign({}, accordionItem, { value: this.accordionItems.length });

    this.accordionItems = [...this.accordionItems, newAccordionItem];
    this.disabledItem = [];
    this.typeTag = undefined;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.accordionItems = [];
    this.customLiterals = undefined;
    this.disabledItem = [];
    this.literals = '';
    this.properties = [];
    this.propertiesAccordion = [];
    this.typeTag = undefined;
    this.size = 'medium';
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,xe,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&ql(i3,7),a&2){let m;lo(m=uo())&&(i.questionOne=m.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",1)(1,"p",2),rN(2,"You don't have to be afraid of being a blood donor!"),og(),Sl(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),rN(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),og()(),Sl(8,"po-accordion-item",6)(9,"p",5),rN(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),og()(),Sl(11,"po-accordion-item",7)(12,"p",5),rN(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),og()(),Sl(14,"po-accordion-item",8)(15,"p",5),rN(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),og()()(),Sl(17,"p",9),rN(18," For more information, see the "),Sl(19,"a",10),rN(20,"Hemosc FAQ"),og(),rN(21,". "),og()()),a&2&&(Lp(3),rw("p-show-manager-accordion",true));},dependencies:[spe,i3,sNe],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Accordion - FAQs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-page-default p-title="Blood donation FAQs">
  <p class="po-pb-2 po-text-color-neutral-dark-40">You don't have to be afraid of being a blood donor!</p>

  <po-accordion [p-show-manager-accordion]="true">
    <po-accordion-item p-label="Who can donate?" #questionOne>
      <p class="po-text-color-neutral-dark-40">
        In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance
        with current legislation and a number of factors that take into account the risk that such a donation may pose
        to the health of the candidate himself and to the health of the individual receiving the donated blood.
      </p>
    </po-accordion-item>

    <po-accordion-item
      p-label="How long does it take for the blood to be processed?"
      p-label-tag="Important!"
      p-type-tag="danger"
    >
      <p class="po-text-color-neutral-dark-40">
        Blood is processed as soon as collected, preferably within 6 hours of donation.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="How long does the body take to replenish donated blood?">
      <p class="po-text-color-neutral-dark-40">
        Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of
        childbearing age.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="Is donating blood safe?">
      <p class="po-text-color-neutral-dark-40">
        Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there
        is a small risk that the donor may feel unwell during or shortly after the donation especially the first few
        times he or she donates, but the services are concerned about this, watching and making sure the donors feel
        nothing or feel feel so that they are well assisted until full recovery.
      </p>
    </po-accordion-item>
  </po-accordion>

  <p class="po-pt-2 po-text-color-neutral-dark-40">
    For more information, see the <a href="http://www.hemosc.org.br/perguntas-frequentes.html">Hemosc FAQ</a>.
  </p>
</po-page-default>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-faq',
  templateUrl: './sample-po-accordion-faq.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionFaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-faq"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ye,i.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,pe],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do componente "),Sl(7,"code"),rN(8,"po-accordion"),og(),rN(9,"."),og()(),Sl(10,"h3",3),rN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),rN(14,"PoAccordionComponent"),og()(),Sl(15,"div",2)(16,"p"),rN(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),og(),Sl(18,"p"),rN(19,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),Sl(20,"a",6)(21,"code"),rN(22,"po-accordion-item"),og()(),rN(23,`,
como no exemplo abaixo:`),og(),Sl(24,"pre")(25,"code"),rN(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),og()(),Sl(27,"p"),rN(28,"e no typescript pode-se utilizar o "),Sl(29,"code"),rN(30,"@ViewChild"),og(),rN(31,":"),og(),Sl(32,"pre")(33,"code"),rN(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),og()(),Sl(35,"p"),rN(36,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),og(),Sl(37,"p"),rN(38,"Caso houver a necessidade de abrir algum dos "),Sl(39,"code"),rN(40,"po-accordion-item"),og(),rN(41,` via Typescript
acesse a `),Sl(42,"a",6),rN(43,"documenta\xE7\xE3o do PoAccordionItem"),og(),rN(44,"."),og(),Sl(45,"h4"),rN(46,"Tokens customiz\xE1veis"),og(),Sl(47,"p"),rN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(49,"blockquote")(50,"p"),rN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(52,"a",7),rN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(54,"."),og()(),Sl(55,"table")(56,"thead")(57,"tr")(58,"th"),rN(59,"Propriedade"),og(),Sl(60,"th"),rN(61,"Descri\xE7\xE3o"),og(),Sl(62,"th"),rN(63,"Valor Padr\xE3o"),og()()(),Sl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),rN(68,"Default Values"),og()(),Wl(69,"td")(70,"td"),og(),Sl(71,"tr")(72,"td")(73,"code"),rN(74,"--font-family"),og()(),Sl(75,"td"),rN(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(77,"td")(78,"code"),rN(79,"var(--font-family-theme)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),rN(83,"--font-size"),og()(),Sl(84,"td"),rN(85,"Tamanho da fonte"),og(),Sl(86,"td")(87,"code"),rN(88,"var(--font-size-default)"),og()()(),Sl(89,"tr")(90,"td")(91,"code"),rN(92,"--color"),og()(),Sl(93,"td"),rN(94,"Cor principal do accordion"),og(),Sl(95,"td")(96,"code"),rN(97,"var(--color-action-default)"),og()()(),Sl(98,"tr")(99,"td")(100,"code"),rN(101,"--background-color"),og()(),Sl(102,"td"),rN(103,"Cor de background"),og(),Sl(104,"td")(105,"code"),rN(106,"var(--color-neutral-light-00)"),og()()(),Sl(107,"tr")(108,"td")(109,"code"),rN(110,"--font-weight"),og()(),Sl(111,"td"),rN(112,"Peso da fonte"),og(),Sl(113,"td")(114,"code"),rN(115,"var(--font-weight-bold)"),og()()(),Sl(116,"tr")(117,"td")(118,"strong"),rN(119,"Hover"),og()(),Wl(120,"td")(121,"td"),og(),Sl(122,"tr")(123,"td")(124,"code"),rN(125,"--color-hover"),og()(),Sl(126,"td"),rN(127,"Cor principal no estado hover"),og(),Sl(128,"td")(129,"code"),rN(130,"var(--color-action-hover)"),og()()(),Sl(131,"tr")(132,"td")(133,"code"),rN(134,"--background-hover"),og()(),Sl(135,"td"),rN(136,"Cor de background no estado hover"),og(),Sl(137,"td")(138,"code"),rN(139,"var(--color-brand-01-lightest)"),og()()(),Sl(140,"tr")(141,"td")(142,"strong"),rN(143,"Focused"),og()(),Wl(144,"td")(145,"td"),og(),Sl(146,"tr")(147,"td")(148,"code"),rN(149,"--color-focused"),og()(),Sl(150,"td"),rN(151,"Cor principal no estado de focus"),og(),Sl(152,"td")(153,"code"),rN(154,"var(--color-action-focus)"),og()()(),Sl(155,"tr")(156,"td")(157,"code"),rN(158,"--outline-color-focused"),og(),rN(159," \xA0"),og(),Sl(160,"td"),rN(161,"Cor do outline do estado de focus"),og(),Sl(162,"td")(163,"code"),rN(164,"var(--color-action-focus)"),og()()(),Sl(165,"tr")(166,"td")(167,"strong"),rN(168,"Disabled"),og()(),Wl(169,"td")(170,"td"),og(),Sl(171,"tr")(172,"td")(173,"code"),rN(174,"--color-disabled"),og()(),Sl(175,"td"),rN(176,"Cor principal no estado disabled"),og(),Sl(177,"td")(178,"code"),rN(179,"var(--color-neutral-mid-60)"),og()()(),Sl(180,"tr")(181,"td")(182,"code"),rN(183,"--background-disabled"),og(),rN(184," \xA0"),og(),Sl(185,"td"),rN(186,"Cor de background no estado disabled"),og(),Sl(187,"td")(188,"code"),rN(189,"var(--color-neutral-light-10)"),og()()(),Sl(190,"tr")(191,"td")(192,"strong"),rN(193,"po-accordion-manager"),og()(),Wl(194,"td")(195,"td"),og(),Sl(196,"tr")(197,"td")(198,"code"),rN(199,"--background-color"),og()(),Sl(200,"td"),rN(201,"Cor de background"),og(),Sl(202,"td")(203,"code"),rN(204,"var(--color-neutral-mid-60)"),og()()(),Sl(205,"tr")(206,"td")(207,"code"),rN(208,"--color"),og()(),Sl(209,"td"),rN(210,"Cor principal do accordion manager"),og(),Sl(211,"td")(212,"code"),rN(213,"var(--color-neutral-light-10)"),og()()(),Sl(214,"tr")(215,"td")(216,"code"),rN(217,"--font-family"),og()(),Sl(218,"td"),rN(219,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(220,"td")(221,"code"),rN(222,"var(--color-neutral-light-10)"),og()()(),Sl(223,"tr")(224,"td")(225,"code"),rN(226,"--font-size"),og()(),Sl(227,"td"),rN(228,"Tamanho da fonte"),og(),Sl(229,"td")(230,"code"),rN(231,"var(--color-neutral-light-10)"),og()()(),Sl(232,"tr")(233,"td")(234,"code"),rN(235,"--font-weight"),og()(),Sl(236,"td"),rN(237,"Peso da fonte"),og(),Sl(238,"td")(239,"code"),rN(240,"var(--color-neutral-light-10)"),og()()(),Sl(241,"tr")(242,"td")(243,"strong"),rN(244,"Pressed"),og()(),Wl(245,"td")(246,"td"),og(),Sl(247,"tr")(248,"td")(249,"code"),rN(250,"--background-pressed"),og(),rN(251," \xA0"),og(),Sl(252,"td"),rN(253,"Cor de background no estado de pressionado\xA0"),og(),Sl(254,"td")(255,"code"),rN(256,"var(--color-brand-01-lighter)"),og()()(),Sl(257,"tr")(258,"td")(259,"code"),rN(260,"--color-pressed"),og()(),Sl(261,"td"),rN(262,"Cor principal no estado de pressionado"),og(),Sl(263,"td")(264,"code"),rN(265,"var(--color-action-pressed)"),og()()()()()(),Sl(266,"div",8)(267,"h4",9),rN(268,"Seletor"),og(),Sl(269,"pre",10),rN(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),og()(),Sl(271,"h4",11),rN(272,"Propriedades"),og(),Sl(273,"table",12)(274,"tr",13)(275,"th",14),rN(276,"Nome"),og(),Sl(277,"th",14),rN(278,"Tipo"),og(),Sl(279,"th",14),rN(280,"Padr\xE3o"),og(),Sl(281,"th",14),rN(282,"Descri\xE7\xE3o"),og()(),Sl(283,"tr",15)(284,"td",16)(285,"div",17)(286,"span",18),rN(287," p-allow-expand-all-items"),Wl(288,"br"),og()()(),Sl(289,"td",19)(290,"code",20),rN(291,"boolean"),og()(),Sl(292,"td",21)(293,"p")(294,"code"),rN(295,"false"),og()()(),Sl(296,"td",22)(297,"em")(298,"strong"),rN(299,"(opcional)"),og()(),Sl(300,"p"),rN(301,"Permite expandir mais de um "),Sl(302,"code"),rN(303,"<po-accordion-item></po-accordion-item>"),og(),rN(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Sl(305,"code"),rN(306,"p-show-manager-accordion"),og(),rN(307," esteja como "),Sl(308,"code"),rN(309,"true"),og(),rN(310,"."),og()()(),Sl(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),rN(315," (p-collapse-all)"),Wl(316,"br"),og()()(),Sl(317,"td",19)(318,"code",25),rN(319,"EventEmitter"),og()(),Sl(320,"td",21),rN(321,"-"),og(),Sl(322,"td",22)(323,"em")(324,"strong"),rN(325,"(opcional)"),og()(),Sl(326,"p"),rN(327,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Sl(328,"tr",15)(329,"td",16)(330,"div",23)(331,"span",24),rN(332," (p-expand-all)"),Wl(333,"br"),og()()(),Sl(334,"td",19)(335,"code",25),rN(336,"EventEmitter"),og()(),Sl(337,"td",21),rN(338,"-"),og(),Sl(339,"td",22)(340,"em")(341,"strong"),rN(342,"(opcional)"),og()(),Sl(343,"p"),rN(344,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Sl(345,"tr",15)(346,"td",16)(347,"div",17)(348,"span",18),rN(349," p-literals"),Wl(350,"br"),og()()(),Sl(351,"td",19)(352,"code",26),rN(353,"PoAccordionLiterals"),og()(),Sl(354,"td",21),rN(355,"-"),og(),Sl(356,"td",22)(357,"em")(358,"strong"),rN(359,"(opcional)"),og()(),Sl(360,"p"),rN(361,"Objeto com as literais usadas no "),Sl(362,"code"),rN(363,"po-accordion"),og(),rN(364,"."),og(),Sl(365,"p"),rN(366,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(367,"pre")(368,"code"),rN(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Sl(370,"p"),rN(371,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(372,"pre")(373,"code"),rN(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Sl(375,"p"),rN(376,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(377,"pre")(378,"code"),rN(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),og()(),Sl(380,"blockquote")(381,"p"),rN(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(383,"a",27)(384,"code"),rN(385,"PoI18nService"),og()(),rN(386," ou do browser."),og()()()(),Sl(387,"tr",15)(388,"td",16)(389,"div",17)(390,"span",18),rN(391," p-show-manager-accordion"),Wl(392,"br"),og()()(),Sl(393,"td",19)(394,"code",20),rN(395,"boolean"),og()(),Sl(396,"td",21)(397,"p")(398,"code"),rN(399,"false"),og()()(),Sl(400,"td",22)(401,"em")(402,"strong"),rN(403,"(opcional)"),og()(),Sl(404,"p"),rN(405,"Exibe o Gerenciador de Accordion."),og()()(),Sl(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),rN(410," p-size"),Wl(411,"br"),og()()(),Sl(412,"td",19)(413,"code",28),rN(414,"string"),og()(),Sl(415,"td",21)(416,"p")(417,"code"),rN(418,"medium"),og()()(),Sl(419,"td",22)(420,"em")(421,"strong"),rN(422,"(opcional)"),og()(),Sl(423,"p"),rN(424,"Define o tamanho do componente:"),og(),Sl(425,"ul")(426,"li")(427,"code"),rN(428,"small"),og(),rN(429,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(430,"li")(431,"code"),rN(432,"medium"),og(),rN(433,": altura de 44px."),og()(),Sl(434,"blockquote")(435,"p"),rN(436,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(437,"code"),rN(438,"medium"),og(),rN(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(440,"a",29),rN(441,"po-theme"),og(),rN(442,"."),og()()()()(),Sl(443,"h3",11),rN(444,"M\xE9todos"),og(),Sl(445,"table",30)(446,"tr",15)(447,"th",31)(448,"div",17)(449,"h4")(450,"span",18),rN(451," collapseAllItems "),og()()()()(),Sl(452,"tr",22)(453,"td",22)(454,"p"),rN(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Sl(456,"code"),rN(457,"p-show-manager-accordion"),og(),rN(458," estiver como "),Sl(459,"code"),rN(460,"true"),og(),rN(461,"."),og()()()(),Wl(462,"br"),Sl(463,"table",30)(464,"tr",15)(465,"th",31)(466,"div",17)(467,"h4")(468,"span",18),rN(469," expandAllItems "),og()()()()(),Sl(470,"tr",22)(471,"td",22)(472,"p"),rN(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Sl(474,"code"),rN(475,"p-show-manager-accordion"),og(),rN(476," estiver como "),Sl(477,"code"),rN(478,"true"),og(),rN(479,"."),og()()()(),Wl(480,"br"),Sl(481,"h3"),rN(482,"Interfaces"),og(),Sl(483,"h4",32)(484,"code",5),rN(485,"PoAccordionLiterals"),og()(),Sl(486,"div",2)(487,"p"),rN(488,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(489,"code"),rN(490,"po-accordion"),og(),rN(491,"."),og()(),Sl(492,"h4",11),rN(493,"Propriedades"),og(),Sl(494,"table",12)(495,"tr",13)(496,"th",14),rN(497,"Nome"),og(),Sl(498,"th",14),rN(499,"Tipo"),og(),Sl(500,"th",14),rN(501,"Descri\xE7\xE3o"),og()(),Sl(502,"tr",15)(503,"td",16)(504,"div",17)(505,"span",18),rN(506," closeAllItems"),Wl(507,"br"),og()()(),Sl(508,"td",19)(509,"code",28),rN(510,"string"),og()(),Sl(511,"td",22)(512,"em")(513,"strong"),rN(514,"(opcional)"),og()(),Sl(515,"p"),rN(516,"Label do gerenciador de Accordion para colapsar todos os itens"),og()()(),Sl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),rN(521," expandAllItems"),Wl(522,"br"),og()()(),Sl(523,"td",19)(524,"code",28),rN(525,"string"),og()(),Sl(526,"td",22)(527,"em")(528,"strong"),rN(529,"(opcional)"),og()(),Sl(530,"p"),rN(531,"Label do gerenciador de Accordion para expandir todos os itens."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-accordion-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),og()()()),a&2&&(rw("p-actions",i.actions),Lp(2),rw("p-active",i.activeTab==="doc"),Lp(2),rw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,le,ce,me,se],encapsulation:2,changeDetection:1})}return n})();var Pe=[{path:"",component:ue}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[mL.forChild(Pe),mL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[sr,he]})}return n})();export{Ze as DocPoAccordionModule};