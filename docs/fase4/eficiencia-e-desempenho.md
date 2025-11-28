# 4. Resultados da Avaliação: Eficiência de Desempenho (G-PE)

Esta seção documenta a execução dos testes de carga e a análise de recursos computacionais, conforme planejado na Fase 2 (GQM) e detalhado na metodologia da Fase 4. O objetivo é validar se o sistema MEPA atende aos requisitos de performance sob condições de estresse.

## 4.1. Configuração do Cenário de Teste
O teste de carga foi executado utilizando a ferramenta **Locust**, simulando o comportamento de usuários concorrentes no fluxo principal da aplicação. O monitoramento foi realizado em tempo real via **Prometheus** e **Grafana**.

* **Cenário de Carga:** Ramp-up gradual até atingir **50 usuários simultâneos**.
* **Janela de Execução:** Aproximadamente 4 minutos de estabilidade (Plateau).
* **Perfil de Usuário:** Execução do fluxo “analisar → recomendar”.

---

## 4.2. Análise das Métricas e Evidências

Abaixo são detalhados os resultados coletados para cada métrica definida no plano de testes.

### M-PE-01: Estabilidade do Throughput e M-PE-04: Escalabilidade
**Objetivo:** Verificar se o sistema mantém o processamento estável sob carga e se escala linearmente.

![Gráfico do Locust: Total Requests per Second, Response Times e Number of Users](../images/locust.jpeg)
*(Figura 1: Painel do Locust demonstrando RPS, Tempo de Resposta e Quantidade de Usuários)*

* **Análise M-PE-01 (Throughput):** Durante o pico de carga (50 usuários), o sistema manteve um throughput estável variando entre **20 e 23 RPS** (Requisições por Segundo). A taxa de falhas (*Failures/s*) permaneceu em 0 durante todo o teste.
* **Análise M-PE-04 (Escalabilidade):** Observa-se no terceiro gráfico da Figura 1 ("Number of Users") que o aumento do throughput acompanhou proporcionalmente a entrada de usuários, formando um platô consistente. O sistema escalou de forma linear para a carga proposta.

### M-PE-02: Latência de Resposta
**Objetivo:** Verificar se o tempo de resposta se smantém dentro dos limites aceitáveis para a experiência do usuário.

*(Consultar Figura 1 acima, gráfico "Response Times")*

* **Resultado:**
    * **Percentil 50 (Mediana):** Manteve-se estável entre 300ms e 600ms.
    * **Percentil 95 (p95):** O tempo de resposta para 95% das requisições oscilou, atingindo um pico máximo de aproximadamente **1.100ms (1.1s)**, estabilizando-se majoritariamente abaixo de 1.0s.
* **Conclusão:** O critério de aceitação definia o limite de 2s. O sistema atendeu ao requisito com margem de segurança.

### M-PE-03: Saturação de Recursos (CPU e RAM)
**Objetivo:** Monitorar o consumo de infraestrutura para identificar gargalos ou sobredimensionamento.

#### Análise de CPU
![Gráfico de Uso de CPU](../images/consumo_cpu.jpeg)
*(Figura 2: Consumo de CPU por núcleo durante o teste)*

* **Observação:** O núcleo `Cpu1` (linha azul) operou próximo a **100% de utilização** durante quase toda a janela de teste, indicando saturação de processamento. O `Cpu0` (linha verde) apresentou comportamento oscilatório.
* **Resultado:** O pico de uso ultrapassou o limite estabelecido de 80%.

#### Análise de Memória (RAM)
![Gráfico de Uso de Memória](../images/uso_memoria_ram.jpeg)
*(Figura 3: Consumo de Memória RAM)*

* **Observação:** O consumo manteve-se linear e constante em aproximadamente **1.76 GiB**.
* **Resultado:** Considerando a capacidade total alocada, o uso estimado está em torno de **88%**, superando o limite de segurança de 75% definido no GQM.

#### Evidências de Apoio (Rede e Disco)
Para contextualizar o alto uso de CPU, analisou-se também a taxa de transferência de disco e rede.

![Gráfico de Disk Throughput](../images/transferencia_disco.jpeg)
*(Figura 4: Taxa de transferência de disco)*

![Gráfico de Network Throughput](../images/rede.jpeg)
*(Figura 5: Taxa de transferência de rede)*

* **Análise Complementar:** A alta atividade de escrita em disco (picos frequentes de ~70 KiB na Figura 4) correlaciona-se com o alto uso de CPU, sugerindo operações intensivas de I/O (Log ou Banco de Dados).

---

## 4.3. Matriz de Conformidade e Julgamento

Com base na execução dos checklists de verificação e análise das evidências acima, apresenta-se o julgamento final da dimensão Eficiência de Desempenho.

| ID Métrica | Descrição | Resultado Obtido | Critério de Julgamento | Status |
| :--- | :--- | :--- | :--- | :--- |
| **M-PE-01** | Throughput estável | ~22 RPS constantes, 0 falhas | Manter-se estável sob carga | ✅ **Conforme** |
| **M-PE-02** | Latência (p95) | Pico de 1.1s (< 2s) | p95 < 2s | ✅ **Aceitável** |
| **M-PE-03** | Saturação de Recursos | **CPU:** ~99% (Pico) <br> **RAM:** ~88% | CPU < 80% <br> RAM < 75% | ❌ **Não Conforme** |
| **M-PE-04** | Escalabilidade | Resposta linear à carga | Escalabilidade ≥ 80% linear | ✅ **Aceitável** |

## 4.4. Conclusão da Fase 4 (G-PE)

Os testes de carga validaram que a aplicação **MEPA** é capaz de entregar uma experiência de usuário fluida, com tempos de resposta rápidos (M-PE-02) e estabilidade de conexão (M-PE-01), mesmo sob a carga máxima estipulada de 50 usuários simultâneos.

Entretanto, a infraestrutura atual apresentou **Não Conformidade** crítica na métrica **M-PE-03 (Recursos)**.
1.  **CPU:** O sistema operou em saturação (gargalo de processamento), evidenciado pelo uso de 100% em um dos núcleos.
2.  **RAM:** A margem de memória livre é insuficiente para garantir estabilidade em picos maiores de carga.

**Recomendação de Melhoria:**
Para adequação aos critérios de qualidade, recomenda-se:
* Realizar *tuning* da aplicação para melhor aproveitamento de múltiplos núcleos (multithreading).
* Aumentar verticalmente a memória da VM (Scale Up) ou otimizar o consumo de memória da aplicação.