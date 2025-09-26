# Roadmap do Design System - Meliva.ai

Este documento descreve o plano de alto nível e o status das fases de desenvolvimento do Design System.

---

## Fases do Projeto

Aqui está o status atual de cada fase principal.

### Fase 1: Fundação e Rebranding
*   **Status:** ✅ Concluída
*   **Objetivo:** Estabelecer a base técnica do projeto, renomear todas as referências do fork original (`webawesome`) para a nova identidade da Meliva.ai, e configurar a governança inicial.
*   **Tarefas Principais:**
    *   [x] Definir e alinhar o `blueprint.md`.
    *   [x] Estruturar os documentos de governança (`roadmap.md`, `CHANGELOG.md`).
    *   [ADIADO] Renomear o pacote `packages/webawesome` para `packages/meliva-ui`.
    *   [ADIADO] Atualizar o `package.json` da raiz e do pacote com os novos nomes.
    *   [ADIADO] Realizar uma busca global por "webawesome" e "shoelace" para substituir pela nova identidade.

### Fase 2: Customização de Tokens
*   **Status:** ⏳ Em Andamento
*   **Objetivo:** Implementar as especificações de design (cores, tipografia, espaçamento, etc.) da Meliva.ai, customizando os tokens de design do sistema.
*   **Tarefas Principais:**
    *   [>] Mapear todos os tokens de design necessários.
    *   [ ] Implementar a paleta de cores da Meliva.ai nos arquivos de tema.
    *   [ ] Ajustar os tokens de tipografia (fontes, tamanhos, pesos).
    *   [ ] Validar a aplicação dos tokens em componentes chave.

### Fase 3: Documentação e Adoção
*   **Status:** ⏸️ Não Iniciado
*   **Objetivo:** Melhorar e customizar o site de documentação para refletir a marca da Meliva.ai e facilitar a adoção do sistema por outras equipes.
*   **Tarefas Principais:**
    *   [ ] Customizar o layout e o branding do site de documentação.
    *   [ ] Criar exemplos de uso claros e práticos.
    *   [ ] Escrever guias de "como começar" para desenvolvedores.

### Fase 4: Manutenção e Evolução
*   **Status:** ⏸️ Não Iniciado
*   **Objetivo:** Definir um processo claro para relatar bugs, solicitar novos componentes e contribuir para o Design System.
*   **Tarefas Principais:**
    *   [ ] Estabelecer um fluxo de governança de contribuições.
    *   [ ] Configurar templates para issues (bugs, feature requests) no repositório.
