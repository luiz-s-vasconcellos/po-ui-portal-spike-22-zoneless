import {f as fe,u as ue,s as sr,a as uL,C,c3 as Xn,E as En,U as Un,H as Il,q as Qx,R as og,J as zl,a9 as Ky,aa as Zy,a3 as cNe,b8 as qme,b9 as Yme,a1 as ft,T as nw,A as Lp}from'./main-QSTLMRDK.js';var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-i18n-doc"]],standalone:false,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(Il(0,"div",0)(1,"p",1)(2,"code"),Qx(3,"import { PoI18nModule } from '@po-ui/ng-components';"),og()(),Il(4,"div",2)(5,"p"),Qx(6,"M\xF3dulo do servi\xE7o "),Il(7,"code"),Qx(8,"PoI18nService"),og(),Qx(9," para controle de idiomas com PO."),og(),Il(10,"p"),Qx(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),Il(12,"code"),Qx(13,"PoI18nService"),og(),Qx(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Il(15,"code"),Qx(16,"PoModule"),og(),Qx(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),Il(18,"code"),Qx(19,"config"),og(),Qx(20,`, informando um objeto que deve implementar
a interface `),Il(21,"a",3)(22,"code"),Qx(23,"PoI18nConfig"),og()(),Qx(24," para configura\xE7\xE3o."),og(),Il(25,"p"),zl(26,"a",4),Il(27,"strong"),Qx(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),og()(),Il(29,"pre")(30,"code"),Qx(31,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
    hcm: {
      url: 'http://10.1.1.1/api/translations/hcm/'
    }
  }
};

@NgModule({
  declarations: [],
  imports: [
    PoModule,
    PoI18nModule.config(i18nConfig)
  ],
  bootstrap: [AppComponent]
})
`),og()(),Il(32,"p"),Qx(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),og(),Il(34,"p"),Qx(35,"Arquivo general-pt.ts"),og(),Il(36,"pre")(37,"code"),Qx(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),og()(),Il(39,"p"),Qx(40,"Arquivo general-en.ts"),og(),Il(41,"pre")(42,"code"),Qx(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),og()(),Il(44,"p")(45,"strong"),Qx(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),og()(),Il(47,"pre")(48,"code"),Qx(49,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  contexts: {
    general: {
      'pt-BR': generalPt, // constantes em arquivos separados
      'en-US': generalEn // constantes em arquivos separados
    },
    crm: {
      url: 'http://10.0.0.1:3000/api/translations/crm'
    }
  },
  default: {}
}
`),og()(),Il(50,"p")(51,"strong"),Qx(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),og()(),Il(53,"p"),Qx(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),og(),Il(55,"ul")(56,"li")(57,"a",5),Qx(58,"http://10.0.0.1:3000/api/translations/crm"),og()(),Il(59,"li")(60,"a",6),Qx(61,"http://10.0.0.1:3000/api/translations/general"),og()()(),Il(62,"p"),Qx(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),og(),Il(64,"ul")(65,"li")(66,"strong"),Qx(67,"language"),og(),Qx(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Il(69,"code"),Qx(70,"pt-br"),og(),Qx(71,", "),Il(72,"code"),Qx(73,"en-us"),og(),Qx(74,", "),Il(75,"code"),Qx(76,"es-es"),og(),Qx(77," ou "),Il(78,"code"),Qx(79,"ru"),og(),Qx(80,")."),og(),Il(81,"li")(82,"strong"),Qx(83,"literals"),og(),Qx(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),og()(),Il(85,"p"),Qx(86,"Exemplos de requisi\xE7\xE3o:"),og(),Il(87,"ul")(88,"li")(89,"a",7),Qx(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),og()(),Il(91,"li")(92,"a",8),Qx(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),og()()(),Il(94,"blockquote")(95,"p"),Qx(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Il(97,"code"),Qx(98,"pt-br"),og(),Qx(99,"."),og()(),Il(100,"p"),Qx(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),Il(102,"em"),Qx(103,"default"),og(),Qx(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Il(105,"a",3)(106,"code"),Qx(107,"PoI18nConfig"),og()(),Qx(108,":"),og(),Il(109,"p")(110,"strong"),Qx(111,"Exemplo de padr\xF5es definidos:"),og()(),Il(112,"pre")(113,"code"),Qx(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),og()(),Il(115,"p")(116,"strong"),Qx(117,"Importante:"),og()(),Il(118,"p"),Qx(119,"Recomenda-se que as defini\xE7\xF5es "),Il(120,"em"),Qx(121,"default"),og(),Qx(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Il(123,"code"),Qx(124,"AppModule"),og(),Qx(125,"."),og(),Il(126,"p")(127,"strong"),Qx(128,"i18n com "),Il(129,"em"),Qx(130,"Lazy loading"),og()()(),Il(131,"p"),Qx(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),Il(133,"em"),Qx(134,"lazy loading"),og(),Qx(135,`, caso seja
definida outra configura\xE7\xE3o do `),Il(136,"code"),Qx(137,"PoI18nModule"),og(),Qx(138,", deve-se atentar os seguintes detalhes:"),og(),Il(139,"ul")(140,"li"),Qx(141,"N\xE3o defina outra "),Il(142,"em"),Qx(143,"default language"),og(),Qx(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),og(),Il(145,"li"),Qx(146,"Caso precise de m\xF3dulos carregados via "),Il(147,"em"),Qx(148,"lazy loading"),og(),Qx(149,` com linguagens diferentes, utilize o
m\xE9todo `),Il(150,"a",9)(151,"code"),Qx(152,"setLanguage()"),og()(),Qx(153," disponibilizado pelo "),Il(154,"code"),Qx(155,"PoI18nService"),og(),Qx(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),og()()(),Il(157,"h3",10),Qx(158,"Services"),og(),Il(159,"h4",11)(160,"code",12),Qx(161,"PoI18nService"),og()(),Il(162,"div",2)(163,"p"),Qx(164,"O servi\xE7o "),Il(165,"code"),Qx(166,"PoI18nService"),og(),Qx(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),og(),Il(168,"blockquote")(169,"p"),Qx(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Il(171,"a",13),Qx(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),Il(173,"code"),Qx(174,"PoI18nModule"),og()(),Qx(175,"."),og()(),Il(176,"p")(177,"strong"),Qx(178,"Utiliza\xE7\xE3o do servi\xE7o "),Il(179,"code"),Qx(180,"PoI18nService"),og(),Qx(181,":"),og()(),Il(182,"p"),Qx(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),og(),Il(184,"pre")(185,"code"),Qx(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),og()(),Il(187,"p"),Qx(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),Il(189,"a",14),Qx(190,"Observable"),og(),Qx(191,` pelo
m\xE9todo `),Il(192,"code"),Qx(193,"getLiterals()"),og(),Qx(194,"."),og(),Il(195,"blockquote")(196,"p"),Qx(197,"O m\xE9todo "),Il(198,"code"),Qx(199,"getLiterals()"),og(),Qx(200," pode receber um objeto do tipo da interface "),Il(201,"code"),Qx(202,"PoI18nLiterals"),og(),Qx(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),og()(),Il(204,"ul")(205,"li")(206,"h2"),Qx(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),og()()(),Il(208,"p"),Qx(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Il(210,"code"),Qx(211,"getLiterals"),og(),Qx(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Il(213,"code"),Qx(214,"getLiterals"),og(),Qx(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),og(),Il(216,"p")(217,"strong"),Qx(218,"Exemplo de chamada com contexto expl\xEDcito:"),og()(),Il(219,"pre")(220,"code",15),Qx(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),og()(),Il(222,"p")(223,"strong"),Qx(224,"Cen\xE1rio de Contextos Iguais:"),og(),Qx(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),og(),Il(226,"p")(227,"strong"),Qx(228,"Recomenda\xE7\xF5es:"),og()(),Il(229,"ul")(230,"li"),Qx(231,"Sempre informar o contexto ao chamar "),Il(232,"code"),Qx(233,"getLiterals"),og(),Qx(234," para evitar conflitos de literais."),og(),Il(235,"li"),Qx(236,"Caso a aplica\xE7\xE3o utilize "),Il(237,"code"),Qx(238,"lazy loading"),og(),Qx(239,", utilizar "),Il(240,"code"),Qx(241,"setLanguage()"),og(),Qx(242," para garantir a correta configura\xE7\xE3o de idioma."),og()(),Il(243,"p"),Qx(244,"Exemplos de requisi\xE7\xE3o:"),og(),Il(245,"pre")(246,"code"),Qx(247,`literals = {};
literalsEn = {};
literalsCrm = {};

constructor(private poI18nService: PoI18nService) {
  poI18nService.getLiterals()
    .subscribe((literals) => {
      this.literals = literals;
    });

  poI18nService.getLiterals({context: 'crm', literals: ['add', 'remove']})
    .subscribe((literals) => {
      this.literalsCrm = literals;
    });

  poI18nService.getLiterals({language: 'en-us'})
    .subscribe((literals) => {
      this.literalsEn = literals;
    });
}
`),og()(),Il(248,"p"),Qx(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),og(),Il(250,"pre"),Ky(),Qx(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Zy(),og(),Il(252,"p"),Qx(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),Il(254,"em"),Qx(255,"pipe"),og(),Il(256,"code"),Qx(257,"poI18n"),og(),Qx(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Il(259,"code"),Qx(260,"name"),og(),Qx(261," e "),Il(262,"code"),Qx(263,"nickname"),og(),Qx(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),og(),Il(265,"pre"),Ky(),Qx(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Zy(),og(),Il(267,"blockquote")(268,"p"),Qx(269,"\xC9 importante o uso do operador "),Il(270,"code"),Qx(271,"?"),og(),Qx(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),og()(),Il(273,"h3"),Qx(274,"Teste unit\xE1rio"),og(),Il(275,"p"),Qx(276,"Abaixo segue um exemplo de "),Il(277,"em"),Qx(278,"setup"),og(),Qx(279," inicial de teste unit\xE1rio do "),Il(280,"em"),Qx(281,"AppComponent"),og(),Qx(282," que utiliza o "),Il(283,"code"),Qx(284,"PoI18nService"),og(),Qx(285,":"),og(),Il(286,"blockquote")(287,"p"),Qx(288,"Aten\xE7\xE3o: n\xE3o declarar o "),Il(289,"code"),Qx(290,"PoI18nService"),og(),Qx(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),og()(),Il(292,"pre")(293,"code"),Qx(294,`import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PoI18nModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const anotherPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const generalPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const config = {
    default: {
      language: 'pt-BR',
      context: 'general',
      cache: false
    },
    contexts: {
      general: {
        'pt-br': generalPT
      },
      another: {
        'pt-br': anotherPT
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        PoI18nModule.config(config)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

});
`),og()()(),Il(295,"h3",16),Qx(296,"M\xE9todos"),og(),Il(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),Qx(303," getLanguage "),og()()()()(),Il(304,"tr",22)(305,"td",22)(306,"p"),zl(307,"a",23),Qx(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),og(),Il(309,"p"),Qx(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),og(),Il(311,"p"),Qx(312," 1 - o idioma que foi armazenado no "),Il(313,"em"),Qx(314,"localStorage"),og(),Qx(315,", atrav\xE9s do m\xE9todo "),Il(316,"a",9)(317,"code"),Qx(318,"setLanguage()"),og()(),Qx(319,"."),og(),Il(320,"p"),Qx(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),Il(322,"code"),Qx(323,"config"),og(),Qx(324,`, sendo o idioma inserido na propriedade
`),Il(325,"code"),Qx(326,"language"),og(),Qx(327," da interface "),Il(328,"a",24)(329,"code"),Qx(330,"PoI18nConfigDefault"),og()(),Qx(331,"."),og(),Il(332,"p"),Qx(333," 3 - o idioma do navegador utilizado."),og(),Il(334,"blockquote")(335,"p"),Qx(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),Il(337,"code"),Qx(338,"pt"),og(),Qx(339,", "),Il(340,"code"),Qx(341,"en"),og(),Qx(342,", "),Il(343,"code"),Qx(344,"es"),og(),Qx(345," ou "),Il(346,"code"),Qx(347,"ru"),og(),Qx(348,"), ser\xE1 retornado valor "),Il(349,"code"),Qx(350,"pt"),og(),Qx(351,"."),og()()()()(),Il(352,"h5")(353,"b"),Qx(354,"Retorno"),og()(),Il(355,"table",25)(356,"tr",26)(357,"th",27),Qx(358,"Tipo"),og(),Il(359,"th",27),Qx(360,"Descri\xE7\xE3o"),og()(),Il(361,"tr",18)(362,"td",28)(363,"code",29),Qx(364,"string"),og()(),Il(365,"td",22)(366,"p"),Qx(367,"sigla do idioma padr\xE3o."),og()()()(),zl(368,"br"),Il(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),Qx(375," getShortLanguage "),og()()()()(),Il(376,"tr",22)(377,"td",22)(378,"p"),Qx(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),og(),Il(380,"p"),Qx(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),Il(382,"a",30)(383,"strong"),Qx(384,"getLanguage()"),og()(),Qx(385,"."),og()()()(),Il(386,"h5")(387,"b"),Qx(388,"Retorno"),og()(),Il(389,"table",25)(390,"tr",26)(391,"th",27),Qx(392,"Tipo"),og(),Il(393,"th",27),Qx(394,"Descri\xE7\xE3o"),og()(),Il(395,"tr",18)(396,"td",28)(397,"code",29),Qx(398,"string"),og()(),Il(399,"td",22)(400,"p"),Qx(401,"sigla do idioma padr\xE3o."),og()()()(),zl(402,"br"),Il(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),Qx(409," setLanguage "),og()()()()(),Il(410,"tr",22)(411,"td",22)(412,"p"),zl(413,"a",31),Qx(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),og(),Il(415,"p"),Qx(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Il(417,"code"),Qx(418,"i18n"),og(),Qx(419," para buscar as literais no idioma padr\xE3o."),og()()()(),Il(420,"h5")(421,"b"),Qx(422,"Par\xE2metros"),og()(),Il(423,"table",25)(424,"tr",26)(425,"th",27),Qx(426,"Nome"),og(),Il(427,"th",27),Qx(428,"Tipo"),og(),Il(429,"th",27),Qx(430,"Descri\xE7\xE3o"),og()(),Il(431,"tr",18)(432,"td",32),Qx(433," language"),og(),Il(434,"td",28)(435,"code",29),Qx(436," string "),og()(),Il(437,"td",22)(438,"p"),Qx(439,"Sigla do idioma."),og(),Il(440,"p"),Qx(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Il(442,"code"),Qx(443,"pt"),og(),Qx(444,", "),Il(445,"code"),Qx(446,"pt-BR"),og(),Qx(447,", "),Il(448,"code"),Qx(449,"pt-br"),og(),Qx(450,", "),Il(451,"code"),Qx(452,"en"),og(),Qx(453," ou "),Il(454,"code"),Qx(455,"en-US"),og(),Qx(456,"."),og(),Il(457,"blockquote")(458,"p"),Qx(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),og()()()(),Il(460,"tr",18)(461,"td",32),Qx(462," reload"),og(),Il(463,"td",28)(464,"code",29),Qx(465," boolean "),og()(),Il(466,"td",22)(467,"p"),Qx(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),og(),Il(469,"p"),Qx(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),Il(471,"code"),Qx(472,"getLiterals()"),og(),Qx(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),og()()()(),zl(474,"br"),Il(475,"h3"),Qx(476,"Interfaces"),og(),Il(477,"h4",33)(478,"code",12),Qx(479,"PoI18nConfigContext"),og()(),Il(480,"div",2)(481,"p"),zl(482,"a",34),og(),Il(483,"p"),Qx(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),Il(485,"code"),Qx(486,"PoI18nModule"),og(),Qx(487,"."),og()(),Il(488,"h4",33)(489,"code",12),Qx(490,"PoI18nConfigDefault"),og()(),Il(491,"div",2)(492,"p"),zl(493,"a",35),og(),Il(494,"p"),Qx(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),og()(),Il(496,"h4",16),Qx(497,"Propriedades"),og(),Il(498,"table",25)(499,"tr",26)(500,"th",27),Qx(501,"Nome"),og(),Il(502,"th",27),Qx(503,"Tipo"),og(),Il(504,"th",27),Qx(505,"Descri\xE7\xE3o"),og()(),Il(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),Qx(510," cache"),zl(511,"br"),og()()(),Il(512,"td",28)(513,"code",36),Qx(514,"boolean"),og()(),Il(515,"td",22)(516,"em")(517,"strong"),Qx(518,"(opcional)"),og()(),Il(519,"p"),Qx(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),og(),Il(521,"p"),Qx(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),og(),Il(523,"p"),Qx(524,"Por padr\xE3o n\xE3o utiliza."),og()()(),Il(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),Qx(529," context"),zl(530,"br"),og()()(),Il(531,"td",28)(532,"code",37),Qx(533,"string"),og()(),Il(534,"td",22)(535,"em")(536,"strong"),Qx(537,"(opcional)"),og()(),Il(538,"p"),Qx(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),og(),Il(540,"blockquote")(541,"p"),Qx(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),og()()()(),Il(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),Qx(547," language"),zl(548,"br"),og()()(),Il(549,"td",28)(550,"code",37),Qx(551,"string"),og()(),Il(552,"td",22)(553,"em")(554,"strong"),Qx(555,"(opcional)"),og()(),Il(556,"p"),Qx(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),og(),Il(558,"p"),Qx(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Il(560,"a",9)(561,"code"),Qx(562,"setLanguage()"),og()(),Qx(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),og()()()(),Il(564,"h4",33)(565,"code",12),Qx(566,"PoI18nConfig"),og()(),Il(567,"div",2)(568,"p"),zl(569,"a",38),og(),Il(570,"p"),Qx(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),Il(572,"code"),Qx(573,"PoI18nModule"),og(),Qx(574,"."),og()(),Il(575,"h4",16),Qx(576,"Propriedades"),og(),Il(577,"table",25)(578,"tr",26)(579,"th",27),Qx(580,"Nome"),og(),Il(581,"th",27),Qx(582,"Tipo"),og(),Il(583,"th",27),Qx(584,"Descri\xE7\xE3o"),og()(),Il(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),Qx(589," contexts"),zl(590,"br"),og()()(),Il(591,"td",28)(592,"code",39),Qx(593,"PoI18nConfigContext"),og()(),Il(594,"td",22)(595,"p"),Qx(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Il(597,"code"),Qx(598,"url"),og(),Qx(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),og(),Il(600,"p"),Qx(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),og(),Il(602,"pre")(603,"code"),Qx(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),og()(),Il(605,"p"),Qx(606,"E como informado, podemos utilizar a propriedade "),Il(607,"code"),Qx(608,"url"),og(),Qx(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),og(),Il(610,"pre")(611,"code"),Qx(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),og()(),Il(613,"p"),Qx(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),og(),Il(615,"pre")(616,"code"),Qx(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),og()(),Il(618,"p"),Qx(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),og(),Il(620,"ul")(621,"li")(622,"code"),Qx(623,"language"),og(),Qx(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Il(625,"code"),Qx(626,"pt-br"),og(),Qx(627,", "),Il(628,"code"),Qx(629,"en-us"),og(),Qx(630,");"),og(),Il(631,"li")(632,"code"),Qx(633,"literals"),og(),Qx(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),og()(),Il(635,"p"),Qx(636,"Exemplos de requisi\xE7\xE3o:"),og(),Il(637,"pre")(638,"code"),Qx(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),og()(),Il(640,"blockquote")(641,"p"),Qx(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Il(643,"code"),Qx(644,"pt-br"),og(),Qx(645,"."),og()(),Il(646,"p"),Qx(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Il(648,"em"),Qx(649,"backup"),og(),Qx(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),og(),Il(651,"pre")(652,"code"),Qx(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),og()(),Il(654,"blockquote")(655,"p"),Qx(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),og()()()(),Il(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),Qx(661," default"),zl(662,"br"),og()()(),Il(663,"td",28)(664,"code",40),Qx(665,"PoI18nConfigDefault"),og()(),Il(666,"td",22)(667,"em")(668,"strong"),Qx(669,"(opcional)"),og()(),Il(670,"p"),Qx(671,"Configura\xE7\xF5es padr\xF5es."),og()()()(),Il(672,"h4",33)(673,"code",12),Qx(674,"PoI18nLiterals"),og()(),Il(675,"div",2)(676,"p"),Qx(677,"Interface para o m\xE9todo "),Il(678,"code"),Qx(679,"getLiterals()"),og(),Qx(680," do servi\xE7o PoI18nService."),og()(),Il(681,"h4",16),Qx(682,"Propriedades"),og(),Il(683,"table",25)(684,"tr",26)(685,"th",27),Qx(686,"Nome"),og(),Il(687,"th",27),Qx(688,"Tipo"),og(),Il(689,"th",27),Qx(690,"Descri\xE7\xE3o"),og()(),Il(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),Qx(695," context"),zl(696,"br"),og()()(),Il(697,"td",28)(698,"code",37),Qx(699,"string"),og()(),Il(700,"td",22)(701,"em")(702,"strong"),Qx(703,"(opcional)"),og()(),Il(704,"p"),Qx(705,"Contexto utilizado na busca das literais."),og()()(),Il(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),Qx(710," language"),zl(711,"br"),og()()(),Il(712,"td",28)(713,"code",37),Qx(714,"string"),og()(),Il(715,"td",22)(716,"em")(717,"strong"),Qx(718,"(opcional)"),og()(),Il(719,"p"),Qx(720,"Idioma a ser buscado."),og()()(),Il(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),Qx(725," literals"),zl(726,"br"),og()()(),Il(727,"td",28)(728,"code",41),Qx(729,"Array<string>"),og()(),Il(730,"td",22)(731,"em")(732,"strong"),Qx(733,"(opcional)"),og()(),Il(734,"p"),Qx(735,"Lista das literais."),og()()()(),Il(736,"h4",33)(737,"code",12),Qx(738,"PoLanguage"),og()(),Il(739,"div",2)(740,"p"),zl(741,"a",42),og(),Il(742,"p"),Qx(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),og()(),Il(744,"h4",16),Qx(745,"Propriedades"),og(),Il(746,"table",25)(747,"tr",26)(748,"th",27),Qx(749,"Nome"),og(),Il(750,"th",27),Qx(751,"Tipo"),og(),Il(752,"th",27),Qx(753,"Descri\xE7\xE3o"),og()(),Il(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),Qx(758," description"),zl(759,"br"),og()()(),Il(760,"td",28)(761,"code",37),Qx(762,"string"),og()(),Il(763,"td",22)(764,"em")(765,"strong"),Qx(766,"(opcional)"),og()(),Il(767,"p"),Qx(768,"Descri\xE7\xE3o do idioma"),og()()(),Il(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),Qx(773," language"),zl(774,"br"),og()()(),Il(775,"td",28)(776,"code",37),Qx(777,"string"),og()(),Il(778,"td",22)(779,"em")(780,"strong"),Qx(781,"(opcional)"),og()(),Il(782,"p"),Qx(783,"C\xF3digo do idioma "),Il(784,"a",43),Qx(785,"ISO 639-1"),og()(),Il(786,"blockquote")(787,"p"),Qx(788,"Exemplo: 'pt','en'"),og()()()()(),Il(789,"h4",33)(790,"code",12),Qx(791,"PoNumberSeparator"),og()(),Il(792,"div",2)(793,"p"),zl(794,"a",44),og(),Il(795,"p"),Qx(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),og()(),Il(797,"h4",16),Qx(798,"Propriedades"),og(),Il(799,"table",25)(800,"tr",26)(801,"th",27),Qx(802,"Nome"),og(),Il(803,"th",27),Qx(804,"Tipo"),og(),Il(805,"th",27),Qx(806,"Descri\xE7\xE3o"),og()(),Il(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),Qx(811," language"),zl(812,"br"),og()()(),Il(813,"td",28)(814,"code",37),Qx(815,"string"),og()(),Il(816,"td",22)(817,"em")(818,"strong"),Qx(819,"(opcional)"),og()(),Il(820,"p"),Qx(821,"C\xF3digo do idioma "),Il(822,"a",43),Qx(823,"ISO 639-1"),og()(),Il(824,"blockquote")(825,"p"),Qx(826,"Exemplo: 'pt','en'"),og()()()(),Il(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),Qx(831," separator"),zl(832,"br"),og()()(),Il(833,"td",28)(834,"code",37),Qx(835,"string"),og()(),Il(836,"td",22)(837,"em")(838,"strong"),Qx(839,"(opcional)"),og()(),Il(840,"p"),Qx(841,"Separador num\xE9rico"),og()()()(),Il(842,"h4",33)(843,"code",12),Qx(844,"PoDateSeparator"),og()(),Il(845,"div",2)(846,"p"),zl(847,"a",45),og(),Il(848,"p"),Qx(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),og()(),Il(850,"h4",16),Qx(851,"Propriedades"),og(),Il(852,"table",25)(853,"tr",26)(854,"th",27),Qx(855,"Nome"),og(),Il(856,"th",27),Qx(857,"Tipo"),og(),Il(858,"th",27),Qx(859,"Descri\xE7\xE3o"),og()(),Il(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),Qx(864," locale"),zl(865,"br"),og()()(),Il(866,"td",28)(867,"code",37),Qx(868,"string"),og()(),Il(869,"td",22)(870,"em")(871,"strong"),Qx(872,"(opcional)"),og()(),Il(873,"p"),Qx(874,"C\xF3digo do locale "),Il(875,"a",43),Qx(876,"ISO 639-1"),og()(),Il(877,"blockquote")(878,"p"),Qx(879,"Exemplo: 'pt','en'"),og()()()(),Il(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),Qx(884," separator"),zl(885,"br"),og()()(),Il(886,"td",28)(887,"code",37),Qx(888,"string"),og()(),Il(889,"td",22)(890,"em")(891,"strong"),Qx(892,"(opcional)"),og()(),Il(893,"p"),Qx(894,"Separador de data"),og(),Il(895,"blockquote")(896,"p"),Qx(897,"Exemplo: '/','.','-'"),og()()()()()());},encapsulation:2})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Il(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),zl(3,"sample-po-i18n-doc"),og(),Il(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(nw("p-actions",l.actions),Lp(2),nw("p-active",l.activeTab==="doc"),Lp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[cNe,qme,Yme,D],encapsulation:2})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[uL.forChild(T),uL]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,z]})}return o})();export{H as DocPoI18nModule};