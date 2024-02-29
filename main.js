'use strict'

const btn = document.getElementById('omikuji');
let question= [["山形の県庁は？","1.東根市","2.山形市","3.彦根市","3"],
["山形の県庁は？","1.東根市","2.山形市","3.彦根市","1"],
["山形の県庁は？","1.東根市","2.山形市","3.彦根市","2"]];

btn.addEventListener('click', function() {
    const result = ['大吉','中吉','小吉','吉','凶','大凶'];
    const number = Math.floor(Math.random() * result.length);
    btn.textContent = result[number];
});
//console.log(quesiton[0][0]);

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let correct = 0;
let quizCnt = 0;
function quizSet(){
    quiz.textContent = question[quizCnt][0];
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
}
quizSet();

function answerCheck(ans){
   if(ans == question[quizCnt][4]) {
      alert("正解!!");
      correct++;
   } else {
    alert("不正解");
   }
   quizCnt++
   if(quizCnt == question.length) {
    quiz.textContent = `正解数は${correct}でした!`;
    ans1.textContent = "";
    ans2.textContent = "";
    ans3.textContent = "";
   } else {
    quizSet();
   }
}
