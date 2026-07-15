import {f as fe$1,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,I,c as f,aW as Yp,cK as gfe,a as r$1,b2 as Xhe,F as Wl,O as rw,bs as gN,a7 as pN,an as SO,aH as Ka,b8 as Ume,b9 as $me,C as Sl,y as rN,J as og,a1 as ft,L as Lp,ar as Gx,au as dg,b0 as Qt,aB as Ix,bd as kx,Q as we,av as ql,aw as lo,ax as uo,a3 as sNe,aD as Ky,aE as Xy}from'./main-TVDUJ47Y.js';var me=()=>({property:"name",required:true,showRequired:true}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&Wl(0,"po-dynamic-form",0),a&2&&rw("p-fields",gN(2,le,pN(1,me)));},dependencies:[Xhe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dynamic Form Basic"),og(),Sl(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),og()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-form-basic"),og(),Wl(23,"hr")),a&2&&(Lp(5),Gx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,pe,r.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,G],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=f(Yp);registerService=f(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:gfe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&ql(ce,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Ix();Wl(0,"po-dynamic-form",1,0)(2,"br"),Sl(3,"div",2)(4,"po-button",3),ft("p-click",function(){Ky(l);let I=kx(1);return r.poNotification.success("Data saved successfully!"),Xy(I.form.reset())}),og()();}if(a&2){let l=kx(1);rw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Lp(4),rw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Xhe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dynamic Form - Register"),og(),Sl(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="$safeNavigationMigration(dynamicForm?.form.invalid)"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoDynamicFormComponent
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];
  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    setTimeout(() => {
      const options = this.registerService.getCity(changedValue.value.state);
      this.updateDynamicFormField('city', { options, loading: false });
    }, 500);
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          disabled: false,
          loading: true
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }

  private updateDynamicFormField(property: string, updates: Partial<PoDynamicFormField>): void {
    const currentFields = this.dynamicForm?.fields ?? this.fields;
    const index = currentFields.findIndex(field => field.property === property);
    if (index >= 0) {
      currentFields[index] = { ...currentFields[index], ...updates };
      this.fields = [...currentFields];
    }
  }
}
`),og(),Sl(21,"label",6),rN(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-dynamic-form-register"),og(),Wl(27,"hr")),a&2&&(Lp(5),Gx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,Ee,r.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=f(Yp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:gfe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&ql(Se,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Ix();Wl(0,"po-dynamic-form",1,0)(2,"br"),Sl(3,"div",2)(4,"po-button",3),ft("p-click",function(){Ky(l);let I=kx(1);return r.poNotification.success("Data saved successfully!"),Xy(I.form.reset())}),og()();}if(a&2){let l=kx(1);rw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Lp(4),rw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Xhe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),rN(3,"PO Dynamic Form - Container"),og(),Sl(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),rN(6),og()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),rN(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),og(),Sl(13,"pre",7),rN(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="$safeNavigationMigration(dynamicForm?.form.invalid)"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),og()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),rN(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),og(),Sl(19,"pre",9),rN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),og(),Sl(21,"label",6),rN(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),og(),Sl(23,"pre",9),rN(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),og()()()()(),Sl(25,"div",10),Wl(26,"sample-po-dynamic-form-container"),og(),Wl(27,"hr")),a&2&&(Lp(5),Gx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),rw("ngClass",gN(4,ge,r.hideSampleCodeTabs)));},dependencies:[SO,Ka,Ume,$me,ie],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),og()(),Wl(4,"div",2),Sl(5,"h3",3),rN(6,"Componente"),og(),Sl(7,"h4",4)(8,"code",5),rN(9,"PoDynamicFormComponent"),og()(),Sl(10,"div",2)(11,"p"),rN(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),og(),Sl(13,"p"),rN(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),og()(),Sl(15,"div",6)(16,"h4",7),rN(17,"Seletor"),og(),Sl(18,"pre",8),rN(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),og()(),Sl(20,"h4",9),rN(21,"Propriedades"),og(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),rN(25,"Nome"),og(),Sl(26,"th",12),rN(27,"Tipo"),og(),Sl(28,"th",12),rN(29,"Padr\xE3o"),og(),Sl(30,"th",12),rN(31,"Descri\xE7\xE3o"),og()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),rN(36," p-auto-focus"),Wl(37,"br"),og()()(),Sl(38,"td",17)(39,"code",18),rN(40,"string"),og()(),Sl(41,"td",19),rN(42,"-"),og(),Sl(43,"td",20)(44,"em")(45,"strong"),rN(46,"(opcional)"),og()(),Sl(47,"p"),rN(48,"Nome da propriedade, atribu\xEDda ao "),Sl(49,"code"),rN(50,"PoDynamicFormField.property"),og(),rN(51,", que iniciar\xE1 o campo com foco."),og()()(),Sl(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),rN(56," p-components-size"),Wl(57,"br"),og()()(),Sl(58,"td",17)(59,"code",18),rN(60,"string"),og()(),Sl(61,"td",19)(62,"p")(63,"code"),rN(64,"medium"),og()()(),Sl(65,"td",20)(66,"em")(67,"strong"),rN(68,"(opcional)"),og()(),Sl(69,"p"),rN(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Sl(71,"ul")(72,"li")(73,"code"),rN(74,"small"),og(),rN(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(76,"li")(77,"code"),rN(78,"medium"),og(),rN(79,": aplica a medida medium de cada componente."),og()(),Sl(80,"blockquote")(81,"p"),rN(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(83,"code"),rN(84,"medium"),og(),rN(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(86,"a",21),rN(87,"po-theme"),og(),rN(88,"."),og()()()(),Sl(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),rN(93," p-fields"),Wl(94,"br"),og()()(),Sl(95,"td",17)(96,"code",22),rN(97,"Array<PoDynamicFormField>"),og()(),Sl(98,"td",19)(99,"p")(100,"code"),rN(101,"[]"),og()()(),Sl(102,"td",20)(103,"p"),rN(104,"Cole\xE7\xE3o de objetos que implementam a interface "),Sl(105,"code"),rN(106,"PoDynamicFormField"),og(),rN(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),og(),Sl(108,"blockquote")(109,"p"),rN(110,"Ex: "),Sl(111,"code"),rN(112,"[ { property: 'name' } ]"),og()()(),Sl(113,"p"),rN(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),og(),Sl(115,"ul")(116,"li"),rN(117,"Caso o "),Sl(118,"em"),rN(119,"type"),og(),rN(120," informado seja "),Sl(121,"em"),rN(122,"boolean"),og(),rN(123," o componente criado ser\xE1 o "),Sl(124,"code"),rN(125,"po-switch"),og(),rN(126,"."),og(),Sl(127,"li"),rN(128,"Caso o "),Sl(129,"em"),rN(130,"type"),og(),rN(131," informado seja "),Sl(132,"em"),rN(133,"currency"),og(),rN(134," e n\xE3o seja informado um "),Sl(135,"em"),rN(136,"mask"),og(),rN(137," ou "),Sl(138,"em"),rN(139,"pattern"),og(),rN(140," o componente criado ser\xE1 o "),Sl(141,"code"),rN(142,"po-decimal"),og(),rN(143,`,
caso seja informado um `),Sl(144,"em"),rN(145,"mask"),og(),rN(146," ou "),Sl(147,"em"),rN(148,"pattern"),og(),rN(149," o componente criado ser\xE1 o "),Sl(150,"code"),rN(151,"po-input"),og(),rN(152,"."),og(),Sl(153,"li"),rN(154,"Caso o "),Sl(155,"em"),rN(156,"type"),og(),rN(157," informado seja "),Sl(158,"em"),rN(159,"number"),og(),rN(160," e n\xE3o seja informado um "),Sl(161,"em"),rN(162,"mask"),og(),rN(163," ou "),Sl(164,"em"),rN(165,"pattern"),og(),rN(166," o componente criado ser\xE1 o "),Sl(167,"code"),rN(168,"po-number"),og(),rN(169,`, caso seja
informado um `),Sl(170,"em"),rN(171,"mask"),og(),rN(172," ou "),Sl(173,"em"),rN(174,"pattern"),og(),rN(175," o componente criado ser\xE1 o "),Sl(176,"code"),rN(177,"po-input"),og(),rN(178,"."),og(),Sl(179,"li"),rN(180,"Caso a lista possua a propriedade "),Sl(181,"code"),rN(182,"options"),og(),rN(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),Sl(184,"code"),rN(185,"po-radio-group"),og(),rN(186,`
ou `),Sl(187,"code"),rN(188,"po-checkbox-group"),og(),rN(189," se informar a propriedade "),Sl(190,"code"),rN(191,"optionsMulti"),og(),rN(192,"."),og(),Sl(193,"li"),rN(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),Sl(195,"code"),rN(196,"po-select"),og(),rN(197," ou, "),Sl(198,"code"),rN(199,"po-multiselect"),og(),rN(200," se a propriedade "),Sl(201,"code"),rN(202,"optionsMulti"),og(),rN(203,`
for verdadeira.`),og(),Sl(204,"li"),rN(205,"Caso o "),Sl(206,"em"),rN(207,"type"),og(),rN(208," informado seja "),Sl(209,"em"),rN(210,"date"),og(),rN(211," ou "),Sl(212,"em"),rN(213,"datetime"),og(),rN(214," o componente criado ser\xE1 o "),Sl(215,"code"),rN(216,"po-datepicker"),og(),rN(217,"."),og(),Sl(218,"li"),rN(219,"Caso seja informado a propriedade "),Sl(220,"code"),rN(221,"optionsService"),og(),rN(222," o componente criado ser\xE1 o "),Sl(223,"code"),rN(224,"po-combo"),og(),rN(225,"."),og(),Sl(226,"li"),rN(227,"Caso o "),Sl(228,"em"),rN(229,"type"),og(),rN(230," informado seja "),Sl(231,"em"),rN(232,"time"),og(),rN(233," o componente criado ser\xE1 um "),Sl(234,"code"),rN(235,"po-input"),og(),rN(236," podendo receber um "),Sl(237,"em"),rN(238,"mask"),og(),rN(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Sl(240,"em"),rN(241,"mask"),og(),rN(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),og(),Sl(243,"li"),rN(244,"Caso a lista possua a propriedade "),Sl(245,"code"),rN(246,"rows"),og(),rN(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Sl(248,"code"),rN(249,"po-textarea"),og(),rN(250,", caso o valor da propriedade "),Sl(251,"code"),rN(252,"rows"),og(),rN(253," seja menor que 3 o componente criado ser\xE1 o "),Sl(254,"code"),rN(255,"po-input"),og(),rN(256,"."),og(),Sl(257,"li"),rN(258,"Caso seja informada a propriedade "),Sl(259,"code"),rN(260,"secret"),og(),rN(261," o componente criado ser\xE1 o "),Sl(262,"code"),rN(263,"po-password"),og(),rN(264,"."),og(),Sl(265,"li"),rN(266,"Caso o "),Sl(267,"em"),rN(268,"type"),og(),rN(269," informado seja "),Sl(270,"em"),rN(271,"string"),og(),rN(272," o componente criado ser\xE1 o "),Sl(273,"code"),rN(274,"po-input"),og(),rN(275,"."),Sl(276,"blockquote")(277,"p"),rN(278,"Ao alterar o valor das "),Sl(279,"code"),rN(280,"properties"),og(),rN(281,", visibilidade e/ou agrupamentos via container, os "),Sl(282,"code"),rN(283,"fields"),og(),rN(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),og()()()()()(),Sl(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),rN(289," (p-form)"),Wl(290,"br"),og()()(),Sl(291,"td",17)(292,"code",25),rN(293,"EventEmitter"),og()(),Sl(294,"td",19),rN(295,"-"),og(),Sl(296,"td",20)(297,"em")(298,"strong"),rN(299,"(opcional)"),og()(),Sl(300,"p"),rN(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),og(),Sl(302,"p"),rN(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Sl(304,"em"),rN(305,"template reference"),og(),rN(306," e atrav\xE9s do "),Sl(307,"em"),rN(308,"output"),og(),rN(309,", veja os exemplos abaixo:"),og(),Sl(310,"blockquote")(311,"p")(312,"em"),rN(313,"template reference"),og()()(),Sl(314,"pre")(315,"code",26),rN(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),og()(),Sl(317,"blockquote")(318,"p")(319,"em"),rN(320,"Output"),og()()(),Sl(321,"pre")(322,"code",26),rN(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),og()(),Sl(324,"pre")(325,"code",27),rN(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),og()(),Sl(327,"blockquote")(328,"p"),rN(329,"Caso a propriedade "),Sl(330,"code"),rN(331,"p-group-form"),og(),rN(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),og()()()(),Sl(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),rN(337," p-group-form"),Wl(338,"br"),og()()(),Sl(339,"td",17)(340,"code",28),rN(341,"boolean"),og()(),Sl(342,"td",19),rN(343,"-"),og(),Sl(344,"td",20)(345,"em")(346,"strong"),rN(347,"(opcional)"),og()(),Sl(348,"p"),rN(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),Sl(350,"code"),rN(351,"FormControl"),og(),rN(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),og(),Sl(353,"pre")(354,"code",26),rN(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),og()()()(),Sl(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),rN(360," p-load"),Wl(361,"br"),og()()(),Sl(362,"td",17)(363,"code",18),rN(364,"string "),og(),Sl(365,"code",29),rN(366," Function"),og()(),Sl(367,"td",19),rN(368,"-"),og(),Sl(369,"td",20)(370,"em")(371,"strong"),rN(372,"(opcional)"),og()(),Sl(373,"p"),rN(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og(),Sl(375,"p"),rN(376,"A propriedade aceita os seguintes tipos:"),og(),Sl(377,"ul")(378,"li")(379,"code"),rN(380,"string"),og(),rN(381,": "),Sl(382,"em"),rN(383,"Endpoint"),og(),rN(384," usado pelo componente para requisi\xE7\xE3o via "),Sl(385,"code"),rN(386,"POST"),og(),rN(387,"."),og(),Sl(388,"li")(389,"code"),rN(390,"function"),og(),rN(391,": M\xE9todo que ser\xE1 executado."),og()(),Sl(392,"p"),rN(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),Sl(394,"code"),rN(395,"p-value"),og(),rN(396,"."),og(),Sl(397,"p"),rN(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(399,"a",30),rN(400,"PoDynamicFormLoad"),og(),rN(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),og(),Sl(402,"p"),rN(403,"Por exemplo:"),og(),Sl(404,"pre")(405,"code"),rN(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),og()(),Sl(407,"p"),rN(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(409,"code"),rN(410,"bind"),og(),rN(411,", por exemplo:"),og(),Sl(412,"pre")(413,"code"),rN(414,`[p-load]="onLoadFields.bind(this)"
`),og()()()(),Sl(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),rN(419," p-validate"),Wl(420,"br"),og()()(),Sl(421,"td",17)(422,"code",18),rN(423,"string "),og(),Sl(424,"code",29),rN(425," Function"),og()(),Sl(426,"td",19),rN(427,"-"),og(),Sl(428,"td",20)(429,"em")(430,"strong"),rN(431,"(opcional)"),og()(),Sl(432,"p"),rN(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(434,"strong"),rN(435,"mudan\xE7as do formul\xE1rio"),og(),rN(436,"."),og(),Sl(437,"p"),rN(438,"A propriedade aceita os seguintes tipos:"),og(),Sl(439,"ul")(440,"li")(441,"code"),rN(442,"string"),og(),rN(443,": "),Sl(444,"em"),rN(445,"Endpoint"),og(),rN(446," usado pelo componente para requisi\xE7\xE3o via "),Sl(447,"code"),rN(448,"POST"),og(),rN(449,"."),og(),Sl(450,"li")(451,"code"),rN(452,"function"),og(),rN(453,": M\xE9todo que ser\xE1 executado."),og()(),Sl(454,"p"),rN(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Sl(456,"code"),rN(457,"PoDynamicFormFieldChanged"),og()(),Sl(458,"p"),rN(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(460,"a",31),rN(461,"PoDynamicFormValidation"),og(),rN(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),og(),Sl(463,"pre")(464,"code"),rN(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),og()(),Sl(466,"p"),rN(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(468,"code"),rN(469,"bind"),og(),rN(470,", por exemplo:"),og(),Sl(471,"pre")(472,"code"),rN(473,`[p-validate]="this.myFunction.bind(this)"
`),og()(),Sl(474,"blockquote")(475,"p"),rN(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),Sl(477,"code"),rN(478,"p-validate-fields"),og(),rN(479,", a propriedade "),Sl(480,"code"),rN(481,"validate"),og(),rN(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),og()()()(),Sl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),rN(487," p-validate-fields"),Wl(488,"br"),og()()(),Sl(489,"td",17)(490,"code",32),rN(491,"Array<string>"),og()(),Sl(492,"td",19),rN(493,"-"),og(),Sl(494,"td",20)(495,"em")(496,"strong"),rN(497,"(opcional)"),og()(),Sl(498,"p"),rN(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),og()()(),Sl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),rN(504," p-validate-on-input"),Wl(505,"br"),og()()(),Sl(506,"td",17)(507,"code",28),rN(508,"boolean"),og()(),Sl(509,"td",19),rN(510,"-"),og(),Sl(511,"td",20)(512,"em")(513,"strong"),rN(514,"(opcional)"),og()(),Sl(515,"p"),rN(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),og(),Sl(517,"p"),rN(518,"Pode ser aplicado nos seguintes componentes:"),og(),Sl(519,"ul")(520,"li"),rN(521,"po-input"),og(),Sl(522,"li"),rN(523,"po-number"),og(),Sl(524,"li"),rN(525,"po-decimal"),og(),Sl(526,"li"),rN(527,"po-textarea"),og(),Sl(528,"li"),rN(529,"po-password"),og()(),Sl(530,"p"),rN(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),Sl(532,"code"),rN(533,"p-validate-fields"),og(),rN(534,"."),og()()(),Sl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),rN(539," p-value"),Wl(540,"br"),og()()(),Sl(541,"td",17)(542,"code",33),rN(543,"any"),og()(),Sl(544,"td",19),rN(545,"-"),og(),Sl(546,"td",20)(547,"p"),rN(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),Sl(549,"em"),rN(550,"property"),og(),rN(551,`
dos objetos contidos na propridade `),Sl(552,"code"),rN(553,"p-fields"),og(),rN(554,"."),og(),Sl(555,"p"),rN(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),og(),Sl(557,"blockquote")(558,"p"),rN(559,"Ex: "),Sl(560,"code"),rN(561,"{ name: 'po' }"),og()()()()()(),Sl(562,"h3",9),rN(563,"M\xE9todos"),og(),Sl(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),rN(570," focus "),og()()()()(),Sl(571,"tr",20)(572,"td",20)(573,"p"),rN(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),og(),Sl(575,"p"),rN(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),Sl(577,"code"),rN(578,"dynamic form"),og(),rN(579,", como por exemplo:"),og(),Sl(580,"pre")(581,"code",26),rN(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),og()(),Sl(583,"pre")(584,"code",36),rN(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),og()()()()(),Sl(586,"h5")(587,"b"),rN(588,"Par\xE2metros"),og()(),Sl(589,"table",10)(590,"tr",11)(591,"th",12),rN(592,"Nome"),og(),Sl(593,"th",12),rN(594,"Tipo"),og(),Sl(595,"th",12),rN(596,"Descri\xE7\xE3o"),og()(),Sl(597,"tr",13)(598,"td",14),rN(599," property"),og(),Sl(600,"td",17)(601,"code",37),rN(602," string "),og()(),Sl(603,"td",20)(604,"p"),rN(605,"Nome da propriedade atribu\xEDda ao "),Sl(606,"code"),rN(607,"PoDynamicFormField.property"),og(),rN(608,"."),og()()()(),Wl(609,"br"),Sl(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),rN(616," showAdditionalHelp "),og()()()()(),Sl(617,"tr",20)(618,"td",20)(619,"p"),rN(620,"M\xE9todo que exibe "),Sl(621,"code"),rN(622,"p-helper"),og(),rN(623," ou executa a a\xE7\xE3o definida em "),Sl(624,"code"),rN(625,"p-helper{eventOnClick}"),og(),rN(626," ou em "),Sl(627,"code"),rN(628,"p-additionalHelp"),og(),rN(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(630,"code"),rN(631,"keydown"),og(),rN(632,"."),og(),Sl(633,"pre")(634,"code"),rN(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),og()()()()(),Sl(636,"h5")(637,"b"),rN(638,"Par\xE2metros"),og()(),Sl(639,"table",10)(640,"tr",11)(641,"th",12),rN(642,"Nome"),og(),Sl(643,"th",12),rN(644,"Tipo"),og(),Sl(645,"th",12),rN(646,"Descri\xE7\xE3o"),og()(),Sl(647,"tr",13)(648,"td",14),rN(649," property"),og(),Sl(650,"td",17)(651,"code",37),rN(652," string "),og()(),Sl(653,"td",20)(654,"p"),rN(655,"Identificador da coluna."),og()()()(),Wl(656,"br"),Sl(657,"h3"),rN(658,"Interfaces"),og(),Sl(659,"h4",38)(660,"code",5),rN(661,"PoDynamicFormField"),og()(),Sl(662,"div",2)(663,"p"),rN(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),og()(),Sl(665,"h4",9),rN(666,"Propriedades"),og(),Sl(667,"table",10)(668,"tr",11)(669,"th",12),rN(670,"Nome"),og(),Sl(671,"th",12),rN(672,"Tipo"),og(),Sl(673,"th",12),rN(674,"Descri\xE7\xE3o"),og()(),Sl(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),rN(679," additionalHelp"),Wl(680,"br"),og()()(),Sl(681,"td",17)(682,"code",29),rN(683,"Function"),og()(),Sl(684,"td",20)(685,"em")(686,"strong"),rN(687,"(opcional)"),og()(),Sl(688,"p"),rN(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Sl(690,"blockquote")(691,"p"),rN(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Sl(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),rN(697," additionalHelpTooltip"),Wl(698,"br"),og()()(),Sl(699,"td",17)(700,"code",18),rN(701,"string"),og()(),Sl(702,"td",20)(703,"em")(704,"strong"),rN(705,"(opcional)"),og()(),Sl(706,"p"),rN(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(708,"code"),rN(709,"po-helper"),og(),rN(710,`.
`),Sl(711,"strong"),rN(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Sl(713,"blockquote")(714,"p"),rN(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Sl(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),rN(720," advancedFilters"),Wl(721,"br"),og()()(),Sl(722,"td",17)(723,"code",39),rN(724,"Array<PoLookupAdvancedFilter>"),og()(),Sl(725,"td",20)(726,"em")(727,"strong"),rN(728,"(opcional)"),og()(),Sl(729,"p"),rN(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Sl(731,"blockquote")(732,"p"),rN(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Sl(734,"p"),rN(735,"Exemplo de URL com busca avan\xE7ada:"),og(),Sl(736,"p")(737,"code"),rN(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Sl(739,"p"),rN(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Sl(741,"p")(742,"code"),rN(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Sl(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),rN(748," appendBox"),Wl(749,"br"),og()()(),Sl(750,"td",17)(751,"code",28),rN(752,"boolean"),og()(),Sl(753,"td",20)(754,"em")(755,"strong"),rN(756,"(opcional)"),og()(),Sl(757,"p"),rN(758,"Define que o "),Sl(759,"code"),rN(760,"listbox"),og(),rN(761," e/ou popover ("),Sl(762,"code"),rN(763,"p-helper"),og(),rN(764," e/ou "),Sl(765,"code"),rN(766,"p-error-limit"),og(),rN(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Sl(768,"blockquote")(769,"p"),rN(770,"Quando utilizado com "),Sl(771,"code"),rN(772,"p-helper"),og(),rN(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Sl(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),rN(778," autoHeight"),Wl(779,"br"),og()()(),Sl(780,"td",17)(781,"code",28),rN(782,"boolean"),og()(),Sl(783,"td",20)(784,"em")(785,"strong"),rN(786,"(opcional)"),og()(),Sl(787,"p"),rN(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Sl(789,"p")(790,"strong"),rN(791,"Componentes compat\xEDveis:"),og(),Sl(792,"code"),rN(793,"po-multiselect"),og(),rN(794,", "),Sl(795,"code"),rN(796,"po-lookup"),og(),rN(797,"."),og()()(),Sl(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),rN(802," autoUpload"),Wl(803,"br"),og()()(),Sl(804,"td",17)(805,"code",28),rN(806,"boolean"),og()(),Sl(807,"td",20)(808,"em")(809,"strong"),rN(810,"(opcional)"),og()(),Sl(811,"p"),rN(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Sl(813,"p")(814,"strong"),rN(815,"Componente compat\xEDvel"),og(),rN(816,": "),Sl(817,"code"),rN(818,"po-upload"),og()()()(),Sl(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),rN(823," booleanFalse"),Wl(824,"br"),og()()(),Sl(825,"td",17)(826,"code",18),rN(827,"string"),og()(),Sl(828,"td",20)(829,"em")(830,"strong"),rN(831,"(opcional)"),og()(),Sl(832,"p"),rN(833,"Texto exibido quando o valor do componente for "),Sl(834,"em"),rN(835,"false"),og(),rN(836,"."),og()()(),Sl(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),rN(841," booleanTrue"),Wl(842,"br"),og()()(),Sl(843,"td",17)(844,"code",18),rN(845,"string"),og()(),Sl(846,"td",20)(847,"em")(848,"strong"),rN(849,"(opcional)"),og()(),Sl(850,"p"),rN(851,"Texto exibido quando o valor do componente for "),Sl(852,"em"),rN(853,"true"),og(),rN(854,"."),og()()(),Sl(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),rN(859," changeOnEnter"),Wl(860,"br"),og()()(),Sl(861,"td",17)(862,"code",28),rN(863,"boolean"),og()(),Sl(864,"td",20)(865,"em")(866,"strong"),rN(867,"(opcional)"),og()(),Sl(868,"p"),rN(869,"Indica que o evento "),Sl(870,"code"),rN(871,"p-change"),og(),rN(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Sl(873,"code"),rN(874,"po-combo"),og(),rN(875,"."),og()()(),Sl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),rN(880," changeVisibleColumns"),Wl(881,"br"),og()()(),Sl(882,"td",17)(883,"code",29),rN(884,"Function"),og()(),Sl(885,"td",20)(886,"em")(887,"strong"),rN(888,"(opcional)"),og()(),Sl(889,"p"),rN(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Sl(891,"p"),rN(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Sl(893,"p")(894,"strong"),rN(895,"Componente compat\xEDvel"),og(),rN(896,": "),Sl(897,"code"),rN(898,"po-lookup"),og()()()(),Sl(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),rN(903," clean"),Wl(904,"br"),og()()(),Sl(905,"td",17)(906,"code",28),rN(907,"boolean"),og()(),Sl(908,"td",20)(909,"em")(910,"strong"),rN(911,"(opcional)"),og()(),Sl(912,"p"),rN(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Sl(914,"p")(915,"strong"),rN(916,"Componentes compat\xEDveis:"),og(),Sl(917,"code"),rN(918,"po-datepicker"),og(),rN(919,", "),Sl(920,"code"),rN(921,"po-datepicker-range"),og(),rN(922,", "),Sl(923,"code"),rN(924,"po-input"),og(),rN(925,", "),Sl(926,"code"),rN(927,"po-number"),og(),rN(928,", "),Sl(929,"code"),rN(930,"po-decimal"),og(),rN(931,`,
`),Sl(932,"code"),rN(933,"po-combo"),og(),rN(934,", "),Sl(935,"code"),rN(936,"po-lookup"),og(),rN(937,", "),Sl(938,"code"),rN(939,"po-password"),og(),rN(940,", "),Sl(941,"code"),rN(942,"po-timepicker"),og(),rN(943,"."),og()()(),Sl(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),rN(948," columnRestoreManager"),Wl(949,"br"),og()()(),Sl(950,"td",17)(951,"code",29),rN(952,"Function"),og()(),Sl(953,"td",20)(954,"em")(955,"strong"),rN(956,"(opcional)"),og()(),Sl(957,"p"),rN(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Sl(959,"p"),rN(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Sl(961,"p")(962,"strong"),rN(963,"Componente compat\xEDvel"),og(),rN(964,": "),Sl(965,"code"),rN(966,"po-lookup"),og()()()(),Sl(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),rN(971," columns"),Wl(972,"br"),og()()(),Sl(973,"td",17)(974,"code",40),rN(975,"Array<PoLookupColumn> "),og(),Sl(976,"code",41),rN(977," number"),og()(),Sl(978,"td",20)(979,"em")(980,"strong"),rN(981,"(opcional)"),og()(),Sl(982,"p"),rN(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Sl(984,"code"),rN(985,"searchService"),og(),rN(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Sl(987,"a",42)(988,"code"),rN(989,"PoLookupColumn"),og()(),rN(990,"."),og(),Sl(991,"blockquote")(992,"p"),rN(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Sl(994,"em"),rN(995,"label"),og(),rN(996," e "),Sl(997,"em"),rN(998,"value"),og(),rN(999,` para valores
de tela e do model respectivamente.`),og()(),Sl(1e3,"p")(1001,"strong"),rN(1002,"Componentes compat\xEDveis:"),og(),Sl(1003,"code"),rN(1004,"po-radio-group"),og(),rN(1005,", "),Sl(1006,"code"),rN(1007,"po-lookup"),og(),rN(1008,", "),Sl(1009,"code"),rN(1010,"po-checkbox-group"),og(),rN(1011,"."),og()()(),Sl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),rN(1016," compactLabel"),Wl(1017,"br"),og()()(),Sl(1018,"td",17)(1019,"code",28),rN(1020,"boolean"),og()(),Sl(1021,"td",20)(1022,"em")(1023,"strong"),rN(1024,"(opcional)"),og()(),Sl(1025,"p"),rN(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Sl(1027,"p"),rN(1028,"Quando habilitado ("),Sl(1029,"code"),rN(1030,"true"),og(),rN(1031,"), o modo compacto afeta o conjunto composto por:"),og(),Sl(1032,"ul")(1033,"li")(1034,"code"),rN(1035,"po-label"),og()(),Sl(1036,"li")(1037,"code"),rN(1038,"p-requirement (showRequired)"),og()(),Sl(1039,"li")(1040,"code"),rN(1041,"po-helper"),og()()(),Sl(1042,"p"),rN(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Sl(1044,"p"),rN(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Sl(1046,"ul")(1047,"li")(1048,"code"),rN(1049,"--field-container-title-justify"),og()(),Sl(1050,"li")(1051,"code"),rN(1052,"--field-container-title-flex"),og()()(),Sl(1053,"p"),rN(1054,"Exemplo:"),og(),Sl(1055,"pre")(1056,"code"),rN(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Sl(1058,"p"),rN(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Sl(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),rN(1064," container"),Wl(1065,"br"),og()()(),Sl(1066,"td",17)(1067,"code",18),rN(1068,"string"),og()(),Sl(1069,"td",20)(1070,"em")(1071,"strong"),rN(1072,"(opcional)"),og()(),Sl(1073,"p"),rN(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Sl(1075,"p"),rN(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Sl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),rN(1081," customAction"),Wl(1082,"br"),og()()(),Sl(1083,"td",17)(1084,"code",43),rN(1085,"PoProgressAction"),og()(),Sl(1086,"td",20)(1087,"em")(1088,"strong"),rN(1089,"(opcional)"),og()(),Sl(1090,"p"),rN(1091,"Define uma a\xE7\xE3o personalizada no componente "),Sl(1092,"code"),rN(1093,"po-upload"),og(),rN(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Sl(1095,"p")(1096,"strong"),rN(1097,"Componente compat\xEDvel"),og(),rN(1098,": "),Sl(1099,"code"),rN(1100,"po-upload"),og(),rN(1101,","),og(),Sl(1102,"p")(1103,"strong"),rN(1104,"Exemplo de configura\xE7\xE3o"),og(),rN(1105,":"),og(),Sl(1106,"pre")(1107,"code",44),rN(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Sl(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),rN(1113," customActionClick"),Wl(1114,"br"),og()()(),Sl(1115,"td",17)(1116,"code",45),rN(1117,"(file: PoUploadFile) => void"),og()(),Sl(1118,"td",20)(1119,"em")(1120,"strong"),rN(1121,"(opcional)"),og()(),Sl(1122,"p"),rN(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(1124,"code"),rN(1125,"p-custom-action"),og(),rN(1126,"."),og(),Sl(1127,"p")(1128,"strong"),rN(1129,"Componente compat\xEDvel"),og(),rN(1130,": "),Sl(1131,"code"),rN(1132,"po-upload"),og(),rN(1133,","),og(),Sl(1134,"p"),rN(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Sl(1136,"p")(1137,"strong"),rN(1138,"Par\xE2metro do evento"),og(),rN(1139,":"),og(),Sl(1140,"ul")(1141,"li")(1142,"code"),rN(1143,"file"),og(),rN(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Sl(1145,"code"),rN(1146,"PoUploadFile"),og(),rN(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Sl(1148,"p")(1149,"strong"),rN(1150,"Exemplo de uso"),og(),rN(1151,":"),og(),Sl(1152,"pre")(1153,"code",44),rN(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Sl(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),rN(1159," debounceTime"),Wl(1160,"br"),og()()(),Sl(1161,"td",17)(1162,"code",41),rN(1163,"number"),og()(),Sl(1164,"td",20)(1165,"em")(1166,"strong"),rN(1167,"(opcional)"),og()(),Sl(1168,"p"),rN(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Sl(1170,"code"),rN(1171,"p-filter-service"),og(),rN(1172,")."),og(),Sl(1173,"p")(1174,"strong"),rN(1175,"Componentes compat\xEDveis:"),og(),Sl(1176,"code"),rN(1177,"po-combo"),og(),rN(1178,", "),Sl(1179,"code"),rN(1180,"po-multiselect"),og(),rN(1181,"."),og()()(),Sl(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),rN(1186," decimalsLength"),Wl(1187,"br"),og()()(),Sl(1188,"td",17)(1189,"code",41),rN(1190,"number"),og()(),Sl(1191,"td",20)(1192,"em")(1193,"strong"),rN(1194,"(opcional)"),og()(),Sl(1195,"p"),rN(1196,"Quantidade m\xE1xima de casas decimais."),og(),Sl(1197,"blockquote")(1198,"p"),rN(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(1200,"code"),rN(1201,"type"),og(),rN(1202," for "),Sl(1203,"em"),rN(1204,"currency"),og(),rN(1205," ou "),Sl(1206,"em"),rN(1207,"decimal"),og(),rN(1208,"."),og()()()(),Sl(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),rN(1213," directory"),Wl(1214,"br"),og()()(),Sl(1215,"td",17)(1216,"code",28),rN(1217,"boolean"),og()(),Sl(1218,"td",20)(1219,"em")(1220,"strong"),rN(1221,"(opcional)"),og()(),Sl(1222,"p"),rN(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Sl(1224,"blockquote")(1225,"p"),rN(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Sl(1227,"blockquote")(1228,"p"),rN(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(1230,"strong"),rN(1231,"Internet Explorer"),og(),rN(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Sl(1233,"p")(1234,"strong"),rN(1235,"Componente compat\xEDvel"),og(),rN(1236,": "),Sl(1237,"code"),rN(1238,"po-upload"),og()()()(),Sl(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),rN(1243," disabled"),Wl(1244,"br"),og()()(),Sl(1245,"td",17)(1246,"code",28),rN(1247,"boolean"),og()(),Sl(1248,"td",20)(1249,"em")(1250,"strong"),rN(1251,"(opcional)"),og()(),Sl(1252,"p"),rN(1253,"Desabilita o campo caso informar o valor "),Sl(1254,"em"),rN(1255,"true"),og(),rN(1256,"."),og()()(),Sl(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),rN(1261," disabledInitFilter"),Wl(1262,"br"),og()()(),Sl(1263,"td",17)(1264,"code",28),rN(1265,"boolean"),og()(),Sl(1266,"td",20)(1267,"em")(1268,"strong"),rN(1269,"(opcional)"),og()(),Sl(1270,"p"),rN(1271,"Desabilita o filtro inicial no servi\xE7o do "),Sl(1272,"code"),rN(1273,"po-combo"),og(),rN(1274,", que \xE9 executado no primeiro clique no campo."),og()()(),Sl(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),rN(1279," disabledTabFilter"),Wl(1280,"br"),og()()(),Sl(1281,"td",17)(1282,"code",28),rN(1283,"boolean"),og()(),Sl(1284,"td",20)(1285,"em")(1286,"strong"),rN(1287,"(opcional)"),og()(),Sl(1288,"p"),rN(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Sl(1290,"code"),rN(1291,"po-combo"),og(),rN(1292,"."),og()()(),Sl(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),rN(1297," divider"),Wl(1298,"br"),og()()(),Sl(1299,"td",17)(1300,"code",18),rN(1301,"string"),og()(),Sl(1302,"td",20)(1303,"em")(1304,"strong"),rN(1305,"(opcional)"),og()(),Sl(1306,"p"),rN(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Sl(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),rN(1312," dragDrop"),Wl(1313,"br"),og()()(),Sl(1314,"td",17)(1315,"code",28),rN(1316,"boolean"),og()(),Sl(1317,"td",20)(1318,"em")(1319,"strong"),rN(1320,"(opcional)"),og()(),Sl(1321,"p"),rN(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Sl(1323,"blockquote")(1324,"p"),rN(1325,"Recomendamos utilizar apenas um "),Sl(1326,"code"),rN(1327,"po-upload"),og(),rN(1328," com esta funcionalidade por tela."),og()(),Sl(1329,"p")(1330,"strong"),rN(1331,"Componente compat\xEDvel"),og(),rN(1332,": "),Sl(1333,"code"),rN(1334,"po-upload"),og()()()(),Sl(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),rN(1339," dragDropHeight"),Wl(1340,"br"),og()()(),Sl(1341,"td",17)(1342,"code",41),rN(1343,"number"),og()(),Sl(1344,"td",20)(1345,"em")(1346,"strong"),rN(1347,"(opcional)"),og()(),Sl(1348,"p"),rN(1349,"Define em "),Sl(1350,"em"),rN(1351,"pixels"),og(),rN(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(1353,"code"),rN(1354,"160px"),og(),rN(1355,"."),og(),Sl(1356,"blockquote")(1357,"p"),rN(1358,"Esta propriedade funciona somente se a propriedade "),Sl(1359,"code"),rN(1360,"p-drag-drop"),og(),rN(1361," estiver habilitada."),og()(),Sl(1362,"p")(1363,"strong"),rN(1364,"Componente compat\xEDvel"),og(),rN(1365,": "),Sl(1366,"code"),rN(1367,"po-upload"),og()()()(),Sl(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),rN(1372," errorAsyncFunction"),Wl(1373,"br"),og()()(),Sl(1374,"td",17)(1375,"code",46),rN(1376,"(value) => Observable<boolean>"),og()(),Sl(1377,"td",20)(1378,"em")(1379,"strong"),rN(1380,"(opcional)"),og()(),Sl(1381,"p"),rN(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1383,"code"),rN(1384,"change"),og(),rN(1385," ou "),Sl(1386,"code"),rN(1387,"change-model"),og(),rN(1388,", dependendo do valor da propriedade "),Sl(1389,"code"),rN(1390,"triggerMode"),og(),rN(1391,"."),og(),Sl(1392,"blockquote")(1393,"p"),rN(1394,"Retorna "),Sl(1395,"code"),rN(1396,"Observable com o valor true"),og(),rN(1397," para sinalizar o erro "),Sl(1398,"code"),rN(1399,"false"),og(),rN(1400," para indicar que n\xE3o h\xE1 erro."),og()(),Sl(1401,"p")(1402,"strong"),rN(1403,"Componente compat\xEDvel"),og(),rN(1404,": "),Sl(1405,"code"),rN(1406,"po-datepicker"),og()()()(),Sl(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),rN(1411," errorAsyncProperties"),Wl(1412,"br"),og()()(),Sl(1413,"td",17)(1414,"code",47),rN(1415,"ErrorAsyncProperties"),og()(),Sl(1416,"td",20)(1417,"em")(1418,"strong"),rN(1419,"(opcional)"),og()(),Sl(1420,"p"),rN(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Sl(1422,"p")(1423,"strong"),rN(1424,"Componentes compat\xEDveis:"),og(),Sl(1425,"code"),rN(1426,"po-input"),og(),rN(1427,", "),Sl(1428,"code"),rN(1429,"po-number"),og(),rN(1430,", "),Sl(1431,"code"),rN(1432,"po-decimal"),og(),rN(1433,", "),Sl(1434,"code"),rN(1435,"po-password"),og(),rN(1436,"."),og()()(),Sl(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),rN(1441," errorLimit"),Wl(1442,"br"),og()()(),Sl(1443,"td",17)(1444,"code",28),rN(1445,"boolean"),og()(),Sl(1446,"td",20)(1447,"em")(1448,"strong"),rN(1449,"(opcional)"),og()(),Sl(1450,"p"),rN(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Sl(1452,"blockquote")(1453,"p"),rN(1454,"Caso essa propriedade seja definida como "),Sl(1455,"code"),rN(1456,"true"),og(),rN(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Sl(1458,"p")(1459,"strong"),rN(1460,"Componentes compat\xEDveis:"),og(),Sl(1461,"code"),rN(1462,"po-checkbox-group"),og(),rN(1463,", "),Sl(1464,"code"),rN(1465,"po-combo"),og(),rN(1466,", "),Sl(1467,"code"),rN(1468,"po-datepicker"),og(),rN(1469,", "),Sl(1470,"code"),rN(1471,"po-datepicker-range"),og(),rN(1472,", "),Sl(1473,"code"),rN(1474,"po-decimal"),og(),rN(1475,", "),Sl(1476,"code"),rN(1477,"po-input"),og(),rN(1478,", "),Sl(1479,"code"),rN(1480,"po-lookup"),og(),rN(1481,", "),Sl(1482,"code"),rN(1483,"po-multiselect"),og(),rN(1484,", "),Sl(1485,"code"),rN(1486,"po-number"),og(),rN(1487,", "),Sl(1488,"code"),rN(1489,"po-password"),og(),rN(1490,", "),Sl(1491,"code"),rN(1492,"po-radio-group"),og(),rN(1493,", "),Sl(1494,"code"),rN(1495,"po-select"),og(),rN(1496,`,
`),Sl(1497,"code"),rN(1498,"po-switch"),og(),rN(1499,", "),Sl(1500,"code"),rN(1501,"po-textarea"),og(),rN(1502,", "),Sl(1503,"code"),rN(1504,"po-timepicker"),og(),rN(1505,"."),og()()(),Sl(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),rN(1510," errorMessage"),Wl(1511,"br"),og()()(),Sl(1512,"td",17)(1513,"code",18),rN(1514,"string"),og()(),Sl(1515,"td",20)(1516,"em")(1517,"strong"),rN(1518,"(opcional)"),og()(),Sl(1519,"p"),rN(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Sl(1521,"p"),rN(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Sl(1523,"ul")(1524,"li"),rN(1525,"pattern;"),og(),Sl(1526,"li"),rN(1527,"minValue;"),og(),Sl(1528,"li"),rN(1529,"maxValue;"),og(),Sl(1530,"li"),rN(1531,"required;"),og()(),Sl(1532,"blockquote")(1533,"p"),rN(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Sl(1535,"code"),rN(1536,"po-datepicker"),og(),rN(1537,", "),Sl(1538,"code"),rN(1539,"po-input"),og(),rN(1540,", "),Sl(1541,"code"),rN(1542,"po-number"),og(),rN(1543,", "),Sl(1544,"code"),rN(1545,"po-decimal"),og(),rN(1546,", "),Sl(1547,"code"),rN(1548,"po-password"),og(),rN(1549,", "),Sl(1550,"code"),rN(1551,"po-timepicker"),og(),rN(1552,`, \xE9 necess\xE1rio que a propriedade
`),Sl(1553,"code"),rN(1554,"requiredFieldErrorMessage"),og(),rN(1555," esteja como "),Sl(1556,"code"),rN(1557,"true"),og(),rN(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Sl(1559,"code"),rN(1560,"po-datepicker-range"),og(),rN(1561,", "),Sl(1562,"code"),rN(1563,"po-select"),og(),rN(1564,", "),Sl(1565,"code"),rN(1566,"po-checkbox-group"),og(),rN(1567,", "),Sl(1568,"code"),rN(1569,"po-radio-group"),og(),rN(1570,", "),Sl(1571,"code"),rN(1572,"po-multiselect"),og(),rN(1573,", "),Sl(1574,"code"),rN(1575,"po-combo"),og(),rN(1576,`,
`),Sl(1577,"code"),rN(1578,"po-lookup"),og(),rN(1579," e "),Sl(1580,"code"),rN(1581,"po-textarea"),og(),rN(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Sl(1583,"code"),rN(1584,"requiredFieldErrorMessage"),og(),rN(1585,"."),og()(),Sl(1586,"p")(1587,"strong"),rN(1588,"Componentes compat\xEDveis:"),og(),Sl(1589,"code"),rN(1590,"po-checkbox-group"),og(),rN(1591,", "),Sl(1592,"code"),rN(1593,"po-combo"),og(),rN(1594,", "),Sl(1595,"code"),rN(1596,"po-datepicker"),og(),rN(1597,", "),Sl(1598,"code"),rN(1599,"po-datepicker-range"),og(),rN(1600,", "),Sl(1601,"code"),rN(1602,"po-decimal"),og(),rN(1603,", "),Sl(1604,"code"),rN(1605,"po-input"),og(),rN(1606,", "),Sl(1607,"code"),rN(1608,"po-lookup"),og(),rN(1609,", "),Sl(1610,"code"),rN(1611,"po-multiselect"),og(),rN(1612,", "),Sl(1613,"code"),rN(1614,"po-number"),og(),rN(1615,", "),Sl(1616,"code"),rN(1617,"po-password"),og(),rN(1618,", "),Sl(1619,"code"),rN(1620,"po-radio-group"),og(),rN(1621,", "),Sl(1622,"code"),rN(1623,"po-select"),og(),rN(1624,`,
`),Sl(1625,"code"),rN(1626,"po-switch"),og(),rN(1627,", "),Sl(1628,"code"),rN(1629,"po-textarea"),og(),rN(1630,", "),Sl(1631,"code"),rN(1632,"po-timepicker"),og(),rN(1633,"."),og()()(),Sl(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),rN(1638," fieldLabel"),Wl(1639,"br"),og()()(),Sl(1640,"td",17)(1641,"code",18),rN(1642,"string"),og()(),Sl(1643,"td",20)(1644,"em")(1645,"strong"),rN(1646,"(opcional)"),og()(),Sl(1647,"p"),rN(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Sl(1649,"p"),rN(1650,"O valor padr\xE3o \xE9: "),Sl(1651,"code"),rN(1652,"label"),og(),rN(1653,"."),og(),Sl(1654,"blockquote")(1655,"p"),rN(1656,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(1657,"code"),rN(1658,"options"),og(),rN(1659,", "),Sl(1660,"code"),rN(1661,"optionsService"),og(),rN(1662," e "),Sl(1663,"code"),rN(1664,"searchService"),og(),rN(1665,"."),og()()()(),Sl(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),rN(1670," fieldValue"),Wl(1671,"br"),og()()(),Sl(1672,"td",17)(1673,"code",18),rN(1674,"string"),og()(),Sl(1675,"td",20)(1676,"em")(1677,"strong"),rN(1678,"(opcional)"),og()(),Sl(1679,"p"),rN(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Sl(1681,"p"),rN(1682,"O valor padr\xE3o \xE9: "),Sl(1683,"code"),rN(1684,"value"),og(),rN(1685,"."),og(),Sl(1686,"blockquote")(1687,"p"),rN(1688,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(1689,"code"),rN(1690,"options"),og(),rN(1691,", "),Sl(1692,"code"),rN(1693,"optionsService"),og(),rN(1694," e "),Sl(1695,"code"),rN(1696,"searchService"),og(),rN(1697,"."),og()()()(),Sl(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),rN(1702," filterMinlength"),Wl(1703,"br"),og()()(),Sl(1704,"td",17)(1705,"code",41),rN(1706,"number"),og()(),Sl(1707,"td",20)(1708,"em")(1709,"strong"),rN(1710,"(opcional)"),og()(),Sl(1711,"p"),rN(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Sl(1713,"code"),rN(1714,"po-combo"),og(),rN(1715,"."),og()()(),Sl(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),rN(1720," filterMode"),Wl(1721,"br"),og()()(),Sl(1722,"td",17)(1723,"code",48),rN(1724,"PoMultiselectFilterMode"),og()(),Sl(1725,"td",20)(1726,"em")(1727,"strong"),rN(1728,"(opcional)"),og()(),Sl(1729,"p"),rN(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Sl(1731,"code"),rN(1732,"startsWith"),og(),rN(1733,", "),Sl(1734,"code"),rN(1735,"contains"),og(),rN(1736," ou "),Sl(1737,"code"),rN(1738,"endsWith"),og(),rN(1739,"."),og(),Sl(1740,"blockquote")(1741,"p"),rN(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Sl(1743,"p")(1744,"strong"),rN(1745,"Componente compat\xEDvel:"),og(),Sl(1746,"code"),rN(1747,"po-multiselect"),og(),rN(1748,"."),og()()(),Sl(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),rN(1753," forceBooleanComponentType"),Wl(1754,"br"),og()()(),Sl(1755,"td",17)(1756,"code",49),rN(1757,"ForceBooleanComponentEnum"),og()(),Sl(1758,"td",20)(1759,"em")(1760,"strong"),rN(1761,"(opcional)"),og()(),Sl(1762,"p"),rN(1763,"Valores aceitos:"),og(),Sl(1764,"ul")(1765,"li"),rN(1766,"ForceBooleanComponentEnum.switch"),og(),Sl(1767,"li"),rN(1768,"ForceBooleanComponentEnum.checkbox"),og()()()(),Sl(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),rN(1773," forceOptionsComponentType"),Wl(1774,"br"),og()()(),Sl(1775,"td",17)(1776,"code",50),rN(1777,"ForceOptionComponentEnum"),og()(),Sl(1778,"td",20)(1779,"em")(1780,"strong"),rN(1781,"(opcional)"),og()(),Sl(1782,"p"),rN(1783,"pode ser utilizada em conjunto com a propriedade "),Sl(1784,"code"),rN(1785,"options"),og(),rN(1786," for\xE7ando o componente a renderizar um "),Sl(1787,"code"),rN(1788,"po-select"),og(),rN(1789," ou "),Sl(1790,"code"),rN(1791,"po-radio-group"),og(),rN(1792,"."),og(),Sl(1793,"p"),rN(1794,"Valores aceitos:"),og(),Sl(1795,"ul")(1796,"li"),rN(1797,"ForceOptionComponentEnum.radioGroup"),og(),Sl(1798,"li"),rN(1799,"ForceOptionComponentEnum.select"),og()(),Sl(1800,"blockquote")(1801,"p"),rN(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Sl(1803,"code"),rN(1804,"optionsMulti"),og(),rN(1805," e "),Sl(1806,"code"),rN(1807,"optionsService"),og(),rN(1808,"."),og()()()(),Sl(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),rN(1813," formField"),Wl(1814,"br"),og()()(),Sl(1815,"td",17)(1816,"code",18),rN(1817,"string"),og()(),Sl(1818,"td",20)(1819,"em")(1820,"strong"),rN(1821,"(opcional)"),og()(),Sl(1822,"p"),rN(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(1824,"code"),rN(1825,"url"),og(),rN(1826,"."),og(),Sl(1827,"blockquote")(1828,"p"),rN(1829,"O valor default \xE9 "),Sl(1830,"code"),rN(1831,"files"),og()()(),Sl(1832,"p")(1833,"strong"),rN(1834,"Componente compat\xEDvel"),og(),rN(1835,": "),Sl(1836,"code"),rN(1837,"po-upload"),og()()()(),Sl(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),rN(1842," format"),Wl(1843,"br"),og()()(),Sl(1844,"td",17)(1845,"code",18),rN(1846,"string "),og(),Sl(1847,"code",32),rN(1848," Array<string>"),og()(),Sl(1849,"td",20)(1850,"em")(1851,"strong"),rN(1852,"(opcional)"),og()(),Sl(1853,"p"),rN(1854,"Formato de exibi\xE7\xE3o no campo."),og(),Sl(1855,"p"),rN(1856,"Ao utilizar esta propriedade com o "),Sl(1857,"code"),rN(1858,"type"),og(),Sl(1859,"em"),rN(1860,"PoDynamicFieldType.Date"),og(),rN(1861," ou "),Sl(1862,"em"),rN(1863,"PoDynamicFieldType.DateTime"),og(),rN(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Sl(1865,"p"),rN(1866,"Valores v\xE1lidos:"),og(),Sl(1867,"ul")(1868,"li"),rN(1869,"dd/mm/yyyy"),og(),Sl(1870,"li"),rN(1871,"mm/dd/yyyy"),og(),Sl(1872,"li"),rN(1873,"yyyy/mm/dd"),og()(),Sl(1874,"p"),rN(1875,"Ao utilizar com o "),Sl(1876,"code"),rN(1877,"type"),og(),Sl(1878,"em"),rN(1879,"PoDynamicFieldType.Time"),og(),rN(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Sl(1881,"p"),rN(1882,"Valores v\xE1lidos:"),og(),Sl(1883,"ul")(1884,"li")(1885,"code"),rN(1886,"24"),og(),rN(1887,": formato de 24 horas (padr\xE3o)"),og(),Sl(1888,"li")(1889,"code"),rN(1890,"12"),og(),rN(1891,": formato de 12 horas com indicador AM/PM"),og()(),Sl(1892,"p"),rN(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),Sl(1894,"code"),rN(1895,"searchService"),og(),rN(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Sl(1897,"p")(1898,"strong"),rN(1899,"Componentes compat\xEDveis:"),og(),Sl(1900,"code"),rN(1901,"po-datepicker"),og(),rN(1902,", "),Sl(1903,"code"),rN(1904,"po-datetimepicker"),og(),rN(1905,", "),Sl(1906,"code"),rN(1907,"po-timepicker"),og(),rN(1908,", "),Sl(1909,"code"),rN(1910,"po-lookup"),og(),rN(1911,"."),og()()(),Sl(1912,"tr",13)(1913,"td",14)(1914,"div",15)(1915,"span",16),rN(1916," formatModel"),Wl(1917,"br"),og()()(),Sl(1918,"td",17)(1919,"code",28),rN(1920,"boolean"),og()(),Sl(1921,"td",20)(1922,"em")(1923,"strong"),rN(1924,"(opcional)"),og()(),Sl(1925,"p"),rN(1926,"Indica se o "),Sl(1927,"code"),rN(1928,"model"),og(),rN(1929," receber\xE1 o valor formatado pelas propriedades "),Sl(1930,"code"),rN(1931,"p-label-on"),og(),rN(1932," e "),Sl(1933,"code"),rN(1934,"p-label-off"),og(),rN(1935,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Sl(1936,"p"),rN(1937,"O valor padr\xE3o \xE9: "),Sl(1938,"code"),rN(1939,"false"),og(),rN(1940,"."),og(),Sl(1941,"blockquote")(1942,"p"),rN(1943,"Esta propriedade est\xE1 disponivel apenas para o "),Sl(1944,"code"),rN(1945,"swicth"),og(),rN(1946,"."),og()()()(),Sl(1947,"tr",13)(1948,"td",14)(1949,"div",15)(1950,"span",16),rN(1951," formatTime"),Wl(1952,"br"),og()()(),Sl(1953,"td",17)(1954,"code",18),rN(1955,"string"),og()(),Sl(1956,"td",20)(1957,"em")(1958,"strong"),rN(1959,"(opcional)"),og()(),Sl(1960,"p"),rN(1961,"Define o formato de exibi\xE7\xE3o do timer ("),Sl(1962,"code"),rN(1963,"'12'"),og(),rN(1964," ou "),Sl(1965,"code"),rN(1966,"'24'"),og(),rN(1967,")."),og(),Sl(1968,"p")(1969,"strong"),rN(1970,"Componente compat\xEDvel:"),og(),Sl(1971,"code"),rN(1972,"po-datetimepicker"),og()()()(),Sl(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),rN(1977," gridColumns"),Wl(1978,"br"),og()()(),Sl(1979,"td",17)(1980,"code",41),rN(1981,"number"),og()(),Sl(1982,"td",20)(1983,"em")(1984,"strong"),rN(1985,"(opcional)"),og()(),Sl(1986,"p"),rN(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Sl(1988,"p"),rN(1989,"Deve ser usado o sistema de "),Sl(1990,"strong"),rN(1991,"grid"),og(),rN(1992," do PO (1 ... 12 colunas)."),og(),Sl(1993,"blockquote")(1994,"p"),rN(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),rN(2e3," gridLgColumns"),Wl(2001,"br"),og()()(),Sl(2002,"td",17)(2003,"code",41),rN(2004,"number"),og()(),Sl(2005,"td",20)(2006,"em")(2007,"strong"),rN(2008,"(opcional)"),og()(),Sl(2009,"p"),rN(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(2011,"p"),rN(2012,"Deve ser usado o sistema de "),Sl(2013,"strong"),rN(2014,"grid"),og(),rN(2015," do PO (1 ... 12 colunas)."),og(),Sl(2016,"blockquote")(2017,"p"),rN(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2019,"code"),rN(2020,"gridColumns"),og(),rN(2021,"."),og()()()(),Sl(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),rN(2026," gridLgPull"),Wl(2027,"br"),og()()(),Sl(2028,"td",17)(2029,"code",41),rN(2030,"number"),og()(),Sl(2031,"td",20)(2032,"em")(2033,"strong"),rN(2034,"(opcional)"),og()(),Sl(2035,"p"),rN(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Sl(2037,"p"),rN(2038,"Deve ser usado o sistema de "),Sl(2039,"strong"),rN(2040,"grid"),og(),rN(2041," do PO (1 ... 11 colunas)."),og(),Sl(2042,"blockquote")(2043,"p"),rN(2044,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2045,"code"),rN(2046,"gridColumns"),og(),rN(2047,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),rN(2052," gridMdColumns"),Wl(2053,"br"),og()()(),Sl(2054,"td",17)(2055,"code",41),rN(2056,"number"),og()(),Sl(2057,"td",20)(2058,"em")(2059,"strong"),rN(2060,"(opcional)"),og()(),Sl(2061,"p"),rN(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(2063,"p"),rN(2064,"Deve ser usado o sistema de "),Sl(2065,"strong"),rN(2066,"grid"),og(),rN(2067," do PO (1 ... 12 colunas)."),og(),Sl(2068,"blockquote")(2069,"p"),rN(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2071,"code"),rN(2072,"gridColumns"),og(),rN(2073,"."),og()()()(),Sl(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),rN(2078," gridMdPull"),Wl(2079,"br"),og()()(),Sl(2080,"td",17)(2081,"code",41),rN(2082,"number"),og()(),Sl(2083,"td",20)(2084,"em")(2085,"strong"),rN(2086,"(opcional)"),og()(),Sl(2087,"p"),rN(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Sl(2089,"p"),rN(2090,"Deve ser usado o sistema de "),Sl(2091,"strong"),rN(2092,"grid"),og(),rN(2093," do PO (1 ... 11 colunas)."),og(),Sl(2094,"blockquote")(2095,"p"),rN(2096,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2097,"code"),rN(2098,"gridColumns"),og(),rN(2099,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),rN(2104," gridSmColumns"),Wl(2105,"br"),og()()(),Sl(2106,"td",17)(2107,"code",41),rN(2108,"number"),og()(),Sl(2109,"td",20)(2110,"em")(2111,"strong"),rN(2112,"(opcional)"),og()(),Sl(2113,"p"),rN(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(2115,"p"),rN(2116,"Deve ser usado o sistema de "),Sl(2117,"strong"),rN(2118,"grid"),og(),rN(2119," do PO (1 ... 12 colunas)."),og(),Sl(2120,"blockquote")(2121,"p"),rN(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2123,"code"),rN(2124,"gridColumns"),og(),rN(2125,"."),og()()()(),Sl(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),rN(2130," gridSmPull"),Wl(2131,"br"),og()()(),Sl(2132,"td",17)(2133,"code",41),rN(2134,"number"),og()(),Sl(2135,"td",20)(2136,"em")(2137,"strong"),rN(2138,"(opcional)"),og()(),Sl(2139,"p"),rN(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Sl(2141,"p"),rN(2142,"Deve ser usado o sistema de "),Sl(2143,"strong"),rN(2144,"grid"),og(),rN(2145," do PO (1 ... 11 colunas)."),og(),Sl(2146,"blockquote")(2147,"p"),rN(2148,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2149,"code"),rN(2150,"gridColumns"),og(),rN(2151,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),rN(2156," gridXlColumns"),Wl(2157,"br"),og()()(),Sl(2158,"td",17)(2159,"code",41),rN(2160,"number"),og()(),Sl(2161,"td",20)(2162,"em")(2163,"strong"),rN(2164,"(opcional)"),og()(),Sl(2165,"p"),rN(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(2167,"p"),rN(2168,"Deve ser usado o sistema de "),Sl(2169,"strong"),rN(2170,"grid"),og(),rN(2171," do PO (1 ... 12 colunas)."),og(),Sl(2172,"blockquote")(2173,"p"),rN(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2175,"code"),rN(2176,"gridColumns"),og(),rN(2177,"."),og()()()(),Sl(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),rN(2182," gridXlPull"),Wl(2183,"br"),og()()(),Sl(2184,"td",17)(2185,"code",41),rN(2186,"number"),og()(),Sl(2187,"td",20)(2188,"em")(2189,"strong"),rN(2190,"(opcional)"),og()(),Sl(2191,"p"),rN(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Sl(2193,"p"),rN(2194,"Deve ser usado o sistema de "),Sl(2195,"strong"),rN(2196,"grid"),og(),rN(2197," do PO (1 ... 11 colunas)."),og(),Sl(2198,"blockquote")(2199,"p"),rN(2200,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2201,"code"),rN(2202,"gridColumns"),og(),rN(2203,". Deve-se especificar o tamanho da tela."),og()()()(),Sl(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),rN(2208," headers"),Wl(2209,"br"),og()()(),Sl(2210,"td",17)(2211,"code",51),rN(2212,"{ [name: string]: string "),og(),Sl(2213,"code",52),rN(2214,` Array<string>;
}`),og()(),Sl(2215,"td",20)(2216,"em")(2217,"strong"),rN(2218,"(opcional)"),og()(),Sl(2219,"p"),rN(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Sl(2221,"p")(2222,"strong"),rN(2223,"Componente compat\xEDvel"),og(),rN(2224,": "),Sl(2225,"code"),rN(2226,"po-upload"),og()()()(),Sl(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),rN(2231," help"),Wl(2232,"br"),og()()(),Sl(2233,"td",17)(2234,"code",18),rN(2235,"string"),og()(),Sl(2236,"td",20)(2237,"em")(2238,"strong"),rN(2239,"(opcional)"),og()(),Sl(2240,"p"),rN(2241,"Texto de ajuda."),og()()(),Sl(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),rN(2246," helper"),Wl(2247,"br"),og()()(),Sl(2248,"td",17)(2249,"code",18),rN(2250,"string "),og(),Sl(2251,"code",53),rN(2252," PoHelperOptions"),og()(),Sl(2253,"td",20)(2254,"em")(2255,"strong"),rN(2256,"(opcional)"),og()(),Sl(2257,"p"),rN(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Sl(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),rN(2263," hideLabelStatus"),Wl(2264,"br"),og()()(),Sl(2265,"td",17)(2266,"code",28),rN(2267,"boolean"),og()(),Sl(2268,"td",20)(2269,"em")(2270,"strong"),rN(2271,"(opcional)"),og()(),Sl(2272,"p"),rN(2273,"Indica se o status do "),Sl(2274,"code"),rN(2275,"model"),og(),rN(2276," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Sl(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),rN(2281," hidePasswordPeek"),Wl(2282,"br"),og()()(),Sl(2283,"td",17)(2284,"code",28),rN(2285,"boolean"),og()(),Sl(2286,"td",20)(2287,"em")(2288,"strong"),rN(2289,"(opcional)"),og()(),Sl(2290,"p"),rN(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Sl(2292,"code"),rN(2293,"po-password"),og(),rN(2294,"."),og()()(),Sl(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),rN(2299," hideRestrictionsInfo"),Wl(2300,"br"),og()()(),Sl(2301,"td",17)(2302,"code",28),rN(2303,"boolean"),og()(),Sl(2304,"td",20)(2305,"em")(2306,"strong"),rN(2307,"(opcional)"),og()(),Sl(2308,"p"),rN(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Sl(2310,"p")(2311,"strong"),rN(2312,"Componente compat\xEDvel"),og(),rN(2313,": "),Sl(2314,"code"),rN(2315,"po-upload"),og()()()(),Sl(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),rN(2320," hideSearch"),Wl(2321,"br"),og()()(),Sl(2322,"td",17)(2323,"code",28),rN(2324,"boolean"),og()(),Sl(2325,"td",20)(2326,"em")(2327,"strong"),rN(2328,"(opcional)"),og()(),Sl(2329,"p"),rN(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),Sl(2331,"code"),rN(2332,"po-multiselect"),og(),rN(2333,"."),og()()(),Sl(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),rN(2338," hideSelectAll"),Wl(2339,"br"),og()()(),Sl(2340,"td",17)(2341,"code",28),rN(2342,"boolean"),og()(),Sl(2343,"td",20)(2344,"em")(2345,"strong"),rN(2346,"(opcional)"),og()(),Sl(2347,"p"),rN(2348,'Indica se o campo "Selecionar todos" do '),Sl(2349,"code"),rN(2350,"po-multiselect"),og(),rN(2351," ser\xE1 escondido."),og()()(),Sl(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),rN(2356," hideSelectButton"),Wl(2357,"br"),og()()(),Sl(2358,"td",17)(2359,"code",28),rN(2360,"boolean"),og()(),Sl(2361,"td",20)(2362,"em")(2363,"strong"),rN(2364,"(opcional)"),og()(),Sl(2365,"p"),rN(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Sl(2367,"blockquote")(2368,"p"),rN(2369,"Caso o valor definido seja "),Sl(2370,"code"),rN(2371,"true"),og(),rN(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(2373,"code"),rN(2374,"selectFiles()"),og(),rN(2375," para sele\xE7\xE3o de arquivos."),og()(),Sl(2376,"p")(2377,"strong"),rN(2378,"Componente compat\xEDvel"),og(),rN(2379,": "),Sl(2380,"code"),rN(2381,"po-upload"),og()()()(),Sl(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),rN(2386," hideSendButton"),Wl(2387,"br"),og()()(),Sl(2388,"td",17)(2389,"code",28),rN(2390,"boolean"),og()(),Sl(2391,"td",20)(2392,"em")(2393,"strong"),rN(2394,"(opcional)"),og()(),Sl(2395,"p"),rN(2396,"Omite o bot\xE3o de envio de arquivos."),og(),Sl(2397,"blockquote")(2398,"p"),rN(2399,"Caso o valor definido seja "),Sl(2400,"code"),rN(2401,"true"),og(),rN(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(2403,"code"),rN(2404,"sendFiles()"),og(),rN(2405," para envio do(s) arquivo(s) selecionado(s)."),og()(),Sl(2406,"p")(2407,"strong"),rN(2408,"Componente compat\xEDvel"),og(),rN(2409,": "),Sl(2410,"code"),rN(2411,"po-upload"),og()()()(),Sl(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),rN(2416," icon"),Wl(2417,"br"),og()()(),Sl(2418,"td",17)(2419,"code",18),rN(2420,"string "),og(),Sl(2421,"code",54),rN(2422," TemplateRef<void>"),og()(),Sl(2423,"td",20)(2424,"em")(2425,"strong"),rN(2426,"(opcional)"),og()(),Sl(2427,"p"),rN(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Sl(2429,"blockquote")(2430,"p"),rN(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Sl(2432,"ul")(2433,"li"),rN(2434,"Input;"),og(),Sl(2435,"li"),rN(2436,"Number;"),og(),Sl(2437,"li"),rN(2438,"Decimal;"),og(),Sl(2439,"li"),rN(2440,"Combo;"),og(),Sl(2441,"li"),rN(2442,"Password;"),og()(),Sl(2443,"blockquote")(2444,"p"),rN(2445,"Veja a disponibilidade de \xEDcones em "),Sl(2446,"a",55),rN(2447,"biblioteca de \xEDcones"),og(),rN(2448,"."),og()()()(),Sl(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),rN(2453," infiniteScroll"),Wl(2454,"br"),og()()(),Sl(2455,"td",17)(2456,"code",28),rN(2457,"boolean"),og()(),Sl(2458,"td",20)(2459,"em")(2460,"strong"),rN(2461,"(opcional)"),og()(),Sl(2462,"p"),rN(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Sl(2464,"p")(2465,"strong"),rN(2466,"Componentes compat\xEDveis:"),og(),Sl(2467,"code"),rN(2468,"po-combo"),og(),rN(2469,", "),Sl(2470,"code"),rN(2471,"po-lookup"),og(),rN(2472,"."),og()()(),Sl(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),rN(2477," infiniteScrollDistance"),Wl(2478,"br"),og()()(),Sl(2479,"td",17)(2480,"code",41),rN(2481,"number"),og()(),Sl(2482,"td",20)(2483,"em")(2484,"strong"),rN(2485,"(opcional)"),og()(),Sl(2486,"p"),rN(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Sl(2488,"strong"),rN(2489,"Exemplos"),og(),Sl(2490,"code"),rN(2491,"{ infiniteScrollDistance: 80 }"),og(),rN(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Sl(2493,"p")(2494,"strong"),rN(2495,"Componente compat\xEDvel:"),og(),Sl(2496,"code"),rN(2497,"po-combo"),og(),rN(2498,"."),og()()(),Sl(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),rN(2503," invalidValue"),Wl(2504,"br"),og()()(),Sl(2505,"td",17)(2506,"code",28),rN(2507,"boolean"),og()(),Sl(2508,"td",20)(2509,"em")(2510,"strong"),rN(2511,"(opcional)"),og()(),Sl(2512,"p"),rN(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(2514,"code"),rN(2515,"p-field-error-message"),og(),rN(2516,"."),og(),Sl(2517,"blockquote")(2518,"p"),rN(2519,"Caso essa propriedade seja definida como "),Sl(2520,"code"),rN(2521,"true"),og(),rN(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Sl(2523,"p")(2524,"strong"),rN(2525,"Componente compat\xEDvel"),og(),rN(2526,": "),Sl(2527,"code"),rN(2528,"po-switch"),og()()()(),Sl(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),rN(2533," isoFormat"),Wl(2534,"br"),og()()(),Sl(2535,"td",17)(2536,"code",56),rN(2537,"PoDatepickerIsoFormat"),og()(),Sl(2538,"td",20)(2539,"em")(2540,"strong"),rN(2541,"(opcional)"),og()(),Sl(2542,"p"),rN(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Sl(2544,"blockquote")(2545,"p"),rN(2546,"Veja os valores v\xE1lidos no "),Sl(2547,"code"),rN(2548,"PoDatepickerIsoFormat"),og(),rN(2549,"."),og()(),Sl(2550,"p")(2551,"strong"),rN(2552,"Componente compat\xEDvel:"),og(),Sl(2553,"code"),rN(2554,"po-datepicker"),og()()()(),Sl(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),rN(2559," key"),Wl(2560,"br"),og()()(),Sl(2561,"td",17)(2562,"code",28),rN(2563,"boolean"),og()(),Sl(2564,"td",20)(2565,"em")(2566,"strong"),rN(2567,"(opcional)"),og()(),Sl(2568,"p"),rN(2569,"Identificador"),og()()(),Sl(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),rN(2574," keydown"),Wl(2575,"br"),og()()(),Sl(2576,"td",17)(2577,"code",29),rN(2578,"Function"),og()(),Sl(2579,"td",20)(2580,"em")(2581,"strong"),rN(2582,"(opcional)"),og()(),Sl(2583,"p"),rN(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(2585,"code"),rN(2586,"KeyboardEvent"),og(),rN(2587," com informa\xE7\xF5es sobre a tecla."),og()()(),Sl(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),rN(2592," label"),Wl(2593,"br"),og()()(),Sl(2594,"td",17)(2595,"code",18),rN(2596,"string"),og()(),Sl(2597,"td",20)(2598,"em")(2599,"strong"),rN(2600,"(opcional)"),og()(),Sl(2601,"p"),rN(2602,"R\xF3tulo do campo exibido."),og(),Sl(2603,"p"),rN(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(2605,"code"),rN(2606,"label"),og(),rN(2607," o valor da propriedade "),Sl(2608,"code"),rN(2609,"property"),og(),rN(2610," com a primeira letra em mai\xFAsculo."),og()()(),Sl(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),rN(2615," labelPosition"),Wl(2616,"br"),og()()(),Sl(2617,"td",17)(2618,"code",57),rN(2619,"PoSwitchLabelPosition"),og()(),Sl(2620,"td",20)(2621,"em")(2622,"strong"),rN(2623,"(opcional)"),og()(),Sl(2624,"p"),rN(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Sl(2626,"blockquote")(2627,"p"),rN(2628,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Sl(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),rN(2633," listboxControlPosition"),Wl(2634,"br"),og()()(),Sl(2635,"td",17)(2636,"code",58),rN(2637,"'top' "),og(),Sl(2638,"code",59),rN(2639," 'bottom'"),og()(),Sl(2640,"td",20)(2641,"em")(2642,"strong"),rN(2643,"(opcional)"),og()(),Sl(2644,"p"),rN(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Sl(2646,"code"),rN(2647,"listbox"),og(),rN(2648," em rela\xE7\xE3o ao campo ("),Sl(2649,"code"),rN(2650,"top"),og(),rN(2651," ou "),Sl(2652,"code"),rN(2653,"bottom"),og(),rN(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Sl(2655,"p")(2656,"strong"),rN(2657,"Componentes compat\xEDveis:"),og(),Sl(2658,"code"),rN(2659,"po-multiselect"),og(),rN(2660,", "),Sl(2661,"code"),rN(2662,"po-combo"),og(),rN(2663,"."),og()()(),Sl(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),rN(2668," literals"),Wl(2669,"br"),og()()(),Sl(2670,"td",17)(2671,"code",60),rN(2672,"PoLookupLiterals "),og(),Sl(2673,"code",61),rN(2674," PoMultiselectLiterals "),og(),Sl(2675,"code",62),rN(2676," PoComboLiterals "),og(),Sl(2677,"code",63),rN(2678," PoDatepickerRangeLiterals "),og(),Sl(2679,"code",64),rN(2680," PoUploadLiterals"),og()(),Sl(2681,"td",20)(2682,"em")(2683,"strong"),rN(2684,"(opcional)"),og()(),Sl(2685,"p"),rN(2686,"Objeto com as literais usadas para os seguintes componentes: "),Sl(2687,"code"),rN(2688,"po-lookup"),og(),rN(2689,", "),Sl(2690,"code"),rN(2691,"po-multiselect"),og(),rN(2692,", "),Sl(2693,"code"),rN(2694,"po-combo"),og(),rN(2695," e "),Sl(2696,"code"),rN(2697,"po-datepicker-range"),og(),rN(2698,"."),og(),Sl(2699,"blockquote")(2700,"p"),rN(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Sl(2702,"p")(2703,"strong"),rN(2704,"Componentes compat\xEDveis:"),og(),Sl(2705,"code"),rN(2706,"po-lookup"),og(),rN(2707,", "),Sl(2708,"code"),rN(2709,"po-multiselect"),og(),rN(2710,", "),Sl(2711,"code"),rN(2712,"po-combo"),og(),rN(2713,", "),Sl(2714,"code"),rN(2715,"po-datepicker-range"),og()()()(),Sl(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),rN(2720," loading"),Wl(2721,"br"),og()()(),Sl(2722,"td",17)(2723,"code",28),rN(2724,"boolean"),og()(),Sl(2725,"td",20)(2726,"em")(2727,"strong"),rN(2728,"(opcional)"),og()(),Sl(2729,"p"),rN(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Sl(2731,"blockquote")(2732,"p"),rN(2733,"Por padr\xE3o \xE9 "),Sl(2734,"code"),rN(2735,"false"),og(),rN(2736,"."),og()(),Sl(2737,"p")(2738,"strong"),rN(2739,"Componentes compat\xEDveis:"),og(),Sl(2740,"code"),rN(2741,"po-datepicker"),og(),rN(2742,", "),Sl(2743,"code"),rN(2744,"po-datepicker-range"),og(),rN(2745,", "),Sl(2746,"code"),rN(2747,"po-number"),og(),rN(2748,", "),Sl(2749,"code"),rN(2750,"po-decimal"),og(),rN(2751,`,
`),Sl(2752,"code"),rN(2753,"po-input"),og(),rN(2754,", "),Sl(2755,"code"),rN(2756,"po-select"),og(),rN(2757,", "),Sl(2758,"code"),rN(2759,"po-switch"),og(),rN(2760,", "),Sl(2761,"code"),rN(2762,"po-combo"),og(),rN(2763,", "),Sl(2764,"code"),rN(2765,"po-lookup"),og(),rN(2766,", "),Sl(2767,"code"),rN(2768,"po-multiselect"),og(),rN(2769,`,
`),Sl(2770,"code"),rN(2771,"po-textarea"),og(),rN(2772,", "),Sl(2773,"code"),rN(2774,"po-password"),og(),rN(2775,", "),Sl(2776,"code"),rN(2777,"po-upload"),og(),rN(2778,"."),og()()(),Sl(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),rN(2783," locale"),Wl(2784,"br"),og()()(),Sl(2785,"td",17)(2786,"code",18),rN(2787,"string"),og()(),Sl(2788,"td",20)(2789,"em")(2790,"strong"),rN(2791,"(opcional)"),og()(),Sl(2792,"p"),rN(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Sl(2794,"a",65)(2795,"code"),rN(2796,"I18n"),og()()(),Sl(2797,"p"),rN(2798,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(2799,"pre")(2800,"code"),rN(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Sl(2802,"blockquote")(2803,"p"),rN(2804,"Para ver quais linguagens suportadas acesse "),Sl(2805,"a",65)(2806,"code"),rN(2807,"I18n"),og()()()(),Sl(2808,"p")(2809,"strong"),rN(2810,"Componentes compat\xEDveis:"),og(),Sl(2811,"code"),rN(2812,"po-datepicker"),og(),rN(2813,", "),Sl(2814,"code"),rN(2815,"po-decimal"),og(),rN(2816,", "),Sl(2817,"code"),rN(2818,"po-timepicker"),og(),rN(2819,"."),og()()(),Sl(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),rN(2824," mask"),Wl(2825,"br"),og()()(),Sl(2826,"td",17)(2827,"code",18),rN(2828,"string"),og()(),Sl(2829,"td",20)(2830,"em")(2831,"strong"),rN(2832,"(opcional)"),og()(),Sl(2833,"p"),rN(2834,"M\xE1scara para o campo."),og(),Sl(2835,"p")(2836,"strong"),rN(2837,"Componente compat\xEDvel:"),og(),Sl(2838,"code"),rN(2839,"po-input"),og(),rN(2840,"."),og(),Sl(2841,"blockquote")(2842,"p"),rN(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(2844,"code"),rN(2845,"type: time"),og(),rN(2846,"."),og()()()(),Sl(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),rN(2851," maskFormatModel"),Wl(2852,"br"),og()()(),Sl(2853,"td",17)(2854,"code",28),rN(2855,"boolean"),og()(),Sl(2856,"td",20)(2857,"em")(2858,"strong"),rN(2859,"(opcional)"),og()(),Sl(2860,"p"),rN(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Sl(2862,"code"),rN(2863,"false"),og(),rN(2864,"."),og(),Sl(2865,"p")(2866,"strong"),rN(2867,"Componente compat\xEDvel:"),og(),Sl(2868,"code"),rN(2869,"po-input"),og(),rN(2870,"."),og(),Sl(2871,"blockquote")(2872,"p"),rN(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(2874,"code"),rN(2875,"type: time"),og(),rN(2876,"."),og()()()(),Sl(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),rN(2881," maskNoLengthValidation"),Wl(2882,"br"),og()()(),Sl(2883,"td",17)(2884,"code",28),rN(2885,"boolean"),og()(),Sl(2886,"td",20)(2887,"em")(2888,"strong"),rN(2889,"(opcional)"),og()(),Sl(2890,"p"),rN(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(2892,"code"),rN(2893,"minLength"),og(),rN(2894,") e m\xE1ximo ("),Sl(2895,"code"),rN(2896,"maxLength"),og(),rN(2897,") quando h\xE1 uma m\xE1scara ("),Sl(2898,"code"),rN(2899,"p-mask"),og(),rN(2900,") definida."),og(),Sl(2901,"ul")(2902,"li"),rN(2903,"Quando "),Sl(2904,"code"),rN(2905,"true"),og(),rN(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Sl(2907,"li"),rN(2908,"Quando "),Sl(2909,"code"),rN(2910,"false"),og(),rN(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Sl(2912,"p")(2913,"strong"),rN(2914,"Componentes compat\xEDveis:"),og(),Sl(2915,"code"),rN(2916,"po-input"),og(),rN(2917,", "),Sl(2918,"code"),rN(2919,"po-decimal"),og(),rN(2920,"."),og(),Sl(2921,"blockquote")(2922,"p"),rN(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(2924,"code"),rN(2925,"p-mask-format-model"),og(),rN(2926,"."),og()(),Sl(2927,"p"),rN(2928,"Exemplo:"),og(),Sl(2929,"pre")(2930,"code"),rN(2931,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),og()(),Sl(2932,"ul")(2933,"li"),rN(2934,"Entrada: "),Sl(2935,"code"),rN(2936,"11.111.111/1111-11"),og(),rN(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Sl(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),rN(2942," maxLength"),Wl(2943,"br"),og()()(),Sl(2944,"td",17)(2945,"code",41),rN(2946,"number"),og()(),Sl(2947,"td",20)(2948,"em")(2949,"strong"),rN(2950,"(opcional)"),og()(),Sl(2951,"p"),rN(2952,"Tamanho m\xE1ximo de caracteres."),og(),Sl(2953,"p")(2954,"strong"),rN(2955,"Componentes compat\xEDveis:"),og(),Sl(2956,"code"),rN(2957,"po-input"),og(),rN(2958,", "),Sl(2959,"code"),rN(2960,"po-number"),og(),rN(2961,", "),Sl(2962,"code"),rN(2963,"po-decimal"),og(),rN(2964,", "),Sl(2965,"code"),rN(2966,"po-textarea"),og(),rN(2967,", "),Sl(2968,"code"),rN(2969,"po-password"),og(),rN(2970,"."),og()()(),Sl(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),rN(2975," maxTime"),Wl(2976,"br"),og()()(),Sl(2977,"td",17)(2978,"code",18),rN(2979,"string"),og()(),Sl(2980,"td",20)(2981,"em")(2982,"strong"),rN(2983,"(opcional)"),og()(),Sl(2984,"p"),rN(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(2986,"code"),rN(2987,"HH:mm"),og(),rN(2988," ou "),Sl(2989,"code"),rN(2990,"HH:mm:ss"),og(),rN(2991,"."),og(),Sl(2992,"p")(2993,"strong"),rN(2994,"Componente compat\xEDvel:"),og(),Sl(2995,"code"),rN(2996,"po-datetimepicker"),og(),rN(2997,", "),Sl(2998,"code"),rN(2999,"po-timepicker"),og()()()(),Sl(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),rN(3004," maxValue"),Wl(3005,"br"),og()()(),Sl(3006,"td",17)(3007,"code",18),rN(3008,"string "),og(),Sl(3009,"code",41),rN(3010," number"),og()(),Sl(3011,"td",20)(3012,"em")(3013,"strong"),rN(3014,"(opcional)"),og()(),Sl(3015,"p"),rN(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3017,"em"),rN(3018,"number"),og(),rN(3019,", "),Sl(3020,"em"),rN(3021,"date"),og(),rN(3022,", "),Sl(3023,"em"),rN(3024,"dateTime"),og(),rN(3025," ou "),Sl(3026,"em"),rN(3027,"time"),og(),rN(3028,"."),og(),Sl(3029,"blockquote")(3030,"p"),rN(3031,"Para "),Sl(3032,"code"),rN(3033,"po-timepicker"),og(),rN(3034,", o valor deve estar no formato "),Sl(3035,"code"),rN(3036,"HH:mm"),og(),rN(3037," ou "),Sl(3038,"code"),rN(3039,"HH:mm:ss"),og(),rN(3040,"."),og()(),Sl(3041,"p")(3042,"strong"),rN(3043,"Componentes compat\xEDveis:"),og(),Sl(3044,"code"),rN(3045,"po-datepicker"),og(),rN(3046,", "),Sl(3047,"code"),rN(3048,"po-datepicker-range"),og(),rN(3049,", "),Sl(3050,"code"),rN(3051,"po-number"),og(),rN(3052,", "),Sl(3053,"code"),rN(3054,"po-decimal"),og(),rN(3055,", "),Sl(3056,"code"),rN(3057,"po-timepicker"),og()()()(),Sl(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),rN(3062," minLength"),Wl(3063,"br"),og()()(),Sl(3064,"td",17)(3065,"code",41),rN(3066,"number"),og()(),Sl(3067,"td",20)(3068,"em")(3069,"strong"),rN(3070,"(opcional)"),og()(),Sl(3071,"p"),rN(3072,"Tamanho m\xEDnimo de caracteres."),og(),Sl(3073,"p")(3074,"strong"),rN(3075,"Componentes compat\xEDveis:"),og(),Sl(3076,"code"),rN(3077,"po-input"),og(),rN(3078,", "),Sl(3079,"code"),rN(3080,"po-number"),og(),rN(3081,", "),Sl(3082,"code"),rN(3083,"po-decimal"),og(),rN(3084,", "),Sl(3085,"code"),rN(3086,"po-textarea"),og(),rN(3087,", "),Sl(3088,"code"),rN(3089,"po-password"),og(),rN(3090,"."),og()()(),Sl(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),rN(3095," minTime"),Wl(3096,"br"),og()()(),Sl(3097,"td",17)(3098,"code",18),rN(3099,"string"),og()(),Sl(3100,"td",20)(3101,"em")(3102,"strong"),rN(3103,"(opcional)"),og()(),Sl(3104,"p"),rN(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3106,"code"),rN(3107,"HH:mm"),og(),rN(3108," ou "),Sl(3109,"code"),rN(3110,"HH:mm:ss"),og(),rN(3111,"."),og(),Sl(3112,"p")(3113,"strong"),rN(3114,"Componente compat\xEDvel:"),og(),Sl(3115,"code"),rN(3116,"po-datetimepicker"),og(),rN(3117,", "),Sl(3118,"code"),rN(3119,"po-timepicker"),og()()()(),Sl(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),rN(3124," minValue"),Wl(3125,"br"),og()()(),Sl(3126,"td",17)(3127,"code",18),rN(3128,"string "),og(),Sl(3129,"code",41),rN(3130," number"),og()(),Sl(3131,"td",20)(3132,"em")(3133,"strong"),rN(3134,"(opcional)"),og()(),Sl(3135,"p"),rN(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3137,"em"),rN(3138,"number"),og(),rN(3139,", "),Sl(3140,"em"),rN(3141,"date"),og(),rN(3142,", "),Sl(3143,"em"),rN(3144,"dateTime"),og(),rN(3145," ou "),Sl(3146,"em"),rN(3147,"time"),og(),rN(3148,"."),og(),Sl(3149,"blockquote")(3150,"p"),rN(3151,"Para "),Sl(3152,"code"),rN(3153,"po-timepicker"),og(),rN(3154,", o valor deve estar no formato "),Sl(3155,"code"),rN(3156,"HH:mm"),og(),rN(3157," ou "),Sl(3158,"code"),rN(3159,"HH:mm:ss"),og(),rN(3160,"."),og()(),Sl(3161,"p")(3162,"strong"),rN(3163,"Componentes compat\xEDveis:"),og(),Sl(3164,"code"),rN(3165,"po-datepicker"),og(),rN(3166,", "),Sl(3167,"code"),rN(3168,"po-datepicker-range"),og(),rN(3169,", "),Sl(3170,"code"),rN(3171,"po-number"),og(),rN(3172,", "),Sl(3173,"code"),rN(3174,"po-decimal"),og(),rN(3175,", "),Sl(3176,"code"),rN(3177,"po-timepicker"),og()()()(),Sl(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),rN(3182," minuteInterval"),Wl(3183,"br"),og()()(),Sl(3184,"td",17)(3185,"code",41),rN(3186,"number"),og()(),Sl(3187,"td",20)(3188,"em")(3189,"strong"),rN(3190,"(opcional)"),og()(),Sl(3191,"p"),rN(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Sl(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),rN(3197," mode"),Wl(3198,"br"),og()()(),Sl(3199,"td",17)(3200,"code",66),rN(3201,"'month-year' "),og(),Sl(3202,"code",67),rN(3203," 'year'"),og()(),Sl(3204,"td",20)(3205,"em")(3206,"strong"),rN(3207,"(opcional)"),og()(),Sl(3208,"p"),rN(3209,"Define o modo de sele\xE7\xE3o do "),Sl(3210,"code"),rN(3211,"po-datepicker"),og(),rN(3212,"."),og(),Sl(3213,"p"),rN(3214,"Valores aceitos:"),og(),Sl(3215,"ul")(3216,"li")(3217,"code"),rN(3218,"'month-year'"),og(),rN(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Sl(3220,"code"),rN(3221,"MM/YYYY"),og(),rN(3222,")"),og(),Sl(3223,"li")(3224,"code"),rN(3225,"'year'"),og(),rN(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),Sl(3227,"code"),rN(3228,"YYYY"),og(),rN(3229,")"),og()(),Sl(3230,"p")(3231,"strong"),rN(3232,"Componente compat\xEDvel:"),og(),Sl(3233,"code"),rN(3234,"po-datepicker"),og()()()(),Sl(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),rN(3239," modelFormat"),Wl(3240,"br"),og()()(),Sl(3241,"td",17)(3242,"code",68),rN(3243,"PoTimepickerModelFormat"),og()(),Sl(3244,"td",20)(3245,"em")(3246,"strong"),rN(3247,"(opcional)"),og()(),Sl(3248,"p"),rN(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Sl(3250,"code"),rN(3251,"po-timepicker"),og(),rN(3252,"."),og(),Sl(3253,"blockquote")(3254,"p"),rN(3255,"Veja os valores v\xE1lidos no "),Sl(3256,"code"),rN(3257,"PoTimepickerModelFormat"),og(),rN(3258,"."),og()(),Sl(3259,"p")(3260,"strong"),rN(3261,"Componente compat\xEDvel:"),og(),Sl(3262,"code"),rN(3263,"po-timepicker"),og()()()(),Sl(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),rN(3268," multiple"),Wl(3269,"br"),og()()(),Sl(3270,"td",17)(3271,"code",28),rN(3272,"boolean"),og()(),Sl(3273,"td",20)(3274,"em")(3275,"strong"),rN(3276,"(opcional)"),og()(),Sl(3277,"p"),rN(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Sl(3279,"p")(3280,"strong"),rN(3281,"Componentes compat\xEDveis:"),og(),Sl(3282,"code"),rN(3283,"po-lookup"),og(),rN(3284,", "),Sl(3285,"code"),rN(3286,"po-upload"),og()()()(),Sl(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),rN(3291," noAutocomplete"),Wl(3292,"br"),og()()(),Sl(3293,"td",17)(3294,"code",28),rN(3295,"boolean"),og()(),Sl(3296,"td",20)(3297,"em")(3298,"strong"),rN(3299,"(opcional)"),og()(),Sl(3300,"p"),rN(3301,"Define a propriedade nativa "),Sl(3302,"code"),rN(3303,"autocomplete"),og(),rN(3304," do campo como off."),og(),Sl(3305,"p")(3306,"strong"),rN(3307,"Componentes compat\xEDveis:"),og(),Sl(3308,"code"),rN(3309,"po-datepicker"),og(),rN(3310,", "),Sl(3311,"code"),rN(3312,"po-datepicker-range"),og(),rN(3313,", "),Sl(3314,"code"),rN(3315,"po-input"),og(),rN(3316,", "),Sl(3317,"code"),rN(3318,"po-number"),og(),rN(3319,", "),Sl(3320,"code"),rN(3321,"po-decimal"),og(),rN(3322,`,
`),Sl(3323,"code"),rN(3324,"po-lookup"),og(),rN(3325,", "),Sl(3326,"code"),rN(3327,"po-password"),og(),rN(3328,", "),Sl(3329,"code"),rN(3330,"po-timepicker"),og(),rN(3331,"."),og()()(),Sl(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),rN(3336," offsetColumns"),Wl(3337,"br"),og()()(),Sl(3338,"td",17)(3339,"code",41),rN(3340,"number"),og()(),Sl(3341,"td",20)(3342,"em")(3343,"strong"),rN(3344,"(opcional)"),og()(),Sl(3345,"p"),rN(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Sl(3347,"p"),rN(3348,"Deve ser usado o sistema de "),Sl(3349,"strong"),rN(3350,"grid"),og(),rN(3351," do PO (1 ... 12 colunas)."),og(),Sl(3352,"blockquote")(3353,"p"),rN(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Sl(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),rN(3359," offsetLgColumns"),Wl(3360,"br"),og()()(),Sl(3361,"td",17)(3362,"code",41),rN(3363,"number"),og()(),Sl(3364,"td",20)(3365,"em")(3366,"strong"),rN(3367,"(opcional)"),og()(),Sl(3368,"p"),rN(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Sl(3370,"p"),rN(3371,"Deve ser usado o sistema de "),Sl(3372,"strong"),rN(3373,"grid"),og(),rN(3374," do PO (1 ... 12 colunas)."),og(),Sl(3375,"blockquote")(3376,"p"),rN(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3378,"code"),rN(3379,"offsetColumns"),og(),rN(3380,"."),og()()()(),Sl(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),rN(3385," offsetMdColumns"),Wl(3386,"br"),og()()(),Sl(3387,"td",17)(3388,"code",41),rN(3389,"number"),og()(),Sl(3390,"td",20)(3391,"em")(3392,"strong"),rN(3393,"(opcional)"),og()(),Sl(3394,"p"),rN(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Sl(3396,"p"),rN(3397,"Deve ser usado o sistema de "),Sl(3398,"strong"),rN(3399,"grid"),og(),rN(3400," do PO (1 ... 12 colunas)."),og(),Sl(3401,"blockquote")(3402,"p"),rN(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3404,"code"),rN(3405,"offsetColumns"),og(),rN(3406,"."),og()()()(),Sl(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),rN(3411," offsetSmColumns"),Wl(3412,"br"),og()()(),Sl(3413,"td",17)(3414,"code",41),rN(3415,"number"),og()(),Sl(3416,"td",20)(3417,"em")(3418,"strong"),rN(3419,"(opcional)"),og()(),Sl(3420,"p"),rN(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Sl(3422,"p"),rN(3423,"Deve ser usado o sistema de "),Sl(3424,"strong"),rN(3425,"grid"),og(),rN(3426," do PO (1 ... 12 colunas)."),og(),Sl(3427,"blockquote")(3428,"p"),rN(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3430,"code"),rN(3431,"offsetColumns"),og(),rN(3432,"."),og()()()(),Sl(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),rN(3437," offsetXlColumns"),Wl(3438,"br"),og()()(),Sl(3439,"td",17)(3440,"code",41),rN(3441,"number"),og()(),Sl(3442,"td",20)(3443,"em")(3444,"strong"),rN(3445,"(opcional)"),og()(),Sl(3446,"p"),rN(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Sl(3448,"p"),rN(3449,"Deve ser usado o sistema de "),Sl(3450,"strong"),rN(3451,"grid"),og(),rN(3452," do PO (1 ... 12 colunas)."),og(),Sl(3453,"blockquote")(3454,"p"),rN(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3456,"code"),rN(3457,"offsetColumns"),og(),rN(3458,"."),og()()()(),Sl(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),rN(3463," onError"),Wl(3464,"br"),og()()(),Sl(3465,"td",17)(3466,"code",29),rN(3467,"Function"),og()(),Sl(3468,"td",20)(3469,"em")(3470,"strong"),rN(3471,"(opcional)"),og()(),Sl(3472,"p"),rN(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Sl(3474,"blockquote")(3475,"p"),rN(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(3477,"code"),rN(3478,"HttpErrorResponse"),og(),rN(3479,"."),og()(),Sl(3480,"p")(3481,"strong"),rN(3482,"Componente compat\xEDvel"),og(),rN(3483,": "),Sl(3484,"code"),rN(3485,"po-upload"),og()()()(),Sl(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),rN(3490," onSuccess"),Wl(3491,"br"),og()()(),Sl(3492,"td",17)(3493,"code",29),rN(3494,"Function"),og()(),Sl(3495,"td",20)(3496,"em")(3497,"strong"),rN(3498,"(opcional)"),og()(),Sl(3499,"p"),rN(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Sl(3501,"blockquote")(3502,"p"),rN(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(3504,"code"),rN(3505,"HttpResponse"),og(),rN(3506,"."),og()(),Sl(3507,"p")(3508,"strong"),rN(3509,"Componente compat\xEDvel"),og(),rN(3510,": "),Sl(3511,"code"),rN(3512,"po-upload"),og()()()(),Sl(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),rN(3517," onUpload"),Wl(3518,"br"),og()()(),Sl(3519,"td",17)(3520,"code",29),rN(3521,"Function"),og()(),Sl(3522,"td",20)(3523,"em")(3524,"strong"),rN(3525,"(opcional)"),og()(),Sl(3526,"p"),rN(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Sl(3528,"pre")(3529,"code"),rN(3530,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Sl(3531,"p")(3532,"strong"),rN(3533,"Componente compat\xEDvel"),og(),rN(3534,": "),Sl(3535,"code"),rN(3536,"po-upload"),og()()()(),Sl(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),rN(3541," optional"),Wl(3542,"br"),og()()(),Sl(3543,"td",17)(3544,"code",28),rN(3545,"boolean"),og()(),Sl(3546,"td",20)(3547,"em")(3548,"strong"),rN(3549,"(opcional)"),og()(),Sl(3550,"p"),rN(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Sl(3552,"blockquote")(3553,"p"),rN(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Sl(3555,"ul")(3556,"li"),rN(3557,"O campo for "),Sl(3558,"code"),rN(3559,"required"),og(),rN(3560,", ou;"),og(),Sl(3561,"li"),rN(3562,"N\xE3o possuir "),Sl(3563,"code"),rN(3564,"help"),og(),rN(3565," e "),Sl(3566,"code"),rN(3567,"label"),og(),rN(3568,"."),og()(),Sl(3569,"p")(3570,"strong"),rN(3571,"Componentes compat\xEDveis:"),og(),Sl(3572,"code"),rN(3573,"po-datepicker"),og(),rN(3574,", "),Sl(3575,"code"),rN(3576,"po-datepicker-range"),og(),rN(3577,", "),Sl(3578,"code"),rN(3579,"po-timepicker"),og(),rN(3580,", "),Sl(3581,"code"),rN(3582,"po-input"),og(),rN(3583,", "),Sl(3584,"code"),rN(3585,"po-number"),og(),rN(3586,`,
`),Sl(3587,"code"),rN(3588,"po-decimal"),og(),rN(3589,", "),Sl(3590,"code"),rN(3591,"po-select"),og(),rN(3592,", "),Sl(3593,"code"),rN(3594,"po-radio-group"),og(),rN(3595,", "),Sl(3596,"code"),rN(3597,"po-combo"),og(),rN(3598,", "),Sl(3599,"code"),rN(3600,"po-lookup"),og(),rN(3601,", "),Sl(3602,"code"),rN(3603,"po-checkbox-group"),og(),rN(3604,", "),Sl(3605,"code"),rN(3606,"po-multiselect"),og(),rN(3607,`,
`),Sl(3608,"code"),rN(3609,"po-textarea"),og(),rN(3610,", "),Sl(3611,"code"),rN(3612,"po-password"),og(),rN(3613,"."),og()()(),Sl(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),rN(3618," options"),Wl(3619,"br"),og()()(),Sl(3620,"td",17)(3621,"code",32),rN(3622,"Array<string> "),og(),Sl(3623,"code",69),rN(3624," Array<PoSelectOption> "),og(),Sl(3625,"code",70),rN(3626," Array<PoMultiselectOption> "),og(),Sl(3627,"code",71),rN(3628," Array<PoCheckboxGroupOption> "),og(),Sl(3629,"code",72),rN(3630," Array<any>"),og()(),Sl(3631,"td",20)(3632,"em")(3633,"strong"),rN(3634,"(opcional)"),og()(),Sl(3635,"p"),rN(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Sl(3637,"p")(3638,"strong"),rN(3639,"Componentes compat\xEDveis:"),og(),Sl(3640,"code"),rN(3641,"po-select"),og(),rN(3642,", "),Sl(3643,"code"),rN(3644,"po-radio-group"),og(),rN(3645,", "),Sl(3646,"code"),rN(3647,"po-checkbox-group"),og(),rN(3648,", "),Sl(3649,"code"),rN(3650,"po-multiselect"),og(),rN(3651,"."),og()()(),Sl(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),rN(3656," optionsMulti"),Wl(3657,"br"),og()()(),Sl(3658,"td",17)(3659,"code",28),rN(3660,"boolean"),og()(),Sl(3661,"td",20)(3662,"em")(3663,"strong"),rN(3664,"(opcional)"),og()(),Sl(3665,"p"),rN(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Sl(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),rN(3671," optionsService"),Wl(3672,"br"),og()()(),Sl(3673,"td",17)(3674,"code",18),rN(3675,"string "),og(),Sl(3676,"code",73),rN(3677," PoComboFilter "),og(),Sl(3678,"code",74),rN(3679," PoMultiselectFilter"),og()(),Sl(3680,"td",20)(3681,"em")(3682,"strong"),rN(3683,"(opcional)"),og()(),Sl(3684,"p"),rN(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(3686,"strong"),rN(3687,"Importante"),og()(),Sl(3688,"blockquote")(3689,"p"),rN(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(3691,"a",75),rN(3692,"guia de API do PO UI"),og(),rN(3693,"."),og()()()(),Sl(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),rN(3698," order"),Wl(3699,"br"),og()()(),Sl(3700,"td",17)(3701,"code",41),rN(3702,"number"),og()(),Sl(3703,"td",20)(3704,"em")(3705,"strong"),rN(3706,"(opcional)"),og()(),Sl(3707,"p"),rN(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Sl(3709,"p"),rN(3710,"Exemplo de utiliza\xE7\xE3o:"),og(),Sl(3711,"p")(3712,"code"),rN(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Sl(3714,"p"),rN(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Sl(3716,"code"),rN(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Sl(3718,"p"),rN(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Sl(3720,"p"),rN(3721,"Campos sem "),Sl(3722,"code"),rN(3723,"order"),og(),rN(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Sl(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),rN(3729," params"),Wl(3730,"br"),og()()(),Sl(3731,"td",17)(3732,"code",33),rN(3733,"any"),og()(),Sl(3734,"td",20)(3735,"em")(3736,"strong"),rN(3737,"(opcional)"),og()(),Sl(3738,"p"),rN(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Sl(3740,"code"),rN(3741,"po-lookup"),og(),rN(3742,` e
`),Sl(3743,"code"),rN(3744,"po-combo"),og(),rN(3745,"."),og(),Sl(3746,"p"),rN(3747,"Por exemplo, para o par\xE2metro "),Sl(3748,"code"),rN(3749,"{ age: 23 }"),og(),rN(3750," a URL da requisi\xE7\xE3o ficaria:"),og(),Sl(3751,"p")(3752,"code"),rN(3753,"url + ?age=23&filter=Peter"),og()()()(),Sl(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),rN(3758," pattern"),Wl(3759,"br"),og()()(),Sl(3760,"td",17)(3761,"code",18),rN(3762,"string"),og()(),Sl(3763,"td",20)(3764,"em")(3765,"strong"),rN(3766,"(opcional)"),og()(),Sl(3767,"p"),rN(3768,"Regex para valida\xE7\xE3o do campo."),og(),Sl(3769,"p")(3770,"strong"),rN(3771,"Componentes compat\xEDveis:"),og(),Sl(3772,"code"),rN(3773,"po-input"),og(),rN(3774,", "),Sl(3775,"code"),rN(3776,"po-password"),og(),rN(3777,"."),og()()(),Sl(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),rN(3782," placeholder"),Wl(3783,"br"),og()()(),Sl(3784,"td",17)(3785,"code",18),rN(3786,"string"),og()(),Sl(3787,"td",20)(3788,"em")(3789,"strong"),rN(3790,"(opcional)"),og()(),Sl(3791,"p"),rN(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Sl(3793,"p")(3794,"strong"),rN(3795,"Componentes compat\xEDveis:"),og(),Sl(3796,"code"),rN(3797,"po-datepicker"),og(),rN(3798,", "),Sl(3799,"code"),rN(3800,"po-datepicker-range"),og(),rN(3801,", "),Sl(3802,"code"),rN(3803,"po-timepicker"),og(),rN(3804,", "),Sl(3805,"code"),rN(3806,"po-input"),og(),rN(3807,", "),Sl(3808,"code"),rN(3809,"po-number"),og(),rN(3810,", "),Sl(3811,"code"),rN(3812,"po-decimal"),og(),rN(3813,", "),Sl(3814,"code"),rN(3815,"po-select"),og(),rN(3816,", "),Sl(3817,"code"),rN(3818,"po-combo"),og(),rN(3819,", "),Sl(3820,"code"),rN(3821,"po-lookup"),og(),rN(3822,", "),Sl(3823,"code"),rN(3824,"po-multiselect"),og(),rN(3825,", "),Sl(3826,"code"),rN(3827,"po-textarea"),og(),rN(3828,", "),Sl(3829,"code"),rN(3830,"po-password"),og(),rN(3831,"."),og()()(),Sl(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),rN(3836," placeholderSearch"),Wl(3837,"br"),og()()(),Sl(3838,"td",17)(3839,"code",18),rN(3840,"string"),og()(),Sl(3841,"td",20)(3842,"em")(3843,"strong"),rN(3844,"(opcional)"),og()(),Sl(3845,"p"),rN(3846,"Placeholder do campo de pesquisa do "),Sl(3847,"code"),rN(3848,"po-multiselect"),og(),rN(3849,"."),og(),Sl(3850,"blockquote")(3851,"p"),rN(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Sl(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),rN(3857," property"),Wl(3858,"br"),og()()(),Sl(3859,"td",17)(3860,"code",18),rN(3861,"string"),og()(),Sl(3862,"td",20)(3863,"p"),rN(3864,"Nome de refer\xEAncia do campo."),og()()(),Sl(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),rN(3869," range"),Wl(3870,"br"),og()()(),Sl(3871,"td",17)(3872,"code",28),rN(3873,"boolean"),og()(),Sl(3874,"td",20)(3875,"em")(3876,"strong"),rN(3877,"(opcional)"),og()(),Sl(3878,"p"),rN(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Sl(3880,"blockquote")(3881,"p"),rN(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Sl(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),rN(3887," rangePresetOptions"),Wl(3888,"br"),og()()(),Sl(3889,"td",17)(3890,"code",76),rN(3891,"Array<PoCalendarRangePreset>"),og()(),Sl(3892,"td",20)(3893,"em")(3894,"strong"),rN(3895,"(opcional)"),og()(),Sl(3896,"p"),rN(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Sl(3898,"p"),rN(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Sl(3900,"code"),rN(3901,"PoCalendarRangePreset"),og(),rN(3902,"."),og(),Sl(3903,"p")(3904,"strong"),rN(3905,"Componente compat\xEDvel:"),og(),Sl(3906,"code"),rN(3907,"po-datepicker-range"),og()()()(),Sl(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),rN(3912," rangePresets"),Wl(3913,"br"),og()()(),Sl(3914,"td",17)(3915,"code",28),rN(3916,"boolean "),og(),Sl(3917,"code",32),rN(3918," Array<string>"),og()(),Sl(3919,"td",20)(3920,"em")(3921,"strong"),rN(3922,"(opcional)"),og()(),Sl(3923,"p"),rN(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Sl(3925,"p"),rN(3926,"Aceita os seguintes valores:"),og(),Sl(3927,"ul")(3928,"li")(3929,"code"),rN(3930,"true"),og(),rN(3931,": exibe todos os presets padr\xE3o."),og(),Sl(3932,"li")(3933,"code"),rN(3934,"false"),og(),rN(3935,": n\xE3o exibe os presets padr\xE3o."),og(),Sl(3936,"li")(3937,"code"),rN(3938,"Array<string>"),og(),rN(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Sl(3940,"p")(3941,"strong"),rN(3942,"Componente compat\xEDvel:"),og(),Sl(3943,"code"),rN(3944,"po-datepicker-range"),og()()()(),Sl(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),rN(3949," rangePresetsOrder"),Wl(3950,"br"),og()()(),Sl(3951,"td",17)(3952,"code",77),rN(3953,"'asc' "),og(),Sl(3954,"code",78),rN(3955," 'desc'"),og()(),Sl(3956,"td",20)(3957,"em")(3958,"strong"),rN(3959,"(opcional)"),og()(),Sl(3960,"p"),rN(3961,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Sl(3962,"p"),rN(3963,"Valores aceitos:"),og(),Sl(3964,"ul")(3965,"li")(3966,"code"),rN(3967,"'asc'"),og(),rN(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Sl(3969,"li")(3970,"code"),rN(3971,"'desc'"),og(),rN(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Sl(3973,"p")(3974,"strong"),rN(3975,"Componente compat\xEDvel:"),og(),Sl(3976,"code"),rN(3977,"po-datepicker-range"),og()()()(),Sl(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),rN(3982," readonly"),Wl(3983,"br"),og()()(),Sl(3984,"td",17)(3985,"code",28),rN(3986,"boolean"),og()(),Sl(3987,"td",20)(3988,"em")(3989,"strong"),rN(3990,"(opcional)"),og()(),Sl(3991,"p"),rN(3992,"Indica que o campo ser\xE1 somente leitura."),og(),Sl(3993,"p")(3994,"strong"),rN(3995,"Componentes compat\xEDveis:"),og(),Sl(3996,"code"),rN(3997,"po-datepicker"),og(),rN(3998,", "),Sl(3999,"code"),rN(4e3,"po-datepicker-range"),og(),rN(4001,", "),Sl(4002,"code"),rN(4003,"po-timepicker"),og(),rN(4004,", "),Sl(4005,"code"),rN(4006,"po-input"),og(),rN(4007,", "),Sl(4008,"code"),rN(4009,"po-number"),og(),rN(4010,`,
`),Sl(4011,"code"),rN(4012,"po-decimal"),og(),rN(4013,", "),Sl(4014,"code"),rN(4015,"po-select"),og(),rN(4016,", "),Sl(4017,"code"),rN(4018,"po-textarea"),og(),rN(4019,", "),Sl(4020,"code"),rN(4021,"po-password"),og(),rN(4022,"."),og()()(),Sl(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),rN(4027," removeInitialFilter"),Wl(4028,"br"),og()()(),Sl(4029,"td",17)(4030,"code",28),rN(4031,"boolean"),og()(),Sl(4032,"td",20)(4033,"em")(4034,"strong"),rN(4035,"(opcional)"),og()(),Sl(4036,"p"),rN(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Sl(4038,"blockquote")(4039,"p"),rN(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Sl(4041,"p")(4042,"strong"),rN(4043,"Componente compat\xEDvel"),og(),rN(4044,": "),Sl(4045,"code"),rN(4046,"po-combo"),og()()()(),Sl(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),rN(4051," required"),Wl(4052,"br"),og()()(),Sl(4053,"td",17)(4054,"code",28),rN(4055,"boolean"),og()(),Sl(4056,"td",20)(4057,"em")(4058,"strong"),rN(4059,"(opcional)"),og()(),Sl(4060,"p"),rN(4061,"Define a obrigatoriedade do campo."),og(),Sl(4062,"p")(4063,"strong"),rN(4064,"Componentes compat\xEDveis:"),og(),Sl(4065,"code"),rN(4066,"po-datepicker"),og(),rN(4067,", "),Sl(4068,"code"),rN(4069,"po-datepicker-range"),og(),rN(4070,", "),Sl(4071,"code"),rN(4072,"po-timepicker"),og(),rN(4073,", "),Sl(4074,"code"),rN(4075,"po-input"),og(),rN(4076,", "),Sl(4077,"code"),rN(4078,"po-number"),og(),rN(4079,`,
`),Sl(4080,"code"),rN(4081,"po-decimal"),og(),rN(4082,", "),Sl(4083,"code"),rN(4084,"po-select"),og(),rN(4085,", "),Sl(4086,"code"),rN(4087,"po-radio-group"),og(),rN(4088,", "),Sl(4089,"code"),rN(4090,"po-combo"),og(),rN(4091,", "),Sl(4092,"code"),rN(4093,"po-lookup"),og(),rN(4094,", "),Sl(4095,"code"),rN(4096,"po-checkbox-group"),og(),rN(4097,", "),Sl(4098,"code"),rN(4099,"po-multiselect"),og(),rN(4100,`,
`),Sl(4101,"code"),rN(4102,"po-textarea"),og(),rN(4103,", "),Sl(4104,"code"),rN(4105,"po-password``, "),og(),rN(4106,"po-upload`."),og()()(),Sl(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),rN(4111," requiredFieldErrorMessage"),Wl(4112,"br"),og()()(),Sl(4113,"td",17)(4114,"code",28),rN(4115,"boolean"),og()(),Sl(4116,"td",20)(4117,"em")(4118,"strong"),rN(4119,"(opcional)"),og()(),Sl(4120,"p"),rN(4121,"Exibe a mensagem setada na propriedade "),Sl(4122,"code"),rN(4123,"errorMessage"),og(),rN(4124," se o campo estiver vazio e for requerido."),og(),Sl(4125,"blockquote")(4126,"p"),rN(4127,"Necess\xE1rio que a propriedade "),Sl(4128,"code"),rN(4129,"required"),og(),rN(4130," esteja habilitada."),og()(),Sl(4131,"p")(4132,"strong"),rN(4133,"Componentes compat\xEDveis:"),og(),Sl(4134,"code"),rN(4135,"po-datepicker"),og(),rN(4136,", "),Sl(4137,"code"),rN(4138,"po-timepicker"),og(),rN(4139,", "),Sl(4140,"code"),rN(4141,"po-input"),og(),rN(4142,", "),Sl(4143,"code"),rN(4144,"po-number"),og(),rN(4145,", "),Sl(4146,"code"),rN(4147,"po-decimal"),og(),rN(4148,", "),Sl(4149,"code"),rN(4150,"po-password"),og(),rN(4151,"."),og()()(),Sl(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),rN(4156," restrictions"),Wl(4157,"br"),og()()(),Sl(4158,"td",17)(4159,"code",79),rN(4160,"PoUploadFileRestrictions"),og()(),Sl(4161,"td",20)(4162,"em")(4163,"strong"),rN(4164,"(opcional)"),og()(),Sl(4165,"p"),rN(4166,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(4167,"code"),rN(4168,"PoUploadFileRestrictions"),og(),rN(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Sl(4170,"p")(4171,"strong"),rN(4172,"Componente compat\xEDvel"),og(),rN(4173,": "),Sl(4174,"code"),rN(4175,"po-upload"),og()()()(),Sl(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),rN(4180," rows"),Wl(4181,"br"),og()()(),Sl(4182,"td",17)(4183,"code",41),rN(4184,"number"),og()(),Sl(4185,"td",20)(4186,"em")(4187,"strong"),rN(4188,"(opcional)"),og()(),Sl(4189,"p"),rN(4190,"Quantidade de linhas exibidas no "),Sl(4191,"code"),rN(4192,"po-textarea"),og(),rN(4193,"."),og()()(),Sl(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),rN(4198," searchService"),Wl(4199,"br"),og()()(),Sl(4200,"td",17)(4201,"code",18),rN(4202,"string "),og(),Sl(4203,"code",80),rN(4204," PoLookupFilter"),og()(),Sl(4205,"td",20)(4206,"em")(4207,"strong"),rN(4208,"(opcional)"),og()(),Sl(4209,"p"),rN(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Sl(4211,"code"),rN(4212,"columns"),og(),rN(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Sl(4214,"strong"),rN(4215,"Importante:"),og()(),Sl(4216,"blockquote")(4217,"p"),rN(4218,"Caso utilizar a propriedade "),Sl(4219,"code"),rN(4220,"optionsService"),og(),rN(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(4222,"a",75),rN(4223,"guia de API do PO UI"),og(),rN(4224,"."),og()()()(),Sl(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),rN(4229," secondInterval"),Wl(4230,"br"),og()()(),Sl(4231,"td",17)(4232,"code",41),rN(4233,"number"),og()(),Sl(4234,"td",20)(4235,"em")(4236,"strong"),rN(4237,"(opcional)"),og()(),Sl(4238,"p"),rN(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Sl(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),rN(4244," secret"),Wl(4245,"br"),og()()(),Sl(4246,"td",17)(4247,"code",28),rN(4248,"boolean"),og()(),Sl(4249,"td",20)(4250,"em")(4251,"strong"),rN(4252,"(opcional)"),og()(),Sl(4253,"p"),rN(4254,"Esconde a informa\xE7\xE3o estilo "),Sl(4255,"em"),rN(4256,"password"),og(),rN(4257,", pode ser utilizado quando o tipo de dado for "),Sl(4258,"em"),rN(4259,"string"),og(),rN(4260,"."),og()()(),Sl(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),rN(4265," showRequired"),Wl(4266,"br"),og()()(),Sl(4267,"td",17)(4268,"code",28),rN(4269,"boolean"),og()(),Sl(4270,"td",20)(4271,"em")(4272,"strong"),rN(4273,"(opcional)"),og()(),Sl(4274,"p"),rN(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Sl(4276,"blockquote")(4277,"p"),rN(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Sl(4279,"ul")(4280,"li"),rN(4281,"N\xE3o possuir "),Sl(4282,"code"),rN(4283,"p-help"),og(),rN(4284," e/ou "),Sl(4285,"code"),rN(4286,"p-label"),og(),rN(4287,"."),og()(),Sl(4288,"p")(4289,"strong"),rN(4290,"Componentes compat\xEDveis:"),og(),Sl(4291,"code"),rN(4292,"po-datepicker"),og(),rN(4293,", "),Sl(4294,"code"),rN(4295,"po-datepicker-range"),og(),rN(4296,", "),Sl(4297,"code"),rN(4298,"po-timepicker"),og(),rN(4299,", "),Sl(4300,"code"),rN(4301,"po-input"),og(),rN(4302,", "),Sl(4303,"code"),rN(4304,"po-number"),og(),rN(4305,`,
`),Sl(4306,"code"),rN(4307,"po-decimal"),og(),rN(4308,", "),Sl(4309,"code"),rN(4310,"po-select"),og(),rN(4311,", "),Sl(4312,"code"),rN(4313,"po-radio-group"),og(),rN(4314,", "),Sl(4315,"code"),rN(4316,"po-combo"),og(),rN(4317,", "),Sl(4318,"code"),rN(4319,"po-lookup"),og(),rN(4320,", "),Sl(4321,"code"),rN(4322,"po-checkbox-group"),og(),rN(4323,", "),Sl(4324,"code"),rN(4325,"po-multiselect"),og(),rN(4326,`,
`),Sl(4327,"code"),rN(4328,"po-textarea"),og(),rN(4329,", "),Sl(4330,"code"),rN(4331,"po-password"),og(),rN(4332,", "),Sl(4333,"code"),rN(4334,"po-upload"),og(),rN(4335,"."),og()()(),Sl(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),rN(4340," showSeconds"),Wl(4341,"br"),og()()(),Sl(4342,"td",17)(4343,"code",28),rN(4344,"boolean"),og()(),Sl(4345,"td",20)(4346,"em")(4347,"strong"),rN(4348,"(opcional)"),og()(),Sl(4349,"p"),rN(4350,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Sl(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),rN(4355," showThumbnail"),Wl(4356,"br"),og()()(),Sl(4357,"td",17)(4358,"code",28),rN(4359,"boolean"),og()(),Sl(4360,"td",20)(4361,"em")(4362,"strong"),rN(4363,"(opcional)"),og()(),Sl(4364,"p"),rN(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Sl(4366,"blockquote")(4367,"p"),rN(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(4369,"code"),rN(4370,".png"),og(),rN(4371,", "),Sl(4372,"code"),rN(4373,".jpg"),og(),rN(4374,", "),Sl(4375,"code"),rN(4376,".jpeg"),og(),rN(4377," e "),Sl(4378,"code"),rN(4379,".gif"),og(),rN(4380,")."),og()(),Sl(4381,"p")(4382,"strong"),rN(4383,"Componente compat\xEDvel"),og(),rN(4384,": "),Sl(4385,"code"),rN(4386,"po-upload"),og()()()(),Sl(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),rN(4391," size"),Wl(4392,"br"),og()()(),Sl(4393,"td",17)(4394,"code",18),rN(4395,"string"),og()(),Sl(4396,"td",20)(4397,"em")(4398,"strong"),rN(4399,"(opcional)"),og()(),Sl(4400,"p"),rN(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Sl(4402,"ul")(4403,"li")(4404,"code"),rN(4405,"small"),og(),rN(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Sl(4407,"li")(4408,"code"),rN(4409,"medium"),og(),rN(4410,": aplica a medida medium de cada componente."),og(),Sl(4411,"li")(4412,"code"),rN(4413,"large"),og(),rN(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),Sl(4415,"code"),rN(4416,"po-checkbox"),og(),rN(4417," e "),Sl(4418,"code"),rN(4419,"po-radio-group"),og(),rN(4420,")."),Sl(4421,"blockquote")(4422,"p"),rN(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(4424,"code"),rN(4425,"medium"),og(),rN(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(4427,"a",21),rN(4428,"po-theme"),og(),rN(4429,"."),og()()()()()(),Sl(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),rN(4434," sort"),Wl(4435,"br"),og()()(),Sl(4436,"td",17)(4437,"code",28),rN(4438,"boolean"),og()(),Sl(4439,"td",20)(4440,"em")(4441,"strong"),rN(4442,"(opcional)"),og()(),Sl(4443,"p"),rN(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Sl(4445,"p")(4446,"strong"),rN(4447,"Componentes compat\xEDveis:"),og(),Sl(4448,"code"),rN(4449,"po-combo"),og(),rN(4450,", po-multiselect"),og()()(),Sl(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),rN(4455," step"),Wl(4456,"br"),og()()(),Sl(4457,"td",17)(4458,"code",41),rN(4459,"number"),og()(),Sl(4460,"td",20)(4461,"em")(4462,"strong"),rN(4463,"(opcional)"),og()(),Sl(4464,"p"),rN(4465,"Intervalo utilizado no "),Sl(4466,"code"),rN(4467,"po-number"),og(),rN(4468,"."),og()()(),Sl(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),rN(4473," thousandMaxlength"),Wl(4474,"br"),og()()(),Sl(4475,"td",17)(4476,"code",41),rN(4477,"number"),og()(),Sl(4478,"td",20)(4479,"em")(4480,"strong"),rN(4481,"(opcional)"),og()(),Sl(4482,"p"),rN(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Sl(4484,"blockquote")(4485,"p"),rN(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(4487,"code"),rN(4488,"type"),og(),rN(4489," for "),Sl(4490,"em"),rN(4491,"currency"),og(),rN(4492," ou "),Sl(4493,"em"),rN(4494,"decimal"),og(),rN(4495,"."),og()()()(),Sl(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),rN(4500," type"),Wl(4501,"br"),og()()(),Sl(4502,"td",17)(4503,"code",18),rN(4504,"string "),og(),Sl(4505,"code",81),rN(4506," PoDynamicFieldType"),og()(),Sl(4507,"td",20)(4508,"em")(4509,"strong"),rN(4510,"(opcional)"),og()(),Sl(4511,"p"),rN(4512,"Tipo do valor campo."),og(),Sl(4513,"p"),rN(4514,"Valores v\xE1lidos:"),og(),Sl(4515,"ul")(4516,"li")(4517,"code"),rN(4518,"boolean"),og(),rN(4519,": Valores "),Sl(4520,"em"),rN(4521,"booleanos"),og(),rN(4522,"."),og(),Sl(4523,"li")(4524,"code"),rN(4525,"currency"),og(),rN(4526,": Valores monet\xE1rios."),og(),Sl(4527,"li")(4528,"code"),rN(4529,"decimal"),og(),rN(4530,": Valores decimais."),og(),Sl(4531,"li")(4532,"code"),rN(4533,"date"),og(),rN(4534,": Valores de datas."),Sl(4535,"ul")(4536,"li"),rN(4537,"Aceita os tipos "),Sl(4538,"strong"),rN(4539,"string"),og(),rN(4540," e "),Sl(4541,"strong"),rN(4542,"Date"),og(),rN(4543,` padr\xE3o do Javascript,
por exemplo: `),Sl(4544,"code"),rN(4545,"'2017-11-28'"),og(),rN(4546," ou "),Sl(4547,"code"),rN(4548,"new Date(2017, 10, 28)"),og(),rN(4549,"."),og()()(),Sl(4550,"li")(4551,"code"),rN(4552,"dateTime"),og(),rN(4553,": Valor de data com hor\xE1rio."),Sl(4554,"ul")(4555,"li"),rN(4556,"Aceita o tipo "),Sl(4557,"em"),rN(4558,"string"),og(),rN(4559," no formato "),Sl(4560,"strong"),rN(4561,"ISO-8601"),og(),rN(4562," extendido "),Sl(4563,"strong"),rN(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),rN(4565,`
e o tipo `),Sl(4566,"strong"),rN(4567,"Date"),og(),rN(4568," padr\xE3o do Javascript, por exemplo: "),Sl(4569,"code"),rN(4570,"'2017-11-28T00:00:00-02:00'"),og(),rN(4571," ou "),Sl(4572,"code"),rN(4573,"new Date(2017, 10, 28)"),og(),rN(4574,"."),og()()(),Sl(4575,"li")(4576,"code"),rN(4577,"number"),og(),rN(4578,": Valores num\xE9ricos."),og(),Sl(4579,"li")(4580,"code"),rN(4581,"string"),og(),rN(4582,": Textos."),og(),Sl(4583,"li")(4584,"code"),rN(4585,"time"),og(),rN(4586,": Valor do hor\xE1rio."),Sl(4587,"ul")(4588,"li"),rN(4589,"Aceita o tipo "),Sl(4590,"strong"),rN(4591,"string"),og(),rN(4592," nos formatos "),Sl(4593,"strong"),rN(4594,"'HH:mm:ss'"),og(),rN(4595," ou "),Sl(4596,"strong"),rN(4597,"'HH:mm:ss.ffffff'"),og(),rN(4598,", por exemplo: "),Sl(4599,"code"),rN(4600,"'23:12:45'"),og(),rN(4601,"."),og()()()()()(),Sl(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),rN(4606," url"),Wl(4607,"br"),og()()(),Sl(4608,"td",17)(4609,"code",18),rN(4610,"string"),og()(),Sl(4611,"td",20)(4612,"em")(4613,"strong"),rN(4614,"(opcional)"),og()(),Sl(4615,"p"),rN(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Sl(4617,"p")(4618,"strong"),rN(4619,"Componente compat\xEDvel"),og(),rN(4620,": "),Sl(4621,"code"),rN(4622,"po-upload"),og()()()(),Sl(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),rN(4627," validate"),Wl(4628,"br"),og()()(),Sl(4629,"td",17)(4630,"code",18),rN(4631,"string "),og(),Sl(4632,"code",29),rN(4633," Function"),og()(),Sl(4634,"td",20)(4635,"em")(4636,"strong"),rN(4637,"(opcional)"),og()(),Sl(4638,"p"),rN(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(4640,"strong"),rN(4641,"mudan\xE7as do campo"),og(),rN(4642,"."),og(),Sl(4643,"ul")(4644,"li"),rN(4645,"A propriedade aceita os seguintes tipos:"),og()(),Sl(4646,"ul")(4647,"li")(4648,"strong"),rN(4649,"String"),og(),rN(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(4651,"code"),rN(4652,"POST"),og(),rN(4653,"."),og(),Sl(4654,"li")(4655,"strong"),rN(4656,"Function"),og(),rN(4657,": M\xE9todo que ser\xE1 executado."),og()(),Sl(4658,"p"),rN(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Sl(4660,"code"),rN(4661,"PoDynamicFormFieldChanged"),og(),rN(4662,":"),og(),Sl(4663,"p")(4664,"code"),rN(4665,"{ property: 'property name', value: 'new value' }"),og()(),Sl(4666,"p"),rN(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(4668,"a",82),rN(4669,"PoDynamicFormFieldValidation"),og(),rN(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Sl(4671,"pre")(4672,"code"),rN(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Sl(4674,"p"),rN(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(4676,"code"),rN(4677,"bind"),og(),rN(4678,`, por exemplo:
`),Sl(4679,"code"),rN(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Sl(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),rN(4685," visible"),Wl(4686,"br"),og()()(),Sl(4687,"td",17)(4688,"code",28),rN(4689,"boolean"),og()(),Sl(4690,"td",20)(4691,"em")(4692,"strong"),rN(4693,"(opcional)"),og()(),Sl(4694,"p"),rN(4695,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Sl(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),rN(4700," yearRangeLimit"),Wl(4701,"br"),og()()(),Sl(4702,"td",17)(4703,"code",41),rN(4704,"number"),og()(),Sl(4705,"td",20)(4706,"em")(4707,"strong"),rN(4708,"(opcional)"),og()(),Sl(4709,"p"),rN(4710,"Define o limite de anos exibidos na lista de anos do "),Sl(4711,"code"),rN(4712,"po-datepicker"),og(),rN(4713," nos modos "),Sl(4714,"code"),rN(4715,"month-year"),og(),rN(4716," e "),Sl(4717,"code"),rN(4718,"year"),og(),rN(4719,"."),og()()()(),Sl(4720,"h4",38)(4721,"code",5),rN(4722,"PoDynamicFormLoad"),og()(),Sl(4723,"div",2)(4724,"p"),Wl(4725,"a",83),og(),Sl(4726,"p"),rN(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),og()(),Sl(4728,"h4",9),rN(4729,"Propriedades"),og(),Sl(4730,"table",10)(4731,"tr",11)(4732,"th",12),rN(4733,"Nome"),og(),Sl(4734,"th",12),rN(4735,"Tipo"),og(),Sl(4736,"th",12),rN(4737,"Descri\xE7\xE3o"),og()(),Sl(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),rN(4742," fields"),Wl(4743,"br"),og()()(),Sl(4744,"td",17)(4745,"code",22),rN(4746,"Array<PoDynamicFormField>"),og()(),Sl(4747,"td",20)(4748,"em")(4749,"strong"),rN(4750,"(opcional)"),og()(),Sl(4751,"p"),rN(4752,"Lista com as novas defini\xE7\xF5es dos campos."),og(),Sl(4753,"blockquote")(4754,"p"),rN(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),og()()()(),Sl(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),rN(4760," focus"),Wl(4761,"br"),og()()(),Sl(4762,"td",17)(4763,"code",18),rN(4764,"string"),og()(),Sl(4765,"td",20)(4766,"em")(4767,"strong"),rN(4768,"(opcional)"),og()(),Sl(4769,"p"),rN(4770,"Nome do campo que receber\xE1 o foco."),og(),Sl(4771,"p"),rN(4772,"Exemplo:"),og(),Sl(4773,"pre")(4774,"code"),rN(4775,`focus: 'name'
`),og()()()(),Sl(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),rN(4780," value"),Wl(4781,"br"),og()()(),Sl(4782,"td",17)(4783,"code",33),rN(4784,"any"),og()(),Sl(4785,"td",20)(4786,"em")(4787,"strong"),rN(4788,"(opcional)"),og()(),Sl(4789,"p"),rN(4790,"Objeto contendo os novos valores."),og(),Sl(4791,"p"),rN(4792,"Exemplo:"),og(),Sl(4793,"pre")(4794,"code"),rN(4795,`{
  name: 'new name',
  age: 10
}
`),og()(),Sl(4796,"blockquote")(4797,"p"),rN(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),og()()()()(),Sl(4799,"h4",38)(4800,"code",5),rN(4801,"PoDynamicFormFieldChanged"),og()(),Sl(4802,"div",2)(4803,"p"),rN(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),og()(),Sl(4805,"h4",9),rN(4806,"Propriedades"),og(),Sl(4807,"table",10)(4808,"tr",11)(4809,"th",12),rN(4810,"Nome"),og(),Sl(4811,"th",12),rN(4812,"Tipo"),og(),Sl(4813,"th",12),rN(4814,"Descri\xE7\xE3o"),og()(),Sl(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),rN(4819," property"),Wl(4820,"br"),og()()(),Sl(4821,"td",17)(4822,"code",18),rN(4823,"string"),og()(),Sl(4824,"td",20)(4825,"p"),rN(4826,"Valor da propriedade do campo."),og()()(),Sl(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),rN(4831," value"),Wl(4832,"br"),og()()(),Sl(4833,"td",17)(4834,"code",33),rN(4835,"any"),og()(),Sl(4836,"td",20)(4837,"p"),rN(4838,"Novo valor do campo."),og()()()(),Sl(4839,"h4",38)(4840,"code",5),rN(4841,"PoDynamicFormFieldValidation"),og()(),Sl(4842,"div",2)(4843,"p"),Wl(4844,"a",84),og(),Sl(4845,"p"),rN(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),og()(),Sl(4847,"h4",9),rN(4848,"Propriedades"),og(),Sl(4849,"table",10)(4850,"tr",11)(4851,"th",12),rN(4852,"Nome"),og(),Sl(4853,"th",12),rN(4854,"Tipo"),og(),Sl(4855,"th",12),rN(4856,"Descri\xE7\xE3o"),og()(),Sl(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),rN(4861," field"),Wl(4862,"br"),og()()(),Sl(4863,"td",17)(4864,"code",85),rN(4865,"PoDynamicFormField"),og()(),Sl(4866,"td",20)(4867,"em")(4868,"strong"),rN(4869,"(opcional)"),og()(),Sl(4870,"p"),rN(4871,"Novas defini\xE7\xF5es das propriedades do campo."),og(),Sl(4872,"blockquote")(4873,"p"),rN(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),og()()()(),Sl(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),rN(4879," focus"),Wl(4880,"br"),og()()(),Sl(4881,"td",17)(4882,"code",28),rN(4883,"boolean"),og()(),Sl(4884,"td",20)(4885,"em")(4886,"strong"),rN(4887,"(opcional)"),og()(),Sl(4888,"p"),rN(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),og()()(),Sl(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),rN(4894," value"),Wl(4895,"br"),og()()(),Sl(4896,"td",17)(4897,"code",33),rN(4898,"any"),og()(),Sl(4899,"td",20)(4900,"em")(4901,"strong"),rN(4902,"(opcional)"),og()(),Sl(4903,"p"),rN(4904,"Novo valor do campo"),og()()()(),Sl(4905,"h4",38)(4906,"code",5),rN(4907,"PoDynamicFormValidation"),og()(),Sl(4908,"div",2)(4909,"p"),Wl(4910,"a",86),og(),Sl(4911,"p"),rN(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),og()(),Sl(4913,"h4",9),rN(4914,"Propriedades"),og(),Sl(4915,"table",10)(4916,"tr",11)(4917,"th",12),rN(4918,"Nome"),og(),Sl(4919,"th",12),rN(4920,"Tipo"),og(),Sl(4921,"th",12),rN(4922,"Descri\xE7\xE3o"),og()(),Sl(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),rN(4927," fields"),Wl(4928,"br"),og()()(),Sl(4929,"td",17)(4930,"code",22),rN(4931,"Array<PoDynamicFormField>"),og()(),Sl(4932,"td",20)(4933,"em")(4934,"strong"),rN(4935,"(opcional)"),og()(),Sl(4936,"p"),rN(4937,"Lista com as novas defini\xE7\xF5es dos campos."),og(),Sl(4938,"blockquote")(4939,"p"),rN(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),og()()()(),Sl(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),rN(4945," focus"),Wl(4946,"br"),og()()(),Sl(4947,"td",17)(4948,"code",18),rN(4949,"string"),og()(),Sl(4950,"td",20)(4951,"em")(4952,"strong"),rN(4953,"(opcional)"),og()(),Sl(4954,"p"),rN(4955,"Nome do campo que receber\xE1 o foco."),og(),Sl(4956,"p"),rN(4957,"Exemplo:"),og(),Sl(4958,"pre")(4959,"code"),rN(4960,`focus: 'name'
`),og()()()(),Sl(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),rN(4965," value"),Wl(4966,"br"),og()()(),Sl(4967,"td",17)(4968,"code",33),rN(4969,"any"),og()(),Sl(4970,"td",20)(4971,"em")(4972,"strong"),rN(4973,"(opcional)"),og()(),Sl(4974,"p"),rN(4975,"Objeto contendo os novos valores."),og(),Sl(4976,"p"),rN(4977,"Exemplo:"),og(),Sl(4978,"pre")(4979,"code"),rN(4980,`{
  name: 'new name',
  age: 10
}
`),og()(),Sl(4981,"blockquote")(4982,"p"),rN(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),og()()()()(),Sl(4984,"h4",38)(4985,"code",5),rN(4986,"ErrorAsyncProperties"),og()(),Sl(4987,"div",2)(4988,"p"),rN(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Sl(4990,"h4",9),rN(4991,"Propriedades"),og(),Sl(4992,"table",10)(4993,"tr",11)(4994,"th",12),rN(4995,"Nome"),og(),Sl(4996,"th",12),rN(4997,"Tipo"),og(),Sl(4998,"th",12),rN(4999,"Descri\xE7\xE3o"),og()(),Sl(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),rN(5004," errorAsync"),Wl(5005,"br"),og()()(),Sl(5006,"td",17)(5007,"code",46),rN(5008,"(value) => Observable<boolean>"),og()(),Sl(5009,"td",20)(5010,"p"),rN(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(5012,"code"),rN(5013,"change"),og(),rN(5014," ou "),Sl(5015,"code"),rN(5016,"change-model"),og(),rN(5017,", dependendo do valor da propriedade "),Sl(5018,"code"),rN(5019,"triggerMode"),og(),rN(5020,"."),og()()(),Sl(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),rN(5025," triggerMode"),Wl(5026,"br"),og()()(),Sl(5027,"td",17)(5028,"code",87),rN(5029,"'change' "),og(),Sl(5030,"code",88),rN(5031," 'changeModel'"),og()(),Sl(5032,"td",20)(5033,"em")(5034,"strong"),rN(5035,"(opcional)"),og()(),Sl(5036,"p"),rN(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(5038,"code"),rN(5039,"change"),og(),rN(5040," ou "),Sl(5041,"code"),rN(5042,"change-model"),og(),rN(5043,"."),og()()()(),Sl(5044,"h3"),rN(5045,"Enums"),og(),Sl(5046,"h4",4)(5047,"code",5),rN(5048,"ForceBooleanComponentEnum"),og()(),Sl(5049,"div",2)(5050,"p"),rN(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),og()(),Sl(5052,"h4",9),rN(5053,"Propriedades"),og(),Sl(5054,"table",10)(5055,"tr",11)(5056,"th",12),rN(5057,"Nome"),og(),Sl(5058,"th",12),rN(5059,"Descri\xE7\xE3o"),og()(),Sl(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),rN(5064," switch"),Wl(5065,"br"),og()()(),Sl(5066,"td",20)(5067,"p"),rN(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),og()()(),Sl(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),rN(5073," checkbox"),Wl(5074,"br"),og()()(),Sl(5075,"td",20)(5076,"p"),rN(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),og()()()(),Sl(5078,"h4",4)(5079,"code",5),rN(5080,"ForceOptionComponentEnum"),og()(),Sl(5081,"div",2)(5082,"p"),rN(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),og()(),Sl(5084,"h4",9),rN(5085,"Propriedades"),og(),Sl(5086,"table",10)(5087,"tr",11)(5088,"th",12),rN(5089,"Nome"),og(),Sl(5090,"th",12),rN(5091,"Descri\xE7\xE3o"),og()(),Sl(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),rN(5096," radioGroup"),Wl(5097,"br"),og()()(),Sl(5098,"td",20)(5099,"p"),rN(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),og()()(),Sl(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),rN(5105," select"),Wl(5106,"br"),og()()(),Sl(5107,"td",20)(5108,"p"),rN(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),og()()()(),Sl(5110,"h4",4)(5111,"code",5),rN(5112,"PoDynamicFieldType"),og()(),Sl(5113,"div",2)(5114,"p"),rN(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),og()(),Sl(5116,"h4",9),rN(5117,"Propriedades"),og(),Sl(5118,"table",10)(5119,"tr",11)(5120,"th",12),rN(5121,"Nome"),og(),Sl(5122,"th",12),rN(5123,"Descri\xE7\xE3o"),og()(),Sl(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),rN(5128," Boolean"),Wl(5129,"br"),og()()(),Sl(5130,"td",20)(5131,"p"),rN(5132,"Valor booleano."),og()()(),Sl(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),rN(5137," Currency"),Wl(5138,"br"),og()()(),Sl(5139,"td",20)(5140,"p"),rN(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),og()()(),Sl(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),rN(5146," Decimal"),Wl(5147,"br"),og()()(),Sl(5148,"td",20)(5149,"p"),rN(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),og()()(),Sl(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),rN(5155," Date"),Wl(5156,"br"),og()()(),Sl(5157,"td",20)(5158,"p"),rN(5159,"Valor para data."),og()()(),Sl(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),rN(5164," DateTime"),Wl(5165,"br"),og()()(),Sl(5166,"td",20)(5167,"p"),rN(5168,"Valor para data e hora."),og()()(),Sl(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),rN(5173," Time"),Wl(5174,"br"),og()()(),Sl(5175,"td",20)(5176,"p"),rN(5177,"Utilizado para informar/exibir hora."),og()()(),Sl(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),rN(5182," Number"),Wl(5183,"br"),og()()(),Sl(5184,"td",20)(5185,"p"),rN(5186,"Valor num\xE9rico."),og()()(),Sl(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),rN(5191," String"),Wl(5192,"br"),og()()(),Sl(5193,"td",20)(5194,"p"),rN(5195,"Texto."),og()()(),Sl(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),rN(5200," Upload"),Wl(5201,"br"),og()()(),Sl(5202,"td",20)(5203,"p"),rN(5204,"Utilizado para fazer uploads de arquivos."),og()()()(),Sl(5205,"h4",4)(5206,"code",5),rN(5207,"PoTimepickerModelFormat"),og()(),Sl(5208,"div",2)(5209,"p")(5210,"em"),rN(5211,"Enum"),og(),rN(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),og()(),Sl(5213,"h4",9),rN(5214,"Propriedades"),og(),Sl(5215,"table",10)(5216,"tr",11)(5217,"th",12),rN(5218,"Nome"),og(),Sl(5219,"th",12),rN(5220,"Descri\xE7\xE3o"),og()(),Sl(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),rN(5225," HourMinute"),Wl(5226,"br"),og()()(),Sl(5227,"td",20)(5228,"p"),rN(5229,"Formato b\xE1sico "),Sl(5230,"code"),rN(5231,"HH:mm"),og(),rN(5232," (ex: "),Sl(5233,"code"),rN(5234,"14:30"),og(),rN(5235,")."),og()()(),Sl(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),rN(5240," HourMinuteSecond"),Wl(5241,"br"),og()()(),Sl(5242,"td",20)(5243,"p"),rN(5244,"Formato com segundos "),Sl(5245,"code"),rN(5246,"HH:mm:ss"),og(),rN(5247," (ex: "),Sl(5248,"code"),rN(5249,"14:30:00"),og(),rN(5250,")."),og()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-dynamic-form-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),Wl(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),og()()()),a&2&&(rw("p-actions",r.actions),Lp(2),rw("p-active",r.activeTab==="doc"),Lp(2),rw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[sNe,Ume,$me,$,te,ne,oe],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[mL.forChild(fe),mL]})}return o})();var rt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,re]})}return o})();export{rt as DocPoDynamicFormModule};