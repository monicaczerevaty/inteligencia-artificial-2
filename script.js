const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');
const lista = [item1, item2]
const perguntas = [
    {
        enunciado: "Você decide o futuro da IA Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
        alternativas: [
            {
            texto: "Isso é assustador!",
            afirmação: "Afirmação 1" 
        },
        {
            texto:"Isso é maravilhoso!",
            afirmação: "Afirmação 2"
        }
        ],
    },
    {
        enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",
        alternativas: [
            {
                texto:"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", 
                afirmação: "Afirmação 1"
               },
        {
                   texto:"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmação: "Afirmação 2"
            }
        ]
    },
        {
        enunciado: "Depois que Gabriel escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro o que Gabriel faz:",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas", 
                afirmação: "Afirmação 1"
                },
                {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmação: "Afirmação 2"
                }
            ],
        },
        {
        enunciado: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?"
        alternativas:[
            "Criar uma imagem utilizando um gerador de imagem de IA.", 
            "Criar uma imagem utilizando uma plataforma de design como o Paint."],
    },
];          
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();

const lapis = {
    tamanho: 20,
    tipo: 'HB',
    cor:'Grafite',
    temBorrachaAtras: false
}
