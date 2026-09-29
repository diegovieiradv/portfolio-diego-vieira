import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Metric Flow",
    slug: "metric-flow",
    summary:
      "Dashboard de métricas de vendas que reúne resultado realizado, metas e projeções em uma única tela. Pensado para leitura rápida do estado da operação comercial.",
    description:
      "A ideia nasceu da necessidade de acompanhar visualmente o desempenho de uma operação comercial sem depender de relatórios espalhados. O conceito prevê um painel que junte vendas realizadas, progresso em relação às metas e projeções do período. Cada indicador apareceria em um bloco visual de leitura imediata, de modo que o gestor entenda o cenário antes de precisar reconstruí-lo.",
    problem:
      "Em operações comerciais, o acompanhamento de indicadores costuma ficar disperso em planilhas e relatórios que não se atualizam no mesmo ritmo da equipe. Com isso, o desvio de meta só aparece quando o período já fechou e a decisão chega tarde. O problema não é a falta de dados: é a dificuldade de vê-los juntos, na hora em que eles importam.",
    solution:
      "O painel pensado para isso reuniria as métricas da operação em uma tela só, organizadas em blocos de venda, meta, progresso e projeção. Os indicadores seriam agrupados por período e por time, evitando que a leitura exija montagem manual a cada reunião. O foco está na clareza do acompanhamento diário, não na complexidade dos cálculos.",
    audience:
      "Para gestores e líderes que precisam do estado da operação sem abrir planilhas, e para equipes de vendas que querem acompanhar a própria meta no mesmo lugar.",
    features: [
      "Painel principal com o valor vendido no período",
      "Acompanhamento de metas e progresso em relação ao objetivo",
      "Comparação entre meta definida e resultado atual",
      "Projeções de fechamento do período em andamento",
      "Indicadores de desempenho por time comercial",
      "Visualização gráfica da evolução das vendas",
      "Seleção de período para leitura de meses e trimestres",
    ],
    benefits: [
      "Leitura rápida do estado atual da operação",
      "Identificação de desvios de meta antes do fechamento do período",
      "Menos tempo montando relatórios manuais",
      "Decisões apoiadas em indicadores reunidos em um lugar só",
      "Time inteiro olhando para os mesmos números",
    ],
    roadmap: [
      "Selecionar o conjunto de indicadores que compõe o painel inicial",
      "Modelar a estrutura de vendas, metas e períodos",
      "Prototipar o layout dos blocos principais do dashboard",
      "Detalhar como as projeções são apresentadas ao usuário",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: true,
    category: "Full stack",
  },
  {
    title: "Sentinel",
    slug: "sentinel",
    summary:
      "Plataforma de observabilidade e gerenciamento de incidentes, com monitoramento dos serviços e um fluxo único para a resposta a problemas operacionais.",
    description:
      "O projeto imagina uma camada que acompanhe o estado dos serviços e registre os eventos relevantes de cada um. Quando algo sai do esperado, a plataforma organizaria a resposta: quem foi avisado, o que está em andamento e em que ponto o incidente está. A ideia é ligar monitoramento e tratamento em um processo contínuo, em vez de duas atividades separadas.",
    problem:
      "Equipes que cuidam de vários serviços dependem de alertas isolados e de conversa informal para perceber uma falha. Sem um registro comum, o histórico do incidente se perde na mensagem do dia e a mesma investigação é refazida na próxima ocorrência. É a desorganização na resposta que faz um problema pequeno durar mais do que deveria.",
    solution:
      "A solução pensada para isso centralizaria observabilidade e resposta em um fluxo único: acompanhamento dos serviços, identificação de incidentes e registro do andamento do atendimento. Cada incidente teria um ciclo claro, da detecção ao encerramento, com o contexto preservado. O valor está em converter reações improvisadas em um processo rastreável e repetível.",
    audience:
      "Para equipes de operação e de desenvolvimento que mantêm serviços em uso contínuo e precisam enxergar, em um lugar só, o que está saudável e o que precisa de atenção.",
    features: [
      "Acompanhamento do estado dos serviços em um painel único",
      "Registro dos eventos relevantes de cada serviço",
      "Identificação de incidentes a partir do comportamento observado",
      "Fluxo de tratamento com etapas definidas do alerta ao encerramento",
      "Histórico de incidentes com linha do tempo e contexto",
      "Classificação de severidade para orientar a prioridade",
      "Definição de responsáveis pelo atendimento de cada incidente",
    ],
    benefits: [
      "Visão única do estado dos serviços monitorados",
      "Resposta a incidentes mais organizada e previsível",
      "Contexto do problema preservado para análise posterior",
      "Menos retrabalho na investigação de problemas repetidos",
      "Comunicação mais clara durante o atendimento",
    ],
    roadmap: [
      "Mapear o ciclo de vida de um incidente, da detecção ao encerramento",
      "Levantar o que precisa ser observado em cada serviço",
      "Estruturar o registro de eventos e a origem dos alertas",
      "Desenhar o histórico de incidentes e os critérios de severidade",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: true,
    category: "Back-end",
  },
  {
    title: "Projeto Linux",
    slug: "projeto-linux",
    summary:
      "Distribuição GNU/Linux para estudantes e iniciantes em desenvolvimento de software, com o objetivo de reduzir o trabalho de preparação do ambiente de programação.",
    description:
      "A proposta parte de uma dificuldade comum: preparar um computador para programar exige instalar e configurar um grande número de ferramentas e dependências antes da primeira atividade. O projeto prevê um sistema que entregue um ambiente de estudo utilizável desde o início, sem exigir que o iniciante conheça cada etapa antes de começar. A manutenção desse ambiente ao longo do curso também faz parte do conceito.",
    problem:
      "Quem está começando a programar perde tempo — e muitas vezes desiste — configurando o computador antes de escrever a primeira linha de código. Cada ferramenta nova traz uma instalação, uma configuração e uma chance de erro que não têm relação com o que se quer aprender. Essa barreira inicial separa quem tem apoio de quem não tem, e ela aparece já na primeira semana.",
    solution:
      "O projeto pretende simplificar a preparação e a manutenção do ambiente de desenvolvimento, entregando um sistema orientado ao estudo de programação desde o primeiro uso. Em vez de montar o ambiente ferramenta por ferramenta, o usuário começaria com o essencial resolvido e manteria o ambiente com poucas intervenções. O foco está na experiência do primeiro dia, não na quantidade de aplicativos incluídos.",
    audience:
      "Para estudantes de cursos técnicos e superiores, pessoas em transição de carreira e autodidatas que querem começar a programar sem montar o ambiente manualmente.",
    features: [
      "Ambiente de desenvolvimento pronto para o primeiro contato com programação",
      "Redução das etapas manuais de instalação das ferramentas",
      "Orientação inicial sobre o que usar e em que ordem",
      "Manutenção simplificada do ambiente ao longo do estudo",
      "Configurações iniciais adequadas às atividades comuns de curso",
      "Documentação de apoio para as dúvidas mais frequentes do iniciante",
    ],
    benefits: [
      "Menos tempo perdido com instalação e configuração",
      "Início do estudo mais próximo do conteúdo de programação",
      "Menor dependência de ajuda externa para montar o ambiente",
      "Ambiente previsível entre estudantes do mesmo grupo",
      "Atualizações que não interrompem o trabalho em andamento",
    ],
    roadmap: [
      "Listar o que um iniciante realmente precisa nos primeiros meses de estudo",
      "Delimitar o escopo mínimo do ambiente inicial",
      "Planejar como as atualizações serão aplicadas sem travar o estudo",
      "Organizar a documentação de introdução ao ambiente",
      "Validar a proposta com um grupo de estudantes",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: true,
    category: "Sistemas",
  },
  {
    title: "FlowForge",
    slug: "flowforge",
    summary:
      "Plataforma de automação visual de workflows: etapas conectadas em um fluxo executável, com acompanhamento do que foi executado e do que falhou.",
    description:
      "O ponto de partida é simples: montar processos repetitivos por construção visual, ligando etapas em sequência até formar um fluxo completo. A intenção é que quem conhece o processo consiga desenhá-lo sem depender de alguém para conectar cada parte manualmente. O acompanhamento da execução faz parte do produto: é preciso saber o que rodou, onde parou e por quê.",
    problem:
      "Processos que dependem de tarefas repetitivas e de passagens de mão entre etapas consomem horas que poderiam ir para trabalho de maior valor. Muitas dessas automações existem apenas na cabeça de quem sempre fez a tarefa, o que deixa a operação frágil. Quando algo muda, ninguém enxerga onde o fluxo parou de funcionar.",
    solution:
      "A ideia é dispor de um ambiente visual de criação de workflows, no qual o usuário conecta etapas, define a ordem e dispara a execução. Cada fluxo teria seu histórico, com o resultado de cada etapa registrado e a falha localizada. A automação deixa de ser uma tarefa dispersa e passa a ser um processo nomeado, revisável e acompanhável.",
    audience:
      "Para times que executam processos com etapas encadeadas e querem reduzir o trabalho manual sem ficar dependentes de uma pessoa específica para manter cada automação.",
    features: [
      "Construção de fluxos pela conexão visual de etapas",
      "Biblioteca de etapas reutilizáveis entre diferentes fluxos",
      "Execução dos fluxos com registro do resultado de cada etapa",
      "Histórico de execuções concluídas e interrompidas",
      "Aviso quando um fluxo não chega ao fim",
      "Edição e reexecução de um fluxo já existente",
    ],
    benefits: [
      "Menos tarefas manuais repetitivas no dia a dia",
      "Processos registrados em vez de depender da memória de alguém",
      "Montagem rápida de um novo fluxo a partir de blocos existentes",
      "Visão do que foi executado e do que falhou",
      "Menos dependência de uma única pessoa para manter o processo",
    ],
    roadmap: [
      "Descrever o modelo de uma etapa e de um fluxo",
      "Escolher um processo real do dia a dia como caso inicial",
      "Estabelecer o acompanhamento das execuções e o tratamento de falhas",
      "Padronizar como os fluxos são organizados e reutilizados",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "Automação",
  },
  {
    title: "DevGuard AI",
    slug: "devguard-ai",
    summary:
      "Ferramenta de revisão inteligente de código e Pull Requests, que organiza o contexto das mudanças e aponta pontos de atenção para quem revisa.",
    description:
      "Posicionar uma camada de análise ao lado do desenvolvedor durante a revisão de um Pull Request é o núcleo da ideia: ela leria as mudanças propostas e devolveria observações organizadas. O objetivo não é substituir o julgamento de quem revisa, e sim encurtar o tempo entre abrir um PR e entender o que ele altera. O fluxo previsto é simples, do envio da mudança ao retorno das observações.",
    problem:
      "Revisar Pull Requests consome tempo desproporcional quando o conjunto de mudanças é grande ou quando o contexto de negócio não está claro. Pontos de atenção passam despercebidos por pressa, e os comentários de revisão repetem as mesmas observações a cada PR. Quem revisa acaba lendo alteração por alteração sem saber o que aquele conjunto pretendia resolver.",
    solution:
      "Para isso, a ferramenta analisaria as alterações propostas e devolveria um resumo do que mudou, possíveis problemas e perguntas para o autor. O desenvolvedor começaria a revisão com o contexto já montado, em vez de reconstruí-lo do zero. A decisão final continua com quem revisa; a ferramenta apenas organiza o ponto de partida.",
    audience:
      "Para desenvolvedores que revisam Pull Requests com frequência e para times que querem tornar a leitura de mudanças grandes mais rápida e mais consistente.",
    features: [
      "Resumo do que foi alterado em cada Pull Request",
      "Destaque de possíveis problemas e pontos de atenção",
      "Perguntas sugeridas para o autor da mudança",
      "Organização das observações por parte do código alterado",
      "Leitura de Pull Requests grandes dividida em blocos compreensíveis",
      "Registro das observações já levantadas em revisões anteriores",
    ],
    benefits: [
      "Menos tempo até entender o que um Pull Request mudou",
      "Revisões mais consistentes entre os membros do time",
      "Menos pontos de atenção deixando de ser vistos por pressa",
      "Menor repetição de comentários já feitos em revisões anteriores",
      "Entrada mais rápida para quem precisa revisar código fora da própria área",
    ],
    roadmap: [
      "Esboçar o fluxo de entrada, da abertura do PR à entrega das observações",
      "Priorizar os tipos de problema que a análise deve tentar reconhecer",
      "Definir o formato do resumo entregue ao revisor",
      "Validar a proposta em revisões reais do próprio trabalho",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "IA",
  },
  {
    title: "CloudVault",
    slug: "cloudvault",
    summary:
      "Armazenamento seguro de arquivos em nuvem com controle de acesso, permissões por pessoa e histórico de versões.",
    description:
      "O produto é desenhado em torno de três perguntas: quem pode ver, quem pode alterar e o que mudou. Para respondê-las, cada arquivo teria dono, regras de acesso e um histórico de versões consultável. Tratar a permissão como parte do arquivo, e não como configuração separada feita depois, é a premissa.",
    problem:
      "Arquivos importantes circulam por links genéricos e pastas compartilhadas sem controle real de quem tem acesso. Quando alguém altera um documento, a versão anterior desaparece e a dúvida sobre qual arquivo está correto vira discussão. O problema não é guardar os arquivos: é governar o acesso a eles e manter o histórico.",
    solution:
      "O conceito parte de um espaço de arquivos em nuvem com permissões por pessoa e por pasta, combinadas de forma previsível, e versionamento de cada alteração. Qualquer pessoa envolvida poderia consultar quem alterou o quê e recuperar uma versão anterior quando necessário. O foco está na governança do conteúdo, não apenas no espaço de armazenamento.",
    audience:
      "Para equipes que compartilham documentos com pessoas em níveis de acesso diferentes e para profissionais que precisam manter controle sobre versões de arquivos importantes.",
    features: [
      "Armazenamento de arquivos organizados em pastas com dono",
      "Permissões de visualização e de edição por pessoa",
      "Histórico de versões com data e autor de cada alteração",
      "Recuperação de uma versão anterior de um arquivo",
      "Registro de quem acessou e quem alterou cada arquivo",
      "Compartilhamento com nível de acesso definido no momento do envio",
    ],
    benefits: [
      "Controle claro sobre quem vê e quem altera cada arquivo",
      "Versões anteriores preservadas em vez de sobrescritas",
      "Menos discussão sobre qual documento está correto",
      "Rastreabilidade de acessos e alterações",
      "Compartilhamento externo com limite de permissão definido",
    ],
    roadmap: [
      "Modelar as permissões e como elas se combinam",
      "Estruturar o versionamento e a recuperação de arquivos anteriores",
      "Consolidar o registro de acessos e alterações",
      "Organizar a estrutura de pastas e as regras de compartilhamento",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "Back-end",
  },
  {
    title: "QueueFlow",
    slug: "queueflow",
    summary:
      "Sistema de gerenciamento de filas em tempo real, criado para organizar o atendimento e reduzir a incerteza sobre o tempo de espera.",
    description:
      "Ver a fila como um fluxo contínuo é a premissa: cada item teria posição, status e histórico visíveis tanto para quem atende quanto para quem espera. No lugar da organização improvisada — senha solta, planilha e ordem combinada por palavra —, o produto propõe um andamento previsível e observável. O acompanhamento em tempo real é o centro do produto.",
    problem:
      "Filas mal acompanhadas geram dúvida constante: quem é o próximo, quanto tempo falta e quem já foi atendido. Em ambiente com movimento alto, essa incerteza vira reclamação e sobrecarrega quem está no balção respondendo uma pergunta que o sistema deveria responder. A organização operacional também sofre, porque ninguém enxerga o volume real de espera.",
    solution:
      "Pensado para o balção, o sistema manteria a fila atualizada a cada entrada e a cada atendimento, exibindo posição, andamento e histórico. Quem organiza o atendimento teria visão do volume e do ritmo, em vez de estimar pelo olhar. A experiência pretendida é direta: entrar na fila, acompanhar o próprio lugar e ser chamado na ordem.",
    audience:
      "Para atendimentos presenciais com movimento constante — clínicas, balcões, secretarias e eventos — e para equipes que precisam acompanhar o volume da fila sem controle manual.",
    features: [
      "Entrada na fila com registro do horário de chegada",
      "Posição atual de cada pessoa na fila",
      "Acompanhamento do andamento do atendimento em tempo real",
      "Chamada da próxima pessoa na ordem definida",
      "Histórico de atendimentos do período",
      "Indicadores de volume e de ritmo de espera",
    ],
    benefits: [
      "Redução da incerteza sobre o tempo de espera",
      "Ordem de atendimento transparente para quem chega e para quem atende",
      "Visão de volume para quem organiza o balção",
      "Menos perguntas repetidas ao responsável pelo atendimento",
      "Registro do atendimento para conferência posterior",
    ],
    roadmap: [
      "Desenhar o modelo de entrada, de prioridade e de saída da fila",
      "Estruturar o acompanhamento em tempo real do andamento",
      "Esquematizar a visão operacional de volume e de ritmo",
      "Detalhar o histórico de atendimentos e os indicadores do período",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "Back-end",
  },
  {
    title: "DataPulse AI",
    slug: "datapulse-ai",
    summary:
      "Plataforma de análise de dados em linguagem natural: a pergunta sai em texto corrido e a resposta volta em linguagem de negócio.",
    description:
      "Trocar a interface de consulta por uma conversa é a aposta do produto: o usuário escreve a pergunta como falaria com um analista e recebe uma resposta acompanhada dos números que a sustentam. A plataforma deveria compreender a intenção por trás da pergunta e devolver leitura, não apenas uma tabela. O objetivo é aproximar quem decide dos dados que já existem no contexto dele.",
    problem:
      "Em muitas áreas os dados existem, mas ficam inacessíveis para quem precisa deles: a consulta exige conhecimento técnico e o caminho até a resposta depende de uma pessoa específica. Perguntas simples — qual mês teve o melhor resultado, onde o volume caiu — viram solicitação formal e fila de espera. A informação chega tarde e, muitas vezes, já desatualizada.",
    solution:
      "Para dar resposta a isso, a solução seria uma camada de análise por linguagem natural sobre os dados do próprio contexto do usuário. A pergunta seria interpretada, a análise montada e a resposta apresentada em termos de negócio, com o detalhe disponível para quem quiser conferir. A interação pretendida se parece mais com conversar com um analista do que com operar uma ferramenta de consulta.",
    audience:
      "Para gestores e profissionais que precisam responder perguntas sobre seus dados no dia a dia e que não têm acesso — nem tempo — para aprender consultas técnicas.",
    features: [
      "Campo de pergunta em linguagem natural sobre os dados disponíveis",
      "Resposta em texto com os números que sustentam a conclusão",
      "Aprofundamento da análise por perguntas de acompanhamento",
      "Apresentação de gráficos quando a comparação ajudar a leitura",
      "Indicação da origem dos dados usados em cada resposta",
      "Sugestão de perguntas frequentes para quem está começando",
    ],
    benefits: [
      "Acesso a análises sem depender de conhecimento de consulta técnica",
      "Resposta em minutos, em vez de passar por fila de solicitação",
      "Maior autonomia de quem toma decisão no dia a dia",
      "Linguagem de negócio no lugar de estruturas de dados",
      "Transparência sobre a origem de cada número apresentado",
    ],
    roadmap: [
      "Determinar o formato das perguntas e o tipo de resposta esperada",
      "Escolher o conjunto inicial de dados sobre o qual a análise incidirá",
      "Estruturar como a resposta apresenta números e comparações",
      "Catalogar as perguntas feitas para ampliar a cobertura",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "IA",
  },
  {
    title: "CivicFlow",
    slug: "civicflow",
    summary:
      "Solução colaborativa de acessibilidade urbana, onde as pessoas registram e organizam informações sobre barreiras e condições de circulação na cidade.",
    description:
      "O desenho prevê um espaço onde qualquer pessoa contribua com informações sobre acessibilidade — calçadas, travessias, barreiras, acessos — e onde essas contribuições sejam organizadas em um acervo comum. Dar visibilidade a problemas que quem vive a rotina já conhece, mas que raramente aparecem reunidos, é o propósito. O produto se apoia na colaboração: quanto mais gente registra, mais útil fica para os próximos.",
    problem:
      "Quem se desloca com mobilidade reduzida planeja trajetos com informação incompleta e desatualizada, quase sempre repassada de pessoa para pessoa. Quando uma calçada está interditada ou um acesso mudou, isso se espalha devagar e cada pessoa descobre o problema no caminho. Não falta vontade de ajudar: falta um lugar comum onde a informação seja registrada e encontrada.",
    solution:
      "O que se propõe é uma solução colaborativa de acessibilidade urbana: quem enxerga uma barreira registra, quem precisa da informação consulta, e as contribuições ficam organizadas por local e por tipo de questão. Cuidar da organização do conteúdo e da confiabilidade do que é publicado faz parte do produto. O valor está na soma das contribuições individuais em uma fonte única de referência.",
    audience:
      "Para quem se desloca com mobilidade reduzida, para cuidadores e familiares que planejam trajetos e para moradores que querem registrar o que encontram na própria rua.",
    features: [
      "Registro colaborativo de barreiras e condições de acessibilidade",
      "Organização das contribuições por local e por tipo de questão",
      "Consulta das informações antes de um deslocamento",
      "Avaliação e atualização das contribuições pela comunidade",
      "Destaque de problemas que se repetem em uma mesma região",
      "Sinalização de informações desatualizadas para revisão",
    ],
    benefits: [
      "Mais visibilidade para problemas de acessibilidade do dia a dia",
      "Informação reunida em um lugar só, em vez de dispersa",
      "Contribuição simples, feita por quem está no local",
      "Base comum para decidir trajetos e rotas do cotidiano",
      "Atualização contínua pela própria comunidade",
    ],
    roadmap: [
      "Especificar como uma contribuição é registrada e validada",
      "Organizar o conteúdo por local e por categoria",
      "Planejar a consulta das informações por quem se desloca",
      "Definir critérios para sinalizar conteúdo desatualizado",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "Full stack",
  },
  {
    title: "EcoGrid",
    slug: "ecogrid",
    summary:
      "Acompanhamento de consumo e desperdício de energia e água, com indicadores, histórico e metas para tornar a economia mensurável.",
    description:
      "Reunir o registro de consumo de energia e água em um painel com histórico, indicadores e comparações que façam sentido para quem usa é a base do produto. Cada pessoa poderia enxergar padrões — dias de maior consumo, meses atípicos, tendência do período — antes de procurar a causa. Assim, o produto aponta onde vale a pena agir, em vez de apenas listar números.",
    problem:
      "As contas de energia e água chegam consolidadas no fim do ciclo, quando o consumo já aconteceu. Sem histórico legível, não dá para saber se o mês ficou fora do padrão nem onde o desperdício ocorreu. O resultado é que hábitos que desperdiçam continuam iguais, porque ninguém os enxergou com clareza.",
    solution:
      "A aposta do projeto é converter o registro de consumo em indicadores acompanháveis ao longo do tempo: histórico, comparação entre períodos, identificação de picos e metas de redução. A pessoa veria onde o consumo sobe e poderia testar mudanças de hábito avaliando o resultado depois. O produto se apoia nas informações de consumo já disponíveis; seu papel é organizar e interpretar esses dados.",
    audience:
      "Para pessoas e famílias que querem reduzir a conta sem adivinhar onde economizar, e para pequenas organizações que precisam acompanhar o consumo dos próprios espaços.",
    features: [
      "Registro do consumo de energia e água ao longo do tempo",
      "Histórico mensal com comparação entre períodos",
      "Indicadores de consumo e de variação",
      "Identificação de picos e de meses fora do padrão",
      "Metas de redução com acompanhamento do progresso",
      "Resumo visual do desperdício identificado",
    ],
    benefits: [
      "Consumo compreensível, não apenas um número na conta",
      "Identificação de onde o desperdício acontece",
      "Comparação objetiva entre meses e períodos",
      "Metas que dão direção para a redução",
      "Decisão de economia apoiada em histórico, e não em sensação",
    ],
    roadmap: [
      "Modelar como o consumo é registrado e organizado por período",
      "Estruturar os indicadores e as comparações principais",
      "Planejar a identificação de picos e padrões fora do habitual",
      "Desenhar o modelo de metas e o acompanhamento da redução",
    ],
    technologies: [],
    status: "planejado",
    images: ["/projects/placeholder.png"],
    featured: false,
    category: "Full stack",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter((project) => project.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getProjectCategories(): string[] {
  return Array.from(new Set(projects.map((project) => project.category))).sort();
}
