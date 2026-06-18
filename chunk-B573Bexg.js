import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,b as f,n as nb,cL as vn,W as W$1,w,b3 as nNe,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,a3 as cNe,X as we}from'./main-FCMDZGSJ.js';var Y=()=>({property:"name"}),$=o=>[o],ee=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&zl(0,"po-dynamic-view",0),a&2&&nw("p-fields",uN(3,$,lN(2,Y)))("p-value",lN(5,ee));},dependencies:[nNe],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o}),N=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic View Basic"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dynamic-view-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ie,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,_],encapsulation:2})}return o})();var R=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:false,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0),zl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),nw("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",true));},dependencies:[nNe,cNe],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic View - Employee"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dynamic-view-employee"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ae,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,R],encapsulation:2})}return o})();var O=(()=>{class o{httpClient=f(nb);headers=new vn({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(W$1(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a;}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:true,fieldLabel:"city",fieldValue:"id",concatLabelValue:true},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:true,alt:"image",height:"250"}];_newService=f(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002});}customEmployeeData(){return {value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:true,color:"color-07",order:2},{property:"rg",tag:true,color:"color-07",order:3},{property:"wage",type:"string",tag:true,color:"color-07"},{property:"genre",visible:false},{property:"job",tag:false},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return "confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:false,features:[we([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0),zl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),nw("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee));},dependencies:[nNe,cNe],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic View - Employee on load"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),og(),Il(21,"label",6),Qx(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  private httpClient = inject(HttpClient);

  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-dynamic-view-employee-on-load"),og(),zl(27,"hr")),a&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,me,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,J],encapsulation:2})}return o})();var U=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:false,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0),zl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),nw("p-fields",l.fields)("p-value",l.employee));},dependencies:[nNe,cNe],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic View - Employee on load"),og(),Il(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dynamic-view-container"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,se,l.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,U],encapsulation:2})}return o})();var X=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:false,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Componente"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoDynamicViewComponent"),og()(),Il(10,"div",2)(11,"p"),Qx(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),og(),Il(13,"blockquote")(14,"p"),Qx(15,"Por padr\xE3o esse componente cria "),Il(16,"code"),Qx(17,"po-info"),og(),Qx(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),Il(19,"code"),Qx(20,"po-tag"),og(),Qx(21," passando a propriedade { tag: true }. "),og()()(),Il(22,"div",6)(23,"h4",7),Qx(24,"Seletor"),og(),Il(25,"pre",8),Qx(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),og()(),Il(27,"h4",9),Qx(28,"Propriedades"),og(),Il(29,"table",10)(30,"tr",11)(31,"th",12),Qx(32,"Nome"),og(),Il(33,"th",12),Qx(34,"Tipo"),og(),Il(35,"th",12),Qx(36,"Padr\xE3o"),og(),Il(37,"th",12),Qx(38,"Descri\xE7\xE3o"),og()(),Il(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),Qx(43," p-components-size"),zl(44,"br"),og()()(),Il(45,"td",17)(46,"code",18),Qx(47,"string"),og()(),Il(48,"td",19)(49,"p")(50,"code"),Qx(51,"medium"),og()()(),Il(52,"td",20)(53,"em")(54,"strong"),Qx(55,"(opcional)"),og()(),Il(56,"p"),Qx(57,"Define o tamanho dos componentes no template entre "),Il(58,"code"),Qx(59,"small"),og(),Qx(60," ou "),Il(61,"code"),Qx(62,"medium"),og(),Qx(63,"."),og(),Il(64,"blockquote")(65,"p"),Qx(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(67,"code"),Qx(68,"medium"),og(),Qx(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(70,"a",21),Qx(71,"po-theme"),og(),Qx(72,"."),og()()()(),Il(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),Qx(77," p-fields"),zl(78,"br"),og()()(),Il(79,"td",17)(80,"code",22),Qx(81,"PoDynamicViewField[]"),og()(),Il(82,"td",19)(83,"p")(84,"code"),Qx(85,"[]"),og()()(),Il(86,"td",20)(87,"em")(88,"strong"),Qx(89,"(opcional)"),og()(),Il(90,"p"),Qx(91,"Lista de objetos que implementam a interface "),Il(92,"code"),Qx(93,"PoDynamicView"),og(),Qx(94,"."),og(),Il(95,"blockquote")(96,"p"),Qx(97,"Ex: "),Il(98,"code"),Qx(99,"[ { property: 'age' } ]"),og()()(),Il(100,"p"),Qx(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),og(),Il(102,"ul")(103,"li"),Qx(104,"Caso o "),Il(105,"em"),Qx(106,"type"),og(),Qx(107," informado seja "),Il(108,"em"),Qx(109,"currency"),og(),Qx(110," e n\xE3o seja informado o "),Il(111,"em"),Qx(112,"format"),og(),Qx(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),og(),Il(114,"li"),Qx(115,"Caso o "),Il(116,"em"),Qx(117,"type"),og(),Qx(118," informado seja "),Il(119,"em"),Qx(120,"date"),og(),Qx(121," e n\xE3o seja informado o "),Il(122,"em"),Qx(123,"format"),og(),Qx(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),og(),Il(125,"li"),Qx(126,"Caso o "),Il(127,"em"),Qx(128,"type"),og(),Qx(129," informado seja "),Il(130,"em"),Qx(131,"dateTime"),og(),Qx(132," e n\xE3o seja informado o "),Il(133,"em"),Qx(134,"format"),og(),Qx(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),og(),Il(136,"li"),Qx(137,"Caso o "),Il(138,"em"),Qx(139,"type"),og(),Qx(140," informado seja "),Il(141,"em"),Qx(142,"number"),og(),Qx(143," e n\xE3o seja informado o "),Il(144,"em"),Qx(145,"format"),og(),Qx(146," o mesmo n\xE3o ser\xE1 formatado."),og(),Il(147,"li"),Qx(148,"Caso o "),Il(149,"em"),Qx(150,"type"),og(),Qx(151," informado seja "),Il(152,"em"),Qx(153,"time"),og(),Qx(154," e n\xE3o seja informado o "),Il(155,"em"),Qx(156,"format"),og(),Qx(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),og()(),Il(158,"blockquote")(159,"p"),Qx(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),Il(161,"code"),Qx(162,"p-value"),og(),Qx(163,"."),og()()()(),Il(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),Qx(168," p-load"),zl(169,"br"),og()()(),Il(170,"td",17)(171,"code",18),Qx(172,"string "),og(),Il(173,"code",23),Qx(174," Function"),og()(),Il(175,"td",19),Qx(176,"-"),og(),Il(177,"td",20)(178,"em")(179,"strong"),Qx(180,"(opcional)"),og()(),Il(181,"p"),Qx(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),og(),Il(183,"p"),Qx(184,"A propriedade aceita os seguintes tipos:"),og(),Il(185,"ul")(186,"li")(187,"strong"),Qx(188,"String"),og(),Qx(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Il(190,"code"),Qx(191,"POST"),og(),Qx(192,"."),og(),Il(193,"li")(194,"strong"),Qx(195,"Function"),og(),Qx(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og()(),Il(197,"p"),Qx(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),og(),Il(199,"pre")(200,"code"),Qx(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),og()(),Il(202,"blockquote")(203,"p")(204,"strong"),Qx(205,"value"),og(),Qx(206,": any = atribui novo valor do model."),og()(),Il(207,"blockquote")(208,"p")(209,"strong"),Qx(210,"fields"),og(),Qx(211,": "),Il(212,"code"),Qx(213,"Array<PoDynamicViewField>"),og(),Qx(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),og()(),Il(215,"ul")(216,"li"),Qx(217,"Para esconder/remover campos precisa informar no field a propriedade "),Il(218,"code"),Qx(219,"visible = false"),og(),Qx(220,"."),og()()()(),Il(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),Qx(225," p-show-all-value"),zl(226,"br"),og()()(),Il(227,"td",17)(228,"code",24),Qx(229,"boolean"),og()(),Il(230,"td",19)(231,"p")(232,"code"),Qx(233,"false"),og()()(),Il(234,"td",20)(235,"em")(236,"strong"),Qx(237,"(opcional)"),og()(),Il(238,"p"),Qx(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),Il(240,"code"),Qx(241,"p-value"),og(),Qx(242,"."),og()()(),Il(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),Qx(247," p-text-wrap"),zl(248,"br"),og()()(),Il(249,"td",17)(250,"code",24),Qx(251,"boolean"),og()(),Il(252,"td",19)(253,"p")(254,"code"),Qx(255,"false"),og()()(),Il(256,"td",20)(257,"em")(258,"strong"),Qx(259,"(opcional)"),og()(),Il(260,"p"),Qx(261,"Permite a quebra de linha no texto do "),Il(262,"code"),Qx(263,"p-value"),og(),Qx(264,", aplicando-a onde h\xE1 "),Il(265,"code"),Qx(266,"\\n"),og(),Qx(267,"."),og(),Il(268,"pre")(269,"code"),Qx(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),og()(),Il(271,"p"),Qx(272,"Sa\xEDda:"),og(),Il(273,"pre")(274,"code"),Qx(275,`Primeira linha
Segunda linha
`),og()()()(),Il(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),Qx(280," p-value"),zl(281,"br"),og()()(),Il(282,"td",17)(283,"code",25),Qx(284,"object"),og()(),Il(285,"td",19),Qx(286,"-"),og(),Il(287,"td",20)(288,"p"),Qx(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),Il(290,"em"),Qx(291,"property"),og(),Qx(292,`
dos objetos contidos na propridade `),Il(293,"code"),Qx(294,"p-fields"),og(),Qx(295,"."),og(),Il(296,"blockquote")(297,"p"),Qx(298,"Ex: "),Il(299,"code"),Qx(300,"{ age: '35' }"),og()()()()()(),Il(301,"h3"),Qx(302,"Interfaces"),og(),Il(303,"h4",26)(304,"code",5),Qx(305,"PoDynamicViewRequest"),og()(),Il(306,"div",2)(307,"p"),Qx(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),og()(),Il(309,"h4",9),Qx(310,"M\xE9todos"),og(),Il(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),Qx(317," getObjectByValue "),og()()()()(),Il(318,"tr",20)(319,"td",20)(320,"p"),Qx(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og()()()(),Il(322,"h5")(323,"b"),Qx(324,"Par\xE2metros"),og()(),Il(325,"table",10)(326,"tr",11)(327,"th",12),Qx(328,"Nome"),og(),Il(329,"th",12),Qx(330,"Tipo"),og(),Il(331,"th",12),Qx(332,"Descri\xE7\xE3o"),og()(),Il(333,"tr",13)(334,"td",14),Qx(335," value"),og(),Il(336,"td",17)(337,"code",18),Qx(338," string "),og(),Il(339,"code",29),Qx(340," Array<any> "),og()(),Il(341,"td",20)(342,"p"),Qx(343,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Il(344,"tr",13)(345,"td",14),Qx(346," filterParams"),og(),Il(347,"td",17)(348,"code",30),Qx(349," any "),og()(),Il(350,"td",20)(351,"p"),Qx(352,"Valor opcional para informar filtros customizados."),og()()()(),zl(353,"br"),Il(354,"h4",26)(355,"code",5),Qx(356,"PoDynamicViewField"),og()(),Il(357,"div",2)(358,"p"),Qx(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),og()(),Il(360,"h4",9),Qx(361,"Propriedades"),og(),Il(362,"table",10)(363,"tr",11)(364,"th",12),Qx(365,"Nome"),og(),Il(366,"th",12),Qx(367,"Tipo"),og(),Il(368,"th",12),Qx(369,"Descri\xE7\xE3o"),og()(),Il(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),Qx(374," alt"),zl(375,"br"),og()()(),Il(376,"td",17)(377,"code",18),Qx(378,"string"),og()(),Il(379,"td",20)(380,"em")(381,"strong"),Qx(382,"(opcional)"),og()(),Il(383,"p"),Qx(384,"Defini o texto alternativo descrevendo a imagem."),og(),Il(385,"p"),Qx(386,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(387,"pre")(388,"code"),Qx(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),og()(),Il(390,"p")(391,"strong"),Qx(392,"Componentes compat\xEDveis:"),og(),Il(393,"code"),Qx(394,"po-image"),og(),Qx(395,"."),og()()(),Il(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),Qx(400," booleanFalse"),zl(401,"br"),og()()(),Il(402,"td",17)(403,"code",18),Qx(404,"string"),og()(),Il(405,"td",20)(406,"em")(407,"strong"),Qx(408,"(opcional)"),og()(),Il(409,"p"),Qx(410,"Texto exibido quando o valor do componente for "),Il(411,"em"),Qx(412,"false"),og(),Qx(413,"."),og()()(),Il(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),Qx(418," booleanTrue"),zl(419,"br"),og()()(),Il(420,"td",17)(421,"code",18),Qx(422,"string"),og()(),Il(423,"td",20)(424,"em")(425,"strong"),Qx(426,"(opcional)"),og()(),Il(427,"p"),Qx(428,"Texto exibido quando o valor do componente for "),Il(429,"em"),Qx(430,"true"),og(),Qx(431,"."),og()()(),Il(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),Qx(436," color"),zl(437,"br"),og()()(),Il(438,"td",17)(439,"code",18),Qx(440,"string"),og()(),Il(441,"td",20)(442,"em")(443,"strong"),Qx(444,"(opcional)"),og()(),Il(445,"p"),Qx(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),og(),Il(447,"ul")(448,"li"),Qx(449,"Hexadeximal, por exemplo "),Il(450,"code"),Qx(451,"#c64840"),og(),Qx(452,";"),og(),Il(453,"li"),Qx(454,"RGB, como "),Il(455,"code"),Qx(456,"rgb(0, 0, 165)"),og(),Qx(457,";"),og(),Il(458,"li"),Qx(459,"O nome da cor, por exemplo "),Il(460,"code"),Qx(461,"blue"),og(),Qx(462,";"),og(),Il(463,"li"),Qx(464,"Usando uma das cores do tema do PO:"),og(),Il(465,"li"),Qx(466,"Valores v\xE1lidos:"),Il(467,"ul")(468,"li"),zl(469,"span",31),Il(470,"code"),Qx(471,"color-01"),og()(),Il(472,"li"),zl(473,"span",32),Il(474,"code"),Qx(475,"color-02"),og()(),Il(476,"li"),zl(477,"span",33),Il(478,"code"),Qx(479,"color-03"),og()(),Il(480,"li"),zl(481,"span",34),Il(482,"code"),Qx(483,"color-04"),og()(),Il(484,"li"),zl(485,"span",35),Il(486,"code"),Qx(487,"color-05"),og()(),Il(488,"li"),zl(489,"span",36),Il(490,"code"),Qx(491,"color-06"),og()(),Il(492,"li"),zl(493,"span",37),Il(494,"code"),Qx(495,"color-07"),og()(),Il(496,"li"),zl(497,"span",38),Il(498,"code"),Qx(499,"color-08"),og()(),Il(500,"li"),zl(501,"span",39),Il(502,"code"),Qx(503,"color-09"),og()(),Il(504,"li"),zl(505,"span",40),Il(506,"code"),Qx(507,"color-10"),og()(),Il(508,"li"),zl(509,"span",41),Il(510,"code"),Qx(511,"color-11"),og()(),Il(512,"li"),zl(513,"span",42),Il(514,"code"),Qx(515,"color-12"),og()()()()()()(),Il(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),Qx(520," concatLabelValue"),zl(521,"br"),og()()(),Il(522,"td",17)(523,"code",24),Qx(524,"boolean"),og()(),Il(525,"td",20)(526,"em")(527,"strong"),Qx(528,"(opcional)"),og()(),Il(529,"p"),Qx(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),Il(531,"code"),Qx(532,"fieldLabel"),og(),Qx(533," + "),Il(534,"code"),Qx(535,"fieldValue"),og(),Qx(536,`.
A ordem sempre ser\xE1 `),Il(537,"code"),Qx(538,"fieldLabel"),og(),Qx(539," e depois "),Il(540,"code"),Qx(541,"fieldValue"),og(),Qx(542,", n\xE3o sendo poss\xEDvel alterar."),og(),Il(543,"blockquote")(544,"p"),Qx(545,"Propriedade funciona corretamente caso as propriedades "),Il(546,"code"),Qx(547,"fieldLabel"),og(),Qx(548," e "),Il(549,"code"),Qx(550,"fielValue"),og(),Qx(551," sejam v\xE1lidas."),og()()()(),Il(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),Qx(556," container"),zl(557,"br"),og()()(),Il(558,"td",17)(559,"code",18),Qx(560,"string"),og()(),Il(561,"td",20)(562,"em")(563,"strong"),Qx(564,"(opcional)"),og()(),Il(565,"p"),Qx(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Il(567,"p"),Qx(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Il(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),Qx(573," divider"),zl(574,"br"),og()()(),Il(575,"td",17)(576,"code",18),Qx(577,"string"),og()(),Il(578,"td",20)(579,"em")(580,"strong"),Qx(581,"(opcional)"),og()(),Il(582,"p"),Qx(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Il(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),Qx(588," fieldLabel"),zl(589,"br"),og()()(),Il(590,"td",17)(591,"code",18),Qx(592,"string"),og()(),Il(593,"td",20)(594,"em")(595,"strong"),Qx(596,"(opcional)"),og()(),Il(597,"p"),Qx(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Il(599,"p"),Qx(600,"O valor padr\xE3o \xE9: "),Il(601,"code"),Qx(602,"label"),og(),Qx(603,"."),og()()(),Il(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),Qx(608," fieldValue"),zl(609,"br"),og()()(),Il(610,"td",17)(611,"code",18),Qx(612,"string"),og()(),Il(613,"td",20)(614,"em")(615,"strong"),Qx(616,"(opcional)"),og()(),Il(617,"p"),Qx(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Il(619,"p"),Qx(620,"O valor padr\xE3o \xE9: "),Il(621,"code"),Qx(622,"value"),og(),Qx(623,"."),og()()(),Il(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),Qx(628," format"),zl(629,"br"),og()()(),Il(630,"td",17)(631,"code",18),Qx(632,"string "),og(),Il(633,"code",43),Qx(634," Array<string>"),og()(),Il(635,"td",20)(636,"em")(637,"strong"),Qx(638,"(opcional)"),og()(),Il(639,"p"),Qx(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),og(),Il(641,"ul")(642,"li")(643,"p"),Qx(644,"Quando "),Il(645,"code"),Qx(646,"format"),og(),Qx(647," \xE9 uma "),Il(648,"code"),Qx(649,"string"),og(),Qx(650,", o formato aplicado depende da propriedade "),Il(651,"strong"),Qx(652,"type"),og(),Qx(653," segue como usar cada tipo:"),og(),Il(654,"ul")(655,"li")(656,"code"),Qx(657,"currency"),og(),Qx(658,": Utiliza c\xF3digos de moeda definidos pelo "),Il(659,"a",44),Qx(660,"CurrencyPipe"),og(),Qx(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),og(),Il(662,"li")(663,"code"),Qx(664,"date"),og(),Qx(665,": Adota formatos de data especificados pelo "),Il(666,"a",45),Qx(667,"DatePipe"),og(),Qx(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og(),Il(669,"li")(670,"code"),Qx(671,"time"),og(),Qx(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),og(),Il(673,"li")(674,"code"),Qx(675,"number"),og(),Qx(676,": Usa especifica\xE7\xF5es do "),Il(677,"a",46),Qx(678,"DecimalPipe"),og(),Qx(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Il(680,"code"),Qx(681,"50"),og(),Qx(682,", formato "),Il(683,"code"),Qx(684,"'1.2-5'"),og(),Qx(685,", resulta em "),Il(686,"code"),Qx(687,"50.00"),og(),Qx(688,"."),og()()(),Il(689,"li")(690,"p"),Qx(691,"Quando "),Il(692,"code"),Qx(693,"format"),og(),Qx(694," \xE9 um "),Il(695,"code"),Qx(696,"Array<string>"),og(),Qx(697,":"),og(),Il(698,"ul")(699,"li"),Qx(700,"Cada elemento do array representa uma propriedade do objeto."),og(),Il(701,"li"),Qx(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),og(),Il(703,"li"),Qx(704,"Exemplo: Para "),Il(705,"code"),Qx(706,'format: ["id", "name"]'),og(),Qx(707," e um objeto "),Il(708,"code"),Qx(709,"{ id: 1, name: 'Carlos Diego' }"),og(),Qx(710,`,
o resultado ser\xE1 `),Il(711,"code"),Qx(712,"'1 - Carlos Diego'"),og(),Qx(713,"."),og()()()()()(),Il(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),Qx(718," gridColumns"),zl(719,"br"),og()()(),Il(720,"td",17)(721,"code",47),Qx(722,"number"),og()(),Il(723,"td",20)(724,"em")(725,"strong"),Qx(726,"(opcional)"),og()(),Il(727,"p"),Qx(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Il(729,"p"),Qx(730,"Deve ser usado o sistema de "),Il(731,"strong"),Qx(732,"grid"),og(),Qx(733," do PO (1 ... 12 colunas)."),og(),Il(734,"blockquote")(735,"p"),Qx(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Il(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),Qx(741," gridLgColumns"),zl(742,"br"),og()()(),Il(743,"td",17)(744,"code",47),Qx(745,"number"),og()(),Il(746,"td",20)(747,"em")(748,"strong"),Qx(749,"(opcional)"),og()(),Il(750,"p"),Qx(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Il(752,"p"),Qx(753,"Deve ser usado o sistema de "),Il(754,"strong"),Qx(755,"grid"),og(),Qx(756," do PO (1 ... 12 colunas)."),og(),Il(757,"blockquote")(758,"p"),Qx(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(760,"code"),Qx(761,"gridColumns"),og(),Qx(762,"."),og()()()(),Il(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),Qx(767," gridLgPull"),zl(768,"br"),og()()(),Il(769,"td",17)(770,"code",47),Qx(771,"number"),og()(),Il(772,"td",20)(773,"em")(774,"strong"),Qx(775,"(opcional)"),og()(),Il(776,"p"),Qx(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Il(778,"p"),Qx(779,"Deve ser usado o sistema de "),Il(780,"strong"),Qx(781,"grid"),og(),Qx(782," do PO (1 ... 11 colunas)."),og(),Il(783,"blockquote")(784,"p"),Qx(785,"Esta propriedade n\xE3o funciona com a propriedade "),Il(786,"code"),Qx(787,"gridColumns"),og(),Qx(788,". Deve-se especificar o tamanho da tela."),og()()()(),Il(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),Qx(793," gridMdColumns"),zl(794,"br"),og()()(),Il(795,"td",17)(796,"code",47),Qx(797,"number"),og()(),Il(798,"td",20)(799,"em")(800,"strong"),Qx(801,"(opcional)"),og()(),Il(802,"p"),Qx(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Il(804,"p"),Qx(805,"Deve ser usado o sistema de "),Il(806,"strong"),Qx(807,"grid"),og(),Qx(808," do PO (1 ... 12 colunas)."),og(),Il(809,"blockquote")(810,"p"),Qx(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(812,"code"),Qx(813,"gridColumns"),og(),Qx(814,"."),og()()()(),Il(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),Qx(819," gridMdPull"),zl(820,"br"),og()()(),Il(821,"td",17)(822,"code",47),Qx(823,"number"),og()(),Il(824,"td",20)(825,"em")(826,"strong"),Qx(827,"(opcional)"),og()(),Il(828,"p"),Qx(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Il(830,"p"),Qx(831,"Deve ser usado o sistema de "),Il(832,"strong"),Qx(833,"grid"),og(),Qx(834," do PO (1 ... 11 colunas)."),og(),Il(835,"blockquote")(836,"p"),Qx(837,"Esta propriedade n\xE3o funciona com a propriedade "),Il(838,"code"),Qx(839,"gridColumns"),og(),Qx(840,". Deve-se especificar o tamanho da tela."),og()()()(),Il(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),Qx(845," gridSmColumns"),zl(846,"br"),og()()(),Il(847,"td",17)(848,"code",47),Qx(849,"number"),og()(),Il(850,"td",20)(851,"em")(852,"strong"),Qx(853,"(opcional)"),og()(),Il(854,"p"),Qx(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Il(856,"p"),Qx(857,"Deve ser usado o sistema de "),Il(858,"strong"),Qx(859,"grid"),og(),Qx(860," do PO (1 ... 12 colunas)."),og(),Il(861,"blockquote")(862,"p"),Qx(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(864,"code"),Qx(865,"gridColumns"),og(),Qx(866,"."),og()()()(),Il(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),Qx(871," gridSmPull"),zl(872,"br"),og()()(),Il(873,"td",17)(874,"code",47),Qx(875,"number"),og()(),Il(876,"td",20)(877,"em")(878,"strong"),Qx(879,"(opcional)"),og()(),Il(880,"p"),Qx(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Il(882,"p"),Qx(883,"Deve ser usado o sistema de "),Il(884,"strong"),Qx(885,"grid"),og(),Qx(886," do PO (1 ... 11 colunas)."),og(),Il(887,"blockquote")(888,"p"),Qx(889,"Esta propriedade n\xE3o funciona com a propriedade "),Il(890,"code"),Qx(891,"gridColumns"),og(),Qx(892,". Deve-se especificar o tamanho da tela."),og()()()(),Il(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),Qx(897," gridXlColumns"),zl(898,"br"),og()()(),Il(899,"td",17)(900,"code",47),Qx(901,"number"),og()(),Il(902,"td",20)(903,"em")(904,"strong"),Qx(905,"(opcional)"),og()(),Il(906,"p"),Qx(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Il(908,"p"),Qx(909,"Deve ser usado o sistema de "),Il(910,"strong"),Qx(911,"grid"),og(),Qx(912," do PO (1 ... 12 colunas)."),og(),Il(913,"blockquote")(914,"p"),Qx(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(916,"code"),Qx(917,"gridColumns"),og(),Qx(918,"."),og()()()(),Il(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),Qx(923," gridXlPull"),zl(924,"br"),og()()(),Il(925,"td",17)(926,"code",47),Qx(927,"number"),og()(),Il(928,"td",20)(929,"em")(930,"strong"),Qx(931,"(opcional)"),og()(),Il(932,"p"),Qx(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Il(934,"p"),Qx(935,"Deve ser usado o sistema de "),Il(936,"strong"),Qx(937,"grid"),og(),Qx(938," do PO (1 ... 11 colunas)."),og(),Il(939,"blockquote")(940,"p"),Qx(941,"Esta propriedade n\xE3o funciona com a propriedade "),Il(942,"code"),Qx(943,"gridColumns"),og(),Qx(944,". Deve-se especificar o tamanho da tela."),og()()()(),Il(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),Qx(949," height"),zl(950,"br"),og()()(),Il(951,"td",17)(952,"code",18),Qx(953,"string"),og()(),Il(954,"td",20)(955,"em")(956,"strong"),Qx(957,"(opcional)"),og()(),Il(958,"p"),Qx(959,"Defini o texto alternativo descrevendo a imagem."),og(),Il(960,"p"),Qx(961,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(962,"pre")(963,"code"),Qx(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),og()(),Il(965,"p")(966,"strong"),Qx(967,"Componentes compat\xEDveis:"),og(),Il(968,"code"),Qx(969,"po-image"),og(),Qx(970,"."),og()()(),Il(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),Qx(975," icon"),zl(976,"br"),og()()(),Il(977,"td",17)(978,"code",18),Qx(979,"string"),og()(),Il(980,"td",20)(981,"em")(982,"strong"),Qx(983,"(opcional)"),og()(),Il(984,"p"),Qx(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),Il(986,"em"),Qx(987,"tag"),og(),Qx(988,"."),og(),Il(989,"blockquote")(990,"p"),Qx(991,"Veja os valores v\xE1lidos na "),Il(992,"a",48),Qx(993,"biblioteca de \xEDcones"),og(),Qx(994,"."),og()()()(),Il(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),Qx(999," image"),zl(1e3,"br"),og()()(),Il(1001,"td",17)(1002,"code",24),Qx(1003,"boolean"),og()(),Il(1004,"td",20)(1005,"em")(1006,"strong"),Qx(1007,"(opcional)"),og()(),Il(1008,"p"),Qx(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),og(),Il(1010,"p"),Qx(1011,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(1012,"pre")(1013,"code"),Qx(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),og()(),Il(1015,"ul")(1016,"li"),Qx(1017,"@default "),Il(1018,"code"),Qx(1019,"false"),og()()(),Il(1020,"p")(1021,"strong"),Qx(1022,"Componentes compat\xEDveis:"),og(),Il(1023,"code"),Qx(1024,"po-image"),og(),Qx(1025,"."),og()()(),Il(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),Qx(1030," isArrayOrObject"),zl(1031,"br"),og()()(),Il(1032,"td",17)(1033,"code",24),Qx(1034,"boolean"),og()(),Il(1035,"td",20)(1036,"em")(1037,"strong"),Qx(1038,"(opcional)"),og()(),Il(1039,"p"),Qx(1040,"Define que a propriedade "),Il(1041,"code"),Qx(1042,"property"),og(),Qx(1043," \xE9 uma lista ou um objeto."),og(),Il(1044,"blockquote")(1045,"p"),Qx(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),Il(1047,"code"),Qx(1048,"label"),og(),Qx(1049," e "),Il(1050,"code"),Qx(1051,"value"),og(),Qx(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Il(1053,"code"),Qx(1054,"fieldLabel"),og(),Qx(1055," e "),Il(1056,"code"),Qx(1057,"fieldValue"),og(),Qx(1058,`.
\xC9 ignorada caso a propriedade `),Il(1059,"code"),Qx(1060,"searchService"),og(),Qx(1061," esteja sendo utilizada."),og()()()(),Il(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),Qx(1066," key"),zl(1067,"br"),og()()(),Il(1068,"td",17)(1069,"code",24),Qx(1070,"boolean"),og()(),Il(1071,"td",20)(1072,"em")(1073,"strong"),Qx(1074,"(opcional)"),og()(),Il(1075,"p"),Qx(1076,"Identificador"),og()()(),Il(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),Qx(1081," label"),zl(1082,"br"),og()()(),Il(1083,"td",17)(1084,"code",18),Qx(1085,"string"),og()(),Il(1086,"td",20)(1087,"em")(1088,"strong"),Qx(1089,"(opcional)"),og()(),Il(1090,"p"),Qx(1091,"R\xF3tulo do campo exibido."),og(),Il(1092,"p"),Qx(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Il(1094,"code"),Qx(1095,"label"),og(),Qx(1096," o valor da propriedade "),Il(1097,"code"),Qx(1098,"property"),og(),Qx(1099," com a primeira letra em mai\xFAsculo."),og()()(),Il(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),Qx(1104," offsetColumns"),zl(1105,"br"),og()()(),Il(1106,"td",17)(1107,"code",47),Qx(1108,"number"),og()(),Il(1109,"td",20)(1110,"em")(1111,"strong"),Qx(1112,"(opcional)"),og()(),Il(1113,"p"),Qx(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Il(1115,"p"),Qx(1116,"Deve ser usado o sistema de "),Il(1117,"strong"),Qx(1118,"grid"),og(),Qx(1119," do PO (1 ... 12 colunas)."),og(),Il(1120,"blockquote")(1121,"p"),Qx(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Il(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),Qx(1127," offsetLgColumns"),zl(1128,"br"),og()()(),Il(1129,"td",17)(1130,"code",47),Qx(1131,"number"),og()(),Il(1132,"td",20)(1133,"em")(1134,"strong"),Qx(1135,"(opcional)"),og()(),Il(1136,"p"),Qx(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Il(1138,"p"),Qx(1139,"Deve ser usado o sistema de "),Il(1140,"strong"),Qx(1141,"grid"),og(),Qx(1142," do PO (1 ... 12 colunas)."),og(),Il(1143,"blockquote")(1144,"p"),Qx(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(1146,"code"),Qx(1147,"offsetColumns"),og(),Qx(1148,"."),og()()()(),Il(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),Qx(1153," offsetMdColumns"),zl(1154,"br"),og()()(),Il(1155,"td",17)(1156,"code",47),Qx(1157,"number"),og()(),Il(1158,"td",20)(1159,"em")(1160,"strong"),Qx(1161,"(opcional)"),og()(),Il(1162,"p"),Qx(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Il(1164,"p"),Qx(1165,"Deve ser usado o sistema de "),Il(1166,"strong"),Qx(1167,"grid"),og(),Qx(1168," do PO (1 ... 12 colunas)."),og(),Il(1169,"blockquote")(1170,"p"),Qx(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(1172,"code"),Qx(1173,"offsetColumns"),og(),Qx(1174,"."),og()()()(),Il(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),Qx(1179," offsetSmColumns"),zl(1180,"br"),og()()(),Il(1181,"td",17)(1182,"code",47),Qx(1183,"number"),og()(),Il(1184,"td",20)(1185,"em")(1186,"strong"),Qx(1187,"(opcional)"),og()(),Il(1188,"p"),Qx(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Il(1190,"p"),Qx(1191,"Deve ser usado o sistema de "),Il(1192,"strong"),Qx(1193,"grid"),og(),Qx(1194," do PO (1 ... 12 colunas)."),og(),Il(1195,"blockquote")(1196,"p"),Qx(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(1198,"code"),Qx(1199,"offsetColumns"),og(),Qx(1200,"."),og()()()(),Il(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),Qx(1205," offsetXlColumns"),zl(1206,"br"),og()()(),Il(1207,"td",17)(1208,"code",47),Qx(1209,"number"),og()(),Il(1210,"td",20)(1211,"em")(1212,"strong"),Qx(1213,"(opcional)"),og()(),Il(1214,"p"),Qx(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Il(1216,"p"),Qx(1217,"Deve ser usado o sistema de "),Il(1218,"strong"),Qx(1219,"grid"),og(),Qx(1220," do PO (1 ... 12 colunas)."),og(),Il(1221,"blockquote")(1222,"p"),Qx(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(1224,"code"),Qx(1225,"offsetColumns"),og(),Qx(1226,"."),og()()()(),Il(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),Qx(1231," options"),zl(1232,"br"),og()()(),Il(1233,"td",17)(1234,"code",49),Qx(1235,"Array<{ label: string; value: string "),og(),Il(1236,"code",50),Qx(1237,` number;
}>`),og()(),Il(1238,"td",20)(1239,"em")(1240,"strong"),Qx(1241,"(opcional)"),og()(),Il(1242,"p"),Qx(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),og(),Il(1244,"p"),Qx(1245,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(1246,"pre")(1247,"code"),Qx(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),og()(),Il(1249,"pre")(1250,"code"),Qx(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),og()()()(),Il(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),Qx(1256," optionsMulti"),zl(1257,"br"),og()()(),Il(1258,"td",17)(1259,"code",24),Qx(1260,"boolean"),og()(),Il(1261,"td",20)(1262,"em")(1263,"strong"),Qx(1264,"(opcional)"),og()(),Il(1265,"p"),Qx(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),og()()(),Il(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),Qx(1271," optionsService"),zl(1272,"br"),og()()(),Il(1273,"td",17)(1274,"code",18),Qx(1275,"string "),og(),Il(1276,"code",51),Qx(1277," PoComboFilter "),og(),Il(1278,"code",52),Qx(1279," PoMultiselectFilter"),og()(),Il(1280,"td",20)(1281,"em")(1282,"strong"),Qx(1283,"(opcional)"),og()(),Il(1284,"p"),Qx(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Il(1286,"strong"),Qx(1287,"Importante"),og()(),Il(1288,"blockquote")(1289,"p"),Qx(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Il(1291,"a",53),Qx(1292,"guia de API do PO UI"),og(),Qx(1293,"."),og()()()(),Il(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),Qx(1298," order"),zl(1299,"br"),og()()(),Il(1300,"td",17)(1301,"code",47),Qx(1302,"number"),og()(),Il(1303,"td",20)(1304,"em")(1305,"strong"),Qx(1306,"(opcional)"),og()(),Il(1307,"p"),Qx(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Il(1309,"p"),Qx(1310,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(1311,"pre")(1312,"code"),Qx(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),og()(),Il(1314,"p"),Qx(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),og(),Il(1316,"pre")(1317,"code"),Qx(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),og()(),Il(1319,"p"),Qx(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Il(1321,"p"),Qx(1322,"Campos sem "),Il(1323,"code"),Qx(1324,"order"),og(),Qx(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Il(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),Qx(1330," params"),zl(1331,"br"),og()()(),Il(1332,"td",17)(1333,"code",54),Qx(1334,"any"),og()(),Il(1335,"td",20)(1336,"em")(1337,"strong"),Qx(1338,"(opcional)"),og()(),Il(1339,"p"),Qx(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),Il(1341,"code"),Qx(1342,"searchService"),og(),Qx(1343," ou "),Il(1344,"code"),Qx(1345,"optionsService"),og(),Qx(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),og(),Il(1347,"p"),Qx(1348,"Por exemplo, para o par\xE2metro "),Il(1349,"code"),Qx(1350,"{ age: 23 }"),og(),Qx(1351," a URL da requisi\xE7\xE3o ficaria:"),og(),Il(1352,"p")(1353,"code"),Qx(1354,"url + /1?age=23"),og()()()(),Il(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),Qx(1359," property"),zl(1360,"br"),og()()(),Il(1361,"td",17)(1362,"code",18),Qx(1363,"string"),og()(),Il(1364,"td",20)(1365,"p"),Qx(1366,"Nome de refer\xEAncia do campo."),og()()(),Il(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),Qx(1371," searchService"),zl(1372,"br"),og()()(),Il(1373,"td",17)(1374,"code",18),Qx(1375,"string "),og(),Il(1376,"code",55),Qx(1377," PoDynamicViewRequest"),og()(),Il(1378,"td",20)(1379,"em")(1380,"strong"),Qx(1381,"(opcional)"),og()(),Il(1382,"p"),Qx(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Il(1384,"strong"),Qx(1385,"Importante:"),og()(),Il(1386,"blockquote")(1387,"p"),Qx(1388,"A propriedade "),Il(1389,"code"),Qx(1390,"property"),og(),Qx(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Il(1392,"a",53),Qx(1393,"guia de API do PO UI"),og(),Qx(1394,"."),og()()()(),Il(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),Qx(1399," tag"),zl(1400,"br"),og()()(),Il(1401,"td",17)(1402,"code",24),Qx(1403,"boolean"),og()(),Il(1404,"td",20)(1405,"em")(1406,"strong"),Qx(1407,"(opcional)"),og()(),Il(1408,"p"),Qx(1409,"Indica se o campo ser\xE1 um "),Il(1410,"code"),Qx(1411,"po-tag"),og(),Qx(1412,"."),og()()(),Il(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),Qx(1417," textColor"),zl(1418,"br"),og()()(),Il(1419,"td",17)(1420,"code",18),Qx(1421,"string"),og()(),Il(1422,"td",20)(1423,"em")(1424,"strong"),Qx(1425,"(opcional)"),og()(),Il(1426,"p"),Qx(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Il(1428,"ul")(1429,"li"),Qx(1430,"Hexadeximal, por exemplo "),Il(1431,"code"),Qx(1432,"#c64840"),og(),Qx(1433,";"),og(),Il(1434,"li"),Qx(1435,"RGB, como "),Il(1436,"code"),Qx(1437,"rgb(0, 0, 165)"),og(),Qx(1438,";"),og(),Il(1439,"li"),Qx(1440,"O nome da cor, por exemplo "),Il(1441,"code"),Qx(1442,"blue"),og(),Qx(1443,";"),og()()()(),Il(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),Qx(1448," type"),zl(1449,"br"),og()()(),Il(1450,"td",17)(1451,"code",18),Qx(1452,"string "),og(),Il(1453,"code",56),Qx(1454," PoDynamicFieldType"),og()(),Il(1455,"td",20)(1456,"em")(1457,"strong"),Qx(1458,"(opcional)"),og()(),Il(1459,"p"),Qx(1460,"Tipo do valor campo."),og(),Il(1461,"p"),Qx(1462,"Valores v\xE1lidos:"),og(),Il(1463,"ul")(1464,"li")(1465,"code"),Qx(1466,"boolean"),og(),Qx(1467,": Valores "),Il(1468,"em"),Qx(1469,"booleanos"),og(),Qx(1470,"."),og(),Il(1471,"li")(1472,"code"),Qx(1473,"currency"),og(),Qx(1474,": Valores monet\xE1rios."),og(),Il(1475,"li")(1476,"code"),Qx(1477,"decimal"),og(),Qx(1478,": Valores decimais."),og(),Il(1479,"li")(1480,"code"),Qx(1481,"date"),og(),Qx(1482,": Valores de datas."),Il(1483,"ul")(1484,"li"),Qx(1485,"Aceita os tipos "),Il(1486,"strong"),Qx(1487,"string"),og(),Qx(1488," e "),Il(1489,"strong"),Qx(1490,"Date"),og(),Qx(1491,` padr\xE3o do Javascript,
por exemplo: `),Il(1492,"code"),Qx(1493,"'2017-11-28'"),og(),Qx(1494," ou "),Il(1495,"code"),Qx(1496,"new Date(2017, 10, 28)"),og(),Qx(1497,"."),og()()(),Il(1498,"li")(1499,"code"),Qx(1500,"dateTime"),og(),Qx(1501,": Valor de data com hor\xE1rio."),Il(1502,"ul")(1503,"li"),Qx(1504,"Aceita o tipo "),Il(1505,"em"),Qx(1506,"string"),og(),Qx(1507," no formato "),Il(1508,"strong"),Qx(1509,"ISO-8601"),og(),Qx(1510," extendido "),Il(1511,"strong"),Qx(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),Qx(1513,`
e o tipo `),Il(1514,"strong"),Qx(1515,"Date"),og(),Qx(1516," padr\xE3o do Javascript, por exemplo: "),Il(1517,"code"),Qx(1518,"'2017-11-28T00:00:00-02:00'"),og(),Qx(1519," ou "),Il(1520,"code"),Qx(1521,"new Date(2017, 10, 28)"),og(),Qx(1522,"."),og()()(),Il(1523,"li")(1524,"code"),Qx(1525,"number"),og(),Qx(1526,": Valores num\xE9ricos."),og(),Il(1527,"li")(1528,"code"),Qx(1529,"string"),og(),Qx(1530,": Textos."),og(),Il(1531,"li")(1532,"code"),Qx(1533,"time"),og(),Qx(1534,": Valor do hor\xE1rio."),Il(1535,"ul")(1536,"li"),Qx(1537,"Aceita o tipo "),Il(1538,"strong"),Qx(1539,"string"),og(),Qx(1540," nos formatos "),Il(1541,"strong"),Qx(1542,"'HH:mm:ss'"),og(),Qx(1543," ou "),Il(1544,"strong"),Qx(1545,"'HH:mm:ss.ffffff'"),og(),Qx(1546,", por exemplo: "),Il(1547,"code"),Qx(1548,"'23:12:45'"),og(),Qx(1549,"."),og()()()()()(),Il(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),Qx(1554," visible"),zl(1555,"br"),og()()(),Il(1556,"td",17)(1557,"code",24),Qx(1558,"boolean"),og()(),Il(1559,"td",20)(1560,"em")(1561,"strong"),Qx(1562,"(opcional)"),og()(),Il(1563,"p"),Qx(1564,"Indica se o campo ser\xE1 vis\xEDvel."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var Q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-dynamic-view-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),zl(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),og()()()),a&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,N,G,W,Z,X],encapsulation:2})}return o})();var Ee=[{path:"",component:Q}],K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[uL.forChild(Ee),uL]})}return o})();var Ke=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,K]})}return o})();export{Ke as DocPoDynamicViewModule};