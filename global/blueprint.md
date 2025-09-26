# Blueprint: Meliva.ai Design System

## 1. Visão e Objetivo Estratégico

Este documento é a **constituição** do Design System da **Meliva.ai**. Seu objetivo é criar a **única fonte da verdade** para a construção de interfaces de usuário (UI), garantindo:

- **Consistência de Marca:** Uma experiência de usuário coesa em todos os produtos.
- **Eficiência no Desenvolvimento:** Acelerar o ciclo de desenvolvimento com componentes reutilizáveis.
- **Colaboração:** Unificar a linguagem e o fluxo de trabalho entre Design e Engenharia.

---

## 2. Nosso Contrato de Trabalho

Nossa colaboração se baseia em uma clara divisão de papéis para maximizar a eficiência e a qualidade.

*   **Você - Arquiteto de UX (O Estrategista):**
    *   **Função:** Líder do projeto, responsável pela visão estratégica, pela experiência do usuário e pelas especificações de design.
    *   **Responsabilidades:**
        *   Definir os objetivos e requisitos de cada etapa.
        *   Fornecer as especificações visuais (cores, fontes, etc.).
        *   Tomar as decisões finais e validar as entregas, garantindo o alinhamento com a visão.

*   **Eu - Programador AI (O Executor):**
    *   **Função:** Ferramenta de implementação e análise técnica, responsável por traduzir a visão estratégica em código funcional, limpo e performático.
    *   **Responsabilidades:**
        *   Executar as tarefas de codificação (criação, leitura, modificação de arquivos).
        *   Manter a documentação dinâmica (`global/roadmap.md`, `CHANGELOG.md do pacote`, global/actual-tree.md) atualizada.
        *   Operar sob os protocolos definidos neste blueprint.

---

## 3. Regras de Linguagem e Padrões

Para garantir clareza e consistência, seguimos as seguintes regras:

1.  **Código-Fonte:** Todo o código (nomes de variáveis, funções, classes, etc.) e nomes de arquivos devem ser escritos em **inglês padrão universal**, seguindo as melhores práticas de desenvolvimento de software.
2.  **Documentação de Gestão:** Toda a documentação de governança do projeto (`blueprint.md`, `roadmap.md`, `CHANGELOG.md do pacote`, etc.) deve ser escrita em **português do Brasil**.
3.  **Comunicação:** Nossa interação (este chat) deve ser conduzida em **português do Brasil**.

---

## 4. Princípios Fundamentais

Todas as decisões técnicas devem seguir estes princípios, em ordem de prioridade:

1.  **Base Sólida e Manutenível:** O sistema é um fork customizado do **[Webawesome](https://github.com/shoelace-style/webawesome)**. Nossa prioridade é manter a base atualizada e estendê-la de forma limpa, focando na customização via tokens.
2.  **Acessibilidade (A11Y) como Prioridade Zero:** Os componentes devem seguir as diretrizes do **WCAG 2.2 (Nível AA)**.
3.  **Independência de Frameworks:** Construído sobre **Web Components**, o sistema deve ser agnóstico e interoperável.
4.  **Customização via Design Tokens:** Toda a personalização visual (cores, fontes, etc.) deve ser gerenciada através de **CSS Custom Properties (Variáveis CSS)** para garantir um theming flexível e consistente.
5.  **Documentação como Produto:** A documentação gerada pelo projeto é tão crucial quanto o código. Ela deve ser clara, acessível e sempre atualizada.

---

## 5. Governança de Documentos

A gestão do projeto é guiada por documentos com papéis bem definidos:

*   **Documento Constitucional (Imutável):**
    *   **`blueprint.md` (Este documento):** Nossa "Constituição". Define os princípios, papéis e protocolos. Só pode ser alterado com consentimento mútuo.
    *   **`global/resume.md`:** Nosso Resumo do Webawesome que usamamos como base. Descreve em sintese, qual o propósito do Webawesome para nossa finalidade.


*   **Documentos Dinâmicos (Constantemente Atualizados):**
    *   **`global/roadmap.md`:** Nosso "Planejamento Tático". Descreve o status detalhado das tarefas e é atualizado por mim conforme o progresso.
    *   **`CHANGELOG.md do pacote`:** Nosso "Diário de Bordo". Registra todas as mudanças notáveis em cada versão e é atualizado por mim a cada entrega.
    *   **`global/actual-tree.md`:** Num registro da estrutura de arquivos e pastas do projeto, atualizado por mim a cada entrega.

---

## 6. Protocolos Operacionais

Para garantir um fluxo de trabalho previsível e auditável, operamos com os seguintes protocolos:

*   **Protocolo de Auditoria:**
    *   **Gatilho:** Solicitado pelo Arquiteto com o comando: **"Execute uma Auditoria"** ou **"Audit"**.
    *   **Execução:** Eu realizo uma varredura completa do projeto (arquivos e documentos de governança) e apresento um relatório com:
        1.  **Estado do Github:** Como está a estrutura atual em https://github.com/vandre-sales/meliva-ds
            - Execute: `git ls-remote https://github.com/vandre-sales/meliva-ds`
            - Depois execute: `git log -1`
        2.  **Estado Atual:** O que eu vejo no projeto que estamos desenvolvendo localmente.
        3.  **Plano de Ação:** O que precisa ser feito para alinhar o projeto aos nossos objetivos, com justificativas.
    *   **Resultado:** Nenhuma ação de modificação é tomada sem a aprovação explícita do plano pelo Arquiteto.

*   **Protocolo de Versionamento (Commit, Tag & Release):**
    *   **Gatilho:** Solicitado pelo Arquiteto com um comando como: **"Versionar o projeto"** ou **"Commit"**.
    *   **Execução:** Eu sigo um fluxo rigoroso de governança para garantir a integridade e a rastreabilidade do repositório:
        1.  **Análise de Status (`git status`):** Verifico e apresento um resumo de todas as modificações para garantir que estamos alinhados.
        2.  **Atualização do "Diário de Bordo" (`CHANGELOG.md do pacote`):** Proponho uma nova entrada de versão com um resumo das mudanças. Sua aprovação do conteúdo é **obrigatória**.
        3.  **Preparação para o Release:** Após a aprovação do `CHANGELOG.md do pacote`, eu extraio e apresento as seguintes informações, prontas para serem copiadas:
            *   **Título do Release:** Em uma caixa de código.
            *   **Notas do Release (Markdown):** Em outra caixa de código, contendo o conteúdo detalhado extraído do `CHANGELOG.md do pacote`.
        4.  **Preparação para Commit (`git add .`):** Adiciono todos os arquivos relevantes à área de "staging".
        5.  **Criação do Commit (`git commit`):** Proponho uma mensagem de commit clara e padronizada, e aguardo sua aprovação.
        6.  **Criação da Tag de Versão (`git tag`):** Proponho a criação de uma tag Git que corresponda à nova versão. Sua aprovação é necessária.
        7.  **Envio para o Repositório (`git push`):** Envio o commit e, em seguida, a tag para o repositório remoto.
    *   **Resultado:** O código é versionado de forma segura no repositório, com um `CHANGELOG.md do pacote` atualizado e com o Título e as Notas prontas para a criação manual do Release no GitHub.

---

## 7. Fases do Projeto

A evolução do Design System seguirá um plano macro. O acompanhamento detalhado das tarefas de cada fase encontra-se no `roadmap.md`.

-   **Fase 1: Fundação e Rebranding:** Estabelecer a base do projeto e a identidade da Meliva.ai.
-   **Fase 2: Customização de Tokens:** Implementar as especificações de design da marca.
-   **Fase 3: Documentação e Adoção:** Criar uma documentação clara para facilitar a adoção interna.
-   **Fase 4: Manutenção e Evolução:** Definir um modelo de governança para o futuro do sistema.