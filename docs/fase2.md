# Fase 2 — Planejamento de Medição (top-down, com rastreabilidade)

## Introdução
Esta fase define **como medir** antes de medir. Partimos das prioridades da Fase 1 — **adequação funcional**, **eficiência de desempenho** e **manutenibilidade** — e organizamos um plano **top-down**: metas claras, perguntas que realmente precisamos responder e métricas operacionais com leitura previamente combinada. As escolhas seguem o **GQM (Goal–Question–Metric)** e o **processo de medição da ISO/IEC 15939**; as características vêm da **ISO/IEC 25010** e as métricas são especificadas com base na **ISO/IEC 25023** e descritas pelos elementos da **ISO/IEC 25021**. Para interpretar desempenho, adotaremos convenções amplamente aceitas (**Google SRE**; **APDEX**, quando útil). Toda coleta manterá **rastreabilidade** entre meta, pergunta, métrica e contexto técnico (versão, dataset, ambiente), garantindo comparabilidade e decisão objetiva.

## Objetivo
Transformar as prioridades da Fase 1 em um **plano executável de medição**, com:
1) **metas de medição** alinhadas às três características;  
2) **perguntas de avaliação** que conectem metas e dados;  
3) **métricas operacionais** com definição, fórmula, unidade e fonte (ISO/IEC 25021/25023);  
4) **critérios e limiares** importados das referências e **calibrados** após o primeiro *baseline*;  
5) **rastreabilidade ponta a ponta** (Goal → Question → Metric → Evidência → Decisão).

## Metodologia
Adotamos um fluxo **top-down** e iterativo.

**1) Como o Goal é estruturado**  
Cada meta (Goal) será escrita padronizadamente para eliminar ambiguidades:
- **Analisar**: *[entidade]* (função/módulo/processo/sistema);  
- **Com o propósito de**: *entender / controlar / melhorar*;  
- **Com respeito a**: *[característica de qualidade]* (p.ex., corretude, desempenho, manutenibilidade);  
- **Do ponto de vista de**: *[stakeholder]*;  
- **No contexto de**: *[ambiente/limites]*.  
*Exemplo breve*: “Analisar as recomendações do MEPA, com o propósito de **controlar** corretude/completude, do ponto de vista do gestor, no contexto de dados anonimizados e ambiente de referência.”

**2) Derivação de Perguntas (Question)**  
Para cada meta, formulamos perguntas que, se respondidas, permitem afirmar sucesso. A ideia é cortar métricas supérfluas e focar no que sustenta a decisão (ex.: “as recomendações coincidem com um **oracle** regulatório?”, “qual o **p95** sob carga representativa?”, “qual o **esforço típico** para incorporar nova regra?”).

**3) Especificação de Métricas (Metric)**  
Cada pergunta recebe métricas com **definição operacional**: nome, fórmula, unidade, fonte, método de coleta e frequência (ISO/IEC 25021).  
– Em **adequação funcional**, mediremos corretude/precisão e completude de requisitos críticos testados.  
– Em **desempenho**, mediremos latência (p50/p95/p99), throughput e utilização de recursos, incluindo eficiência de escalabilidade.  
– Em **manutenibilidade**, acompanharemos Maintainability Index, complexidade, cobertura, duplicação/smells e *lead time* de mudanças.

**4) Critérios e limiares (interpretação a priori)**  
Os **valores de referência** serão **importados das normas e convenções** (ISO/IEC 25023; Google SRE; Sonar/Radon; APDEX quando couber) e **recalibrados após o primeiro baseline**, conforme **IEEE 1061** e **ISO/IEC 15939**. O documento de critérios listará “o que significa ficar acima/abaixo” **sem fixar números definitivos neste momento** — o ajuste é orientado a objetivo e contexto.

**5) Coleta e rastreabilidade**  
A coleta ocorrerá com **scripts versionados** e dados **reprodutíveis** (reais anonimizados + sintéticos com *oracle* independente). Cada execução registrará **GoalID, QuestionID, MetricID, DatasetID, CommitSHA, versão, hardware, configuração, seed, timestamp e responsável**, garantindo reprodutibilidade e auditoria.

---

## Referências Bibliográficas
- **ISO/IEC 15939** — *Software Measurement Process*.  
- **ISO/IEC 25010** — *System and Software Quality Models*.  
- **ISO/IEC 25023** — *Measurement of System and Software Product Quality*.  
- **ISO/IEC 25021** — *Quality Measure Elements*.  
- **IEEE Std 1061** — *Software Quality Metrics Methodology*.  
- **Basili, V. R.; Rombach, H. D.** — *Goal–Question–Metric (GQM)*.  
- **Google SRE** — *Golden Signals* (latency, traffic/throughput, errors, saturation).  
- **Apdex Alliance** — *Application Performance Index (APDEX)*.  
- **IEEE COMPUTER SOCIETY.** *SWEBOK Guide V4.0a*. IEEE, 2025. Disponível em: https://computer.org/swebok

## Bibliografia
- **MEPA – Monitoramento de Energia em Plataforma Aberta.** Disponível em: https://gitlab.com/lappis-unb/projects/SMI/mepa

---

## Histórico de Versões

| **Data**   | **Versão** | **Descrição**                                                         | **Autor**                                   | **Revisor**                               | **Data da Revisão** |
|:---------:|:----------:|:----------------------------------------------------------------------|:-------------------------------------------:|:------------------------------------------:|:-------------------:|
| **12/10/2025** | **`1.0`** | **Fase 2 — versão inicial (*Introdução, Objetivo e Metodologia*)** | **[`@arthrok` — Arthur Alves Melo](https://github.com/arthrok)** | **[`@Fabio`](https://github.com/fabinsz)** | **12/10/2025** |

