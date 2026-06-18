import {f as fe,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,bb as ta,J as zl,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,T as nw,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,c4 as C3,aJ as qhe,aB as Dx,aM as ww,aN as QA,aO as Ew,aP as e0,a9 as Ky,aa as Zy,a3 as cNe,aD as Xy,aT as eN,aE as Qy}from'./main-QSTLMRDK.js';var te=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&zl(0,"po-code-editor");},dependencies:[ta],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Code Editor Basic"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-code-editor></po-code-editor>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-code-editor-basic"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,te],encapsulation:2})}return n})();var ne=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:"java",value:"java"},{label:"yaml",value:"yaml"},{label:"typescript",value:"typescript"}];propertiesOptions=[{value:"readonly",label:"Read Only"}];themeOptions=[{label:"vs",value:"vs"},{label:"vs-dark",value:"vs-dark"},{label:"hc-black",value:"hc-black"}];ngOnInit(){this.restore();}restore(){this.language="",this.theme="",this.properties=[],this.codeEditor="";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs"]],standalone:false,decls:12,vars:10,consts:[["f","ngForm"],[1,"po-row"],["p-height","300",1,"po-md-12",3,"ngModelChange","ngModel","p-language","p-readonly","p-theme"],["name","language","p-label","Language",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","theme","p-label","Theme",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let g=Dx();Il(0,"div",1)(1,"po-code-editor",2),ww("ngModelChange",function(m){return Xy(g),eN(a.codeEditor,m)||(a.codeEditor=m),Qy(m)}),og(),QA(),og(),zl(2,"po-divider"),Il(3,"form",null,0)(5,"div",1)(6,"po-select",3),ww("ngModelChange",function(m){return Xy(g),eN(a.language,m)||(a.language=m),Qy(m)}),og(),QA(),Il(7,"po-select",4),ww("ngModelChange",function(m){return Xy(g),eN(a.theme,m)||(a.theme=m),Qy(m)}),og(),QA(),og(),Il(8,"div",1)(9,"po-checkbox-group",5),ww("ngModelChange",function(m){return Xy(g),eN(a.properties,m)||(a.properties=m),Qy(m)}),og(),QA(),og(),Il(10,"div",1)(11,"po-button",6),ft("p-click",function(){return a.restore()}),og()()();}i&2&&(Lp(),Ew("ngModel",a.codeEditor),nw("p-language",a.language)("p-readonly",a.properties.includes("readonly"))("p-theme",a.theme),e0(),Lp(5),Ew("ngModel",a.language),nw("p-options",a.languageOptions),e0(),Lp(),Ew("ngModel",a.theme),nw("p-options",a.themeOptions),e0(),Lp(2),Ew("ngModel",a.properties),nw("p-options",a.propertiesOptions),e0());},dependencies:[G9,$9,z9,mk,hk,Qt,mv,C3,qhe,ta],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Code Editor Labs"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-code-editor
    class="po-md-12"
    [(ngModel)]="codeEditor"
    p-height="300"
    [p-language]="language"
    [p-readonly]="properties.includes('readonly')"
    [p-theme]="theme"
  >
  </po-code-editor>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="language" [(ngModel)]="language" p-label="Language" [p-options]="languageOptions">
    </po-select>

    <po-select class="po-md-6" name="theme" [(ngModel)]="theme" p-label="Theme" [p-options]="themeOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-code-editor-labs',
  templateUrl: './sample-po-code-editor-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorLabsComponent implements OnInit {
  codeEditor: string;
  language: string;
  properties: Array<string>;
  theme: string;

  public readonly languageOptions: Array<PoSelectOption> = [
    { label: 'java', value: 'java' },
    { label: 'yaml', value: 'yaml' },
    { label: 'typescript', value: 'typescript' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'readonly', label: 'Read Only' }];

  public readonly themeOptions: Array<PoSelectOption> = [
    { label: 'vs', value: 'vs' },
    { label: 'vs-dark', value: 'vs-dark' },
    { label: 'hc-black', value: 'hc-black' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.language = '';
    this.theme = '';
    this.properties = [];
    this.codeEditor = '';
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-code-editor-labs"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,be,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ne],encapsulation:2})}return n})();var ae=(()=>{class n{code=[`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}`,`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
`];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff"]],standalone:false,decls:2,vars:1,consts:[[1,"po-row"],["p-height","300","p-language","typescript","p-show-diff","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(Il(0,"div",0)(1,"po-code-editor",1),ww("ngModelChange",function(y){return eN(a.code,y)||(a.code=y),y}),og(),QA(),og()),i&2&&(Lp(),Ew("ngModel",a.code),e0());},dependencies:[$9,mk,ta],encapsulation:2,changeDetection:1})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-diff-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Code Editor - Diff"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-diff',
  templateUrl: './sample-po-code-editor-diff.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorDiffComponent {
  code = [
    \`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}\`,
    \`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
\`
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-code-editor-diff"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,xe,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ae],encapsulation:2})}return n})();var le=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform"]],standalone:false,decls:2,vars:0,consts:[[1,"po-row"],["p-height","300","p-language","terraform",1,"po-md-12"]],template:function(i,a){i&1&&(Il(0,"div",0),zl(1,"po-code-editor",1),og());},dependencies:[ta],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-terraform-view"]],standalone:false,decls:32,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Code Editor - Terraform"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"),og(),Il(13,"pre",7),Qx(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),og(),Il(21,"label",6),Qx(22,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"),og(),Il(23,"pre",9),Qx(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
import { PoCodeEditorRegisterable } from '@po-ui/ng-code-editor';

declare const monaco: any;

/** Defini\xE7\xE3o da lista de sugest\xF5es para o autocomplete.
 *
 * > A fun\xE7\xE3o \`provideCompletionItems\` precisa ser exportada para ser compat\xEDvel com AOT.
 *
 * Documenta\xE7\xE3o: https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
 */
export function provideCompletionItems() {
  const suggestions: Array<PoCodeEditorRegisterableSuggestion> = [
    {
      label: 'terraform',
      insertText: '#terraform language'
    },
    {
      label: 'server',
      insertText: 'server \${1:ip}'
    }
  ];

  return { suggestions };
}

/** Definindo propriedades de uma nova sintaxe. */
export const customRegister: PoCodeEditorRegisterable = {
  language: 'terraform',
  options: {
    ignoreCase: false,
    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],
    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],
    symbols: new RegExp('[=><!~?:&|+\\\\-*\\\\/\\\\^%]+'),
    escapes: new RegExp(\`\\\\\\\\(?:[abfnrtv\\\\\\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})\`),
    tokenizer: {
      root: [
        [\`[a-z_$][\\\\w$]*\`, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
        { include: '@whitespace' },
        [\`\\\\d*\\\\.\\\\d+([eE][\\\\-+]?\\\\d+)?\`, 'number.float'],
        [\`0[x][0-9a-fA-F]+\`, 'number.hex'],
        [\`\\\\d+\`, 'number'],
        [\`[;,.]\`, 'delimiter'],
        [\`\\"([^\\"\\\\\\\\]|\\\\\\\\.)*$\`, 'string.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@open', next: '@string' }],
        [\`'[^\\\\\\\\']'\`, 'string'],
        [\`'\`, 'string.invalid']
      ],
      comment: [
        [\`[^\\\\/*]+\`, 'comment'],
        [\`[\\\\/*]\`, 'comment'],
        [\`[\\\\#.*]\`, 'comment']
      ],
      string: [
        [\`[^\\\\\\\\\\"\\\\$]+\`, 'string'],
        [\`\\\\$\`, 'string.interpolated', '@interpolated'],
        [\`\\\\\\\\.\`, 'string.escape.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@close', next: '@pop' }]
      ],
      whitespace: [
        [\`[ \\\\t\\\\r\\\\n]+\`, 'white'],
        [\`\\\\/\\\\/.*$\`, 'comment'],
        [\`\\\\#.*$\`, 'comment']
      ],
      interpolated: [
        [\`[{]\`, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
        ['', '', '@pop']
      ]
    }
  },
  suggestions: { provideCompletionItems: provideCompletionItems }
};
`),og(),Il(25,"label",6),Qx(26,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"),og(),Il(27,"pre",9),Qx(28,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com forRegister.
 */

// import { NgModule } from '@angular/core';
// import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
//
//
// @NgModule({
//   imports: [
//     PoModule,
//     PoCodeEditorModule.forRegister(customRegister)
//   ],
//   declarations: [
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoCodeEditorRegisterModule { }
`),og()()()()(),Il(29,"div",10),zl(30,"sample-po-code-editor-terraform"),og(),zl(31,"hr")),i&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,le],encapsulation:2})}return n})();var se=(()=>{class n{language="html";suggestions=[{label:"po",insertText:"PO UI"},{label:"ng",insertText:"Angular"},{label:"po-btn",insertText:'<po-button p-label="${1:label}"></po-button>'},{label:"po-inp",insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion"]],standalone:false,decls:1,vars:2,consts:[[3,"p-suggestions","p-language"]],template:function(i,a){i&1&&zl(0,"po-code-editor",0),i&2&&nw("p-suggestions",a.suggestions)("p-language",a.language);},dependencies:[ta],encapsulation:2,changeDetection:1})}return n})();var Me=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-suggestion-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Code Editor Suggestion"),og(),Il(4,"a",2),ft("click",function(){return a.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-suggestion',
  templateUrl: './sample-po-code-editor-suggestion.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCodeEditorSuggestionComponent {
  language = 'html';
  suggestions = [
    { label: 'po', insertText: 'PO UI' },
    { label: 'ng', insertText: 'Angular' },
    { label: 'po-btn', insertText: '<po-button p-label="\${1:label}"></po-button>' },
    { label: 'po-inp', insertText: '<po-input name="\${1:name}" [(ngModel)]="\${2:model}"></po-input>' }
  ];
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-code-editor-suggestion"),og(),zl(23,"hr")),i&2&&(Lp(5),Ux("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Me,a.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,se],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-code-editor-doc"]],standalone:false,decls:297,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-shell"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://microsoft.github.io/monaco-editor/"],["href","https://po-ui.io/documentation/po-code-editor-register?view=doc"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoCodeEditorRegisterableSuggestion>"],[1,"docs-api-h4","docs-api-class-name"]],template:function(i,a){i&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoCodeEditorModule } from '@po-ui/ng-code-editor';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente po-code-editor."),og()(),Il(7,"h3",3),Qx(8,"Componente"),og(),Il(9,"h4",4)(10,"code",5),Qx(11,"PoCodeEditorComponent"),og()(),Il(12,"div",2)(13,"p"),Qx(14,"O "),Il(15,"code"),Qx(16,"po-code-editor"),og(),Qx(17," \xE9 um componente para edi\xE7\xE3o de c\xF3digo fonte baseado no Monaco Editor da Microsoft."),og(),Il(18,"p"),Qx(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),og(),Il(20,"p"),Qx(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),og(),Il(22,"p"),Qx(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),og(),Il(24,"h4"),Qx(25,"Adicionando o pacote @po-ui/ng-code-editor"),og(),Il(26,"p"),Qx(27,"Para instalar o pacote "),Il(28,"code"),Qx(29,"po-code-editor"),og(),Qx(30," em sua aplica\xE7\xE3o execute:"),og(),Il(31,"pre")(32,"code",6),Qx(33,"`ng add @po-ui/ng-code-editor`\n"),og()(),Il(34,"p"),Qx(35,"O comando "),Il(36,"code"),Qx(37,"ng add"),og(),Qx(38," do "),Il(39,"code"),Qx(40,"Angular CLI"),og(),Qx(41,":"),og(),Il(42,"ul")(43,"li"),Qx(44,"inclui o "),Il(45,"code"),Qx(46,"po-code-editor"),og(),Qx(47," no seu projeto;"),og(),Il(48,"li"),Qx(49,"adiciona o m\xF3dulo "),Il(50,"code"),Qx(51,"PoCodeEditorModule"),og(),Qx(52,":;"),og()(),Il(53,"pre")(54,"code"),Qx(55,`// app.module.ts
...
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
...
@NgModule({
  imports: [
    ...
    PoModule,
    PoCodeEditorModule
  ],
  ...
})
export class AppModule { }
`),og()(),Il(56,"ul")(57,"li"),Qx(58,"adiciona o tema PO UI e tamb\xE9m o "),Il(59,"em"),Qx(60,"asset"),og(),Qx(61," do Monaco no arquivo "),Il(62,"code"),Qx(63,"angular.json"),og(),Qx(64,", conforme abaixo:"),og()(),Il(65,"pre"),Ky(),Qx(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),Zy(),og()(),Il(67,"div",7)(68,"h4",8),Qx(69,"Seletor"),og(),Il(70,"pre",9),Qx(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),og()(),Il(72,"h4",10),Qx(73,"Propriedades"),og(),Il(74,"table",11)(75,"tr",12)(76,"th",13),Qx(77,"Nome"),og(),Il(78,"th",13),Qx(79,"Tipo"),og(),Il(80,"th",13),Qx(81,"Padr\xE3o"),og(),Il(82,"th",13),Qx(83,"Descri\xE7\xE3o"),og()(),Il(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),Qx(88," p-height"),zl(89,"br"),og()()(),Il(90,"td",18)(91,"code",19),Qx(92,"string"),og()(),Il(93,"td",20),Qx(94,"-"),og(),Il(95,"td",21)(96,"em")(97,"strong"),Qx(98,"(opcional)"),og()(),Il(99,"p"),Qx(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),og()()(),Il(101,"tr",14)(102,"td",15)(103,"div",16)(104,"span",17),Qx(105," p-language"),zl(106,"br"),og()()(),Il(107,"td",18)(108,"code",19),Qx(109,"string"),og()(),Il(110,"td",20)(111,"p")(112,"code"),Qx(113,"plainText"),og()()(),Il(114,"td",21)(115,"em")(116,"strong"),Qx(117,"(opcional)"),og()(),Il(118,"p"),Qx(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),Il(120,"a",22)(121,"strong"),Qx(122,"Monaco Editor"),og()(),Qx(123,"."),og(),Il(124,"p"),Qx(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),Il(126,"a",23)(127,"strong"),Qx(128,"po-code-editor-register"),og()(),Qx(129,"."),og()()(),Il(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),Qx(134," p-readonly"),zl(135,"br"),og()()(),Il(136,"td",18)(137,"code",24),Qx(138,"boolean"),og()(),Il(139,"td",20)(140,"p")(141,"code"),Qx(142,"false"),og()()(),Il(143,"td",21)(144,"em")(145,"strong"),Qx(146,"(opcional)"),og()(),Il(147,"p"),Qx(148,"Indica se o editor ser\xE1 aberto em modo de leitura."),og(),Il(149,"p"),Qx(150,"Neste caso, n\xE3o \xE9 poss\xEDvel editar o c\xF3digo inserido."),og(),Il(151,"p"),Qx(152,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),og()()(),Il(153,"tr",14)(154,"td",15)(155,"div",16)(156,"span",17),Qx(157," p-show-diff"),zl(158,"br"),og()()(),Il(159,"td",18)(160,"code",24),Qx(161,"boolean"),og()(),Il(162,"td",20)(163,"p")(164,"code"),Qx(165,"false"),og()()(),Il(166,"td",21)(167,"em")(168,"strong"),Qx(169,"(opcional)"),og()(),Il(170,"p"),Qx(171,"Indica se o editor ser\xE1 aberto em modo de compara\xE7\xE3o."),og(),Il(172,"p"),Qx(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),og(),Il(174,"p"),Qx(175,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),og()()(),Il(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),Qx(180," p-suggestions"),zl(181,"br"),og()()(),Il(182,"td",18)(183,"code",25),Qx(184,"Array<PoCodeEditorRegisterableSuggestion>"),og()(),Il(185,"td",20),Qx(186,"-"),og(),Il(187,"td",21)(188,"em")(189,"strong"),Qx(190,"(opcional)"),og()(),Il(191,"p"),Qx(192,"Lista de sugest\xF5es usadas pelo autocomplete dentro do editor."),og(),Il(193,"p"),Qx(194,"Para visualizar a lista de sugest\xF5es use o comando "),Il(195,"code"),Qx(196,"CTRL + SPACE"),og(),Qx(197,"."),og(),Il(198,"p"),Qx(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),og(),Il(200,"p"),Qx(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),og(),Il(202,"pre")(203,"code"),Qx(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),og()(),Il(205,"p"),Qx(206,"Ao fornecer uma lista de sugest\xF5es \xE9 poss\xEDvel acelerar a escrita de scripts pelos usu\xE1rios."),og()()(),Il(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),Qx(211," p-theme"),zl(212,"br"),og()()(),Il(213,"td",18)(214,"code",19),Qx(215,"string"),og()(),Il(216,"td",20)(217,"p")(218,"code"),Qx(219,"vs"),og()()(),Il(220,"td",21)(221,"em")(222,"strong"),Qx(223,"(opcional)"),og()(),Il(224,"p"),Qx(225,"Define um tema para o editor."),og(),Il(226,"p"),Qx(227,"Temas v\xE1lidos:"),og(),Il(228,"ul")(229,"li")(230,"code"),Qx(231,"vs-dark"),og()(),Il(232,"li")(233,"code"),Qx(234,"vs"),og()(),Il(235,"li")(236,"code"),Qx(237,"hc-black"),og()()(),Il(238,"p"),Qx(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),og()()()(),Il(240,"h3"),Qx(241,"Interfaces"),og(),Il(242,"h4",26)(243,"code",5),Qx(244,"PoCodeEditorRegisterableSuggestion"),og()(),Il(245,"div",2)(246,"p"),Qx(247,"Interface para configura\xE7\xE3o da lista de sugest\xE3o do autocomplete do code editor."),og()(),Il(248,"h4",10),Qx(249,"Propriedades"),og(),Il(250,"table",11)(251,"tr",12)(252,"th",13),Qx(253,"Nome"),og(),Il(254,"th",13),Qx(255,"Tipo"),og(),Il(256,"th",13),Qx(257,"Descri\xE7\xE3o"),og()(),Il(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),Qx(262," documentation"),zl(263,"br"),og()()(),Il(264,"td",18)(265,"code",19),Qx(266,"string"),og()(),Il(267,"td",21)(268,"em")(269,"strong"),Qx(270,"(opcional)"),og()(),Il(271,"p"),Qx(272,"Texto de ajuda que ser\xE1 exibido caso o usu\xE1rio deseje ver mais informa\xE7\xF5es sobre a sugest\xE3o."),og()()(),Il(273,"tr",14)(274,"td",15)(275,"div",16)(276,"span",17),Qx(277," insertText"),zl(278,"br"),og()()(),Il(279,"td",18)(280,"code",19),Qx(281,"string"),og()(),Il(282,"td",21)(283,"p"),Qx(284,"Texto que ser\xE1 inserido no editor ao selecionar a sugest\xE3o exibida pelo autocomplete."),og()()(),Il(285,"tr",14)(286,"td",15)(287,"div",16)(288,"span",17),Qx(289," label"),zl(290,"br"),og()()(),Il(291,"td",18)(292,"code",19),Qx(293,"string"),og()(),Il(294,"td",21)(295,"p"),Qx(296,"Texto que ser\xE1 exibido na lista de sugest\xF5es."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Code Editor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return a.changeTab("doc")}),zl(3,"sample-po-code-editor-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return a.changeTab("web")}),zl(5,"sample-po-code-editor-basic-view")(6,"sample-po-code-editor-labs-view")(7,"sample-po-code-editor-diff-view")(8,"sample-po-code-editor-terraform-view")(9,"sample-po-code-editor-suggestion-view"),og()()()),i&2&&(nw("p-actions",a.actions),Lp(2),nw("p-active",a.activeTab==="doc"),Lp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[cNe,qme,Yme,oe,ie,re,de,pe,me],encapsulation:2})}return n})();var Ve=[{path:"",component:ce}],ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[uL.forChild(Ve),uL]})}return n})();var st=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[sr,ue]})}return n})();export{st as DocPoCodeEditorModule};