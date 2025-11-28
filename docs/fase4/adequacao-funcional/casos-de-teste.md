# CASOS DE TESTE DETALHADOS

## 1. TESTES DE RECOMENDAÇÃO - EXEMPLOS DETALHADOS

### 1.1 Caso de Teste: [test_rec1.txt](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/recommendation/data/test_rec1.txt?ref_type=heads)

**Objetivo:** Validar recomendação de tarifa Verde para UC com alto consumo fora de ponta

**Entrada:**
```
Tarifas (linha 1): TUSD kW
  Verde NA: R$ 10,50/kW
  Azul Ponta: R$ 15,20/kW
  Azul Fora Ponta: R$ 8,30/kW

Tarifas (linha 2): TUSD MWh
  Verde Ponta: R$ 50,00/MWh
  Verde Fora Ponta: R$ 30,00/MWh
  Azul Ponta: R$ 55,00/MWh
  Azul Fora Ponta: R$ 35,00/MWh

Tarifas (linha 3): TE MWh
  Verde Ponta: R$ 200,00/MWh
  Verde Fora Ponta: R$ 180,00/MWh
  Azul Ponta: R$ 210,00/MWh
  Azul Fora Ponta: R$ 190,00/MWh

Historico de Consumo (12 meses):
Mes 1: Consumo P=1500kWh, FP=180000kWh, Demanda P=150kW, FP=900kW
Mes 2: Consumo P=1600kWh, FP=185000kWh, Demanda P=160kW, FP=920kW
...
Mes 12: Consumo P=1550kWh, FP=182000kWh, Demanda P=155kW, FP=910kW
```

**Processamento:**

1. Sistema calcula demanda média dos últimos 12 meses
2. Aplica percentil 95 para demanda de ponta
3. Aplica percentil 95 para demanda fora de ponta
4. Calcula custo para Tarifa Verde e Azul
5. Compara e recomenda a mais econômica

**Saída Esperada:**
```
Tarifa Recomendada: Verde (G)
Demanda Ponta: 0 kW (nao se aplica na Verde)
Demanda Fora Ponta: 929 kW
Custo Total Estimado: R$ 1.464.322,42
```

**Saída Obtida:**
```
Tarifa Recomendada: Verde (G)
Demanda Ponta: 0 kW
Demanda Fora Ponta: 929 kW
Custo Total Calculado: R$ 1.464.322,42
```

**Resultado:** PASSOU (diferença = R$ 0,00, 0,00%)

---

### 1.2 Caso de Teste: [test_rec12.txt](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/recommendation/data/test_rec12.txt?ref_type=heads)

**Objetivo:** Validar recomendação de tarifa Azul para UC com consumo equilibrado entre ponta e fora ponta

**Entrada:**
```
Historico de Consumo (12 meses):
Mes 1: Consumo P=45000kWh, FP=62000kWh, Demanda P=175kW, FP=220kW
Mes 2: Consumo P=47000kWh, FP=64000kWh, Demanda P=180kW, FP=225kW
...
Mes 12: Consumo P=46000kWh, FP=63000kWh, Demanda P=178kW, FP=222kW
```

**Saída Esperada:****
```
Tarifa Recomendada: Azul (B)
Demanda Ponta: 181 kW
Demanda Fora Ponta: 229 kW
Custo Total Estimado: R$ 616.860,64
```

**Saída Obtida:**
```
Tarifa Recomendada: Azul (B)
Demanda Ponta: 181 kW
Demanda Fora Ponta: 229 kW
Custo Total Calculado: R$ 616.860,64
```

**Resultado:** PASSOU (diferença = R$ 0,00, 0,00%)

---

### 1.3 Caso de Teste: [test_rec60.txt](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/recommendation/data/test_rec60.txt?ref_type=heads) (Maior diferença absoluta)

**Objetivo:** Validar precisão em cenário de alto consumo

**Entrada:**
```
Historico de Consumo (12 meses):
UC com consumo muito alto: ~400 MWh/mes
Demanda fora de ponta: ~1600 kW
```

**Saída Esperada:**
```
Tarifa Recomendada: Verde (G)
Demanda Fora Ponta: 1575 kW
Custo Total Estimado: R$ 3.228.867,59
```

**Saída Obtida:**
```
Tarifa Recomendada: Verde (G)
Demanda Fora Ponta: 1575 kW
Custo Total Calculado: R$ 3.229.893,89
```

**Resultado:** PASSOU
- Diferença Absoluta: R$ 1.026,30
- Diferença Percentual: 0,03%
- Dentro da tolerância (5% ou R$ 50.000)

**Análise:** Esta foi a maior diferença absoluta encontrada em todos os 96 testes. Mesmo assim, representa apenas 0,03% do valor total, demonstrando alta precisão do algoritmo.

---

## 2. TESTES DE CONTRATOS - EXEMPLOS DETALHADOS

### 2.1 Caso de Teste: [test_user_create_energybill](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/contracts/contract/test_EnergyBillViewSet_create.py?ref_type=heads)

**Objetivo:** Validar permissões de criação de fatura por usuário comum

**Entrada:**
```python
Usuario: user_a (tipo: USUARIO_TECNICO, universidade: A)
Unidade Consumidora A: pertence a universidade A
Unidade Consumidora B: pertence a universidade B

Payload da Requisição:
{
  "consumer_unit": UC_A.id,
  "contract": CONTRACT_A.id,
  "date": "2023-01-01",
  "peak_consumption_in_kwh": 75.0,
  "off_peak_consumption_in_kwh": 100.0,
  "peak_measured_demand_in_kw": 60.0,
  "off_peak_measured_demand_in_kw": 50.0
}
```

**Processamento:**

1. Sistema verifica autenticação do usuário
2. Sistema verifica se usuário pertence a mesma universidade da UC
3. Sistema valida permissões (usuário técnico pode criar faturas)
4. Sistema valida dados da fatura
5. Sistema cria a fatura no banco de dados

**Saída Esperada:**
```
Status: 201 CREATED
Resposta: Dados da fatura criada
```

**Teste de Segurança:**
```python
# Tentativa de criar fatura em UC de outra universidade
Payload:
{
  "consumer_unit": UC_B.id,  # UC da universidade B
  "contract": CONTRACT_B.id,
  ...
}

Status Esperado: 403 FORBIDDEN
```

**Resultado:** PASSOU
- Criação na própria universidade: 201 CREATED
- Tentativa cross-university: 403 FORBIDDEN

---

### 2.2 Caso de Teste: [test_EnergyBillModel](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/contracts/contract/test_EnergyBillModel.py?ref_type=heads)

**Objetivo:** Validar restrições e validações do modelo de fatura

**Subcaso 2.2.1: Valores dentro do limite**
```python
Entrada:
  peak_consumption_in_kwh: 1000.0
  off_peak_consumption_in_kwh: 5000.0
  peak_measured_demand_in_kw: 100.0
  off_peak_measured_demand_in_kw: 150.0

Resultado: PASSOU (valores validos)
```

**Subcaso 2.2.2: Valores excedendo limite**
```python
Entrada:
  peak_consumption_in_kwh: 10000000.0  # Acima do limite
  
Resultado Esperado: ValidationError
Resultado Obtido: ValidationError
Status: PASSOU
```

**Subcaso 2.2.3: Data inválida**
```python
Entrada:
  date: "2025-13-01"  # Mês inválido

Resultado Esperado: ValidationError
Resultado Obtido: ValidationError
Status: PASSOU
```

**Subcaso 2.2.4: Fatura duplicada**
```python
Entrada:
  consumer_unit: UC_A
  contract: CONTRACT_A
  date: "2023-01-01"  # Já existe fatura para este mês

Resultado Esperado: IntegrityError
Resultado Obtido: IntegrityError
Status: PASSOU
```

---

## 3. TESTES DE IMPORTAÇÃO - EXEMPLOS DETALHADOS

### 3.1 Caso de Teste: [test_import_csv](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/contracts/sheet/test_import_csv.py?ref_type=heads)

**Objetivo:** Validar importação de faturas via arquivo CSV

**Entrada (arquivo CSV):**
```csv
Data,Consumo Ponta (kWh),Consumo Fora Ponta (kWh),Demanda Ponta (kW),Demanda Fora Ponta (kW)
01/01/2023,1500,18000,150,900
01/02/2023,1600,18500,160,920
01/03/2023,1550,18200,155,910
```

**Processamento:**
1. Sistema valida formato do arquivo (CSV com separador correto)
2. Sistema valida cabeçalho (colunas obrigatórias presentes)
3. Sistema valida cada linha (datas válidas, números válidos)
4. Sistema cria faturas no banco de dados

**Saída Esperada:****
```json
{
  "success": true,
  "imported": 3,
  "errors": []
}
```

**Resultado:** PASSOU

**Teste de Erro: Cabeçalho Inválido**
```csv
DataErrada,ConsumoP,ConsumoFP,DemandaP,DemandaFP
01/01/2023,1500,18000,150,900
```

**Saída Esperada:****
```json
{
  "success": false,
  "error": "Invalid CSV header"
}
```

**Resultado:** PASSOU

---

## 4. TESTES DE TARIFAS - EXEMPLOS DETALHADOS

### 4.1 Caso de Teste: [test_create_blue_tariff](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/tariffs/tariff/test_tariff_creation.py?ref_type=heads)

**Objetivo:** Validar criação de tarifa Azul

**Entrada:**
```python
{
  "distributor": DIST_A.id,
  "subgroup": "A4",
  "flag": "BLUE",
  "start_date": "2024-01-01",
  "end_date": "2024-12-31",
  "peak_tusd_in_reais_per_kw": 15.20,
  "off_peak_tusd_in_reais_per_kw": 8.30,
  "peak_tusd_in_reais_per_mwh": 55.00,
  "off_peak_tusd_in_reais_per_mwh": 35.00,
  "peak_te_in_reais_per_mwh": 210.00,
  "off_peak_te_in_reais_per_mwh": 190.00
}
```

**Validações:**

1. Todos os campos obrigatórios para Tarifa Azul presentes
2. Valores numéricos positivos
3. Data inicial anterior a data final
4. Distribuidora existe

**Resultado:** PASSOU

**Teste Negativo: Campos Azul em Tarifa Verde**
```python
{
  "flag": "GREEN",
  "peak_tusd_in_reais_per_kw": 15.20,  # Campo so valido para Azul
  ...
}

Resultado Esperado: ValidationError
Resultado Obtido: ValidationError
Status: PASSOU
```

---

## 5. TESTES DE PERMISSÕES - EXEMPLOS DETALHADOS

### 5.1 [Matriz de Permissões Testadas](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/users_permissions/test_university_permissions.py?ref_type=heads)

**Cenário: Visualizar Universidade**

| Usuário | Universidade Própria | Outra Universidade | Resultado |
|---------|----------------------|---------------------|-----------|
| SysAdmin | PERMITIDO | PERMITIDO | PASSOU |
| Admin Univ A | PERMITIDO | NEGADO | PASSOU |
| Técnico Univ A | PERMITIDO | NEGADO | PASSOU |
| Convidado Univ A | PERMITIDO | NEGADO | PASSOU |

**Cenário: Criar Fatura**

| Usuário | UC Própria | UC Outra Univ | Resultado |
|---------|------------|---------------|-----------|
| SysAdmin | NEGADO | NEGADO | PASSOU |
| Admin Univ A | PERMITIDO | NEGADO | PASSOU |
| Tecnico Univ A | PERMITIDO | NEGADO | PASSOU |
| Convidado Univ A | NEGADO | NEGADO | PASSOU |

**Cenário: Criar Universidade**

| Usuário | Ação | Resultado Esperado | Resultado Obtido | Status |
|---------|------|-------------------|------------------|--------|
| SysAdmin | Criar | PERMITIDO | 201 CREATED | PASSOU |
| Admin Univ | Criar | NEGADO | 403 FORBIDDEN | PASSOU |
| Técnico | Criar | NEGADO | 403 FORBIDDEN | PASSOU |
| Convidado | Criar | NEGADO | 403 FORBIDDEN | PASSOU |

---

## 6. TESTES DE VALIDAÇÃO - EXEMPLOS DETALHADOS

### 6.1 [Validação de CNPJ](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/test_cnpj_validator.py?ref_type=heads)

**Casos Testados:**

**Caso 1: CNPJ Válido**
```python
Entrada: "11.222.333/0001-81"
Resultado: VALIDO
Status: PASSOU
```

**Caso 2: CNPJ Inválido (dígito verificador errado)**
```python
Entrada: "11.222.333/0001-99"
Resultado: INVALIDO
Status: PASSOU
```

**Caso 3: CNPJ com formato inválido**
```python
Entrada: "11222333000181"  # Sem formatação
Resultado: INVALIDO
Status: PASSOU
```

**Caso 4: CNPJ zerado**
```python
Entrada: "00.000.000/0000-00"
Resultado: INVALIDO
Status: PASSOU
```

---

### 6.2 [Validação de Datas](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/test_date.py?ref_type=heads)

**Casos Testados:**

**Caso 1: Intervalo válido**
```python
start_date = "2023-01-01"
end_date = "2023-12-31"
Resultado: VALIDO
Status: PASSOU
```

**Caso 2: Data final anterior a inicial****
```python
start_date = "2023-12-31"
end_date = "2023-01-01"
Resultado: INVALIDO
Status: PASSOU
```

**Caso 3: Data no formato incorreto**
```python
date = "31/12/2023"  # Formato DD/MM/YYYY
Resultado: INVALIDO (esperado YYYY-MM-DD)
Status: PASSOU
```

---

## 7. [TESTES DE CASOS EXTREMOS](https://gitlab.com/lappis-unb/projetos-energia/mec-energia/mec-energia-api/-/blob/develop/tests/contracts/contract/test_EnergyBillModel.py?ref_type=heads)

### 7.1 Valores Máximos

**Teste: Consumo no limite máximo**
```python
Entrada:
  peak_consumption_in_kwh: 9999999.99
  
Resultado: ACEITO (dentro do limite)
Status: PASSOU
```

**Teste: Consumo acima do limite**
```python
Entrada:
  peak_consumption_in_kwh: 10000000.00
  
Resultado: REJEITADO (ValidationError)
Status: PASSOU
```

---

### 7.2 Valores Mínimos

**Teste: Consumo zero****
```python
Entrada:
  peak_consumption_in_kwh: 0.0
  
Resultado: ACEITO
Status: PASSOU
```

**Teste: Consumo negativo**
```python
Entrada:
  peak_consumption_in_kwh: -100.0
  
Resultado: REJEITADO (ValidationError)
Status: PASSOU
```

---

### 7.3 Strings Vazias e Nulas

**Teste: Nome de UC vazio**
```python
Entrada:
  name: ""
  
Resultado: REJEITADO (ValidationError)
Status: PASSOU
```

**Teste: Campo opcional nulo**
```python
Entrada:
  anotacoes: null
  
Resultado: ACEITO
Status: PASSOU
```

---

## 8. ANÁLISE DE TEMPO DE EXECUÇÃO

### 8.1 Testes Mais Rápidos

| Teste | Tempo | Observação |
|-------|-------|------------|
| test_valid_cnpj | 0.01s | Validação simples |
| test_get_yesterday_date | 0.01s | Função de utilidade |
| test_logging_configuration | 0.02s | Configuração |

### 8.2 Testes Mais Lentos

| Teste | Tempo | Observação |
|-------|-------|------------|
| test_rec1.txt | 1.36s | Processamento de 12 meses de dados |
| test_rec10.txt | 0.92s | Processamento de recomendação |
| test_rec14.txt | 0.78s | Processamento de recomendação |

**Média de tempo por teste:** 0.36 segundos

---

## 9. COBERTURA DE CÓDIGO POR TESTE

### 9.1 Exemplos de Alta Cobertura

**Módulo: recommendation/blue.py (100%)**
- Testado por: test_recommendation_accuracy.py (96 testes)
- Linhas executadas: 65/65
- Branches cobertos: 100%

**Módulo: utils/cnpj_validator_util.py (100%)**
- Testado por: test_cnpj_validator.py (5 testes)
- Linhas executadas: 25/25
- Casos cobertos: válidos, inválidos, formatos

---

## 10. RESUMO ESTATÍSTICO

| Categoria | Total | Aprovados | Taxa |
|-----------|-------|-----------|------|
| Testes de Recomendação | 102 | 102 | 100% |
| Testes de Permissões | 40+ | 40+ | 100% |
| Testes de Validação | 30+ | 30+ | 100% |
| Testes de Integração | 50+ | 50+ | 100% |
| Testes Unitários | 37+ | 36+ | 97,3% |

**Total Geral:** 259 testes, 258 aprovados (99,61%)

---

**Documento elaborado por:** Davi e Mateus  
**Data:** 26 de novembro de 2025
