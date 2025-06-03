const quests = [
    {
        statement: "Onde você deve buscar abrigo se sua casa for afetada por uma enchente?",
        answers: [
            { id: 1, text: "a) No porão. ", correct: false },
            { id: 2, text: "b) No andar térreo da casa.", correct: false },
            { id: 3, text: "c) Nos andares superiores ou em um local seguro e elevado.", correct: true },
            { id: 4, text: "d) Dentro do carro.", correct: false }
        ]
    },
    {
        statement: "O que você deve fazer com os aparelhos elétricos durante uma enchente?",
        answers: [
            { id: 1, text: "a) Deixá-los ligados para secar. ", correct: false },
            { id: 2, text: "b) Desligar o disjuntor geral da casa.", correct: true },
            { id: 3, text: "c) Cobri-los com um pano úmido.", correct: false },
            { id: 4, text: "d) Retirá-los da tomada e colocá-los no chão.", correct: false }
        ]
    },
    {
        statement: "É seguro andar ou dirigir por áreas alagadas?",
        answers: [
            { id: 1, text: "a) Sim, se a água parecer rasa. ", correct: false },
            { id: 2, text: "b) Sim, carros mais altos conseguem passar.", correct: false },
            { id: 3, text: "c) Não, a correnteza pode arrastar você ou seu veículo.", correct: true },
            { id: 4, text: "d) Apenas se você conhecer o caminho.", correct: false }
        ]
    },
    {
        statement: "Qual documento é importante ter sempre à mão em caso de emergência?",
        answers: [
            { id: 1, text: "a) Contas antigas de consumo.", correct: false },
            { id: 2, text: "b) Fotos de família.", correct: false },
            { id: 3, text: "c) Documentos de identificação e contato de emergência.", correct: true },
            { id: 4, text: "d) Revistas e livros.", correct: false }
        ]
    },
    {
        statement: "O que você deve evitar consumir após uma enchente?",
        answers: [
            { id: 1, text: "a) Alimentos embalados a vácuo. ", correct: false },
            { id: 2, text: "b) Água da torneira ou alimentos que tiveram contato com a água da enchente.", correct: true },
            { id: 3, text: "c) Alimentos enlatados.", correct: false },
            { id: 4, text: "d) Frutas e vegetais frescos (desde que lavados).", correct: false }
        ]
    },
    {
        statement: "Qual o melhor kit de emergência para ter em casa?",
        answers: [
            { id: 1, text: "a) Um kit de costura.", correct: false },
            { id: 2, text: "b) Um kit com alimentos não perecíveis, água potável, lanterna e rádio a pilha.", correct: true },
            { id: 3, text: "c) Um kit de maquiagem.", correct: false },
            { id: 4, text: "d) Um kit de jardinagem.", correct: false }
        ]
    },
    {
        statement: "Onde você deve descartar lixo e objetos que foram atingidos pela enchente?",
        answers: [
            { id: 1, text: "a) Na rua, para a água levar. ", correct: false },
            { id: 2, text: "c) Dentro de casa, para secar.", correct: false },
            { id: 3, text: "d) Queimar os objetos danificados.", correct: false },
            { id: 4, text: "d) Em sacos plásticos bem fechados, aguardando a coleta.", correct: true }
        ]
    },
    {
        statement: "É seguro usar a rede elétrica logo após a água da enchente baixar?",
        answers: [
            { id: 1, text: "a) Sim, a água limpa não oferece perigo. ", correct: false },
            { id: 2, text: "b)  Sim, se você secar bem os fios.", correct: false },
            { id: 3, text: "Não, é preciso que um profissional verifique a segurança da instalação.", correct: true },
            { id: 4, text: "d) Apenas para carregar o celular.", correct: false }
        ]
    },
    {
        statement: "O que você deve fazer se precisar evacuar sua casa?",
        answers: [
            { id: 1, text: "a) Levar o máximo de objetos que conseguir. ", correct: false },
            { id: 2, text: "b) Sair rapidamente, sem avisar ninguém.", correct: false },
            { id: 3, text: "c)  Esperar a água baixar para sair.", correct: false },
            { id: 4, text: "d) Levar apenas o essencial e avisar vizinhos e familiares para onde você vai.", correct: true }
        ]
    },
    {
        statement: "Qual o número de emergência que você deve ligar em caso de enchente grave?",
        answers: [
            { id: 1, text: "a) 190 (Polícia Militar). ", correct: false },
            { id: 2, text: "b) 192 (SAMU).", correct: false },
            { id: 3, text: "c) 193 (Corpo de Bombeiros).", correct: false },
            { id: 4, text: "d) 199 (Defesa Civil) ou 193 (Corpo de Bombeiros).", correct: true }
        ]
    },
]

const questao = document.getElementById('questao');
const answersBtn = document.querySelector('.quests');
const nextQuest = document.getElementById('next-btn')

let indexQuestaoAtual = 0;
let score = 0;

function startQuiz() {
    indexQuestaoAtual = 0;
    score = 0;

    nextQuest.innerHTML = "Avançar";
    showQuest();
}

function resetState(){
    nextQuest.style.display = "none";
    while (answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    }
}

function showQuest() {
    resetState();
let questaoAtual = quests[indexQuestaoAtual];
let defaultQuest  = indexQuestaoAtual + 1;
questao.innerHTML = defaultQuest + ". " + questaoAtual.statement
    questaoAtual.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id
        button.classList = "btn";
        button.addEventListener("click", selectAnswer);
        answersBtn.appendChild(button)
    })

}

function selectAnswer(e){
    answers = quests[indexQuestaoAtual].answers;

    const answerCorreta = answers.filter((answer) => answer.correct == true)[0]

    const selectBtn = e.target;
    const corret = selectBtn.dataset.id == answerCorreta.id;


    if (corret){
        selectBtn.classList.add("correct")
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answersBtn.children).forEach((button)=>{
        button.disabled = true;
    });

    nextQuest.style.display = "block"

}

function showScore(){
    resetState();
    questao.innerHTML = `Você acertou ${score} de ${quests.length}`;
    nextQuest.innerHTML = "Jogar Novamente";
    nextQuest.style.display = "block";

}

function handleNextButton() {
    indexQuestaoAtual++;
    if(indexQuestaoAtual < quests.length){
        showQuest();
    }else{
        showScore();
    }
  }

nextQuest.addEventListener("click", () =>{
    if (indexQuestaoAtual < quests.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()