const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Imagine você precisando de assistência até que você descobre uma ferramenta ferramenta muito útil que pode ser utiliad em várias situações, estas são as famigeradas inteligências artificiais. Qual o primeiro pensamento?",
    alternativas: [
    "Isso é bizarro!",
    "Isso é incrível!"

    ]
}
{
    enunciado: "Com a descoberta desta tecnologia, um professoror de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma? "
    alternativas: [
        "usa esta ferramenta para me auxiliar neste trabalho",
        "Escreve o trabalho usando como base conversa com os amigos e algumas pesquisas na internet"
   ]  
}
{
    enunciado:"Após a elaboração do trabalho escrito, o professor realizou uma discussão entre a turma para entender como foi feita a pesquisa e escrita. Nessa conversa também foi enfatizado um ponto muito importante: como a IA impacta os futuros empregos. Nesse debate, como você se posiciona?
    ", 
    alternativas: [
    "Defendo a ideia de como precisamos desta ferramenta para evoluirmos e o quanto ela irá facilitar e mudar os em,pregos para melhor no futuro",
    "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores." 
    

   ]  
}
{
    enunciado: "Ao final do debate, você precisou criar um texto finalizador no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
        "Criar um texto usando novamente uma plataforma de Inteligência artificial.",
            "Criar um texto por conta prórpia com o auxilio da internet."
    
   ]  
}
{
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
    alternativas: [
        "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
    

   ]  
}
];
let atual = 0
let PerguntaAtual;

function motraPergunta() {
    PerguntaAtual = perguntas[atual]
    caixasPergunta.textContent = perguntaAtual
}
