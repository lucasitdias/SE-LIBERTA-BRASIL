# API Documentation - Se Liberta Brasil

## Overview

Esta documentação descreve as APIs disponíveis (ou planejadas) para a plataforma Se Liberta Brasil.

## Status Atual

**Versão:** 1.0.0 (Inicial)  
**Status:** Em desenvolvimento

Atualmente, a plataforma serve conteúdo estático. As APIs REST estão planejadas para versões futuras.

## Endpoints Planejados

### Políticos

#### GET /api/politicians

Retorna lista de todos os políticos.

**Parâmetros de query (opcionais):**
- `partido` - Filtrar por sigla do partido
- `cargo` - Filtrar por cargo atual
- `estado` - Filtrar por estado/localidade
- `limit` - Número máximo de resultados (padrão: 50)
- `offset` - Offset para paginação (padrão: 0)

**Exemplo de resposta:**
```json
{
  "count": 100,
  "next": "/api/politicians?offset=50",
  "previous": null,
  "results": [
    {
      "id": "exemplo-001",
      "nome": "Maria das Graças Silva",
      "nome_urna": "Maria Silva",
      "partido": {
        "sigla": "EXEMPLO",
        "nome": "Partido Exemplo"
      },
      "cargo_atual": {
        "titulo": "Deputada Federal",
        "localidade": "São Paulo"
      }
    }
  ]
}
```

#### GET /api/politicians/{id}

Retorna detalhes de um político específico.

**Parâmetros:**
- `id` - ID único do político

**Exemplo de resposta:**
```json
{
  "id": "exemplo-001",
  "nome": "Maria das Graças Silva",
  "nome_urna": "Maria Silva",
  "data_nascimento": "1980-05-20",
  "partido": {
    "sigla": "EXEMPLO",
    "nome": "Partido Exemplo",
    "numero": 99
  },
  "cargo_atual": {
    "titulo": "Deputada Federal",
    "mandato_inicio": "2023-02-01",
    "mandato_fim": "2027-01-31",
    "localidade": "São Paulo"
  },
  "historico": [...],
  "propostas": [...],
  "fontes": [...]
}
```

### Candidatos

#### GET /api/candidates

Retorna lista de candidatos.

**Parâmetros de query (opcionais):**
- `partido` - Filtrar por sigla do partido
- `cargo` - Filtrar por cargo pretendido
- `eleicao` - Filtrar por ano da eleição
- `limit` - Número máximo de resultados
- `offset` - Offset para paginação

#### GET /api/candidates/{id}

Retorna detalhes de um candidato específico.

### Busca

#### GET /api/search

Busca por políticos e candidatos.

**Parâmetros de query:**
- `q` - Termo de busca (obrigatório)
- `type` - Tipo: `politician`, `candidate` ou `all` (padrão: `all`)
- `limit` - Número máximo de resultados

**Exemplo de resposta:**
```json
{
  "query": "maria silva",
  "count": 5,
  "results": [
    {
      "type": "politician",
      "id": "exemplo-001",
      "nome": "Maria das Graças Silva",
      "relevance": 0.95
    }
  ]
}
```

## Códigos de Status HTTP

- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `400 Bad Request` - Requisição inválida
- `404 Not Found` - Recurso não encontrado
- `500 Internal Server Error` - Erro no servidor

## Rate Limiting

(A ser definido na implementação)

Planejado: 100 requisições por minuto por IP

## Autenticação

Para endpoints públicos de leitura: Não requerida

Para endpoints de escrita (contribuição de dados): A ser definido

## CORS

A API permitirá requisições de qualquer origem para endpoints públicos.

## Versionamento

A API usa versionamento de URL: `/api/v1/...`

## Formatos Suportados

- JSON (padrão)

## Implementação Futura

As seguintes funcionalidades estão planejadas:

- [ ] API REST completa
- [ ] Sistema de autenticação para contribuidores
- [ ] Webhook para atualizações
- [ ] GraphQL endpoint
- [ ] WebSocket para atualizações em tempo real
- [ ] API de estatísticas e analytics

## Contribuindo

Para contribuir com a implementação da API, consulte [CONTRIBUTING.md](../CONTRIBUTING.md).

---

**Última atualização:** 2024-01-15
