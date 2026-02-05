# Dados de Candidatos

Esta pasta contém os arquivos JSON com informações sobre candidatos que pretendem concorrer em eleições futuras.

## Estrutura

Cada arquivo deve seguir o formato definido em `/docs/data-schema.md`, com adaptações para candidatos:
- Use `cargo_pretendido` ao invés de `cargo_atual`
- Inclua informação sobre qual eleição está concorrendo

## Nomenclatura

Os arquivos devem ser nomeados usando o padrão:
- `candidato-{id}.json` onde {id} é um identificador único

Exemplo: `candidato-exemplo-001.json`

## Como Adicionar Novos Candidatos

1. Crie um novo arquivo JSON nesta pasta
2. Siga rigorosamente o schema definido
3. Verifique todas as informações
4. Inclua fontes confiáveis (especialmente TSE)
5. Submeta via Pull Request

## Validação

Antes de submeter, certifique-se de que:
- ✅ O JSON é válido
- ✅ Todos os campos obrigatórios estão preenchidos
- ✅ As fontes são verificáveis
- ✅ Informações sobre a eleição estão corretas
- ✅ Não há opiniões pessoais, apenas fatos

Para mais informações, consulte o [Guia de Contribuição](../../CONTRIBUTING.md).
