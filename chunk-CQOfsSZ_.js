import {f as fe,u as ue,s as sr,m as mL,w,c3 as Xn,E as En,U as Un,C as Sl,y as rN,J as og,F as Wl,a9 as Zy,aa as Yy,a3 as sNe,b8 as Ume,b9 as $me,a1 as ft,O as rw,L as Lp}from'./main-TVDUJ47Y.js';var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-i18n-doc"]],standalone:false,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),rN(3,"import { PoI18nModule } from '@po-ui/ng-components';"),og()(),Sl(4,"div",2)(5,"p"),rN(6,"M\xF3dulo do servi\xE7o "),Sl(7,"code"),rN(8,"PoI18nService"),og(),rN(9," para controle de idiomas com PO."),og(),Sl(10,"p"),rN(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),Sl(12,"code"),rN(13,"PoI18nService"),og(),rN(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Sl(15,"code"),rN(16,"PoModule"),og(),rN(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),Sl(18,"code"),rN(19,"config"),og(),rN(20,`, informando um objeto que deve implementar
a interface `),Sl(21,"a",3)(22,"code"),rN(23,"PoI18nConfig"),og()(),rN(24," para configura\xE7\xE3o."),og(),Sl(25,"p"),Wl(26,"a",4),Sl(27,"strong"),rN(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),og()(),Sl(29,"pre")(30,"code"),rN(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),og()(),Sl(32,"p"),rN(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),og(),Sl(34,"p"),rN(35,"Arquivo general-pt.ts"),og(),Sl(36,"pre")(37,"code"),rN(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),og()(),Sl(39,"p"),rN(40,"Arquivo general-en.ts"),og(),Sl(41,"pre")(42,"code"),rN(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),og()(),Sl(44,"p")(45,"strong"),rN(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),og()(),Sl(47,"pre")(48,"code"),rN(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),og()(),Sl(50,"p")(51,"strong"),rN(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),og()(),Sl(53,"p"),rN(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),og(),Sl(55,"ul")(56,"li")(57,"a",5),rN(58,"http://10.0.0.1:3000/api/translations/crm"),og()(),Sl(59,"li")(60,"a",6),rN(61,"http://10.0.0.1:3000/api/translations/general"),og()()(),Sl(62,"p"),rN(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),og(),Sl(64,"ul")(65,"li")(66,"strong"),rN(67,"language"),og(),rN(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Sl(69,"code"),rN(70,"pt-br"),og(),rN(71,", "),Sl(72,"code"),rN(73,"en-us"),og(),rN(74,", "),Sl(75,"code"),rN(76,"es-es"),og(),rN(77," ou "),Sl(78,"code"),rN(79,"ru"),og(),rN(80,")."),og(),Sl(81,"li")(82,"strong"),rN(83,"literals"),og(),rN(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),og()(),Sl(85,"p"),rN(86,"Exemplos de requisi\xE7\xE3o:"),og(),Sl(87,"ul")(88,"li")(89,"a",7),rN(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),og()(),Sl(91,"li")(92,"a",8),rN(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),og()()(),Sl(94,"blockquote")(95,"p"),rN(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Sl(97,"code"),rN(98,"pt-br"),og(),rN(99,"."),og()(),Sl(100,"p"),rN(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),Sl(102,"em"),rN(103,"default"),og(),rN(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Sl(105,"a",3)(106,"code"),rN(107,"PoI18nConfig"),og()(),rN(108,":"),og(),Sl(109,"p")(110,"strong"),rN(111,"Exemplo de padr\xF5es definidos:"),og()(),Sl(112,"pre")(113,"code"),rN(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),og()(),Sl(115,"p")(116,"strong"),rN(117,"Importante:"),og()(),Sl(118,"p"),rN(119,"Recomenda-se que as defini\xE7\xF5es "),Sl(120,"em"),rN(121,"default"),og(),rN(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Sl(123,"code"),rN(124,"AppModule"),og(),rN(125,"."),og(),Sl(126,"p")(127,"strong"),rN(128,"i18n com "),Sl(129,"em"),rN(130,"Lazy loading"),og()()(),Sl(131,"p"),rN(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),Sl(133,"em"),rN(134,"lazy loading"),og(),rN(135,`, caso seja
definida outra configura\xE7\xE3o do `),Sl(136,"code"),rN(137,"PoI18nModule"),og(),rN(138,", deve-se atentar os seguintes detalhes:"),og(),Sl(139,"ul")(140,"li"),rN(141,"N\xE3o defina outra "),Sl(142,"em"),rN(143,"default language"),og(),rN(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),og(),Sl(145,"li"),rN(146,"Caso precise de m\xF3dulos carregados via "),Sl(147,"em"),rN(148,"lazy loading"),og(),rN(149,` com linguagens diferentes, utilize o
m\xE9todo `),Sl(150,"a",9)(151,"code"),rN(152,"setLanguage()"),og()(),rN(153," disponibilizado pelo "),Sl(154,"code"),rN(155,"PoI18nService"),og(),rN(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),og()()(),Sl(157,"h3",10),rN(158,"Services"),og(),Sl(159,"h4",11)(160,"code",12),rN(161,"PoI18nService"),og()(),Sl(162,"div",2)(163,"p"),rN(164,"O servi\xE7o "),Sl(165,"code"),rN(166,"PoI18nService"),og(),rN(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),og(),Sl(168,"blockquote")(169,"p"),rN(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Sl(171,"a",13),rN(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),Sl(173,"code"),rN(174,"PoI18nModule"),og()(),rN(175,"."),og()(),Sl(176,"p")(177,"strong"),rN(178,"Utiliza\xE7\xE3o do servi\xE7o "),Sl(179,"code"),rN(180,"PoI18nService"),og(),rN(181,":"),og()(),Sl(182,"p"),rN(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),og(),Sl(184,"pre")(185,"code"),rN(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),og()(),Sl(187,"p"),rN(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),Sl(189,"a",14),rN(190,"Observable"),og(),rN(191,` pelo
m\xE9todo `),Sl(192,"code"),rN(193,"getLiterals()"),og(),rN(194,"."),og(),Sl(195,"blockquote")(196,"p"),rN(197,"O m\xE9todo "),Sl(198,"code"),rN(199,"getLiterals()"),og(),rN(200," pode receber um objeto do tipo da interface "),Sl(201,"code"),rN(202,"PoI18nLiterals"),og(),rN(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),og()(),Sl(204,"ul")(205,"li")(206,"h2"),rN(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),og()()(),Sl(208,"p"),rN(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Sl(210,"code"),rN(211,"getLiterals"),og(),rN(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Sl(213,"code"),rN(214,"getLiterals"),og(),rN(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),og(),Sl(216,"p")(217,"strong"),rN(218,"Exemplo de chamada com contexto expl\xEDcito:"),og()(),Sl(219,"pre")(220,"code",15),rN(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),og()(),Sl(222,"p")(223,"strong"),rN(224,"Cen\xE1rio de Contextos Iguais:"),og(),rN(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),og(),Sl(226,"p")(227,"strong"),rN(228,"Recomenda\xE7\xF5es:"),og()(),Sl(229,"ul")(230,"li"),rN(231,"Sempre informar o contexto ao chamar "),Sl(232,"code"),rN(233,"getLiterals"),og(),rN(234," para evitar conflitos de literais."),og(),Sl(235,"li"),rN(236,"Caso a aplica\xE7\xE3o utilize "),Sl(237,"code"),rN(238,"lazy loading"),og(),rN(239,", utilizar "),Sl(240,"code"),rN(241,"setLanguage()"),og(),rN(242," para garantir a correta configura\xE7\xE3o de idioma."),og()(),Sl(243,"p"),rN(244,"Exemplos de requisi\xE7\xE3o:"),og(),Sl(245,"pre")(246,"code"),rN(247,`literals = {};
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
`),og()(),Sl(248,"p"),rN(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),og(),Sl(250,"pre"),Zy(),rN(251,`{{ literals?.add }}
{{ literals?.remove }}
`),Yy(),og(),Sl(252,"p"),rN(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),Sl(254,"em"),rN(255,"pipe"),og(),Sl(256,"code"),rN(257,"poI18n"),og(),rN(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Sl(259,"code"),rN(260,"name"),og(),rN(261," e "),Sl(262,"code"),rN(263,"nickname"),og(),rN(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),og(),Sl(265,"pre"),Zy(),rN(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),Yy(),og(),Sl(267,"blockquote")(268,"p"),rN(269,"\xC9 importante o uso do operador "),Sl(270,"code"),rN(271,"?"),og(),rN(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),og()(),Sl(273,"h3"),rN(274,"Teste unit\xE1rio"),og(),Sl(275,"p"),rN(276,"Abaixo segue um exemplo de "),Sl(277,"em"),rN(278,"setup"),og(),rN(279," inicial de teste unit\xE1rio do "),Sl(280,"em"),rN(281,"AppComponent"),og(),rN(282," que utiliza o "),Sl(283,"code"),rN(284,"PoI18nService"),og(),rN(285,":"),og(),Sl(286,"blockquote")(287,"p"),rN(288,"Aten\xE7\xE3o: n\xE3o declarar o "),Sl(289,"code"),rN(290,"PoI18nService"),og(),rN(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),og()(),Sl(292,"pre")(293,"code"),rN(294,`import { async, TestBed } from '@angular/core/testing';
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
`),og()()(),Sl(295,"h3",16),rN(296,"M\xE9todos"),og(),Sl(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),rN(303," getLanguage "),og()()()()(),Sl(304,"tr",22)(305,"td",22)(306,"p"),Wl(307,"a",23),rN(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),og(),Sl(309,"p"),rN(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),og(),Sl(311,"p"),rN(312," 1 - o idioma que foi armazenado no "),Sl(313,"em"),rN(314,"localStorage"),og(),rN(315,", atrav\xE9s do m\xE9todo "),Sl(316,"a",9)(317,"code"),rN(318,"setLanguage()"),og()(),rN(319,"."),og(),Sl(320,"p"),rN(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),Sl(322,"code"),rN(323,"config"),og(),rN(324,`, sendo o idioma inserido na propriedade
`),Sl(325,"code"),rN(326,"language"),og(),rN(327," da interface "),Sl(328,"a",24)(329,"code"),rN(330,"PoI18nConfigDefault"),og()(),rN(331,"."),og(),Sl(332,"p"),rN(333," 3 - o idioma do navegador utilizado."),og(),Sl(334,"blockquote")(335,"p"),rN(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),Sl(337,"code"),rN(338,"pt"),og(),rN(339,", "),Sl(340,"code"),rN(341,"en"),og(),rN(342,", "),Sl(343,"code"),rN(344,"es"),og(),rN(345," ou "),Sl(346,"code"),rN(347,"ru"),og(),rN(348,"), ser\xE1 retornado valor "),Sl(349,"code"),rN(350,"pt"),og(),rN(351,"."),og()()()()(),Sl(352,"h5")(353,"b"),rN(354,"Retorno"),og()(),Sl(355,"table",25)(356,"tr",26)(357,"th",27),rN(358,"Tipo"),og(),Sl(359,"th",27),rN(360,"Descri\xE7\xE3o"),og()(),Sl(361,"tr",18)(362,"td",28)(363,"code",29),rN(364,"string"),og()(),Sl(365,"td",22)(366,"p"),rN(367,"sigla do idioma padr\xE3o."),og()()()(),Wl(368,"br"),Sl(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),rN(375," getShortLanguage "),og()()()()(),Sl(376,"tr",22)(377,"td",22)(378,"p"),rN(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),og(),Sl(380,"p"),rN(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),Sl(382,"a",30)(383,"strong"),rN(384,"getLanguage()"),og()(),rN(385,"."),og()()()(),Sl(386,"h5")(387,"b"),rN(388,"Retorno"),og()(),Sl(389,"table",25)(390,"tr",26)(391,"th",27),rN(392,"Tipo"),og(),Sl(393,"th",27),rN(394,"Descri\xE7\xE3o"),og()(),Sl(395,"tr",18)(396,"td",28)(397,"code",29),rN(398,"string"),og()(),Sl(399,"td",22)(400,"p"),rN(401,"sigla do idioma padr\xE3o."),og()()()(),Wl(402,"br"),Sl(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),rN(409," setLanguage "),og()()()()(),Sl(410,"tr",22)(411,"td",22)(412,"p"),Wl(413,"a",31),rN(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),og(),Sl(415,"p"),rN(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Sl(417,"code"),rN(418,"i18n"),og(),rN(419," para buscar as literais no idioma padr\xE3o."),og()()()(),Sl(420,"h5")(421,"b"),rN(422,"Par\xE2metros"),og()(),Sl(423,"table",25)(424,"tr",26)(425,"th",27),rN(426,"Nome"),og(),Sl(427,"th",27),rN(428,"Tipo"),og(),Sl(429,"th",27),rN(430,"Descri\xE7\xE3o"),og()(),Sl(431,"tr",18)(432,"td",32),rN(433," language"),og(),Sl(434,"td",28)(435,"code",29),rN(436," string "),og()(),Sl(437,"td",22)(438,"p"),rN(439,"Sigla do idioma."),og(),Sl(440,"p"),rN(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Sl(442,"code"),rN(443,"pt"),og(),rN(444,", "),Sl(445,"code"),rN(446,"pt-BR"),og(),rN(447,", "),Sl(448,"code"),rN(449,"pt-br"),og(),rN(450,", "),Sl(451,"code"),rN(452,"en"),og(),rN(453," ou "),Sl(454,"code"),rN(455,"en-US"),og(),rN(456,"."),og(),Sl(457,"blockquote")(458,"p"),rN(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),og()()()(),Sl(460,"tr",18)(461,"td",32),rN(462," reload"),og(),Sl(463,"td",28)(464,"code",29),rN(465," boolean "),og()(),Sl(466,"td",22)(467,"p"),rN(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),og(),Sl(469,"p"),rN(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),Sl(471,"code"),rN(472,"getLiterals()"),og(),rN(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),og()()()(),Wl(474,"br"),Sl(475,"h3"),rN(476,"Interfaces"),og(),Sl(477,"h4",33)(478,"code",12),rN(479,"PoI18nConfigContext"),og()(),Sl(480,"div",2)(481,"p"),Wl(482,"a",34),og(),Sl(483,"p"),rN(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),Sl(485,"code"),rN(486,"PoI18nModule"),og(),rN(487,"."),og()(),Sl(488,"h4",33)(489,"code",12),rN(490,"PoI18nConfigDefault"),og()(),Sl(491,"div",2)(492,"p"),Wl(493,"a",35),og(),Sl(494,"p"),rN(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),og()(),Sl(496,"h4",16),rN(497,"Propriedades"),og(),Sl(498,"table",25)(499,"tr",26)(500,"th",27),rN(501,"Nome"),og(),Sl(502,"th",27),rN(503,"Tipo"),og(),Sl(504,"th",27),rN(505,"Descri\xE7\xE3o"),og()(),Sl(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),rN(510," cache"),Wl(511,"br"),og()()(),Sl(512,"td",28)(513,"code",36),rN(514,"boolean"),og()(),Sl(515,"td",22)(516,"em")(517,"strong"),rN(518,"(opcional)"),og()(),Sl(519,"p"),rN(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),og(),Sl(521,"p"),rN(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),og(),Sl(523,"p"),rN(524,"Por padr\xE3o n\xE3o utiliza."),og()()(),Sl(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),rN(529," context"),Wl(530,"br"),og()()(),Sl(531,"td",28)(532,"code",37),rN(533,"string"),og()(),Sl(534,"td",22)(535,"em")(536,"strong"),rN(537,"(opcional)"),og()(),Sl(538,"p"),rN(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),og(),Sl(540,"blockquote")(541,"p"),rN(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),og()()()(),Sl(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),rN(547," language"),Wl(548,"br"),og()()(),Sl(549,"td",28)(550,"code",37),rN(551,"string"),og()(),Sl(552,"td",22)(553,"em")(554,"strong"),rN(555,"(opcional)"),og()(),Sl(556,"p"),rN(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),og(),Sl(558,"p"),rN(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Sl(560,"a",9)(561,"code"),rN(562,"setLanguage()"),og()(),rN(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),og()()()(),Sl(564,"h4",33)(565,"code",12),rN(566,"PoI18nConfig"),og()(),Sl(567,"div",2)(568,"p"),Wl(569,"a",38),og(),Sl(570,"p"),rN(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),Sl(572,"code"),rN(573,"PoI18nModule"),og(),rN(574,"."),og()(),Sl(575,"h4",16),rN(576,"Propriedades"),og(),Sl(577,"table",25)(578,"tr",26)(579,"th",27),rN(580,"Nome"),og(),Sl(581,"th",27),rN(582,"Tipo"),og(),Sl(583,"th",27),rN(584,"Descri\xE7\xE3o"),og()(),Sl(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),rN(589," contexts"),Wl(590,"br"),og()()(),Sl(591,"td",28)(592,"code",39),rN(593,"PoI18nConfigContext"),og()(),Sl(594,"td",22)(595,"p"),rN(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Sl(597,"code"),rN(598,"url"),og(),rN(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),og(),Sl(600,"p"),rN(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),og(),Sl(602,"pre")(603,"code"),rN(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),og()(),Sl(605,"p"),rN(606,"E como informado, podemos utilizar a propriedade "),Sl(607,"code"),rN(608,"url"),og(),rN(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),og(),Sl(610,"pre")(611,"code"),rN(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),og()(),Sl(613,"p"),rN(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),og(),Sl(615,"pre")(616,"code"),rN(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),og()(),Sl(618,"p"),rN(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),og(),Sl(620,"ul")(621,"li")(622,"code"),rN(623,"language"),og(),rN(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Sl(625,"code"),rN(626,"pt-br"),og(),rN(627,", "),Sl(628,"code"),rN(629,"en-us"),og(),rN(630,");"),og(),Sl(631,"li")(632,"code"),rN(633,"literals"),og(),rN(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),og()(),Sl(635,"p"),rN(636,"Exemplos de requisi\xE7\xE3o:"),og(),Sl(637,"pre")(638,"code"),rN(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),og()(),Sl(640,"blockquote")(641,"p"),rN(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),Sl(643,"code"),rN(644,"pt-br"),og(),rN(645,"."),og()(),Sl(646,"p"),rN(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Sl(648,"em"),rN(649,"backup"),og(),rN(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),og(),Sl(651,"pre")(652,"code"),rN(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),og()(),Sl(654,"blockquote")(655,"p"),rN(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),og()()()(),Sl(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),rN(661," default"),Wl(662,"br"),og()()(),Sl(663,"td",28)(664,"code",40),rN(665,"PoI18nConfigDefault"),og()(),Sl(666,"td",22)(667,"em")(668,"strong"),rN(669,"(opcional)"),og()(),Sl(670,"p"),rN(671,"Configura\xE7\xF5es padr\xF5es."),og()()()(),Sl(672,"h4",33)(673,"code",12),rN(674,"PoI18nLiterals"),og()(),Sl(675,"div",2)(676,"p"),rN(677,"Interface para o m\xE9todo "),Sl(678,"code"),rN(679,"getLiterals()"),og(),rN(680," do servi\xE7o PoI18nService."),og()(),Sl(681,"h4",16),rN(682,"Propriedades"),og(),Sl(683,"table",25)(684,"tr",26)(685,"th",27),rN(686,"Nome"),og(),Sl(687,"th",27),rN(688,"Tipo"),og(),Sl(689,"th",27),rN(690,"Descri\xE7\xE3o"),og()(),Sl(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),rN(695," context"),Wl(696,"br"),og()()(),Sl(697,"td",28)(698,"code",37),rN(699,"string"),og()(),Sl(700,"td",22)(701,"em")(702,"strong"),rN(703,"(opcional)"),og()(),Sl(704,"p"),rN(705,"Contexto utilizado na busca das literais."),og()()(),Sl(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),rN(710," language"),Wl(711,"br"),og()()(),Sl(712,"td",28)(713,"code",37),rN(714,"string"),og()(),Sl(715,"td",22)(716,"em")(717,"strong"),rN(718,"(opcional)"),og()(),Sl(719,"p"),rN(720,"Idioma a ser buscado."),og()()(),Sl(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),rN(725," literals"),Wl(726,"br"),og()()(),Sl(727,"td",28)(728,"code",41),rN(729,"Array<string>"),og()(),Sl(730,"td",22)(731,"em")(732,"strong"),rN(733,"(opcional)"),og()(),Sl(734,"p"),rN(735,"Lista das literais."),og()()()(),Sl(736,"h4",33)(737,"code",12),rN(738,"PoLanguage"),og()(),Sl(739,"div",2)(740,"p"),Wl(741,"a",42),og(),Sl(742,"p"),rN(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),og()(),Sl(744,"h4",16),rN(745,"Propriedades"),og(),Sl(746,"table",25)(747,"tr",26)(748,"th",27),rN(749,"Nome"),og(),Sl(750,"th",27),rN(751,"Tipo"),og(),Sl(752,"th",27),rN(753,"Descri\xE7\xE3o"),og()(),Sl(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),rN(758," description"),Wl(759,"br"),og()()(),Sl(760,"td",28)(761,"code",37),rN(762,"string"),og()(),Sl(763,"td",22)(764,"em")(765,"strong"),rN(766,"(opcional)"),og()(),Sl(767,"p"),rN(768,"Descri\xE7\xE3o do idioma"),og()()(),Sl(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),rN(773," language"),Wl(774,"br"),og()()(),Sl(775,"td",28)(776,"code",37),rN(777,"string"),og()(),Sl(778,"td",22)(779,"em")(780,"strong"),rN(781,"(opcional)"),og()(),Sl(782,"p"),rN(783,"C\xF3digo do idioma "),Sl(784,"a",43),rN(785,"ISO 639-1"),og()(),Sl(786,"blockquote")(787,"p"),rN(788,"Exemplo: 'pt','en'"),og()()()()(),Sl(789,"h4",33)(790,"code",12),rN(791,"PoNumberSeparator"),og()(),Sl(792,"div",2)(793,"p"),Wl(794,"a",44),og(),Sl(795,"p"),rN(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),og()(),Sl(797,"h4",16),rN(798,"Propriedades"),og(),Sl(799,"table",25)(800,"tr",26)(801,"th",27),rN(802,"Nome"),og(),Sl(803,"th",27),rN(804,"Tipo"),og(),Sl(805,"th",27),rN(806,"Descri\xE7\xE3o"),og()(),Sl(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),rN(811," language"),Wl(812,"br"),og()()(),Sl(813,"td",28)(814,"code",37),rN(815,"string"),og()(),Sl(816,"td",22)(817,"em")(818,"strong"),rN(819,"(opcional)"),og()(),Sl(820,"p"),rN(821,"C\xF3digo do idioma "),Sl(822,"a",43),rN(823,"ISO 639-1"),og()(),Sl(824,"blockquote")(825,"p"),rN(826,"Exemplo: 'pt','en'"),og()()()(),Sl(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),rN(831," separator"),Wl(832,"br"),og()()(),Sl(833,"td",28)(834,"code",37),rN(835,"string"),og()(),Sl(836,"td",22)(837,"em")(838,"strong"),rN(839,"(opcional)"),og()(),Sl(840,"p"),rN(841,"Separador num\xE9rico"),og()()()(),Sl(842,"h4",33)(843,"code",12),rN(844,"PoDateSeparator"),og()(),Sl(845,"div",2)(846,"p"),Wl(847,"a",45),og(),Sl(848,"p"),rN(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),og()(),Sl(850,"h4",16),rN(851,"Propriedades"),og(),Sl(852,"table",25)(853,"tr",26)(854,"th",27),rN(855,"Nome"),og(),Sl(856,"th",27),rN(857,"Tipo"),og(),Sl(858,"th",27),rN(859,"Descri\xE7\xE3o"),og()(),Sl(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),rN(864," locale"),Wl(865,"br"),og()()(),Sl(866,"td",28)(867,"code",37),rN(868,"string"),og()(),Sl(869,"td",22)(870,"em")(871,"strong"),rN(872,"(opcional)"),og()(),Sl(873,"p"),rN(874,"C\xF3digo do locale "),Sl(875,"a",43),rN(876,"ISO 639-1"),og()(),Sl(877,"blockquote")(878,"p"),rN(879,"Exemplo: 'pt','en'"),og()()()(),Sl(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),rN(884," separator"),Wl(885,"br"),og()()(),Sl(886,"td",28)(887,"code",37),rN(888,"string"),og()(),Sl(889,"td",22)(890,"em")(891,"strong"),rN(892,"(opcional)"),og()(),Sl(893,"p"),rN(894,"Separador de data"),og(),Sl(895,"blockquote")(896,"p"),rN(897,"Exemplo: '/','.','-'"),og()()()()()());},encapsulation:2,changeDetection:1})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(En))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ft("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-i18n-doc"),og(),Sl(4,"po-tab",3),ft("p-click",function(){return l.changeTab("web")}),og()()()),a&2&&(rw("p-actions",l.actions),Lp(2),rw("p-active",l.activeTab==="doc"),Lp(2),rw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[sNe,Ume,$me,D],encapsulation:2,changeDetection:1})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[mL.forChild(T),mL]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[sr,z]})}return o})();export{H as DocPoI18nModule};