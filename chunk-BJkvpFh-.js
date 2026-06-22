import {f as fe$1,u as ue$1,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,aW as Yp,dx as pNe,H as Wl,Q as nw,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,bs as fN,aX as Z9,aF as G9,aY as q9,aG as _k,aZ as mk,b0 as Qt,b1 as mv,b4 as L3,aB as wx,aM as ww,aN as e0,bd as Nx,aO as Ew,aP as n0,dy as kme,a2 as JE,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as rNe,ct as fo,dz as _w,B as yw,aD as Ky,aT as nN,aE as Xy,aA as Mx}from'./main-WP3NAV7C.js';var _e=()=>["/assets/graphics/landscape-01.jpeg","/assets/graphics/landscape-02.jpeg"],ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic"]],standalone:false,decls:1,vars:2,consts:[[3,"p-slides"]],template:function(a,o){a&1&&Wl(0,"po-slide",0),a&2&&nw("p-slides",dN(1,_e));},dependencies:[pNe],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Slide Basic"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-slide-basic/sample-po-slide-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-slide-basic/sample-po-slide-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Te,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ce],encapsulation:2})}return n})();var he=(()=>{class n{poNotification=f(Yp);height;interval;slideItem;slideItems;ngOnInit(){this.restore();}addSlide(){let l=Object.assign({},this.slideItem);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.slideItems=[...this.slideItems,l],this.restoreSlideItemForm();}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm();}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0};}showAction(l){this.poNotification.success(`Slide clicked: ${l}`);}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs"]],standalone:false,decls:19,vars:10,consts:[["slideItemForm","ngForm"],["slidePropertiesForm","ngForm"],[3,"p-height","p-interval","p-slides"],["p-label","Slide Item"],[1,"po-row"],["name","slideAction","p-clean","","p-label","Slide action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideAlt","p-clean","","p-label","Slide alt",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideImage","p-clean","","p-help","Ex.: https://lorempixel.com/1024/768/","p-label","Slide image","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideLink","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","Slide link",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add slide",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Properties"],["name","interval","p-clean","","p-help","Ex.: 7000","p-label","Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-help","Ex.: 300","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let d=wx();Wl(0,"po-slide",2)(1,"po-divider",3),Sl(2,"form",null,0)(4,"div",4)(5,"po-input",5),ww("ngModelChange",function(r){return Ky(d),nN(o.slideItem.action,r)||(o.slideItem.action=r),Xy(r)}),og(),e0(),Sl(6,"po-input",6),ww("ngModelChange",function(r){return Ky(d),nN(o.slideItem.alt,r)||(o.slideItem.alt=r),Xy(r)}),og(),e0(),Sl(7,"po-input",7),ww("ngModelChange",function(r){return Ky(d),nN(o.slideItem.image,r)||(o.slideItem.image=r),Xy(r)}),og(),e0(),Sl(8,"po-input",8),ww("ngModelChange",function(r){return Ky(d),nN(o.slideItem.link,r)||(o.slideItem.link=r),Xy(r)}),og(),e0(),og(),Sl(9,"div",4)(10,"po-button",9),ft("p-click",function(){return o.addSlide()}),og()()(),Wl(11,"po-divider",10),Sl(12,"form",null,1)(14,"div",4)(15,"po-input",11),ww("ngModelChange",function(r){return Ky(d),nN(o.interval,r)||(o.interval=r),Xy(r)}),og(),e0(),Sl(16,"po-input",12),ww("ngModelChange",function(r){return Ky(d),nN(o.height,r)||(o.height=r),Xy(r)}),og(),e0(),og(),Sl(17,"div",4)(18,"po-button",13),ft("p-click",function(){Ky(d);let r=Nx(3),we=Nx(13);return r.reset(),we.reset(),Xy(o.restore())}),og()()();}if(a&2){let d=Nx(3);nw("p-height",o.height)("p-interval",o.interval)("p-slides",o.slideItems),Lp(5),Ew("ngModel",o.slideItem.action),n0(),Lp(),Ew("ngModel",o.slideItem.alt),n0(),Lp(),Ew("ngModel",o.slideItem.image),n0(),Lp(),Ew("ngModel",o.slideItem.link),n0(),Lp(2),nw("p-disabled",d.invalid),Lp(5),Ew("ngModel",o.interval),n0(),Lp(),Ew("ngModel",o.height),n0();}},dependencies:[Z9,G9,q9,_k,mk,Qt,mv,L3,pNe],encapsulation:2,changeDetection:1})}return n})();var De=n=>({"docs-sample-code-tabs":n}),ge=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Slide Labs"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-slide-labs/sample-po-slide-labs.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-slide-labs/sample-po-slide-labs.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-labs"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,De,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,he],encapsulation:2})}return n})();function Be(n,K){if(n&1){let l=wx();Sl(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),eN(4),og(),Sl(5,"div",6),eN(6),og(),Wl(7,"po-divider"),Sl(8,"div",7),eN(9),og(),Sl(10,"po-button",8),ft("p-click",function(){let o=Ky(l).$implicit,d=Mx();return Xy(d.redirectLink(o.link))}),og()()()();}if(n&2){let l=K.$implicit;fo("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Lp(2),fo("background","white"),Lp(2),_w("",l.date," by ",l.author),Lp(2),yw(l.title),Lp(3),yw(l.description);}}var Se=(()=>{class n{sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles"]],standalone:false,decls:2,vars:1,consts:[["p-height","450",3,"p-slides"],["p-slide-content-template",""],[1,"sample-background-image"],[1,"po-row"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){a&1&&(Sl(0,"po-slide",0),JE(1,Be,11,12,"ng-template",1),og()),a&2&&nw("p-slides",o.sampleItems);},dependencies:[Qt,mv,pNe,kme],encapsulation:2,changeDetection:1})}return n})();var Fe=n=>({"docs-sample-code-tabs":n}),be=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-useful-articles-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Slide - Useful articles"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-slide p-height="450" [p-slides]="sampleItems">
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-useful-articles"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Fe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,Se],encapsulation:2})}return n})();var fe=(()=>{class n{modal;landscapes=[{image:"/assets/graphics/landscape-01.jpeg",alt:"On the road",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-02.jpeg",alt:"Birds flying over trees",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-03.jpeg",alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(l){this.modalText=l.alt,this.modal.open();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes"]],viewQuery:function(a,o){if(a&1&&ql(Yo,7),a&2){let d;lo(d=uo())&&(o.modal=d.first);}},standalone:false,decls:3,vars:2,consts:[["p-interval","0",3,"p-slides"],["p-title","Landscape detail"]],template:function(a,o){a&1&&(Wl(0,"po-slide",0),Sl(1,"po-modal",1),eN(2),og()),a&2&&(nw("p-slides",o.landscapes),Lp(2),dg(" ",o.modalText,`
`));},dependencies:[Yo,pNe],encapsulation:2,changeDetection:1})}return n})();var ze=n=>({"docs-sample-code-tabs":n}),Ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-landscapes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Slide - Landscapes"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-landscapes"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ze,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,fe],encapsulation:2})}return n})();var We=["slideComponent"];function Ne(n,K){if(n&1){let l=wx();Sl(0,"div",6)(1,"div",3)(2,"div",7)(3,"div",8),eN(4),og(),Sl(5,"div",9),eN(6),og(),Wl(7,"po-divider"),Sl(8,"div",10),eN(9),og(),Sl(10,"po-button",11),ft("p-click",function(){let o=Ky(l).$implicit,d=Mx();return Xy(d.redirectLink(o.link))}),og()()()();}if(n&2){let l=K.$implicit;fo("background-image","url("+l.imagem+")")("background-size","cover")("height",100,"%"),Lp(2),fo("background","white"),Lp(2),_w("",l.date," by ",l.author),Lp(2),yw(l.title),Lp(3),yw(l.description);}}var ve=(()=>{class n{slideComponent;nextLabel="Next";sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(l){window.open(l,"_blank");}nextBtn(){this.slideComponent.next();}previousBtn(){this.slideComponent.previous();}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls"]],viewQuery:function(a,o){if(a&1&&ql(We,7),a&2){let d;lo(d=uo())&&(o.slideComponent=d.first);}},standalone:false,decls:6,vars:3,consts:[["slideComponent",""],["p-height","450","p-interval","0","p-hide-arrows","",3,"p-slides"],["p-slide-content-template",""],[1,"po-row"],["p-label","Previous",1,"po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],["p-label","Next",1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],[1,"sample-background-image"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(a,o){if(a&1&&(Sl(0,"po-slide",1,0),JE(2,Ne,11,12,"ng-template",2),og(),Sl(3,"div",3)(4,"po-button",4),ft("p-click",function(){return o.previousBtn()}),og(),Sl(5,"po-button",5),ft("p-click",function(){return o.nextBtn()}),og()()),a&2){let d=Nx(1);nw("p-slides",o.sampleItems),Lp(4),nw("p-disabled",d.getCurrentSlideIndex()===0),Lp(),nw("p-disabled",d.getCurrentSlideIndex()===o.sampleItems.length-1);}},dependencies:[Qt,mv,pNe,kme],encapsulation:2,changeDetection:1})}return n})();var Oe=n=>({"docs-sample-code-tabs":n}),ye=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-external-controls-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Slide - External Controls"),og(),Sl(4,"a",2),ft("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
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
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-slide-external-controls"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,Oe,o.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,ve],encapsulation:2})}return n})();var xe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-slide-doc"]],standalone:false,decls:279,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-slide-content-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoSlideItem"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoSlideModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),eN(6,"M\xF3dulo do componente "),Sl(7,"code"),eN(8,"po-slide"),og(),eN(9,"."),og()(),Sl(10,"h3",3),eN(11,"Componente"),og(),Sl(12,"h4",4)(13,"code",5),eN(14,"PoSlideComponent"),og()(),Sl(15,"div",2)(16,"p"),eN(17,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),Sl(18,"strong")(19,"a",6),eN(20,"p-slide-content-template"),og()(),eN(21,"."),og(),Sl(22,"h4"),eN(23,"Boas pr\xE1ticas:"),og(),Sl(24,"ul")(25,"li"),eN(26,"Utilizar imagens no slide, mesmo quando possui conte\xFAdo personalizado."),og(),Sl(27,"li"),eN(28,"Evitar utilizar apenas um slide isolado, utilize pelo menos dois."),og(),Sl(29,"li"),eN(30,"Evitar utilizar mais de 5 slides, pois a ideia do componente \xE9 destacar apenas informa\xE7\xF5es importantes."),og()()(),Sl(31,"div",7)(32,"h4",8),eN(33,"Seletor"),og(),Sl(34,"pre",9),eN(35,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),og()(),Sl(36,"h4",10),eN(37,"Propriedades"),og(),Sl(38,"table",11)(39,"tr",12)(40,"th",13),eN(41,"Nome"),og(),Sl(42,"th",13),eN(43,"Tipo"),og(),Sl(44,"th",13),eN(45,"Padr\xE3o"),og(),Sl(46,"th",13),eN(47,"Descri\xE7\xE3o"),og()(),Sl(48,"tr",14)(49,"td",15)(50,"div",16)(51,"span",17),eN(52," p-height"),Wl(53,"br"),og()()(),Sl(54,"td",18)(55,"code",19),eN(56,"number"),og()(),Sl(57,"td",20)(58,"p")(59,"code"),eN(60,"336"),og()()(),Sl(61,"td",21)(62,"em")(63,"strong"),eN(64,"(opcional)"),og()(),Sl(65,"p"),eN(66,"Altura do po-slide, caso seja slide com template customizado, n\xE3o assume o valor "),Sl(67,"code"),eN(68,"default"),og(),eN(69,"."),og()()(),Sl(70,"tr",14)(71,"td",15)(72,"div",16)(73,"span",17),eN(74," p-hide-arrows"),Wl(75,"br"),og()()(),Sl(76,"td",18)(77,"code",22),eN(78,"boolean"),og()(),Sl(79,"td",20)(80,"p")(81,"code"),eN(82,"false"),og()()(),Sl(83,"td",21)(84,"em")(85,"strong"),eN(86,"(opcional)"),og()(),Sl(87,"p"),eN(88,"Define a exibi\xE7\xE3o das setas de navega\xE7\xE3o."),og()()(),Sl(89,"tr",14)(90,"td",15)(91,"div",16)(92,"span",17),eN(93," p-interval"),Wl(94,"br"),og()()(),Sl(95,"td",18)(96,"code",19),eN(97,"number"),og()(),Sl(98,"td",20)(99,"p")(100,"code"),eN(101,"4000"),og()()(),Sl(102,"td",21)(103,"em")(104,"strong"),eN(105,"(opcional)"),og()(),Sl(106,"p"),eN(107,"Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que "),Sl(108,"code"),eN(109,"1000"),og(),eN(110," os slides n\xE3o trocam automaticamente."),og()()(),Sl(111,"tr",14)(112,"td",15)(113,"div",16)(114,"span",17),eN(115," p-slides"),Wl(116,"br"),og()()(),Sl(117,"td",18)(118,"code",23),eN(119,"Array<PoSlideItem "),og(),Sl(120,"code",24),eN(121," string "),og(),Sl(122,"code",25),eN(123," any>"),og()(),Sl(124,"td",20),eN(125,"-"),og(),Sl(126,"td",21)(127,"p"),eN(128,"Array de imagens ou dados para o slide, pode ser de tr\xEAs formas:"),og(),Sl(129,"ul")(130,"li"),eN(131,"Array implementando objetos da interface "),Sl(132,"code"),eN(133,"PoSlideItem"),og(),eN(134,":"),Sl(135,"pre")(136,"code"),eN(137,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),og()()(),Sl(138,"li"),eN(139,"Array de "),Sl(140,"code"),eN(141,"strings"),og(),eN(142," com os caminhos das imagens:"),Sl(143,"pre")(144,"code"),eN(145,`['/assets/image-1', '/assets/image-2' ]
`),og()()(),Sl(146,"li"),eN(147,"Array com lista de itens (para utilizar template):"),Sl(148,"pre")(149,"code"),eN(150,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),og()()()(),Sl(151,"blockquote")(152,"p"),eN(153,"As setas de navega\xE7\xE3o e o controle com c\xEDrculos apenas ser\xE3o renderizados caso possua mais de um slide."),og()()()()(),Sl(154,"h3",10),eN(155,"M\xE9todos"),og(),Sl(156,"table",26)(157,"tr",14)(158,"th",27)(159,"div",16)(160,"h4")(161,"span",17),eN(162," getCurrentSlideIndex "),og()()()()(),Sl(163,"tr",21)(164,"td",21)(165,"p"),eN(166,"M\xE9todo que retorna o index do slide atual"),og(),Sl(167,"pre")(168,"code"),eN(169,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),og()()()()(),Wl(170,"br"),Sl(171,"table",26)(172,"tr",14)(173,"th",27)(174,"div",16)(175,"h4")(176,"span",17),eN(177," next "),og()()()()(),Sl(178,"tr",21)(179,"td",21)(180,"p"),eN(181,"M\xE9todo para chamar o pr\xF3ximo slide."),og(),Sl(182,"pre")(183,"code"),eN(184,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),og()()()()(),Wl(185,"br"),Sl(186,"table",26)(187,"tr",14)(188,"th",27)(189,"div",16)(190,"h4")(191,"span",17),eN(192," previous "),og()()()()(),Sl(193,"tr",21)(194,"td",21)(195,"p"),eN(196,"M\xE9todo para chamar o slide anterior."),og(),Sl(197,"pre")(198,"code"),eN(199,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),og()()()()(),Wl(200,"br"),Sl(201,"h3"),eN(202,"Interfaces"),og(),Sl(203,"h4",28)(204,"code",5),eN(205,"PoSlideItem"),og()(),Sl(206,"div",2)(207,"p"),eN(208,"Interface que define cada objeto do "),Sl(209,"code"),eN(210,"PoSlideItem"),og(),eN(211,"."),og()(),Sl(212,"h4",10),eN(213,"Propriedades"),og(),Sl(214,"table",11)(215,"tr",12)(216,"th",13),eN(217,"Nome"),og(),Sl(218,"th",13),eN(219,"Tipo"),og(),Sl(220,"th",13),eN(221,"Descri\xE7\xE3o"),og()(),Sl(222,"tr",14)(223,"td",15)(224,"div",16)(225,"span",17),eN(226," action"),Wl(227,"br"),og()()(),Sl(228,"td",18)(229,"code",29),eN(230,"Function"),og()(),Sl(231,"td",21)(232,"em")(233,"strong"),eN(234,"(opcional)"),og()(),Sl(235,"p"),eN(236,"A\xE7\xE3o executada ao clicar no slide caso n\xE3o tenha link definido."),og()()(),Sl(237,"tr",14)(238,"td",15)(239,"div",16)(240,"span",17),eN(241," alt"),Wl(242,"br"),og()()(),Sl(243,"td",18)(244,"code",24),eN(245,"string"),og()(),Sl(246,"td",21)(247,"em")(248,"strong"),eN(249,"(opcional)"),og()(),Sl(250,"p"),eN(251,"Texto que aparece quando a imagem n\xE3o \xE9 encontrada."),og()()(),Sl(252,"tr",14)(253,"td",15)(254,"div",16)(255,"span",17),eN(256," image"),Wl(257,"br"),og()()(),Sl(258,"td",18)(259,"code",24),eN(260,"string"),og()(),Sl(261,"td",21)(262,"p"),eN(263,"Define o caminho da imagem."),og()()(),Sl(264,"tr",14)(265,"td",15)(266,"div",16)(267,"span",17),eN(268," link"),Wl(269,"br"),og()()(),Sl(270,"td",18)(271,"code",24),eN(272,"string"),og()(),Sl(273,"td",21)(274,"em")(275,"strong"),eN(276,"(opcional)"),og()(),Sl(277,"p"),eN(278,"Link interno ou externo que ser\xE1 aberto ao clicar no slide."),og()()()()());},dependencies:[Ka],encapsulation:2})}return n})();var Ee=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||n)(w(Xn),w(En))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:10,vars:4,consts:[["p-title","Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-slide-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-slide-basic-view")(6,"sample-po-slide-labs-view")(7,"sample-po-slide-useful-articles-view")(8,"sample-po-slide-landscapes-view")(9,"sample-po-slide-external-controls-view"),og()()()),a&2&&(nw("p-actions",o.actions),Lp(2),nw("p-active",o.activeTab==="doc"),Lp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[rNe,Bme,qme,ue,ge,be,Ce,ye,xe],encapsulation:2})}return n})();var Ge=[{path:"",component:Ee}],Pe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[hL.forChild(Ge),hL]})}return n})();var Mt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[sr,Pe]})}return n})();export{Mt as DocPoSlideModule};