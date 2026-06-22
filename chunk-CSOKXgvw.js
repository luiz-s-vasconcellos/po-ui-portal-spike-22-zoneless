import {f as fe,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,bB as cc,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,c8 as wde,bH as M3,c9 as Ghe,bc as FO,aB as wx,aM as ww,aN as e0,a4 as yN,aO as Ew,aP as n0,a5 as DN,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as rNe,aD as Ky,aT as nN,aE as Xy,bd as Nx}from'./main-WP3NAV7C.js';var pe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:false,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&Wl(0,"po-checkbox",0);},dependencies:[cc],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Checkbox Basic"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-basic"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Se,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,pe],encapsulation:2})}return i})();var de=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.checkbox=void 0,this.disabled=false,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=false;}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:false,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=wx();Sl(0,"po-checkbox",1),ww("ngModelChange",function(r){return Ky(d),nN(n.checkbox,r)||(n.checkbox=r),Xy(r)}),ft("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),yN(4,"json"),Wl(5,"po-info",4),og(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",2)(10,"po-input",5),ww("ngModelChange",function(r){return Ky(d),nN(n.label,r)||(n.label=r),Xy(r)}),og(),e0(),Sl(11,"po-input",6),ww("ngModelChange",function(r){return Ky(d),nN(n.help,r)||(n.help=r),Xy(r)}),og(),e0(),Sl(12,"po-input",7),ww("ngModelChange",function(r){return Ky(d),nN(n.helperText,r)||(n.helperText=r),Xy(r)}),og(),e0(),Sl(13,"po-switch",8),ww("ngModelChange",function(r){return Ky(d),nN(n.disabled,r)||(n.disabled=r),Xy(r)}),og(),e0(),Sl(14,"po-switch",9),ww("ngModelChange",function(r){return Ky(d),nN(n.labelTextWrap,r)||(n.labelTextWrap=r),Xy(r)}),og(),e0(),Sl(15,"po-switch",10),ww("ngModelChange",function(r){return Ky(d),nN(n.compactLabel,r)||(n.compactLabel=r),Xy(r)}),og(),e0(),Sl(16,"po-radio-group",11),ww("ngModelChange",function(r){return Ky(d),nN(n.size,r)||(n.size=r),Xy(r)}),og(),e0(),og(),Sl(17,"div",2)(18,"po-button",12),ft("p-click",function(){return n.restore()}),og()()();}l&2&&(Ew("ngModel",n.checkbox),nw("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap)("p-compact-label",n.compactLabel),n0(),Lp(3),nw("p-value",DN(4,18,n.checkbox)),Lp(2),nw("p-value",n.event),Lp(5),Ew("ngModel",n.label),n0(),Lp(),Ew("ngModel",n.help),n0(),Lp(),Ew("ngModel",n.helperText),n0(),Lp(),Ew("ngModel",n.disabled),n0(),Lp(),Ew("ngModel",n.labelTextWrap),n0(),Lp(),Ew("ngModel",n.compactLabel),n0(),Lp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,cc,L3,wde,M3,Ghe,FO],encapsulation:2,changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Checkbox Labs"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-checkbox
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-labs"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ve,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,de],encapsulation:2})}return i})();var se=(()=>{class i{modalTerm;acceptance=false;primaryAction={action:()=>{this.modalTerm.close();},disabled:true,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&ql(Yo,7),l&2){let d;lo(d=uo())&&(n.modalTerm=d.first);}},standalone:false,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=wx();Sl(0,"po-button",1),ft("p-click",function(){Ky(d);let r=Nx(2);return Xy(r.open())}),og(),Sl(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),eN(6,"MIT License"),og()(),Sl(7,"div",4)(8,"h4"),eN(9,"Copyright (c) 2019 PO UI"),og()(),Wl(10,"po-divider",4),Sl(11,"div",4)(12,"p"),eN(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),og(),Wl(14,"br"),Sl(15,"p"),eN(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),og(),Wl(17,"br"),Sl(18,"p"),eN(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),og()()(),Wl(20,"po-divider"),Sl(21,"div",6)(22,"po-checkbox",7),ww("ngModelChange",function(r){return Ky(d),nN(n.acceptance,r)||(n.acceptance=r),Xy(r)}),ft("p-change",function(){return n.primaryAction.disabled=!n.acceptance}),og(),e0(),og()();}l&2&&(Lp(),nw("p-primary-action",n.primaryAction),Lp(21),Ew("ngModel",n.acceptance),n0());},dependencies:[G9,_k,Qt,mv,cc,Yo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Checkbox - Acceptance Term"),og(),Sl(4,"a",2),ft("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-acceptance-term"),og(),Wl(23,"hr")),l&2&&(Lp(5),$x("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,we,n.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,se],encapsulation:2})}return i})();var he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:false,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoCheckboxComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O componente "),Sl(24,"code"),eN(25,"po-checkbox"),og(),eN(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Sl(27,"em"),eN(28,"click"),og(),eN(29," do "),Sl(30,"em"),eN(31,"mouse"),og(),eN(32," quanto por meio da tecla "),Sl(33,"em"),eN(34,"space"),og(),eN(35," quando estiver com foco."),og(),Sl(36,"p"),eN(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),og(),Sl(38,"blockquote")(39,"p"),eN(40,"O "),Sl(41,"em"),eN(42,"model"),og(),eN(43," deste componente aceitar\xE1 valores igual \xE0 "),Sl(44,"code"),eN(45,"true"),og(),eN(46,", "),Sl(47,"code"),eN(48,"false"),og(),eN(49," ou "),Sl(50,"code"),eN(51,"null"),og(),eN(52," para quando for indeterminado/mixed."),og()(),Sl(53,"p")(54,"strong"),eN(55,"Acessibilidade tratada no componente:"),og()(),Sl(56,"p"),eN(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Sl(58,"ul")(59,"li"),eN(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Sl(61,"a",6),eN(62,"WCAG 4.1.2: Name, Role, Value"),og()(),Sl(63,"li"),eN(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(65,"a",7),eN(66,"WCAG 2.4.12: Focus Appearance"),og()(),Sl(67,"li"),eN(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),Sl(69,"a",8),eN(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Sl(71,"h4"),eN(72,"Tokens customiz\xE1veis"),og(),Sl(73,"p"),eN(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(75,"blockquote")(76,"p"),eN(77,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(78,"a",9),eN(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(80,"."),og()(),Sl(81,"table")(82,"thead")(83,"tr")(84,"th"),eN(85,"Propriedade"),og(),Sl(86,"th"),eN(87,"Descri\xE7\xE3o"),og(),Sl(88,"th"),eN(89,"Valor Padr\xE3o"),og()()(),Sl(90,"tbody")(91,"tr")(92,"td")(93,"strong"),eN(94,"Default Values"),og()(),Wl(95,"td")(96,"td"),og(),Sl(97,"tr")(98,"td")(99,"code"),eN(100,"--border-color"),og()(),Sl(101,"td"),eN(102,"Cor da borda"),og(),Sl(103,"td")(104,"code"),eN(105,"var(--color-neutral-dark-70)"),og()()(),Sl(106,"tr")(107,"td")(108,"code"),eN(109,"--color-unchecked"),og()(),Sl(110,"td"),eN(111,"Cor quando n\xE3o selecionado"),og(),Sl(112,"td")(113,"code"),eN(114,"var(--color-neutral-light-00)"),og()()(),Sl(115,"tr")(116,"td")(117,"code"),eN(118,"--color-checked"),og()(),Sl(119,"td"),eN(120,"Cor quando selecionado"),og(),Sl(121,"td")(122,"code"),eN(123,"var(--color-action-default)"),og()()(),Sl(124,"tr")(125,"td")(126,"code"),eN(127,"--field-container-title-justify"),og()(),Sl(128,"td"),eN(129,"Alinhamento horizontal do t\xEDtulo ("),Sl(130,"code"),eN(131,"justify-content"),og(),eN(132,")"),og(),Sl(133,"td")(134,"code"),eN(135,"space-between"),og()()(),Sl(136,"tr")(137,"td")(138,"code"),eN(139,"--field-container-title-flex"),og()(),Sl(140,"td"),eN(141,"Flex do t\xEDtulo ("),Sl(142,"code"),eN(143,"flex"),og(),eN(144,")"),og(),Sl(145,"td")(146,"code"),eN(147,"1 auto"),og()()(),Sl(148,"tr")(149,"td")(150,"strong"),eN(151,"Hover"),og()(),Wl(152,"td")(153,"td"),og(),Sl(154,"tr")(155,"td")(156,"code"),eN(157,"--color-hover"),og()(),Sl(158,"td"),eN(159,"Cor principal no estado hover"),og(),Sl(160,"td")(161,"code"),eN(162,"var(--color-action-hover)"),og()()(),Sl(163,"tr")(164,"td")(165,"code"),eN(166,"--shadow-color-hover"),og()(),Sl(167,"td"),eN(168,"Cor da sombra no estado hover"),og(),Sl(169,"td")(170,"code"),eN(171,"var(--color-brand-01-lighter)"),og()()(),Sl(172,"tr")(173,"td")(174,"strong"),eN(175,"Focused"),og()(),Wl(176,"td")(177,"td"),og(),Sl(178,"tr")(179,"td")(180,"code"),eN(181,"--outline-color-focused"),og()(),Sl(182,"td"),eN(183,"Cor do outline do estado de focus"),og(),Sl(184,"td")(185,"code"),eN(186,"var(--color-action-focus)"),og()()(),Sl(187,"tr")(188,"td")(189,"strong"),eN(190,"Disabled"),og()(),Wl(191,"td")(192,"td"),og(),Sl(193,"tr")(194,"td")(195,"code"),eN(196,"--color-unchecked-disabled"),og(),eN(197," \xA0"),og(),Sl(198,"td"),eN(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),og(),Sl(200,"td")(201,"code"),eN(202,"var(--color-action-disabled)"),og()()(),Sl(203,"tr")(204,"td")(205,"code"),eN(206,"--color-checked-disabled"),og(),eN(207," \xA0"),og(),Sl(208,"td"),eN(209,"Cor pricipal quando selecionado no estado disabled"),og(),Sl(210,"td")(211,"code"),eN(212,"var(--color-neutral-dark-70)"),og()()()()()(),Sl(213,"div",10)(214,"h4",11),eN(215,"Seletor"),og(),Sl(216,"pre",12),eN(217,`<po-checkbox
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
`),og()(),Sl(218,"h4",13),eN(219,"Propriedades"),og(),Sl(220,"table",14)(221,"tr",15)(222,"th",16),eN(223,"Nome"),og(),Sl(224,"th",16),eN(225,"Tipo"),og(),Sl(226,"th",16),eN(227,"Padr\xE3o"),og(),Sl(228,"th",16),eN(229,"Descri\xE7\xE3o"),og()(),Sl(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),eN(234," (p-additional-help)"),Wl(235,"br"),og()(),Sl(236,"div",21),eN(237,"Deprecated"),og()(),Sl(238,"td",22)(239,"code",23),eN(240,"EventEmitter"),og()(),Sl(241,"td",24),eN(242,"-"),og(),Sl(243,"td",25)(244,"em")(245,"strong"),eN(246,"(opcional)"),og()(),Sl(247,"p"),eN(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(249,"blockquote")(250,"p"),eN(251,"Essa propriedade est\xE1 "),Sl(252,"strong"),eN(253,"depreciada"),og(),eN(254," e ser\xE1 removida na vers\xE3o "),Sl(255,"code"),eN(256,"23.x.x"),og(),eN(257,". Recomendamos utilizar a propriedade "),Sl(258,"code"),eN(259,"p-helper"),og(),eN(260," que oferece mais recursos e flexibilidade."),og()()()(),Sl(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),eN(265," p-additional-help-tooltip"),Wl(266,"br"),og()(),Sl(267,"div",21),eN(268,"Deprecated"),og()(),Sl(269,"td",22)(270,"code",28),eN(271,"string"),og()(),Sl(272,"td",24),eN(273,"-"),og(),Sl(274,"td",25)(275,"em")(276,"strong"),eN(277,"(opcional)"),og()(),Sl(278,"p"),eN(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(280,"code"),eN(281,"po-helper"),og(),eN(282,`.
`),Sl(283,"strong"),eN(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(285,"blockquote")(286,"p"),eN(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(288,"blockquote")(289,"p"),eN(290,"Essa propriedade est\xE1 "),Sl(291,"strong"),eN(292,"depreciada"),og(),eN(293," e ser\xE1 removida na vers\xE3o "),Sl(294,"code"),eN(295,"23.x.x"),og(),eN(296,". Recomendamos utilizar a propriedade "),Sl(297,"code"),eN(298,"p-helper"),og(),eN(299," que oferece mais recursos e flexibilidade."),og()()()(),Sl(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),eN(304," p-append-in-body"),Wl(305,"br"),og()()(),Sl(306,"td",22)(307,"code",29),eN(308,"boolean"),og()(),Sl(309,"td",24)(310,"p")(311,"code"),eN(312,"false"),og()()(),Sl(313,"td",25)(314,"em")(315,"strong"),eN(316,"(opcional)"),og()(),Sl(317,"p"),eN(318,"Define que o popover ("),Sl(319,"code"),eN(320,"p-helper"),og(),eN(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(322,"blockquote")(323,"p"),eN(324,"Quando utilizado com "),Sl(325,"code"),eN(326,"p-helper"),og(),eN(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),eN(332," p-auto-focus"),Wl(333,"br"),og()()(),Sl(334,"td",22)(335,"code",29),eN(336,"boolean"),og()(),Sl(337,"td",24)(338,"p")(339,"code"),eN(340,"false"),og()()(),Sl(341,"td",25)(342,"em")(343,"strong"),eN(344,"(opcional)"),og()(),Sl(345,"p"),eN(346,"Aplica foco no elemento ao ser iniciado."),og(),Sl(347,"blockquote")(348,"p"),eN(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),eN(354," (p-blur)"),Wl(355,"br"),og()()(),Sl(356,"td",22)(357,"code",23),eN(358,"EventEmitter"),og()(),Sl(359,"td",24),eN(360,"-"),og(),Sl(361,"td",25)(362,"em")(363,"strong"),eN(364,"(opcional)"),og()(),Sl(365,"p"),eN(366,"Evento disparado ao sair do campo."),og()()(),Sl(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),eN(371," (p-change)"),Wl(372,"br"),og()()(),Sl(373,"td",22)(374,"code",23),eN(375,"EventEmitter"),og()(),Sl(376,"td",24),eN(377,"-"),og(),Sl(378,"td",25)(379,"em")(380,"strong"),eN(381,"(opcional)"),og()(),Sl(382,"p"),eN(383,"Evento disparado quando o valor do "),Sl(384,"em"),eN(385,"checkbox"),og(),eN(386," for alterado."),og()()(),Sl(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),eN(391," p-compact-label"),Wl(392,"br"),og()()(),Sl(393,"td",22)(394,"code",29),eN(395,"boolean"),og()(),Sl(396,"td",24)(397,"p")(398,"code"),eN(399,"false"),og()()(),Sl(400,"td",25)(401,"em")(402,"strong"),eN(403,"(opcional)"),og()(),Sl(404,"p"),eN(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(406,"p"),eN(407,"Quando habilitado ("),Sl(408,"code"),eN(409,"true"),og(),eN(410,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(411,"ul")(412,"li")(413,"code"),eN(414,"po-label"),og()(),Sl(415,"li")(416,"code"),eN(417,"p-requirement (showRequired)"),og()(),Sl(418,"li")(419,"code"),eN(420,"po-helper"),og()()(),Sl(421,"p"),eN(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(423,"p"),eN(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(425,"ul")(426,"li")(427,"code"),eN(428,"--field-container-title-justify"),og()(),Sl(429,"li")(430,"code"),eN(431,"--field-container-title-flex"),og()()(),Sl(432,"p"),eN(433,"Exemplo:"),og(),Sl(434,"pre")(435,"code"),eN(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(437,"p"),eN(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),eN(443," p-disabled"),Wl(444,"br"),og()()(),Sl(445,"td",22)(446,"code",29),eN(447,"boolean"),og()(),Sl(448,"td",24)(449,"p")(450,"code"),eN(451,"false"),og()()(),Sl(452,"td",25)(453,"em")(454,"strong"),eN(455,"(opcional)"),og()(),Sl(456,"p"),eN(457,"Define o estado do "),Sl(458,"em"),eN(459,"checkbox"),og(),eN(460," como desabilitado."),og()()(),Sl(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),eN(465," p-help"),Wl(466,"br"),og()()(),Sl(467,"td",22)(468,"code",28),eN(469,"string"),og()(),Sl(470,"td",24),eN(471,"-"),og(),Sl(472,"td",25)(473,"em")(474,"strong"),eN(475,"(opcional)"),og()(),Sl(476,"p"),eN(477,"Texto de apoio do campo"),og()()(),Sl(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),eN(482," (p-keydown)"),Wl(483,"br"),og()()(),Sl(484,"td",22)(485,"code",23),eN(486,"EventEmitter"),og()(),Sl(487,"td",24),eN(488,"-"),og(),Sl(489,"td",25)(490,"em")(491,"strong"),eN(492,"(opcional)"),og()(),Sl(493,"p"),eN(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(495,"code"),eN(496,"KeyboardEvent"),og(),eN(497," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),eN(502," p-label"),Wl(503,"br"),og()()(),Sl(504,"td",22)(505,"code",28),eN(506,"string"),og()(),Sl(507,"td",24),eN(508,"-"),og(),Sl(509,"td",25)(510,"em")(511,"strong"),eN(512,"(opcional)"),og()(),Sl(513,"p"),eN(514,"Texto de exibi\xE7\xE3o do "),Sl(515,"em"),eN(516,"checkbox"),og(),eN(517,"."),og()()(),Sl(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),eN(522," p-label-text-wrap"),Wl(523,"br"),og()()(),Sl(524,"td",22)(525,"code",29),eN(526,"boolean"),og()(),Sl(527,"td",24)(528,"p")(529,"code"),eN(530,"false"),og()()(),Sl(531,"td",25)(532,"em")(533,"strong"),eN(534,"(opcional)"),og()(),Sl(535,"p"),eN(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(537,"code"),eN(538,"p-label"),og(),eN(539,". Quando "),Sl(540,"code"),eN(541,"p-label-text-wrap"),og(),eN(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),eN(547," name"),Wl(548,"br"),og()()(),Sl(549,"td",22)(550,"code",28),eN(551,"string"),og()(),Sl(552,"td",24),eN(553,"-"),og(),Sl(554,"td",25)(555,"p"),eN(556,"Define o nome do "),Sl(557,"em"),eN(558,"checkbox"),og(),eN(559,"."),og()()(),Sl(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),eN(564," p-helper"),Wl(565,"br"),og()()(),Sl(566,"td",22)(567,"code",30),eN(568,"PoHelperOptions "),og(),Sl(569,"code",28),eN(570," string"),og()(),Sl(571,"td",24),eN(572,"-"),og(),Sl(573,"td",25)(574,"em")(575,"strong"),eN(576,"(opcional)"),og()(),Sl(577,"p"),eN(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(579,"code"),eN(580,"p-label"),og(),eN(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(582,"code"),eN(583,"p-label"),og(),eN(584,"."),og(),Sl(585,"blockquote")(586,"p"),eN(587,"Para mais informa\xE7\xF5es acesse: "),Sl(588,"a",31),eN(589,"https://po-ui.io/documentation/po-helper"),og(),eN(590,"."),og()(),Sl(591,"blockquote")(592,"p"),eN(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(594,"code"),eN(595,"p-additional-help-tooltip"),og(),eN(596," e "),Sl(597,"code"),eN(598,"p-additional-help"),og(),eN(599,") ser\xE1 ignorado."),og()()()(),Sl(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),eN(604," p-size"),Wl(605,"br"),og()()(),Sl(606,"td",22)(607,"code",28),eN(608,"string"),og()(),Sl(609,"td",24)(610,"p")(611,"code"),eN(612,"medium"),og()()(),Sl(613,"td",25)(614,"em")(615,"strong"),eN(616,"(opcional)"),og()(),Sl(617,"p"),eN(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),og(),Sl(619,"ul")(620,"li")(621,"code"),eN(622,"small"),og(),eN(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(624,"li")(625,"code"),eN(626,"medium"),og(),eN(627,": 24x24."),og(),Sl(628,"li")(629,"code"),eN(630,"large"),og(),eN(631,": 32x32."),og()(),Sl(632,"blockquote")(633,"p"),eN(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(635,"code"),eN(636,"medium"),og(),eN(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(638,"a",32),eN(639,"po-theme"),og(),eN(640,"."),og()()()()(),Sl(641,"h3",13),eN(642,"M\xE9todos"),og(),Sl(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),eN(649," focus "),og()()()()(),Sl(650,"tr",25)(651,"td",25)(652,"p"),eN(653,"Fun\xE7\xE3o que atribui foco ao "),Sl(654,"em"),eN(655,"checkbox"),og(),eN(656,"."),og(),Sl(657,"p"),eN(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),Sl(659,"code"),eN(660,"ViewChild"),og(),eN(661,", como por exemplo:"),og(),Sl(662,"pre")(663,"code"),eN(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),Wl(665,"br"),Sl(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),eN(672," showAdditionalHelp "),og()()()()(),Sl(673,"tr",25)(674,"td",25)(675,"p"),eN(676,"M\xE9todo que exibe "),Sl(677,"code"),eN(678,"p-helper"),og(),eN(679," ou executa a a\xE7\xE3o definida em "),Sl(680,"code"),eN(681,"p-helper{eventOnClick}"),og(),eN(682," ou em "),Sl(683,"code"),eN(684,"p-additionalHelp"),og(),eN(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(686,"code"),eN(687,"p-keydown"),og(),eN(688,"."),og(),Sl(689,"blockquote")(690,"p"),eN(691,"Exibe ou oculta o conte\xFAdo do componente "),Sl(692,"code"),eN(693,"po-helper"),og(),eN(694," quando o componente estiver com foco."),og()(),Sl(695,"pre")(696,"code"),eN(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),og()(),Sl(698,"pre")(699,"code"),eN(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(701,"br"),og());},dependencies:[Ka],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||i)(w(Xn),w(En))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-checkbox-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),og()()()),l&2&&(nw("p-actions",n.actions),Lp(2),nw("p-active",n.activeTab==="doc"),Lp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[rNe,Bme,qme,me,ce,ue,he],encapsulation:2})}return i})();var Ae=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[hL.forChild(Ae),hL]})}return i})();var $e=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[sr,Ee]})}return i})();export{$e as DocPoCheckboxModule};