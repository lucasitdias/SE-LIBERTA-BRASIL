# Getting Started - Se Liberta Brasil

Este guia ajudará você a começar a usar e contribuir com a plataforma Se Liberta Brasil.

## 📦 Instalação

### Pré-requisitos

- **Node.js** versão 14 ou superior
- **Git** para clonar o repositório
- Editor de código (recomendado: VS Code)

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/lucasitdias/SE-LIBERTA-BRASIL.git
cd SE-LIBERTA-BRASIL
```

### Passo 2: Instale Dependências

```bash
npm install
```

*Nota: Atualmente não há dependências externas, mas este comando pode ser útil no futuro.*

### Passo 3: Inicie o Servidor

```bash
npm start
```

O servidor iniciará em `http://localhost:3000`

## 🌐 Acessando a Plataforma

Abra seu navegador e acesse:
```
http://localhost:3000
```

Você verá a página inicial da plataforma com informações sobre o projeto.

## 📂 Estrutura do Projeto

```
SE-LIBERTA-BRASIL/
│
├── src/                    # Código fonte
│   ├── models/            # Modelos de dados
│   │   └── Politician.js  # Modelo de político/candidato
│   ├── views/             # Views (futuro)
│   └── server.js          # Servidor HTTP
│
├── data/                   # Dados em JSON
│   ├── politicians/       # Dados de políticos atuais
│   └── candidates/        # Dados de candidatos
│
├── docs/                   # Documentação
│   ├── data-schema.md     # Schema dos dados
│   ├── api.md             # Documentação da API
│   └── getting-started.md # Este arquivo
│
├── public/                 # Arquivos públicos/frontend
│   ├── index.html         # Página inicial
│   ├── styles.css         # Estilos
│   └── app.js             # JavaScript do frontend
│
├── .gitignore             # Arquivos ignorados pelo git
├── CONTRIBUTING.md        # Guia de contribuição
├── LICENSE                # Licença MIT
├── package.json           # Configuração do Node.js
└── README.md              # Documentação principal
```

## 🎯 Casos de Uso

### 1. Buscar Informações sobre Políticos

1. Acesse a plataforma em seu navegador
2. Use a barra de busca para procurar por nome, partido ou cargo
3. Visualize os resultados

### 2. Adicionar Dados de um Político

1. Navegue até `data/politicians/`
2. Crie um novo arquivo JSON seguindo o schema em `docs/data-schema.md`
3. Valide o JSON
4. Submeta via Pull Request

Exemplo de arquivo:
```json
{
  "id": "novo-politico-001",
  "nome": "Nome Completo",
  "nome_urna": "Nome de Urna",
  "partido": {
    "sigla": "SIGLA",
    "nome": "Nome do Partido"
  },
  "fontes": [
    {
      "tipo": "TSE",
      "url": "URL_DA_FONTE",
      "data_consulta": "2024-01-15"
    }
  ],
  "atualizado_em": "2024-01-15T10:00:00Z"
}
```

### 3. Contribuir com Código

1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/minha-contribuicao`
3. Faça suas alterações
4. Commit: `git commit -m "Descrição da mudança"`
5. Push: `git push origin feature/minha-contribuicao`
6. Abra um Pull Request

## 🧪 Testes

Atualmente, não há testes automatizados configurados. Para validar manualmente:

1. Inicie o servidor: `npm start`
2. Acesse `http://localhost:3000`
3. Teste a busca
4. Verifique se os dados estão sendo exibidos corretamente

## 🔧 Desenvolvimento

### Modo de Desenvolvimento

```bash
npm run dev
```

### Adicionar Novos Recursos

1. Consulte `CONTRIBUTING.md` para diretrizes
2. Mantenha o código limpo e documentado
3. Siga o padrão existente
4. Teste suas mudanças

### Boas Práticas

- **Commits descritivos**: Use mensagens claras
- **Código limpo**: Mantenha legibilidade
- **Documentação**: Atualize quando necessário
- **Testes**: Valide suas mudanças

## 📚 Próximos Passos

- [ ] Implementar API REST
- [ ] Adicionar banco de dados
- [ ] Sistema de busca avançado
- [ ] Interface de administração
- [ ] Testes automatizados
- [ ] Deploy em produção

## 🆘 Precisa de Ajuda?

- **Issues**: Abra uma issue no GitHub
- **Documentação**: Consulte os arquivos em `/docs`
- **Comunidade**: Participe das discussões

## 📖 Leitura Adicional

- [README.md](../README.md) - Visão geral do projeto
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Como contribuir
- [data-schema.md](data-schema.md) - Estrutura de dados
- [api.md](api.md) - Documentação da API

---

**Bem-vindo ao Se Liberta Brasil!** 🇧🇷

Qualquer dúvida, não hesite em abrir uma issue ou discussão no repositório.
