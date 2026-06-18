import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,bt as Ak,aW as Yp,d7 as I3,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,cQ as Ik,cR as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as F3,cp as Hhe,c8 as Dde,aJ as qhe,bH as k3,c9 as Yhe,ba as yNe,bc as OO,aB as Dx,aM as ww,aN as QA,a4 as mN,aq as lx,aO as Ew,aP as e0,a5 as yN,at as ux,b5 as $he,cX as L3,bd as Ax,a7 as lN,av as Gl,aw as co,ax as lo,ab as lt$1,b6 as Yo,d8 as Ome,d9 as fNe,P as Pt,a3 as cNe,aA as Sx,aD as Xy,aT as eN,aE as Qy}from'./main-FCMDZGSJ.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&zl(0,"po-upload",0);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Upload Basic"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-upload-basic"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,He,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Fe],encapsulation:2})}return a})();function Ge(a,Ie){if(a&1&&(Il(0,"div")(1,"po-widget",22)(2,"form",23),zl(3,"po-input",24),QA(),zl(4,"po-select",25),QA(),zl(5,"po-select",26),QA(),zl(6,"po-switch",27),QA(),zl(7,"po-switch",28),QA(),og()()()),a&2){let d=Sx();Lp(2),nw("formGroup",d.actionForm),Lp(),e0(),Lp(),nw("p-options",d.iconOptions),e0(),Lp(),nw("p-options",d.typeOptions),e0(),Lp(),e0(),Lp(),e0();}}var De=(()=>{class a{fb=f(Ak);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=Dx();Il(0,"po-upload",1),ww("ngModelChange",function(l){return Xy(m),eN(i.upload,l)||(i.upload=l),Qy(l)}),ft("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),og(),QA(),zl(1,"po-divider"),Il(2,"div",2),zl(3,"po-info",3),mN(4,"json"),zl(5,"po-info",4),og(),zl(6,"po-divider"),Il(7,"div",2)(8,"form",null,0)(10,"po-input",5),ww("ngModelChange",function(l){return Xy(m),eN(i.allowedExtensions,l)||(i.allowedExtensions=l),Qy(l)}),ft("p-change",function(){return i.onChangeExtension()}),og(),QA(),Il(11,"po-number",6),ww("ngModelChange",function(l){return Xy(m),eN(i.maxFiles,l)||(i.maxFiles=l),Qy(l)}),ft("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),og(),QA(),Il(12,"po-number",7),ww("ngModelChange",function(l){return Xy(m),eN(i.dragDropHeight,l)||(i.dragDropHeight=l),Qy(l)}),og(),QA(),Il(13,"po-number",8),ww("ngModelChange",function(l){return Xy(m),eN(i.minSize,l)||(i.minSize=l),Qy(l)}),ft("p-change",function(){return i.onChangeMinSize(i.minSize)}),og(),QA(),Il(14,"po-number",9),ww("ngModelChange",function(l){return Xy(m),eN(i.maxSize,l)||(i.maxSize=l),Qy(l)}),ft("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),og(),QA(),zl(15,"po-divider"),Il(16,"po-input",10),ww("ngModelChange",function(l){return Xy(m),eN(i.label,l)||(i.label=l),Qy(l)}),og(),QA(),Il(17,"po-input",11),ww("ngModelChange",function(l){return Xy(m),eN(i.help,l)||(i.help=l),Qy(l)}),og(),QA(),Il(18,"po-input",12),ww("ngModelChange",function(l){return Xy(m),eN(i.helperText,l)||(i.helperText=l),Qy(l)}),og(),QA(),Il(19,"po-input",13),ww("ngModelChange",function(l){return Xy(m),eN(i.formField,l)||(i.formField=l),Qy(l)}),og(),QA(),Il(20,"po-input",14),ww("ngModelChange",function(l){return Xy(m),eN(i.url,l)||(i.url=l),Qy(l)}),og(),QA(),Il(21,"po-input",15),ww("ngModelChange",function(l){return Xy(m),eN(i.headersLabs,l)||(i.headersLabs=l),Qy(l)}),ft("p-change",function(l){return i.onChangeHeaders(l)}),og(),QA(),Il(22,"po-input",16),ww("ngModelChange",function(l){return Xy(m),eN(i.literals,l)||(i.literals=l),Qy(l)}),ft("p-change",function(){return i.changeLiterals()}),og(),QA(),Il(23,"po-input",17),ww("ngModelChange",function(l){return Xy(m),eN(i.modalActions,l)||(i.modalActions=l),Qy(l)}),ft("p-change",function(){return i.changeModalActions()}),og(),QA(),Il(24,"po-checkbox-group",18),ww("ngModelChange",function(l){return Xy(m),eN(i.properties,l)||(i.properties=l),Qy(l)}),og(),QA(),lx(25,Ge,8,3,"div"),Il(26,"po-radio-group",19),ww("ngModelChange",function(l){return Xy(m),eN(i.size,l)||(i.size=l),Qy(l)}),og(),QA(),Il(27,"div",20)(28,"po-button",21),ft("p-click",function(){return i.restore()}),og()()()();}r&2&&(Ew("ngModel",i.upload),nw("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),e0(),Lp(3),nw("p-value",yN(4,51,i.upload)),Lp(2),nw("p-value",i.event),Lp(5),Ew("ngModel",i.allowedExtensions),e0(),Lp(),Ew("ngModel",i.maxFiles),e0(),Lp(),Ew("ngModel",i.dragDropHeight),e0(),Lp(),Ew("ngModel",i.minSize),e0(),Lp(),Ew("ngModel",i.maxSize),e0(),Lp(2),Ew("ngModel",i.label),e0(),Lp(),Ew("ngModel",i.help),e0(),Lp(),Ew("ngModel",i.helperText),e0(),Lp(),Ew("ngModel",i.formField),e0(),Lp(),Ew("ngModel",i.url),e0(),Lp(),Ew("ngModel",i.headersLabs),e0(),Lp(),Ew("ngModel",i.literals),e0(),Lp(),Ew("ngModel",i.modalActions),nw("p-disabled",!i.properties.includes("showThumbnail")),e0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),e0(),Lp(),ux(i.properties.includes("showCustomAction")?25:-1),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Ik,Ck,Qt,mv,C3,F3,Hhe,Dde,qhe,k3,I3,Yhe,yNe,OO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Upload Labs"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-helper]="helperText"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-thumbnail]="properties.includes('showThumbnail')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-custom-modal-actions]="customModalActions"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
  (p-upload)="changeEvent('p-upload')"
  (p-open-modal-preview)="changeEvent('p-open-modal-preview')"
  (p-remove)="changeEvent('p-remove')"
>
</po-upload>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <po-divider />

    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="customModalActions"
      [(ngModel)]="modalActions"
      [p-disabled]="!properties.includes('showThumbnail')"
      p-help='Ex.: [{"label": "Label", "disabled": false}]'
      p-label="Custom Modal Actions"
      (p-change)="changeModalActions()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

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

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals,
  PoModalAction
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  helperText: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  modalActions: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  customModalActions: Array<PoModalAction>;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'showThumbnail', label: 'Show Thumbnail' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeModalActions() {
    try {
      this.customModalActions = JSON.parse(this.modalActions);
    } catch {
      this.customModalActions = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.helperText = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.modalActions = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.customModalActions = [];
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-upload-labs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,De],encapsulation:2})}return a})();var Xe=["formOpportunity"],Ze=()=>({maxFileSize:"204800"}),Ue=(()=>{class a{poNotification=f(Yp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&Gl(Xe,7),r&2){let m;co(m=lo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=Dx();Il(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(l){return Xy(m),eN(i.name,l)||(i.name=l),Qy(l)}),og(),QA(),og(),Il(4,"div",1)(5,"po-textarea",3),ww("ngModelChange",function(l){return Xy(m),eN(i.biograph,l)||(i.biograph=l),Qy(l)}),og(),QA(),og(),Il(6,"div",1)(7,"po-url",4),ww("ngModelChange",function(l){return Xy(m),eN(i.linkedin,l)||(i.linkedin=l),Qy(l)}),og(),QA(),og(),Il(8,"div",1)(9,"po-upload",5),ww("ngModelChange",function(l){return Xy(m),eN(i.resume,l)||(i.resume=l),Qy(l)}),ft("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),og(),QA(),og(),Il(10,"div",1)(11,"po-button",6),ft("p-click",function(){return i.apply()}),og()()();}if(r&2){let m=Ax(1);Lp(3),Ew("ngModel",i.name),e0(),Lp(2),Ew("ngModel",i.biograph),e0(),Lp(2),Ew("ngModel",i.linkedin),e0(),Lp(2),Ew("ngModel",i.resume),nw("p-restrictions",lN(6,Ze)),e0(),Lp(2),nw("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[G9,$9,z9,mk,hk,Qt,F3,$he,I3,L3],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Upload - Resume"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),og(),Il(13,"pre",7),Qx(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-upload-resume"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,et,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ue],encapsulation:2})}return a})();var nt=["upload"],it=["stepper"],ot=["submitForm"],at=["sucessData"],lt=a=>({"po-invisible":a});function rt(a,Ie){if(a&1){let d=Dx();Il(0,"div",8)(1,"div",9)(2,"p",11),Qx(3,"Confirm informations"),og()(),zl(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),Il(7,"po-button",31),ft("p-click",function(){Xy(d);let i=Sx();return Qy(i.confirmSubmit())}),og()();}if(a&2){let d=Sx();Lp(4),nw("p-value",d.project[0].name||"N/D"),Lp(),nw("p-value",d.title||"N/D"),Lp(),nw("p-value",d.description||"N/D");}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&Gl(nt,7)(it,7)(ot,7)(at,7),r&2){let m;co(m=lo())&&(i.upload=m.first),co(m=lo())&&(i.stepper=m.first),co(m=lo())&&(i.submitForm=m.first),co(m=lo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=Dx();Il(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),Qx(8,"Welcome, TOTVS!"),og(),Il(9,"p",11),Qx(10,"Let's submit your project?"),og()()(),Il(11,"div",8)(12,"po-button",12),ft("p-click",function(){Xy(m);let l=Ax(2);return Qy(l.next())}),og()()()(),Il(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),Qx(21,"Please, select your project:"),og()(),Il(22,"div",4)(23,"p",16),Qx(24,"*Upload a zip file containing your project."),og()()(),Il(25,"div",17)(26,"po-icon",18),ft("click",function(){Xy(m);let l=Ax(32);return Qy(l.selectFiles())}),og(),Il(27,"po-icon",19),ft("click",function(){Xy(m);let l=Ax(32);return Qy(l.clear())}),og()()(),Il(28,"div",4)(29,"label",20),Qx(30,"Attached"),og(),Il(31,"po-upload",21,2),ww("ngModelChange",function(l){return Xy(m),eN(i.project,l)||(i.project=l),Qy(l)}),og(),QA(),og(),Il(33,"div",4)(34,"po-input",22),ww("ngModelChange",function(l){return Xy(m),eN(i.title,l)||(i.title=l),Qy(l)}),og(),QA(),og(),Il(35,"div",4)(36,"po-textarea",23),ww("ngModelChange",function(l){return Xy(m),eN(i.description,l)||(i.description=l),Qy(l)}),og(),QA(),og(),Il(37,"div",8)(38,"po-button",24),ft("p-click",function(){return i.submitProject()}),og()()()()(),Il(39,"po-step",25)(40,"po-widget",7),lx(41,rt,8,3,"div",8),og()()()(),Il(42,"po-modal",26,3)(44,"div",4)(45,"p",27),Qx(46,"Project successfully submited!"),og()()();}r&2&&(Lp(13),nw("p-can-active-next-step",i.canSubmitProject.bind(i)),Lp(14),nw("ngClass",uN(13,lt,i.project.length<1)),Lp(2),Pt("po-invisible",i.project.length<1),Lp(2),Ew("ngModel",i.project),nw("p-restrictions",i.restrictions),e0(),Lp(3),Ew("ngModel",i.title),nw("p-disabled",i.project.length<1),e0(),Lp(2),Ew("ngModel",i.description),nw("p-disabled",i.project.length<1),e0(),Lp(2),nw("p-disabled",i.canSubmitProject()),Lp(3),ux(i.canSubmitProject()?41:-1),Lp(),nw("p-primary-action",i.confirm));},dependencies:[DO,G9,$9,z9,mk,hk,Qt,F3,$he,I3,lt$1,Yhe,Yo,Ome,fNe,yNe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Upload - Realize & Show"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVS!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-upload-rs"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,pt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ae],encapsulation:2})}return a})();var ze=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(Il(0,"po-upload",0),ft("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),og()),r&2&&nw("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Upload - with Download Button"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-upload-download/sample-po-upload-download.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-upload-download"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ct,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ze],encapsulation:2})}return a})();var Et=()=>[".png",".jpg",".jpeg",".gif"],St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&zl(0,"po-upload",0),r&2&&nw("p-restrictions",uN(4,St,lN(3,Et)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[I3],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Upload - with Preview"),og(),Il(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-upload-preview"),og(),zl(23,"hr")),r&2&&(Lp(5),Ux("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,gt,i.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Ve],encapsulation:2})}return a})();var je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Il(7,"blockquote")(8,"p"),Qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Il(10,"code"),Qx(11,"FormsModule"),og(),Qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Il(13,"code"),Qx(14,"ReactiveFormsModule"),og(),Qx(15,", ambos nativos do Angular."),og()()(),Il(16,"h3",3),Qx(17,"Componente"),og(),Il(18,"h4",4)(19,"code",5),Qx(20,"PoUploadComponent"),og()(),Il(21,"div",2)(22,"p"),Qx(23,"O componente "),Il(24,"code"),Qx(25,"po-upload"),og(),Qx(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),og(),Il(27,"ul")(28,"li"),Qx(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),og(),Il(30,"li"),Qx(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),og(),Il(32,"li"),Qx(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),og(),Il(34,"li"),Qx(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),og(),Il(36,"li"),Qx(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),og(),Il(38,"li"),Qx(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),og()(),Il(40,"h4"),Qx(41,"Tokens customiz\xE1veis"),og(),Il(42,"p"),Qx(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Il(44,"blockquote")(45,"p"),Qx(46,"Para maiores informa\xE7\xF5es, acesse o guia "),Il(47,"a",6),Qx(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),Qx(49,"."),og()(),Il(50,"table")(51,"thead")(52,"tr")(53,"th"),Qx(54,"Propriedade"),og(),Il(55,"th"),Qx(56,"Descri\xE7\xE3o"),og(),Il(57,"th"),Qx(58,"Valor Padr\xE3o"),og()()(),Il(59,"tbody")(60,"tr")(61,"td")(62,"strong"),Qx(63,"FIELD CONTAINER"),og()(),zl(64,"td")(65,"td"),og(),Il(66,"tr")(67,"td")(68,"code"),Qx(69,"--field-container-title-justify"),og()(),Il(70,"td"),Qx(71,"Alinhamento horizontal do t\xEDtulo ("),Il(72,"code"),Qx(73,"justify-content"),og(),Qx(74,")"),og(),Il(75,"td")(76,"code"),Qx(77,"space-between"),og()()(),Il(78,"tr")(79,"td")(80,"code"),Qx(81,"--field-container-title-flex"),og()(),Il(82,"td"),Qx(83,"Flex do t\xEDtulo ("),Il(84,"code"),Qx(85,"flex"),og(),Qx(86,")"),og(),Il(87,"td")(88,"code"),Qx(89,"1 auto"),og()()(),Il(90,"tr")(91,"td")(92,"strong"),Qx(93,"TEXT SUPPORT"),og()(),zl(94,"td")(95,"td"),og(),Il(96,"tr")(97,"td")(98,"code"),Qx(99,"--font-family-text-support"),og()(),Il(100,"td"),Qx(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),og(),Il(102,"td")(103,"code"),Qx(104,"var(--font-family-theme)"),og()()(),Il(105,"tr")(106,"td")(107,"code"),Qx(108,"--text-color-text-support"),og()(),Il(109,"td"),Qx(110,"Cor da fonte no texto de suporte"),og(),Il(111,"td")(112,"code"),Qx(113,"var(--color-neutral-dark-90)"),og()()(),Il(114,"tr")(115,"td")(116,"strong"),Qx(117,"UPLOAD CONTENT"),og()(),zl(118,"td")(119,"td"),og(),Il(120,"tr")(121,"td")(122,"code"),Qx(123,"--background-color-content"),og(),Qx(124," \xA0"),og(),Il(125,"td"),Qx(126,"Cor de fundo"),og(),Il(127,"td")(128,"code"),Qx(129,"var(--color-neutral-light-10)"),og()()(),Il(130,"tr")(131,"td")(132,"code"),Qx(133,"--border-color-content"),og()(),Il(134,"td"),Qx(135,"Cor da borda"),og(),Il(136,"td")(137,"code"),Qx(138,"var(--color-neutral-light-20)"),og()()(),Il(139,"tr")(140,"td")(141,"code"),Qx(142,"--border-radius-content"),og()(),Il(143,"td"),Qx(144,"Cont\xE9m o valor do raio dos cantos do elemento"),og(),Il(145,"td")(146,"code"),Qx(147,"var(--border-radius-md)"),og()()(),Il(148,"tr")(149,"td")(150,"code"),Qx(151,"--text-color-file-name"),og()(),Il(152,"td"),Qx(153,"Cor do texto do nome do arquivo"),og(),Il(154,"td")(155,"code"),Qx(156,"var(--color-neutral-dark-90)"),og()()(),Il(157,"tr")(158,"td")(159,"code"),Qx(160,"--font-family-file-name"),og()(),Il(161,"td"),Qx(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),og(),Il(163,"td")(164,"code"),Qx(165,"var(--font-family-theme)"),og()()(),Il(166,"tr")(167,"td")(168,"code"),Qx(169,"--text-color-info-bar"),og()(),Il(170,"td"),Qx(171,"Cor do texto de informa\xE7\xE3o"),og(),Il(172,"td")(173,"code"),Qx(174,"var(--color-neutral-mid-60)"),og()()(),Il(175,"tr")(176,"td")(177,"code"),Qx(178,"--font-family-info-bar"),og()(),Il(179,"td"),Qx(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),og(),Il(181,"td")(182,"code"),Qx(183,"var(--font-family-theme)"),og()()(),Il(184,"tr")(185,"td")(186,"strong"),Qx(187,"ERROR STATE"),og()(),zl(188,"td")(189,"td"),og(),Il(190,"tr")(191,"td")(192,"code"),Qx(193,"--background-color-content-error"),og()(),Il(194,"td"),Qx(195,"Cor de fundo do container de erro"),og(),Il(196,"td")(197,"code"),Qx(198,"var(--color-neutral-light-00)"),og()()(),Il(199,"tr")(200,"td")(201,"code"),Qx(202,"--border-color-content-error"),og()(),Il(203,"td"),Qx(204,"Cor da borda do container de erro"),og(),Il(205,"td")(206,"code"),Qx(207,"var(--color-feedback-negative-base)"),og()()(),Il(208,"tr")(209,"td")(210,"code"),Qx(211,"--text-color-error"),og()(),Il(212,"td"),Qx(213,"Cor do texto do container de erro"),og(),Il(214,"td")(215,"code"),Qx(216,"var(--color-feedback-negative-dark)"),og()()(),Il(217,"tr")(218,"td")(219,"code"),Qx(220,"--color-icon-error"),og()(),Il(221,"td"),Qx(222,"Cor do \xEDcone no estado de erro"),og(),Il(223,"td")(224,"code"),Qx(225,"var(--color-feedback-negative-base)"),og()()(),Il(226,"tr")(227,"td")(228,"code"),Qx(229,"--font-family-error"),og()(),Il(230,"td"),Qx(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),og(),Il(232,"td")(233,"code"),Qx(234,"var(--font-family-theme)"),og()()(),Il(235,"tr")(236,"td")(237,"strong"),Qx(238,"UPLOADED STATE"),og()(),zl(239,"td")(240,"td"),og(),Il(241,"tr")(242,"td")(243,"code"),Qx(244,"--background-color-content-uploaded"),og()(),Il(245,"td"),Qx(246,"Cor de fundo do container com status de enviado"),og(),Il(247,"td")(248,"code"),Qx(249,"var(--color-neutral-light-00)"),og()()(),Il(250,"tr")(251,"td")(252,"code"),Qx(253,"--border-color-content-uploaded"),og()(),Il(254,"td"),Qx(255,"Cor da borda do container com status de enviado"),og(),Il(256,"td")(257,"code"),Qx(258,"var(--color-neutral-light-20)"),og()()(),Il(259,"tr")(260,"td")(261,"strong"),Qx(262,"INTERACTIVE STATE"),og()(),zl(263,"td")(264,"td"),og(),Il(265,"tr")(266,"td")(267,"code"),Qx(268,"--text-color-file-name-interactive"),og()(),Il(269,"td"),Qx(270,"Cor do texto do nome do arquivo quando interativo"),og(),Il(271,"td")(272,"code"),Qx(273,"var(--color-action-default)"),og()()(),Il(274,"tr")(275,"td")(276,"strong"),Qx(277,"THUMBNAIL"),og()(),zl(278,"td")(279,"td"),og(),Il(280,"tr")(281,"td")(282,"code"),Qx(283,"--color-icon-thumbnail"),og()(),Il(284,"td"),Qx(285,"Cor do \xEDcone na thumbnail"),og(),Il(286,"td")(287,"code"),Qx(288,"var(--color-action-default)"),og()()(),Il(289,"tr")(290,"td")(291,"code"),Qx(292,"--border-width-thumbnail"),og()(),Il(293,"td"),Qx(294,"Tamanho da fonte na thumbnail"),og(),Il(295,"td")(296,"code"),Qx(297,"var(--border-width-sm)"),og()()(),Il(298,"tr")(299,"td")(300,"code"),Qx(301,"--border-radius-thumbnail"),og()(),Il(302,"td"),Qx(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),og(),Il(304,"td")(305,"code"),Qx(306,"var(--border-radius-md)"),og()()(),Il(307,"tr")(308,"td")(309,"code"),Qx(310,"--background-color-thumbnail"),og()(),Il(311,"td"),Qx(312,"Cor de fundo na thumbnail"),og(),Il(313,"td")(314,"code"),Qx(315,"var(--color-neutral-light-05)"),og()()(),Il(316,"tr")(317,"td")(318,"strong"),Qx(319,"Focused"),og()(),zl(320,"td")(321,"td"),og(),Il(322,"tr")(323,"td")(324,"code"),Qx(325,"--outline-color-focused"),og()(),Il(326,"td"),Qx(327,"Cor do outline do estado de focus"),og(),Il(328,"td")(329,"code"),Qx(330,"var(--color-action-focus)"),og()()()()()(),Il(331,"div",7)(332,"h4",8),Qx(333,"Seletor"),og(),Il(334,"pre",9),Qx(335,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-compact-label="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-custom-modal-actions="Array<PoModalAction>"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-cancel)="EventEmitter"
    (p-error)="EventEmitter"
    (p-open-modal-preview)="EventEmitter"
    (p-remove)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-show-thumbnail="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),og()(),Il(336,"h4",10),Qx(337,"Propriedades"),og(),Il(338,"table",11)(339,"tr",12)(340,"th",13),Qx(341,"Nome"),og(),Il(342,"th",13),Qx(343,"Tipo"),og(),Il(344,"th",13),Qx(345,"Padr\xE3o"),og(),Il(346,"th",13),Qx(347,"Descri\xE7\xE3o"),og()(),Il(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),Qx(352," (p-additional-help)"),zl(353,"br"),og()(),Il(354,"div",18),Qx(355,"Deprecated"),og()(),Il(356,"td",19)(357,"code",20),Qx(358,"EventEmitter"),og()(),Il(359,"td",21),Qx(360,"-"),og(),Il(361,"td",22)(362,"em")(363,"strong"),Qx(364,"(opcional)"),og()(),Il(365,"p"),Qx(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(367,"blockquote")(368,"p"),Qx(369,"Essa propriedade est\xE1 "),Il(370,"strong"),Qx(371,"depreciada"),og(),Qx(372," e ser\xE1 removida na vers\xE3o "),Il(373,"code"),Qx(374,"23.x.x"),og(),Qx(375,". Recomendamos utilizar a propriedade "),Il(376,"code"),Qx(377,"p-helper"),og(),Qx(378," que oferece mais recursos e flexibilidade."),og()()()(),Il(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),Qx(383," p-additional-help-tooltip"),zl(384,"br"),og()(),Il(385,"div",18),Qx(386,"Deprecated"),og()(),Il(387,"td",19)(388,"code",25),Qx(389,"string"),og()(),Il(390,"td",21),Qx(391,"-"),og(),Il(392,"td",22)(393,"em")(394,"strong"),Qx(395,"(opcional)"),og()(),Il(396,"p"),Qx(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(398,"code"),Qx(399,"po-helper"),og(),Qx(400,`.
`),Il(401,"strong"),Qx(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(403,"blockquote")(404,"p"),Qx(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Il(406,"blockquote")(407,"p"),Qx(408,"Essa propriedade est\xE1 "),Il(409,"strong"),Qx(410,"depreciada"),og(),Qx(411," e ser\xE1 removida na vers\xE3o "),Il(412,"code"),Qx(413,"23.x.x"),og(),Qx(414,". Recomendamos utilizar a propriedade "),Il(415,"code"),Qx(416,"p-helper"),og(),Qx(417," que oferece mais recursos e flexibilidade."),og()()()(),Il(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),Qx(422," p-append-in-body"),zl(423,"br"),og()()(),Il(424,"td",19)(425,"code",26),Qx(426,"boolean"),og()(),Il(427,"td",21)(428,"p")(429,"code"),Qx(430,"false"),og()()(),Il(431,"td",22)(432,"em")(433,"strong"),Qx(434,"(opcional)"),og()(),Il(435,"p"),Qx(436,"Define que o popover ("),Il(437,"code"),Qx(438,"p-helper"),og(),Qx(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Il(440,"blockquote")(441,"p"),Qx(442,"Quando utilizado com "),Il(443,"code"),Qx(444,"p-helper"),og(),Qx(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),Qx(450," p-auto-focus"),zl(451,"br"),og()()(),Il(452,"td",19)(453,"code",26),Qx(454,"boolean"),og()(),Il(455,"td",21)(456,"p")(457,"code"),Qx(458,"false"),og()()(),Il(459,"td",22)(460,"em")(461,"strong"),Qx(462,"(opcional)"),og()(),Il(463,"p"),Qx(464,"Aplica foco no elemento ao ser iniciado."),og(),Il(465,"blockquote")(466,"p"),Qx(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Il(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),Qx(472," p-auto-upload"),zl(473,"br"),og()()(),Il(474,"td",19)(475,"code",26),Qx(476,"boolean"),og()(),Il(477,"td",21)(478,"p")(479,"code"),Qx(480,"false"),og()()(),Il(481,"td",22)(482,"em")(483,"strong"),Qx(484,"(opcional)"),og()(),Il(485,"p"),Qx(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Il(487,"blockquote")(488,"p"),Qx(489,"Esta propriedade funciona somente se a propriedade "),Il(490,"code"),Qx(491,"p-url"),og(),Qx(492," tiver um valor atribu\xEDdo."),og()()()(),Il(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),Qx(497," p-compact-label"),zl(498,"br"),og()()(),Il(499,"td",19)(500,"code",26),Qx(501,"boolean"),og()(),Il(502,"td",21)(503,"p")(504,"code"),Qx(505,"false"),og()()(),Il(506,"td",22)(507,"em")(508,"strong"),Qx(509,"(opcional)"),og()(),Il(510,"p"),Qx(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(512,"p"),Qx(513,"Quando habilitado ("),Il(514,"code"),Qx(515,"true"),og(),Qx(516,"), o modo compacto afeta o conjunto composto por:"),og(),Il(517,"ul")(518,"li")(519,"code"),Qx(520,"po-label"),og()(),Il(521,"li")(522,"code"),Qx(523,"p-requirement (showRequired)"),og()(),Il(524,"li")(525,"code"),Qx(526,"po-helper"),og()()(),Il(527,"p"),Qx(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(529,"p"),Qx(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(531,"ul")(532,"li")(533,"code"),Qx(534,"--field-container-title-justify"),og()(),Il(535,"li")(536,"code"),Qx(537,"--field-container-title-flex"),og()()(),Il(538,"p"),Qx(539,"Exemplo:"),og(),Il(540,"pre")(541,"code"),Qx(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(543,"p"),Qx(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),Qx(549," p-custom-action"),zl(550,"br"),og()()(),Il(551,"td",19)(552,"code",27),Qx(553,"PoProgressAction"),og()(),Il(554,"td",21),Qx(555,"-"),og(),Il(556,"td",22)(557,"em")(558,"strong"),Qx(559,"(opcional)"),og()(),Il(560,"p"),Qx(561,"Define uma a\xE7\xE3o personalizada no componente "),Il(562,"code"),Qx(563,"po-upload"),og(),Qx(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Il(565,"p"),Qx(566,"A a\xE7\xE3o deve implementar a interface "),Il(567,"strong"),Qx(568,"PoProgressAction"),og(),Qx(569,", permitindo configurar propriedades como:"),og(),Il(570,"ul")(571,"li")(572,"code"),Qx(573,"label"),og(),Qx(574,": Texto do bot\xE3o."),og(),Il(575,"li")(576,"code"),Qx(577,"icon"),og(),Qx(578,": \xCDcone a ser exibido no bot\xE3o."),og(),Il(579,"li")(580,"code"),Qx(581,"type"),og(),Qx(582,": Tipo de bot\xE3o (ex.: "),Il(583,"code"),Qx(584,"danger"),og(),Qx(585," ou "),Il(586,"code"),Qx(587,"default"),og(),Qx(588,")."),og(),Il(589,"li")(590,"code"),Qx(591,"disabled"),og(),Qx(592,": Indica se o bot\xE3o deve estar desabilitado."),og(),Il(593,"li")(594,"code"),Qx(595,"visible"),og(),Qx(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),og()(),Il(597,"p")(598,"strong"),Qx(599,"Exemplo de uso:"),og()(),Il(600,"pre")(601,"code",28),Qx(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),og()(),Il(603,"pre")(604,"code",29),Qx(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),og()()()(),Il(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),Qx(610," (p-custom-action-click)"),zl(611,"br"),og()()(),Il(612,"td",19)(613,"code",20),Qx(614,"EventEmitter"),og()(),Il(615,"td",21),Qx(616,"-"),og(),Il(617,"td",22)(618,"em")(619,"strong"),Qx(620,"(opcional)"),og()(),Il(621,"p"),Qx(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Il(623,"code"),Qx(624,"p-custom-action"),og(),Qx(625,"."),og(),Il(626,"p"),Qx(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Il(628,"p")(629,"strong"),Qx(630,"Exemplo de uso:"),og()(),Il(631,"pre")(632,"code",28),Qx(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),og()(),Il(634,"pre")(635,"code",29),Qx(636,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),og()()()(),Il(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),Qx(641," p-custom-modal-actions"),zl(642,"br"),og()()(),Il(643,"td",19)(644,"code",30),Qx(645,"Array<PoModalAction>"),og()(),Il(646,"td",21),Qx(647,"-"),og(),Il(648,"td",22)(649,"em")(650,"strong"),Qx(651,"(opcional)"),og()(),Il(652,"p"),Qx(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),og(),Il(654,"p"),Qx(655,"A a\xE7\xE3o deve implementar a interface "),Il(656,"strong"),Qx(657,"PoModalAction"),og(),Qx(658,", permitindo configurar propriedades como:"),og(),Il(659,"ul")(660,"li")(661,"code"),Qx(662,"label"),og(),Qx(663,": Texto do bot\xE3o."),og(),Il(664,"li")(665,"code"),Qx(666,"action"),og(),Qx(667,": \xCDcone a ser exibido no bot\xE3o."),og(),Il(668,"li")(669,"code"),Qx(670,"danger"),og(),Qx(671,": Define a propriedade "),Il(672,"code"),Qx(673,"p-danger"),og(),Qx(674," do bot\xE3o."),og(),Il(675,"li")(676,"code"),Qx(677,"disabled"),og(),Qx(678,": Indica se o bot\xE3o deve estar desabilitado."),og(),Il(679,"li")(680,"code"),Qx(681,"visible"),og(),Qx(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),og()(),Il(683,"p")(684,"strong"),Qx(685,"Exemplo de uso:"),og()(),Il(686,"pre")(687,"code",28),Qx(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),og()(),Il(689,"pre")(690,"code",29),Qx(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),og()()()(),Il(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),Qx(696," p-directory"),zl(697,"br"),og()()(),Il(698,"td",19)(699,"code",26),Qx(700,"boolean"),og()(),Il(701,"td",21)(702,"p")(703,"code"),Qx(704,"false"),og()()(),Il(705,"td",22)(706,"em")(707,"strong"),Qx(708,"(opcional)"),og()(),Il(709,"p"),Qx(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Il(711,"blockquote")(712,"p"),Qx(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Il(714,"blockquote")(715,"p"),Qx(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Il(717,"strong"),Qx(718,"Internet Explorer"),og(),Qx(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()()()(),Il(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),Qx(724," p-disabled"),zl(725,"br"),og()()(),Il(726,"td",19)(727,"code",26),Qx(728,"boolean"),og()(),Il(729,"td",21),Qx(730,"-"),og(),Il(731,"td",22)(732,"em")(733,"strong"),Qx(734,"(opcional)"),og()(),Il(735,"p"),Qx(736,"Indica que o campo ser\xE1 desabilitado."),og()()(),Il(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),Qx(741," p-disabled-remove-file"),zl(742,"br"),og()()(),Il(743,"td",19)(744,"code",26),Qx(745,"boolean"),og()(),Il(746,"td",21)(747,"p")(748,"code"),Qx(749,"false"),og()()(),Il(750,"td",22)(751,"em")(752,"strong"),Qx(753,"(opcional)"),og()(),Il(754,"p"),Qx(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),og()()(),Il(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),Qx(760," p-drag-drop"),zl(761,"br"),og()()(),Il(762,"td",19)(763,"code",26),Qx(764,"boolean"),og()(),Il(765,"td",21)(766,"p")(767,"code"),Qx(768,"false"),og()()(),Il(769,"td",22)(770,"em")(771,"strong"),Qx(772,"(opcional)"),og()(),Il(773,"p"),Qx(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Il(775,"blockquote")(776,"p"),Qx(777,"Recomendamos utilizar apenas um "),Il(778,"code"),Qx(779,"po-upload"),og(),Qx(780," com esta funcionalidade por tela."),og()()()(),Il(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),Qx(785," p-drag-drop-height"),zl(786,"br"),og()()(),Il(787,"td",19)(788,"code",31),Qx(789,"number"),og()(),Il(790,"td",21)(791,"p")(792,"code"),Qx(793,"320"),og()()(),Il(794,"td",22)(795,"em")(796,"strong"),Qx(797,"(opcional)"),og()(),Il(798,"p"),Qx(799,"Define em "),Il(800,"em"),Qx(801,"pixels"),og(),Qx(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Il(803,"code"),Qx(804,"160px"),og(),Qx(805,"."),og(),Il(806,"blockquote")(807,"p"),Qx(808,"Esta propriedade funciona somente se a propriedade "),Il(809,"code"),Qx(810,"p-drag-drop"),og(),Qx(811," estiver habilitada."),og()()()(),Il(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),Qx(816," p-restrictions"),zl(817,"br"),og()()(),Il(818,"td",19)(819,"code",32),Qx(820,"PoUploadFileRestrictions"),og()(),Il(821,"td",21),Qx(822,"-"),og(),Il(823,"td",22)(824,"em")(825,"strong"),Qx(826,"(opcional)"),og()(),Il(827,"p"),Qx(828,"Objeto que segue a defini\xE7\xE3o da interface "),Il(829,"code"),Qx(830,"PoUploadFileRestrictions"),og(),Qx(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og()()(),Il(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),Qx(836," p-form-field"),zl(837,"br"),og()()(),Il(838,"td",19)(839,"code",25),Qx(840,"string"),og()(),Il(841,"td",21)(842,"p")(843,"code"),Qx(844,"files"),og()()(),Il(845,"td",22)(846,"em")(847,"strong"),Qx(848,"(opcional)"),og()(),Il(849,"p"),Qx(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Il(851,"code"),Qx(852,"p-url"),og(),Qx(853,"."),og()()(),Il(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),Qx(858," p-headers"),zl(859,"br"),og()()(),Il(860,"td",19)(861,"code",33),Qx(862,"{ [name: string]: string "),og(),Il(863,"code",34),Qx(864,` Array<string>;
}`),og()(),Il(865,"td",21),Qx(866,"-"),og(),Il(867,"td",22)(868,"p"),Qx(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og()()(),Il(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),Qx(874," p-help"),zl(875,"br"),og()()(),Il(876,"td",19)(877,"code",25),Qx(878,"string"),og()(),Il(879,"td",21),Qx(880,"-"),og(),Il(881,"td",22)(882,"em")(883,"strong"),Qx(884,"(opcional)"),og()(),Il(885,"p"),Qx(886,"Texto de apoio para o campo."),og()()(),Il(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),Qx(891," p-hide-restrictions-info"),zl(892,"br"),og()()(),Il(893,"td",19)(894,"code",26),Qx(895,"boolean"),og()(),Il(896,"td",21)(897,"p")(898,"code"),Qx(899,"false"),og()()(),Il(900,"td",22)(901,"em")(902,"strong"),Qx(903,"(opcional)"),og()(),Il(904,"p"),Qx(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og()()(),Il(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),Qx(910," p-hide-select-button"),zl(911,"br"),og()()(),Il(912,"td",19)(913,"code",26),Qx(914,"boolean"),og()(),Il(915,"td",21)(916,"p")(917,"code"),Qx(918,"false"),og()()(),Il(919,"td",22)(920,"em")(921,"strong"),Qx(922,"(opcional)"),og()(),Il(923,"p"),Qx(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Il(925,"blockquote")(926,"p"),Qx(927,"Caso o valor definido seja "),Il(928,"code"),Qx(929,"true"),og(),Qx(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Il(931,"code"),Qx(932,"selectFiles()"),og(),Qx(933," para sele\xE7\xE3o de arquivos."),og()()()(),Il(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),Qx(938," p-hide-send-button"),zl(939,"br"),og()()(),Il(940,"td",19)(941,"code",26),Qx(942,"boolean"),og()(),Il(943,"td",21)(944,"p")(945,"code"),Qx(946,"false"),og()()(),Il(947,"td",22)(948,"em")(949,"strong"),Qx(950,"(opcional)"),og()(),Il(951,"p"),Qx(952,"Omite o bot\xE3o de envio de arquivos."),og(),Il(953,"blockquote")(954,"p"),Qx(955,"Caso o valor definido seja "),Il(956,"code"),Qx(957,"true"),og(),Qx(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Il(959,"code"),Qx(960,"sendFiles()"),og(),Qx(961," para envio do(s) arquivo(s) selecionado(s)."),og()()()(),Il(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),Qx(966," p-multiple"),zl(967,"br"),og()()(),Il(968,"td",19)(969,"code",26),Qx(970,"boolean"),og()(),Il(971,"td",21),Qx(972,"-"),og(),Il(973,"td",22)(974,"em")(975,"strong"),Qx(976,"(opcional)"),og()(),Il(977,"p"),Qx(978,"Define se pode selecionar mais de um arquivo."),og(),Il(979,"blockquote")(980,"p"),Qx(981,"Se utilizada a "),Il(982,"code"),Qx(983,"p-directory"),og(),Qx(984,", habilita-se automaticamente esta propriedade."),og()()()(),Il(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),Qx(989," (p-keydown)"),zl(990,"br"),og()()(),Il(991,"td",19)(992,"code",20),Qx(993,"EventEmitter"),og()(),Il(994,"td",21),Qx(995,"-"),og(),Il(996,"td",22)(997,"em")(998,"strong"),Qx(999,"(opcional)"),og()(),Il(1e3,"p"),Qx(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(1002,"code"),Qx(1003,"KeyboardEvent"),og(),Qx(1004," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),Qx(1009," p-label"),zl(1010,"br"),og()()(),Il(1011,"td",19)(1012,"code",25),Qx(1013,"string"),og()(),Il(1014,"td",21),Qx(1015,"-"),og(),Il(1016,"td",22)(1017,"em")(1018,"strong"),Qx(1019,"(opcional)"),og()(),Il(1020,"p"),Qx(1021,"R\xF3tulo do campo."),og()()(),Il(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),Qx(1026," p-label-text-wrap"),zl(1027,"br"),og()()(),Il(1028,"td",19)(1029,"code",26),Qx(1030,"boolean"),og()(),Il(1031,"td",21)(1032,"p")(1033,"code"),Qx(1034,"false"),og()()(),Il(1035,"td",22)(1036,"em")(1037,"strong"),Qx(1038,"(opcional)"),og()(),Il(1039,"p"),Qx(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),Il(1041,"code"),Qx(1042,"p-label"),og(),Qx(1043,". Quando "),Il(1044,"code"),Qx(1045,"p-label-text-wrap"),og(),Qx(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Il(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),Qx(1051," p-literals"),zl(1052,"br"),og()()(),Il(1053,"td",19)(1054,"code",35),Qx(1055,"PoUploadLiterals"),og()(),Il(1056,"td",21),Qx(1057,"-"),og(),Il(1058,"td",22)(1059,"em")(1060,"strong"),Qx(1061,"(opcional)"),og()(),Il(1062,"p"),Qx(1063,"Objeto com as literais usadas no "),Il(1064,"code"),Qx(1065,"po-upload"),og(),Qx(1066,"."),og(),Il(1067,"p"),Qx(1068,"Existem duas maneiras de customizar o componente:"),og(),Il(1069,"ul")(1070,"li"),Qx(1071,"passando um objeto implementando a interface "),Il(1072,"code"),Qx(1073,"PoUploadLiterals"),og(),Qx(1074," com todas as literais dispon\xEDveis;"),og(),Il(1075,"li"),Qx(1076,"passando apenas as literais que deseja customizar:"),Il(1077,"pre")(1078,"code"),Qx(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),og()()()(),Il(1080,"p"),Qx(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Il(1082,"pre")(1083,"code"),Qx(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),og()(),Il(1085,"blockquote")(1086,"p"),Qx(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Il(1088,"em"),Qx(1089,"browser"),og(),Qx(1090," (pt, en, es, ru)."),og()()()(),Il(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),Qx(1095," p-loading"),zl(1096,"br"),og()()(),Il(1097,"td",19)(1098,"code",26),Qx(1099,"boolean"),og()(),Il(1100,"td",21)(1101,"p")(1102,"code"),Qx(1103,"false"),og()()(),Il(1104,"td",22)(1105,"em")(1106,"strong"),Qx(1107,"(opcional)"),og()(),Il(1108,"p"),Qx(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),Il(1110,"code"),Qx(1111,"Selecionar arquivo"),og(),Qx(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),og(),Il(1113,"blockquote")(1114,"p"),Qx(1115,"Incompat\xEDvel com "),Il(1116,"code"),Qx(1117,"p-drag-drop"),og(),Qx(1118," e "),Il(1119,"code"),Qx(1120,"p-hide-select-button"),og(),Qx(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),Il(1122,"code"),Qx(1123,"Selecionar arquivo"),og(),Qx(1124,"."),og()()()(),Il(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),Qx(1129," name"),zl(1130,"br"),og()()(),Il(1131,"td",19)(1132,"code",25),Qx(1133,"string"),og()(),Il(1134,"td",21),Qx(1135,"-"),og(),Il(1136,"td",22)(1137,"p"),Qx(1138,"Define o valor do atributo "),Il(1139,"code"),Qx(1140,"name"),og(),Qx(1141," do componente."),og()()(),Il(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),Qx(1146," (ngModelChange)"),zl(1147,"br"),og()()(),Il(1148,"td",19)(1149,"code",20),Qx(1150,"EventEmitter"),og()(),Il(1151,"td",21),Qx(1152,"-"),og(),Il(1153,"td",22)(1154,"em")(1155,"strong"),Qx(1156,"(opcional)"),og()(),Il(1157,"p"),Qx(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),Il(1159,"em"),Qx(1160,"tag"),og(),Il(1161,"code"),Qx(1162,"form"),og(),Qx(1163,"."),og(),Il(1164,"p"),Qx(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Il(1166,"code"),Qx(1167,"strictTemplates"),og(),Qx(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Il(1169,"pre")(1170,"code"),Qx(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),og()()()(),Il(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),Qx(1176," (p-cancel)"),zl(1177,"br"),og()()(),Il(1178,"td",19)(1179,"code",20),Qx(1180,"EventEmitter"),og()(),Il(1181,"td",21),Qx(1182,"-"),og(),Il(1183,"td",22)(1184,"em")(1185,"strong"),Qx(1186,"(opcional)"),og()(),Il(1187,"p"),Qx(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),og(),Il(1189,"blockquote")(1190,"p"),Qx(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Il(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),Qx(1196," (p-error)"),zl(1197,"br"),og()()(),Il(1198,"td",19)(1199,"code",20),Qx(1200,"EventEmitter"),og()(),Il(1201,"td",21),Qx(1202,"-"),og(),Il(1203,"td",22)(1204,"em")(1205,"strong"),Qx(1206,"(opcional)"),og()(),Il(1207,"p"),Qx(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Il(1209,"blockquote")(1210,"p"),Qx(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Il(1212,"code"),Qx(1213,"HttpErrorResponse"),og(),Qx(1214,"."),og()()()(),Il(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),Qx(1219," (p-open-modal-preview)"),zl(1220,"br"),og()()(),Il(1221,"td",19)(1222,"code",20),Qx(1223,"EventEmitter"),og()(),Il(1224,"td",21),Qx(1225,"-"),og(),Il(1226,"td",22)(1227,"em")(1228,"strong"),Qx(1229,"(opcional)"),og()(),Il(1230,"p"),Qx(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),og(),Il(1232,"blockquote")(1233,"p"),Qx(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Il(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),Qx(1239," (p-remove)"),zl(1240,"br"),og()()(),Il(1241,"td",19)(1242,"code",20),Qx(1243,"EventEmitter"),og()(),Il(1244,"td",21),Qx(1245,"-"),og(),Il(1246,"td",22)(1247,"em")(1248,"strong"),Qx(1249,"(opcional)"),og()(),Il(1250,"p"),Qx(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),og(),Il(1252,"blockquote")(1253,"p"),Qx(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Il(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),Qx(1259," (p-success)"),zl(1260,"br"),og()()(),Il(1261,"td",19)(1262,"code",20),Qx(1263,"EventEmitter"),og()(),Il(1264,"td",21),Qx(1265,"-"),og(),Il(1266,"td",22)(1267,"em")(1268,"strong"),Qx(1269,"(opcional)"),og()(),Il(1270,"p"),Qx(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Il(1272,"blockquote")(1273,"p"),Qx(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Il(1275,"code"),Qx(1276,"HttpResponse"),og(),Qx(1277,"."),og()()()(),Il(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),Qx(1282," (p-upload)"),zl(1283,"br"),og()()(),Il(1284,"td",19)(1285,"code",20),Qx(1286,"EventEmitter"),og()(),Il(1287,"td",21),Qx(1288,"-"),og(),Il(1289,"td",22)(1290,"em")(1291,"strong"),Qx(1292,"(opcional)"),og()(),Il(1293,"p"),Qx(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Il(1295,"blockquote")(1296,"p"),Qx(1297,"data, nesta propriedade pode ser informado algum dado"),og()(),Il(1298,"pre")(1299,"code"),Qx(1300,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Il(1301,"blockquote")(1302,"p"),Qx(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Il(1304,"code"),Qx(1305,"data"),og(),Qx(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),og()(),Il(1307,"pre")(1308,"code"),Qx(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),og()()()(),Il(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),Qx(1314," p-optional"),zl(1315,"br"),og()()(),Il(1316,"td",19)(1317,"code",26),Qx(1318,"boolean"),og()(),Il(1319,"td",21)(1320,"p")(1321,"code"),Qx(1322,"false"),og()()(),Il(1323,"td",22)(1324,"em")(1325,"strong"),Qx(1326,"(opcional)"),og()(),Il(1327,"p"),Qx(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(1329,"blockquote")(1330,"p"),Qx(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1332,"ul")(1333,"li"),Qx(1334,"O campo conter "),Il(1335,"code"),Qx(1336,"p-required"),og(),Qx(1337,";"),og(),Il(1338,"li"),Qx(1339,"N\xE3o possuir "),Il(1340,"code"),Qx(1341,"p-help"),og(),Qx(1342," e/ou "),Il(1343,"code"),Qx(1344,"p-label"),og(),Qx(1345,"."),og()()()(),Il(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),Qx(1350," p-helper"),zl(1351,"br"),og()()(),Il(1352,"td",19)(1353,"code",36),Qx(1354,"PoHelperOptions "),og(),Il(1355,"code",25),Qx(1356," string"),og()(),Il(1357,"td",21),Qx(1358,"-"),og(),Il(1359,"td",22)(1360,"em")(1361,"strong"),Qx(1362,"(opcional)"),og()(),Il(1363,"p"),Qx(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Il(1365,"code"),Qx(1366,"p-label"),og(),Qx(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Il(1368,"code"),Qx(1369,"p-label"),og(),Qx(1370,"."),og(),Il(1371,"blockquote")(1372,"p"),Qx(1373,"Para mais informa\xE7\xF5es acesse: "),Il(1374,"a",37),Qx(1375,"https://po-ui.io/documentation/po-helper"),og(),Qx(1376,"."),og()(),Il(1377,"blockquote")(1378,"p"),Qx(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Il(1380,"code"),Qx(1381,"p-additional-help-tooltip"),og(),Qx(1382," e "),Il(1383,"code"),Qx(1384,"p-additional-help"),og(),Qx(1385,") ser\xE1 ignorado."),og()()()(),Il(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),Qx(1390," p-required"),zl(1391,"br"),og()()(),Il(1392,"td",19)(1393,"code",26),Qx(1394,"boolean"),og()(),Il(1395,"td",21)(1396,"p")(1397,"code"),Qx(1398,"false"),og()()(),Il(1399,"td",22)(1400,"em")(1401,"strong"),Qx(1402,"(opcional)"),og()(),Il(1403,"p"),Qx(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Il(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),Qx(1409," p-required-url"),zl(1410,"br"),og()()(),Il(1411,"td",19)(1412,"code",26),Qx(1413,"boolean"),og()(),Il(1414,"td",21)(1415,"p")(1416,"code"),Qx(1417,"true"),og()()(),Il(1418,"td",22)(1419,"em")(1420,"strong"),Qx(1421,"(opcional)"),og()(),Il(1422,"p"),Qx(1423,"Define se a propriedade "),Il(1424,"code"),Qx(1425,"p-url"),og(),Qx(1426," \xE9 obrigat\xF3ria."),og(),Il(1427,"p"),Qx(1428,"Caso a propriedade seja definida como "),Il(1429,"code"),Qx(1430,"false"),og(),Qx(1431,":"),og(),Il(1432,"ul")(1433,"li"),Qx(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),Il(1435,"code"),Qx(1436,"p-url"),og(),Qx(1437," definida."),og(),Il(1438,"li"),Qx(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),Il(1440,"code"),Qx(1441,"p-url"),og(),Qx(1442," seja definida."),og()(),Il(1443,"blockquote")(1444,"p"),Qx(1445,"Se utilizada com a propriedade "),Il(1446,"code"),Qx(1447,"p-auto-upload"),og(),Qx(1448," definida como "),Il(1449,"code"),Qx(1450,"true"),og(),Qx(1451," ser\xE1 necess\xE1rio definir a propriedade "),Il(1452,"code"),Qx(1453,"p-url"),og(),Qx(1454,"."),og()()()(),Il(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),Qx(1459," p-show-required"),zl(1460,"br"),og()()(),Il(1461,"td",19)(1462,"code",26),Qx(1463,"boolean"),og()(),Il(1464,"td",21),Qx(1465,"-"),og(),Il(1466,"td",22)(1467,"p"),Qx(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(1469,"blockquote")(1470,"p"),Qx(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(1472,"ul")(1473,"li"),Qx(1474,"N\xE3o possuir "),Il(1475,"code"),Qx(1476,"p-help"),og(),Qx(1477," e/ou "),Il(1478,"code"),Qx(1479,"p-label"),og(),Qx(1480,"."),og()()()(),Il(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),Qx(1485," p-show-thumbnail"),zl(1486,"br"),og()()(),Il(1487,"td",19)(1488,"code",26),Qx(1489,"boolean"),og()(),Il(1490,"td",21)(1491,"p")(1492,"code"),Qx(1493,"true"),og()()(),Il(1494,"td",22)(1495,"em")(1496,"strong"),Qx(1497,"(opcional)"),og()(),Il(1498,"p"),Qx(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Il(1500,"blockquote")(1501,"p"),Qx(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),Il(1503,"code"),Qx(1504,".png"),og(),Qx(1505,", "),Il(1506,"code"),Qx(1507,".jpg"),og(),Qx(1508,", "),Il(1509,"code"),Qx(1510,".jpeg"),og(),Qx(1511," e "),Il(1512,"code"),Qx(1513,".gif"),og(),Qx(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),og()()()(),Il(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),Qx(1519," p-size"),zl(1520,"br"),og()()(),Il(1521,"td",19)(1522,"code",25),Qx(1523,"string"),og()(),Il(1524,"td",21)(1525,"p")(1526,"code"),Qx(1527,"medium"),og()()(),Il(1528,"td",22)(1529,"em")(1530,"strong"),Qx(1531,"(opcional)"),og()(),Il(1532,"p"),Qx(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),og(),Il(1534,"ul")(1535,"li")(1536,"code"),Qx(1537,"small"),og(),Qx(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(1539,"li")(1540,"code"),Qx(1541,"medium"),og(),Qx(1542,": altura do button como 44px."),og()(),Il(1543,"blockquote")(1544,"p"),Qx(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(1546,"code"),Qx(1547,"medium"),og(),Qx(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(1549,"a",38),Qx(1550,"po-theme"),og(),Qx(1551,"."),og()()()(),Il(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),Qx(1556," p-url"),zl(1557,"br"),og()()(),Il(1558,"td",19)(1559,"code",25),Qx(1560,"string"),og()(),Il(1561,"td",21),Qx(1562,"-"),og(),Il(1563,"td",22)(1564,"p"),Qx(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og()()()(),Il(1566,"h3",10),Qx(1567,"M\xE9todos"),og(),Il(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),Qx(1574," clear "),og()()()()(),Il(1575,"tr",22)(1576,"td",22)(1577,"p"),Qx(1578,"M\xE9todo respons\xE1vel por "),Il(1579,"strong"),Qx(1580,"limpar"),og(),Qx(1581," o(s) arquivo(s) selecionado(s)."),og()()()(),zl(1582,"br"),Il(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),Qx(1589," focus "),og()()()()(),Il(1590,"tr",22)(1591,"td",22)(1592,"p"),Qx(1593,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Il(1594,"p"),Qx(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Il(1596,"pre")(1597,"code"),Qx(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),og()()()()(),zl(1599,"br"),Il(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),Qx(1606," closeModal "),og()()()()(),Il(1607,"tr",22)(1608,"td",22)(1609,"p"),Qx(1610,"M\xE9todo respons\xE1vel por fechar o modal."),og()()()(),zl(1611,"br"),Il(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),Qx(1618," selectFiles "),og()()()()(),Il(1619,"tr",22)(1620,"td",22)(1621,"p"),Qx(1622,"M\xE9todo respons\xE1vel por "),Il(1623,"strong"),Qx(1624,"abrir"),og(),Qx(1625," a janela para sele\xE7\xE3o de arquivo(s)."),og()()()(),zl(1626,"br"),Il(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),Qx(1633," sendFiles "),og()()()()(),Il(1634,"tr",22)(1635,"td",22)(1636,"p"),Qx(1637,"M\xE9todo respons\xE1vel por "),Il(1638,"strong"),Qx(1639,"enviar"),og(),Qx(1640," o(s) arquivo(s) selecionado(s)."),og()()()(),zl(1641,"br"),Il(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),Qx(1648," showAdditionalHelp "),og()()()()(),Il(1649,"tr",22)(1650,"td",22)(1651,"p"),Qx(1652,"M\xE9todo que exibe "),Il(1653,"code"),Qx(1654,"p-helper"),og(),Qx(1655," ou executa a a\xE7\xE3o definida em "),Il(1656,"code"),Qx(1657,"p-helper{eventOnClick}"),og(),Qx(1658," ou em "),Il(1659,"code"),Qx(1660,"p-additionalHelp"),og(),Qx(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(1662,"code"),Qx(1663,"p-keydown"),og(),Qx(1664,"."),og(),Il(1665,"blockquote")(1666,"p"),Qx(1667,"Exibe ou oculta o conte\xFAdo do componente "),Il(1668,"code"),Qx(1669,"po-helper"),og(),Qx(1670," quando o componente estiver com foco."),og()(),Il(1671,"pre")(1672,"code"),Qx(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),og()(),Il(1674,"pre")(1675,"code"),Qx(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),zl(1677,"br"),Il(1678,"h3"),Qx(1679,"Interfaces"),og(),Il(1680,"h4",41)(1681,"code",5),Qx(1682,"PoUploadFileRestrictions"),og()(),Il(1683,"div",2)(1684,"p"),Qx(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),og()(),Il(1686,"h4",10),Qx(1687,"Propriedades"),og(),Il(1688,"table",11)(1689,"tr",12)(1690,"th",13),Qx(1691,"Nome"),og(),Il(1692,"th",13),Qx(1693,"Tipo"),og(),Il(1694,"th",13),Qx(1695,"Descri\xE7\xE3o"),og()(),Il(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),Qx(1700," allowedExtensions"),zl(1701,"br"),og()()(),Il(1702,"td",19)(1703,"code",42),Qx(1704,"Array<string>"),og()(),Il(1705,"td",22)(1706,"em")(1707,"strong"),Qx(1708,"(opcional)"),og()(),Il(1709,"p"),Qx(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),og(),Il(1711,"pre")(1712,"code"),Qx(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),og()()()(),Il(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),Qx(1718," maxFileSize"),zl(1719,"br"),og()()(),Il(1720,"td",19)(1721,"code",31),Qx(1722,"number"),og()(),Il(1723,"td",22)(1724,"em")(1725,"strong"),Qx(1726,"(opcional)"),og()(),Il(1727,"p"),Qx(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),og(),Il(1729,"p"),Qx(1730,"Deve ser informado um valor em "),Il(1731,"em"),Qx(1732,"bytes"),og(),Qx(1733,", por exemplo: "),Il(1734,"code"),Qx(1735,"31457280"),og(),Qx(1736," (30MB)."),og(),Il(1737,"blockquote")(1738,"p"),Qx(1739,"Por padr\xE3o o valor \xE9 "),Il(1740,"code"),Qx(1741,"30 MB"),og(),Qx(1742,"."),og()()()(),Il(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),Qx(1747," maxFiles"),zl(1748,"br"),og()()(),Il(1749,"td",19)(1750,"code",31),Qx(1751,"number"),og()(),Il(1752,"td",22)(1753,"em")(1754,"strong"),Qx(1755,"(opcional)"),og()(),Il(1756,"p"),Qx(1757,"Quantidade m\xE1xima de arquivos para o "),Il(1758,"em"),Qx(1759,"upload"),og(),Qx(1760,"."),og(),Il(1761,"blockquote")(1762,"p"),Qx(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),Il(1764,"code"),Qx(1765,"p-multiple"),og(),Qx(1766," estiver habilitada e seu valor for maior do que zero."),og()()()(),Il(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),Qx(1771," minFileSize"),zl(1772,"br"),og()()(),Il(1773,"td",19)(1774,"code",31),Qx(1775,"number"),og()(),Il(1776,"td",22)(1777,"em")(1778,"strong"),Qx(1779,"(opcional)"),og()(),Il(1780,"p"),Qx(1781,"Tamanho m\xEDnimo em "),Il(1782,"em"),Qx(1783,"bytes"),og(),Qx(1784," do arquivo que ser\xE1 enviado ao servidor."),og(),Il(1785,"blockquote")(1786,"p"),Qx(1787,"Por padr\xE3o o valor \xE9 "),Il(1788,"code"),Qx(1789,"0"),og(),Qx(1790,"."),og()()()()(),Il(1791,"h4",41)(1792,"code",5),Qx(1793,"PoUploadLiterals"),og()(),Il(1794,"div",2)(1795,"p"),Qx(1796,"Interface para defini\xE7\xE3o das literais usadas no "),Il(1797,"code"),Qx(1798,"po-upload"),og(),Qx(1799,"."),og()(),Il(1800,"h4",10),Qx(1801,"Propriedades"),og(),Il(1802,"table",11)(1803,"tr",12)(1804,"th",13),Qx(1805,"Nome"),og(),Il(1806,"th",13),Qx(1807,"Tipo"),og(),Il(1808,"th",13),Qx(1809,"Descri\xE7\xE3o"),og()(),Il(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),Qx(1814," close"),zl(1815,"br"),og()()(),Il(1816,"td",19)(1817,"code",25),Qx(1818,"string"),og()(),Il(1819,"td",22)(1820,"em")(1821,"strong"),Qx(1822,"(opcional)"),og()(),Il(1823,"p"),Qx(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),og()()(),Il(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),Qx(1829," continue"),zl(1830,"br"),og()()(),Il(1831,"td",19)(1832,"code",25),Qx(1833,"string"),og()(),Il(1834,"td",22)(1835,"em")(1836,"strong"),Qx(1837,"(opcional)"),og()(),Il(1838,"p"),Qx(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),og()()(),Il(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),Qx(1844," doneText"),zl(1845,"br"),og()()(),Il(1846,"td",19)(1847,"code",25),Qx(1848,"string"),og()(),Il(1849,"td",22)(1850,"em")(1851,"strong"),Qx(1852,"(opcional)"),og()(),Il(1853,"p"),Qx(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),og()()(),Il(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),Qx(1859," dragFilesHere"),zl(1860,"br"),og()()(),Il(1861,"td",19)(1862,"code",25),Qx(1863,"string"),og()(),Il(1864,"td",22)(1865,"em")(1866,"strong"),Qx(1867,"(opcional)"),og()(),Il(1868,"p"),Qx(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),Il(1870,"code"),Qx(1871,"p-drag-drop"),og(),Qx(1872,"."),og()()(),Il(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),Qx(1877," dragFoldersHere"),zl(1878,"br"),og()()(),Il(1879,"td",19)(1880,"code",25),Qx(1881,"string"),og()(),Il(1882,"td",22)(1883,"em")(1884,"strong"),Qx(1885,"(opcional)"),og()(),Il(1886,"p"),Qx(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),Il(1888,"code"),Qx(1889,"p-drag-drop"),og(),Qx(1890,"."),og()()(),Il(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),Qx(1895," dropFilesHere"),zl(1896,"br"),og()()(),Il(1897,"td",19)(1898,"code",25),Qx(1899,"string"),og()(),Il(1900,"td",22)(1901,"em")(1902,"strong"),Qx(1903,"(opcional)"),og()(),Il(1904,"p"),Qx(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),Il(1906,"code"),Qx(1907,"p-drag-drop"),og()()()(),Il(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),Qx(1912," dropFoldersHere"),zl(1913,"br"),og()()(),Il(1914,"td",19)(1915,"code",25),Qx(1916,"string"),og()(),Il(1917,"td",22)(1918,"em")(1919,"strong"),Qx(1920,"(opcional)"),og()(),Il(1921,"p"),Qx(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),Il(1923,"code"),Qx(1924,"p-drag-drop"),og(),Qx(1925,"."),og()()(),Il(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),Qx(1930," errorOccurred"),zl(1931,"br"),og()()(),Il(1932,"td",19)(1933,"code",25),Qx(1934,"string"),og()(),Il(1935,"td",22)(1936,"em")(1937,"strong"),Qx(1938,"(opcional)"),og()(),Il(1939,"p"),Qx(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),og()()(),Il(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),Qx(1945," files"),zl(1946,"br"),og()()(),Il(1947,"td",19)(1948,"code",25),Qx(1949,"string"),og()(),Il(1950,"td",22)(1951,"em")(1952,"strong"),Qx(1953,"(opcional)"),og()(),Il(1954,"p"),Qx(1955,"Par\xE2metro "),Il(1956,"em"),Qx(1957,"files"),og(),Qx(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Il(1959,"em"),Qx(1960,"dragDrop"),og(),Qx(1961,"."),og()()(),Il(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),Qx(1966," folders"),zl(1967,"br"),og()()(),Il(1968,"td",19)(1969,"code",25),Qx(1970,"string"),og()(),Il(1971,"td",22)(1972,"em")(1973,"strong"),Qx(1974,"(opcional)"),og()(),Il(1975,"p"),Qx(1976,"Par\xE2metro "),Il(1977,"em"),Qx(1978,"folders"),og(),Qx(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Il(1980,"em"),Qx(1981,"dragDrop"),og(),Qx(1982,"."),og()()(),Il(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),Qx(1987," invalidDropArea"),zl(1988,"br"),og()()(),Il(1989,"td",19)(1990,"code",25),Qx(1991,"string"),og()(),Il(1992,"td",22)(1993,"em")(1994,"strong"),Qx(1995,"(opcional)"),og()(),Il(1996,"p"),Qx(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),Il(1998,"em"),Qx(1999,"dragDrop"),og(),Qx(2e3,"."),og()()(),Il(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),Qx(2005," preview"),zl(2006,"br"),og()()(),Il(2007,"td",19)(2008,"code",25),Qx(2009,"string"),og()(),Il(2010,"td",22)(2011,"em")(2012,"strong"),Qx(2013,"(opcional)"),og()(),Il(2014,"p"),Qx(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),og()()(),Il(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),Qx(2020," selectFile"),zl(2021,"br"),og()()(),Il(2022,"td",19)(2023,"code",25),Qx(2024,"string"),og()(),Il(2025,"td",22)(2026,"em")(2027,"strong"),Qx(2028,"(opcional)"),og()(),Il(2029,"p"),Qx(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),og()()(),Il(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),Qx(2035," selectFiles"),zl(2036,"br"),og()()(),Il(2037,"td",19)(2038,"code",25),Qx(2039,"string"),og()(),Il(2040,"td",22)(2041,"em")(2042,"strong"),Qx(2043,"(opcional)"),og()(),Il(2044,"p"),Qx(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Il(2046,"code"),Qx(2047,"p-multiple"),og(),Qx(2048,"."),og()()(),Il(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),Qx(2053," selectFilesOnComputer"),zl(2054,"br"),og()()(),Il(2055,"td",19)(2056,"code",25),Qx(2057,"string"),og()(),Il(2058,"td",22)(2059,"em")(2060,"strong"),Qx(2061,"(opcional)"),og()(),Il(2062,"p"),Qx(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Il(2064,"em"),Qx(2065,"dragDrop"),og(),Qx(2066,"."),og()()(),Il(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),Qx(2071," selectFolder"),zl(2072,"br"),og()()(),Il(2073,"td",19)(2074,"code",25),Qx(2075,"string"),og()(),Il(2076,"td",22)(2077,"em")(2078,"strong"),Qx(2079,"(opcional)"),og()(),Il(2080,"p"),Qx(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Il(2082,"code"),Qx(2083,"p-directory"),og(),Qx(2084,"."),og()()(),Il(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),Qx(2089," selectFolderOnComputer"),zl(2090,"br"),og()()(),Il(2091,"td",19)(2092,"code",25),Qx(2093,"string"),og()(),Il(2094,"td",22)(2095,"em")(2096,"strong"),Qx(2097,"(opcional)"),og()(),Il(2098,"p"),Qx(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Il(2100,"em"),Qx(2101,"dragDrop"),og(),Qx(2102,"."),og()()(),Il(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),Qx(2107," sentWithSuccess"),zl(2108,"br"),og()()(),Il(2109,"td",19)(2110,"code",25),Qx(2111,"string"),og()(),Il(2112,"td",22)(2113,"em")(2114,"strong"),Qx(2115,"(opcional)"),og()(),Il(2116,"p"),Qx(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),og()()(),Il(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),Qx(2122," startSending"),zl(2123,"br"),og()()(),Il(2124,"td",19)(2125,"code",25),Qx(2126,"string"),og()(),Il(2127,"td",22)(2128,"em")(2129,"strong"),Qx(2130,"(opcional)"),og()(),Il(2131,"p"),Qx(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),og()()(),Il(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),Qx(2137," thumbnail"),zl(2138,"br"),og()()(),Il(2139,"td",19)(2140,"code",25),Qx(2141,"string"),og()(),Il(2142,"td",22)(2143,"em")(2144,"strong"),Qx(2145,"(opcional)"),og()(),Il(2146,"p"),Qx(2147,"Texto do leitor da miniatura da imagem."),og()()(),Il(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),Qx(2152," tryAgain"),zl(2153,"br"),og()()(),Il(2154,"td",19)(2155,"code",25),Qx(2156,"string"),og()(),Il(2157,"td",22)(2158,"em")(2159,"strong"),Qx(2160,"(opcional)"),og()(),Il(2161,"p"),Qx(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),og()()(),Il(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),Qx(2167," uploadingText"),zl(2168,"br"),og()()(),Il(2169,"td",19)(2170,"code",25),Qx(2171,"string"),og()(),Il(2172,"td",22)(2173,"em")(2174,"strong"),Qx(2175,"(opcional)"),og()(),Il(2176,"p"),Qx(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),og()()()(),Il(2178,"h4",41)(2179,"code",5),Qx(2180,"PoProgressAction"),og()(),Il(2181,"div",2)(2182,"p"),Qx(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),og()(),Il(2184,"h4",10),Qx(2185,"Propriedades"),og(),Il(2186,"table",11)(2187,"tr",12)(2188,"th",13),Qx(2189,"Nome"),og(),Il(2190,"th",13),Qx(2191,"Tipo"),og(),Il(2192,"th",13),Qx(2193,"Descri\xE7\xE3o"),og()(),Il(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),Qx(2198," disabled"),zl(2199,"br"),og()()(),Il(2200,"td",19)(2201,"code",26),Qx(2202,"boolean "),og(),Il(2203,"code",43),Qx(2204," Function"),og()(),Il(2205,"td",22)(2206,"em")(2207,"strong"),Qx(2208,"(opcional)"),og()(),Il(2209,"p"),Qx(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),og(),Il(2211,"p"),Qx(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),og()()(),Il(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),Qx(2217," icon"),zl(2218,"br"),og()()(),Il(2219,"td",19)(2220,"code",25),Qx(2221,"string "),og(),Il(2222,"code",44),Qx(2223," TemplateRef<void>"),og()(),Il(2224,"td",22)(2225,"em")(2226,"strong"),Qx(2227,"(opcional)"),og()(),Il(2228,"p"),Qx(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),og(),Il(2230,"p"),Qx(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Il(2232,"a",45),Qx(2233,"Biblioteca de \xEDcones"),og(),Qx(2234,". conforme exemplo abaixo:"),og(),Il(2235,"pre")(2236,"code"),Qx(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),og()(),Il(2238,"p"),Qx(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Il(2240,"pre")(2241,"code"),Qx(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),og()(),Il(2243,"p"),Qx(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Il(2245,"code"),Qx(2246,"TemplateRef"),og(),Qx(2247,`, conforme exemplo abaixo:
component.html:`),og(),Il(2248,"pre")(2249,"code"),Qx(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),og()(),Il(2251,"p"),Qx(2252,"component.ts:"),og(),Il(2253,"pre")(2254,"code"),Qx(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),og()()()(),Il(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),Qx(2260," label"),zl(2261,"br"),og()()(),Il(2262,"td",19)(2263,"code",25),Qx(2264,"string"),og()(),Il(2265,"td",22)(2266,"em")(2267,"strong"),Qx(2268,"(opcional)"),og()(),Il(2269,"p"),Qx(2270,"R\xF3tulo da a\xE7\xE3o."),og()()(),Il(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),Qx(2275," type"),zl(2276,"br"),og()()(),Il(2277,"td",19)(2278,"code",25),Qx(2279,"string"),og()(),Il(2280,"td",22)(2281,"em")(2282,"strong"),Qx(2283,"(opcional)"),og()(),Il(2284,"p"),Qx(2285,"Define a cor do item, sendo "),Il(2286,"code"),Qx(2287,"default"),og(),Qx(2288," o padr\xE3o."),og(),Il(2289,"p"),Qx(2290,"Valores v\xE1lidos:"),og(),Il(2291,"ul")(2292,"li")(2293,"code"),Qx(2294,"default"),og()(),Il(2295,"li")(2296,"code"),Qx(2297,"danger"),og(),Qx(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),og()()()(),Il(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),Qx(2303," visible"),zl(2304,"br"),og()()(),Il(2305,"td",19)(2306,"code",26),Qx(2307,"boolean "),og(),Il(2308,"code",43),Qx(2309," Function"),og()(),Il(2310,"td",22)(2311,"em")(2312,"strong"),Qx(2313,"(opcional)"),og()(),Il(2314,"p"),Qx(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),og(),Il(2316,"blockquote")(2317,"p"),Qx(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),og()(),Il(2319,"p"),Qx(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),og(),Il(2321,"ul")(2322,"li")(2323,"p"),Qx(2324,"Fun\xE7\xE3o que deve retornar um booleano."),og()(),Il(2325,"li")(2326,"p"),Qx(2327,"Informar diretamente um valor booleano."),og()()()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),zl(3,"sample-po-upload-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),zl(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[cNe,qme,Yme,Me,qe,ke,Le,Re,Oe,je],encapsulation:2})}return a})();var vt=[{path:"",component:Be}],Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[uL.forChild(vt),uL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ne]})}return a})();export{cn as DocPoUploadModule};