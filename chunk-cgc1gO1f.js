import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,bt as Ok,aW as Yp,d7 as A3,H as Wl,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,Q as nw,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,cQ as Mk,cR as Sk,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Rhe,c8 as wde,aJ as Hhe,bH as M3,c9 as Ghe,ba as fNe,bc as FO,aB as wx,aM as ww,aN as e0,a4 as yN,aq as dx,aO as Ew,aP as n0,a5 as DN,at as fx,b5 as Whe,cX as I3,bd as Nx,a7 as dN,av as ql,aw as lo,ax as uo,ab as lt$1,b6 as Yo,d8 as Ame,d9 as dNe,P as Pt,a3 as rNe,aA as Mx,aD as Ky,aT as nN,aE as Xy}from'./main-WP3NAV7C.js';var Fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic"]],standalone:false,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&Wl(0,"po-upload",0);},dependencies:[A3],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Upload Basic"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-basic"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,He,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Fe],encapsulation:2})}return a})();function Ge(a,Ie){if(a&1&&(Sl(0,"div")(1,"po-widget",22)(2,"form",23),Wl(3,"po-input",24),e0(),Wl(4,"po-select",25),e0(),Wl(5,"po-select",26),e0(),Wl(6,"po-switch",27),e0(),Wl(7,"po-switch",28),e0(),og()()()),a&2){let d=Mx();Lp(2),nw("formGroup",d.actionForm),Lp(),n0(),Lp(),nw("p-options",d.iconOptions),n0(),Lp(),nw("p-options",d.typeOptions),n0(),Lp(),n0(),Lp(),n0();}}var De=(()=>{class a{fb=f(Ok);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm();}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[true],disabled:[false]});}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d);});}updateAction(d){this.action=d;}changeEvent(d){this.event=d;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(d){this.customLiterals=void 0;}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions);}catch(d){this.customModalActions=void 0;}}onChangeHeaders(d){try{this.headers=JSON.parse(d);}catch(r){this.headers=void 0;}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d});}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d});}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)});}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)});}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:true}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium";}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs"]],standalone:false,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=wx();Sl(0,"po-upload",1),ww("ngModelChange",function(l){return Ky(m),nN(i.upload,l)||(i.upload=l),Xy(l)}),ft("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),og(),e0(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),yN(4,"json"),Wl(5,"po-info",4),og(),Wl(6,"po-divider"),Sl(7,"div",2)(8,"form",null,0)(10,"po-input",5),ww("ngModelChange",function(l){return Ky(m),nN(i.allowedExtensions,l)||(i.allowedExtensions=l),Xy(l)}),ft("p-change",function(){return i.onChangeExtension()}),og(),e0(),Sl(11,"po-number",6),ww("ngModelChange",function(l){return Ky(m),nN(i.maxFiles,l)||(i.maxFiles=l),Xy(l)}),ft("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),og(),e0(),Sl(12,"po-number",7),ww("ngModelChange",function(l){return Ky(m),nN(i.dragDropHeight,l)||(i.dragDropHeight=l),Xy(l)}),og(),e0(),Sl(13,"po-number",8),ww("ngModelChange",function(l){return Ky(m),nN(i.minSize,l)||(i.minSize=l),Xy(l)}),ft("p-change",function(){return i.onChangeMinSize(i.minSize)}),og(),e0(),Sl(14,"po-number",9),ww("ngModelChange",function(l){return Ky(m),nN(i.maxSize,l)||(i.maxSize=l),Xy(l)}),ft("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),og(),e0(),Wl(15,"po-divider"),Sl(16,"po-input",10),ww("ngModelChange",function(l){return Ky(m),nN(i.label,l)||(i.label=l),Xy(l)}),og(),e0(),Sl(17,"po-input",11),ww("ngModelChange",function(l){return Ky(m),nN(i.help,l)||(i.help=l),Xy(l)}),og(),e0(),Sl(18,"po-input",12),ww("ngModelChange",function(l){return Ky(m),nN(i.helperText,l)||(i.helperText=l),Xy(l)}),og(),e0(),Sl(19,"po-input",13),ww("ngModelChange",function(l){return Ky(m),nN(i.formField,l)||(i.formField=l),Xy(l)}),og(),e0(),Sl(20,"po-input",14),ww("ngModelChange",function(l){return Ky(m),nN(i.url,l)||(i.url=l),Xy(l)}),og(),e0(),Sl(21,"po-input",15),ww("ngModelChange",function(l){return Ky(m),nN(i.headersLabs,l)||(i.headersLabs=l),Xy(l)}),ft("p-change",function(l){return i.onChangeHeaders(l)}),og(),e0(),Sl(22,"po-input",16),ww("ngModelChange",function(l){return Ky(m),nN(i.literals,l)||(i.literals=l),Xy(l)}),ft("p-change",function(){return i.changeLiterals()}),og(),e0(),Sl(23,"po-input",17),ww("ngModelChange",function(l){return Ky(m),nN(i.modalActions,l)||(i.modalActions=l),Xy(l)}),ft("p-change",function(){return i.changeModalActions()}),og(),e0(),Sl(24,"po-checkbox-group",18),ww("ngModelChange",function(l){return Ky(m),nN(i.properties,l)||(i.properties=l),Xy(l)}),og(),e0(),dx(25,Ge,8,3,"div"),Sl(26,"po-radio-group",19),ww("ngModelChange",function(l){return Ky(m),nN(i.size,l)||(i.size=l),Xy(l)}),og(),e0(),Sl(27,"div",20)(28,"po-button",21),ft("p-click",function(){return i.restore()}),og()()()();}r&2&&(Ew("ngModel",i.upload),nw("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),n0(),Lp(3),nw("p-value",DN(4,51,i.upload)),Lp(2),nw("p-value",i.event),Lp(5),Ew("ngModel",i.allowedExtensions),n0(),Lp(),Ew("ngModel",i.maxFiles),n0(),Lp(),Ew("ngModel",i.dragDropHeight),n0(),Lp(),Ew("ngModel",i.minSize),n0(),Lp(),Ew("ngModel",i.maxSize),n0(),Lp(2),Ew("ngModel",i.label),n0(),Lp(),Ew("ngModel",i.help),n0(),Lp(),Ew("ngModel",i.helperText),n0(),Lp(),Ew("ngModel",i.formField),n0(),Lp(),Ew("ngModel",i.url),n0(),Lp(),Ew("ngModel",i.headersLabs),n0(),Lp(),Ew("ngModel",i.literals),n0(),Lp(),Ew("ngModel",i.modalActions),nw("p-disabled",!i.properties.includes("showThumbnail")),n0(),Lp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),n0(),Lp(),fx(i.properties.includes("showCustomAction")?25:-1),Lp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),n0());},dependencies:[Z9,G9,q9,_k,mk,Mk,Sk,Qt,mv,b3,L3,Rhe,wde,Hhe,M3,A3,Ghe,fNe,FO],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Upload Labs"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-upload
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-labs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,De],encapsulation:2})}return a})();var Xe=["formOpportunity"],Ze=()=>({maxFileSize:"204800"}),Ue=(()=>{class a{poNotification=f(Yp);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=false;}apply(){this.formOpportunity.reset(),this.uploadedResume=false,this.poNotification.success("You were applied successfully");}resumeUploadError(){this.uploadedResume=false;}resumeUploadSuccess(){this.uploadedResume=true;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&ql(Xe,7),r&2){let m;lo(m=uo())&&(i.formOpportunity=m.first);}},standalone:false,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=wx();Sl(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(l){return Ky(m),nN(i.name,l)||(i.name=l),Xy(l)}),og(),e0(),og(),Sl(4,"div",1)(5,"po-textarea",3),ww("ngModelChange",function(l){return Ky(m),nN(i.biograph,l)||(i.biograph=l),Xy(l)}),og(),e0(),og(),Sl(6,"div",1)(7,"po-url",4),ww("ngModelChange",function(l){return Ky(m),nN(i.linkedin,l)||(i.linkedin=l),Xy(l)}),og(),e0(),og(),Sl(8,"div",1)(9,"po-upload",5),ww("ngModelChange",function(l){return Ky(m),nN(i.resume,l)||(i.resume=l),Xy(l)}),ft("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),og(),e0(),og(),Sl(10,"div",1)(11,"po-button",6),ft("p-click",function(){return i.apply()}),og()()();}if(r&2){let m=Nx(1);Lp(3),Ew("ngModel",i.name),n0(),Lp(2),Ew("ngModel",i.biograph),n0(),Lp(2),Ew("ngModel",i.linkedin),n0(),Lp(2),Ew("ngModel",i.resume),nw("p-restrictions",dN(6,Ze)),n0(),Lp(2),nw("p-disabled",m.invalid||!i.uploadedResume);}},dependencies:[Z9,G9,q9,_k,mk,Qt,L3,Whe,A3,I3],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Upload - Resume"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),og(),Sl(13,"pre",7),eN(14,`<form #formOpportunity="ngForm">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-resume"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,et,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ue],encapsulation:2})}return a})();var nt=["upload"],it=["stepper"],ot=["submitForm"],at=["sucessData"],lt=a=>({"po-invisible":a});function rt(a,Ie){if(a&1){let d=wx();Sl(0,"div",8)(1,"div",9)(2,"p",11),eN(3,"Confirm informations"),og()(),Wl(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),Sl(7,"po-button",31),ft("p-click",function(){Ky(d);let i=Mx();return Xy(i.confirmSubmit())}),og()();}if(a&2){let d=Mx();Lp(4),nw("p-value",d.project[0].name||"N/D"),Lp(),nw("p-value",d.title||"N/D"),Lp(),nw("p-value",d.description||"N/D");}}var Ae=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close();},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit();}canSubmitProject(){return !!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first();}submitProject(){this.upload.sendFiles(),this.stepper.next();}newSubmit(){this.project=[],this.title=void 0,this.description=void 0;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&ql(nt,7)(it,7)(ot,7)(at,7),r&2){let m;lo(m=uo())&&(i.upload=m.first),lo(m=uo())&&(i.stepper=m.first),lo(m=uo())&&(i.submitForm=m.first),lo(m=uo())&&(i.sucessData=m.first);}},standalone:false,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=wx();Sl(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),eN(8,"Welcome, TOTVS!"),og(),Sl(9,"p",11),eN(10,"Let's submit your project?"),og()()(),Sl(11,"div",8)(12,"po-button",12),ft("p-click",function(){Ky(m);let l=Nx(2);return Xy(l.next())}),og()()()(),Sl(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),eN(21,"Please, select your project:"),og()(),Sl(22,"div",4)(23,"p",16),eN(24,"*Upload a zip file containing your project."),og()()(),Sl(25,"div",17)(26,"po-icon",18),ft("click",function(){Ky(m);let l=Nx(32);return Xy(l.selectFiles())}),og(),Sl(27,"po-icon",19),ft("click",function(){Ky(m);let l=Nx(32);return Xy(l.clear())}),og()()(),Sl(28,"div",4)(29,"label",20),eN(30,"Attached"),og(),Sl(31,"po-upload",21,2),ww("ngModelChange",function(l){return Ky(m),nN(i.project,l)||(i.project=l),Xy(l)}),og(),e0(),og(),Sl(33,"div",4)(34,"po-input",22),ww("ngModelChange",function(l){return Ky(m),nN(i.title,l)||(i.title=l),Xy(l)}),og(),e0(),og(),Sl(35,"div",4)(36,"po-textarea",23),ww("ngModelChange",function(l){return Ky(m),nN(i.description,l)||(i.description=l),Xy(l)}),og(),e0(),og(),Sl(37,"div",8)(38,"po-button",24),ft("p-click",function(){return i.submitProject()}),og()()()()(),Sl(39,"po-step",25)(40,"po-widget",7),dx(41,rt,8,3,"div",8),og()()()(),Sl(42,"po-modal",26,3)(44,"div",4)(45,"p",27),eN(46,"Project successfully submited!"),og()()();}r&2&&(Lp(13),nw("p-can-active-next-step",i.canSubmitProject.bind(i)),Lp(14),nw("ngClass",fN(13,lt,i.project.length<1)),Lp(2),Pt("po-invisible",i.project.length<1),Lp(2),Ew("ngModel",i.project),nw("p-restrictions",i.restrictions),n0(),Lp(3),Ew("ngModel",i.title),nw("p-disabled",i.project.length<1),n0(),Lp(2),Ew("ngModel",i.description),nw("p-disabled",i.project.length<1),n0(),Lp(2),nw("p-disabled",i.canSubmitProject()),Lp(3),fx(i.canSubmitProject()?41:-1),Lp(),nw("p-primary-action",i.confirm));},dependencies:[CO,Z9,G9,q9,_k,mk,Qt,L3,Whe,A3,lt$1,Ghe,Yo,Ame,dNe,fNe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Upload - Realize & Show"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),og(),Sl(13,"pre",7),eN(14,`<div class="po-row">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-rs"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,pt,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ae],encapsulation:2})}return a})();var ze=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:false};uploadSuccess(){this.customAction.visible=true;}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile);}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r);}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download"]],standalone:false,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(Sl(0,"po-upload",0),ft("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),og()),r&2&&nw("p-custom-action",i.customAction)("p-multiple",true);},dependencies:[A3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-download-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Upload - with Download Button"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-upload-download/sample-po-upload-download.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-download"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ct,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ze],encapsulation:2})}return a})();var Et=()=>[".png",".jpg",".jpeg",".gif"],St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview"]],standalone:false,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&Wl(0,"po-upload",0),r&2&&nw("p-restrictions",fN(4,St,dN(3,Et)))("p-show-thumbnail",true)("p-multiple",true);},dependencies:[A3],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Upload - with Preview"),og(),Sl(4,"a",2),ft("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-upload-preview"),og(),Wl(23,"hr")),r&2&&(Lp(5),$x("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,gt,i.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Ve],encapsulation:2})}return a})();var je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-upload-doc"]],standalone:false,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Sl(7,"blockquote")(8,"p"),eN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),eN(11,"FormsModule"),og(),eN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),eN(14,"ReactiveFormsModule"),og(),eN(15,", ambos nativos do Angular."),og()()(),Sl(16,"h3",3),eN(17,"Componente"),og(),Sl(18,"h4",4)(19,"code",5),eN(20,"PoUploadComponent"),og()(),Sl(21,"div",2)(22,"p"),eN(23,"O componente "),Sl(24,"code"),eN(25,"po-upload"),og(),eN(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),og(),Sl(27,"ul")(28,"li"),eN(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),og(),Sl(30,"li"),eN(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),og(),Sl(32,"li"),eN(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),og(),Sl(34,"li"),eN(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),og(),Sl(36,"li"),eN(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),og(),Sl(38,"li"),eN(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),og()(),Sl(40,"h4"),eN(41,"Tokens customiz\xE1veis"),og(),Sl(42,"p"),eN(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Sl(44,"blockquote")(45,"p"),eN(46,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(47,"a",6),eN(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),eN(49,"."),og()(),Sl(50,"table")(51,"thead")(52,"tr")(53,"th"),eN(54,"Propriedade"),og(),Sl(55,"th"),eN(56,"Descri\xE7\xE3o"),og(),Sl(57,"th"),eN(58,"Valor Padr\xE3o"),og()()(),Sl(59,"tbody")(60,"tr")(61,"td")(62,"strong"),eN(63,"FIELD CONTAINER"),og()(),Wl(64,"td")(65,"td"),og(),Sl(66,"tr")(67,"td")(68,"code"),eN(69,"--field-container-title-justify"),og()(),Sl(70,"td"),eN(71,"Alinhamento horizontal do t\xEDtulo ("),Sl(72,"code"),eN(73,"justify-content"),og(),eN(74,")"),og(),Sl(75,"td")(76,"code"),eN(77,"space-between"),og()()(),Sl(78,"tr")(79,"td")(80,"code"),eN(81,"--field-container-title-flex"),og()(),Sl(82,"td"),eN(83,"Flex do t\xEDtulo ("),Sl(84,"code"),eN(85,"flex"),og(),eN(86,")"),og(),Sl(87,"td")(88,"code"),eN(89,"1 auto"),og()()(),Sl(90,"tr")(91,"td")(92,"strong"),eN(93,"TEXT SUPPORT"),og()(),Wl(94,"td")(95,"td"),og(),Sl(96,"tr")(97,"td")(98,"code"),eN(99,"--font-family-text-support"),og()(),Sl(100,"td"),eN(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),og(),Sl(102,"td")(103,"code"),eN(104,"var(--font-family-theme)"),og()()(),Sl(105,"tr")(106,"td")(107,"code"),eN(108,"--text-color-text-support"),og()(),Sl(109,"td"),eN(110,"Cor da fonte no texto de suporte"),og(),Sl(111,"td")(112,"code"),eN(113,"var(--color-neutral-dark-90)"),og()()(),Sl(114,"tr")(115,"td")(116,"strong"),eN(117,"UPLOAD CONTENT"),og()(),Wl(118,"td")(119,"td"),og(),Sl(120,"tr")(121,"td")(122,"code"),eN(123,"--background-color-content"),og(),eN(124," \xA0"),og(),Sl(125,"td"),eN(126,"Cor de fundo"),og(),Sl(127,"td")(128,"code"),eN(129,"var(--color-neutral-light-10)"),og()()(),Sl(130,"tr")(131,"td")(132,"code"),eN(133,"--border-color-content"),og()(),Sl(134,"td"),eN(135,"Cor da borda"),og(),Sl(136,"td")(137,"code"),eN(138,"var(--color-neutral-light-20)"),og()()(),Sl(139,"tr")(140,"td")(141,"code"),eN(142,"--border-radius-content"),og()(),Sl(143,"td"),eN(144,"Cont\xE9m o valor do raio dos cantos do elemento"),og(),Sl(145,"td")(146,"code"),eN(147,"var(--border-radius-md)"),og()()(),Sl(148,"tr")(149,"td")(150,"code"),eN(151,"--text-color-file-name"),og()(),Sl(152,"td"),eN(153,"Cor do texto do nome do arquivo"),og(),Sl(154,"td")(155,"code"),eN(156,"var(--color-neutral-dark-90)"),og()()(),Sl(157,"tr")(158,"td")(159,"code"),eN(160,"--font-family-file-name"),og()(),Sl(161,"td"),eN(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),og(),Sl(163,"td")(164,"code"),eN(165,"var(--font-family-theme)"),og()()(),Sl(166,"tr")(167,"td")(168,"code"),eN(169,"--text-color-info-bar"),og()(),Sl(170,"td"),eN(171,"Cor do texto de informa\xE7\xE3o"),og(),Sl(172,"td")(173,"code"),eN(174,"var(--color-neutral-mid-60)"),og()()(),Sl(175,"tr")(176,"td")(177,"code"),eN(178,"--font-family-info-bar"),og()(),Sl(179,"td"),eN(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),og(),Sl(181,"td")(182,"code"),eN(183,"var(--font-family-theme)"),og()()(),Sl(184,"tr")(185,"td")(186,"strong"),eN(187,"ERROR STATE"),og()(),Wl(188,"td")(189,"td"),og(),Sl(190,"tr")(191,"td")(192,"code"),eN(193,"--background-color-content-error"),og()(),Sl(194,"td"),eN(195,"Cor de fundo do container de erro"),og(),Sl(196,"td")(197,"code"),eN(198,"var(--color-neutral-light-00)"),og()()(),Sl(199,"tr")(200,"td")(201,"code"),eN(202,"--border-color-content-error"),og()(),Sl(203,"td"),eN(204,"Cor da borda do container de erro"),og(),Sl(205,"td")(206,"code"),eN(207,"var(--color-feedback-negative-base)"),og()()(),Sl(208,"tr")(209,"td")(210,"code"),eN(211,"--text-color-error"),og()(),Sl(212,"td"),eN(213,"Cor do texto do container de erro"),og(),Sl(214,"td")(215,"code"),eN(216,"var(--color-feedback-negative-dark)"),og()()(),Sl(217,"tr")(218,"td")(219,"code"),eN(220,"--color-icon-error"),og()(),Sl(221,"td"),eN(222,"Cor do \xEDcone no estado de erro"),og(),Sl(223,"td")(224,"code"),eN(225,"var(--color-feedback-negative-base)"),og()()(),Sl(226,"tr")(227,"td")(228,"code"),eN(229,"--font-family-error"),og()(),Sl(230,"td"),eN(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),og(),Sl(232,"td")(233,"code"),eN(234,"var(--font-family-theme)"),og()()(),Sl(235,"tr")(236,"td")(237,"strong"),eN(238,"UPLOADED STATE"),og()(),Wl(239,"td")(240,"td"),og(),Sl(241,"tr")(242,"td")(243,"code"),eN(244,"--background-color-content-uploaded"),og()(),Sl(245,"td"),eN(246,"Cor de fundo do container com status de enviado"),og(),Sl(247,"td")(248,"code"),eN(249,"var(--color-neutral-light-00)"),og()()(),Sl(250,"tr")(251,"td")(252,"code"),eN(253,"--border-color-content-uploaded"),og()(),Sl(254,"td"),eN(255,"Cor da borda do container com status de enviado"),og(),Sl(256,"td")(257,"code"),eN(258,"var(--color-neutral-light-20)"),og()()(),Sl(259,"tr")(260,"td")(261,"strong"),eN(262,"INTERACTIVE STATE"),og()(),Wl(263,"td")(264,"td"),og(),Sl(265,"tr")(266,"td")(267,"code"),eN(268,"--text-color-file-name-interactive"),og()(),Sl(269,"td"),eN(270,"Cor do texto do nome do arquivo quando interativo"),og(),Sl(271,"td")(272,"code"),eN(273,"var(--color-action-default)"),og()()(),Sl(274,"tr")(275,"td")(276,"strong"),eN(277,"THUMBNAIL"),og()(),Wl(278,"td")(279,"td"),og(),Sl(280,"tr")(281,"td")(282,"code"),eN(283,"--color-icon-thumbnail"),og()(),Sl(284,"td"),eN(285,"Cor do \xEDcone na thumbnail"),og(),Sl(286,"td")(287,"code"),eN(288,"var(--color-action-default)"),og()()(),Sl(289,"tr")(290,"td")(291,"code"),eN(292,"--border-width-thumbnail"),og()(),Sl(293,"td"),eN(294,"Tamanho da fonte na thumbnail"),og(),Sl(295,"td")(296,"code"),eN(297,"var(--border-width-sm)"),og()()(),Sl(298,"tr")(299,"td")(300,"code"),eN(301,"--border-radius-thumbnail"),og()(),Sl(302,"td"),eN(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),og(),Sl(304,"td")(305,"code"),eN(306,"var(--border-radius-md)"),og()()(),Sl(307,"tr")(308,"td")(309,"code"),eN(310,"--background-color-thumbnail"),og()(),Sl(311,"td"),eN(312,"Cor de fundo na thumbnail"),og(),Sl(313,"td")(314,"code"),eN(315,"var(--color-neutral-light-05)"),og()()(),Sl(316,"tr")(317,"td")(318,"strong"),eN(319,"Focused"),og()(),Wl(320,"td")(321,"td"),og(),Sl(322,"tr")(323,"td")(324,"code"),eN(325,"--outline-color-focused"),og()(),Sl(326,"td"),eN(327,"Cor do outline do estado de focus"),og(),Sl(328,"td")(329,"code"),eN(330,"var(--color-action-focus)"),og()()()()()(),Sl(331,"div",7)(332,"h4",8),eN(333,"Seletor"),og(),Sl(334,"pre",9),eN(335,`<po-upload
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
`),og()(),Sl(336,"h4",10),eN(337,"Propriedades"),og(),Sl(338,"table",11)(339,"tr",12)(340,"th",13),eN(341,"Nome"),og(),Sl(342,"th",13),eN(343,"Tipo"),og(),Sl(344,"th",13),eN(345,"Padr\xE3o"),og(),Sl(346,"th",13),eN(347,"Descri\xE7\xE3o"),og()(),Sl(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),eN(352," (p-additional-help)"),Wl(353,"br"),og()(),Sl(354,"div",18),eN(355,"Deprecated"),og()(),Sl(356,"td",19)(357,"code",20),eN(358,"EventEmitter"),og()(),Sl(359,"td",21),eN(360,"-"),og(),Sl(361,"td",22)(362,"em")(363,"strong"),eN(364,"(opcional)"),og()(),Sl(365,"p"),eN(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(367,"blockquote")(368,"p"),eN(369,"Essa propriedade est\xE1 "),Sl(370,"strong"),eN(371,"depreciada"),og(),eN(372," e ser\xE1 removida na vers\xE3o "),Sl(373,"code"),eN(374,"23.x.x"),og(),eN(375,". Recomendamos utilizar a propriedade "),Sl(376,"code"),eN(377,"p-helper"),og(),eN(378," que oferece mais recursos e flexibilidade."),og()()()(),Sl(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),eN(383," p-additional-help-tooltip"),Wl(384,"br"),og()(),Sl(385,"div",18),eN(386,"Deprecated"),og()(),Sl(387,"td",19)(388,"code",25),eN(389,"string"),og()(),Sl(390,"td",21),eN(391,"-"),og(),Sl(392,"td",22)(393,"em")(394,"strong"),eN(395,"(opcional)"),og()(),Sl(396,"p"),eN(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(398,"code"),eN(399,"po-helper"),og(),eN(400,`.
`),Sl(401,"strong"),eN(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(403,"blockquote")(404,"p"),eN(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Sl(406,"blockquote")(407,"p"),eN(408,"Essa propriedade est\xE1 "),Sl(409,"strong"),eN(410,"depreciada"),og(),eN(411," e ser\xE1 removida na vers\xE3o "),Sl(412,"code"),eN(413,"23.x.x"),og(),eN(414,". Recomendamos utilizar a propriedade "),Sl(415,"code"),eN(416,"p-helper"),og(),eN(417," que oferece mais recursos e flexibilidade."),og()()()(),Sl(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),eN(422," p-append-in-body"),Wl(423,"br"),og()()(),Sl(424,"td",19)(425,"code",26),eN(426,"boolean"),og()(),Sl(427,"td",21)(428,"p")(429,"code"),eN(430,"false"),og()()(),Sl(431,"td",22)(432,"em")(433,"strong"),eN(434,"(opcional)"),og()(),Sl(435,"p"),eN(436,"Define que o popover ("),Sl(437,"code"),eN(438,"p-helper"),og(),eN(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Sl(440,"blockquote")(441,"p"),eN(442,"Quando utilizado com "),Sl(443,"code"),eN(444,"p-helper"),og(),eN(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),eN(450," p-auto-focus"),Wl(451,"br"),og()()(),Sl(452,"td",19)(453,"code",26),eN(454,"boolean"),og()(),Sl(455,"td",21)(456,"p")(457,"code"),eN(458,"false"),og()()(),Sl(459,"td",22)(460,"em")(461,"strong"),eN(462,"(opcional)"),og()(),Sl(463,"p"),eN(464,"Aplica foco no elemento ao ser iniciado."),og(),Sl(465,"blockquote")(466,"p"),eN(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Sl(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),eN(472," p-auto-upload"),Wl(473,"br"),og()()(),Sl(474,"td",19)(475,"code",26),eN(476,"boolean"),og()(),Sl(477,"td",21)(478,"p")(479,"code"),eN(480,"false"),og()()(),Sl(481,"td",22)(482,"em")(483,"strong"),eN(484,"(opcional)"),og()(),Sl(485,"p"),eN(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Sl(487,"blockquote")(488,"p"),eN(489,"Esta propriedade funciona somente se a propriedade "),Sl(490,"code"),eN(491,"p-url"),og(),eN(492," tiver um valor atribu\xEDdo."),og()()()(),Sl(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),eN(497," p-compact-label"),Wl(498,"br"),og()()(),Sl(499,"td",19)(500,"code",26),eN(501,"boolean"),og()(),Sl(502,"td",21)(503,"p")(504,"code"),eN(505,"false"),og()()(),Sl(506,"td",22)(507,"em")(508,"strong"),eN(509,"(opcional)"),og()(),Sl(510,"p"),eN(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(512,"p"),eN(513,"Quando habilitado ("),Sl(514,"code"),eN(515,"true"),og(),eN(516,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(517,"ul")(518,"li")(519,"code"),eN(520,"po-label"),og()(),Sl(521,"li")(522,"code"),eN(523,"p-requirement (showRequired)"),og()(),Sl(524,"li")(525,"code"),eN(526,"po-helper"),og()()(),Sl(527,"p"),eN(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(529,"p"),eN(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(531,"ul")(532,"li")(533,"code"),eN(534,"--field-container-title-justify"),og()(),Sl(535,"li")(536,"code"),eN(537,"--field-container-title-flex"),og()()(),Sl(538,"p"),eN(539,"Exemplo:"),og(),Sl(540,"pre")(541,"code"),eN(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(543,"p"),eN(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),eN(549," p-custom-action"),Wl(550,"br"),og()()(),Sl(551,"td",19)(552,"code",27),eN(553,"PoProgressAction"),og()(),Sl(554,"td",21),eN(555,"-"),og(),Sl(556,"td",22)(557,"em")(558,"strong"),eN(559,"(opcional)"),og()(),Sl(560,"p"),eN(561,"Define uma a\xE7\xE3o personalizada no componente "),Sl(562,"code"),eN(563,"po-upload"),og(),eN(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Sl(565,"p"),eN(566,"A a\xE7\xE3o deve implementar a interface "),Sl(567,"strong"),eN(568,"PoProgressAction"),og(),eN(569,", permitindo configurar propriedades como:"),og(),Sl(570,"ul")(571,"li")(572,"code"),eN(573,"label"),og(),eN(574,": Texto do bot\xE3o."),og(),Sl(575,"li")(576,"code"),eN(577,"icon"),og(),eN(578,": \xCDcone a ser exibido no bot\xE3o."),og(),Sl(579,"li")(580,"code"),eN(581,"type"),og(),eN(582,": Tipo de bot\xE3o (ex.: "),Sl(583,"code"),eN(584,"danger"),og(),eN(585," ou "),Sl(586,"code"),eN(587,"default"),og(),eN(588,")."),og(),Sl(589,"li")(590,"code"),eN(591,"disabled"),og(),eN(592,": Indica se o bot\xE3o deve estar desabilitado."),og(),Sl(593,"li")(594,"code"),eN(595,"visible"),og(),eN(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),og()(),Sl(597,"p")(598,"strong"),eN(599,"Exemplo de uso:"),og()(),Sl(600,"pre")(601,"code",28),eN(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),og()(),Sl(603,"pre")(604,"code",29),eN(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),og()()()(),Sl(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),eN(610," (p-custom-action-click)"),Wl(611,"br"),og()()(),Sl(612,"td",19)(613,"code",20),eN(614,"EventEmitter"),og()(),Sl(615,"td",21),eN(616,"-"),og(),Sl(617,"td",22)(618,"em")(619,"strong"),eN(620,"(opcional)"),og()(),Sl(621,"p"),eN(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(623,"code"),eN(624,"p-custom-action"),og(),eN(625,"."),og(),Sl(626,"p"),eN(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Sl(628,"p")(629,"strong"),eN(630,"Exemplo de uso:"),og()(),Sl(631,"pre")(632,"code",28),eN(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),og()(),Sl(634,"pre")(635,"code",29),eN(636,`customAction: PoProgressAction = {
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
`),og()()()(),Sl(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),eN(641," p-custom-modal-actions"),Wl(642,"br"),og()()(),Sl(643,"td",19)(644,"code",30),eN(645,"Array<PoModalAction>"),og()(),Sl(646,"td",21),eN(647,"-"),og(),Sl(648,"td",22)(649,"em")(650,"strong"),eN(651,"(opcional)"),og()(),Sl(652,"p"),eN(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),og(),Sl(654,"p"),eN(655,"A a\xE7\xE3o deve implementar a interface "),Sl(656,"strong"),eN(657,"PoModalAction"),og(),eN(658,", permitindo configurar propriedades como:"),og(),Sl(659,"ul")(660,"li")(661,"code"),eN(662,"label"),og(),eN(663,": Texto do bot\xE3o."),og(),Sl(664,"li")(665,"code"),eN(666,"action"),og(),eN(667,": \xCDcone a ser exibido no bot\xE3o."),og(),Sl(668,"li")(669,"code"),eN(670,"danger"),og(),eN(671,": Define a propriedade "),Sl(672,"code"),eN(673,"p-danger"),og(),eN(674," do bot\xE3o."),og(),Sl(675,"li")(676,"code"),eN(677,"disabled"),og(),eN(678,": Indica se o bot\xE3o deve estar desabilitado."),og(),Sl(679,"li")(680,"code"),eN(681,"visible"),og(),eN(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),og()(),Sl(683,"p")(684,"strong"),eN(685,"Exemplo de uso:"),og()(),Sl(686,"pre")(687,"code",28),eN(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),og()(),Sl(689,"pre")(690,"code",29),eN(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),og()()()(),Sl(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),eN(696," p-directory"),Wl(697,"br"),og()()(),Sl(698,"td",19)(699,"code",26),eN(700,"boolean"),og()(),Sl(701,"td",21)(702,"p")(703,"code"),eN(704,"false"),og()()(),Sl(705,"td",22)(706,"em")(707,"strong"),eN(708,"(opcional)"),og()(),Sl(709,"p"),eN(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Sl(711,"blockquote")(712,"p"),eN(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Sl(714,"blockquote")(715,"p"),eN(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(717,"strong"),eN(718,"Internet Explorer"),og(),eN(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()()()(),Sl(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),eN(724," p-disabled"),Wl(725,"br"),og()()(),Sl(726,"td",19)(727,"code",26),eN(728,"boolean"),og()(),Sl(729,"td",21),eN(730,"-"),og(),Sl(731,"td",22)(732,"em")(733,"strong"),eN(734,"(opcional)"),og()(),Sl(735,"p"),eN(736,"Indica que o campo ser\xE1 desabilitado."),og()()(),Sl(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),eN(741," p-disabled-remove-file"),Wl(742,"br"),og()()(),Sl(743,"td",19)(744,"code",26),eN(745,"boolean"),og()(),Sl(746,"td",21)(747,"p")(748,"code"),eN(749,"false"),og()()(),Sl(750,"td",22)(751,"em")(752,"strong"),eN(753,"(opcional)"),og()(),Sl(754,"p"),eN(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),og()()(),Sl(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),eN(760," p-drag-drop"),Wl(761,"br"),og()()(),Sl(762,"td",19)(763,"code",26),eN(764,"boolean"),og()(),Sl(765,"td",21)(766,"p")(767,"code"),eN(768,"false"),og()()(),Sl(769,"td",22)(770,"em")(771,"strong"),eN(772,"(opcional)"),og()(),Sl(773,"p"),eN(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Sl(775,"blockquote")(776,"p"),eN(777,"Recomendamos utilizar apenas um "),Sl(778,"code"),eN(779,"po-upload"),og(),eN(780," com esta funcionalidade por tela."),og()()()(),Sl(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),eN(785," p-drag-drop-height"),Wl(786,"br"),og()()(),Sl(787,"td",19)(788,"code",31),eN(789,"number"),og()(),Sl(790,"td",21)(791,"p")(792,"code"),eN(793,"320"),og()()(),Sl(794,"td",22)(795,"em")(796,"strong"),eN(797,"(opcional)"),og()(),Sl(798,"p"),eN(799,"Define em "),Sl(800,"em"),eN(801,"pixels"),og(),eN(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(803,"code"),eN(804,"160px"),og(),eN(805,"."),og(),Sl(806,"blockquote")(807,"p"),eN(808,"Esta propriedade funciona somente se a propriedade "),Sl(809,"code"),eN(810,"p-drag-drop"),og(),eN(811," estiver habilitada."),og()()()(),Sl(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),eN(816," p-restrictions"),Wl(817,"br"),og()()(),Sl(818,"td",19)(819,"code",32),eN(820,"PoUploadFileRestrictions"),og()(),Sl(821,"td",21),eN(822,"-"),og(),Sl(823,"td",22)(824,"em")(825,"strong"),eN(826,"(opcional)"),og()(),Sl(827,"p"),eN(828,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(829,"code"),eN(830,"PoUploadFileRestrictions"),og(),eN(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og()()(),Sl(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),eN(836," p-form-field"),Wl(837,"br"),og()()(),Sl(838,"td",19)(839,"code",25),eN(840,"string"),og()(),Sl(841,"td",21)(842,"p")(843,"code"),eN(844,"files"),og()()(),Sl(845,"td",22)(846,"em")(847,"strong"),eN(848,"(opcional)"),og()(),Sl(849,"p"),eN(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(851,"code"),eN(852,"p-url"),og(),eN(853,"."),og()()(),Sl(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),eN(858," p-headers"),Wl(859,"br"),og()()(),Sl(860,"td",19)(861,"code",33),eN(862,"{ [name: string]: string "),og(),Sl(863,"code",34),eN(864,` Array<string>;
}`),og()(),Sl(865,"td",21),eN(866,"-"),og(),Sl(867,"td",22)(868,"p"),eN(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og()()(),Sl(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),eN(874," p-help"),Wl(875,"br"),og()()(),Sl(876,"td",19)(877,"code",25),eN(878,"string"),og()(),Sl(879,"td",21),eN(880,"-"),og(),Sl(881,"td",22)(882,"em")(883,"strong"),eN(884,"(opcional)"),og()(),Sl(885,"p"),eN(886,"Texto de apoio para o campo."),og()()(),Sl(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),eN(891," p-hide-restrictions-info"),Wl(892,"br"),og()()(),Sl(893,"td",19)(894,"code",26),eN(895,"boolean"),og()(),Sl(896,"td",21)(897,"p")(898,"code"),eN(899,"false"),og()()(),Sl(900,"td",22)(901,"em")(902,"strong"),eN(903,"(opcional)"),og()(),Sl(904,"p"),eN(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og()()(),Sl(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),eN(910," p-hide-select-button"),Wl(911,"br"),og()()(),Sl(912,"td",19)(913,"code",26),eN(914,"boolean"),og()(),Sl(915,"td",21)(916,"p")(917,"code"),eN(918,"false"),og()()(),Sl(919,"td",22)(920,"em")(921,"strong"),eN(922,"(opcional)"),og()(),Sl(923,"p"),eN(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Sl(925,"blockquote")(926,"p"),eN(927,"Caso o valor definido seja "),Sl(928,"code"),eN(929,"true"),og(),eN(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(931,"code"),eN(932,"selectFiles()"),og(),eN(933," para sele\xE7\xE3o de arquivos."),og()()()(),Sl(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),eN(938," p-hide-send-button"),Wl(939,"br"),og()()(),Sl(940,"td",19)(941,"code",26),eN(942,"boolean"),og()(),Sl(943,"td",21)(944,"p")(945,"code"),eN(946,"false"),og()()(),Sl(947,"td",22)(948,"em")(949,"strong"),eN(950,"(opcional)"),og()(),Sl(951,"p"),eN(952,"Omite o bot\xE3o de envio de arquivos."),og(),Sl(953,"blockquote")(954,"p"),eN(955,"Caso o valor definido seja "),Sl(956,"code"),eN(957,"true"),og(),eN(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(959,"code"),eN(960,"sendFiles()"),og(),eN(961," para envio do(s) arquivo(s) selecionado(s)."),og()()()(),Sl(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),eN(966," p-multiple"),Wl(967,"br"),og()()(),Sl(968,"td",19)(969,"code",26),eN(970,"boolean"),og()(),Sl(971,"td",21),eN(972,"-"),og(),Sl(973,"td",22)(974,"em")(975,"strong"),eN(976,"(opcional)"),og()(),Sl(977,"p"),eN(978,"Define se pode selecionar mais de um arquivo."),og(),Sl(979,"blockquote")(980,"p"),eN(981,"Se utilizada a "),Sl(982,"code"),eN(983,"p-directory"),og(),eN(984,", habilita-se automaticamente esta propriedade."),og()()()(),Sl(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),eN(989," (p-keydown)"),Wl(990,"br"),og()()(),Sl(991,"td",19)(992,"code",20),eN(993,"EventEmitter"),og()(),Sl(994,"td",21),eN(995,"-"),og(),Sl(996,"td",22)(997,"em")(998,"strong"),eN(999,"(opcional)"),og()(),Sl(1e3,"p"),eN(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(1002,"code"),eN(1003,"KeyboardEvent"),og(),eN(1004," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),eN(1009," p-label"),Wl(1010,"br"),og()()(),Sl(1011,"td",19)(1012,"code",25),eN(1013,"string"),og()(),Sl(1014,"td",21),eN(1015,"-"),og(),Sl(1016,"td",22)(1017,"em")(1018,"strong"),eN(1019,"(opcional)"),og()(),Sl(1020,"p"),eN(1021,"R\xF3tulo do campo."),og()()(),Sl(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),eN(1026," p-label-text-wrap"),Wl(1027,"br"),og()()(),Sl(1028,"td",19)(1029,"code",26),eN(1030,"boolean"),og()(),Sl(1031,"td",21)(1032,"p")(1033,"code"),eN(1034,"false"),og()()(),Sl(1035,"td",22)(1036,"em")(1037,"strong"),eN(1038,"(opcional)"),og()(),Sl(1039,"p"),eN(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(1041,"code"),eN(1042,"p-label"),og(),eN(1043,". Quando "),Sl(1044,"code"),eN(1045,"p-label-text-wrap"),og(),eN(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Sl(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),eN(1051," p-literals"),Wl(1052,"br"),og()()(),Sl(1053,"td",19)(1054,"code",35),eN(1055,"PoUploadLiterals"),og()(),Sl(1056,"td",21),eN(1057,"-"),og(),Sl(1058,"td",22)(1059,"em")(1060,"strong"),eN(1061,"(opcional)"),og()(),Sl(1062,"p"),eN(1063,"Objeto com as literais usadas no "),Sl(1064,"code"),eN(1065,"po-upload"),og(),eN(1066,"."),og(),Sl(1067,"p"),eN(1068,"Existem duas maneiras de customizar o componente:"),og(),Sl(1069,"ul")(1070,"li"),eN(1071,"passando um objeto implementando a interface "),Sl(1072,"code"),eN(1073,"PoUploadLiterals"),og(),eN(1074," com todas as literais dispon\xEDveis;"),og(),Sl(1075,"li"),eN(1076,"passando apenas as literais que deseja customizar:"),Sl(1077,"pre")(1078,"code"),eN(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),og()()()(),Sl(1080,"p"),eN(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Sl(1082,"pre")(1083,"code"),eN(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),og()(),Sl(1085,"blockquote")(1086,"p"),eN(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Sl(1088,"em"),eN(1089,"browser"),og(),eN(1090," (pt, en, es, ru)."),og()()()(),Sl(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),eN(1095," p-loading"),Wl(1096,"br"),og()()(),Sl(1097,"td",19)(1098,"code",26),eN(1099,"boolean"),og()(),Sl(1100,"td",21)(1101,"p")(1102,"code"),eN(1103,"false"),og()()(),Sl(1104,"td",22)(1105,"em")(1106,"strong"),eN(1107,"(opcional)"),og()(),Sl(1108,"p"),eN(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),Sl(1110,"code"),eN(1111,"Selecionar arquivo"),og(),eN(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),og(),Sl(1113,"blockquote")(1114,"p"),eN(1115,"Incompat\xEDvel com "),Sl(1116,"code"),eN(1117,"p-drag-drop"),og(),eN(1118," e "),Sl(1119,"code"),eN(1120,"p-hide-select-button"),og(),eN(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),Sl(1122,"code"),eN(1123,"Selecionar arquivo"),og(),eN(1124,"."),og()()()(),Sl(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),eN(1129," name"),Wl(1130,"br"),og()()(),Sl(1131,"td",19)(1132,"code",25),eN(1133,"string"),og()(),Sl(1134,"td",21),eN(1135,"-"),og(),Sl(1136,"td",22)(1137,"p"),eN(1138,"Define o valor do atributo "),Sl(1139,"code"),eN(1140,"name"),og(),eN(1141," do componente."),og()()(),Sl(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),eN(1146," (ngModelChange)"),Wl(1147,"br"),og()()(),Sl(1148,"td",19)(1149,"code",20),eN(1150,"EventEmitter"),og()(),Sl(1151,"td",21),eN(1152,"-"),og(),Sl(1153,"td",22)(1154,"em")(1155,"strong"),eN(1156,"(opcional)"),og()(),Sl(1157,"p"),eN(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),Sl(1159,"em"),eN(1160,"tag"),og(),Sl(1161,"code"),eN(1162,"form"),og(),eN(1163,"."),og(),Sl(1164,"p"),eN(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Sl(1166,"code"),eN(1167,"strictTemplates"),og(),eN(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Sl(1169,"pre")(1170,"code"),eN(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),og()()()(),Sl(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),eN(1176," (p-cancel)"),Wl(1177,"br"),og()()(),Sl(1178,"td",19)(1179,"code",20),eN(1180,"EventEmitter"),og()(),Sl(1181,"td",21),eN(1182,"-"),og(),Sl(1183,"td",22)(1184,"em")(1185,"strong"),eN(1186,"(opcional)"),og()(),Sl(1187,"p"),eN(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),og(),Sl(1189,"blockquote")(1190,"p"),eN(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Sl(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),eN(1196," (p-error)"),Wl(1197,"br"),og()()(),Sl(1198,"td",19)(1199,"code",20),eN(1200,"EventEmitter"),og()(),Sl(1201,"td",21),eN(1202,"-"),og(),Sl(1203,"td",22)(1204,"em")(1205,"strong"),eN(1206,"(opcional)"),og()(),Sl(1207,"p"),eN(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Sl(1209,"blockquote")(1210,"p"),eN(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(1212,"code"),eN(1213,"HttpErrorResponse"),og(),eN(1214,"."),og()()()(),Sl(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),eN(1219," (p-open-modal-preview)"),Wl(1220,"br"),og()()(),Sl(1221,"td",19)(1222,"code",20),eN(1223,"EventEmitter"),og()(),Sl(1224,"td",21),eN(1225,"-"),og(),Sl(1226,"td",22)(1227,"em")(1228,"strong"),eN(1229,"(opcional)"),og()(),Sl(1230,"p"),eN(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),og(),Sl(1232,"blockquote")(1233,"p"),eN(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Sl(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),eN(1239," (p-remove)"),Wl(1240,"br"),og()()(),Sl(1241,"td",19)(1242,"code",20),eN(1243,"EventEmitter"),og()(),Sl(1244,"td",21),eN(1245,"-"),og(),Sl(1246,"td",22)(1247,"em")(1248,"strong"),eN(1249,"(opcional)"),og()(),Sl(1250,"p"),eN(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),og(),Sl(1252,"blockquote")(1253,"p"),eN(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),og()()()(),Sl(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),eN(1259," (p-success)"),Wl(1260,"br"),og()()(),Sl(1261,"td",19)(1262,"code",20),eN(1263,"EventEmitter"),og()(),Sl(1264,"td",21),eN(1265,"-"),og(),Sl(1266,"td",22)(1267,"em")(1268,"strong"),eN(1269,"(opcional)"),og()(),Sl(1270,"p"),eN(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Sl(1272,"blockquote")(1273,"p"),eN(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(1275,"code"),eN(1276,"HttpResponse"),og(),eN(1277,"."),og()()()(),Sl(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),eN(1282," (p-upload)"),Wl(1283,"br"),og()()(),Sl(1284,"td",19)(1285,"code",20),eN(1286,"EventEmitter"),og()(),Sl(1287,"td",21),eN(1288,"-"),og(),Sl(1289,"td",22)(1290,"em")(1291,"strong"),eN(1292,"(opcional)"),og()(),Sl(1293,"p"),eN(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Sl(1295,"blockquote")(1296,"p"),eN(1297,"data, nesta propriedade pode ser informado algum dado"),og()(),Sl(1298,"pre")(1299,"code"),eN(1300,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Sl(1301,"blockquote")(1302,"p"),eN(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Sl(1304,"code"),eN(1305,"data"),og(),eN(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),og()(),Sl(1307,"pre")(1308,"code"),eN(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),og()()()(),Sl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),eN(1314," p-optional"),Wl(1315,"br"),og()()(),Sl(1316,"td",19)(1317,"code",26),eN(1318,"boolean"),og()(),Sl(1319,"td",21)(1320,"p")(1321,"code"),eN(1322,"false"),og()()(),Sl(1323,"td",22)(1324,"em")(1325,"strong"),eN(1326,"(opcional)"),og()(),Sl(1327,"p"),eN(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(1329,"blockquote")(1330,"p"),eN(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1332,"ul")(1333,"li"),eN(1334,"O campo conter "),Sl(1335,"code"),eN(1336,"p-required"),og(),eN(1337,";"),og(),Sl(1338,"li"),eN(1339,"N\xE3o possuir "),Sl(1340,"code"),eN(1341,"p-help"),og(),eN(1342," e/ou "),Sl(1343,"code"),eN(1344,"p-label"),og(),eN(1345,"."),og()()()(),Sl(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),eN(1350," p-helper"),Wl(1351,"br"),og()()(),Sl(1352,"td",19)(1353,"code",36),eN(1354,"PoHelperOptions "),og(),Sl(1355,"code",25),eN(1356," string"),og()(),Sl(1357,"td",21),eN(1358,"-"),og(),Sl(1359,"td",22)(1360,"em")(1361,"strong"),eN(1362,"(opcional)"),og()(),Sl(1363,"p"),eN(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1365,"code"),eN(1366,"p-label"),og(),eN(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1368,"code"),eN(1369,"p-label"),og(),eN(1370,"."),og(),Sl(1371,"blockquote")(1372,"p"),eN(1373,"Para mais informa\xE7\xF5es acesse: "),Sl(1374,"a",37),eN(1375,"https://po-ui.io/documentation/po-helper"),og(),eN(1376,"."),og()(),Sl(1377,"blockquote")(1378,"p"),eN(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1380,"code"),eN(1381,"p-additional-help-tooltip"),og(),eN(1382," e "),Sl(1383,"code"),eN(1384,"p-additional-help"),og(),eN(1385,") ser\xE1 ignorado."),og()()()(),Sl(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),eN(1390," p-required"),Wl(1391,"br"),og()()(),Sl(1392,"td",19)(1393,"code",26),eN(1394,"boolean"),og()(),Sl(1395,"td",21)(1396,"p")(1397,"code"),eN(1398,"false"),og()()(),Sl(1399,"td",22)(1400,"em")(1401,"strong"),eN(1402,"(opcional)"),og()(),Sl(1403,"p"),eN(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Sl(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),eN(1409," p-required-url"),Wl(1410,"br"),og()()(),Sl(1411,"td",19)(1412,"code",26),eN(1413,"boolean"),og()(),Sl(1414,"td",21)(1415,"p")(1416,"code"),eN(1417,"true"),og()()(),Sl(1418,"td",22)(1419,"em")(1420,"strong"),eN(1421,"(opcional)"),og()(),Sl(1422,"p"),eN(1423,"Define se a propriedade "),Sl(1424,"code"),eN(1425,"p-url"),og(),eN(1426," \xE9 obrigat\xF3ria."),og(),Sl(1427,"p"),eN(1428,"Caso a propriedade seja definida como "),Sl(1429,"code"),eN(1430,"false"),og(),eN(1431,":"),og(),Sl(1432,"ul")(1433,"li"),eN(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),Sl(1435,"code"),eN(1436,"p-url"),og(),eN(1437," definida."),og(),Sl(1438,"li"),eN(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),Sl(1440,"code"),eN(1441,"p-url"),og(),eN(1442," seja definida."),og()(),Sl(1443,"blockquote")(1444,"p"),eN(1445,"Se utilizada com a propriedade "),Sl(1446,"code"),eN(1447,"p-auto-upload"),og(),eN(1448," definida como "),Sl(1449,"code"),eN(1450,"true"),og(),eN(1451," ser\xE1 necess\xE1rio definir a propriedade "),Sl(1452,"code"),eN(1453,"p-url"),og(),eN(1454,"."),og()()()(),Sl(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),eN(1459," p-show-required"),Wl(1460,"br"),og()()(),Sl(1461,"td",19)(1462,"code",26),eN(1463,"boolean"),og()(),Sl(1464,"td",21),eN(1465,"-"),og(),Sl(1466,"td",22)(1467,"p"),eN(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(1469,"blockquote")(1470,"p"),eN(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(1472,"ul")(1473,"li"),eN(1474,"N\xE3o possuir "),Sl(1475,"code"),eN(1476,"p-help"),og(),eN(1477," e/ou "),Sl(1478,"code"),eN(1479,"p-label"),og(),eN(1480,"."),og()()()(),Sl(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),eN(1485," p-show-thumbnail"),Wl(1486,"br"),og()()(),Sl(1487,"td",19)(1488,"code",26),eN(1489,"boolean"),og()(),Sl(1490,"td",21)(1491,"p")(1492,"code"),eN(1493,"true"),og()()(),Sl(1494,"td",22)(1495,"em")(1496,"strong"),eN(1497,"(opcional)"),og()(),Sl(1498,"p"),eN(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Sl(1500,"blockquote")(1501,"p"),eN(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(1503,"code"),eN(1504,".png"),og(),eN(1505,", "),Sl(1506,"code"),eN(1507,".jpg"),og(),eN(1508,", "),Sl(1509,"code"),eN(1510,".jpeg"),og(),eN(1511," e "),Sl(1512,"code"),eN(1513,".gif"),og(),eN(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),og()()()(),Sl(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),eN(1519," p-size"),Wl(1520,"br"),og()()(),Sl(1521,"td",19)(1522,"code",25),eN(1523,"string"),og()(),Sl(1524,"td",21)(1525,"p")(1526,"code"),eN(1527,"medium"),og()()(),Sl(1528,"td",22)(1529,"em")(1530,"strong"),eN(1531,"(opcional)"),og()(),Sl(1532,"p"),eN(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),og(),Sl(1534,"ul")(1535,"li")(1536,"code"),eN(1537,"small"),og(),eN(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(1539,"li")(1540,"code"),eN(1541,"medium"),og(),eN(1542,": altura do button como 44px."),og()(),Sl(1543,"blockquote")(1544,"p"),eN(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1546,"code"),eN(1547,"medium"),og(),eN(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1549,"a",38),eN(1550,"po-theme"),og(),eN(1551,"."),og()()()(),Sl(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),eN(1556," p-url"),Wl(1557,"br"),og()()(),Sl(1558,"td",19)(1559,"code",25),eN(1560,"string"),og()(),Sl(1561,"td",21),eN(1562,"-"),og(),Sl(1563,"td",22)(1564,"p"),eN(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og()()()(),Sl(1566,"h3",10),eN(1567,"M\xE9todos"),og(),Sl(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),eN(1574," clear "),og()()()()(),Sl(1575,"tr",22)(1576,"td",22)(1577,"p"),eN(1578,"M\xE9todo respons\xE1vel por "),Sl(1579,"strong"),eN(1580,"limpar"),og(),eN(1581," o(s) arquivo(s) selecionado(s)."),og()()()(),Wl(1582,"br"),Sl(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),eN(1589," focus "),og()()()()(),Sl(1590,"tr",22)(1591,"td",22)(1592,"p"),eN(1593,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Sl(1594,"p"),eN(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Sl(1596,"pre")(1597,"code"),eN(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),og()()()()(),Wl(1599,"br"),Sl(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),eN(1606," closeModal "),og()()()()(),Sl(1607,"tr",22)(1608,"td",22)(1609,"p"),eN(1610,"M\xE9todo respons\xE1vel por fechar o modal."),og()()()(),Wl(1611,"br"),Sl(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),eN(1618," selectFiles "),og()()()()(),Sl(1619,"tr",22)(1620,"td",22)(1621,"p"),eN(1622,"M\xE9todo respons\xE1vel por "),Sl(1623,"strong"),eN(1624,"abrir"),og(),eN(1625," a janela para sele\xE7\xE3o de arquivo(s)."),og()()()(),Wl(1626,"br"),Sl(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),eN(1633," sendFiles "),og()()()()(),Sl(1634,"tr",22)(1635,"td",22)(1636,"p"),eN(1637,"M\xE9todo respons\xE1vel por "),Sl(1638,"strong"),eN(1639,"enviar"),og(),eN(1640," o(s) arquivo(s) selecionado(s)."),og()()()(),Wl(1641,"br"),Sl(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),eN(1648," showAdditionalHelp "),og()()()()(),Sl(1649,"tr",22)(1650,"td",22)(1651,"p"),eN(1652,"M\xE9todo que exibe "),Sl(1653,"code"),eN(1654,"p-helper"),og(),eN(1655," ou executa a a\xE7\xE3o definida em "),Sl(1656,"code"),eN(1657,"p-helper{eventOnClick}"),og(),eN(1658," ou em "),Sl(1659,"code"),eN(1660,"p-additionalHelp"),og(),eN(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1662,"code"),eN(1663,"p-keydown"),og(),eN(1664,"."),og(),Sl(1665,"blockquote")(1666,"p"),eN(1667,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1668,"code"),eN(1669,"po-helper"),og(),eN(1670," quando o componente estiver com foco."),og()(),Sl(1671,"pre")(1672,"code"),eN(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),og()(),Sl(1674,"pre")(1675,"code"),eN(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Wl(1677,"br"),Sl(1678,"h3"),eN(1679,"Interfaces"),og(),Sl(1680,"h4",41)(1681,"code",5),eN(1682,"PoUploadFileRestrictions"),og()(),Sl(1683,"div",2)(1684,"p"),eN(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),og()(),Sl(1686,"h4",10),eN(1687,"Propriedades"),og(),Sl(1688,"table",11)(1689,"tr",12)(1690,"th",13),eN(1691,"Nome"),og(),Sl(1692,"th",13),eN(1693,"Tipo"),og(),Sl(1694,"th",13),eN(1695,"Descri\xE7\xE3o"),og()(),Sl(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),eN(1700," allowedExtensions"),Wl(1701,"br"),og()()(),Sl(1702,"td",19)(1703,"code",42),eN(1704,"Array<string>"),og()(),Sl(1705,"td",22)(1706,"em")(1707,"strong"),eN(1708,"(opcional)"),og()(),Sl(1709,"p"),eN(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),og(),Sl(1711,"pre")(1712,"code"),eN(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),og()()()(),Sl(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),eN(1718," maxFileSize"),Wl(1719,"br"),og()()(),Sl(1720,"td",19)(1721,"code",31),eN(1722,"number"),og()(),Sl(1723,"td",22)(1724,"em")(1725,"strong"),eN(1726,"(opcional)"),og()(),Sl(1727,"p"),eN(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),og(),Sl(1729,"p"),eN(1730,"Deve ser informado um valor em "),Sl(1731,"em"),eN(1732,"bytes"),og(),eN(1733,", por exemplo: "),Sl(1734,"code"),eN(1735,"31457280"),og(),eN(1736," (30MB)."),og(),Sl(1737,"blockquote")(1738,"p"),eN(1739,"Por padr\xE3o o valor \xE9 "),Sl(1740,"code"),eN(1741,"30 MB"),og(),eN(1742,"."),og()()()(),Sl(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),eN(1747," maxFiles"),Wl(1748,"br"),og()()(),Sl(1749,"td",19)(1750,"code",31),eN(1751,"number"),og()(),Sl(1752,"td",22)(1753,"em")(1754,"strong"),eN(1755,"(opcional)"),og()(),Sl(1756,"p"),eN(1757,"Quantidade m\xE1xima de arquivos para o "),Sl(1758,"em"),eN(1759,"upload"),og(),eN(1760,"."),og(),Sl(1761,"blockquote")(1762,"p"),eN(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),Sl(1764,"code"),eN(1765,"p-multiple"),og(),eN(1766," estiver habilitada e seu valor for maior do que zero."),og()()()(),Sl(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),eN(1771," minFileSize"),Wl(1772,"br"),og()()(),Sl(1773,"td",19)(1774,"code",31),eN(1775,"number"),og()(),Sl(1776,"td",22)(1777,"em")(1778,"strong"),eN(1779,"(opcional)"),og()(),Sl(1780,"p"),eN(1781,"Tamanho m\xEDnimo em "),Sl(1782,"em"),eN(1783,"bytes"),og(),eN(1784," do arquivo que ser\xE1 enviado ao servidor."),og(),Sl(1785,"blockquote")(1786,"p"),eN(1787,"Por padr\xE3o o valor \xE9 "),Sl(1788,"code"),eN(1789,"0"),og(),eN(1790,"."),og()()()()(),Sl(1791,"h4",41)(1792,"code",5),eN(1793,"PoUploadLiterals"),og()(),Sl(1794,"div",2)(1795,"p"),eN(1796,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1797,"code"),eN(1798,"po-upload"),og(),eN(1799,"."),og()(),Sl(1800,"h4",10),eN(1801,"Propriedades"),og(),Sl(1802,"table",11)(1803,"tr",12)(1804,"th",13),eN(1805,"Nome"),og(),Sl(1806,"th",13),eN(1807,"Tipo"),og(),Sl(1808,"th",13),eN(1809,"Descri\xE7\xE3o"),og()(),Sl(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),eN(1814," close"),Wl(1815,"br"),og()()(),Sl(1816,"td",19)(1817,"code",25),eN(1818,"string"),og()(),Sl(1819,"td",22)(1820,"em")(1821,"strong"),eN(1822,"(opcional)"),og()(),Sl(1823,"p"),eN(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),og()()(),Sl(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),eN(1829," continue"),Wl(1830,"br"),og()()(),Sl(1831,"td",19)(1832,"code",25),eN(1833,"string"),og()(),Sl(1834,"td",22)(1835,"em")(1836,"strong"),eN(1837,"(opcional)"),og()(),Sl(1838,"p"),eN(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),og()()(),Sl(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),eN(1844," doneText"),Wl(1845,"br"),og()()(),Sl(1846,"td",19)(1847,"code",25),eN(1848,"string"),og()(),Sl(1849,"td",22)(1850,"em")(1851,"strong"),eN(1852,"(opcional)"),og()(),Sl(1853,"p"),eN(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),og()()(),Sl(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),eN(1859," dragFilesHere"),Wl(1860,"br"),og()()(),Sl(1861,"td",19)(1862,"code",25),eN(1863,"string"),og()(),Sl(1864,"td",22)(1865,"em")(1866,"strong"),eN(1867,"(opcional)"),og()(),Sl(1868,"p"),eN(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),Sl(1870,"code"),eN(1871,"p-drag-drop"),og(),eN(1872,"."),og()()(),Sl(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),eN(1877," dragFoldersHere"),Wl(1878,"br"),og()()(),Sl(1879,"td",19)(1880,"code",25),eN(1881,"string"),og()(),Sl(1882,"td",22)(1883,"em")(1884,"strong"),eN(1885,"(opcional)"),og()(),Sl(1886,"p"),eN(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),Sl(1888,"code"),eN(1889,"p-drag-drop"),og(),eN(1890,"."),og()()(),Sl(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),eN(1895," dropFilesHere"),Wl(1896,"br"),og()()(),Sl(1897,"td",19)(1898,"code",25),eN(1899,"string"),og()(),Sl(1900,"td",22)(1901,"em")(1902,"strong"),eN(1903,"(opcional)"),og()(),Sl(1904,"p"),eN(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),Sl(1906,"code"),eN(1907,"p-drag-drop"),og()()()(),Sl(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),eN(1912," dropFoldersHere"),Wl(1913,"br"),og()()(),Sl(1914,"td",19)(1915,"code",25),eN(1916,"string"),og()(),Sl(1917,"td",22)(1918,"em")(1919,"strong"),eN(1920,"(opcional)"),og()(),Sl(1921,"p"),eN(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),Sl(1923,"code"),eN(1924,"p-drag-drop"),og(),eN(1925,"."),og()()(),Sl(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),eN(1930," errorOccurred"),Wl(1931,"br"),og()()(),Sl(1932,"td",19)(1933,"code",25),eN(1934,"string"),og()(),Sl(1935,"td",22)(1936,"em")(1937,"strong"),eN(1938,"(opcional)"),og()(),Sl(1939,"p"),eN(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),og()()(),Sl(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),eN(1945," files"),Wl(1946,"br"),og()()(),Sl(1947,"td",19)(1948,"code",25),eN(1949,"string"),og()(),Sl(1950,"td",22)(1951,"em")(1952,"strong"),eN(1953,"(opcional)"),og()(),Sl(1954,"p"),eN(1955,"Par\xE2metro "),Sl(1956,"em"),eN(1957,"files"),og(),eN(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Sl(1959,"em"),eN(1960,"dragDrop"),og(),eN(1961,"."),og()()(),Sl(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),eN(1966," folders"),Wl(1967,"br"),og()()(),Sl(1968,"td",19)(1969,"code",25),eN(1970,"string"),og()(),Sl(1971,"td",22)(1972,"em")(1973,"strong"),eN(1974,"(opcional)"),og()(),Sl(1975,"p"),eN(1976,"Par\xE2metro "),Sl(1977,"em"),eN(1978,"folders"),og(),eN(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),Sl(1980,"em"),eN(1981,"dragDrop"),og(),eN(1982,"."),og()()(),Sl(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),eN(1987," invalidDropArea"),Wl(1988,"br"),og()()(),Sl(1989,"td",19)(1990,"code",25),eN(1991,"string"),og()(),Sl(1992,"td",22)(1993,"em")(1994,"strong"),eN(1995,"(opcional)"),og()(),Sl(1996,"p"),eN(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),Sl(1998,"em"),eN(1999,"dragDrop"),og(),eN(2e3,"."),og()()(),Sl(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),eN(2005," preview"),Wl(2006,"br"),og()()(),Sl(2007,"td",19)(2008,"code",25),eN(2009,"string"),og()(),Sl(2010,"td",22)(2011,"em")(2012,"strong"),eN(2013,"(opcional)"),og()(),Sl(2014,"p"),eN(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),og()()(),Sl(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),eN(2020," selectFile"),Wl(2021,"br"),og()()(),Sl(2022,"td",19)(2023,"code",25),eN(2024,"string"),og()(),Sl(2025,"td",22)(2026,"em")(2027,"strong"),eN(2028,"(opcional)"),og()(),Sl(2029,"p"),eN(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),og()()(),Sl(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),eN(2035," selectFiles"),Wl(2036,"br"),og()()(),Sl(2037,"td",19)(2038,"code",25),eN(2039,"string"),og()(),Sl(2040,"td",22)(2041,"em")(2042,"strong"),eN(2043,"(opcional)"),og()(),Sl(2044,"p"),eN(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Sl(2046,"code"),eN(2047,"p-multiple"),og(),eN(2048,"."),og()()(),Sl(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),eN(2053," selectFilesOnComputer"),Wl(2054,"br"),og()()(),Sl(2055,"td",19)(2056,"code",25),eN(2057,"string"),og()(),Sl(2058,"td",22)(2059,"em")(2060,"strong"),eN(2061,"(opcional)"),og()(),Sl(2062,"p"),eN(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Sl(2064,"em"),eN(2065,"dragDrop"),og(),eN(2066,"."),og()()(),Sl(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),eN(2071," selectFolder"),Wl(2072,"br"),og()()(),Sl(2073,"td",19)(2074,"code",25),eN(2075,"string"),og()(),Sl(2076,"td",22)(2077,"em")(2078,"strong"),eN(2079,"(opcional)"),og()(),Sl(2080,"p"),eN(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),Sl(2082,"code"),eN(2083,"p-directory"),og(),eN(2084,"."),og()()(),Sl(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),eN(2089," selectFolderOnComputer"),Wl(2090,"br"),og()()(),Sl(2091,"td",19)(2092,"code",25),eN(2093,"string"),og()(),Sl(2094,"td",22)(2095,"em")(2096,"strong"),eN(2097,"(opcional)"),og()(),Sl(2098,"p"),eN(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Sl(2100,"em"),eN(2101,"dragDrop"),og(),eN(2102,"."),og()()(),Sl(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),eN(2107," sentWithSuccess"),Wl(2108,"br"),og()()(),Sl(2109,"td",19)(2110,"code",25),eN(2111,"string"),og()(),Sl(2112,"td",22)(2113,"em")(2114,"strong"),eN(2115,"(opcional)"),og()(),Sl(2116,"p"),eN(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),og()()(),Sl(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),eN(2122," startSending"),Wl(2123,"br"),og()()(),Sl(2124,"td",19)(2125,"code",25),eN(2126,"string"),og()(),Sl(2127,"td",22)(2128,"em")(2129,"strong"),eN(2130,"(opcional)"),og()(),Sl(2131,"p"),eN(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),og()()(),Sl(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),eN(2137," thumbnail"),Wl(2138,"br"),og()()(),Sl(2139,"td",19)(2140,"code",25),eN(2141,"string"),og()(),Sl(2142,"td",22)(2143,"em")(2144,"strong"),eN(2145,"(opcional)"),og()(),Sl(2146,"p"),eN(2147,"Texto do leitor da miniatura da imagem."),og()()(),Sl(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),eN(2152," tryAgain"),Wl(2153,"br"),og()()(),Sl(2154,"td",19)(2155,"code",25),eN(2156,"string"),og()(),Sl(2157,"td",22)(2158,"em")(2159,"strong"),eN(2160,"(opcional)"),og()(),Sl(2161,"p"),eN(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),og()()(),Sl(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),eN(2167," uploadingText"),Wl(2168,"br"),og()()(),Sl(2169,"td",19)(2170,"code",25),eN(2171,"string"),og()(),Sl(2172,"td",22)(2173,"em")(2174,"strong"),eN(2175,"(opcional)"),og()(),Sl(2176,"p"),eN(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),og()()()(),Sl(2178,"h4",41)(2179,"code",5),eN(2180,"PoProgressAction"),og()(),Sl(2181,"div",2)(2182,"p"),eN(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),og()(),Sl(2184,"h4",10),eN(2185,"Propriedades"),og(),Sl(2186,"table",11)(2187,"tr",12)(2188,"th",13),eN(2189,"Nome"),og(),Sl(2190,"th",13),eN(2191,"Tipo"),og(),Sl(2192,"th",13),eN(2193,"Descri\xE7\xE3o"),og()(),Sl(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),eN(2198," disabled"),Wl(2199,"br"),og()()(),Sl(2200,"td",19)(2201,"code",26),eN(2202,"boolean "),og(),Sl(2203,"code",43),eN(2204," Function"),og()(),Sl(2205,"td",22)(2206,"em")(2207,"strong"),eN(2208,"(opcional)"),og()(),Sl(2209,"p"),eN(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),og(),Sl(2211,"p"),eN(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),og()()(),Sl(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),eN(2217," icon"),Wl(2218,"br"),og()()(),Sl(2219,"td",19)(2220,"code",25),eN(2221,"string "),og(),Sl(2222,"code",44),eN(2223," TemplateRef<void>"),og()(),Sl(2224,"td",22)(2225,"em")(2226,"strong"),eN(2227,"(opcional)"),og()(),Sl(2228,"p"),eN(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),og(),Sl(2230,"p"),eN(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(2232,"a",45),eN(2233,"Biblioteca de \xEDcones"),og(),eN(2234,". conforme exemplo abaixo:"),og(),Sl(2235,"pre")(2236,"code"),eN(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),og()(),Sl(2238,"p"),eN(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Sl(2240,"pre")(2241,"code"),eN(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),og()(),Sl(2243,"p"),eN(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(2245,"code"),eN(2246,"TemplateRef"),og(),eN(2247,`, conforme exemplo abaixo:
component.html:`),og(),Sl(2248,"pre")(2249,"code"),eN(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),og()(),Sl(2251,"p"),eN(2252,"component.ts:"),og(),Sl(2253,"pre")(2254,"code"),eN(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),og()()()(),Sl(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),eN(2260," label"),Wl(2261,"br"),og()()(),Sl(2262,"td",19)(2263,"code",25),eN(2264,"string"),og()(),Sl(2265,"td",22)(2266,"em")(2267,"strong"),eN(2268,"(opcional)"),og()(),Sl(2269,"p"),eN(2270,"R\xF3tulo da a\xE7\xE3o."),og()()(),Sl(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),eN(2275," type"),Wl(2276,"br"),og()()(),Sl(2277,"td",19)(2278,"code",25),eN(2279,"string"),og()(),Sl(2280,"td",22)(2281,"em")(2282,"strong"),eN(2283,"(opcional)"),og()(),Sl(2284,"p"),eN(2285,"Define a cor do item, sendo "),Sl(2286,"code"),eN(2287,"default"),og(),eN(2288," o padr\xE3o."),og(),Sl(2289,"p"),eN(2290,"Valores v\xE1lidos:"),og(),Sl(2291,"ul")(2292,"li")(2293,"code"),eN(2294,"default"),og()(),Sl(2295,"li")(2296,"code"),eN(2297,"danger"),og(),eN(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),og()()()(),Sl(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),eN(2303," visible"),Wl(2304,"br"),og()()(),Sl(2305,"td",19)(2306,"code",26),eN(2307,"boolean "),og(),Sl(2308,"code",43),eN(2309," Function"),og()(),Sl(2310,"td",22)(2311,"em")(2312,"strong"),eN(2313,"(opcional)"),og()(),Sl(2314,"p"),eN(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),og(),Sl(2316,"blockquote")(2317,"p"),eN(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),og()(),Sl(2319,"p"),eN(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),og(),Sl(2321,"ul")(2322,"li")(2323,"p"),eN(2324,"Fun\xE7\xE3o que deve retornar um booleano."),og()(),Sl(2325,"li")(2326,"p"),eN(2327,"Informar diretamente um valor booleano."),og()()()()()()());},dependencies:[Ka],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(En))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-upload-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),og()()()),r&2&&(nw("p-actions",i.actions),Lp(2),nw("p-active",i.activeTab==="doc"),Lp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[rNe,Bme,qme,Me,qe,ke,Le,Re,Oe,je],encapsulation:2})}return a})();var vt=[{path:"",component:Be}],Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[hL.forChild(vt),hL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,Ne]})}return a})();export{cn as DocPoUploadModule};