import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,dO as vo,r as r$1,dP as av,e as s,dQ as Qde,dR as jde,dS as rv,dT as Ude,dU as Wde,dV as Hde,dW as ni,cN as lm,ae as Be,cM as Z9,dX as D3,aX as G9,aF as $9,aY as z9,aG as mk,cQ as Ik,cR as Ck,b0 as Qt,cz as kz,b4 as F3,cp as Hhe,c8 as Dde,cX as L3,c9 as Yhe,b6 as Yo,ba as yNe,aB as Dx,H as Il,J as zl,aN as QA,a1 as ft,R as og,aM as ww,A as Lp,T as nw,aP as e0,aO as Ew,X as we$1,av as Gl,aw as co,ax as lo,an as DO,aH as Ka,b8 as qme,b9 as Yme,q as Qx,ar as Ux,au as dg,bs as uN,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Ce=["reactiveFormData"],be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Hde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Wde),{info:s(r$1({},Wde.info),{base:"#0079b8"})}),neutral:r$1({},Ude)},onRoot:s(r$1({},rv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},rv.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},jde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Qde),{info:s(r$1({},Qde.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},av.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},av.perComponent)}},active:vo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?ni.AAA:ni.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(ni.AAA,false),this.a11yLevel=ni.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(ni.AA,false),this.a11yLevel=ni.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===ni.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(C(Be),C(Z9),C(D3))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&Gl(Ce,7),a&2){let c;co(c=lo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we$1([D3])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=Dx();Il(0,"po-widget",1)(1,"form",2),zl(2,"po-input",3),QA(),zl(3,"po-email",4),QA(),zl(4,"po-input",5),QA(),zl(5,"po-number",6),QA(),zl(6,"po-url",7),QA(),Il(7,"div",8)(8,"po-button",9),ft("p-click",function(){return o.saveForm()}),og()()(),Il(9,"po-modal",10,0)(11,"div",8),zl(12,"po-info",11),og(),Il(13,"div",8),zl(14,"po-info",12)(15,"po-info",13),og(),Il(16,"div",8),zl(17,"po-info",14)(18,"po-info",15),og()()(),Il(19,"div",16)(20,"po-radio-group",17),ww("ngModelChange",function(h){return Xy(c),eN(o.theme,h)||(o.theme=h),Qy(h)}),ft("p-change",function(h){return o.changeTheme(h)}),og(),QA(),Il(21,"po-radio-group",18),ww("ngModelChange",function(h){return Xy(c),eN(o.a11yLevel,h)||(o.a11yLevel=h),Qy(h)}),ft("p-change",function(h){return o.changeA11yLevel(h)}),og(),QA(),og();}a&2&&(Lp(),nw("formGroup",o.reactiveForm),Lp(),e0(),Lp(),e0(),Lp(),e0(),Lp(),e0(),Lp(),e0(),Lp(2),nw("p-disabled",!o.reactiveForm.valid),Lp(),nw("p-primary-action",o.modalPrimaryAction),Lp(3),nw("p-value",o.reactiveForm.controls.name.value),Lp(2),nw("p-value",o.reactiveForm.controls.address.value),Lp(),nw("p-value",o.reactiveForm.controls.number.value),Lp(2),nw("p-value",o.reactiveForm.controls.email.value),Lp(),nw("p-value",o.reactiveForm.controls.website.value),Lp(2),Ew("ngModel",o.theme),nw("p-options",o.themeOptions),e0(),Lp(),Ew("ngModel",o.a11yLevel),nw("p-options",o.a11yLevelOptions),e0());},dependencies:[G9,$9,z9,mk,Ik,Ck,Qt,kz,F3,Hhe,Dde,L3,Yhe,Yo,yNe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m}),fe=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Theme Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-widget p-title="Example">
  <form [formGroup]="reactiveForm">
    <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
    </div>
  </form>

  <po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
    <div class="po-row">
      <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
    </div>

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

    <div class="po-row">
      <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

      <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
    </div>
  </po-modal>
</po-widget>

<div class="po-row po-mt-3">
  <po-radio-group
    class="po-md-6"
    name="theme"
    p-label="Theme Type"
    [(ngModel)]="theme"
    [p-options]="themeOptions"
    (p-change)="changeTheme($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-6"
    name="a11ylevel"
    p-label="Acessibility Level"
    [(ngModel)]="a11yLevel"
    [p-options]="a11yLevelOptions"
    (p-change)="changeA11yLevel($event)"
  >
  </po-radio-group>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  a11yLevel: PoThemeA11yEnum;
  a11yLevelStorage = 'po-a11y-AAA';
  reactiveForm: UntypedFormGroup;
  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';

  private a11yChangeListenerAAA: any;
  private a11yChangeListenerAA: any;
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AA', value: 'AA' },
    { label: 'AAA', value: 'AAA' }
  ];

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private poTheme: PoThemeService
  ) {
    this.poTheme.setA11yDefaultSizeSmall(true);

    const _poTheme = this.poTheme.applyTheme();
    this.a11yLevel = this.poTheme.getA11yLevel();

    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme, this.a11yLevel);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
    this.createReactiveForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    if (localStorage.getItem('po-ui-a11y')) {
      this.a11yLevelStorage = localStorage.getItem('po-ui-a11y');
    }

    this.a11yLevel = this.a11yLevelStorage === 'po-a11y-AAA' ? PoThemeA11yEnum.AAA : PoThemeA11yEnum.AA;
    this.changeA11yLevel(this.a11yLevel, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    this.a11yChangeListenerAAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AAA, false);
      this.a11yLevel = PoThemeA11yEnum.AAA;
    };

    this.a11yChangeListenerAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AA, false);
      this.a11yLevel = PoThemeA11yEnum.AA;
    };

    window.addEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.addEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);

    window.removeEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.removeEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
  }

  changeA11yLevel(value: PoThemeA11yEnum, dispatchEvent = true) {
    this.poTheme.setCurrentThemeA11y(value);
    value === 'AA'
      ? localStorage.setItem('po-ui-a11y', 'po-a11y-AA')
      : localStorage.setItem('po-ui-a11y', 'po-a11y-AAA');

    if (value === PoThemeA11yEnum.AA) {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }

    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-a11y'));
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value, this.a11yLevel);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-theme-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,be],encapsulation:2})}return m})();var Te=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoThemeModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do servi\xE7o PoThemeService."),og()(),Il(7,"h3",3),Qx(8,"Services"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoThemeService"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O servi\xE7o "),Il(15,"code"),Qx(16,"PoThemeService"),og(),Qx(17," permite customizar as cores do tema padr\xE3o do "),Il(18,"code"),Qx(19,"PO-UI"),og(),Qx(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),og(),Il(21,"p"),Qx(22,"O n\xEDvel "),Il(23,"strong"),Qx(24,"AAA"),og(),Qx(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Il(26,"strong"),Qx(27,"AA"),og(),Qx(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),og(),Il(29,"p"),Qx(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),Il(31,"strong"),Qx(32,"densidade de espa\xE7amentos"),og(),Qx(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),og(),Il(34,"blockquote")(35,"p"),Qx(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),Il(37,"code"),Qx(38,"feedback"),og(),Qx(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),og()(),Il(40,"blockquote")(41,"p"),Qx(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Il(43,"a",6),Qx(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),og(),Qx(45," na aba "),Il(46,"code"),Qx(47,"Guias"),og(),Qx(48,"."),og()()(),Il(49,"h3",7),Qx(50,"M\xE9todos"),og(),Il(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),Qx(57," setTheme "),og()()()()(),Il(58,"tr",13)(59,"td",13)(60,"p"),Qx(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),og(),Il(62,"p"),Qx(63,"Este m\xE9todo configura o tema do componente com base no objeto "),Il(64,"code"),Qx(65,"themeConfig"),og(),Qx(66," fornecido, no "),Il(67,"code"),Qx(68,"themeType"),og(),Qx(69," e no "),Il(70,"code"),Qx(71,"a11yLevel"),og(),Qx(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),og()()()(),Il(73,"h5")(74,"b"),Qx(75,"Par\xE2metros"),og()(),Il(76,"table",14)(77,"tr",15)(78,"th",16),Qx(79,"Nome"),og(),Il(80,"th",16),Qx(81,"Tipo"),og(),Il(82,"th",16),Qx(83,"Descri\xE7\xE3o"),og()(),Il(84,"tr",9)(85,"td",17),Qx(86," themeConfig"),og(),Il(87,"td",18)(88,"code",19),Qx(89," PoTheme "),og()(),Il(90,"td",13)(91,"p"),Qx(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),og()()(),Il(93,"tr",9)(94,"td",17),Qx(95," themeType"),og(),Il(96,"td",18)(97,"code",19),Qx(98," PoThemeTypeEnum "),og()(),Il(99,"td",13)(100,"p"),Qx(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),og()()(),Il(102,"tr",9)(103,"td",17),Qx(104," a11yLevel"),og(),Il(105,"td",18)(106,"code",19),Qx(107," PoThemeA11yEnum "),og()(),Il(108,"td",13)(109,"p"),Qx(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),og()()(),Il(111,"tr",9)(112,"td",17),Qx(113," persistPreference"),og(),Il(114,"td",18)(115,"code",19),Qx(116," boolean "),og()(),Il(117,"td",13)(118,"p"),Qx(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Il(120,"code"),Qx(121,"true"),og(),Qx(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),og()()()(),zl(123,"br"),Il(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),Qx(130," getA11yLevel "),og()()()()(),Il(131,"tr",13)(132,"td",13)(133,"p"),Qx(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Il(135,"code"),Qx(136,"AAA"),og(),Qx(137," como padr\xE3o."),og()()()(),Il(138,"h5")(139,"b"),Qx(140,"Retorno"),og()(),Il(141,"table",14)(142,"tr",15)(143,"th",16),Qx(144,"Tipo"),og(),Il(145,"th",16),Qx(146,"Descri\xE7\xE3o"),og()(),Il(147,"tr",9)(148,"td",18)(149,"code",19),Qx(150,"PoThemeA11yEnum"),og()(),Il(151,"td",13)(152,"p"),Qx(153,"O n\xEDvel de acessibilidade, que pode ser "),Il(154,"code"),Qx(155,"AA"),og(),Qx(156," ou "),Il(157,"code"),Qx(158,"AAA"),og(),Qx(159,"."),og()()()(),zl(160,"br"),Il(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),Qx(167," setA11yDefaultSizeSmall "),og()()()()(),Il(168,"tr",13)(169,"td",13)(170,"p"),Qx(171,"Define o tamanho "),Il(172,"code"),Qx(173,"small"),og(),Qx(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Il(175,"code"),Qx(176,"AA"),og(),Qx(177,`. O valor definido \xE9 salvo no
`),Il(178,"code"),Qx(179,"localStorage"),og(),Qx(180," sob a chave "),Il(181,"code"),Qx(182,"po-default-size"),og(),Qx(183," e o atributo "),Il(184,"code"),Qx(185,"data-default-size"),og(),Qx(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),og(),Il(187,"p"),Qx(188,"Exemplo de uso:"),og(),Il(189,"pre")(190,"code",20),Qx(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),og()(),Il(192,"blockquote")(193,"p"),Qx(194,"Para garantir que o tamanho "),Il(195,"code"),Qx(196,"small"),og(),Qx(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Il(198,"strong"),Qx(199,"junto com o n\xEDvel de acessibilidade "),Il(200,"code"),Qx(201,"AA"),og(),Qx(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),og(),Qx(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Il(204,"code"),Qx(205,"setDensityMode"),og(),Qx(206," conforme necess\xE1rio."),og()()()()(),Il(207,"h5")(208,"b"),Qx(209,"Par\xE2metros"),og()(),Il(210,"table",14)(211,"tr",15)(212,"th",16),Qx(213,"Nome"),og(),Il(214,"th",16),Qx(215,"Tipo"),og(),Il(216,"th",16),Qx(217,"Descri\xE7\xE3o"),og()(),Il(218,"tr",9)(219,"td",17),Qx(220," enable"),og(),Il(221,"td",18)(222,"code",19),Qx(223," boolean "),og()(),Il(224,"td",13)(225,"p"),Qx(226,"Habilita ou desabilita o tamanho "),Il(227,"code"),Qx(228,"small"),og(),Qx(229," globalmente."),og()()()(),zl(230,"br"),Il(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),Qx(237," getDensityMode "),og()()()()(),Il(238,"tr",13)(239,"td",13)(240,"p"),Qx(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Il(242,"code"),Qx(243,"medium"),og(),Qx(244," como padr\xE3o."),og()()()(),Il(245,"h5")(246,"b"),Qx(247,"Retorno"),og()(),Il(248,"table",14)(249,"tr",15)(250,"th",16),Qx(251,"Tipo"),og(),Il(252,"th",16),Qx(253,"Descri\xE7\xE3o"),og()(),Il(254,"tr",9)(255,"td",18)(256,"code",19),Qx(257,"PoDensityMode"),og()(),Il(258,"td",13)(259,"p"),Qx(260,"O modo de adensamento, que pode ser "),Il(261,"code"),Qx(262,"small"),og(),Qx(263," ou "),Il(264,"code"),Qx(265,"medium"),og(),Qx(266,"."),og()()()(),zl(267,"br"),Il(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),Qx(274," setDensityMode "),og()()()()(),Il(275,"tr",13)(276,"td",13)(277,"p"),Qx(278,"Aplica o modo de adensamento compacto ("),Il(279,"code"),Qx(280,"small"),og(),Qx(281,") ou espa\xE7oso ("),Il(282,"code"),Qx(283,"medium"),og(),Qx(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Il(285,"code"),Qx(286,"localStorage"),og(),Qx(287,` sob a chave
`),Il(288,"code"),Qx(289,"po-density-mode"),og(),Qx(290,"."),og()()()(),Il(291,"h5")(292,"b"),Qx(293,"Par\xE2metros"),og()(),Il(294,"table",14)(295,"tr",15)(296,"th",16),Qx(297,"Nome"),og(),Il(298,"th",16),Qx(299,"Tipo"),og(),Il(300,"th",16),Qx(301,"Descri\xE7\xE3o"),og()(),Il(302,"tr",9)(303,"td",17),Qx(304," mode"),og(),Il(305,"td",18)(306,"code",21),Qx(307," 'small' "),og(),Il(308,"code",22),Qx(309," 'medium' "),og()(),Il(310,"td",13)(311,"p"),Qx(312,"Define o modo de densidade: "),Il(313,"code"),Qx(314,"small"),og(),Qx(315," para compacto, "),Il(316,"code"),Qx(317,"medium"),og(),Qx(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Il(319,"code"),Qx(320,"medium"),og(),Qx(321,"."),og()()()(),zl(322,"br"),Il(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),Qx(329," persistThemeActive "),og()()()()(),Il(330,"tr",13)(331,"td",13)(332,"p"),Qx(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Il(334,"code"),Qx(335,"localStorage"),og(),Qx(336," para uso em recarregamentos futuros."),og()()()(),Il(337,"h5")(338,"b"),Qx(339,"Retorno"),og()(),Il(340,"table",14)(341,"tr",15)(342,"th",16),Qx(343,"Tipo"),og(),Il(344,"th",16),Qx(345,"Descri\xE7\xE3o"),og()(),Il(346,"tr",9)(347,"td",18)(348,"code",19),Qx(349,"PoTheme"),og()(),Il(350,"td",13)(351,"p"),Qx(352,"O tema atualmente aplicado."),og()()()(),zl(353,"br"),Il(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),Qx(360," changeCurrentThemeType "),og()()()()(),Il(361,"tr",13)(362,"td",13)(363,"p"),Qx(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),og(),Il(365,"p"),Qx(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),og()()()(),Il(367,"h5")(368,"b"),Qx(369,"Par\xE2metros"),og()(),Il(370,"table",14)(371,"tr",15)(372,"th",16),Qx(373,"Nome"),og(),Il(374,"th",16),Qx(375,"Tipo"),og(),Il(376,"th",16),Qx(377,"Descri\xE7\xE3o"),og()(),Il(378,"tr",9)(379,"td",17),Qx(380," themeType"),og(),Il(381,"td",18)(382,"code",19),Qx(383," PoThemeTypeEnum "),og()(),Il(384,"td",13)(385,"p"),Qx(386,"O tipo de tema a ser aplicado, light ou dark."),og()()()(),zl(387,"br"),Il(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),Qx(394," cleanThemeActive "),og()()()()(),Il(395,"tr",13)(396,"td",13)(397,"p"),Qx(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),og()()()(),Il(399,"h5")(400,"b"),Qx(401,"Par\xE2metros"),og()(),Il(402,"table",14)(403,"tr",15)(404,"th",16),Qx(405,"Nome"),og(),Il(406,"th",16),Qx(407,"Tipo"),og(),Il(408,"th",16),Qx(409,"Descri\xE7\xE3o"),og()(),Il(410,"tr",9)(411,"td",17),Qx(412," persistPreference"),og(),Il(413,"td",18)(414,"code",19),Qx(415," boolean "),og()(),Il(416,"td",13)(417,"p"),Qx(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),Il(419,"code"),Qx(420,"true"),og(),Qx(421," para remover, "),Il(422,"code"),Qx(423,"false"),og(),Qx(424," para manter."),og()()()(),zl(425,"br"),Il(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),Qx(432," getThemeActive "),og()()()()(),Il(433,"tr",13)(434,"td",13)(435,"p"),Qx(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),Il(437,"code"),Qx(438,"localStorage"),og(),Qx(439,"."),og()()()(),Il(440,"h5")(441,"b"),Qx(442,"Retorno"),og()(),Il(443,"table",14)(444,"tr",15)(445,"th",16),Qx(446,"Tipo"),og(),Il(447,"th",16),Qx(448,"Descri\xE7\xE3o"),og()(),Il(449,"tr",9)(450,"td",18)(451,"code",19),Qx(452,"PoTheme"),og()(),Il(453,"td",13)(454,"p"),Qx(455,"Tema ativo."),og()()()(),zl(456,"br"),Il(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),Qx(463," setDefaultTheme "),og()()()()(),Il(464,"tr",13)(465,"td",13)(466,"p"),Qx(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),og()()()(),Il(468,"h5")(469,"b"),Qx(470,"Par\xE2metros"),og()(),Il(471,"table",14)(472,"tr",15)(473,"th",16),Qx(474,"Nome"),og(),Il(475,"th",16),Qx(476,"Tipo"),og(),Il(477,"th",16),Qx(478,"Descri\xE7\xE3o"),og()(),Il(479,"tr",9)(480,"td",17),Qx(481," type"),og(),Il(482,"td",18)(483,"code",19),Qx(484," PoThemeTypeEnum "),og()(),Il(485,"td",13)(486,"p"),Qx(487,"O tipo de Tema a ser aplicado, light / dark."),og()()()(),zl(488,"br"),Il(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),Qx(495," setThemeType "),og()()()()(),Il(496,"tr",13)(497,"td",13)(498,"p"),Qx(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),og()()()(),Il(500,"h5")(501,"b"),Qx(502,"Par\xE2metros"),og()(),Il(503,"table",14)(504,"tr",15)(505,"th",16),Qx(506,"Nome"),og(),Il(507,"th",16),Qx(508,"Tipo"),og(),Il(509,"th",16),Qx(510,"Descri\xE7\xE3o"),og()(),Il(511,"tr",9)(512,"td",17),Qx(513," theme"),og(),Il(514,"td",18)(515,"code",19),Qx(516," PoTheme "),og()(),Il(517,"td",13)(518,"p"),Qx(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),og()()(),Il(520,"tr",9)(521,"td",17),Qx(522," themeType"),og(),Il(523,"td",18)(524,"code",19),Qx(525," PoThemeTypeEnum "),og()(),Il(526,"td",13)(527,"p"),Qx(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),og()()()(),zl(529,"br"),Il(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),Qx(536," setCurrentThemeType "),og()()()()(),Il(537,"tr",13)(538,"td",13)(539,"p"),Qx(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),og()()()(),Il(541,"h5")(542,"b"),Qx(543,"Par\xE2metros"),og()(),Il(544,"table",14)(545,"tr",15)(546,"th",16),Qx(547,"Nome"),og(),Il(548,"th",16),Qx(549,"Tipo"),og(),Il(550,"th",16),Qx(551,"Descri\xE7\xE3o"),og()(),Il(552,"tr",9)(553,"td",17),Qx(554," themeType"),og(),Il(555,"td",18)(556,"code",19),Qx(557," PoThemeTypeEnum "),og()(),Il(558,"td",13)(559,"p"),Qx(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),og()()()(),zl(561,"br"),Il(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),Qx(568," setThemeA11y "),og()()()()(),Il(569,"tr",13)(570,"td",13)(571,"p"),Qx(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),og()()()(),Il(573,"h5")(574,"b"),Qx(575,"Par\xE2metros"),og()(),Il(576,"table",14)(577,"tr",15)(578,"th",16),Qx(579,"Nome"),og(),Il(580,"th",16),Qx(581,"Tipo"),og(),Il(582,"th",16),Qx(583,"Descri\xE7\xE3o"),og()(),Il(584,"tr",9)(585,"td",17),Qx(586," theme"),og(),Il(587,"td",18)(588,"code",19),Qx(589," PoTheme "),og()(),Il(590,"td",13)(591,"p"),Qx(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),og()()(),Il(593,"tr",9)(594,"td",17),Qx(595," a11y"),og(),Il(596,"td",18)(597,"code",19),Qx(598," PoThemeA11yEnum "),og()(),Il(599,"td",13)(600,"p"),Qx(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),og()()()(),zl(602,"br"),Il(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),Qx(609," setCurrentThemeA11y "),og()()()()(),Il(610,"tr",13)(611,"td",13)(612,"p"),Qx(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),og()()()(),Il(614,"h5")(615,"b"),Qx(616,"Par\xE2metros"),og()(),Il(617,"table",14)(618,"tr",15)(619,"th",16),Qx(620,"Nome"),og(),Il(621,"th",16),Qx(622,"Tipo"),og(),Il(623,"th",16),Qx(624,"Descri\xE7\xE3o"),og()(),Il(625,"tr",9)(626,"td",17),Qx(627," a11y"),og(),Il(628,"td",18)(629,"code",19),Qx(630," PoThemeA11yEnum "),og()(),Il(631,"td",13)(632,"p"),Qx(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),og()()()(),zl(634,"br"),Il(635,"h3"),Qx(636,"Interfaces"),og(),Il(637,"h4",23)(638,"code",5),Qx(639,"PoThemeColor"),og()(),Il(640,"div",2)(641,"p"),Qx(642,"Interface para representar as cores do tema."),og()(),Il(643,"h4",7),Qx(644,"Propriedades"),og(),Il(645,"table",14)(646,"tr",15)(647,"th",16),Qx(648,"Nome"),og(),Il(649,"th",16),Qx(650,"Tipo"),og(),Il(651,"th",16),Qx(652,"Descri\xE7\xE3o"),og()(),Il(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),Qx(657," action"),zl(658,"br"),og()()(),Il(659,"td",18)(660,"code",24),Qx(661,"PoThemeColorAction"),og()(),Il(662,"td",13)(663,"em")(664,"strong"),Qx(665,"(opcional)"),og()(),Il(666,"p"),Qx(667,"Cores da Action a serem aplicadas."),og(),Il(668,"p"),Qx(669,"Exemplo de uso:"),og(),Il(670,"pre")(671,"code",25),Qx(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),og()()()(),Il(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),Qx(677," brand"),zl(678,"br"),og()()(),Il(679,"td",18)(680,"code",26),Qx(681,"poThemeColorBrand"),og()(),Il(682,"td",13)(683,"em")(684,"strong"),Qx(685,"(opcional)"),og()(),Il(686,"p"),Qx(687,"Cores da Brand a serem aplicadas."),og(),Il(688,"p"),Qx(689,"Exemplo de uso:"),og(),Il(690,"pre")(691,"code",20),Qx(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),og()()()(),Il(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),Qx(697," categorical"),zl(698,"br"),og()()(),Il(699,"td",18)(700,"code",27),Qx(701,"PoThemeColorCategorical"),og()(),Il(702,"td",13)(703,"em")(704,"strong"),Qx(705,"(opcional)"),og()(),Il(706,"p"),Qx(707,"Cores da Categorical a serem aplicadas."),og(),Il(708,"p"),Qx(709,"Exemplo de uso:"),og(),Il(710,"pre")(711,"code",20),Qx(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),og()()()(),Il(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),Qx(717," categorical-overlay"),zl(718,"br"),og()()(),Il(719,"td",18)(720,"code",27),Qx(721,"PoThemeColorCategorical"),og()(),Il(722,"td",13)(723,"em")(724,"strong"),Qx(725,"(opcional)"),og()(),Il(726,"p"),Qx(727,"Cores da Categorical a serem aplicadas."),og(),Il(728,"p"),Qx(729,"Exemplo de uso:"),og(),Il(730,"pre")(731,"code",20),Qx(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),og()()()(),Il(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),Qx(737," neutral"),zl(738,"br"),og()()(),Il(739,"td",18)(740,"code",28),Qx(741,"PoThemeColorNeutral"),og()(),Il(742,"td",13)(743,"em")(744,"strong"),Qx(745,"(opcional)"),og()(),Il(746,"p"),Qx(747,"Cores Neutrals a serem aplicadas."),og(),Il(748,"p"),Qx(749,"Exemplo de uso:"),og(),Il(750,"pre")(751,"code",20),Qx(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),og()()()()(),Il(753,"h4",23)(754,"code",5),Qx(755,"PoThemeColorAction"),og()(),Il(756,"div",2)(757,"p"),Qx(758,"Interface para as cores de a\xE7\xE3o do tema."),og()(),Il(759,"h4",7),Qx(760,"Propriedades"),og(),Il(761,"table",14)(762,"tr",15)(763,"th",16),Qx(764,"Nome"),og(),Il(765,"th",16),Qx(766,"Tipo"),og(),Il(767,"th",16),Qx(768,"Descri\xE7\xE3o"),og()(),Il(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),Qx(773," default"),zl(774,"br"),og()()(),Il(775,"td",18)(776,"code",29),Qx(777,"string"),og()(),Il(778,"td",13)(779,"em")(780,"strong"),Qx(781,"(opcional)"),og()(),Il(782,"p"),Qx(783,"Cores da Action 'Default'."),og(),Il(784,"p"),Qx(785,"Exemplo de uso:"),og(),Il(786,"pre")(787,"code",20),Qx(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),og()()()(),Il(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),Qx(793," disabled"),zl(794,"br"),og()()(),Il(795,"td",18)(796,"code",29),Qx(797,"string"),og()(),Il(798,"td",13)(799,"em")(800,"strong"),Qx(801,"(opcional)"),og()(),Il(802,"p"),Qx(803,"Cores da Action de 'disabled'."),og(),Il(804,"p"),Qx(805,"Exemplo de uso:"),og(),Il(806,"pre")(807,"code",20),Qx(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),og()()()(),Il(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),Qx(813," focus"),zl(814,"br"),og()()(),Il(815,"td",18)(816,"code",29),Qx(817,"string"),og()(),Il(818,"td",13)(819,"em")(820,"strong"),Qx(821,"(opcional)"),og()(),Il(822,"p"),Qx(823,"Cores da Action para 'focus'."),og(),Il(824,"p"),Qx(825,"Exemplo de uso:"),og(),Il(826,"pre")(827,"code",20),Qx(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),og()()()(),Il(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),Qx(833," hover"),zl(834,"br"),og()()(),Il(835,"td",18)(836,"code",29),Qx(837,"string"),og()(),Il(838,"td",13)(839,"em")(840,"strong"),Qx(841,"(opcional)"),og()(),Il(842,"p"),Qx(843,"Cores da Action para 'hover'."),og(),Il(844,"p"),Qx(845,"Exemplo de uso:"),og(),Il(846,"pre")(847,"code",20),Qx(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),og()()()(),Il(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),Qx(853," pressed"),zl(854,"br"),og()()(),Il(855,"td",18)(856,"code",29),Qx(857,"string"),og()(),Il(858,"td",13)(859,"em")(860,"strong"),Qx(861,"(opcional)"),og()(),Il(862,"p"),Qx(863,"Cores da Action para 'pressed'."),og(),Il(864,"p"),Qx(865,"Exemplo de uso:"),og(),Il(866,"pre")(867,"code",20),Qx(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),og()()()()(),Il(869,"h4",23)(870,"code",5),Qx(871,"PoThemeColorNeutral"),og()(),Il(872,"div",2)(873,"p"),Qx(874,"Interface para as cores neutras do tema."),og()(),Il(875,"h4",7),Qx(876,"Propriedades"),og(),Il(877,"table",14)(878,"tr",15)(879,"th",16),Qx(880,"Nome"),og(),Il(881,"th",16),Qx(882,"Tipo"),og(),Il(883,"th",16),Qx(884,"Descri\xE7\xE3o"),og()(),Il(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),Qx(889," dark"),zl(890,"br"),og()()(),Il(891,"td",18)(892,"code",30),Qx(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),og()(),Il(894,"td",13)(895,"em")(896,"strong"),Qx(897,"(opcional)"),og()(),Il(898,"p"),Qx(899,"Cores Neutrals do tipo 'dark'."),og(),Il(900,"p"),Qx(901,"Exemplo de uso:"),og(),Il(902,"pre")(903,"code",20),Qx(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),og()()()(),Il(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),Qx(909," light"),zl(910,"br"),og()()(),Il(911,"td",18)(912,"code",31),Qx(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),og()(),Il(914,"td",13)(915,"em")(916,"strong"),Qx(917,"(opcional)"),og()(),Il(918,"p"),Qx(919,"Cores Neutrals do tipo 'light'."),og(),Il(920,"p"),Qx(921,"Exemplo de uso:"),og(),Il(922,"pre")(923,"code",20),Qx(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),og()()()(),Il(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),Qx(929," mid"),zl(930,"br"),og()()(),Il(931,"td",18)(932,"code",32),Qx(933,`{ '40'?: string; '60'?: string;
}`),og()(),Il(934,"td",13)(935,"em")(936,"strong"),Qx(937,"(opcional)"),og()(),Il(938,"p"),Qx(939,"Cores Neutrals do tipo 'mid'."),og(),Il(940,"p"),Qx(941,"Exemplo de uso:"),og(),Il(942,"pre")(943,"code",20),Qx(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),og()()()()(),Il(945,"h4",23)(946,"code",5),Qx(947,"PoThemeTokens"),og()(),Il(948,"div",2)(949,"p"),Qx(950,"Interface para o tema da aplica\xE7\xE3o."),og()(),Il(951,"h4",23)(952,"code",5),Qx(953,"PoThemeToken"),og()(),Il(954,"div",2)(955,"p"),Qx(956,"Interface para os tokens do Tema."),og()(),Il(957,"h4",7),Qx(958,"Propriedades"),og(),Il(959,"table",14)(960,"tr",15)(961,"th",16),Qx(962,"Nome"),og(),Il(963,"th",16),Qx(964,"Tipo"),og(),Il(965,"th",16),Qx(966,"Descri\xE7\xE3o"),og()(),Il(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),Qx(971," color"),zl(972,"br"),og()()(),Il(973,"td",18)(974,"code",33),Qx(975,"PoThemeColor"),og()(),Il(976,"td",13)(977,"em")(978,"strong"),Qx(979,"(opcional)"),og()(),Il(980,"p"),Qx(981,"Tokens do tipo 'color'"),og()()(),Il(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),Qx(986," onRoot"),zl(987,"br"),og()()(),Il(988,"td",18)(989,"code",34),Qx(990,"DynamicProperties"),og()(),Il(991,"td",13)(992,"em")(993,"strong"),Qx(994,"(opcional)"),og()(),Il(995,"p"),Qx(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Il(997,"code"),Qx(998,":root"),og()(),Il(999,"p"),Qx(1e3,"Exemplo de uso:"),og(),Il(1001,"pre")(1002,"code",20),Qx(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),og()()()(),Il(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),Qx(1008," perComponent"),zl(1009,"br"),og()()(),Il(1010,"td",18)(1011,"code",34),Qx(1012,"DynamicProperties"),og()(),Il(1013,"td",13)(1014,"em")(1015,"strong"),Qx(1016,"(opcional)"),og()(),Il(1017,"p"),Qx(1018,"Tokens do tipo 'perComponent'"),og(),Il(1019,"p"),Qx(1020,"Exemplo de uso:"),og(),Il(1021,"pre")(1022,"code",20),Qx(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),og()()()()(),Il(1024,"h4",23)(1025,"code",5),Qx(1026,"PoTheme"),og()(),Il(1027,"div",2)(1028,"p"),Qx(1029,"Interface para o m\xE9todo "),Il(1030,"code"),Qx(1031,"setTheme()"),og(),Qx(1032,"."),og()(),Il(1033,"h4",7),Qx(1034,"Propriedades"),og(),Il(1035,"table",14)(1036,"tr",15)(1037,"th",16),Qx(1038,"Nome"),og(),Il(1039,"th",16),Qx(1040,"Tipo"),og(),Il(1041,"th",16),Qx(1042,"Descri\xE7\xE3o"),og()(),Il(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),Qx(1047," active"),zl(1048,"br"),og()()(),Il(1049,"td",18)(1050,"code",35),Qx(1051,"PoThemeTypeEnum "),og(),Il(1052,"code",36),Qx(1053," PoThemeActive"),og()(),Il(1054,"td",13)(1055,"em")(1056,"strong"),Qx(1057,"(opcional)"),og()(),Il(1058,"p"),Qx(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),og()()(),Il(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),Qx(1064," name"),zl(1065,"br"),og()()(),Il(1066,"td",18)(1067,"code",29),Qx(1068,"string"),og()(),Il(1069,"td",13)(1070,"p"),Qx(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),og()()(),Il(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),Qx(1076," type"),zl(1077,"br"),og()()(),Il(1078,"td",18)(1079,"code",37),Qx(1080,"PoThemeType "),og(),Il(1081,"code",38),Qx(1082," Array<PoThemeType>"),og()(),Il(1083,"td",13)(1084,"p"),Qx(1085,"Tipo de tema:"),og(),Il(1086,"ul")(1087,"li"),Qx(1088,"light"),og(),Il(1089,"li"),Qx(1090,"dark"),og()()()()(),Il(1091,"h3"),Qx(1092,"Enums"),og(),Il(1093,"h4",4)(1094,"code",5),Qx(1095,"PoThemeA11yEnum"),og()(),Il(1096,"div",2)(1097,"p"),Qx(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),og(),Il(1099,"pre")(1100,"code"),Qx(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),og()()(),Il(1102,"h4",7),Qx(1103,"Propriedades"),og(),Il(1104,"table",14)(1105,"tr",15)(1106,"th",16),Qx(1107,"Nome"),og(),Il(1108,"th",16),Qx(1109,"Descri\xE7\xE3o"),og()(),Il(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),Qx(1114," AA"),zl(1115,"br"),og()()(),Il(1116,"td",13)(1117,"p"),Qx(1118,"N\xEDvel de acessibilidade AA."),og(),Il(1119,"ul")(1120,"li"),Qx(1121,"Define a espessura do "),Il(1122,"code"),Qx(1123,"outline"),og(),Qx(1124," para "),Il(1125,"strong"),Qx(1126,"2px"),og(),Qx(1127,"."),og(),Il(1128,"li"),Qx(1129,"Disponibiliza o tamanho "),Il(1130,"code"),Qx(1131,"small"),og(),Qx(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),og()()()(),Il(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),Qx(1137," AAA"),zl(1138,"br"),og()()(),Il(1139,"td",13)(1140,"p"),Qx(1141,"N\xEDvel de acessibilidade AAA."),og(),Il(1142,"ul")(1143,"li"),Qx(1144,"Define a espessura do "),Il(1145,"code"),Qx(1146,"outline"),og(),Qx(1147," para "),Il(1148,"strong"),Qx(1149,"4px"),og(),Qx(1150,"."),og(),Il(1151,"li"),Qx(1152,"N\xE3o disponibiliza o tamanho "),Il(1153,"code"),Qx(1154,"small"),og(),Qx(1155," para componentes de formul\xE1rio."),og()()()()(),Il(1156,"h4",4)(1157,"code",5),Qx(1158,"PoThemeTypeEnum"),og()(),Il(1159,"div",2)(1160,"p"),Qx(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),og(),Il(1162,"pre")(1163,"code"),Qx(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),og()()(),Il(1165,"h4",7),Qx(1166,"Propriedades"),og(),Il(1167,"table",14)(1168,"tr",15)(1169,"th",16),Qx(1170,"Nome"),og(),Il(1171,"th",16),Qx(1172,"Descri\xE7\xE3o"),og()(),Il(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),Qx(1177," light"),zl(1178,"br"),og()()(),Il(1179,"td",13)(1180,"p"),Qx(1181,"Define o tema como claro."),og()()(),Il(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),Qx(1186," dark"),zl(1187,"br"),og()()(),Il(1188,"td",13)(1189,"p"),Qx(1190,"Define o tema como escuro."),og()()()()());},encapsulation:2})}return m})();var Ae=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(C(Xn),C(En))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-theme-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-theme-labs-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,fe,Te],encapsulation:2})}return m})();var we=[{path:"",component:Ae}],ye=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[uL.forChild(we),uL]})}return m})();var Ze=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[sr,ye]})}return m})();export{Ze as DocPoThemeModule};