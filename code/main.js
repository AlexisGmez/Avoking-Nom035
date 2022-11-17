"use strict";
import { comments, options, questionPartThree, questionPartTwo, questions } from "../data/data.js";
import { printQuestions } from "./components/printQuestions.js";
import { validation } from "./components/requestValidation.js";


const arrayQuestions = [...questions];
const arrayQuestionsTwo = [...questionPartTwo];
const arrayQuestionsThree = [...questionPartThree];

const optionsQuestions = [...options];

const send = document.querySelector('.button__send');
const form = document.getElementById('form');

const main__questions =document.querySelector('.main__questions');
let cheked = [];


document.addEventListener('DOMContentLoaded',e=>{
    
    printQuestions(arrayQuestions, main__questions); 
    addQuestionValidation(optionsQuestions[0]);
    
    const questionBlock = document.querySelector('.question__block--options1');
    

    questionBlock.addEventListener('click',e=>{
        e.preventDefault();
        
        if (e.target.getAttribute("data-id")=== "1-si" ) {

            printQuestions(arrayQuestionsTwo,main__questions);
            document.querySelector('.question__block--options1').style.visibility = "hidden";
            addQuestionValidation(optionsQuestions[1],2);
            const questionBlock2 = document.querySelector('.question__block--options2');
            clickEvent(questionBlock2);

        }

        if (e.target.getAttribute("data-id")=== "1-no"){

            document.querySelector('.question__block--options1').style.visibility = "hidden";
            addQuestionValidation(optionsQuestions[1],2);
            const questionBlock2 = document.querySelector('.question__block--options2');
            clickEvent(questionBlock2);

        } 
    });  
    
});

//Agrega las preguntas espesificas en caso de ser verdadero
const clickEvent = (buttons) =>{

    buttons.addEventListener('click', e=>{

        e.preventDefault();
        if (e.target.getAttribute("data-id")=== "2-si" ) {

            printQuestions(arrayQuestionsThree, main__questions);
            document.querySelector('.question__block--options2').style.visibility = "hidden";    

        }

        if (e.target.getAttribute("data-id")=== "2-no") document.querySelector('.question__block--options2').style.visibility = "hidden";
    });

}

//obtiene los datos de las respuestas de las preguntas
const getData = () =>{ 

    send.addEventListener('click', ()=>{    
        
        Swal.fire({
            icon: 'question',
            title: 'Esta seguro de terminar la encuesta?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',

            }
          }).then((result) => {
            if (result.isConfirmed) {

                putCheked(0,64)
                putCheked(64,68)
                putCheked(68,72)
                cheked = validation(cheked,form);
            }
        })
      
    });
    
}


//Agrega a un array con las respuestas chekeadas
const putCheked = ( start , end) =>{

    for (let i = start ; i < end; i++) { 

        const radioRequest = document.querySelectorAll(`input[name="${i+1}"]:checked`);
    
        radioRequest.forEach(( { value, name } ) =>{

            cheked.push({question: name, value: value})
            
        });
    }
}

//Agrega las preguntas espesificas
const addQuestionValidation = (optionQuestion,num=1) =>{
    
    return main__questions.innerHTML += `<div class="question__block">
                                                <div class="question__block--text">
                                                    <h3>${optionQuestion.option}</h3>
                                                </div>
                                                <div class="btn__container question__block--options${num}">
                                                    <button data-id='${optionQuestion.id}-si' class= 'btn button__si' > Si </button>
                                                    <button data-id='${optionQuestion.id}-no' class= 'btn button__no' > No </button>
                                                </div>
                                        </div>`;
};


getData();

