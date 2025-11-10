# **Fase 3 — Planejamento da Avaliação**

## **Introdução**

Esta fase define o **planejamento da avaliação da qualidade do MEPA**, com base nas métricas e objetivos estabelecidos na Fase 2. O propósito é **estruturar como a avaliação será conduzida**, especificando métodos, escopo, recursos e critérios de julgamento para garantir uma coleta e análise de dados **consistentes e rastreáveis**.

O planejamento assegura que a verificação das características de **Adequação Funcional**, **Eficiência de Desempenho** e **Manutenibilidade** ocorra de forma **sistemática e alinhada às normas ISO/IEC 25010 e 25023**, servindo de base para a execução prática na próxima fase.

---

## **Objetivo da Avaliação**

O objetivo da avaliação é **verificar e evidenciar a qualidade do MEPA** frente às características priorizadas, conforme definidas no plano de medição da Fase 2, a saber:

| **Característica**                  | **Propósito da Avaliação**                                                                                                              |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Adequação Funcional (G-AF)**      | Avaliar se o sistema fornece recomendações corretas, completas e robustas em comparação a resultados esperados (“oracle”).              |
| **Eficiência de Desempenho (G-PE)** | Medir a capacidade do sistema de processar grandes volumes de dados com bom throughput, baixa latência e consumo eficiente de recursos. |
| **Manutenibilidade (G-MT)**         | Avaliar o quão fácil é compreender, modificar e testar o código-fonte, garantindo sua sustentabilidade a longo prazo.                   |

---

## **Metodologia da Avaliação**

O processo de planejamento segue o modelo **GQM (Goal–Question–Metric)**, adotado na Fase 2, que assegura **rastreabilidade completa** entre as metas de avaliação, as perguntas que direcionam a análise e as métricas selecionadas.
A partir desse modelo, foram definidos **métodos e ferramentas específicas** capazes de gerar evidências objetivas para cada métrica, respeitando as recomendações das normas **ISO/IEC 25010**, **ISO/IEC 25023** e **ISO/IEC 15939**, bem como a metodologia de métricas da **IEEE 1061**.

Além disso, a equipe estruturou **checklists de verificação** que padronizam a execução e o registro dos resultados, assegurando que cada etapa de medição seja conduzida e validada de forma **reprodutível e comparável** entre as três dimensões avaliadas.
Esses checklists estão correlacionados diretamente aos IDs das métricas (M-XX-YY) e servem como **instrumento de controle de qualidade e rastreamento de conformidade** durante a execução da Fase 4.

---

## **Escopo da Avaliação**

A avaliação abrangerá as funcionalidades principais e os componentes de software diretamente relacionados aos **objetivos e métricas definidas no GQM da Fase 2**.

| **ID de Goal (Fase 2)** | **Escopo da Análise**                       | **Artefatos Avaliados**                                                             |
| ----------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------- |
| **G-AF-01**             | Módulo de recomendação e cálculo de tarifas | Casos de teste (pytest) com datasets conhecidos (“oracle”)                          |
| **G-PE-01**             | Fluxo “analisar → recomendar”               | Execução sob carga (Locust) e coleta de métricas de desempenho (Prometheus/Grafana) |
| **G-MT-01**             | Código-fonte principal e módulos auxiliares | Repositório MEPA no GitLab, relatórios do SonarQube                                 |

**Limitações:**

* Serão usados ambientes de testes e homologação, além de dados simulados, preservando a integridade do sistema em produção.

---

## **Método de Avaliação**

A metodologia adotada combina **análise automatizada, testes experimentais e inspeção baseada em métricas**.
Cada característica terá uma abordagem específica, rastreável às métricas da Fase 2.

### Adequação Funcional (G-AF)

* **Método:** Execução de casos de teste automatizados via `pytest`, comparando saídas com resultados esperados (oracle).
* **Procedimento:**

    1. Selecionar amostras de faturas e contratos com resultados esperados validados.
    2. Executar os testes e calcular métricas M-AF-01 a M-AF-03.
    3. Registrar acertos, falhas e casos de borda.

* **Ferramenta:** `pytest`, `pytest-cov`.

### Eficiência de Desempenho (G-PE)

* **Método:** Testes de carga com `Locust` e coleta de métricas de recursos com `Prometheus` e `Grafana`.
* **Procedimento:**

    1. Executar o fluxo “analisar → recomendar” com diferentes tamanhos de lote.
    2. Medir throughput (M-PE-01), latência (M-PE-02), saturação (M-PE-03) e eficiência de escala (M-PE-04).
    3. Analisar logs e gráficos de consumo de CPU/RAM.

* **Ferramenta:** `Locust`, `Prometheus`, `Grafana`.

### Manutenibilidade (G-MT)

* **Método:** Análise estática automatizada do código-fonte via `SonarQube`.
* **Procedimento:**

    1. Rodar pipeline de análise no repositório MEPA.
    2. Coletar métricas M-MT-01 a M-MT-04 (MI, CC, cobertura, dívida técnica).
    3. Exportar relatório consolidado.

* **Ferramenta:** `SonarQube`.

---

## **Métricas a Serem Avaliadas**

| **Goal**    | **Question** | **Métrica (ID)**                             | **Método / Ferramenta** | **Evidência esperada**             |
| ----------- | ------------ | -------------------------------------------- | ----------------------- | ---------------------------------- |
| **G-AF-01** | Q-AF-01      | M-AF-01 – Taxa de Corretude                  | pytest                  | % de acertos frente ao oracle      |
|             | Q-AF-02      | M-AF-02 – Cobertura de Requisitos Funcionais | pytest + pytest-cov     | % de requisitos testados           |
|             | Q-AF-03      | M-AF-03 – Taxa de Falhas em Casos de Borda   | pytest                  | % de falhas em dados atípicos      |
| **G-PE-01** | Q-PE-01      | M-PE-01 – Throughput (faturas/s)             | Locust                  | Relatório de vazão                 |
|             | Q-PE-02      | M-PE-02 – Latência (p95)                     | Locust                  | Tempo médio e percentis            |
|             | Q-PE-02      | M-PE-03 – Saturação (CPU/RAM)                | Prometheus              | Gráficos de consumo                |
|             | Q-PE-03      | M-PE-04 – Eficiência de Escalabilidade       | Locust + Grafana        | Relação carga × desempenho         |
| **G-MT-01** | Q-MT-01      | M-MT-01 – Maintainability Index              | SonarQube               | Valor de MI consolidado            |
|             | Q-MT-02      | M-MT-02 – Complexidade Ciclomática Média     | SonarQube               | Média por módulo                   |
|             | Q-MT-03      | M-MT-03 – Cobertura de Teste                 | SonarQube               | % de cobertura total               |
|             | Q-MT-04      | M-MT-04 – Dívida Técnica                     | SonarQube               | Ratio e tempo estimado de correção |

---

## **Recursos Necessários**

| **Tipo**                     | **Descrição / Ferramentas**                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| **Ambiente de Avaliação**    | VM de teste ou homologação do MEPA com Prometheus/Grafana configurados.            |
| **Ferramentas Técnicas**     | SonarQube, Locust, pytest, Prometheus, Grafana.                                          |
| **Materiais de Apoio**       | Conjunto de faturas e contratos validados (oracle), documentação técnica do MEPA, GQM da Fase 2. |
| **Equipe Envolvida**         | 6 integrantes divididos em pares (execução e revisão).                                   |
| **Critério de Rastreamento** | Cada resultado será identificado pelo respectivo ID GQM (Goal–Question–Metric).          |

---

## **Critérios de Julgamento**

Os resultados serão interpretados conforme **limiares normativos e contextuais** definidos na Fase 2.
Abaixo, um resumo dos critérios de leitura para cada grupo de métricas.

### Adequação Funcional

| **Métrica** | **Condição Esperada**            | **Critério de Julgamento** |
| ----------- | -------------------------------- | -------------------------- |
| M-AF-01     | ≥ 95% de acertos                 | Conforme                   |
| M-AF-02     | ≥ 80% de requisitos cobertos     | Aceitável                  |
| M-AF-03     | ≤ 5% de falhas em casos de borda | Conforme                   |

### Eficiência de Desempenho

| **Métrica** | **Condição Esperada**                  | **Critério de Julgamento** |
| ----------- | -------------------------------------- | -------------------------- |
| M-PE-01     | Throughput mantém-se estável sob carga | Conforme                   |
| M-PE-02     | p95 < 2s                               | Aceitável                  |
| M-PE-03     | CPU < 80%, RAM < 75%                   | Conforme                   |
| M-PE-04     | Escalabilidade ≥ 80% linear            | Aceitável                  |

### Manutenibilidade

| **Métrica** | **Condição Esperada** | **Critério de Julgamento** |
| ----------- | --------------------- | -------------------------- |
| M-MT-01     | MI ≥ 80               | Bom                        |
| M-MT-02     | CC média ≤ 10         | Aceitável                  |
| M-MT-03     | Cobertura ≥ 80%       | Bom                        |
| M-MT-04     | Dívida Técnica ≤ 5%   | Aceitável                  |

---

## **Checklist de Verificação da Avaliação**

| **Etapa**    | **Item de Verificação**                                    | **Status** |
| ------------ | ---------------------------------------------------------- | ---------- |
| Configuração | Ambientes de teste prontos (SonarQube, Locust, Prometheus) | ☐          |
| Execução     | Scripts e datasets validados (teste de carga, arquivos de testes...)   | ☐          |
| Registro     | Relatórios de cada ferramenta coletados                    | ☐          |
| Análise      | Resultados consolidados e comparados aos limiares          | ☐          |
| Revisão      | Validação por revisor técnico                              | ☐          |

---

## **Cronograma de Execução Planejado**

| **Período** | **Atividade / Métrica Avaliada**                                          | **Ferramenta**              | **Responsáveis (Par)** | **Revisores (Par Diferente)** |
| ----------- | ------------------------------------------------------------------------- | --------------------------- | ---------------------- | ----------------------------- |
| Semana 1    | Preparação dos ambientes e datasets (pytest, Locust, SonarQube)           | —                           | Arthur & Wallyson      | Felipe & Fábio                |
| Semana 2    | Execução de testes de **Adequação Funcional (G-AF-01 → M-AF-01~03)**      | pytest                      | Davi & Mateus          | Arthur & Wallyson             |
| Semana 2    | Execução de testes de **Eficiência de Desempenho (G-PE-01 → M-PE-01~04)** | Locust + Prometheus/Grafana | Arthur & Wallyson      | Felipe & Fábio                |
| Semana 2    | Execução da análise de **Manutenibilidade (G-MT-01 → M-MT-01~04)**        | SonarQube                   | Felipe & Fábio         | Davi & Mateus                 |
| Semana 3    | Consolidação e revisão dos resultados parciais                            | —                           | Todos                  | —                             |
| Semana 3    | Revisão cruzada final e preparação do relatório da Fase 4                 | —                           | Arthur & Wallyson      | Davi & Mateus                 |

---

## **Referências Bibliográficas**

* ISO/IEC 25010 — *System and Software Quality Models* (2011).
* ISO/IEC 25023 — *Measurement of System and Software Product Quality* (2016).
* ISO/IEC 15939 — *Measurement Process* (2017).
* IEEE Std 1061-1998 — *Software Quality Metrics Methodology*.
* Basili, V.R.; Rombach, H.D. — *The TAME Project: Towards Improvement-Oriented Software Environments* (1988).
* Beyer et al. — *Site Reliability Engineering* (O’Reilly, 2016).
* MEPA – *Monitoramento de Energia em Plataforma Aberta*. GitLab: [https://gitlab.com/lappis-unb/projects/SMI/mepa](https://gitlab.com/lappis-unb/projects/SMI/mepa).

---

## **Histórico de Versões**

| **Data**   | **Versão** | **Descrição**                                                                                       | **Autor(es)**                                                                                        | **Revisor(es)**                                                                      |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 09/11/2025 | `1.0`      | Criação da estrutura inicial do documento (Introdução, Objetivo e Metodologia)                      | [@arthrok](https://github.com/arthrok), [@davi-aguiar-vieira](https://github.com/davi-aguiar-vieira) | [@fabinsz](https://github.com/fabinsz)                                               |
| 09/11/2025 | `1.1`      | Elaboração do Escopo, Método de Avaliação e definição das métricas com rastreabilidade GQM          | [@arthrok](https://github.com/arthrok), [@devwallyson](https://github.com/devwallyson)               | [@felipej3ds](https://github.com/felipej3ds)                                         |
| 09/11/2025 | `1.2`      | Redação dos critérios de julgamento e inclusão das tabelas de métricas por característica           | [@arthrok](https://github.com/arthrok), [@fabinsz](https://github.com/fabinsz)                       | [@mateus](#)                                                                         |
| 09/11/2025 | `1.3`      | Inserção do checklist de verificação e do cronograma de execução com pares responsáveis e revisores | [@arthrok](https://github.com/arthrok), [@felipej3ds](https://github.com/felipej3ds)                 | [@davi-aguiar-vieira](https://github.com/davi-aguiar-vieira)                         |
| 09/11/2025 | `1.4`      | Revisão geral de coerência técnica e formatação final do documento                                  | [@arthrok](https://github.com/arthrok), [@mateus](#), [@devwallyson](https://github.com/devwallyson) | [@fabinsz](https://github.com/fabinsz), [@felipej3ds](https://github.com/felipej3ds) |
