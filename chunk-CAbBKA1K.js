import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,bB as cc,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,bH as k3,c9 as Yhe,bc as OO,aB as Dx,aM as ww,aN as QA,a4 as mN,aO as Ew,aP as e0,a5 as yN,b6 as Yo,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aT as eN,aE as Qy,bd as Ax}from'./main-QSTLMRDK.js';var pe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&zl(0,"po-checkbox",0);},dependencies:[cc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Checkbox Basic"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-checkbox-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Se,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,pe],encapsulation:2})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-checkbox",1),ww("ngModelChange",function(r){return Xy(d),eN(n.checkbox,r)||(n.checkbox=r),Qy(r)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3),mN(4,"json"),zl(5,"po-info",4),og(),zl(6,"po-divider"),Il(7,"form",null,0)(9,"div",2)(10,"po-input",5),ww("ngModelChange",function(r){return Xy(d),eN(n.label,r)||(n.label=r),Qy(r)}),og(),QA(),Il(11,"po-input",6),ww("ngModelChange",function(r){return Xy(d),eN(n.help,r)||(n.help=r),Qy(r)}),og(),QA(),Il(12,"po-input",7),ww("ngModelChange",function(r){return Xy(d),eN(n.helperText,r)||(n.helperText=r),Qy(r)}),og(),QA(),Il(13,"po-switch",8),ww("ngModelChange",function(r){return Xy(d),eN(n.disabled,r)||(n.disabled=r),Qy(r)}),og(),QA(),Il(14,"po-switch",9),ww("ngModelChange",function(r){return Xy(d),eN(n.labelTextWrap,r)||(n.labelTextWrap=r),Qy(r)}),og(),QA(),Il(15,"po-switch",10),ww("ngModelChange",function(r){return Xy(d),eN(n.compactLabel,r)||(n.compactLabel=r),Qy(r)}),og(),QA(),Il(16,"po-radio-group",11),ww("ngModelChange",function(r){return Xy(d),eN(n.size,r)||(n.size=r),Qy(r)}),og(),QA(),og(),Il(17,"div",2)(18,"po-button",12),ft("p-click",function(){return n.restore()}),og()()();}l&2&&(Ew("ngModel",n.checkbox),nw("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap)("p-compact-label",n.compactLabel),e0(),Lp(3),nw("p-value",yN(4,18,n.checkbox)),Lp(2),nw("p-value",n.event),Lp(5),Ew("ngModel",n.label),e0(),Lp(),Ew("ngModel",n.help),e0(),Lp(),Ew("ngModel",n.helperText),e0(),Lp(),Ew("ngModel",n.disabled),e0(),Lp(),Ew("ngModel",n.labelTextWrap),e0(),Lp(),Ew("ngModel",n.compactLabel),e0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,cc,O3,Dde,k3,Yhe,OO],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Checkbox Labs"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-checkbox
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-checkbox-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ve,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return i})();var se=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&Gl(Yo,7),l&2){let d;co(d=lo())&&(n.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=Dx();Il(0,"po-button",1),ft("p-click",function(){Xy(d);let r=Ax(2);return Qy(r.open())}),og(),Il(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),Qx(6,"MIT License"),og()(),Il(7,"div",4)(8,"h4"),Qx(9,"Copyright (c) 2019 PO UI"),og()(),zl(10,"po-divider",4),Il(11,"div",4)(12,"p"),Qx(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),og(),zl(14,"br"),Il(15,"p"),Qx(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),og(),zl(17,"br"),Il(18,"p"),Qx(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),og()()(),zl(20,"po-divider"),Il(21,"div",6)(22,"po-checkbox",7),ww("ngModelChange",function(r){return Xy(d),eN(n.acceptance,r)||(n.acceptance=r),Qy(r)}),ft("p-change",function(){return n.primaryAction.disabled=!n.acceptance}),og(),QA(),og()();}l&2&&(Lp(),nw("p-primary-action",n.primaryAction),Lp(21),Ew("ngModel",n.acceptance),e0());},dependencies:[$9,mk,Qt,mv,cc,Yo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Checkbox - Acceptance Term"),og(),Il(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-checkbox-acceptance-term"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,we,n.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return i})();var he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoCheckboxComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O componente "),Il(24,"code"),Qx(25,"po-checkbox"),og(),Qx(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Il(27,"em"),Qx(28,"click"),og(),Qx(29," do "),Il(30,"em"),Qx(31,"mouse"),og(),Qx(32," quanto por meio da tecla "),Il(33,"em"),Qx(34,"space"),og(),Qx(35," quando estiver com foco."),og(),Il(36,"p"),Qx(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),og(),Il(38,"blockquote")(39,"p"),Qx(40,"O "),Il(41,"em"),Qx(42,"model"),og(),Qx(43," deste componente aceitar\xE1 valores igual \xE0 "),Il(44,"code"),Qx(45,"true"),og(),Qx(46,", "),Il(47,"code"),Qx(48,"false"),og(),Qx(49," ou "),Il(50,"code"),Qx(51,"null"),og(),Qx(52," para quando for indeterminado/mixed."),og()(),Il(53,"p")(54,"strong"),Qx(55,"Acessibilidade tratada no componente:"),og()(),Il(56,"p"),Qx(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Il(58,"ul")(59,"li"),Qx(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Il(61,"a",6),Qx(62,"WCAG 4.1.2: Name, Role, Value"),og()(),Il(63,"li"),Qx(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Il(65,"a",7),Qx(66,"WCAG 2.4.12: Focus Appearance"),og()(),Il(67,"li"),Qx(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),Il(69,"a",8),Qx(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Il(71,"h4"),Qx(72,"Tokens customiz\xE1veis"),og(),Il(73,"p"),Qx(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(75,"blockquote")(76,"p"),Qx(77,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(78,"a",9),Qx(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(80,"."),og()(),Il(81,"table")(82,"thead")(83,"tr")(84,"th"),Qx(85,"Propriedade"),og(),Il(86,"th"),Qx(87,"Descri\xE7\xE3o"),og(),Il(88,"th"),Qx(89,"Valor Padr\xE3o"),og()()(),Il(90,"tbody")(91,"tr")(92,"td")(93,"strong"),Qx(94,"Default Values"),og()(),zl(95,"td")(96,"td"),og(),Il(97,"tr")(98,"td")(99,"code"),Qx(100,"--border-color"),og()(),Il(101,"td"),Qx(102,"Cor da borda"),og(),Il(103,"td")(104,"code"),Qx(105,"var(--color-neutral-dark-70)"),og()()(),Il(106,"tr")(107,"td")(108,"code"),Qx(109,"--color-unchecked"),og()(),Il(110,"td"),Qx(111,"Cor quando n\xE3o selecionado"),og(),Il(112,"td")(113,"code"),Qx(114,"var(--color-neutral-light-00)"),og()()(),Il(115,"tr")(116,"td")(117,"code"),Qx(118,"--color-checked"),og()(),Il(119,"td"),Qx(120,"Cor quando selecionado"),og(),Il(121,"td")(122,"code"),Qx(123,"var(--color-action-default)"),og()()(),Il(124,"tr")(125,"td")(126,"code"),Qx(127,"--field-container-title-justify"),og()(),Il(128,"td"),Qx(129,"Alinhamento horizontal do t\xEDtulo ("),Il(130,"code"),Qx(131,"justify-content"),og(),Qx(132,")"),og(),Il(133,"td")(134,"code"),Qx(135,"space-between"),og()()(),Il(136,"tr")(137,"td")(138,"code"),Qx(139,"--field-container-title-flex"),og()(),Il(140,"td"),Qx(141,"Flex do t\xEDtulo ("),Il(142,"code"),Qx(143,"flex"),og(),Qx(144,")"),og(),Il(145,"td")(146,"code"),Qx(147,"1 auto"),og()()(),Il(148,"tr")(149,"td")(150,"strong"),Qx(151,"Hover"),og()(),zl(152,"td")(153,"td"),og(),Il(154,"tr")(155,"td")(156,"code"),Qx(157,"--color-hover"),og()(),Il(158,"td"),Qx(159,"Cor principal no estado hover"),og(),Il(160,"td")(161,"code"),Qx(162,"var(--color-action-hover)"),og()()(),Il(163,"tr")(164,"td")(165,"code"),Qx(166,"--shadow-color-hover"),og()(),Il(167,"td"),Qx(168,"Cor da sombra no estado hover"),og(),Il(169,"td")(170,"code"),Qx(171,"var(--color-brand-01-lighter)"),og()()(),Il(172,"tr")(173,"td")(174,"strong"),Qx(175,"Focused"),og()(),zl(176,"td")(177,"td"),og(),Il(178,"tr")(179,"td")(180,"code"),Qx(181,"--outline-color-focused"),og()(),Il(182,"td"),Qx(183,"Cor do outline do estado de focus"),og(),Il(184,"td")(185,"code"),Qx(186,"var(--color-action-focus)"),og()()(),Il(187,"tr")(188,"td")(189,"strong"),Qx(190,"Disabled"),og()(),zl(191,"td")(192,"td"),og(),Il(193,"tr")(194,"td")(195,"code"),Qx(196,"--color-unchecked-disabled"),og(),Qx(197," \xA0"),og(),Il(198,"td"),Qx(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),og(),Il(200,"td")(201,"code"),Qx(202,"var(--color-action-disabled)"),og()()(),Il(203,"tr")(204,"td")(205,"code"),Qx(206,"--color-checked-disabled"),og(),Qx(207," \xA0"),og(),Il(208,"td"),Qx(209,"Cor pricipal quando selecionado no estado disabled"),og(),Il(210,"td")(211,"code"),Qx(212,"var(--color-neutral-dark-70)"),og()()()()()(),Il(213,"div",10)(214,"h4",11),Qx(215,"Seletor"),og(),Il(216,"pre",12),Qx(217,`<po-checkbox
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
`),og()(),Il(218,"h4",13),Qx(219,"Propriedades"),og(),Il(220,"table",14)(221,"tr",15)(222,"th",16),Qx(223,"Nome"),og(),Il(224,"th",16),Qx(225,"Tipo"),og(),Il(226,"th",16),Qx(227,"Padr\xE3o"),og(),Il(228,"th",16),Qx(229,"Descri\xE7\xE3o"),og()(),Il(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),Qx(234," (p-additional-help)"),zl(235,"br"),og()(),Il(236,"div",21),Qx(237,"Deprecated"),og()(),Il(238,"td",22)(239,"code",23),Qx(240,"EventEmitter"),og()(),Il(241,"td",24),Qx(242,"-"),og(),Il(243,"td",25)(244,"em")(245,"strong"),Qx(246,"(opcional)"),og()(),Il(247,"p"),Qx(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(249,"blockquote")(250,"p"),Qx(251,"Essa propriedade est\xE1 "),Il(252,"strong"),Qx(253,"depreciada"),og(),Qx(254," e ser\xE1 removida na vers\xE3o "),Il(255,"code"),Qx(256,"23.x.x"),og(),Qx(257,". Recomendamos utilizar a propriedade "),Il(258,"code"),Qx(259,"p-helper"),og(),Qx(260," que oferece mais recursos e flexibilidade."),og()()()(),Il(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),Qx(265," p-additional-help-tooltip"),zl(266,"br"),og()(),Il(267,"div",21),Qx(268,"Deprecated"),og()(),Il(269,"td",22)(270,"code",28),Qx(271,"string"),og()(),Il(272,"td",24),Qx(273,"-"),og(),Il(274,"td",25)(275,"em")(276,"strong"),Qx(277,"(opcional)"),og()(),Il(278,"p"),Qx(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(280,"code"),Qx(281,"po-helper"),og(),Qx(282,`.
`),Il(283,"strong"),Qx(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(285,"blockquote")(286,"p"),Qx(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(288,"blockquote")(289,"p"),Qx(290,"Essa propriedade est\xE1 "),Il(291,"strong"),Qx(292,"depreciada"),og(),Qx(293," e ser\xE1 removida na vers\xE3o "),Il(294,"code"),Qx(295,"23.x.x"),og(),Qx(296,". Recomendamos utilizar a propriedade "),Il(297,"code"),Qx(298,"p-helper"),og(),Qx(299," que oferece mais recursos e flexibilidade."),og()()()(),Il(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),Qx(304," p-append-in-body"),zl(305,"br"),og()()(),Il(306,"td",22)(307,"code",29),Qx(308,"boolean"),og()(),Il(309,"td",24)(310,"p")(311,"code"),Qx(312,"false"),og()()(),Il(313,"td",25)(314,"em")(315,"strong"),Qx(316,"(opcional)"),og()(),Il(317,"p"),Qx(318,"Define que o popover ("),Il(319,"code"),Qx(320,"p-helper"),og(),Qx(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(322,"blockquote")(323,"p"),Qx(324,"Quando utilizado com "),Il(325,"code"),Qx(326,"p-helper"),og(),Qx(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),Qx(332," p-auto-focus"),zl(333,"br"),og()()(),Il(334,"td",22)(335,"code",29),Qx(336,"boolean"),og()(),Il(337,"td",24)(338,"p")(339,"code"),Qx(340,"false"),og()()(),Il(341,"td",25)(342,"em")(343,"strong"),Qx(344,"(opcional)"),og()(),Il(345,"p"),Qx(346,"Aplica foco no elemento ao ser iniciado."),og(),Il(347,"blockquote")(348,"p"),Qx(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),Qx(354," (p-blur)"),zl(355,"br"),og()()(),Il(356,"td",22)(357,"code",23),Qx(358,"EventEmitter"),og()(),Il(359,"td",24),Qx(360,"-"),og(),Il(361,"td",25)(362,"em")(363,"strong"),Qx(364,"(opcional)"),og()(),Il(365,"p"),Qx(366,"Evento disparado ao sair do campo."),og()()(),Il(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),Qx(371," (p-change)"),zl(372,"br"),og()()(),Il(373,"td",22)(374,"code",23),Qx(375,"EventEmitter"),og()(),Il(376,"td",24),Qx(377,"-"),og(),Il(378,"td",25)(379,"em")(380,"strong"),Qx(381,"(opcional)"),og()(),Il(382,"p"),Qx(383,"Evento disparado quando o valor do "),Il(384,"em"),Qx(385,"checkbox"),og(),Qx(386," for alterado."),og()()(),Il(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),Qx(391," p-compact-label"),zl(392,"br"),og()()(),Il(393,"td",22)(394,"code",29),Qx(395,"boolean"),og()(),Il(396,"td",24)(397,"p")(398,"code"),Qx(399,"false"),og()()(),Il(400,"td",25)(401,"em")(402,"strong"),Qx(403,"(opcional)"),og()(),Il(404,"p"),Qx(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(406,"p"),Qx(407,"Quando habilitado ("),Il(408,"code"),Qx(409,"true"),og(),Qx(410,"), o modo compacto afeta o conjunto composto por:"),og(),Il(411,"ul")(412,"li")(413,"code"),Qx(414,"po-label"),og()(),Il(415,"li")(416,"code"),Qx(417,"p-requirement (showRequired)"),og()(),Il(418,"li")(419,"code"),Qx(420,"po-helper"),og()()(),Il(421,"p"),Qx(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(423,"p"),Qx(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(425,"ul")(426,"li")(427,"code"),Qx(428,"--field-container-title-justify"),og()(),Il(429,"li")(430,"code"),Qx(431,"--field-container-title-flex"),og()()(),Il(432,"p"),Qx(433,"Exemplo:"),og(),Il(434,"pre")(435,"code"),Qx(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(437,"p"),Qx(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),Qx(443," p-disabled"),zl(444,"br"),og()()(),Il(445,"td",22)(446,"code",29),Qx(447,"boolean"),og()(),Il(448,"td",24)(449,"p")(450,"code"),Qx(451,"false"),og()()(),Il(452,"td",25)(453,"em")(454,"strong"),Qx(455,"(opcional)"),og()(),Il(456,"p"),Qx(457,"Define o estado do "),Il(458,"em"),Qx(459,"checkbox"),og(),Qx(460," como desabilitado."),og()()(),Il(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),Qx(465," p-help"),zl(466,"br"),og()()(),Il(467,"td",22)(468,"code",28),Qx(469,"string"),og()(),Il(470,"td",24),Qx(471,"-"),og(),Il(472,"td",25)(473,"em")(474,"strong"),Qx(475,"(opcional)"),og()(),Il(476,"p"),Qx(477,"Texto de apoio do campo"),og()()(),Il(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),Qx(482," (p-keydown)"),zl(483,"br"),og()()(),Il(484,"td",22)(485,"code",23),Qx(486,"EventEmitter"),og()(),Il(487,"td",24),Qx(488,"-"),og(),Il(489,"td",25)(490,"em")(491,"strong"),Qx(492,"(opcional)"),og()(),Il(493,"p"),Qx(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(495,"code"),Qx(496,"KeyboardEvent"),og(),Qx(497," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),Qx(502," p-label"),zl(503,"br"),og()()(),Il(504,"td",22)(505,"code",28),Qx(506,"string"),og()(),Il(507,"td",24),Qx(508,"-"),og(),Il(509,"td",25)(510,"em")(511,"strong"),Qx(512,"(opcional)"),og()(),Il(513,"p"),Qx(514,"Texto de exibi\xE7\xE3o do "),Il(515,"em"),Qx(516,"checkbox"),og(),Qx(517,"."),og()()(),Il(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),Qx(522," p-label-text-wrap"),zl(523,"br"),og()()(),Il(524,"td",22)(525,"code",29),Qx(526,"boolean"),og()(),Il(527,"td",24)(528,"p")(529,"code"),Qx(530,"false"),og()()(),Il(531,"td",25)(532,"em")(533,"strong"),Qx(534,"(opcional)"),og()(),Il(535,"p"),Qx(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(537,"code"),Qx(538,"p-label"),og(),Qx(539,". Quando "),Il(540,"code"),Qx(541,"p-label-text-wrap"),og(),Qx(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),Qx(547," name"),zl(548,"br"),og()()(),Il(549,"td",22)(550,"code",28),Qx(551,"string"),og()(),Il(552,"td",24),Qx(553,"-"),og(),Il(554,"td",25)(555,"p"),Qx(556,"Define o nome do "),Il(557,"em"),Qx(558,"checkbox"),og(),Qx(559,"."),og()()(),Il(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),Qx(564," p-helper"),zl(565,"br"),og()()(),Il(566,"td",22)(567,"code",30),Qx(568,"PoHelperOptions "),og(),Il(569,"code",28),Qx(570," string"),og()(),Il(571,"td",24),Qx(572,"-"),og(),Il(573,"td",25)(574,"em")(575,"strong"),Qx(576,"(opcional)"),og()(),Il(577,"p"),Qx(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(579,"code"),Qx(580,"p-label"),og(),Qx(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(582,"code"),Qx(583,"p-label"),og(),Qx(584,"."),og(),Il(585,"blockquote")(586,"p"),Qx(587,"Para mais informa\xE7\xF5es acesse: "),Il(588,"a",31),Qx(589,"https://po-ui.io/documentation/po-helper"),og(),Qx(590,"."),og()(),Il(591,"blockquote")(592,"p"),Qx(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(594,"code"),Qx(595,"p-additional-help-tooltip"),og(),Qx(596," e "),Il(597,"code"),Qx(598,"p-additional-help"),og(),Qx(599,") ser\xE1 ignorado."),og()()()(),Il(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),Qx(604," p-size"),zl(605,"br"),og()()(),Il(606,"td",22)(607,"code",28),Qx(608,"string"),og()(),Il(609,"td",24)(610,"p")(611,"code"),Qx(612,"medium"),og()()(),Il(613,"td",25)(614,"em")(615,"strong"),Qx(616,"(opcional)"),og()(),Il(617,"p"),Qx(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),og(),Il(619,"ul")(620,"li")(621,"code"),Qx(622,"small"),og(),Qx(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(624,"li")(625,"code"),Qx(626,"medium"),og(),Qx(627,": 24x24."),og(),Il(628,"li")(629,"code"),Qx(630,"large"),og(),Qx(631,": 32x32."),og()(),Il(632,"blockquote")(633,"p"),Qx(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(635,"code"),Qx(636,"medium"),og(),Qx(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(638,"a",32),Qx(639,"po-theme"),og(),Qx(640,"."),og()()()()(),Il(641,"h3",13),Qx(642,"M\xE9todos"),og(),Il(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),Qx(649," focus "),og()()()()(),Il(650,"tr",25)(651,"td",25)(652,"p"),Qx(653,"Fun\xE7\xE3o que atribui foco ao "),Il(654,"em"),Qx(655,"checkbox"),og(),Qx(656,"."),og(),Il(657,"p"),Qx(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),Il(659,"code"),Qx(660,"ViewChild"),og(),Qx(661,", como por exemplo:"),og(),Il(662,"pre")(663,"code"),Qx(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),zl(665,"br"),Il(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),Qx(672," showAdditionalHelp "),og()()()()(),Il(673,"tr",25)(674,"td",25)(675,"p"),Qx(676,"M\xE9todo que exibe "),Il(677,"code"),Qx(678,"p-helper"),og(),Qx(679," ou executa a a\xE7\xE3o definida em "),Il(680,"code"),Qx(681,"p-helper{eventOnClick}"),og(),Qx(682," ou em "),Il(683,"code"),Qx(684,"p-additionalHelp"),og(),Qx(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(686,"code"),Qx(687,"p-keydown"),og(),Qx(688,"."),og(),Il(689,"blockquote")(690,"p"),Qx(691,"Exibe ou oculta o conte\xFAdo do componente "),Il(692,"code"),Qx(693,"po-helper"),og(),Qx(694," quando o componente estiver com foco."),og()(),Il(695,"pre")(696,"code"),Qx(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),og()(),Il(698,"pre")(699,"code"),Qx(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(701,"br"),og());},dependencies:[Ka],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(C(Xn),C(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),zl(3,"sample-po-checkbox-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),zl(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[cNe,qme,Yme,me,ce,ue,he],encapsulation:2})}return i})();var Ae=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[uL.forChild(Ae),uL]})}return i})();var $e=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,Ee]})}return i})();export{$e as DocPoCheckboxModule};