# Data Schema - Se Liberta Brasil

## Schema para Políticos e Candidatos

Este documento define o formato de dados para registros de políticos e candidatos na plataforma.

## Estrutura de Dados

### Político/Candidato

```json
{
  "id": "string (UUID ou ID único)",
  "nome": "string (Nome completo)",
  "nome_urna": "string (Nome usado nas urnas)",
  "cpf": "string (CPF - opcional, se público)",
  "data_nascimento": "string (YYYY-MM-DD)",
  "foto_url": "string (URL da foto oficial)",
  "partido": {
    "sigla": "string (Ex: PT, PSDB, PL)",
    "nome": "string (Nome completo do partido)",
    "numero": "number (Número do partido)"
  },
  "cargo_atual": {
    "titulo": "string (Ex: Deputado Federal, Senador, Prefeito)",
    "mandato_inicio": "string (YYYY-MM-DD)",
    "mandato_fim": "string (YYYY-MM-DD)",
    "localidade": "string (Ex: São Paulo, Brasil)"
  },
  "historico": [
    {
      "cargo": "string",
      "periodo": "string (Ex: 2019-2022)",
      "localidade": "string"
    }
  ],
  "contato": {
    "email": "string (Email oficial)",
    "telefone": "string (Telefone de gabinete)",
    "website": "string (Website oficial)",
    "redes_sociais": {
      "twitter": "string (URL)",
      "facebook": "string (URL)",
      "instagram": "string (URL)"
    }
  },
  "propostas": [
    {
      "titulo": "string",
      "descricao": "string",
      "area": "string (Ex: Saúde, Educação, Segurança)"
    }
  ],
  "processos_judiciais": [
    {
      "numero": "string",
      "descricao": "string",
      "status": "string (Ex: Em andamento, Arquivado)",
      "fonte": "string (URL da fonte)"
    }
  ],
  "fontes": [
    {
      "tipo": "string (Ex: TSE, Câmara dos Deputados)",
      "url": "string",
      "data_consulta": "string (YYYY-MM-DD)"
    }
  ],
  "atualizado_em": "string (ISO 8601 timestamp)"
}
```

## Campos Obrigatórios

- `id`
- `nome`
- `partido.sigla`
- `fontes` (pelo menos uma fonte)
- `atualizado_em`

## Campos Opcionais

Todos os outros campos são opcionais, mas recomenda-se preencher o máximo de informações verificáveis possível.

## Validação de Dados

1. **Fontes**: Todas as informações devem ter fontes verificáveis
2. **Datas**: Usar formato ISO 8601 (YYYY-MM-DD)
3. **URLs**: Devem ser válidas e acessíveis
4. **Opiniões**: Não incluir opiniões pessoais, apenas fatos

## Fontes Recomendadas

- **TSE** (Tribunal Superior Eleitoral): Dados oficiais de candidaturas
- **Câmara dos Deputados**: Informações sobre deputados
- **Senado Federal**: Informações sobre senadores
- **Portais de Transparência**: Dados sobre gastos e declarações
- **Diários Oficiais**: Publicações oficiais

## Exemplo Completo

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "nome": "João da Silva Santos",
  "nome_urna": "João Silva",
  "data_nascimento": "1975-03-15",
  "foto_url": "https://example.com/foto.jpg",
  "partido": {
    "sigla": "PSDB",
    "nome": "Partido da Social Democracia Brasileira",
    "numero": 45
  },
  "cargo_atual": {
    "titulo": "Deputado Federal",
    "mandato_inicio": "2023-02-01",
    "mandato_fim": "2027-01-31",
    "localidade": "São Paulo"
  },
  "historico": [
    {
      "cargo": "Vereador",
      "periodo": "2017-2020",
      "localidade": "São Paulo - SP"
    }
  ],
  "contato": {
    "email": "joao.silva@camara.leg.br",
    "website": "https://joaosilva.com.br",
    "redes_sociais": {
      "twitter": "https://twitter.com/joaosilva",
      "instagram": "https://instagram.com/joaosilva"
    }
  },
  "propostas": [
    {
      "titulo": "Melhoria da Saúde Pública",
      "descricao": "Ampliar investimentos em UBS",
      "area": "Saúde"
    }
  ],
  "fontes": [
    {
      "tipo": "TSE",
      "url": "https://divulgacandcontas.tse.jus.br/",
      "data_consulta": "2024-01-15"
    }
  ],
  "atualizado_em": "2024-01-15T10:30:00Z"
}
```

## Contribuindo com Dados

Ao adicionar novos dados:

1. Siga este schema rigorosamente
2. Verifique todas as informações
3. Cite fontes confiáveis
4. Mantenha neutralidade (sem vieses)
5. Atualize a data de modificação

---

Para mais informações, consulte [CONTRIBUTING.md](../CONTRIBUTING.md)
