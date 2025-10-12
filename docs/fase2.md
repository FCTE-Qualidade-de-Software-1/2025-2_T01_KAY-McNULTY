# Fase 2 — Planejamento de Medição (top-down, com rastreabilidade)

## Introdução
Com base no que foi priorizado na Fase 1 — **adequação funcional**, **eficiência de desempenho** e **manutenibilidade** — esta fase se limita a **planejar a medição**: definir o que será medido, por que será medido e como interpretar os resultados de forma rastreável. O produto aqui é um conjunto de **metas, perguntas e métricas candidatas**, acompanhado de **critérios de leitura** por qualidade. Este planejamento servirá de **base direta para a Fase 3**, quando serão definidos os meios de execução (ambientes, ferramentas e procedimentos).

## Objetivo
Transformar as prioridades da Fase 1 em um **plano detalhado de medição**, estabelecendo:
1) **metas de medição** alinhadas às três características;  
2) **perguntas de avaliação** que conectam metas e dados;  
3) **métricas operacionais** com definição, fórmula, unidade e fonte (conforme elementos de medida) (ISO/IEC 25021, 2012) [5];  
4) **critérios e limiares interpretativos** oriundos de normas e convenções, a serem **calibrados após o primeiro baseline** (IEEE 1061, 1998; ISO/IEC 15939, 2017) [6][2];  
5) **rastreabilidade ponta a ponta** (Goal → Question → Metric → Evidência → Decisão).

## Metodologia
Para esta fase, iremos **empregar o GQM (Goal–Question–Metric)** como estrutura de raciocínio: primeiro explicitamos a **meta** de avaliação, depois derivamos as **perguntas** que precisam ser respondidas e, por fim, indicamos as **métricas** que objetivamente respondem a essas perguntas — de modo que **cada medida esteja ancorada em um objetivo explícito e em um contexto de decisão** (Basili; Rombach, 1988) [1]. O processo de medição que envolve planejar, coletar, analisar e comunicar os resultados segue as atividades definidas na **ISO/IEC 15939** (ISO/IEC 15939, 2017) [2]. As **características de qualidade** de referência são as do **ISO/IEC 25010** (ISO/IEC 25010, 2011) [3], e a **seleção/descrição das métricas** é feita com base no catálogo do **ISO/IEC 25023** e nos **elementos de medida do ISO/IEC 25021** (ISO/IEC 25023, 2016; ISO/IEC 25021, 2012) [4][5]. Para interpretar **desempenho**, adotaremos as convenções dos **golden signals** (latência, vazão/tráfego, erros, saturação) (Beyer et al., 2016) [7]. A **governança de metas e limiares** seguirá o princípio de que **valores são orientados a objetivo e contexto e devem ser revisados após o baseline**, conforme a **IEEE 1061** (IEEE 1061, 1998) [6] e as orientações de melhoria contínua no **SWEBOK** (IEEE Computer Society, 2025) [9].

**Como o Goal será escrito (formato padronizado GQM):**
- **Analisar**: *[entidade]* (função/módulo/processo/sistema); **com o propósito de**: *entender/ controlar/ melhorar*; **com respeito a**: *[característica de qualidade]*; **do ponto de vista de**: *[stakeholder]*; **no contexto de**: *[ambiente/limites]*.  
*Exemplo:* Analisar as recomendações do MEPA para **controlar** corretude/completude, do ponto de vista do **gestor**, no contexto de **dados anonimizados e ambiente de referência**.

**Derivação de Questions:** para cada Goal, formulamos perguntas que, se respondidas, permitem declarar sucesso, evitando métricas supérfluas (p.ex., “as recomendações coincidem com um **oracle** regulatório?”, “qual o p95 sob carga representativa?”, “qual o esforço para incorporar nova regra?”).

**Especificação de Metrics:** cada pergunta recebe métricas com **definição operacional** (nome, fórmula, unidade, fonte, método de coleta, frequência), sem executar nada nesta fase; a calibração numérica fica para o baseline da Fase 3 (ISO/IEC 25021, 2012; ISO/IEC 25023, 2016) [5][4].

**Critérios por qualidade:** para **adequação funcional**, descrevemos o que significa estar **acima/abaixo do esperado** em termos de corretude/precisão e completude; para **desempenho**, como ler latência, vazão e saturação em conjunto; para **manutenibilidade**, como interpretar índice de manutenibilidade, complexidade, cobertura e duplicação/“smells”. Os **números concretos** serão definidos **após** a primeira rodada de medições (baseline) (IEEE 1061, 1998; ISO/IEC 15939, 2017) [6][2].

**Rastreabilidade mínima:** toda métrica receberá **GoalID, QuestionID e MetricID** e estará vinculada aos requisitos priorizados na Fase 1; metadados (versão, dataset, ambiente, configuração) serão especificados para aplicação na Fase 3.

---

## GQM — Eficiência de Desempenho (foco em *Throughput*)

> **Relação com a Fase 1:** a Fase 1 definiu **Eficiência de Desempenho** como prioridade alta e destacou a necessidade de **processar grandes volumes rapidamente** para não atrasar decisões administrativas. O *throughput* materializa “**quanto processamos no tempo disponível**”.  
> *(Anchor sugerido: [Fase 1 — Eficiência de Desempenho (Performance Efficiency)](https://fcte-qualidade-de-software-1.github.io/2025-2_T01_KAY-McNULTY/fase1/#eficiencia-de-desempenho-performance-efficiency)).*

### Goal (G-PE-01)
Analisar o fluxo **analisar→recomendar** do MEPA, com o propósito de **entender e controlar** a **eficiência de desempenho**, do ponto de vista da **equipe de engenharia e operações**, no contexto de **cargas representativas e ambiente de referência**.

### Questions
| ID | Pergunta de Avaliação |
| :--- | :--- |
| **Q-PE-01** | Qual é o **throughput sustentável** do fluxo principal em cargas representativas? |
| **Q-PE-02** | Como **latência** e **saturação de recursos** se comportam quando o throughput cresce? |
| **Q-PE-03** | O sistema mantém **estabilidade** ao longo do tempo e com variações de carga? |

### Métricas candidatas
| ID | Métrica | Definição Operacional |
| :--- | :--- | :--- |
| **M-PE-01** | **Throughput** (faturas/tempo) | Capacidade efetiva entregue (vazão). |
| **M-PE-02** | **Latência** (p50/p95/p99) E2E | Experiência típica e de cauda do tempo de resposta. |
| **M-PE-03** | **Saturação** (CPU/RAM) sob carga | Margem operacional e utilização de recursos. |
| **M-PE-04** | **Eficiência de escalabilidade** | Ganho de *throughput* por incremento de recurso (proporcionalidade). |

### Por que medir *throughput*
O *throughput* indica a **capacidade efetiva** do MEPA: verifica se os **lotes cabem na janela operacional** (requisito da Fase 1), orienta **SLOs** e mostra **onde otimizar** (gargalo estrutural vs. escala saudável). É um dos **golden signals** usados para guiar **capacidade, confiabilidade e custo** (Beyer et al., 2016) [7].

### Critérios & interpretação
- **Leitura integrada:** *throughput* “acima do esperado” é o que **fecha os lotes no tempo planejado** **sem** aumento anormal de **latência** ou **saturação**. Se a taxa cai ou a latência explode, priorizamos *profiling* e correções de gargalo.  
- **De onde vêm os “valores”?**  
  - **Normas** (ISO/IEC 25023) definem *o que medir* (taxa de processamento, tempos de resposta, utilização), mas **não impõem números universais**; os limiares devem refletir **contexto e objetivo**.  
  - **SRE** recomenda manter **folga de capacidade** e usar **quantis** de latência para garantir consistência (Beyer et al., 2016) [7].  
  - **Fase 1** fornece o **requisito de negócio** que vira alvo: *“processar lote X no intervalo Y sem atrasar decisões”*. Esse requisito é o **ponto de partida** para o **valor-alvo de throughput**.  
- **Quando definimos números concretos:** na **Fase 3**, após o **baseline**, fixamos metas **quantitativas** (taxa mínima por tempo, teto de quantil de latência, headroom de CPU/RAM), conforme **ISO/IEC 15939** e **IEEE 1061** [2][6].

#### Referências e leitura por métrica
| Métrica | Referência(s) | Interpretação |
| :--- | :--- | :--- |
| **M-PE-01** — Throughput | ISO/IEC 25023 [4] + Golden Signals [7] | **Acima** = cumpre a demanda da Fase 1. **Abaixo** = sinal de gargalo ou capacidade subdimensionada. |
| **M-PE-02** — Latência (quantis) E2E | ISO/IEC 25023 [4] + uso de quantis SRE [7] |  **Acima** = experiência consistente; **Atenção** = cauda alongada/instabilidade; **Abaixo (piorando)** = risco de estourar a janela mesmo com bom throughput. |
| **M-PE-03** — Saturação (CPU/RAM) | Golden Signals [7] + 25023 [4] | **Acima** = operação com folga; **Atenção** = aproximação de saturação que afeta latência; **Abaixo (excesso de folga)** = possível ineficiência/overprovisioning (avaliar com throughput). |
| **M-PE-04** — Eficiência de escalabilidade | ISO/IEC 25023 (escalabilidade) [4] | **Acima** = ganho proporcional (ou próximo) com mais recurso; **Atenção** = ganho marginal decrescente precoce; **Abaixo** = contenção/lock/arquitetura limitando escala. |

---

## GQM — Adequação Funcional (foco em *Corretude*)

> **Relação com a Fase 1:** A Fase 1 estabeleceu a **Adequação Funcional** como a principal prioridade, pois a função central do MEPA é gerar recomendações que levem à economia de recursos. Uma recomendação incorreta não apenas anula o propósito do software, como pode causar prejuízos financeiros, tornando a **corretude** dos cálculos e das lógicas de negócio um requisito não-negociável.
> *(Anchor sugerido: [Fase 1 — Adequação Funcional (Functional Suitability)](https://fcte-qualidade-de-software-1.github.io/2025-2_T01_KAY-McNULTY/fase1/#adequacao-funcional-functional-suitability))*

### Goal (G-AF-01)

Analisar o **módulo de geração de recomendações** do MEPA, com o propósito de **controlar e validar** a sua **adequação funcional**, do ponto de vista do **gestor de energia (usuário final)**, no contexto de um **conjunto de dados de teste com resultados conhecidos (oracle)**.

### Questions
| ID | Pergunta de Avaliação |
| :--- | :--- |
| **Q-AF-01** | As recomendações geradas pelo sistema são **corretas** quando comparadas a um gabarito validado? |
| **Q-AF-02** | O sistema cobre todos os **cenários e regras contratuais** especificados como requisitos? |
| **Q-AF-03** | Qual a **robustez** do sistema ao processar dados de entrada válidos, mas complexos ou atípicos (casos de borda)? |

### Métricas candidatas
| ID | Métrica | Definição Operacional |
| :--- | :--- | :--- |
| **M-AF-01** | **Taxa de Corretude (Accuracy)** | Percentual de recomendações corretas em um *dataset* de validação. |
| **M-AF-02** | **Cobertura de Requisitos Funcionais por Testes** | Percentual de requisitos funcionais que possuem casos de teste automatizados para verificá-los. |
| **M-AF-03** | **Taxa de Falhas em Casos de Borda** | Percentual de falhas (erros, exceções) ao processar um conjunto de dados com casos de borda conhecidos. |

### Por que medir *Corretude*

A *corretude* é a materialização da principal proposta de valor do MEPA. Medir essa característica de forma objetiva, comparando a saída do software com um "oracle" (um conjunto de resultados esperados, calculados manualmente ou por um sistema de referência), é a única forma de garantir que o software cumpre sua função primária e gera confiança para o usuário final.

### Critérios & interpretação

  - **Leitura integrada:** Uma alta taxa de corretude (M-AF-01) só é confiável se a cobertura de requisitos (M-AF-02) também for alta. Uma baixa taxa de falhas em casos de borda (M-AF-03) indica que o sistema é robusto e não apenas funciona para os "casos felizes".
  - **De onde vêm os “valores”?**
      - **O "oracle":** A definição de "correto" virá de um conjunto de cenários (faturas, contratos, regras) cujo resultado ótimo é pré-calculado e validado por especialistas no domínio de energia elétrica. Este é o principal artefato para a medição.
      - **Requisitos:** Os requisitos funcionais definidos na Fase 1 e na documentação do projeto determinam o escopo do que deve ser testado (completude).
  - **Quando definimos números concretos:** Na **Fase 3**, o *baseline* será estabelecido ao executar os testes contra o oracle. A meta ideal para a corretude é 100%, e qualquer desvio exigirá uma análise de causa raiz.

#### Referências e leitura por métrica
| Métrica | Referência ISO | Interpretação |
| :--- | :--- | :--- |
| **M-AF-01** — Taxa de Corretude | ISO/IEC 25023 (Corretude Funcional) [4] | **Acima** (próximo de 100%) = o sistema é confiável. **Abaixo** = existem falhas na lógica de negócio que precisam ser corrigidas com urgência. A análise dos casos incorretos é mais importante que o número em si.. |
| **M-AF-02** — Cobertura de Requisitos | ISO/IEC 25023 (Completude Funcional) [4] | **Acima** = alta confiança de que funcionalidades implementadas foram verificadas. **Abaixo** = risco de comportamento inesperado em partes sem validação explícita. |
| **M-AF-03** — Taxa de Falhas em Casos de Borda | ISO/IEC 25023 (Robustez) [4] | **Acima** (próximo de 0%) = o sistema lida bem com a complexidade real. **Abaixo** (taxa de falhas > 0%) = fragilidades que podem levar a paradas inesperadas em produção. |

---

## GQM — Manutenibilidade (foco em Modificabilidade e Analisabilidade)

>**Relação com a Fase 1:** A Fase 1 definiu Manutenibilidade como prioridade média, destacando a necessidade de o sistema ser **facilmente modificável** devido à constante mudança regulatória no domínio de energia e **analisável/compreensível** para atrair e reter contribuições da comunidade de software livre.
>*(Anchor sugerido: [Fase 1 — Adequação Funcional (Functional Suitability)](https://fcte-qualidade-de-software-1.github.io/2025-2_T01_KAY-McNULTY/fase1/#Manutenibilidade-(Maintainability)))*

### Goal (G-MT-01)

Analisar o **código-fonte e a arquitetura** do MEPA, com o propósito de **entender e melhorar** a **manutenibilidade** (especialmente modificabilidade e analisabilidade), do ponto de vista da **equipe de desenvolvimento e da comunidade de software livre**, no contexto de **incorporação de novas regras de negócio e correção de falhas**.

### Questions

| ID | Pergunta de Avaliação |
| :--- | :--- |
| **Q-MT-01** | Qual o esforço técnico estimado para incorporar uma nova regra de negócio ou modificar uma existente (e.g., uma nova tarifa ou imposto)? |
| **Q-MT-02** | O design do código está alinhado a padrões que minimizam a complexidade e facilitam a compreensão por novos desenvolvedores? |
| **Q-MT-03** | Qual a qualidade e o grau de cobertura dos testes de unidade/integração para garantir que modificações não introduzam novos defeitos (regressão)? |

### Métricas candidatas

| ID | Métrica | Definição Operacional |
| :--- | :--- | :--- |
| **M-MT-01** | **Índice de Manutenibilidade (Maintainability Index - MI)** | Métrica composta que reflete o quão fácil o código é de manter (função de Complexidade Ciclomática, Lines of Code e Halstead Volume). |
| **M-MT-02** | **Complexidade Ciclomática Média (Average Cyclomatic Complexity - C.C.)** | Número médio de caminhos independentes por função ou módulo, indicando a complexidade lógica do código. |
| **M-MT-03** | **Cobertura de Teste de Código (Test Code Coverage - TCC)** | Percentual de linhas/branches/funções do código-fonte que são exercidas por testes automatizados. |
| **M-MT-04** | **Taxa de Dívida Técnica (Technical Debt Ratio - TDR)** | Razão entre o custo de correção dos *code smells* (dívida) e o custo de desenvolvimento do sistema. |

### Por que medir Manutenibilidade

A manutenibilidade é crucial para a **sustentabilidade** do MEPA. Medir métricas de código (como MI e C.C.) e de testes (TCC) fornece dados objetivos para:

* Reduzir o risco de obsolescência regulatória (facilitando a modificação das regras).
* Diminuir o custo de evolução e correção de falhas.
* Apoiar a colaboração, indicando onde o código é mais difícil de entender/modificar.

> A ISO/IEC 25010 define a manutenibilidade pelas subcaracterísticas de **Modificabilidade** (M-MT-01, M-MT-04) e **Analisabilidade** (M-MT-02).

### Critérios & Interpretação

#### Leitura Integrada
Um **alto** Índice de Manutenibilidade (**M-MT-01**) e uma **baixa** Complexidade Ciclomática Média (**M-MT-02**) indicam que o código é fácil de entender. Isso só é sustentável se for acompanhado por uma **alta Cobertura de Teste (M-MT-03)**, que protege contra a regressão de defeitos ao realizar as modificações inevitáveis. A Dívida Técnica (**M-MT-04**) deve ser monitorada para evitar a deterioração da qualidade ao longo do tempo.

#### De onde vêm os “valores”?
1.  **Convenções:** O **Índice de Manutenibilidade** tem limiares estabelecidos pela literatura (*e.g.*, MI abaixo de 65 é frequentemente considerado de alto risco). A **Complexidade Ciclomática** ideal para uma função individual deve ser baixa, tipicamente abaixo de 10. A **Cobertura de Teste** é um percentual, onde 80% ou mais é geralmente considerado um bom patamar de proteção para sistemas críticos.
2.  **Contexto:** O valor alvo da Cobertura de Teste deve ser **maior** nos módulos de regras de negócio (cálculo de tarifa, recomendação), que são a essência crítica do MEPA.
3.  **Definição Concreta:** Na Fase 3, após o baseline (primeira medição), fixamos limiares numéricos para cada métrica, conforme ISO/IEC 15939 e IEEE 1061. *Exemplo: "Manter MI acima de 75" ou "Garantir Cobertura de Linhas > 85% no módulo de cálculo de tarifa."*

### Referências e leitura por métrica

| Métrica | Referência ISO | Interpretação |
| :--- | :--- | :--- |
| **M-MT-01** — Índice de Manutenibilidade | ISO/IEC 25023 (Analisabilidade/Modificabilidade)[4] | **Acima** (Alto MI) = Fácil de modificar/entender. **Abaixo** (Baixo MI) = Alto risco de modificação; indica "código legado". |
| **M-MT-02** — Complexidade Ciclomática Média | ISO/IEC 25023 (Analisabilidade)[4] | **Baixa** (Ideal) = Código simples, fácil de testar. **Alta** (Atenção) = Funções muito grandes/complexas; propensas a falhas. |
| **M-MT-03** — Cobertura de Teste de Código | ISO/IEC 25023 (Testabilidade)[4] | **Alta** (Ideal) = Modificações seguras; alta proteção contra regressões. **Baixa** = Risco de quebrar funcionalidades existentes. |
| **M-MT-04** — Taxa de Dívida Técnica | ISO/IEC 25023 (Modificabilidade)[4] | **Baixa** (Ideal) = Custo de manutenção baixo. **Alta** = Alto esforço e tempo gastos na manutenção. |
---

## Referências Bibliográficas
1. <a id="ref1"></a>**Basili, V. R.; Rombach, H. D.** The TAME Project: Towards Improvement-Oriented Software Environments. *IEEE Transactions on Software Engineering*, 14(6), 1988.  
2. <a id="ref2"></a>**ISO/IEC 15939** — *Systems and Software Engineering — Measurement Process* (2017).  
3. <a id="ref3"></a>**ISO/IEC 25010** — *Systems and Software Quality Models* (2011). Disponível em: <https://iso25000.com/index.php/en/iso-25000-standards/iso-25010>.  
4. <a id="ref4"></a>**ISO/IEC 25023** — *Measurement of System and Software Product Quality* (2016). Disponível em: <https://iso25000.com/index.php/en/iso-25000-standards/iso-25023>.  
5. <a id="ref5"></a>**ISO/IEC 25021** — *Quality Measure Elements* (2012). Disponível em: <https://iso25000.com/index.php/en/iso-25000-standards/iso-25021>.  
6. <a id="ref6"></a>**IEEE Std 1061-1998** — *IEEE Standard for a Software Quality Metrics Methodology* (1998).  
7. <a id="ref7"></a>**Beyer, B.; Jones, C.; Petoff, J.; Murphy, N.** *Site Reliability Engineering* (O’Reilly, 2016). “Golden signals”. Disponível em: <https://sre.google/sre-book/>.  
8. <a id="ref8"></a>**IEEE Computer Society.** *SWEBOK Guide V4.0a* (2025). Disponível em: <https://computer.org/swebok>.

---

## Bibliografia
- **MEPA – Monitoramento de Energia em Plataforma Aberta.** Disponível em: <https://gitlab.com/lappis-unb/projects/SMI/mepa>.

---

## Histórico de Versões

| **Data**      | **Versão** | **Descrição**                                                                 | **Autor**                                                    | **Revisor**                                                | **Data da Revisão** |
|:-------------:|:----------:|:------------------------------------------------------------------------------|:------------------------------------------------------------:|:----------------------------------------------------------:|:-------------------:|
| **12/10/2025** | **`1.0`**  | **Fase 2 — versão inicial (*Introdução, Objetivo e Metodologia*)**           | **[`@arthrok` — Arthur Alves Melo](https://github.com/arthrok)** | **[`@Fabio`](https://github.com/fabinsz)**                 | **12/10/2025**      |
| **12/10/2025** | **`1.1`**  | **Inclusão do GQM — Eficiência de Desempenho (throughput) e critérios**      | **[`@arthrok` — Arthur Alves Melo](https://github.com/arthrok)** | **[`@Davia Aguiar`](https://github.com/davi-aguiar-vieira)** | **12/10/2025**      |
| **12/10/2025** | **`1.2`**  | **Inclusão do GQM — Adequação Funcional (foco em *Corretude*)**      | **[`@devwallyson `—  Wallyson Souza](https://github.com/devwallyson)** | **[`@Davia Aguiar`](https://github.com/davi-aguiar-vieira)** | **12/10/2025**      |
| **12/10/2025** | **`1.3`**  | **Inclusão do GQM — Manutenibilidade (foco em Modificabilidade e Analisabilidade)**      | **[`@fabinsz` - Fábio](https://github.com/fabinsz)** |  | **12/10/2025**      |
