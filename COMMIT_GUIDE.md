# 📝 Guia de Commits
 
 Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/), com **mensagens claras, consistentes e no infinitivo**.
 
 ## 📌 Estrutura básica:
 
 ```
 <tipo>(escopo opcional): <mensagem curta no infinitivo>
 ```
 
 ### Exemplos:
 
 - `feat(auth): adicionar login com Google`
 - `fix(home): corrigir quebra de layout em mobile`
 - `docs(readme): atualizar instruções de setup`
 - `refactor(api): reorganizar funções de chamada HTTP`
 
 ## 🔑 Tipos mais comuns:
 
 | Tipo       | Quando usar                                        |
 | ---------- | -------------------------------------------------- |
 | `feat`     | Para adicionar uma nova funcionalidade             |
 | `fix`      | Para corrigir bugs ou comportamentos errados       |
 | `docs`     | Para alterações na documentação                    |
 | `style`    | Para ajustes visuais ou de formatação (sem lógica) |
 | `refactor` | Para mudanças internas sem alterar funcionalidades |
 | `test`     | Para adicionar ou ajustar testes                   |
 | `chore`    | Para tarefas internas, ex: atualizar dependências  |
 
 ## ✅ Boas práticas:
 
 - Use **verbos no infinitivo**: adicionar, corrigir, atualizar, remover, etc.
 - Seja objetivo e claro na descrição.
 - Não termine a linha com ponto final.
 - Use o campo de descrição longa se necessário (linha em branco depois da primeira).
 
 ## 💬 Exemplos reais:
 
 ```
 feat(vite): adicionar configuração para acesso externo ao dev server
 
 Permite testar a aplicação em dispositivos da mesma rede local.
 ```
 
 ```
 fix(router): corrigir redirecionamento após login
 
 O usuário era levado para a home mesmo ao acessar uma rota protegida.
 ```
 
 ```
 docs: atualizar instruções de instalação no Windows
 ```
 
 ---
 
 Para dúvidas ou sugestões, fale com o time de desenvolvimento.
 Bons commits! 🚀