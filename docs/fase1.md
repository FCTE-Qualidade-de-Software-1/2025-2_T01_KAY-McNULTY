# FASE 1

## Introdução

Avaliar a qualidade de um software é um passo fundamental para garantir sua confiabilidade e aplicabilidade prática. O **MEPA** é um sistema de software livre, de código aberto, cuja função principal é auxiliar instituições públicas, especialmente as Instituições Federais de Ensino Superior (IFES), na **otimização de contratos de energia elétrica**.
Ao processar faturas e dados regulatórios, o MEPA recomenda modalidades contratuais mais vantajosas, promovendo **eficiência energética** e **redução de custos**.

Por estar inserido em um contexto crítico — o da gestão pública de energia —, o MEPA deve atender a padrões elevados de **adequação funcional**, garantindo resultados confiáveis; de **eficiência**, para processar grandes volumes de dados rapidamente; e de **manutenibilidade**, considerando sua natureza de software livre que demanda constante evolução colaborativa.
Segundo o *SWEBOK Guide V4.0a*, a avaliação da qualidade deve refletir o propósito real do software e considerar os requisitos funcionais e não funcionais mais relevantes para os stakeholders [(IEEE Computer Society, 2025, p. 1-4)](https://computer.org/swebok).

---

## Objetivo

O objetivo da Fase 1 é **definir os requisitos de avaliação da qualidade** do software selecionado pela equipe, o **MEPA – Monitoramento de Energia em Plataforma Aberta**, desenvolvido pela Universidade de Brasília (UnB).
Essa etapa inicial estabelece a base para todo o processo de avaliação, descrevendo o **propósito da avaliação**, a **classificação do tipo de produto** e a **especificação inicial do modelo de qualidade** que será adotado.
De acordo com a norma [ISO/IEC 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010) e com as recomendações do SWEBOK, a clareza nessa definição inicial é essencial para garantir que os resultados da avaliação sejam consistentes, reproduzíveis e aplicáveis às necessidades reais das partes interessadas.

---

## Metodologia

A condução da Fase 1 seguiu um processo estruturado em etapas:

1. **Identificação do contexto e stakeholders:** foram mapeados o requisitante principal (UnB), os compradores potenciais (IFES), os fornecedores (LAPPIS/UnB), os desenvolvedores (comunidade acadêmica e de software livre) e os operadores (gestores de energia).
2. **Classificação do produto:** o MEPA foi caracterizado como um sistema de **apoio à decisão** em gestão energética, com arquitetura baseada em aplicação **web** e **API aberta**, além de ser distribuído como **software livre**.
3. **Definição do propósito da avaliação:** estabeleceu-se que a avaliação deve verificar se o MEPA atende ao seu propósito central, entregando resultados adequados, eficientes e de fácil manutenção.
4. **Adaptação do modelo de qualidade ISO/IEC 25010:** foram selecionadas apenas as características mais críticas (adequação funcional, eficiência e manutenibilidade), deixando de fora, nesta fase, aspectos como usabilidade.
5. **Priorização das características de qualidade:** aplicou-se o critério de alinhamento com o propósito do produto, impacto para o usuário final e relevância para sua continuidade no ambiente real.
6. **Definição do escopo da avaliação:** estabeleceu-se que o foco será nas funcionalidades principais, no código-fonte disponível em repositórios públicos, na documentação e em relatórios de uso, com profundidade suficiente para gerar insumos práticos para futuras evoluções.

---

## Resultados Esperados

### Requisitante e partes interessadas

O **requisitante principal** é a Universidade de Brasília, no contexto da disciplina de Qualidade de Software (FGA315).
As **partes interessadas** incluem:

* **Comprador/Cliente:** Instituições Federais de Ensino Superior (IFES), que se beneficiam da economia gerada pela plataforma.
* **Fornecedor:** o LAPPIS/UnB, responsável pela manutenção e evolução do software.
* **Desenvolvedores:** equipe acadêmica e comunidade de software livre.
* **Operadores:** gestores de energia das universidades, que utilizam diretamente as recomendações do sistema.

### Descrição estruturada do software

O **MEPA** é um software de código aberto voltado para a **gestão e otimização de contratos de energia elétrica**. Ele processa dados de consumo e aplica algoritmos de análise para sugerir a modalidade tarifária mais econômica, apoiando a tomada de decisão em instituições públicas.
Por ser software livre, pode ser adaptado e expandido conforme as necessidades de cada instituição.

### Classificação do tipo de produto

O software é classificado como:

* Um **sistema de apoio à decisão** voltado à gestão energética.
* Uma aplicação **web**, acessível por interface gráfica e integrável via **API aberta**.
* Um **produto de software livre**, garantindo transparência, auditabilidade e possibilidade de contribuição externa.

### Propósito da avaliação

A avaliação pretende:

* Determinar o nível de qualidade do MEPA frente às características selecionadas.
* Garantir que os resultados sejam **práticos e aplicáveis** em instituições reais.
* Fornecer **insumos para melhorias contínuas** do software, orientando tanto ajustes técnicos quanto decisões de governança do projeto.

### Modelo de qualidade 

Para a avaliação do software MEPA, a equipe optou por utilizar o Modelo de Qualidade do Produto (Product Quality Model) da norma **ISO/IEC 25010** 



  ![Diagrama de Classes](images/Produt-Quality.png)

<p align="center">
<strong>Figura 1</strong> – Modelo Qualidade e Produto
</p>



O Modelo de Qualidade do Produto é a estrutura ideal para o MEPA porque ele se concentra nas características intrínsecas e estáticas do software. Como o projeto avaliado, é um sistema especializado na Recomendação e Análise, nossa prioridade  é garantir a qualidade do sistema em si, antes de medir a satisfação do usuário em um ambiente operacional (Qualidade em Uso).

As principais razões para essa escolha são:

* **Natureza Crítica dos Dados e Cálculos:** O MEPA lida com a análise e recomendação de ajustes em Contratos de Energia Elétrica com base em faturas mensais. Qualquer erro de cálculo ou de função tem um impacto financeiro direto e significativo para as Instituições de Ensino Superior (IES).

     Isso torna a característica de Adequação Funcional (principalmente Corretude Funcional) e Eficiência de Desempenho (velocidade e precisão dos cálculos) absolutamente críticas.

* **Manutenção e Evolução Contínua:** Contratos de energia e regulamentações mudam constantemente. Para que o MEPA continue gerando recomendações válidas, ele deve ser facilmente modificável e analisável.

     A característica de Manutenibilidade (especialmente Modularidade e Modificabilidade) é importante garantir que o sistema possa evoluir sem quebrar funcionalidades existentes.


Aspectos como **usabilidade** foram excluídos nesta fase, pois não se relacionam diretamente ao propósito principal da avaliação. O SWEBOK reforça que a seleção das características avaliadas deve sempre refletir o uso pretendido do software e o contexto do projeto [(IEEE Computer Society, 2025, p. 12-6)](https://computer.org/swebok).

### Adaptação e priorização

Embora o Modelo de Qualidade do Produto ISO/IEC 25010 apresente oito características, para a avaliação inicial do MEPA Contratos, decidimos focar nas três características que têm o impacto mais direto e crítico no propósito do sistema.

As características priorizadas e o motivo da escolha são:

#### Adequação Funcional (Functional Suitability)

**Prioridade Alta**

Esta característica garante que o Software forneça as funções corretas para cumprir seu objetivo primário: recomendar ajustes e avaliar contratos de energia. 


A Corretude Funcional é crucial. Se o sistema não realizar os cálculos de economia ou a análise de faturas com 100% de precisão, as IES podem tomar decisões financeiras erradas. A validade e a confiabilidade das recomendações do MEPA dependem integralmente desta característica.

-----

#### Eficiência de Desempenho (Performance Efficiency)

**Prioridade Alta**

Esta característica lida com a performance do sistema em relação aos recursos utilizados (tempo de processamento e resposta).

O sistema lida com grandes volumes de dados históricos de consumo de energia elétrica e precisa analisar informações provenientes de diferentes distribuidoras. Portanto, o processamento de grandes volumes de dados de faturas e a execução dos algoritmos de recomendação devem ser rápidos. Se o sistema demorar muito para gerar um relatório de recomendação, isso pode atrasar decisões administrativas e financeiras importantes, comprometendo a utilidade do sistema.

-----

#### Manutenibilidade (Maintainability)

**Prioridade Média**

Esta característica se refere à facilidade com que o software pode ser modificado.

O domínio de contratos de energia é altamente regulamentado e muda com frequência (tarifas, impostos, regras contratuais). A necessidade de manutenibilidade é exacerbada pelo fato de o MEPA ser um software livre desenvolvido em parceria com a UnB e a comunidade acadêmica. Sua evolução depende de contribuições externas e ajustes constantes para acompanhar as mudanças regulatórias. Para facilitar essa colaboração e garantir a sustentabilidade do projeto, o código-fonte deve ser modular e a modificabilidade deve ser alta, permitindo que a comunidade implemente alterações rapidamente.

-----

Ao restringir o foco a estas três características, garantimos uma avaliação mais profunda e prática, diretamente alinhada aos riscos e objetivos de negócio do sistema.

-----
### Escopo e profundidade da avaliação

O escopo cobre:

* As funcionalidades centrais do MEPA (análise de faturas e recomendação de contratos).
* O código aberto disponível no [GitLab do projeto](https://gitlab.com/lappis-unb/projects/SMI/mepa).
* A documentação e os relatórios de uso.

A profundidade da análise será suficiente para apontar **pontos fortes, fragilidades e oportunidades de melhoria**, sem esgotar todos os aspectos possíveis.
Essa avaliação é complementar a futuras análises de **usabilidade** e **segurança**.

### ODS relacionados

O MEPA contribui diretamente para os seguintes Objetivos de Desenvolvimento Sustentável (ODS):

* **ODS 7 (Energia acessível e limpa, meta 7.3):** promove eficiência energética.
* **ODS 12 (Consumo e produção responsáveis, metas 12.2/12.6/12.7):** baseia decisões em dados, reduz desperdícios e incentiva práticas sustentáveis.
* **ODS 13 (Ação climática, meta 13.2):** ao otimizar consumo e contratos, contribui para reduzir emissões de CO₂.
* **ODS 9 (Indústria, inovação e infraestrutura, meta 9.4):** moderniza a gestão energética pública com uso de IA e software livre.
* **ODS 4 (Educação de qualidade, meta 4.a):** libera orçamento para ensino e pesquisa ao reduzir gastos com energia.
* **ODS 17 (Parcerias, metas 17.16/17.17):** articula MEC, UnB e redes de universidades na adoção da ferramenta.

**Justificativa:** ao integrar tecnologia aberta com impacto direto em economia, sustentabilidade e inovação, o MEPA mostra-se alinhado a múltiplos ODS e reforça o papel da universidade como agente de transformação social.

---

## Referências Bibliográficas

* IEEE COMPUTER SOCIETY. *Guide to the Software Engineering Body of Knowledge (SWEBOK Guide) V4.0a*. IEEE, 2025. Disponível em: [https://computer.org/swebok](https://computer.org/swebok).
* ISO/IEC 25010 – *Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE) — System and Software Quality Models*. Disponível em: [https://iso25000.com/index.php/en/iso-25000-standards/iso-25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010).

---

## Bibliografia

* ODS - Nações Unidas. Disponível em: [https://brasil.un.org/pt-br/sdgs](https://brasil.un.org/pt-br/sdgs).
* MEPA - Monitoramento de Energia em Plataforma Aberta. Disponível em: [https://gitlab.com/lappis-unb/projects/SMI/mepa](https://gitlab.com/lappis-unb/projects/SMI/mepa).

---
## Histórico de Versões

| **Data**       | **Versão** | **Descrição**                         | **Autor**                                      | **Revisor**                                      | **Data da Revisão** |
| :--------: | :----: | :-------------------------------- | :----------------------------------------: | :----------------------------------------: | :-------------: |
| 27/09/2025 |  `1.0`   | Documentação inicial da entrega da Fase 1 | [`@Davia Aguiar`](https://github.com/davi-aguiar-vieira) | [`@Fabio`](https://github.com/fabinsz) |   27/09/2025    |
| 30/09/2025 |  `1.1`   | Documentação mais detalhada dos modelos de qualidade, adaptação e priorização | [`@Fabio`](https://github.com/fabinsz) | [`@`]() |      |


