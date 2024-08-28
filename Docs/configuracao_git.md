Aqui está um passo a passo em Markdown para um programador de software iniciante que aborda como criar e usar Git e GitHub, com as seções que você solicitou:

```markdown
# Passo a Passo para Iniciantes: Usando Git e GitHub

## 1. Configurações do Git

Antes de começar a usar o Git, você precisa configurá-lo com seu nome de usuário e e-mail. Estes serão usados para identificar as alterações que você fizer nos repositórios.

### 1.1 Configurar Nome de Usuário
```bash
git config --global user.name "Seu Nome"
```

### 1.2 Configurar E-mail
```bash
git config --global user.email "seu-email@exemplo.com"
```

### 1.3 Verificar as Configurações
Você pode verificar se as configurações foram aplicadas corretamente usando:
```bash
git config --list
```

## 2. Criação de um Novo Repositório

Para criar um novo repositório Git, siga os passos abaixo:

### 2.1 Iniciar um Novo Repositório
No diretório do seu projeto, execute:
```bash
git init
```

### 2.2 Adicionar Arquivos ao Repositório
Adicione os arquivos do seu projeto ao repositório com:
```bash
git add .
```

### 2.3 Fazer o Primeiro Commit
Depois de adicionar os arquivos, faça um commit inicial:
```bash
git commit -m "Primeiro commit"
```

## 3. Acessar um Repositório Salvo no GitHub

Se você já possui um repositório no GitHub, pode cloná-lo para seu ambiente local.

### 3.1 Clonar o Repositório
Use o comando abaixo, substituindo `<url-do-repositorio>` pela URL do repositório no GitHub:
```bash
git clone <url-do-repositorio>
```

## 4. Envio de Alterações para um Repositório Remoto

Após fazer alterações no código, você pode enviar as atualizações para o repositório remoto no GitHub.

### 4.1 Verificar Status das Alterações
Verifique quais arquivos foram modificados com:
```bash
git status
```

### 4.2 Adicionar Alterações
Adicione os arquivos modificados ao estágio de commit:
```bash
git add .
```

### 4.3 Fazer um Commit das Alterações
Registre as alterações com um commit:
```bash
git commit -m "Descrição das alterações"
```

### 4.4 Enviar para o Repositório Remoto
Envie as alterações para o GitHub:
```bash
git push origin main
```

## 5. Atualização do Repositório Local

Para garantir que seu repositório local esteja atualizado com as últimas alterações do repositório remoto:

### 5.1 Puxar as Últimas Alterações
Use o comando:
```bash
git pull origin main
```

## 6. Referências

- [Documentação Oficial do Git](https://git-scm.com/doc)
- [Guias do GitHub](https://docs.github.com/)
- [Tutorial Interativo de Git](https://learngitbranching.js.org/)

```

Este guia cobre as etapas básicas para configurar e utilizar o Git e GitHub, oferecendo um bom ponto de partida para programadores iniciantes.