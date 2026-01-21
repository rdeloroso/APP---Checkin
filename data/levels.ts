// Tema padrão: Check-in das Virtudes — O Caminho do Sábio
// Cada Level entrega: Virtude + Reflexão + Pergunta + Prática

export type LevelContent = {
  level: number;
  thresholdXp: number;
  virtue: string;
  reflection: string;
  question: string;
  practice: string;
};

export const LEVELS: LevelContent[] = [
  {
    level: 1,
    thresholdXp: 0,
    virtue: "Curiosidade",
    reflection:
      "A curiosidade abre portas invisíveis. Quem pergunta com sinceridade já começou a mudar.",
    question: "O que eu posso observar hoje sem me julgar?",
    practice:
      "Por 1 minuto, observe sua respiração e perceba o que seu corpo está tentando te dizer."
  },
  {
    level: 2,
    thresholdXp: 100,
    virtue: "Vontade",
    reflection:
      "A vontade não precisa gritar. Ela só precisa permanecer quando a empolgação some.",
    question: "Qual decisão simples eu posso sustentar hoje?",
    practice:
      "Escolha 1 hábito essencial e faça mesmo que seja o mínimo possível. Só não negocie com ele."
  },
  {
    level: 3,
    thresholdXp: 250,
    virtue: "Coragem",
    reflection:
      "Coragem não é ausência de medo. É agir apesar do medo, com dignidade e presença.",
    question: "O que eu estou adiando por medo de desconforto?",
    practice:
      "Faça agora a menor ação possível que te aproxime do que você está evitando (30 segundos)."
  },
  {
    level: 4,
    thresholdXp: 500,
    virtue: "Esperança",
    reflection:
      "Esperança não é fantasia. É a disciplina de acreditar que o próximo passo é possível.",
    question: "Onde eu preciso insistir sem dramatizar?",
    practice:
      "Escreva 1 frase: “Hoje, eu continuo porque…” e complete com honestidade."
  },
  {
    level: 5,
    thresholdXp: 850,
    virtue: "Persistência",
    reflection:
      "Persistência é o talento de recomeçar sem transformar isso em derrota.",
    question: "O que eu posso repetir hoje com leve firmeza?",
    practice:
      "Reforce seu hábito mais importante com uma versão pequena: 2 minutos já contam como presença."
  },
  {
    level: 6,
    thresholdXp: 1300,
    virtue: "Disciplina",
    reflection:
      "Disciplina não é prisão. É direção. Ela te devolve liberdade aos poucos.",
    question: "O que eu trato como opcional, mas me forma como pessoa?",
    practice:
      "Defina um horário fixo para 1 hábito essencial hoje. Faça quando o relógio bater."
  },
  {
    level: 7,
    thresholdXp: 1850,
    virtue: "Adaptabilidade",
    reflection:
      "Adaptar não é ceder. É ajustar o caminho sem abandonar o propósito.",
    question: "Como eu posso melhorar o plano sem desistir dele?",
    practice:
      "Se o dia estiver difícil, reduza pela metade a meta de um hábito, mas cumpra."
  },
  {
    level: 8,
    thresholdXp: 2500,
    virtue: "Criatividade",
    reflection:
      "Criatividade é coragem com imaginação. É ver alternativas onde antes só havia repetição.",
    question: "Qual nova forma eu posso tentar hoje sem perfeccionismo?",
    practice:
      "Faça 5 minutos de algo criativo: escrever, desenhar, rascunhar ideias, sem julgar o resultado."
  },
  {
    level: 9,
    thresholdXp: 3250,
    virtue: "Alegria",
    reflection:
      "Alegria não é euforia. É uma forma de gratidão silenciosa pelo que já existe.",
    question: "O que eu posso apreciar hoje sem precisar conquistar nada?",
    practice:
      "Escolha um detalhe pequeno do seu dia e agradeça de verdade por ele (em voz baixa ou escrita)."
  },
  {
    level: 10,
    thresholdXp: 4100,
    virtue: "Generosidade",
    reflection:
      "Generosidade é abundância interna. Quem se torna melhor, melhora o mundo ao redor.",
    question: "Como eu posso ser útil hoje sem me anular?",
    practice:
      "Envie uma mensagem sincera de incentivo para alguém, sem esperar resposta."
  },
  {
    level: 11,
    thresholdXp: 5050,
    virtue: "Paciência",
    reflection:
      "Paciência é confiança no tempo. Nem tudo floresce no ritmo da ansiedade.",
    question: "O que eu preciso deixar amadurecer sem forçar?",
    practice:
      "Durante 2 minutos, desacelere deliberadamente: ande mais lento, respire mais fundo, aceite o ritmo."
  },
  {
    level: 12,
    thresholdXp: 6100,
    virtue: "Determinação",
    reflection:
      "Determinação é a capacidade de não negociar com aquilo que é essencial.",
    question: "Qual compromisso eu preciso tratar como lei hoje?",
    practice:
      "Faça primeiro o que você costuma empurrar. Só 5 minutos. O começo muda tudo."
  },
  {
    level: 13,
    thresholdXp: 7250,
    virtue: "Responsabilidade",
    reflection:
      "Responsabilidade é reconhecer que cada escolha constrói uma versão sua.",
    question: "Qual escolha eu preciso assumir sem desculpas?",
    practice:
      "Escreva 1 decisão do dia e assine: “Eu escolho isso porque…”"
  },
  {
    level: 14,
    thresholdXp: 8500,
    virtue: "Compaixão",
    reflection:
      "Compaixão é firmeza com ternura. Primeiro com você, depois com o mundo.",
    question: "Onde eu estou me cobrando com crueldade?",
    practice:
      "Troque uma autocrítica por uma frase de apoio realista: “Eu posso melhorar sem me destruir.”"
  },
  {
    level: 15,
    thresholdXp: 9850,
    virtue: "Integridade",
    reflection:
      "Integridade é ser o mesmo em silêncio. É quando o caráter não precisa de plateia.",
    question: "O que eu faria hoje se ninguém fosse ver?",
    practice:
      "Escolha um gesto pequeno de honestidade consigo mesmo: cumprir algo que você prometeu em segredo."
  },
  {
    level: 16,
    thresholdXp: 11300,
    virtue: "Sabedoria",
    reflection:
      "Sabedoria é simplicidade refinada. É ver o essencial e soltar o excesso.",
    question: "O que está me distraindo do que realmente importa?",
    practice:
      "Elimine uma distração por 1 hora hoje. Só uma. Perceba o impacto."
  },
  {
    level: 17,
    thresholdXp: 12850,
    virtue: "Amor",
    reflection:
      "Amor é presença aplicada. É cuidado constante, não apenas sentimento.",
    question: "Quem eu posso cuidar melhor hoje, começando por mim?",
    practice:
      "Faça um ato de cuidado: hidratação, uma refeição melhor, ou descanso real por 5 minutos."
  },
  {
    level: 18,
    thresholdXp: 14500,
    virtue: "Inspiração",
    reflection:
      "Inspiração é quando o espírito encontra direção. Ela não é sorte, é ambiente.",
    question: "O que eu consumo que me eleva ou me enfraquece?",
    practice:
      "Troque 10 minutos de conteúdo raso por algo que te fortaleça: leitura, oração, estudo, silêncio."
  },
  {
    level: 19,
    thresholdXp: 16250,
    virtue: "Harmonia",
    reflection:
      "Harmonia é alinhamento. Quando o que você faz combina com o que você acredita.",
    question: "Onde minha vida está desalinhada do meu propósito?",
    practice:
      "Ajuste uma coisa pequena: seu horário, seu ambiente ou sua prioridade. Só um ajuste hoje."
  },
  {
    level: 20,
    thresholdXp: 18100,
    virtue: "Gratidão",
    reflection:
      "Gratidão não ignora problemas. Ela fortalece a alma para enfrentá-los sem amargura.",
    question: "O que eu tenho hoje que antes eu só pedia?",
    practice:
      "Escreva 3 gratidões com detalhe real. Não genéricas. Específicas e verdadeiras."
  },
  {
    level: 21,
    thresholdXp: 20050,
    virtue: "Clareza",
    reflection:
      "Clareza é poder. Quando você enxerga, você escolhe melhor. Quando escolhe melhor, evolui.",
    question: "O que eu preciso enxergar sem romantizar?",
    practice:
      "Liste 1 verdade que você vem evitando. Leia em voz baixa e aceite, sem drama."
  },
  {
    level: 22,
    thresholdXp: 22100,
    virtue: "Conhecimento",
    reflection:
      "Conhecimento sem prática é peso. Conhecimento com ação vira liberdade.",
    question: "Qual coisa pequena eu posso aplicar hoje do que eu já sei?",
    practice:
      "Pegue uma ideia que você já aprendeu e faça 1 ação concreta em 5 minutos."
  },
  {
    level: 23,
    thresholdXp: 24250,
    virtue: "Transcendência",
    reflection:
      "Transcender é não viver só no impulso do momento. É lembrar do que é maior.",
    question: "O que eu estou alimentando que me diminui?",
    practice:
      "Pare por 2 minutos e pergunte: “Isso me aproxima do meu melhor ou do meu pior?” Escolha o melhor."
  },
  {
    level: 24,
    thresholdXp: 26500,
    virtue: "Equilíbrio",
    reflection:
      "Equilíbrio não é dividir igual. É dar o necessário para cada parte da sua vida.",
    question: "O que está em excesso e o que está em falta?",
    practice:
      "Ajuste um extremo hoje: reduza um excesso ou aumente um cuidado em falta. Pequeno, mas real."
  },
  {
    level: 25,
    thresholdXp: 28850,
    virtue: "Serenidade",
    reflection:
      "Serenidade é força silenciosa. É saber que você não precisa reagir a tudo.",
    question: "O que eu posso deixar passar sem perder minha dignidade?",
    practice:
      "Escolha uma situação hoje e responda mais devagar. Respire 3 vezes antes de agir."
  },
  {
    level: 26,
    thresholdXp: 31300,
    virtue: "Iluminação",
    reflection:
      "Iluminação não é um raio mágico. É enxergar a si mesmo com verdade e agir com retidão.",
    question: "Qual hábito me aproxima da luz, mesmo quando ninguém vê?",
    practice:
      "Faça um ato de retidão silenciosa: cumprir o essencial sem anunciar, sem negociar."
  },
  {
    level: 27,
    thresholdXp: 33850,
    virtue: "Unidade",
    reflection:
      "Unidade é lembrar que tudo está conectado. Quando você melhora, algo melhora junto.",
    question: "O que eu faço que impacta os outros, mesmo sem intenção?",
    practice:
      "Faça um gesto de reconciliação: um pedido de desculpas, uma gentileza, ou um silêncio respeitoso."
  },
  {
    level: 28,
    thresholdXp: 36500,
    virtue: "Plenitude",
    reflection:
      "Plenitude é estar inteiro. Sem fugir do agora, sem se dividir em mil distrações.",
    question: "Onde eu estou ausente enquanto meu corpo está presente?",
    practice:
      "Faça 5 minutos de presença total: sem celular, sem música, só você e o momento."
  },
  {
    level: 29,
    thresholdXp: 39250,
    virtue: "Eternidade",
    reflection:
      "Eternidade é perspectiva. Você não é apenas o dia de hoje. Você é a soma do que repete.",
    question: "O que eu quero que permaneça em mim daqui a 10 anos?",
    practice:
      "Escreva 1 linha: “Eu quero ser alguém que…” e deixe essa frase visível hoje."
  },
  {
    level: 30,
    thresholdXp: 42100,
    virtue: "Legado",
    reflection:
      "Legado é o que fica quando você não está. Seu caráter ensina mais do que suas palavras.",
    question: "Que exemplo eu estou deixando com meu modo de viver?",
    practice:
      "Escolha 1 virtude e pratique deliberadamente hoje. Não como meta. Como identidade."
  }
];
