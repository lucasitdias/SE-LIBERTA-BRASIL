/**
 * Politician Model
 * Defines the structure and validation for politician/candidate data
 */

class Politician {
    constructor(data) {
        this.id = data.id || this.generateId();
        this.nome = data.nome;
        this.nome_urna = data.nome_urna;
        this.cpf = data.cpf || null;
        this.data_nascimento = data.data_nascimento || null;
        this.foto_url = data.foto_url || null;
        this.partido = data.partido || {};
        this.cargo_atual = data.cargo_atual || {};
        this.historico = data.historico || [];
        this.contato = data.contato || {};
        this.propostas = data.propostas || [];
        this.processos_judiciais = data.processos_judiciais || [];
        this.fontes = data.fontes || [];
        this.atualizado_em = data.atualizado_em || new Date().toISOString();
    }

    generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    validate() {
        const errors = [];

        if (!this.nome) {
            errors.push('Nome é obrigatório');
        }

        if (!this.partido || !this.partido.sigla) {
            errors.push('Partido (sigla) é obrigatório');
        }

        if (!this.fontes || this.fontes.length === 0) {
            errors.push('Pelo menos uma fonte é obrigatória');
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            nome_urna: this.nome_urna,
            cpf: this.cpf,
            data_nascimento: this.data_nascimento,
            foto_url: this.foto_url,
            partido: this.partido,
            cargo_atual: this.cargo_atual,
            historico: this.historico,
            contato: this.contato,
            propostas: this.propostas,
            processos_judiciais: this.processos_judiciais,
            fontes: this.fontes,
            atualizado_em: this.atualizado_em
        };
    }
}

module.exports = Politician;
