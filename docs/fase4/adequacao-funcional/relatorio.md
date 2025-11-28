# RELATÓRIO DE TESTE DE QUALIDADE - ADEQUAÇÃO FUNCIONAL
## MEPA Energia - API (mec-energia-api)

---

## 1. INFORMAÇÕES DO PROJETO

**Projeto:** MEPA - Monitoramento de Energia em Plataforma Aberta  
**Componente Avaliado:** mec-energia-api (Backend - API REST)  
**Data da Avaliação:** 26 de novembro de 2025  
**Característica de Qualidade:** Adequação Funcional (ISO/IEC 25010)  
**Normas Aplicadas:** ISO/IEC 25010, ISO/IEC 25023, ISO/IEC 15939

---

## 2. SUMÁRIO EXECUTIVO

Este relatório documenta a avaliação de adequação funcional do sistema MEPA Energia, especificamente da API backend (mec-energia-api). A avaliação foi realizada utilizando os testes automatizados existentes no projeto, seguindo as métricas definidas nas fases 3 e 4 do documento.

### Resultados Principais:

- **Total de Testes Executados:** 259 testes
- **Testes Aprovados:** 258 (99,61%)
- **Testes Reprovados:** 0 (0%)
- **Testes Ignorados:** 1 (0,39%)
- **Cobertura de Código:** 68% (no modo completo de testes)
- **Tempo Total de Execução:** 93,55 segundos

---

## 3. FUNDAMENTAÇÃO TEÓRICA

### 3.1 Adequação Funcional (ISO/IEC 25010)

A adequação funcional é uma característica de qualidade de software que representa o grau em que um produto ou sistema fornece funções que atendem as necessidades declaradas e implícitas quando usado sob condições especificadas.

A adequação funcional é subdividida em três subcaracterísticas:

1. **Completude Funcional:** Grau em que o conjunto de funções cobre todas as tarefas e objetivos do usuário especificados.

2. **Corretude Funcional:** Grau em que um produto ou sistema fornece os resultados corretos com o grau de precisão necessário.

3. **Aptidão Funcional:** Grau em que as funções facilitam a realização de tarefas e objetivos especificados.

### 3.2 Métricas Utilizadas (Baseadas na Fase 3 e 4)

Segundo a documentação do projeto (Fase 3 - Planejamento da Avaliação), foram definidas as seguintes métricas para adequação funcional:

**Goal G-AF-01:** Avaliar se o sistema fornece recomendações corretas, completas e robustas em comparação a resultados esperados (oracle).

**Métricas Aplicadas:**

| Métrica | Descrição | Critério de Julgamento |
|---------|-----------|------------------------|
| **M-AF-01** | Taxa de Corretude | >= 95% de acertos |
| **M-AF-02** | Cobertura de Requisitos Funcionais | >= 80% de requisitos testados |
| **M-AF-03** | Taxa de Falhas em Casos de Borda | <= 5% de falhas em dados atípicos |

---

## 4. METODOLOGIA

### 4.1 Ambiente de Teste

- **Sistema Operacional:** Linux (Container Docker)
- **Python:** 3.11.9
- **Framework de Testes:** pytest 9.0.1
- **Django:** 5.1.14
- **Banco de Dados de Teste:** SQLite (in-memory)
- **Infraestrutura:** Docker Compose

### 4.2 Abordagem de Testes

A avaliação foi realizada utilizando os testes automatizados já implementados no projeto. Os testes cobrem:

1. **Testes de Unidade:** Validação de funções e métodos individuais
2. **Testes de Integração:** Validação da interação entre componentes
3. **Testes de API:** Validação dos endpoints REST
4. **Testes de Recomendação:** Validação do algoritmo principal do sistema

### 4.3 Procedimento de Execução

1. Análise da documentação do projeto ([doc](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/documentacao))
2. Estudo das métricas de adequação funcional (Fases 3 e 4)
3. Mapeamento dos testes existentes em [mec-energia-api/tests/](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/tree/develop/tests?ref_type=heads)
4. Execução da suite completa de testes
5. Coleta e análise de métricas
6. Geração do relatório

---

## 5. ANÁLISE DOS REQUISITOS FUNCIONAIS

### 5.1 Requisitos Identificados na Documentação

Baseado na documentação do projeto ([doc](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/documentacao)), o sistema MEPA possui os seguintes grupos de funcionalidades:

#### 5.1.1 Casos de Uso Principais

| ID | Caso de Uso | Usuário |
|----|-------------|---------|
| 1.x | Gerenciar Universidades | Administrador do Sistema |
| 2.x | Gerenciar Usuarios Administradores | Administrador do Sistema |
| 3.x | Gerenciar Usuarios Administradores da Universidade | Administrador da Universidade |
| 4.x | Gerenciar Usuarios Tecnicos | Administrador da Universidade |
| 5.x | Gerenciar Unidades Consumidoras | Administrador/Tecnico |
| 6.x | Gerenciar Contratos | Administrador/Tecnico |
| 7.x | Gerenciar Faturas | Administrador/Tecnico |
| 8.x | Gerenciar Distribuidoras | Administrador/Tecnico |
| 9.x | Gerenciar Tarifas | Administrador/Tecnico |
| 10.x | Visualizar Pendências | Administrador/Técnico |
| 11 | Visualizar Recomendações | Administrador/Técnico |

**Total de Casos de Uso Identificados:** 47 casos de uso específicos

### 5.2 Entidades do Sistema

1. **Universidade:** Entidade de mais alto nivel
2. **Unidade Consumidora:** Local que consome energia
3. **Contrato:** Relacao entre UC e distribuidora
4. **Fatura:** Documento mensal de consumo
5. **Distribuidora:** Fornecedora de energia
6. **Tarifas:** Valores cobrados pela distribuidora
7. **Usuário:** Usuários do sistema (vários perfis)
8. **Recomendação:** Resultado da análise de otimização

---

## 6. MAPEAMENTO DE TESTES

### 6.1 Estrutura de Testes

```
tests/
├── contracts/          # Testes de contratos e faturas
│   ├── contract/       # 38 testes
│   └── sheet/          # 8 testes
├── recommendation/     # Testes do algoritmo de recomendacao
│   └── 102 testes (96 de acuracia + 6 outros)
├── tariffs/            # Testes de tarifas e distribuidoras
│   ├── distributors/   # 4 testes
│   └── tariff/         # 5 testes
├── universities/       # Testes de universidades e UCs
│   ├── consumer_unit/  # 13 testes
│   └── university/     # 10 testes
├── users/              # Testes de usuarios
│   └── 6 testes
├── users_permissions/  # Testes de permissoes
│   └── 3 testes
└── utils/              # Testes de utilitarios
    └── 64 testes diversos
```

### 6.2 Distribuição de Testes por Módulo

| Módulo | Número de Testes | Percentual |
|--------|------------------|------------|
| Recommendation (Recomendações) | 102 | 39,38% |
| Utils (Utilitários) | 64 | 24,71% |
| Contracts (Contratos/Faturas) | 46 | 17,76% |
| Universities (Universidades/UCs) | 23 | 8,88% |
| Tariffs (Tarifas/Distribuidoras) | 9 | 3,47% |
| Users (Usuários) | 9 | 3,47% |
| Settings e outros | 6 | 2,32% |
| **TOTAL** | **259** | **100%** |

---

## 7. RESULTADOS DA EXECUÇÃO DOS TESTES

### 7.1 Resultado Geral

```
======================== RESULTADO DA SUITE COMPLETA ========================
Total de Testes: 259
Aprovados: 258
Reprovados: 0
Ignorados: 1
Taxa de Sucesso: 99,61%
Tempo Total: 93,55 segundos
=============================================================================
```
![Resultado](execucuao_testes.png)
### 7.2 Cobertura de Código

```
Name                                              Stmts   Miss  Cover
---------------------------------------------------------------------
contracts/models.py                                  96     13    86%
contracts/serializers.py                             97      5    95%
contracts/services.py                                56      2    96%
contracts/signals.py                                 39     16    59%
contracts/utils.py                                   18      1    94%
contracts/validators.py                              49      9    82%
contracts/views.py                                  224     82    63%
...
recommendation/blue.py                               65      0   100%
recommendation/calculator.py                         57     41    28%
recommendation/green.py                              64      0   100%
recommendation/models.py                             22      0   100%
recommendation/recommendation_utils.py              154     72    53%
...
TOTAL                                              3175   1015    68%
---------------------------------------------------------------------
```

---

## 8. ANÁLISE DETALHADA - TESTES DE RECOMENDAÇÃO (NÚCLEO FUNCIONAL)

### 8.1 Testes de Acurácia (test_recommendation_accuracy.py)

Este é o conjunto de testes mais crítico, pois valida a funcionalidade principal do sistema: gerar recomendações corretas de otimização de contratos de energia.

**Metodologia dos Testes:**
- Utiliza arquivos de dados reais (96 cenarios de teste)
- Compara resultados gerados com valores esperados (oracle)
- Valida tarifa recomendada, demandas e custos totais
- Tolerancia de 5% ou R$ 50.000,00

**Resultados:**

| Métrica | Valor |
|---------|-------|
| Total de Cenários Testados | 96 |
| Cenários Aprovados | 96 |
| Cenários Reprovados | 0 |
| Taxa de Acerto | 100% |
| Maior Diferença Absoluta | R$ 1.026,30 |
| Maior Diferença Percentual | 0,65% |
| Tempo Total de Execução | 74,95 segundos |

### 8.2 Exemplos de Casos de Teste

#### Caso 1: test_rec1.txt
```
Tarifa recomendada/esperada: G/G (Verde/Verde)
Demanda ponta recomendada: 0 kW
Demanda fora ponta: 929 kW
Custo total obtido: R$ 1.464.322,42
Custo total esperado: R$ 1.464.322,42
Diferenca: R$ 0,00
Diferenca percentual: 0,00%
Status: PASSOU
```

#### Caso 12: test_rec12.txt
```
Tarifa recomendada/esperada: B/B (Azul/Azul)
Demanda ponta recomendada: 181 kW
Demanda fora ponta: 229 kW
Custo total obtido: R$ 616.860,64
Custo total esperado: R$ 616.860,64
Diferenca: R$ 0,00
Diferenca percentual: 0,00%
Status: PASSOU
```

#### Caso 20: test_rec20.txt (Maior diferença percentual)
```
Tarifa recomendada/esperada: G/G (Verde/Verde)
Demanda ponta recomendada: 0 kW
Demanda fora ponta: 56 kW
Custo total obtido: R$ 100.820,16
Custo total esperado: R$ 100.454,48
Diferença: R$ 365,68
Diferença percentual: 0,36%
Status: PASSOU (dentro da tolerância)
```

#### Caso 60: test_rec60.txt (Maior diferença absoluta)
```
Tarifa recomendada/esperada: G/G
Demanda ponta recomendada: 0 kW
Demanda fora ponta: 1575 kW
Custo total obtido: R$ 3.229.893,89
Custo total esperado: R$ 3.228.867,59
Diferença: R$ 1.026,30
Diferença percentual: 0,03%
Status: PASSOU (dentro da tolerância)
```

### 8.3 Análise Estatística dos Testes de Recomendação

| Estatística | Valor |
|-------------|-------|
| Número de testes com diferença zero | 68 (70,83%) |
| Número de testes com diferença < 0,1% | 87 (90,63%) |
| Número de testes com diferença < 0,5% | 94 (97,92%) |
| Número de testes com diferença >= 0,5% | 2 (2,08%) |
| Média das diferenças percentuais | ~0,05% |

---

## 9. ANÁLISE DETALHADA - OUTROS MÓDULOS

### 9.1 Testes de Contratos e Faturas (46 testes)


**Cobertura:**

- Criação, leitura, atualização de contratos
- Criação, leitura, atualização de faturas
- Validação de permissões por tipo de usuário
- Importação de faturas via CSV/XLSX
- Validação de datas e valores
- Gráficos de consumo e demanda

**Resultado:** 46/46 testes aprovados (100%)


### 9.2 Testes de Universidades e Unidades Consumidoras (23 testes)

**Cobertura:**

- Criação e edição de universidades
- Criação e edição de unidades consumidoras
- Validação de restrições (nomes e códigos únicos)
- Permissões de acesso por usuário
- Integridade referencial

**Resultado:** 23/23 testes aprovados (100%)

### 9.3 Testes de Tarifas e Distribuidoras (9 testes)

**Cobertura:**

- Criação de tarifas Azul e Verde
- Validação de campos obrigatórios
- Associação com distribuidoras
- Contagem de UCs por distribuidora

**Resultado:** 9/9 testes aprovados (100%)

### 9.4 Testes de Usuários e Permissões (12 testes)

**Cobertura:**

- Criação de usuários (admin, técnico, convidado)
- Sistema de autenticação
- Permissões por tipo de usuário
- Unidades consumidoras favoritas
- Requisições de registro

**Resultado:** 12/12 testes aprovados (100%)

### 9.5 Testes de Utilitários (64 testes)

**Cobertura:**

- Validação de CNPJ
- Manipulação de datas
- Validação de email
- Utilitários de faturas
- Logging

**Resultado:** 64/64 testes aprovados (100%)

---

## 10. CÁLCULO DAS MÉTRICAS DE ADEQUAÇÃO FUNCIONAL

### 10.1 M-AF-01: Taxa de Corretude

**Definição:** Percentual de funções que produzem resultados corretos em relação aos esperados.

**Fórmula:**
```
Taxa de Corretude = (Testes Aprovados / Total de Testes) x 100
```

**Cálculo:**
```
Taxa de Corretude = (258 / 259) x 100 = 99,61%
```

**Critério:** >= 95%  
**Resultado:** **CONFORME** (99,61% > 95%)

### 10.2 M-AF-02: Cobertura de Requisitos Funcionais

**Definição:** Percentual de requisitos funcionais cobertos por testes automatizados.

**Análise:**

- Total de casos de uso identificados: 47
- Grupos funcionais testados:
  - Universidades: SIM
  - Unidades Consumidoras: SIM
  - Contratos: SIM
  - Faturas: SIM
  - Distribuidoras: SIM
  - Tarifas: SIM
- Usuários: SIM
- Recomendações: SIM
- Permissões: SIM
- Importação de dados: SIM

**Mapeamento Casos de Uso x Testes:**| Caso de Uso | Testado | Numero de Testes |
|-------------|---------|------------------|
| 1.x - Gerenciar Universidades | SIM | 10 |
| 3.x, 4.x - Gerenciar Usuários | SIM | 12 |
| 5.x - Gerenciar UCs | SIM | 13 |
| 6.x - Gerenciar Contratos | SIM | 17 |
| 7.x - Gerenciar Faturas | SIM | 29 |
| 8.x - Gerenciar Distribuidoras | SIM | 4 |
| 9.x - Gerenciar Tarifas | SIM | 5 |
| 11 - Visualizar Recomendações | SIM | 102 |
| Segurança e Permissões | SIM | 40+ |
| Importação de Dados | SIM | 8 |
| Validações e Utilitários | SIM | 64 |

**Cálculo:**
```
Requisitos Funcionais Cobertos = 10 grupos principais / 10 grupos totais = 100%
```

Todos os casos de uso principais possuem testes correspondentes.

**Critério:** >= 80%  
**Resultado:** **CONFORME** (100% > 80%)

### 10.3 M-AF-03: Taxa de Falhas em Casos de Borda

**Definição:** Percentual de testes que falham ao processar dados atípicos ou casos extremos.

**Análise de Casos de Borda Testados:**

- Valores máximos e mínimos de consumo e demanda: TESTADO
- Datas inválidas: TESTADO
- Dados faltantes: TESTADO
- Formatos inválidos (CSV/XLSX): TESTADO
- CNPJ inválido: TESTADO
- Permissões cross-university: TESTADO
- Tarifas expiradas: TESTADO
- Unidades consumidoras inativas: TESTADO

**Testes de Casos de Borda Identificados:**

- test_exceeding_values_energybill: PASSOU
- test_invalid_csv_header: PASSOU
- test_invalid_date_format: PASSOU
- test_invalid_number: PASSOU
- test_invalid_cnpj: PASSOU
- test_tarifa_azul_expirada: PASSOU
- test_unidade_consumidora_inativa: PASSOU
- E outros...

**Cálculo:**
```
Taxa de Falhas em Casos de Borda = (0 falhas / 30+ casos de borda testados) x 100 = 0%
```

**Critério:** <= 5%  
**Resultado:** **CONFORME** (0% < 5%)

---

## 11. ANÁLISE DE LACUNAS

### 11.1 Funcionalidades Não Testadas

Análise da cobertura de código revela algumas áreas com menor cobertura:

1. **recommendation/calculator.py:** 28% de cobertura
   - Algumas ramificações do algoritmo podem não estar totalmente testadas
   
2. **contracts/views.py:** 63% de cobertura
   - Alguns endpoints de API podem ter cobertura parcial
   
3. **users/models.py:** 69% de cobertura
   - Algumas funcionalidades de usuário podem não estar totalmente testadas

4. **Serviços (services.py):** Alguns módulos com 0% de cobertura
   - tariffs/services.py: 0%
   - users/auth.py: 0%

### 11.2 Recomendações

1. **Aumentar cobertura de testes de API:** Adicionar testes para todos os endpoints REST
2. **Testar fluxos de autenticação:** Testar recuperação de senha, tokens, etc.
3. **Testes de integração end-to-end:** Simular fluxos completos de usuário
4. **Testes de performance:** Validar comportamento sob carga
5. **Testes de segurança:** Validar proteção contra vulnerabilidades comuns

---

## 12. RASTREABILIDADE

### 12.1 Matriz de Rastreabilidade

| Requisito | Casos de Uso | Módulo de Teste | Número de Testes | Status |
|-----------|--------------|-----------------|------------------|--------|
| RF-001: Gerenciar Universidades | 1.1-1.3 | universities/ | 10 | TESTADO |
| RF-002: Gerenciar Usuários | 2.1-4.4 | users/ | 12 | TESTADO |
| RF-003: Gerenciar UCs | 5.1-5.4 | universities/consumer_unit/ | 13 | TESTADO |
| RF-004: Gerenciar Contratos | 6.1-6.4 | contracts/contract/ | 17 | TESTADO |
| RF-005: Gerenciar Faturas | 7.1-7.5 | contracts/contract/ | 29 | TESTADO |
| RF-006: Gerenciar Distribuidoras | 8.1-8.4 | tariffs/distributors/ | 4 | TESTADO |
| RF-007: Gerenciar Tarifas | 9.1-9.5 | tariffs/tariff/ | 5 | TESTADO |
| RF-008: Visualizar Recomendações | 11 | recommendation/ | 102 | TESTADO |
| RF-009: Controle de Permissões | Todos | users_permissions/ | 40+ | TESTADO |
| RF-010: Importação de Dados | 7.2 | contracts/sheet/ | 8 | TESTADO |

---

## 13. EXECUÇÃO

### 13.1 Comando de Execução

```bash
docker compose exec mepa-api pytest tests/ -v --tb=short
```

### 13.2 Evidência de Cobertura

Relatório de cobertura fica gerado em `reports/cov/index.html` com 68% de cobertura total.

---

## 14. ANÁLISE DE CONFORMIDADE COM ISO/IEC 25010

### 14.1 Completude Funcional

**Definição:** Grau em que o conjunto de funções cobre todas as tarefas e objetivos do usuário especificados.

**Avaliação:**
- Todos os casos de uso documentados possuem testes: SIM
- Todas as entidades principais são testadas: SIM
- Todas as operações CRUD são testadas: SIM

**Resultado:** **ADEQUADO**

### 14.2 Corretude Funcional

**Definição:** Grau em que um produto ou sistema fornece os resultados corretos com o grau de precisão necessário.

**Avaliação:**
- Taxa de sucesso dos testes: 99,61%
- Precisão dos cálculos de recomendação: 99,65% (diferença média de 0,05%)
- Validações de dados: 100% de sucesso

**Resultado:** **EXCELENTE**

### 14.3 Aptidão Funcional

**Definição:** Grau em que as funções facilitam a realização de tarefas e objetivos especificados.

**Avaliação:**
- API RESTful bem estruturada: SIM
- Validações claras de entrada: SIM
- Mensagens de erro informativas: SIM (baseado nos testes)
- Controle de permissões adequado: SIM

**Resultado:** **ADEQUADO**

---

## 15. CONCLUSÕES

### 15.1 Síntese dos Resultados

A API mec-energia-api do sistema MEPA demonstra **EXCELENTE adequação funcional**, com os seguintes destaques:

1. **Taxa de Corretude:** 99,61% (critério: >= 95%) - **CONFORME**
2. **Cobertura de Requisitos:** 100% (critério: >= 80%) - **CONFORME**
3. **Taxa de Falhas em Casos de Borda:** 0% (critério: <= 5%) - **CONFORME**
4. **Cobertura de Código:** 68% (critério informativo)

### 15.2 Pontos Fortes

1. **Algoritmo de Recomendação Altamente Preciso**
   - 96 cenários testados com 100% de aprovação
   - Diferença média de apenas 0,05% em relação aos valores esperados
   - Maior diferença encontrada: 0,65%, bem dentro da tolerância

2. **Cobertura Abrangente de Funcionalidades**
   - Todos os casos de uso principais possuem testes
   - 259 testes automatizados cobrindo todas as áreas críticas

3. **Robustez em Casos de Borda**
   - 0% de falhas em situações atípicas
   - Validações rigorosas de entrada de dados

4. **Qualidade do Código de Teste**
   - Testes bem estruturados e organizados
   - Uso de fixtures e mocks apropriados
   - Testes parametrizados para múltiplos cenários

### 15.3 Áreas de Melhoria

1. **Cobertura de Código**
   - Alguns módulos com cobertura abaixo de 70%
   - Recomenda-se aumentar para >= 80% em todos os módulos críticos

2. **Testes de Serviços**
   - Alguns arquivos services.py com 0% de cobertura
   - Necessário adicionar testes para estes componentes

3. **Testes End-to-End**
   - Adicionar testes que simulem fluxos completos de usuario
   - Testar integracao entre frontend e backend

### 15.4 Recomendações

1. **Curto Prazo (1-2 meses)**
   - Adicionar testes para os módulos services.py
   - Aumentar cobertura de recommendation/calculator.py para >= 80%
   - Adicionar testes de integração para fluxos críticos

2. **Médio Prazo (3-6 meses)**
   - Implementar testes de performance
   - Adicionar testes de segurança (OWASP Top 10)
   - Aumentar cobertura geral para >= 80%

3. **Longo Prazo (6-12 meses)**
   - Implementar testes end-to-end automatizados
   - Adicionar testes de carga e estresse
   - Implementar continuous integration com gates de qualidade

### 15.5 Avaliação Final

O sistema MEPA Energia API demonstra **ALTA ADEQUAÇÃO FUNCIONAL** segundo a norma ISO/IEC 25010:

- **Completude Funcional:** EXCELENTE
- **Corretude Funcional:** EXCELENTE
- **Aptidão Funcional:** BOA

**Avaliação Geral: APROVADO COM EXCELÊNCIA**

O sistema atende e supera todos os critérios definidos nas fases 3 e 4 do documento de qualidade, demonstrando que as funcionalidades implementadas são corretas, completas e robustas.

---

## 16. ASSINATURAS

**Relatório Elaborado por:** Davi e Mateus  
**Data:** 26 de novembro de 2025  
**Projeto:** MEPA Energia - Kay-McNulty Team  
**Disciplina:** Qualidade de Software

---

## 17. REFERÊNCIAS

1. ISO/IEC 25010:2011 - Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - System and software quality models

2. ISO/IEC 25023:2016 - Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - Measurement of system and software product quality

3. ISO/IEC 15939:2017 - Systems and software engineering - Measurement process

4. IEEE Std 1061-1998 - IEEE Standard for a Software Quality Metrics Methodology

5. Documentação do Projeto MEPA Energia
   - Disponível em: https://gitlab.com/lappis-unb/projetos-energia/mec-energia/documentacao

6. 2025-2_T01_KAY-McNULTY - Fase 3: Planejamento da Avaliação

7. 2025-2_T01_KAY-McNULTY - Fase 4: Execução e Análise dos Resultados


