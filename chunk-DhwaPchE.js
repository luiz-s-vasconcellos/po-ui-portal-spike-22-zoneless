import {f as fe$1,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,dN as vo,r as r$1,dO as av,g as s,dP as $de,dQ as qde,dR as rv,dS as Nde,dT as Bde,dU as Rde,dV as ni,cN as lm,ae as Be,cM as Q9,dW as T3,aX as Z9,aF as G9,aY as q9,aG as _k,cQ as Mk,cR as Sk,b0 as Qt,cz as Pz,b4 as L3,cp as Rhe,c8 as wde,cX as I3,c9 as Ghe,b6 as Yo,ba as fNe,aB as wx,F as Sl,H as Wl,aN as e0,a1 as ft,J as og,aM as ww,L as Lp,Q as nw,aP as n0,aO as Ew,R as we$1,av as ql,aw as lo,ax as uo,an as CO,aH as Ka,b8 as Bme,b9 as qme,z as eN,ar as $x,au as dg,bs as fN,a3 as rNe,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Ce=["reactiveFormData"],be=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},Rde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},Bde),{info:s(r$1({},Bde.info),{base:"#0079b8"})}),neutral:r$1({},Nde)},onRoot:s(r$1({},rv.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},rv.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:s(r$1({},qde),{disabled:"var(--color-neutral-mid-40)"}),feedback:s(r$1({},$de),{info:s(r$1({},$de.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:s(r$1({},av.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:r$1({},av.perComponent)}},active:vo.light};constructor(r,a,o){this.cdr=r,this.fb=a,this.poTheme=o,this.poTheme.setA11yDefaultSizeSmall(true);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm();}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,false),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?ni.AAA:ni.AA,this.changeA11yLevel(this.a11yLevel,false),this.themeChangeListenerDefault=()=>{this.changeTheme(0,false),this.theme=0;},this.themeChangeListenerDark=()=>{this.changeTheme(1,false),this.theme=1;},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(ni.AAA,false),this.a11yLevel=ni.AAA;},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(ni.AA,false),this.a11yLevel=ni.AA;},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark);}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA);}changeA11yLevel(r,a=true){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===ni.AA&&this.poTheme.setA11yDefaultSizeSmall(true),a&&window.dispatchEvent(new Event("po-sample-change-a11y"));}changeTheme(r,a=true){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(true);}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(a){return new(a||m)(w(Be),w(Q9),w(T3))};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&ql(Ce,7),a&2){let c;lo(c=uo())&&(o.reactiveFormModal=c.first);}},standalone:false,features:[we$1([T3])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let c=wx();Sl(0,"po-widget",1)(1,"form",2),Wl(2,"po-input",3),e0(),Wl(3,"po-email",4),e0(),Wl(4,"po-input",5),e0(),Wl(5,"po-number",6),e0(),Wl(6,"po-url",7),e0(),Sl(7,"div",8)(8,"po-button",9),ft("p-click",function(){return o.saveForm()}),og()()(),Sl(9,"po-modal",10,0)(11,"div",8),Wl(12,"po-info",11),og(),Sl(13,"div",8),Wl(14,"po-info",12)(15,"po-info",13),og(),Sl(16,"div",8),Wl(17,"po-info",14)(18,"po-info",15),og()()(),Sl(19,"div",16)(20,"po-radio-group",17),ww("ngModelChange",function(h){return Ky(c),nN(o.theme,h)||(o.theme=h),Xy(h)}),ft("p-change",function(h){return o.changeTheme(h)}),og(),e0(),Sl(21,"po-radio-group",18),ww("ngModelChange",function(h){return Ky(c),nN(o.a11yLevel,h)||(o.a11yLevel=h),Xy(h)}),ft("p-change",function(h){return o.changeA11yLevel(h)}),og(),e0(),og();}a&2&&(Lp(),nw("formGroup",o.reactiveForm),Lp(),n0(),Lp(),n0(),Lp(),n0(),Lp(),n0(),Lp(),n0(),Lp(2),nw("p-disabled",!o.reactiveForm.valid),Lp(),nw("p-primary-action",o.modalPrimaryAction),Lp(3),nw("p-value",o.reactiveForm.controls.name.value),Lp(2),nw("p-value",o.reactiveForm.controls.address.value),Lp(),nw("p-value",o.reactiveForm.controls.number.value),Lp(2),nw("p-value",o.reactiveForm.controls.email.value),Lp(),nw("p-value",o.reactiveForm.controls.website.value),Lp(2),Ew("ngModel",o.theme),nw("p-options",o.themeOptions),n0(),Lp(),Ew("ngModel",o.a11yLevel),nw("p-options",o.a11yLevelOptions),n0());},dependencies:[Z9,G9,q9,_k,Mk,Sk,Qt,Pz,L3,Rhe,wde,I3,Ghe,Yo,fNe],encapsulation:2,changeDetection:1})}return m})();var De=m=>({"docs-sample-code-tabs":m}),fe=(()=>{class m{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Theme Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-widget p-title="Example">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-theme-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,be],encapsulation:2})}return m})();var Te=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275cmp=Un({type:m,selectors:[["sample-po-theme-doc"]],standalone:false,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoThemeModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do servi\xE7o PoThemeService."),og()(),Sl(7,"h3",3),eN(8,"Services"),og(),Sl(9,"h4",4)(10,"code",5),eN(11,"PoThemeService"),og()(),Sl(12,"div",2)(13,"p"),eN(14,"O servi\xE7o "),Sl(15,"code"),eN(16,"PoThemeService"),og(),eN(17," permite customizar as cores do tema padr\xE3o do "),Sl(18,"code"),eN(19,"PO-UI"),og(),eN(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),og(),Sl(21,"p"),eN(22,"O n\xEDvel "),Sl(23,"strong"),eN(24,"AAA"),og(),eN(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),Sl(26,"strong"),eN(27,"AA"),og(),eN(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),og(),Sl(29,"p"),eN(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),Sl(31,"strong"),eN(32,"densidade de espa\xE7amentos"),og(),eN(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),og(),Sl(34,"blockquote")(35,"p"),eN(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),Sl(37,"code"),eN(38,"feedback"),og(),eN(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),og()(),Sl(40,"blockquote")(41,"p"),eN(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),Sl(43,"a",6),eN(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),og(),eN(45," na aba "),Sl(46,"code"),eN(47,"Guias"),og(),eN(48,"."),og()()(),Sl(49,"h3",7),eN(50,"M\xE9todos"),og(),Sl(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),eN(57," setTheme "),og()()()()(),Sl(58,"tr",13)(59,"td",13)(60,"p"),eN(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),og(),Sl(62,"p"),eN(63,"Este m\xE9todo configura o tema do componente com base no objeto "),Sl(64,"code"),eN(65,"themeConfig"),og(),eN(66," fornecido, no "),Sl(67,"code"),eN(68,"themeType"),og(),eN(69," e no "),Sl(70,"code"),eN(71,"a11yLevel"),og(),eN(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),og()()()(),Sl(73,"h5")(74,"b"),eN(75,"Par\xE2metros"),og()(),Sl(76,"table",14)(77,"tr",15)(78,"th",16),eN(79,"Nome"),og(),Sl(80,"th",16),eN(81,"Tipo"),og(),Sl(82,"th",16),eN(83,"Descri\xE7\xE3o"),og()(),Sl(84,"tr",9)(85,"td",17),eN(86," themeConfig"),og(),Sl(87,"td",18)(88,"code",19),eN(89," PoTheme "),og()(),Sl(90,"td",13)(91,"p"),eN(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),og()()(),Sl(93,"tr",9)(94,"td",17),eN(95," themeType"),og(),Sl(96,"td",18)(97,"code",19),eN(98," PoThemeTypeEnum "),og()(),Sl(99,"td",13)(100,"p"),eN(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),og()()(),Sl(102,"tr",9)(103,"td",17),eN(104," a11yLevel"),og(),Sl(105,"td",18)(106,"code",19),eN(107," PoThemeA11yEnum "),og()(),Sl(108,"td",13)(109,"p"),eN(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),og()()(),Sl(111,"tr",9)(112,"td",17),eN(113," persistPreference"),og(),Sl(114,"td",18)(115,"code",19),eN(116," boolean "),og()(),Sl(117,"td",13)(118,"p"),eN(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),Sl(120,"code"),eN(121,"true"),og(),eN(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),og()()()(),Wl(123,"br"),Sl(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),eN(130," getA11yLevel "),og()()()()(),Sl(131,"tr",13)(132,"td",13)(133,"p"),eN(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),Sl(135,"code"),eN(136,"AAA"),og(),eN(137," como padr\xE3o."),og()()()(),Sl(138,"h5")(139,"b"),eN(140,"Retorno"),og()(),Sl(141,"table",14)(142,"tr",15)(143,"th",16),eN(144,"Tipo"),og(),Sl(145,"th",16),eN(146,"Descri\xE7\xE3o"),og()(),Sl(147,"tr",9)(148,"td",18)(149,"code",19),eN(150,"PoThemeA11yEnum"),og()(),Sl(151,"td",13)(152,"p"),eN(153,"O n\xEDvel de acessibilidade, que pode ser "),Sl(154,"code"),eN(155,"AA"),og(),eN(156," ou "),Sl(157,"code"),eN(158,"AAA"),og(),eN(159,"."),og()()()(),Wl(160,"br"),Sl(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),eN(167," setA11yDefaultSizeSmall "),og()()()()(),Sl(168,"tr",13)(169,"td",13)(170,"p"),eN(171,"Define o tamanho "),Sl(172,"code"),eN(173,"small"),og(),eN(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),Sl(175,"code"),eN(176,"AA"),og(),eN(177,`. O valor definido \xE9 salvo no
`),Sl(178,"code"),eN(179,"localStorage"),og(),eN(180," sob a chave "),Sl(181,"code"),eN(182,"po-default-size"),og(),eN(183," e o atributo "),Sl(184,"code"),eN(185,"data-default-size"),og(),eN(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),og(),Sl(187,"p"),eN(188,"Exemplo de uso:"),og(),Sl(189,"pre")(190,"code",20),eN(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),og()(),Sl(192,"blockquote")(193,"p"),eN(194,"Para garantir que o tamanho "),Sl(195,"code"),eN(196,"small"),og(),eN(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),Sl(198,"strong"),eN(199,"junto com o n\xEDvel de acessibilidade "),Sl(200,"code"),eN(201,"AA"),og(),eN(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),og(),eN(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),Sl(204,"code"),eN(205,"setDensityMode"),og(),eN(206," conforme necess\xE1rio."),og()()()()(),Sl(207,"h5")(208,"b"),eN(209,"Par\xE2metros"),og()(),Sl(210,"table",14)(211,"tr",15)(212,"th",16),eN(213,"Nome"),og(),Sl(214,"th",16),eN(215,"Tipo"),og(),Sl(216,"th",16),eN(217,"Descri\xE7\xE3o"),og()(),Sl(218,"tr",9)(219,"td",17),eN(220," enable"),og(),Sl(221,"td",18)(222,"code",19),eN(223," boolean "),og()(),Sl(224,"td",13)(225,"p"),eN(226,"Habilita ou desabilita o tamanho "),Sl(227,"code"),eN(228,"small"),og(),eN(229," globalmente."),og()()()(),Wl(230,"br"),Sl(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),eN(237," getDensityMode "),og()()()()(),Sl(238,"tr",13)(239,"td",13)(240,"p"),eN(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),Sl(242,"code"),eN(243,"medium"),og(),eN(244," como padr\xE3o."),og()()()(),Sl(245,"h5")(246,"b"),eN(247,"Retorno"),og()(),Sl(248,"table",14)(249,"tr",15)(250,"th",16),eN(251,"Tipo"),og(),Sl(252,"th",16),eN(253,"Descri\xE7\xE3o"),og()(),Sl(254,"tr",9)(255,"td",18)(256,"code",19),eN(257,"PoDensityMode"),og()(),Sl(258,"td",13)(259,"p"),eN(260,"O modo de adensamento, que pode ser "),Sl(261,"code"),eN(262,"small"),og(),eN(263," ou "),Sl(264,"code"),eN(265,"medium"),og(),eN(266,"."),og()()()(),Wl(267,"br"),Sl(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),eN(274," setDensityMode "),og()()()()(),Sl(275,"tr",13)(276,"td",13)(277,"p"),eN(278,"Aplica o modo de adensamento compacto ("),Sl(279,"code"),eN(280,"small"),og(),eN(281,") ou espa\xE7oso ("),Sl(282,"code"),eN(283,"medium"),og(),eN(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),Sl(285,"code"),eN(286,"localStorage"),og(),eN(287,` sob a chave
`),Sl(288,"code"),eN(289,"po-density-mode"),og(),eN(290,"."),og()()()(),Sl(291,"h5")(292,"b"),eN(293,"Par\xE2metros"),og()(),Sl(294,"table",14)(295,"tr",15)(296,"th",16),eN(297,"Nome"),og(),Sl(298,"th",16),eN(299,"Tipo"),og(),Sl(300,"th",16),eN(301,"Descri\xE7\xE3o"),og()(),Sl(302,"tr",9)(303,"td",17),eN(304," mode"),og(),Sl(305,"td",18)(306,"code",21),eN(307," 'small' "),og(),Sl(308,"code",22),eN(309," 'medium' "),og()(),Sl(310,"td",13)(311,"p"),eN(312,"Define o modo de densidade: "),Sl(313,"code"),eN(314,"small"),og(),eN(315," para compacto, "),Sl(316,"code"),eN(317,"medium"),og(),eN(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),Sl(319,"code"),eN(320,"medium"),og(),eN(321,"."),og()()()(),Wl(322,"br"),Sl(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),eN(329," persistThemeActive "),og()()()()(),Sl(330,"tr",13)(331,"td",13)(332,"p"),eN(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),Sl(334,"code"),eN(335,"localStorage"),og(),eN(336," para uso em recarregamentos futuros."),og()()()(),Sl(337,"h5")(338,"b"),eN(339,"Retorno"),og()(),Sl(340,"table",14)(341,"tr",15)(342,"th",16),eN(343,"Tipo"),og(),Sl(344,"th",16),eN(345,"Descri\xE7\xE3o"),og()(),Sl(346,"tr",9)(347,"td",18)(348,"code",19),eN(349,"PoTheme"),og()(),Sl(350,"td",13)(351,"p"),eN(352,"O tema atualmente aplicado."),og()()()(),Wl(353,"br"),Sl(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),eN(360," changeCurrentThemeType "),og()()()()(),Sl(361,"tr",13)(362,"td",13)(363,"p"),eN(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),og(),Sl(365,"p"),eN(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),og()()()(),Sl(367,"h5")(368,"b"),eN(369,"Par\xE2metros"),og()(),Sl(370,"table",14)(371,"tr",15)(372,"th",16),eN(373,"Nome"),og(),Sl(374,"th",16),eN(375,"Tipo"),og(),Sl(376,"th",16),eN(377,"Descri\xE7\xE3o"),og()(),Sl(378,"tr",9)(379,"td",17),eN(380," themeType"),og(),Sl(381,"td",18)(382,"code",19),eN(383," PoThemeTypeEnum "),og()(),Sl(384,"td",13)(385,"p"),eN(386,"O tipo de tema a ser aplicado, light ou dark."),og()()()(),Wl(387,"br"),Sl(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),eN(394," cleanThemeActive "),og()()()()(),Sl(395,"tr",13)(396,"td",13)(397,"p"),eN(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),og()()()(),Sl(399,"h5")(400,"b"),eN(401,"Par\xE2metros"),og()(),Sl(402,"table",14)(403,"tr",15)(404,"th",16),eN(405,"Nome"),og(),Sl(406,"th",16),eN(407,"Tipo"),og(),Sl(408,"th",16),eN(409,"Descri\xE7\xE3o"),og()(),Sl(410,"tr",9)(411,"td",17),eN(412," persistPreference"),og(),Sl(413,"td",18)(414,"code",19),eN(415," boolean "),og()(),Sl(416,"td",13)(417,"p"),eN(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),Sl(419,"code"),eN(420,"true"),og(),eN(421," para remover, "),Sl(422,"code"),eN(423,"false"),og(),eN(424," para manter."),og()()()(),Wl(425,"br"),Sl(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),eN(432," getThemeActive "),og()()()()(),Sl(433,"tr",13)(434,"td",13)(435,"p"),eN(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),Sl(437,"code"),eN(438,"localStorage"),og(),eN(439,"."),og()()()(),Sl(440,"h5")(441,"b"),eN(442,"Retorno"),og()(),Sl(443,"table",14)(444,"tr",15)(445,"th",16),eN(446,"Tipo"),og(),Sl(447,"th",16),eN(448,"Descri\xE7\xE3o"),og()(),Sl(449,"tr",9)(450,"td",18)(451,"code",19),eN(452,"PoTheme"),og()(),Sl(453,"td",13)(454,"p"),eN(455,"Tema ativo."),og()()()(),Wl(456,"br"),Sl(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),eN(463," setDefaultTheme "),og()()()()(),Sl(464,"tr",13)(465,"td",13)(466,"p"),eN(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),og()()()(),Sl(468,"h5")(469,"b"),eN(470,"Par\xE2metros"),og()(),Sl(471,"table",14)(472,"tr",15)(473,"th",16),eN(474,"Nome"),og(),Sl(475,"th",16),eN(476,"Tipo"),og(),Sl(477,"th",16),eN(478,"Descri\xE7\xE3o"),og()(),Sl(479,"tr",9)(480,"td",17),eN(481," type"),og(),Sl(482,"td",18)(483,"code",19),eN(484," PoThemeTypeEnum "),og()(),Sl(485,"td",13)(486,"p"),eN(487,"O tipo de Tema a ser aplicado, light / dark."),og()()()(),Wl(488,"br"),Sl(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),eN(495," setThemeType "),og()()()()(),Sl(496,"tr",13)(497,"td",13)(498,"p"),eN(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),og()()()(),Sl(500,"h5")(501,"b"),eN(502,"Par\xE2metros"),og()(),Sl(503,"table",14)(504,"tr",15)(505,"th",16),eN(506,"Nome"),og(),Sl(507,"th",16),eN(508,"Tipo"),og(),Sl(509,"th",16),eN(510,"Descri\xE7\xE3o"),og()(),Sl(511,"tr",9)(512,"td",17),eN(513," theme"),og(),Sl(514,"td",18)(515,"code",19),eN(516," PoTheme "),og()(),Sl(517,"td",13)(518,"p"),eN(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),og()()(),Sl(520,"tr",9)(521,"td",17),eN(522," themeType"),og(),Sl(523,"td",18)(524,"code",19),eN(525," PoThemeTypeEnum "),og()(),Sl(526,"td",13)(527,"p"),eN(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),og()()()(),Wl(529,"br"),Sl(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),eN(536," setCurrentThemeType "),og()()()()(),Sl(537,"tr",13)(538,"td",13)(539,"p"),eN(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),og()()()(),Sl(541,"h5")(542,"b"),eN(543,"Par\xE2metros"),og()(),Sl(544,"table",14)(545,"tr",15)(546,"th",16),eN(547,"Nome"),og(),Sl(548,"th",16),eN(549,"Tipo"),og(),Sl(550,"th",16),eN(551,"Descri\xE7\xE3o"),og()(),Sl(552,"tr",9)(553,"td",17),eN(554," themeType"),og(),Sl(555,"td",18)(556,"code",19),eN(557," PoThemeTypeEnum "),og()(),Sl(558,"td",13)(559,"p"),eN(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),og()()()(),Wl(561,"br"),Sl(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),eN(568," setThemeA11y "),og()()()()(),Sl(569,"tr",13)(570,"td",13)(571,"p"),eN(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),og()()()(),Sl(573,"h5")(574,"b"),eN(575,"Par\xE2metros"),og()(),Sl(576,"table",14)(577,"tr",15)(578,"th",16),eN(579,"Nome"),og(),Sl(580,"th",16),eN(581,"Tipo"),og(),Sl(582,"th",16),eN(583,"Descri\xE7\xE3o"),og()(),Sl(584,"tr",9)(585,"td",17),eN(586," theme"),og(),Sl(587,"td",18)(588,"code",19),eN(589," PoTheme "),og()(),Sl(590,"td",13)(591,"p"),eN(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),og()()(),Sl(593,"tr",9)(594,"td",17),eN(595," a11y"),og(),Sl(596,"td",18)(597,"code",19),eN(598," PoThemeA11yEnum "),og()(),Sl(599,"td",13)(600,"p"),eN(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),og()()()(),Wl(602,"br"),Sl(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),eN(609," setCurrentThemeA11y "),og()()()()(),Sl(610,"tr",13)(611,"td",13)(612,"p"),eN(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),og()()()(),Sl(614,"h5")(615,"b"),eN(616,"Par\xE2metros"),og()(),Sl(617,"table",14)(618,"tr",15)(619,"th",16),eN(620,"Nome"),og(),Sl(621,"th",16),eN(622,"Tipo"),og(),Sl(623,"th",16),eN(624,"Descri\xE7\xE3o"),og()(),Sl(625,"tr",9)(626,"td",17),eN(627," a11y"),og(),Sl(628,"td",18)(629,"code",19),eN(630," PoThemeA11yEnum "),og()(),Sl(631,"td",13)(632,"p"),eN(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),og()()()(),Wl(634,"br"),Sl(635,"h3"),eN(636,"Interfaces"),og(),Sl(637,"h4",23)(638,"code",5),eN(639,"PoThemeColor"),og()(),Sl(640,"div",2)(641,"p"),eN(642,"Interface para representar as cores do tema."),og()(),Sl(643,"h4",7),eN(644,"Propriedades"),og(),Sl(645,"table",14)(646,"tr",15)(647,"th",16),eN(648,"Nome"),og(),Sl(649,"th",16),eN(650,"Tipo"),og(),Sl(651,"th",16),eN(652,"Descri\xE7\xE3o"),og()(),Sl(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),eN(657," action"),Wl(658,"br"),og()()(),Sl(659,"td",18)(660,"code",24),eN(661,"PoThemeColorAction"),og()(),Sl(662,"td",13)(663,"em")(664,"strong"),eN(665,"(opcional)"),og()(),Sl(666,"p"),eN(667,"Cores da Action a serem aplicadas."),og(),Sl(668,"p"),eN(669,"Exemplo de uso:"),og(),Sl(670,"pre")(671,"code",25),eN(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),og()()()(),Sl(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),eN(677," brand"),Wl(678,"br"),og()()(),Sl(679,"td",18)(680,"code",26),eN(681,"poThemeColorBrand"),og()(),Sl(682,"td",13)(683,"em")(684,"strong"),eN(685,"(opcional)"),og()(),Sl(686,"p"),eN(687,"Cores da Brand a serem aplicadas."),og(),Sl(688,"p"),eN(689,"Exemplo de uso:"),og(),Sl(690,"pre")(691,"code",20),eN(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),og()()()(),Sl(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),eN(697," categorical"),Wl(698,"br"),og()()(),Sl(699,"td",18)(700,"code",27),eN(701,"PoThemeColorCategorical"),og()(),Sl(702,"td",13)(703,"em")(704,"strong"),eN(705,"(opcional)"),og()(),Sl(706,"p"),eN(707,"Cores da Categorical a serem aplicadas."),og(),Sl(708,"p"),eN(709,"Exemplo de uso:"),og(),Sl(710,"pre")(711,"code",20),eN(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),og()()()(),Sl(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),eN(717," categorical-overlay"),Wl(718,"br"),og()()(),Sl(719,"td",18)(720,"code",27),eN(721,"PoThemeColorCategorical"),og()(),Sl(722,"td",13)(723,"em")(724,"strong"),eN(725,"(opcional)"),og()(),Sl(726,"p"),eN(727,"Cores da Categorical a serem aplicadas."),og(),Sl(728,"p"),eN(729,"Exemplo de uso:"),og(),Sl(730,"pre")(731,"code",20),eN(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),og()()()(),Sl(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),eN(737," neutral"),Wl(738,"br"),og()()(),Sl(739,"td",18)(740,"code",28),eN(741,"PoThemeColorNeutral"),og()(),Sl(742,"td",13)(743,"em")(744,"strong"),eN(745,"(opcional)"),og()(),Sl(746,"p"),eN(747,"Cores Neutrals a serem aplicadas."),og(),Sl(748,"p"),eN(749,"Exemplo de uso:"),og(),Sl(750,"pre")(751,"code",20),eN(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),og()()()()(),Sl(753,"h4",23)(754,"code",5),eN(755,"PoThemeColorAction"),og()(),Sl(756,"div",2)(757,"p"),eN(758,"Interface para as cores de a\xE7\xE3o do tema."),og()(),Sl(759,"h4",7),eN(760,"Propriedades"),og(),Sl(761,"table",14)(762,"tr",15)(763,"th",16),eN(764,"Nome"),og(),Sl(765,"th",16),eN(766,"Tipo"),og(),Sl(767,"th",16),eN(768,"Descri\xE7\xE3o"),og()(),Sl(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),eN(773," default"),Wl(774,"br"),og()()(),Sl(775,"td",18)(776,"code",29),eN(777,"string"),og()(),Sl(778,"td",13)(779,"em")(780,"strong"),eN(781,"(opcional)"),og()(),Sl(782,"p"),eN(783,"Cores da Action 'Default'."),og(),Sl(784,"p"),eN(785,"Exemplo de uso:"),og(),Sl(786,"pre")(787,"code",20),eN(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),og()()()(),Sl(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),eN(793," disabled"),Wl(794,"br"),og()()(),Sl(795,"td",18)(796,"code",29),eN(797,"string"),og()(),Sl(798,"td",13)(799,"em")(800,"strong"),eN(801,"(opcional)"),og()(),Sl(802,"p"),eN(803,"Cores da Action de 'disabled'."),og(),Sl(804,"p"),eN(805,"Exemplo de uso:"),og(),Sl(806,"pre")(807,"code",20),eN(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),og()()()(),Sl(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),eN(813," focus"),Wl(814,"br"),og()()(),Sl(815,"td",18)(816,"code",29),eN(817,"string"),og()(),Sl(818,"td",13)(819,"em")(820,"strong"),eN(821,"(opcional)"),og()(),Sl(822,"p"),eN(823,"Cores da Action para 'focus'."),og(),Sl(824,"p"),eN(825,"Exemplo de uso:"),og(),Sl(826,"pre")(827,"code",20),eN(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),og()()()(),Sl(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),eN(833," hover"),Wl(834,"br"),og()()(),Sl(835,"td",18)(836,"code",29),eN(837,"string"),og()(),Sl(838,"td",13)(839,"em")(840,"strong"),eN(841,"(opcional)"),og()(),Sl(842,"p"),eN(843,"Cores da Action para 'hover'."),og(),Sl(844,"p"),eN(845,"Exemplo de uso:"),og(),Sl(846,"pre")(847,"code",20),eN(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),og()()()(),Sl(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),eN(853," pressed"),Wl(854,"br"),og()()(),Sl(855,"td",18)(856,"code",29),eN(857,"string"),og()(),Sl(858,"td",13)(859,"em")(860,"strong"),eN(861,"(opcional)"),og()(),Sl(862,"p"),eN(863,"Cores da Action para 'pressed'."),og(),Sl(864,"p"),eN(865,"Exemplo de uso:"),og(),Sl(866,"pre")(867,"code",20),eN(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),og()()()()(),Sl(869,"h4",23)(870,"code",5),eN(871,"PoThemeColorNeutral"),og()(),Sl(872,"div",2)(873,"p"),eN(874,"Interface para as cores neutras do tema."),og()(),Sl(875,"h4",7),eN(876,"Propriedades"),og(),Sl(877,"table",14)(878,"tr",15)(879,"th",16),eN(880,"Nome"),og(),Sl(881,"th",16),eN(882,"Tipo"),og(),Sl(883,"th",16),eN(884,"Descri\xE7\xE3o"),og()(),Sl(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),eN(889," dark"),Wl(890,"br"),og()()(),Sl(891,"td",18)(892,"code",30),eN(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),og()(),Sl(894,"td",13)(895,"em")(896,"strong"),eN(897,"(opcional)"),og()(),Sl(898,"p"),eN(899,"Cores Neutrals do tipo 'dark'."),og(),Sl(900,"p"),eN(901,"Exemplo de uso:"),og(),Sl(902,"pre")(903,"code",20),eN(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),og()()()(),Sl(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),eN(909," light"),Wl(910,"br"),og()()(),Sl(911,"td",18)(912,"code",31),eN(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),og()(),Sl(914,"td",13)(915,"em")(916,"strong"),eN(917,"(opcional)"),og()(),Sl(918,"p"),eN(919,"Cores Neutrals do tipo 'light'."),og(),Sl(920,"p"),eN(921,"Exemplo de uso:"),og(),Sl(922,"pre")(923,"code",20),eN(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),og()()()(),Sl(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),eN(929," mid"),Wl(930,"br"),og()()(),Sl(931,"td",18)(932,"code",32),eN(933,`{ '40'?: string; '60'?: string;
}`),og()(),Sl(934,"td",13)(935,"em")(936,"strong"),eN(937,"(opcional)"),og()(),Sl(938,"p"),eN(939,"Cores Neutrals do tipo 'mid'."),og(),Sl(940,"p"),eN(941,"Exemplo de uso:"),og(),Sl(942,"pre")(943,"code",20),eN(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),og()()()()(),Sl(945,"h4",23)(946,"code",5),eN(947,"PoThemeTokens"),og()(),Sl(948,"div",2)(949,"p"),eN(950,"Interface para o tema da aplica\xE7\xE3o."),og()(),Sl(951,"h4",23)(952,"code",5),eN(953,"PoThemeToken"),og()(),Sl(954,"div",2)(955,"p"),eN(956,"Interface para os tokens do Tema."),og()(),Sl(957,"h4",7),eN(958,"Propriedades"),og(),Sl(959,"table",14)(960,"tr",15)(961,"th",16),eN(962,"Nome"),og(),Sl(963,"th",16),eN(964,"Tipo"),og(),Sl(965,"th",16),eN(966,"Descri\xE7\xE3o"),og()(),Sl(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),eN(971," color"),Wl(972,"br"),og()()(),Sl(973,"td",18)(974,"code",33),eN(975,"PoThemeColor"),og()(),Sl(976,"td",13)(977,"em")(978,"strong"),eN(979,"(opcional)"),og()(),Sl(980,"p"),eN(981,"Tokens do tipo 'color'"),og()()(),Sl(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),eN(986," onRoot"),Wl(987,"br"),og()()(),Sl(988,"td",18)(989,"code",34),eN(990,"DynamicProperties"),og()(),Sl(991,"td",13)(992,"em")(993,"strong"),eN(994,"(opcional)"),og()(),Sl(995,"p"),eN(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),Sl(997,"code"),eN(998,":root"),og()(),Sl(999,"p"),eN(1e3,"Exemplo de uso:"),og(),Sl(1001,"pre")(1002,"code",20),eN(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),og()()()(),Sl(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),eN(1008," perComponent"),Wl(1009,"br"),og()()(),Sl(1010,"td",18)(1011,"code",34),eN(1012,"DynamicProperties"),og()(),Sl(1013,"td",13)(1014,"em")(1015,"strong"),eN(1016,"(opcional)"),og()(),Sl(1017,"p"),eN(1018,"Tokens do tipo 'perComponent'"),og(),Sl(1019,"p"),eN(1020,"Exemplo de uso:"),og(),Sl(1021,"pre")(1022,"code",20),eN(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),og()()()()(),Sl(1024,"h4",23)(1025,"code",5),eN(1026,"PoTheme"),og()(),Sl(1027,"div",2)(1028,"p"),eN(1029,"Interface para o m\xE9todo "),Sl(1030,"code"),eN(1031,"setTheme()"),og(),eN(1032,"."),og()(),Sl(1033,"h4",7),eN(1034,"Propriedades"),og(),Sl(1035,"table",14)(1036,"tr",15)(1037,"th",16),eN(1038,"Nome"),og(),Sl(1039,"th",16),eN(1040,"Tipo"),og(),Sl(1041,"th",16),eN(1042,"Descri\xE7\xE3o"),og()(),Sl(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),eN(1047," active"),Wl(1048,"br"),og()()(),Sl(1049,"td",18)(1050,"code",35),eN(1051,"PoThemeTypeEnum "),og(),Sl(1052,"code",36),eN(1053," PoThemeActive"),og()(),Sl(1054,"td",13)(1055,"em")(1056,"strong"),eN(1057,"(opcional)"),og()(),Sl(1058,"p"),eN(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),og()()(),Sl(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),eN(1064," name"),Wl(1065,"br"),og()()(),Sl(1066,"td",18)(1067,"code",29),eN(1068,"string"),og()(),Sl(1069,"td",13)(1070,"p"),eN(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),og()()(),Sl(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),eN(1076," type"),Wl(1077,"br"),og()()(),Sl(1078,"td",18)(1079,"code",37),eN(1080,"PoThemeType "),og(),Sl(1081,"code",38),eN(1082," Array<PoThemeType>"),og()(),Sl(1083,"td",13)(1084,"p"),eN(1085,"Tipo de tema:"),og(),Sl(1086,"ul")(1087,"li"),eN(1088,"light"),og(),Sl(1089,"li"),eN(1090,"dark"),og()()()()(),Sl(1091,"h3"),eN(1092,"Enums"),og(),Sl(1093,"h4",4)(1094,"code",5),eN(1095,"PoThemeA11yEnum"),og()(),Sl(1096,"div",2)(1097,"p"),eN(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),og(),Sl(1099,"pre")(1100,"code"),eN(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),og()()(),Sl(1102,"h4",7),eN(1103,"Propriedades"),og(),Sl(1104,"table",14)(1105,"tr",15)(1106,"th",16),eN(1107,"Nome"),og(),Sl(1108,"th",16),eN(1109,"Descri\xE7\xE3o"),og()(),Sl(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),eN(1114," AA"),Wl(1115,"br"),og()()(),Sl(1116,"td",13)(1117,"p"),eN(1118,"N\xEDvel de acessibilidade AA."),og(),Sl(1119,"ul")(1120,"li"),eN(1121,"Define a espessura do "),Sl(1122,"code"),eN(1123,"outline"),og(),eN(1124," para "),Sl(1125,"strong"),eN(1126,"2px"),og(),eN(1127,"."),og(),Sl(1128,"li"),eN(1129,"Disponibiliza o tamanho "),Sl(1130,"code"),eN(1131,"small"),og(),eN(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),og()()()(),Sl(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),eN(1137," AAA"),Wl(1138,"br"),og()()(),Sl(1139,"td",13)(1140,"p"),eN(1141,"N\xEDvel de acessibilidade AAA."),og(),Sl(1142,"ul")(1143,"li"),eN(1144,"Define a espessura do "),Sl(1145,"code"),eN(1146,"outline"),og(),eN(1147," para "),Sl(1148,"strong"),eN(1149,"4px"),og(),eN(1150,"."),og(),Sl(1151,"li"),eN(1152,"N\xE3o disponibiliza o tamanho "),Sl(1153,"code"),eN(1154,"small"),og(),eN(1155," para componentes de formul\xE1rio."),og()()()()(),Sl(1156,"h4",4)(1157,"code",5),eN(1158,"PoThemeTypeEnum"),og()(),Sl(1159,"div",2)(1160,"p"),eN(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),og(),Sl(1162,"pre")(1163,"code"),eN(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),og()()(),Sl(1165,"h4",7),eN(1166,"Propriedades"),og(),Sl(1167,"table",14)(1168,"tr",15)(1169,"th",16),eN(1170,"Nome"),og(),Sl(1171,"th",16),eN(1172,"Descri\xE7\xE3o"),og()(),Sl(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),eN(1177," light"),Wl(1178,"br"),og()()(),Sl(1179,"td",13)(1180,"p"),eN(1181,"Define o tema como claro."),og()()(),Sl(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),eN(1186," dark"),Wl(1187,"br"),og()()(),Sl(1188,"td",13)(1189,"p"),eN(1190,"Define o tema como escuro."),og()()()()());},encapsulation:2})}return m})();var Ae=(()=>{class m{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||m)(w(Xn),w(En))};static \u0275cmp=Un({type:m,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-theme-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-theme-labs-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,fe,Te],encapsulation:2})}return m})();var we=[{path:"",component:Ae}],ye=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[hL.forChild(we),hL]})}return m})();var Ze=(()=>{class m{static \u0275fac=function(a){return new(a||m)};static \u0275mod=fe$1({type:m});static \u0275inj=ue({imports:[sr,ye]})}return m})();export{Ze as DocPoThemeModule};