export const printQuestions =( arrayQuestions, main__questions) =>{
    
    
    let html = '';
    arrayQuestions.map(question =>{
        html += `
            <section class="question__container" data-id ="${question.id}">

                <div class="question__text">

                    <div class="question__id">
                        <p>${question.id}.-</p>
                    </div>
                    <div class="question">
                        <p>${question.question}</p>
                    </div>
                </div>
                
                <div class="question__radioButtons">
                    <div class="answer">
                        <label for="one">Siempre</label>
                        <input checked type="radio" value="1" name ="${question.id}">
                    </div>
                    <div class="answer">
                        <label for="two">Casi siempre</label>
                        <input type="radio" value="2" name ="${question.id}">
                    </div>
                    <div class="answer">
                        <label for="three">Algunas veces</label>
                        <input type="radio" value="3" name ="${question.id}">
                    </div>
                    <div class="answer">
                        <label for="four">Casi nunca</label>
                        <input type="radio" value="4" name ="${question.id}">
                    </div>
                    <div class="answer">
                        <label for="five">Nunca</label>
                        <input type="radio" value="5" name ="${question.id}">
                    </div>
                </div>
                
            </section>
        `;
    })
    main__questions.innerHTML += html;
    
}