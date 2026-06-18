import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,d3 as pr,d4 as Hz,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,bF as Fw,cp as Hhe,c8 as Dde,b5 as $he,c9 as Yhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&zl(0,"po-rich-text");},dependencies:[Hz],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Rich Text Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-rich-text-basic/sample-po-rich-text-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-rich-text></po-rich-text>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-rich-text-basic/sample-po-rich-text-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-rich-text-basic',
  templateUrl: './sample-po-rich-text-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRichTextBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-rich-text-basic"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,be,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ie],encapsulation:2})}return a})();var le=(()=>{class a{helperText;errorMessage;event;help;height;label;placeholder;properties;richText;size;toolbarHideActions=[pr.Link];toolbarHideActionsOptions=[{value:pr.Align,label:"align"},{value:pr.Color,label:"color"},{value:pr.Format,label:"format"},{value:pr.Link,label:"link"},{value:pr.List,label:"list"},{value:pr.Media,label:"media"}];propertiesOptions=[{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.errorMessage="",this.help="",this.label="",this.placeholder="",this.properties=[],this.richText="",this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-labs"]],standalone:false,decls:19,vars:32,consts:[["f","ngForm"],["name","richText",3,"ngModelChange","p-change","p-change-model","p-keydown","ngModel","p-helper","p-disabled","p-error-message","p-height","p-help","p-label","p-loading","p-optional","p-placeholder","p-readonly","p-required","p-hide-toolbar-actions","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["name","model","p-label","Model","p-readonly","","p-rows","8",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Properties"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorMessage","p-clean","","p-label","Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","multiselect","p-label","Hide Toolbar Actions ","p-placeholder","color",1,"po-md-6","po-lg-3",3,"ngModelChange","p-options","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=Dx();Il(0,"po-rich-text",1),ww("ngModelChange",function(r){return Xy(m),eN(i.richText,r)||(i.richText=r),Qy(r)}),ft("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2)(3,"po-textarea",3),ww("ngModelChange",function(r){return Xy(m),eN(i.richText,r)||(i.richText=r),Qy(r)}),og(),QA(),zl(4,"po-info",4),og(),zl(5,"po-divider",5),Il(6,"form",null,0)(8,"po-input",6),ww("ngModelChange",function(r){return Xy(m),eN(i.label,r)||(i.label=r),Qy(r)}),og(),QA(),Il(9,"po-input",7),ww("ngModelChange",function(r){return Xy(m),eN(i.help,r)||(i.help=r),Qy(r)}),og(),QA(),Il(10,"po-input",8),ww("ngModelChange",function(r){return Xy(m),eN(i.helperText,r)||(i.helperText=r),Qy(r)}),og(),QA(),Il(11,"po-input",9),ww("ngModelChange",function(r){return Xy(m),eN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),og(),QA(),Il(12,"po-input",10),ww("ngModelChange",function(r){return Xy(m),eN(i.errorMessage,r)||(i.errorMessage=r),Qy(r)}),og(),QA(),Il(13,"po-number",11),ww("ngModelChange",function(r){return Xy(m),eN(i.height,r)||(i.height=r),Qy(r)}),og(),QA(),Il(14,"po-multiselect",12),ww("ngModelChange",function(r){return Xy(m),eN(i.toolbarHideActions,r)||(i.toolbarHideActions=r),Qy(r)}),og(),QA(),Il(15,"po-checkbox-group",13),ww("ngModelChange",function(r){return Xy(m),eN(i.properties,r)||(i.properties=r),Qy(r)}),og(),QA(),Il(16,"po-radio-group",14),ww("ngModelChange",function(r){return Xy(m),eN(i.size,r)||(i.size=r),Qy(r)}),og(),QA(),Il(17,"div",2)(18,"po-button",15),ft("p-click",function(){return i.restore()}),og()()();}l&2&&(Ew("ngModel",i.richText),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-error-message",i.errorMessage)("p-height",i.height)("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-hide-toolbar-actions",i.toolbarHideActions)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),e0(),Lp(3),Ew("ngModel",i.richText),e0(),Lp(),nw("p-value",i.event),Lp(4),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.placeholder),e0(),Lp(),Ew("ngModel",i.errorMessage),e0(),Lp(),Ew("ngModel",i.height),e0(),Lp(),nw("p-options",i.toolbarHideActionsOptions),Ew("ngModel",i.toolbarHideActions),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,F3,Fw,Hhe,Dde,Hz,$he,Yhe],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Rich Text Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-rich-text-labs/sample-po-rich-text-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-rich-text
  name="richText"
  [(ngModel)]="richText"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-error-message]="errorMessage"
  [p-height]="height"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-hide-toolbar-actions]="toolbarHideActions"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-rich-text>

<po-divider></po-divider>

<div class="po-row">
  <po-textarea class="po-lg-6 po-md-12" name="model" [(ngModel)]="richText" p-label="Model" p-readonly p-rows="8">
  </po-textarea>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorMessage" [(ngModel)]="errorMessage" p-clean p-label="Error Message"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

  <po-multiselect
    class="po-md-6 po-lg-3"
    name="multiselect"
    p-label="Hide Toolbar Actions "
    [p-options]="toolbarHideActionsOptions"
    [(ngModel)]="toolbarHideActions"
    p-placeholder="color"
  >
  </po-multiselect>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-rich-text-labs/sample-po-rich-text-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectOption,
  PoRadioGroupOption,
  PoRichTextToolbarActions
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-rich-text-labs',
  templateUrl: './sample-po-rich-text-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRichTextLabsComponent implements OnInit {
  helperText: string;
  errorMessage: string;
  event: string;
  help: string;
  height: number;
  label: string;
  placeholder: string;
  properties: Array<string>;
  richText: string;
  size: string;
  toolbarHideActions = [PoRichTextToolbarActions.Link];

  public readonly toolbarHideActionsOptions: Array<PoMultiselectOption> = [
    { value: PoRichTextToolbarActions.Align, label: 'align' },
    { value: PoRichTextToolbarActions.Color, label: 'color' },
    { value: PoRichTextToolbarActions.Format, label: 'format' },
    { value: PoRichTextToolbarActions.Link, label: 'link' },
    { value: PoRichTextToolbarActions.List, label: 'list' },
    { value: PoRichTextToolbarActions.Media, label: 'media' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.errorMessage = '';
    this.help = '';
    this.label = '';
    this.placeholder = '';
    this.properties = [];
    this.richText = '';
    this.size = 'medium';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-rich-text-labs"),og(),zl(23,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return a})();var pe=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY
3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAA
DNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADT
AAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdod
CAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAA
AAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAA
AAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZ
Gl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZ
XcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3Vyd
gAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrA
PAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECe
gKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwB
P4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4Ig
giWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mD
UANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTI
xNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRG
ncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jC
iM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0ML
UEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4y
DkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeR
iJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U2
1UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9Z
ZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s
3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi
/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUeht
qImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKu
cK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTR
NPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO607
0DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////2wCEAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUE
Q8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVwBAgMDAwQDBAUFBAYGBgYGCAgHBwgIDQkKCQoJDRMMDgwMDgwTERQRDxEUER4YFRUYHiMdHB0jKiUlKjUyNUVFXP/AABEIAKAA8AMBIgACE
QEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqN
DU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9
PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqN
TY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19
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
ISc0tWSf//Z`;var de=(()=>{class a{recipe=`
    <div style="text-align: center;"><b>Quick Hummus Recipe</b></div>
    <div><br></div>
    <div style="text-align: start;">
    <div><b><u>Preparation Time:</u></b>&nbsp;less than 30 mins</div>
    <div><b><u>Serves</u></b>: 3 people</div>
    <div><b><u>Reference</u></b>:
      <a class="po-rich-text-link" href="http://en.wikipedia.org/wiki/hummus" target="_blank">Hummus Delicious Recipe</a>
    </div>
    </div>
    <div><br></div>
    <img src="${pe}">
    <div style="text-align: start;"><br></div>
    <div style="text-align: start;"><u><b>Ingredients</b></u>&nbsp;<br></div>
    <div style="text-align: start;"><u><br></u></div>
    <div style="text-align: start;">
      <ul>
        <li><i>200g/7oz</i>&nbsp;canned&nbsp;<b>chickpeas</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;<b>lemon juice</b>&nbsp;or more</li>
        <li><i>2</i>&nbsp;<b>garlic</b>&nbsp;cloves, crushed</li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;ground&nbsp;<b>cumin&nbsp;</b></li>
        <li><i>pinch</i>&nbsp;<b>salt</b></li>
        <li><i>1</i>&nbsp;<i>tbsp</i>&nbsp;<b>tahini</b>&nbsp;(sesame seed paste)</li>
        <li><i>4</i>&nbsp;<i>tbsp</i>&nbsp;<b>water</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;extra virgin&nbsp;<b>olive oil</b></li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;<b>paprika</b></li>
        <li><i>4&nbsp;rounds</i>&nbsp;of&nbsp;<b>pitta bread</b></li>
      </ul>
    </div>
    <div style="text-align: justify;"><b><br></b></div>
    <div style="text-align: start;">
      <div style="text-align: justify;">
        <b>1.&nbsp;</b>Drain the chickpeas and rinse. Reserve a few whole chick peas for serving.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>2.</b>&nbsp;Combine the chickpeas, lemon juice, garlic, cumin, salt, tahini, and water in a food processor,
        and blend to a creamy pur\xE9e.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>3.&nbsp;</b>Add more lemon juice, garlic, cumin or salt to taste. Turn out into a dinner plate, and make
        smooth with the back of a spoon. Drizzle with extra virgin olive oil and scatter with the reserved chickpeas.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>4.&nbsp;</b>Sprinkle with paprika and serve with pita bread, warmed in a moderate
        oven for three minutes, and cut into quarters.
      </div>
    </div>`;static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-recipe"]],standalone:false,decls:1,vars:1,consts:[["name","recipe","p-height","262",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(Il(0,"po-rich-text",0),ww("ngModelChange",function(A){return eN(i.recipe,A)||(i.recipe=A),A}),og(),QA()),l&2&&(Ew("ngModel",i.recipe),e0());},dependencies:[$9,mk,Hz],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-recipe-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Rich Text Recipe"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-rich-text-recipe/sample-po-rich-text-recipe.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-rich-text name="recipe" [(ngModel)]="recipe" p-height="262"> </po-rich-text>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-rich-text-recipe/sample-po-rich-text-recipe-image-base-64.ts"),og(),Il(19,"pre",9),Qx(20,`export default \`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY
3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAA
DNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADT
AAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdod
CAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAA
AAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAA
AAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZ
Gl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZ
XcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3Vyd
gAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrA
PAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECe
gKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwB
P4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4Ig
giWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mD
UANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTI
xNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRG
ncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jC
iM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0ML
UEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4y
DkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeR
iJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U2
1UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9Z
ZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s
3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi
/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUeht
qImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKu
cK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTR
NPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO607
0DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////2wCEAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUE
Q8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVwBAgMDAwQDBAUFBAYGBgYGCAgHBwgIDQkKCQoJDRMMDgwMDgwTERQRDxEUER4YFRUYHiMdHB0jKiUlKjUyNUVFXP/AABEIAKAA8AMBIgACE
QEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqN
DU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9
PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqN
TY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19
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
ISc0tWSf//Z\`;
`),og(),Il(21,"label",6),Qx(22,"sample-po-rich-text-recipe/sample-po-rich-text-recipe.component.ts"),og(),Il(23,"pre",9),Qx(24,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import image from './sample-po-rich-text-recipe-image-base-64';

@Component({
  selector: 'sample-po-rich-text-recipe',
  templateUrl: './sample-po-rich-text-recipe.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRichTextRecipeComponent {
  recipe = \`
    <div style="text-align: center;"><b>Quick Hummus Recipe</b></div>
    <div><br></div>
    <div style="text-align: start;">
    <div><b><u>Preparation Time:</u></b>&nbsp;less than 30 mins</div>
    <div><b><u>Serves</u></b>: 3 people</div>
    <div><b><u>Reference</u></b>:
      <a class="po-rich-text-link" href="http://en.wikipedia.org/wiki/hummus" target="_blank">Hummus Delicious Recipe</a>
    </div>
    </div>
    <div><br></div>
    <img src="\${image}">
    <div style="text-align: start;"><br></div>
    <div style="text-align: start;"><u><b>Ingredients</b></u>&nbsp;<br></div>
    <div style="text-align: start;"><u><br></u></div>
    <div style="text-align: start;">
      <ul>
        <li><i>200g/7oz</i>&nbsp;canned&nbsp;<b>chickpeas</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;<b>lemon juice</b>&nbsp;or more</li>
        <li><i>2</i>&nbsp;<b>garlic</b>&nbsp;cloves, crushed</li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;ground&nbsp;<b>cumin&nbsp;</b></li>
        <li><i>pinch</i>&nbsp;<b>salt</b></li>
        <li><i>1</i>&nbsp;<i>tbsp</i>&nbsp;<b>tahini</b>&nbsp;(sesame seed paste)</li>
        <li><i>4</i>&nbsp;<i>tbsp</i>&nbsp;<b>water</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;extra virgin&nbsp;<b>olive oil</b></li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;<b>paprika</b></li>
        <li><i>4&nbsp;rounds</i>&nbsp;of&nbsp;<b>pitta bread</b></li>
      </ul>
    </div>
    <div style="text-align: justify;"><b><br></b></div>
    <div style="text-align: start;">
      <div style="text-align: justify;">
        <b>1.&nbsp;</b>Drain the chickpeas and rinse. Reserve a few whole chick peas for serving.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>2.</b>&nbsp;Combine the chickpeas, lemon juice, garlic, cumin, salt, tahini, and water in a food processor,
        and blend to a creamy pur\xE9e.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>3.&nbsp;</b>Add more lemon juice, garlic, cumin or salt to taste. Turn out into a dinner plate, and make
        smooth with the back of a spoon. Drizzle with extra virgin olive oil and scatter with the reserved chickpeas.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>4.&nbsp;</b>Sprinkle with paprika and serve with pita bread, warmed in a moderate
        oven for three minutes, and cut into quarters.
      </div>
    </div>\`;
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-rich-text-recipe"),og(),zl(27,"hr")),l&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,fe,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,de],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-rich-text-doc"]],standalone:false,decls:837,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-textarea"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<PoRichTextToolbarActions>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoRichTextComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O componente "),Il(24,"code"),Qx(25,"po-rich-text"),og(),Qx(26," \xE9 um editor de textos enriquecidos."),og(),Il(27,"p"),Qx(28,"Para edi\xE7\xE3o de texto simples sem formata\xE7\xE3o recomenda-se o uso do componente "),Il(29,"a",6)(30,"strong"),Qx(31,"po-textarea"),og()(),Qx(32,"."),og(),Il(33,"blockquote")(34,"p"),Qx(35,"No navegador Internet Explorer n\xE3o \xE9 poss\xEDvel alterar a cor do texto. "),og()()(),Il(36,"div",7)(37,"h4",8),Qx(38,"Seletor"),og(),Il(39,"pre",9),Qx(40,`<po-rich-text
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-disabled-text-align="boolean"
    p-error-limit="boolean"
    p-error-message="string"
    p-height="number"
    p-help="string"
    p-hide-toolbar-actions="Array<PoRichTextToolbarActions>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-rich-text>
`),og()(),Il(41,"h4",10),Qx(42,"Propriedades"),og(),Il(43,"table",11)(44,"tr",12)(45,"th",13),Qx(46,"Nome"),og(),Il(47,"th",13),Qx(48,"Tipo"),og(),Il(49,"th",13),Qx(50,"Padr\xE3o"),og(),Il(51,"th",13),Qx(52,"Descri\xE7\xE3o"),og()(),Il(53,"tr",14)(54,"td",15)(55,"div",16)(56,"span",17),Qx(57," (p-additional-help)"),zl(58,"br"),og()(),Il(59,"div",18),Qx(60,"Deprecated"),og()(),Il(61,"td",19)(62,"code",20),Qx(63,"EventEmitter"),og()(),Il(64,"td",21),Qx(65,"-"),og(),Il(66,"td",22)(67,"em")(68,"strong"),Qx(69,"(opcional)"),og()(),Il(70,"p"),Qx(71,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(72,"blockquote")(73,"p"),Qx(74,"Essa propriedade est\xE1 "),Il(75,"strong"),Qx(76,"depreciada"),og(),Qx(77," e ser\xE1 removida na vers\xE3o "),Il(78,"code"),Qx(79,"23.x.x"),og(),Qx(80,". Recomendamos utilizar a propriedade "),Il(81,"code"),Qx(82,"p-helper"),og(),Qx(83," que oferece mais recursos e flexibilidade."),og()()()(),Il(84,"tr",14)(85,"td",15)(86,"div",23)(87,"span",24),Qx(88," p-additional-help-tooltip"),zl(89,"br"),og()(),Il(90,"div",18),Qx(91,"Deprecated"),og()(),Il(92,"td",19)(93,"code",25),Qx(94,"string"),og()(),Il(95,"td",21),Qx(96,"-"),og(),Il(97,"td",22)(98,"em")(99,"strong"),Qx(100,"(opcional)"),og()(),Il(101,"p"),Qx(102,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(103,"code"),Qx(104,"po-helper"),og(),Qx(105,`.
`),Il(106,"strong"),Qx(107,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(108,"blockquote")(109,"p"),Qx(110,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(111,"blockquote")(112,"p"),Qx(113,"Essa propriedade est\xE1 "),Il(114,"strong"),Qx(115,"depreciada"),og(),Qx(116," e ser\xE1 removida na vers\xE3o "),Il(117,"code"),Qx(118,"23.x.x"),og(),Qx(119,". Recomendamos utilizar a propriedade "),Il(120,"code"),Qx(121,"p-helper"),og(),Qx(122," que oferece mais recursos e flexibilidade."),og()()()(),Il(123,"tr",14)(124,"td",15)(125,"div",23)(126,"span",24),Qx(127," p-append-in-body"),zl(128,"br"),og()()(),Il(129,"td",19)(130,"code",26),Qx(131,"boolean"),og()(),Il(132,"td",21)(133,"p")(134,"code"),Qx(135,"false"),og()()(),Il(136,"td",22)(137,"em")(138,"strong"),Qx(139,"(opcional)"),og()(),Il(140,"p"),Qx(141,"Define que o popover ("),Il(142,"code"),Qx(143,"p-helper"),og(),Qx(144," e/ou "),Il(145,"code"),Qx(146,"p-error-limit"),og(),Qx(147,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(148,"blockquote")(149,"p"),Qx(150,"Quando utilizado com "),Il(151,"code"),Qx(152,"p-helper"),og(),Qx(153,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(154,"tr",14)(155,"td",15)(156,"div",23)(157,"span",24),Qx(158," p-auto-focus"),zl(159,"br"),og()()(),Il(160,"td",19)(161,"code",26),Qx(162,"boolean"),og()(),Il(163,"td",21)(164,"p")(165,"code"),Qx(166,"false"),og()()(),Il(167,"td",22)(168,"em")(169,"strong"),Qx(170,"(opcional)"),og()(),Il(171,"p"),Qx(172,"Aplica foco no elemento ao ser iniciado."),og(),Il(173,"blockquote")(174,"p"),Qx(175,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),Qx(180," (p-change)"),zl(181,"br"),og()()(),Il(182,"td",19)(183,"code",20),Qx(184,"EventEmitter"),og()(),Il(185,"td",21),Qx(186,"-"),og(),Il(187,"td",22)(188,"em")(189,"strong"),Qx(190,"(opcional)"),og()(),Il(191,"p"),Qx(192,"Evento disparado ao deixar o campo e que recebe como par\xE2metro o valor alterado."),og()()(),Il(193,"tr",14)(194,"td",15)(195,"div",16)(196,"span",17),Qx(197," (p-change-model)"),zl(198,"br"),og()()(),Il(199,"td",19)(200,"code",20),Qx(201,"EventEmitter"),og()(),Il(202,"td",21),Qx(203,"-"),og(),Il(204,"td",22)(205,"em")(206,"strong"),Qx(207,"(opcional)"),og()(),Il(208,"p"),Qx(209,"Evento disparado ao modificar valor do model e que recebe como par\xE2metro o valor alterado."),og()()(),Il(210,"tr",14)(211,"td",15)(212,"div",23)(213,"span",24),Qx(214," p-compact-label"),zl(215,"br"),og()()(),Il(216,"td",19)(217,"code",26),Qx(218,"boolean"),og()(),Il(219,"td",21)(220,"p")(221,"code"),Qx(222,"false"),og()()(),Il(223,"td",22)(224,"em")(225,"strong"),Qx(226,"(opcional)"),og()(),Il(227,"p"),Qx(228,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(229,"p"),Qx(230,"Quando habilitado ("),Il(231,"code"),Qx(232,"true"),og(),Qx(233,"), o modo compacto afeta o conjunto composto por:"),og(),Il(234,"ul")(235,"li")(236,"code"),Qx(237,"po-label"),og()(),Il(238,"li")(239,"code"),Qx(240,"p-requirement (showRequired)"),og()(),Il(241,"li")(242,"code"),Qx(243,"po-helper"),og()()(),Il(244,"p"),Qx(245,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(246,"p"),Qx(247,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(248,"ul")(249,"li")(250,"code"),Qx(251,"--field-container-title-justify"),og()(),Il(252,"li")(253,"code"),Qx(254,"--field-container-title-flex"),og()()(),Il(255,"p"),Qx(256,"Exemplo:"),og(),Il(257,"pre")(258,"code"),Qx(259,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(260,"p"),Qx(261,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(262,"tr",14)(263,"td",15)(264,"div",23)(265,"span",24),Qx(266," p-disabled"),zl(267,"br"),og()()(),Il(268,"td",19)(269,"code",26),Qx(270,"boolean"),og()(),Il(271,"td",21)(272,"p")(273,"code"),Qx(274,"false"),og()()(),Il(275,"td",22)(276,"em")(277,"strong"),Qx(278,"(opcional)"),og()(),Il(279,"p"),Qx(280,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(281,"tr",14)(282,"td",15)(283,"div",23)(284,"span",24),Qx(285," p-disabled-text-align"),zl(286,"br"),og()()(),Il(287,"td",19)(288,"code",26),Qx(289,"boolean"),og()(),Il(290,"td",21)(291,"p")(292,"code"),Qx(293,"false"),og()()(),Il(294,"td",22)(295,"em")(296,"strong"),Qx(297,"(opcional)"),og()(),Il(298,"p"),Qx(299,"Define se o alinhamento de texto ser\xE1 desabilitado."),og()()(),Il(300,"tr",14)(301,"td",15)(302,"div",23)(303,"span",24),Qx(304," p-error-limit"),zl(305,"br"),og()()(),Il(306,"td",19)(307,"code",26),Qx(308,"boolean"),og()(),Il(309,"td",21)(310,"p")(311,"code"),Qx(312,"false"),og()()(),Il(313,"td",22)(314,"em")(315,"strong"),Qx(316,"(opcional)"),og()(),Il(317,"p"),Qx(318,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(319,"blockquote")(320,"p"),Qx(321,"Caso essa propriedade seja definida como "),Il(322,"code"),Qx(323,"true"),og(),Qx(324,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Il(325,"tr",14)(326,"td",15)(327,"div",23)(328,"span",24),Qx(329," p-error-message"),zl(330,"br"),og()()(),Il(331,"td",19)(332,"code",25),Qx(333,"string"),og()(),Il(334,"td",21),Qx(335,"-"),og(),Il(336,"td",22)(337,"em")(338,"strong"),Qx(339,"(opcional)"),og()(),Il(340,"p"),Qx(341,"Mensagem que ser\xE1 apresentada quando a propriedade required estiver habilitada e o campo for limpo ap\xF3s algo ser digitado."),og()()(),Il(342,"tr",14)(343,"td",15)(344,"div",23)(345,"span",24),Qx(346," p-height"),zl(347,"br"),og()()(),Il(348,"td",19)(349,"code",27),Qx(350,"number"),og()(),Il(351,"td",21),Qx(352,"-"),og(),Il(353,"td",22)(354,"em")(355,"strong"),Qx(356,"(opcional)"),og()(),Il(357,"p"),Qx(358,"Define a altura da \xE1rea de edi\xE7\xE3o de texto."),og(),Il(359,"blockquote")(360,"p"),Qx(361,"Altura m\xEDnima do componente \xE9 "),Il(362,"code"),Qx(363,"94"),og(),Qx(364," e a altura m\xE1xima \xE9 "),Il(365,"code"),Qx(366,"262"),og(),Qx(367,"."),og()()()(),Il(368,"tr",14)(369,"td",15)(370,"div",23)(371,"span",24),Qx(372," p-help"),zl(373,"br"),og()()(),Il(374,"td",19)(375,"code",25),Qx(376,"string"),og()(),Il(377,"td",21),Qx(378,"-"),og(),Il(379,"td",22)(380,"em")(381,"strong"),Qx(382,"(opcional)"),og()(),Il(383,"p"),Qx(384,"Texto de apoio do campo."),og()()(),Il(385,"tr",14)(386,"td",15)(387,"div",23)(388,"span",24),Qx(389," p-hide-toolbar-actions"),zl(390,"br"),og()()(),Il(391,"td",19)(392,"code",28),Qx(393,"Array<PoRichTextToolbarActions>"),og()(),Il(394,"td",21)(395,"p")(396,"code"),Qx(397,"[]"),og()()(),Il(398,"td",22)(399,"em")(400,"strong"),Qx(401,"(opcional)"),og()(),Il(402,"p"),Qx(403,"Define as a\xE7\xF5es da barra de ferramentas do "),Il(404,"code"),Qx(405,"PoRichTextComponent"),og(),Qx(406,` que ser\xE3o ocultadas.
Aceita um \xFAnico valor do tipo `),Il(407,"code"),Qx(408,"PoRichTextToolbarActions"),og(),Qx(409," ou uma lista de valores."),og(),Il(410,"blockquote")(411,"p"),Qx(412,"Esta propriedade sobrep\xF5e a configura\xE7\xE3o da propriedade "),Il(413,"code"),Qx(414,"p-disabled-text-align"),og(),Qx(415," quando for passada como "),Il(416,"code"),Qx(417,"false"),og(),Qx(418,", caso sejam definidas simultaneamente."),og()()()(),Il(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Qx(423," (p-keydown)"),zl(424,"br"),og()()(),Il(425,"td",19)(426,"code",20),Qx(427,"EventEmitter"),og()(),Il(428,"td",21),Qx(429,"-"),og(),Il(430,"td",22)(431,"em")(432,"strong"),Qx(433,"(opcional)"),og()(),Il(434,"p"),Qx(435,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(436,"code"),Qx(437,"KeyboardEvent"),og(),Qx(438," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(439,"tr",14)(440,"td",15)(441,"div",23)(442,"span",24),Qx(443," p-label"),zl(444,"br"),og()()(),Il(445,"td",19)(446,"code",25),Qx(447,"string"),og()(),Il(448,"td",21),Qx(449,"-"),og(),Il(450,"td",22)(451,"em")(452,"strong"),Qx(453,"(opcional)"),og()(),Il(454,"p"),Qx(455,"R\xF3tulo do campo."),og()()(),Il(456,"tr",14)(457,"td",15)(458,"div",23)(459,"span",24),Qx(460," p-label-text-wrap"),zl(461,"br"),og()()(),Il(462,"td",19)(463,"code",26),Qx(464,"boolean"),og()(),Il(465,"td",21)(466,"p")(467,"code"),Qx(468,"false"),og()()(),Il(469,"td",22)(470,"em")(471,"strong"),Qx(472,"(opcional)"),og()(),Il(473,"p"),Qx(474,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(475,"code"),Qx(476,"p-label"),og(),Qx(477,". Quando "),Il(478,"code"),Qx(479,"p-label-text-wrap"),og(),Qx(480,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(481,"tr",14)(482,"td",15)(483,"div",23)(484,"span",24),Qx(485," p-loading"),zl(486,"br"),og()()(),Il(487,"td",19)(488,"code",26),Qx(489,"boolean"),og()(),Il(490,"td",21)(491,"p")(492,"code"),Qx(493,"false"),og()()(),Il(494,"td",22)(495,"em")(496,"strong"),Qx(497,"(opcional)"),og()(),Il(498,"p"),Qx(499,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Il(500,"tr",14)(501,"td",15)(502,"div",23)(503,"span",24),Qx(504," name"),zl(505,"br"),og()()(),Il(506,"td",19)(507,"code",25),Qx(508,"string"),og()(),Il(509,"td",21),Qx(510,"-"),og(),Il(511,"td",22)(512,"p"),Qx(513,"Nome e identificador do campo."),og()()(),Il(514,"tr",14)(515,"td",15)(516,"div",23)(517,"span",24),Qx(518," p-optional"),zl(519,"br"),og()()(),Il(520,"td",19)(521,"code",26),Qx(522,"boolean"),og()(),Il(523,"td",21)(524,"p")(525,"code"),Qx(526,"false"),og()()(),Il(527,"td",22)(528,"em")(529,"strong"),Qx(530,"(opcional)"),og()(),Il(531,"p"),Qx(532,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(533,"blockquote")(534,"p"),Qx(535,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(536,"ul")(537,"li"),Qx(538,"O campo conter "),Il(539,"code"),Qx(540,"p-required"),og(),Qx(541,";"),og(),Il(542,"li"),Qx(543,"N\xE3o possuir "),Il(544,"code"),Qx(545,"p-help"),og(),Qx(546," e/ou "),Il(547,"code"),Qx(548,"p-label"),og(),Qx(549,"."),og()()()(),Il(550,"tr",14)(551,"td",15)(552,"div",23)(553,"span",24),Qx(554," p-placeholder"),zl(555,"br"),og()()(),Il(556,"td",19)(557,"code",25),Qx(558,"string"),og()(),Il(559,"td",21)(560,"p"),Qx(561,"''"),og()(),Il(562,"td",22)(563,"em")(564,"strong"),Qx(565,"(opcional)"),og()(),Il(566,"p"),Qx(567,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Il(568,"tr",14)(569,"td",15)(570,"div",23)(571,"span",24),Qx(572," p-helper"),zl(573,"br"),og()()(),Il(574,"td",19)(575,"code",29),Qx(576,"PoHelperOptions "),og(),Il(577,"code",25),Qx(578," string"),og()(),Il(579,"td",21),Qx(580,"-"),og(),Il(581,"td",22)(582,"em")(583,"strong"),Qx(584,"(opcional)"),og()(),Il(585,"p"),Qx(586,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(587,"code"),Qx(588,"p-label"),og(),Qx(589," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(590,"code"),Qx(591,"p-label"),og(),Qx(592,"."),og(),Il(593,"blockquote")(594,"p"),Qx(595,"Para mais informa\xE7\xF5es acesse: "),Il(596,"a",30),Qx(597,"https://po-ui.io/documentation/po-helper"),og(),Qx(598,"."),og()(),Il(599,"blockquote")(600,"p"),Qx(601,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(602,"code"),Qx(603,"p-additional-help-tooltip"),og(),Qx(604," e "),Il(605,"code"),Qx(606,"p-additional-help"),og(),Qx(607,") ser\xE1 ignorado."),og()()()(),Il(608,"tr",14)(609,"td",15)(610,"div",23)(611,"span",24),Qx(612," p-readonly"),zl(613,"br"),og()()(),Il(614,"td",19)(615,"code",26),Qx(616,"boolean"),og()(),Il(617,"td",21)(618,"p")(619,"code"),Qx(620,"false"),og()()(),Il(621,"td",22)(622,"em")(623,"strong"),Qx(624,"(opcional)"),og()(),Il(625,"p"),Qx(626,"Indica que o campo ser\xE1 somente leitura."),og()()(),Il(627,"tr",14)(628,"td",15)(629,"div",23)(630,"span",24),Qx(631," p-required"),zl(632,"br"),og()()(),Il(633,"td",19)(634,"code",26),Qx(635,"boolean"),og()(),Il(636,"td",21)(637,"p")(638,"code"),Qx(639,"false"),og()()(),Il(640,"td",22)(641,"em")(642,"strong"),Qx(643,"(opcional)"),og()(),Il(644,"p"),Qx(645,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(646,"tr",14)(647,"td",15)(648,"div",23)(649,"span",24),Qx(650," p-show-required"),zl(651,"br"),og()()(),Il(652,"td",19)(653,"code",26),Qx(654,"boolean"),og()(),Il(655,"td",21),Qx(656,"-"),og(),Il(657,"td",22)(658,"p"),Qx(659,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(660,"blockquote")(661,"p"),Qx(662,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(663,"ul")(664,"li"),Qx(665,"N\xE3o possuir "),Il(666,"code"),Qx(667,"p-help"),og(),Qx(668," e/ou "),Il(669,"code"),Qx(670,"p-label"),og(),Qx(671,"."),og()()()(),Il(672,"tr",14)(673,"td",15)(674,"div",23)(675,"span",24),Qx(676," p-size"),zl(677,"br"),og()()(),Il(678,"td",19)(679,"code",25),Qx(680,"string"),og()(),Il(681,"td",21)(682,"p")(683,"code"),Qx(684,"medium"),og()()(),Il(685,"td",22)(686,"em")(687,"strong"),Qx(688,"(opcional)"),og()(),Il(689,"p"),Qx(690,"Define o tamanho do componente:"),og(),Il(691,"ul")(692,"li")(693,"code"),Qx(694,"small"),og(),Qx(695,": altura dos buttons como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(696,"li")(697,"code"),Qx(698,"medium"),og(),Qx(699,": altura dos buttons como 44px."),og()(),Il(700,"blockquote")(701,"p"),Qx(702,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(703,"code"),Qx(704,"medium"),og(),Qx(705,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(706,"a",31),Qx(707,"po-theme"),og(),Qx(708,"."),og()()()()(),Il(709,"h3",10),Qx(710,"M\xE9todos"),og(),Il(711,"table",32)(712,"tr",14)(713,"th",33)(714,"div",23)(715,"h4")(716,"span",24),Qx(717," focus "),og()()()()(),Il(718,"tr",22)(719,"td",22)(720,"p"),Qx(721,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(722,"p"),Qx(723,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(724,"pre")(725,"code"),Qx(726,`import { PoRichTextComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRichTextComponent, { static: true }) richText: PoRichTextComponent;

focusRichText() {
  this.richText.focus();
}
`),og()()()()(),zl(727,"br"),Il(728,"table",32)(729,"tr",14)(730,"th",33)(731,"div",23)(732,"h4")(733,"span",24),Qx(734," showAdditionalHelp "),og()()()()(),Il(735,"tr",22)(736,"td",22)(737,"p"),Qx(738,"M\xE9todo que exibe "),Il(739,"code"),Qx(740,"p-helper"),og(),Qx(741," ou executa a a\xE7\xE3o definida em "),Il(742,"code"),Qx(743,"p-helper{eventOnClick}"),og(),Qx(744," ou em "),Il(745,"code"),Qx(746,"p-additionalHelp"),og(),Qx(747,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(748,"code"),Qx(749,"p-keydown"),og(),Qx(750,"."),og(),Il(751,"blockquote")(752,"p"),Qx(753,"Exibe ou oculta o conte\xFAdo do componente "),Il(754,"code"),Qx(755,"po-helper"),og(),Qx(756," quando o componente estiver com foco."),og()(),Il(757,"pre")(758,"code"),Qx(759,`// Exemplo com p-label e p-helper
<po-rich-text
 #richtext
 ...
 p-label="Label do richtext"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, richtext)"
></po-rich-text>
`),og()(),Il(760,"pre")(761,"code"),Qx(762,`...
onKeyDown(event: KeyboardEvent, inp: PoRichTextComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(763,"br"),Il(764,"h3"),Qx(765,"Enums"),og(),Il(766,"h4",4)(767,"code",5),Qx(768,"PoRichTextToolbarActions"),og()(),Il(769,"div",2)(770,"p"),Qx(771,"Enumera\xE7\xE3o que define as a\xE7\xF5es dispon\xEDveis na barra de ferramentas do "),Il(772,"code"),Qx(773,"PoRichTextComponent"),og(),Qx(774,`.
Cada a\xE7\xE3o corresponde a um conjunto de bot\xF5es ou funcionalidades que podem ser habilitados ou desabilitados
na barra de ferramentas do editor do rich-text.`),og()(),Il(775,"h4",10),Qx(776,"Propriedades"),og(),Il(777,"table",11)(778,"tr",12)(779,"th",13),Qx(780,"Nome"),og(),Il(781,"th",13),Qx(782,"Descri\xE7\xE3o"),og()(),Il(783,"tr",14)(784,"td",15)(785,"div",23)(786,"span",24),Qx(787," Color"),zl(788,"br"),og()()(),Il(789,"td",22)(790,"p"),Qx(791,"Seletor de cores, A\xE7\xE3o que permite que o usu\xE1rio altere a cor do texto selecionado."),og()()(),Il(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),Qx(796," Align"),zl(797,"br"),og()()(),Il(798,"td",22)(799,"p"),Qx(800,"Alinhamento de texto, incluindo alinhamento \xE0 esquerda, centralizado, \xE0 direita e justificado."),og()()(),Il(801,"tr",14)(802,"td",15)(803,"div",23)(804,"span",24),Qx(805," Format"),zl(806,"br"),og()()(),Il(807,"td",22)(808,"p"),Qx(809,"Formata\xE7\xE3o de texto, como aplicar negrito, it\xE1lico ou sublinhado ao texto selecionado."),og()()(),Il(810,"tr",14)(811,"td",15)(812,"div",23)(813,"span",24),Qx(814," List"),zl(815,"br"),og()()(),Il(816,"td",22)(817,"p"),Qx(818,"Listas com marcadores (bullet points) ou listas numeradas."),og()()(),Il(819,"tr",14)(820,"td",15)(821,"div",23)(822,"span",24),Qx(823," Link"),zl(824,"br"),og()()(),Il(825,"td",22)(826,"p"),Qx(827,"Links no conte\xFAdo, aplica partes do texto para serem clic\xE1veis e direcionem para URLs especificadas."),og()()(),Il(828,"tr",14)(829,"td",15)(830,"div",23)(831,"span",24),Qx(832," Media"),zl(833,"br"),og()()(),Il(834,"td",22)(835,"p"),Qx(836,"M\xEDdias, como imagens, no conte\xFAdo do editor."),og()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Rich Text",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-rich-text-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-rich-text-basic-view")(6,"sample-po-rich-text-labs-view")(7,"sample-po-rich-text-recipe-view"),og()()()),l&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,ae,re,Ae,me],encapsulation:2})}return a})();var Ce=[{path:"",component:se}],ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[uL.forChild(Ce),uL]})}return a})();var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,ce]})}return a})();export{_e as DocPoRichTextModule};