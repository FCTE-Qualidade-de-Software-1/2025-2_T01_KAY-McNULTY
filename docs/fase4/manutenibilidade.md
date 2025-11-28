# Manutenibilidade (G-MT-01)

## Objetivo e Método
Avaliar o código-fonte quanto à facilidade de compreensão, modificação e sustentabilidade (G-MT-01), utilizando a análise estática automatizada via ferramenta **SonarQube**.

## STATUS: CONCLUÍDO

**Responsáveis:** Felipe & Fábio (Execução) / [Seu Nome] (Análise e Consolidação)

## Resultados Obtidos (Análise SonarQube)

| Métrica (ID) | Critério de Julgamento | Valor Medido (SonarQube) | Julgamento |
| :--- | :--- | :--- | :--- |
| **M-MT-01** – Maintainability Index (MI) | MI >= 80 (Bom) | **Nota A** (Score Geral) | **Bom** |
| **M-MT-02** – Complexidade Ciclomática Média | CC média <= 10 (Aceitável) | **Total: 2.495** (no diretório `src`) | **Atenção** |
| **M-MT-03** – Cobertura de Teste | Cobertura >= 80% (Bom) | **0,0%** | **CRÍTICO** |
| **M-MT-04** – Dívida Técnica (Ratio) | Dívida Técnica <= 5% (Aceitável) | **0,2%** | **Bom** |

## Evidências Visuais (SonarQube)

As imagens a seguir comprovam os dados coletados na análise estática do código-fonte.

### Visão Geral da Qualidade e Dívida Técnica (M-MT-01 e M-MT-04)

![Painel Geral do SonarQube mostrando Nota A em Manutenibilidade e 0.0% de Cobertura](../images/SolarQube%20-%20Geral.png)
Painel Geral de Qualidade e Manutenibilidade, mostrando 269 Questões abertas em Manutenibilidade.

![Tempo de Dívida Técnica estimado em 2 dias e 7 horas](../images/Divida%20tecnica.png)
Tempo Estimado para Correção da Dívida Técnica total: 2 dias e 7 horas.

![Relação da Dívida Técnica de 0.2% por diretório](../images/Ratio%20Divida%20tecnica.png)
Relação de Dívida Técnica de 0,2% em relação ao tempo total de desenvolvimento.

### Complexidade Ciclomática e Cobertura (M-MT-02 e M-MT-03)

![Complexidade Ciclomática total de 2495 distribuída por módulos](../images/Complexidade%20ciclomática%20módulos.png)
Complexidade Ciclomática (CC) total de 2.495, concentrada em `app` (1.380) e `components` (671).

![Gráfico de Cobertura de Testes mostrando 0.0% de cobertura](../images/Cobertura%20de%20testes.png)

## Discussão dos Resultados

### A. Dívida Técnica e Analisabilidade
O projeto recebeu **Nota A** em Manutenibilidade. A **Taxa de Dívida Técnica (TDR) é de 0,2%**, o que é um valor excelente. O tempo total estimado para resolver as **269 questões** de código (Code Smells) é de apenas **2 dias e 7 horas**. Isso demonstra que o código está saudável e a modificação estrutural tem um custo futuro muito baixo.

### B. Complexidade Ciclomática
A Complexidade Ciclomática total é de **2.495**. Esta complexidade está concentrada majoritariamente nos módulos **`app` (1.380)** e **`components` (671)**. Estes são os principais focos de esforço de compreensão e modificação no projeto, pois contêm a lógica central e os componentes da interface.

### C. Crise da Cobertura de Teste
O resultado mais crítico da avaliação é a **Cobertura de Teste de 0,0%**. Este resultado falha o critério de >= 80%. A ausência total de testes automatizados anula a segurança da Nota A de manutenibilidade. Sem testes, qualquer modificação introduz um **alto risco de regressão**, comprometendo a capacidade do sistema de evoluir de forma estável.

---

## Histórico de Versões

| **Data**   | **Versão** | **Descrição**                                                                                       | **Autor(es)**                                                                                        | **Revisor(es)**                                                                      |
| ---------- | ---------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 20/11/2025 | `1.0`      | Execução da análise de **Manutenibilidade (G-MT-01 → M-MT-01~04)**  SonarQube                |Felipe & Fábio   |                                              |
| 28/11/2025 | `1.1`      | Migração para página dedicada de Manutenibilidade                |Sistema   |                                              |
