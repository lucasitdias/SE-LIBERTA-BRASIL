// Se Liberta Brasil - Main Application JavaScript

// Sample data structure (to be replaced with actual API calls)
const samplePoliticians = [
    {
        id: "1",
        nome: "Exemplo Político 1",
        nome_urna: "Político 1",
        partido: { sigla: "EXEMPLO", nome: "Partido Exemplo" },
        cargo_atual: { titulo: "Deputado Federal", localidade: "São Paulo" }
    },
    {
        id: "2",
        nome: "Exemplo Político 2",
        nome_urna: "Político 2",
        partido: { sigla: "TESTE", nome: "Partido Teste" },
        cargo_atual: { titulo: "Senador", localidade: "Rio de Janeiro" }
    }
];

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Search on button click
    searchButton.addEventListener('click', performSearch);

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (!query) {
            searchResults.innerHTML = '<p style="color: #666;">Digite um nome para buscar.</p>';
            return;
        }

        // Filter politicians based on search query
        const results = samplePoliticians.filter(politician => 
            politician.nome.toLowerCase().includes(query) ||
            politician.nome_urna.toLowerCase().includes(query) ||
            politician.partido.sigla.toLowerCase().includes(query)
        );

        displayResults(results, query);
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <p style="color: #666;">
                    Nenhum resultado encontrado para "<strong>${escapeHtml(query)}</strong>".
                </p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">
                    💡 <em>Esta é uma plataforma em construção. Contribua adicionando dados de políticos!</em>
                </p>
            `;
            return;
        }

        let html = `<p style="margin-bottom: 1rem;"><strong>${results.length}</strong> resultado(s) encontrado(s):</p>`;
        
        results.forEach(politician => {
            html += `
                <div style="border: 1px solid #e0e0e0; padding: 1rem; margin: 0.5rem 0; border-radius: 4px; background: white;">
                    <h4 style="color: #002776; margin-bottom: 0.5rem;">${escapeHtml(politician.nome)}</h4>
                    <p style="margin: 0.25rem 0;">
                        <strong>Nome de urna:</strong> ${escapeHtml(politician.nome_urna)}
                    </p>
                    <p style="margin: 0.25rem 0;">
                        <strong>Partido:</strong> ${escapeHtml(politician.partido.sigla)} - ${escapeHtml(politician.partido.nome)}
                    </p>
                    <p style="margin: 0.25rem 0;">
                        <strong>Cargo:</strong> ${escapeHtml(politician.cargo_atual.titulo)} - ${escapeHtml(politician.cargo_atual.localidade)}
                    </p>
                </div>
            `;
        });

        searchResults.innerHTML = html;
    }

    // Utility function to escape HTML
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Initial message
    searchResults.innerHTML = `
        <p style="color: #666; text-align: center;">
            Digite o nome de um político ou candidato para começar a busca.
        </p>
    `;
});

// Future: Load data from API
async function loadPoliticiansFromAPI() {
    try {
        // const response = await fetch('/api/politicians');
        // const data = await response.json();
        // return data;
        return samplePoliticians;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        return [];
    }
}

// Future: Add politician to database
async function addPolitician(politicianData) {
    try {
        // const response = await fetch('/api/politicians', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(politicianData)
        // });
        // return await response.json();
        console.log('Funcionalidade de adição será implementada em breve');
    } catch (error) {
        console.error('Erro ao adicionar político:', error);
    }
}
