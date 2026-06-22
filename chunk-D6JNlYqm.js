import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a_ as rpe,a$ as i3,F as Sl,z as eN,J as og,an as CO,aH as Ka,b8 as Bme,b9 as qme,H as Wl,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aF as G9,aG as _k,b0 as Qt,b1 as mv,b2 as Khe,c4 as b3,b4 as L3,c8 as wde,aB as wx,aQ as gx,aR as px,aM as ww,aN as e0,bd as Nx,aS as mx,aO as Ew,aP as n0,a3 as rNe,av as ql,aw as lo,ax as uo,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(Sl(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),eN(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),og()(),Sl(4,"po-accordion-item",2)(5,"p",1),eN(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),og()()());},dependencies:[rpe,i3],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Accordion Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ge,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ae],encapsulation:2})}return n})();function Se(n,H){if(n&1&&(Sl(0,"po-accordion-item",2),eN(1),og()),n&2){let l=H.$implicit,a=H.$index;nw("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Lp(),dg(" Accordion Item Content ",a," ");}}var de=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=wx();Sl(0,"po-accordion",1),gx(1,Se,2,5,"po-accordion-item",2,px),og(),Wl(3,"po-divider",3),Sl(4,"div",4)(5,"po-input",5),ww("ngModelChange",function(c){return Ky(m),nN(i.literals,c)||(i.literals=c),Xy(c)}),ft("p-change",function(){return i.changeLiterals()}),og(),e0(),Sl(6,"po-checkbox-group",6),ww("ngModelChange",function(c){return Ky(m),nN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Xy(c)}),og(),e0(),og(),Wl(7,"po-divider",7)(8,"po-dynamic-form",8,0),Sl(10,"div",9)(11,"po-radio-group",10),ww("ngModelChange",function(c){return Ky(m),nN(i.typeTag,c)||(i.typeTag=c),Xy(c)}),og(),e0(),Sl(12,"po-checkbox-group",11),ww("ngModelChange",function(c){return Ky(m),nN(i.disabledItem,c)||(i.disabledItem=c),Xy(c)}),og(),e0(),og(),Sl(13,"div",12)(14,"po-radio-group",13),ww("ngModelChange",function(c){return Ky(m),nN(i.size,c)||(i.size=c),Xy(c)}),og(),e0(),Sl(15,"po-button",14),ft("p-click",function(){Ky(m);let c=Nx(9);return i.addAccordionItem(c.form.value),Xy(c.form.reset())}),og()(),Sl(16,"div",15)(17,"po-button",16),ft("p-click",function(){return i.restore()}),og()();}if(a&2){let m=Nx(9);nw("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Lp(),mx(i.accordionItems),Lp(4),Ew("ngModel",i.literals),n0(),Lp(),Ew("ngModel",i.propertiesAccordion),nw("p-options",i.propertiesAccordionOptions),n0(),Lp(2),nw("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Lp(3),nw("p-options",i.typeTagOptions),Ew("ngModel",i.typeTag),n0(),Lp(),nw("p-options",i.disabledOption),Ew("ngModel",i.disabledItem),n0(),Lp(2),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0(),Lp(),nw("p-disabled",m.form.invalid);}},dependencies:[G9,_k,rpe,i3,Qt,mv,Khe,b3,L3,wde],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Accordion Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-accordion
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,xe,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&ql(i3,7),a&2){let m;lo(m=uo())&&(i.questionOne=m.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",1)(1,"p",2),eN(2,"You don't have to be afraid of being a blood donor!"),og(),Sl(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),eN(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),og()(),Sl(8,"po-accordion-item",6)(9,"p",5),eN(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),og()(),Sl(11,"po-accordion-item",7)(12,"p",5),eN(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),og()(),Sl(14,"po-accordion-item",8)(15,"p",5),eN(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),og()()(),Sl(17,"p",9),eN(18," For more information, see the "),Sl(19,"a",10),eN(20,"Hemosc FAQ"),og(),eN(21,". "),og()()),a&2&&(Lp(3),nw("p-show-manager-accordion",true));},dependencies:[rpe,i3,rNe],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Accordion - FAQs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Blood donation FAQs">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-accordion-faq"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ye,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente "),Sl(7,"code"),eN(8,"po-accordion"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoAccordionComponent"),og()(),Sl(15,"div",2)(16,"p"),eN(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),og(),Sl(18,"p"),eN(19,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),Sl(20,"a",6)(21,"code"),eN(22,"po-accordion-item"),og()(),eN(23,`,
como no exemplo abaixo:`),og(),Sl(24,"pre")(25,"code"),eN(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),og()(),Sl(27,"p"),eN(28,"e no typescript pode-se utilizar o "),Sl(29,"code"),eN(30,"@ViewChild"),og(),eN(31,":"),og(),Sl(32,"pre")(33,"code"),eN(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),og()(),Sl(35,"p"),eN(36,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),og(),Sl(37,"p"),eN(38,"Caso houver a necessidade de abrir algum dos "),Sl(39,"code"),eN(40,"po-accordion-item"),og(),eN(41,` via Typescript
acesse a `),Sl(42,"a",6),eN(43,"documenta\xE7\xE3o do PoAccordionItem"),og(),eN(44,"."),og(),Sl(45,"h4"),eN(46,"Tokens customiz\xE1veis"),og(),Sl(47,"p"),eN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(49,"blockquote")(50,"p"),eN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(52,"a",7),eN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(54,"."),og()(),Sl(55,"table")(56,"thead")(57,"tr")(58,"th"),eN(59,"Propriedade"),og(),Sl(60,"th"),eN(61,"Descri\xE7\xE3o"),og(),Sl(62,"th"),eN(63,"Valor Padr\xE3o"),og()()(),Sl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),eN(68,"Default Values"),og()(),Wl(69,"td")(70,"td"),og(),Sl(71,"tr")(72,"td")(73,"code"),eN(74,"--font-family"),og()(),Sl(75,"td"),eN(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(77,"td")(78,"code"),eN(79,"var(--font-family-theme)"),og()()(),Sl(80,"tr")(81,"td")(82,"code"),eN(83,"--font-size"),og()(),Sl(84,"td"),eN(85,"Tamanho da fonte"),og(),Sl(86,"td")(87,"code"),eN(88,"var(--font-size-default)"),og()()(),Sl(89,"tr")(90,"td")(91,"code"),eN(92,"--color"),og()(),Sl(93,"td"),eN(94,"Cor principal do accordion"),og(),Sl(95,"td")(96,"code"),eN(97,"var(--color-action-default)"),og()()(),Sl(98,"tr")(99,"td")(100,"code"),eN(101,"--background-color"),og()(),Sl(102,"td"),eN(103,"Cor de background"),og(),Sl(104,"td")(105,"code"),eN(106,"var(--color-neutral-light-00)"),og()()(),Sl(107,"tr")(108,"td")(109,"code"),eN(110,"--font-weight"),og()(),Sl(111,"td"),eN(112,"Peso da fonte"),og(),Sl(113,"td")(114,"code"),eN(115,"var(--font-weight-bold)"),og()()(),Sl(116,"tr")(117,"td")(118,"strong"),eN(119,"Hover"),og()(),Wl(120,"td")(121,"td"),og(),Sl(122,"tr")(123,"td")(124,"code"),eN(125,"--color-hover"),og()(),Sl(126,"td"),eN(127,"Cor principal no estado hover"),og(),Sl(128,"td")(129,"code"),eN(130,"var(--color-action-hover)"),og()()(),Sl(131,"tr")(132,"td")(133,"code"),eN(134,"--background-hover"),og()(),Sl(135,"td"),eN(136,"Cor de background no estado hover"),og(),Sl(137,"td")(138,"code"),eN(139,"var(--color-brand-01-lightest)"),og()()(),Sl(140,"tr")(141,"td")(142,"strong"),eN(143,"Focused"),og()(),Wl(144,"td")(145,"td"),og(),Sl(146,"tr")(147,"td")(148,"code"),eN(149,"--color-focused"),og()(),Sl(150,"td"),eN(151,"Cor principal no estado de focus"),og(),Sl(152,"td")(153,"code"),eN(154,"var(--color-action-focus)"),og()()(),Sl(155,"tr")(156,"td")(157,"code"),eN(158,"--outline-color-focused"),og(),eN(159," \xA0"),og(),Sl(160,"td"),eN(161,"Cor do outline do estado de focus"),og(),Sl(162,"td")(163,"code"),eN(164,"var(--color-action-focus)"),og()()(),Sl(165,"tr")(166,"td")(167,"strong"),eN(168,"Disabled"),og()(),Wl(169,"td")(170,"td"),og(),Sl(171,"tr")(172,"td")(173,"code"),eN(174,"--color-disabled"),og()(),Sl(175,"td"),eN(176,"Cor principal no estado disabled"),og(),Sl(177,"td")(178,"code"),eN(179,"var(--color-neutral-mid-60)"),og()()(),Sl(180,"tr")(181,"td")(182,"code"),eN(183,"--background-disabled"),og(),eN(184," \xA0"),og(),Sl(185,"td"),eN(186,"Cor de background no estado disabled"),og(),Sl(187,"td")(188,"code"),eN(189,"var(--color-neutral-light-10)"),og()()(),Sl(190,"tr")(191,"td")(192,"strong"),eN(193,"po-accordion-manager"),og()(),Wl(194,"td")(195,"td"),og(),Sl(196,"tr")(197,"td")(198,"code"),eN(199,"--background-color"),og()(),Sl(200,"td"),eN(201,"Cor de background"),og(),Sl(202,"td")(203,"code"),eN(204,"var(--color-neutral-mid-60)"),og()()(),Sl(205,"tr")(206,"td")(207,"code"),eN(208,"--color"),og()(),Sl(209,"td"),eN(210,"Cor principal do accordion manager"),og(),Sl(211,"td")(212,"code"),eN(213,"var(--color-neutral-light-10)"),og()()(),Sl(214,"tr")(215,"td")(216,"code"),eN(217,"--font-family"),og()(),Sl(218,"td"),eN(219,"Fam\xEDlia tipogr\xE1fica usada"),og(),Sl(220,"td")(221,"code"),eN(222,"var(--color-neutral-light-10)"),og()()(),Sl(223,"tr")(224,"td")(225,"code"),eN(226,"--font-size"),og()(),Sl(227,"td"),eN(228,"Tamanho da fonte"),og(),Sl(229,"td")(230,"code"),eN(231,"var(--color-neutral-light-10)"),og()()(),Sl(232,"tr")(233,"td")(234,"code"),eN(235,"--font-weight"),og()(),Sl(236,"td"),eN(237,"Peso da fonte"),og(),Sl(238,"td")(239,"code"),eN(240,"var(--color-neutral-light-10)"),og()()(),Sl(241,"tr")(242,"td")(243,"strong"),eN(244,"Pressed"),og()(),Wl(245,"td")(246,"td"),og(),Sl(247,"tr")(248,"td")(249,"code"),eN(250,"--background-pressed"),og(),eN(251," \xA0"),og(),Sl(252,"td"),eN(253,"Cor de background no estado de pressionado\xA0"),og(),Sl(254,"td")(255,"code"),eN(256,"var(--color-brand-01-lighter)"),og()()(),Sl(257,"tr")(258,"td")(259,"code"),eN(260,"--color-pressed"),og()(),Sl(261,"td"),eN(262,"Cor principal no estado de pressionado"),og(),Sl(263,"td")(264,"code"),eN(265,"var(--color-action-pressed)"),og()()()()()(),Sl(266,"div",8)(267,"h4",9),eN(268,"Seletor"),og(),Sl(269,"pre",10),eN(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),og()(),Sl(271,"h4",11),eN(272,"Propriedades"),og(),Sl(273,"table",12)(274,"tr",13)(275,"th",14),eN(276,"Nome"),og(),Sl(277,"th",14),eN(278,"Tipo"),og(),Sl(279,"th",14),eN(280,"Padr\xE3o"),og(),Sl(281,"th",14),eN(282,"Descri\xE7\xE3o"),og()(),Sl(283,"tr",15)(284,"td",16)(285,"div",17)(286,"span",18),eN(287," p-allow-expand-all-items"),Wl(288,"br"),og()()(),Sl(289,"td",19)(290,"code",20),eN(291,"boolean"),og()(),Sl(292,"td",21)(293,"p")(294,"code"),eN(295,"false"),og()()(),Sl(296,"td",22)(297,"em")(298,"strong"),eN(299,"(opcional)"),og()(),Sl(300,"p"),eN(301,"Permite expandir mais de um "),Sl(302,"code"),eN(303,"<po-accordion-item></po-accordion-item>"),og(),eN(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Sl(305,"code"),eN(306,"p-show-manager-accordion"),og(),eN(307," esteja como "),Sl(308,"code"),eN(309,"true"),og(),eN(310,"."),og()()(),Sl(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),eN(315," (p-collapse-all)"),Wl(316,"br"),og()()(),Sl(317,"td",19)(318,"code",25),eN(319,"EventEmitter"),og()(),Sl(320,"td",21),eN(321,"-"),og(),Sl(322,"td",22)(323,"em")(324,"strong"),eN(325,"(opcional)"),og()(),Sl(326,"p"),eN(327,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Sl(328,"tr",15)(329,"td",16)(330,"div",23)(331,"span",24),eN(332," (p-expand-all)"),Wl(333,"br"),og()()(),Sl(334,"td",19)(335,"code",25),eN(336,"EventEmitter"),og()(),Sl(337,"td",21),eN(338,"-"),og(),Sl(339,"td",22)(340,"em")(341,"strong"),eN(342,"(opcional)"),og()(),Sl(343,"p"),eN(344,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Sl(345,"tr",15)(346,"td",16)(347,"div",17)(348,"span",18),eN(349," p-literals"),Wl(350,"br"),og()()(),Sl(351,"td",19)(352,"code",26),eN(353,"PoAccordionLiterals"),og()(),Sl(354,"td",21),eN(355,"-"),og(),Sl(356,"td",22)(357,"em")(358,"strong"),eN(359,"(opcional)"),og()(),Sl(360,"p"),eN(361,"Objeto com as literais usadas no "),Sl(362,"code"),eN(363,"po-accordion"),og(),eN(364,"."),og(),Sl(365,"p"),eN(366,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Sl(367,"pre")(368,"code"),eN(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Sl(370,"p"),eN(371,"Ou passando apenas as literais que deseja customizar:"),og(),Sl(372,"pre")(373,"code"),eN(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Sl(375,"p"),eN(376,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Sl(377,"pre")(378,"code"),eN(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),og()(),Sl(380,"blockquote")(381,"p"),eN(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(383,"a",27)(384,"code"),eN(385,"PoI18nService"),og()(),eN(386," ou do browser."),og()()()(),Sl(387,"tr",15)(388,"td",16)(389,"div",17)(390,"span",18),eN(391," p-show-manager-accordion"),Wl(392,"br"),og()()(),Sl(393,"td",19)(394,"code",20),eN(395,"boolean"),og()(),Sl(396,"td",21)(397,"p")(398,"code"),eN(399,"false"),og()()(),Sl(400,"td",22)(401,"em")(402,"strong"),eN(403,"(opcional)"),og()(),Sl(404,"p"),eN(405,"Exibe o Gerenciador de Accordion."),og()()(),Sl(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),eN(410," p-size"),Wl(411,"br"),og()()(),Sl(412,"td",19)(413,"code",28),eN(414,"string"),og()(),Sl(415,"td",21)(416,"p")(417,"code"),eN(418,"medium"),og()()(),Sl(419,"td",22)(420,"em")(421,"strong"),eN(422,"(opcional)"),og()(),Sl(423,"p"),eN(424,"Define o tamanho do componente:"),og(),Sl(425,"ul")(426,"li")(427,"code"),eN(428,"small"),og(),eN(429,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(430,"li")(431,"code"),eN(432,"medium"),og(),eN(433,": altura de 44px."),og()(),Sl(434,"blockquote")(435,"p"),eN(436,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(437,"code"),eN(438,"medium"),og(),eN(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(440,"a",29),eN(441,"po-theme"),og(),eN(442,"."),og()()()()(),Sl(443,"h3",11),eN(444,"M\xE9todos"),og(),Sl(445,"table",30)(446,"tr",15)(447,"th",31)(448,"div",17)(449,"h4")(450,"span",18),eN(451," collapseAllItems "),og()()()()(),Sl(452,"tr",22)(453,"td",22)(454,"p"),eN(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Sl(456,"code"),eN(457,"p-show-manager-accordion"),og(),eN(458," estiver como "),Sl(459,"code"),eN(460,"true"),og(),eN(461,"."),og()()()(),Wl(462,"br"),Sl(463,"table",30)(464,"tr",15)(465,"th",31)(466,"div",17)(467,"h4")(468,"span",18),eN(469," expandAllItems "),og()()()()(),Sl(470,"tr",22)(471,"td",22)(472,"p"),eN(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Sl(474,"code"),eN(475,"p-show-manager-accordion"),og(),eN(476," estiver como "),Sl(477,"code"),eN(478,"true"),og(),eN(479,"."),og()()()(),Wl(480,"br"),Sl(481,"h3"),eN(482,"Interfaces"),og(),Sl(483,"h4",32)(484,"code",5),eN(485,"PoAccordionLiterals"),og()(),Sl(486,"div",2)(487,"p"),eN(488,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(489,"code"),eN(490,"po-accordion"),og(),eN(491,"."),og()(),Sl(492,"h4",11),eN(493,"Propriedades"),og(),Sl(494,"table",12)(495,"tr",13)(496,"th",14),eN(497,"Nome"),og(),Sl(498,"th",14),eN(499,"Tipo"),og(),Sl(500,"th",14),eN(501,"Descri\xE7\xE3o"),og()(),Sl(502,"tr",15)(503,"td",16)(504,"div",17)(505,"span",18),eN(506," closeAllItems"),Wl(507,"br"),og()()(),Sl(508,"td",19)(509,"code",28),eN(510,"string"),og()(),Sl(511,"td",22)(512,"em")(513,"strong"),eN(514,"(opcional)"),og()(),Sl(515,"p"),eN(516,"Label do gerenciador de Accordion para colapsar todos os itens"),og()()(),Sl(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),eN(521," expandAllItems"),Wl(522,"br"),og()()(),Sl(523,"td",19)(524,"code",28),eN(525,"string"),og()(),Sl(526,"td",22)(527,"em")(528,"strong"),eN(529,"(opcional)"),og()(),Sl(530,"p"),eN(531,"Label do gerenciador de Accordion para expandir todos os itens."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-accordion-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,le,ce,me,se],encapsulation:2})}return n})();var Pe=[{path:"",component:ue}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[hL.forChild(Pe),hL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[sr,he]})}return n})();export{Ze as DocPoAccordionModule};