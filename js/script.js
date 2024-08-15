import { aleatorio, nome } from "./aleatorio.js";
import {perguntas} from "./perguntas.js";
const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');
const botaoJogarNovamente = document.querySelector(".novamente-bnt");
const perguntas = [
    {
        enunciado: "Você decide o futuro da IA Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
        alternativas: [
            {
            texto: "Isso é assustador!",
            afirmacao: [
                "No inicio ficou com medo do que essa tecnologia pode fazer." 
            ],
            proxima: 1,
        },
        {
            texto:"Isso é maravilhoso!",
            afirmacao: [
                "Quis saber como usar IA no seu dia a dia."
            ],
            proxima: 2,
        },
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",
        alternativas: [
            {
                texto:"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", 
                afirmacao: [
                    "Conseguiu utilizar a IA para buscar informações úteis."
                ],
                proxima: 1,
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
                ],
                proxima: 2,
                },
        ]
    },
        {
        enunciado: "Depois que você escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro o que você faz?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas", 
                afirmacao: [
                     "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
                ],
                proxima: 1,
                },
                {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:[
                     "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
                ],
                proxima: 2,
                },
            ],
        },
        {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora o que você faz?"
        alternativas:[
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.", 
                afirmacao:[
                    "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
                ],
                proxima: 1,
                },
                {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao:[
                    "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."   
                ]
                proxima: 2, 
                },
            ],
        }
    {
enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {  
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
                ]
                proxima: 1,
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    }, 
]; 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
mostraResultado();
return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = aleatorio (opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes+"";
    atual++;
    mostraPergunta();
};
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049,$(nome)";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add ("mostrar");
    botaoJogarNovamente.addEventListener ("click",jogaNovamente);
}
function aleatorio (lista){
    const posicao = Math.floor(math.random()*lista.length);
    return lista [posicao];
}
export const nome = aleatorio(nomes);

function botaoJogarNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta ();
}
function substituiNome () {
    for (pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome ();
mostraPergunta();