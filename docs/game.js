let questions = [
  { question: "Qual destes é uma grande inovação tecnológica recente?", options: ["DVD", "Streaming", "Internet", "Inteligência Artificial"], answer: "Inteligência Artificial" },
  { question: "Qual destes é um aplicativo reconhecido de monitoramento de saúde?", options: ["WhatsApp", "Apple Music", "Samsung Health", "Instagram"], answer: "Samsung Health" },
  { question: "Qual é a linguagem de programação usada para estilizar páginas web?", options: ["HTML", "Python", "CSS", "JavaScript"], answer: "CSS" },
  { question: "Qual empresa desenvolveu o sistema operacional Android?", options: ["Google", "Apple", "Microsoft", "Samsung"], answer: "Google" },
  { question: "Qual é a principal função do software antivírus?", options: ["Limpar o disco rígido", "Proteger contra vírus e malware", "Otimizar a memória RAM", "Melhorar a velocidade da internet"], answer: "Proteger contra vírus e malware" },
  { question: "O que significa 'www' em uma URL de um site?", options: ["Web World Wide", "World Website Web", "World Wide Web", "Web World Website"], answer: "World Wide Web" },
  { question: "Quais dos seguintes dispositivos ou sistemas operacionais oferecem funcionalidades de envio de mensagens de emergência?", options: ["iPhones apenas", "Android apenas", "Ambos iPhones e Android", "Apenas smartwatches", "Nenhum dos mencionados acima"], answer: "Ambos iPhones e Android" }
];
let currentQuestion = 0;
let score = 0;
function showQuestion() {
  let questionText = document.getElementById("question-text");
  let options = document.querySelectorAll(".opcao");
  questionText.textContent = questions[currentQuestion].question;
  let i = 0;
  options.forEach(option => {
    option.textContent = questions[currentQuestion].options[i];
    option.style.backgroundColor = "";
    i++;
  });
}
function checkAnswer(button) {
  let selectedOption = button.textContent;
  let correctAnswer = questions[currentQuestion].answer;
  let isCorrect = selectedOption === correctAnswer;
  let options = document.querySelectorAll(".opcao");
  options.forEach(option => {
    option.disabled = true;
    if (option.textContent === correctAnswer) {
      option.style.backgroundColor = "#5ba0eb";
    }
    if (option.textContent === selectedOption && !isCorrect) {
      option.style.backgroundColor = "#FF0000";
    }
  });
  document.getElementById("enviar").disabled = false;
  if (isCorrect) score++;
}
function nextQuestion() {
  let options = document.querySelectorAll(".opcao");
  options.forEach(option => {
    option.style.backgroundColor = "#e79696";
    option.disabled = false;
  });
  document.getElementById("enviar").disabled = true;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert("Fim do Quiz. Sua pontuação: " + score + "/" + questions.length);
    currentQuestion = 0;
    score = 0;
    showQuestion();
  }
}

showQuestion();
