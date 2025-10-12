# Fase 2 — Planejamento de Medição (top-down, com rastreabilidade)

## Introdução
Com base no que foi priorizado na Fase 1 — **adequação funcional**, **eficiência de desempenho** e **manutenibilidade** — esta fase se limita a **planejar a medição**: definir o que será medido, por que será medido e como interpretar os resultados de forma rastreável. O produto aqui é um conjunto de **metas, perguntas e métricas candidatas**, acompanhado de **critérios de leitura** por qualidade. Este planejamento servirá de **base direta para a Fase 3**, quando serão definidos meios de execução (ambientes, ferramentas e procedimentos).

## Objetivo
Transformar as prioridades da Fase 1 em um **plano executável de medição**, estabelecendo:
1) **metas de medição** alinhadas às três características;  
2) **perguntas de avaliação** que conectam metas e dados;  
3) **métricas operacionais** com definição, fórmula, unidade e fonte (conforme elementos de medida) (ISO/IEC 25021, 2012) [5];  
4) **critérios e limiares interpretativos** oriundos de normas e convenções, a serem **calibrados após o primeiro baseline** (IEEE 1061, 1998; ISO/IEC 15939, 2017) [6][2];  
5) **rastreabilidade ponta a ponta** (Goal → Question → Metric → Evidência → Decisão).

## Metodologia
Para esta fase, iremos **empregar o GQM (Goal–Question–Metric)** como estrutura de raciocínio: primeiro explicitamos a **meta** de avaliação, depois derivamos as **perguntas** que precisam ser respondidas e, por fim, indicamos as **métricas** que objetivamente respondem a essas perguntas — de modo que **cada medida esteja ancorada em um objetivo explícito e em um contexto de decisão** (Basili; Rombach, 1988) [1]. O processo de medição que envolve planejar, coletar, analisar e comunicar os resultados segue as atividades definidas na **ISO/IEC 15939** (ISO/IEC 15939, 2017) [2]. As **características de qualidade** de referência são as do **ISO/IEC 25010** (ISO/IEC 25010, 2011) [3], e a **seleção/descrição das métricas** é feita com base no catálogo do **ISO/IEC 25023** e nos **elementos de medida do ISO/IEC 25021** (ISO/IEC 25023, 2016; ISO/IEC 25021, 2012) [4][5]. Para interpretar **desempenho**, adotaremos convenções amplamente utilizadas, como os **golden signals** (latência, vazão, erros, saturação), e, quando couber, **APDEX** para percepção de tempo de resposta (Beyer et al., 2016; Apdex Alliance, 2006) [7][8]. A **governança de metas e limiares** seguirá o princípio de que **valores são orientados a objetivo e contexto e devem ser revisados após o baseline**, conforme a **IEEE 1061** (IEEE 1061, 1998) [6] e as orientações de melhoria contínua no **SWEBOK** (IEEE Computer Society, 2025) [9].

**Como o Goal será escrito (formato padronizado GQM):**
- **Analisar**: *[entidade]* (função/módulo/processo/sistema);  
- **Com o propósito de**: *entender / controlar / melhorar*;  
- **Com respeito a**: *[característica de qualidade]*;  
- **Do ponto de vista de**: *[stakeholder]*;  
- **No contexto de**: *[ambiente/limites]*.  
*Exemplo breve*: “Analisar as recomendações do MEPA, com o propósito de **controlar** corretude/completude, do ponto de vista do gestor, no contexto de dados anonimizados e ambiente de referência.”

**Derivação de Questions:** para cada Goal, formulamos perguntas que, se respondidas, permitem declarar sucesso, evitando métricas supérfluas (p. ex., “as recomendações coincidem com um **oracle** regulatório?”, “qual o p95 sob carga representativa?”, “qual o esforço para incorporar nova regra?”).

**Especificação de Metrics:** cada pergunta recebe métricas com **definição operacional** (nome, fórmula, unidade, fonte, método de coleta, frequência), sem executar nada nesta fase; a calibração numérica fica para o baseline da Fase 3 (ISO/IEC 25021, 2012; ISO/IEC 25023, 2016) [5][4].

**Critérios por qualidade:** para **adequação funcional**, descrevemos o que significa estar **acima/abaixo do esperado** em termos de corretude/precisão e completude; para **desempenho**, como ler latência, vazão e saturação em conjunto; para **manutenibilidade**, como interpretar índice de manutenibilidade, complexidade, cobertura e duplicação/“smells”. Os **números concretos** serão definidos **após** a primeira rodada de medições (baseline) (IEEE 1061, 1998; ISO/IEC 15939, 2017) [6][2].

**Rastreabilidade mínima:** toda métrica receberá **GoalID, QuestionID e MetricID** e estará vinculada aos requisitos priorizados na Fase 1; metadados (versão, dataset, ambiente, configuração) serão especificados para aplicação na Fase 3.

---

## Referências Bibliográficas
1. <a id="ref1"></a>**Basili, V. R.; Rombach, H. D.** The TAME Project: Towards Improvement-Oriented Software Environments. *IEEE Transactions on Software Engineering*, 14(6), 1988.  
2. <a id="ref2"></a>**ISO/IEC 15939** — *Systems and Software Engineering — Measurement Process* (2017).  
3. <a id="ref3"></a>**ISO/IEC 25010** — *Systems and Software Quality Models* (2011). Disponível em: <https://iso25000.com/index.php/en/iso-25000-standards/iso-25010>.  
4. <a id="ref4"></a>**ISO/IEC 25023** — *Measurement of System and Software Product Quality* (2016). Disponível em: <https://iso25000.com/index.php/en/iso-25000-standards/iso-25023>.  
5. <a id="ref5"></a>**ISO/IEC 25021** — *Quality Measure Elements* (2012). Disponível em: <https://iso25000.com/index.php/en/iso-25000-standards/iso-25021>.  
6. <a id="ref6"></a>**IEEE Std 1061-1998** — *IEEE Standard for a Software Quality Metrics Methodology* (1998).  
7. <a id="ref7"></a>**Beyer, B.; Jones, C.; Petoff, J.; Murphy, N.** *Site Reliability Engineering* (O’Reilly, 2016). Introduz os “golden signals”. Disponível em: <https://sre.google/sre-book/>.  
8. <a id="ref8"></a>**Apdex Alliance.** *Application Performance Index (APDEX)* (2006). Disponível em: <https://www.apdex.org/>.  
9. <a id="ref9"></a>**IEEE Computer Society.** *SWEBOK Guide V4.0a* (2025). Disponível em: <https://computer.org/swebok>.

> **Citações clicáveis:** (Basili; Rombach, 1988) [1], (ISO/IEC 15939, 2017) [2], (ISO/IEC 25010, 2011) [3], (ISO/IEC 25023, 2016) [4], (ISO/IEC 25021, 2012) [5], (IEEE 1061, 1998) [6], (Beyer et al., 2016) [7], (Apdex Alliance, 2006) [8], (IEEE Computer Society, 2025) [9].

---

## Bibliografia
- **MEPA – Monitoramento de Energia em Plataforma Aberta.** Disponível em: <https://gitlab.com/lappis-unb/projects/SMI/mepa>.

---

## Histórico de Versões

| **Data**      | **Versão** | **Descrição**                                                         | **Autor**                                                    | **Revisor**                              | **Data da Revisão** |
|:-------------:|:----------:|:----------------------------------------------------------------------|:------------------------------------------------------------:|:----------------------------------------:|:-------------------:|
| **12/10/2025** | **`1.0`**  | **Fase 2 — versão inicial (*Introdução, Objetivo e Metodologia*)**   | **[`@arthrok` — Arthur Alves Melo](https://github.com/arthrok)** | **[`@Fabio`](https://github.com/fabinsz)** | **12/10/2025** |

