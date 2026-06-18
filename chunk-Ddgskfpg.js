import {f as fe$1,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,w,b as f,aW as Yp,cK as _fe,r as r$1,b2 as Jhe,J as zl,T as nw,bs as uN,a7 as lN,an as DO,aH as Ka,b8 as qme,b9 as Yme,H as Il,q as Qx,R as og,a1 as ft,A as Lp,ar as Ux,au as dg,b0 as Qt,aB as Dx,bd as Ax,X as we,av as Gl,aw as co,ax as lo,a3 as cNe,aD as Xy,aE as Qy}from'./main-QSTLMRDK.js';var me=()=>({property:"name",required:true,showRequired:true}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&zl(0,"po-dynamic-form",0),a&2&&nw("p-fields",uN(2,le,lN(1,me)));},dependencies:[Jhe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic Form Basic"),og(),Il(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),og()()()()(),Il(21,"div",10),zl(22,"sample-po-dynamic-form-basic"),og(),zl(23,"hr")),a&2&&(Lp(5),Ux("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,pe,r.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,G],encapsulation:2})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=f(Yp);registerService=f(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:_fe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&Gl(ce,7),a&2){let l;co(l=lo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Dx();zl(0,"po-dynamic-form",1,0)(2,"br"),Il(3,"div",2)(4,"po-button",3),ft("p-click",function(){Xy(l);let I=Ax(1);return r.poNotification.success("Data saved successfully!"),Qy(I.form.reset())}),og()();}if(a&2){let l=Ax(1);nw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Lp(4),nw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Jhe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic Form - Register"),og(),Il(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-dynamic-form
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Il(21,"label",6),Qx(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-dynamic-form-register"),og(),zl(27,"hr")),a&2&&(Lp(5),Ux("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,Ee,r.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ee],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=f(Yp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:_fe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&Gl(Se,7),a&2){let l;co(l=lo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Dx();zl(0,"po-dynamic-form",1,0)(2,"br"),Il(3,"div",2)(4,"po-button",3),ft("p-click",function(){Xy(l);let I=Ax(1);return r.poNotification.success("Data saved successfully!"),Qy(I.form.reset())}),og()();}if(a&2){let l=Ax(1);nw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Lp(4),nw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Jhe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(zl(0,"br"),Il(1,"blockquote",0)(2,"label",1),Qx(3,"PO Dynamic Form - Container"),og(),Il(4,"a",2),ft("click",function(){return r.toggleSampleCodeTabs()}),zl(5,"span"),Qx(6),og()(),Il(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Qx(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),og(),Il(13,"pre",7),Qx(14,`<po-dynamic-form
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
`),og()()(),Il(15,"po-tab",8)(16,"div")(17,"label",6),Qx(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),og(),Il(19,"pre",9),Qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Il(21,"label",6),Qx(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),og(),Il(23,"pre",9),Qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Il(25,"div",10),zl(26,"sample-po-dynamic-form-container"),og(),zl(27,"hr")),a&2&&(Lp(5),Ux("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),nw("ngClass",uN(4,ge,r.hideSampleCodeTabs)));},dependencies:[DO,Ka,qme,Yme,ie],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),og()(),zl(4,"div",2),Il(5,"h3",3),Qx(6,"Componente"),og(),Il(7,"h4",4)(8,"code",5),Qx(9,"PoDynamicFormComponent"),og()(),Il(10,"div",2)(11,"p"),Qx(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),og(),Il(13,"p"),Qx(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),og()(),Il(15,"div",6)(16,"h4",7),Qx(17,"Seletor"),og(),Il(18,"pre",8),Qx(19,`<po-dynamic-form
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
`),og()(),Il(20,"h4",9),Qx(21,"Propriedades"),og(),Il(22,"table",10)(23,"tr",11)(24,"th",12),Qx(25,"Nome"),og(),Il(26,"th",12),Qx(27,"Tipo"),og(),Il(28,"th",12),Qx(29,"Padr\xE3o"),og(),Il(30,"th",12),Qx(31,"Descri\xE7\xE3o"),og()(),Il(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Qx(36," p-auto-focus"),zl(37,"br"),og()()(),Il(38,"td",17)(39,"code",18),Qx(40,"string"),og()(),Il(41,"td",19),Qx(42,"-"),og(),Il(43,"td",20)(44,"em")(45,"strong"),Qx(46,"(opcional)"),og()(),Il(47,"p"),Qx(48,"Nome da propriedade, atribu\xEDda ao "),Il(49,"code"),Qx(50,"PoDynamicFormField.property"),og(),Qx(51,", que iniciar\xE1 o campo com foco."),og()()(),Il(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),Qx(56," p-components-size"),zl(57,"br"),og()()(),Il(58,"td",17)(59,"code",18),Qx(60,"string"),og()(),Il(61,"td",19)(62,"p")(63,"code"),Qx(64,"medium"),og()()(),Il(65,"td",20)(66,"em")(67,"strong"),Qx(68,"(opcional)"),og()(),Il(69,"p"),Qx(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Il(71,"ul")(72,"li")(73,"code"),Qx(74,"small"),og(),Qx(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(76,"li")(77,"code"),Qx(78,"medium"),og(),Qx(79,": aplica a medida medium de cada componente."),og()(),Il(80,"blockquote")(81,"p"),Qx(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(83,"code"),Qx(84,"medium"),og(),Qx(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(86,"a",21),Qx(87,"po-theme"),og(),Qx(88,"."),og()()()(),Il(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),Qx(93," p-fields"),zl(94,"br"),og()()(),Il(95,"td",17)(96,"code",22),Qx(97,"Array<PoDynamicFormField>"),og()(),Il(98,"td",19)(99,"p")(100,"code"),Qx(101,"[]"),og()()(),Il(102,"td",20)(103,"p"),Qx(104,"Cole\xE7\xE3o de objetos que implementam a interface "),Il(105,"code"),Qx(106,"PoDynamicFormField"),og(),Qx(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),og(),Il(108,"blockquote")(109,"p"),Qx(110,"Ex: "),Il(111,"code"),Qx(112,"[ { property: 'name' } ]"),og()()(),Il(113,"p"),Qx(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),og(),Il(115,"ul")(116,"li"),Qx(117,"Caso o "),Il(118,"em"),Qx(119,"type"),og(),Qx(120," informado seja "),Il(121,"em"),Qx(122,"boolean"),og(),Qx(123," o componente criado ser\xE1 o "),Il(124,"code"),Qx(125,"po-switch"),og(),Qx(126,"."),og(),Il(127,"li"),Qx(128,"Caso o "),Il(129,"em"),Qx(130,"type"),og(),Qx(131," informado seja "),Il(132,"em"),Qx(133,"currency"),og(),Qx(134," e n\xE3o seja informado um "),Il(135,"em"),Qx(136,"mask"),og(),Qx(137," ou "),Il(138,"em"),Qx(139,"pattern"),og(),Qx(140," o componente criado ser\xE1 o "),Il(141,"code"),Qx(142,"po-decimal"),og(),Qx(143,`,
caso seja informado um `),Il(144,"em"),Qx(145,"mask"),og(),Qx(146," ou "),Il(147,"em"),Qx(148,"pattern"),og(),Qx(149," o componente criado ser\xE1 o "),Il(150,"code"),Qx(151,"po-input"),og(),Qx(152,"."),og(),Il(153,"li"),Qx(154,"Caso o "),Il(155,"em"),Qx(156,"type"),og(),Qx(157," informado seja "),Il(158,"em"),Qx(159,"number"),og(),Qx(160," e n\xE3o seja informado um "),Il(161,"em"),Qx(162,"mask"),og(),Qx(163," ou "),Il(164,"em"),Qx(165,"pattern"),og(),Qx(166," o componente criado ser\xE1 o "),Il(167,"code"),Qx(168,"po-number"),og(),Qx(169,`, caso seja
informado um `),Il(170,"em"),Qx(171,"mask"),og(),Qx(172," ou "),Il(173,"em"),Qx(174,"pattern"),og(),Qx(175," o componente criado ser\xE1 o "),Il(176,"code"),Qx(177,"po-input"),og(),Qx(178,"."),og(),Il(179,"li"),Qx(180,"Caso a lista possua a propriedade "),Il(181,"code"),Qx(182,"options"),og(),Qx(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),Il(184,"code"),Qx(185,"po-radio-group"),og(),Qx(186,`
ou `),Il(187,"code"),Qx(188,"po-checkbox-group"),og(),Qx(189," se informar a propriedade "),Il(190,"code"),Qx(191,"optionsMulti"),og(),Qx(192,"."),og(),Il(193,"li"),Qx(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),Il(195,"code"),Qx(196,"po-select"),og(),Qx(197," ou, "),Il(198,"code"),Qx(199,"po-multiselect"),og(),Qx(200," se a propriedade "),Il(201,"code"),Qx(202,"optionsMulti"),og(),Qx(203,`
for verdadeira.`),og(),Il(204,"li"),Qx(205,"Caso o "),Il(206,"em"),Qx(207,"type"),og(),Qx(208," informado seja "),Il(209,"em"),Qx(210,"date"),og(),Qx(211," ou "),Il(212,"em"),Qx(213,"datetime"),og(),Qx(214," o componente criado ser\xE1 o "),Il(215,"code"),Qx(216,"po-datepicker"),og(),Qx(217,"."),og(),Il(218,"li"),Qx(219,"Caso seja informado a propriedade "),Il(220,"code"),Qx(221,"optionsService"),og(),Qx(222," o componente criado ser\xE1 o "),Il(223,"code"),Qx(224,"po-combo"),og(),Qx(225,"."),og(),Il(226,"li"),Qx(227,"Caso o "),Il(228,"em"),Qx(229,"type"),og(),Qx(230," informado seja "),Il(231,"em"),Qx(232,"time"),og(),Qx(233," o componente criado ser\xE1 um "),Il(234,"code"),Qx(235,"po-input"),og(),Qx(236," podendo receber um "),Il(237,"em"),Qx(238,"mask"),og(),Qx(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Il(240,"em"),Qx(241,"mask"),og(),Qx(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),og(),Il(243,"li"),Qx(244,"Caso a lista possua a propriedade "),Il(245,"code"),Qx(246,"rows"),og(),Qx(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Il(248,"code"),Qx(249,"po-textarea"),og(),Qx(250,", caso o valor da propriedade "),Il(251,"code"),Qx(252,"rows"),og(),Qx(253," seja menor que 3 o componente criado ser\xE1 o "),Il(254,"code"),Qx(255,"po-input"),og(),Qx(256,"."),og(),Il(257,"li"),Qx(258,"Caso seja informada a propriedade "),Il(259,"code"),Qx(260,"secret"),og(),Qx(261," o componente criado ser\xE1 o "),Il(262,"code"),Qx(263,"po-password"),og(),Qx(264,"."),og(),Il(265,"li"),Qx(266,"Caso o "),Il(267,"em"),Qx(268,"type"),og(),Qx(269," informado seja "),Il(270,"em"),Qx(271,"string"),og(),Qx(272," o componente criado ser\xE1 o "),Il(273,"code"),Qx(274,"po-input"),og(),Qx(275,"."),Il(276,"blockquote")(277,"p"),Qx(278,"Ao alterar o valor das "),Il(279,"code"),Qx(280,"properties"),og(),Qx(281,", visibilidade e/ou agrupamentos via container, os "),Il(282,"code"),Qx(283,"fields"),og(),Qx(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),og()()()()()(),Il(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),Qx(289," (p-form)"),zl(290,"br"),og()()(),Il(291,"td",17)(292,"code",25),Qx(293,"EventEmitter"),og()(),Il(294,"td",19),Qx(295,"-"),og(),Il(296,"td",20)(297,"em")(298,"strong"),Qx(299,"(opcional)"),og()(),Il(300,"p"),Qx(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),og(),Il(302,"p"),Qx(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Il(304,"em"),Qx(305,"template reference"),og(),Qx(306," e atrav\xE9s do "),Il(307,"em"),Qx(308,"output"),og(),Qx(309,", veja os exemplos abaixo:"),og(),Il(310,"blockquote")(311,"p")(312,"em"),Qx(313,"template reference"),og()()(),Il(314,"pre")(315,"code",26),Qx(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),og()(),Il(317,"blockquote")(318,"p")(319,"em"),Qx(320,"Output"),og()()(),Il(321,"pre")(322,"code",26),Qx(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),og()(),Il(324,"pre")(325,"code",27),Qx(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),og()(),Il(327,"blockquote")(328,"p"),Qx(329,"Caso a propriedade "),Il(330,"code"),Qx(331,"p-group-form"),og(),Qx(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),og()()()(),Il(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),Qx(337," p-group-form"),zl(338,"br"),og()()(),Il(339,"td",17)(340,"code",28),Qx(341,"boolean"),og()(),Il(342,"td",19),Qx(343,"-"),og(),Il(344,"td",20)(345,"em")(346,"strong"),Qx(347,"(opcional)"),og()(),Il(348,"p"),Qx(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),Il(350,"code"),Qx(351,"FormControl"),og(),Qx(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),og(),Il(353,"pre")(354,"code",26),Qx(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),og()()()(),Il(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),Qx(360," p-load"),zl(361,"br"),og()()(),Il(362,"td",17)(363,"code",18),Qx(364,"string "),og(),Il(365,"code",29),Qx(366," Function"),og()(),Il(367,"td",19),Qx(368,"-"),og(),Il(369,"td",20)(370,"em")(371,"strong"),Qx(372,"(opcional)"),og()(),Il(373,"p"),Qx(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og(),Il(375,"p"),Qx(376,"A propriedade aceita os seguintes tipos:"),og(),Il(377,"ul")(378,"li")(379,"code"),Qx(380,"string"),og(),Qx(381,": "),Il(382,"em"),Qx(383,"Endpoint"),og(),Qx(384," usado pelo componente para requisi\xE7\xE3o via "),Il(385,"code"),Qx(386,"POST"),og(),Qx(387,"."),og(),Il(388,"li")(389,"code"),Qx(390,"function"),og(),Qx(391,": M\xE9todo que ser\xE1 executado."),og()(),Il(392,"p"),Qx(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),Il(394,"code"),Qx(395,"p-value"),og(),Qx(396,"."),og(),Il(397,"p"),Qx(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Il(399,"a",30),Qx(400,"PoDynamicFormLoad"),og(),Qx(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),og(),Il(402,"p"),Qx(403,"Por exemplo:"),og(),Il(404,"pre")(405,"code"),Qx(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),og()(),Il(407,"p"),Qx(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Il(409,"code"),Qx(410,"bind"),og(),Qx(411,", por exemplo:"),og(),Il(412,"pre")(413,"code"),Qx(414,`[p-load]="onLoadFields.bind(this)"
`),og()()()(),Il(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),Qx(419," p-validate"),zl(420,"br"),og()()(),Il(421,"td",17)(422,"code",18),Qx(423,"string "),og(),Il(424,"code",29),Qx(425," Function"),og()(),Il(426,"td",19),Qx(427,"-"),og(),Il(428,"td",20)(429,"em")(430,"strong"),Qx(431,"(opcional)"),og()(),Il(432,"p"),Qx(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Il(434,"strong"),Qx(435,"mudan\xE7as do formul\xE1rio"),og(),Qx(436,"."),og(),Il(437,"p"),Qx(438,"A propriedade aceita os seguintes tipos:"),og(),Il(439,"ul")(440,"li")(441,"code"),Qx(442,"string"),og(),Qx(443,": "),Il(444,"em"),Qx(445,"Endpoint"),og(),Qx(446," usado pelo componente para requisi\xE7\xE3o via "),Il(447,"code"),Qx(448,"POST"),og(),Qx(449,"."),og(),Il(450,"li")(451,"code"),Qx(452,"function"),og(),Qx(453,": M\xE9todo que ser\xE1 executado."),og()(),Il(454,"p"),Qx(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Il(456,"code"),Qx(457,"PoDynamicFormFieldChanged"),og()(),Il(458,"p"),Qx(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Il(460,"a",31),Qx(461,"PoDynamicFormValidation"),og(),Qx(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),og(),Il(463,"pre")(464,"code"),Qx(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),og()(),Il(466,"p"),Qx(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Il(468,"code"),Qx(469,"bind"),og(),Qx(470,", por exemplo:"),og(),Il(471,"pre")(472,"code"),Qx(473,`[p-validate]="this.myFunction.bind(this)"
`),og()(),Il(474,"blockquote")(475,"p"),Qx(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),Il(477,"code"),Qx(478,"p-validate-fields"),og(),Qx(479,", a propriedade "),Il(480,"code"),Qx(481,"validate"),og(),Qx(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),og()()()(),Il(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),Qx(487," p-validate-fields"),zl(488,"br"),og()()(),Il(489,"td",17)(490,"code",32),Qx(491,"Array<string>"),og()(),Il(492,"td",19),Qx(493,"-"),og(),Il(494,"td",20)(495,"em")(496,"strong"),Qx(497,"(opcional)"),og()(),Il(498,"p"),Qx(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),og()()(),Il(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),Qx(504," p-validate-on-input"),zl(505,"br"),og()()(),Il(506,"td",17)(507,"code",28),Qx(508,"boolean"),og()(),Il(509,"td",19),Qx(510,"-"),og(),Il(511,"td",20)(512,"em")(513,"strong"),Qx(514,"(opcional)"),og()(),Il(515,"p"),Qx(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),og(),Il(517,"p"),Qx(518,"Pode ser aplicado nos seguintes componentes:"),og(),Il(519,"ul")(520,"li"),Qx(521,"po-input"),og(),Il(522,"li"),Qx(523,"po-number"),og(),Il(524,"li"),Qx(525,"po-decimal"),og(),Il(526,"li"),Qx(527,"po-textarea"),og(),Il(528,"li"),Qx(529,"po-password"),og()(),Il(530,"p"),Qx(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),Il(532,"code"),Qx(533,"p-validate-fields"),og(),Qx(534,"."),og()()(),Il(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),Qx(539," p-value"),zl(540,"br"),og()()(),Il(541,"td",17)(542,"code",33),Qx(543,"any"),og()(),Il(544,"td",19),Qx(545,"-"),og(),Il(546,"td",20)(547,"p"),Qx(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),Il(549,"em"),Qx(550,"property"),og(),Qx(551,`
dos objetos contidos na propridade `),Il(552,"code"),Qx(553,"p-fields"),og(),Qx(554,"."),og(),Il(555,"p"),Qx(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),og(),Il(557,"blockquote")(558,"p"),Qx(559,"Ex: "),Il(560,"code"),Qx(561,"{ name: 'po' }"),og()()()()()(),Il(562,"h3",9),Qx(563,"M\xE9todos"),og(),Il(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),Qx(570," focus "),og()()()()(),Il(571,"tr",20)(572,"td",20)(573,"p"),Qx(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),og(),Il(575,"p"),Qx(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),Il(577,"code"),Qx(578,"dynamic form"),og(),Qx(579,", como por exemplo:"),og(),Il(580,"pre")(581,"code",26),Qx(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),og()(),Il(583,"pre")(584,"code",36),Qx(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),og()()()()(),Il(586,"h5")(587,"b"),Qx(588,"Par\xE2metros"),og()(),Il(589,"table",10)(590,"tr",11)(591,"th",12),Qx(592,"Nome"),og(),Il(593,"th",12),Qx(594,"Tipo"),og(),Il(595,"th",12),Qx(596,"Descri\xE7\xE3o"),og()(),Il(597,"tr",13)(598,"td",14),Qx(599," property"),og(),Il(600,"td",17)(601,"code",37),Qx(602," string "),og()(),Il(603,"td",20)(604,"p"),Qx(605,"Nome da propriedade atribu\xEDda ao "),Il(606,"code"),Qx(607,"PoDynamicFormField.property"),og(),Qx(608,"."),og()()()(),zl(609,"br"),Il(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),Qx(616," showAdditionalHelp "),og()()()()(),Il(617,"tr",20)(618,"td",20)(619,"p"),Qx(620,"M\xE9todo que exibe "),Il(621,"code"),Qx(622,"p-helper"),og(),Qx(623," ou executa a a\xE7\xE3o definida em "),Il(624,"code"),Qx(625,"p-helper{eventOnClick}"),og(),Qx(626," ou em "),Il(627,"code"),Qx(628,"p-additionalHelp"),og(),Qx(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Il(630,"code"),Qx(631,"keydown"),og(),Qx(632,"."),og(),Il(633,"pre")(634,"code"),Qx(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),og()()()()(),Il(636,"h5")(637,"b"),Qx(638,"Par\xE2metros"),og()(),Il(639,"table",10)(640,"tr",11)(641,"th",12),Qx(642,"Nome"),og(),Il(643,"th",12),Qx(644,"Tipo"),og(),Il(645,"th",12),Qx(646,"Descri\xE7\xE3o"),og()(),Il(647,"tr",13)(648,"td",14),Qx(649," property"),og(),Il(650,"td",17)(651,"code",37),Qx(652," string "),og()(),Il(653,"td",20)(654,"p"),Qx(655,"Identificador da coluna."),og()()()(),zl(656,"br"),Il(657,"h3"),Qx(658,"Interfaces"),og(),Il(659,"h4",38)(660,"code",5),Qx(661,"PoDynamicFormField"),og()(),Il(662,"div",2)(663,"p"),Qx(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),og()(),Il(665,"h4",9),Qx(666,"Propriedades"),og(),Il(667,"table",10)(668,"tr",11)(669,"th",12),Qx(670,"Nome"),og(),Il(671,"th",12),Qx(672,"Tipo"),og(),Il(673,"th",12),Qx(674,"Descri\xE7\xE3o"),og()(),Il(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),Qx(679," additionalHelp"),zl(680,"br"),og()()(),Il(681,"td",17)(682,"code",29),Qx(683,"Function"),og()(),Il(684,"td",20)(685,"em")(686,"strong"),Qx(687,"(opcional)"),og()(),Il(688,"p"),Qx(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Il(690,"blockquote")(691,"p"),Qx(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Il(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),Qx(697," additionalHelpTooltip"),zl(698,"br"),og()()(),Il(699,"td",17)(700,"code",18),Qx(701,"string"),og()(),Il(702,"td",20)(703,"em")(704,"strong"),Qx(705,"(opcional)"),og()(),Il(706,"p"),Qx(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Il(708,"code"),Qx(709,"po-helper"),og(),Qx(710,`.
`),Il(711,"strong"),Qx(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Il(713,"blockquote")(714,"p"),Qx(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Il(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),Qx(720," advancedFilters"),zl(721,"br"),og()()(),Il(722,"td",17)(723,"code",39),Qx(724,"Array<PoLookupAdvancedFilter>"),og()(),Il(725,"td",20)(726,"em")(727,"strong"),Qx(728,"(opcional)"),og()(),Il(729,"p"),Qx(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Il(731,"blockquote")(732,"p"),Qx(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Il(734,"p"),Qx(735,"Exemplo de URL com busca avan\xE7ada:"),og(),Il(736,"p")(737,"code"),Qx(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Il(739,"p"),Qx(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Il(741,"p")(742,"code"),Qx(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Il(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),Qx(748," appendBox"),zl(749,"br"),og()()(),Il(750,"td",17)(751,"code",28),Qx(752,"boolean"),og()(),Il(753,"td",20)(754,"em")(755,"strong"),Qx(756,"(opcional)"),og()(),Il(757,"p"),Qx(758,"Define que o "),Il(759,"code"),Qx(760,"listbox"),og(),Qx(761," e/ou popover ("),Il(762,"code"),Qx(763,"p-helper"),og(),Qx(764," e/ou "),Il(765,"code"),Qx(766,"p-error-limit"),og(),Qx(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Il(768,"blockquote")(769,"p"),Qx(770,"Quando utilizado com "),Il(771,"code"),Qx(772,"p-helper"),og(),Qx(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Il(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),Qx(778," autoHeight"),zl(779,"br"),og()()(),Il(780,"td",17)(781,"code",28),Qx(782,"boolean"),og()(),Il(783,"td",20)(784,"em")(785,"strong"),Qx(786,"(opcional)"),og()(),Il(787,"p"),Qx(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Il(789,"p")(790,"strong"),Qx(791,"Componentes compat\xEDveis:"),og(),Il(792,"code"),Qx(793,"po-multiselect"),og(),Qx(794,", "),Il(795,"code"),Qx(796,"po-lookup"),og(),Qx(797,"."),og()()(),Il(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),Qx(802," autoUpload"),zl(803,"br"),og()()(),Il(804,"td",17)(805,"code",28),Qx(806,"boolean"),og()(),Il(807,"td",20)(808,"em")(809,"strong"),Qx(810,"(opcional)"),og()(),Il(811,"p"),Qx(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Il(813,"p")(814,"strong"),Qx(815,"Componente compat\xEDvel"),og(),Qx(816,": "),Il(817,"code"),Qx(818,"po-upload"),og()()()(),Il(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),Qx(823," booleanFalse"),zl(824,"br"),og()()(),Il(825,"td",17)(826,"code",18),Qx(827,"string"),og()(),Il(828,"td",20)(829,"em")(830,"strong"),Qx(831,"(opcional)"),og()(),Il(832,"p"),Qx(833,"Texto exibido quando o valor do componente for "),Il(834,"em"),Qx(835,"false"),og(),Qx(836,"."),og()()(),Il(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),Qx(841," booleanTrue"),zl(842,"br"),og()()(),Il(843,"td",17)(844,"code",18),Qx(845,"string"),og()(),Il(846,"td",20)(847,"em")(848,"strong"),Qx(849,"(opcional)"),og()(),Il(850,"p"),Qx(851,"Texto exibido quando o valor do componente for "),Il(852,"em"),Qx(853,"true"),og(),Qx(854,"."),og()()(),Il(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),Qx(859," changeOnEnter"),zl(860,"br"),og()()(),Il(861,"td",17)(862,"code",28),Qx(863,"boolean"),og()(),Il(864,"td",20)(865,"em")(866,"strong"),Qx(867,"(opcional)"),og()(),Il(868,"p"),Qx(869,"Indica que o evento "),Il(870,"code"),Qx(871,"p-change"),og(),Qx(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Il(873,"code"),Qx(874,"po-combo"),og(),Qx(875,"."),og()()(),Il(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),Qx(880," changeVisibleColumns"),zl(881,"br"),og()()(),Il(882,"td",17)(883,"code",29),Qx(884,"Function"),og()(),Il(885,"td",20)(886,"em")(887,"strong"),Qx(888,"(opcional)"),og()(),Il(889,"p"),Qx(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Il(891,"p"),Qx(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Il(893,"p")(894,"strong"),Qx(895,"Componente compat\xEDvel"),og(),Qx(896,": "),Il(897,"code"),Qx(898,"po-lookup"),og()()()(),Il(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),Qx(903," clean"),zl(904,"br"),og()()(),Il(905,"td",17)(906,"code",28),Qx(907,"boolean"),og()(),Il(908,"td",20)(909,"em")(910,"strong"),Qx(911,"(opcional)"),og()(),Il(912,"p"),Qx(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Il(914,"p")(915,"strong"),Qx(916,"Componentes compat\xEDveis:"),og(),Il(917,"code"),Qx(918,"po-datepicker"),og(),Qx(919,", "),Il(920,"code"),Qx(921,"po-datepicker-range"),og(),Qx(922,", "),Il(923,"code"),Qx(924,"po-input"),og(),Qx(925,", "),Il(926,"code"),Qx(927,"po-number"),og(),Qx(928,", "),Il(929,"code"),Qx(930,"po-decimal"),og(),Qx(931,`,
`),Il(932,"code"),Qx(933,"po-combo"),og(),Qx(934,", "),Il(935,"code"),Qx(936,"po-lookup"),og(),Qx(937,", "),Il(938,"code"),Qx(939,"po-password"),og(),Qx(940,", "),Il(941,"code"),Qx(942,"po-timepicker"),og(),Qx(943,"."),og()()(),Il(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),Qx(948," columnRestoreManager"),zl(949,"br"),og()()(),Il(950,"td",17)(951,"code",29),Qx(952,"Function"),og()(),Il(953,"td",20)(954,"em")(955,"strong"),Qx(956,"(opcional)"),og()(),Il(957,"p"),Qx(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Il(959,"p"),Qx(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Il(961,"p")(962,"strong"),Qx(963,"Componente compat\xEDvel"),og(),Qx(964,": "),Il(965,"code"),Qx(966,"po-lookup"),og()()()(),Il(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),Qx(971," columns"),zl(972,"br"),og()()(),Il(973,"td",17)(974,"code",40),Qx(975,"Array<PoLookupColumn> "),og(),Il(976,"code",41),Qx(977," number"),og()(),Il(978,"td",20)(979,"em")(980,"strong"),Qx(981,"(opcional)"),og()(),Il(982,"p"),Qx(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Il(984,"code"),Qx(985,"searchService"),og(),Qx(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Il(987,"a",42)(988,"code"),Qx(989,"PoLookupColumn"),og()(),Qx(990,"."),og(),Il(991,"blockquote")(992,"p"),Qx(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Il(994,"em"),Qx(995,"label"),og(),Qx(996," e "),Il(997,"em"),Qx(998,"value"),og(),Qx(999,` para valores
de tela e do model respectivamente.`),og()(),Il(1e3,"p")(1001,"strong"),Qx(1002,"Componentes compat\xEDveis:"),og(),Il(1003,"code"),Qx(1004,"po-radio-group"),og(),Qx(1005,", "),Il(1006,"code"),Qx(1007,"po-lookup"),og(),Qx(1008,", "),Il(1009,"code"),Qx(1010,"po-checkbox-group"),og(),Qx(1011,"."),og()()(),Il(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),Qx(1016," compactLabel"),zl(1017,"br"),og()()(),Il(1018,"td",17)(1019,"code",28),Qx(1020,"boolean"),og()(),Il(1021,"td",20)(1022,"em")(1023,"strong"),Qx(1024,"(opcional)"),og()(),Il(1025,"p"),Qx(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Il(1027,"p"),Qx(1028,"Quando habilitado ("),Il(1029,"code"),Qx(1030,"true"),og(),Qx(1031,"), o modo compacto afeta o conjunto composto por:"),og(),Il(1032,"ul")(1033,"li")(1034,"code"),Qx(1035,"po-label"),og()(),Il(1036,"li")(1037,"code"),Qx(1038,"p-requirement (showRequired)"),og()(),Il(1039,"li")(1040,"code"),Qx(1041,"po-helper"),og()()(),Il(1042,"p"),Qx(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Il(1044,"p"),Qx(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Il(1046,"ul")(1047,"li")(1048,"code"),Qx(1049,"--field-container-title-justify"),og()(),Il(1050,"li")(1051,"code"),Qx(1052,"--field-container-title-flex"),og()()(),Il(1053,"p"),Qx(1054,"Exemplo:"),og(),Il(1055,"pre")(1056,"code"),Qx(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Il(1058,"p"),Qx(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Il(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),Qx(1064," container"),zl(1065,"br"),og()()(),Il(1066,"td",17)(1067,"code",18),Qx(1068,"string"),og()(),Il(1069,"td",20)(1070,"em")(1071,"strong"),Qx(1072,"(opcional)"),og()(),Il(1073,"p"),Qx(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Il(1075,"p"),Qx(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Il(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),Qx(1081," customAction"),zl(1082,"br"),og()()(),Il(1083,"td",17)(1084,"code",43),Qx(1085,"PoProgressAction"),og()(),Il(1086,"td",20)(1087,"em")(1088,"strong"),Qx(1089,"(opcional)"),og()(),Il(1090,"p"),Qx(1091,"Define uma a\xE7\xE3o personalizada no componente "),Il(1092,"code"),Qx(1093,"po-upload"),og(),Qx(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Il(1095,"p")(1096,"strong"),Qx(1097,"Componente compat\xEDvel"),og(),Qx(1098,": "),Il(1099,"code"),Qx(1100,"po-upload"),og(),Qx(1101,","),og(),Il(1102,"p")(1103,"strong"),Qx(1104,"Exemplo de configura\xE7\xE3o"),og(),Qx(1105,":"),og(),Il(1106,"pre")(1107,"code",44),Qx(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Il(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),Qx(1113," customActionClick"),zl(1114,"br"),og()()(),Il(1115,"td",17)(1116,"code",45),Qx(1117,"(file: PoUploadFile) => void"),og()(),Il(1118,"td",20)(1119,"em")(1120,"strong"),Qx(1121,"(opcional)"),og()(),Il(1122,"p"),Qx(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Il(1124,"code"),Qx(1125,"p-custom-action"),og(),Qx(1126,"."),og(),Il(1127,"p")(1128,"strong"),Qx(1129,"Componente compat\xEDvel"),og(),Qx(1130,": "),Il(1131,"code"),Qx(1132,"po-upload"),og(),Qx(1133,","),og(),Il(1134,"p"),Qx(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Il(1136,"p")(1137,"strong"),Qx(1138,"Par\xE2metro do evento"),og(),Qx(1139,":"),og(),Il(1140,"ul")(1141,"li")(1142,"code"),Qx(1143,"file"),og(),Qx(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Il(1145,"code"),Qx(1146,"PoUploadFile"),og(),Qx(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Il(1148,"p")(1149,"strong"),Qx(1150,"Exemplo de uso"),og(),Qx(1151,":"),og(),Il(1152,"pre")(1153,"code",44),Qx(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Il(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),Qx(1159," debounceTime"),zl(1160,"br"),og()()(),Il(1161,"td",17)(1162,"code",41),Qx(1163,"number"),og()(),Il(1164,"td",20)(1165,"em")(1166,"strong"),Qx(1167,"(opcional)"),og()(),Il(1168,"p"),Qx(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Il(1170,"code"),Qx(1171,"p-filter-service"),og(),Qx(1172,")."),og(),Il(1173,"p")(1174,"strong"),Qx(1175,"Componentes compat\xEDveis:"),og(),Il(1176,"code"),Qx(1177,"po-combo"),og(),Qx(1178,", "),Il(1179,"code"),Qx(1180,"po-multiselect"),og(),Qx(1181,"."),og()()(),Il(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),Qx(1186," decimalsLength"),zl(1187,"br"),og()()(),Il(1188,"td",17)(1189,"code",41),Qx(1190,"number"),og()(),Il(1191,"td",20)(1192,"em")(1193,"strong"),Qx(1194,"(opcional)"),og()(),Il(1195,"p"),Qx(1196,"Quantidade m\xE1xima de casas decimais."),og(),Il(1197,"blockquote")(1198,"p"),Qx(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),Il(1200,"code"),Qx(1201,"type"),og(),Qx(1202," for "),Il(1203,"em"),Qx(1204,"currency"),og(),Qx(1205," ou "),Il(1206,"em"),Qx(1207,"decimal"),og(),Qx(1208,"."),og()()()(),Il(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),Qx(1213," directory"),zl(1214,"br"),og()()(),Il(1215,"td",17)(1216,"code",28),Qx(1217,"boolean"),og()(),Il(1218,"td",20)(1219,"em")(1220,"strong"),Qx(1221,"(opcional)"),og()(),Il(1222,"p"),Qx(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Il(1224,"blockquote")(1225,"p"),Qx(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Il(1227,"blockquote")(1228,"p"),Qx(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Il(1230,"strong"),Qx(1231,"Internet Explorer"),og(),Qx(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Il(1233,"p")(1234,"strong"),Qx(1235,"Componente compat\xEDvel"),og(),Qx(1236,": "),Il(1237,"code"),Qx(1238,"po-upload"),og()()()(),Il(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),Qx(1243," disabled"),zl(1244,"br"),og()()(),Il(1245,"td",17)(1246,"code",28),Qx(1247,"boolean"),og()(),Il(1248,"td",20)(1249,"em")(1250,"strong"),Qx(1251,"(opcional)"),og()(),Il(1252,"p"),Qx(1253,"Desabilita o campo caso informar o valor "),Il(1254,"em"),Qx(1255,"true"),og(),Qx(1256,"."),og()()(),Il(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),Qx(1261," disabledInitFilter"),zl(1262,"br"),og()()(),Il(1263,"td",17)(1264,"code",28),Qx(1265,"boolean"),og()(),Il(1266,"td",20)(1267,"em")(1268,"strong"),Qx(1269,"(opcional)"),og()(),Il(1270,"p"),Qx(1271,"Desabilita o filtro inicial no servi\xE7o do "),Il(1272,"code"),Qx(1273,"po-combo"),og(),Qx(1274,", que \xE9 executado no primeiro clique no campo."),og()()(),Il(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),Qx(1279," disabledTabFilter"),zl(1280,"br"),og()()(),Il(1281,"td",17)(1282,"code",28),Qx(1283,"boolean"),og()(),Il(1284,"td",20)(1285,"em")(1286,"strong"),Qx(1287,"(opcional)"),og()(),Il(1288,"p"),Qx(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Il(1290,"code"),Qx(1291,"po-combo"),og(),Qx(1292,"."),og()()(),Il(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),Qx(1297," divider"),zl(1298,"br"),og()()(),Il(1299,"td",17)(1300,"code",18),Qx(1301,"string"),og()(),Il(1302,"td",20)(1303,"em")(1304,"strong"),Qx(1305,"(opcional)"),og()(),Il(1306,"p"),Qx(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Il(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),Qx(1312," dragDrop"),zl(1313,"br"),og()()(),Il(1314,"td",17)(1315,"code",28),Qx(1316,"boolean"),og()(),Il(1317,"td",20)(1318,"em")(1319,"strong"),Qx(1320,"(opcional)"),og()(),Il(1321,"p"),Qx(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Il(1323,"blockquote")(1324,"p"),Qx(1325,"Recomendamos utilizar apenas um "),Il(1326,"code"),Qx(1327,"po-upload"),og(),Qx(1328," com esta funcionalidade por tela."),og()(),Il(1329,"p")(1330,"strong"),Qx(1331,"Componente compat\xEDvel"),og(),Qx(1332,": "),Il(1333,"code"),Qx(1334,"po-upload"),og()()()(),Il(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),Qx(1339," dragDropHeight"),zl(1340,"br"),og()()(),Il(1341,"td",17)(1342,"code",41),Qx(1343,"number"),og()(),Il(1344,"td",20)(1345,"em")(1346,"strong"),Qx(1347,"(opcional)"),og()(),Il(1348,"p"),Qx(1349,"Define em "),Il(1350,"em"),Qx(1351,"pixels"),og(),Qx(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Il(1353,"code"),Qx(1354,"160px"),og(),Qx(1355,"."),og(),Il(1356,"blockquote")(1357,"p"),Qx(1358,"Esta propriedade funciona somente se a propriedade "),Il(1359,"code"),Qx(1360,"p-drag-drop"),og(),Qx(1361," estiver habilitada."),og()(),Il(1362,"p")(1363,"strong"),Qx(1364,"Componente compat\xEDvel"),og(),Qx(1365,": "),Il(1366,"code"),Qx(1367,"po-upload"),og()()()(),Il(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),Qx(1372," errorAsyncFunction"),zl(1373,"br"),og()()(),Il(1374,"td",17)(1375,"code",46),Qx(1376,"(value) => Observable<boolean>"),og()(),Il(1377,"td",20)(1378,"em")(1379,"strong"),Qx(1380,"(opcional)"),og()(),Il(1381,"p"),Qx(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(1383,"code"),Qx(1384,"change"),og(),Qx(1385," ou "),Il(1386,"code"),Qx(1387,"change-model"),og(),Qx(1388,", dependendo do valor da propriedade "),Il(1389,"code"),Qx(1390,"triggerMode"),og(),Qx(1391,"."),og(),Il(1392,"blockquote")(1393,"p"),Qx(1394,"Retorna "),Il(1395,"code"),Qx(1396,"Observable com o valor true"),og(),Qx(1397," para sinalizar o erro "),Il(1398,"code"),Qx(1399,"false"),og(),Qx(1400," para indicar que n\xE3o h\xE1 erro."),og()(),Il(1401,"p")(1402,"strong"),Qx(1403,"Componente compat\xEDvel"),og(),Qx(1404,": "),Il(1405,"code"),Qx(1406,"po-datepicker"),og()()()(),Il(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),Qx(1411," errorAsyncProperties"),zl(1412,"br"),og()()(),Il(1413,"td",17)(1414,"code",47),Qx(1415,"ErrorAsyncProperties"),og()(),Il(1416,"td",20)(1417,"em")(1418,"strong"),Qx(1419,"(opcional)"),og()(),Il(1420,"p"),Qx(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Il(1422,"p")(1423,"strong"),Qx(1424,"Componentes compat\xEDveis:"),og(),Il(1425,"code"),Qx(1426,"po-input"),og(),Qx(1427,", "),Il(1428,"code"),Qx(1429,"po-number"),og(),Qx(1430,", "),Il(1431,"code"),Qx(1432,"po-decimal"),og(),Qx(1433,", "),Il(1434,"code"),Qx(1435,"po-password"),og(),Qx(1436,"."),og()()(),Il(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),Qx(1441," errorLimit"),zl(1442,"br"),og()()(),Il(1443,"td",17)(1444,"code",28),Qx(1445,"boolean"),og()(),Il(1446,"td",20)(1447,"em")(1448,"strong"),Qx(1449,"(opcional)"),og()(),Il(1450,"p"),Qx(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Il(1452,"blockquote")(1453,"p"),Qx(1454,"Caso essa propriedade seja definida como "),Il(1455,"code"),Qx(1456,"true"),og(),Qx(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Il(1458,"p")(1459,"strong"),Qx(1460,"Componentes compat\xEDveis:"),og(),Il(1461,"code"),Qx(1462,"po-checkbox-group"),og(),Qx(1463,", "),Il(1464,"code"),Qx(1465,"po-combo"),og(),Qx(1466,", "),Il(1467,"code"),Qx(1468,"po-datepicker"),og(),Qx(1469,", "),Il(1470,"code"),Qx(1471,"po-datepicker-range"),og(),Qx(1472,", "),Il(1473,"code"),Qx(1474,"po-decimal"),og(),Qx(1475,", "),Il(1476,"code"),Qx(1477,"po-input"),og(),Qx(1478,", "),Il(1479,"code"),Qx(1480,"po-lookup"),og(),Qx(1481,", "),Il(1482,"code"),Qx(1483,"po-multiselect"),og(),Qx(1484,", "),Il(1485,"code"),Qx(1486,"po-number"),og(),Qx(1487,", "),Il(1488,"code"),Qx(1489,"po-password"),og(),Qx(1490,", "),Il(1491,"code"),Qx(1492,"po-radio-group"),og(),Qx(1493,", "),Il(1494,"code"),Qx(1495,"po-select"),og(),Qx(1496,`,
`),Il(1497,"code"),Qx(1498,"po-switch"),og(),Qx(1499,", "),Il(1500,"code"),Qx(1501,"po-textarea"),og(),Qx(1502,", "),Il(1503,"code"),Qx(1504,"po-timepicker"),og(),Qx(1505,"."),og()()(),Il(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),Qx(1510," errorMessage"),zl(1511,"br"),og()()(),Il(1512,"td",17)(1513,"code",18),Qx(1514,"string"),og()(),Il(1515,"td",20)(1516,"em")(1517,"strong"),Qx(1518,"(opcional)"),og()(),Il(1519,"p"),Qx(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Il(1521,"p"),Qx(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Il(1523,"ul")(1524,"li"),Qx(1525,"pattern;"),og(),Il(1526,"li"),Qx(1527,"minValue;"),og(),Il(1528,"li"),Qx(1529,"maxValue;"),og(),Il(1530,"li"),Qx(1531,"required;"),og()(),Il(1532,"blockquote")(1533,"p"),Qx(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Il(1535,"code"),Qx(1536,"po-datepicker"),og(),Qx(1537,", "),Il(1538,"code"),Qx(1539,"po-input"),og(),Qx(1540,", "),Il(1541,"code"),Qx(1542,"po-number"),og(),Qx(1543,", "),Il(1544,"code"),Qx(1545,"po-decimal"),og(),Qx(1546,", "),Il(1547,"code"),Qx(1548,"po-password"),og(),Qx(1549,", "),Il(1550,"code"),Qx(1551,"po-timepicker"),og(),Qx(1552,`, \xE9 necess\xE1rio que a propriedade
`),Il(1553,"code"),Qx(1554,"requiredFieldErrorMessage"),og(),Qx(1555," esteja como "),Il(1556,"code"),Qx(1557,"true"),og(),Qx(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Il(1559,"code"),Qx(1560,"po-datepicker-range"),og(),Qx(1561,", "),Il(1562,"code"),Qx(1563,"po-select"),og(),Qx(1564,", "),Il(1565,"code"),Qx(1566,"po-checkbox-group"),og(),Qx(1567,", "),Il(1568,"code"),Qx(1569,"po-radio-group"),og(),Qx(1570,", "),Il(1571,"code"),Qx(1572,"po-multiselect"),og(),Qx(1573,", "),Il(1574,"code"),Qx(1575,"po-combo"),og(),Qx(1576,`,
`),Il(1577,"code"),Qx(1578,"po-lookup"),og(),Qx(1579," e "),Il(1580,"code"),Qx(1581,"po-textarea"),og(),Qx(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Il(1583,"code"),Qx(1584,"requiredFieldErrorMessage"),og(),Qx(1585,"."),og()(),Il(1586,"p")(1587,"strong"),Qx(1588,"Componentes compat\xEDveis:"),og(),Il(1589,"code"),Qx(1590,"po-checkbox-group"),og(),Qx(1591,", "),Il(1592,"code"),Qx(1593,"po-combo"),og(),Qx(1594,", "),Il(1595,"code"),Qx(1596,"po-datepicker"),og(),Qx(1597,", "),Il(1598,"code"),Qx(1599,"po-datepicker-range"),og(),Qx(1600,", "),Il(1601,"code"),Qx(1602,"po-decimal"),og(),Qx(1603,", "),Il(1604,"code"),Qx(1605,"po-input"),og(),Qx(1606,", "),Il(1607,"code"),Qx(1608,"po-lookup"),og(),Qx(1609,", "),Il(1610,"code"),Qx(1611,"po-multiselect"),og(),Qx(1612,", "),Il(1613,"code"),Qx(1614,"po-number"),og(),Qx(1615,", "),Il(1616,"code"),Qx(1617,"po-password"),og(),Qx(1618,", "),Il(1619,"code"),Qx(1620,"po-radio-group"),og(),Qx(1621,", "),Il(1622,"code"),Qx(1623,"po-select"),og(),Qx(1624,`,
`),Il(1625,"code"),Qx(1626,"po-switch"),og(),Qx(1627,", "),Il(1628,"code"),Qx(1629,"po-textarea"),og(),Qx(1630,", "),Il(1631,"code"),Qx(1632,"po-timepicker"),og(),Qx(1633,"."),og()()(),Il(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),Qx(1638," fieldLabel"),zl(1639,"br"),og()()(),Il(1640,"td",17)(1641,"code",18),Qx(1642,"string"),og()(),Il(1643,"td",20)(1644,"em")(1645,"strong"),Qx(1646,"(opcional)"),og()(),Il(1647,"p"),Qx(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Il(1649,"p"),Qx(1650,"O valor padr\xE3o \xE9: "),Il(1651,"code"),Qx(1652,"label"),og(),Qx(1653,"."),og(),Il(1654,"blockquote")(1655,"p"),Qx(1656,"Esta propriedade pode ser utilizada em conjunto com: "),Il(1657,"code"),Qx(1658,"options"),og(),Qx(1659,", "),Il(1660,"code"),Qx(1661,"optionsService"),og(),Qx(1662," e "),Il(1663,"code"),Qx(1664,"searchService"),og(),Qx(1665,"."),og()()()(),Il(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),Qx(1670," fieldValue"),zl(1671,"br"),og()()(),Il(1672,"td",17)(1673,"code",18),Qx(1674,"string"),og()(),Il(1675,"td",20)(1676,"em")(1677,"strong"),Qx(1678,"(opcional)"),og()(),Il(1679,"p"),Qx(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Il(1681,"p"),Qx(1682,"O valor padr\xE3o \xE9: "),Il(1683,"code"),Qx(1684,"value"),og(),Qx(1685,"."),og(),Il(1686,"blockquote")(1687,"p"),Qx(1688,"Esta propriedade pode ser utilizada em conjunto com: "),Il(1689,"code"),Qx(1690,"options"),og(),Qx(1691,", "),Il(1692,"code"),Qx(1693,"optionsService"),og(),Qx(1694," e "),Il(1695,"code"),Qx(1696,"searchService"),og(),Qx(1697,"."),og()()()(),Il(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),Qx(1702," filterMinlength"),zl(1703,"br"),og()()(),Il(1704,"td",17)(1705,"code",41),Qx(1706,"number"),og()(),Il(1707,"td",20)(1708,"em")(1709,"strong"),Qx(1710,"(opcional)"),og()(),Il(1711,"p"),Qx(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Il(1713,"code"),Qx(1714,"po-combo"),og(),Qx(1715,"."),og()()(),Il(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),Qx(1720," filterMode"),zl(1721,"br"),og()()(),Il(1722,"td",17)(1723,"code",48),Qx(1724,"PoMultiselectFilterMode"),og()(),Il(1725,"td",20)(1726,"em")(1727,"strong"),Qx(1728,"(opcional)"),og()(),Il(1729,"p"),Qx(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Il(1731,"code"),Qx(1732,"startsWith"),og(),Qx(1733,", "),Il(1734,"code"),Qx(1735,"contains"),og(),Qx(1736," ou "),Il(1737,"code"),Qx(1738,"endsWith"),og(),Qx(1739,"."),og(),Il(1740,"blockquote")(1741,"p"),Qx(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Il(1743,"p")(1744,"strong"),Qx(1745,"Componente compat\xEDvel:"),og(),Il(1746,"code"),Qx(1747,"po-multiselect"),og(),Qx(1748,"."),og()()(),Il(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),Qx(1753," forceBooleanComponentType"),zl(1754,"br"),og()()(),Il(1755,"td",17)(1756,"code",49),Qx(1757,"ForceBooleanComponentEnum"),og()(),Il(1758,"td",20)(1759,"em")(1760,"strong"),Qx(1761,"(opcional)"),og()(),Il(1762,"p"),Qx(1763,"Valores aceitos:"),og(),Il(1764,"ul")(1765,"li"),Qx(1766,"ForceBooleanComponentEnum.switch"),og(),Il(1767,"li"),Qx(1768,"ForceBooleanComponentEnum.checkbox"),og()()()(),Il(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),Qx(1773," forceOptionsComponentType"),zl(1774,"br"),og()()(),Il(1775,"td",17)(1776,"code",50),Qx(1777,"ForceOptionComponentEnum"),og()(),Il(1778,"td",20)(1779,"em")(1780,"strong"),Qx(1781,"(opcional)"),og()(),Il(1782,"p"),Qx(1783,"pode ser utilizada em conjunto com a propriedade "),Il(1784,"code"),Qx(1785,"options"),og(),Qx(1786," for\xE7ando o componente a renderizar um "),Il(1787,"code"),Qx(1788,"po-select"),og(),Qx(1789," ou "),Il(1790,"code"),Qx(1791,"po-radio-group"),og(),Qx(1792,"."),og(),Il(1793,"p"),Qx(1794,"Valores aceitos:"),og(),Il(1795,"ul")(1796,"li"),Qx(1797,"ForceOptionComponentEnum.radioGroup"),og(),Il(1798,"li"),Qx(1799,"ForceOptionComponentEnum.select"),og()(),Il(1800,"blockquote")(1801,"p"),Qx(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Il(1803,"code"),Qx(1804,"optionsMulti"),og(),Qx(1805," e "),Il(1806,"code"),Qx(1807,"optionsService"),og(),Qx(1808,"."),og()()()(),Il(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),Qx(1813," formField"),zl(1814,"br"),og()()(),Il(1815,"td",17)(1816,"code",18),Qx(1817,"string"),og()(),Il(1818,"td",20)(1819,"em")(1820,"strong"),Qx(1821,"(opcional)"),og()(),Il(1822,"p"),Qx(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Il(1824,"code"),Qx(1825,"url"),og(),Qx(1826,"."),og(),Il(1827,"blockquote")(1828,"p"),Qx(1829,"O valor default \xE9 "),Il(1830,"code"),Qx(1831,"files"),og()()(),Il(1832,"p")(1833,"strong"),Qx(1834,"Componente compat\xEDvel"),og(),Qx(1835,": "),Il(1836,"code"),Qx(1837,"po-upload"),og()()()(),Il(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),Qx(1842," format"),zl(1843,"br"),og()()(),Il(1844,"td",17)(1845,"code",18),Qx(1846,"string "),og(),Il(1847,"code",32),Qx(1848," Array<string>"),og()(),Il(1849,"td",20)(1850,"em")(1851,"strong"),Qx(1852,"(opcional)"),og()(),Il(1853,"p"),Qx(1854,"Formato de exibi\xE7\xE3o no campo."),og(),Il(1855,"p"),Qx(1856,"Ao utilizar esta propriedade com o "),Il(1857,"code"),Qx(1858,"type"),og(),Il(1859,"em"),Qx(1860,"PoDynamicFieldType.Date"),og(),Qx(1861," ou "),Il(1862,"em"),Qx(1863,"PoDynamicFieldType.DateTime"),og(),Qx(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Il(1865,"p"),Qx(1866,"Valores v\xE1lidos:"),og(),Il(1867,"ul")(1868,"li"),Qx(1869,"dd/mm/yyyy"),og(),Il(1870,"li"),Qx(1871,"mm/dd/yyyy"),og(),Il(1872,"li"),Qx(1873,"yyyy/mm/dd"),og()(),Il(1874,"p"),Qx(1875,"Ao utilizar com o "),Il(1876,"code"),Qx(1877,"type"),og(),Il(1878,"em"),Qx(1879,"PoDynamicFieldType.Time"),og(),Qx(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Il(1881,"p"),Qx(1882,"Valores v\xE1lidos:"),og(),Il(1883,"ul")(1884,"li")(1885,"code"),Qx(1886,"24"),og(),Qx(1887,": formato de 24 horas (padr\xE3o)"),og(),Il(1888,"li")(1889,"code"),Qx(1890,"12"),og(),Qx(1891,": formato de 12 horas com indicador AM/PM"),og()(),Il(1892,"p"),Qx(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),Il(1894,"code"),Qx(1895,"searchService"),og(),Qx(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Il(1897,"p")(1898,"strong"),Qx(1899,"Componentes compat\xEDveis:"),og(),Il(1900,"code"),Qx(1901,"po-datepicker"),og(),Qx(1902,", "),Il(1903,"code"),Qx(1904,"po-timepicker"),og(),Qx(1905,", "),Il(1906,"code"),Qx(1907,"po-lookup"),og(),Qx(1908,"."),og()()(),Il(1909,"tr",13)(1910,"td",14)(1911,"div",15)(1912,"span",16),Qx(1913," formatModel"),zl(1914,"br"),og()()(),Il(1915,"td",17)(1916,"code",28),Qx(1917,"boolean"),og()(),Il(1918,"td",20)(1919,"em")(1920,"strong"),Qx(1921,"(opcional)"),og()(),Il(1922,"p"),Qx(1923,"Indica se o "),Il(1924,"code"),Qx(1925,"model"),og(),Qx(1926," receber\xE1 o valor formatado pelas propriedades "),Il(1927,"code"),Qx(1928,"p-label-on"),og(),Qx(1929," e "),Il(1930,"code"),Qx(1931,"p-label-off"),og(),Qx(1932,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Il(1933,"p"),Qx(1934,"O valor padr\xE3o \xE9: "),Il(1935,"code"),Qx(1936,"false"),og(),Qx(1937,"."),og(),Il(1938,"blockquote")(1939,"p"),Qx(1940,"Esta propriedade est\xE1 disponivel apenas para o "),Il(1941,"code"),Qx(1942,"swicth"),og(),Qx(1943,"."),og()()()(),Il(1944,"tr",13)(1945,"td",14)(1946,"div",15)(1947,"span",16),Qx(1948," formatTime"),zl(1949,"br"),og()()(),Il(1950,"td",17)(1951,"code",18),Qx(1952,"string"),og()(),Il(1953,"td",20)(1954,"em")(1955,"strong"),Qx(1956,"(opcional)"),og()(),Il(1957,"p"),Qx(1958,"Define o formato de exibi\xE7\xE3o do timer ("),Il(1959,"code"),Qx(1960,"'12'"),og(),Qx(1961," ou "),Il(1962,"code"),Qx(1963,"'24'"),og(),Qx(1964,")."),og(),Il(1965,"p")(1966,"strong"),Qx(1967,"Componente compat\xEDvel:"),og(),Il(1968,"code"),Qx(1969,"po-datetimepicker"),og(),Qx(1970,", "),Il(1971,"code"),Qx(1972,"po-timepicker"),og()()()(),Il(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),Qx(1977," gridColumns"),zl(1978,"br"),og()()(),Il(1979,"td",17)(1980,"code",41),Qx(1981,"number"),og()(),Il(1982,"td",20)(1983,"em")(1984,"strong"),Qx(1985,"(opcional)"),og()(),Il(1986,"p"),Qx(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Il(1988,"p"),Qx(1989,"Deve ser usado o sistema de "),Il(1990,"strong"),Qx(1991,"grid"),og(),Qx(1992," do PO (1 ... 12 colunas)."),og(),Il(1993,"blockquote")(1994,"p"),Qx(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Il(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),Qx(2e3," gridLgColumns"),zl(2001,"br"),og()()(),Il(2002,"td",17)(2003,"code",41),Qx(2004,"number"),og()(),Il(2005,"td",20)(2006,"em")(2007,"strong"),Qx(2008,"(opcional)"),og()(),Il(2009,"p"),Qx(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Il(2011,"p"),Qx(2012,"Deve ser usado o sistema de "),Il(2013,"strong"),Qx(2014,"grid"),og(),Qx(2015," do PO (1 ... 12 colunas)."),og(),Il(2016,"blockquote")(2017,"p"),Qx(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2019,"code"),Qx(2020,"gridColumns"),og(),Qx(2021,"."),og()()()(),Il(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),Qx(2026," gridLgPull"),zl(2027,"br"),og()()(),Il(2028,"td",17)(2029,"code",41),Qx(2030,"number"),og()(),Il(2031,"td",20)(2032,"em")(2033,"strong"),Qx(2034,"(opcional)"),og()(),Il(2035,"p"),Qx(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Il(2037,"p"),Qx(2038,"Deve ser usado o sistema de "),Il(2039,"strong"),Qx(2040,"grid"),og(),Qx(2041," do PO (1 ... 11 colunas)."),og(),Il(2042,"blockquote")(2043,"p"),Qx(2044,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2045,"code"),Qx(2046,"gridColumns"),og(),Qx(2047,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),Qx(2052," gridMdColumns"),zl(2053,"br"),og()()(),Il(2054,"td",17)(2055,"code",41),Qx(2056,"number"),og()(),Il(2057,"td",20)(2058,"em")(2059,"strong"),Qx(2060,"(opcional)"),og()(),Il(2061,"p"),Qx(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Il(2063,"p"),Qx(2064,"Deve ser usado o sistema de "),Il(2065,"strong"),Qx(2066,"grid"),og(),Qx(2067," do PO (1 ... 12 colunas)."),og(),Il(2068,"blockquote")(2069,"p"),Qx(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2071,"code"),Qx(2072,"gridColumns"),og(),Qx(2073,"."),og()()()(),Il(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),Qx(2078," gridMdPull"),zl(2079,"br"),og()()(),Il(2080,"td",17)(2081,"code",41),Qx(2082,"number"),og()(),Il(2083,"td",20)(2084,"em")(2085,"strong"),Qx(2086,"(opcional)"),og()(),Il(2087,"p"),Qx(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Il(2089,"p"),Qx(2090,"Deve ser usado o sistema de "),Il(2091,"strong"),Qx(2092,"grid"),og(),Qx(2093," do PO (1 ... 11 colunas)."),og(),Il(2094,"blockquote")(2095,"p"),Qx(2096,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2097,"code"),Qx(2098,"gridColumns"),og(),Qx(2099,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),Qx(2104," gridSmColumns"),zl(2105,"br"),og()()(),Il(2106,"td",17)(2107,"code",41),Qx(2108,"number"),og()(),Il(2109,"td",20)(2110,"em")(2111,"strong"),Qx(2112,"(opcional)"),og()(),Il(2113,"p"),Qx(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Il(2115,"p"),Qx(2116,"Deve ser usado o sistema de "),Il(2117,"strong"),Qx(2118,"grid"),og(),Qx(2119," do PO (1 ... 12 colunas)."),og(),Il(2120,"blockquote")(2121,"p"),Qx(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2123,"code"),Qx(2124,"gridColumns"),og(),Qx(2125,"."),og()()()(),Il(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),Qx(2130," gridSmPull"),zl(2131,"br"),og()()(),Il(2132,"td",17)(2133,"code",41),Qx(2134,"number"),og()(),Il(2135,"td",20)(2136,"em")(2137,"strong"),Qx(2138,"(opcional)"),og()(),Il(2139,"p"),Qx(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Il(2141,"p"),Qx(2142,"Deve ser usado o sistema de "),Il(2143,"strong"),Qx(2144,"grid"),og(),Qx(2145," do PO (1 ... 11 colunas)."),og(),Il(2146,"blockquote")(2147,"p"),Qx(2148,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2149,"code"),Qx(2150,"gridColumns"),og(),Qx(2151,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),Qx(2156," gridXlColumns"),zl(2157,"br"),og()()(),Il(2158,"td",17)(2159,"code",41),Qx(2160,"number"),og()(),Il(2161,"td",20)(2162,"em")(2163,"strong"),Qx(2164,"(opcional)"),og()(),Il(2165,"p"),Qx(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Il(2167,"p"),Qx(2168,"Deve ser usado o sistema de "),Il(2169,"strong"),Qx(2170,"grid"),og(),Qx(2171," do PO (1 ... 12 colunas)."),og(),Il(2172,"blockquote")(2173,"p"),Qx(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(2175,"code"),Qx(2176,"gridColumns"),og(),Qx(2177,"."),og()()()(),Il(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),Qx(2182," gridXlPull"),zl(2183,"br"),og()()(),Il(2184,"td",17)(2185,"code",41),Qx(2186,"number"),og()(),Il(2187,"td",20)(2188,"em")(2189,"strong"),Qx(2190,"(opcional)"),og()(),Il(2191,"p"),Qx(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Il(2193,"p"),Qx(2194,"Deve ser usado o sistema de "),Il(2195,"strong"),Qx(2196,"grid"),og(),Qx(2197," do PO (1 ... 11 colunas)."),og(),Il(2198,"blockquote")(2199,"p"),Qx(2200,"Esta propriedade n\xE3o funciona com a propriedade "),Il(2201,"code"),Qx(2202,"gridColumns"),og(),Qx(2203,". Deve-se especificar o tamanho da tela."),og()()()(),Il(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),Qx(2208," headers"),zl(2209,"br"),og()()(),Il(2210,"td",17)(2211,"code",51),Qx(2212,"{ [name: string]: string "),og(),Il(2213,"code",52),Qx(2214,` Array<string>;
}`),og()(),Il(2215,"td",20)(2216,"em")(2217,"strong"),Qx(2218,"(opcional)"),og()(),Il(2219,"p"),Qx(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Il(2221,"p")(2222,"strong"),Qx(2223,"Componente compat\xEDvel"),og(),Qx(2224,": "),Il(2225,"code"),Qx(2226,"po-upload"),og()()()(),Il(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),Qx(2231," help"),zl(2232,"br"),og()()(),Il(2233,"td",17)(2234,"code",18),Qx(2235,"string"),og()(),Il(2236,"td",20)(2237,"em")(2238,"strong"),Qx(2239,"(opcional)"),og()(),Il(2240,"p"),Qx(2241,"Texto de ajuda."),og()()(),Il(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),Qx(2246," helper"),zl(2247,"br"),og()()(),Il(2248,"td",17)(2249,"code",18),Qx(2250,"string "),og(),Il(2251,"code",53),Qx(2252," PoHelperOptions"),og()(),Il(2253,"td",20)(2254,"em")(2255,"strong"),Qx(2256,"(opcional)"),og()(),Il(2257,"p"),Qx(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Il(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),Qx(2263," hideLabelStatus"),zl(2264,"br"),og()()(),Il(2265,"td",17)(2266,"code",28),Qx(2267,"boolean"),og()(),Il(2268,"td",20)(2269,"em")(2270,"strong"),Qx(2271,"(opcional)"),og()(),Il(2272,"p"),Qx(2273,"Indica se o status do "),Il(2274,"code"),Qx(2275,"model"),og(),Qx(2276," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Il(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),Qx(2281," hidePasswordPeek"),zl(2282,"br"),og()()(),Il(2283,"td",17)(2284,"code",28),Qx(2285,"boolean"),og()(),Il(2286,"td",20)(2287,"em")(2288,"strong"),Qx(2289,"(opcional)"),og()(),Il(2290,"p"),Qx(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Il(2292,"code"),Qx(2293,"po-password"),og(),Qx(2294,"."),og()()(),Il(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),Qx(2299," hideRestrictionsInfo"),zl(2300,"br"),og()()(),Il(2301,"td",17)(2302,"code",28),Qx(2303,"boolean"),og()(),Il(2304,"td",20)(2305,"em")(2306,"strong"),Qx(2307,"(opcional)"),og()(),Il(2308,"p"),Qx(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Il(2310,"p")(2311,"strong"),Qx(2312,"Componente compat\xEDvel"),og(),Qx(2313,": "),Il(2314,"code"),Qx(2315,"po-upload"),og()()()(),Il(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),Qx(2320," hideSearch"),zl(2321,"br"),og()()(),Il(2322,"td",17)(2323,"code",28),Qx(2324,"boolean"),og()(),Il(2325,"td",20)(2326,"em")(2327,"strong"),Qx(2328,"(opcional)"),og()(),Il(2329,"p"),Qx(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),Il(2331,"code"),Qx(2332,"po-multiselect"),og(),Qx(2333,"."),og()()(),Il(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),Qx(2338," hideSelectAll"),zl(2339,"br"),og()()(),Il(2340,"td",17)(2341,"code",28),Qx(2342,"boolean"),og()(),Il(2343,"td",20)(2344,"em")(2345,"strong"),Qx(2346,"(opcional)"),og()(),Il(2347,"p"),Qx(2348,'Indica se o campo "Selecionar todos" do '),Il(2349,"code"),Qx(2350,"po-multiselect"),og(),Qx(2351," ser\xE1 escondido."),og()()(),Il(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),Qx(2356," hideSelectButton"),zl(2357,"br"),og()()(),Il(2358,"td",17)(2359,"code",28),Qx(2360,"boolean"),og()(),Il(2361,"td",20)(2362,"em")(2363,"strong"),Qx(2364,"(opcional)"),og()(),Il(2365,"p"),Qx(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Il(2367,"blockquote")(2368,"p"),Qx(2369,"Caso o valor definido seja "),Il(2370,"code"),Qx(2371,"true"),og(),Qx(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Il(2373,"code"),Qx(2374,"selectFiles()"),og(),Qx(2375," para sele\xE7\xE3o de arquivos."),og()(),Il(2376,"p")(2377,"strong"),Qx(2378,"Componente compat\xEDvel"),og(),Qx(2379,": "),Il(2380,"code"),Qx(2381,"po-upload"),og()()()(),Il(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),Qx(2386," hideSendButton"),zl(2387,"br"),og()()(),Il(2388,"td",17)(2389,"code",28),Qx(2390,"boolean"),og()(),Il(2391,"td",20)(2392,"em")(2393,"strong"),Qx(2394,"(opcional)"),og()(),Il(2395,"p"),Qx(2396,"Omite o bot\xE3o de envio de arquivos."),og(),Il(2397,"blockquote")(2398,"p"),Qx(2399,"Caso o valor definido seja "),Il(2400,"code"),Qx(2401,"true"),og(),Qx(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Il(2403,"code"),Qx(2404,"sendFiles()"),og(),Qx(2405," para envio do(s) arquivo(s) selecionado(s)."),og()(),Il(2406,"p")(2407,"strong"),Qx(2408,"Componente compat\xEDvel"),og(),Qx(2409,": "),Il(2410,"code"),Qx(2411,"po-upload"),og()()()(),Il(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),Qx(2416," icon"),zl(2417,"br"),og()()(),Il(2418,"td",17)(2419,"code",18),Qx(2420,"string "),og(),Il(2421,"code",54),Qx(2422," TemplateRef<void>"),og()(),Il(2423,"td",20)(2424,"em")(2425,"strong"),Qx(2426,"(opcional)"),og()(),Il(2427,"p"),Qx(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Il(2429,"blockquote")(2430,"p"),Qx(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Il(2432,"ul")(2433,"li"),Qx(2434,"Input;"),og(),Il(2435,"li"),Qx(2436,"Number;"),og(),Il(2437,"li"),Qx(2438,"Decimal;"),og(),Il(2439,"li"),Qx(2440,"Combo;"),og(),Il(2441,"li"),Qx(2442,"Password;"),og()(),Il(2443,"blockquote")(2444,"p"),Qx(2445,"Veja a disponibilidade de \xEDcones em "),Il(2446,"a",55),Qx(2447,"biblioteca de \xEDcones"),og(),Qx(2448,"."),og()()()(),Il(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),Qx(2453," infiniteScroll"),zl(2454,"br"),og()()(),Il(2455,"td",17)(2456,"code",28),Qx(2457,"boolean"),og()(),Il(2458,"td",20)(2459,"em")(2460,"strong"),Qx(2461,"(opcional)"),og()(),Il(2462,"p"),Qx(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Il(2464,"p")(2465,"strong"),Qx(2466,"Componentes compat\xEDveis:"),og(),Il(2467,"code"),Qx(2468,"po-combo"),og(),Qx(2469,", "),Il(2470,"code"),Qx(2471,"po-lookup"),og(),Qx(2472,"."),og()()(),Il(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),Qx(2477," infiniteScrollDistance"),zl(2478,"br"),og()()(),Il(2479,"td",17)(2480,"code",41),Qx(2481,"number"),og()(),Il(2482,"td",20)(2483,"em")(2484,"strong"),Qx(2485,"(opcional)"),og()(),Il(2486,"p"),Qx(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Il(2488,"strong"),Qx(2489,"Exemplos"),og(),Il(2490,"code"),Qx(2491,"{ infiniteScrollDistance: 80 }"),og(),Qx(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Il(2493,"p")(2494,"strong"),Qx(2495,"Componente compat\xEDvel:"),og(),Il(2496,"code"),Qx(2497,"po-combo"),og(),Qx(2498,"."),og()()(),Il(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),Qx(2503," invalidValue"),zl(2504,"br"),og()()(),Il(2505,"td",17)(2506,"code",28),Qx(2507,"boolean"),og()(),Il(2508,"td",20)(2509,"em")(2510,"strong"),Qx(2511,"(opcional)"),og()(),Il(2512,"p"),Qx(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Il(2514,"code"),Qx(2515,"p-field-error-message"),og(),Qx(2516,"."),og(),Il(2517,"blockquote")(2518,"p"),Qx(2519,"Caso essa propriedade seja definida como "),Il(2520,"code"),Qx(2521,"true"),og(),Qx(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Il(2523,"p")(2524,"strong"),Qx(2525,"Componente compat\xEDvel"),og(),Qx(2526,": "),Il(2527,"code"),Qx(2528,"po-switch"),og()()()(),Il(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),Qx(2533," isoFormat"),zl(2534,"br"),og()()(),Il(2535,"td",17)(2536,"code",56),Qx(2537,"PoDatepickerIsoFormat"),og()(),Il(2538,"td",20)(2539,"em")(2540,"strong"),Qx(2541,"(opcional)"),og()(),Il(2542,"p"),Qx(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Il(2544,"blockquote")(2545,"p"),Qx(2546,"Veja os valores v\xE1lidos no "),Il(2547,"code"),Qx(2548,"PoDatepickerIsoFormat"),og(),Qx(2549,"."),og()(),Il(2550,"p")(2551,"strong"),Qx(2552,"Componente compat\xEDvel:"),og(),Il(2553,"code"),Qx(2554,"po-datepicker"),og()()()(),Il(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),Qx(2559," key"),zl(2560,"br"),og()()(),Il(2561,"td",17)(2562,"code",28),Qx(2563,"boolean"),og()(),Il(2564,"td",20)(2565,"em")(2566,"strong"),Qx(2567,"(opcional)"),og()(),Il(2568,"p"),Qx(2569,"Identificador"),og()()(),Il(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),Qx(2574," keydown"),zl(2575,"br"),og()()(),Il(2576,"td",17)(2577,"code",29),Qx(2578,"Function"),og()(),Il(2579,"td",20)(2580,"em")(2581,"strong"),Qx(2582,"(opcional)"),og()(),Il(2583,"p"),Qx(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Il(2585,"code"),Qx(2586,"KeyboardEvent"),og(),Qx(2587," com informa\xE7\xF5es sobre a tecla."),og()()(),Il(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),Qx(2592," label"),zl(2593,"br"),og()()(),Il(2594,"td",17)(2595,"code",18),Qx(2596,"string"),og()(),Il(2597,"td",20)(2598,"em")(2599,"strong"),Qx(2600,"(opcional)"),og()(),Il(2601,"p"),Qx(2602,"R\xF3tulo do campo exibido."),og(),Il(2603,"p"),Qx(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Il(2605,"code"),Qx(2606,"label"),og(),Qx(2607," o valor da propriedade "),Il(2608,"code"),Qx(2609,"property"),og(),Qx(2610," com a primeira letra em mai\xFAsculo."),og()()(),Il(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),Qx(2615," labelPosition"),zl(2616,"br"),og()()(),Il(2617,"td",17)(2618,"code",57),Qx(2619,"PoSwitchLabelPosition"),og()(),Il(2620,"td",20)(2621,"em")(2622,"strong"),Qx(2623,"(opcional)"),og()(),Il(2624,"p"),Qx(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Il(2626,"blockquote")(2627,"p"),Qx(2628,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Il(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),Qx(2633," listboxControlPosition"),zl(2634,"br"),og()()(),Il(2635,"td",17)(2636,"code",58),Qx(2637,"'top' "),og(),Il(2638,"code",59),Qx(2639," 'bottom'"),og()(),Il(2640,"td",20)(2641,"em")(2642,"strong"),Qx(2643,"(opcional)"),og()(),Il(2644,"p"),Qx(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Il(2646,"code"),Qx(2647,"listbox"),og(),Qx(2648," em rela\xE7\xE3o ao campo ("),Il(2649,"code"),Qx(2650,"top"),og(),Qx(2651," ou "),Il(2652,"code"),Qx(2653,"bottom"),og(),Qx(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Il(2655,"p")(2656,"strong"),Qx(2657,"Componentes compat\xEDveis:"),og(),Il(2658,"code"),Qx(2659,"po-multiselect"),og(),Qx(2660,", "),Il(2661,"code"),Qx(2662,"po-combo"),og(),Qx(2663,"."),og()()(),Il(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),Qx(2668," literals"),zl(2669,"br"),og()()(),Il(2670,"td",17)(2671,"code",60),Qx(2672,"PoLookupLiterals "),og(),Il(2673,"code",61),Qx(2674," PoMultiselectLiterals "),og(),Il(2675,"code",62),Qx(2676," PoComboLiterals "),og(),Il(2677,"code",63),Qx(2678," PoDatepickerRangeLiterals "),og(),Il(2679,"code",64),Qx(2680," PoUploadLiterals"),og()(),Il(2681,"td",20)(2682,"em")(2683,"strong"),Qx(2684,"(opcional)"),og()(),Il(2685,"p"),Qx(2686,"Objeto com as literais usadas para os seguintes componentes: "),Il(2687,"code"),Qx(2688,"po-lookup"),og(),Qx(2689,", "),Il(2690,"code"),Qx(2691,"po-multiselect"),og(),Qx(2692,", "),Il(2693,"code"),Qx(2694,"po-combo"),og(),Qx(2695," e "),Il(2696,"code"),Qx(2697,"po-datepicker-range"),og(),Qx(2698,"."),og(),Il(2699,"blockquote")(2700,"p"),Qx(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Il(2702,"p")(2703,"strong"),Qx(2704,"Componentes compat\xEDveis:"),og(),Il(2705,"code"),Qx(2706,"po-lookup"),og(),Qx(2707,", "),Il(2708,"code"),Qx(2709,"po-multiselect"),og(),Qx(2710,", "),Il(2711,"code"),Qx(2712,"po-combo"),og(),Qx(2713,", "),Il(2714,"code"),Qx(2715,"po-datepicker-range"),og()()()(),Il(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),Qx(2720," loading"),zl(2721,"br"),og()()(),Il(2722,"td",17)(2723,"code",28),Qx(2724,"boolean"),og()(),Il(2725,"td",20)(2726,"em")(2727,"strong"),Qx(2728,"(opcional)"),og()(),Il(2729,"p"),Qx(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Il(2731,"blockquote")(2732,"p"),Qx(2733,"Por padr\xE3o \xE9 "),Il(2734,"code"),Qx(2735,"false"),og(),Qx(2736,"."),og()(),Il(2737,"p")(2738,"strong"),Qx(2739,"Componentes compat\xEDveis:"),og(),Il(2740,"code"),Qx(2741,"po-datepicker"),og(),Qx(2742,", "),Il(2743,"code"),Qx(2744,"po-datepicker-range"),og(),Qx(2745,", "),Il(2746,"code"),Qx(2747,"po-number"),og(),Qx(2748,", "),Il(2749,"code"),Qx(2750,"po-decimal"),og(),Qx(2751,`,
`),Il(2752,"code"),Qx(2753,"po-input"),og(),Qx(2754,", "),Il(2755,"code"),Qx(2756,"po-select"),og(),Qx(2757,", "),Il(2758,"code"),Qx(2759,"po-switch"),og(),Qx(2760,", "),Il(2761,"code"),Qx(2762,"po-combo"),og(),Qx(2763,", "),Il(2764,"code"),Qx(2765,"po-lookup"),og(),Qx(2766,", "),Il(2767,"code"),Qx(2768,"po-multiselect"),og(),Qx(2769,`,
`),Il(2770,"code"),Qx(2771,"po-textarea"),og(),Qx(2772,", "),Il(2773,"code"),Qx(2774,"po-password"),og(),Qx(2775,", "),Il(2776,"code"),Qx(2777,"po-upload"),og(),Qx(2778,"."),og()()(),Il(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),Qx(2783," locale"),zl(2784,"br"),og()()(),Il(2785,"td",17)(2786,"code",18),Qx(2787,"string"),og()(),Il(2788,"td",20)(2789,"em")(2790,"strong"),Qx(2791,"(opcional)"),og()(),Il(2792,"p"),Qx(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Il(2794,"a",65)(2795,"code"),Qx(2796,"I18n"),og()()(),Il(2797,"p"),Qx(2798,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(2799,"pre")(2800,"code"),Qx(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Il(2802,"blockquote")(2803,"p"),Qx(2804,"Para ver quais linguagens suportadas acesse "),Il(2805,"a",65)(2806,"code"),Qx(2807,"I18n"),og()()()(),Il(2808,"p")(2809,"strong"),Qx(2810,"Componentes compat\xEDveis:"),og(),Il(2811,"code"),Qx(2812,"po-datepicker"),og(),Qx(2813,", "),Il(2814,"code"),Qx(2815,"po-decimal"),og(),Qx(2816,", "),Il(2817,"code"),Qx(2818,"po-timepicker"),og(),Qx(2819,"."),og()()(),Il(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),Qx(2824," mask"),zl(2825,"br"),og()()(),Il(2826,"td",17)(2827,"code",18),Qx(2828,"string"),og()(),Il(2829,"td",20)(2830,"em")(2831,"strong"),Qx(2832,"(opcional)"),og()(),Il(2833,"p"),Qx(2834,"M\xE1scara para o campo."),og(),Il(2835,"p")(2836,"strong"),Qx(2837,"Componente compat\xEDvel:"),og(),Il(2838,"code"),Qx(2839,"po-input"),og(),Qx(2840,"."),og(),Il(2841,"blockquote")(2842,"p"),Qx(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Il(2844,"code"),Qx(2845,"type: time"),og(),Qx(2846,"."),og()()()(),Il(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),Qx(2851," maskFormatModel"),zl(2852,"br"),og()()(),Il(2853,"td",17)(2854,"code",28),Qx(2855,"boolean"),og()(),Il(2856,"td",20)(2857,"em")(2858,"strong"),Qx(2859,"(opcional)"),og()(),Il(2860,"p"),Qx(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Il(2862,"code"),Qx(2863,"false"),og(),Qx(2864,"."),og(),Il(2865,"p")(2866,"strong"),Qx(2867,"Componente compat\xEDvel:"),og(),Il(2868,"code"),Qx(2869,"po-input"),og(),Qx(2870,"."),og(),Il(2871,"blockquote")(2872,"p"),Qx(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Il(2874,"code"),Qx(2875,"type: time"),og(),Qx(2876,"."),og()()()(),Il(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),Qx(2881," maskNoLengthValidation"),zl(2882,"br"),og()()(),Il(2883,"td",17)(2884,"code",28),Qx(2885,"boolean"),og()(),Il(2886,"td",20)(2887,"em")(2888,"strong"),Qx(2889,"(opcional)"),og()(),Il(2890,"p"),Qx(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Il(2892,"code"),Qx(2893,"minLength"),og(),Qx(2894,") e m\xE1ximo ("),Il(2895,"code"),Qx(2896,"maxLength"),og(),Qx(2897,") quando h\xE1 uma m\xE1scara ("),Il(2898,"code"),Qx(2899,"p-mask"),og(),Qx(2900,") definida."),og(),Il(2901,"ul")(2902,"li"),Qx(2903,"Quando "),Il(2904,"code"),Qx(2905,"true"),og(),Qx(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Il(2907,"li"),Qx(2908,"Quando "),Il(2909,"code"),Qx(2910,"false"),og(),Qx(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Il(2912,"p")(2913,"strong"),Qx(2914,"Componentes compat\xEDveis:"),og(),Il(2915,"code"),Qx(2916,"po-input"),og(),Qx(2917,", "),Il(2918,"code"),Qx(2919,"po-decimal"),og(),Qx(2920,"."),og(),Il(2921,"blockquote")(2922,"p"),Qx(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Il(2924,"code"),Qx(2925,"p-mask-format-model"),og(),Qx(2926,"."),og()(),Il(2927,"p"),Qx(2928,"Exemplo:"),og(),Il(2929,"pre")(2930,"code"),Qx(2931,`fields:Array<PoDynamicFormField> = [
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
`),og()(),Il(2932,"ul")(2933,"li"),Qx(2934,"Entrada: "),Il(2935,"code"),Qx(2936,"11.111.111/1111-11"),og(),Qx(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Il(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),Qx(2942," maxLength"),zl(2943,"br"),og()()(),Il(2944,"td",17)(2945,"code",41),Qx(2946,"number"),og()(),Il(2947,"td",20)(2948,"em")(2949,"strong"),Qx(2950,"(opcional)"),og()(),Il(2951,"p"),Qx(2952,"Tamanho m\xE1ximo de caracteres."),og(),Il(2953,"p")(2954,"strong"),Qx(2955,"Componentes compat\xEDveis:"),og(),Il(2956,"code"),Qx(2957,"po-input"),og(),Qx(2958,", "),Il(2959,"code"),Qx(2960,"po-number"),og(),Qx(2961,", "),Il(2962,"code"),Qx(2963,"po-decimal"),og(),Qx(2964,", "),Il(2965,"code"),Qx(2966,"po-textarea"),og(),Qx(2967,", "),Il(2968,"code"),Qx(2969,"po-password"),og(),Qx(2970,"."),og()()(),Il(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),Qx(2975," maxTime"),zl(2976,"br"),og()()(),Il(2977,"td",17)(2978,"code",18),Qx(2979,"string"),og()(),Il(2980,"td",20)(2981,"em")(2982,"strong"),Qx(2983,"(opcional)"),og()(),Il(2984,"p"),Qx(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Il(2986,"code"),Qx(2987,"HH:mm"),og(),Qx(2988," ou "),Il(2989,"code"),Qx(2990,"HH:mm:ss"),og(),Qx(2991,"."),og(),Il(2992,"p")(2993,"strong"),Qx(2994,"Componente compat\xEDvel:"),og(),Il(2995,"code"),Qx(2996,"po-datetimepicker"),og(),Qx(2997,", "),Il(2998,"code"),Qx(2999,"po-timepicker"),og()()()(),Il(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),Qx(3004," maxValue"),zl(3005,"br"),og()()(),Il(3006,"td",17)(3007,"code",18),Qx(3008,"string "),og(),Il(3009,"code",41),Qx(3010," number"),og()(),Il(3011,"td",20)(3012,"em")(3013,"strong"),Qx(3014,"(opcional)"),og()(),Il(3015,"p"),Qx(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Il(3017,"em"),Qx(3018,"number"),og(),Qx(3019,", "),Il(3020,"em"),Qx(3021,"date"),og(),Qx(3022,", "),Il(3023,"em"),Qx(3024,"dateTime"),og(),Qx(3025," ou "),Il(3026,"em"),Qx(3027,"time"),og(),Qx(3028,"."),og(),Il(3029,"blockquote")(3030,"p"),Qx(3031,"Para "),Il(3032,"code"),Qx(3033,"po-timepicker"),og(),Qx(3034,", o valor deve estar no formato "),Il(3035,"code"),Qx(3036,"HH:mm"),og(),Qx(3037," ou "),Il(3038,"code"),Qx(3039,"HH:mm:ss"),og(),Qx(3040,"."),og()(),Il(3041,"p")(3042,"strong"),Qx(3043,"Componentes compat\xEDveis:"),og(),Il(3044,"code"),Qx(3045,"po-datepicker"),og(),Qx(3046,", "),Il(3047,"code"),Qx(3048,"po-datepicker-range"),og(),Qx(3049,", "),Il(3050,"code"),Qx(3051,"po-number"),og(),Qx(3052,", "),Il(3053,"code"),Qx(3054,"po-decimal"),og(),Qx(3055,", "),Il(3056,"code"),Qx(3057,"po-timepicker"),og()()()(),Il(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),Qx(3062," minLength"),zl(3063,"br"),og()()(),Il(3064,"td",17)(3065,"code",41),Qx(3066,"number"),og()(),Il(3067,"td",20)(3068,"em")(3069,"strong"),Qx(3070,"(opcional)"),og()(),Il(3071,"p"),Qx(3072,"Tamanho m\xEDnimo de caracteres."),og(),Il(3073,"p")(3074,"strong"),Qx(3075,"Componentes compat\xEDveis:"),og(),Il(3076,"code"),Qx(3077,"po-input"),og(),Qx(3078,", "),Il(3079,"code"),Qx(3080,"po-number"),og(),Qx(3081,", "),Il(3082,"code"),Qx(3083,"po-decimal"),og(),Qx(3084,", "),Il(3085,"code"),Qx(3086,"po-textarea"),og(),Qx(3087,", "),Il(3088,"code"),Qx(3089,"po-password"),og(),Qx(3090,"."),og()()(),Il(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),Qx(3095," minTime"),zl(3096,"br"),og()()(),Il(3097,"td",17)(3098,"code",18),Qx(3099,"string"),og()(),Il(3100,"td",20)(3101,"em")(3102,"strong"),Qx(3103,"(opcional)"),og()(),Il(3104,"p"),Qx(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Il(3106,"code"),Qx(3107,"HH:mm"),og(),Qx(3108," ou "),Il(3109,"code"),Qx(3110,"HH:mm:ss"),og(),Qx(3111,"."),og(),Il(3112,"p")(3113,"strong"),Qx(3114,"Componente compat\xEDvel:"),og(),Il(3115,"code"),Qx(3116,"po-datetimepicker"),og(),Qx(3117,", "),Il(3118,"code"),Qx(3119,"po-timepicker"),og()()()(),Il(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),Qx(3124," minValue"),zl(3125,"br"),og()()(),Il(3126,"td",17)(3127,"code",18),Qx(3128,"string "),og(),Il(3129,"code",41),Qx(3130," number"),og()(),Il(3131,"td",20)(3132,"em")(3133,"strong"),Qx(3134,"(opcional)"),og()(),Il(3135,"p"),Qx(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Il(3137,"em"),Qx(3138,"number"),og(),Qx(3139,", "),Il(3140,"em"),Qx(3141,"date"),og(),Qx(3142,", "),Il(3143,"em"),Qx(3144,"dateTime"),og(),Qx(3145," ou "),Il(3146,"em"),Qx(3147,"time"),og(),Qx(3148,"."),og(),Il(3149,"blockquote")(3150,"p"),Qx(3151,"Para "),Il(3152,"code"),Qx(3153,"po-timepicker"),og(),Qx(3154,", o valor deve estar no formato "),Il(3155,"code"),Qx(3156,"HH:mm"),og(),Qx(3157," ou "),Il(3158,"code"),Qx(3159,"HH:mm:ss"),og(),Qx(3160,"."),og()(),Il(3161,"p")(3162,"strong"),Qx(3163,"Componentes compat\xEDveis:"),og(),Il(3164,"code"),Qx(3165,"po-datepicker"),og(),Qx(3166,", "),Il(3167,"code"),Qx(3168,"po-datepicker-range"),og(),Qx(3169,", "),Il(3170,"code"),Qx(3171,"po-number"),og(),Qx(3172,", "),Il(3173,"code"),Qx(3174,"po-decimal"),og(),Qx(3175,", "),Il(3176,"code"),Qx(3177,"po-timepicker"),og()()()(),Il(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),Qx(3182," minuteInterval"),zl(3183,"br"),og()()(),Il(3184,"td",17)(3185,"code",41),Qx(3186,"number"),og()(),Il(3187,"td",20)(3188,"em")(3189,"strong"),Qx(3190,"(opcional)"),og()(),Il(3191,"p"),Qx(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Il(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),Qx(3197," mode"),zl(3198,"br"),og()()(),Il(3199,"td",17)(3200,"code",66),Qx(3201,"'month-year' "),og(),Il(3202,"code",67),Qx(3203," 'year'"),og()(),Il(3204,"td",20)(3205,"em")(3206,"strong"),Qx(3207,"(opcional)"),og()(),Il(3208,"p"),Qx(3209,"Define o modo de sele\xE7\xE3o do "),Il(3210,"code"),Qx(3211,"po-datepicker"),og(),Qx(3212,"."),og(),Il(3213,"p"),Qx(3214,"Valores aceitos:"),og(),Il(3215,"ul")(3216,"li")(3217,"code"),Qx(3218,"'month-year'"),og(),Qx(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Il(3220,"code"),Qx(3221,"MM/YYYY"),og(),Qx(3222,")"),og(),Il(3223,"li")(3224,"code"),Qx(3225,"'year'"),og(),Qx(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),Il(3227,"code"),Qx(3228,"YYYY"),og(),Qx(3229,")"),og()(),Il(3230,"p")(3231,"strong"),Qx(3232,"Componente compat\xEDvel:"),og(),Il(3233,"code"),Qx(3234,"po-datepicker"),og()()()(),Il(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),Qx(3239," modelFormat"),zl(3240,"br"),og()()(),Il(3241,"td",17)(3242,"code",68),Qx(3243,"PoTimepickerModelFormat"),og()(),Il(3244,"td",20)(3245,"em")(3246,"strong"),Qx(3247,"(opcional)"),og()(),Il(3248,"p"),Qx(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Il(3250,"code"),Qx(3251,"po-timepicker"),og(),Qx(3252,"."),og(),Il(3253,"blockquote")(3254,"p"),Qx(3255,"Veja os valores v\xE1lidos no "),Il(3256,"code"),Qx(3257,"PoTimepickerModelFormat"),og(),Qx(3258,"."),og()(),Il(3259,"p")(3260,"strong"),Qx(3261,"Componente compat\xEDvel:"),og(),Il(3262,"code"),Qx(3263,"po-timepicker"),og()()()(),Il(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),Qx(3268," multiple"),zl(3269,"br"),og()()(),Il(3270,"td",17)(3271,"code",28),Qx(3272,"boolean"),og()(),Il(3273,"td",20)(3274,"em")(3275,"strong"),Qx(3276,"(opcional)"),og()(),Il(3277,"p"),Qx(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Il(3279,"p")(3280,"strong"),Qx(3281,"Componentes compat\xEDveis:"),og(),Il(3282,"code"),Qx(3283,"po-lookup"),og(),Qx(3284,", "),Il(3285,"code"),Qx(3286,"po-upload"),og()()()(),Il(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),Qx(3291," noAutocomplete"),zl(3292,"br"),og()()(),Il(3293,"td",17)(3294,"code",28),Qx(3295,"boolean"),og()(),Il(3296,"td",20)(3297,"em")(3298,"strong"),Qx(3299,"(opcional)"),og()(),Il(3300,"p"),Qx(3301,"Define a propriedade nativa "),Il(3302,"code"),Qx(3303,"autocomplete"),og(),Qx(3304," do campo como off."),og(),Il(3305,"p")(3306,"strong"),Qx(3307,"Componentes compat\xEDveis:"),og(),Il(3308,"code"),Qx(3309,"po-datepicker"),og(),Qx(3310,", "),Il(3311,"code"),Qx(3312,"po-datepicker-range"),og(),Qx(3313,", "),Il(3314,"code"),Qx(3315,"po-input"),og(),Qx(3316,", "),Il(3317,"code"),Qx(3318,"po-number"),og(),Qx(3319,", "),Il(3320,"code"),Qx(3321,"po-decimal"),og(),Qx(3322,`,
`),Il(3323,"code"),Qx(3324,"po-lookup"),og(),Qx(3325,", "),Il(3326,"code"),Qx(3327,"po-password"),og(),Qx(3328,", "),Il(3329,"code"),Qx(3330,"po-timepicker"),og(),Qx(3331,"."),og()()(),Il(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),Qx(3336," offsetColumns"),zl(3337,"br"),og()()(),Il(3338,"td",17)(3339,"code",41),Qx(3340,"number"),og()(),Il(3341,"td",20)(3342,"em")(3343,"strong"),Qx(3344,"(opcional)"),og()(),Il(3345,"p"),Qx(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Il(3347,"p"),Qx(3348,"Deve ser usado o sistema de "),Il(3349,"strong"),Qx(3350,"grid"),og(),Qx(3351," do PO (1 ... 12 colunas)."),og(),Il(3352,"blockquote")(3353,"p"),Qx(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Il(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),Qx(3359," offsetLgColumns"),zl(3360,"br"),og()()(),Il(3361,"td",17)(3362,"code",41),Qx(3363,"number"),og()(),Il(3364,"td",20)(3365,"em")(3366,"strong"),Qx(3367,"(opcional)"),og()(),Il(3368,"p"),Qx(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Il(3370,"p"),Qx(3371,"Deve ser usado o sistema de "),Il(3372,"strong"),Qx(3373,"grid"),og(),Qx(3374," do PO (1 ... 12 colunas)."),og(),Il(3375,"blockquote")(3376,"p"),Qx(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(3378,"code"),Qx(3379,"offsetColumns"),og(),Qx(3380,"."),og()()()(),Il(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),Qx(3385," offsetMdColumns"),zl(3386,"br"),og()()(),Il(3387,"td",17)(3388,"code",41),Qx(3389,"number"),og()(),Il(3390,"td",20)(3391,"em")(3392,"strong"),Qx(3393,"(opcional)"),og()(),Il(3394,"p"),Qx(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Il(3396,"p"),Qx(3397,"Deve ser usado o sistema de "),Il(3398,"strong"),Qx(3399,"grid"),og(),Qx(3400," do PO (1 ... 12 colunas)."),og(),Il(3401,"blockquote")(3402,"p"),Qx(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(3404,"code"),Qx(3405,"offsetColumns"),og(),Qx(3406,"."),og()()()(),Il(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),Qx(3411," offsetSmColumns"),zl(3412,"br"),og()()(),Il(3413,"td",17)(3414,"code",41),Qx(3415,"number"),og()(),Il(3416,"td",20)(3417,"em")(3418,"strong"),Qx(3419,"(opcional)"),og()(),Il(3420,"p"),Qx(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Il(3422,"p"),Qx(3423,"Deve ser usado o sistema de "),Il(3424,"strong"),Qx(3425,"grid"),og(),Qx(3426," do PO (1 ... 12 colunas)."),og(),Il(3427,"blockquote")(3428,"p"),Qx(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(3430,"code"),Qx(3431,"offsetColumns"),og(),Qx(3432,"."),og()()()(),Il(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),Qx(3437," offsetXlColumns"),zl(3438,"br"),og()()(),Il(3439,"td",17)(3440,"code",41),Qx(3441,"number"),og()(),Il(3442,"td",20)(3443,"em")(3444,"strong"),Qx(3445,"(opcional)"),og()(),Il(3446,"p"),Qx(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Il(3448,"p"),Qx(3449,"Deve ser usado o sistema de "),Il(3450,"strong"),Qx(3451,"grid"),og(),Qx(3452," do PO (1 ... 12 colunas)."),og(),Il(3453,"blockquote")(3454,"p"),Qx(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Il(3456,"code"),Qx(3457,"offsetColumns"),og(),Qx(3458,"."),og()()()(),Il(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),Qx(3463," onError"),zl(3464,"br"),og()()(),Il(3465,"td",17)(3466,"code",29),Qx(3467,"Function"),og()(),Il(3468,"td",20)(3469,"em")(3470,"strong"),Qx(3471,"(opcional)"),og()(),Il(3472,"p"),Qx(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Il(3474,"blockquote")(3475,"p"),Qx(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Il(3477,"code"),Qx(3478,"HttpErrorResponse"),og(),Qx(3479,"."),og()(),Il(3480,"p")(3481,"strong"),Qx(3482,"Componente compat\xEDvel"),og(),Qx(3483,": "),Il(3484,"code"),Qx(3485,"po-upload"),og()()()(),Il(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),Qx(3490," onSuccess"),zl(3491,"br"),og()()(),Il(3492,"td",17)(3493,"code",29),Qx(3494,"Function"),og()(),Il(3495,"td",20)(3496,"em")(3497,"strong"),Qx(3498,"(opcional)"),og()(),Il(3499,"p"),Qx(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Il(3501,"blockquote")(3502,"p"),Qx(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Il(3504,"code"),Qx(3505,"HttpResponse"),og(),Qx(3506,"."),og()(),Il(3507,"p")(3508,"strong"),Qx(3509,"Componente compat\xEDvel"),og(),Qx(3510,": "),Il(3511,"code"),Qx(3512,"po-upload"),og()()()(),Il(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),Qx(3517," onUpload"),zl(3518,"br"),og()()(),Il(3519,"td",17)(3520,"code",29),Qx(3521,"Function"),og()(),Il(3522,"td",20)(3523,"em")(3524,"strong"),Qx(3525,"(opcional)"),og()(),Il(3526,"p"),Qx(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Il(3528,"pre")(3529,"code"),Qx(3530,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Il(3531,"p")(3532,"strong"),Qx(3533,"Componente compat\xEDvel"),og(),Qx(3534,": "),Il(3535,"code"),Qx(3536,"po-upload"),og()()()(),Il(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),Qx(3541," optional"),zl(3542,"br"),og()()(),Il(3543,"td",17)(3544,"code",28),Qx(3545,"boolean"),og()(),Il(3546,"td",20)(3547,"em")(3548,"strong"),Qx(3549,"(opcional)"),og()(),Il(3550,"p"),Qx(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Il(3552,"blockquote")(3553,"p"),Qx(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Il(3555,"ul")(3556,"li"),Qx(3557,"O campo for "),Il(3558,"code"),Qx(3559,"required"),og(),Qx(3560,", ou;"),og(),Il(3561,"li"),Qx(3562,"N\xE3o possuir "),Il(3563,"code"),Qx(3564,"help"),og(),Qx(3565," e "),Il(3566,"code"),Qx(3567,"label"),og(),Qx(3568,"."),og()(),Il(3569,"p")(3570,"strong"),Qx(3571,"Componentes compat\xEDveis:"),og(),Il(3572,"code"),Qx(3573,"po-datepicker"),og(),Qx(3574,", "),Il(3575,"code"),Qx(3576,"po-datepicker-range"),og(),Qx(3577,", "),Il(3578,"code"),Qx(3579,"po-timepicker"),og(),Qx(3580,", "),Il(3581,"code"),Qx(3582,"po-input"),og(),Qx(3583,", "),Il(3584,"code"),Qx(3585,"po-number"),og(),Qx(3586,`,
`),Il(3587,"code"),Qx(3588,"po-decimal"),og(),Qx(3589,", "),Il(3590,"code"),Qx(3591,"po-select"),og(),Qx(3592,", "),Il(3593,"code"),Qx(3594,"po-radio-group"),og(),Qx(3595,", "),Il(3596,"code"),Qx(3597,"po-combo"),og(),Qx(3598,", "),Il(3599,"code"),Qx(3600,"po-lookup"),og(),Qx(3601,", "),Il(3602,"code"),Qx(3603,"po-checkbox-group"),og(),Qx(3604,", "),Il(3605,"code"),Qx(3606,"po-multiselect"),og(),Qx(3607,`,
`),Il(3608,"code"),Qx(3609,"po-textarea"),og(),Qx(3610,", "),Il(3611,"code"),Qx(3612,"po-password"),og(),Qx(3613,"."),og()()(),Il(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),Qx(3618," options"),zl(3619,"br"),og()()(),Il(3620,"td",17)(3621,"code",32),Qx(3622,"Array<string> "),og(),Il(3623,"code",69),Qx(3624," Array<PoSelectOption> "),og(),Il(3625,"code",70),Qx(3626," Array<PoMultiselectOption> "),og(),Il(3627,"code",71),Qx(3628," Array<PoCheckboxGroupOption> "),og(),Il(3629,"code",72),Qx(3630," Array<any>"),og()(),Il(3631,"td",20)(3632,"em")(3633,"strong"),Qx(3634,"(opcional)"),og()(),Il(3635,"p"),Qx(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Il(3637,"p")(3638,"strong"),Qx(3639,"Componentes compat\xEDveis:"),og(),Il(3640,"code"),Qx(3641,"po-select"),og(),Qx(3642,", "),Il(3643,"code"),Qx(3644,"po-radio-group"),og(),Qx(3645,", "),Il(3646,"code"),Qx(3647,"po-checkbox-group"),og(),Qx(3648,", "),Il(3649,"code"),Qx(3650,"po-multiselect"),og(),Qx(3651,"."),og()()(),Il(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),Qx(3656," optionsMulti"),zl(3657,"br"),og()()(),Il(3658,"td",17)(3659,"code",28),Qx(3660,"boolean"),og()(),Il(3661,"td",20)(3662,"em")(3663,"strong"),Qx(3664,"(opcional)"),og()(),Il(3665,"p"),Qx(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Il(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),Qx(3671," optionsService"),zl(3672,"br"),og()()(),Il(3673,"td",17)(3674,"code",18),Qx(3675,"string "),og(),Il(3676,"code",73),Qx(3677," PoComboFilter "),og(),Il(3678,"code",74),Qx(3679," PoMultiselectFilter"),og()(),Il(3680,"td",20)(3681,"em")(3682,"strong"),Qx(3683,"(opcional)"),og()(),Il(3684,"p"),Qx(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Il(3686,"strong"),Qx(3687,"Importante"),og()(),Il(3688,"blockquote")(3689,"p"),Qx(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Il(3691,"a",75),Qx(3692,"guia de API do PO UI"),og(),Qx(3693,"."),og()()()(),Il(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),Qx(3698," order"),zl(3699,"br"),og()()(),Il(3700,"td",17)(3701,"code",41),Qx(3702,"number"),og()(),Il(3703,"td",20)(3704,"em")(3705,"strong"),Qx(3706,"(opcional)"),og()(),Il(3707,"p"),Qx(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Il(3709,"p"),Qx(3710,"Exemplo de utiliza\xE7\xE3o:"),og(),Il(3711,"p")(3712,"code"),Qx(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Il(3714,"p"),Qx(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Il(3716,"code"),Qx(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Il(3718,"p"),Qx(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Il(3720,"p"),Qx(3721,"Campos sem "),Il(3722,"code"),Qx(3723,"order"),og(),Qx(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Il(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),Qx(3729," params"),zl(3730,"br"),og()()(),Il(3731,"td",17)(3732,"code",33),Qx(3733,"any"),og()(),Il(3734,"td",20)(3735,"em")(3736,"strong"),Qx(3737,"(opcional)"),og()(),Il(3738,"p"),Qx(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Il(3740,"code"),Qx(3741,"po-lookup"),og(),Qx(3742,` e
`),Il(3743,"code"),Qx(3744,"po-combo"),og(),Qx(3745,"."),og(),Il(3746,"p"),Qx(3747,"Por exemplo, para o par\xE2metro "),Il(3748,"code"),Qx(3749,"{ age: 23 }"),og(),Qx(3750," a URL da requisi\xE7\xE3o ficaria:"),og(),Il(3751,"p")(3752,"code"),Qx(3753,"url + ?age=23&filter=Peter"),og()()()(),Il(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),Qx(3758," pattern"),zl(3759,"br"),og()()(),Il(3760,"td",17)(3761,"code",18),Qx(3762,"string"),og()(),Il(3763,"td",20)(3764,"em")(3765,"strong"),Qx(3766,"(opcional)"),og()(),Il(3767,"p"),Qx(3768,"Regex para valida\xE7\xE3o do campo."),og(),Il(3769,"p")(3770,"strong"),Qx(3771,"Componentes compat\xEDveis:"),og(),Il(3772,"code"),Qx(3773,"po-input"),og(),Qx(3774,", "),Il(3775,"code"),Qx(3776,"po-password"),og(),Qx(3777,"."),og()()(),Il(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),Qx(3782," placeholder"),zl(3783,"br"),og()()(),Il(3784,"td",17)(3785,"code",18),Qx(3786,"string"),og()(),Il(3787,"td",20)(3788,"em")(3789,"strong"),Qx(3790,"(opcional)"),og()(),Il(3791,"p"),Qx(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Il(3793,"p")(3794,"strong"),Qx(3795,"Componentes compat\xEDveis:"),og(),Il(3796,"code"),Qx(3797,"po-datepicker"),og(),Qx(3798,", "),Il(3799,"code"),Qx(3800,"po-datepicker-range"),og(),Qx(3801,", "),Il(3802,"code"),Qx(3803,"po-timepicker"),og(),Qx(3804,", "),Il(3805,"code"),Qx(3806,"po-input"),og(),Qx(3807,", "),Il(3808,"code"),Qx(3809,"po-number"),og(),Qx(3810,", "),Il(3811,"code"),Qx(3812,"po-decimal"),og(),Qx(3813,", "),Il(3814,"code"),Qx(3815,"po-select"),og(),Qx(3816,", "),Il(3817,"code"),Qx(3818,"po-combo"),og(),Qx(3819,", "),Il(3820,"code"),Qx(3821,"po-lookup"),og(),Qx(3822,", "),Il(3823,"code"),Qx(3824,"po-multiselect"),og(),Qx(3825,", "),Il(3826,"code"),Qx(3827,"po-textarea"),og(),Qx(3828,", "),Il(3829,"code"),Qx(3830,"po-password"),og(),Qx(3831,"."),og()()(),Il(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),Qx(3836," placeholderSearch"),zl(3837,"br"),og()()(),Il(3838,"td",17)(3839,"code",18),Qx(3840,"string"),og()(),Il(3841,"td",20)(3842,"em")(3843,"strong"),Qx(3844,"(opcional)"),og()(),Il(3845,"p"),Qx(3846,"Placeholder do campo de pesquisa do "),Il(3847,"code"),Qx(3848,"po-multiselect"),og(),Qx(3849,"."),og(),Il(3850,"blockquote")(3851,"p"),Qx(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Il(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),Qx(3857," property"),zl(3858,"br"),og()()(),Il(3859,"td",17)(3860,"code",18),Qx(3861,"string"),og()(),Il(3862,"td",20)(3863,"p"),Qx(3864,"Nome de refer\xEAncia do campo."),og()()(),Il(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),Qx(3869," range"),zl(3870,"br"),og()()(),Il(3871,"td",17)(3872,"code",28),Qx(3873,"boolean"),og()(),Il(3874,"td",20)(3875,"em")(3876,"strong"),Qx(3877,"(opcional)"),og()(),Il(3878,"p"),Qx(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Il(3880,"blockquote")(3881,"p"),Qx(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Il(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),Qx(3887," rangePresetOptions"),zl(3888,"br"),og()()(),Il(3889,"td",17)(3890,"code",76),Qx(3891,"Array<PoCalendarRangePreset>"),og()(),Il(3892,"td",20)(3893,"em")(3894,"strong"),Qx(3895,"(opcional)"),og()(),Il(3896,"p"),Qx(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Il(3898,"p"),Qx(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Il(3900,"code"),Qx(3901,"PoCalendarRangePreset"),og(),Qx(3902,"."),og(),Il(3903,"p")(3904,"strong"),Qx(3905,"Componente compat\xEDvel:"),og(),Il(3906,"code"),Qx(3907,"po-datepicker-range"),og()()()(),Il(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),Qx(3912," rangePresets"),zl(3913,"br"),og()()(),Il(3914,"td",17)(3915,"code",28),Qx(3916,"boolean "),og(),Il(3917,"code",32),Qx(3918," Array<string>"),og()(),Il(3919,"td",20)(3920,"em")(3921,"strong"),Qx(3922,"(opcional)"),og()(),Il(3923,"p"),Qx(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Il(3925,"p"),Qx(3926,"Aceita os seguintes valores:"),og(),Il(3927,"ul")(3928,"li")(3929,"code"),Qx(3930,"true"),og(),Qx(3931,": exibe todos os presets padr\xE3o."),og(),Il(3932,"li")(3933,"code"),Qx(3934,"false"),og(),Qx(3935,": n\xE3o exibe os presets padr\xE3o."),og(),Il(3936,"li")(3937,"code"),Qx(3938,"Array<string>"),og(),Qx(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Il(3940,"p")(3941,"strong"),Qx(3942,"Componente compat\xEDvel:"),og(),Il(3943,"code"),Qx(3944,"po-datepicker-range"),og()()()(),Il(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),Qx(3949," rangePresetsOrder"),zl(3950,"br"),og()()(),Il(3951,"td",17)(3952,"code",77),Qx(3953,"'asc' "),og(),Il(3954,"code",78),Qx(3955," 'desc'"),og()(),Il(3956,"td",20)(3957,"em")(3958,"strong"),Qx(3959,"(opcional)"),og()(),Il(3960,"p"),Qx(3961,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Il(3962,"p"),Qx(3963,"Valores aceitos:"),og(),Il(3964,"ul")(3965,"li")(3966,"code"),Qx(3967,"'asc'"),og(),Qx(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Il(3969,"li")(3970,"code"),Qx(3971,"'desc'"),og(),Qx(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Il(3973,"p")(3974,"strong"),Qx(3975,"Componente compat\xEDvel:"),og(),Il(3976,"code"),Qx(3977,"po-datepicker-range"),og()()()(),Il(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),Qx(3982," readonly"),zl(3983,"br"),og()()(),Il(3984,"td",17)(3985,"code",28),Qx(3986,"boolean"),og()(),Il(3987,"td",20)(3988,"em")(3989,"strong"),Qx(3990,"(opcional)"),og()(),Il(3991,"p"),Qx(3992,"Indica que o campo ser\xE1 somente leitura."),og(),Il(3993,"p")(3994,"strong"),Qx(3995,"Componentes compat\xEDveis:"),og(),Il(3996,"code"),Qx(3997,"po-datepicker"),og(),Qx(3998,", "),Il(3999,"code"),Qx(4e3,"po-datepicker-range"),og(),Qx(4001,", "),Il(4002,"code"),Qx(4003,"po-timepicker"),og(),Qx(4004,", "),Il(4005,"code"),Qx(4006,"po-input"),og(),Qx(4007,", "),Il(4008,"code"),Qx(4009,"po-number"),og(),Qx(4010,`,
`),Il(4011,"code"),Qx(4012,"po-decimal"),og(),Qx(4013,", "),Il(4014,"code"),Qx(4015,"po-select"),og(),Qx(4016,", "),Il(4017,"code"),Qx(4018,"po-textarea"),og(),Qx(4019,", "),Il(4020,"code"),Qx(4021,"po-password"),og(),Qx(4022,"."),og()()(),Il(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),Qx(4027," removeInitialFilter"),zl(4028,"br"),og()()(),Il(4029,"td",17)(4030,"code",28),Qx(4031,"boolean"),og()(),Il(4032,"td",20)(4033,"em")(4034,"strong"),Qx(4035,"(opcional)"),og()(),Il(4036,"p"),Qx(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Il(4038,"blockquote")(4039,"p"),Qx(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Il(4041,"p")(4042,"strong"),Qx(4043,"Componente compat\xEDvel"),og(),Qx(4044,": "),Il(4045,"code"),Qx(4046,"po-combo"),og()()()(),Il(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),Qx(4051," required"),zl(4052,"br"),og()()(),Il(4053,"td",17)(4054,"code",28),Qx(4055,"boolean"),og()(),Il(4056,"td",20)(4057,"em")(4058,"strong"),Qx(4059,"(opcional)"),og()(),Il(4060,"p"),Qx(4061,"Define a obrigatoriedade do campo."),og(),Il(4062,"p")(4063,"strong"),Qx(4064,"Componentes compat\xEDveis:"),og(),Il(4065,"code"),Qx(4066,"po-datepicker"),og(),Qx(4067,", "),Il(4068,"code"),Qx(4069,"po-datepicker-range"),og(),Qx(4070,", "),Il(4071,"code"),Qx(4072,"po-timepicker"),og(),Qx(4073,", "),Il(4074,"code"),Qx(4075,"po-input"),og(),Qx(4076,", "),Il(4077,"code"),Qx(4078,"po-number"),og(),Qx(4079,`,
`),Il(4080,"code"),Qx(4081,"po-decimal"),og(),Qx(4082,", "),Il(4083,"code"),Qx(4084,"po-select"),og(),Qx(4085,", "),Il(4086,"code"),Qx(4087,"po-radio-group"),og(),Qx(4088,", "),Il(4089,"code"),Qx(4090,"po-combo"),og(),Qx(4091,", "),Il(4092,"code"),Qx(4093,"po-lookup"),og(),Qx(4094,", "),Il(4095,"code"),Qx(4096,"po-checkbox-group"),og(),Qx(4097,", "),Il(4098,"code"),Qx(4099,"po-multiselect"),og(),Qx(4100,`,
`),Il(4101,"code"),Qx(4102,"po-textarea"),og(),Qx(4103,", "),Il(4104,"code"),Qx(4105,"po-password``, "),og(),Qx(4106,"po-upload`."),og()()(),Il(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),Qx(4111," requiredFieldErrorMessage"),zl(4112,"br"),og()()(),Il(4113,"td",17)(4114,"code",28),Qx(4115,"boolean"),og()(),Il(4116,"td",20)(4117,"em")(4118,"strong"),Qx(4119,"(opcional)"),og()(),Il(4120,"p"),Qx(4121,"Exibe a mensagem setada na propriedade "),Il(4122,"code"),Qx(4123,"errorMessage"),og(),Qx(4124," se o campo estiver vazio e for requerido."),og(),Il(4125,"blockquote")(4126,"p"),Qx(4127,"Necess\xE1rio que a propriedade "),Il(4128,"code"),Qx(4129,"required"),og(),Qx(4130," esteja habilitada."),og()(),Il(4131,"p")(4132,"strong"),Qx(4133,"Componentes compat\xEDveis:"),og(),Il(4134,"code"),Qx(4135,"po-datepicker"),og(),Qx(4136,", "),Il(4137,"code"),Qx(4138,"po-timepicker"),og(),Qx(4139,", "),Il(4140,"code"),Qx(4141,"po-input"),og(),Qx(4142,", "),Il(4143,"code"),Qx(4144,"po-number"),og(),Qx(4145,", "),Il(4146,"code"),Qx(4147,"po-decimal"),og(),Qx(4148,", "),Il(4149,"code"),Qx(4150,"po-password"),og(),Qx(4151,"."),og()()(),Il(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),Qx(4156," restrictions"),zl(4157,"br"),og()()(),Il(4158,"td",17)(4159,"code",79),Qx(4160,"PoUploadFileRestrictions"),og()(),Il(4161,"td",20)(4162,"em")(4163,"strong"),Qx(4164,"(opcional)"),og()(),Il(4165,"p"),Qx(4166,"Objeto que segue a defini\xE7\xE3o da interface "),Il(4167,"code"),Qx(4168,"PoUploadFileRestrictions"),og(),Qx(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Il(4170,"p")(4171,"strong"),Qx(4172,"Componente compat\xEDvel"),og(),Qx(4173,": "),Il(4174,"code"),Qx(4175,"po-upload"),og()()()(),Il(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),Qx(4180," rows"),zl(4181,"br"),og()()(),Il(4182,"td",17)(4183,"code",41),Qx(4184,"number"),og()(),Il(4185,"td",20)(4186,"em")(4187,"strong"),Qx(4188,"(opcional)"),og()(),Il(4189,"p"),Qx(4190,"Quantidade de linhas exibidas no "),Il(4191,"code"),Qx(4192,"po-textarea"),og(),Qx(4193,"."),og()()(),Il(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),Qx(4198," searchService"),zl(4199,"br"),og()()(),Il(4200,"td",17)(4201,"code",18),Qx(4202,"string "),og(),Il(4203,"code",80),Qx(4204," PoLookupFilter"),og()(),Il(4205,"td",20)(4206,"em")(4207,"strong"),Qx(4208,"(opcional)"),og()(),Il(4209,"p"),Qx(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Il(4211,"code"),Qx(4212,"columns"),og(),Qx(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Il(4214,"strong"),Qx(4215,"Importante:"),og()(),Il(4216,"blockquote")(4217,"p"),Qx(4218,"Caso utilizar a propriedade "),Il(4219,"code"),Qx(4220,"optionsService"),og(),Qx(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Il(4222,"a",75),Qx(4223,"guia de API do PO UI"),og(),Qx(4224,"."),og()()()(),Il(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),Qx(4229," secondInterval"),zl(4230,"br"),og()()(),Il(4231,"td",17)(4232,"code",41),Qx(4233,"number"),og()(),Il(4234,"td",20)(4235,"em")(4236,"strong"),Qx(4237,"(opcional)"),og()(),Il(4238,"p"),Qx(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Il(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),Qx(4244," secret"),zl(4245,"br"),og()()(),Il(4246,"td",17)(4247,"code",28),Qx(4248,"boolean"),og()(),Il(4249,"td",20)(4250,"em")(4251,"strong"),Qx(4252,"(opcional)"),og()(),Il(4253,"p"),Qx(4254,"Esconde a informa\xE7\xE3o estilo "),Il(4255,"em"),Qx(4256,"password"),og(),Qx(4257,", pode ser utilizado quando o tipo de dado for "),Il(4258,"em"),Qx(4259,"string"),og(),Qx(4260,"."),og()()(),Il(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),Qx(4265," showRequired"),zl(4266,"br"),og()()(),Il(4267,"td",17)(4268,"code",28),Qx(4269,"boolean"),og()(),Il(4270,"td",20)(4271,"em")(4272,"strong"),Qx(4273,"(opcional)"),og()(),Il(4274,"p"),Qx(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Il(4276,"blockquote")(4277,"p"),Qx(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Il(4279,"ul")(4280,"li"),Qx(4281,"N\xE3o possuir "),Il(4282,"code"),Qx(4283,"p-help"),og(),Qx(4284," e/ou "),Il(4285,"code"),Qx(4286,"p-label"),og(),Qx(4287,"."),og()(),Il(4288,"p")(4289,"strong"),Qx(4290,"Componentes compat\xEDveis:"),og(),Il(4291,"code"),Qx(4292,"po-datepicker"),og(),Qx(4293,", "),Il(4294,"code"),Qx(4295,"po-datepicker-range"),og(),Qx(4296,", "),Il(4297,"code"),Qx(4298,"po-timepicker"),og(),Qx(4299,", "),Il(4300,"code"),Qx(4301,"po-input"),og(),Qx(4302,", "),Il(4303,"code"),Qx(4304,"po-number"),og(),Qx(4305,`,
`),Il(4306,"code"),Qx(4307,"po-decimal"),og(),Qx(4308,", "),Il(4309,"code"),Qx(4310,"po-select"),og(),Qx(4311,", "),Il(4312,"code"),Qx(4313,"po-radio-group"),og(),Qx(4314,", "),Il(4315,"code"),Qx(4316,"po-combo"),og(),Qx(4317,", "),Il(4318,"code"),Qx(4319,"po-lookup"),og(),Qx(4320,", "),Il(4321,"code"),Qx(4322,"po-checkbox-group"),og(),Qx(4323,", "),Il(4324,"code"),Qx(4325,"po-multiselect"),og(),Qx(4326,`,
`),Il(4327,"code"),Qx(4328,"po-textarea"),og(),Qx(4329,", "),Il(4330,"code"),Qx(4331,"po-password"),og(),Qx(4332,", "),Il(4333,"code"),Qx(4334,"po-upload"),og(),Qx(4335,"."),og()()(),Il(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),Qx(4340," showSeconds"),zl(4341,"br"),og()()(),Il(4342,"td",17)(4343,"code",28),Qx(4344,"boolean"),og()(),Il(4345,"td",20)(4346,"em")(4347,"strong"),Qx(4348,"(opcional)"),og()(),Il(4349,"p"),Qx(4350,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Il(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),Qx(4355," showThumbnail"),zl(4356,"br"),og()()(),Il(4357,"td",17)(4358,"code",28),Qx(4359,"boolean"),og()(),Il(4360,"td",20)(4361,"em")(4362,"strong"),Qx(4363,"(opcional)"),og()(),Il(4364,"p"),Qx(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Il(4366,"blockquote")(4367,"p"),Qx(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),Il(4369,"code"),Qx(4370,".png"),og(),Qx(4371,", "),Il(4372,"code"),Qx(4373,".jpg"),og(),Qx(4374,", "),Il(4375,"code"),Qx(4376,".jpeg"),og(),Qx(4377," e "),Il(4378,"code"),Qx(4379,".gif"),og(),Qx(4380,")."),og()(),Il(4381,"p")(4382,"strong"),Qx(4383,"Componente compat\xEDvel"),og(),Qx(4384,": "),Il(4385,"code"),Qx(4386,"po-upload"),og()()()(),Il(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),Qx(4391," size"),zl(4392,"br"),og()()(),Il(4393,"td",17)(4394,"code",18),Qx(4395,"string"),og()(),Il(4396,"td",20)(4397,"em")(4398,"strong"),Qx(4399,"(opcional)"),og()(),Il(4400,"p"),Qx(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Il(4402,"ul")(4403,"li")(4404,"code"),Qx(4405,"small"),og(),Qx(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Il(4407,"li")(4408,"code"),Qx(4409,"medium"),og(),Qx(4410,": aplica a medida medium de cada componente."),og(),Il(4411,"li")(4412,"code"),Qx(4413,"large"),og(),Qx(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),Il(4415,"code"),Qx(4416,"po-checkbox"),og(),Qx(4417," e "),Il(4418,"code"),Qx(4419,"po-radio-group"),og(),Qx(4420,")."),Il(4421,"blockquote")(4422,"p"),Qx(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Il(4424,"code"),Qx(4425,"medium"),og(),Qx(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Il(4427,"a",21),Qx(4428,"po-theme"),og(),Qx(4429,"."),og()()()()()(),Il(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),Qx(4434," sort"),zl(4435,"br"),og()()(),Il(4436,"td",17)(4437,"code",28),Qx(4438,"boolean"),og()(),Il(4439,"td",20)(4440,"em")(4441,"strong"),Qx(4442,"(opcional)"),og()(),Il(4443,"p"),Qx(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Il(4445,"p")(4446,"strong"),Qx(4447,"Componentes compat\xEDveis:"),og(),Il(4448,"code"),Qx(4449,"po-combo"),og(),Qx(4450,", po-multiselect"),og()()(),Il(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),Qx(4455," step"),zl(4456,"br"),og()()(),Il(4457,"td",17)(4458,"code",41),Qx(4459,"number"),og()(),Il(4460,"td",20)(4461,"em")(4462,"strong"),Qx(4463,"(opcional)"),og()(),Il(4464,"p"),Qx(4465,"Intervalo utilizado no "),Il(4466,"code"),Qx(4467,"po-number"),og(),Qx(4468,"."),og()()(),Il(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),Qx(4473," thousandMaxlength"),zl(4474,"br"),og()()(),Il(4475,"td",17)(4476,"code",41),Qx(4477,"number"),og()(),Il(4478,"td",20)(4479,"em")(4480,"strong"),Qx(4481,"(opcional)"),og()(),Il(4482,"p"),Qx(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Il(4484,"blockquote")(4485,"p"),Qx(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),Il(4487,"code"),Qx(4488,"type"),og(),Qx(4489," for "),Il(4490,"em"),Qx(4491,"currency"),og(),Qx(4492," ou "),Il(4493,"em"),Qx(4494,"decimal"),og(),Qx(4495,"."),og()()()(),Il(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),Qx(4500," type"),zl(4501,"br"),og()()(),Il(4502,"td",17)(4503,"code",18),Qx(4504,"string "),og(),Il(4505,"code",81),Qx(4506," PoDynamicFieldType"),og()(),Il(4507,"td",20)(4508,"em")(4509,"strong"),Qx(4510,"(opcional)"),og()(),Il(4511,"p"),Qx(4512,"Tipo do valor campo."),og(),Il(4513,"p"),Qx(4514,"Valores v\xE1lidos:"),og(),Il(4515,"ul")(4516,"li")(4517,"code"),Qx(4518,"boolean"),og(),Qx(4519,": Valores "),Il(4520,"em"),Qx(4521,"booleanos"),og(),Qx(4522,"."),og(),Il(4523,"li")(4524,"code"),Qx(4525,"currency"),og(),Qx(4526,": Valores monet\xE1rios."),og(),Il(4527,"li")(4528,"code"),Qx(4529,"decimal"),og(),Qx(4530,": Valores decimais."),og(),Il(4531,"li")(4532,"code"),Qx(4533,"date"),og(),Qx(4534,": Valores de datas."),Il(4535,"ul")(4536,"li"),Qx(4537,"Aceita os tipos "),Il(4538,"strong"),Qx(4539,"string"),og(),Qx(4540," e "),Il(4541,"strong"),Qx(4542,"Date"),og(),Qx(4543,` padr\xE3o do Javascript,
por exemplo: `),Il(4544,"code"),Qx(4545,"'2017-11-28'"),og(),Qx(4546," ou "),Il(4547,"code"),Qx(4548,"new Date(2017, 10, 28)"),og(),Qx(4549,"."),og()()(),Il(4550,"li")(4551,"code"),Qx(4552,"dateTime"),og(),Qx(4553,": Valor de data com hor\xE1rio."),Il(4554,"ul")(4555,"li"),Qx(4556,"Aceita o tipo "),Il(4557,"em"),Qx(4558,"string"),og(),Qx(4559," no formato "),Il(4560,"strong"),Qx(4561,"ISO-8601"),og(),Qx(4562," extendido "),Il(4563,"strong"),Qx(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),Qx(4565,`
e o tipo `),Il(4566,"strong"),Qx(4567,"Date"),og(),Qx(4568," padr\xE3o do Javascript, por exemplo: "),Il(4569,"code"),Qx(4570,"'2017-11-28T00:00:00-02:00'"),og(),Qx(4571," ou "),Il(4572,"code"),Qx(4573,"new Date(2017, 10, 28)"),og(),Qx(4574,"."),og()()(),Il(4575,"li")(4576,"code"),Qx(4577,"number"),og(),Qx(4578,": Valores num\xE9ricos."),og(),Il(4579,"li")(4580,"code"),Qx(4581,"string"),og(),Qx(4582,": Textos."),og(),Il(4583,"li")(4584,"code"),Qx(4585,"time"),og(),Qx(4586,": Valor do hor\xE1rio."),Il(4587,"ul")(4588,"li"),Qx(4589,"Aceita o tipo "),Il(4590,"strong"),Qx(4591,"string"),og(),Qx(4592," nos formatos "),Il(4593,"strong"),Qx(4594,"'HH:mm:ss'"),og(),Qx(4595," ou "),Il(4596,"strong"),Qx(4597,"'HH:mm:ss.ffffff'"),og(),Qx(4598,", por exemplo: "),Il(4599,"code"),Qx(4600,"'23:12:45'"),og(),Qx(4601,"."),og()()()()()(),Il(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),Qx(4606," url"),zl(4607,"br"),og()()(),Il(4608,"td",17)(4609,"code",18),Qx(4610,"string"),og()(),Il(4611,"td",20)(4612,"em")(4613,"strong"),Qx(4614,"(opcional)"),og()(),Il(4615,"p"),Qx(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Il(4617,"p")(4618,"strong"),Qx(4619,"Componente compat\xEDvel"),og(),Qx(4620,": "),Il(4621,"code"),Qx(4622,"po-upload"),og()()()(),Il(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),Qx(4627," validate"),zl(4628,"br"),og()()(),Il(4629,"td",17)(4630,"code",18),Qx(4631,"string "),og(),Il(4632,"code",29),Qx(4633," Function"),og()(),Il(4634,"td",20)(4635,"em")(4636,"strong"),Qx(4637,"(opcional)"),og()(),Il(4638,"p"),Qx(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Il(4640,"strong"),Qx(4641,"mudan\xE7as do campo"),og(),Qx(4642,"."),og(),Il(4643,"ul")(4644,"li"),Qx(4645,"A propriedade aceita os seguintes tipos:"),og()(),Il(4646,"ul")(4647,"li")(4648,"strong"),Qx(4649,"String"),og(),Qx(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Il(4651,"code"),Qx(4652,"POST"),og(),Qx(4653,"."),og(),Il(4654,"li")(4655,"strong"),Qx(4656,"Function"),og(),Qx(4657,": M\xE9todo que ser\xE1 executado."),og()(),Il(4658,"p"),Qx(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Il(4660,"code"),Qx(4661,"PoDynamicFormFieldChanged"),og(),Qx(4662,":"),og(),Il(4663,"p")(4664,"code"),Qx(4665,"{ property: 'property name', value: 'new value' }"),og()(),Il(4666,"p"),Qx(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Il(4668,"a",82),Qx(4669,"PoDynamicFormFieldValidation"),og(),Qx(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Il(4671,"pre")(4672,"code"),Qx(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Il(4674,"p"),Qx(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Il(4676,"code"),Qx(4677,"bind"),og(),Qx(4678,`, por exemplo:
`),Il(4679,"code"),Qx(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Il(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),Qx(4685," visible"),zl(4686,"br"),og()()(),Il(4687,"td",17)(4688,"code",28),Qx(4689,"boolean"),og()(),Il(4690,"td",20)(4691,"em")(4692,"strong"),Qx(4693,"(opcional)"),og()(),Il(4694,"p"),Qx(4695,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Il(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),Qx(4700," yearRangeLimit"),zl(4701,"br"),og()()(),Il(4702,"td",17)(4703,"code",41),Qx(4704,"number"),og()(),Il(4705,"td",20)(4706,"em")(4707,"strong"),Qx(4708,"(opcional)"),og()(),Il(4709,"p"),Qx(4710,"Define o limite de anos exibidos na lista de anos do "),Il(4711,"code"),Qx(4712,"po-datepicker"),og(),Qx(4713," nos modos "),Il(4714,"code"),Qx(4715,"month-year"),og(),Qx(4716," e "),Il(4717,"code"),Qx(4718,"year"),og(),Qx(4719,"."),og()()()(),Il(4720,"h4",38)(4721,"code",5),Qx(4722,"PoDynamicFormLoad"),og()(),Il(4723,"div",2)(4724,"p"),zl(4725,"a",83),og(),Il(4726,"p"),Qx(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),og()(),Il(4728,"h4",9),Qx(4729,"Propriedades"),og(),Il(4730,"table",10)(4731,"tr",11)(4732,"th",12),Qx(4733,"Nome"),og(),Il(4734,"th",12),Qx(4735,"Tipo"),og(),Il(4736,"th",12),Qx(4737,"Descri\xE7\xE3o"),og()(),Il(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),Qx(4742," fields"),zl(4743,"br"),og()()(),Il(4744,"td",17)(4745,"code",22),Qx(4746,"Array<PoDynamicFormField>"),og()(),Il(4747,"td",20)(4748,"em")(4749,"strong"),Qx(4750,"(opcional)"),og()(),Il(4751,"p"),Qx(4752,"Lista com as novas defini\xE7\xF5es dos campos."),og(),Il(4753,"blockquote")(4754,"p"),Qx(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),og()()()(),Il(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),Qx(4760," focus"),zl(4761,"br"),og()()(),Il(4762,"td",17)(4763,"code",18),Qx(4764,"string"),og()(),Il(4765,"td",20)(4766,"em")(4767,"strong"),Qx(4768,"(opcional)"),og()(),Il(4769,"p"),Qx(4770,"Nome do campo que receber\xE1 o foco."),og(),Il(4771,"p"),Qx(4772,"Exemplo:"),og(),Il(4773,"pre")(4774,"code"),Qx(4775,`focus: 'name'
`),og()()()(),Il(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),Qx(4780," value"),zl(4781,"br"),og()()(),Il(4782,"td",17)(4783,"code",33),Qx(4784,"any"),og()(),Il(4785,"td",20)(4786,"em")(4787,"strong"),Qx(4788,"(opcional)"),og()(),Il(4789,"p"),Qx(4790,"Objeto contendo os novos valores."),og(),Il(4791,"p"),Qx(4792,"Exemplo:"),og(),Il(4793,"pre")(4794,"code"),Qx(4795,`{
  name: 'new name',
  age: 10
}
`),og()(),Il(4796,"blockquote")(4797,"p"),Qx(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),og()()()()(),Il(4799,"h4",38)(4800,"code",5),Qx(4801,"PoDynamicFormFieldChanged"),og()(),Il(4802,"div",2)(4803,"p"),Qx(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),og()(),Il(4805,"h4",9),Qx(4806,"Propriedades"),og(),Il(4807,"table",10)(4808,"tr",11)(4809,"th",12),Qx(4810,"Nome"),og(),Il(4811,"th",12),Qx(4812,"Tipo"),og(),Il(4813,"th",12),Qx(4814,"Descri\xE7\xE3o"),og()(),Il(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),Qx(4819," property"),zl(4820,"br"),og()()(),Il(4821,"td",17)(4822,"code",18),Qx(4823,"string"),og()(),Il(4824,"td",20)(4825,"p"),Qx(4826,"Valor da propriedade do campo."),og()()(),Il(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),Qx(4831," value"),zl(4832,"br"),og()()(),Il(4833,"td",17)(4834,"code",33),Qx(4835,"any"),og()(),Il(4836,"td",20)(4837,"p"),Qx(4838,"Novo valor do campo."),og()()()(),Il(4839,"h4",38)(4840,"code",5),Qx(4841,"PoDynamicFormFieldValidation"),og()(),Il(4842,"div",2)(4843,"p"),zl(4844,"a",84),og(),Il(4845,"p"),Qx(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),og()(),Il(4847,"h4",9),Qx(4848,"Propriedades"),og(),Il(4849,"table",10)(4850,"tr",11)(4851,"th",12),Qx(4852,"Nome"),og(),Il(4853,"th",12),Qx(4854,"Tipo"),og(),Il(4855,"th",12),Qx(4856,"Descri\xE7\xE3o"),og()(),Il(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),Qx(4861," field"),zl(4862,"br"),og()()(),Il(4863,"td",17)(4864,"code",85),Qx(4865,"PoDynamicFormField"),og()(),Il(4866,"td",20)(4867,"em")(4868,"strong"),Qx(4869,"(opcional)"),og()(),Il(4870,"p"),Qx(4871,"Novas defini\xE7\xF5es das propriedades do campo."),og(),Il(4872,"blockquote")(4873,"p"),Qx(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),og()()()(),Il(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),Qx(4879," focus"),zl(4880,"br"),og()()(),Il(4881,"td",17)(4882,"code",28),Qx(4883,"boolean"),og()(),Il(4884,"td",20)(4885,"em")(4886,"strong"),Qx(4887,"(opcional)"),og()(),Il(4888,"p"),Qx(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),og()()(),Il(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),Qx(4894," value"),zl(4895,"br"),og()()(),Il(4896,"td",17)(4897,"code",33),Qx(4898,"any"),og()(),Il(4899,"td",20)(4900,"em")(4901,"strong"),Qx(4902,"(opcional)"),og()(),Il(4903,"p"),Qx(4904,"Novo valor do campo"),og()()()(),Il(4905,"h4",38)(4906,"code",5),Qx(4907,"PoDynamicFormValidation"),og()(),Il(4908,"div",2)(4909,"p"),zl(4910,"a",86),og(),Il(4911,"p"),Qx(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),og()(),Il(4913,"h4",9),Qx(4914,"Propriedades"),og(),Il(4915,"table",10)(4916,"tr",11)(4917,"th",12),Qx(4918,"Nome"),og(),Il(4919,"th",12),Qx(4920,"Tipo"),og(),Il(4921,"th",12),Qx(4922,"Descri\xE7\xE3o"),og()(),Il(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),Qx(4927," fields"),zl(4928,"br"),og()()(),Il(4929,"td",17)(4930,"code",22),Qx(4931,"Array<PoDynamicFormField>"),og()(),Il(4932,"td",20)(4933,"em")(4934,"strong"),Qx(4935,"(opcional)"),og()(),Il(4936,"p"),Qx(4937,"Lista com as novas defini\xE7\xF5es dos campos."),og(),Il(4938,"blockquote")(4939,"p"),Qx(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),og()()()(),Il(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),Qx(4945," focus"),zl(4946,"br"),og()()(),Il(4947,"td",17)(4948,"code",18),Qx(4949,"string"),og()(),Il(4950,"td",20)(4951,"em")(4952,"strong"),Qx(4953,"(opcional)"),og()(),Il(4954,"p"),Qx(4955,"Nome do campo que receber\xE1 o foco."),og(),Il(4956,"p"),Qx(4957,"Exemplo:"),og(),Il(4958,"pre")(4959,"code"),Qx(4960,`focus: 'name'
`),og()()()(),Il(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),Qx(4965," value"),zl(4966,"br"),og()()(),Il(4967,"td",17)(4968,"code",33),Qx(4969,"any"),og()(),Il(4970,"td",20)(4971,"em")(4972,"strong"),Qx(4973,"(opcional)"),og()(),Il(4974,"p"),Qx(4975,"Objeto contendo os novos valores."),og(),Il(4976,"p"),Qx(4977,"Exemplo:"),og(),Il(4978,"pre")(4979,"code"),Qx(4980,`{
  name: 'new name',
  age: 10
}
`),og()(),Il(4981,"blockquote")(4982,"p"),Qx(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),og()()()()(),Il(4984,"h4",38)(4985,"code",5),Qx(4986,"ErrorAsyncProperties"),og()(),Il(4987,"div",2)(4988,"p"),Qx(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Il(4990,"h4",9),Qx(4991,"Propriedades"),og(),Il(4992,"table",10)(4993,"tr",11)(4994,"th",12),Qx(4995,"Nome"),og(),Il(4996,"th",12),Qx(4997,"Tipo"),og(),Il(4998,"th",12),Qx(4999,"Descri\xE7\xE3o"),og()(),Il(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),Qx(5004," errorAsync"),zl(5005,"br"),og()()(),Il(5006,"td",17)(5007,"code",46),Qx(5008,"(value) => Observable<boolean>"),og()(),Il(5009,"td",20)(5010,"p"),Qx(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Il(5012,"code"),Qx(5013,"change"),og(),Qx(5014," ou "),Il(5015,"code"),Qx(5016,"change-model"),og(),Qx(5017,", dependendo do valor da propriedade "),Il(5018,"code"),Qx(5019,"triggerMode"),og(),Qx(5020,"."),og()()(),Il(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),Qx(5025," triggerMode"),zl(5026,"br"),og()()(),Il(5027,"td",17)(5028,"code",87),Qx(5029,"'change' "),og(),Il(5030,"code",88),Qx(5031," 'changeModel'"),og()(),Il(5032,"td",20)(5033,"em")(5034,"strong"),Qx(5035,"(opcional)"),og()(),Il(5036,"p"),Qx(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Il(5038,"code"),Qx(5039,"change"),og(),Qx(5040," ou "),Il(5041,"code"),Qx(5042,"change-model"),og(),Qx(5043,"."),og()()()(),Il(5044,"h3"),Qx(5045,"Enums"),og(),Il(5046,"h4",4)(5047,"code",5),Qx(5048,"ForceBooleanComponentEnum"),og()(),Il(5049,"div",2)(5050,"p"),Qx(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),og()(),Il(5052,"h4",9),Qx(5053,"Propriedades"),og(),Il(5054,"table",10)(5055,"tr",11)(5056,"th",12),Qx(5057,"Nome"),og(),Il(5058,"th",12),Qx(5059,"Descri\xE7\xE3o"),og()(),Il(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),Qx(5064," switch"),zl(5065,"br"),og()()(),Il(5066,"td",20)(5067,"p"),Qx(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),og()()(),Il(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),Qx(5073," checkbox"),zl(5074,"br"),og()()(),Il(5075,"td",20)(5076,"p"),Qx(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),og()()()(),Il(5078,"h4",4)(5079,"code",5),Qx(5080,"ForceOptionComponentEnum"),og()(),Il(5081,"div",2)(5082,"p"),Qx(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),og()(),Il(5084,"h4",9),Qx(5085,"Propriedades"),og(),Il(5086,"table",10)(5087,"tr",11)(5088,"th",12),Qx(5089,"Nome"),og(),Il(5090,"th",12),Qx(5091,"Descri\xE7\xE3o"),og()(),Il(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),Qx(5096," radioGroup"),zl(5097,"br"),og()()(),Il(5098,"td",20)(5099,"p"),Qx(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),og()()(),Il(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),Qx(5105," select"),zl(5106,"br"),og()()(),Il(5107,"td",20)(5108,"p"),Qx(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),og()()()(),Il(5110,"h4",4)(5111,"code",5),Qx(5112,"PoDynamicFieldType"),og()(),Il(5113,"div",2)(5114,"p"),Qx(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),og()(),Il(5116,"h4",9),Qx(5117,"Propriedades"),og(),Il(5118,"table",10)(5119,"tr",11)(5120,"th",12),Qx(5121,"Nome"),og(),Il(5122,"th",12),Qx(5123,"Descri\xE7\xE3o"),og()(),Il(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),Qx(5128," Boolean"),zl(5129,"br"),og()()(),Il(5130,"td",20)(5131,"p"),Qx(5132,"Valor booleano."),og()()(),Il(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),Qx(5137," Currency"),zl(5138,"br"),og()()(),Il(5139,"td",20)(5140,"p"),Qx(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),og()()(),Il(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),Qx(5146," Decimal"),zl(5147,"br"),og()()(),Il(5148,"td",20)(5149,"p"),Qx(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),og()()(),Il(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),Qx(5155," Date"),zl(5156,"br"),og()()(),Il(5157,"td",20)(5158,"p"),Qx(5159,"Valor para data."),og()()(),Il(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),Qx(5164," DateTime"),zl(5165,"br"),og()()(),Il(5166,"td",20)(5167,"p"),Qx(5168,"Valor para data e hora."),og()()(),Il(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),Qx(5173," Time"),zl(5174,"br"),og()()(),Il(5175,"td",20)(5176,"p"),Qx(5177,"Utilizado para informar/exibir hora."),og()()(),Il(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),Qx(5182," Number"),zl(5183,"br"),og()()(),Il(5184,"td",20)(5185,"p"),Qx(5186,"Valor num\xE9rico."),og()()(),Il(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),Qx(5191," String"),zl(5192,"br"),og()()(),Il(5193,"td",20)(5194,"p"),Qx(5195,"Texto."),og()()(),Il(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),Qx(5200," Upload"),zl(5201,"br"),og()()(),Il(5202,"td",20)(5203,"p"),Qx(5204,"Utilizado para fazer uploads de arquivos."),og()()()(),Il(5205,"h4",4)(5206,"code",5),Qx(5207,"PoTimepickerModelFormat"),og()(),Il(5208,"div",2)(5209,"p")(5210,"em"),Qx(5211,"Enum"),og(),Qx(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),og()(),Il(5213,"h4",9),Qx(5214,"Propriedades"),og(),Il(5215,"table",10)(5216,"tr",11)(5217,"th",12),Qx(5218,"Nome"),og(),Il(5219,"th",12),Qx(5220,"Descri\xE7\xE3o"),og()(),Il(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),Qx(5225," HourMinute"),zl(5226,"br"),og()()(),Il(5227,"td",20)(5228,"p"),Qx(5229,"Formato b\xE1sico "),Il(5230,"code"),Qx(5231,"HH:mm"),og(),Qx(5232," (ex: "),Il(5233,"code"),Qx(5234,"14:30"),og(),Qx(5235,")."),og()()(),Il(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),Qx(5240," HourMinuteSecond"),zl(5241,"br"),og()()(),Il(5242,"td",20)(5243,"p"),Qx(5244,"Formato com segundos "),Il(5245,"code"),Qx(5246,"HH:mm:ss"),og(),Qx(5247," (ex: "),Il(5248,"code"),Qx(5249,"14:30:00"),og(),Qx(5250,")."),og()()()()());},dependencies:[Ka],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return r.changeTab("doc")}),zl(3,"sample-po-dynamic-form-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return r.changeTab("web")}),zl(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),og()()()),a&2&&(nw("p-actions",r.actions),Lp(2),nw("p-active",r.activeTab==="doc"),Lp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[cNe,qme,Yme,$,te,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[uL.forChild(fe),uL]})}return o})();var rt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,re]})}return o})();export{rt as DocPoDynamicFormModule};