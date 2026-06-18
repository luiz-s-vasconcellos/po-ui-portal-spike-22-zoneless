import {f as fe$1,u as ue$1,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,aW as Yp,dy as mNe,J as zl,T as nw,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,bs as uN,aX as G9,aF as $9,aY as z9,aG as mk,aZ as hk,b0 as Qt,b1 as mv,b4 as F3,aB as Dx,aM as ww,aN as QA,bd as Ax,aO as Ew,aP as e0,dz as Lme,a2 as JE,b6 as Yo,av as Gl,aw as co,ax as lo,a3 as cNe,ct as uo,dA as _w,B as yw,aD as Xy,aT as eN,aE as Qy,aA as Sx}from'./main-FCMDZGSJ.js';var _e=()=>["/assets/graphics/landscape-01.jpeg","/assets/graphics/landscape-02.jpeg"],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-slides"]],template:function(a,o){a&1&&zl(0,"po-slide",0),a&2&&nw("p-slides",lN(1,_e));},dependencies:[mNe],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Slide Basic"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-slide-basic/sample-po-slide-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-slide-basic/sample-po-slide-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-slide-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Te,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ce],encapsulation:2})}return n})();var he=(()=>{class n{poNotification=f(Yp);height;interval;slideItem;slideItems;ngOnInit(){this.restore();}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm();}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm();}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0};}showAction(l){this.poNotification.success(`Slide clicked: ${l}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs"]],standalone:false,decls:19,vars:10,consts:[["slideItemForm","ngForm"],["slidePropertiesForm","ngForm"],[3,"p-height","p-interval","p-slides"],["p-label","Slide Item"],[1,"po-row"],["name","slideAction","p-clean","","p-label","Slide action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideAlt","p-clean","","p-label","Slide alt",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideImage","p-clean","","p-help","Ex.: https://lorempixel.com/1024/768/","p-label","Slide image","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideLink","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","Slide link",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add slide",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Properties"],["name","interval","p-clean","","p-help","Ex.: 7000","p-label","Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-help","Ex.: 300","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let d=Dx();zl(0,"po-slide",2)(1,"po-divider",3),Il(2,"form",null,0)(4,"div",4)(5,"po-input",5),ww("ngModelChange",function(r){return Xy(d),eN(o.slideItem.action,r)||(o.slideItem.action=r),Qy(r)}),og(),QA(),Il(6,"po-input",6),ww("ngModelChange",function(r){return Xy(d),eN(o.slideItem.alt,r)||(o.slideItem.alt=r),Qy(r)}),og(),QA(),Il(7,"po-input",7),ww("ngModelChange",function(r){return Xy(d),eN(o.slideItem.image,r)||(o.slideItem.image=r),Qy(r)}),og(),QA(),Il(8,"po-input",8),ww("ngModelChange",function(r){return Xy(d),eN(o.slideItem.link,r)||(o.slideItem.link=r),Qy(r)}),og(),QA(),og(),Il(9,"div",4)(10,"po-button",9),ft("p-click",function(){return o.addSlide()}),og()()(),zl(11,"po-divider",10),Il(12,"form",null,1)(14,"div",4)(15,"po-input",11),ww("ngModelChange",function(r){return Xy(d),eN(o.interval,r)||(o.interval=r),Qy(r)}),og(),QA(),Il(16,"po-input",12),ww("ngModelChange",function(r){return Xy(d),eN(o.height,r)||(o.height=r),Qy(r)}),og(),QA(),og(),Il(17,"div",4)(18,"po-button",13),ft("p-click",function(){Xy(d);let r=Ax(3),we=Ax(13);return r.reset(),we.reset(),Qy(o.restore())}),og()()();}if(a&2){let d=Ax(3);nw("p-height",o.height)("p-interval",o.interval)("p-slides",o.slideItems),Lp(5),Ew("ngModel",o.slideItem.action),e0(),Lp(),Ew("ngModel",o.slideItem.alt),e0(),Lp(),Ew("ngModel",o.slideItem.image),e0(),Lp(),Ew("ngModel",o.slideItem.link),e0(),Lp(2),nw("p-disabled",d.invalid),Lp(5),Ew("ngModel",o.interval),e0(),Lp(),Ew("ngModel",o.height),e0();}},dependencies:[G9,$9,z9,mk,hk,Qt,mv,F3,mNe],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n}),ge=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Slide Labs"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-slide-labs/sample-po-slide-labs.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

<po-divider p-label="Slide Item"></po-divider>

<form #slideItemForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="slideAction" [(ngModel)]="slideItem.action" p-clean p-label="Slide action">
    </po-input>

    <po-input class="po-md-6" name="slideAlt" [(ngModel)]="slideItem.alt" p-clean p-label="Slide alt"> </po-input>

    <po-input
      class="po-md-6"
      name="slideImage"
      [(ngModel)]="slideItem.image"
      p-clean
      p-help="Ex.: https://lorempixel.com/1024/768/"
      p-label="Slide image"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="slideLink"
      [(ngModel)]="slideItem.link"
      p-clean
      p-help="Ex.: https://po-ui.io/home"
      p-label="Slide link"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Add slide" [p-disabled]="slideItemForm.invalid" (p-click)="addSlide()">
    </po-button>
  </div>
</form>

<po-divider p-label="Properties"></po-divider>

<form #slidePropertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="interval" [(ngModel)]="interval" p-clean p-help="Ex.: 7000" p-label="Interval">
    </po-input>

    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-help="Ex.: 300" p-label="Height"> </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="slideItemForm.reset(); slidePropertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-slide-labs/sample-po-slide-labs.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-labs',
  templateUrl: './sample-po-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  height: number;
  interval: number;
  slideItem: PoSlideItem;
  slideItems: Array<PoSlideItem>;

  ngOnInit() {
    this.restore();
  }

  addSlide() {
    const item: PoSlideItem = Object.assign({}, this.slideItem);
    item.action = item.action ? this.showAction.bind(this, item.action) : undefined;
    this.slideItems = [...this.slideItems, item];
    this.restoreSlideItemForm();
  }

  restore() {
    this.interval = undefined;
    this.height = undefined;
    this.slideItems = [];
    this.restoreSlideItemForm();
  }

  restoreSlideItemForm() {
    this.slideItem = { action: undefined, alt: undefined, image: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Slide clicked: \${action}\`);
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-slide-labs"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,De,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,he],encapsulation:2})}return n})();function Be(n,K){if(n&1){let l=Dx();Il(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),Qx(4),og(),Il(5,"div",6),Qx(6),og(),zl(7,"po-divider"),Il(8,"div",7),Qx(9),og(),Il(10,"po-button",8),ft("p-click",function(){let o=Xy(l).$implicit,d=Sx();return Qy(d.redirectLink(o.link))}),og()()()();}if(n&2){let l=K.$implicit;uo("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Lp(2),uo("background","white"),Lp(2),_w("",l.date," by ",l.author),Lp(2),yw(l.title),Lp(3),yw(l.description);}}var Se=(()=>{class n{sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles"]],standalone:false,decls:2,vars:1,consts:[["p-height","450",3,"p-slides"],["p-slide-content-template",""],[1,"sample-background-image"],[1,"po-row"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){a&1&&(Il(0,"po-slide",0),JE(1,Be,11,12,"ng-template",1),og()),a&2&&nw("p-slides",o.sampleItems);},dependencies:[Qt,mv,mNe,Lme],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n}),be=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Slide - Useful articles"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-slide p-height="450" [p-slides]="sampleItems">
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-useful-articles',
  templateUrl: './sample-po-slide-useful-articles.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideUsefulArticlesComponent {
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-slide-useful-articles"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,Se],encapsulation:2})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:"/assets/graphics/landscape-01.jpeg",alt:"On the road",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-02.jpeg",alt:"Birds flying over trees",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-03.jpeg",alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes"]],viewQuery:function(a,o){if(a&1&&Gl(Yo,7),a&2){let d;co(d=lo())&&(o.modal=d.first);}},standalone:false,decls:3,vars:2,consts:[["p-interval","0",3,"p-slides"],["p-title","Landscape detail"]],template:function(a,o){a&1&&(zl(0,"po-slide",0),Il(1,"po-modal",1),Qx(2),og()),a&2&&(nw("p-slides",o.landscapes),Lp(2),dg(" ",o.modalText,`
`));},dependencies:[Yo,mNe],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n}),Ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Slide - Landscapes"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalComponent, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-landscapes',
  templateUrl: './sample-po-slide-landscapes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideLandscapesComponent {
  @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;

  landscapes: Array<PoSlideItem> = [
    { image: '/assets/graphics/landscape-01.jpeg', alt: 'On the road', action: this.aboutLandscape.bind(this) },
    {
      image: '/assets/graphics/landscape-02.jpeg',
      alt: 'Birds flying over trees',
      action: this.aboutLandscape.bind(this)
    },
    { image: '/assets/graphics/landscape-03.jpeg', alt: 'That\`s a great sea', action: this.aboutLandscape.bind(this) }
  ];

  modalText: string;

  aboutLandscape(item: PoSlideItem) {
    this.modalText = item.alt;
    this.modal.open();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-slide-landscapes"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ze,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,fe],encapsulation:2})}return n})();var We=["slideComponent"];function Ne(n,K){if(n&1){let l=Dx();Il(0,"div",6)(1,"div",3)(2,"div",7)(3,"div",8),Qx(4),og(),Il(5,"div",9),Qx(6),og(),zl(7,"po-divider"),Il(8,"div",10),Qx(9),og(),Il(10,"po-button",11),ft("p-click",function(){let o=Xy(l).$implicit,d=Sx();return Qy(d.redirectLink(o.link))}),og()()()();}if(n&2){let l=K.$implicit;uo("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Lp(2),uo("background","white"),Lp(2),_w("",l.date," by ",l.author),Lp(2),yw(l.title),Lp(3),yw(l.description);}}var ve=(()=>{class n{slideComponent;nextLabel="Next";sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}nextBtn(){this.slideComponent.next();}previousBtn(){this.slideComponent.previous();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls"]],viewQuery:function(a,o){if(a&1&&Gl(We,7),a&2){let d;co(d=lo())&&(o.slideComponent=d.first);}},standalone:false,decls:6,vars:3,consts:[["slideComponent",""],["p-height","450","p-interval","0","p-hide-arrows","",3,"p-slides"],["p-slide-content-template",""],[1,"po-row"],["p-label","Previous",1,"po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],["p-label","Next",1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],[1,"sample-background-image"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){if(a&1&&(Il(0,"po-slide",1,0),JE(2,Ne,11,12,"ng-template",2),og(),Il(3,"div",3)(4,"po-button",4),ft("p-click",function(){return o.previousBtn()}),og(),Il(5,"po-button",5),ft("p-click",function(){return o.nextBtn()}),og()()),a&2){let d=Ax(1);nw("p-slides",o.sampleItems),Lp(4),nw("p-disabled",d.getCurrentSlideIndex()===0),Lp(),nw("p-disabled",d.getCurrentSlideIndex()===o.sampleItems.length-1);}},dependencies:[Qt,mv,mNe,Lme],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n}),ye=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Slide - External Controls"),og(),Il(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>

<div class="po-row">
  <po-button
    class="po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Previous"
    (p-click)="previousBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === 0"
  >
  </po-button>
  <po-button
    class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Next"
    (p-click)="nextBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === sampleItems.length - 1"
  >
  </po-button>
</div>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-external-controls',
  templateUrl: './sample-po-slide-external-controls.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideExternalControlsComponent {
  @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

  nextLabel: string = 'Next';
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }

  nextBtn() {
    this.slideComponent.next();
  }

  previousBtn() {
    this.slideComponent.previous();
  }
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-slide-external-controls"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Oe,o.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ve],encapsulation:2})}return n})();var xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-doc"]],standalone:false,decls:279,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-slide-content-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoSlideItem"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoSlideModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do componente "),Il(7,"code"),Qx(8,"po-slide"),og(),Qx(9,"."),og()(),Il(10,"h3",3),Qx(11,"Componente"),og(),Il(12,"h4",4)(13,"code",5),Qx(14,"PoSlideComponent"),og()(),Il(15,"div",2)(16,"p"),Qx(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Il(18,"strong")(19,"a",6),Qx(20,"p-slide-content-template"),og()(),Qx(21,"."),og(),Il(22,"h4"),Qx(23,"Boas pr\xE1ticas:"),og(),Il(24,"ul")(25,"li"),Qx(26,"Utilizar imagens no slide, mesmo quando possui conte\xFAdo personalizado."),og(),Il(27,"li"),Qx(28,"Evitar utilizar apenas um slide isolado, utilize pelo menos dois."),og(),Il(29,"li"),Qx(30,"Evitar utilizar mais de 5 slides, pois a ideia do componente \xE9 destacar apenas informa\xE7\xF5es importantes."),og()()(),Il(31,"div",7)(32,"h4",8),Qx(33,"Seletor"),og(),Il(34,"pre",9),Qx(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),og()(),Il(36,"h4",10),Qx(37,"Propriedades"),og(),Il(38,"table",11)(39,"tr",12)(40,"th",13),Qx(41,"Nome"),og(),Il(42,"th",13),Qx(43,"Tipo"),og(),Il(44,"th",13),Qx(45,"Padr\xE3o"),og(),Il(46,"th",13),Qx(47,"Descri\xE7\xE3o"),og()(),Il(48,"tr",14)(49,"td",15)(50,"div",16)(51,"span",17),Qx(52," p-height"),zl(53,"br"),og()()(),Il(54,"td",18)(55,"code",19),Qx(56,"number"),og()(),Il(57,"td",20)(58,"p")(59,"code"),Qx(60,"336"),og()()(),Il(61,"td",21)(62,"em")(63,"strong"),Qx(64,"(opcional)"),og()(),Il(65,"p"),Qx(66,"Altura do po-slide, caso seja slide com template customizado, n\xE3o assume o valor "),Il(67,"code"),Qx(68,"default"),og(),Qx(69,"."),og()()(),Il(70,"tr",14)(71,"td",15)(72,"div",16)(73,"span",17),Qx(74," p-hide-arrows"),zl(75,"br"),og()()(),Il(76,"td",18)(77,"code",22),Qx(78,"boolean"),og()(),Il(79,"td",20)(80,"p")(81,"code"),Qx(82,"false"),og()()(),Il(83,"td",21)(84,"em")(85,"strong"),Qx(86,"(opcional)"),og()(),Il(87,"p"),Qx(88,"Define a exibi\xE7\xE3o das setas de navega\xE7\xE3o."),og()()(),Il(89,"tr",14)(90,"td",15)(91,"div",16)(92,"span",17),Qx(93," p-interval"),zl(94,"br"),og()()(),Il(95,"td",18)(96,"code",19),Qx(97,"number"),og()(),Il(98,"td",20)(99,"p")(100,"code"),Qx(101,"4000"),og()()(),Il(102,"td",21)(103,"em")(104,"strong"),Qx(105,"(opcional)"),og()(),Il(106,"p"),Qx(107,"Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que "),Il(108,"code"),Qx(109,"1000"),og(),Qx(110," os slides n\xE3o trocam automaticamente."),og()()(),Il(111,"tr",14)(112,"td",15)(113,"div",16)(114,"span",17),Qx(115," p-slides"),zl(116,"br"),og()()(),Il(117,"td",18)(118,"code",23),Qx(119,"Array<PoSlideItem "),og(),Il(120,"code",24),Qx(121," string "),og(),Il(122,"code",25),Qx(123," any>"),og()(),Il(124,"td",20),Qx(125,"-"),og(),Il(126,"td",21)(127,"p"),Qx(128,"Array de imagens ou dados para o slide, pode ser de tr\xEAs formas:"),og(),Il(129,"ul")(130,"li"),Qx(131,"Array implementando objetos da interface "),Il(132,"code"),Qx(133,"PoSlideItem"),og(),Qx(134,":"),Il(135,"pre")(136,"code"),Qx(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),og()()(),Il(138,"li"),Qx(139,"Array de "),Il(140,"code"),Qx(141,"strings"),og(),Qx(142," com os caminhos das imagens:"),Il(143,"pre")(144,"code"),Qx(145,`['/assets/image-1', '/assets/image-2' ]
`),og()()(),Il(146,"li"),Qx(147,"Array com lista de itens (para utilizar template):"),Il(148,"pre")(149,"code"),Qx(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),og()()()(),Il(151,"blockquote")(152,"p"),Qx(153,"As setas de navega\xE7\xE3o e o controle com c\xEDrculos apenas ser\xE3o renderizados caso possua mais de um slide."),og()()()()(),Il(154,"h3",10),Qx(155,"M\xE9todos"),og(),Il(156,"table",26)(157,"tr",14)(158,"th",27)(159,"div",16)(160,"h4")(161,"span",17),Qx(162," getCurrentSlideIndex "),og()()()()(),Il(163,"tr",21)(164,"td",21)(165,"p"),Qx(166,"M\xE9todo que retorna o index do slide atual"),og(),Il(167,"pre")(168,"code"),Qx(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),og()()()()(),zl(170,"br"),Il(171,"table",26)(172,"tr",14)(173,"th",27)(174,"div",16)(175,"h4")(176,"span",17),Qx(177," next "),og()()()()(),Il(178,"tr",21)(179,"td",21)(180,"p"),Qx(181,"M\xE9todo para chamar o pr\xF3ximo slide."),og(),Il(182,"pre")(183,"code"),Qx(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),og()()()()(),zl(185,"br"),Il(186,"table",26)(187,"tr",14)(188,"th",27)(189,"div",16)(190,"h4")(191,"span",17),Qx(192," previous "),og()()()()(),Il(193,"tr",21)(194,"td",21)(195,"p"),Qx(196,"M\xE9todo para chamar o slide anterior."),og(),Il(197,"pre")(198,"code"),Qx(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),og()()()()(),zl(200,"br"),Il(201,"h3"),Qx(202,"Interfaces"),og(),Il(203,"h4",28)(204,"code",5),Qx(205,"PoSlideItem"),og()(),Il(206,"div",2)(207,"p"),Qx(208,"Interface que define cada objeto do "),Il(209,"code"),Qx(210,"PoSlideItem"),og(),Qx(211,"."),og()(),Il(212,"h4",10),Qx(213,"Propriedades"),og(),Il(214,"table",11)(215,"tr",12)(216,"th",13),Qx(217,"Nome"),og(),Il(218,"th",13),Qx(219,"Tipo"),og(),Il(220,"th",13),Qx(221,"Descri\xE7\xE3o"),og()(),Il(222,"tr",14)(223,"td",15)(224,"div",16)(225,"span",17),Qx(226," action"),zl(227,"br"),og()()(),Il(228,"td",18)(229,"code",29),Qx(230,"Function"),og()(),Il(231,"td",21)(232,"em")(233,"strong"),Qx(234,"(opcional)"),og()(),Il(235,"p"),Qx(236,"A\xE7\xE3o executada ao clicar no slide caso n\xE3o tenha link definido."),og()()(),Il(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),Qx(241," alt"),zl(242,"br"),og()()(),Il(243,"td",18)(244,"code",24),Qx(245,"string"),og()(),Il(246,"td",21)(247,"em")(248,"strong"),Qx(249,"(opcional)"),og()(),Il(250,"p"),Qx(251,"Texto que aparece quando a imagem n\xE3o \xE9 encontrada."),og()()(),Il(252,"tr",14)(253,"td",15)(254,"div",16)(255,"span",17),Qx(256," image"),zl(257,"br"),og()()(),Il(258,"td",18)(259,"code",24),Qx(260,"string"),og()(),Il(261,"td",21)(262,"p"),Qx(263,"Define o caminho da imagem."),og()()(),Il(264,"tr",14)(265,"td",15)(266,"div",16)(267,"span",17),Qx(268," link"),zl(269,"br"),og()()(),Il(270,"td",18)(271,"code",24),Qx(272,"string"),og()(),Il(273,"td",21)(274,"em")(275,"strong"),Qx(276,"(opcional)"),og()(),Il(277,"p"),Qx(278,"Link interno ou externo que ser\xE1 aberto ao clicar no slide."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var Ee=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(C(Xn),C(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),zl(3,"sample-po-slide-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),zl(5,"sample-po-slide-basic-view")(6,"sample-po-slide-labs-view")(7,"sample-po-slide-useful-articles-view")(8,"sample-po-slide-landscapes-view")(9,"sample-po-slide-external-controls-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[cNe,qme,Yme,ue,ge,be,Ce,ye,xe],encapsulation:2})}return n})();var Ge=[{path:"",component:Ee}],Pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[uL.forChild(Ge),uL]})}return n})();var Mt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[sr,Pe]})}return n})();export{Mt as DocPoSlideModule};