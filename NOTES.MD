## npm init e npm init -y

### **`npm init`**

O comando `npm init` é usado para criar um arquivo `package.json`, que é essencial para gerenciar as dependências, scripts e metadados de um projeto Node.js.

Quando você executa `npm init`, o npm faz uma série de perguntas interativas para configurar o arquivo `package.json`, como:

- Nome do projeto.
- Versão.
- Descrição.
- Ponto de entrada (arquivo principal).
- Repositório Git.
- Palavras-chave.
- Autor.
- Licença.

Esse método é ideal para personalizar as configurações iniciais do projeto.

---

### **`npm init -y`**

O comando `npm init -y` faz a mesma coisa que o `npm init`, mas **preenche automaticamente as configurações padrão**, sem perguntas interativas. Ele cria um arquivo `package.json` com as seguintes informações:

```json
{
  "name": "nome-do-projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
