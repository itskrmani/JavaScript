
const quizDB = [
    {
    "question": "What is the scientific name of a butterfly?",
    "answers": [
    "Apis",
    "Coleoptera",
    "Formicidae",
    "Rhopalocera"
    ],
    "correctIndex": 3
    },
    {
    "question": "How hot is the surface of the sun?",
    "answers": [
    "1,233 K",
    "5,778 K",
    "12,130 K",
    "101,300 K"
    ],
    "correctIndex": 1
    },
    {
    "question": "Who are the actors in The Internship?",
    "answers": [
    "Ben Stiller, Jonah Hill",
    "Courteney Cox, Matt LeBlanc",
    "Kaley Cuoco, Jim Parsons",
    "Vince Vaughn, Owen Wilson"
    ],
    "correctIndex": 3
    },
    {
    "question": "What is the capital of Spain?",
    "answers": [
    "Berlin",
    "Buenos Aires",
    "Madrid",
    "San Juan"
    ],
    "correctIndex": 2
    },
    {
    "question": "What are the school colors of the University of Texas at Austin?",
    "answers": [
    "Black, Red",
    "Blue, Orange",
    "White, Burnt Orange",
    "White, Old gold, Gold"
    ],
    "correctIndex": 2
    },
    {
    "question": "What is 70 degrees Fahrenheit in Celsius?",
    "answers": [
    "18.8889",
    "20",
    "21.1111",
    "158"
    ],
    "correctIndex": 2
    },
    {
    "question": "When was Mahatma Gandhi born?",
    "answers": [
    "October 2, 1869",
    "December 15, 1872",
    "July 18, 1918",
    "January 15, 1929"
    ],
    "correctIndex": 0
    },
    {
    "question": "How far is the moon from Earth?",
    "answers": [
    "7,918 miles (12,742 km)",
    "86,881 miles (139,822 km)",
    "238,400 miles (384,400 km)",
    "35,980,000 miles (57,910,000 km)"
    ],
    "correctIndex": 2
    },
    {
    "question": "What is 65 times 52?",
    "answers": [
    "117",
    "3120",
    "3380",
    "3520"
    ],
    "correctIndex": 2
    },
    {
    "question": "How tall is Mount Everest?",
    "answers": [
    "6,683 ft (2,037 m)",
    "7,918 ft (2,413 m)",
    "19,341 ft (5,895 m)",
    "29,029 ft (8,847 m)"
    ],
    "correctIndex": 3
    },
    {
    "question": "When did The Avengers come out?",
    "answers": [
    "May 2, 2008",
    "May 4, 2012",
    "May 3, 2013",
    "April 4, 2014"
    ],
    "correctIndex": 1
    },
    {
    "question": "What is 48,879 in hexidecimal?",
    "answers": [
    "0x18C1",
    "0xBEEF",
    "0xDEAD",
    "0x12D591"
    ],
    "correctIndex": 1
    }
]

// fetching information from the indexedDB.html document
const ques = document.querySelector('.question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')



let quescount = 0;
let score = 0;
console.log(quizDB.length)

const loadQuestion = () => {

    const queslist = quizDB[quescount];
    ques.innerText = queslist.question;

    option1.innerText = queslist.answers[0];
    option2.innerText = queslist.answers[1];
    option3.innerText = queslist.answers[2];
    option4.innerText = queslist.answers[3];

}

loadQuestion()

const answers = document.querySelectorAll('.ans');

const showScore = document.querySelector('#showScore');

const inner = document.querySelector('.myq')

const getCheckAns=() => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
            // console.log(answer);
        }
        
    });
    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}       // to remove the previous selected answer

submit.addEventListener('click', () => {
    const checkans = getCheckAns();
    console.log(checkans);
    if(checkans == "ans1"){
        uttar = 1;
    }
    if(checkans == "ans2"){
        uttar = 2;
    }
    if(checkans == "ans3"){
        uttar = 3;
    }
    if(checkans == "ans4"){
        uttar = 4;
    }
    if(uttar === quizDB[quescount].correctIndex){
        score++;
        // console.log(score)
    };
    quescount++;
    // console.log(quescount)
    deselectAll();
    if(quescount < quizDB.length){
        loadQuestion();
    }else{
        // console.log(quescount);
        inner.innerHTML = "";

        showScore.innerHTML= `<h3>Your Score is ${score}/${quizDB.length}  </h3>
        <button class = "btn" onclick = "location.reload()">PLAY AGAIN </button>   

        `;    // to reload the page, will restart the quiz

        showScore.classList.remove('scoreArea');  // remove css named scoreArea

        }
});

// console.log(score)