import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,a_ as spe,a$ as o3,H as Il,q as Qx,R as og,an as DO,aH as Ka,b8 as qme,b9 as Yme,J as zl,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aF as $9,aG as mk,b0 as Qt,b1 as mv,b2 as Jhe,c4 as C3,b4 as F3,c8 as Dde,aB as Dx,aQ as hx,aR as fx,aM as ww,aN as QA,bd as Ax,aS as px,aO as Ew,aP as e0,a3 as cNe,av as Gl,aw as co,ax as lo,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic"]],standalone:false,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(Il(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),Qx(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),og()(),Il(4,"po-accordion-item",2)(5,"p",1),Qx(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),og()()());},dependencies:[spe,o3],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Accordion Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-accordion-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ae],encapsulation:2})}return n})();function Se(n,H){if(n&1&&(Il(0,"po-accordion-item",2),Qx(1),og()),n&2){let l=H.$implicit,a=H.$index;nw("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),Lp(),dg(" Accordion Item Content ",a," ");}}var de=(()=>{class n{accordionFieldsForm=[{property:"label",required:true,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore();}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(l){this.customLiterals=void 0;}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs"]],standalone:false,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Dx();Il(0,"po-accordion",1),hx(1,Se,2,5,"po-accordion-item",2,fx),og(),zl(3,"po-divider",3),Il(4,"div",4)(5,"po-input",5),ww("ngModelChange",function(c){return Xy(m),eN(i.literals,c)||(i.literals=c),Qy(c)}),ft("p-change",function(){return i.changeLiterals()}),og(),QA(),Il(6,"po-checkbox-group",6),ww("ngModelChange",function(c){return Xy(m),eN(i.propertiesAccordion,c)||(i.propertiesAccordion=c),Qy(c)}),og(),QA(),og(),zl(7,"po-divider",7)(8,"po-dynamic-form",8,0),Il(10,"div",9)(11,"po-radio-group",10),ww("ngModelChange",function(c){return Xy(m),eN(i.typeTag,c)||(i.typeTag=c),Qy(c)}),og(),QA(),Il(12,"po-checkbox-group",11),ww("ngModelChange",function(c){return Xy(m),eN(i.disabledItem,c)||(i.disabledItem=c),Qy(c)}),og(),QA(),og(),Il(13,"div",12)(14,"po-radio-group",13),ww("ngModelChange",function(c){return Xy(m),eN(i.size,c)||(i.size=c),Qy(c)}),og(),QA(),Il(15,"po-button",14),ft("p-click",function(){Xy(m);let c=Ax(9);return i.addAccordionItem(c.form.value),Qy(c.form.reset())}),og()(),Il(16,"div",15)(17,"po-button",16),ft("p-click",function(){return i.restore()}),og()();}if(a&2){let m=Ax(9);nw("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),Lp(),px(i.accordionItems),Lp(4),Ew("ngModel",i.literals),e0(),Lp(),Ew("ngModel",i.propertiesAccordion),nw("p-options",i.propertiesAccordionOptions),e0(),Lp(2),nw("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),Lp(3),nw("p-options",i.typeTagOptions),Ew("ngModel",i.typeTag),e0(),Lp(),nw("p-options",i.disabledOption),Ew("ngModel",i.disabledItem),e0(),Lp(2),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0(),Lp(),nw("p-disabled",m.form.invalid);}},dependencies:[$9,mk,spe,o3,Qt,mv,Jhe,C3,F3,Dde],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Accordion Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-accordion
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-accordion-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,xe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return n})();var pe=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&Gl(o3,7),a&2){let m;co(m=lo())&&(i.questionOne=m.first);}},standalone:false,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(Il(0,"po-page-default",1)(1,"p",2),Qx(2,"You don't have to be afraid of being a blood donor!"),og(),Il(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),Qx(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),og()(),Il(8,"po-accordion-item",6)(9,"p",5),Qx(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),og()(),Il(11,"po-accordion-item",7)(12,"p",5),Qx(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),og()(),Il(14,"po-accordion-item",8)(15,"p",5),Qx(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),og()()(),Il(17,"p",9),Qx(18," For more information, see the "),Il(19,"a",10),Qx(20,"Hemosc FAQ"),og(),Qx(21,". "),og()()),a&2&&(Lp(3),nw("p-show-manager-accordion",true));},dependencies:[spe,o3,cNe],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Accordion - FAQs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Blood donation FAQs">
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { AfterContentInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-accordion-faq"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ye,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-accordion-doc"]],standalone:false,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-accordion"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoAccordionComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),og(),Il(18,"p"),Qx(19,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),Il(20,"a",6)(21,"code"),Qx(22,"po-accordion-item"),og()(),Qx(23,`,
como no exemplo abaixo:`),og(),Il(24,"pre")(25,"code"),Qx(26,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),og()(),Il(27,"p"),Qx(28,"e no typescript pode-se utilizar o "),Il(29,"code"),Qx(30,"@ViewChild"),og(),Qx(31,":"),og(),Il(32,"pre")(33,"code"),Qx(34,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),og()(),Il(35,"p"),Qx(36,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),og(),Il(37,"p"),Qx(38,"Caso houver a necessidade de abrir algum dos "),Il(39,"code"),Qx(40,"po-accordion-item"),og(),Qx(41,` via Typescript
acesse a `),Il(42,"a",6),Qx(43,"documenta\xE7\xE3o do PoAccordionItem"),og(),Qx(44,"."),og(),Il(45,"h4"),Qx(46,"Tokens customiz\xE1veis"),og(),Il(47,"p"),Qx(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(49,"blockquote")(50,"p"),Qx(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(52,"a",7),Qx(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(54,"."),og()(),Il(55,"table")(56,"thead")(57,"tr")(58,"th"),Qx(59,"Propriedade"),og(),Il(60,"th"),Qx(61,"Descri\xE7\xE3o"),og(),Il(62,"th"),Qx(63,"Valor Padr\xE3o"),og()()(),Il(64,"tbody")(65,"tr")(66,"td")(67,"strong"),Qx(68,"Default Values"),og()(),zl(69,"td")(70,"td"),og(),Il(71,"tr")(72,"td")(73,"code"),Qx(74,"--font-family"),og()(),Il(75,"td"),Qx(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(77,"td")(78,"code"),Qx(79,"var(--font-family-theme)"),og()()(),Il(80,"tr")(81,"td")(82,"code"),Qx(83,"--font-size"),og()(),Il(84,"td"),Qx(85,"Tamanho da fonte"),og(),Il(86,"td")(87,"code"),Qx(88,"var(--font-size-default)"),og()()(),Il(89,"tr")(90,"td")(91,"code"),Qx(92,"--color"),og()(),Il(93,"td"),Qx(94,"Cor principal do accordion"),og(),Il(95,"td")(96,"code"),Qx(97,"var(--color-action-default)"),og()()(),Il(98,"tr")(99,"td")(100,"code"),Qx(101,"--background-color"),og()(),Il(102,"td"),Qx(103,"Cor de background"),og(),Il(104,"td")(105,"code"),Qx(106,"var(--color-neutral-light-00)"),og()()(),Il(107,"tr")(108,"td")(109,"code"),Qx(110,"--font-weight"),og()(),Il(111,"td"),Qx(112,"Peso da fonte"),og(),Il(113,"td")(114,"code"),Qx(115,"var(--font-weight-bold)"),og()()(),Il(116,"tr")(117,"td")(118,"strong"),Qx(119,"Hover"),og()(),zl(120,"td")(121,"td"),og(),Il(122,"tr")(123,"td")(124,"code"),Qx(125,"--color-hover"),og()(),Il(126,"td"),Qx(127,"Cor principal no estado hover"),og(),Il(128,"td")(129,"code"),Qx(130,"var(--color-action-hover)"),og()()(),Il(131,"tr")(132,"td")(133,"code"),Qx(134,"--background-hover"),og()(),Il(135,"td"),Qx(136,"Cor de background no estado hover"),og(),Il(137,"td")(138,"code"),Qx(139,"var(--color-brand-01-lightest)"),og()()(),Il(140,"tr")(141,"td")(142,"strong"),Qx(143,"Focused"),og()(),zl(144,"td")(145,"td"),og(),Il(146,"tr")(147,"td")(148,"code"),Qx(149,"--color-focused"),og()(),Il(150,"td"),Qx(151,"Cor principal no estado de focus"),og(),Il(152,"td")(153,"code"),Qx(154,"var(--color-action-focus)"),og()()(),Il(155,"tr")(156,"td")(157,"code"),Qx(158,"--outline-color-focused"),og(),Qx(159," \xA0"),og(),Il(160,"td"),Qx(161,"Cor do outline do estado de focus"),og(),Il(162,"td")(163,"code"),Qx(164,"var(--color-action-focus)"),og()()(),Il(165,"tr")(166,"td")(167,"strong"),Qx(168,"Disabled"),og()(),zl(169,"td")(170,"td"),og(),Il(171,"tr")(172,"td")(173,"code"),Qx(174,"--color-disabled"),og()(),Il(175,"td"),Qx(176,"Cor principal no estado disabled"),og(),Il(177,"td")(178,"code"),Qx(179,"var(--color-neutral-mid-60)"),og()()(),Il(180,"tr")(181,"td")(182,"code"),Qx(183,"--background-disabled"),og(),Qx(184," \xA0"),og(),Il(185,"td"),Qx(186,"Cor de background no estado disabled"),og(),Il(187,"td")(188,"code"),Qx(189,"var(--color-neutral-light-10)"),og()()(),Il(190,"tr")(191,"td")(192,"strong"),Qx(193,"po-accordion-manager"),og()(),zl(194,"td")(195,"td"),og(),Il(196,"tr")(197,"td")(198,"code"),Qx(199,"--background-color"),og()(),Il(200,"td"),Qx(201,"Cor de background"),og(),Il(202,"td")(203,"code"),Qx(204,"var(--color-neutral-mid-60)"),og()()(),Il(205,"tr")(206,"td")(207,"code"),Qx(208,"--color"),og()(),Il(209,"td"),Qx(210,"Cor principal do accordion manager"),og(),Il(211,"td")(212,"code"),Qx(213,"var(--color-neutral-light-10)"),og()()(),Il(214,"tr")(215,"td")(216,"code"),Qx(217,"--font-family"),og()(),Il(218,"td"),Qx(219,"Fam\xEDlia tipogr\xE1fica usada"),og(),Il(220,"td")(221,"code"),Qx(222,"var(--color-neutral-light-10)"),og()()(),Il(223,"tr")(224,"td")(225,"code"),Qx(226,"--font-size"),og()(),Il(227,"td"),Qx(228,"Tamanho da fonte"),og(),Il(229,"td")(230,"code"),Qx(231,"var(--color-neutral-light-10)"),og()()(),Il(232,"tr")(233,"td")(234,"code"),Qx(235,"--font-weight"),og()(),Il(236,"td"),Qx(237,"Peso da fonte"),og(),Il(238,"td")(239,"code"),Qx(240,"var(--color-neutral-light-10)"),og()()(),Il(241,"tr")(242,"td")(243,"strong"),Qx(244,"Pressed"),og()(),zl(245,"td")(246,"td"),og(),Il(247,"tr")(248,"td")(249,"code"),Qx(250,"--background-pressed"),og(),Qx(251," \xA0"),og(),Il(252,"td"),Qx(253,"Cor de background no estado de pressionado\xA0"),og(),Il(254,"td")(255,"code"),Qx(256,"var(--color-brand-01-lighter)"),og()()(),Il(257,"tr")(258,"td")(259,"code"),Qx(260,"--color-pressed"),og()(),Il(261,"td"),Qx(262,"Cor principal no estado de pressionado"),og(),Il(263,"td")(264,"code"),Qx(265,"var(--color-action-pressed)"),og()()()()()(),Il(266,"div",8)(267,"h4",9),Qx(268,"Seletor"),og(),Il(269,"pre",10),Qx(270,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),og()(),Il(271,"h4",11),Qx(272,"Propriedades"),og(),Il(273,"table",12)(274,"tr",13)(275,"th",14),Qx(276,"Nome"),og(),Il(277,"th",14),Qx(278,"Tipo"),og(),Il(279,"th",14),Qx(280,"Padr\xE3o"),og(),Il(281,"th",14),Qx(282,"Descri\xE7\xE3o"),og()(),Il(283,"tr",15)(284,"td",16)(285,"div",17)(286,"span",18),Qx(287," p-allow-expand-all-items"),zl(288,"br"),og()()(),Il(289,"td",19)(290,"code",20),Qx(291,"boolean"),og()(),Il(292,"td",21)(293,"p")(294,"code"),Qx(295,"false"),og()()(),Il(296,"td",22)(297,"em")(298,"strong"),Qx(299,"(opcional)"),og()(),Il(300,"p"),Qx(301,"Permite expandir mais de um "),Il(302,"code"),Qx(303,"<po-accordion-item></po-accordion-item>"),og(),Qx(304,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),Il(305,"code"),Qx(306,"p-show-manager-accordion"),og(),Qx(307," esteja como "),Il(308,"code"),Qx(309,"true"),og(),Qx(310,"."),og()()(),Il(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),Qx(315," (p-collapse-all)"),zl(316,"br"),og()()(),Il(317,"td",19)(318,"code",25),Qx(319,"EventEmitter"),og()(),Il(320,"td",21),Qx(321,"-"),og(),Il(322,"td",22)(323,"em")(324,"strong"),Qx(325,"(opcional)"),og()(),Il(326,"p"),Qx(327,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Il(328,"tr",15)(329,"td",16)(330,"div",23)(331,"span",24),Qx(332," (p-expand-all)"),zl(333,"br"),og()()(),Il(334,"td",19)(335,"code",25),Qx(336,"EventEmitter"),og()(),Il(337,"td",21),Qx(338,"-"),og(),Il(339,"td",22)(340,"em")(341,"strong"),Qx(342,"(opcional)"),og()(),Il(343,"p"),Qx(344,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),og()()(),Il(345,"tr",15)(346,"td",16)(347,"div",17)(348,"span",18),Qx(349," p-literals"),zl(350,"br"),og()()(),Il(351,"td",19)(352,"code",26),Qx(353,"PoAccordionLiterals"),og()(),Il(354,"td",21),Qx(355,"-"),og(),Il(356,"td",22)(357,"em")(358,"strong"),Qx(359,"(opcional)"),og()(),Il(360,"p"),Qx(361,"Objeto com as literais usadas no "),Il(362,"code"),Qx(363,"po-accordion"),og(),Qx(364,"."),og(),Il(365,"p"),Qx(366,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Il(367,"pre")(368,"code"),Qx(369,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Il(370,"p"),Qx(371,"Ou passando apenas as literais que deseja customizar:"),og(),Il(372,"pre")(373,"code"),Qx(374,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),og()(),Il(375,"p"),Qx(376,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Il(377,"pre")(378,"code"),Qx(379,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),og()(),Il(380,"blockquote")(381,"p"),Qx(382,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Il(383,"a",27)(384,"code"),Qx(385,"PoI18nService"),og()(),Qx(386," ou do browser."),og()()()(),Il(387,"tr",15)(388,"td",16)(389,"div",17)(390,"span",18),Qx(391," p-show-manager-accordion"),zl(392,"br"),og()()(),Il(393,"td",19)(394,"code",20),Qx(395,"boolean"),og()(),Il(396,"td",21)(397,"p")(398,"code"),Qx(399,"false"),og()()(),Il(400,"td",22)(401,"em")(402,"strong"),Qx(403,"(opcional)"),og()(),Il(404,"p"),Qx(405,"Exibe o Gerenciador de Accordion."),og()()(),Il(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),Qx(410," p-size"),zl(411,"br"),og()()(),Il(412,"td",19)(413,"code",28),Qx(414,"string"),og()(),Il(415,"td",21)(416,"p")(417,"code"),Qx(418,"medium"),og()()(),Il(419,"td",22)(420,"em")(421,"strong"),Qx(422,"(opcional)"),og()(),Il(423,"p"),Qx(424,"Define o tamanho do componente:"),og(),Il(425,"ul")(426,"li")(427,"code"),Qx(428,"small"),og(),Qx(429,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(430,"li")(431,"code"),Qx(432,"medium"),og(),Qx(433,": altura de 44px."),og()(),Il(434,"blockquote")(435,"p"),Qx(436,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(437,"code"),Qx(438,"medium"),og(),Qx(439,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(440,"a",29),Qx(441,"po-theme"),og(),Qx(442,"."),og()()()()(),Il(443,"h3",11),Qx(444,"M\xE9todos"),og(),Il(445,"table",30)(446,"tr",15)(447,"th",31)(448,"div",17)(449,"h4")(450,"span",18),Qx(451," collapseAllItems "),og()()()()(),Il(452,"tr",22)(453,"td",22)(454,"p"),Qx(455,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Il(456,"code"),Qx(457,"p-show-manager-accordion"),og(),Qx(458," estiver como "),Il(459,"code"),Qx(460,"true"),og(),Qx(461,"."),og()()()(),zl(462,"br"),Il(463,"table",30)(464,"tr",15)(465,"th",31)(466,"div",17)(467,"h4")(468,"span",18),Qx(469," expandAllItems "),og()()()()(),Il(470,"tr",22)(471,"td",22)(472,"p"),Qx(473,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),Il(474,"code"),Qx(475,"p-show-manager-accordion"),og(),Qx(476," estiver como "),Il(477,"code"),Qx(478,"true"),og(),Qx(479,"."),og()()()(),zl(480,"br"),Il(481,"h3"),Qx(482,"Interfaces"),og(),Il(483,"h4",32)(484,"code",5),Qx(485,"PoAccordionLiterals"),og()(),Il(486,"div",2)(487,"p"),Qx(488,"Interface para defini\xE7\xE3o das literais usadas no "),Il(489,"code"),Qx(490,"po-accordion"),og(),Qx(491,"."),og()(),Il(492,"h4",11),Qx(493,"Propriedades"),og(),Il(494,"table",12)(495,"tr",13)(496,"th",14),Qx(497,"Nome"),og(),Il(498,"th",14),Qx(499,"Tipo"),og(),Il(500,"th",14),Qx(501,"Descri\xE7\xE3o"),og()(),Il(502,"tr",15)(503,"td",16)(504,"div",17)(505,"span",18),Qx(506," closeAllItems"),zl(507,"br"),og()()(),Il(508,"td",19)(509,"code",28),Qx(510,"string"),og()(),Il(511,"td",22)(512,"em")(513,"strong"),Qx(514,"(opcional)"),og()(),Il(515,"p"),Qx(516,"Label do gerenciador de Accordion para colapsar todos os itens"),og()()(),Il(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),Qx(521," expandAllItems"),zl(522,"br"),og()()(),Il(523,"td",19)(524,"code",28),Qx(525,"string"),og()(),Il(526,"td",22)(527,"em")(528,"strong"),Qx(529,"(opcional)"),og()(),Il(530,"p"),Qx(531,"Label do gerenciador de Accordion para expandir todos os itens."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ue=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-accordion-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),og()()()),a&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,le,ce,me,se],encapsulation:2})}return n})();var Pe=[{path:"",component:ue}],he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[uL.forChild(Pe),uL]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[sr,he]})}return n})();export{Ze as DocPoAccordionModule};