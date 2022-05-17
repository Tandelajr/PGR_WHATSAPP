async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

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
 Discurso de João Lourenço na cerimónia de investidura como Presidente da República

EXCELENTÍSSIMO SENHOR JUIZ PRESIDENTE DO TRIBUNAL CONSTITUCIONAL,
SUA EXCELÊNCIA ENGº JOSÉ EDUARDO DOS SANTOS, PRESIDENTE DA REPÚBLICA CESSANTE,
SUAS EXCELÊNCIAS CHEFES DE ESTADO E DE GOVERNO CONVIDADOS,
VENERANDOS JUÍZES CONSELHEIROS DO TRIBUNAL CONSTITUCIONAL,
SENHOR PRESIDENTE DA COMISSÃO NACIONAL ELEITORAL,
ILUSTRES CONVIDADOS,
MINHAS SENHORAS E MEUS SENHORES,

É com particular emoção que saúdo todas as angolanas e angolanos, de Cabinda ao Cunene e do mar ao Leste, que são a razão da minha presença aqui e que justificam a minha pretensão de assumir a partir de hoje, em seu nome e benefício, a presidência da República de Angola. Pretendo endereçar uma saudação especial ao Presidente José Eduardo dos Santos, que cessa hoje a função de Presidente da República. Esta saudação ficaria incompleta se não mencionasse o longo e vitorioso caminho trilhado por Angola ao longo dos últimos 38 anos. O povo angolano agradece a dedicação e o empenho do Presidente José Eduardo dos Santos.
Essa saudação é extensiva a cada uma das personalidades do Poder Legislativo e do Poder Executivo, que cessam funções depois de as terem exercido com merecimento e de forma abnegada ao longo do último mandato constitucional, e também às autoridades judiciais, enquanto detentoras de um dos três poderes do Estado, a quem auguro um empenho cada vez maior no sentido do cumprimento da Constituição e das leis em vigor.
Saúdo igualmente as autoridades eclesiásticas e as autoridades tradicionais que, enquanto parceiras do Estado, têm cumprido o seu papel no árduo processo de harmonização e moralização da sociedade e de inclusão da maioria dos angolanos.
São também objecto da minha saudação as organizações da sociedade civil, que muito têm contribuído e vão por certo continuar a contribuir para o processo de democratização do nosso país e para o indispensável diálogo e aproximação entre governantes e governados.
Foi inquestionável a participação das organizações da sociedade civil no processo eleitoral e espero, que durante este meu mandato elas intensifiquem a sua acção cívica e a sua relação com os órgãos do Estado, contribuindo para a concepção e execução de políticas públicas consensuais.
Dirijo também desta tribuna uma saudação ao Corpo Diplomático acreditado em Angola, agradecendo o papel que desempenham enquanto altos representantes de Estados soberanos com quem Angola mantém laços de amizade e de cooperação.

Excelências,
Minhas Senhoras e Meus Senhores,

Neste acto solene da minha investidura, rendo uma singela homenagem a todos os heróis da nossa gloriosa história e da nossa amada Pátria. A resistência à presença colonial durou séculos e estendeu-se a vários pontos do território que é hoje Angola. Os nomes lendários de Ngola Kiluanji, Ginga Mbande, Ekuiki II, Mutu ya Kevela, Mandume, entre tantos outros, simbolizam essa heróica luta que inspirou os movimentos libertadores das décadas de 50 e 60 do século XX.
Nesse movimento libertador, destaca-se no moderno nacionalismo angolano a figura do Dr. António Agostinho Neto, o nosso Kilamba, cujo aniversário natalício comemorámos há dias, que soube interpretar fielmente as tradições heróicas e as aspirações do nosso povo, conduzindo a luta armada de Libertação Nacional, que culminou com a proclamação da Independência Nacional no dia 11 de Novembro de 1975.
Após o seu prematuro desaparecimento físico, a 10 de Setembro de 1979, o MPLA confiou ao Presidente José Eduardo dos Santos a missão histórica de dirigir o povo angolano na defesa das conquistas da Independência Nacional, no fortalecimento do Estado, na implantação e consolidação da democracia multipartidária, na conquista da paz, na reconstrução do país e no lançamento das bases para o desenvolvimento.
O Presidente José Eduardo dos Santos cumpriu a sua missão com brio invulgar, com dedicação e com um elevado espírito patriótico. Por essa razão, a sua figura simboliza a vitória da unidade nacional, da paz e da dignificação dos angolanos no plano interno e internacional.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

Acabo de ser eleito democraticamente para um mandato de cinco anos como terceiro Presidente da República de Angola, em eleições ordeiras, pacíficas e entusiastas que tiveram o justo reconhecimento interno e internacional. Uma vez mais, o Povo angolano atribuiu ao MPLA o papel de força política dirigente do Estado, seja ao nível da Assembleia Nacional, seja ao nível do Executivo.
Isso significa que foi sufragado nas urnas o Programa de Governo do MPLA para o período 2017-2022. Agradeço a todos os que votaram na lista do MPLA, que tive a honra de encabeçar, a confiança renovada, mas, uma vez investido no meu cargo, serei o Presidente de todos os angolanos e irei trabalhar na melhoria das condições de vida e bem-estar de todo o nosso povo.
Para corresponder à grande expectativa criada em torno da minha eleição e a confiança renovada no MPLA, governarei usando todos os poderes que a Constituição e a força dos votos dos cidadãos expressos nas urnas me conferem.
Neste novo ciclo político que hoje se inicia, legitimado nas urnas, a Constituição será a nossa bússola de orientação e as leis o nosso critério de decisão. A construção da democracia deve fazer-se todos os dias, mas ela não compete apenas aos órgãos do poder do Estado. Ela é um projecto de toda a sociedade, um projecto de todos nós. Vamos, por isso, construir alianças e trabalhar em conjunto, para podermos ultrapassar eventuais contradições e engrandecer o nosso país.
Assumo desde já o compromisso de executar as minhas promessas eleitorais, com políticas públicas que vão ao encontro dos anseios dos cidadãos e com uma governação inclusiva, que apele à participação de todos os angolanos, independentemente do seu local de nascimento, sexo, língua materna, religião, condição económica ou posição social.
Procurarei marcar este mandato por uma atitude responsável perante os problemas da Nação. É importante que quem quer que venha a exercer funções no Executivo se preocupe com esta missão, que deve comungar-nos a todos, para além da cor política ou das opções ideológicas de cada um. O interesse nacional tem de estar acima dos interesses particulares ou de grupo, para que prevaleça a defesa do bem comum.
É, pois, nossa responsabilidade a construção de uma Angola próspera e democrática, com paz e justiça social. O mais importante continua a ser resolver os problemas do povo. Mas isso não se faz apenas com palavras, mas sim com políticas públicas que respondam o melhor possível aos anseios e expectativas dos cidadãos, o que implica uma aposta cada vez mais séria no sector social, num contexto de crescimento sustentável do país. É o que nos propomos fazer neste mandato, mesmo num contexto de crise financeira global.
Pretendemos igualmente aprofundar o Estado Democrático de Direito, reforçando as instituições e propiciando o exercício integral da cidadania, com uma acção mais incisiva da sociedade civil. Prestaremos atenção à reforma do Estado, de modo a permitir o desenvolvimento harmonioso e sustentável do território e das comunidades, com a descentralização de poderes, a implementação gradual das autarquias e a municipalização dos serviços em geral. Para tal, é imperioso levar à prática a palavra de ordem da diversificação da economia e do combate às assimetrias regionais.
Nenhuma governação será bem sucedida sem o diálogo aberto com as diferentes forças sociais. Por essa razão, vamos apostar numa maior aproximação aos sindicatos e às ordens profissionais, às organizações não-governamentais e a alguns grupos de pressão, enquanto parceiros do Executivo.
Todas estas forças vivas de Angola têm de ser chamadas a contribuir para a concepção e execução das políticas públicas que a Assembleia Nacional e o Executivo venham a aprovar.
Como Chefe de Estado, irei trabalhar para que os sagrados laços do contrato social estabelecido entre governantes e cidadãos sejam permanentemente renovados, através da criação de espaços públicos de debate e troca de opiniões, bem como através da criação de meios eficazes e céleres para se exigir o respeito pelos direitos e para garantir a participação plena dos cidadãos na resolução dos problemas das comunidades em que estão inseridos.
Nos últimos quinze anos, Angola conheceu um assinalável progresso no que respeita à qualidade da informação. Há mais jornais, mais estações de rádio e mais estações de televisão. O debate é mais plural e melhorou também a liberdade de imprensa. Mas estamos conscientes de que ainda há muito por fazer e que estamos longe de atingir o ideal nessa matéria.
Neste mandato, vamos assegurar um maior investimento público no sector da comunicação social, de modo que os angolanos tenham acesso a uma informação fidedigna em todo o território nacional. Apelo, pois, aos servidores públicos para que mantenham uma maior abertura e aprendam a conviver com a crítica e com a diferença de opinião, favorecendo o debate de ideias, com o fim último da salvaguarda dos interesses da Nação e dos cidadãos.
O reforço do sentimento patriótico e da unidade nacional, como factores essenciais da afirmação da nossa cultura, da nossa identidade e da angolanidade ocupa igualmente uma posição de relevo na nossa agenda. Durante o nosso mandato, o Executivo angolano continuará a enaltecer essas componentes culturais, assim como a dar ênfase às culturas próprias de todos quantos constituem o mosaico humano angolano. Defendemos a unidade na diversidade e a diversidade promotora da unidade.
A inserção de Angola no mundo pressupõe o aprofundamento das relações bilaterais e multilaterais com todos os países, o reforço da cooperação científica e técnica para o desenvolvimento e o contributo para a eliminação de focos de tensão e de conflitos na nossa região, em África e no mundo.
Não posso deixar de mencionar aqui a nossa solidariedade para com outros povos, mas sem nos esquecermos da diáspora angolana, que merece uma atenção maior e cuja importância para o desenvolvimento do nosso país tem de ser levada em consideração.

Excelências,
Minhas Senhoras e Meus Senhores,

Angola é um país que se caracteriza por possuir uma população maioritariamente jovem. Esta realidade constitui uma base objectiva para a definição e implementação de políticas públicas que promovam o seu desenvolvimento humano e bem-estar, condição indispensável para se construir um país mais próspero.
A dimensão da população em idade activa e a tendência de crescimento nos próximos anos impõem que a juventude esteja no centro das nossas atenções. Apostar nos jovens é apostar no nosso futuro, no progresso de Angola e na sua inserção no mundo global, cada vez mais competitivo.
Para tal é necessário investir muito seriamente na educação dos jovens e na sua formação técnico-profissional, ajustada às necessidades do mercado de trabalho e ao desenvolvimento do país. Deste modo, seremos capazes de colocar os recursos disponíveis ao serviço da Nação, garantindo a melhoria geral das condições de vida dos angolanos, numa base justa e equitativa.
Apostar nos jovens é também investir em programas que promovam a melhoria da saúde reprodutiva, visando a redução das taxas de mortalidade materna, infantil e infanto-juvenil e a prevenção da gravidez precoce das meninas e das infecções de transmissão sexual (em particular o HIV-SIDA), bem como a erradicação da influência de hábitos e costumes com efeitos sociais negativos.
Angola precisa de jovens saudáveis, bem preparados e com elevado espírito empreendedor, capazes de, com o seu trabalho e a sua iniciativa, ajudar Angola a crescer e a transformar-se num país onde, pelas condições favoráveis criadas, valha a pena viver.
As mulheres são outra importante franja da nossa sociedade que deve merecer a nossa atenção particular. A importância da mulher é tal, que as famílias e as comunidades se ressentem com a sua ausência ou com a sua pequena representação em órgãos de decisão.
As mulheres devem ter a oportunidade de ombrear com os homens, seja no acesso à escola, seja no mercado de trabalho, seja na acção partidária ou no exercício de cargos públicos. Aliás, a Declaração Universal dos Direitos Humanos considera o investimento na igualdade de género e no empoderamento das mulheres um factor vital para a melhoria das condições económicas, sociais e políticas nos países em desenvolvimento.
A promoção da igualdade de género, que é considerada central nas políticas de desenvolvimento internacional conformes aos objectivos de desenvolvimento sustentável, num quadro de paz social, vai permitir-nos alcançar novos formatos e novos compromissos no contexto da África Austral e da África em geral e à escala global.

Distintos Convidados,
Minhas Senhoras e Meus Senhores,

No plano económico, acreditamos que se o Estado cumprir bem com seu papel de fiscalizador e regulador da actividade económica, passando a ser cada vez menos interventivo, com isso vamos impulsionar a iniciativa privada levando-a a ocupar o espaço que merece e lhe compete realizar.
A necessidade de transparência na actuação dos serviços e dos servidores públicos, bem como o combate ao crime económico e à corrupção que grassa em algumas instituições, em diferentes níveis, constitui uma importante frente de luta a ter seriamente em conta, na qual todos temos o dever de participar.
A corrupção e a impunidade têm um impacto negativo directo na capacidade do Estado e dos seus agentes executarem qualquer programa de governação. Exorto, por isso, todo o nosso povo a trabalhar em conjunto para extirpar esse mal que ameaça seriamente os alicerces da nossa sociedade.
O combate à pobreza é uma prioridade incontornável. Vamos, por isso, apostar na criação de emprego estável e na distribuição meritória dos recursos disponíveis, garantindo a adopção de políticas de inclusão económica e social, o que passa necessariamente pela protecção dos trabalhadores.
Apostar também no apoio a programas direccionados de micro-crédito e de programas de crédito dirigidos a pequenas e médias empresas, bem como de crédito jovem, é outra das acções que urge promover desde já. No meio rural, vamos apostar na produção agrícola e pecuária em pequena e grande escala e na garantia do escoamento dos produtos do campo para as vilas e cidades.
A redução das desigualdades sociais passa por uma maior aposta no sector social, nomeadamente no acesso à educação e ao conhecimento, à assistência de base para todos, à segurança social e à assistência aos mais vulneráveis e desfavorecidos.
Para além das tarefas prioritárias já mencionadas, temos pois de promover o Estado social, com políticas de inclusão económica e social e de redução das desigualdades, apostando num desenvolvimento com grande ênfase no meio rural e no aumento da produção interna, agrícola e industrial.
No decurso dos próximos cinco anos, vamos procurar fixar a taxa de inflação em limites aceitáveis e controláveis. Isso vai obrigar-nos a impor regras rígidas de política cambial e de política fiscal. Vamos apostar no reforço dos sistemas de controlo de actos ilícitos que possam descredibilizar o sector financeiro e bancário, internamente como no exterior.
Pretendemos aumentar a eficiência e a eficácia do aparelho de governação, focando a nossa acção na redução da burocracia e no acompanhamento das iniciativas do Estado. Vamos iniciar um processo de revisão do programa de investimento público, dando suporte aos agentes privados que possam gerir os projectos de forma mais eficaz e suficiente.
Pretendemos também focar as acções do Estado nas medidas que fomentem o acompanhamento, supervisão e fomento das actividades sectoriais e eliminar as barreiras administrativas que não agreguem valor aos processos.
O crédito à economia deve estar de acordo com as necessidades dos agentes económicos e com a obrigatoriedade de diversificação económica, de redução drástica das importações e de aposta nas exportações. Manteremos a aposta na electrificação e na industrialização do país. Será melhorado o quadro da produção, de distribuição de energia eléctrica e de água canalizada, o que permitirá uma maior e mais séria aposta na criação de polos industriais pelo país.
Para tal, vamos actuar em duas direcções, nomeadamente no crédito à indústria e no investimento estrangeiro para os sectores da agro-pecuária, das indústrias, das pescas, do turismo, dos transportes, da imobiliária e de outros de relevante importância para a economia, com a devida transparência e celeridade, de modo a dar credibilidade ao processo.
No domínio dos transportes, vamos investir mais e melhor na mobilidade dos cidadãos. Projectamos investir na criação, ampliação e melhoria da rede de transportes públicos (rodoviários, ferroviários e fluviais), por forma a aumentar a qualidade de vida. Por outro lado, dedicaremos particular atenção ao plano logístico integrado do país, com o objectivo de reduzir os constrangimentos que prejudicam seriamente a economia.
Importante será também garantir a protecção do meio ambiente, enquanto requisito essencial para o crescimento e o desenvolvimento sustentável em Angola. A salvaguarda do meio ambiente, da fauna, da flora e dos recursos naturais, é um dos exercícios que nos permite garantir a sustentabilidade económica e social e projectar um futuro promissor e feliz para as gerações vindouras, tirando partido do que as boas práticas nessa matéria podem criar, designadamente o turismo ecológico.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

No domínio da administração pública, vamos promover uma reforma que permita o aumento da eficácia dos serviços. O mérito, o profissionalismo, a transparência, o rigor e o espírito de serviço público serão os parâmetros que devem guiar a nomeação dos futuros governantes ao nível central, provincial e local. A estrutura do Executivo será reduzida, de modo a garantir a sua funcionalidade, sem dispersão de meios e evitando o esbanjamento e o desperdício de recursos, que são cada vez mais escassos.
Pretendemos que a reforma da administração pública esteja centrada na simplificação de procedimentos e na valorização do capital humano, de modo que permita reter os melhores quadros, através de uma política virada para os domínios da formação, motivação, remuneração e carreira dos agentes e funcionários públicos. É dever destes a resolução célere dos problemas e das necessidades dos cidadãos que recorrem aos seus serviços.
A Justiça desempenha um papel central no resgate do sentimento de confiança nas instituições do Estado, porque os cidadãos precisam de acreditar que ninguém é rico ou poderoso demais para se furtar a ser punido, nem ninguém é pobre de mais ao ponto de não poder ser protegido.
A reforma da Justiça, iniciada há pouco tempo, precisa de um novo impulso, de modo a serem concluídos os vários códigos que estão a ser reapreciados e aprovadas medidas administrativas e operativas para diminuir o elevado número de processos pendentes. Vamos atribuir a devida dignidade ao Poder Judicial, cuja importância para o processo de democratização é indiscutível.
No que respeita ao poder local, Angola tem uma grande extensão territorial e os problemas das pessoas, das famílias, das comunidades e empresas não podem ficar apenas à espera de decisões que são tomadas na capital, muitas vezes descurando as especificidades de cada região.
Vamos por isso, no decurso deste mandato, proceder à implantação progressiva das autarquias, reforçando e aprofundando assim a autonomia e o controlo local sobre a execução de políticas públicas.
Será preciso apostar na desconcentração administrativa e financeira, alargando progressivamente as competências das administrações municipais e comunais, iniciando assim a desejada transferência de competências para órgãos eleitos mais próximos dos cidadãos para promover o desenvolvimento comunitário e local.
Neste contexto, não nos podemos esquecer das autoridades tradicionais, enquanto representantes das comunidades rurais e fiéis depositários da nossa história, da nossa cultura e das nossas tradições.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

Como já referimos, vamos priorizar o sector social, com uma séria aposta nos recursos humanos. Esta é a única via, se pretendemos realmente tirar o país do lugar em que se encontra no que respeita a vários indicadores de desenvolvimento humano e de desenvolvimento económico.
A adopção de práticas correctas, seja no exercício público, seja no âmbito da sociedade, vai exigir das famílias, das escolas, das igrejas e das demais organizações da sociedade civil, o reforço dos valores morais, da coesão social e do patriotismo.
Para além da necessidade da erradicação da fome e do combate à pobreza através de um programa integrado, vamos lutar pelo empoderamento e apoio às famílias mais desfavorecidas, tendo em vista a ascensão social de um bom número de famílias angolanas, tanto no meio urbano como no meio rural.
Continuaremos a incluir na agenda governamental, a protecção e valorização das crianças e da juventude, a garantia da equidade do género, a valorização e protecção do idoso e dos antigos combatentes e veteranos da Pátria.
No domínio da habitação, prosseguiremos com a implementação do programa de fomento habitacional e vamos incrementar a aposta na construção dirigida, sobretudo em benefício dos jovens casais e dos jovens quadros.
Vamos trabalhar para garantir o pleno funcionamento dos hospitais e centros de saúde, com respeito pelos princípios éticos e pelos valores que devem nortear a deontologia profissional. O nosso objectivo será, para os próximos cinco anos, reduzir consideravelmente as actuais taxas de mortalidade e de mortalidade infantil, com o concurso das unidades sanitárias públicas e privadas, bem como com a reactivação do programa de educação para a saúde.
Vamos orientar o sector da saúde no sentido da criação de um sistema de avaliação de hospitais, centros de saúde e clínicas, feito por uma entidade independente, que nos permita passar a prestar aos cidadãos informação correcta a respeito da qualidade dos serviços de saúde em cada unidade sanitária.
O domínio da educação é aquele a que dedicaremos uma atenção muito especial, no quadro do projecto de capacitação dos quadros angolanos, de modo que possam competir com os demais. O Executivo continuará a encarar a educação como um direito constitucional, que deve ser garantido a todas as angolanas e a todos os angolanos.
Isso vai exigir de nós uma aposta clara e permanente na equidade do sistema de ensino, na educação pré-escolar, na qualidade do ensino primário, na qualidade do subsistema de formação de professores, na reforma do sistema de administração e gestão escolar, na reforma curricular tendo em conta as especificidades regionais e na valorização da carreira docente a todos os níveis do nosso sistema de educação e ensino.
O Executivo vai trabalhar no sentido de diminuir a taxa de analfabetismo e vai investir decididamente no ensino técnico-profissional e no ensino especial.
Estará no centro das nossas preocupações a necessidade de adopção de uma política de fomento do livro e da leitura, que inclua a isenção de direitos alfandegários e impostos na importação de livros escolares e dos destinados às bibliotecas.
O investimento na qualidade do ensino superior universitário e politécnico será outra grande aposta do Executivo nos próximos anos, com vista à criação de um modelo de ensino superior que esteja mais de acordo com as práticas universais.

Caros Convidados,
Minhas Senhoras e Meus Senhores,

Durante o nosso mandato, propomo-nos realizar uma ampla divulgação dos museus, monumentos e sítios que integram o património histórico, cultural, arquitectónico e natural de Angola, para seu usufruto por parte da população e para o fomento do turismo.
Um importante passo na cruzada da diplomacia cultural foi a recente classificação pela UNESCO do Centro Histórico de Mbanza Congo como Património Mundial, o que dignifica enormemente o nosso país, a nossa história e o nosso povo, assim como a história universal.
O Reino do Congo foi dos mais importantes reinos de África, de onde, embora forçados, saíram africanos para todo o mundo, levando consigo a sua cultura, traduzida em religiões, música, dança e rituais de origem bantu, deste modo espalhando pelo mundo a nossa identidade. Assume igualmente primordial importância a aceitação das candidaturas a Património Mundial do Corredor do Cuanza, das pinturas rupestres de Tchitundo-Hulo e do Cuito Cuanavale.
Este último local é também memória da luta libertadora do nosso povo, pelo seu simbolismo na defesa e preservação da paz e pelo seu significado na história do nosso país, da África Austral e do nosso continente em geral, tendo o monumento comemorativo da histórica e lendária batalha aí ocorrida sido inaugurado há poucos dias pelo Presidente José Eduardo dos Santos.
O desporto deve também assumir uma dimensão inspiradora e formativa, de modo a permitir construir uma Angola fraterna, mais inclusiva e em que as barreiras do preconceito e da intolerância vão sendo derrubadas. Reconhecemos que as nossas e os nossos desportistas têm sabido honrar, além-fronteiras, o Hino e a Bandeira nacionais, unindo ainda mais o povo angolano.
Neste mandato, vamos incentivar o desporto escolar, regressar aos campeonatos escolares e aos campeonatos universitários e exigir aos dirigentes das infra-estruturas desportivas maior responsabilidade na sua conservação e gestão.

Excelências,
Minhas Senhoras e Meus Senhores,

Na minha nova qualidade de Comandante-em-Chefe das Forças Armadas Angolanas, quero, antes de mais, saudar os oficiais generais, almirantes, oficiais superiores, capitães, oficiais subalternos, sargentos e praças, bem como os oficiais e agentes da Polícia Nacional e dos Serviços de Inteligência.
Vamos continuar a priorizar a preservação da unidade e coesão nacional, a preservação da paz e da estabilidade e a diminuição dos índices de criminalidade urbana e de delinquência juvenil.
Vamos ocupar-nos em modernizar as Forças Armadas Angolanas e dar passos sólidos tendentes à criação de uma indústria de defesa.
Reforçaremos a competência operativa da Polícia Nacional e dos órgãos de inteligência, dando primazia à acção preventiva, não descurando a melhoria da acção dos serviços de investigação criminal, com garantia de superação e actualização profissional.

Estimados Convidados,
Minhas Senhoras e Meus Senhores,

A República de Angola conquistou por mérito próprio um lugar de realce no concerto das nações. Neste sentido, devemos continuar a pugnar pela manutenção de relações de amizade e cooperação com todos os povos do mundo, na base dos princípios de não ingerência nos assuntos internos e da reciprocidade de vantagens, cooperando com todos os países para a salvaguarda da paz, da justiça e do progresso da Humanidade.
No que diz respeito às relações no continente africano, será dada prioridade aos países vizinhos, na base de relações de boa vizinhança e de cooperação. Dada a sua proximidade, essas são relações importantes para a defesa, a segurança e o desenvolvimento da subregião austral, sem descurar obviamente os países da SADC, com os quais Angola partilha afinidades geopolíticas.
A União Africana ocupa um lugar de suma importância para Angola e, por essa razão, o nosso país deverá permanecer como um dos maiores contribuintes para o seu orçamento.
Vamos conduzir uma politica de aproximação aos países da Comunidade Económica dos Estados da África Ocidental (CEDEAO), com vista à troca de informações no domínio da segurança, para a prevenção e combate ao terrorismo.
Angola deve, pois, manter o seu papel de actor importante na manutenção da paz na sua subregião, actuando de maneira firme nas organizações das quais faz parte.
Pela sua importância histórica e pela necessidade de continuar a cultivar os laços forjados no período da conquista e consolidação das nossas independências, a relação com os Países Africanos de Língua Portuguesa (PALOP) vai estar sempre presente nas nossas opções.
Trabalharemos no sentido de garantir uma maior presença de angolanos no sistema das Nações Unidas, na União Africana e nas organizações regionais, o que pressupõe uma maior aposta na formação e acompanhamento de jovens angolanos para futuras campanhas diplomáticas.
Angola dará primazia a importantes parceiros, tais como os Estados Unidos da América, a República Popular da China, a Federação Russa, a República Federativa do Brasil, a Índia, o Japão, a Alemanha, a Espanha, a França, a Itália, o Reino Unido, a Coreia do Sul e outros parceiros não menos importantes, desde que respeitem a nossa soberania.
Quanto à diplomacia económica, ela é uma das mais importantes vertentes da nossa política externa, quer ao nível estritamente económico e comercial do relacionamento bilateral, regional e multilateral, quer na promoção da imagem do país no exterior, tanto de expectativa da exportação de bens e serviços, como na captação de investimento directo estrangeiro.
Pretendemos, pois, reanalisar o papel a assumir por Angola na actual conjuntura regional e internacional, dando primazia aos contactos com os parceiros interessados, reforçando a participação das representações diplomáticas angolanas na captação do investimento estrangeiro e na promoção do acesso ao conhecimento científico, técnico e tecnológico, contribuindo para que os empresários e industriais angolanos estejam mais presentes em África, com uma maior aposta no comércio regional e na produção interna para exportação.

Angolanas e Angolanos,
Minhas Senhoras e Meus Senhores,

Como é fácil de constatar, são enormes os desafios que temos pela frente, de modo a conduzirmos com êxito os destinos do nosso país, a honrarmos os heróis da nossa história e a prepararmos um futuro melhor para as actuais e as gerações vindouras.
Teremos um mandato que vai ser marcado pelo reforço da importância do cidadão, de modo que os seus anseios e expectativas constem permanentemente da agenda do Executivo.
Vamos reforçar a ligação e a colaboração institucional entre os três poderes do Estado, para que cada um deles cumpra o seu papel e a sua acção independente, contribuindo assim para o reforço do nosso jovem sistema democrático.
O nosso lema será: “Renovação e transformação na continuidade – Melhorar o que está bem e corrigir o que está mal”.
Vou procurar auscultar os diferentes estratos da população e os vários grupos organizados da sociedade civil, pois só assim poderemos executar com êxito a acção governativa. Apelamos, pois, ao apoio de todos nesta difícil caminhada.

Angolanas e Angolanos,
Caros Concidadãos,

Quero renovar os agradecimentos pelo voto de confiança que, enquanto eleitores, depositaram na minha pessoa e no meu Partido.
Quero também agradecer em especial à formação política a que pertenço e à minha esposa e filhos, pelo apoio prestado e pelo apoio que espero continuar a receber, para levar a bom porto a missão que me foi confiada pelo Povo angolano.
Gostaria, ao terminar, de assumir publicamente o meu comprometimento com as acções e os projectos que aqui apresentei. E quero garantir a cada angolana e a cada angolano que darei o melhor dos meus esforços para servir com humildade o Estado e o Povo angolano.

Viva a Democracia!
Viva Angola!
Muito Obrigado!

Fonte: Jornal de Angola

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)