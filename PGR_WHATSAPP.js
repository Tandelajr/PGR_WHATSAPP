async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("N�o h� uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
	}

	return lines.length
}

enviarScript(`
 Discurso de Jo�o Louren�o na cerim�nia de investidura como Presidente da Rep�blica

EXCELENT�SSIMO SENHOR JUIZ PRESIDENTE DO TRIBUNAL CONSTITUCIONAL,
SUA EXCEL�NCIA ENG� JOS� EDUARDO DOS SANTOS, PRESIDENTE DA REP�BLICA CESSANTE,
SUAS EXCEL�NCIAS CHEFES DE ESTADO E DE GOVERNO CONVIDADOS,
VENERANDOS JU�ZES CONSELHEIROS DO TRIBUNAL CONSTITUCIONAL,
SENHOR PRESIDENTE DA COMISS�O NACIONAL ELEITORAL,
ILUSTRES CONVIDADOS,
MINHAS SENHORAS E MEUS SENHORES,

� com particular emo��o que sa�do todas as angolanas e angolanos, de Cabinda ao Cunene e do mar ao Leste, que s�o a raz�o da minha presen�a aqui e que justificam a minha pretens�o de assumir a partir de hoje, em seu nome e benef�cio, a presid�ncia da Rep�blica de Angola. Pretendo endere�ar uma sauda��o especial ao Presidente Jos� Eduardo dos Santos, que cessa hoje a fun��o de Presidente da Rep�blica. Esta sauda��o ficaria incompleta se n�o mencionasse o longo e vitorioso caminho trilhado por Angola ao longo dos �ltimos 38 anos. O povo angolano agradece a dedica��o e o empenho do Presidente Jos� Eduardo dos Santos.
Essa sauda��o � extensiva a cada uma das personalidades do Poder Legislativo e do Poder Executivo, que cessam fun��es depois de as terem exercido com merecimento e de forma abnegada ao longo do �ltimo mandato constitucional, e tamb�m �s autoridades judiciais, enquanto detentoras de um dos tr�s poderes do Estado, a quem auguro um empenho cada vez maior no sentido do cumprimento da Constitui��o e das leis em vigor.
Sa�do igualmente as autoridades eclesi�sticas e as autoridades tradicionais que, enquanto parceiras do Estado, t�m cumprido o seu papel no �rduo processo de harmoniza��o e moraliza��o da sociedade e de inclus�o da maioria dos angolanos.
S�o tamb�m objecto da minha sauda��o as organiza��es da sociedade civil, que muito t�m contribu�do e v�o por certo continuar a contribuir para o processo de democratiza��o do nosso pa�s e para o indispens�vel di�logo e aproxima��o entre governantes e governados.
Foi inquestion�vel a participa��o das organiza��es da sociedade civil no processo eleitoral e espero, que durante este meu mandato elas intensifiquem a sua ac��o c�vica e a sua rela��o com os �rg�os do Estado, contribuindo para a concep��o e execu��o de pol�ticas p�blicas consensuais.
Dirijo tamb�m desta tribuna uma sauda��o ao Corpo Diplom�tico acreditado em Angola, agradecendo o papel que desempenham enquanto altos representantes de Estados soberanos com quem Angola mant�m la�os de amizade e de coopera��o.

Excel�ncias,
Minhas Senhoras e Meus Senhores,

Neste acto solene da minha investidura, rendo uma singela homenagem a todos os her�is da nossa gloriosa hist�ria e da nossa amada P�tria. A resist�ncia � presen�a colonial durou s�culos e estendeu-se a v�rios pontos do territ�rio que � hoje Angola. Os nomes lend�rios de Ngola Kiluanji, Ginga Mbande, Ekuiki II, Mutu ya Kevela, Mandume, entre tantos outros, simbolizam essa her�ica luta que inspirou os movimentos libertadores das d�cadas de 50 e 60 do s�culo XX.
Nesse movimento libertador, destaca-se no moderno nacionalismo angolano a figura do Dr. Ant�nio Agostinho Neto, o nosso Kilamba, cujo anivers�rio natal�cio comemor�mos h� dias, que soube interpretar fielmente as tradi��es her�icas e as aspira��es do nosso povo, conduzindo a luta armada de Liberta��o Nacional, que culminou com a proclama��o da Independ�ncia Nacional no dia 11 de Novembro de 1975.
Ap�s o seu prematuro desaparecimento f�sico, a 10 de Setembro de 1979, o MPLA confiou ao Presidente Jos� Eduardo dos Santos a miss�o hist�rica de dirigir o povo angolano na defesa das conquistas da Independ�ncia Nacional, no fortalecimento do Estado, na implanta��o e consolida��o da democracia multipartid�ria, na conquista da paz, na reconstru��o do pa�s e no lan�amento das bases para o desenvolvimento.
O Presidente Jos� Eduardo dos Santos cumpriu a sua miss�o com brio invulgar, com dedica��o e com um elevado esp�rito patri�tico. Por essa raz�o, a sua figura simboliza a vit�ria da unidade nacional, da paz e da dignifica��o dos angolanos no plano interno e internacional.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

Acabo de ser eleito democraticamente para um mandato de cinco anos como terceiro Presidente da Rep�blica de Angola, em elei��es ordeiras, pac�ficas e entusiastas que tiveram o justo reconhecimento interno e internacional. Uma vez mais, o Povo angolano atribuiu ao MPLA o papel de for�a pol�tica dirigente do Estado, seja ao n�vel da Assembleia Nacional, seja ao n�vel do Executivo.
Isso significa que foi sufragado nas urnas o Programa de Governo do MPLA para o per�odo 2017-2022. Agrade�o a todos os que votaram na lista do MPLA, que tive a honra de encabe�ar, a confian�a renovada, mas, uma vez investido no meu cargo, serei o Presidente de todos os angolanos e irei trabalhar na melhoria das condi��es de vida e bem-estar de todo o nosso povo.
Para corresponder � grande expectativa criada em torno da minha elei��o e a confian�a renovada no MPLA, governarei usando todos os poderes que a Constitui��o e a for�a dos votos dos cidad�os expressos nas urnas me conferem.
Neste novo ciclo pol�tico que hoje se inicia, legitimado nas urnas, a Constitui��o ser� a nossa b�ssola de orienta��o e as leis o nosso crit�rio de decis�o. A constru��o da democracia deve fazer-se todos os dias, mas ela n�o compete apenas aos �rg�os do poder do Estado. Ela � um projecto de toda a sociedade, um projecto de todos n�s. Vamos, por isso, construir alian�as e trabalhar em conjunto, para podermos ultrapassar eventuais contradi��es e engrandecer o nosso pa�s.
Assumo desde j� o compromisso de executar as minhas promessas eleitorais, com pol�ticas p�blicas que v�o ao encontro dos anseios dos cidad�os e com uma governa��o inclusiva, que apele � participa��o de todos os angolanos, independentemente do seu local de nascimento, sexo, l�ngua materna, religi�o, condi��o econ�mica ou posi��o social.
Procurarei marcar este mandato por uma atitude respons�vel perante os problemas da Na��o. � importante que quem quer que venha a exercer fun��es no Executivo se preocupe com esta miss�o, que deve comungar-nos a todos, para al�m da cor pol�tica ou das op��es ideol�gicas de cada um. O interesse nacional tem de estar acima dos interesses particulares ou de grupo, para que prevale�a a defesa do bem comum.
�, pois, nossa responsabilidade a constru��o de uma Angola pr�spera e democr�tica, com paz e justi�a social. O mais importante continua a ser resolver os problemas do povo. Mas isso n�o se faz apenas com palavras, mas sim com pol�ticas p�blicas que respondam o melhor poss�vel aos anseios e expectativas dos cidad�os, o que implica uma aposta cada vez mais s�ria no sector social, num contexto de crescimento sustent�vel do pa�s. � o que nos propomos fazer neste mandato, mesmo num contexto de crise financeira global.
Pretendemos igualmente aprofundar o Estado Democr�tico de Direito, refor�ando as institui��es e propiciando o exerc�cio integral da cidadania, com uma ac��o mais incisiva da sociedade civil. Prestaremos aten��o � reforma do Estado, de modo a permitir o desenvolvimento harmonioso e sustent�vel do territ�rio e das comunidades, com a descentraliza��o de poderes, a implementa��o gradual das autarquias e a municipaliza��o dos servi�os em geral. Para tal, � imperioso levar � pr�tica a palavra de ordem da diversifica��o da economia e do combate �s assimetrias regionais.
Nenhuma governa��o ser� bem sucedida sem o di�logo aberto com as diferentes for�as sociais. Por essa raz�o, vamos apostar numa maior aproxima��o aos sindicatos e �s ordens profissionais, �s organiza��es n�o-governamentais e a alguns grupos de press�o, enquanto parceiros do Executivo.
Todas estas for�as vivas de Angola t�m de ser chamadas a contribuir para a concep��o e execu��o das pol�ticas p�blicas que a Assembleia Nacional e o Executivo venham a aprovar.
Como Chefe de Estado, irei trabalhar para que os sagrados la�os do contrato social estabelecido entre governantes e cidad�os sejam permanentemente renovados, atrav�s da cria��o de espa�os p�blicos de debate e troca de opini�es, bem como atrav�s da cria��o de meios eficazes e c�leres para se exigir o respeito pelos direitos e para garantir a participa��o plena dos cidad�os na resolu��o dos problemas das comunidades em que est�o inseridos.
Nos �ltimos quinze anos, Angola conheceu um assinal�vel progresso no que respeita � qualidade da informa��o. H� mais jornais, mais esta��es de r�dio e mais esta��es de televis�o. O debate � mais plural e melhorou tamb�m a liberdade de imprensa. Mas estamos conscientes de que ainda h� muito por fazer e que estamos longe de atingir o ideal nessa mat�ria.
Neste mandato, vamos assegurar um maior investimento p�blico no sector da comunica��o social, de modo que os angolanos tenham acesso a uma informa��o fidedigna em todo o territ�rio nacional. Apelo, pois, aos servidores p�blicos para que mantenham uma maior abertura e aprendam a conviver com a cr�tica e com a diferen�a de opini�o, favorecendo o debate de ideias, com o fim �ltimo da salvaguarda dos interesses da Na��o e dos cidad�os.
O refor�o do sentimento patri�tico e da unidade nacional, como factores essenciais da afirma��o da nossa cultura, da nossa identidade e da angolanidade ocupa igualmente uma posi��o de relevo na nossa agenda. Durante o nosso mandato, o Executivo angolano continuar� a enaltecer essas componentes culturais, assim como a dar �nfase �s culturas pr�prias de todos quantos constituem o mosaico humano angolano. Defendemos a unidade na diversidade e a diversidade promotora da unidade.
A inser��o de Angola no mundo pressup�e o aprofundamento das rela��es bilaterais e multilaterais com todos os pa�ses, o refor�o da coopera��o cient�fica e t�cnica para o desenvolvimento e o contributo para a elimina��o de focos de tens�o e de conflitos na nossa regi�o, em �frica e no mundo.
N�o posso deixar de mencionar aqui a nossa solidariedade para com outros povos, mas sem nos esquecermos da di�spora angolana, que merece uma aten��o maior e cuja import�ncia para o desenvolvimento do nosso pa�s tem de ser levada em considera��o.

Excel�ncias,
Minhas Senhoras e Meus Senhores,

Angola � um pa�s que se caracteriza por possuir uma popula��o maioritariamente jovem. Esta realidade constitui uma base objectiva para a defini��o e implementa��o de pol�ticas p�blicas que promovam o seu desenvolvimento humano e bem-estar, condi��o indispens�vel para se construir um pa�s mais pr�spero.
A dimens�o da popula��o em idade activa e a tend�ncia de crescimento nos pr�ximos anos imp�em que a juventude esteja no centro das nossas aten��es. Apostar nos jovens � apostar no nosso futuro, no progresso de Angola e na sua inser��o no mundo global, cada vez mais competitivo.
Para tal � necess�rio investir muito seriamente na educa��o dos jovens e na sua forma��o t�cnico-profissional, ajustada �s necessidades do mercado de trabalho e ao desenvolvimento do pa�s. Deste modo, seremos capazes de colocar os recursos dispon�veis ao servi�o da Na��o, garantindo a melhoria geral das condi��es de vida dos angolanos, numa base justa e equitativa.
Apostar nos jovens � tamb�m investir em programas que promovam a melhoria da sa�de reprodutiva, visando a redu��o das taxas de mortalidade materna, infantil e infanto-juvenil e a preven��o da gravidez precoce das meninas e das infec��es de transmiss�o sexual (em particular o HIV-SIDA), bem como a erradica��o da influ�ncia de h�bitos e costumes com efeitos sociais negativos.
Angola precisa de jovens saud�veis, bem preparados e com elevado esp�rito empreendedor, capazes de, com o seu trabalho e a sua iniciativa, ajudar Angola a crescer e a transformar-se num pa�s onde, pelas condi��es favor�veis criadas, valha a pena viver.
As mulheres s�o outra importante franja da nossa sociedade que deve merecer a nossa aten��o particular. A import�ncia da mulher � tal, que as fam�lias e as comunidades se ressentem com a sua aus�ncia ou com a sua pequena representa��o em �rg�os de decis�o.
As mulheres devem ter a oportunidade de ombrear com os homens, seja no acesso � escola, seja no mercado de trabalho, seja na ac��o partid�ria ou no exerc�cio de cargos p�blicos. Ali�s, a Declara��o Universal dos Direitos Humanos considera o investimento na igualdade de g�nero e no empoderamento das mulheres um factor vital para a melhoria das condi��es econ�micas, sociais e pol�ticas nos pa�ses em desenvolvimento.
A promo��o da igualdade de g�nero, que � considerada central nas pol�ticas de desenvolvimento internacional conformes aos objectivos de desenvolvimento sustent�vel, num quadro de paz social, vai permitir-nos alcan�ar novos formatos e novos compromissos no contexto da �frica Austral e da �frica em geral e � escala global.

Distintos Convidados,
Minhas Senhoras e Meus Senhores,

No plano econ�mico, acreditamos que se o Estado cumprir bem com seu papel de fiscalizador e regulador da actividade econ�mica, passando a ser cada vez menos interventivo, com isso vamos impulsionar a iniciativa privada levando-a a ocupar o espa�o que merece e lhe compete realizar.
A necessidade de transpar�ncia na actua��o dos servi�os e dos servidores p�blicos, bem como o combate ao crime econ�mico e � corrup��o que grassa em algumas institui��es, em diferentes n�veis, constitui uma importante frente de luta a ter seriamente em conta, na qual todos temos o dever de participar.
A corrup��o e a impunidade t�m um impacto negativo directo na capacidade do Estado e dos seus agentes executarem qualquer programa de governa��o. Exorto, por isso, todo o nosso povo a trabalhar em conjunto para extirpar esse mal que amea�a seriamente os alicerces da nossa sociedade.
O combate � pobreza � uma prioridade incontorn�vel. Vamos, por isso, apostar na cria��o de emprego est�vel e na distribui��o merit�ria dos recursos dispon�veis, garantindo a adop��o de pol�ticas de inclus�o econ�mica e social, o que passa necessariamente pela protec��o dos trabalhadores.
Apostar tamb�m no apoio a programas direccionados de micro-cr�dito e de programas de cr�dito dirigidos a pequenas e m�dias empresas, bem como de cr�dito jovem, � outra das ac��es que urge promover desde j�. No meio rural, vamos apostar na produ��o agr�cola e pecu�ria em pequena e grande escala e na garantia do escoamento dos produtos do campo para as vilas e cidades.
A redu��o das desigualdades sociais passa por uma maior aposta no sector social, nomeadamente no acesso � educa��o e ao conhecimento, � assist�ncia de base para todos, � seguran�a social e � assist�ncia aos mais vulner�veis e desfavorecidos.
Para al�m das tarefas priorit�rias j� mencionadas, temos pois de promover o Estado social, com pol�ticas de inclus�o econ�mica e social e de redu��o das desigualdades, apostando num desenvolvimento com grande �nfase no meio rural e no aumento da produ��o interna, agr�cola e industrial.
No decurso dos pr�ximos cinco anos, vamos procurar fixar a taxa de infla��o em limites aceit�veis e control�veis. Isso vai obrigar-nos a impor regras r�gidas de pol�tica cambial e de pol�tica fiscal. Vamos apostar no refor�o dos sistemas de controlo de actos il�citos que possam descredibilizar o sector financeiro e banc�rio, internamente como no exterior.
Pretendemos aumentar a efici�ncia e a efic�cia do aparelho de governa��o, focando a nossa ac��o na redu��o da burocracia e no acompanhamento das iniciativas do Estado. Vamos iniciar um processo de revis�o do programa de investimento p�blico, dando suporte aos agentes privados que possam gerir os projectos de forma mais eficaz e suficiente.
Pretendemos tamb�m focar as ac��es do Estado nas medidas que fomentem o acompanhamento, supervis�o e fomento das actividades sectoriais e eliminar as barreiras administrativas que n�o agreguem valor aos processos.
O cr�dito � economia deve estar de acordo com as necessidades dos agentes econ�micos e com a obrigatoriedade de diversifica��o econ�mica, de redu��o dr�stica das importa��es e de aposta nas exporta��es. Manteremos a aposta na electrifica��o e na industrializa��o do pa�s. Ser� melhorado o quadro da produ��o, de distribui��o de energia el�ctrica e de �gua canalizada, o que permitir� uma maior e mais s�ria aposta na cria��o de polos industriais pelo pa�s.
Para tal, vamos actuar em duas direc��es, nomeadamente no cr�dito � ind�stria e no investimento estrangeiro para os sectores da agro-pecu�ria, das ind�strias, das pescas, do turismo, dos transportes, da imobili�ria e de outros de relevante import�ncia para a economia, com a devida transpar�ncia e celeridade, de modo a dar credibilidade ao processo.
No dom�nio dos transportes, vamos investir mais e melhor na mobilidade dos cidad�os. Projectamos investir na cria��o, amplia��o e melhoria da rede de transportes p�blicos (rodovi�rios, ferrovi�rios e fluviais), por forma a aumentar a qualidade de vida. Por outro lado, dedicaremos particular aten��o ao plano log�stico integrado do pa�s, com o objectivo de reduzir os constrangimentos que prejudicam seriamente a economia.
Importante ser� tamb�m garantir a protec��o do meio ambiente, enquanto requisito essencial para o crescimento e o desenvolvimento sustent�vel em Angola. A salvaguarda do meio ambiente, da fauna, da flora e dos recursos naturais, � um dos exerc�cios que nos permite garantir a sustentabilidade econ�mica e social e projectar um futuro promissor e feliz para as gera��es vindouras, tirando partido do que as boas pr�ticas nessa mat�ria podem criar, designadamente o turismo ecol�gico.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

No dom�nio da administra��o p�blica, vamos promover uma reforma que permita o aumento da efic�cia dos servi�os. O m�rito, o profissionalismo, a transpar�ncia, o rigor e o esp�rito de servi�o p�blico ser�o os par�metros que devem guiar a nomea��o dos futuros governantes ao n�vel central, provincial e local. A estrutura do Executivo ser� reduzida, de modo a garantir a sua funcionalidade, sem dispers�o de meios e evitando o esbanjamento e o desperd�cio de recursos, que s�o cada vez mais escassos.
Pretendemos que a reforma da administra��o p�blica esteja centrada na simplifica��o de procedimentos e na valoriza��o do capital humano, de modo que permita reter os melhores quadros, atrav�s de uma pol�tica virada para os dom�nios da forma��o, motiva��o, remunera��o e carreira dos agentes e funcion�rios p�blicos. � dever destes a resolu��o c�lere dos problemas e das necessidades dos cidad�os que recorrem aos seus servi�os.
A Justi�a desempenha um papel central no resgate do sentimento de confian�a nas institui��es do Estado, porque os cidad�os precisam de acreditar que ningu�m � rico ou poderoso demais para se furtar a ser punido, nem ningu�m � pobre de mais ao ponto de n�o poder ser protegido.
A reforma da Justi�a, iniciada h� pouco tempo, precisa de um novo impulso, de modo a serem conclu�dos os v�rios c�digos que est�o a ser reapreciados e aprovadas medidas administrativas e operativas para diminuir o elevado n�mero de processos pendentes. Vamos atribuir a devida dignidade ao Poder Judicial, cuja import�ncia para o processo de democratiza��o � indiscut�vel.
No que respeita ao poder local, Angola tem uma grande extens�o territorial e os problemas das pessoas, das fam�lias, das comunidades e empresas n�o podem ficar apenas � espera de decis�es que s�o tomadas na capital, muitas vezes descurando as especificidades de cada regi�o.
Vamos por isso, no decurso deste mandato, proceder � implanta��o progressiva das autarquias, refor�ando e aprofundando assim a autonomia e o controlo local sobre a execu��o de pol�ticas p�blicas.
Ser� preciso apostar na desconcentra��o administrativa e financeira, alargando progressivamente as compet�ncias das administra��es municipais e comunais, iniciando assim a desejada transfer�ncia de compet�ncias para �rg�os eleitos mais pr�ximos dos cidad�os para promover o desenvolvimento comunit�rio e local.
Neste contexto, n�o nos podemos esquecer das autoridades tradicionais, enquanto representantes das comunidades rurais e fi�is deposit�rios da nossa hist�ria, da nossa cultura e das nossas tradi��es.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

Como j� referimos, vamos priorizar o sector social, com uma s�ria aposta nos recursos humanos. Esta � a �nica via, se pretendemos realmente tirar o pa�s do lugar em que se encontra no que respeita a v�rios indicadores de desenvolvimento humano e de desenvolvimento econ�mico.
A adop��o de pr�ticas correctas, seja no exerc�cio p�blico, seja no �mbito da sociedade, vai exigir das fam�lias, das escolas, das igrejas e das demais organiza��es da sociedade civil, o refor�o dos valores morais, da coes�o social e do patriotismo.
Para al�m da necessidade da erradica��o da fome e do combate � pobreza atrav�s de um programa integrado, vamos lutar pelo empoderamento e apoio �s fam�lias mais desfavorecidas, tendo em vista a ascens�o social de um bom n�mero de fam�lias angolanas, tanto no meio urbano como no meio rural.
Continuaremos a incluir na agenda governamental, a protec��o e valoriza��o das crian�as e da juventude, a garantia da equidade do g�nero, a valoriza��o e protec��o do idoso e dos antigos combatentes e veteranos da P�tria.
No dom�nio da habita��o, prosseguiremos com a implementa��o do programa de fomento habitacional e vamos incrementar a aposta na constru��o dirigida, sobretudo em benef�cio dos jovens casais e dos jovens quadros.
Vamos trabalhar para garantir o pleno funcionamento dos hospitais e centros de sa�de, com respeito pelos princ�pios �ticos e pelos valores que devem nortear a deontologia profissional. O nosso objectivo ser�, para os pr�ximos cinco anos, reduzir consideravelmente as actuais taxas de mortalidade e de mortalidade infantil, com o concurso das unidades sanit�rias p�blicas e privadas, bem como com a reactiva��o do programa de educa��o para a sa�de.
Vamos orientar o sector da sa�de no sentido da cria��o de um sistema de avalia��o de hospitais, centros de sa�de e cl�nicas, feito por uma entidade independente, que nos permita passar a prestar aos cidad�os informa��o correcta a respeito da qualidade dos servi�os de sa�de em cada unidade sanit�ria.
O dom�nio da educa��o � aquele a que dedicaremos uma aten��o muito especial, no quadro do projecto de capacita��o dos quadros angolanos, de modo que possam competir com os demais. O Executivo continuar� a encarar a educa��o como um direito constitucional, que deve ser garantido a todas as angolanas e a todos os angolanos.
Isso vai exigir de n�s uma aposta clara e permanente na equidade do sistema de ensino, na educa��o pr�-escolar, na qualidade do ensino prim�rio, na qualidade do subsistema de forma��o de professores, na reforma do sistema de administra��o e gest�o escolar, na reforma curricular tendo em conta as especificidades regionais e na valoriza��o da carreira docente a todos os n�veis do nosso sistema de educa��o e ensino.
O Executivo vai trabalhar no sentido de diminuir a taxa de analfabetismo e vai investir decididamente no ensino t�cnico-profissional e no ensino especial.
Estar� no centro das nossas preocupa��es a necessidade de adop��o de uma pol�tica de fomento do livro e da leitura, que inclua a isen��o de direitos alfandeg�rios e impostos na importa��o de livros escolares e dos destinados �s bibliotecas.
O investimento na qualidade do ensino superior universit�rio e polit�cnico ser� outra grande aposta do Executivo nos pr�ximos anos, com vista � cria��o de um modelo de ensino superior que esteja mais de acordo com as pr�ticas universais.

Caros Convidados,
Minhas Senhoras e Meus Senhores,

Durante o nosso mandato, propomo-nos realizar uma ampla divulga��o dos museus, monumentos e s�tios que integram o patrim�nio hist�rico, cultural, arquitect�nico e natural de Angola, para seu usufruto por parte da popula��o e para o fomento do turismo.
Um importante passo na cruzada da diplomacia cultural foi a recente classifica��o pela UNESCO do Centro Hist�rico de Mbanza Congo como Patrim�nio Mundial, o que dignifica enormemente o nosso pa�s, a nossa hist�ria e o nosso povo, assim como a hist�ria universal.
O Reino do Congo foi dos mais importantes reinos de �frica, de onde, embora for�ados, sa�ram africanos para todo o mundo, levando consigo a sua cultura, traduzida em religi�es, m�sica, dan�a e rituais de origem bantu, deste modo espalhando pelo mundo a nossa identidade. Assume igualmente primordial import�ncia a aceita��o das candidaturas a Patrim�nio Mundial do Corredor do Cuanza, das pinturas rupestres de Tchitundo-Hulo e do Cuito Cuanavale.
Este �ltimo local � tamb�m mem�ria da luta libertadora do nosso povo, pelo seu simbolismo na defesa e preserva��o da paz e pelo seu significado na hist�ria do nosso pa�s, da �frica Austral e do nosso continente em geral, tendo o monumento comemorativo da hist�rica e lend�ria batalha a� ocorrida sido inaugurado h� poucos dias pelo Presidente Jos� Eduardo dos Santos.
O desporto deve tamb�m assumir uma dimens�o inspiradora e formativa, de modo a permitir construir uma Angola fraterna, mais inclusiva e em que as barreiras do preconceito e da intoler�ncia v�o sendo derrubadas. Reconhecemos que as nossas e os nossos desportistas t�m sabido honrar, al�m-fronteiras, o Hino e a Bandeira nacionais, unindo ainda mais o povo angolano.
Neste mandato, vamos incentivar o desporto escolar, regressar aos campeonatos escolares e aos campeonatos universit�rios e exigir aos dirigentes das infra-estruturas desportivas maior responsabilidade na sua conserva��o e gest�o.

Excel�ncias,
Minhas Senhoras e Meus Senhores,

Na minha nova qualidade de Comandante-em-Chefe das For�as Armadas Angolanas, quero, antes de mais, saudar os oficiais generais, almirantes, oficiais superiores, capit�es, oficiais subalternos, sargentos e pra�as, bem como os oficiais e agentes da Pol�cia Nacional e dos Servi�os de Intelig�ncia.
Vamos continuar a priorizar a preserva��o da unidade e coes�o nacional, a preserva��o da paz e da estabilidade e a diminui��o dos �ndices de criminalidade urbana e de delinqu�ncia juvenil.
Vamos ocupar-nos em modernizar as For�as Armadas Angolanas e dar passos s�lidos tendentes � cria��o de uma ind�stria de defesa.
Refor�aremos a compet�ncia operativa da Pol�cia Nacional e dos �rg�os de intelig�ncia, dando primazia � ac��o preventiva, n�o descurando a melhoria da ac��o dos servi�os de investiga��o criminal, com garantia de supera��o e actualiza��o profissional.

Estimados Convidados,
Minhas Senhoras e Meus Senhores,

A Rep�blica de Angola conquistou por m�rito pr�prio um lugar de realce no concerto das na��es. Neste sentido, devemos continuar a pugnar pela manuten��o de rela��es de amizade e coopera��o com todos os povos do mundo, na base dos princ�pios de n�o inger�ncia nos assuntos internos e da reciprocidade de vantagens, cooperando com todos os pa�ses para a salvaguarda da paz, da justi�a e do progresso da Humanidade.
No que diz respeito �s rela��es no continente africano, ser� dada prioridade aos pa�ses vizinhos, na base de rela��es de boa vizinhan�a e de coopera��o. Dada a sua proximidade, essas s�o rela��es importantes para a defesa, a seguran�a e o desenvolvimento da subregi�o austral, sem descurar obviamente os pa�ses da SADC, com os quais Angola partilha afinidades geopol�ticas.
A Uni�o Africana ocupa um lugar de suma import�ncia para Angola e, por essa raz�o, o nosso pa�s dever� permanecer como um dos maiores contribuintes para o seu or�amento.
Vamos conduzir uma politica de aproxima��o aos pa�ses da Comunidade Econ�mica dos Estados da �frica Ocidental (CEDEAO), com vista � troca de informa��es no dom�nio da seguran�a, para a preven��o e combate ao terrorismo.
Angola deve, pois, manter o seu papel de actor importante na manuten��o da paz na sua subregi�o, actuando de maneira firme nas organiza��es das quais faz parte.
Pela sua import�ncia hist�rica e pela necessidade de continuar a cultivar os la�os forjados no per�odo da conquista e consolida��o das nossas independ�ncias, a rela��o com os Pa�ses Africanos de L�ngua Portuguesa (PALOP) vai estar sempre presente nas nossas op��es.
Trabalharemos no sentido de garantir uma maior presen�a de angolanos no sistema das Na��es Unidas, na Uni�o Africana e nas organiza��es regionais, o que pressup�e uma maior aposta na forma��o e acompanhamento de jovens angolanos para futuras campanhas diplom�ticas.
Angola dar� primazia a importantes parceiros, tais como os Estados Unidos da Am�rica, a Rep�blica Popular da China, a Federa��o Russa, a Rep�blica Federativa do Brasil, a �ndia, o Jap�o, a Alemanha, a Espanha, a Fran�a, a It�lia, o Reino Unido, a Coreia do Sul e outros parceiros n�o menos importantes, desde que respeitem a nossa soberania.
Quanto � diplomacia econ�mica, ela � uma das mais importantes vertentes da nossa pol�tica externa, quer ao n�vel estritamente econ�mico e comercial do relacionamento bilateral, regional e multilateral, quer na promo��o da imagem do pa�s no exterior, tanto de expectativa da exporta��o de bens e servi�os, como na capta��o de investimento directo estrangeiro.
Pretendemos, pois, reanalisar o papel a assumir por Angola na actual conjuntura regional e internacional, dando primazia aos contactos com os parceiros interessados, refor�ando a participa��o das representa��es diplom�ticas angolanas na capta��o do investimento estrangeiro e na promo��o do acesso ao conhecimento cient�fico, t�cnico e tecnol�gico, contribuindo para que os empres�rios e industriais angolanos estejam mais presentes em �frica, com uma maior aposta no com�rcio regional e na produ��o interna para exporta��o.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

Como � f�cil de constatar, s�o enormes os desafios que temos pela frente, de modo a conduzirmos com �xito os destinos do nosso pa�s, a honrarmos os her�is da nossa hist�ria e a prepararmos um futuro melhor para as actuais e as gera��es vindouras.
Teremos um mandato que vai ser marcado pelo refor�o da import�ncia do cidad�o, de modo que os seus anseios e expectativas constem permanentemente da agenda do Executivo.
Vamos refor�ar a liga��o e a colabora��o institucional entre os tr�s poderes do Estado, para que cada um deles cumpra o seu papel e a sua ac��o independente, contribuindo assim para o refor�o do nosso jovem sistema democr�tico.
O nosso lema ser�: �Renova��o e transforma��o na continuidade � Melhorar o que est� bem e corrigir o que est� mal�.
Vou procurar auscultar os diferentes estratos da popula��o e os v�rios grupos organizados da sociedade civil, pois s� assim poderemos executar com �xito a ac��o governativa. Apelamos, pois, ao apoio de todos nesta dif�cil caminhada.

Angolanas e Angolanos,
Caros Concidad�os,

Quero renovar os agradecimentos pelo voto de confian�a que, enquanto eleitores, depositaram na minha pessoa e no meu Partido.
Quero tamb�m agradecer em especial � forma��o pol�tica a que perten�o e � minha esposa e filhos, pelo apoio prestado e pelo apoio que espero continuar a receber, para levar a bom porto a miss�o que me foi confiada pelo Povo angolano.
Gostaria, ao terminar, de assumir publicamente o meu comprometimento com as ac��es e os projectos que aqui apresentei. E quero garantir a cada angolana e a cada angolano que darei o melhor dos meus esfor�os para servir com humildade o Estado e o Povo angolano.

Viva a Democracia!
Viva Angola!
Muito Obrigado!

Fonte: Jornal de Angola

`).then(e => console.log(`C�digo finalizado, ${e} mensagens enviadas`)).catch(console.error)