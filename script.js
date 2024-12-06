// Mapeamento dos backgrounds para cada etapa
const backgrounds = {
    initial: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')", 
    portal: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    dungeon: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    caçador: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    invocacao: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    aliado: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    enigmas: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    boss: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')", 
    plot_twist: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')", 
    victory: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    escape: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    fim1: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    fim2: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    fim3: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    fim4: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')",
    fim5: "url('https://dimensaosete.com.br/static/5cb207a9165d79a495c7308e8774b09e/2493a/solo-leveling.webp')"
};

// Função principal para gerenciar as escolhas do jogador
function choose(choice) {
    const narrative = document.getElementById('narrative');

    switch (choice) {
        case 'choice1': // Caminho inicial - Aceitar a missão
            changeBackground('portal');
            narrative.innerHTML = "Você entra no portal e percebe que algo está diferente. Uma energia estranha preenche o ar. O que fazer?";
            updateChoices([
                { text: "Avançar para explorar a origem da energia.", action: "choice1-1" },
                { text: "Recusar e voltar para o mundo real.", action: "choice1-2" }
            ]);
            break;

        case 'choice1-1': // Avançar na dungeon
            changeBackground('dungeon');
            narrative.innerHTML = "Você encontra um enigma em uma sala misteriosa. Apenas uma resposta correta abrirá o caminho.";
            updateChoices([
                { text: "Resolver o enigma.", action: "choice1-1-1" },
                { text: "Ignorar o enigma e seguir por outro caminho.", action: "choice1-1-2" }
            ]);
            break;

        case 'choice1-1-1': // Resolver o enigma
            changeBackground('enigmas');
            narrative.innerHTML = "O enigma é complexo, mas você encontra a solução e avança para uma sala cheia de aliados invocados.";
            updateChoices([
                { text: "Unir-se aos aliados e enfrentar o chefão.", action: "choice1-1-1-1" },
                { text: "Trair os aliados e pegar o tesouro para si.", action: "choice1-1-1-2" }
            ]);
            break;

        case 'choice1-1-1-1': // Enfrentar o chefão com aliados
            changeBackground('boss');
            narrative.innerHTML = "O chefão é um cavaleiro colossal com uma aura mortal. Você e seus aliados se preparam para o combate.";
            updateChoices([
                { text: "Atacar diretamente com todo o poder.", action: "choice1-1-1-1-1" },
                { text: "Usar uma estratégia defensiva e observar.", action: "choice1-1-1-1-2" }
            ]);
            break;

        case 'choice1-1-1-2': // Trair os aliados
            changeBackground('plot_twist');
            narrative.innerHTML = "Você decide trair os aliados, mas um deles era uma armadilha mágica e agora você está encurralado!";
            updateChoices([
                { text: "Tentar lutar sozinho.", action: "end1" },
                { text: "Pedir perdão e ajudá-los no combate.", action: "choice1-1-1-1" }
            ]);
            break;

        case 'choice1-1-1-1-1': // Atacar o chefão
            changeBackground('victory');
            narrative.innerHTML = "Com um ataque devastador e trabalho em equipe, vocês derrotam o chefão e descobrem um item lendário.";
            updateChoices([
                { text: "Usar o item para ganhar poder absoluto.", action: "end3" },
                { text: "Deixar o item para proteger o equilíbrio do mundo.", action: "end4" }
            ]);
            break;

        case 'choice1-2': // Voltar ao mundo real
            changeBackground('escape');
            narrative.innerHTML = "Você decide abandonar a missão, mas o portal tenta prendê-lo em um loop temporal.";
            updateChoices([
                { text: "Lutar para escapar do loop.", action: "end2" },
                { text: "Aceitar ser parte do portal.", action: "end5" }
            ]);
            break;

        default: // Finais
            handleEnding(choice);
            break;
    }
}

// Função para alterar o background
function changeBackground(key) {
    if (backgrounds[key]) {
        document.body.style.backgroundImage = backgrounds[key];
    } else {
        console.error(`Background '${key}' não encontrado.`);
    }
}

// Função para atualizar as escolhas do jogador
function updateChoices(choices) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ''; // Limpa escolhas antigas
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => choose(choice.action);
        choicesContainer.appendChild(button);
    });
}

// Função para lidar com os finais
function handleEnding(choice) {
    const endings = {
        end1: { text: "Você tentou lutar sozinho, mas foi derrotado pelo chefão. Fim: Derrota Solitária.", background: "fim1" },
        end2: { text: "Você escapou do portal, mas perdeu algo importante em troca. Fim: Sobrevivente Marcado.", background: "fim2" },
        end3: { text: "Você usou o item lendário para ganhar poder absoluto e se tornou um deus entre caçadores. Fim: Deus das Sombras.", background: "fim3" },
        end4: { text: "Você deixou o item para manter o equilíbrio do mundo, ganhando respeito universal. Fim: Guardião do Equilíbrio.", background: "fim4" },
        end5: { text: "Você aceitou o destino no portal e se tornou sua nova guardião. Fim: Guardião do Portal.", background: "fim5" }
    };

    const ending = endings[choice];
    if (ending) {
        changeBackground(ending.background);
        const narrative = document.getElementById('narrative');
        narrative.innerHTML = ending.text;

        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
    } else {
        console.error(`Final '${choice}' não encontrado.`);
    }
}
