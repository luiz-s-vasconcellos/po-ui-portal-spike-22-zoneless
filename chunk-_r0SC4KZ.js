import {f as fe,u as ue,s as sr,h as hL,w,c3 as Xn,E as En,U as Un,a as f,n as nb,cL as vn,G as G$1,I,b3 as eNe,H as Wl,Q as nw,bs as fN,a7 as dN,an as CO,aH as Ka,b8 as Bme,b9 as qme,F as Sl,z as eN,J as og,a1 as ft,L as Lp,ar as $x,au as dg,a3 as rNe,R as we}from'./main-WP3NAV7C.js';var Y=()=>({property:"name"}),$=o=>[o],ee=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&Wl(0,"po-dynamic-view",0),a&2&&nw("p-fields",fN(3,$,dN(2,Y)))("p-value",dN(5,ee));},dependencies:[eNe],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o}),N=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dynamic View Basic"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-view-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ie,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,_],encapsulation:2})}return o})();var R=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:false,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0),Wl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),nw("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",true));},dependencies:[eNe,rNe],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dynamic View - Employee"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-view-employee"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,ae,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,R],encapsulation:2})}return o})();var O=(()=>{class o{httpClient=f(nb);headers=new vn({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(G$1(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a;}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:true,fieldLabel:"city",fieldValue:"id",concatLabelValue:true},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:true,alt:"image",height:"250"}];_newService=f(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002});}customEmployeeData(){return {value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:true,color:"color-07",order:2},{property:"rg",tag:true,color:"color-07",order:3},{property:"wage",type:"string",tag:true,color:"color-07"},{property:"genre",visible:false},{property:"job",tag:false},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return "confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:false,features:[we([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0),Wl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),nw("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee));},dependencies:[eNe,rNe],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dynamic View - Employee on load"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Sl(21,"label",6),eN(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),og(),Sl(23,"pre",9),eN(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-dynamic-view-employee-on-load"),og(),Wl(27,"hr")),a&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,me,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,J],encapsulation:2})}return o})();var U=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:false,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0),Wl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),nw("p-fields",l.fields)("p-value",l.employee));},dependencies:[eNe,rNe],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),eN(3,"PO Dynamic View - Employee on load"),og(),Sl(4,"a",2),ft("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),eN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),eN(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),og(),Sl(13,"pre",7),eN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),eN(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),og(),Sl(19,"pre",9),eN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-view-container"),og(),Wl(23,"hr")),a&2&&(Lp(5),$x("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),nw("ngClass",fN(4,se,l.hideSampleCodeTabs)));},dependencies:[CO,Ka,Bme,qme,U],encapsulation:2})}return o})();var X=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:false,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),eN(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),og()(),Wl(4,"div",2),Sl(5,"h3",3),eN(6,"Componente"),og(),Sl(7,"h4",4)(8,"code",5),eN(9,"PoDynamicViewComponent"),og()(),Sl(10,"div",2)(11,"p"),eN(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),og(),Sl(13,"blockquote")(14,"p"),eN(15,"Por padr\xE3o esse componente cria "),Sl(16,"code"),eN(17,"po-info"),og(),eN(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),Sl(19,"code"),eN(20,"po-tag"),og(),eN(21," passando a propriedade { tag: true }. "),og()()(),Sl(22,"div",6)(23,"h4",7),eN(24,"Seletor"),og(),Sl(25,"pre",8),eN(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),og()(),Sl(27,"h4",9),eN(28,"Propriedades"),og(),Sl(29,"table",10)(30,"tr",11)(31,"th",12),eN(32,"Nome"),og(),Sl(33,"th",12),eN(34,"Tipo"),og(),Sl(35,"th",12),eN(36,"Padr\xE3o"),og(),Sl(37,"th",12),eN(38,"Descri\xE7\xE3o"),og()(),Sl(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),eN(43," p-components-size"),Wl(44,"br"),og()()(),Sl(45,"td",17)(46,"code",18),eN(47,"string"),og()(),Sl(48,"td",19)(49,"p")(50,"code"),eN(51,"medium"),og()()(),Sl(52,"td",20)(53,"em")(54,"strong"),eN(55,"(opcional)"),og()(),Sl(56,"p"),eN(57,"Define o tamanho dos componentes no template entre "),Sl(58,"code"),eN(59,"small"),og(),eN(60," ou "),Sl(61,"code"),eN(62,"medium"),og(),eN(63,"."),og(),Sl(64,"blockquote")(65,"p"),eN(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(67,"code"),eN(68,"medium"),og(),eN(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(70,"a",21),eN(71,"po-theme"),og(),eN(72,"."),og()()()(),Sl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),eN(77," p-fields"),Wl(78,"br"),og()()(),Sl(79,"td",17)(80,"code",22),eN(81,"PoDynamicViewField[]"),og()(),Sl(82,"td",19)(83,"p")(84,"code"),eN(85,"[]"),og()()(),Sl(86,"td",20)(87,"em")(88,"strong"),eN(89,"(opcional)"),og()(),Sl(90,"p"),eN(91,"Lista de objetos que implementam a interface "),Sl(92,"code"),eN(93,"PoDynamicView"),og(),eN(94,"."),og(),Sl(95,"blockquote")(96,"p"),eN(97,"Ex: "),Sl(98,"code"),eN(99,"[ { property: 'age' } ]"),og()()(),Sl(100,"p"),eN(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),og(),Sl(102,"ul")(103,"li"),eN(104,"Caso o "),Sl(105,"em"),eN(106,"type"),og(),eN(107," informado seja "),Sl(108,"em"),eN(109,"currency"),og(),eN(110," e n\xE3o seja informado o "),Sl(111,"em"),eN(112,"format"),og(),eN(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),og(),Sl(114,"li"),eN(115,"Caso o "),Sl(116,"em"),eN(117,"type"),og(),eN(118," informado seja "),Sl(119,"em"),eN(120,"date"),og(),eN(121," e n\xE3o seja informado o "),Sl(122,"em"),eN(123,"format"),og(),eN(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),og(),Sl(125,"li"),eN(126,"Caso o "),Sl(127,"em"),eN(128,"type"),og(),eN(129," informado seja "),Sl(130,"em"),eN(131,"dateTime"),og(),eN(132," e n\xE3o seja informado o "),Sl(133,"em"),eN(134,"format"),og(),eN(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),og(),Sl(136,"li"),eN(137,"Caso o "),Sl(138,"em"),eN(139,"type"),og(),eN(140," informado seja "),Sl(141,"em"),eN(142,"number"),og(),eN(143," e n\xE3o seja informado o "),Sl(144,"em"),eN(145,"format"),og(),eN(146," o mesmo n\xE3o ser\xE1 formatado."),og(),Sl(147,"li"),eN(148,"Caso o "),Sl(149,"em"),eN(150,"type"),og(),eN(151," informado seja "),Sl(152,"em"),eN(153,"time"),og(),eN(154," e n\xE3o seja informado o "),Sl(155,"em"),eN(156,"format"),og(),eN(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),og()(),Sl(158,"blockquote")(159,"p"),eN(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),Sl(161,"code"),eN(162,"p-value"),og(),eN(163,"."),og()()()(),Sl(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),eN(168," p-load"),Wl(169,"br"),og()()(),Sl(170,"td",17)(171,"code",18),eN(172,"string "),og(),Sl(173,"code",23),eN(174," Function"),og()(),Sl(175,"td",19),eN(176,"-"),og(),Sl(177,"td",20)(178,"em")(179,"strong"),eN(180,"(opcional)"),og()(),Sl(181,"p"),eN(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),og(),Sl(183,"p"),eN(184,"A propriedade aceita os seguintes tipos:"),og(),Sl(185,"ul")(186,"li")(187,"strong"),eN(188,"String"),og(),eN(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(190,"code"),eN(191,"POST"),og(),eN(192,"."),og(),Sl(193,"li")(194,"strong"),eN(195,"Function"),og(),eN(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og()(),Sl(197,"p"),eN(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),og(),Sl(199,"pre")(200,"code"),eN(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),og()(),Sl(202,"blockquote")(203,"p")(204,"strong"),eN(205,"value"),og(),eN(206,": any = atribui novo valor do model."),og()(),Sl(207,"blockquote")(208,"p")(209,"strong"),eN(210,"fields"),og(),eN(211,": "),Sl(212,"code"),eN(213,"Array<PoDynamicViewField>"),og(),eN(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),og()(),Sl(215,"ul")(216,"li"),eN(217,"Para esconder/remover campos precisa informar no field a propriedade "),Sl(218,"code"),eN(219,"visible = false"),og(),eN(220,"."),og()()()(),Sl(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),eN(225," p-show-all-value"),Wl(226,"br"),og()()(),Sl(227,"td",17)(228,"code",24),eN(229,"boolean"),og()(),Sl(230,"td",19)(231,"p")(232,"code"),eN(233,"false"),og()()(),Sl(234,"td",20)(235,"em")(236,"strong"),eN(237,"(opcional)"),og()(),Sl(238,"p"),eN(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),Sl(240,"code"),eN(241,"p-value"),og(),eN(242,"."),og()()(),Sl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),eN(247," p-text-wrap"),Wl(248,"br"),og()()(),Sl(249,"td",17)(250,"code",24),eN(251,"boolean"),og()(),Sl(252,"td",19)(253,"p")(254,"code"),eN(255,"false"),og()()(),Sl(256,"td",20)(257,"em")(258,"strong"),eN(259,"(opcional)"),og()(),Sl(260,"p"),eN(261,"Permite a quebra de linha no texto do "),Sl(262,"code"),eN(263,"p-value"),og(),eN(264,", aplicando-a onde h\xE1 "),Sl(265,"code"),eN(266,"\\n"),og(),eN(267,"."),og(),Sl(268,"pre")(269,"code"),eN(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),og()(),Sl(271,"p"),eN(272,"Sa\xEDda:"),og(),Sl(273,"pre")(274,"code"),eN(275,`Primeira linha
Segunda linha
`),og()()()(),Sl(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),eN(280," p-value"),Wl(281,"br"),og()()(),Sl(282,"td",17)(283,"code",25),eN(284,"object"),og()(),Sl(285,"td",19),eN(286,"-"),og(),Sl(287,"td",20)(288,"p"),eN(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),Sl(290,"em"),eN(291,"property"),og(),eN(292,`
dos objetos contidos na propridade `),Sl(293,"code"),eN(294,"p-fields"),og(),eN(295,"."),og(),Sl(296,"blockquote")(297,"p"),eN(298,"Ex: "),Sl(299,"code"),eN(300,"{ age: '35' }"),og()()()()()(),Sl(301,"h3"),eN(302,"Interfaces"),og(),Sl(303,"h4",26)(304,"code",5),eN(305,"PoDynamicViewRequest"),og()(),Sl(306,"div",2)(307,"p"),eN(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),og()(),Sl(309,"h4",9),eN(310,"M\xE9todos"),og(),Sl(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),eN(317," getObjectByValue "),og()()()()(),Sl(318,"tr",20)(319,"td",20)(320,"p"),eN(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og()()()(),Sl(322,"h5")(323,"b"),eN(324,"Par\xE2metros"),og()(),Sl(325,"table",10)(326,"tr",11)(327,"th",12),eN(328,"Nome"),og(),Sl(329,"th",12),eN(330,"Tipo"),og(),Sl(331,"th",12),eN(332,"Descri\xE7\xE3o"),og()(),Sl(333,"tr",13)(334,"td",14),eN(335," value"),og(),Sl(336,"td",17)(337,"code",18),eN(338," string "),og(),Sl(339,"code",29),eN(340," Array<any> "),og()(),Sl(341,"td",20)(342,"p"),eN(343,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Sl(344,"tr",13)(345,"td",14),eN(346," filterParams"),og(),Sl(347,"td",17)(348,"code",30),eN(349," any "),og()(),Sl(350,"td",20)(351,"p"),eN(352,"Valor opcional para informar filtros customizados."),og()()()(),Wl(353,"br"),Sl(354,"h4",26)(355,"code",5),eN(356,"PoDynamicViewField"),og()(),Sl(357,"div",2)(358,"p"),eN(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),og()(),Sl(360,"h4",9),eN(361,"Propriedades"),og(),Sl(362,"table",10)(363,"tr",11)(364,"th",12),eN(365,"Nome"),og(),Sl(366,"th",12),eN(367,"Tipo"),og(),Sl(368,"th",12),eN(369,"Descri\xE7\xE3o"),og()(),Sl(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),eN(374," alt"),Wl(375,"br"),og()()(),Sl(376,"td",17)(377,"code",18),eN(378,"string"),og()(),Sl(379,"td",20)(380,"em")(381,"strong"),eN(382,"(opcional)"),og()(),Sl(383,"p"),eN(384,"Defini o texto alternativo descrevendo a imagem."),og(),Sl(385,"p"),eN(386,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(387,"pre")(388,"code"),eN(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),og()(),Sl(390,"p")(391,"strong"),eN(392,"Componentes compat\xEDveis:"),og(),Sl(393,"code"),eN(394,"po-image"),og(),eN(395,"."),og()()(),Sl(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),eN(400," booleanFalse"),Wl(401,"br"),og()()(),Sl(402,"td",17)(403,"code",18),eN(404,"string"),og()(),Sl(405,"td",20)(406,"em")(407,"strong"),eN(408,"(opcional)"),og()(),Sl(409,"p"),eN(410,"Texto exibido quando o valor do componente for "),Sl(411,"em"),eN(412,"false"),og(),eN(413,"."),og()()(),Sl(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),eN(418," booleanTrue"),Wl(419,"br"),og()()(),Sl(420,"td",17)(421,"code",18),eN(422,"string"),og()(),Sl(423,"td",20)(424,"em")(425,"strong"),eN(426,"(opcional)"),og()(),Sl(427,"p"),eN(428,"Texto exibido quando o valor do componente for "),Sl(429,"em"),eN(430,"true"),og(),eN(431,"."),og()()(),Sl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),eN(436," color"),Wl(437,"br"),og()()(),Sl(438,"td",17)(439,"code",18),eN(440,"string"),og()(),Sl(441,"td",20)(442,"em")(443,"strong"),eN(444,"(opcional)"),og()(),Sl(445,"p"),eN(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),og(),Sl(447,"ul")(448,"li"),eN(449,"Hexadeximal, por exemplo "),Sl(450,"code"),eN(451,"#c64840"),og(),eN(452,";"),og(),Sl(453,"li"),eN(454,"RGB, como "),Sl(455,"code"),eN(456,"rgb(0, 0, 165)"),og(),eN(457,";"),og(),Sl(458,"li"),eN(459,"O nome da cor, por exemplo "),Sl(460,"code"),eN(461,"blue"),og(),eN(462,";"),og(),Sl(463,"li"),eN(464,"Usando uma das cores do tema do PO:"),og(),Sl(465,"li"),eN(466,"Valores v\xE1lidos:"),Sl(467,"ul")(468,"li"),Wl(469,"span",31),Sl(470,"code"),eN(471,"color-01"),og()(),Sl(472,"li"),Wl(473,"span",32),Sl(474,"code"),eN(475,"color-02"),og()(),Sl(476,"li"),Wl(477,"span",33),Sl(478,"code"),eN(479,"color-03"),og()(),Sl(480,"li"),Wl(481,"span",34),Sl(482,"code"),eN(483,"color-04"),og()(),Sl(484,"li"),Wl(485,"span",35),Sl(486,"code"),eN(487,"color-05"),og()(),Sl(488,"li"),Wl(489,"span",36),Sl(490,"code"),eN(491,"color-06"),og()(),Sl(492,"li"),Wl(493,"span",37),Sl(494,"code"),eN(495,"color-07"),og()(),Sl(496,"li"),Wl(497,"span",38),Sl(498,"code"),eN(499,"color-08"),og()(),Sl(500,"li"),Wl(501,"span",39),Sl(502,"code"),eN(503,"color-09"),og()(),Sl(504,"li"),Wl(505,"span",40),Sl(506,"code"),eN(507,"color-10"),og()(),Sl(508,"li"),Wl(509,"span",41),Sl(510,"code"),eN(511,"color-11"),og()(),Sl(512,"li"),Wl(513,"span",42),Sl(514,"code"),eN(515,"color-12"),og()()()()()()(),Sl(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),eN(520," concatLabelValue"),Wl(521,"br"),og()()(),Sl(522,"td",17)(523,"code",24),eN(524,"boolean"),og()(),Sl(525,"td",20)(526,"em")(527,"strong"),eN(528,"(opcional)"),og()(),Sl(529,"p"),eN(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),Sl(531,"code"),eN(532,"fieldLabel"),og(),eN(533," + "),Sl(534,"code"),eN(535,"fieldValue"),og(),eN(536,`.
A ordem sempre ser\xE1 `),Sl(537,"code"),eN(538,"fieldLabel"),og(),eN(539," e depois "),Sl(540,"code"),eN(541,"fieldValue"),og(),eN(542,", n\xE3o sendo poss\xEDvel alterar."),og(),Sl(543,"blockquote")(544,"p"),eN(545,"Propriedade funciona corretamente caso as propriedades "),Sl(546,"code"),eN(547,"fieldLabel"),og(),eN(548," e "),Sl(549,"code"),eN(550,"fielValue"),og(),eN(551," sejam v\xE1lidas."),og()()()(),Sl(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),eN(556," container"),Wl(557,"br"),og()()(),Sl(558,"td",17)(559,"code",18),eN(560,"string"),og()(),Sl(561,"td",20)(562,"em")(563,"strong"),eN(564,"(opcional)"),og()(),Sl(565,"p"),eN(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Sl(567,"p"),eN(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Sl(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),eN(573," divider"),Wl(574,"br"),og()()(),Sl(575,"td",17)(576,"code",18),eN(577,"string"),og()(),Sl(578,"td",20)(579,"em")(580,"strong"),eN(581,"(opcional)"),og()(),Sl(582,"p"),eN(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Sl(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),eN(588," fieldLabel"),Wl(589,"br"),og()()(),Sl(590,"td",17)(591,"code",18),eN(592,"string"),og()(),Sl(593,"td",20)(594,"em")(595,"strong"),eN(596,"(opcional)"),og()(),Sl(597,"p"),eN(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Sl(599,"p"),eN(600,"O valor padr\xE3o \xE9: "),Sl(601,"code"),eN(602,"label"),og(),eN(603,"."),og()()(),Sl(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),eN(608," fieldValue"),Wl(609,"br"),og()()(),Sl(610,"td",17)(611,"code",18),eN(612,"string"),og()(),Sl(613,"td",20)(614,"em")(615,"strong"),eN(616,"(opcional)"),og()(),Sl(617,"p"),eN(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Sl(619,"p"),eN(620,"O valor padr\xE3o \xE9: "),Sl(621,"code"),eN(622,"value"),og(),eN(623,"."),og()()(),Sl(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),eN(628," format"),Wl(629,"br"),og()()(),Sl(630,"td",17)(631,"code",18),eN(632,"string "),og(),Sl(633,"code",43),eN(634," Array<string>"),og()(),Sl(635,"td",20)(636,"em")(637,"strong"),eN(638,"(opcional)"),og()(),Sl(639,"p"),eN(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),og(),Sl(641,"ul")(642,"li")(643,"p"),eN(644,"Quando "),Sl(645,"code"),eN(646,"format"),og(),eN(647," \xE9 uma "),Sl(648,"code"),eN(649,"string"),og(),eN(650,", o formato aplicado depende da propriedade "),Sl(651,"strong"),eN(652,"type"),og(),eN(653," segue como usar cada tipo:"),og(),Sl(654,"ul")(655,"li")(656,"code"),eN(657,"currency"),og(),eN(658,": Utiliza c\xF3digos de moeda definidos pelo "),Sl(659,"a",44),eN(660,"CurrencyPipe"),og(),eN(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),og(),Sl(662,"li")(663,"code"),eN(664,"date"),og(),eN(665,": Adota formatos de data especificados pelo "),Sl(666,"a",45),eN(667,"DatePipe"),og(),eN(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og(),Sl(669,"li")(670,"code"),eN(671,"time"),og(),eN(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),og(),Sl(673,"li")(674,"code"),eN(675,"number"),og(),eN(676,": Usa especifica\xE7\xF5es do "),Sl(677,"a",46),eN(678,"DecimalPipe"),og(),eN(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Sl(680,"code"),eN(681,"50"),og(),eN(682,", formato "),Sl(683,"code"),eN(684,"'1.2-5'"),og(),eN(685,", resulta em "),Sl(686,"code"),eN(687,"50.00"),og(),eN(688,"."),og()()(),Sl(689,"li")(690,"p"),eN(691,"Quando "),Sl(692,"code"),eN(693,"format"),og(),eN(694," \xE9 um "),Sl(695,"code"),eN(696,"Array<string>"),og(),eN(697,":"),og(),Sl(698,"ul")(699,"li"),eN(700,"Cada elemento do array representa uma propriedade do objeto."),og(),Sl(701,"li"),eN(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),og(),Sl(703,"li"),eN(704,"Exemplo: Para "),Sl(705,"code"),eN(706,'format: ["id", "name"]'),og(),eN(707," e um objeto "),Sl(708,"code"),eN(709,"{ id: 1, name: 'Carlos Diego' }"),og(),eN(710,`,
o resultado ser\xE1 `),Sl(711,"code"),eN(712,"'1 - Carlos Diego'"),og(),eN(713,"."),og()()()()()(),Sl(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),eN(718," gridColumns"),Wl(719,"br"),og()()(),Sl(720,"td",17)(721,"code",47),eN(722,"number"),og()(),Sl(723,"td",20)(724,"em")(725,"strong"),eN(726,"(opcional)"),og()(),Sl(727,"p"),eN(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Sl(729,"p"),eN(730,"Deve ser usado o sistema de "),Sl(731,"strong"),eN(732,"grid"),og(),eN(733," do PO (1 ... 12 colunas)."),og(),Sl(734,"blockquote")(735,"p"),eN(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),eN(741," gridLgColumns"),Wl(742,"br"),og()()(),Sl(743,"td",17)(744,"code",47),eN(745,"number"),og()(),Sl(746,"td",20)(747,"em")(748,"strong"),eN(749,"(opcional)"),og()(),Sl(750,"p"),eN(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(752,"p"),eN(753,"Deve ser usado o sistema de "),Sl(754,"strong"),eN(755,"grid"),og(),eN(756," do PO (1 ... 12 colunas)."),og(),Sl(757,"blockquote")(758,"p"),eN(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(760,"code"),eN(761,"gridColumns"),og(),eN(762,"."),og()()()(),Sl(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),eN(767," gridLgPull"),Wl(768,"br"),og()()(),Sl(769,"td",17)(770,"code",47),eN(771,"number"),og()(),Sl(772,"td",20)(773,"em")(774,"strong"),eN(775,"(opcional)"),og()(),Sl(776,"p"),eN(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Sl(778,"p"),eN(779,"Deve ser usado o sistema de "),Sl(780,"strong"),eN(781,"grid"),og(),eN(782," do PO (1 ... 11 colunas)."),og(),Sl(783,"blockquote")(784,"p"),eN(785,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(786,"code"),eN(787,"gridColumns"),og(),eN(788,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),eN(793," gridMdColumns"),Wl(794,"br"),og()()(),Sl(795,"td",17)(796,"code",47),eN(797,"number"),og()(),Sl(798,"td",20)(799,"em")(800,"strong"),eN(801,"(opcional)"),og()(),Sl(802,"p"),eN(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(804,"p"),eN(805,"Deve ser usado o sistema de "),Sl(806,"strong"),eN(807,"grid"),og(),eN(808," do PO (1 ... 12 colunas)."),og(),Sl(809,"blockquote")(810,"p"),eN(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(812,"code"),eN(813,"gridColumns"),og(),eN(814,"."),og()()()(),Sl(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),eN(819," gridMdPull"),Wl(820,"br"),og()()(),Sl(821,"td",17)(822,"code",47),eN(823,"number"),og()(),Sl(824,"td",20)(825,"em")(826,"strong"),eN(827,"(opcional)"),og()(),Sl(828,"p"),eN(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Sl(830,"p"),eN(831,"Deve ser usado o sistema de "),Sl(832,"strong"),eN(833,"grid"),og(),eN(834," do PO (1 ... 11 colunas)."),og(),Sl(835,"blockquote")(836,"p"),eN(837,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(838,"code"),eN(839,"gridColumns"),og(),eN(840,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),eN(845," gridSmColumns"),Wl(846,"br"),og()()(),Sl(847,"td",17)(848,"code",47),eN(849,"number"),og()(),Sl(850,"td",20)(851,"em")(852,"strong"),eN(853,"(opcional)"),og()(),Sl(854,"p"),eN(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(856,"p"),eN(857,"Deve ser usado o sistema de "),Sl(858,"strong"),eN(859,"grid"),og(),eN(860," do PO (1 ... 12 colunas)."),og(),Sl(861,"blockquote")(862,"p"),eN(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(864,"code"),eN(865,"gridColumns"),og(),eN(866,"."),og()()()(),Sl(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),eN(871," gridSmPull"),Wl(872,"br"),og()()(),Sl(873,"td",17)(874,"code",47),eN(875,"number"),og()(),Sl(876,"td",20)(877,"em")(878,"strong"),eN(879,"(opcional)"),og()(),Sl(880,"p"),eN(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Sl(882,"p"),eN(883,"Deve ser usado o sistema de "),Sl(884,"strong"),eN(885,"grid"),og(),eN(886," do PO (1 ... 11 colunas)."),og(),Sl(887,"blockquote")(888,"p"),eN(889,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(890,"code"),eN(891,"gridColumns"),og(),eN(892,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),eN(897," gridXlColumns"),Wl(898,"br"),og()()(),Sl(899,"td",17)(900,"code",47),eN(901,"number"),og()(),Sl(902,"td",20)(903,"em")(904,"strong"),eN(905,"(opcional)"),og()(),Sl(906,"p"),eN(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(908,"p"),eN(909,"Deve ser usado o sistema de "),Sl(910,"strong"),eN(911,"grid"),og(),eN(912," do PO (1 ... 12 colunas)."),og(),Sl(913,"blockquote")(914,"p"),eN(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(916,"code"),eN(917,"gridColumns"),og(),eN(918,"."),og()()()(),Sl(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),eN(923," gridXlPull"),Wl(924,"br"),og()()(),Sl(925,"td",17)(926,"code",47),eN(927,"number"),og()(),Sl(928,"td",20)(929,"em")(930,"strong"),eN(931,"(opcional)"),og()(),Sl(932,"p"),eN(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Sl(934,"p"),eN(935,"Deve ser usado o sistema de "),Sl(936,"strong"),eN(937,"grid"),og(),eN(938," do PO (1 ... 11 colunas)."),og(),Sl(939,"blockquote")(940,"p"),eN(941,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(942,"code"),eN(943,"gridColumns"),og(),eN(944,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),eN(949," height"),Wl(950,"br"),og()()(),Sl(951,"td",17)(952,"code",18),eN(953,"string"),og()(),Sl(954,"td",20)(955,"em")(956,"strong"),eN(957,"(opcional)"),og()(),Sl(958,"p"),eN(959,"Defini o texto alternativo descrevendo a imagem."),og(),Sl(960,"p"),eN(961,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(962,"pre")(963,"code"),eN(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),og()(),Sl(965,"p")(966,"strong"),eN(967,"Componentes compat\xEDveis:"),og(),Sl(968,"code"),eN(969,"po-image"),og(),eN(970,"."),og()()(),Sl(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),eN(975," icon"),Wl(976,"br"),og()()(),Sl(977,"td",17)(978,"code",18),eN(979,"string"),og()(),Sl(980,"td",20)(981,"em")(982,"strong"),eN(983,"(opcional)"),og()(),Sl(984,"p"),eN(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),Sl(986,"em"),eN(987,"tag"),og(),eN(988,"."),og(),Sl(989,"blockquote")(990,"p"),eN(991,"Veja os valores v\xE1lidos na "),Sl(992,"a",48),eN(993,"biblioteca de \xEDcones"),og(),eN(994,"."),og()()()(),Sl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),eN(999," image"),Wl(1e3,"br"),og()()(),Sl(1001,"td",17)(1002,"code",24),eN(1003,"boolean"),og()(),Sl(1004,"td",20)(1005,"em")(1006,"strong"),eN(1007,"(opcional)"),og()(),Sl(1008,"p"),eN(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),og(),Sl(1010,"p"),eN(1011,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(1012,"pre")(1013,"code"),eN(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),og()(),Sl(1015,"ul")(1016,"li"),eN(1017,"@default "),Sl(1018,"code"),eN(1019,"false"),og()()(),Sl(1020,"p")(1021,"strong"),eN(1022,"Componentes compat\xEDveis:"),og(),Sl(1023,"code"),eN(1024,"po-image"),og(),eN(1025,"."),og()()(),Sl(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),eN(1030," isArrayOrObject"),Wl(1031,"br"),og()()(),Sl(1032,"td",17)(1033,"code",24),eN(1034,"boolean"),og()(),Sl(1035,"td",20)(1036,"em")(1037,"strong"),eN(1038,"(opcional)"),og()(),Sl(1039,"p"),eN(1040,"Define que a propriedade "),Sl(1041,"code"),eN(1042,"property"),og(),eN(1043," \xE9 uma lista ou um objeto."),og(),Sl(1044,"blockquote")(1045,"p"),eN(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),Sl(1047,"code"),eN(1048,"label"),og(),eN(1049," e "),Sl(1050,"code"),eN(1051,"value"),og(),eN(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Sl(1053,"code"),eN(1054,"fieldLabel"),og(),eN(1055," e "),Sl(1056,"code"),eN(1057,"fieldValue"),og(),eN(1058,`.
\xC9 ignorada caso a propriedade `),Sl(1059,"code"),eN(1060,"searchService"),og(),eN(1061," esteja sendo utilizada."),og()()()(),Sl(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),eN(1066," key"),Wl(1067,"br"),og()()(),Sl(1068,"td",17)(1069,"code",24),eN(1070,"boolean"),og()(),Sl(1071,"td",20)(1072,"em")(1073,"strong"),eN(1074,"(opcional)"),og()(),Sl(1075,"p"),eN(1076,"Identificador"),og()()(),Sl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),eN(1081," label"),Wl(1082,"br"),og()()(),Sl(1083,"td",17)(1084,"code",18),eN(1085,"string"),og()(),Sl(1086,"td",20)(1087,"em")(1088,"strong"),eN(1089,"(opcional)"),og()(),Sl(1090,"p"),eN(1091,"R\xF3tulo do campo exibido."),og(),Sl(1092,"p"),eN(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(1094,"code"),eN(1095,"label"),og(),eN(1096," o valor da propriedade "),Sl(1097,"code"),eN(1098,"property"),og(),eN(1099," com a primeira letra em mai\xFAsculo."),og()()(),Sl(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),eN(1104," offsetColumns"),Wl(1105,"br"),og()()(),Sl(1106,"td",17)(1107,"code",47),eN(1108,"number"),og()(),Sl(1109,"td",20)(1110,"em")(1111,"strong"),eN(1112,"(opcional)"),og()(),Sl(1113,"p"),eN(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Sl(1115,"p"),eN(1116,"Deve ser usado o sistema de "),Sl(1117,"strong"),eN(1118,"grid"),og(),eN(1119," do PO (1 ... 12 colunas)."),og(),Sl(1120,"blockquote")(1121,"p"),eN(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),eN(1127," offsetLgColumns"),Wl(1128,"br"),og()()(),Sl(1129,"td",17)(1130,"code",47),eN(1131,"number"),og()(),Sl(1132,"td",20)(1133,"em")(1134,"strong"),eN(1135,"(opcional)"),og()(),Sl(1136,"p"),eN(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(1138,"p"),eN(1139,"Deve ser usado o sistema de "),Sl(1140,"strong"),eN(1141,"grid"),og(),eN(1142," do PO (1 ... 12 colunas)."),og(),Sl(1143,"blockquote")(1144,"p"),eN(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1146,"code"),eN(1147,"offsetColumns"),og(),eN(1148,"."),og()()()(),Sl(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),eN(1153," offsetMdColumns"),Wl(1154,"br"),og()()(),Sl(1155,"td",17)(1156,"code",47),eN(1157,"number"),og()(),Sl(1158,"td",20)(1159,"em")(1160,"strong"),eN(1161,"(opcional)"),og()(),Sl(1162,"p"),eN(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(1164,"p"),eN(1165,"Deve ser usado o sistema de "),Sl(1166,"strong"),eN(1167,"grid"),og(),eN(1168," do PO (1 ... 12 colunas)."),og(),Sl(1169,"blockquote")(1170,"p"),eN(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1172,"code"),eN(1173,"offsetColumns"),og(),eN(1174,"."),og()()()(),Sl(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),eN(1179," offsetSmColumns"),Wl(1180,"br"),og()()(),Sl(1181,"td",17)(1182,"code",47),eN(1183,"number"),og()(),Sl(1184,"td",20)(1185,"em")(1186,"strong"),eN(1187,"(opcional)"),og()(),Sl(1188,"p"),eN(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(1190,"p"),eN(1191,"Deve ser usado o sistema de "),Sl(1192,"strong"),eN(1193,"grid"),og(),eN(1194," do PO (1 ... 12 colunas)."),og(),Sl(1195,"blockquote")(1196,"p"),eN(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1198,"code"),eN(1199,"offsetColumns"),og(),eN(1200,"."),og()()()(),Sl(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),eN(1205," offsetXlColumns"),Wl(1206,"br"),og()()(),Sl(1207,"td",17)(1208,"code",47),eN(1209,"number"),og()(),Sl(1210,"td",20)(1211,"em")(1212,"strong"),eN(1213,"(opcional)"),og()(),Sl(1214,"p"),eN(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(1216,"p"),eN(1217,"Deve ser usado o sistema de "),Sl(1218,"strong"),eN(1219,"grid"),og(),eN(1220," do PO (1 ... 12 colunas)."),og(),Sl(1221,"blockquote")(1222,"p"),eN(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1224,"code"),eN(1225,"offsetColumns"),og(),eN(1226,"."),og()()()(),Sl(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),eN(1231," options"),Wl(1232,"br"),og()()(),Sl(1233,"td",17)(1234,"code",49),eN(1235,"Array<{ label: string; value: string "),og(),Sl(1236,"code",50),eN(1237,` number;
}>`),og()(),Sl(1238,"td",20)(1239,"em")(1240,"strong"),eN(1241,"(opcional)"),og()(),Sl(1242,"p"),eN(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),og(),Sl(1244,"p"),eN(1245,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(1246,"pre")(1247,"code"),eN(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),og()(),Sl(1249,"pre")(1250,"code"),eN(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),og()()()(),Sl(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),eN(1256," optionsMulti"),Wl(1257,"br"),og()()(),Sl(1258,"td",17)(1259,"code",24),eN(1260,"boolean"),og()(),Sl(1261,"td",20)(1262,"em")(1263,"strong"),eN(1264,"(opcional)"),og()(),Sl(1265,"p"),eN(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),og()()(),Sl(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),eN(1271," optionsService"),Wl(1272,"br"),og()()(),Sl(1273,"td",17)(1274,"code",18),eN(1275,"string "),og(),Sl(1276,"code",51),eN(1277," PoComboFilter "),og(),Sl(1278,"code",52),eN(1279," PoMultiselectFilter"),og()(),Sl(1280,"td",20)(1281,"em")(1282,"strong"),eN(1283,"(opcional)"),og()(),Sl(1284,"p"),eN(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(1286,"strong"),eN(1287,"Importante"),og()(),Sl(1288,"blockquote")(1289,"p"),eN(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(1291,"a",53),eN(1292,"guia de API do PO UI"),og(),eN(1293,"."),og()()()(),Sl(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),eN(1298," order"),Wl(1299,"br"),og()()(),Sl(1300,"td",17)(1301,"code",47),eN(1302,"number"),og()(),Sl(1303,"td",20)(1304,"em")(1305,"strong"),eN(1306,"(opcional)"),og()(),Sl(1307,"p"),eN(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Sl(1309,"p"),eN(1310,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(1311,"pre")(1312,"code"),eN(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),og()(),Sl(1314,"p"),eN(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),og(),Sl(1316,"pre")(1317,"code"),eN(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),og()(),Sl(1319,"p"),eN(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Sl(1321,"p"),eN(1322,"Campos sem "),Sl(1323,"code"),eN(1324,"order"),og(),eN(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Sl(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),eN(1330," params"),Wl(1331,"br"),og()()(),Sl(1332,"td",17)(1333,"code",54),eN(1334,"any"),og()(),Sl(1335,"td",20)(1336,"em")(1337,"strong"),eN(1338,"(opcional)"),og()(),Sl(1339,"p"),eN(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),Sl(1341,"code"),eN(1342,"searchService"),og(),eN(1343," ou "),Sl(1344,"code"),eN(1345,"optionsService"),og(),eN(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),og(),Sl(1347,"p"),eN(1348,"Por exemplo, para o par\xE2metro "),Sl(1349,"code"),eN(1350,"{ age: 23 }"),og(),eN(1351," a URL da requisi\xE7\xE3o ficaria:"),og(),Sl(1352,"p")(1353,"code"),eN(1354,"url + /1?age=23"),og()()()(),Sl(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),eN(1359," property"),Wl(1360,"br"),og()()(),Sl(1361,"td",17)(1362,"code",18),eN(1363,"string"),og()(),Sl(1364,"td",20)(1365,"p"),eN(1366,"Nome de refer\xEAncia do campo."),og()()(),Sl(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),eN(1371," searchService"),Wl(1372,"br"),og()()(),Sl(1373,"td",17)(1374,"code",18),eN(1375,"string "),og(),Sl(1376,"code",55),eN(1377," PoDynamicViewRequest"),og()(),Sl(1378,"td",20)(1379,"em")(1380,"strong"),eN(1381,"(opcional)"),og()(),Sl(1382,"p"),eN(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Sl(1384,"strong"),eN(1385,"Importante:"),og()(),Sl(1386,"blockquote")(1387,"p"),eN(1388,"A propriedade "),Sl(1389,"code"),eN(1390,"property"),og(),eN(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(1392,"a",53),eN(1393,"guia de API do PO UI"),og(),eN(1394,"."),og()()()(),Sl(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),eN(1399," tag"),Wl(1400,"br"),og()()(),Sl(1401,"td",17)(1402,"code",24),eN(1403,"boolean"),og()(),Sl(1404,"td",20)(1405,"em")(1406,"strong"),eN(1407,"(opcional)"),og()(),Sl(1408,"p"),eN(1409,"Indica se o campo ser\xE1 um "),Sl(1410,"code"),eN(1411,"po-tag"),og(),eN(1412,"."),og()()(),Sl(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),eN(1417," textColor"),Wl(1418,"br"),og()()(),Sl(1419,"td",17)(1420,"code",18),eN(1421,"string"),og()(),Sl(1422,"td",20)(1423,"em")(1424,"strong"),eN(1425,"(opcional)"),og()(),Sl(1426,"p"),eN(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Sl(1428,"ul")(1429,"li"),eN(1430,"Hexadeximal, por exemplo "),Sl(1431,"code"),eN(1432,"#c64840"),og(),eN(1433,";"),og(),Sl(1434,"li"),eN(1435,"RGB, como "),Sl(1436,"code"),eN(1437,"rgb(0, 0, 165)"),og(),eN(1438,";"),og(),Sl(1439,"li"),eN(1440,"O nome da cor, por exemplo "),Sl(1441,"code"),eN(1442,"blue"),og(),eN(1443,";"),og()()()(),Sl(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),eN(1448," type"),Wl(1449,"br"),og()()(),Sl(1450,"td",17)(1451,"code",18),eN(1452,"string "),og(),Sl(1453,"code",56),eN(1454," PoDynamicFieldType"),og()(),Sl(1455,"td",20)(1456,"em")(1457,"strong"),eN(1458,"(opcional)"),og()(),Sl(1459,"p"),eN(1460,"Tipo do valor campo."),og(),Sl(1461,"p"),eN(1462,"Valores v\xE1lidos:"),og(),Sl(1463,"ul")(1464,"li")(1465,"code"),eN(1466,"boolean"),og(),eN(1467,": Valores "),Sl(1468,"em"),eN(1469,"booleanos"),og(),eN(1470,"."),og(),Sl(1471,"li")(1472,"code"),eN(1473,"currency"),og(),eN(1474,": Valores monet\xE1rios."),og(),Sl(1475,"li")(1476,"code"),eN(1477,"decimal"),og(),eN(1478,": Valores decimais."),og(),Sl(1479,"li")(1480,"code"),eN(1481,"date"),og(),eN(1482,": Valores de datas."),Sl(1483,"ul")(1484,"li"),eN(1485,"Aceita os tipos "),Sl(1486,"strong"),eN(1487,"string"),og(),eN(1488," e "),Sl(1489,"strong"),eN(1490,"Date"),og(),eN(1491,` padr\xE3o do Javascript,
por exemplo: `),Sl(1492,"code"),eN(1493,"'2017-11-28'"),og(),eN(1494," ou "),Sl(1495,"code"),eN(1496,"new Date(2017, 10, 28)"),og(),eN(1497,"."),og()()(),Sl(1498,"li")(1499,"code"),eN(1500,"dateTime"),og(),eN(1501,": Valor de data com hor\xE1rio."),Sl(1502,"ul")(1503,"li"),eN(1504,"Aceita o tipo "),Sl(1505,"em"),eN(1506,"string"),og(),eN(1507," no formato "),Sl(1508,"strong"),eN(1509,"ISO-8601"),og(),eN(1510," extendido "),Sl(1511,"strong"),eN(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),eN(1513,`
e o tipo `),Sl(1514,"strong"),eN(1515,"Date"),og(),eN(1516," padr\xE3o do Javascript, por exemplo: "),Sl(1517,"code"),eN(1518,"'2017-11-28T00:00:00-02:00'"),og(),eN(1519," ou "),Sl(1520,"code"),eN(1521,"new Date(2017, 10, 28)"),og(),eN(1522,"."),og()()(),Sl(1523,"li")(1524,"code"),eN(1525,"number"),og(),eN(1526,": Valores num\xE9ricos."),og(),Sl(1527,"li")(1528,"code"),eN(1529,"string"),og(),eN(1530,": Textos."),og(),Sl(1531,"li")(1532,"code"),eN(1533,"time"),og(),eN(1534,": Valor do hor\xE1rio."),Sl(1535,"ul")(1536,"li"),eN(1537,"Aceita o tipo "),Sl(1538,"strong"),eN(1539,"string"),og(),eN(1540," nos formatos "),Sl(1541,"strong"),eN(1542,"'HH:mm:ss'"),og(),eN(1543," ou "),Sl(1544,"strong"),eN(1545,"'HH:mm:ss.ffffff'"),og(),eN(1546,", por exemplo: "),Sl(1547,"code"),eN(1548,"'23:12:45'"),og(),eN(1549,"."),og()()()()()(),Sl(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),eN(1554," visible"),Wl(1555,"br"),og()()(),Sl(1556,"td",17)(1557,"code",24),eN(1558,"boolean"),og()(),Sl(1559,"td",20)(1560,"em")(1561,"strong"),eN(1562,"(opcional)"),og()(),Sl(1563,"p"),eN(1564,"Indica se o campo ser\xE1 vis\xEDvel."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var Q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-dynamic-view-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),Wl(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),og()()()),a&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[rNe,Bme,qme,N,G,W,Z,X],encapsulation:2})}return o})();var Ee=[{path:"",component:Q}],K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[hL.forChild(Ee),hL]})}return o})();var Ke=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,K]})}return o})();export{Ke as DocPoDynamicViewModule};