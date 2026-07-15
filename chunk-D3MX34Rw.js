import {f as fe,u as ue$1,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,bB as cc,F as Wl,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,O as rw,bs as gN,aX as Q9,aF as Z9,aY as K9,aG as wk,aZ as _k,b0 as Qt,b1 as mv,b4 as L3,c8 as Tde,bH as k3,c9 as jhe,bc as jO,aB as Ix,aM as Cw,aN as n0,a4 as EN,aO as ww,aP as i0,a5 as CN,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aT as oN,aE as Xy,bd as kx}from'./main-TVDUJ47Y.js';var pe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,o){l&1&&Wl(0,"po-checkbox",0);},dependencies:[cc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Checkbox Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Se,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,pe],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let d=Ix();Sl(0,"po-checkbox",1),Cw("ngModelChange",function(r){return Ky(d),oN(o.checkbox,r)||(o.checkbox=r),Xy(r)}),ft("p-change",function(){return o.changeEvent("p-change")})("p-keydown",function(){return o.changeEvent("p-keydown")}),og(),n0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),EN(4,"json"),Wl(5,"po-info",4),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",2)(10,"po-input",5),Cw("ngModelChange",function(r){return Ky(d),oN(o.label,r)||(o.label=r),Xy(r)}),og(),n0(),Sl(11,"po-input",6),Cw("ngModelChange",function(r){return Ky(d),oN(o.help,r)||(o.help=r),Xy(r)}),og(),n0(),Sl(12,"po-input",7),Cw("ngModelChange",function(r){return Ky(d),oN(o.helperText,r)||(o.helperText=r),Xy(r)}),og(),n0(),Sl(13,"po-switch",8),Cw("ngModelChange",function(r){return Ky(d),oN(o.disabled,r)||(o.disabled=r),Xy(r)}),og(),n0(),Sl(14,"po-switch",9),Cw("ngModelChange",function(r){return Ky(d),oN(o.labelTextWrap,r)||(o.labelTextWrap=r),Xy(r)}),og(),n0(),Sl(15,"po-switch",10),Cw("ngModelChange",function(r){return Ky(d),oN(o.compactLabel,r)||(o.compactLabel=r),Xy(r)}),og(),n0(),Sl(16,"po-radio-group",11),Cw("ngModelChange",function(r){return Ky(d),oN(o.size,r)||(o.size=r),Xy(r)}),og(),n0(),og(),Sl(17,"div",2)(18,"po-button",12),ft("p-click",function(){return o.restore()}),og()()();}l&2&&(ww("ngModel",o.checkbox),rw("p-helper",o.helperText)("p-disabled",o.disabled)("p-help",o.help)("p-label",o.label)("p-size",o.size)("p-label-text-wrap",o.labelTextWrap)("p-compact-label",o.compactLabel),i0(),Lp(3),rw("p-value",CN(4,18,o.checkbox)),Lp(2),rw("p-value",o.event),Lp(5),ww("ngModel",o.label),i0(),Lp(),ww("ngModel",o.help),i0(),Lp(),ww("ngModel",o.helperText),i0(),Lp(),ww("ngModel",o.disabled),i0(),Lp(),ww("ngModel",o.labelTextWrap),i0(),Lp(),ww("ngModel",o.compactLabel),i0(),Lp(),ww("ngModel",o.size),rw("p-options",o.sizeOptions),i0());},dependencies:[Q9,Z9,K9,wk,_k,Qt,mv,cc,L3,Tde,k3,jhe,jO],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Checkbox Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-label-text-wrap]="labelTextWrap"
  [p-compact-label]="compactLabel"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
    <po-switch class="po-sm-3" name="labelTextWrap" [(ngModel)]="labelTextWrap" p-label="Label Text Wrap"> </po-switch>
    <po-switch class="po-sm-3" name="compactLabel" [(ngModel)]="compactLabel" p-label="Compact Label"> </po-switch>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  helperText: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;
  labelTextWrap: boolean;
  compactLabel: boolean;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
    this.compactLabel = false;
  }
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ve,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,de],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let d;lo(d=uo())&&(o.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,o){if(l&1){let d=Ix();Sl(0,"po-button",1),ft("p-click",function(){Ky(d);let r=kx(2);return Xy(r.open())}),og(),Sl(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),rN(6,"MIT License"),og()(),Sl(7,"div",4)(8,"h4"),rN(9,"Copyright (c) 2019 PO UI"),og()(),Wl(10,"po-divider",4),Sl(11,"div",4)(12,"p"),rN(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),og(),Wl(14,"br"),Sl(15,"p"),rN(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),og(),Wl(17,"br"),Sl(18,"p"),rN(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),og()()(),Wl(20,"po-divider"),Sl(21,"div",6)(22,"po-checkbox",7),Cw("ngModelChange",function(r){return Ky(d),oN(o.acceptance,r)||(o.acceptance=r),Xy(r)}),ft("p-change",function(){return o.primaryAction.disabled=!o.acceptance}),og(),n0(),og()();}l&2&&(Lp(),rw("p-primary-action",o.primaryAction),Lp(21),ww("ngModel",o.acceptance),i0());},dependencies:[Z9,wk,Qt,mv,cc,Yo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Checkbox - Acceptance Term"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-acceptance-term"),og(),Wl(23,"hr")),l&2&&(Lp(5),Gx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,we,o.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,se],encapsulation:2,changeDetection:1})}return i})();var he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),rN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),rN(11,"FormsModule"),og(),rN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),rN(14,"ReactiveFormsModule"),og(),rN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),rN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),rN(20,"PoCheckboxComponent"),og()(),Sl(21,"div",2)(22,"p"),rN(23,"O componente "),Sl(24,"code"),rN(25,"po-checkbox"),og(),rN(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Sl(27,"em"),rN(28,"click"),og(),rN(29," do "),Sl(30,"em"),rN(31,"mouse"),og(),rN(32," quanto por meio da tecla "),Sl(33,"em"),rN(34,"space"),og(),rN(35," quando estiver com foco."),og(),Sl(36,"p"),rN(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),og(),Sl(38,"blockquote")(39,"p"),rN(40,"O "),Sl(41,"em"),rN(42,"model"),og(),rN(43," deste componente aceitar\xE1 valores igual \xE0 "),Sl(44,"code"),rN(45,"true"),og(),rN(46,", "),Sl(47,"code"),rN(48,"false"),og(),rN(49," ou "),Sl(50,"code"),rN(51,"null"),og(),rN(52," para quando for indeterminado/mixed."),og()(),Sl(53,"p")(54,"strong"),rN(55,"Acessibilidade tratada no componente:"),og()(),Sl(56,"p"),rN(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(58,"ul")(59,"li"),rN(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Sl(61,"a",6),rN(62,"WCAG 4.1.2: Name, Role, Value"),og()(),Sl(63,"li"),rN(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(65,"a",7),rN(66,"WCAG 2.4.12: Focus Appearance"),og()(),Sl(67,"li"),rN(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),Sl(69,"a",8),rN(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Sl(71,"h4"),rN(72,"Tokens customiz\xE1veis"),og(),Sl(73,"p"),rN(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(75,"blockquote")(76,"p"),rN(77,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(78,"a",9),rN(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),rN(80,"."),og()(),Sl(81,"table")(82,"thead")(83,"tr")(84,"th"),rN(85,"Propriedade"),og(),Sl(86,"th"),rN(87,"Descri\xE7\xE3o"),og(),Sl(88,"th"),rN(89,"Valor Padr\xE3o"),og()()(),Sl(90,"tbody")(91,"tr")(92,"td")(93,"strong"),rN(94,"Default Values"),og()(),Wl(95,"td")(96,"td"),og(),Sl(97,"tr")(98,"td")(99,"code"),rN(100,"--border-color"),og()(),Sl(101,"td"),rN(102,"Cor da borda"),og(),Sl(103,"td")(104,"code"),rN(105,"var(--color-neutral-dark-70)"),og()()(),Sl(106,"tr")(107,"td")(108,"code"),rN(109,"--color-unchecked"),og()(),Sl(110,"td"),rN(111,"Cor quando n\xE3o selecionado"),og(),Sl(112,"td")(113,"code"),rN(114,"var(--color-neutral-light-00)"),og()()(),Sl(115,"tr")(116,"td")(117,"code"),rN(118,"--color-checked"),og()(),Sl(119,"td"),rN(120,"Cor quando selecionado"),og(),Sl(121,"td")(122,"code"),rN(123,"var(--color-action-default)"),og()()(),Sl(124,"tr")(125,"td")(126,"code"),rN(127,"--field-container-title-justify"),og()(),Sl(128,"td"),rN(129,"Alinhamento horizontal do t\xEDtulo ("),Sl(130,"code"),rN(131,"justify-content"),og(),rN(132,")"),og(),Sl(133,"td")(134,"code"),rN(135,"space-between"),og()()(),Sl(136,"tr")(137,"td")(138,"code"),rN(139,"--field-container-title-flex"),og()(),Sl(140,"td"),rN(141,"Flex do t\xEDtulo ("),Sl(142,"code"),rN(143,"flex"),og(),rN(144,")"),og(),Sl(145,"td")(146,"code"),rN(147,"1 auto"),og()()(),Sl(148,"tr")(149,"td")(150,"strong"),rN(151,"Hover"),og()(),Wl(152,"td")(153,"td"),og(),Sl(154,"tr")(155,"td")(156,"code"),rN(157,"--color-hover"),og()(),Sl(158,"td"),rN(159,"Cor principal no estado hover"),og(),Sl(160,"td")(161,"code"),rN(162,"var(--color-action-hover)"),og()()(),Sl(163,"tr")(164,"td")(165,"code"),rN(166,"--shadow-color-hover"),og()(),Sl(167,"td"),rN(168,"Cor da sombra no estado hover"),og(),Sl(169,"td")(170,"code"),rN(171,"var(--color-brand-01-lighter)"),og()()(),Sl(172,"tr")(173,"td")(174,"strong"),rN(175,"Focused"),og()(),Wl(176,"td")(177,"td"),og(),Sl(178,"tr")(179,"td")(180,"code"),rN(181,"--outline-color-focused"),og()(),Sl(182,"td"),rN(183,"Cor do outline do estado de focus"),og(),Sl(184,"td")(185,"code"),rN(186,"var(--color-action-focus)"),og()()(),Sl(187,"tr")(188,"td")(189,"strong"),rN(190,"Disabled"),og()(),Wl(191,"td")(192,"td"),og(),Sl(193,"tr")(194,"td")(195,"code"),rN(196,"--color-unchecked-disabled"),og(),rN(197," \xA0"),og(),Sl(198,"td"),rN(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),og(),Sl(200,"td")(201,"code"),rN(202,"var(--color-action-disabled)"),og()()(),Sl(203,"tr")(204,"td")(205,"code"),rN(206,"--color-checked-disabled"),og(),rN(207," \xA0"),og(),Sl(208,"td"),rN(209,"Cor pricipal quando selecionado no estado disabled"),og(),Sl(210,"td")(211,"code"),rN(212,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(213,"div",10)(214,"h4",11),rN(215,"Seletor"),og(),Sl(216,"pre",12),rN(217,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-checkbox>
`),og()(),Sl(218,"h4",13),rN(219,"Propriedades"),og(),Sl(220,"table",14)(221,"tr",15)(222,"th",16),rN(223,"Nome"),og(),Sl(224,"th",16),rN(225,"Tipo"),og(),Sl(226,"th",16),rN(227,"Padr\xE3o"),og(),Sl(228,"th",16),rN(229,"Descri\xE7\xE3o"),og()(),Sl(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),rN(234," (p-additional-help)"),Wl(235,"br"),og()(),Sl(236,"div",21),rN(237,"Deprecated"),og()(),Sl(238,"td",22)(239,"code",23),rN(240,"EventEmitter"),og()(),Sl(241,"td",24),rN(242,"-"),og(),Sl(243,"td",25)(244,"em")(245,"strong"),rN(246,"(opcional)"),og()(),Sl(247,"p"),rN(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(249,"blockquote")(250,"p"),rN(251,"Essa propriedade est\xE1 "),Sl(252,"strong"),rN(253,"depreciada"),og(),rN(254," e ser\xE1 removida na vers\xE3o "),Sl(255,"code"),rN(256,"23.x.x"),og(),rN(257,". Recomendamos utilizar a propriedade "),Sl(258,"code"),rN(259,"p-helper"),og(),rN(260," que oferece mais recursos e flexibilidade."),og()()()(),Sl(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),rN(265," p-additional-help-tooltip"),Wl(266,"br"),og()(),Sl(267,"div",21),rN(268,"Deprecated"),og()(),Sl(269,"td",22)(270,"code",28),rN(271,"string"),og()(),Sl(272,"td",24),rN(273,"-"),og(),Sl(274,"td",25)(275,"em")(276,"strong"),rN(277,"(opcional)"),og()(),Sl(278,"p"),rN(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(280,"code"),rN(281,"po-helper"),og(),rN(282,`.
`),Sl(283,"strong"),rN(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(285,"blockquote")(286,"p"),rN(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(288,"blockquote")(289,"p"),rN(290,"Essa propriedade est\xE1 "),Sl(291,"strong"),rN(292,"depreciada"),og(),rN(293," e ser\xE1 removida na vers\xE3o "),Sl(294,"code"),rN(295,"23.x.x"),og(),rN(296,". Recomendamos utilizar a propriedade "),Sl(297,"code"),rN(298,"p-helper"),og(),rN(299," que oferece mais recursos e flexibilidade."),og()()()(),Sl(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),rN(304," p-append-in-body"),Wl(305,"br"),og()()(),Sl(306,"td",22)(307,"code",29),rN(308,"boolean"),og()(),Sl(309,"td",24)(310,"p")(311,"code"),rN(312,"false"),og()()(),Sl(313,"td",25)(314,"em")(315,"strong"),rN(316,"(opcional)"),og()(),Sl(317,"p"),rN(318,"Define que o popover ("),Sl(319,"code"),rN(320,"p-helper"),og(),rN(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(322,"blockquote")(323,"p"),rN(324,"Quando utilizado com "),Sl(325,"code"),rN(326,"p-helper"),og(),rN(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),rN(332," p-auto-focus"),Wl(333,"br"),og()()(),Sl(334,"td",22)(335,"code",29),rN(336,"boolean"),og()(),Sl(337,"td",24)(338,"p")(339,"code"),rN(340,"false"),og()()(),Sl(341,"td",25)(342,"em")(343,"strong"),rN(344,"(opcional)"),og()(),Sl(345,"p"),rN(346,"Aplica foco no elemento ao ser iniciado."),og(),Sl(347,"blockquote")(348,"p"),rN(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),rN(354," (p-blur)"),Wl(355,"br"),og()()(),Sl(356,"td",22)(357,"code",23),rN(358,"EventEmitter"),og()(),Sl(359,"td",24),rN(360,"-"),og(),Sl(361,"td",25)(362,"em")(363,"strong"),rN(364,"(opcional)"),og()(),Sl(365,"p"),rN(366,"Evento disparado ao sair do campo."),og()()(),Sl(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),rN(371," (p-change)"),Wl(372,"br"),og()()(),Sl(373,"td",22)(374,"code",23),rN(375,"EventEmitter"),og()(),Sl(376,"td",24),rN(377,"-"),og(),Sl(378,"td",25)(379,"em")(380,"strong"),rN(381,"(opcional)"),og()(),Sl(382,"p"),rN(383,"Evento disparado quando o valor do "),Sl(384,"em"),rN(385,"checkbox"),og(),rN(386," for alterado."),og()()(),Sl(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),rN(391," p-compact-label"),Wl(392,"br"),og()()(),Sl(393,"td",22)(394,"code",29),rN(395,"boolean"),og()(),Sl(396,"td",24)(397,"p")(398,"code"),rN(399,"false"),og()()(),Sl(400,"td",25)(401,"em")(402,"strong"),rN(403,"(opcional)"),og()(),Sl(404,"p"),rN(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(406,"p"),rN(407,"Quando habilitado ("),Sl(408,"code"),rN(409,"true"),og(),rN(410,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(411,"ul")(412,"li")(413,"code"),rN(414,"po-label"),og()(),Sl(415,"li")(416,"code"),rN(417,"p-requirement (showRequired)"),og()(),Sl(418,"li")(419,"code"),rN(420,"po-helper"),og()()(),Sl(421,"p"),rN(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(423,"p"),rN(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(425,"ul")(426,"li")(427,"code"),rN(428,"--field-container-title-justify"),og()(),Sl(429,"li")(430,"code"),rN(431,"--field-container-title-flex"),og()()(),Sl(432,"p"),rN(433,"Exemplo:"),og(),Sl(434,"pre")(435,"code"),rN(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(437,"p"),rN(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),rN(443," p-disabled"),Wl(444,"br"),og()()(),Sl(445,"td",22)(446,"code",29),rN(447,"boolean"),og()(),Sl(448,"td",24)(449,"p")(450,"code"),rN(451,"false"),og()()(),Sl(452,"td",25)(453,"em")(454,"strong"),rN(455,"(opcional)"),og()(),Sl(456,"p"),rN(457,"Define o estado do "),Sl(458,"em"),rN(459,"checkbox"),og(),rN(460," como desabilitado."),og()()(),Sl(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),rN(465," p-help"),Wl(466,"br"),og()()(),Sl(467,"td",22)(468,"code",28),rN(469,"string"),og()(),Sl(470,"td",24),rN(471,"-"),og(),Sl(472,"td",25)(473,"em")(474,"strong"),rN(475,"(opcional)"),og()(),Sl(476,"p"),rN(477,"Texto de apoio do campo"),og()()(),Sl(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),rN(482," (p-keydown)"),Wl(483,"br"),og()()(),Sl(484,"td",22)(485,"code",23),rN(486,"EventEmitter"),og()(),Sl(487,"td",24),rN(488,"-"),og(),Sl(489,"td",25)(490,"em")(491,"strong"),rN(492,"(opcional)"),og()(),Sl(493,"p"),rN(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(495,"code"),rN(496,"KeyboardEvent"),og(),rN(497," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),rN(502," p-label"),Wl(503,"br"),og()()(),Sl(504,"td",22)(505,"code",28),rN(506,"string"),og()(),Sl(507,"td",24),rN(508,"-"),og(),Sl(509,"td",25)(510,"em")(511,"strong"),rN(512,"(opcional)"),og()(),Sl(513,"p"),rN(514,"Texto de exibi\xE7\xE3o do "),Sl(515,"em"),rN(516,"checkbox"),og(),rN(517,"."),og()()(),Sl(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),rN(522," p-label-text-wrap"),Wl(523,"br"),og()()(),Sl(524,"td",22)(525,"code",29),rN(526,"boolean"),og()(),Sl(527,"td",24)(528,"p")(529,"code"),rN(530,"false"),og()()(),Sl(531,"td",25)(532,"em")(533,"strong"),rN(534,"(opcional)"),og()(),Sl(535,"p"),rN(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(537,"code"),rN(538,"p-label"),og(),rN(539,". Quando "),Sl(540,"code"),rN(541,"p-label-text-wrap"),og(),rN(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),rN(547," name"),Wl(548,"br"),og()()(),Sl(549,"td",22)(550,"code",28),rN(551,"string"),og()(),Sl(552,"td",24),rN(553,"-"),og(),Sl(554,"td",25)(555,"p"),rN(556,"Define o nome do "),Sl(557,"em"),rN(558,"checkbox"),og(),rN(559,"."),og()()(),Sl(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),rN(564," p-helper"),Wl(565,"br"),og()()(),Sl(566,"td",22)(567,"code",30),rN(568,"PoHelperOptions "),og(),Sl(569,"code",28),rN(570," string"),og()(),Sl(571,"td",24),rN(572,"-"),og(),Sl(573,"td",25)(574,"em")(575,"strong"),rN(576,"(opcional)"),og()(),Sl(577,"p"),rN(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(579,"code"),rN(580,"p-label"),og(),rN(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(582,"code"),rN(583,"p-label"),og(),rN(584,"."),og(),Sl(585,"blockquote")(586,"p"),rN(587,"Para mais informa\xE7\xF5es acesse: "),Sl(588,"a",31),rN(589,"https://po-ui.io/documentation/po-helper"),og(),rN(590,"."),og()(),Sl(591,"blockquote")(592,"p"),rN(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(594,"code"),rN(595,"p-additional-help-tooltip"),og(),rN(596," e "),Sl(597,"code"),rN(598,"p-additional-help"),og(),rN(599,") ser\xE1 ignorado."),og()()()(),Sl(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),rN(604," p-size"),Wl(605,"br"),og()()(),Sl(606,"td",22)(607,"code",28),rN(608,"string"),og()(),Sl(609,"td",24)(610,"p")(611,"code"),rN(612,"medium"),og()()(),Sl(613,"td",25)(614,"em")(615,"strong"),rN(616,"(opcional)"),og()(),Sl(617,"p"),rN(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),og(),Sl(619,"ul")(620,"li")(621,"code"),rN(622,"small"),og(),rN(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(624,"li")(625,"code"),rN(626,"medium"),og(),rN(627,": 24x24."),og(),Sl(628,"li")(629,"code"),rN(630,"large"),og(),rN(631,": 32x32."),og()(),Sl(632,"blockquote")(633,"p"),rN(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(635,"code"),rN(636,"medium"),og(),rN(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(638,"a",32),rN(639,"po-theme"),og(),rN(640,"."),og()()()()(),Sl(641,"h3",13),rN(642,"M\xE9todos"),og(),Sl(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),rN(649," focus "),og()()()()(),Sl(650,"tr",25)(651,"td",25)(652,"p"),rN(653,"Fun\xE7\xE3o que atribui foco ao "),Sl(654,"em"),rN(655,"checkbox"),og(),rN(656,"."),og(),Sl(657,"p"),rN(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),Sl(659,"code"),rN(660,"ViewChild"),og(),rN(661,", como por exemplo:"),og(),Sl(662,"pre")(663,"code"),rN(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),Wl(665,"br"),Sl(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),rN(672," showAdditionalHelp "),og()()()()(),Sl(673,"tr",25)(674,"td",25)(675,"p"),rN(676,"M\xE9todo que exibe "),Sl(677,"code"),rN(678,"p-helper"),og(),rN(679," ou executa a a\xE7\xE3o definida em "),Sl(680,"code"),rN(681,"p-helper{eventOnClick}"),og(),rN(682," ou em "),Sl(683,"code"),rN(684,"p-additionalHelp"),og(),rN(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(686,"code"),rN(687,"p-keydown"),og(),rN(688,"."),og(),Sl(689,"blockquote")(690,"p"),rN(691,"Exibe ou oculta o conte\xFAdo do componente "),Sl(692,"code"),rN(693,"po-helper"),og(),rN(694," quando o componente estiver com foco."),og()(),Sl(695,"pre")(696,"code"),rN(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),og()(),Sl(698,"pre")(699,"code"),rN(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(701,"br"),og());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-checkbox-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),og()()()),l&2&&(rw("p-actions",o.actions),Lp(2),rw("p-active",o.activeTab==="doc"),Lp(2),rw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,me,ce,ue,he],encapsulation:2,changeDetection:1})}return i})();var Ae=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[mL.forChild(Ae),mL]})}return i})();var $e=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,Ee]})}return i})();export{$e as DocPoCheckboxModule};