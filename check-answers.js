var allAnswers = [
    {"id": 1, "answer": ["first"], "points": 2},
    {"id": 2, "answer": ["second", "druga"], "points": 3},
    {"id": 3, "answer": ["third", "trzecia"], "points": 4}
];




$(document).ready(function() {
    
    $('#evaluate').click( function checkAnswers() {
    
        var userAnswer = $('input[name=input1]').val();    
        
        for (var i=0; i<allAnswers[1].answer.length; i++ ) {
            
            if (userAnswer === allAnswers[1].answer[i] ) {
                $('.score-color').addClass("correctAnswer");
                $('.score').text(allAnswers[1].points);
                break;
            }
        
            else {
                $('.score-color').addClass("wrongAnswer");
                $('.score').text('0');
            }
        }

    });
});