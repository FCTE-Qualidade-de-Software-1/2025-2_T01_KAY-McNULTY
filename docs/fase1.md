# FASE 1

## Introdução
Avaliar a qualidade de um software é um passo fundamental para garantir sua confiabilidade e aplicabilidade prática. O **MEPA** é um sistema de software livre, de código aberto, cuja função principal é auxiliar instituições públicas, especialmente as Instituições Federais de Ensino Superior (IFES), na **otimização de contratos de energia elétrica**.  
Ao processar faturas e dados regulatórios, o MEPA recomenda modalidades contratuais mais vantajosas, promovendo **eficiência energética** e **redução de custos**.

Por estar inserido em um contexto crítico — o da gestão pública de energia —, o MEPA deve atender a padrões elevados de **corretude**, garantindo resultados confiáveis; de **eficiência**, para processar grandes volumes de dados rapidamente; e de **manutenibilidade**, considerando sua natureza de software livre que demanda constante evolução colaborativa.  
Nesta fase, apresentamos também os **stakeholders**, a classificação do produto e um modelo de qualidade adaptado às características mais relevantes.

---

## Objetivo
O objetivo da Fase 1 é **definir os requisitos de avaliação da qualidade** do software selecionado pela equipe, o **MEPA – Monitoramento de Energia em Plataforma Aberta**, desenvolvido pela Universidade de Brasília (UnB).  
Essa etapa inicial estabelece a base para todo o processo de avaliação, descrevendo o **propósito da avaliação**, a **classificação do tipo de produto** e a **especificação inicial do modelo de qualidade** que será adotado.  
A clareza nessa fase é essencial para garantir que os resultados sejam consistentes, reproduzíveis e aplicáveis às necessidades reais das partes interessadas.

---

## Metodologia
A condução da Fase 1 seguiu um processo estruturado em etapas:

1. **Identificação do contexto e stakeholders:** foram mapeados o requisitante principal (UnB), os compradores potenciais (IFES), os fornecedores (LAPPIS/UnB), os desenvolvedores (comunidade acadêmica e de software livre) e os operadores (gestores de energia).  
2. **Classificação do produto:** o MEPA foi caracterizado como um sistema de **apoio à decisão** em gestão energética, com arquitetura baseada em aplicação **web** e **API aberta**, além de ser distribuído como **software livre**.  
3. **Definição do propósito da avaliação:** estabeleceu-se que a avaliação deve verificar se o MEPA atende ao seu propósito central, entregando resultados corretos, eficientes e de fácil manutenção.  
4. **Adaptação do modelo de qualidade ISO/IEC 25010:** foram selecionadas apenas as características mais críticas (corretude, eficiência e manutenibilidade), deixando de fora, nesta fase, aspectos como usabilidade.  
5. **Priorização das características de qualidade:** aplicou-se o critério de alinhamento com o propósito do produto, impacto para o usuário final e relevância para sua continuidade no ambiente real.  
6. **Definição do escopo da avaliação:** estabeleceu-se que o foco será nas funcionalidades principais, no código-fonte disponível em repositórios públicos, na documentação e em relatórios de uso, com profundidade suficiente para gerar insumos práticos para futuras evoluções.

---

## Resultados Esperados

### Requisitante e partes interessadas
O **requisitante principal** é a Universidade de Brasília, no contexto da disciplina de Qualidade de Software (FGA315).  
As **partes interessadas** incluem:
- **Comprador/Cliente:** Instituições Federais de Ensino Superior (IFES), que se beneficiam da economia gerada pela plataforma.  
- **Fornecedor:** o LAPPIS/UnB, responsável pela manutenção e evolução do software.  
- **Desenvolvedores:** equipe acadêmica e comunidade de software livre.  
- **Operadores:** gestores de energia das universidades, que utilizam diretamente as recomendações do sistema.  

### Descrição estruturada do software
O **MEPA** é um software de código aberto voltado para a **gestão e otimização de contratos de energia elétrica**. Ele processa dados de consumo e aplica algoritmos de análise para sugerir a modalidade tarifária mais econômica, apoiando a tomada de decisão em instituições públicas.  
Por ser software livre, pode ser adaptado e expandido conforme as necessidades de cada instituição.

### Classificação do tipo de produto
O software é classificado como:
- Um **sistema de apoio à decisão** voltado à gestão energética.  
- Uma aplicação **web**, acessível por interface gráfica e integrável via **API aberta**.  
- Um **produto de software livre**, garantindo transparência, auditabilidade e possibilidade de contribuição externa.  

### Propósito da avaliação
A avaliação pretende:
- Determinar o nível de qualidade do MEPA frente às características selecionadas.  
- Garantir que os resultados sejam **práticos e aplicáveis** em instituições reais.  
- Fornecer **insumos para melhorias contínuas** do software, orientando tanto ajustes técnicos quanto decisões de governança do projeto.  

### Modelo de qualidade inicial
O modelo adotado foi baseado na norma **ISO/IEC 25010**, mas adaptado para refletir as prioridades do MEPA:  
- **Corretude:** garantir que os resultados obtidos (simulações e recomendações) sejam confiáveis e compatíveis com os objetivos do usuário.  
- **Eficiência:** assegurar que o sistema processe rapidamente grandes volumes de dados.  
- **Manutenibilidade:** avaliar a facilidade de modificação, atualização e contribuição, especialmente considerando o caráter livre e colaborativo do software.  

Aspectos como **usabilidade** foram excluídos nesta fase, pois não se relacionam diretamente ao propósito principal da avaliação.

### Adaptação e priorização
- **Corretude – Alta prioridade:** fundamental para assegurar a confiança dos usuários nas recomendações.  
- **Eficiência – Alta prioridade:** garante que o sistema seja viável mesmo em cenários de alto volume de dados.  
- **Manutenibilidade – Média prioridade:** importante para evolução futura e sustentabilidade do projeto.  

A priorização foi feita com base na relevância para o propósito declarado e no impacto direto para as IFES.

### Escopo e profundidade da avaliação
O escopo cobre:
- As funcionalidades centrais do MEPA (análise de faturas e recomendação de contratos).  
- O código aberto disponível no GitLab.  
- A documentação e os relatórios de uso.  

A profundidade da análise será suficiente para apontar **pontos fortes, fragilidades e oportunidades de melhoria**, sem esgotar todos os aspectos possíveis.  
Essa avaliação é complementar a futuras análises de **usabilidade** e **segurança**.

### ODS relacionados
O MEPA contribui diretamente para os seguintes Objetivos de Desenvolvimento Sustentável (ODS):  
- **ODS 7 (Energia acessível e limpa, meta 7.3):** promove eficiência energética.  
- **ODS 12 (Consumo e produção responsáveis, metas 12.2/12.6/12.7):** baseia decisões em dados, reduz desperdícios e incentiva práticas sustentáveis.  
- **ODS 13 (Ação climática, meta 13.2):** ao otimizar consumo e contratos, contribui para reduzir emissões de CO₂.  
- **ODS 9 (Indústria, inovação e infraestrutura, meta 9.4):** moderniza a gestão energética pública com uso de IA e software livre.  
- **ODS 4 (Educação de qualidade, meta 4.a):** libera orçamento para ensino e pesquisa ao reduzir gastos com energia.  
- **ODS 17 (Parcerias, metas 17.16/17.17):** articula MEC, UnB e redes de universidades na adoção da ferramenta.  

**Justificativa:** ao integrar tecnologia aberta com impacto direto em economia, sustentabilidade e inovação, o MEPA mostra-se alinhado a múltiplos ODS e reforça o papel da universidade como agente de transformação social.


## Bibliografia

* ODS - Nações Unidas. Disponível em: [https://brasil.un.org/pt-br/sdgs](https://brasil.un.org/pt-br/sdgs)

* ISO/IEC 25010 – Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE) — System and Software Quality Models. Ref: [https://iso25000.com/index.php/en/iso-25000-standards/iso-25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010)

* MEPA - Monitoramento de Energia em Plataforma Aberta. Disponível em: [https://gitlab.com/lappis-unb/projects/SMI/mepa](https://gitlab.com/lappis-unb/projects/SMI/mepa)


